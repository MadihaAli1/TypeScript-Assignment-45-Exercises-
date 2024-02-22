/* 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let _user_names = ['aaiman', 'mirha', 'ifrah', 'tuba', 'Jinnah'];

if (_user_names.length > 0) {
   
    for (let i = 0; i < _user_names.length; i++) {
        if (_user_names[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + _user_names[i] + ", thank you for logging in again.");
        }
    }
} else {
   
    console.log("We need to find some users!");
}
_user_names = [];
if (_user_names.length > 0) {
    for (let i = 0; i < _user_names.length; i++) {
        if (_user_names[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + _user_names[i] + ", thank you for logging in again.");
        }
    }
} else {
    console.log("We need to find some users!");
}


