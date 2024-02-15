/*
const average = array => array.reduce((a, b) => a + b) / array.length;
let myarray = [1, 4, 4, 3, 4, 6, 7, 7, 20];
console.log(average(myarray));
*/
/*
const prompt=require("prompt-sync")({sigint:true}); 

let name = prompt("What's your name");
console.log("hello"+name+"!");
*/
/*
const getUserChoice = (userInput) => {
    console.log(userInput);
  }
  let myChoice = prompt('enter your choice');
  getUserChoice(myChoice);
  */

  let humanScore = 0;
  let computerScore = 0;
  let currentRoundNumber = 1;
  
  // Write your code below:
  const generateTarget = () => {
    return Math.floor(Math.random() * 9);
  }
  
  const compareGuesses = (humanGuess, computerGuess, targetNum) => {
    console.log(Math.abs(humanGuess - targetNum));
    console.log(Math.abs(computerGuess - targetNum));
    if (humanGuess === computerGuess) {
      return true;
    } else if (Math.abs(humanGuess - targetNum) < Math.abs(computerGuess - targetNum)) {
      return true;
    } else {
      return false;
    }
  }
  
  const updateScore = (winner) => {
    if (winner == "human") {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  }
  
  const advanceRound = () => {
    currentRoundNumber += 1;
  }  

  console.log(compareGuesses(0,1,3));