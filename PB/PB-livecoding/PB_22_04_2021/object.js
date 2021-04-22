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
// originalArray = [3,55,100,{name:"someName", array: [1,{woot: "woot"},8,3]}]
// originalArray[3].id = { name:"Adam"} 
 
let deepCopyArray = deepCopyFunction(originalArray);

originalArray[3].name = "Sara"
console.log("originalArray" , originalArray ) ;
console.log("deepCopyArray" , deepCopyArray);