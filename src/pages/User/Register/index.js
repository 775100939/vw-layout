import React, {Component, Fragment} from 'react';
import {Nav, Container} from '../../../components/Common';
import {List, InputItem, Flex} from "antd-mobile";
import {createForm, formShape} from 'rc-form';
import {withRouter} from 'react-router-dom';
import Checkbox from 'rc-checkbox';
import Images from '../../../utils/image';
import 'rc-checkbox/assets/index.css';
import '../index.scss';

class Password extends Component {
  static propTypes = {
    form: formShape,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      eyeStatus: undefined,//眼睛闭
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };
  onClickEye = () => {
    const password = this.props.form.getFieldInstance('password');
    this.setState((prevState, props) => {
      const eyeStatus = prevState.eyeStatus;
      let type;
      if (eyeStatus === undefined || eyeStatus === false) {
        type = 'text';
      } else if (eyeStatus === true) {
        type = 'password';
      }
      password.type = type;
      return {
        eyeStatus: !eyeStatus
      };
    });
  };

  render() {
    const {value, eyeStatus} = this.state;
    let imgSrc;
    if (eyeStatus === undefined || eyeStatus === false) {
      imgSrc = Images.eyeClosed;
    } else if (eyeStatus === true) {
      imgSrc = Images.eyeOpened;
    }
    const {getFieldProps, getFieldDecorator, getFieldError, isFieldValidating} = this.props.form;
    return (
      <Flex className="input-item">
        <span className="ipt">
          <input type="password"
                 placeholder="请输入密码"
                 {...getFieldProps('password', {
                   initialValue: value,
                   onChange: this.onChange,
                   rules: [
                     {required: true}
                   ]
                 })}/>
          {/*{getFieldDecorator('password', {
            initialValue: {abc},
            onChange: this.onChange,
            rules: [
              {required: true}
            ]
          })(<input type="text" placeholder="请输入密码"/>)}*/}
        </span>
        <span className="img">
          {
            value.length > 0 && <img src={imgSrc} onClick={this.onClickEye}/>
          }
          </span>
      </Flex>)
  }
}

@withRouter
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  onChange = (e) => {
    const checked = e.target.checked;
    this.setState({checked});
  };

  goRegister = () => {
    const {history} = this.props;
    history.push({pathname: '/register'});
  };

  render() {
    const {checked} = this.state;
    const {form} = this.props;
    const {getFieldDecorator} = form;
    return (
      <Fragment>
        <Nav title="注册" onLeftClick={() => this.props.history.goBack()}/>
        <Container>
          <div className="user-sec">
            <form onSubmit={this.onSubmit}>
              <Flex className="input-item">
                <div className="ipt">
                  {getFieldDecorator('userName', {
                    rules: [
                      {required: true}
                    ]
                  })(<input type="text" placeholder="请输入手机号"/>)}
                </div>
              </Flex>
              <Flex className="input-item verify-code" justify="between">
                <div className="ipt">
                  {getFieldDecorator('verifycode', {
                    rules: [
                      {required: true}
                    ]
                  })(<input type="text" placeholder="请输入验证码"/>)}
                </div>
                <div className="get-code">
                  <button type="button">获取验证码</button>
                </div>
              </Flex>
              <Password form={form}/>
              <Flex className="input-item invite-code" justify="between">
                <div className="ipt">
                  {getFieldDecorator('invitecode', {
                    rules: [
                      {required: true}
                    ]
                  })(<input type="text" placeholder="请填写邀请码"/>)}
                </div>
                <div className="get-code">
                  <label className="self-checkbox">
                    <Checkbox
                      checked={checked}
                      onChange={this.onChange}
                      disabled={false}
                    />
                    &nbsp;请输入邀请码
                  </label>
                </div>
              </Flex>
              <Flex className="check-item" justify="between">
                <label className="self-checkbox">
                  <Checkbox
                    checked={checked}
                    onChange={this.onChange}
                    disabled={false}
                  />
                  &nbsp;我已年满18周岁并同意<a className="protocol" href="">《用户协议》</a>
                </label>
              </Flex>
              <div className="buttons">
                <button className="login" type="button">完成</button>
              </div>
            </form>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default createForm()(Index);
