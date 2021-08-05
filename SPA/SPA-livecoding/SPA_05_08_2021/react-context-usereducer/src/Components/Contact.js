import React , {useContext, useState} from 'react'
import Notifications from './layout/Notifications';
import NotificationsContext from '../context/notifications/NotificationsContext';
function Contact() {
    const [ data ,setData ] = useState({ email:'' , name:''})
    const {  addNotification} = useContext(NotificationsContext)
    function onSubmit(e){
        e.preventDefault();
        if(data.name ===''){
            addNotification('Name is empty!!!' ,'danger')
        }
        if(data.email ===''){
            addNotification('Email is empty!!!' ,'danger')

        }
        if(data.name !=='' && data.email !=='') {
            addNotification('thanks for contacting us ' ,'success')
            setData({})
        }


    }
    return (
        <div>
            <h1> this is contact us page </h1>
            <button onClick= {()=> addNotification('this is sucess notificaton' ,'success' ,300)} > add success </button>
            <button onClick= {()=> addNotification('this is danger notificaton' ,'danger')} > add danger </button>
            <button onClick= {()=> addNotification('this is danger notificaton' ,'warning')} > add warning </button>
            <Notifications />
            <form onSubmit = { onSubmit}>
                <div   className="mb-3">
                    <label for="exampleInputEmail1"   className="form-label">Email address</label>
                    <input value ={data.email} name = "email" onChange={(e)=>{ setData({...data ,[e.target.name]:e.target.value})}}  type="email"   className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                </div>
                <div   className="mb-3">
                    <label for="exampleInputPassword1"    className="form-label">Name</label>
                    <input value={data.name} name="name" onChange={(e)=>{ setData({...data ,[e.target.name]:e.target.value})}} type="text"   className="form-control" id="exampleInputPassword1" />
                </div>
                 
                <button type="submit"   className="btn btn-primary">Submit</button>
            </form>
             
           
        </div>
    )
}

export default Contact
