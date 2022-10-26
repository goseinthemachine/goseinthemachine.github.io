function dailyChallenge() {
    const number1 = prompt("Enter a number");
    // false, '', null, undefined, 0 evalute to false
    // TAKEHOME: Edge case user did not input a number
    if (!isInputValid(number1)) {
        alert("Please enter a numeric value");
        dailyChallenge();
        return;
    }

    const number2 = prompt("Enter another number");

    // TAKE HOME: Edge case user did not input a number
    if (!isInputValid(number2)) {
        alert("Please enter a numeric value");
        dailyChallenge();
        return;
    }

    // Replaces above if statements
    // if ((!number1 || isNaN(number1)) ||
    //     (!number2 || isNaN(number2))) {
    //     alert("Please enter a numeric value");
    //     dailyChallenge();
    //     return;
    // }

    const convertedNumber1 = parseInt(number1);
    const convertedNumber2 = parseInt(number2);


    // ------------ TAKE HOME CHALLENGE ------------
    // Add an edge case to your daily challenge code
    // Check if the user input anything other than a number
    // If so, prompt the user again to input a number

    // TAKE HOME: Edge case numbers are equal
    if (convertedNumber1 === convertedNumber2) {
        alert("The numbers are the same");
    } else if (convertedNumber1 > convertedNumber2) {
        alert(`${number1} is greater than ${number2}`)
    } else {
        alert(`${number2} is greater than ${number1}`)
    }


}

function thisReturnsNothing() {
    return;
}

function thisReturnsSomething() {
    return "Something";
}

const toppings = pluralize(['Pepporoni', 'Cheese'], 'Topping');
console.log(toppings);

// Can not call before initialization
// Using function expression - Not hoisted
// const pluralize = function (arr, word) {
//     if (arr.length > 1 || arr.length <= 0) return `${word}s`;
//     return word;
// }

// Arrow functions - Are not hoisted 
// const pluralize = (arr, word) => {
//     if (arr.length > 1 || arr.length <= 0) return `${word}s`;
//     return word;
// }

// This syntax allows the browser hoist the function
// Is hoisted
function pluralize(arr, word) {
    if (arr.length > 1 || arr.length <= 0) return `${word}s`;
    return word;
}



function dailyChallengeRewrite() {
    debugger;
    const number1 = prompt("Enter a number");
    // false, '', null, undefined, 0 evalute to false
    // TAKEHOME: Edge case user did not input a number
    if (!number1 || isNaN(number1)) {
        alert("Please enter a numeric value");
        dailyChallenge();
        return;
    }

    const number2 = prompt("Enter another number");

    // TAKE HOME: Edge case user did not input a number
    if (!number2 || isNaN(number2)) {
        alert("Please enter a numeric value");
        dailyChallenge();
        return;
    }

    const convertedNumber1 = parseInt(number1);
    const convertedNumber2 = parseInt(number2);

    isGreaterThan(convertedNumber1, convertedNumber2);

    //Ignore commented code below
    // isGreaterThan(
    //     (num1, num2) => alert(`${num1} and ${num2} are equal`) ,
    //     (num1, num2) => alert(`${num1} is greater than ${num2}`) ,
    //     (num1, num2) => alert(`${num1} is less than ${num2}`),
    //     convertedNumber1,
    //     convertedNumber2
    // );
}

function isGreaterThan(num1, num2) {
    if (num1 === num2) {
        alert(`${num1} is equal to ${num2}`)
    }
    else if (num1 > num2) {
        alert(`${num1} is greater than ${num2}`)
    } else {
        alert(`${num1} is less than ${num2}`)
    }
}

//Ignore commented code below
// function isGreaterThan(equal, greaterThan, lessThan, num1 = 100, num2 = 200,) {
//     debugger;
//     if (num1 === num2) {
//         equal(num1, num2)
//     } else if (num1 > num2) {
//         greaterThan(num1, num2)
//     } else {
//         lessThan(num1, num2)
//     }
// }

const getMessage = () => {
    return prompt("Enter a message")
}

function printMessage(message) {
    debugger;
    alert(message);
    console.log(message);
}

function arrowFunctionAsParameter() {
    debugger;
    printMessage(getMessage());
}



// Commonly done on server side
// Done on client side but a lot frameworks kind of hide it
// This code doesn't do anything.
function handleRequest(success, error) {
    const request = getData();
    if (request.successful) {
        success(request.data)
    } else {
        error("Could not retrieve data");
    }
}



// Daily Challenge
function getUserInput() {
    const input = prompt("Enter a number.");

    if (isInputValid(input)) {
        oddOrEven(input);
    } else {
        alert("You did not enter a number");
    }

}

function isInputValid(text) {
    if (!text || isNaN(text)) {
        return false;
    } else {
        return true;
    }
}

function oddOrEven(number) {
    if (number % 2 === 0) {
        alert(`The ${number} is even!`)
    } else {
        alert(`The ${number} is odd!`)
    }
}

