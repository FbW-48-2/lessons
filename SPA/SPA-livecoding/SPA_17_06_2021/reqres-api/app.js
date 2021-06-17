function renderUser(user){
    const div = document.createElement('div');
    div.innerHTML=` <h5>name : ${user.first_name} ${user.last_name} </h5> 
                    <h5>email :  ${user.email} </h5>
                    <img src='${user.avatar}' />
    `;

    document.body.appendChild(div)
}

const obj= {
    avatar :"https://reqres.in/img/faces/1-image.jpg" ,
    email: "george.bluth@reqres.in" ,
    first_name:"George",
    id:1,
    last_name:"abc"
}


//renderUser(obj)

// fetch('https://reqres.in/api/users/')
// .then(res=>{
//     return res.json()
// })
// .then(result => {
//     console.log(result.data);
//     result.data.forEach(item => {
//         renderUser(item) 
//     });
// });

// async await 

async function fetchData(){
   const res = await fetch('https://reqres.in/api/users/');

   const result = await res.json();
   console.log(result.data);
   result.data.forEach(item => {
             renderUser(item) 
   });
}


fetchData()