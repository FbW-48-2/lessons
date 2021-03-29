// 1. Add up

function sumIntFrom1ToN(int) {
    let sum = 0;
    for (let i = 0; i <= int; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumIntFrom1ToN(25));

// 2. Cubed

function sumOfCubes(num1, num2, num3) {
    let arrayNumber = [];
    let sumTotal = 0;
    if(!num1) return sumTotal;
    arrayNumber.push(num1);
    if(num2) arrayNumber.push(num2);
    if(num3) arrayNumber.push(num3);
    for (let i = 0; i < arrayNumber.length; i++) {
        sumTotal += Math.pow(arrayNumber[i], 3);
    }
    return sumTotal;
}
console.log(sumOfCubes())

// 3. String Check

function isStrStartOfWord(str, word) {
    const INDEX_END = str.length + 1; //substring() prep: calculates the index of the first character to exclude from the returned substring check
    const LOWER_CASE_STR = str.toLowerCase();
    const LOWER_CASE_WORD = word.toLowerCase();
    return LOWER_CASE_WORD.substring(0, INDEX_END) === LOWER_CASE_STR;
};

console.log(isStrStartOfWord("hicc", "hiccough"));
console.log(isStrStartOfWord("spices", "German food uses spices"));
console.log(isStrStartOfWord("hello", "Hello, World"));

// 4. Less than or Equal to Zero?

function isLEQZero(number) {
    return number <= 0;
}

console.log(isLEQZero(-10));

// 5. Count Occurrences

function countOccurrences(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            counter++;
        }
    }
    return counter;
}

console.log(countOccurrences("this is a string", "i"));


//6. X To The Power of X

function calcBaseToExponent(base, exponent) {
    return base ** exponent; // exponentiation operator
}

console.log(calcBaseToExponent(3, 3));

// 7. Dog Years

function calcAgeInDogYears(AgeInHumanYears) {
    const DOGGO_YEARS = AgeInHumanYears * 7;
    return `Your doggo is ${DOGGO_YEARS} years old in dog years and is also a 13/10 pupper`;
}

console.log(calcAgeInDogYears(9));

// 8. Lifetime Supply

function calcLifetimeSupply(currentAge, amountPerDay) { //Bonus: maxAge can be added here as a parameter. Snack was also added here for show
    const MAX_AGE = 100;
    const AVERAGE_YEAR = 365.25; //simplified calc for leap years
    const SUPPLY_CALC = Math.ceil((MAX_AGE - currentAge) * AVERAGE_YEAR * amountPerDay); // Bonus: MAX_AGE could also be taken from a parameter here, Math.ceil() rounds the result of floating values here
    return `The snack company should provide you with ${SUPPLY_CALC} pieces, until you are a ripe old age of ${MAX_AGE}. Happy snacking!`; 
}

console.log(calcLifetimeSupply(25, 2));
console.log(calcLifetimeSupply(40, 3));
console.log(calcLifetimeSupply(32, 0.58));


//9. Where's Waldo?

function isWaldoHere(str) {
    const LOWER_CASE_STR = str.toLowerCase(); // prep: includes() is case-sensitive 
    return LOWER_CASE_STR.includes("waldo");
}

console.log(isWaldoHere("where is Wally?"));
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));

// 10. Pie

function isEqualSlices(totalSlices, numOfRecipients, slicesPP) {
    const NEEDED_SLICES = numOfRecipients * slicesPP;
    return totalSlices >= NEEDED_SLICES;
}
console.log(isEqualSlices(4, 2, 3));
console.log(isEqualSlices(4, 2, 2));
console.log(isEqualSlices(4, 3, 1));

// 11. XO

function isEqualNumberOfXandOs(str) {
    const LOWER_CASE_STR = str.toLowerCase();
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (LOWER_CASE_STR[i] === "x") {
            countX++;
        } else if (LOWER_CASE_STR[i] === "o") {
            countO++;
        }
    }
    if ((countX === 0) && (countO === 0)) {
        return `${true}: there is no instance of either "x" or "o"`;
    } else if (countX === countO) {
        return `${true}: we have the same number of "x" and "o"s`;
    } else if (countX !== countO) {
        return `${false}: panic stations, we do not have the same number of "x" and "o"s`;
    }
}

console.log(isEqualNumberOfXandOs("ooxx"));
console.log(isEqualNumberOfXandOs("xooxx"));
console.log(isEqualNumberOfXandOs("ooxXm"));
console.log(isEqualNumberOfXandOs("zpzpzpp"));
console.log(isEqualNumberOfXandOs("zzoo"));

// 12. isPrime?

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;  
}

console.log(isPrime(7)); // ➞ true
console.log(isPrime(9)); // ➞ false
console.log(isPrime(10)); // ➞ false

// console.log(isPrime(212));

// 13. Validate Email

function validate(email) {
    let atSymPos;
    let atSymCounter = 0;
    let dotPos;

    for (let i = 0; i < email.length; i ++) {
        if (email[i] === "@") {
            atSymCounter ++;
            atSymPos = i;
            if (atSymPos === dotPos + 1) {
                return `${email} is invalid: "." found directly before "@"`; //checks if "." is directly before "@"
            }
            // inspect code at work: console.log(`@ located at ${atSymPos}`);
        }
        if (email[i] === ".") {
            dotPos = i; // NB: if there are multiple dots, Pos will indicate last dot placement
            // inspect code at work: console.log(`. located at ${dotPos}`);
            if (dotPos === atSymPos + 1) { // checks if "." is directly after "@"
                return `${email} is invalid: "." found directly after "@"`;
            }
            if (email[dotPos + 1] === ".") { // checks if there are consecutive "."
                return `${email} is invalid: consecutive "." found`;
            }
        }
    }
    
    if ((atSymCounter !== 1) || (atSymPos === 0) || (atSymPos === email.length - 1)){ //checks if we have exactly 1 "@" character AND that the "@" is NOT first or last character
        return `${email} is invalid: "@" syntax error`;
    } else if ((email[0] === ".")|| (dotPos < atSymPos) || (dotPos === email.length - 1)) { // checks if "." is first character, AND if there is no "." after "@", AND "." is NOT last character
        return `${email} is invalid: "." syntax error`;
    } else {
        return `${email} is valid`;
    }  
}

console.log(validate("j@example.com"));
console.log(validate("@example.com)"));
console.log(validate("john.smith@com"));
console.log(validate("john.smith@email.com"));
console.log(validate("personal.@fran.borg"));
console.log(validate("jennaIsAwesome@..mail.com"));
console.log(validate("hereComes...jenna@mail.com"));
console.log(validate("lastOne@orIsIt.com."));
