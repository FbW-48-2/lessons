//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the said range.

let int1 = 1; let int2 = 50;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
    console.log(true);
}else {
    console.log(false);
}

//2. Check if three given integer values are in the range 50 to 99 (inclusive). Return true if one or more of them are in the said range.

let int3 = 100;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) || (int3 >= 50 && int3 <= 99)) {
    console.log(true);
} else {
    console.log(false);
}

//3. Declare the variables a, b and c - give them number values. Check which one out of the three variables has the largest value. Then change the values of the variables to see if your conditional still works. 

console.log(Math.max(int1, int2, int3));

int1 = 99; int2 = 1; int3 = 49; // reassignment of values

console.log(Math.max(int1, int2, int3));

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const strPrefix = "Py";

const str = "thon";

if (str.substring(0,2) == "Py") { 
    console.log(str); 
} else {
    console.log(`${strPrefix}${str}`);
}

//5. Calculate the sum of the two integers. If the sum is in the range 50..80 return 65 other wise return 80. 
let sumTwoIntegers = int1 + int2;

if (sumTwoIntegers >= 50 && sumTwoIntegers <= 80) {
    console.log(65);
} else {
    console.log(80);
}

sumTwoIntegers = int2 + int3; // for testing

if (sumTwoIntegers >= 50 && sumTwoIntegers <= 80) {
    console.log(65);
} else {
    console.log(80);
}

//6. Check whether the sum of two integers is 8 or whether their difference is 8. 

let int4 = 6; int5 = 2;

if ((int4 + int5 == 8) || ( (Math.abs(int4 - int5 == 8)))) { // *see below!
    console.log(true);
} else {
    console.log(false);
}

int4 = 16; int5 = 8; // for testing

if ((int4 + int5 == 8) || ( (Math.abs(int4 - int5 == 8)))) {
    console.log("true"); // note this string is not the same as the above true value
} else {
    console.log("tough nuggets, maaaate"); 
}

//* note that vs code helps you work out if you have enough parentheses, simply hover over a parenthesis to see it's counterpart

//7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, return true. 

if (((int4 == 15) || (int5 == 15)) || (int4 + int5 == 15)) {
    console.log(true);
} else {
    console.log(false); 
}

int4 = 9; int5 = 6;

if (((int4 == 15) || (int5 == 15)) || (int4 + int5 == 15)) {
    console.log(true);
} else {
    console.log(false); 
}


//8. Check whether one of two integers is a multiple of 7 or 11. 

if ((int4 % 11 == 0 || int4 % 7 == 0) || (int5 % 11 == 0 || int5 % 7 == 0)) {
    console.log(true);
} else {
    console.log(false);
}

int4 = 22; // testing, testing...

if ((int4 % 11 == 0 || int4 % 7 == 0) || (int5 % 11 == 0 || int5 % 7 == 0)) {
    console.log(true);
} else {
    console.log(false);
}

//9. Calculate the sum of the two given integers. If the two values are same, then return triple their sum. 

sumTwoIntegers = int4 + int5;
const tripleSum = 3 * sumTwoIntegers;

if (int4 == int5) {
    console.log(tripleSum);
} else {
    console.log(`${sumTwoIntegers}. d is not equal to e. Duh`);
}

int5 = 22;

sumTwoIntegers = int4 + int5;

if (int4 == int5) {
    console.log(tripleSum);
} else {
    console.log(`${sumTwoIntegers}. d is not equal to e. Duh`);
}

//10. Calculate the difference between a specified number and 19. Return double the difference if the specified number is greater than 19.

let diffFrom19 = Math.abs(int5  - 19);
const diffDouble = 2 * diffFrom19;

if (int5 > 19) {
    console.log(diffDouble);
} else {
    console.log(`${diffFrom19}. Here I am with a brain the size of a planet and they ask me to calculate this. Call that job satisfaction? I don't.`)
}

int5 = 18;

diffFrom19 = Math.abs(int5  - 19); // important to repeat this for correct result! 
if (int5 > 19) {
    console.log(diffDouble);
} else {
    console.log(`${diffFrom19}. Here I am with a brain the size of a planet and they ask me to calculate this. Call that job satisfaction? I don't.`)
}

//11. Bonus: Age/Life-stage

const firstName = "Elloura";

const age = "pineapple";

if (age < 13) {
    console.log(`${firstName} is a child`);
} else if (age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age < 30) {
    console.log(`${firstName} is a young adult`);
} else if (age >= 30) {
    console.log(`${firstName} is an adult`);
} else {
    console.log("Oi, put in a valid numeric age!");
}
