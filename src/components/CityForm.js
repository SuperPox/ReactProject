import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap'

export class CityForm extends Component {
    
    handleClick(event) {
        console.log("click")
    }
    
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="cityInput">
                        <Form.Control type="email" placeholder="eg. Denver" />
                    </Form.Group> 
                </Form>                
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-6">
                            <Button onClick={this.handleClick}
                                variant="primary" size="sm" type="submit">Submit</Button>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}

export default CityForm
