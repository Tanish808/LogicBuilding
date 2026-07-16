const prompt = require('prompt-sync')();
let playagain = "yes";
let computerscore = 0;
let userscore = 0;

while(playagain === "yes"){
    let computeroutput = Math.floor((Math.random() * 3) + 1)
console.log(`ENTER:
 1 for ROCK 
 2 for PAPER
 3 for SCISSORS`);
let userinput = Number(prompt("Enter your response: "));
if (userinput < 1 || userinput > 3 || isNaN(userinput)) {
    console.log("Invalid input! Please enter 1, 2, or 3.");
    continue;
}
console.log("Computer output was ",computeroutput);

if(computeroutput === userinput){
    console.log("It is a DRAW!")
} else if((computeroutput === 1 && userinput === 3) || (computeroutput === 2 && userinput === 1) || (computeroutput === 3 && userinput === 2)){
    console.log("You LOST, +1 in comnputer's score")
    computerscore += 1
} else {
    console.log("You WON, +1 in your's score +1")
    userscore += 1
}
playagain = prompt("Do u want to play again (yes/no)? ")}

if(computerscore > userscore){
    console.log("Computer's Score: ",computerscore);
    console.log("Your's Score: ",userscore);
    console.log("You have LOST the game, BETTER LUCK NEXT TIME")
} else if(userscore >  computerscore){
    console.log("Computer's Score: ",computerscore);
    console.log("Your's Score: ",userscore);
    console.log("You have WON the game, CONGRATULATIONS!!")
} else{
    console.log("The game was a Draw.")
}