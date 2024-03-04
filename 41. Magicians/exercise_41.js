/*
41.Magicians: Make a array of magician’s names. Pass the array to a function called
(), which prints the name of each magician in the array.
*/
// Function to show magicians from an array
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicianNames = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];
// Call the function to show magicians
showMagicians(magicianNames);
