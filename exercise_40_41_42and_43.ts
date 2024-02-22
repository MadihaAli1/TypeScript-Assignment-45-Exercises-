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

 // Exercise 40: Album
interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title
    };
  
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
  
    return album;
  }
  
  // Exercise 41: Magicians
  function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
  }
  
  // Exercise 42: Great Magicians
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
  }
  
  // Exercise 43: Unchanged Magicians
  const magicianNames: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'David Blaine'];
  
  const originalMagicians: string[] = [...magicianNames]; 
  
  const greatMagicians: string[] = make_great(originalMagicians);
  
  console.log("Original Magicians:");
  show_magicians(originalMagicians);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagicians);
  