/*  14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a
list that includes at least three people you’d like to invite to dinner. Then use your list to print a message
to each person, inviting them to dinner.

 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
 a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print stateent at the end of your program stating the name
of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are
 inviting.
• Print a second set of invitation messages, one for each person who is still in your list.

 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
 guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
 that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.

17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
 name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program.

19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
 the number of people you are inviting to dinner.*/
 
// Exercise 14: Guest List
var guestList = ["Abrish", "Maria", "maham"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", \tYou are invited to dinner. Please join us! "));
}
//Exercise 15:changing List
var guestCantMakeIt = "Maria";
console.log("Unfortunately, ".concat(guestCantMakeIt, " can't make it to the dinner. "));
var newGuest = "rafia";
guestList[guestList.indexOf(guestCantMakeIt)] = newGuest;
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", \tYou are invited to dinner. Please join us! "));
}
// Exercise 16: More Guests
console.log("Great news! We found a bigger dinner table!\n");
guestList.unshift("Maliha");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Alishba");
guestList.push("Najma");
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear ".concat(guest, ", \tYou are invited to dinner. Please join us! "));
}
// Exercise 17: Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner. ");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ". We can't invite you to dinner. "));
}
for (var _c = 0, guestList_4 = guestList; _c < guestList_4.length; _c++) {
    var guest = guestList_4[_c];
    console.log("Dear ".concat(guest, ",\tYou are still invited to dinner. Please join us! "));
}
//(Question 19)Dinner Guests:
var numInvitations = guestList.length;
console.log("We are inviting ".concat(numInvitations, " people to dinner."));
