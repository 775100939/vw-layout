import React, {Component, Fragment} from 'react';
import {Nav, Container, CellPhone, CusService,} from "../components/Common";
import {
  appName,
  tel
} from "../constants/common";
import Images from '../utils/image';
import '../css/index.scss';

class Index extends Component {
  render() {
    console.log("1")
    return (
      <Fragment>
        <Nav leftContent={<span className="download"><img src={Images.index.download}/><label>{appName}</label></span>}
             rightContent={
               <Fragment>
                 <CusService/>
                 <CellPhone/>
               </Fragment>
             }
        />
        <Container>

        </Container>
      </Fragment>
    );
  }
}

export default Index;
