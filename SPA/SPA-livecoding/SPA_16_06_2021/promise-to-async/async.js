const users = [
    { name : "Lara" , email: "lara@gmail.com"},
    { name : "Mike" , email: "mike@gmail.com"}

]; 

function createUser(user){
    return new Promise((resolve , reject)=>{
        setTimeout( ()=>{
            users.push(user);
            const myError = true;
            if(myError === false ){
                resolve(' ALl is done!!!');
                
            }
            else{
                reject(' there is server error')
            }
           
        }, 2000) // delay 2 sec

    })
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

// createUser({ name : "Max" , email: "max@gmail.com"} )
// .then((msg)=>{
//     console.log(msg);
//     getUsers();
  

// })
// .catch((err)=>{
//     console.log(err);

// })

// with async await

// async await

// async function start(){   
//        await  createUser({ name : "Max" , email: "max@gmail.com"} );  
//        getUser();
//    }


// async await with trycatch

async function start(){

 try {
    await  createUser({ name : "Max" , email: "max@gmail.com"} );  
    getUser();

     
 } catch (err) {
    console.log(err);
 }
   
  
     
  
}
start();
 
 