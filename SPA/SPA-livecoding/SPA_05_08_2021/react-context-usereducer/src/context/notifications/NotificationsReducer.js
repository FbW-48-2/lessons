import React from 'react'

function NotificationsReducer(state , action) {
    if(action.type === 'add-notification'){
        return [...state , action.payload]
    }
    if(action.type ==='remove-notification'){
        return state.filter(item=>{
            return item.id !== action.payload
        })
    }
    return state
}

export default NotificationsReducer
