// Classes
class Tiger {
    constructor(name) {
        this.icon = "🐅";
        this.element = document.createElement("p");
        this.element.id = name;
        this.element.className = "streak";
        this.element.innerHTML = this.icon
        document.body.appendChild(this.element);
    }

    prowl() {
        if (this.element) {

            const transformProperty = getSupportedPropertyName(transforms);

            if (transformProperty) {
                this.element.style[transformProperty] = `translate3d(${Math.random() * 1000}px, ${Math.random() * 800}px, 0px)`
            }
        }
    }
}
