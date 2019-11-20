const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {
        console.log('Error');
    }
}

const getComputerChoice = () =>{
    Choice = Math.floor(Math.random() * 3);
    switch (Choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (UserChoice, computerChoice) =>{
    if (UserChoice == computerChoice){
        return 'The game was a tie.'
    } else if (UserChoice === "bomb"){
        return 'The user has won';
    }
    if (UserChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'Computer Has Won';
        } else if (computerChoice === 'scissors'){
            return 'The user has won'
        }
    }
    if (UserChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return "computer Has Won";
        } else if (computerChoice === 'rock'){
            return "The user has won";
        }
    }
    if (UserChoice === 'scissors'){
        if (computerChoice === "rock"){
            return "Computer Has Won";
        } else if (computerChoice === 'paper'){
            return "The user has won"
        }
    }
}

const playGame = () =>{
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice))
}
playGame();