const blackFriday = false;
const amazonPromise = new Promise((resolve , reject)=>{
    if(blackFriday === true){
        reject(' Sorry for not sending your order on time 😐!!!')
    }
    else{
        resolve(' this is your product as promised 🙂 !!')
    }

});

amazonPromise
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
});

/// Promise.all
const max = new Promise((resolve, reject)=>{
    resolve('max@gmail.com')

})
const lara = new Promise((resolve, reject)=>{
    resolve('lara@gmail.com')

})
const john = new Promise((resolve, reject)=>{
    resolve('john@gmail.com')

});

Promise.all([max ,lara , john ]).then(data=>{
    console.log(data)
})
  
 