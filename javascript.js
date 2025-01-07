let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return "paper";
    } else if (randomNumber > 0.66) {
        return "rock";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Choose your weapon");
    input = input.toLowerCase();

    return input;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") 
        switch(computerChoice) {
    case "paper":
        {
            alert("You lost. Paper beates Rock");
            ++computerScore;
            break;
        }
    case "scissors":
        {
            alert("You win! Rock beats Scissors");
            ++humanScore;
            break;
        }
        default:
            alert("It's a draw");
            break;
        }
    else if (humanChoice == "paper")
        switch(computerChoice) 
    {
        case "scissors":
            {
                alert("You lose. Scissors beats Rock");
                ++computerScore;
                break;
            }
        case "rock":
            {
                alert("You win! Paper beates Rock");
                ++humanScore;
                break;
            }
            default:
                alert("It's a draw");
                break;
    }
    else if (humanChoice == "scissors")
        switch(computerChoice)
    {
        case "rock":
            {
                alert("You lose. Rock beats Scissors");
                ++computerScore;
                break;
            }
        case "paper":
            {
                alert("You win! Scissors beats Paper");
                ++humanScore;
                break;
            }
        default:
            alert("It's a draw");
            break;
    }
    else {
        alert("Invalid Choice");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
       return alert("CONGRATULATIONS YOU WON!!");
    } else if (humanScore < computerScore) {
        return alert("You Lost. Refresh to play again");
    } else {
        return alert("That's awkward, a TIE");
    }
}

playGame();
console.log("Results:");
console.log("Human: " + humanScore);
console.log("Computer: " + computerScore);