//var i = null;
var player = 1; // X always Starts
var winner = 0; // to show who has won, also to stop the game.
var moveCounter = 0; // used to track the Draw condition
var playerTurnHUD = document.getElementById('turnhud'); // displays player in turn
var resetBtn = document.getElementById('start-reset'); // Button that resets the game
var boardContainer = document.getElementsByClassName('board-container')[0]; // the Game board
var boxes = document.getElementsByClassName('box'); // the 9 game boxes
var winningCombos = [ // referring to the indexes of the gameBoard array, that need to match, then make sure they all contan an X or O
  [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ],
  [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ],
  [ 0, 4, 8 ], [ 2, 4, 6 ]
  ];

var markBox = function(event) { // targets and adds X or O to an empty tile
  if ( winner === 0 ) {
    if (event.target.textContent === ' ') { // this first checks if a box's content has no X or O.
      if (event.target.className === 'box' && player === 1 ) {
        event.target.textContent = 'X';
        player = 2;
        moveCounter++;
        playerTurnHUD.textContent = "Player 'O' has the next turn.";
      } else if (event.target.className === 'box' && player === 2 ) {
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

var makeBoardArray = function() { // creates and array of the 9 game boxes
  var gameBoard = [];
  for (var k = 0; k < boxes.length; k++) {
    gameBoard.push(boxes[k].textContent);
  }
    return gameBoard;
}

var checkWinner = function(gameBoard) { // Displays X or O as the winner
  if ( moveCounter >= 5 && winner === 0 ) { // only start to check on the 5th move, until a winner.
    for ( var i = 0 ; i < winningCombos.length ; i++ ) { // loops throuh the winning condition array.
      if (gameBoard[winningCombos[i][0]] === 'X' && gameBoard[winningCombos[i][1]] === 'X' && gameBoard[winningCombos[i][2]] === 'X') {
        winner = 'X';
        playerTurnHUD.textContent = "'X' is the WINNER!";
//      Future improvement: highlightWinner(gameBoard, i);
       break;
      } else if (gameBoard[winningCombos[i][0]] === 'O' && gameBoard[winningCombos[i][1]] === 'O' && gameBoard[winningCombos[i][2]] === 'O') {
        console.log("'O' is the WINNER!");
        winner = 'O';
        playerTurnHUD.textContent = "'O' is the WINNER!";
//      Future improvement: highlightWinner(gameBoard, i);
        console.log('O: i = '+i);
        break;
      }
    }
  }
}
boardContainer.addEventListener('click', markBox); //Displays 'Draw' condition.

var displayGameStatus = function() {
  if ( moveCounter === 9 && winner !== '0' && winner !== 'X') {
    playerTurnHUD.textContent = "Its a Draw!";
    console.log('DRAW');
  }
}

var gameReset = function(event) { // resets the game at any time.
  player = 1;
  winner = 0;
  moveCounter = 0;
  playerTurnHUD.textContent = "Player 'X' goes first.";
  for (var j = 0; j < boxes.length; j++) {
  boxes[j].textContent = ' ';
  }
}

resetBtn.addEventListener('click', gameReset);

// Future improvement: write rules for an object to appear/move over to show the winning 3.

/*var highlightWinner = function(gameBoard, i) { //capures the winningCombos value of 'i'.
  if (winner !== 0) {
   console.log('Final i = '+i);
   console.log(gameBoard);
gameBoard[winningCombos[i][0]] // gets the index in the gameBoard array.

//   console.log(gameBoard[winningCombos[i][0]]);
}  return i; // changes a class for just those boxes
}*/
