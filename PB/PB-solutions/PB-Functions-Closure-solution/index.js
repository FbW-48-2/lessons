
function createBase(x){
    return function(y){
        console.log(x+y) 
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27