import React from 'react';
import API from "../../utils/API";
import C3Chart from 'react-c3js';
import 'c3/c3.css';



// handleFormSubmit = event => {
//   event.preventDefault();
//   this.getArticles();
// };


const BarChart = ({ data }) =>
  <C3Chart data={{ json: data, type: 'bar' }} />;

class SingleGraph extends React.Component {

  state = {
    bar: undefined
  }

  componentDidMount(){
    console.log(this.props.googleId);
    this.getData(this.props.googleId);
  };
  
  getData = (googleId) => {
    API.getLocationData(googleId, this.props.location)
      .then(({data}) => {
        this.setState({bar: {'Popular Times': data}});
      });
  };

  render() {
    return (
      <div className="singleGraph">
        {this.state.bar ? <BarChart data={this.state.bar} /> : null}
      </div>
      )}
};

export default SingleGraph;