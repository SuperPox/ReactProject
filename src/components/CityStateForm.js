import React, { Component } from 'react'

export class CityStateForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            cityName: "",
            cityState: ""
        }
    }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.sendData(this.state.cityName, this.state.cityState)
        this.setState({cityName: ""})
        this.setState({cityState: ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                        type = "text" 
                        placeholder = "eg. City"
                        onChange = {this.handleChange.bind(this)}
                        value = {this.state.cityName}
                        name = "cityName"
                    />
                    <input 
                        type = "text" 
                        placeholder = "eg. State"
                        onChange = {this.handleChange.bind(this)}
                        value = {this.state.cityState}
                        name = "cityState"
                    />
                    <input type = "submit" />
                </form>
            </div>
        )
    }
}

export default CityStateForm
