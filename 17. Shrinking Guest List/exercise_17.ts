/*
17.Shrinking Guest List: You just found out that your new dinner table won’t
arrive in time for the dinner, and you have space for only two guests.
•Start with your program from Exercise 16. Add a new line that prints a 
message saying that you can invite only two people for dinner.

•Remove guests from your list one at a time until only two names remain
in your list. Each time you pop a name from your list, print a message 
to that person letting them know you’re sorry you can’t invite them to
dinner.

•Print a message to each of the two people still on your list, letting
them know they’re still invited.

•Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end 
of your program.
*/

 //Guest list
 let guestList:string[]=["Mariyam","Maliha","Hurmat"];

 //replaced guest

let absentGuest:string="Mariyam";
let newGuest:string="Abrish";
guestList[0]=newGuest;

console.log(`${absentGuest} is not coming to the party.\n`);

//continue with exercise_16

console.log(`Good News! we find big table so we are inviting 3 more guests.\n`);

guestList.unshift("Zainab");
guestList.splice(2,0,"Aine");
guestList.push("Bisma");

for(let i=0; i < guestList.length; i++ ){

    console.log(`Dear ${guestList[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
}

//exercise_17

console.log("Sorry we can not arrange big table, only two peoples will be invited.");

while(guestList.length > 2){

    let remove_guest=guestList.pop();
    console.log(`Sorry ${remove_guest}, You are not invited for Dinner.\n`);
}
for(let i=0; i < guestList.length; i++ ){

    console.log(`Dear ${guestList[i]} ,You are still invited.\nThank You!\n`);
}

guestList.splice(0,2);
console.log(guestList);
