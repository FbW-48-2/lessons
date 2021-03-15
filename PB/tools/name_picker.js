const students = [
  "Ebony",
  "Shinhee",
  "Habid",
  "Lucas",
  "Monishka",
  "Charli",
  "Beda",
  "Jo",
  "Norman",
  "Jonathan",
  "Luana",
  "Priya",
  "Carlos",
  "Christoph",
  "Daniel",
  "Maria Louise",
  "Aimee",
  "Tim",
  "Dalibor",
  "Martin",
  "Francesco",
  "Shreekesh",
];

const genRandomIndex = () => Math.floor(Math.random() * students.length);

console.log(
  "PB-operators-arithmetic-pt2 (1-4)=> ",
  "🦾",
  students[genRandomIndex()]
);

// 8 / 2 = 4

// 8 % 2 = 0 ==>
// 8 - 2 = 6
// 6 -2 = 4
// 4 -2 = 2
// 2 - 2 = 0 the number is even

let num = 5;

//console.log("1 ==> ", ++num);
//console.log("2 ==> ", ++num);
//console.log("3 ==> ", ++num);
num++;
console.log("1 ==> ", num);
