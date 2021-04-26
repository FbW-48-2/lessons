let nums = [ 1, 2 ,3 , 6]

nums.forEach( function(element){ // the arguments : 1- the current element 2- index 3- current Array
    //console.log(element);
})

nums.forEach( function(element , index , array){ // the arguments : 1- the current element 2- index 3- current Array
    //console.log(element , index);
    console.log(`${element} is at index ${index} in  ${array}`);
})

// get the sum of the element
let sum = 0
nums.forEach( function(element ){ // the arguments : 1- the current element 2- index 3- current Array
    sum+= element
    if(element === 2){
        
       console.log(element);
       
    }
});


 //console.log(sum);

 let str = "javascript";
//  str.split("").forEach( function(item, index){
//      if(item ==="r"){
//          console.log("the index of r is",index);
//      }
//  });

//  str.split("").forEach( (item, index)=>{
//     if(item ==="r"){
//         console.log("the index of r is",index);
//     }
// });

function myFunction(item , index){
    if(item ==="a"){
        console.log("the index of a is",index);
    }

}
str.split("").forEach( myFunction  );

