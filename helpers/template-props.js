/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:08:10 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:08:10 
 */


const templateProps = (() => {
  const tagHeaderNames = {
    HEAD_TITLE: 'head-title',
    SEARCH_FORM_ACTION_ENDPOINT: 'search-form-action-endpoint',
  };

  const CONTACT_US_FIELDS = {
    GMAPS_SCRIPT_SOURCE: 'gmapurl',
    CONTACTUS_HIDDEN_TOUR: 'tour',
    CONTACT_FORM_ACTION_ENDPOINT: 'contact-form-action-endpoint',
  };

  const contactResponseFields = {
    FNAME: 'fname',
    LNAME: 'lname',
    EMAIL: 'email',
    PHONE: 'phone',
    PACKAGE_SELECT: 'packageselect',
    QUESTION: 'question',
  };

  const tagFooterNames = {
    FOOTER_COPYRIGHT_YEAR: 'footer-copyright-year',
  };

  const endpoints = {
    CONTACTUS_RESPONSE_ENDPOINT: '/pages/contactus-response',
    SEARCH_ENDPOINT: '/not-implemented',
  };

  const PAGE_NAMES = {
    HOME: 'Home',
    CONTACTUS: 'Contact us',
    CONTACTUSRESPONSE: 'Contact us response',
    ABOUTUS: 'About us',
    PLANYOURTRIP: 'Plan your trip',
  };

  const TEMPLATE_NAMES = {
    HOME: 'home',
    CONTACTUS: 'contactus',
    CONTACTUSRESPONSE: 'contactus-response',
    ABOUTUS: 'about',
    PLANYOURTRIP: 'planyourtrip',
  };

  return {
    tagHeaderNames: tagHeaderNames,
    tagFooterNames: tagFooterNames,
    endpoints: endpoints,
    CONTACT_US_FIELDS: CONTACT_US_FIELDS,
    contactResponseFields: contactResponseFields,
    PAGE_NAMES: PAGE_NAMES,
    TEMPLATE_NAMES: TEMPLATE_NAMES,
  };
})();

export {templateProps};
