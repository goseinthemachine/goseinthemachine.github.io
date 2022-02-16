class Car {
    make;
    model;
    year;
    color;
    style;
    msrp;
    image;
    condition;
    constructor(make, model, year, color, condition) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.condition = condition;
    }

    initialize() {
        //If the car has an image render the car image
        if (this.image) {
            this.render();
        } else {
            this.fetchImage().then((result) => {
                if (!result.value && result.value.length <= 0) throw new Error("Could not find car")
                this.image = result.value[0].thumbnailUrl;
                this.render();
            });
        }
    }

    render() {
        const container = document.getElementById('container');
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