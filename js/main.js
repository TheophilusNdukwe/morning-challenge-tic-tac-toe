// Tic tac Toe

// create a listening event for each square
    // the function in each square will check if it is player one or two
        // then prints the X or O in the grid.
// check to see if grid is matching in a row or column or diagnole 
    // while loop 
// display winner
let botScore=0, playerScore=0;

document.getElementById('grid1').addEventListener('click', gridOne)
document.getElementById('grid2').addEventListener('click', gridTwo)
document.getElementById('grid3').addEventListener('click', gridThree)
document.getElementById('grid4').addEventListener('click', gridFour)
document.getElementById('grid5').addEventListener('click', gridFive)
document.getElementById('grid6').addEventListener('click', gridSix)
document.getElementById('grid7').addEventListener('click', gridSeven)
document.getElementById('grid8').addEventListener('click', gridEight)
document.getElementById('grid9').addEventListener('click', gridNine)


//you could randomize the 9 grids in an object and then if you have
//the grids will be assigned their values on the dom ex: grid1  will be compared or assigned to document.querySelector('grid1)


function gridOne() {
    //check if player 1 or 2
    //if player 1 print x
    //if clicked again then incorrect input
    //stores the random fucntion inside a variable.
    document.getElementById('grid1').innerText = "X"
    let botsChoice = randomGrid1()
}
function gridTwo() {
    //check if player 1 or 2
    //if player 1 print x
    //else if player 2 print o
    //if clicked again then incorrect input
    document.getElementById('grid2').innerText = "X"
    let botsChoice = randomGrid2()
}function gridThree() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
    document.getElementById('grid3').innerText = "X"
    let botsChoice = randomGrid3()
}function gridFour() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
    document.getElementById('grid4').innerText = "X"
    let botsChoice = randomGrid4()
}function gridFive() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
     document.getElementById('grid5').innerText = "X"
     let botsChoice = randomGrid5()
}function gridSix() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
     document.getElementById('grid6').innerText = "X"
     let botsChoice = randomGrid6()
}function gridSeven() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
    document.getElementById('grid7').innerText = "X"
    let botsChoice = randomGrid7()
}function gridEight() {
    //check if player 1 or 2
    //if player 1 print x 
    // //else if player 2 print o
    //if clicked again then incorrect input
     document.getElementById('grid8').innerText = "X"
     let botsChoice = randomGrid8()
}function gridNine() {
    //check if player 1 or 2
    //if player 1 print x 
    // //else if player 2 print o
    //if clicked again then incorrect input
     document.getElementById('grid9').innerText = "X"
     let botsChoice = randomGrid9()
}

// function checkWhoWon(botsChoice,playersChoice){
// 	if(botsChoice===playersChoice){
// 		displayCompleteMessage("There was tie");
// 	}
// 	else if(
// 		(botsChoice =="scissors" && playersChoice == "paper") ||
// 		(botsChoice=="paper" && playersChoice == "rock") ||
// 		(botsChoice=="rock" && playersChoice == "scissors")
// 		){
// 		increaseBotScore();
// 	}
// 	else{
// 		increasePlayerScore();
// 	}
// }


function randomGrid1(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid1')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid6').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid9').innerText = 'O';
	}
	return botsChoice;
}
function randomGrid2(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid2')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid7').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid3').innerText = 'O';
	}
	return botsChoice;
}
function randomGrid3(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid3')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid1').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid8').innerText = 'O';
	}
	return botsChoice;
}
function randomGrid4(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid4')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid3').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid9').innerText = 'O';
	}
	return botsChoice;
}
function randomGrid5(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid5')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid7').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid9').innerText = 'O';
	}
	return botsChoice;
}

function randomGrid6(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid6')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid1').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid3').innerText = 'O';
	}
	return botsChoice;
}
function randomGrid7(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid7')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid5').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid9').innerText = 'O';
	}
	return botsChoice;
}
function randomGrid8(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid8')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid2').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid1').innerText = 'O';
	}
	return botsChoice;
}
function randomGrid9(){
    let randomNumber = Math.random();
	let botsChoice = document.getElementById('grid9')
	if(randomNumber < .33){
		botsChoice = document.getElementById('grid3').innerText = 'O';
	}
	else if(randomNumber < .6666){
		botsChoice = document.getElementById('grid6').innerText = 'O';
	}
	return botsChoice;
}



// Objects containing player
//create an object. 
//
class Players {
    constructor(player1, player2, sign){
        this.player1 = player1
        this.player2 = player2
        this.sign = sign
    }


}


let game1 = new Players('Theo','Computer', 'X')






