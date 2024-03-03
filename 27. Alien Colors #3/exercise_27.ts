/*
27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for 
the appropriate color alien.
*/

// Version 1: Green alien
let alien_color_1: string = 'green';

if (alien_color_1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_1 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

// Version 2: Yellow alien
let alien_color_2: string = 'yellow';

if (alien_color_2 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_2 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

// Version 3: Red alien
let alien_color_3: string = 'red';

if (alien_color_3 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color_3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color_3 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
