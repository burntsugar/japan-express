import express from 'express';
const contactUsRouter = express.Router();
import {contactUsController} from '../controllers/contactUsController.js';

contactUsRouter.get('/', (req, res) => {
  console.log('/contactus');

  const data = contactUsController.makeTemplateFragment();
  res.render('contactus', data);
});

export {contactUsRouter};
