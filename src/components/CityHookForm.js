import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Button} from 'react-bootstrap'

const CityHookForm = () => {

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => console.log(data);
    const handleError = (errors) => {console.log(errors)};


    return (
        <Form onSubmit={handleSubmit(onSubmit, handleError)}>
            <FormGroup> 
                <input 
                    type="text" 
                    placeholder="eg.Denver" 
                    name="city" 
                    ref={register({required: true})}/>

                <input type="submit" />
            </FormGroup>
            <Button variant="primary" size="sm" type="submit">Submit</Button>
        </Form>
    )
}

export default CityHookForm;