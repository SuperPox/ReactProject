import React from 'react';
import City from './City'

const Cities = props => {
  const cities = props.cities.map(city => <City key={city.id} {...city} deleteCity={props.deleteCity}/>)

  return (
    <div>
      {cities}
    </div>
  );
};

export default Cities;