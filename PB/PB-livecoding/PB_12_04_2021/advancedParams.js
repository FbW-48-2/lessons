// advanced Params 
function printMessage(msg){
  console.log(msg);
}
// printMessage();
// printMessage('Hello World');

// ##############################################
function printMessage2(msg = 'Good Morning'){
    console.log(msg);
  }
//   printMessage2();
//   printMessage2('Hello there !');
  // ###################################################

  // Rest params

  function sum(a,b,c, ...args){

      console.log(args);
      console.log(args.length);
      let result = 0;
      for(let i = 0 ; i < args.length; i++ ) {
          result += args[i]

      }
      console.log(result);
  }
  //sum(300,2,4,1,1,5,5,5,10);

function greet(firstName  , lastName , ...titles ){
  console.log( 'Hello ' + firstName + ' ' + lastName , titles[0] , titles[1]);
}
greet('Sara','Adam', 'student' , 'web developer','android developer')
//                      0            1                    2 

// the ...rest is always at the end 

//#######################################################################
// Arguments Object 
function showName(){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[5]);
    for(let i = 0 ; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
//showName('Sara' , 'Adam', 'laura');

// ##################################################
function sumNumbers(){
    let sum = 0 ;
    for(let i = 0 ; i < arguments.length ; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumNumbers(1,2,3,1));