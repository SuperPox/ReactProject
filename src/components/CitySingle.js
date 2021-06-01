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

export default CitySingle
