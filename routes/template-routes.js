import express from 'express';
const templateRouter = express.Router();

import {templateController} from '../controllers/template-controller.js';

templateRouter.use((req, res, next)=> {
  console.log(req.hostname + req.baseUrl + req.url);
  next();
});

templateRouter.get('/', (req, res) => {
  // Base view not implemented.
  res.status(404).send('Not Found - Not Implemented ~ rach@rach');
});

templateRouter.get('/aboutus', (req, res) => {
  const data = templateController.makeTemplateFragment('ABOUT US');
  res.render('about', data);
});

templateRouter.get('/contactus', (req, res) => {
  const data = templateController.makeTemplateFragmentForContactUs();
  res.render('contactus', data);
});

templateRouter.get('/contactus-response', (req, res) => {
  const data = templateController.makeTemplateFragmentForContactUs();
  res.render('contactus-response', data);
});

export {templateRouter};

