const car1 = new Car({ make: "Subaru", model: "Forester", year: 2020, color: "Black", condition: "Used" });
const car2 = new Car({ make: "Toyota", model: "Paseo", year: 1992, color: "Red", condition: "Used" });
const car3 = new Car({ make: "Oldsmobile", model: "Toronado", year: 1988, color: "Brown", condition: "Used" });

const cars = [car1, car2, car3];
let activeIndex = 0;

cars[activeIndex].initialize();


