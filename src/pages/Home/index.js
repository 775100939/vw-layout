import React, {Component, Fragment} from 'react';
import {Nav, Container, CellPhone, CusService,} from "../../components/Common";
import {
  appName,
  tel
} from "../../constants/common";
import Images from '../../utils/image';
import './index.scss';
import {Flex} from "antd-mobile";
import TabBar from '../../components/TabBar';

class Index extends Component {
  render() {
    console.log("1")
    return (
      <div className="app-container">
          <Nav leftContent={<span className="download"><img src={Images.index.download}/>{appName}</span>}
               rightContent={
                 <Fragment>
                   <CusService/>
                   <CellPhone/>
                 </Fragment>
               }
          />
          <Container>

          </Container>
          <TabBar/>
      </div>
    );
  }
}

export default Index;
