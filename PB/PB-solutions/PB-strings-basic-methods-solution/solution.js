// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const parkWalkStr = "I can walk in the park all day";
console.log(parkWalkStr.substring(17, 22));

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const helloStr = "Hello World";
console.log(helloStr.toUpperCase());

// 3. Declare another variable with the value of "Earthlings". Convert the value to lower case and print the converted value to the console.
const earthlingsStr = "Earthlings";
console.log(earthlingsStr.toLowerCase());

// 4. Declare a variable with the value "JavaScript". Print the the characters "aSc" to the console using the substring() method.
const javaStr = "JavaScript";
const midChars = javaStr.substring(3, 6);
console.log(midChars);

// 5. Check if the sentence "nice shoes" contains the letter l. 
const niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));

// 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ. 
const fruityStr = "Bananas";
const firstChar = fruityStr[0];
console.log(`${firstChar}${fruityStr}${firstChar}`);
// OR
let fruityStr2 = "Bananas";
let modifiedFruityStr2 = fruityStr2.replace("Bananas", "BBananasB");
console.log(modifiedFruityStr2);

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
const scritcherStr = "Scritch";
const lastThreeChars = scritcherStr.substring(scritcherStr.length - 3);
console.log(lastThreeChars + scritcherStr + lastThreeChars);
console.log(`${lastThreeChars}${scritcherStr}${lastThreeChars}`);

// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
const boogieNightsStr = "BoogieWoogie";
const firstLetter = boogieNightsStr[0];
const lastLetter = boogieNightsStr[boogieNightsStr.length - 1];
const remainderString = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
console.log(lastLetter + remainderString + firstLetter);

// 9. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation e.g. "My name is Maria. I live in Berlin and I am a teacher". 
const firstName = "Lola";
const location = "Copa-Copacabana";
const job = "showgirl";

console.log(`Her name was ${firstName}. She was a ${job} ... at the ${location}`);

//10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
const foxStr = "the quick brown fox";
const firstCharacter = foxStr[0].toUpperCase();
const remainderStr = foxStr.slice(1);
console.log(firstCharacter + remainderStr);
