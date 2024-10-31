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