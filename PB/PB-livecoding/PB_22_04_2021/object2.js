function deepCopyFunction(srcObject){
    let outObject ; // the copied object 
    let value  // value = nested onject 

    if(typeof srcObject !=="object"|| srcObject === null){
        return srcObject;
    }
    // create an array or object to save the values
    outObject = Array.isArray(srcObject) ? [] : {}
    for( key in srcObject){
       value = srcObject[key]   // { name:"Anna" ,a : { id : 55} , }
       // value = { id : 55}

       // deep copy
       outObject[key] = deepCopyFunction(value) // Anna    
       //{  name : "Anna"  }
        // { name :"Anna" , a : { id :55 } }
    }
  return outObject
}
let originalArray = [3,55,100 ,{ name:"Anna"   }   ];    // , arr:[1,{id:1},3]}
// originalArray[3].id = { name:"Adam"} 
 
let deepCopyArray = deepCopyFunction(originalArray);

originalArray[3].name = "Sara"
console.log("originalArray" , originalArray) ;
console.log("deepCopyArray" , deepCopyArray);


let arr = [ 1 , 2 ,4 ]
let arr2 = []
for (let key in arr){
    console.log(key , arr[key]);
    arr2[key] =  arr[key]
    // arr2[0]  = 1 
}
console.log("arr", arr);
console.log("arr2",arr2);