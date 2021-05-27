//Q1 Object Person

const person = {
    citizenship: "EU",
    name: "Minya Ohn B Ness",
    gender: "cisfemale",
    height: 164,
    "eye colour": "hazel"
}

for (const prop in person) {
    console.log(`person.${prop} : ${person[prop]}`);
}

//Q2 Get Values
const myObject = {
    1: "1", 
    2: "2"
}

function getValues(object) {
    return Object.values(object);
}

console.log(getValues(myObject));

//Q3 Add A Method

// //uncomment person object in Q1

person.printValues = function() {return console.log(`${person.name} is a citizen of ${person.citizenship}. They are ${person.gender}, ${person.height}cm tall and have ${person['eye colour']} eyes.`);};

person.printValues()

// Bonus Questions

//Q1 Convert Keys and Values

const myObjects = {
    a: 1,
    b: 2,
    c: 3
}

function getKeyValuePairs(object) {
   return Object.entries(object);
}

console.log(getKeyValuePairs(myObjects));

//Q2 List Properties

function getProperties(object) {
    return Object.getOwnPropertyNames(object);
}

console.log(getProperties(person));

//Q3 Merge

const staycation = {snack: "biscuits"};
const staycation2 = {book: "The Year of the Flood"}
function mergeObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

console.log(mergeObjects(staycation, staycation2));
console.log(staycation)
// //The first parameter taken by the Object.assign() method is the *target* object that Object.assign() returns. If you set the first parameter to an existing non-empty object, that object will then be changed in the process of merging the next parameters into it. Object.assign() can, however, take multiple source parameters, and so, if you do not want to change one of the objects you would like to merge, you can instead use an {} as the target object, i.e. :

const staycations = {snack: "biscuits"};
const staycation02 = {book: "The Year of the Flood"};

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

console.log(mergeObjects(staycations, staycation02));
console.log(staycation);

//Q4 Switch Keys and Values

const stayCation = {
    location: "recliner chair",
    status: "comfy"
}

function copySwitch(object) {
  const keyValuePairs = Object.entries(object);
  let reversedArrays = [];
  for (let i = 0; i < keyValuePairs.length; i++) {
      reversedArrays.push(keyValuePairs[i].reverse())
  }
  return Object.fromEntries(reversedArrays);
}
console.log(copySwitch(stayCation));


//Q5 Return Keys and Values

function getKeysAndValues(obj) {
    const keyArr = Object.keys(obj);
    const valueArr = Object.values(obj);
    return [keyArr, valueArr];
}

console.log(getKeysAndValues({ a: 1, b: 2, c: 3 }));


