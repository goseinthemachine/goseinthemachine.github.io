// let webPage = {
//     html: {
//         head: {
//             link: {
//                 rel: "",
//                 href: "styles.css"
//             }
//         },
//         body: {
//             div: {
//                 innerHtml: "Hello World!"
//             },
//             scripts: [
//                 {
//                     src: 'js/dom.js'
//                 },
//                 {
//                     src: 'js/loops.js'
//                 }
//             ]
//         }
//     }
// }

// const paragraph = document.getElementsByTagName('p');
// console.log(paragraph);

// const header = document.getElementById("header");
// header.innerHTML = "Something Else";

// const elements = document.getElementsByClassName('paragraph');
// for (const element of elements) {
//     element.innerHTML += " Hey";
// }


// setTimeout(() => {
//     const paragraphs = document.getElementsByTagName('p');
//     console.log(paragraphs)
//     paragraphs[0].innerHTML = "Good Bye!"
// }, 3000)

const API_KEY = "GET YOUR OWN KEY";
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
        const list = document.createElement('ul');
        for (const searchResult of data.Search) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${searchResult.Title} - ${searchResult.Year}`
            list.appendChild(listItem);
        }

        content.appendChild(list);

        // console.log(JSON.stringify(data));
        // debugger;
        // const id = data.Search[0].imdbID
        // const url2 = new URL(API_URL);
        // url2.searchParams.set("apiKey", API_KEY);
        // url2.searchParams.set("i", id);
        // return fetch(url2);
    })



