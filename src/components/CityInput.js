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
