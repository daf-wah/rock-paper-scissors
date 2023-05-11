"use strict";

const result = document.querySelector(".result");
const player = document.querySelector(".player");
const cpu = document.querySelector(".cpu");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let playerNum = 0;
let cpuNum = 0;
player.textContent = `Player: ${playerNum}`;
cpu.textContent = `Computer: ${cpuNum}`;

// let rockPlay = rock.addEventListener("click", function () {
//   const cpuSelection = cpuInput();
//   const playerSelect = "rock";

//   if (playerSelect === cpuSelection) {
//     result.textContent = "We have a tie!";
//   } else if (cpuSelection === "paper") {
//     result.textContent = `The CPU chose paper. CPU Wins!`;
//     cpu.textContent = `Computer: ${++cpuNum}`;
//   } else if (cpuSelection === "scissors") {
//     result.textContent = `The CPU chose scissors. You Win!`;
//     player.textContent = `Player: ${++playerNum}`;
//   }
// });

// let paperPlay = paper.addEventListener("click", function () {
//   const cpuSelection = cpuInput();
//   const playerSelect = "paper";

//   if (playerSelect === cpuSelection) {
//     result.textContent = "We have a tie!";
//   } else if (cpuSelection === "scissors") {
//     result.textContent = `The CPU chose scissors. CPU Wins!`;
//     cpu.textContent = `Computer: ${++cpuNum}`;
//   } else if (cpuSelection === "rock") {
//     result.textContent = `The CPU chose rock. You Win!`;
//     player.textContent = `Player: ${++playerNum}`;
//   }
// });

// let scissorsPlay = scissors.addEventListener("click", function () {
//   const cpuSelection = cpuInput();
//   const playerSelect = "scissors";

//   if (playerSelect === cpuSelection) {
//     result.textContent = "We have a tie!";
//   } else if (cpuSelection === "rock") {
//     result.textContent = `The CPU chose rock. CPU Wins!`;
//     cpu.textContent = `Computer: ${++cpuNum}`;
//   } else if (cpuSelection === "paper") {
//     result.textContent = `The CPU chose paper. You Win!`;
//     player.textContent = `Player: ${++playerNum}`;
//   }
// });

let rockPlay = rock.addEventListener("click", function () {
  let playedRock = "rock";
  return playedRock;
});

let paperPlay = paper.addEventListener("click", function () {
  let playedPaper = "paper";
  return playedPaper;
});

let scissorsPlay = scissors.addEventListener("click", function () {
  let playedScissors = "scissors";
  return playedScissors;
});

const getCPUInput = ["Rock", "Paper", "Scissors"];
const getPlayerInput = [rockPlay, paperPlay, scissorsPlay];

function cpuInput() {
  const getRandomNumber = Math.trunc(Math.random() * 3);
  const cpuPick = getCPUInput[getRandomNumber];
  const cpuSelection = cpuPick.toLowerCase();
  return cpuSelection;
}

function startGame() {
  result.textContent = `Let's play!`;
  for (let i = 5; i > 0; i--) {
    let playerInput = getPlayerInput;
    let cpuInput = cpuInput();

    if (playerInput === cpuInput) {
      result.textContent = `We have a tie!`;
    } else if (
      (playerInput === `rock` && cpuInput === `scissors`) ||
      (playerInput === `paper` && cpuInput === `rock`) ||
      (playerInput === `scissors` && cpuInput === `paper`)
    ) {
      result.textContent = `The CPU chose ${cpuInput}. You win!`;
      player.textContent = `Player: ${++playerNum}`;
    } else {
      result.textContent = `The CPU chose ${cpuInput}. You lose!`;
      cpu.textContent = `Computer: ${++cpuNum}`;
    }

    if (playerNum === 5) {
      result.textContent = `You win the series!`;
    } else if (cpuNum === 5) {
      result.textContent = `The CPU has defeated you!`;
    }
  }
}
startGame();
