"use strict";

function playerOne() {
  const getPlayerOneInput = prompt("Rock, Paper, or Scissors?");
  const playerOneSelection = getPlayerOneInput.toLowerCase();
  return playerOneSelection;
}

const getCPUInput = ["Rock", "Paper", "Scissors"];

function cpuInput() {
  const getRandomNumber = Math.trunc(Math.random() * 3);
  const cpuPick = getCPUInput[getRandomNumber];
  const cpuSelection = cpuPick.toLowerCase();
  return cpuSelection;
}

function startGame() {
  for (let i = 5; i > 0; i--) {
    const playerOneSelection = playerOne();
    const cpuSelection = cpuInput();

    if (playerOneSelection === cpuSelection) {
      console.log(
        `Player One: ${playerOneSelection} / CPU: ${cpuSelection}  We have a draw!`
      );
    } else if (playerOneSelection === "rock" && cpuSelection === "paper") {
      console.log(
        `Player One: ${playerOneSelection} / CPU: ${cpuSelection}  CPU Wins!`
      );
    } else if (playerOneSelection === "rock" && cpuSelection === "scissors") {
      console.log(
        `Player One: ${playerOneSelection} / CPU: ${cpuSelection}  Player One Wins!`
      );
    } else if (playerOneSelection === "paper" && cpuSelection === "rock") {
      console.log(
        `Player One: ${playerOneSelection} / CPU: ${cpuSelection}  Player One Wins!`
      );
    } else if (playerOneSelection === "paper" && cpuSelection === "scissors") {
      console.log(
        `Player One: ${playerOneSelection} / CPU: ${cpuSelection}  CPU Wins!`
      );
    } else if (playerOneSelection === "scissors" && cpuSelection === "rock") {
      console.log(
        `Player One: ${playerOneSelection} / CPU: ${cpuSelection}  CPU Wins!`
      );
    } else if (playerOneSelection === "scissors" && cpuSelection === "paper") {
      console.log(
        `Player One: ${playerOneSelection} / CPU: ${cpuSelection}  Player One Wins!`
      );
    }
  }
}

// startGame();
