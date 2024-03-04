/*
29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.

•Make a array of your three favorite fruits and call it favorite_fruits.

•Write five if statements. Each should check whether a certain kind of fruit is 
in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/

// 29. Favorite Fruit: Make an array of your favorite fruits, and then write a series of
// independent if statements that check for certain fruits in your array.

// • Make an array of your three favorite fruits and call it favorite_fruits.
const favorite_fruits: string[] = ["banana", "apple", "grapes"];

// • Write five if statements. Each should check whether a certain kind of fruit is 
// in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

// Check for banana
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

// Check for apple
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

// Check for grapes
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}

// Check for orange
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

// Check for mango
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
