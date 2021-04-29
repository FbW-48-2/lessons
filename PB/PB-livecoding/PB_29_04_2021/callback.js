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

// #####################################
// example1 about Synchronous callback 
let numbers = [99,1,55,10,6,8];
numbers.sort( function(a,b){
 return a-b
});

//console.log(numbers);

//#####################################

// example 2 
function first(callback){  
    // Simulate a code delay  
    setTimeout( function(){  
      console.log(1); 
      callback(); 
    }, 500 );    
  }
function second(){  
console.log(2);  
}
  //first(second);
  
  //second();

  //################################################
  // example 3  downloading a video and edit the video 
//   function download(url){
//     // downloading 
//   }
//   function edit(url){
//       // editing 
//   }
//###########################################
// function download(url){
//     // downloading 
//     console.log(" Downloading from "+ url + " ......");
//   }
//   function edit(url){
//       // editing 
//       console.log(" Editing the "+ video + " ......");
//   }
  
//   download("youtube.com");
//   edit("fun video")
  // ##############################################
//   function download(url){
//     // downloading 
//     setTimeout( function(){  
//         console.log(" Downloading from "+ url + " ......");
//       }, 500 );  
   
//   }
//   function edit(url){
//       // editing 
//       console.log(" Editing the video from + url + " ......");
//   }
  
//   download("youtube.com");
//   edit("youtube.com")
//#############################################
function download(url , callback){
    // downloading 
    setTimeout( function(){  
        console.log(" Downloading from "+ url + " ......");
        callback(url)
      }, 500 );  
   
  }
  function edit(url){
      // editing 
      console.log(" Editing the   video from " +url + " ......");
  }
  
  download("youtube.com" , edit);
  