import React, { Component } from 'react';

class City extends Component {

  handleOnClick = () => {
    this.props.deleteCity(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>
            ❌
        </button>
      </div>
    )
  }
};

export default City;