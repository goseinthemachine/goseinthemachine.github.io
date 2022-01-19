// var thisIsAString = "some string goes here"; // Do not use var anymore
// var thisIsANumber = 10; // Do not use var anymore
// var thisIsABoolean = true; // Do not use var anymore


// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsAString);
// console.log(thisIsANumber);
// console.log(thisIsABoolean);

// let thisIsAString = "Hello there!";
// let thisIsANumber = 100;
// // let thisIsAString = "I'm recreating thisIsAString"

// thisIsAString = "I'm reassigning my value";
// thisIsANumber = 300;

// console.log(thisIsAString);
// console.log(thisIsANumber);

// // Constants are good for values that don't change, or often 
// const thisIsAConstantString = "I'm a constant!";
// const thisIsAConstantNumber = 1000;

// // const thisIsAConstantString = "This will break";

// // Reassigning a constant will break the code
// // thisIsAConstantString = "Another value";
// // thisIsAConstantNumber = 1000

// console.log(thisIsAConstantString);
// console.log(thisIsANumber);

// let template = '';

// // Logic that determines what to append to the template

// template = template + '<p>Here is a paragraph</p>'

// // more logic that determines what to append to the template

// template = template + '<ul><li>Task1</li></ul>';

// for (let counter = 0; counter < 10; counter++) {

// }

// let userPhoneNumber = "555-555-5555"; // camel case variable name
// let user_phone_number = "555-555-5555"; // snake case variable name
// let phon3$_Numb3r_1 = "555-555-5555";
// let $phoneNumber = ""
// let _phoneNumber = "" // Known as a private variable
// console.log(phon3$_Numb3r_1);


// // ... Much more code 




// userPhoneNumber




// let count = 0;
// count = count + 1; // Increment count by 1 by adding 1 to its current value and reassinging it
// console.log(`Using assignment operator ${count}`);
// count += 1; //equivalent to count = count + 1
// count++; // equivalent to count += 1; count = count + 1
// count--; //equivalent to count -= 1; count = count - 1
// console.log(`Using addition assignment ${count}`);
// count *= 5; // count = count + 5
// console.log(`Using multiplication assignment ${count}`);
// count /= 5;
// console.log(`Using division assignment ${count}`);

// console.log(10 % 3); // Get the remainder value only

// console.log(1 == true)// Is true
// console.log(1 === true)// Is false because the types are different
// // Use === not == when comparing

// // ! means opposite
// console.log(1 != 1) // Will be false
// console.log(1 != 2) // Will be true


// An Array
// let array = [1, "Hello World", 400n, Symbol("Array"), 5, 6, 7]; // Usually keep data in the array the same type
// console.log(array);

// let message = "id,phonenumber,firstname,lastname,address1,address2,state,zip";
// console.log(message);


// Reversing a string input
let input = "I want to reverse this string";
let arr = input.split(''); // '' is an empty string
let reversedArray = array.reverse();
let reversedString = reversedArray.join('');
console.log(reversedString.toUpperCase())
console.log(reversedString.toLowerCase())

// alert only shows a message
// alert("Show a message")
console.log('Print this');

// prompt Takes an input from the user
const userName = prompt("Enter your name");
alert(`Hello, ${userName}! How are you today?`);
const howUserIsDoing = confirm("Ok for true Cancel for false.");


// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
const userFirstName = prompt("Please enter your first name")
// Reverse your user’s name
// Convert to an array
const nameArray = userFirstName.split('');
// reverse the array
const reversedArray = nameArray.reverse();
// Join array
const reversedUserName = reversedArray.join('');
// alert the reversed string
alert(reversedUserName);

// Challenge 2
// Prompt for a number value (provide a default of 10)
const num1 = prompt("Enter a number", 10); // second value 10 adds a default for the input
// Prompt for a second number value (provide a default of 10)
const num2 = prompt("Enter another number", 10);
// Convert the prompted values into integers using parseInt()
const addedValues = parseInt(num1) + parseInt(num2);
// Add the numbers together and alert the user with the result
alert(addedValues);

