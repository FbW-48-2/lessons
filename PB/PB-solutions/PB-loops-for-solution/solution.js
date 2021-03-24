//Q1 Addition

let sumOneToTwenty = 0;
for (let i = 1; i <= 20; i++) {
  sumOneToTwenty += i;
}
console.log(sumOneToTwenty);

//Q2 Bottles of Beer

for (let i = 1; i <= 5; i++) {
  if (i > 1) {
    console.log(`There are ${i} bottles of beer on the wall.`);
  } else {
    console.log(`There is ${i} bottle of beer on the wall.`);
  }
}

//Q3 Odd/Even

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//Q4 Multi tables

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * 9 = ${i * 9}`);
}
//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
// runs for i
for (let i = 0; i <= 10; i++) {
  // for each time that i runs, y runs 10 times
  for (let y = 0; y <= 10; y++) {
    const multiplier = i * y;
    console.log(`${i} * ${y} = ${multiplier}`);
  }
}

//Q5 FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Q6 Sum of Multiples

let sumOfMultiplesOfThreeAndFive = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    sumOfMultiplesOfThreeAndFive += i;
  }
}

console.log(sumOfMultiplesOfThreeAndFive);

//Q7

// 100, 200... 1000
const starter = 100;

for (let i = 1; i <= 1000 / starter; i++) {
  console.log(starter * i);
}

// 0, 2, 4... 10

for (let i = 0; i <= 10; ) {
  console.log(i);
  i += 2;
}

// 3, 6, 9 ... 15

for (let i = 3; i <= 15; ) {
  console.log(i);
  i += 3;
}

// 9, 8, 7... 0

for (let i = 9; i >= 0; ) {
  console.log(i);
  i--;
}

// 1 1 1 2 2 2 3 3 3 4 4 4

let count = 1;
for (let i = 1; i <= 4; ) {
  console.log(i);
  if (count !== 0 && count % 3 === 0) {
    i++;
    count = 0;
  }
  count++;
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let runCount = 0;
for (let i = 0; i <= 4; ) {
  console.log(i);
  if (i === 4 && runCount <= 1) {
    i = 0;
    runCount++;
  } else {
    i++;
  }
}

//Q8
let word = "Anna";

let wordToArray = word.toLowerCase().split("").reverse();

if (word.toLowerCase() == wordToArray.join("")) {
  console.log(true);
} else {
  console.log(false);
}
