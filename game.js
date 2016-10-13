//console.log('jQuery loaded');
// plan the game psudo code
// game board hardcoded for now, to test the game logic.

// a way to plan out your program before coding it. It is a detailed, step-by-step description
// of what a computer must do, expressed in plain English rather than in a programming language.

//varables
var player = 1;
var winner = 0; // to show who has won, also to stop the game.
var playerTurnHUD = document.getElementById('turnhud'); // displays player in turn
/*var winningCombos = [
  [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ],
  [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ],
  [ 1, 5, 9 ], [ 3, 5, 7 ]
];*/

var winningCombos = [ // referring to the indexes of the gameBoard array, that need to match, then make sure they all contan an X or O
  [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ],
  [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ],
  [ 0, 4, 8 ], [ 2, 4, 6 ]
  ];

// f() event listener selects a box(event.target), the marks it and .push(es) it to the gameBord array, add an x or o.
var boardContainer = document.getElementsByClassName('board-container')[0];
var boxes = document.getElementsByClassName('box');
var moveCounter = 0;

var markBox = function(event) {
  if ( winner === 0 ) {
    if (event.target.textContent === ' ') { // this first checks if a box's content has no X or O.
  //  var event = event.target;
      if (event.target.className === 'box' && player === 1 ) {
  //    event.target.className = 'x-box';
        event.target.textContent = 'X';
        player = 0;
        moveCounter++;
        playerTurnHUD.textContent = "Player 'O' has the next turn.";
  //      console.log("Player 'O' has the next turn.");
      } else if (event.target.className === 'box' && player === 0 ) {
        event.target.textContent = 'O';
        player = 1;
        moveCounter++;
        playerTurnHUD.textContent = "Player 'X' has the next turn.";
  //      console.log("Player 'X' has the next turn.");
    // add O and switch players.
      }
    }
    var gameBoard = makeBoardArray();
    checkWinner(gameBoard);
    displayGameStatus();
  }
}

var makeBoardArray = function() {
      //if ( winner === 0 ) {
//        console.log('making board');
        var gameBoard = [];
        for (var i = 0; i < boxes.length; i++) {
          gameBoard.push(boxes[i].textContent);
        } //console.log(gameBoard);
          return gameBoard;
//  }
}

var checkWinner = function(gameBoard) {
  if ( moveCounter >= 5 && winner === 0 ) { // only start to check on the 5th move, until a winner.
    for ( var i = 0 ; i < winningCombos.length ; i++ ) { // loops throuh the winning condition array.
        if (gameBoard[winningCombos[i][0]] === 'X' && gameBoard[winningCombos[i][1]] === 'X' && gameBoard[winningCombos[i][2]] === 'X') {
          console.log("'X' is the WINNER!");
          winner = 'X';
          playerTurnHUD.textContent = "'X' is the WINNER!";
          break;
        } else if (gameBoard[winningCombos[i][0]] === 'O' && gameBoard[winningCombos[i][1]] === 'O' && gameBoard[winningCombos[i][2]] === 'O') {
          console.log("'O' is the WINNER!");
          winner = 'O';
          playerTurnHUD.textContent = "'O' is the WINNER!";
          break;
        }
        //need to break out the loop, once a winner is found. break;
      }
//      console.log('checking win');
    }
}
boardContainer.addEventListener('click', markBox);

var displayGameStatus = function() {
  if ( moveCounter === 9 && winner !== '0' && winner !== 'X') {
      playerTurnHUD.textContent = "THE GAME IS OVER";
      console.log('DRAW');
  } //else if ( winner === 0 )
}


// add O and switch players.

// f() to determin winner, 'O' or 'X' or 'Draw'(no winner after 9 turns, or after some other condition not sure)


//  3 f()'s to determin winner, to check either row, column or diagonal. Kasun said to start with just rows first.

// check wheater there is a data already in there.
