/*
31.No Users: Add an if test to Exercise 30 to make sure the list of users is not 
empty.

•If the list is empty, print the message We need to find some users!

•Remove all of the usernames from your array, and make sure the correct message
is printed.
*/

const users: string[] = ["admin", "Eric", "Alice", "Bob", "Charlie"];

if (users.length > 0) {
    
    for (const username of users) {
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
//exercise_31
 else {
    
    console.log("We need to find some users!");
}


users.length = 0;


if (users.length === 0) {
    console.log("The list of users is empty now.");
}
