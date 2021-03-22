//1. Declare a variable named "euroCitiesArr" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCitiesArr = ["Paris", "London", "Rome", "Prague", "Valletta"];
const secondCity = euroCitiesArr[1];
console.log(secondCity);

//2. Change the first item in the array to "Berlin".

euroCitiesArr[0] = "Berlin";
console.log(euroCitiesArr);

//3. Print the length of the array "euroCitiesArr".

console.log(euroCitiesArr.length);

//4. Remove the last item of the array "euroCitiesArr".

euroCitiesArr.pop();
console.log(euroCitiesArr);

//5. Use an array method to add "Budapest" to the euroCities array.

euroCitiesArr.push("Budapest");
console.log(euroCitiesArr);

//6. Bonus: Remove the second and third items from the euroCities array.

euroCitiesArr.splice(1, 3);
console.log(euroCitiesArr);

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCitiesArr = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];

//Bonus: 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  

const citiesArr = asianCitiesArr.slice(1, 3);
console.log(citiesArr);

//Bonus: 9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

const worldCitiesArr = euroCitiesArr.concat(asianCitiesArr);

//10. Reverse the order of worldCities.

console.log(worldCitiesArr.reverse());

//Bonus: 11. Replace the 3rd item in the array of worldCities with "Toronto". 
worldCitiesArr.splice(2, 1, "Toronto");
console.log(worldCitiesArr);

//Bonus: 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCitiesArr.splice(1, 0, "Washington");
console.log(worldCitiesArr);

//Bonus: 13. Write a program to join all elements of the result (worldCitiesArr) into a string. 

console.log(worldCitiesArr.join(', '));
console.log(worldCitiesArr.join(' + '));

//BONUS 

//Reverse String 
const string = "Hello World";
strToArr = string.split("");
strToArr.reverse();
const reversedString = strToArr.join("");
console.log(reversedString);

// EXTRA PRACTICE 

//1. Make an array of your siblings' names or your favorite movie characters' names.
const family = ["Miriam", "John", "Erika", "Julian"];

//2. Make an array of your parents' names.
const parents = ["Yasmin", "Adrian"];

//3. Combine these two arrays.
const wholeFamily = family.concat(parents);
console.log(wholeFamily);

//4. Add your pets' names.
wholeFamily.push("Toby");
console.log(wholeFamily);

//5. Reverse the order of the array.
wholeFamily.reverse();
console.log(wholeFamily);

//6. Access one of your parents' names.
let mother = wholeFamily[2];
console.log(mother);

//7. Update the name of one of your parents. 
mother = "Yasmin Borg";
console.log(mother);

wholeFamily[1] = "Adrian Borg";
console.log(wholeFamily); 
