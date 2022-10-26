function loadCarsFromLocalStorage() {
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
        return JSON.parse(storedCars).map(car => {
            return car;
        })
    }
    return [];
}

function loadCarsFromSessionStorage() {
    const storedCars = sessionStorage.getItem('cars');
    if (storedCars) {
        return JSON.parse(storedCars).map(car => {
            return car;
        })
    }
    return [];
}

function saveCarsToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function saveCarsToSessionStorage() {
    sessionStorage.setItem('cars', JSON.stringify(cars));
}

export {
    loadCarsFromLocalStorage,
    loadCarsFromSessionStorage,
    saveCarsToSessionStorage,
    saveCarsToLocalStorage
}