async function greet(){
    return 'Hello World';
}

//  async function greet(){
//     return new Promise((resolve, reject)=>{
//         //
//         //resolve('Hello World')
//         reject('404 not found');
//     })
// }

// console.log(greet());
// greet()
// .then(msg=>{
//     console.log(msg);
// })
// .catch(err=> { console.log(err);})

///await 

async function greeting() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(() => resolve("Hello ny friend!"), 3000)
    });
    let result = await promise;

    console.log(result);
}

//greeting();

//////////////////////////////////////////////////////

// let sayHi = async function(){

// }
let sayHi = async() =>{
    return 'Hello';

}
// sayHi().then(msg => {
//     alert(msg)
// })


///// 
// const hello = async ()=>{
//     return await Promise.resolve('Hi')
// }
// console.log(hello().then(msg=> console.log(msg)));

// Promise.resolve(' Hi')
// .then(msg=>{
//     alert(msg)
// })

// Promise.reject('error')
// .then()
// .catch(err =>{ alert(err)})

 function hello(){
   // return Promise.reject('server error');

   return new Promise((resolve, reject)=>{
       reject('server error')

   })
} 

async function getData(){
    try {
      await  hello();
    } catch (error) {
        console.log('we have an error : ',error);
    }
}
getData();
