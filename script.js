function getComputerChoice(){
  let randNum=3*Math.random();
  if (randNum <= 1){
    return computerChoice='scissors';
  } else if (randNum >2){
    return computerChoice='rock';
  } else{
    return computerChoice='paper'
  }
}

let humanInput = prompt("Whats your choice? Rock, paper or scissors?");

function getHumanChoice(){
  let humanChoice = humanInput;
  if (typeof humanChoice === 'string' || humanChoice instanceof String){
    humanChoice=humanChoice.toLowerCase();
    if (humanChoice.match(/^(rock|paper|scissors)$/)){
      return humanChoice; 
    }else {
      return console.log("Invalid input, please try again.");
    }
  }else {
    return console.log("Invalid input, please try again");
  }
}