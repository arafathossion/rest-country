import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,capital,ccn3,flags} = props.countryName;

    return (
        <div className='countryDiv'>
            <h4> {name.common}</h4>
            <p>{capital}</p>
            <p>{ccn3}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;