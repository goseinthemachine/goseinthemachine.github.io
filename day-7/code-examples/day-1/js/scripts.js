// SCOPE

// const regex = new RegExp(); // This is global
// const arr = [];
// if (arr.length > 0) {
//     const value = "Array has a value";
//     console.log(value);
// } else {
//     const value = "Array has no value";
//     console.log(value);
// }
// console.log(value);

// function validateString(stringValue) { // Curly brackets create local scope
//     const regex2 = new RegExp(); // Scope of regex2 is contained within the curly brackets of the function
//     if (stringValue.length > 0) {
//         const regex3 = new RegExp(); //scope contained withing curly brackets of if
//         debugger;
//     } else {
//         const regex4 = new RegExp(); //scope contained withing curly brackets of else
//         debugger;
//     }
// }

// validateString("some value");
// validateString("");


//PROMISES

// function handlePromise(resolveFn, rejectFn) {
//     // rejectFn()
//     setTimeout(() => {
//         debugger;
//         resolveFn('foo')
//     }, 4000) // Does something after 4 seconds
// }

// function promiseResolved(value) {
//     debugger;

//     alert(value);
//     try {
//         throw new Error(value);
//     } catch (ex) {
//         throw ex;
//     }
//     return value + " resolved once";
// }
// function promiseResolved2(value) {
//     debugger;
//     console.log(value)
//     return value + " resolved twice";
// }
// function promiseResolved3(value) {
//     debugger;
//     try {
//         throw new Error(value);
//     } catch (ex) {
//         throw ex;
//     }
// }

// function promiseRejected(ex) {
//     console.log("An Error has occured here" + ex.message)
//     return ex.message;
// }

// const promise = new Promise(handlePromise);

// promise.then(promiseResolved)
//     .then(promiseResolved2)
//     .then(promiseResolved3)
//     .catch(promiseRejected)
//     .then(promiseResolved)
//     .catch(promiseRejected);

// // const asynchronousFunction = new Promise((resolveFn, rejectFn) => {
// //     setTimeout(() => {
// //         resolveFn('foo')
// //     }, 4000)
// // })

// // asynchronousFunction.then(promiseResolved);

// let count = 0;
// setInterval(() => {
//     console.log(count);
//     count++
// }, 1000)



const API_KEY = "GET A KEY FROM OMDB API";
const API_URL = "http://www.omdbapi.com/";
const searchTitle = "Mad";

const url = new URL(API_URL);
url.searchParams.set("apiKey", API_KEY);
url.searchParams.set("s", searchTitle);
url.searchParams.set("type", "series")
// Will create the following "http://www.omdbapi.com/?apiKey=[keyvalue]&t=How the Grinch"

fetch(url)
    .then((response) => {
        console.log(response)
        debugger;
        return response.json();
    })
    .then((data) => {
        console.log(JSON.stringify(data));
        debugger;
        const id = data.Search[0].imdbID
        const url2 = new URL(API_URL);
        url2.searchParams.set("apiKey", API_KEY);
        url2.searchParams.set("i", id);
        return fetch(url2);
    })
    .then((response) => {
        console.log(response);
        debugger;
        return response.json();
    })
    .then((data) => {
        console.log(data);
        debugger;
    })
    .catch((err) => {
        debugger;
        alert("Unable to connect to OMdb")
    })
console.log("This will run before promises are resolved.")

const order = {
    results: [
        { id: 1, price: 11.20, description: 'Crew Neck T-Shirt', alts: ['S', 'M', 'L', 'XL'], images: [] },
        { id: 2, price: 11.20, description: 'V Neck T-Shirt', alts: ['S', 'M', 'L', 'XL'], images: [] },
        { id: 3, price: 11.20, description: 'Polo T-Shirt', alts: ['S', 'M', 'L', 'XL'], images: [] },
    ],
    page: 0,
    pageSize: 10,
}
// debugger;
// console.log(order);
// const orderJSONString = JSON.stringify(order);
// console.log(orderJSONString)
// const parsedOrder = JSON.parse(orderJSONString);
// console.log(parsedOrder)



// const url = "https://cat-fact.herokuapp.com/facts/random";
// const apiUrl = new URL("https://cat-fact.herokuapp.com/facts/random");
// apiUrl.searchParams.set('animal_type', 'cat');
// apiUrl.searchParams.set('amount', 1);

// fetch(apiUrl)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         alert(data.text);
//     })

// function handleResponse(response) {
//     return response.json();
// }

// function alertFact(data) {
//     alert(data.text)
// }

// fetch(apiUrl)
//     .then(handleResponse)
//     .then(alertFact)
