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
        <div className="ipt">
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
        </div>
        <div className="img">
          {
            value.length > 0 && <img src={imgSrc} onClick={this.onClickEye}/>
          }
          </div>
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
    const {form} = this.props
    const {getFieldDecorator} = form;
    return (
      <Fragment>
        <Nav title="登录" onLeftClick={() => this.props.history.goBack()}/>
        <Container>
          <div className="user-sec">
            <form onSubmit={this.onSubmit}>
              <Flex className="input-item">
                <div className="ipt">
                  {getFieldDecorator('userName', {
                    rules: [
                      {required: true}
                    ]
                  })(<input type="text" placeholder="请输入用户名/手机号码"/>)}
                </div>
              </Flex>
              <Password form={form}/>
              <Flex className="check-item" justify="between">
                <label className="self-checkbox">
                  <Checkbox
                    checked={checked}
                    onChange={this.onChange}
                    disabled={false}
                  />
                  &nbsp;自动登录
                </label>
                <span className="forgot">忘记密码?</span>
              </Flex>
              <div className="buttons">
                <button className="login" type="button">登录</button>
                <button className="register" type="button" onClick={this.goRegister}>新用户注册</button>
              </div>
            </form>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default createForm()(Index);
