//(Question 1)Installation is done

//(Question 2)Personal Message:

let person="Madiha";
 let persnol_Message="Hello"
 console.log(persnol_Message+person);

//(Question 3)Name Cases: 

let person_name="Madiha Ali";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.charAt(0).toUpperCase()+person_name.slice(1).toLowerCase());

//(Question 4) Famouse Quote: 

let Auther= "Ralpah waldo emporen,";
let Quote= " 'life is journey not a destination' ";
console.log(Auther+Quote);

//(Question 5) Famous Quote 2: 

let famous_person= "Mark Twain,";
let message= " 'To succeed life,youneed two things ingonrance confidence' ";
console.log(famous_person+message);

//(Question 6)Stripping Names: 

  let Name="\t \n Muhammad ali \n \t";
  console.log("Name With WhiteSpace:"+Name);
  Name=Name.trim();
  console.log("Name without whitespace:"+Name);
 
//(Question 7)Number Eight: 
//(Question 8)You should create four lines that look like this:

console.log("The addition of (4+4) is:"+(4+4));
console.log("The subtraction of (10-2) is:"+(10-2));
console.log("The multiplication of (4*2) is:"+(4*2));
console.log("The division of (24/3) is:"+(24/3));

//(Question 9)Favorite Number: 

let Favorite_Number=10;
let reveal_Messag="This is my favorite number:\n";
console.log(reveal_Messag+Favorite_Number);

//(Question 10)Adding Comments:

// These program is written by:(MAdiha Ali)
// on Date:(7-2-2024)

//(Question 11)Names:

let friends_Name=["Abrish","Maham","Amna","Mariyam"];
for(let i=0;i<friends_Name.length;i++){
      console.log(friends_Name[i]);
}
//(Question 12)Greetings:


let girls=["Abrish","Maham","Amna","Mariyam"];
for(let i=0;i<girls.length;i++){
      console.log("Hello\n"+friends_Name[i]+"\nHow are you");
}

//(Question 13)Your Own Array:

let vehicles=["car","motorcycle","bicycle","scooter"];
for(let i=0; i<vehicles.length; i++){
     console.log("i would love to ride a "+vehicles[i]+" Someday!")

}

//(Question 14)Guest List
//(Question 15)Changing guest list
//(Question 16)More guest
//(Question 17)Shrinking guest list

// Exercise 14: Guest List
let guestList = ["Abrish", "Maria", "maham"];

for (const guest of guestList) {
    console.log(`Dear ${guest}, \tYou are invited to dinner. Please join us! `);
}
//Exercise 15:changing List
const guestCantMakeIt = "Maria";
console.log(`Unfortunately, ${guestCantMakeIt} can't make it to the dinner. `);

const newGuest = "rafia";
guestList[guestList.indexOf(guestCantMakeIt)] = newGuest;

for (const guest of guestList) {
    console.log(`Dear ${guest}, \tYou are invited to dinner. Please join us! `);
}

// Exercise 16: More Guests
console.log("Great news! We found a bigger dinner table!\n");

guestList.unshift("Maliha");

const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Alishba");

guestList.push("Najma");

for (const guest of guestList) {
    console.log(`Dear ${guest}, \tYou are invited to dinner. Please join us! `);
}

// Exercise 17: Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner. ");

while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}. We can't invite you to dinner. `);
}

for (const guest of guestList) {
    console.log(`Dear ${guest},\tYou are still invited to dinner. Please join us! `)
}

//(Exercise 18): Seeing the World
let placesToVisit = ["turkey","paris","Italy", "London", "Honkong"];

console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", [...placesToVisit].sort());
console.log("Original Order (unchanged):", placesToVisit);
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
console.log("Original Order (unchanged):", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Original Order (reversed and then reversed again):", placesToVisit);
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", placesToVisit);

//(Question 19)Dinner Guests:

const numInvitations = guestList.length;
console.log(`We are inviting ${numInvitations} people to dinner.`);

//(Question 20)Think of something you could store in a array

let countries = ["Italy", "Japan", "France", "Turkey", "London"];
console.log("list of countries: "+countries);

//(Question 21)They think of something you could store in a TypeScript Object.
 //Write a program that creates Objects containing these items.

let countriesInfo = [
  { country: "pakistan", capital: "Islamabad" },
  { country: "Japan", capital: "Tokyo" },
  { country: "France", capital: "Paris" },
  { country: "Italy", capital: "Rome" },
  { country: "Unitedkingdom", capital: "London" },
];
console.log("Countries and Capitals:", countriesInfo);

//(Question 22)Intentional Error:

let _fruits = ["Apple", "Banana", "Orange"];
console.log(_fruits[3]);
console.log(_fruits[1]);

//(Question 23)Conditional Tests:
let _car = 'subaru';
let _number = 42;
let _fruit = 'apple';
let isSunny = true;
let isRaining = false;

console.log("Is car == 'subaru'? I predict True.");
console.log(_car == 'subaru');

console.log("Is number > 30? I predict True.");
console.log(_number > 30);

console.log("Is fruit === 'orange'? I predict False.");
console.log(_fruit === 'orange');

console.log("Is car != 'toyota'? I predict True.");
console.log(_car != 'toyota');

console.log("Is isSunny && isRaining? I predict False.");
console.log(isSunny && isRaining);

console.log("Is number <= 50? I predict True.");
console.log(_number <= 50);

console.log("Is fruit !== 'apple'? I predict False.");
console.log(_fruit !== 'apple');

console.log("Is car === 'honda'? I predict False.");
console.log(_car === 'honda');

console.log("Is isSunny || isRaining? I predict True.");
console.log(isSunny || isRaining);

console.log("Is number % 2 === 0? I predict True.");
console.log(_number % 2 === 0);

//(Question 24)More Conditional Tests:

let color1 = 'blue';
let color2 = 'red';

console.log("Is color1 equal to 'blue'? I predict True.");
console.log(color1 === 'blue');

console.log("Is color2 not equal to 'green'? I predict True.");
console.log(color2 !== 'green');

let greeting = 'Hello';

console.log("Is greeting in lowercase equal to 'hello'? I predict True.");
console.log(greeting.toLowerCase() === 'hello');

let number1 = 42;
let number2 = 10;

console.log("Is number1 equal to 42? I predict True.");
console.log(number1 == 42);

console.log("Is number2 greater than or equal to 5? I predict True.");
console.log(number2 >= 5);

let sunny = true;
let warm = false;

console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm);

