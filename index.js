import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
import mustache from 'mustache-express';

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/templates');

const PORT = process.env.PORT || 3000;

import{UtilsCommonRach} from './utils/utils-common-rach.js'
import{GoogleMapController} from './controllers/gmapController.js';

/**
 * route
 */
app.get('/', (req,res) => {
    console.log('/');
})

/**
 * route
 * TODO: Template controller
 */
app.get('/contactus', (req, res) => {
    console.log('/contactus');

    const gmapurl = GoogleMapController.makeTemplateFragment('gmapurl');
    res.render('contactus', gmapurl);  
});

/**
 * route
 * TODO: Template controller 
 */
app.get('/templatetest', (req, res) => {
    console.log('/templatetest');

    const headTitle = "TEST TEMPLATE TITLE";
    const content = "Some groovy content";
    const footerCopyrightYear = UtilsCommonRach.makeDate();
    const searchFormActionEndpoint = '/search';

    const data = {
        "head-title": headTitle,
        "content": content,
        "footer-copyright-year": footerCopyrightYear,
        "search-form-action-endpoint": searchFormActionEndpoint,
        };

    res.render('template', data);  
});

/**
 * listen
 */
app.listen(3000, () => {
    console.log(`app listening on port ${PORT}!`);
});