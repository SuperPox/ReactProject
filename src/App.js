import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'

import CityForm from './components/CityForm'
import CityContainer from './components/CityContainer'




class App extends React.Component {
  render () {

    
    return (
      <div className= "App">

        <Container fluid="md">
          <Row className="justify-content-md-center">
            <h2>myForecast</h2>
          </Row>
          <Row className="justify-content-md-center">
            <CityForm/>
          </Row>
        </Container>
        
        
        <Container fluid="md">
          <CityContainer/>
        </Container>
        
      </div>
    )
  }
}

export default App;