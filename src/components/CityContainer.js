import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import CityStateForm from './CityStateForm'
import CitySingle from './CitySingle'

export class CityContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cities: []
        }
        this.updateState = this.updateState.bind(this)
    }

    // Fetching Data from API
    componentDidMount() {      
        fetch("http://localhost:3000/cities")
        .then(function(response) {
            return response.json()
        })       
        .then((citiesArray) => {
            this.setState({cities: citiesArray})
        })
    }

        
    updateState(arg) {
        this.setState((prevState, prevProps) => {
            return {cities: [...prevState.cities, arg]}
        })
    }
    

    render() {
        return (
            <div>
                <Container className='mb-3' style={{ color: "#111"}}>
                    <CityStateForm sendData={this.updateState}/>
                    <ul>
                        {this.state.cities.map((city, i) => <CitySingle key={i} city={city} />)}
                    </ul>
                </Container>               
            </div>
        )
    }
}

export default CityContainer
