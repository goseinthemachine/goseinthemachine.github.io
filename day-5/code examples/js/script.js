let runOnString = '';
function getUserInfo() {
    // Alert the user's birthday

    // Ask for the user's first name
    const firstName = prompt("Please enter your first name.");
    const preparedFirstName = firstName ? firstName : "John";

    // Ask for the user's last name
    const lastName = prompt("Please enter your last name.");
    const preparedLastName = lastName ? lastName : "Doe";
    // Log the user's first name to the console
    console.log(preparedFirstName);
    // Alert the user's last name
    alert(preparedLastName);

    // // Ask for the user's birthday
    // const dob = prompt("Please enter your birthday");
    // const regex = new RegExp(/^\d\d\/\d\d\/\d\d\d\d$/)
    // if (regex.test(dob)) {
    //     const convertedDate = new Date(dob);
    //     console.log(convertedDate);
    //     // Ask the user to confirm their birthday input
    //     const confirmed = confirm(`Is this your birthday ${dob}`);

    //     // if (confirmed === true) {
    //     //     alert(dob)
    //     // } else {
    //     //     alert("Try again!");
    //     // }
    //     // replaced by ternary operator
    //     confirmed ? alert(dob) : alert("Try again!")
    // } else {
    //     alert("Insert valid date");
    // }

}

function confusingFunction() {

    const confirmed = confirm("Enter user Information");

    confirmed ? getUserInfo() : confusingFunction();
}

function pizzaToppings() {
    const stringValue = prompt("Enter a pizza topping");
    debugger;

    runOnString += runOnString.length > 0 ? ` and ${stringValue}` : stringValue

    if (runOnString.length > 0) {
        runOnString += ` and ${stringValue}`
    } else {
        runOnString += stringValue;
    }

    console.log(runOnString);

    const confirmed = confirm("Add more toppings");

    confirmed ? pizzaToppings() : null;
}

function clearToppings() {
    runOnString = '';
}

function dailyChallenge() {
    const number1 = prompt("Enter a number");
    const number2 = prompt("Enter another number");
    const convertedNumber1 = parseInt(number1);
    const convertedNumber2 = parseInt(number2);

    // const input = prompt("Enter two number separated by a ,")
    // const inputArr = input.split(',')
    // const number1 = parseInt(inputArr[0])
    // const number2 = parseInt(inputArr[1])
    // console.log(inputArr);

    if (convertedNumber1 > convertedNumber2) {
        alert(`${number1} is greater than ${number2}`)
    } else {
        alert(`${number2} is greater than ${number1}`)
    }

    // convertedNumber1 > convertedNumber2 ? alert(`${number1} is greater than ${number2}`) : alert(`${number2} is greater than ${number1}`)

    // This is an example do not recommend it.
    // alert(`${convertedNumber1 > convertedNumber2 ? convertedNumber1 : convertedNumber2} is greater`)
}


// Functions
function pluralize(arr, word) {
    return arr.length === 1 ? word : `${word}s`
}

function getListOfIngredients() {
    const input = prompt("Enter a list of ingredients separated by a ,");
    const ingredientArr = input.split(',');
    debugger;

    alert(`You entered ${ingredientArr.length} ${pluralize(ingredientArr, 'ingredient')}`)
}

function isGreaterThan(success, failure, num1 = 100, num2 = 200,) {
    if (num1 > num2) {
        success(num1, num2)
    } else {
        failure(num1, num2)
    }
}

function num1IsGreater(num1, num2) {
    alert(`${num1} is greater than ${num2}`)
}

function num2IsGreater(num1, num2) {
    alert(`${num2} is greater than ${num1}`)
}

function parameterFunctions() {
    isGreaterThan(num1IsGreater, num2IsGreater, 42, 35);
}

function one() {
    return 1;
}

function passByValue(stringValue) {
    stringValue += " Added to end of string";
    return stringValue;
}





