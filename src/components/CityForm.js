import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap'

export class CityForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityName: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleOnChange = event => {
        this.setState({
          cityName: event.target.value,
        });
      }
    
      handleOnSubmit(event) {
        event.preventDefault();
        alert(`${this.state.cityName}`)
        //this.props.addCity(this.state.cityName);
        this.setState({
          cityName: '',
        });
      }

      handleOnSubmitButton = event => {
        event.preventDefault();
        alert(`${this.state.cityName}`)
      }
    
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="cityInput">
                        <Form.Control 
                            type = "text" 
                            placeholder = "eg. Denver"
                            name = 'cityName' 
                            value = {this.state.cityName}
                            onChange = {this.handleOnChange}/>
                    </Form.Group> 
                </Form> 

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-6">
                            <Button onSubmit={this.handleOnSubmitButton}
                                variant="primary" size="sm" type="submit">Submit</Button>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}

export default CityForm
