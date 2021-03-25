// The Functions Are Reusable Components (parameters and arguments)

function greeting(name) {
  // return "Hallo " + name;
  return `Hallo ${name}`;
}

// arguments
console.log(greeting("Tommy")); //Hallo Tommy
console.log(greeting("Pilar")); // Hallo Pilar
console.log(greeting("Dalibor")); //Hallo Dalibor
console.log(greeting("Mo")); //Hallo Mo
console.log(greeting("Danial")); //Hallo Danial

function evenOdd(num) {
  if (num % 2 == 0) {
    return `${num} is EVEN!`;
  } else {
    return `${num} is ODD!`;
  }
}

console.log(evenOdd(5)); // 5 is ODD!
console.log(evenOdd(100)); //100 is EVEN!

function adminUser(userName, isAdmin) {
  return isAdmin ? userName + " is: Admin " : userName + " Not admin";
}

console.log(adminUser("Jon", true));
console.log(adminUser("Max", false));

//let email = "test";
const info = (firstName, lastName, email) => `
first name: ${firstName}
last name: ${lastName}
email: ${email}
`;

// "first name: " + firstName

console.log(info("Tommy", "anything", "tommy@yahoo.com"));

/**
first name: Tommy
last name: anything
email: tommy@yahoo.com
 */

// ###################################
/** Task **
 * 
 * INPUT                      OUTPUT
 arrayToNumber([2,4,5])       ==> 11
 arrayToNumber([1,2,1,1,1])   ==> 6
 arrayToNumber([2,0])         ==> 2
 arrayToNumber([2,'ABC',2,1]) ==> 5

 */
/**
 if (typeof arr[i] == "number") {
      box += arr[i];
    }
 */

function arrayToNumber(arr) {
  let box = 0;
  for (let i = 0; i < arr.length; i++) {
    /*
   box      i     i < arr.length      arr[i]      box += arr[i]        i++         
    0       0      0 < 3 = true      arr[0] = 2    0 + 2 = 2            0 + 1 = 1
    2       1      1 < 3 = true      arr[1] = 4    2 + 4 = 6            1 + 1 = 2
    6       2      2 < 3 = true      arr[2] = 5    6 + 5 = 11           2 + 1 = 3
    11      3      3 < 3 = false    STOP THE LOOP

*/
    box += arr[i];
  }

  return box;
}
console.log(arrayToNumber([2, 4, 5])); // 11
/**
11
6
2
5
 */

//console.log(arrayToNumber([1, 2, 1, 1, 1]));
//console.log(arrayToNumber([2, 0]));
//console.log(arrayToNumber([2, "ABC", 2, 1]));
