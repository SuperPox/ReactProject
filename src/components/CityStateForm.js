import React, { Component } from 'react'

export class CityStateForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const body = {city: this.state}
        fetch("http://localhost:3000/cities", {
            method: "POST",
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(r => r.json())
        .then(city => this.props.sendData(city))
        this.setState({name: ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                        type = "text" 
                        placeholder = "eg. City"
                        onChange = {this.handleChange.bind(this)}
                        value = {this.state.name}
                        name = "name"
                    />
                    <input type = "submit" />
                </form>
            </div>
        )
    }
}

export default CityStateForm
