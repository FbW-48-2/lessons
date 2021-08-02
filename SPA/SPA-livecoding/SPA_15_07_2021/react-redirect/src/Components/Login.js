import React from 'react';
import { useHistory} from 'react-router-dom';

function Login() {
    const history = useHistory();
    //history.push('/dashboard')
    return (
        <div>
           email: <input name="email" type="email" /> <br/>
           password : <input type="password" />  <br/>
           <button onClick={ ()=> history.push('/dashboard')}> login </button>            
        </div>
    )
}

export default Login
