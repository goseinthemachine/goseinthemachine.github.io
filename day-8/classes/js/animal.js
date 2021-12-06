// Inheritence using extend
class Animal {
    constructor(name, icon, groupName) {
        this.icon = icon;
        this.groupName = groupName;
        this.element = document.createElement("p");
        this.element.id = name;
        this.element.className = this.groupName
        this.element.innerHTML = this.icon
        document.body.appendChild(this.element);
    }
}

class Rhino extends Animal {
    constructor(name) {
        super(name, "🦏", "crash")
    }

    graze() {
        if (this.element) {

            const transformProperty = getSupportedPropertyName(transforms);

            if (transformProperty) {
                this.element.style[transformProperty] = `translate3d(${Math.random() * 1000}px, ${Math.random() * 800}px, 0px)`
            }
        }
    }
}
