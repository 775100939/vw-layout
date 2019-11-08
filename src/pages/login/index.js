import React, {Component, Fragment} from 'react';
import {Nav, Container} from '../../components/Common';
import {List, InputItem} from "antd-mobile";
import {createForm} from 'rc-form';
import './index.scss';

@createForm()
class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {getFieldProps} = this.props.form;
    return (
      <Fragment>
        <Nav title="登录" onLeftClick={() => this.props.history.goBack()}/>
        <Container>
            <InputItem
              {...getFieldProps('input3')}
              placeholder="no label"
            />
            <InputItem
              {...getFieldProps('inputtitle2')}
              placeholder="title can be icon，image or text"
            >
              <div style={{
                backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                backgroundSize: 'cover',
                height: '22px',
                width: '22px'
              }}/>
            </InputItem>
        </Container>
      </Fragment>
    );
  }
}

export default Index;
