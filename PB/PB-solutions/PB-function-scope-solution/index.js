// 1
function printExponentialValues(x, y) {
    if ((typeof x !== "number") || (typeof y !== "number")) {
        console.log("x or y is not a number");
    }
    let exponentResult = 1;
    let values = "";
    for (let i = 0; i < y; i++) {
        exponentResult *= x;
        values += `${exponentResult} `;
    }
    console.log(values);
}
printExponentialValues(2, 5);


// 2
let fruit = "peach";

function printFavoriteFruit() {
    fruit = "plum";
    console.log(`my favorite fruit is ${fruit}`);
}

printFavoriteFruit();

// 2
function exponent(startNumber, exponent) {
  let result = 0;
  const multiplicationResult = startNumber * startNumber;
  for (let i = 0; i < exponent; i++) {
    result += multiplicationResult;
  }
  console.log(result);
}

exponent(2, 10);

// Q2
// console.log(result);
// It is not possible to access the variable `result` in this case since it is locally scoped and we are trying to access it from the global scope.
