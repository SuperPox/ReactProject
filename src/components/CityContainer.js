import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import CityStateForm from './CityStateForm'

export class CityContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cities: []
        }
        this.updateState = this.updateState.bind(this)
    }

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
        this.setState({cities: [arg] })
    }

    render() {
        return (
            <div>
                <Container className='mb-3' style={{ color: "#111"}}>
                    <CityStateForm sendData={this.updateState}/>
                    <ul>
                        {this.state.cities}
                    </ul>
                </Container>
                
                
            </div>
        )
    }
}

export default CityContainer
