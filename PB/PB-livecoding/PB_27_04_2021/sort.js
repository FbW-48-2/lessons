
//
const arr = ["c" ,"a" ,"b"];

const teams = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];

console.log(arr.sort()); //      [ 'a', 'b', 'c' ]
console.log(arr.reverse());   // [ 'c', 'b', 'a' ]
console.log(teams.sort());

let nums = [32 , 12  , 3  ];
//  [ 12 , 23 , 3 ]

 
//console.log(nums.sort());
// compare function 
// function(a,b) {   return a-b } 
const sorted = nums.sort(function(a,b){
     console.log("a : ", a , "b :",b); 
     
        return a -b  
     
    
    })
// 1- a-b negative that means a smaller than b 
// 2- a-b positive  that means b smaller than a
// 3- a and b 
console.log(sorted);

let products = [{ id:1 , name: "apple", price :300 },
                {id:33 , name: "dell", price :200} ,
                {id:1 , name: "hp", price :250 }
                ]
let sortedProducts = products.sort(function(a,b){
    if(a.id === 1){
        return a.id -b.id  
    }
})               

console.log(sortedProducts);