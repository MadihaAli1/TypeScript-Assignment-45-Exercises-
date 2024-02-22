/* 25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player
 just earned 5 points.
• Write one version of this program that passes the if test and another that fails.
 (The version that fails will have no output.)

 26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.

 27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
//Alien Colors #1
var alien_color_version1 = 'green';
if (alien_color_version1 === 'green') {
    console.log('Version 1: Player just earned 5 points!');
}
var alien_color_version2 = 'red';
if (alien_color_version2 === 'green') {
    console.log('Version 2: Player just earned 5 points!');
}
//Alien Colors #2
var alien_color_version3 = 'green';
if (alien_color_version3 === 'green') {
    console.log('Version 3: Player earned 5 points for shooting the green alien!');
}
else {
    console.log('Version 3: Player earned 10 points!');
}
var alien_color_version4 = 'red';
if (alien_color_version4 === 'green') {
    console.log('Version 4: Player earned 5 points for shooting the green alien!');
}
else {
    console.log('Version 4: Player earned 10 points!');
}
//Alien Colors #3
var alien_color_version5 = 'green';
if (alien_color_version5 === 'green') {
    console.log('Version 5: Player earned 5 points!');
}
else if (alien_color_version5 === 'yellow') {
    console.log('Version 5: Player earned 10 points!');
}
else if (alien_color_version5 === 'red') {
    console.log('Version 5: Player earned 15 points!');
}
var alien_color_version6 = 'yellow';
if (alien_color_version6 === 'green') {
    console.log('Version 6: Player earned 5 points!');
}
else if (alien_color_version6 === 'yellow') {
    console.log('Version 6: Player earned 10 points!');
}
else if (alien_color_version6 === 'red') {
    console.log('Version 6: Player earned 15 points!');
}
var alien_color_version7 = 'red';
if (alien_color_version7 === 'green') {
    console.log('Version 7: Player earned 5 points!');
}
else if (alien_color_version7 === 'yellow') {
    console.log('Version 7: Player earned 10 points!');
}
else if (alien_color_version7 === 'red') {
    console.log('Version 7: Player earned 15 points!');
}
