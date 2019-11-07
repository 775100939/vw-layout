import axios from 'axios';
import {isEmpty} from 'lodash';
import {message, Modal} from 'antd';
import {BASE_URL} from "./constant";
import {Encrypt} from "./aes";
import qs from 'qs';

//创建实例 axios 拦截器只能添加到实例上
let _httpClient = axios.create({
  baseURL: BASE_URL,
});
// 添加请求拦截器
_httpClient.interceptors.request.use((config) => {
  return config;
}, (error) => {
  // message.error({message: '请求超时!'});
  return Promise.reject(error);
});
_httpClient.interceptors.response.use((response) => {
  return response;
}, (err) => {
  return Promise.reject(err);
});

/**
 * http 包装
 */
export const httpClient = {
  attachParamsStr: null,
  attachParamsMap: new Map([
    ['c', '0'],
    ['n', '马甲包_Id'],
    ['v', '1.0'],
  ]),
  attachParamsObj: {
    c: 0,
    n: '马甲包_Id',
    v: '1.0'
  },
  encryptBusinessParams(params) {
    const attach = [];
    let businessStr;
    for (const key in params) {
      attach.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
    }
    businessStr = attach.join('&');
    return Encrypt(businessStr);
  },

  request(params) {
    let businessParams,
      newParams;
    /*if (this.attachParamsStr === null) {
      this.attachParamsStr = this.attachRegularParams();
    }*/
    newParams = this.attachParamsObj;
    if (!isEmpty(params.queryParams)) {
      businessParams = this.encryptBusinessParams(params.queryParams);
      newParams = Object.assign({}, newParams, {s: businessParams});
      //newParams = Object.assign({}, newParams, params.queryParams);
    } else {
      newParams = Object.assign({}, newParams, {s: ''});
    }

    _httpClient = Object.assign({}, _httpClient, {
      headers: {
        'Content-Type': params.method.toUpperCase() === 'PATCH' ? 'application/json-patch+json' : 'application/x-www-form-urlencoded',
      },
    });
    //apiUrl = `${params.url}?${this.attachParamsStr}&s=${businessParams}`;

    //_httpClient.defaults.headers.common['Authorization'] = `Bearer ${isToken()}`;
    let request;
    switch (params.method) {
      case 'GET':
        request = _httpClient.get(params.url, {params: newParams});
        break;
      case 'POST':
        request = _httpClient.post(params.url, qs.stringify(newParams));
        break;
      case 'PUT':
        request = _httpClient.put(params.url, params.body, {params: params.queryParams});
        break;
      case 'PATCH':
        request = _httpClient.patch(params.url, params.body, {params: params.queryParams});
        break;
      case 'DELETE':
        request = _httpClient.delete(params.url, params.body);
        break;

      default:
        throw new Error('Method not supported');
    }
    return request.then(response => {
      typeof params.success === 'function' && params.success(response.data);
    }).catch((err) => {
      responseError(err);
    });
  },

  get(params) {
    params.method = 'GET';
    return this.request(params);
  },

  post(params) {
    params.method = 'POST';
    return this.request(params);
  },

  delete(params) {
    params.method = 'DELETE';
    return this.request(params);
  },

  put(params) {
    params.method = 'PUT';
    return this.request(params);
  },
  patch(params) {
    params.method = 'PATCH';
    return this.request(params);
  }
};

const responseError = (err) => {
  if (err && err.response) {
    const res = err.response.data;
    switch (err.response.status) {
      case 400:
        message.error(`参数错误`);
        alert(`400!!! 参数错误: \n\n原因：${res.title}\n详情：${JSON.stringify(res.errors)}`);
        break;
      case 401:
        message.error('未授权，请登录!');
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);
        break;
      case 403:
        message.error('拒绝访问');
        alert('拒绝访问');
        break;
      case 404:
        message.error('请求地址出错');
        alert('请求地址出错');
        break;
      case 408:
        message.error('请求超时');
        alert('请求超时!!');
        break;
      case 500:
      case 504:
        message.error('服务器被吃了⊙﹏⊙∥ : ');
        alert(`状态：500!!! 服务器被吃了⊙﹏⊙∥\n\n原因：${res.message}`);
        break;
      default:
    }
  }
};

export const popupErrors = (response) => {
  if (response.ResponseStatus !== 200) {
    Modal.error({
      title: '提示',
      content: response.ResponseMsg,
    });
    return true;
  }
  return false;
};
