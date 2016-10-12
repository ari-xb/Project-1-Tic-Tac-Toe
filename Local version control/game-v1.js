//console.log('jQuery loaded');
// plan the game psudo code
// game board hardcoded for now, to test the game logic.

// a way to plan out your program before coding it. It is a detailed, step-by-step description
// of what a computer must do, expressed in plain English rather than in a programming language.

//varables
var player = 1;
//var gameBoard = []
/*var winningCombos = [
[ 1, 2, 3 ],
[ 4, 5, 6 ],
[ 7, 8, 9 ],
[ 1, 4, 7 ],
[ 2, 5, 8 ],
[ 3, 6, 9 ],
[ 1, 5, 9 ],
[ 3, 5, 7 ]
];*/
//

// f() event listener selects a box(event.target), the marks it and .push(es) it to the gameBord array, add an x or o.
var boxes = document.getElementsByClassName('box');

var markBox = function(event) {
  if (event.target.textContent === ' ') { // this first checks if a box's content is empty ' '.
//  var event = event.target;
  if (event.target.className === 'box' && player === 1 ) {
//    event.target.className = 'x-box';
      event.target.textContent = 'X';
      player = 0;
    } else if (event.target.className === 'box' && player === 0 ) {
      event.target.textContent = 'O';
      player = 1;
    } //else
  // add O and switch players.
  }
}
addEventListener('click', markBox);

// add O and switch players.

// f() to determin winner, 'O' or 'X' or 'Draw'(no winner after 9 turns, or after some other condition not sure)


//  3 f()'s to determin winner, to check either row, column or diagonal. Kasun said to start with just rows first.

// check wheater there is a data already in there.
