export function initialize(cars, activeIndex) {
    const container = document.querySelector(".container")
    document.querySelector("#toggle-form").addEventListener("click", function (event) {
        event.preventDefault();
        const form = document.querySelector("#car-form");
        form.hidden = !form.hidden;
    })

    document.querySelector('#prev-car').addEventListener("click", (event) => {
        event.preventDefault();
        if (activeIndex <= 0) {
            activeIndex = cars.length - 1;
        } else {
            activeIndex -= 1;
        }

        container.removeChild(document.querySelector(".car"));
        cars[activeIndex].initialize();
    })
    document.querySelector('#next-car').addEventListener("click", (event) => {
        event.preventDefault();
        if (activeIndex >= cars.length - 1) {
            activeIndex = 0;
        } else {
            activeIndex += 1;
        }
        container.removeChild(document.querySelector(".car"));
        cars[activeIndex].initialize();
    })

};