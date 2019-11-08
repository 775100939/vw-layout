import React, {Component, Fragment} from 'react';
import {Nav, Container, CusService, Message,} from "../components/Common";
import {BalanceOption, Page} from "../components/Personal";
import {withRouter} from 'react-router-dom';
import {Flex} from "antd-mobile";
import Images from '../utils/image';
import '../css/personal.scss';

const options = [
  {key: 1, cls: "my-order", title: "购彩记录", imgSrc: Images.personal.myOrder, pathname: '/personal/invitecode',},
  {key: 2, cls: "connect", title: "关联店主", imgSrc: Images.personal.connect, pathname: '/personal/invitecode',},
  {key: 3, cls: "switch-role", title: "切换角色", imgSrc: Images.personal.switchRole, pathname: '/personal/invitecode',},
  {key: 4, cls: "booking", title: "定制投注", imgSrc: Images.personal.booking, pathname: '/personal/invitecode',},
  {key: 5, cls: "activity", title: "活动中心", imgSrc: Images.personal.activity, pathname: '/personal/invitecode',},
  {key: 6, cls: "security", title: "安全中心", imgSrc: Images.personal.security, pathname: '/personal/invitecode',},
  {key: 7, cls: "invite-code", title: "邀请码", imgSrc: Images.personal.inviteCode, pathname: '/personal/invitecode',},
  {key: 8, cls: "score", title: "积分管理", imgSrc: Images.personal.score, pathname: '/personal/invitecode',},
  {key: 9, cls: "feedback", title: "用户反馈", imgSrc: Images.personal.feedback, pathname: '/personal/invitecode',},
  {key: 10, cls: "setting", title: "设置", imgSrc: Images.personal.setting, pathname: '/personal/invitecode',},
];

@withRouter
class Personal extends Component {
  constructor(props) {
    super(props);
  }

  goLogin = () => {
    const {history} = this.props;
    history.push({pathname: '/login'});
  };

  render() {
    const {history} = this.props;
    console.log("5")
    return (
      <Fragment>
        <Nav leftContent={<div></div>}
             rightContent={
               <Fragment>
                 <CusService/>
                 <Message/>
               </Fragment>
             }
             cls="this-nav-bg"
        />
        <Container cls="this-bg">
          <div className="user-infor">
            <div className="top">
              <Flex className="login-infor">
                <div className="user-head">
                  <a href="javascript:void(0)" className="avatar">
                    <label>Hi，你好</label>
                    <img src={Images.personal.unLogin}
                         alt="立即登录/注册"
                         title="立即登录/注册"/>
                  </a>
                </div>
                <div className="user-name"><a href="javascript:void(0)" onClick={this.goLogin}>立即登录&nbsp;/&nbsp;注册</a>
                </div>
              </Flex>
              <Flex className="assets fs28">
                <div className="fonts total-money">
                  <p className="fs24">当前总资产<i className="ico eye" id="sd"></i>
                  </p>
                  <p>
                    <i>￥</i><cite className="fs40" data-cp="0.00">0.00</cite>
                  </p>
                </div>
                <Flex className="chongti" justify="around">
                  <a className="chongzhi" href="/user/recharge">充值</a>
                  <a className="tixian" href="/user/drawings">提现</a>
                </Flex>
              </Flex>
            </div>
          </div>
          <div className="balance">
            <Flex className="in-out" justify="between">
              <span className="wallet">
                  <label>我的钱包</label>
              </span>
              <span>
                  <em className="em-application">查看收支记录</em>
              </span>
            </Flex>
            <Flex className="detail">
              <BalanceOption title="冻结" money="0.00"/>
              <BalanceOption title="账户" money="0.00"/>
              <BalanceOption title="奖金" money="0.00"/>
              <BalanceOption title="红包" money="0.00"/>
            </Flex>
          </div>
          <Flex className="pages" wrap="wrap">
            {
              options.map((item, index, array) => {
                return <Page key={item.key}
                             cls={item.cls}
                             title={item.title}
                             imgSrc={item.imgSrc}
                             onClick={() => history.push({pathname: item.pathname})}/>
              })
            }
          </Flex>
        </Container>
      </Fragment>
    );
  }
}

export default Personal;
