import React from 'react'
import './notification.css'

export default ({notification})=>{
    if(!notification.message) return <></>
    else window.setTimeout(()=>window.location.reload(), 3000)
    if(notification.error) {
        return (
            <div className="error">
                <p>{notification.message}</p>
            </div>
        )
    }
    return (
        <div className="success">
            <p>{notification.message}</p>
        </div>
    )
}