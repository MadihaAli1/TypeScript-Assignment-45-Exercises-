function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        "manyfacturer": manufacturer,
        "model": model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
var carInfo = createCar('Toyota', 'Carmy', { "color": "blue" }, { "year": 2022 });
console.log(carInfo);
