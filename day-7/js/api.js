
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

}

// searchMoviesByTitle("Guardians");