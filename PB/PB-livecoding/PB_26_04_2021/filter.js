let ages = [ 18, 19, 13 , 40 , 35 , 10 ,5];

let isAllowedToDrive = ages.filter(function(item){
    // if(item >= 18 ){
    //     return item;
    // }
    return item >= 18 
});
// console.log(ages);
// console.log(isAllowedToDrive);

let words = ["javascript","java","go", "php","visual basic" ,"fortrun"];
let newWords = words.filter(function(element){
    return element.length > 6

});
//console.log(newWords);

//#######################################################

// filter array items according to search word 
let fruits = ["avocado" , "banana" , "apple" ,"kiwi"];
let search ="BANANa";

let result = fruits.filter(function(element){
   return element.toLowerCase().indexOf(search.toLowerCase()) !== -1;  // -1 means not found 
});
//console.log(result.length > 0 ? result : "not Found");
 
//####################################################### 
function searchFood(arr, word){
    let newArr =  arr.filter(function(element){
        return element.toLowerCase().indexOf(word.toLowerCase()) !== -1; 
    });

    return newArr
     
}
console.log(searchFood(fruits, "av"));
console.log(searchFood(fruits, "ba"));
console.log(searchFood(fruits, "app"));
