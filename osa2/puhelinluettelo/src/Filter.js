import React from 'react'

export default ({set})=>{
    return(
        <label>filter shown with <input onChange={(e)=>set(e.target.value)}/></label>
    )
}