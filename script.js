const choices = new Array("rock","paper","scissors");

function randomNumber(min,max){
    return Math.round(Math.random()*(max-min))+min;
}

function getComputerChoice(){
    return choices[randomNumber(0,2)];
}

function playGame(userChoice,computerChoice){
    if(userChoice===computerChoice){
        return "It's a Draw!";
    }else if(userChoice==="rock"){
        if(computerChoice==="paper")
            return "You lose! Paper covers Rock.";
        else if(computerChoice==="scissors")
            return "You win! Rock smashes Scissors.";
    }else if(userChoice==="paper"){
        if(computerChoice==="rock")
            return "You win! Paper covers Rock.";
        else if(computerChoice==="scissors")
            return "You lose! Scissors cut Paper.";
    }else if(userChoice==="scissors"){
        if(computerChoice==="rock")
            return "You lose! Rock smashes Scissors.";
        else if(computerChoice==="paper")
            return "You win! Scissors cut Paper.";
    }else{
        return "Invalid move!";
    }
}

const resultContainer = document.querySelector('.results');

function playRock(){
    let result = playGame("rock",getComputerChoice());
    let child = document.createElement('p');
    child.textContent = result;
    resultContainer.appendChild(child);
}

function playPaper(){
    let result = playGame("paper",getComputerChoice());
    let child = document.createElement('p');
    child.textContent = result;
    resultContainer.appendChild(child);
}

function playScissors(){
    let result = playGame("scissors",getComputerChoice());
    let child = document.createElement('p');
    child.textContent = result;
    resultContainer.appendChild(child);
}

const buttRock = document.querySelector('.rockButt');
const buttPaper = document.querySelector('.paperButt');
const buttScissors = document.querySelector('.scissorsButt');

buttRock.addEventListener('click',playRock);
buttPaper.addEventListener('click',playPaper);
buttScissors.addEventListener('click',playScissors);
