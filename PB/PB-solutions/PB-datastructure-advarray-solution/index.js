//  1
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

const totalAmount = orders.reduce((sum, order) => {
  console.log("current values:", sum, order);
  return sum + order.amount; // return value gets assigned to the accumulator and passed into the next call
}, 0);

console.log(totalAmount);

//  2 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const mappedArray = arrayOfNumbers.map(el => el + 1);
console.log(mappedArray);

// 3
function filterEvens(array) {
    return array.filter(el => el % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 4, 5, 6]));


// 4
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterFriends(friendsArray, key) {
    return friendsArray.filter(el => el.includes(key));
}

console.log(filterFriends(friends, "i"));

//  5
const sumUp = (arrayOfNumbers) => arrayOfNumbers.reduce((cur, acc) => cur + acc);
console.log(sumUp([1, 2, 3]))

// 6
const getSquareRoot = (arrayOfNumbers) => arrayOfNumbers.map(el => Math.sqrt(el));
console.log(getSquareRoot([1, 2, 3])) 