import React, {Component, Fragment} from 'react';
import {Nav, Container} from "../components/Common";
import '../css/personal.scss';

class Follow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {history} = this.props;
    console.log("33")
    return (
      <Fragment>
        <Nav title="跟单"/>
        <Container>

        </Container>
      </Fragment>
    );
  }
}

export default Follow;
