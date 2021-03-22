// 1) Write a program for picking a random country from countries.

let countries = "Germany Spain Italy USA";

let randomNumber = Math.floor(Math.random() * 4);

let randomCountry =
  randomNumber === 0
    ? "Germany"
    : randomNumber === 1
    ? "Spain"
    : randomNumber === 2
    ? "Italy"
    : "USA";
console.log(randomCountry);

// what would be much simpler:

let countriesArray = countries.split(" ");
let randomCountryFromTheArray =
  countriesArray[Math.floor(Math.random() * countriesArray.length)];
console.log("randomCountryFromTheArray:", randomCountryFromTheArray);

// ----------------########------------------

// 2) Write a program to print a random name from the list of names in the following format: 'Hello, ' and the random name.

let names = "Alex Max Tommy";
let namesArray = names.split(" ");

let randomNamesNumber = Math.floor(Math.random() * namesArray.length);

let randomName = namesArray[randomNamesNumber];

console.log(`Hello, ${randomName}`);

// ------#######----------------

// 3) Write program to picking number name from numbers. The output Should be absolute (not negative numbers).

let numbers = "-1 7 -33 -8 9";
let numbersArray = numbers.split(" ");

let randomNumbersNumber = Math.floor(Math.random() * 5);

let randomNumberFromTheNumbersString = Math.abs(
  numbersArray[randomNumbersNumber]
);

console.log(
  "absolute value of a random number from the numbers string: ",
  randomNumberFromTheNumbersString
);
