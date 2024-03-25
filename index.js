#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a number between 1-10"
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! You Guessed Right Number");
}
else {
    console.log("You Guessed Wrong Number");
}
