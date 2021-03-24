// 1
const color = "";

switch (color) {
  case "red":
    console.log("Red's a great color on you.");
    break;
  case "blue":
    console.log("Blue? Great choice.");
    break;
  case "green":
    console.log("Ok. Green it is.");
    break;
  case "yellow":
    console.log("Not what I would have picked, but yellow is fine.");
    break;
  default:
    console.log("The aim of the game is to pick a color.");
    break;
}

// 2
const grade = "B";

switch (grade) {
  case "A":
    console.log("A - Well done!");
    break;
  case "B":
    console.log("B - Good on you!");
    break;
  case "C":
    console.log("C - Good effort");
    break;
  case "D":
    console.log("D - Try harder next time...");
    break;
  default:
    console.log("Yikes...");
    break;
}

// 3
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Bananas are full of potassium.");
    break;
  case "orange":
    console.log("Yep, oranges. Great choice.");
    break;
  case "strawberry":
    console.log("Mmmm...nothing better than strawberries.");
    break;
  default:
    console.log("PICK A FRUIT");
    break;
}

// 4
const percentageComplete = 29; 
if (percentageComplete < 30) {
    console.log("Still a long way to go");
} else if (percentageComplete >= 30 && percentageComplete <= 50) {
    console.log("Slowly getting there...")
} else if (percentageComplete >= 51 && percentageComplete <= 80) {
    console.log("You can do it!")

} else if (percentageComplete >= 81 && percentageComplete <= 99) {
    console.log("This is the last push!");
} else {
    console.log("You're there. Well done!");
}

// Generally, if we are testing an expression or boolean values, then we would use if/else. In contrast, we would use switch when choosing between a number of options.
