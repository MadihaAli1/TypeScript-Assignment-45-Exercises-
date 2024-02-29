/*
21.They think of something you could store in a TypeScript Object. Write a program
that creates Objects containing these items.
*/
var car1 = { brand: "Toyota", model: "Camry", year: 2020 };
var car2 = { brand: "Honda", model: "Civic", year: 2019 };
var car3 = { brand: "Ford", model: "Mustang", year: 2022 };
function displayCarInfo(car) {
    console.log("Brand: ".concat(car.brand, ", Model: ").concat(car.model, ", Year: ").concat(car.year));
}
displayCarInfo(car1);
displayCarInfo(car2);
displayCarInfo(car3);
