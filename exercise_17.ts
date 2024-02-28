/*Shrinking Guest List: You just found out that your new dinner table won’t
 arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a 
message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain
 in your list. Each time you pop a name from your list, print a message 
 to that person letting them know you’re sorry you can’t invite them to
  dinner.

• Print a message to each of the two people still on your list, letting
 them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end 
 of your program.*/

 let list_:string[]=["Mariyam","Maliha","Hurmat"];
 
let _absentGuest:string="Mariyam";
let _newGuest:string="Abrish"
list_[0]=_newGuest;

console.log(`${_absentGuest} is not coming to the party\n.`);

console.log("Good news! We find big table so we are inviting 3 more guest\n");

list_.unshift("Ayeza");
list_.splice(2,0,"Sana");
list_.push("Dua");

for(let i=0; i < list_.length; i++ ){

  console.log(`Dear ${list_[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
}

console.log("sorry  we can not arrange big table,only two people will be invited.");

while(list_.length > 2){
  let removeGuest=list_.pop();
  console.log(`Sorry ${removeGuest}, you are not invited for dinner`);
}

for(let i=0; i < list_.length; i++ ){

  console.log(`Dear ${list_[i]} you are still invited.\nThank You!\n`);
}
list_.splice(0,2);
console.log(list_);