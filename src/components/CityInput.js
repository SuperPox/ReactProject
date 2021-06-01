import React, { Component } from 'react'

export class CityInput extends Component {
    state = {
        cityName: ''
    }

    handleOnChange(event) {
        this.setState({
            cityName: event.target.value,
        })
    }

    handleOnSubmit(event) {
        event.preventDefault()
        this.props.addCity(this.state.cityName)
        this.setState({
            cityName: '',
        })

        // POST TO API
        const body = {city: this.state.cityName}
        fetch("http://localhost:3000/cities", {
            method: "POST",
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(r => r.json())      
        //.then(city => this.props.sendData(city)) 


    }
   
    
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                        type="text"
                        value={this.state.cityName}
                        onChange={(event) => this.handleOnChange(event)} 
                    />
                    <input 
                        type="submit"
                    />
                </form>
            </div>
        )
    }
}

export default CityInput
