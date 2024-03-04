/*
40.Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object 
containing these two pieces of information. Use the function to make three dictionaries 
representing different albums. Print each return value to show that Objects are storing the 
album information correctly. Add an optional parameter to make_album() that allows you to store
the number of tracks on an album. If the calling line includes a value for the number of tracks,
add that value to the album’s Object. Make at least one new function call that includes the 
number of tracks on an album*/

// makeAlbum naam ka function define kiya, jismein artist ka naam, album ka title, aur optional tracks ka number huwa
function makeAlbum(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {

    // Ek album object banaya jismein artist aur title properties hongi
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    // Check kiya ki tracks parameter diya gaya hai ya nahi, agar hai to use album object mein add karo
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    // Album object ko return kiya
    return album;
}

// makeAlbum function ka istemal karke teen alag-alag albums banaye
const album1 = makeAlbum("Artist1", "Album1", 10);
const album2 = makeAlbum("Artist2", "Album2");
const album3 = makeAlbum("Artist3", "Album3", 15);

// Har album ki information ko print kiya
console.log(album1);
console.log(album2);
console.log(album3);

