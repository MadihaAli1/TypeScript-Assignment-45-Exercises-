/*Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner.*/

 let list__:string[]=["Mariyam","Maliha","Hurmat"];
 
let __absentGuest:string="Mariyam";
let __newGuest:string="Abrish"
list__[0]=__newGuest;

// console.log(`${__absentGuest} is not coming to the party\n.`);

// console.log("Good news! We find big table so we are inviting 3 more guest\n");

list__.unshift("Ayeza");
list__.splice(2,0,"Sana");
list__.push("Dua");

// for(let i=0; i < list__.length; i++ ){

//   console.log(`Dear ${list__[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
// }

//console.log("sorry  we can not arrange big table,only two people will be invited.");

while(list__.length > 2){
  let removeGuest_=list__.pop();
  //console.log(`Sorry ${removeGuest_}, you are not invited for dinner`);
}

// for(let i=0; i < list__.length; i++ ){

//   console.log(`Dear ${list__[i]} you are still invited.\nThank You!\n`);
// }
list__.splice(0,2);
console.log(list__);

console.log(`Total number of guest are: ${list__.length}`);