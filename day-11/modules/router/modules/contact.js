import { RoutedComponent } from "./component.js";

export class ContactComponent extends RoutedComponent {
    constructor() {
        super();
    }

    render() {
        this.outlet.innerHTML = `
        <h1>Contact</h1>
        <p>This is a simple routed contact page</p>
    `;
    }
}