
var player = 1; // X always Starts
var winner = 0; // to show who has won, also to stop the game.
var moveCounter = 0; // used to track the Draw condition
var playerTurnHUD = document.getElementById( 'turnhud' ); // displays player in turn
var resetBtn = document.getElementById( 'start-reset' ); // Button that resets the game
var boardContainer = document.getElementsByClassName( 'board-container' )[0]; // the Game board
var boxes = document.getElementsByClassName( 'box' ); // the 9 game boxes
var winningCombos = [
  [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ],
  [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ],
  [ 0, 4, 8 ], [ 2, 4, 6 ]
  ]; // referring to the indexes of the gameBoard array, that need to match, then make sure they all contain an X or O

var markBox = function( event ) { // targets and adds X or O to an empty tile
  if ( winner === 0 ) {
    if ( event.target.textContent === ' ' ) { // this first checks if a box's content has no X or O.
      if ( /*event.target.className === 'box' &&*/ player === 1 ) {
        event.target.textContent = 'X';
        player = 2;
        moveCounter++;
        playerTurnHUD.textContent = "Player 'O' has the next turn.";
      } else if ( /*event.target.className === 'box' &&*/ player === 2 ) {
        event.target.textContent = 'O';
        player = 1;
        moveCounter++;
        playerTurnHUD.textContent = "Player 'X' has the next turn.";
      }
    }
    var gameBoard = makeBoardArray();
    checkWinner( gameBoard );
    displayGameStatus();
  }
}

var makeBoardArray = function() { // creates and array of the 9 game boxes
  var gameBoard = [];
  for ( var k = 0; k < boxes.length; k++ ) {
    gameBoard.push( boxes[k].textContent );
  }
    return gameBoard;
}

var checkWinner = function(gameBoard) { // Displays X or O as the winner
  if ( moveCounter >= 5 && winner === 0 ) { // only start to check on the 5th move, until a winner.
    for ( var i = 0 ; i < winningCombos.length ; i++ ) { // loops throuh the winning condition array.
      var winBox1 = winningCombos[i][0]; // used to grab the value of the 3 winning boxes
      var winBox2 = winningCombos[i][1];
      var winBox3 = winningCombos[i][2];
      if ( gameBoard[winningCombos[i][0]] === 'X' && gameBoard[winningCombos[i][1]] === 'X' && gameBoard[winningCombos[i][2]] === 'X' ) {
        winner = 'X';
        playerTurnHUD.textContent = "'X' is the WINNER!";
        highlightWinner( winBox1, winBox2, winBox3 );// improvement:
        break;
      } else if ( gameBoard[winningCombos[i][0]] === 'O' && gameBoard[winningCombos[i][1]] === 'O' && gameBoard[winningCombos[i][2]] === 'O' ) {
        winner = 'O';
        playerTurnHUD.textContent = "'O' is the WINNER!";
        highlightWinner( winBox1, winBox2, winBox3 );// improvement:
        break;
      }
    }
  }
}
boardContainer.addEventListener( 'click', markBox ); //Displays 'Draw' condition.

var displayGameStatus = function() {
  if ( moveCounter === 9 && winner !== '0' && winner !== 'X' ) {
    playerTurnHUD.textContent = "Its a Draw!";
  }
}
 // resets the game at any time.
var gameReset = function( event ) {
  player = 1;
  winner = 0;
  moveCounter = 0;
  playerTurnHUD.textContent = "Player 'X' goes first.";
  for ( var j = 0 ; j < boxes.length ; j++ ) {
  boxes[j].textContent = ' '; // the 'X' or 'O'
  document.getElementById( "box" + [j] ).className = ""; // the winboxes class.
  document.getElementById( "box" + [j] ).className = "box box" + [j] ;// back to class just 'box'
  }
}
resetBtn.addEventListener( 'click', gameReset );

// Improvement: Implemented to show the winning 3.
var highlightWinner = function( winBox1, winBox2, winBox3 ) { //capures the winningCombos value of 'i'.
  if ( winner !== 0 ) {
   document.getElementById( 'box' + ( winBox1 ) ).className = 'box boxwon';
   document.getElementById( 'box' + ( winBox2 ) ).className = 'box boxwon';
   document.getElementById( 'box' + ( winBox3 ) ).className = 'box boxwon';
   }
}
