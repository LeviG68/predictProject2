import React from "react";
import C3Chart from 'react-c3js';

class Location extends React.Component {
  render() {
    return (
      <div className = "location"
      style = {{margin:"20px"}}
      >
        <img className = {"picture"} src={this.props.image} height='150px' width='150px' style={{float: "left", margin:"10px"}}/>
        <div className = "name">
          <span>{this.props.name}</span>
        </div>
        <div className = "address">
          <span>{this.props.address}</span>
        </div>
        <a href={this.props.website} className="website" target="_blank">Visit Site
        </a>
      </div>
    );
  }
}

export default Location;