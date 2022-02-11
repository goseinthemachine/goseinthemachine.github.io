const API_KEY = "Get Your own key";
const API_URL = "http://www.omdbapi.com/";

function searchMoviesByTitle(form) {
    const searchTerm = form[0].value;
    const url = new URL(API_URL);
    url.searchParams.set("apiKey", API_KEY);
    url.searchParams.set("s", searchTerm)
    fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error("Could not reach API");
            return response.json();
        })
        .then((result) => {
            updateMovieTable(result);
        })
        .catch((err) => {
            alert(`Could not access API: ${err.message}`);
        });
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
    </tbody>
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

const form = document.getElementById('search-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    searchMoviesByTitle(event.target);
})

const square = document.getElementById('square');

square.addEventListener('mouseenter', (event) => {
    event.currentTarget.style.background = 'red';
})

square.addEventListener('mouseleave', (event) => {
    event.currentTarget.style.background = 'white';

})

square.addEventListener('click', (event) => {
    console.log("Square was clicked")
})