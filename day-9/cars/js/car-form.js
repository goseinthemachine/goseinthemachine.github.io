document.addEventListener("DOMContentLoaded", () => {
    const clearBtn = document.querySelector("#form-clear");
    const form = document.querySelector("#car-form");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const car = Car.createCarFromForm(event.target);
        cars.push(car);
        activeIndex = cars.indexOf(car);
        const container = document.querySelector(".container");
        container.removeChild(document.querySelector(".car"));
        cars[activeIndex].initialize();
        form.reset();
    })

    clearBtn.addEventListener('click', (event) => {
        event.preventDefault();
        form.reset();
    })

}, false);