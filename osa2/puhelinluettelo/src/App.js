import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import AddForm from './AddForm'
import Notification from './Notification'
import dbModule from './dbModule'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [filter, setFilter] = useState('')
    const [notification, setNotification] = useState({message: '', error: false});

    useEffect(()=>dbModule.getPersons(setPersons), [])

    return (
        <div>
            <Notification notification={notification}/>
            <h2>Phonebook</h2>
            <Filter set={setFilter}/>
            <h2>add a new</h2>
            <AddForm onSubmit={(e)=>dbModule.addPerson(e, persons, newName, newNum, setNotification)} setName={setNewName} setNum={setNewNum}/>
            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter} deletePerson={(...args)=>dbModule.deletePerson(...args, setNotification)}/>
        </div>
    )
}

export default App;