import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

class SignIn extends Component {

  render () {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Predict</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">

          </Col>
          <Col size="md-6 sm-12">

          </Col>
        </Row>
    )
  }
}

export default SignIn;