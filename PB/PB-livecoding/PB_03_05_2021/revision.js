function outer(title){


    function inner(name){
        console.log(` hello ${title}  ${name} `);
    }

    return inner
}


 // hello francessco 
//outer()("francessco")
// let name = "francessco"
// outer()("Norman")

// // hello Mr Norman
// let title = "Mr"
// outer(title)(name)
// outer("Mr")("Shrekesh")

for(let i = 0 ; i<5 ; i++){
    //console.log(i);
}

function loop(i = 0 ){
    if(i >= 5){
        return; 
    }
     console.log(i);
    loop(i+1)

}
 //loop()
// loop(0)                       0
//  loop(1)                      1
//   loop(2)                     2   
//    loop(3)                    3
//     loop(4)                   4
//      loop(5) // return

// const countUp = (count , i )=> {
   
//    console.log(count);
//     if(count >= 100){
//         return
      
//     }
//     countUp(count +i ,i )
// }

// countUp(90 , 2)

for( let i = 0 ; i< 5 ; i ++){
    //console.log(i);
}
function loop2(i = 0){
    console.log(i);
    if( i < 4 ){
        loop2(i+1 ) 
    }  
   
}

//loop2()

function deepCopyFunction(srcObject){
    let outObject ; // the copied object 
    let value  // value = nested onject 

    if(typeof srcObject !=="object"|| srcObject === null){
        return srcObject;
    }
    // create an array or object to save the values
    outObject = Array.isArray(srcObject) ? [] : {}
    for( key in srcObject){
       value = srcObject[key]   // { name:"Anna"   }

       // deep copy
       outObject[key] = deepCopyFunction(value) // Anna 
    }

  return outObject
}
let originalArray = [3,55,100 ,{ name:"Anna"   }   ];    // , arr:[1,{id:1},3]}
  originalArray = [3,55,100,{name:"someName", array: [1,{woot: "woot"},8,3]}]
  originalArray[3].id = { name:"Adam"} 
 
let deepCopyArray = deepCopyFunction(originalArray);

originalArray[3].name = "Sara"
console.log("originalArray" , originalArray ) ;
console.log("deepCopyArray" , deepCopyArray);