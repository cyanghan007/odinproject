const choices = ["rock", "paper", "scissors"];
//round won array
const winners = [];
//game function with for loop for 6 rounds in total
game = () => {
    //play game using arrow function
    //for loop to play 6 rounds
    for(let i = 1; i <= 6; i++) {
        playRound();
    }
    //Shows who won which rounds
    logWins();
}
//play rounds function
playRound = () => {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    // console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    //push winners into our array we have setup
    winners.push(winner);
    // logRound(playerSelection, computerSelection, winner, round);
}

playerChoice = () => {
    //get input from player with a prompt box
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = checkInput(input);
    while (check == false) {
        //this will prompt user to type the word in correctly
        input = prompt('Type Rock, Paper, or Scissors. Spelling needs to be exact, not caps sensitive!'); 
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = checkInput(input);
    }
    return input;
}

computerChoice = () => {
    //get input from computer
    return choices[Math.floor(Math.random() * choices.length)]
}
// checks comps input choice
checkInput = choice => {
    if (choices.includes(choice)) {
        return true;
    } 
        return false;
    }
// compares players choice to comps choices to see who is the winner
checkWinner = (choiceX, choiceY) => {
    if (choiceX === choiceY) {
        return 'Tie';
    } else if (((choiceX === 'rock' && choiceY == 'scissors') || (choiceX == 'paper' && choiceY == 'rock')) || (choiceX == 'scissors' && choiceY == 'paper')) {
        return 'Player';
    } else {
        return 'Computer'
    }
}

//function to log who wins in the console
logWins = () => {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:')
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log("Ties", ties);
}

//logs rounds and choice each player chose
// logRound = (playerChoice, computerChoice, winner, round) => {
//     console.log('Round:', round);
//     console.log('Player chose', playerChoice);
//     console.log('Computer chose', computerChoice);
//     console.log(winner, 'Won the Round');
// }

//start game
// game();