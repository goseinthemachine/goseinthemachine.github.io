
const API_KEY = getApiKey();
const API_URL = "http://www.omdbapi.com/";

const url = new URL(API_URL);
//Set Query/Search Parameters
url.searchParams.set("apiKey", API_KEY)
url.searchParams.set("i", "tt3896198")

fetch(url)
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(results => {
        document.getElementById("payload").innerHTML = JSON.stringify(results)
        updateMovieDetails(results)
        console.log(results)
    })
    .catch(err => {
        alert(`Could not access API: ${err.message}`)
    });

function getApiKey() {
    throw new Error("Update API_KEY Value");
}

function getMovieSearch(value) {
    console.log(value);
    const element = document.getElementById("movie-search");

    //attributes
    console.log(element.placeholder)
    console.log(element.id);
    console.log(element.value);
}

function searchMoviesByTitle(searchTerm) {
    const url = new URL(API_URL);
    //Set Query/Search Parameters
    url.searchParams.set("apiKey", API_KEY)
    url.searchParams.set("s", searchTerm)
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Could not reach API");
            return response.json()
        })
        .then(results => {
            document.getElementById("payload").innerHTML = JSON.stringify(results)
            updateMovieTable(results)
            console.log(results)
        })
        .catch(err => {
            alert(`Could not access API: ${err.message}`)
        });
}

function getMovieById(movieId) {
    const url = new URL(API_URL);
    //Set Query/Search Parameters
    url.searchParams.set("apiKey", API_KEY)
    url.searchParams.set("i", movieId)

    fetch(url)
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(results => {
            document.getElementById("payload").innerHTML = JSON.stringify(results)
            updateMovieDetails(results)
            console.log(results)
        })
        .catch(err => {
            alert(`Could not access API: ${err.message}`)
        });
}

function updateMovieDetails(movieInfo) {
    document.getElementById("movie-title").innerHTML = movieInfo.Title;
    document.getElementById("movie-image").src = movieInfo.Poster;
    document.getElementById("movie-synopsis").innerHTML = movieInfo.Plot;
}

function updateMovieTable(searchResults) {

    if (!searchResults.Search) throw new Error("No Search Results returned")

    const element = document.getElementById("movie-results");
    let innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Poster</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (const movie of searchResults.Search) {
        innerHTML += `
            <tr>
                <td>${movie.Title}</td>
                <td>${movie.Year}</td>
                <td>${movie.imdbID}</td>
                <td>${movie.Type}</td>
                <td><img src="${movie.Poster}" /></td>
            </tr>
        `;
    }

    innerHTML += `
    <tbody>
    <tfoot>
    <tr>
        <td colspan="4"></td>
        <td>Total Results: ${searchResults.totalResults}</td>
    </tr>
    </tfoot>
    </table>
    `;
    element.innerHTML = innerHTML;
    const table = document.createElement("table");
    table.id = "created-table";
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ['Title', 'Year', 'imdbID', 'Type', 'Poster']
    for (const header of headers) {
        console.log(header);
        const textNode = document.createTextNode(header);
        headerRow.appendChild(document.createElement("th").appendChild(textNode))
    }
    tableHeader.appendChild(headerRow)

    const body = document.createElement("tbody");
    for (const movie of searchResults.Search) {
        const row = document.createElement("tr");
        for (const property of headers) {
            console.log(movie[property])
            const textNode = document.createTextNode(movie[property]);
            const tableData = document.createElement("td");
            tableData.appendChild(textNode)
            row.appendChild(tableData);
        }
        body.appendChild(row);
    }
    const footer = document.createElement("tfoot");

    table.appendChild(tableHeader);
    table.appendChild(body);
    table.appendChild(footer);
    element.appendChild(table);



}

function clearResults() {
    const element = document.getElementById("movie-results");
    element.innerHTML = null;
}

const btn = document.createElement("button");
const clearEventsBtn = document.createElement("button");
btn.appendChild(document.createTextNode("Clear Result"))
clearEventsBtn.appendChild(document.createTextNode("Clear Button Events"))
document.body.appendChild(btn);
document.body.appendChild(clearEventsBtn);

btn.addEventListener("click", clearResults)
btn.addEventListener("mouseenter", function mouseEntering(event) {
    console.log(event);
    console.log(event.target);
    event.target.classList.add("warning");
    console.log("mouse entered clear results button")
})
btn.addEventListener("mouseleave", function mouseLeaving(event) {
    console.log("mouse exited clear results button")
    event.target.classList.remove("warning");
})
btn.addEventListener("mousemove", function mouseMoving(event) { console.log("mouse moving within button") })
clearEventsBtn.addEventListener("click", (event) => {
    console.log("Removing event listeners from Clear Result")
    btn.removeEventListener("click", clearResults); //Needs a declared or named function
    // btn.removeEventListener("mouseenter", mouseEntering); //Needs a declared or named function
    // btn.removeEventListener("mouseleave", mouseLeaving); //Needs a declared or named function
    // btn.removeEventListener("mousemove", mouseMoving); //Needs a declared or named function
})


searchMoviesByTitle("Guardians");