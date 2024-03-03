/*
19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.
*/
//continue with exercise_14
//Guest list
var guestList = ["Mariyam", "Maliha", "Hurmat"];
//continue with exercise_15
//replaced guest
var absentGuest = "Mariyam";
var newGuest = "Abrish";
guestList[0] = newGuest;
//console.log(`${absentGuest} is not coming to the party.\n`);
//continue with exercise_16
//console.log(`Good News! we find big table so we are inviting 3 more guests.\n`);
guestList.unshift("Zainab");
guestList.splice(2, 0, "Aine");
guestList.push("Bisma");
/*for(let i=0; i < guestList.length; i++ ){

    console.log(`Dear ${guestList[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
}*/
//continue with exercise_17
//console.log("Sorry we can not arrange big table, only two peoples will be invited.");
while (guestList.length > 2) {
    var remove_guest = guestList.pop();
    //   console.log(`Sorry ${remove_guest}, You are not invited for Dinner.\n`);
}
/*for(let i=0; i < guestList.length; i++ ){

    console.log(`Dear ${guestList[i]} ,You are still invited.\nThank You!\n`);
}*/
guestList.splice(0, 2);
console.log(guestList);
//exercise_19
console.log("\nTotal number of guest are: ".concat(guestList.length));
