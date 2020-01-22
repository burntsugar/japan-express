import express from 'express';
const templateRouter = express.Router();
import {templateController} from '../controllers/template-controller.js';

templateRouter.get('/', (req, res) => {
  console.log('/templatetest');

  const data = templateController.makeTemplateFragment();
  res.render('template', data);
});

export {templateRouter};
