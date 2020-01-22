import express from 'express';
import bodyParser from 'body-parser';

import mustache from 'mustache-express';

import {envKeys} from './keys.js';
import {templateController} from './controllers/template-controller.js';
import {templateRouter} from './routes/template-routes.js';

const app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.engine('mustache', mustache(__dirname + '/views' + '/partials', '.mst'));


// import express from 'express';
// import bodyParser from 'body-parser';
// const app = express();

// app.use(express.static(__dirname+'/public'));

// app.use(bodyParser.urlencoded({
//   extended: true,
// }));
// app.use(bodyParser.json());

// import mustache from 'mustache-express';

// app.set('view engine', 'mustache');
// app.set('views', __dirname + '/views');
// app.engine('mustache', mustache(__dirname + '/views' + '/partials', '.mst'));

// import {envKeys} from './keys.js';
// import {templateController} from './controllers/template-controller.js';
// import {templateRouter} from './routes/template-routes.js';


app.use('/pages', templateRouter);

app.use((req, res, next)=> {
  console.log(req.hostname + req.baseUrl + req.url);
  next();
});

app.get('/', (req, res) => {
  const data = templateController.makeTemplateFragment('HOME');
  res.render('home', data);
});

app.listen(3000, () => {
  console.log(`app listening on port ${envKeys.PORT}!`);
});

export {app};


