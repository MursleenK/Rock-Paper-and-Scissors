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
let playerSelection="";
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

const allButtons= document.querySelectorAll('button');
allButtons.forEach(button=> {
    button.addEventListener('click', ()=> {
        theChoice=button.id;
        let firstRound=playRound(getComputerChoice(), theChoice);
        let resultText=`${firstRound}.`+` You have ${playerPoints} points.`+` The computer has ${(compPoints)} points.`;

        let parent=document.querySelector('.result');
        let divsP=document.createElement('p');
        divsP.textContent=resultText;
        parent.appendChild(divsP);
        
        if (playerPoints===5 || compPoints===5) {
                if (playerPoints===5) {alert ("You have won!")} else if (compPoints===5) {alert ("The computer has won!")}
        }
    })
})


console.log(playerSelection);
