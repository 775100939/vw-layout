import React, {Component, Fragment} from 'react';
import {Nav, Container} from '../../components/Common';
import {List, InputItem, Flex, Checkbox} from "antd-mobile";
import {createForm, formShape} from 'rc-form';
import Images from '../../utils/image';
import './index.scss';

const AgreeItem = Checkbox.AgreeItem;

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


class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {form} = this.props
    const {getFieldDecorator} = form;
    return (
      <Fragment>
        <Nav title="登录" onLeftClick={() => this.props.history.goBack()}/>
        <Container>
          <div className="login-sec">
            <form onSubmit={this.onSubmit}>
              <Flex className="input-item">
                <span className="ipt">
                  {getFieldDecorator('userName', {
                    rules: [
                      {required: true}
                    ]
                  })(<input type="text" placeholder="请输入用户名/手机号码"/>)}
                </span>
              </Flex>
              <Password form={form}/>
              <Flex className="auto-login" justify="between">
                <AgreeItem className="auto-lg" onChange={e => console.log('checkbox', e)}>
                  自动登录
                </AgreeItem>
                <span className="forgot">忘记密码?</span>
              </Flex>
            </form>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default createForm()(Index);
