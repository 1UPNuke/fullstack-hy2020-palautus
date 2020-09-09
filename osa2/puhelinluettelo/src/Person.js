import React from 'react'

export default ({person, deletePerson})=>{
    return (
        <p>{person.name}, {person.number} <button onClick={deletePerson}>delete</button></p>
    )
}