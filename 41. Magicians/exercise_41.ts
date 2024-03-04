/*
41.Magicians: Make a array of magician’s names. Pass the array to a function called 
(), which prints the name of each magician in the array.
*/

// Function to show magicians from an array
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// Call the function to show magicians
showMagicians(magicianNames);
