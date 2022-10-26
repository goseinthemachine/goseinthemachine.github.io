function reverseName() {
    // alert("This is ran as soon as the button calls the reverseName function")

    const userName = prompt("Enter your first name");
    const nameArray = userName.split("");

    const reversedArray = nameArray.reverse();
    alert(reversedArray.join(""));

    //In one line of code
    alert(prompt("Enter your first name").split("").reverse().join(""))
}

function addNumbers() {
    const num1 = prompt("Enter a number", 100)
    const num2 = prompt("Enter another number", 200)
    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);
    alert(parsedNum1 + parsedNum2);
}

function createRandomNumber() {
    const randomNumber = Math.random() * 100;
    alert(Math.round(randomNumber));
}

function rollDice() {
    const die1 = Math.random() * 100;
    const die2 = Math.random() * 100;
    const die1Result = Math.floor(die1) % 6 + 1;
    const die2Result = Math.floor(die2) % 6 + 1;
    alert(`Die1: ${die1Result}, Die2: ${die2Result}`);
}

function tellMeTheTime() {
    alert(Date()); //Thu Jan 20 2022 19:09:45 GMT-0800 (Pacific Standard Time)
    alert(new Date());//Thu Jan 20 2022 19:09:45 GMT-0800 (Pacific Standard Time)
}

function enterTheDate() {
    const enteredDate = prompt("Enter the current day");
    const parsedDate = Date.parse(enteredDate);
    const actualDate = new Date(parsedDate);
    alert(actualDate.toLocaleDateString('es-SP',));
}

function fizzBuzz() {
    const num1 = prompt("Enter a number", "3");
    debugger;
    const parsedNum1 = parseInt(num1);
    
    if (typeof parsedNum1 === "number" && !isNaN(parsedNum1))
    {
        if (parsedNum1 % 2 === 0 && parsedNum1 % 5 === 0)
        {
            alert("FizzBuzz!")
        }
        else if (parsedNum1 % 2 === 0)
        {
            alert("Fizz!")
        }
        else if (parsedNum1 % 5 === 0)
        {
            alert("Buzz!")
        }
        else
        {
            alert(parsedNum1)
        }
    } 
    else
    {
        alert("You did not enter a number")    
    }

    // if (parsedNum1 % 2 === 0 && parsedNum1 % 5 === 0)
    // {
    //     alert("FizzBuzz!")
    // }
    // if (parsedNum1 % 2 === 0)
    // {
    //     alert("Fizz!")
    // }
    // if (parsedNum1 % 5 === 0) 
    // {
    //     alert("Buzz!")
    // }

}

function logicalOperators() {
    // AND &&
    const andVal1 = true && true // would be true
    const andVal2 = true && false // would be false
    const andVal3 = false && true // would be false
    const andVal4 = false && false // would be false

    // OR ||
    const orVal1 = true || true // would be true
    const orVal2 = true || false // would be true
    const orVal3 = false || true // would be true
    const orVal4 = false || false // would be false

    // NOT !

    const notVal1 = !true  // would be false
    const notVal2 = !false // would be true
}

function guessingGame() {
    const numToGuess = Math.floor(Math.random() * 100) % 10 + 1;
    let guess = prompt("Guess a number between 1 and 10");
    let parsedGuess = parseInt(guess);
    let clue = '';
    if (typeof parsedGuess === "number" &&
        !isNaN(parsedGuess))
    {
        if (parsedGuess === numToGuess)
        {
            alert("You Win!")
        } 
        else 
        {   
            if (parsedGuess > numToGuess) {
                clue = "Too high"
            } else {
                clue = "Too Low"
            }
            guess = prompt(`${clue} Guess a number between 1 and 10`);
            parsedGuess = parseInt(guess);
            if (parsedGuess === numToGuess)
            {
                alert("You Win!")
            }
            else
            {
                if (parsedGuess > numToGuess) {
                    clue = "Too high"
                } else {
                    clue = "Too Low"
                }
                guess = prompt(`${clue}! Guess a number between 1 and 10"`);
                parsedGuess = parseInt(guess);
                if (parsedGuess === numToGuess) {
                    alert("You Win!")
                }
                else {
                    if (parsedGuess > numToGuess) {
                        clue = "Too high"
                    } else {
                        clue = "Too Low"
                    }
                    guess = prompt(`${clue}! Guess a number between 1 and 10"`);
                    parsedGuess = parseInt(guess);
                    if (parsedGuess === numToGuess) {
                        alert("You Win!")
                    }
                    else {
                        alert("You loose!")
                    }
                }
            }
        }
        
    }
}

function switchStatements() {
    const num1 = prompt("Please enter a number between 1 and 10");
    // switch (num1)
    // {
    //     case "1":
    //         alert(1);
    //         break;
    //     case "2":
    //         alert(2);
    //         break;
    //     case "3":
    //         alert(3);
    //         break;
    //     case "4":
    //         alert(4);
    //         break;
    //     case "5":
    //         alert(5);
    //         break;
    //     case "6":
    //         alert(6);
    //         break;
    //     case "7":
    //         alert(7);
    //         break;
    //     case "8":
    //         alert(8);
    //         break;
    //     case "9":
    //         alert(9);
    //         break;
    //     case "10":
    //         alert(10);
    //         break;
    //     default:
    //         alert("You didn't enter a number between 1 and 10")
    // }

    switch (num1) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
            alert(parseInt(num1));
            break;
        default:
            alert("You didn't enter a number between 1 and 10");
            break;
    }
}

// alert("This is ran as soon as the browser loads the javascript");