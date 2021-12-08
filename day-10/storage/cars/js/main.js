

const cars = loadCarsFromLocalStorage();
// const cars = loadCarsFromSessionStorage();
// switch back to local storage after session and show original stuff still there.

let activeIndex = 0;

cars[activeIndex].initialize();

const spinner = document.querySelector("#spinner");
function loadCarsFromLocalStorage() {
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
        return JSON.parse(storedCars).map(car => {
            return new Car(car)
        })
    } else {
        const car1 = new Car({ make: "Subaru", model: "Forester", year: 2020, color: "Black", condition: "Used" });
        const car2 = new Car({ make: "Toyota", model: "Paseo", year: 1992, color: "Red", condition: "Used" });
        const car3 = new Car({ make: "Oldsmobile", model: "Toronado", year: 1988, color: "Brown", condition: "Used" });
        return [car1, car2, car3];
    }
}

function loadCarsFromSessionStorage() {
    const storedCars = sessionStorage.getItem('cars');
    if (storedCars) {
        return JSON.parse(storedCars).map(car => {
            return new Car(car)
        })
    } else {
        const car1 = new Car({ make: "Subaru", model: "Forester", year: 2020, color: "Black", condition: "Used" });
        const car2 = new Car({ make: "Toyota", model: "Paseo", year: 1992, color: "Red", condition: "Used" });
        const car3 = new Car({ make: "Oldsmobile", model: "Toronado", year: 1988, color: "Brown", condition: "Used" });
        return [car1, car2, car3];
    }
}

function saveCarsToLocalStorage() {
    localStorage.setItem('cars', JSON.stringify(cars));
}

function saveCarsToSessionStorage() {
    sessionStorage.setItem('cars', JSON.stringify(cars));
}