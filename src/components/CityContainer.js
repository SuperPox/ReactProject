import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import CityStateForm from './CityStateForm'
import CitySingle from './CitySingle'
import {Route, Link} from 'react-router-dom'


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
    
    //was div instead of fragment
    //<CityStateForm sendData={this.updateState}/> was below container
    //{this.state.cities.map((city, i) =>  <CitySingle key={i} city={city} />)}

    render() {
        return (
            <React.Fragment>  
                <Route path="/cities/new" render={(routerProps) => <CityStateForm sendData={this.updateState} routerProps={routerProps}/>}/>
                <Route path="/cities">        
                    <Container className='mb-3' style={{ color: "#111"}}>                      
                        <ul>
                            {this.state.cities.map((city, i) => <CitySingle key={i} city={city} />)}
                        </ul>
                    </Container>
                </Route>               
            </React.Fragment>
        )
    }
}

export default CityContainer
