import { useState} from 'react'

export default function Alerts(){
    
    const [ state ,setState] = useState({ msg :"404 page not found"});
    const [ greet, setGreet] = useState('Hello There!' );
    const [ error ,setError] = useState(false) ;
    const [ notifications , setNotifications ] = useState([{ msg : "data updated !! " ,type:"success"}]);

    
   

    return (

        <div>
            <h1> {greet}</h1>
            { error && 
              <p>{ state.msg}</p> 
            }
          
            <button onClick = {()=>  setGreet('Salut!!') }> change greet message</button>
            <button onClick = { ()=> setError(true)}> show error</button>

            <button onClick = { ()=> setError(!error)}> {error ? 'Hide error':'Show error' } </button>

            <h4> Notifications </h4>
            <button onClick = {()=> { setNotifications([...notifications ,{ msg : "data loaded!!!  !! " ,type:"success"}])  }} > add notification</button>
             {
               notifications &&  notifications.map(item => {
                     return <h6> {item.msg} </h6>
                 })
             }
        </div>
    )
}