const API_KEY = "GET A KEY FROM OMDB API";
const API_URL = "http://www.omdbapi.com/";
const searchTitle = "Mad";

const url = new URL(API_URL);
url.searchParams.set("apiKey", API_KEY);
url.searchParams.set("s", searchTitle);
url.searchParams.set("type", "series")
// Will create the following "http://www.omdbapi.com/?apiKey=[keyvalue]&t=How the Grinch"

const response = await fetch(url);
const data = await response.json();
alert(data.Search[0].Title);
const id = data.Search[0].imdbID
const url2 = new URL(API_URL);
url2.searchParams.set("apiKey", API_KEY);
url2.searchParams.set("i", id);
const movieResponse = await fetch(url2);
const movieData = await movieResponse.json();

console.log(movieData);

console.log("this will run after all network calls have resolved")

// Replaced by above Async / Await code
// const fetchPromise = fetch(url);
// debugger;
// fetchPromise
//     .then((response) => {
//         console.log(response)
//         debugger;
//         return response.json();
//     })
//     .then((data) => {
//         console.log(JSON.stringify(data));
//         debugger;
//         const id = data.Search[0].imdbID
//         const url2 = new URL(API_URL);
//         url2.searchParams.set("apiKey", API_KEY);
//         url2.searchParams.set("i", id);
//         return fetch(url2);
//     })
//     .then((response) => {
//         console.log(response);
//         debugger;
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         debugger;
//     })
//     .catch((err) => {
//         debugger;
//         alert("Unable to connect to OMdb")
//     })


