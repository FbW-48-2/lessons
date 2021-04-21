// spread ... 
// to clone and object or array 


// clone array
let colors = ["red" , "green" , "blue"];

let myColors = [...colors]

myColors.push("yellow");
console.log("colors :",colors);

console.log("myColors:", myColors);

let newColors = ["magenta","orange"];
//myColors.push(...newColors);
myColors = ([...colors,"violet", ...newColors])

console.log("myColors:", myColors);

// clone an Object
let user = { 
    name: "Natalie",
    address:"Berlin"
}
//let cloneUser = user;
let cloneUser = {...user}

cloneUser.age = 35
console.log("user ", user);
console.log("cloneUser", cloneUser);

let data = {
    job:"Frontend Developer",
    company:"google"
}
cloneUser = { ...user,  ...data  , likesBackend:true}
console.log("cloneUser", cloneUser);


let recipe = {
    mainDish :"pizza",
    fruits:["apple","banana"]
}

let newRecipe = {...recipe} ;
//let newRecipe = Object.assign({} , recipe)
newRecipe.mainDish ="pasta"

newRecipe.fruits.push("orange")

console.log("recipe",recipe);
console.log("newRecipe",newRecipe);

// deep cloning for objects 
// 1- JSON 
// 2- RECURSION Function

let recipeClone =   JSON.stringify(recipe);
let result = JSON.parse(recipeClone);

result.fruits.push("Blueberries")
console.log("result", result);
console.log("recipe", recipe);
