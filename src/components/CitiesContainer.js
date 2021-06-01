import React, { Component } from 'react'
import CityInput from './CityInput';
import Cities from './Cities';
import { connect } from 'react-redux'

class CitiesContainer extends Component {
  render() {
    return (
      <div>
        <CityInput addCity={this.props.addCity}/>
        <Cities cities={this.props.cities} deleteCity={this.props.deleteCity}/>
      </div>
    )
  }
}

const mapStateToProps = ({ cities }) => ({ cities })

const mapDispatchToProps = dispatch => ({
  addCity: name => dispatch({ type: "ADD_CITY", name }),
  deleteCity: id => dispatch({type: "DELETE_CITY", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer)