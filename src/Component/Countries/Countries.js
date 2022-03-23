import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))


    }, [])
    return (
        <div>
            <h3>How are you?</h3>
            <div className='allCountry'>
                {
                    countries.map(country => <Country countryName={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;