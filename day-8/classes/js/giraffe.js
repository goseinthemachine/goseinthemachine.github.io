// Objects and Prototypes

const Giraffe = function (name) {
    this.icon = "🦒";
    this.name = name;
    this.element = undefined;
    this.populate = function () {
        if (!this.element) {
            this.element = document.createElement("p");
            this.element.id = name;
            this.element.className = "tower";
            this.element.innerHTML = this.icon
            document.body.appendChild(this.element);
        }
    };
    this.run = function () {
        if (this.element) {

            const transformProperty = getSupportedPropertyName(transforms);

            if (transformProperty) {
                this.element.style[transformProperty] = `translate3d(${Math.random() * 1000}px, ${Math.random() * 800}px, 0px)`
            }
        }
    }
    this.warnHeard = function () {
        const elements = document.getElementsByClassName("tower");

        if (elements) {
            const transformProperty = getSupportedPropertyName(transforms);
            if (transformProperty) {
                for (const element of elements) {
                    element.style[transformProperty] = `translate3d(${Math.random() * 1000}px, ${Math.random() * 800}px, 0px)`
                }
            }
        }
    }
}

// Giraffe.prototype.introduction = function () {
//     alert(`This giraffe's name is ${this.name}`);
// }