import React from 'react'
import Country from './Country'

export default ({list, getCountry}) => {
    if(list.length > 10)
    {
        return (<p>Too many countries, specify another filter</p>)
    }
    if(list.length > 1)
    {
        return (
            list.map(country=><p>{country.name} <button onClick={()=>getCountry(country.name)}>show</button></p>)
        )
    }
    if(list.length === 1)
    {
        return (<Country country={list[0]}/>)
    }
    return (<p>No matches were found</p>)
}