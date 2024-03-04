/*
43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array 
to show that you have one array of the original names and one array with the Great added to each
magician’s name.
 */

// Function to show magicians from an array
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        greatMagicians[i] = "the Great " + magicians[i];
    }

    return greatMagicians;
}

// Array of magician's names
const magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// Call makeGreat function with a copy of the original array
const greatMagicians: string[] = makeGreat([...magicianNames]);

// Call the function to show original magicians
showMagicians(magicianNames);

// Call the function to show modified magicians
showMagicians(greatMagicians);
