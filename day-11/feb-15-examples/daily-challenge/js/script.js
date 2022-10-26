const dog = {
    name: 'lassie',
    breed: 'Australian Shepherd',
    color: 'golden and white',
    speak: function () {
        alert("Woof! Woof!");
    },
    offspring: [
        {
            name: 'Lasso',
            breed: 'Australian Shepherd',
            color: 'golden and white',
            speak: function () {
                alert("Bow!")
            }
        },
        {
            name: 'Lasse',
            breed: 'Australian Shepherd',
            color: 'golden and white',
            speak: function () {
                alert("Wow!")
            }
        }
    ],
}
// dog.speak();
// for (const pup of dog.offspring) {
//     pup.speak();
// }

const Dog = function (name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.speak = function () {
        alert("Little Jimmy fell in the well!");
    }
}

const dog1 = new Dog("Balto", "Wolf", "Gray and White");
dog1.speak();
console.log(dog1);
const dog2 = new Dog();
console.log(dog2);

class DogClass {
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }

    name;
    breed;
    color;

    speak() {
        alert(`My name is ${this.name}`)
    }
}

const dog3 = new DogClass('Odie', 'Cartoon', 'Yellow');
dog3.speak();
console.log(dog3);
const dog4 = new DogClass();