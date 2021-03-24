const myNum = "giraffe";

if ((myNum % 3 == 0) && (myNum % 5 == 0)) {
    console.log("Fizzbuzz");
} else if (myNum % 3 == 0) {
    console.log("Fizz");
} else if (myNum % 5 == 0) {
    console.log("Buzz")
} else {
    console.log("What fresh hell is this?") 
    // this is good if the input is, despite all instructions, not a number.
}
