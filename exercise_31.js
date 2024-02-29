/*
31.No Users: Add an if test to Exercise 28 to make sure the list of users is not
empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message
 is printed.
*/
var users = ['user1', 'user2', 'user3'];
if (users.length > 0) {
    users = [];
    console.log("All usernames have been removed.");
}
else {
    console.log("We need to find some users!");
}
