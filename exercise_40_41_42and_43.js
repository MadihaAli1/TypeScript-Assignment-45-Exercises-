/* 40.Album: Write a function called make_album() that builds a Object describing a music album. The function
should take in an artist name and an album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different albums. Print each return value
to show that Objects are storing the album information correctly. Add an optional parameter to make_album()
that allows you to store the number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new function call that includes the number
of tracks on an album.

41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.

42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.

43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
the array of magicians’ names. Because the original array will be unchanged, return the new array and store it
 in a separate array. Call show_magicians() with each array to show that you have one array of the original
 names and one array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Exercise 41: Magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Exercise 42: Great Magicians
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
// Exercise 43: Unchanged Magicians
var magicianNames = ['Merlin', 'David Copperfield', 'Houdini', 'David Blaine'];
var originalMagicians = __spreadArray([], magicianNames, true);
var greatMagicians = make_great(originalMagicians);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
