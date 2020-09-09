import axios from 'axios'


const getPersons = (setPersons, setNotification) => {axios
    .get('http://localhost:3001/persons')
    .then(response => {
        setPersons(response.data)
    })
}

const addPerson = (e, persons, newName, newNum, setNotification) => {
    e.preventDefault();
    if(persons.map(person=>person.name).includes(newName))
    {
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        {
            axios.put(`http://localhost:3001/persons/${persons.find((p)=>p.name===newName).id}`, {name: newName, number: newNum})
                .then(()=>setNotification({message: `Changed ${persons.find((p)=>p.name===newName).id}`}))
        }
        return;
    }
    axios.post('http://localhost:3001/persons', {name: newName, number: newNum})
        .then(()=>setNotification({message: `Added ${newName}`}))
}

const deletePerson = (id, setNotification) => {
    axios.get(`http://localhost:3001/persons/${id}`)
    .then(response => {
        if(window.confirm(`Delete ${response.data.name}?`))
        {
            axios.delete(`http://localhost:3001/persons/${id}`)
            .then(()=>setNotification({message: `Deleted ${response.data.name}`}))
        }
    })
    .catch((e)=>{
        if(e.response.status === 404) setNotification({message:"Information of person has already been deleted from the server", error: true})
    })
}

export default {getPersons, addPerson, deletePerson}