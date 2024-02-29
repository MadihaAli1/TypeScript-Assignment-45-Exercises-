/*
21.They think of something you could store in a TypeScript Object. Write a program 
that creates Objects containing these items.
*/

interface Car {
    brand: string;
    model: string;
    year: number;
  }
  
  const car1: Car = { brand: "Toyota", model: "Camry", year: 2020 };
  const car2: Car = { brand: "Honda", model: "Civic", year: 2019 };
  const car3: Car = { brand: "Ford", model: "Mustang", year: 2022 };
  
  function displayCarInfo(car: Car): void {
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
  }

  displayCarInfo(car1);
  displayCarInfo(car2);
  displayCarInfo(car3);
  
