/* 15.Changing Guest List: You just heard that one of your guests can’t make the
 dinner, so you need to send out a new set of invitations. You’ll have to
 think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end
 of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
 the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is
still in your list.*/
var guest_List = ["Mariyam", "Maliha", "Hurmat"];
for (var i = 0; i < guest_List.length; i++) {
    console.log("Dear ".concat(guest_List[i], " It is our pleasure to invite you in our party.\nThank You!\n"));
}
var absent_Guest = "Mariyam";
var new_Guest = "Abrish";
guest_List[0] = new_Guest;
for (var i = 0; i < guest_List.length; i++) {
    console.log("Dear ".concat(guest_List[i], " It is our pleasure to invite you in our party.\nThank You!\n"));
}
console.log("".concat(absent_Guest, " is not coming to the party."));
