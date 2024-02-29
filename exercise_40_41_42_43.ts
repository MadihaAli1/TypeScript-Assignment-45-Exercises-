// Exercise 40
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

const album1 = make_album('Artist1', 'Album1');
const album2 = make_album('Artist2', 'Album2', 12);
const album3 = make_album('Artist3', 'Album3', 8);

console.log(album1);
console.log(album2);
console.log(album3);

//Exercise 41: Magicians

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magiciansArray: string[] = ['Magician1', 'Magician2', 'Magician3'];
show_magicians(magiciansArray);

//Exercise 42: Great Magicians

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
const modifiedMagicians = make_great(magiciansArray);
show_magicians(modifiedMagicians);

//Exercise 43: Unchanged Magicians

function make_great_copy(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

const copiedMagicians = make_great_copy([...magiciansArray]);


console.log("Original Magicians:");
show_magicians(magiciansArray);

console.log("\nModified Magicians:");
show_magicians(copiedMagicians);