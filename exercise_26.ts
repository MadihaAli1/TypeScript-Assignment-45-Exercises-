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

 //Version 1 (Running the if block):
 let alien__color: string = 'green';

if (alien__color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}


//Version 2 (Running the else block):
let alien_color_: string = 'red';

// Check the alien's color and provide points accordingly
if (alien_color_ === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}

