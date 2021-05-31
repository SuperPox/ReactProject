import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import CityStateForm from './CityStateForm'

export class CityContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityName: "",
            stateName: ""
        }
        this.updateSearch = this.updateSearch.bind(this)
    }


    updateSearch(city, state) {
        this.setState({cityName: city, stateName: state})
    }


    render() {
        return (
            <div>
                <Container className='mb-3' style={{ color: "#111"}}>
                    <CityStateForm sendData={this.updateSearch}/>
                    {this.state.cityName} {this.state.stateName}
                </Container>
                
                
            </div>
        )
    }
}

export default CityContainer
