// 1

let euroCities = ["Prague", "Valletta"];
let asiaCities = ["Beijing", "Tokyo"];

euroCities = [...euroCities, ...asiaCities];
console.log(euroCities);

let euroCountries = ["Germany", "France"];
let asiaCountries = ["China", "Japan"];

let worldCountries = [...euroCountries, ...asiaCountries];
console.log(worldCountries);

// 2
let copyAsiaCities = [...asiaCities];
console.log(copyAsiaCities);
console.log(asiaCities);

// 3

const findLargestNumber = array => Math.max(...array);
console.log(findLargestNumber([1, 2, 3]));

// 4

const findSmallestNumber = array => Math.min(...array);
console.log(findSmallestNumber([1, 2, 3]));

// 5
//  5.1
const person = { name: "John" };
const job = { role: "Teacher" };

const clonePerson = { ...person };
console.log(clonePerson);

// 5.2
const mergedObject = { ...person, ...job };
console.log(mergedObject);

// 5.3
job.role = "Plumber";
console.log(job);
console.log(mergedObject);

//  Bonus: 6
function isWhole(a, b, c, d) {
  const total = a + b + c + d;
  const average = total / arguments.length;
  return Number.isInteger(average);
}
console.log(isWhole(...[1, 2, 3, 6]));
