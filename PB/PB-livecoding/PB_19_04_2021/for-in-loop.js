// for in loop  works with objects 
let oldCar = {
    brand : "toyota",
    model:"Tercel",
    year:1996
} ;
// for(let key in object   ) 
 
console.log( "color" in oldCar); // false

for(let value in oldCar){
    console.log(value , oldCar[value]);
}

let user = {
    fName : "Sara",
    lName : "Doe",
    age : 55
}

for(let x in user){
    console.log(x, user[x]);
}

let str = "i like javascript"
for(let index in str ){
    console.log('the index of', str[index] ,"is:",index );
}
for(let i = 0 ; i < str.length; i++ ){
    console.log( "the index of",str[i] , i) ;
}
