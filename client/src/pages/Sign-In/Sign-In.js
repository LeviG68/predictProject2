import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";


class SignIn extends Component {

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    handleFormSubmit = event => {
      event.preventDefault();
      console.log(this);
      
    //   if (this.state.title && this.state.author) {
    //     API.saveBook({
    //       title: this.state.title,
    //       author: this.state.author,
    //       synopsis: this.state.synopsis
    //     })
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   }
    };

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
            <h1>Sign Up</h1>
            <Input
              value={this.SignUpusername}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Username (required)"
            />
            <Input
              value={this.SignUpPassword}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Password (required)"
            />
            <FormBtn
              // disabled={!(this.status.SignUpPassword && this.SignUpusername)}
              onClick={this.handleFormSubmit}
            >
              Sign Up
            </FormBtn>
          </Col>
          <Col size="md-6 sm-12">
            <h1>Sign In</h1>
            <Input
              value={this.SignInUsername}
              onChange={this.handleInputChange}
              name="sign-up-username"
              placeholder="Username (required)"
            />
            <Input
              value={this.SignInPassword}
              onChange={this.handleInputChange}
              name="sign-in-password"
              placeholder="Password (required)"
            />
            <FormBtn
              // disabled={!(this.SignInPassword && this.state.SignInUsername)}
              onClick={this.handleFormSubmit}
            >
              Sign In
            </FormBtn>
          </Col>
        </Row>
      </Container>  
    );
  }
}

export default SignIn;