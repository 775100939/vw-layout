import React, {Component, Fragment} from 'react';
import {Nav, Container, CusService, Message} from "../components/Common";
import {BalanceOption, Page} from "../components/Personal";
import {withRouter} from 'react-router-dom';
import {Flex} from "antd-mobile";
import Images from '../utils/image';

/*@withRouter*/
class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {history} = this.props;
    console.log("2")
    return (
      <Fragment>
        <Nav title="数据比分"/>
        <div className="wrapper">
        </div>
      </Fragment>
    );
  }
}

export default Result;
