function getComputerChoice (){
    let randomNumber= Math.floor (Math.random()*3);
   if (randomNumber===0){
        return "Rock";
    } else if ( randomNumber===1) {
        return "Paper";
    } else {
        return "Scissors";
    }   
} 

let playerPoints=0;
let compPoints=0;

function playRound (computerSelection, playerSelection) {
    if (computerSelection==="Rock" && (playerSelection==="Rock" || playerSelection==="rock" || playerSelection==="ROCK")){
        return "A draw";
    } else if (computerSelection==="Rock" && (playerSelection==="Paper" || playerSelection==="paper" || playerSelection==="PAPER")){
        playerPoints++;
        return "You won";
    }else if (computerSelection==="Rock" && (playerSelection==="Scissors" || playerSelection==="scissors" || playerSelection==="SCISSORS")){
        compPoints++;
        return "You lost";
    }

    else if (computerSelection==="Paper" && (playerSelection==="Rock" || playerSelection==="rock" || playerSelection==="ROCK")){
        compPoints++;
        return "You lost";
    } else if (computerSelection==="Paper" && (playerSelection==="Paper" || playerSelection==="paper" || playerSelection==="PAPER")){
        return "A draw";
    }else if (computerSelection==="Paper" && (playerSelection==="Scissors" || playerSelection==="scissors" || playerSelection==="SCISSORS")){
        playerPoints++;
        return "You won";
    }

    else if (computerSelection==="Scissors" && (playerSelection==="Rock" || playerSelection==="rock" || playerSelection==="ROCK")){
        playerPoints++;
        return "You won";
    } else if (computerSelection==="Scissors" && (playerSelection==="Paper" || playerSelection==="paper" || playerSelection==="PAPER")){
        compPoints++;
        return "You lost";
    }else if (computerSelection==="Scissors" && (playerSelection==="Scissors" || playerSelection==="scissors" || playerSelection==="SCISSORS")){
        return "A draw";
    }

    else {
        return "You sure you entered the correct thing?";
    }
    
}

function game(){
    let roundOne= theGame (getComputerChoice(), prompt("Please enter", ""));
        console.log (roundOne);
    let roundTwo= theGame (getComputerChoice(), prompt("Please enter", ""));
        console.log (roundTwo);
    let roundThree= theGame (getComputerChoice(), prompt("Please enter", ""));
        console.log (roundThree);
    let roundFour= theGame (getComputerChoice(), prompt("Please enter", ""));
        console.log (roundFour);
    let roundFive= theGame (getComputerChoice(), prompt("Please enter", ""));
        console.log (roundFive);

    if ( playerPoints>compPoints) {
        console.log("You won against the machine!");
    } else if ( compPoints>playerPoints){
        console.log("The machine beat you!");
    } else {
        console.log("It was a draw!");
    }
        

}
rounds();
console.log(playerPoints);
console.log(compPoints);