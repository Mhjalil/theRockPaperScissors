let userInput = '';

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("ERRORRRR!");
    }

}

//console.log(getUserChoice('RoCk'));
//console.log(getUserChoice('forK'));

const getComputerChoice = () => {

    let choice = Math.floor((Math.random()) * 3);

    switch (choice) {
        case (0):
            return 'rock';
            break;
        case (1):
            return 'paper';
            break;
        default:
            return 'scissors';
            break;
    }

}

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The Game is tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

}
//console.log(determineWinner('paper', 'scissors'));
//console.log(determineWinner('paper', 'paper'));  
//console.log(determineWinner('paper', 'rock')); 

const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();