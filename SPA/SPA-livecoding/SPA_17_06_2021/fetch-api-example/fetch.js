const result = document.querySelector('#result');
const btnText =  document.querySelector('#text');
const btnJson =  document.querySelector('#json');
const btnExt =  document.querySelector('#external');

btnText.addEventListener('click' ,getText)
btnJson.addEventListener('click' ,getJson)
btnExt.addEventListener('click' ,getApi)
// fetch
// url fetch(url)
// local file
// external url 
// text files 
// json data

function getText(){
    fetch('./example.txt')
    .then( response => {
        // object 
        // .text
      return response.text();
    })
    .then(data=>{
       console.log(data);
       result.innerHTML = data
    })
    
    // .catch(err => { 
    //   console.log('error' , err);
    // })
    
}
//getText();

//////////////////////////////
// fetch local json file 
function getJson(){
    fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then(data=>{
      console.log(data);
      let names = ''
      data.forEach(item => {
        names += `<li>${item.name}</li>`   
          
      });
      result.innerHTML = names
    })
    // .catch(err=>{
    //     console.log(err);
    // })
    
}
//getJson();

function getApi(){
   fetch('https://jsonplaceholder.typicode.com/users')
 .then(res =>{
     //console.log( res.json()); // res is object 
     // res.json() is promise
   return res.json();
 })
 .then(data=>{
     console.log(data);
     let names = ''
     data.forEach(item => {
       names += `<h4>${item.name}</h4>`   
         
     });
     result.innerHTML = names
     
 })
}

//getApi();


// let promise = new Promise((resolve, reject)=>{
//   resolve(['red','green', 'yellow'])
// })
//  promise
//  .then(data => {
//      console.log(data);
//  })

/////////////////////////////////////////

//fetch  random image api 

 