import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import Images from './utils/image';
import {
  themeColor
} from "./constants/theme-color";
import './css/tab.scss';
import Index from './pages/Index';
import Result from './pages/Result';
import Follow from './pages/Follow';
import Lottery from './pages/Lottery';
import Personal from './pages/Personal';

const TABS = {
  INDEX: '/',
  RESULT: '/result',
  FOLLOW: '/follow',
  LOTTERY: '/lottery',
  PERSONAL: '/personal',
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: TABS.PERSONAL,
    };
  }

  render() {
    const {history, location} = this.props;
    const {pathname} = location;
    console.log(pathname, pathname === TABS.INDEX, pathname === TABS.RESULT, pathname === TABS.FOLLOW, pathname === TABS.LOTTERY, pathname === TABS.PERSONAL,)

    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar
          unselectedTintColor="#666"
          tintColor={themeColor}
          barTintColor="#f5f5f5"
          /**
          * 没用router以前，设置为大于0的数，就加载相邻几个页面的数据，
          * 用了router后，设置为大于0的数，就加载当前页面的数据，一直没参透
          */
          prerenderingSiblingsNumber={4}
        >
          <TabBar.Item
            title="首页"
            key={TABS.INDEX}
            icon={<div className="icon-index"/>}
            selectedIcon={<div className="icon-index selected"/>}
            selected={pathname === TABS.INDEX}
            onPress={() => {
              history.push({pathname: TABS.INDEX});
            }}
          >
            {pathname === TABS.INDEX ? <Index/> : null}
          </TabBar.Item>
          <TabBar.Item
            title="比分"
            key={TABS.RESULT}
            icon={<div className="icon-result"/>}
            selectedIcon={<div className="icon-result selected"/>}
            selected={pathname === TABS.RESULT}
            onPress={() => {
              history.push({pathname: TABS.RESULT});
            }}
          >
            {pathname === TABS.RESULT ? <Result/> : null}
          </TabBar.Item>
          <TabBar.Item
            title="跟单"
            key={TABS.FOLLOW}
            icon={
              <div className="icon-follow">
                <span>
                  <img src={Images.index.iconCopy}/>
                </span>
              </div>}
            selectedIcon={<div className="icon-follow">
                <span>
                  <img src={Images.index.iconCopy}/>
                </span>
            </div>}
            selected={pathname === TABS.FOLLOW}
            onPress={() => {
              history.push({pathname: TABS.FOLLOW});
            }}
          >
            {pathname === TABS.FOLLOW ? <Follow/> : null}
          </TabBar.Item>
          <TabBar.Item
            title="开奖"
            key={TABS.LOTTERY}
            icon={<div className="icon-lottery"/>}
            selectedIcon={<div className="icon-lottery selected"/>}
            selected={pathname === TABS.LOTTERY}
            onPress={() => {
              history.push({pathname: TABS.LOTTERY});
            }}
          >
            {pathname === TABS.LOTTERY ? <Lottery/> : null}
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key={TABS.PERSONAL}
            icon={<div className="icon-personal"/>}
            selectedIcon={<div className="icon-personal selected"/>}
            selected={pathname === TABS.PERSONAL}
            onPress={() => {
              history.push({pathname: TABS.PERSONAL});
            }}
          >
            {pathname === TABS.PERSONAL ? <Personal/> : null}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Layout;
