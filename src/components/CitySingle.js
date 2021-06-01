/*
import React from 'react'
import CityContainer from './CityContainer'
import CityStateForm from './CityStateForm'


class CitySingle extends React.Component {
    render() {
        return (
            <div>
                {this.props.city.name}
            </div>
        )
    }
}
*/

//<Link to={`/cities/${props.city.id}`}> {props.city.name} </Link>  

import {Link} from 'react-router-dom'

export default function CitySingle(props) {
    return (
        <div>
             {props.city.name}      
        </div>
    )
}


