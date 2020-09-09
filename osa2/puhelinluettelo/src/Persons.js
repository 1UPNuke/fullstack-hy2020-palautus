import React from 'react'
import Person from './Person'

export default ({persons, filter, deletePerson}) => {
    if(!persons) return (<div></div>)
    persons = persons.filter((p)=>p.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div>
        {persons.map(person => <Person person={person} deletePerson={()=>deletePerson(person.id)}/> )}
      </div>
    )
}