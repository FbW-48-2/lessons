let person = {
    name :"Mo",
    age :20
}

person.info = function(){
    return  this ;
}

console.log(person.info());


const str = "javascript";
// for( let key of str  ){
//     console.log(key);
// }
for(let key in str){
    console.log(str[key]); 
}