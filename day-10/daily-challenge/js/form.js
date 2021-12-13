const form = document.querySelector("form");
const btn = document.querySelector("input[type=submit]");
const err = document.querySelector("#error");

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
    }
}
