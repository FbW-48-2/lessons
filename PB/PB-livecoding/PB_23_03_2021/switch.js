let day = "sat";
// check if the day is holyday or work day 
// if(day === 'mon' ){
//     console.log(' today is a work day');
// }
// if(day === 'tue' ){
//     console.log(' today is a work day');
// }
// else if(day === 'wed'){
//     console.log(' today is a work day');    
// }
// else if(day === 'thu'){
//     console.log(' today is a work day');    
// }
// else if(day === 'fri'){
//     console.log(' today is a work day');    
// }

// else {
//     console.log(' today is holiday'); 
// }
let daysArray = ['mon','tue', 'wed','thu','fri','sat','sun'];

// switch(daysArray[0]){
//     case 'mon' :
//         console.log(' Monday');
//     break;
//     default : console.log(' another day');
// }



switch (day){ 
    case 'mon' :
        console.log(' today  is work day Monday ');
    break;
    case 'tue' :
        console.log(' today  is work day Tuesday ');
    break;
    case 'wed'  :
        console.log(' today is work day Wednesday ');
    break;
    case 'thu' : 
        console.log(' today is work day Thursday ');
    break; 
    case 'fri' : 
        console.log(' today is work day Friday ');
    break;
    default : console.log(' today is Holiday '); // else 
}


switch (day){
    case 'sat'  : 
    case 'sun' :
        console.log('** today is holiday **')
    break    
    case 'mon' :
        console.log(' today  is work day Monday ');
    break;
    case 'tue' :
        console.log(' today  is work day Tuesday ');
    break;
    case 'wed'  :
        console.log(' today is work day Wednesday ');
    break;
    case 'thu' : 
        console.log(' today is work day Thursday ');
    break; 
    case 'fri' : 
        console.log(' today is work day Friday ');
    break;
    default : console.log(' none correct day')
     
}