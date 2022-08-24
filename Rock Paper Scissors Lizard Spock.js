Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".Rock Paper Scissors Lizard Spock

const battle = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

function rpsls(pl1, pl2) {
  return battle[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
         battle[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
}
