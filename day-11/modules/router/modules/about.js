import { RoutedComponent } from "./component.js";

export class AboutComponent extends RoutedComponent {
    constructor() {
        super();
    }

    render() {
        this.outlet.innerHTML = `
        <h1>About Page</h1>
        <p>This is a simple routed about page</p>
    `;
    }
}