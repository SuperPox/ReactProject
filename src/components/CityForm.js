import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap'

export class CityForm extends Component {

    state = {
        cityName: ""
    }
    
    handleOnChange(event) {
        this.setState({
          cityName: event.target.value,
        });
      }
    
      handleOnSubmit(event) {
        event.preventDefault();
        this.props.addCity(this.state.cityName);
        this.setState({
          cityName: '',
        });
      }
    
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="cityInput">
                        <Form.Control type="email" placeholder="eg. Denver" />
                    </Form.Group> 
                </Form> 

                <Form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        value={this.state.cityName}
                        onChange={(event) => this.handleOnChange(event)} />
                </Form>  

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-6">
                            <Button onClick={this.handleOnSubmit}
                                variant="primary" size="sm" type="submit">Submit</Button>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}

export default CityForm
