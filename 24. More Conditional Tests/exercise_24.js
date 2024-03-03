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
// Tests for equality and inequality with strings
var color = 'blue';
//Test 1
console.log("Is color is equal to 'red'? I predict False.");
console.log(color === 'red');
//Test 2
console.log("Is color !== 'green'? I predict True.");
console.log(color !== 'green');
//Tests using the lower case function
var countryName = 'CANADA';
//Test 3
console.log("Is countryName.toLowerCase() === 'canada'? I predict True.");
console.log(countryName.toLowerCase() === 'canada');
/* Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to */
var num1 = 15;
var num2 = 20;
//Test 4
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);
//Test 5
console.log("Is num2 >= 20? I predict True.");
console.log(num2 >= 20);
//Test 6
console.log("Is num1 + num2 === 35? I predict True.");
console.log(num1 + num2 === 35);
//Test 8
console.log("Is num1 * num2 !== 300? I predict True.");
console.log(num1 * num2 !== 300);
//Tests using "and" and "or" operators
var p = true;
var q = false;
//Test 9
console.log("Is p && q? I predict False.");
console.log(p && q);
//Test 10
console.log("Is p || q? I predict True.");
console.log(p || q);
// Test whether an item is in an array
var fruits = ['Mango', 'Banana', 'Apple'];
//Test 11
console.log('Test "Mango" in the array: ', fruits.includes('Mango'));
// Test whether an item is not in an array
console.log('Testing "Apple is not in array: ', !fruits.includes('Apple'));
