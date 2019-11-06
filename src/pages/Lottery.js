import React, {Component, Fragment} from 'react';
import {Nav, CusService, Message} from "../components/Common";
import {BalanceOption, Page} from "../components/Personal";
import {withRouter} from 'react-router-dom';
import {Flex} from "antd-mobile";
import Images from '../utils/image';
import '../css/personal.scss';

/*@withRouter*/
class Lottery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {history} = this.props;
    console.log("4")
    return (
      <Fragment>
        <Nav title="开奖"/>
        <div className="wrapper">
        </div>
      </Fragment>
    );
  }
}

export default Lottery;
