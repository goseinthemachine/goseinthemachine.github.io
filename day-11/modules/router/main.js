import { Router, Request } from './modules/router.js';

const router = new Router();


router.get('/', function (req) {
    import('./modules/home.js').then((Module) => {
        const homeComponent = new Module.HomeComponent();
        homeComponent.render();
    })
})

router.get('/about', function (req) {
    import('./modules/about.js').then((Module) => {
        const aboutComponent = new Module.AboutComponent();
        aboutComponent.render();
    })
})

router.get('/contact', function (req) {
    import('./modules/contact.js').then((Module) => {
        const contactComponent = new Module.ContactComponent();
        contactComponent.render();
    })
})

router.init();
