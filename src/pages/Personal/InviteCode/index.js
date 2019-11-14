import React, {Component, Fragment} from 'react';
import {Nav,Container} from '../../../components/Common';
import {Flex} from "antd-mobile";
import {withRouter} from 'react-router-dom';
import './index.scss';

@withRouter
class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Nav title="填写邀请码" onLeftClick={() => this.props.history.goBack()}/>
        <Container>
          <div className="content">
            <p className="ipt-area fs26">
              <input type="text" placeholder="请输入邀请码" maxLength="50"/>
            </p>
            <a href="javascript:void(0)" className="submit">提交</a>
          </div>
        </Container>
        {/*<div className="wrapper" style={{backgroundColor: '#fff'}}>
        </div>*/}
      </Fragment>
    );
  }
}

export default Index;
