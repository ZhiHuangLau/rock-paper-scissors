function getComputerChoice(){
  let randNum=3*Math.random();
  if (randNum <= 1){
    return computerInput='scissors';
  } else if (randNum >2){
    return computerInput='rock';
  } else{
    return computerInput='paper'
  }
}

//let humanInput = prompt("Whats your choice? Rock, paper or scissors?");

function getHumanChoice(){
  let humanInput = prompt("Whats your choice? Rock, paper or scissors?");
  if (typeof humanInput === 'string' || humanInput instanceof String){
    humanInput=humanInput.toLowerCase();
    if (humanInput.match(/^(rock|paper|scissors)$/)){
      return humanInput; 
    }else {
      return console.log("Invalid input, please try again.");
    }
  }else {
    return console.log("Invalid input, please try again");
  }
}







function playGame(){ 
  let humanScore = 0;
  let computerScore = 0;
  function playRound(computerChoice,humanChoice){
  switch(computerChoice){
  case 'paper':
    switch(humanChoice){
      case 'paper':
        return console.log("You both chose paper, it's a draw!");
      case 'scissors':
        humanScore++;
        return console.log("Scissors beat paper, you win!");
      case 'rock':
        computerScore++;
        return console.log("Paper beats scissors, you lose!");
    }
  case 'scissors':
    switch(humanChoice){
      case 'scissors':
        return console.log("You both chose scissors, it's a draw!");
      case 'rock':
        humanScore++;
        return console.log("Rock beats scissors, you win!");
      case 'paper':
        computerScore++;
        return console.log("Scissors beats paper, you lose!");
    }
  case 'rock':
    switch(humanChoice){
      case 'rock':
        return console.log("You both chose rock, it's a draw!");
      case 'paper':
        humanScore++;
        return console.log("Paper beats rock, you win!");
      case 'scissors':
        computerScore++;
        return console.log("Rock beats scissors, you lose!");
    }
  }
}


  while ((humanScore<5)&&(computerScore<5)){
    const humanSelection=getHumanChoice();
    const computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);
  }
}

playGame();
