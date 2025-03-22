// Tic tac Toe

// create a listening event for each square
    // the function in each square will check if it is player one or two
        // then prints the X or O in the grid.
// check to see if grid is matching in a row or column or diagnole 
    // while loop 
// display winner

document.getElementById('grid1').addEventListener('click', gridOne)
document.getElementById('grid2').addEventListener('click', gridTwo)
document.getElementById('grid3').addEventListener('click', gridThree)
document.getElementById('grid4').addEventListener('click', gridFour)
document.getElementById('grid5').addEventListener('click', gridFive)
document.getElementById('grid6').addEventListener('click', gridSix)
document.getElementById('grid7').addEventListener('click', gridSeven)
document.getElementById('grid8').addEventListener('click', gridEight)
document.getElementById('grid9').addEventListener('click', gridNine)

function gridOne() {
    //check if player 1 or 2
    //if player 1 print x
    //if clicked again then incorrect input
    console.log(this.player1)
}
function gridTwo() {
    //check if player 1 or 2
    //if player 1 print x
    //else if player 2 print o
    //if clicked again then incorrect input
}function gridThree() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
}function gridFour() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
}function gridFive() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
}function gridSix() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
}function gridSeven() {
    //check if player 1 or 2
    //if player 1 print x //else if player 2 print o
    //if clicked again then incorrect input
}function gridEight() {
    //check if player 1 or 2
    //if player 1 print x 
    // //else if player 2 print o
    //if clicked again then incorrect input
}function gridNine() {
    //check if player 1 or 2
    //if player 1 print x 
    // //else if player 2 print o
    //if clicked again then incorrect input
}

// Objects containing player

class Players {
    constructor(player1, player2, signX, signO){
        this.player1 = p1
        this.player2 = p2
        this.sign = "X"
        this.sign = "O"


    }


}









