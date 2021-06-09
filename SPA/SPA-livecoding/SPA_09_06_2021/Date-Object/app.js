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

console.log(today);
console.log(today.getMonth());//  the Month
console.log(today.getDate()); // the day 
console.log(today.getFullYear()) // the year
console.log(today.getHours());// hour 
console.log(today.getMinutes()); // Minutes 
console.log(today.getSeconds()) // secounds
console.log(today.getMilliseconds()); // Milliseconds

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
setInterval(() => {
    document.body.innerText =  currentDate();
}, 100);
