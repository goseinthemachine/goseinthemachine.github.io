class Car {
    make;
    model;
    year;
    color;
    style;
    msrp;
    image;
    condition;
    constructor(args) {
        Object.keys(this).map(key => {
            this[key] = args[key] || '';
        })
    }

    initialize() {

        if (this.image) {
            this.render();
        } else {
            const car = this;
            this.fetchImage().then((results) => {
                if (!results?.value && results.value.length <= 0) throw new Error("Could not retrieve Image")
                car.image = results?.value[0]?.thumbnailUrl;
                car.render();
            })
        }

    }

    static createCarFromForm(form) {
        return new Car({
            make: form[0].value,
            model: form[1].value,
            year: form[2].valueAsNumber,
            color: form[3].value,
            condition: document.querySelector('input[name="condition"]:checked').value
        });
    }

    render() {
        const container = document.querySelector(".container");
        const div = document.createElement("div");
        div.classList.add("car");
        const header = document.createElement("h2");
        header.innerHTML = `${this.make} - ${this.model} - ${this.year} - ${this.condition}`;
        div.appendChild(header);
        const imgNode = document.createElement("img");
        imgNode.src = this.image;
        div.appendChild(imgNode);
        container.appendChild(div);
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
            return data;
        })
            .catch(err => {
                console.log(err)
            });
    }
}

