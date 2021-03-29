// parameters

function greet(firstName, lastName){
    return `Hello ${firstName} ${lastName}`
}

//console.log(greet('Anna' , 'Smith'));


function greetUser(userName = 'Mansour'){
    return `Hello ${userName} `
}

// console.log(greetUser('Max'));



// return 


function getRandom(){
   //  console.log(Math.random() * 10);
   return Math.random()* 10;
   console.log('Hello');
}
getRandom();

//console.log(getRandom() === undefined); // 


// how to return more than one value 

function getInfo(name , address){
   return [name, address]
   return address; // ignored
}
console.log(getInfo('Edwin', 'Berlin'));

// const name = getInfo('Edwin', 'Berlin')[0];
// const address = getInfo('Edwin', 'Berlin')[1];

const arr = getInfo('Edwin', 'Berlin'); // the value is the returned value from the function 

console.log('the array : ',arr);

console.log( 'Name',arr[0] , 'addreess', arr[1]);

const [name,address] =  getInfo('Edwin', 'Berlin'); // destructuring 

const [job ,company] = ['frontend developer' , 'google'];  // destructuring 

console.log(job); console.log(company);

console.log(name);
console.log(address);
// ############################################
function getColors(){
     
    return ['red' , 'blue'  ];
}

const [color1 , color2 ] = getColors();

console.log('Color1 : ', color1);
console.log('Color2 : ', color2);

 // ####################################################
 function userInfo(name,email,job){
  
    let userObject = {
            userName :name,
            userEmail:email,
            userJob : job
    }
  if(job === undefined){
      userObject.userJob = 'no information about job'
     
  }     
    return userObject 
    
 }

 console.log(userInfo('Max' , 'max@gmail.com' ));
// const userName = userInfo('Mo' , 'max@gmail.com' ).userName;
// const userEmail = userInfo('Max' , 'max@gmail.com' ).userEmail;

    const {  userName , userEmail } = userInfo('Max' , 'max@gmail.com' ); // destructurng values from Object 
  //const {  userName , userEmail } = {userName :'Max' , userEmail:'max@gmail.com}
 console.log(userName);            // 
 console.log(userEmail);

 const userData = userInfo('Priya', 'priya@SpeechGrammarList.com','React Developer');
 console.log('userData',userData);
 const {userJob} = userData;
 console.log(userJob);


// ####################################
 // default params

 function printName(name ,city){ // city is optional
     if(city === undefined){
         city = 'Hamburg'
     }
     
     console.log(`welcome back ${name} to ${city}`);
 }
 printName('Mo','London');

 //########################################################
 // function to return the numbers <= 50 from given array 
 const numbers = [22,34,77,9,51,49,50,17,99,200,322];

 function extractNum(arr){
     let newArr = []; // new epty array 
     for(let i = 0 ; i< arr.length ; i++){
         if(arr[i] <= 50){
             newArr.push(arr[i])  // adding the numbers <= 50 
         }

     }

     return newArr // filled with numbers 
 }
 console.log(extractNum(numbers));
 console.log(extractNum([22,34,77,9,51,49,50,17,99,200,322]));

 const filteredNumbers = extractNum
 console.log(filteredNumbers(numbers));