import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Location from "../../components/Location";
import { Col, Row, Container } from "../../components/Grid";
import locations from "../../locations.json";

class Home extends Component {

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
        {locations.map(locations => (
          <Col size="md-6 sm-12">
            <Location
            image={locations.image}
            name={locations.name}
            address={locations.address}
            website={locations.website}
            />
          </Col>
        ))}
        </Row>
        <Row>
          <Col size="md-12">
            <Graph/>
          </Col>
        </Row>
      </Container> 

    );
  }
}

export default Home;