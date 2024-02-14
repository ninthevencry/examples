/*
const average = array => array.reduce((a, b) => a + b) / array.length;
let myarray = [1, 4, 4, 3, 4, 6, 7, 7, 20];
console.log(average(myarray));
*/
const prompt=require("prompt-sync")({sigint:true}); 

let name = prompt("What's your name");
console.log("hello"+name+"!");
/*
const getUserChoice = (userInput) => {
    console.log(userInput);
  }
  let myChoice = prompt('enter your choice');
  getUserChoice(myChoice);
  */