// for(let i = 0; i < 10 ;i++  ){
//   console.log(' Hello ' , i)
// }
// the condition is true but will be false
// for(let i = 0; i <= 9 ;i++  ){
//     console.log(' Hello ' ,'i = ', i , ', i <= 9',i <= 9)
// }
// let b = 0 ;
// console.log(++b);

// infinite for loop 
// for(let i = 0; i >=0  ;i++  ){
//     console.log(' Hello ' , i)
// }
// for(i = 10 ;i > 0 ; i--){
    
//     if(i % 2 === 0 ){
//         console.log('the value of i : ',i ,i > 0 );

//     }
// }
    


// for(let i = 5 ; i>= 0 ; i--){
//     console.log(i );
// }
// print even numbers using for loop 
// continue stop the for loop one time
// for(let i = 0 ; i <50 ; i++){
//    if(i % 2 !== 0){
//        continue ; 
//    }
//    console.log(i);
// }

// for(let i = 0 ; i< 10 ; i++){
//     if(i == 5 ) {
        
//         continue;
//         console.log( ' i ==' ,i); 
//     }
//     console.log( i );
// }

// stop for loop using break 
// for(let i = 0 ; i < 100 ; i++){
//     if(i === 5) {
       
//         break; 
//         console.log(' stop the loop with 5 ');
//     }
//     console.log( 'i = ' , i)
// }

// nested for loop 
// for(let i = 0 ; i<10 ; i++){
//     console.log('I = ',i);
    
//     for(let p = 0 ; p < 10; p++){
//         console.log('p = ',p);
//     }
// }
let result = '';
// outer loop print new line
for(let i = 0 ; i<3 ; i++){
   
    // inner loop print * 
    for(let p = 0 ; p <= 5; p++){
      result += ' * ' 
      
    }
    result += '\n' // add new line 
   
}
console.log(result);


// let str = 'abc';
// //str += '123' 
// str = str + '123'
// console.log(str);