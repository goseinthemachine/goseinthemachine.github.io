class Car {
    make;
    model;
    year;
    color;
    style;
    msrp;
    image;
    constructor(args) {
        Object.keys(this).map(key => {
            this[key] = args[key] || '';
        })
    }

    initialize() {
        this.fetchImage().then((results) => {
            if (!results?.value && results.value.length <= 0) throw new Error("Could not retrieve Image")
            const container = document.querySelector(".container");
            const div = document.createElement("div");
            div.classList.add("car");
            const header = document.createElement("h2");
            header.innerHTML = `${this.make} - ${this.model} - ${this.year}`;
            div.appendChild(header);
            const imgNode = document.createElement("img");
            imgNode.src = results?.value[0]?.thumbnailUrl;
            div.appendChild(imgNode);
            container.appendChild(div);
        })
    }

    fetchImage() {
        const search = `${this.year}+${this.make}+${this.model}+${this.color}`
        const url = new URL(BING_API_URL);
        url.searchParams.set('q', search);
        return fetch(url, {
            headers: {
                "Ocp-Apim-Subscription-Key": BING_API_KEY
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
            return data;
        })
            .catch(err => {
                console.log(err)
            });
    }
}

const car1 = new Car({ make: "Subaru", model: "Forester", year: 2020, color: "Black", style: "SUV" });
const car2 = new Car({ make: "Tesla", model: "M", year: 2020, color: "Black" });
const car3 = new Car({ make: "VW", model: "Beetle", year: 1978, color: "White", style: "Coupe" });
car1.initialize();
car2.initialize();
car3.initialize();