import { Car } from './car.js';

export function initializeCarForm(cars, activeIndex) {
    const clearBtn = document.querySelector("#form-clear");
    const form = document.querySelector("#car-form");
    const make = document.querySelector("#make")
    const model = document.querySelector("#model")
    const year = document.querySelector("#year")
    const color = document.querySelector("#color")
    const used = document.querySelector("#used")
    const newRadio = document.querySelector("#new")

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const car = Car.createCarFromForm(event.target);
        cars.push(car);
        activeIndex = cars.indexOf(car);
        const container = document.querySelector(".container");
        container.removeChild(document.querySelector(".car"));
        cars[activeIndex].initialize(cars);
        sessionStorage.clear()
        form.reset();
    })

    make.addEventListener('change', function (event) {
        console.log(event.target);
        sessionStorage.setItem('make', event.target.value);
    })
    model.addEventListener('change', function (event) {
        sessionStorage.setItem('model', event.target.value);
    })
    year.addEventListener('change', function (event) {
        sessionStorage.setItem('year', event.target.valueAsNumber);
    })
    color.addEventListener('change', function (event) {
        sessionStorage.setItem('color', event.target.value);
    })
    used.addEventListener('change', function (event) {
        sessionStorage.setItem('used', event.target.checked);
        sessionStorage.setItem('new', !event.target.checked);
    })
    newRadio.addEventListener('change', function (event) {
        sessionStorage.setItem('new', event.target.checked);
        sessionStorage.setItem('used', !event.target.checked);
    })


    clearBtn.addEventListener('click', (event) => {
        event.preventDefault();
        sessionStorage.clear()
        form.reset();
    })

    function loadForm() {
        make.value = sessionStorage.getItem('make') || '';
        model.value = sessionStorage.getItem('model') || '';
        year.value = sessionStorage.getItem('year') || '';
        color.value = sessionStorage.getItem('color') || '';
        newRadio.checked = sessionStorage.getItem('new') === 'true' ? true : false;
        used.checked = sessionStorage.getItem('used') === 'true' ? true : false;

    }
    loadForm();
}
