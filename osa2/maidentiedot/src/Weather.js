import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default ({country}) => {
    const [weather, setWeather] = useState({});

    const getWeather = ()=>{axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(response => {
            console.log(response);
            setWeather(response.data)
        })
        .catch(e=>{
            if(e.response.status===404) setWeather({error: `Weather doesn't exist for ${country.latlng}`})
            if(e.response.status===401) setWeather({error: "API key is invalid or hasn't been activated"})
            else throw e
        })
    }

    useEffect(getWeather, [])

    if(weather.error) return <p>{weather.error}</p>
    else if (weather.main) return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p><b>temperature:</b> {(weather.main.temp).toFixed()} celsius</p>
            <img style={{background:"skyblue"}} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <p><b>wind:</b> {weather.wind.speed} m/s</p>
        </div>
    )
    return <div></div>
}