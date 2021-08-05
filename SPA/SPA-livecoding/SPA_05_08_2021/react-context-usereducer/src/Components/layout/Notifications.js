import React ,{ useContext } from 'react';
import NotificationsContext from '../../context/notifications/NotificationsContext';

function Notifications() {
    const { notifications } =   useContext(NotificationsContext); // the array of the notifications
    console.log( notifications.length);
    return (
        notifications.map(item=> { 
            return <div key={item.id} className={`alert alert-${item.type}`} role="alert">
                    {item.msg}
                   </div>
        })
    )
}

export default Notifications
