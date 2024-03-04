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

// List of current users
const current_users: string[] = ["Ali", "Ahmed", "Kiran", "John", "Sara"];

// List of new users
const new_users: string[] = ["Raza", "Kiran", "JOHN", "Sadia", "Amir"];


for (const newUsername of new_users) {
    
    const isUsernameTaken = current_users.some(
        (currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase()
    );

    // Printing a message based on whether the username is taken or available
    if (isUsernameTaken) {
        console.log(`The username '${newUsername}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUsername}' is available.`);
    }
}
