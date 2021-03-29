// local variables ? 
// function showMsg(){
//     let msg = 'Hello world' ; // only available inside showMsg
//     console.log(msg);

// }

// showMsg();

// console.log(msg);

///////////////////////////////// 
// outer variables 
// let msg = 'Hello World';

// function showMsg(){
   
//     msg = 'greeting';
//     console.log(msg);
// }

// showMsg();
// console.log(msg);
//##################################################################

let msg = 'Hello world';
function showMsg(){

    let msg = 'Hello there!';
    console.log(msg); // the outer variable will be used only if there is no local variable 
}
showMsg();
console.log(msg);  

