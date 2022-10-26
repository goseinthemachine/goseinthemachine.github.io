const car1 = new Car("Subaru", "Forester", 2020, "Black", "Used")
const car2 = new Car("Toyota", "Paseo", 1992, "Red", "Used")
const car3 = new Car("Ford", "Bronco", 2022, "Blue", "New")

const cars = [car1, car2, car3];
let activeIndex = 2;
cars[activeIndex].initialize();