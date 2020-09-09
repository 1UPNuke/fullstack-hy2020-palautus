import React from 'react'
import Weather from './Weather'

export default ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Population:</b> {country.population}</p>
            <h2>Spoken languages</h2>
            <ul>
                {country.languages.map(lang=><li>{lang.name}</li>)}
            </ul>
            <img width={250} src={country.flag}/>
            <Weather country={country}/>
        </div>
    )
}