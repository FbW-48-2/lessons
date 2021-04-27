// reduce => single value 
let nums = [1,2,3,4];  // => 10 
// let result = nums.reduce(function(accumulator , item){
//     return accumulator + item

// });
function getSum(acc, item){
  return acc + item    
}
let result = nums.reduce(getSum) ;

console.log(result); // 10 single value 

// let sum = 0 ; 
// for(let i = 0 ; i < nums.length ; i++){
//     sum +=  nums[i]

// }
// console.log(sum);

// create a function to return the average of array elements 
let sum = 0 ; 
for(let i = 0 ; i < nums.length ; i++){
    sum +=  nums[i];
}
//console.log("avg ",sum / nums.length);

// using reduce 
let avg = nums.reduce(function(acc , item , index,arr ){ 
    
 return acc + item 
}, 0 ) / nums.length;
//console.log("avg" ,avg);


let users = [
    {
     "_id": "d4396701-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Bradley",
     "lastName": "Arellano",
     "email": "bradley.arellano@tmobile.com",
     "password": "sUYWCpdwwY",
     "isAdmin": false,
     "date": "2021-04-27T07:58:23.023Z"
    },
    {
     "_id": "d4398c33-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Dominick",
     "lastName": "Meyer",
     "email": "dominick.meyer@outlook.com",
     "password": "T6Ot5dQaoe",
     "isAdmin": true,
     "date": "2021-04-27T07:58:23.024Z"
    },
    {
     "_id": "d43a5013-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Laurel",
     "lastName": "Calderon",
     "email": "laurel.calderon@gmail.com",
     "password": "BrW66Z2NIf",
     "isAdmin": false,
     "date": "2021-04-27T07:58:23.024Z"
    },
    {
     "_id": "d43916e0-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Abraham",
     "lastName": "Koch",
     "email": "abraham.koch@aol.com",
     "password": "cPqEg9ppXG",
     "isAdmin": true,
     "date": "2021-04-27T07:58:23.024Z"
    },
    {
     "_id": "d43a2834-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Terri",
     "lastName": "Hunter",
     "email": "terri.hunter@outlook.com",
     "password": "mlb031M7be",
     "isAdmin": false,
     "date": "2021-04-27T07:58:23.024Z"
    },
    {
     "_id": "d4371ac4-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Dominic",
     "lastName": "Sanchez",
     "email": "dominic.sanchez@tmobile.com",
     "password": "yKisfu3JKI",
     "isAdmin": false,
     "date": "2021-04-27T07:58:23.024Z"
    },
    {
     "_id": "d4393dcd-a1ac-11eb-ac18-c98a17456615",
     "firstName": "William",
     "lastName": "Beasley",
     "email": "william.beasley@gmail.com",
     "password": "CtDSNEc1tZ",
     "isAdmin": false,
     "date": "2021-04-27T07:58:23.024Z"
    },
    {
     "_id": "d4391846-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Jenna",
     "lastName": "Williams",
     "email": "jenna.williams@tmobile.com",
     "password": "eqPLleF7fA",
     "isAdmin": false,
     "date": "2021-04-27T07:58:23.024Z"
    },
    {
     "_id": "d4398c47-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Autumn",
     "lastName": "Pollard",
     "email": "autumn.pollard@yahoo.com",
     "password": "hSSTWBARox",
     "isAdmin": true,
     "date": "2021-04-27T07:58:23.024Z"
    },
    {
     "_id": "d439175a-a1ac-11eb-ac18-c98a17456615",
     "firstName": "Madeline",
     "lastName": "Estes",
     "email": "madeline.estes@yahoo.com",
     "password": "MS78BJ3kCg",
     "isAdmin": true,
     "date": "2021-04-27T07:58:23.024Z"
    }
   ]

   let userResult = users.reduce(function(acc, item , index){
       // to add keys and values 
     if(index % 2 === 0 ) {
        acc[index] = item.lastName;
     }
     
     //create new key                   //  create a new valuevalue 
       return  acc
   },{}) // initial value of the accumulator as empty object 
   //console.log( userResult);
// let prices = [40,55,20,10]
// // amount the previous item
// // item : the current element 
// let amountPrice = prices.reduce(function(amount,item){
//   console.log(amount , item)
  
//   return amount + item

// } )
//    console.log(amountPrice);


let str = [ "java" , "go" , "visual basic" ,"php"];
let newStr = str.reduce(function(total , item , index){
      if(item.length > 2){
        //total.push(item)
        total[index] = item
      }
        return total
   
},{})
console.log(newStr)












