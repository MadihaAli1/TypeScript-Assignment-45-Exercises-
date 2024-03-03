/*
26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
 write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 
points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 
10 points.

• Write one version of this program that runs the if block and another that runs
 the else block.
 */

 // Version 1: Runs the if block (alien_color is 'green')
let alien_color_if: string = 'green';

if (alien_color_if === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

// Version 2: Runs the else block (alien_color is 'red')
let alien_color_else: string = 'red';

if (alien_color_else === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}
