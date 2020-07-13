# CSE-405

A number guessing game. Taking turns, one player chooses a number between 1 and 9
while the other asks 4 yes or no questions about the number (such as, is the number '4'? or is the number >= 4?), however, the player
who chose the number has a 'lie counter' which is incremented by one every time he chooses a number. That is, the player who chose a
number can lie once per round, but is allowed to save his lies for later rounds.

Wins are primarily determined by number of rounds, then number of lies remaining. Otherwise it's a tie.

Uses ngrok and node to host the game.

Typing "node server.js" in the command line will host the webpage (if node is installed), at which point you can access it by going to localhost:8000 in your browser. Using ngrok it's possible to then host the game on the internet.
