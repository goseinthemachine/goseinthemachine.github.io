import * as carForm from './car-form.js';
import * as storage from './storage.js';
import * as nav from './nav.js';
import { Car } from './car.js';

const cars = storage.loadCarsFromLocalStorage();
if (cars.length > 0) {
    cars.map((car, index) => {
        cars[index] = new Car(car);
    })
} else {
    const car1 = new Car({ make: "Subaru", model: "Forester", year: 2020, color: "Black", condition: "Used" });
    const car2 = new Car({ make: "Toyota", model: "Paseo", year: 1992, color: "Red", condition: "Used" });
    const car3 = new Car({ make: "Oldsmobile", model: "Toronado", year: 1988, color: "Brown", condition: "Used" });
    cars.push(car1);
    cars.push(car2);
    cars.push(car3);
}
// const cars = loadCarsFromSessionStorage();
// switch back to local storage after session and show original stuff still there.

let activeIndex = 0;

cars[activeIndex].initialize(cars);

nav.initialize(cars, activeIndex);
carForm.initializeCarForm(cars, activeIndex);

