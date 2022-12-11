const choices = new Array("rock","paper","scissors");

function randomNumber(min,max){
    return Math.round(Math.random()*(max-min))+min;
}

function getComputerChoice(){
    return choices[randomNumber(0,2)];
}

