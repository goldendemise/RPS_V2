
function computerPlay() {
let compChoice = Math.floor(Math.random() * 3) + 1;
return compChoice == 1 ? "rock"
      : compChoice == 2 ? "paper"
      : compChoice == 3 ? "scissors"
      : "error";
}


function rps(playerSelection, computerSelection) {

  console.log("Player selection: " + playerSelection + "\n Computer selection: " + computerSelection);

if(playerSelection == "rock"){
  switch(computerSelection){
    case "paper":
     return "You lose, paper beats rock.";
    break;

    case "scissors":
  return "You win, rock beats scissors.";
    break;

    default:
    return "Draw game."
    }
}
else if(playerSelection == "paper"){
  switch(computerSelection){
  case "scissors":
   return "You lose, scissors beats paper.";
  break;

  case "rock":
   return "You win, paper covers rock.";
  break;

  default:
  return "Draw game."
  }
}
else if(playerSelection == "scissors"){
  switch(computerSelection){
  case "rock":
  return "You lose, rock beats scissors.";
  break;

  case "paper":
   return "You win, scissors beats paper.";
  break;

  default:
  return "Draw game."
  }
}

}
function game() {
let playerWins = 0;
let computerWins = 0;
let draws = 0;
while(playerWins < 5 && computerWins < 5){
  let playerChoice = prompt("Please enter rock, paper, or scissors").toLowerCase();
  let result = rps(playerChoice, computerPlay());
  console.log("result: " + result);
  switch (result) {
    case result.indexOf("You win") > -1:
    console.log("found the index");
      playerWins ++;
      break;
    case result.indexOf("You lose") > -1:
    console.log("loss index");
    computerWins++;
    break;
    default:
    draws++;
  }
  console.log("Player wins: " + playerWins + "\n Computer wins: " + computerWins);
}

}
game();
</script>
