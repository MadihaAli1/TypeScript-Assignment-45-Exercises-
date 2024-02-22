/* 39.City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  const location1: string = city_country('Lahore', 'Pakistan');
  const location2: string = city_country('Tokyo', 'Japan');
  const location3: string = city_country('New York', 'USA');
  
  console.log(location1);
  console.log(location2);
  console.log(location3);
  