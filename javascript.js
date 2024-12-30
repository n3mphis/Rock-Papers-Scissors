/* SECTION FOR SCORE */
let humanScore = 0;
let computerScore = 0;

/* SECTION FOR STRINGS VARIABLE */
let r = "Rock";
let p = "Paper";
let s = "Scissors";

let input = prompt("Please choose Rock, Paper or Scissors");
/* RANDOM NUMBER */
let randomNumber = Math.floor(Math.random() * 100) + 1;

/* SECTION FOR FUNCTIONS */

function getComputerChoice() {
    if (randomNumber <= 40) {
        return r;
    } else if (randomNumber <= 70) {
        return s;
    } else {
        return p;
    }
}

function getHumanChoice() {
    if (input === r || input === p || input === s) {
        return alert("You chose " + input);
    } else {
        return alert(input + " is not a valid option");
    }
}
/* SECTION FOR CONSOLE LOG */

console.log(getComputerChoice());
console.log(getHumanChoice());