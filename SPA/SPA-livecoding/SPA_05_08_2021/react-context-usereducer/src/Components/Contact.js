import React , {useContext, } from 'react'
import Notifications from './layout/Notifications';
import NotificationsContext from '../context/notifications/NotificationsContext';
function Contact() {
    const {  addNotification} = useContext(NotificationsContext)
    return (
        <div>
            <h1> this is contact us page </h1>
            <button onClick= {()=> addNotification('this is sucess notificaton' ,'success')} > add success </button>
            <button onClick= {()=> addNotification('this is danger notificaton' ,'danger')} > add danger </button>
            <button onClick= {()=> addNotification('this is danger notificaton' ,'warning')} > add warning </button>
            <Notifications />
           
        </div>
    )
}

export default Contact
