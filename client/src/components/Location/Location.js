import React from "react";

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
        <a href={this.props.website} className="website"/>
        <div className = "graph">
          <span>{this.props.graph}</span>
        </div>
      </div>
    );
  }
}

export default Location;