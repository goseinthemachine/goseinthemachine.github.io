const arrOfValues = [
    1, //0
    true, //1
    "Cameron", //2
    { name: "John Doe", profession: "Spy" } //3
];

// const stringValue = "Hello";
// Will throw error below
// stringValue += "Hello World!";

// console.log(arrOfValues[0]);

// console.log(arrOfValues[arrOfValues.length - 1]);

arrOfValues.push({ name: "James Bond", profession: "Spy" }); // Adds to the end of an array
// console.log(arrOfValues[arrOfValues.length - 1]);

// arrOfValues.pop() //remove the last value of the array
// arrOfValues.pop()
// console.log(arrOfValues[arrOfValues.length - 1]);

const nameIndex = arrOfValues.indexOf("Cameron");
// console.log(`Name indexed at ${nameIndex}`);

// Loops

// FOR Loops

// For a specific
// let count = 0;
// for (let index = 0; index < 10; index++) {
//     console.log(index);
//     count += index;
// }
// console.log(count);


for (let index = arrOfValues.length - 1; index >= 0; index--) {
    console.log(arrOfValues[index]);
}

// For Arrays [ ... ]
for (const element of arrOfValues) {
    console.log(element);
    console.log(typeof element);
}

const employee = {
    name: "Cameron Gose",
    profession: "Application Developer",
    employeeId: 1234,
    phone: 5555555555
}
// For objects { ... } 
for (const property in employee) {
    console.log(property);
}

console.log("Using arrOfValues.forEach")
// Similar to for loops
// Works like for...of loop 
arrOfValues.forEach((element) => {
    console.log(element);
})

// Objects 
// Storing like data together into one thing
const obj = {};
obj.name = "Jane Doe";
obj.profession = "Spy";
obj.phone = 5555555555;

const objWithProps = {
    name: "John Doe",  // Properties
    profession: "Spy", // Properties
    phone: 5555555555,  // Properties
}

arrOfValues.length // .length is a property of the Array object
console.log(objWithProps.name);

// Loops through and does something to each element in the array
const alteredArr = arrOfValues.map((element) => {
    switch (typeof element) {
        case "object":
            return JSON.stringify(element);
        default:
            return element.toString();
    }
})



alteredArr.forEach((element) => {
    try {
        console.log(JSON.parse(element))
        console.log(typeof JSON.parse(element));
    } catch (ex) {
        console.log(element);
    }

})

// While Loops

// let count = 0;
// while (count < 100) {
//     console.log(count);
//     count++; // count += 1; count = count + 1
// }

// Break and continue

function counter() {
    let count = 0;
    while (count < 100) {
        count++;
        if (count % 2 !== 0) {
            continue; // Tells loop to not process any further but to continue the loop
        }
        console.log(count);
        if (count > 50) {
            debugger;
            break; // Exit the loop completly
            // return count;
        }
        // count += 1; count = count + 1
    }
}

// const finalCount = counter();
// alert(finalCount);

// for (let increment = 1; increment <= 100; increment++) {
//     if (increment % 3 === 0 && increment % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (increment % 3 === 0) {
//         console.log("Fizz");
//     } else if (increment % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(increment);
//     }
// }

// let count = 1;
// while (count <= 100) {
//     count++
//     if (count % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (count % 3 === 0) {
//         console.log("Fizz");
//     } else if (count % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(count);
//     }
//     count++
// }


// Don't recommend for now.
for (let increment = 1; increment <= 100; increment++) {
    let fizz = '';
    let buzz = '';
    if (increment % 3 === 0) {
        fizz = 'Fizz';
    }
    if (increment % 5 === 0) {
        buzz = 'Buzz';
    }
    console.log(`${fizz + buzz || increment}`)
}