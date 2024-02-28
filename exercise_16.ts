/* 16.More Guests: You just found a bigger dinner table, so now more space 
is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end
 of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one
 new guest to the end of your list. • Print a new set of invitation messages,
 one for each person in your list.*/

 let list:string[]=["Mariyam","Maliha","Hurmat"];

let absentGuest:string="Mariyam";
let newGuest:string="Abrish"
list[0]=newGuest;

for(let i=0; i < list.length; i++ ){

    console.log(`Dear ${list[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
}

console.log(`${absentGuest} is not coming to the party\n.`);

console.log("Good news! We find big table so we are inviting 3 more guest\n");

list.unshift("Ayeza");
list.splice(2,0,"Sana");
list.push("Dua");

for(let i=0; i < list.length; i++ ){

    console.log(`Dear ${list[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
}