console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm);

let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));

//(Question 25)Alien Colors #1: 

//Version 1 (Passes the if test)

let alien_color = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else {
    console.log("Player didn't earn any points.");
}
//Version 2 (Fails the if test):
let alien_color1 = 'yellow';

if (alien_color1 === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else {
    console.log("Player didn't earn any points.");
}

//(Question 25)Alien Colors #1:
//(Question 26)Alien Colors #2:
//(Question 27)Alien Colors #3:

// Alien Colors #1
let alien_color_pass = 'green';

if (alien_color_pass === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
}
let alien_color_fail = 'red';

if (alien_color_fail === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
}
//Alien Colors #2
let alien_color_if = 'green';

if (alien_color_if === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else {
    console.log("Player just earned 10 points.");
}
let alien_color_else = 'yellow';

if (alien_color_else === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else {
    console.log("Player just earned 10 points.");
}
//Alien Colors #3
let alien_color_green = 'green';

if (alien_color_green === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color_green === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color_green === 'red') {
    console.log("Player earned 15 points.");
}
let alien_color_yellow = 'yellow';

if (alien_color_yellow === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color_yellow === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color_yellow === 'red') {
    console.log("Player earned 15 points.");
}
let alien_color_red = 'red';

if (alien_color_red === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color_red === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color_red === 'red') {
    console.log("Player earned 15 points.");
}

//(Question 28)Stages of Life:   

let age = 30; 
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//(Question 29)Favorite Fruit:

let favorite_fruits = ['banana', 'apple', 'strawberry'];

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}

//(Question 30)Hello Admin:

// Array of usernames
let user_names = ['amna', 'Ersa', 'Alisha', 'munza', 'Javeria'];

// Loop through the array and print greetings
for (let i = 0; i < user_names.length; i++) {
    if (user_names[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello " + user_names[i] + ", thank you for logging in again.");
    }
}

//(Question 31)No users:
let _user_names = ['aaiman', 'mirha', 'ifrah', 'tuba', 'Jinnah'];

if (_user_names.length > 0) {
   
    for (let i = 0; i < _user_names.length; i++) {
        if (_user_names[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + _user_names[i] + ", thank you for logging in again.");
        }
    }
} else {
   
    console.log("We need to find some users!");
}
_user_names = [];
if (_user_names.length > 0) {
    for (let i = 0; i < _user_names.length; i++) {
        if (_user_names[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + _user_names[i] + ", thank you for logging in again.");
        }
    }
} else {
    console.log("We need to find some users!");
}

//(Questiion 32)checking username:

let current_users = ['Alishba', 'ayza', 'amna', 'aiiman', 'annu'];

let new_users = ['madiha', 'maham', 'mariya', 'mehak', 'momina'];

for (let i = 0; i < new_users.length; i++) {
    let isUsernameTaken = current_users.some(user => user.toLowerCase() === new_users[i].toLowerCase());

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}

//(Question 33)Ordinal Numbers:


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    let ordinal;
    if (currentNumber === 1) {
        ordinal = 'st';
    } else if (currentNumber === 2) {
        ordinal = 'nd';
    } else if (currentNumber === 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }
    console.log(`${currentNumber}${ordinal}`);
}

//(Question 34)Pizzas:

let favoritePizzas = ['beaf', 'Margherita', 'BBQ Chicken'];

for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
}
console.log("I really love pizza!");

//(Question 35)Animals:

let animals = ['Dog', 'Cat', 'Rabbit'];

for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

//(Question 36)T-Shirt:
//(Question 37)Large Shirts: 

function make_shirt(size = 'Large', _message_ = 'I love TypeScript') {
  console.log(`Size: ${size}, Message: ${_message_}`);
}

make_shirt(); 
make_shirt('Medium'); 
make_shirt('Small', 'Custom Message');

//(Question 38)Cities

function describe_city(city: string, country: string = 'Default Country'): void {
  console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan');
describe_city('Paris', 'France');
describe_city('New York');

//(Question 39)city names:
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

const location1: string = city_country('Lahore', 'Pakistan');
const location2: string = city_country('Tokyo', 'Japan');
const location3: string = city_country('New York', 'USA');

console.log(location1);
console.log(location2);
console.log(location3);

//(Question 40)Album
//(Question 41)Magicians: 
//(Question 42)Great Magicians: 
//(Question 43)Unchanged Magicians: 

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

//(Question no 44)Sandwiches:

function makeSandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length > 0) {
      console.log("You ordered a sandwich with:");
      for (let item of items) {
          console.log(`- ${item}`);
      }
  } else {
      console.log("Looks like you want an empty sandwich!");
  }
  console.log(); 
}
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Swiss');
makeSandwich();

//(Question 45)Cars

interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: string | number | boolean; 
}

function createCar(manufacturer: string, modelName: string, ...options: [string, string | number | boolean][]): Car {
  const car: Car = {
      manufacturer,
      modelName,
  };
  options.forEach(([key, value]) => {
      car[key] = value;
  });

  return car;
}
const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022], ['hasSunroof', true]);
console.log(myCar);
