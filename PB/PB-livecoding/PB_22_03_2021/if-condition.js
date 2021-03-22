// if condition 
/// input as weather : Sunny , Rainy , Snow 
// if weather Sunny then dont forget you sun glasses 
// if weather is Rainy then dont forget your umbrella 
// if weather is snow then wear s asnow jacket 
let weather = 'Cloudy';

if(weather === 'Sunny')  {
    console.log('dont forget you sun glasses')
}

else if(weather === 'Rainy'){
 console.log('dont forget your umbrella  ')
}

 else if(weather === 'Snow'){
    console.log('wear s asnow jacket ') ;
}
else {
    console.log(' the default value  ')
}


let personAge = 17 ; 
if(personAge > 17 ) {
    console.log(' you can drive')
}
else {
    console.log(' you need more time to drive')
}

personAge > 17 ? console.log(' you can drive') : console.log('you need more time to drive');
             //if                         //   else 

let allowToDrive = true;

allowToDrive = personAge > 17 ? true : false
console.log(allowToDrive)