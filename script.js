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

let nRounds = Number(prompt("How many rounds do you want to play?"));

for(let i=0;i<nRounds;i++){
    let userChoice = prompt("Your move:").toLowerCase();
    console.log(playGame(userChoice,getComputerChoice()));
}