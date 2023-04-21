function getComputerChoice() {
  let x = Math.floor(Math.random() * 2);
  if (x === 0) {
    return "rock";
  } else if (x === 1) {
    return "paper";
  } else {
    return "Scissor";
  }
}
let playerSelection = "scissor";
computerSelection = getComputerChoice();

let personScore = 0;
let computerScore = 0;

playerSelection = playerSelection.toUpperCase();
computerSelection = computerSelection.toUpperCase();

function gamePlay() {
  //player chose rock

  if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
    personScore++;

    return "You Win! Rock beats scissor";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    personScore++;

    return "You Win! Rock beats Paper";
  } else if (playerSelection === computerSelection) {
    return "No winners Play again!";
  }

  //player chose paper
  else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    personScore++;

    return "You win paper beats rock ";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
    computerScore++;

    return "you Lose! Scissor beats paper";
  }
  // else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
  //   return "No winners play again!";

  // }
  //player chose scissor
  else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
    computerScore++;
    return "You lose!Rock beats scissor ";
  } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
    personScore++;
    return "You win! Scissor beats paper";
  }
  // else if (playerSelection === "SCISSOR" && computerSelection === "SCISSOR") {
  //   return " No Winners Play again!";

  // }
}

function game() {
  gamePlay();
  gamePlay();
  gamePlay();
  gamePlay();
  gamePlay();

  console.log(
    `player score is ${personScore} and computer score is ${computerScore}`
  );

  if (personScore > computerScore) {
    console.log("Congratulations!!!Player won ");
  } else if (personScore < computerScore) {
    console.log("Awwww! you lost try again");
  } else {
    console.log("Its a DRAW!!!!");
  }
  personScore = 0;
  computerScore = 0;
}
game();
