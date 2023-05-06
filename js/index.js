"use strict";

// const getPlayerOneInput = prompt("Rock, Paper, or Scissors?");

function playerOne() {
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
  playerOne();
  cpuInput();

  let result = 
}
