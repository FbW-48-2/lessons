// let counter = 10;

// while(counter > 0) {

// //console.log(counter--);

// }
// //console.log('#####################');
// for(let i = 10 ; i >0 ; i-- ){
//   //  console.log(i);
// }
// //##########################################

// let countdown = function(value) {

//     if (value > 0) {
    
//     console.log(value);
    
//     return countdown(value - 1);
    
//     } else {
    
//     return value;
    
//     }
    
//     };

//    //console.log(countdown(5));

let factor = function(number) {

    let result = 1;
    
    let count;
    
    for (count = number; count > 1; count--) {
       // console.log(count);
    
    result *= count;
    //console.log(result);
    
    }
    
    return result;
    
    };
    //console.log(factor(6)); // 720

    let factorial = function(number) {

        if (number <= 0) { // terminal case
        
        return 1;
        
        } else { // block to execute
            
        
        return (number * factorial(number - 1)); // 6 * 5 * 4 * 3 * 2 * 1 
        
        }
        
        };
        
         console.log(factorial(6)); // 720