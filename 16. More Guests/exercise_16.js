/*
16.More Guests: You just found a bigger dinner table, so now more space
is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end
of your program informing people that you found a bigger dinner table.

•Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one
 new guest to the end of your list. • Print a new set of invitation messages,
 one for each person in your list.
 */
//Guest list
var guestList = ["Mariyam", "Maliha", "Hurmat"];
//continue with exercise_15
var absentGuest = "Mariyam";
var newGuest = "Abrish";
guestList[0] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " It is our pleasure to invite you in our party.\nThank You!\n"));
}
console.log("".concat(absentGuest, " is not coming to the party.\n"));
//exercise_16
console.log("Good News! we find big table so we are inviting 3 more guests.\n");
guestList.unshift("Zainab");
guestList.splice(2, 0, "Aine");
guestList.push("Bisma");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " It is our pleasure to invite you in our party.\nThank You!\n"));
}
