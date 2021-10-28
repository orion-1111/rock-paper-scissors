// function for computer play:

function computerPlay(){
    let number =  Math.floor(Math.random() * 3);
    if (number === 0) {
        return computerSelection = "Rock";
    } else if (number === 1) {
        return computerSelection = "Paper";
    } else {
        return computerSelection = "Scissors";
    };
};

// function to play 1 round:

function playRound(playerSelection, computerSelection) {
    if (yourWins.textContent < 5 && computerWins.textContent < 5){
        if (playerSelection === computerSelection) {
            results.textContent = "Computer plays the same. Round tied!";
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            results.textContent = "Computer plays Paper. You lost the round!";
            computerWins.textContent = +computerWins.textContent + 1;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            results.textContent = "Computer plays Scissors. You won the round!";
            yourWins.textContent = +yourWins.textContent + 1;
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            results.textContent = "Computer plays Rock. You won the round!";
            yourWins.textContent = +yourWins.textContent + 1;
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            results.textContent = "Computer plays Scissors. You lost the round!";
            computerWins.textContent = +computerWins.textContent + 1;
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            results.textContent = "Computer plays Rock! You lost the round!";
            computerWins.textContent = +computerWins.textContent + 1;
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            results.textContent = "Computer plays Paper. You won the round!";
            yourWins.textContent = +yourWins.textContent + 1;
        }
    }
    if (computerWins.textContent == 5) {
            gameResult.textContent = "You have lost the game!"
        } else if (yourWins.textContent == 5) {
            gameResult.textContent = "You have won the game!"
        } 
};

// event listeners for buttons:

const playButtons = document.querySelectorAll('.playButton');

playButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        computerPlay();
        playRound(event.target.textContent, computerSelection);
        
    })
});

resetButton.addEventListener('click', () => {
    yourWins.textContent = 0;
    computerWins.textContent = 0;
    gameResult.textContent = ""; 
    results.textContent = "";
});

// button styling:

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.style.backgroundColor = 'white';
    button.style.borderRadius = '2px';
    button.style.height = '40px';
    button.style.fontSize = '19px'
    button.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
    });
    button.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'white';
        event.target.style.color = 'black';
    });
});