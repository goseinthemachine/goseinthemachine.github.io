const url = "https://cat-fact.herokuapp.com/facts/random";
const apiUrl = new URL("https://cat-fact.herokuapp.com/facts/random");
apiUrl.searchParams.set('animal_type', 'cat');
apiUrl.searchParams.set('amount', 1);

function getFact() {
    fetch(apiUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById('fact').innerHTML = data.text;
        })
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('fetch-fact');
    button.addEventListener('click', getFact);
})

const employee1 = {
    name: "Cameron Gose",
    employer: "Bitwise Industries",
    position: "Senior Developer Technical Lead",
    requestVacation: function () {
        alert("Set status to away");
    },
    getRandomFact: function () {
        getFact();
    }
}

const Employee = function (name, employer, position) {
    this.name = name;
    this.employer = employer;
    this.position = position;
    this.requestVacation = function () {
        alert(`No vacation time available for ${this.name}`);
    }
    this.getRandomFact = function () {
        getFact();
    }
}
const employees = [];
for (let index = 0; index < 10; index++) {
    employees.push(new Employee(`Cameron ${index}`, `Bitwise ${index}`, `Programmer ${index}`));
}
console.log(employees);

const Giraffe = function (name) {
    this.icon = '🦒'
    this.name = name
    this.element = null;

    this.populate = function () {
        if (!this.element) {
            this.element = document.createElement("p");
            this.element.id = name;
            this.element.className = "tower";
            this.element.innerHTML = this.icon
            document.body.appendChild(this.element);
        }
    }

    this.run = function () {
        const elements = document.getElementsByClassName("tower");
        if (this.element) {
            const transformProperty = getSupportedPropertyName(transforms)
            if (transformProperty) {
                for (const element of elements) {
                    element.style[transformProperty] = `translate3d(${Math.random() * 1000}px, ${Math.random() * 450}px, 0px)`
                }
            }

        }
    }

}


function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}


const transforms = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];



String.prototype.piglatin = function () {
    const strArr = this.toLowerCase().split(" ");
    const alteredArr = strArr.map(str => {
        return `${str.slice(1)}${str[0]}ay`;
    })
    return alteredArr.join(" ");
}
