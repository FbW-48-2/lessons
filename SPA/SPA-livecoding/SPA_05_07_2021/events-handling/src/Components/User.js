import React from 'react'

function User() {
    let userName = React.createRef();
    let password = React.createRef();

    function  loginHandler() {
        console.log(userName.current.value);
        console.log(password.current.value);
        userName.current.value = ''
        password.current.value = ''

        
    }
    return (
        <div>
            <h5> REF in Functional Component</h5>            
            <input type = "text" placeholder ="your user name ...."  ref ={userName}  /> <br/>
            <input type = "password" placeholder ="your password ..." ref={password} /><br/>
            <button onClick = {loginHandler} > login </button>
        </div>
    )
}

export default User
