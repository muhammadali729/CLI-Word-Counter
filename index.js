#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count your words:"
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`Words in your sentence is: ${words.length}`);
