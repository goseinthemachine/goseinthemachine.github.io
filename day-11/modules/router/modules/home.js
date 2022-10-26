import { RoutedComponent } from "./component.js";

export class HomeComponent extends RoutedComponent {
    constructor() {
        super();
    }

    render() {
        this.outlet.innerHTML = `
        <h1>Home Page</h1>
        <p>This is a simple routed home page</p>
    `;
    }
}