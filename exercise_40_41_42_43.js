var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Exercise 40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2', 12);
var album3 = make_album('Artist3', 'Album3', 8);
console.log(album1);
console.log(album2);
console.log(album3);
//Exercise 41: Magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magiciansArray = ['Magician1', 'Magician2', 'Magician3'];
show_magicians(magiciansArray);
//Exercise 42: Great Magicians
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
var modifiedMagicians = make_great(magiciansArray);
show_magicians(modifiedMagicians);
//Exercise 43: Unchanged Magicians
function make_great_copy(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
var copiedMagicians = make_great_copy(__spreadArray([], magiciansArray, true));
console.log("Original Magicians:");
show_magicians(magiciansArray);
console.log("\nModified Magicians:");
show_magicians(copiedMagicians);
