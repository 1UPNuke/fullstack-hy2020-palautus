import React from 'react'

export default ({onSubmit, setName, setNum}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>name: <input onChange={(e)=>setName(e.target.value)}/></div>
            <div>number: <input onChange={(e)=>setNum(e.target.value)}/></div>
            <div><button type="submit">add</button></div>
        </form>
    )
}