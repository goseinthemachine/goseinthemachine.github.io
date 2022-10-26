

function getUserInfo() {
    // Alert the user's birthday

    // Ask for the user's first name
    const firstName = prompt("Please enter your first name.");
    if (firstName) {
        // Ask for the user's last name
        const lastName = prompt("Please enter your last name.");
        // Log the user's first name to the console
        console.log(firstName);
        // Alert the user's last name
        alert(lastName);

        // Ask for the user's birthday
        const dob = prompt("Please enter your birthday");
        const regex = new RegExp(/^\d\d\/\d\d\/\d\d\d\d$/)
        if (regex.test(dob)) {
            const convertedDate = new Date(dob);
            console.log(convertedDate);
            // Ask the user to confirm their birthday input
            const confirmed = confirm(`Is this your birthday ${dob}`);

            if (confirmed === true) {
                alert(dob)
            } else {
                alert("Try again!");
            }
        } else {
            alert("Insert valid date");
        }
    } else {
        alert("You didn't enter anything!")
    }



}




