# About This Repository
This intensive project is inspired by a series of games I like to play in my free time.
Of course, the scope is much smaller, especially considering that this was made in a week.
The original game is in fact a strategy role playing game, which uses a grid to manage several tens
of units on multiple opposing factions.
This, however, only simulates a single instance of combat between two individual units.
The essence of this game is to use a formula using a wide variety of variables for a given Unit
(a class instance with given properties, in this case the project uses 2.)

## About index.html
While there isn't much to write home about as far as this html file goes,
worth noting is the several ids that I use, mainly for the sake of using them in the
script.js file.
You may or may not notice that there are some ids or classes that aren't being used.
The plan was to save them for some other functions, but whether through ambition or the
constraints of time, they have yet to be utilized.

## About style.css
Again, not much to write home about.
The basic structure of the website is:
The body has a grid background pattern while having a background color of teal.
The game's display is overlayed on top of the body.
The game's display is broken down into three layers:
Layer 1(Top): Displays the pilot name (will later display the unit name).
Layer 2(Middle): Displays the actual "combat" portion, with a background, sprites, and status displays that will
be updated with the js file.
Layer 3(Bottom): An interface designed to actually begin combat.

## About data.js
Hoo boy. This one had my head spinning, but the overall purpose of this file is to 
allow the initialization of the Unit class, and assign several, SEVERAL properties through
given parameters and properties based on calculations using said parameters.

## About script.js
And here we have the overall core of the project.
There are many, MANY functions in this file and I am admittedly still working them all out.
In essence, two units, player and enemy, are initialized, consts and eventListeners are added
based on given html elements.
Each function handles several pieces of combat, such as displaying the actual status of both units,
handling changes in each unit's status, and displaying messages based on the current state of battle.
You may or may not notice that the option to Defend currently has no bearing on the file. Again,
ambition vs time constraints. In the future, this will simply affect damage received, assuming the defending
unit isn't able to evade.

### Plans for the future
-Making attacks gated behind willpower thresholds.
-Optimization.
-Revision of message handling.
-Adding an actual game over state. (This is more proof of concept, but you can't exactly have a game if there's no way
for it to end.)