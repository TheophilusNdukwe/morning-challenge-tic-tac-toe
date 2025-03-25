//TIC TAC TOE GAME COMPLETED
class Player {
  constructor(number, sign) {
    this.number = number;
    this.sign = sign;
  }
}

class Board {
  constructor() {
    this.board = Array(9).fill(null);
  }

  updateBoard(index, sign) {
    this.board[index] = sign;
  }
}

class Game {
  constructor() {
    const grid = document.querySelectorAll('.grid');
    this.p1 = new Player(1, 'X');
    this.p2 = new Player(2, 'O');
    this.gameBoard = new Board();
    this.playerTurn = 1;
    grid.forEach((element, index) => {
      element.addEventListener('click', (square) => {
       
        if (!square.target.innerText) { //Only update if space is empty
            if (this.playerTurn === 1) {
                square.target.innerText = this.p1.sign;
                this.gameBoard.updateBoard(index, this.p1.sign); //Update the gameboard
                checkWin(this.gameBoard.board, this.p1.sign)
                this.playerTurn = 2;
              } else {
                square.target.innerText = this.p2.sign;
                this.gameBoard.updateBoard(index, this.p2.sign); //Update the gameboard
                checkWin(this.gameBoard.board, this.p2.sign);
                this.playerTurn = 1;
          }
        }
      });
    });
  }
}

function checkWin(board, playerSign) {
  //  winning combinations
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  // Check each winning combination
  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] === playerSign && board[b] === playerSign && board[c] === playerSign) {
      alert(`Player ${playerSign} wins!`);
		//i would like to reset game
		
      return true; // Player has won
    }
  }

  return false; // No winner yet
}
new Game();