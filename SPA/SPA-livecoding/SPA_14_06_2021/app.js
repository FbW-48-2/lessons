const users = [
    { name : "Lara" , email: "lara@gmail.com"},
    { name : "Mike" , email: "mike@gmail.com"}

]; 

function createUser(user , callback){
    setTimeout( ()=>{
    users.push(user);
    callback()
    }, 2000) // delay 2 sec
}




function getUsers(){
    setTimeout(()=>{
        let output = '';
        users.forEach( (item)=>{
            output += `<li> ${item.name} --> ${item.email} </li>  `
    
        });
        document.body.innerHTML = `<ul> ${output} </ul>`
    },1000)
}

createUser({ name : "Max" , email: "max@gmail.com"} , getUsers);


// getUsers();