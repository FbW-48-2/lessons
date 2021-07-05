import React , {useState} from 'react'

function Register() {
    const [userName,setUserName] = useState("");
    const [inputs , setInputs] = useState({
        userName:"",
        email:"",
        password:""
    })

    function handleChange(e) {
       // console.log('user name change');
       //setUserName(e.target.value);
       //setInputs(e.target.value)
      
       setInputs({...inputs , [e.target.name] : e.target.value})
        
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(inputs.userName ==="" || inputs.email === "" || inputs.password === "" ){
            alert(' please fill all the inputs!!!')
        }

        else {
        alert(`user created!! : userName : ${inputs.userName}
        email : ${inputs.email} , passwprd : ${inputs.password}
        `);
        clear();
        }
        
    }
    function clear() {
        setInputs({
            userName:"",
            email:"",
            password:""
        })
    }
    return (
        <div>
            <form onSubmit = { handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input onChange = {handleChange} type ="text" name ="userName" value={inputs.userName} />
                </div>
                <div>
                    <label>Email</label>
                    <input  onChange = {handleChange}  type ="text" name ="email" value ={inputs.email} />
                </div>
                <div>
                    <label>Password</label>
                    <input   onChange = {handleChange}  type ="password" name ="password" value = {inputs.password} />
                </div>
                <div>
                    <input type = "submit" value =" Register" />
                    
                    <input type = "button" value ="clear" onClick = { clear }     />
                </div>
            </form>
        </div>
    )
}

export default Register

