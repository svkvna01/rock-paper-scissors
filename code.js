//starts game
function game () {
    for (let i=0; i< 5; i++) {
        playRound(i);
    }
}

//Array of choices
const choices = ['rock', 'paper', 'scissors'];

// random computer play
function computerPlay () {
    return choices[Math.floor(Math.random()*choices.length)];
}

// Player input
function playerChoice() {
    let input = prompt("Enter Rock, Paper or Scissors to play");
    while (input == null) {
        input = prompt("Enter Rock, Paper or Scissors to play");
    }
    input = input.toLowerCase();
    let check = validInput(input);
    while (check == false) {
      input = prompt("Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter");
    }
    return input;
}

//check valid input
function validInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

//One play round
function playRound () {
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();

    // Tie 
    if (playerSelection === computerSelection) {
       console.log("It's a tie! Play again!");

     // Rock beats Scissors
    }else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log("You win! Rock beats Scissors!");
        } else {
            console.log("You lose! Paper beats Rock!");
        }
    
    // Paper beats Rock
    }else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("You win! Paper beats Rock!");
        } else {
            console.log( "You lose! Scissors beats Paper!");
        }
    
    // Scissors beat Paper
    }else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log("You win! Scissors beats Paper!");
        } else {
            console.log("You lose! Rock beats Scissors!");
 
        }
    }
}







