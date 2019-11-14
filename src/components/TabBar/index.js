import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {Flex} from "antd-mobile";
import Images from '../../utils/image';
import './index.scss';

const TABS = {
  INDEX: '/',
  RESULT: '/result',
  FOLLOW: '/follow',
  LOTTERY: '/lottery',
  PERSONAL: '/personal',
};
const SELECTED_CLASS = 'selected';

@withRouter
class Index extends Component {
  state = {
    current: TABS.INDEX,
  };

  transfer = path => () => {
    this.setState({
      current: path,
    });

    const {history} = this.props;
    history.push({pathname: path});
  };

  render() {
    const {location} = this.props;
    const {pathname} = location;
    return (
      <footer>
        <Flex className="self-bar" align="start">
          <div className="bar-item" onClick={this.transfer(TABS.INDEX)}>
            <div className={`icon-index${pathname === TABS.INDEX ? ` ${SELECTED_CLASS}` : ''}`}></div>
            <em>首页</em>
          </div>
          <div className="bar-item" onClick={this.transfer(TABS.RESULT)}>
            <div className={`icon-result${pathname === TABS.RESULT ? ` ${SELECTED_CLASS}` : ''}`}></div>
            <em>比分</em>
          </div>
          <div className="bar-item" onClick={this.transfer(TABS.FOLLOW)}>
            <div className="icon-follow">
              <span>
                <img src={Images.index.iconCopy}/>
              </span>
            </div>
            <em>跟单</em>
          </div>
          <div className="bar-item" onClick={this.transfer(TABS.LOTTERY)}>
            <div className={`icon-lottery${pathname === TABS.LOTTERY ? ` ${SELECTED_CLASS}` : ''}`}></div>
            <em>开奖</em>
          </div>
          <div className="bar-item" onClick={this.transfer(TABS.PERSONAL)}>
            <div className={`icon-personal${pathname === TABS.PERSONAL ? ` ${SELECTED_CLASS}` : ''}`}></div>
            <em>我的</em>
          </div>
        </Flex>
      </footer>
    );
  }
}

export default Index;
