/* 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/


let color1 = 'blue';
let color2 = 'red';

console.log("Is color1 equal to 'blue'? I predict True.");
console.log(color1 === 'blue');

console.log("Is color2 not equal to 'green'? I predict True.");
console.log(color2 !== 'green');

let greeting = 'Hello';

console.log("Is greeting in lowercase equal to 'hello'? I predict True.");
console.log(greeting.toLowerCase() === 'hello');

let number1 = 42;
let number2 = 10;

console.log("Is number1 equal to 42? I predict True.");
console.log(number1 == 42);

console.log("Is number2 greater than or equal to 5? I predict True.");
console.log(number2 >= 5);

let sunny = true;
let warm = false;

console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm);

console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm);

let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
