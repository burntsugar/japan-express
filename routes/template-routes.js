import express from 'express';
const templateRouter = express.Router();

import {templateController} from '../controllers/template-controller.js';

templateRouter.get('/', (req, res) => {
  console.log('/');
  const data = templateController.makeTemplateFragment('ABOUT US');
  res.render('about', data);
});

templateRouter.get('/contactus', (req, res) => {
  console.log('/contactus');
  const data = templateController.makeTemplateFragmentForContactUs();
  res.render('contactus', data);
});

export {templateRouter};

