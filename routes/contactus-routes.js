import express from 'express';
const constactUsRouter = express.Router();
import{contactUsController} from '../controllers/contactUsController.js';

constactUsRouter.get('/', (req, res) => {
  console.log('/contactus');

  const data = contactUsController.makeTemplateFragment();
  res.render('contactus', data);  
});

export{constactUsRouter};
