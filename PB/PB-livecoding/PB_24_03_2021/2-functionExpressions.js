// There is another syntax for creating a function that is called a Function Expression.
// 1. create function with function keyword
// 2. create function with let/const/var keyword

//1-

// Hoisting
// https://developer.mozilla.org/de/docs/Glossary/Hoisting
sumNumbers(); //17
function sumNumbers() {
  console.log(6 + 11);
}
//########################
//2-

const saySomething = function () {
  console.log("Hallo Alex!");
};
saySomething(); // Hallo Alex!
