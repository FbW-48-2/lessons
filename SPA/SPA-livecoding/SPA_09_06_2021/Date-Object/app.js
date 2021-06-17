// String
// Number 
// Date

let today = new Date(); // object
    today = new Date(0) // start date and time for date Object  // 0 ms 
    // add 24 hours to the date 
   today = new Date( 1000 * 60 * 60 * 24 ) // we added one day more 
//console.log(typeof today);

// date string value 

today = new Date('1988-06-21');
today = new Date('1988-06-21 05:25:15'); // date and time 
//today = new Date('1988/06/21');
today = new Date(); 



//console.log(today.getFullYear());

// console.log(today);
// console.log(today.getMonth());//  the Month
// console.log(today.getDate()); // the day 
// console.log(today.getFullYear()) // the year
// console.log(today.getHours());// hour 
// console.log(today.getMinutes()); // Minutes 
// console.log(today.getSeconds()) // secounds
// console.log(today.getMilliseconds()); // Milliseconds

// function timer(){
//     const currentTime = new Date();
//     const hours   = currentTime.getHours();
//     const minutes = currentTime.getMinutes();
//     const seconds = currentTime.getSeconds();
//     document.body.innerText = 

// }

const currentDate = ()=>{
    const dateNow = new Date()
    const result = `Date : ${dateNow.getFullYear()}- ${dateNow.getMonth() +1  } - ${dateNow.getDate()}
     Time :  ${dateNow.getHours()} : ${dateNow.getMinutes() } : ${dateNow.getSeconds()  } : ${dateNow.getMilliseconds()} 
    `;  
    return result; 
}
// setInterval(() => {
//     document.body.innerText =  currentDate();
// }, 100);


today = new Date().getTime(); // ms 

console.log(today);
console.log(new Date(1623236703472));
today = new Date().getTime();

let date1 = new Date('2000-05-05').getTime(); // ms
let date2 =  new Date('1995-05-05').getTime(); // ms
console.log(date1, date2);
let date3 =  new Date(date1-date2);
console.log(date3);

// calculate your age accourding to birthdate 
// console.log(Date.now()); // the current date in ms 
// console.log(new Date('1980-06-21').getTime()); // birthday in ms
// let difference = Date.now() - new Date('1980-06-21').getTime();
// console.log(difference); 
// console.log(new Date(difference).getFullYear() - 1970);