/*
39.City Names: Write a function called city_country() that takes in the name of a
 city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned
*/
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var result1 = city_country('Lahore', 'Pakistan');
var result2 = city_country('Paris', 'France');
var result3 = city_country('Sydney', 'Australia');
console.log(result1);
console.log(result2);
console.log(result3);
