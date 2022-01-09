/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:09:56 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-01-09 13:44:08
 */



import express from 'express';
import bodyParser from 'body-parser';

import mustache from 'mustache-express';

import {envKeys} from './keys.js';
import {pagesController} from './controllers/pages-controller.js';
import {pageRoutes} from './routes/page-routes.js';

import path from 'path';
const __dirname = path.resolve();

const app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.engine('mustache', mustache(__dirname + '/views' + '/partials', '.mst'));

app.use('/pages', pageRoutes);

app.use((req, res, next)=> {
  console.log(req.hostname + req.baseUrl + req.url);
  next();
});

app.get('/', (req, res) => {
  const data = pagesController.makeTemplateFragment('HOME');
  res.render('home', data);
});

app.listen(3000, () => {
  console.log(`app listening on port ${envKeys.PORT}!`);
});

export {app};


