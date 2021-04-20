// object example 
let fakeDatabase = {
    users:[
        {
            _id:1234,
            name:"Lana",
            email:"lana@gmail.com",
            password:12345,
            isAdmin : false,
            date : new Date()

        }
    ]
}
// createUser({ name :"Max" , password:4234, isAdmin:true})
function generateID(){
    let id = Math.floor(Math.random() * 10000);
    return id;
}
console.log(generateID());   
// CRUD c ==> cretae R==> read U==> update   D ==> delete
function createUser(user){
    if(typeof user !== "object"){
        return "not an object " // break the function 
    }
    
    let newUser = {
        _id:generateID(),
        name:user.name,
        email:`${user.name}@gmail.com`,
        password:user.password,
        isAdmin:user.isAdmin,
        date: new Date()
    }
    fakeDatabase.users.push(newUser)
    return "user created!" 
    
}
console.log(createUser({ name :"Max" , password:4234, isAdmin:true}));
console.log( createUser({ name :"Maja" , password:56444, isAdmin:false}));
console.log(createUser("hi"));
console.log(fakeDatabase);

// let nums = [1,2,8]
// nums.push(10) // [ 1, 2, 8, 10 ]
// // console.log(nums);


/********************************************* */
function checkNum(num){
    if(num > 10 ){
        
        return "1 break the function " // break the function 
        
    }
     
         
        return "2 Break the function " // no need for else because of the first return 
      
         
}


//console.log(checkNum(9));
for(let i = 0 ; i < fakeDatabase.users.length ; i++){
    console.log(fakeDatabase.users[i].name);
}

for( let element of fakeDatabase.users){
    console.log(element.email);
}
// for in loop only for objects 
// forEach loop 
// map 
// while
// set
// for of loop 

let str = "i love javascript";
for( const letter of str){
    //console.log(letter);
}
for( const letter in str){
    //console.log(str[letter]);
}
let str2 = {
    0:"i",
    1:"l",
    2:"o",
    3:"v",
    4:"e"
}

for ( let char in str2){
    console.log(char , str2[char]);
}
console.log("#################");

let str3 ="ilove"


for ( let char in str3){
    console.log(char , str3[char]);
}