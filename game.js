
var player = 1;
var winner = 0; // to show who has won, also to stop the game.
var moveCounter = 0;
var playerTurnHUD = document.getElementById('turnhud'); // displays player in turn
var resetBtn = document.getElementById('start-reset');
var boardContainer = document.getElementsByClassName('board-container')[0];
var boxes = document.getElementsByClassName('box');
var winningCombos = [ // referring to the indexes of the gameBoard array, that need to match, then make sure they all contan an X or O
  [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ],
  [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ],
  [ 0, 4, 8 ], [ 2, 4, 6 ]
  ];

var markBox = function(event) {
  if ( winner === 0 ) {
    if (event.target.textContent === ' ') { // this first checks if a box's content has no X or O.
      if (event.target.className === 'box' && player === 1 ) {
        event.target.textContent = 'X';
        player = 0;
        moveCounter++;
        playerTurnHUD.textContent = "Player 'O' has the next turn.";
      } else if (event.target.className === 'box' && player === 0 ) {
        event.target.textContent = 'O';
        player = 1;
        moveCounter++;
        playerTurnHUD.textContent = "Player 'X' has the next turn.";
      }
    }
    var gameBoard = makeBoardArray();
    checkWinner(gameBoard);
    displayGameStatus();
  }
}

var makeBoardArray = function() {
  var gameBoard = [];
  for (var i = 0; i < boxes.length; i++) {
    gameBoard.push(boxes[i].textContent);
  }
    return gameBoard;
}

var checkWinner = function(gameBoard) {
  if ( moveCounter >= 5 && winner === 0 ) { // only start to check on the 5th move, until a winner.
    for ( var i = 0 ; i < winningCombos.length ; i++ ) { // loops throuh the winning condition array.
      if (gameBoard[winningCombos[i][0]] === 'X' && gameBoard[winningCombos[i][1]] === 'X' && gameBoard[winningCombos[i][2]] === 'X') {
        console.log("'X' is the WINNER!");
        winner = 'X';
        playerTurnHUD.textContent = "'X' is the WINNER!";
// when the loop stops log the value of i, to determing what the winnin combo is.
console.log(i);
        break;
      } else if (gameBoard[winningCombos[i][0]] === 'O' && gameBoard[winningCombos[i][1]] === 'O' && gameBoard[winningCombos[i][2]] === 'O') {
        console.log("'O' is the WINNER!");
        winner = 'O';
        playerTurnHUD.textContent = "'O' is the WINNER!";
        break;
      }
    }
  }
}
boardContainer.addEventListener('click', markBox);

var displayGameStatus = function() {
  if ( moveCounter === 9 && winner !== '0' && winner !== 'X') {
    playerTurnHUD.textContent = "Its a Draw!";
    console.log('DRAW');
  }
}

var gameReset = function(event) {
  player = 1;
  winner = 0;
  moveCounter = 0;
  playerTurnHUD.textContent = "Player 'X' goes first.";
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = ' ';
  }
}

resetBtn.addEventListener('click', gameReset);
