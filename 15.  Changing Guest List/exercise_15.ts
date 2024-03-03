/*
15.Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to 
think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end
of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is 
still in your list.
*/


//continue with exercise_14

let guestList:string[]=["Mariyam","Maliha","Hurmat"];

for(let i=0; i < guestList.length; i++ ){

    console.log(`Dear ${guestList[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
}

//exercise_15

let absentGuest:string="Mariyam";
let newGuest:string="Abrish";
guestList[0]=newGuest;

for(let i=0; i < guestList.length; i++ ){

    console.log(`Dear ${guestList[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
}

console.log(`${absentGuest} is not coming to the party.`);
