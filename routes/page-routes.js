/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:06:37 
 * @Last Modified by: rach@rach.colley
 * @Last Modified time: 2020-01-23 17:09:21
 */


import express from 'express';
const pageRoutes = express.Router();
import {pagesController} from '../controllers/pages-controller.js';
import {templateProps} from '../helpers/template-props.js';

pageRoutes.use((req, res, next)=> {
  console.log(req.hostname + req.baseUrl + req.url);
  next();
});

pageRoutes.get('/', (req, res) => {
  // Base view not implemented.
  res.status(404).send('Not Found - Not Implemented ~ rach@rach');
});

pageRoutes.get('/aboutus', (req, res) => {
  const data = pagesController.makeTemplateFragment(templateProps.PAGE_NAMES.ABOUTUS);
  res.render(templateProps.TEMPLATE_NAMES.ABOUTUS, data);
});

pageRoutes.get('/contactus', (req, res) => {
  const tourName = req.query.tour;
  const data = pagesController.makeTemplateFragment(templateProps.PAGE_NAMES.CONTACTUS, {tour: tourName});
  res.render(templateProps.TEMPLATE_NAMES.CONTACTUS, data);
});

pageRoutes.get('/contactus-response', (req, res) => {
  const qs = req.query;
  const data = pagesController.makeTemplateFragment(templateProps.PAGE_NAMES.CONTACTUSRESPONSE, qs);
  res.render(templateProps.TEMPLATE_NAMES.CONTACTUSRESPONSE, data);
});

pageRoutes.get('/planyourtrip', (req, res) => {
  const data = pagesController.makeTemplateFragment(templateProps.PAGE_NAMES.PLANYOURTRIP);
  res.render(templateProps.TEMPLATE_NAMES.PLANYOURTRIP, data);
});

pageRoutes.get('/sendtest', (req, res) => {
  res.redirect('/pages/gettest?name=rach&day=zero');
});

pageRoutes.get('/gettest', (req, res) => {
  res.status(200).send('Good work sport ~ rach@rach ' + JSON.stringify(req.query));
});

export {pageRoutes};


// import express from 'express';
// const templateRouter = express.Router();
// import {pagesController} from '../controllers/pages-controller.js';
// import {templateProps} from '../helpers/template-props.js';

// templateRouter.use((req, res, next)=> {
//   console.log(req.hostname + req.baseUrl + req.url);
//   next();
// });

// templateRouter.get('/', (req, res) => {
//   // Base view not implemented.
//   res.status(404).send('Not Found - Not Implemented ~ rach@rach');
// });

// templateRouter.get('/aboutus', (req, res) => {
//   const data = pagesController.makeTemplateFragment(templateProps.PAGE_NAMES.ABOUTUS);
//   res.render(templateProps.TEMPLATE_NAMES.ABOUTUS, data);
// });

// templateRouter.get('/contactus', (req, res) => {
//   const tourName = req.query.tour;
//   const data = pagesController.makeTemplateFragment(templateProps.PAGE_NAMES.CONTACTUS, {tour: tourName});
//   res.render(templateProps.TEMPLATE_NAMES.CONTACTUS, data);
// });

// templateRouter.get('/contactus-response', (req, res) => {
//   const qs = req.query;
//   const data = pagesController.makeTemplateFragment(templateProps.PAGE_NAMES.CONTACTUSRESPONSE, qs);
//   res.render(templateProps.TEMPLATE_NAMES.CONTACTUSRESPONSE, data);
// });

// templateRouter.get('/planyourtrip', (req, res) => {
//   const data = pagesController.makeTemplateFragment(templateProps.PAGE_NAMES.PLANYOURTRIP);
//   res.render(templateProps.TEMPLATE_NAMES.PLANYOURTRIP, data);
// });

// templateRouter.get('/sendtest', (req, res) => {
//   res.redirect('/pages/gettest?name=rach&day=zero');
// });

// templateRouter.get('/gettest', (req, res) => {
//   res.status(200).send('Good work sport ~ rach@rach ' + JSON.stringify(req.query));
// });

// export {templateRouter};
