class Player {
    x = 0;
    y = 0;
    keyPress = []
    constructor() {
        document.addEventListener('keydown', (event) => {
            console.log(this.keyPress)
            if (this.keyPress.indexOf(event.key) < 0) {
                this.keyPress.push(event.key);
            }
        })
        document.addEventListener('keyup', (event) => {
            const index = this.keyPress.indexOf(event.key);
            if (index >= 0) {
                this.keyPress.splice(index, 1);
            }
        })

        const div = document.createElement("div")
        this.entity = div;
        this.entity.style = `position: relative; width: 100px; height:100px; background-color: red;`;
        document.body.appendChild(this.entity);

    }

    render() {
        document.body.removeChild(this.entity);
        this.entity.style.left = `${this.x}px`
        this.entity.style.top = `${this.y}px`
        document.body.appendChild(this.entity);
    }

    move() {
        if (this.keyPress.indexOf('ArrowRight') >= 0 || this.keyPress.indexOf('d') >= 0) {
            this.moveRight();
        } else if (this.keyPress.indexOf('ArrowLeft') >= 0 || this.keyPress.indexOf('a') >= 0) {
            this.moveLeft();
        }

        if (this.keyPress.indexOf('ArrowUp') >= 0 || this.keyPress.indexOf('w') >= 0) {
            this.moveUp();
        } else if (this.keyPress.indexOf('ArrowDown') >= 0 || this.keyPress.indexOf('s') >= 0) {
            this.moveDown();
        }
    }


    moveRight() {
        this.x += 10
    }

    moveLeft() {
        this.x -= 10
    }

    moveDown() {
        this.y += 10
    }

    moveUp() {
        this.y -= 10
    }

    jump() {
        console.log("Jumping")
    }
}