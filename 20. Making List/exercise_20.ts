/*
20.Think of something you could store in a array. For example, you could make a list of 
mountains, rivers, countries, cities, languages, or anything else you’d like. Write a 
program that creates a list containing these items.
*/
 
//Making a programming languages Array
let programmingLanguages:string[]=["TypeScript","JavaScript","Python","PHP"];

//print the Message of list
console.log("List of programming languages:");

//print the value of Array in the form of list
programmingLanguages.forEach(language => console.log(language));