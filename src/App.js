import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'

import CityContainer from './components/CityContainer'

import CitiesContainer from './components/CitiesContainer'

/*
class App extends React.Component {
  render () {   
    return (
      <div className= "App">
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <h2>myColoradoForecast</h2>
          </Row>
        </Container>
              
        <Container fluid="md">
          <CityContainer/>
        </Container>


        <Container fluid="md">
          ALT
          <CitiesContainer />
        </Container>
        
      </div>
    )
  }
}
*/


function App() {
  return (
    <div className= "App">
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <h2>myColoradoForecast</h2>
        </Row>
      </Container>
            
      <Container fluid="md">
        <CityContainer/>
      </Container>


      <Container fluid="md">
        ALT
        <CitiesContainer />
      </Container>   
  </div>
  )
}



export default App;