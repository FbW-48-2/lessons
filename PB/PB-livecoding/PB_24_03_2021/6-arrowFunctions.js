// Arrow Functions shows with ES6.Arrow Functions very convenient for simple one-line actions, when we’re just too lazy to write many words.

// () => right  Arrow functions needs const or let or var
// () <= wrong

function greeting_1() {
  return "Good morning Dalibor!";
}

console.log("greeting_1() ==> ", greeting_1());
// greeting_1() ==>  Good morning Dalibor!

const greeting_2 = function () {
  return "Good morning Mo!";
};
console.log("greeting_2() ==> ", greeting_2());
// greeting_2() ==>  Good morning Mo!

// ARROW FUNCTION

const greeting_3 = () => {
  return "Good morning Jo!";
};

console.log("greeting_3()   ", greeting_3());
// greeting_3()    Good morning Jo!

// For one line of code
const greeting_4 = () => "Good evening Carlos!";

console.log("greeting_4()   ", greeting_4());
