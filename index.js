import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
import mustache from 'mustache-express';

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

import {envKeys} from './keys.js';

// contactus route
import {contactUsRouter} from './routes/contactus-routes.js';
app.use('/contactus', contactUsRouter);

// templatetest route
import {templateRouter} from './routes/template-routes.js';
app.use('/templatetest', templateRouter);

/**
 * Default route
 */
app.get('/', (req, res) => {
  console.log('/');
});

/**
 * listen
 */
app.listen(3000, () => {
  console.log(`app listening on port ${envKeys.PORT}!`);
});
