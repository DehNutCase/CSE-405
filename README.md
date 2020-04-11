# CSE-405
Repository for CSE 405 stuff

Planning to make a small number guessing game. Taking turns, one player chooses a number between 0 and 9 (or 1 and 10, or 0 and 10)
while the other asks 4 yes or no questions about the number (such as, is the number '4'? or is the number >= 4?), however, the player
who chose the number has a 'lie counter' which is incremented by one every time he chooses a number. That is, the player who chose a
number can lie once per round, but is allowed to save his lies for later rounds.

Wins are primarily determined by number of rounds, then number of lies remaining. Otherwise it's a tie.
