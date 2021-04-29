// function getLanguage(callback) { 
//     console.log("running getLanguage");
    
//     callback(); 
//     }
     
// function greeter() {
//     console.log("running greeter");

// }    
// getLanguage(greeter);

// getLanguage( function(){
//     console.log("running greeter from anonymous function");
// })

//##################################
let arr = [1,5,4,3,7,8];
// get numbers > 4 
// let result = arr.filter( function(item){ //  anonymous function
//   return item > 4
// });
function filteredArr(item){
    return item > 4 
}
let result = arr.filter(filteredArr) // filteredArr is a callback function 

//console.log(result);

// #####################################################################

      
function getLanguage(callback) {
 
    console.log("running getLanguage");
    
    const language = "GERMAN";
    
    callback(language);
    
    }
    
    function greeter(language) {  // the callback function 
    
     console.log("running greeter");
      
     if(language === "GERMAN") { 
     
     console.log("Hallo!"); 
     } 
    }
getLanguage(greeter)

getLanguage(function(item){
    console.log("running greeter");
      
    if(item === "GERMAN") { 
    
    console.log("Hallo!"); 
    } 

})