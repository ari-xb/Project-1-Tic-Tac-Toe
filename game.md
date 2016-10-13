# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Overview

Let's start out with something fun - **a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – Let's start out with something fun - a game!  It's up to you to come up with a fun and interesting game to build. I recommend tic tac toe (knots and crosses)

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!


---

### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Switch turns** between two players
* **Design logic for winning** & **visually display which player won**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Javascript or jQuery** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables

* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your GitHub repo
* A **git repository hosted on GitHub**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

---

### Bonus

These are for extra credit! DON'T focus on these until you've hit the core requirements.

* Use timers to display "waiting..." messages while users are waiting to be matched
* Keep track of multiple game rounds with a win counter
* Allow game customizable options, time limits, board size, game rounds, name & profiles etc  
* Allow players to customize their token (X, O, name, picture, avatar etc)
* Get inventive with your styling ** use CSS effects, animations or HTML canvas API to spiff things up
* Use **LocalStorage** or **SessionStorage** to persist data locally to allow games to continue after page refresh or loss of internet connectivity
* Be creative! Bend the rules and give it a twist!


---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.


### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?


    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, you wonderful creature, you!_

 This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!

ideas:

 Welcome to the grid...

 // plan the game pseudo code
 /*
 Choose a game; choices
 stick with tick-tack-toe as it has good lessons to learn.

 plan what to do each day:
 Today: plan and research.  Tron themed, discs O vs batons X
 Wednesday;
 Thurs;
 Friday; Presentation.


 Game; tick-tack-toe

 Render the game first,
 basic 9 divs in a wrapper? latter make it look like slack. (Tic sLac Toe)

 First get the game logic working, in JS and also jQ.
   start with variables, X O player 1 and 2,
   win condition, win/loss. comparing possible winning combinations after each turn or on click.

   needs to record/save where there is an 'X' or a 'O' on the board.
   - could use an array or nested arrays in an array. [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] with it starting with empty strings oe 'e' = empty, Etc.
    + change array value on click of corrisponding board element.
     - also add a class maybe to change the style of that clicked element.
    + check for winning combination, on 3rd move or after, of symbols (gen function checkForWinner Etc.)

 possible winning combos = 8
 Rows ;
 1,2,3 [0][1][2]
 4,5,6 [3][4][5]
 7,8,9 [6][7][8]
 Columns ;
 1,4,7 [0][3][6]
 2,5,8 [1][4][7]
 3,6,9 [2][5][8]
 Diagon alley ;
 1,5,9 [0][4][8]
 3,5,7 [2][4][6]

# How to host my game on GitHub Pages
 - create a branch of my master and call it gh-pages
 - 'git checkout -b (name or 'gh-pages')'
 -
 - checkout into gh pages 'git merge master' (if you update the master)

ask about:
my else statements not working
the ancient tic tac toe "Terni Lapilli"
- Removing pieces, but checks if they can remove that piece.
- number of pieces X and O

reset board =

Modals = like a start menu

 check these positions(using comparisons), then declare a winner if true, or else draw, after 9 moves, gameover!
 - need to
 -
 player1 = !player1 to switch player1 from true to false.

 click event listeners
 - on the game board squares
 - on btn to switch players
 - on btn to reset board
 - on btn to input player name *optional*

##how to have a line move over the winning three##
transitions, transform-origin, to change the point of rotation.

light up the backgrounds of the winning boxes, to start with.
 - fade out the other loosing squares could also be cool.

transisions



 optional :
  player names input?
  make it look awseome and **Tron** like
  add music, 'The game has changed'
  3D grid, and floating images of the batons or Disc.
   check out CSS animation 'bounce' for each to hover/slowly bounce.

   or Slack themed. have the slack logo lines show the winning line. just appear for simple version, then can move out the way for the game, then back in to highlight a winning row, not sure about diagonals, maybe one element rotate, for one diagonal win, and the last one for the opposite diagonal win.
  CSS Radial gradiant (refer to Robot Dash) to give box a glow 'background: radial-gradient(circle, white 15%, transparent 40%), #cc5;'



 */
