import React , { useReducer} from 'react'
import NotificationsReducer from './NotificationsReducer';
import NotificationsContext from './NotificationsContext';
function NotificationsState(props) {
    const initialState = [];
    const [state , dispatch ] = useReducer(NotificationsReducer , initialState);

    const addNotification = (msg , type , delay = 4000 )=>{ 
        const id = Date.now();
        dispatch({  type:'add-notification' , payload : { msg , type, id}});
        setTimeout(()=>{
            dispatch({  type:'remove-notification' , payload : id });

        },delay)


    }

    return (
        <NotificationsContext.Provider value={{ notifications:state ,addNotification }}>
            {props.children}
        </NotificationsContext.Provider>
    )
}

export default NotificationsState
