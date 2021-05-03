const counter = (function(){
    let privateCounter = 0 ;

    function changeBy(x){ // inner function 
        privateCounter += x
       // console.log(privateCounter);
    }
     return {
       increment : function(){
        changeBy(1)
       },       
       decrement: function(){
           changeBy(-1)
       },
       value : function(){
           return privateCounter;
       }
   }

})()
counter.increment()  
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value()); // 0
 