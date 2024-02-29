/*
24.More Conditional Tests: You don’t have to limit the number of tests you create 
to 10. If you want to try more comparisons, write more tests. Have at least one 
True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

let color: string = 'blue';

// Test 11
console.log("Is color === 'red'? I predict False.");
console.log(color === 'red');

// Test 12
console.log("Is color !== 'green'? I predict True.");
console.log(color !== 'green');

// Tests using the lower case function
let countryName: string = 'Canada';

// Test 13
console.log("Is countryName.toLowerCase() === 'canada'? I predict True.");
console.log(countryName.toLowerCase() === 'canada');

// Numerical tests
let num1: number = 15;
let num2: number = 20;

// Test 14
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);

// Test 15
console.log("Is num2 >= 20? I predict True.");
console.log(num2 >= 20);

// Test 16
console.log("Is num1 + num2 === 35? I predict True.");
console.log(num1 + num2 === 35);

// Test 17
console.log("Is num1 * num2 !== 300? I predict True.");
console.log(num1 * num2 !== 300);

// Tests using "and" and "or" operators
let p: boolean = true;
let q: boolean = false;

// Test 18
console.log("Is p && q? I predict False.");
console.log(p && q);

// Test 19
console.log("Is p || q? I predict True.");
console.log(p || q);

// Test whether an item is in an array
let animals: string[] = ['dog', 'cat', 'rabbit'];

// Test 20
console.log("Is 'rabbit' in the animals array? I predict True.");
console.log(animals.includes('rabbit'));

// Test whether an item is not in an array
// Test 21
console.log("Is 'elephant' not in the animals array? I predict True.");
console.log(!animals.includes('elephant'));
