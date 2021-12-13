export class Router {
    constructor() {
        this.routes = [];
    }

    get(uri, callback) {
        if (!(uri && callback)) throw new Error(`uri and callback must have a value`);
        if (this.uriExists(uri)) throw new Error(`The uri ${uri} is already defined.`);
        const route = new Route(uri, callback);
        this.routes.push(route);
    }

    uriExists(uri) {
        return this.routes.map(route => {
            route.uri
        }).indexOf(uri) >= 0
    }

    init() {
        const links = document.getElementsByClassName("navbar-link");
        for (const link of links) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const uri = link.dataset.uri;
                navigate(uri);
            })
        }
        function navigate(uri) {
            history.pushState({}, uri, window.location.origin + uri);
            const popStateEvent = new PopStateEvent('popstate', {});
            dispatchEvent(popStateEvent);
        }

        window.onpopstate = (event) => {
            this.routes.some(route => {
                let regEx = new RegExp(`^${route.uri}$`);
                let path = window.location.pathname;

                if (path.match(regEx)) {
                    let req = new Request(path)
                    return route.callback.call(this, req);
                }
            })
        };

    }
}

class Route {
    constructor(uri, callback) {
        this.uri = uri;
        this.callback = callback;
    }
}

export class Request {
    constructor(path) {
        this.path = path;
    }
}

