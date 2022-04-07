var readlineSync = require("readline-sync");

console.log("CLI Quiz Game :: How much do you know about M. Usman.\n");

var username = readlineSync.question("May I know your Name: \n");

console.log("\n");
console.log("Hello ", username, " Let's start the GAME!!!!\n");

var userScore = 0;

var userFullName = readlineSync.question("What is my Full Name?");
if (userFullName.toLowerCase() === "muhammad usman") {
  console.log("Your answer is right.");
  userScore++;
} else {
  console.log("Opps - Your answer is Wrong. My  full name is Muhammad Usman.");
}
console.log("Current Score: ", userScore);
console.log(
  "----------------------------------------------------------------\n"
);

var userAge = readlineSync.question("Am i older than 40 years? (yes/no)");
if (userAge.toLowerCase() === "no") {
  console.log("Your answer is right.");
  userScore++;
} else {
  console.log("Opps - Your answer is Wrong. I am 39 years old.");
}
console.log("Current Score: ", userScore);
console.log(
  "----------------------------------------------------------------\n"
);

var userPlace = readlineSync.question("Where do i live?");
if (userPlace.toLowerCase() === "faisalabad") {
  console.log("Your answer is right.");
  userScore++;
} else {
  console.log("Opps - Your answer is Wrong. I live in faisalabad.");
}
console.log("Current Score: ", userScore);
console.log(
  "----------------------------------------------------------------\n"
);

var userMatialStatus = readlineSync.question("Am i Married? (yes/no)");
if (userMatialStatus.toLowerCase() === "yes") {
  console.log("Your answer is right.");
  userScore++;
} else {
  console.log("Opps - Your answer is Wrong. I am Married.");
}
console.log("Your Final Score: ", userScore);
console.log(
  "----------------------------------------------------------------\n"
);

console.log("Thanks for showing interest in this GAME.");
