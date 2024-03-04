/*
43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to each
magician’s name.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to show magicians from an array
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians[i] = "the Great " + magicians[i];
    }
    return greatMagicians;
}
// Array of magician's names
var magicianNames = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];
// Call makeGreat function with a copy of the original array
var greatMagicians = makeGreat(__spreadArray([], magicianNames, true));
// Call the function to show original magicians
showMagicians(magicianNames);
// Call the function to show modified magicians
showMagicians(greatMagicians);
