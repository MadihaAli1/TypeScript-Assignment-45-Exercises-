/*
32.Checking Usernames: Do the following to create a program that simulates how
 websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of
 the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been
 used. If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN'
should not be accepted
*/
var currentUsers = ['John', 'Alice', 'Bob', 'Charlie', 'Diana'];
var newUsers = ['Eric', 'John', 'Maria', 'diana', 'Kate'];
var _loop_1 = function (newUser) {
    var isUsernameTaken = currentUsers.some(function (currentUsername) { return currentUsername.toLowerCase() === newUser.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("Sorry, ".concat(newUser, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! ".concat(newUser, " is available."));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
