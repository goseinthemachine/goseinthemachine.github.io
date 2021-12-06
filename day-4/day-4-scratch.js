const birthday = prompt("When is your birthday?")
const convertedBirthday = Date.parse(birthday)

if (birthday === "") {
    alert("Please enter a correct date")
} else if (isNaN(convertedBirthday)) {
    alert("Please enter a value")
} else {
    alert(convertedBirthday)
}

if (1 != true)
    alert("This is kinda true")
else if (1 !== true)
    alert("This shouldn't be true")
else
    alert("Nothing was true")

const rand = Math.random();
if (rand > .5) alert("Glass half full")
else alert("Glass half empty")


const birthday = prompt("Enter birthday")
const convertedDate = Date.parse(birthday)
if (convertedDate) {
    alert("Proper date entered")
} else {
    alert("Improper Date entered")
}

let userProfile = {
    userRole: 'employee',
    firstName: "Cameron",
    lastName: "Gose",
    department: "IT",
    permissionLevel: 3
}

if (userProfile.userRole === "manager" ||
    (userProfile.department === "IT" &&
        userProfile.permissionLevel >= 2)) {
    alert("You have access");
}

true && true === true
false && true === false
true && false === false
false && false === false

true || true === true
false || true === true
true || false === true
false || false === false

let accessGranted = userProfile.userRole === "manager" ? "yes" : "no"

let submittedForm = {
    firstName: "Cameron",
    lastName: "Gose",
    formType: "1099"
}

switch (submittedForm.formType) {
    case "1099":
        //Process 1099 form
        break
    case "W-2":
        // Process W-2
        break
    default:
        break
        alert(`Form type ${submittedForm.formType} not recognized`)
        break
}


let submittedForm = {
    firstName: "Cameron",
    lastName: "Gose",
    formType: "W-2",
    formSubmitted: Date,
    updatedAt: null
}
debugger
if (true) {
    break;
    console.log("Will not get here")
} else {

    console.log("Will not get here")
}

let parsedValue = parseInt(promptedValue)
