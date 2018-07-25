import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SingleGraph from "../../components/SingleGraph";
import Location from "../../components/Location";
import Graph from "../../components/Graph";
import { Col, Row, Container } from "../../components/Grid";
import locations from "../../locations.json";
// import API from "../../utils/API";
// import controller from "../../../controllers";
// import C3Chart from 'react-c3js';
import 'c3/c3.css';


class Home extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Predict</h1>
              <h3>Where families go for fun!!</h3>
              <h3>Check below for the popular times at your favorite destinations!</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        {locations.map((location, index) => (
          <Col key={index} size="md-6 sm-12">
            <Location
              image={location.image}
              name={location.name}
              address={location.address}
              website={location.website}
              // graph={getLocationData.data}
            />
            <SingleGraph googleId={location.googleId}
                         location={location.type}
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