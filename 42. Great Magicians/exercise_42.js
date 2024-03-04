/*
42.Great Magicians: Start with a copy of your program from Exercise 41. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each
magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
// Function to show magicians from an array
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
var magicianNames = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];
// Call makeGreat function to modify magician names
makeGreat(magicianNames);
// Call the function to show modified magicians
showMagicians(magicianNames);
