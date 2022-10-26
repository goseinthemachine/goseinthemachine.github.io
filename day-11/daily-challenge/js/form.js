const form = document.querySelector("form");
const btn = document.querySelector("input[type=submit]");
const err = document.querySelector("#error");
const passValidationExpression = new RegExp(/^(?=.{6,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/);
const lowercaseExp = new RegExp(/[a-z]/);
const uppercaseExp = new RegExp(/[A-Z]/);
const numericalExp = new RegExp(/[0-9]/);
const lengthExp = new RegExp(/.{6,20}/);
// form.addEventListener('change', validateForm)
form.addEventListener('keyup', validateForm)
form.addEventListener('submit', validatePasswords)

function validateForm() {
    if (form[0].value && form[1].value && form[2].value) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function validatePasswords(event) {
    event.preventDefault();
    if (form[1].value !== form[2].value) {
        err.innerHTML = "Passwords do not match"
    } else {

        if (passValidationExpression.test(form[1].value) ||
            (lowercaseExp.test(form[1].value)) &&
            (uppercaseExp.test(form[1].value)) &&
            (numericalExp.test(form[1].value))
        ) {
            err.innerHTML = '';
            const userAccount = {
                username: form[0].value,
                password: form[1].value
            }
            sessionStorage.setItem('account', JSON.stringify(userAccount));
            sessionStorage.setItem('username', form[0].value);
            sessionStorage.setItem('password', form[1].value);
            console.log(`UserName ${form[0].value}`);
            console.log(`Password ${form[1].value}`);
        } else {
            err.innerHTML = "Password is not complex enough"
        }

    }
}
localStorage