
import {templateProps} from './template-props.js';
import {gmapsUrlHelper} from '../helpers/gmaps-url-helper.js';

const templateFieldHelper = (() => {
  const makeTemplateFragment = (pageName, fields, dataFrag) => {
    switch (pageName) {
    case templateProps.PAGE_NAMES.CONTACTUSRESPONSE:
      return makeContactResponseFields(fields, dataFrag);
    case templateProps.PAGE_NAMES.CONTACTUS:
      return makeContactUsFields(fields, dataFrag);
    }
  };

  const makeContactUsFields = (fields, dataFrag) => {
    const url = gmapsUrlHelper.getUrl;
    dataFrag[templateProps.CONTACT_US_FIELDS.GMAPS_SCRIPT_SOURCE] = url;
    dataFrag[templateProps.CONTACT_US_FIELDS.CONTACT_FORM_ACTION_ENDPOINT]= templateProps.endpoints.CONTACTUS_RESPONSE_ENDPOINT;
    dataFrag[templateProps.CONTACT_US_FIELDS.CONTACTUS_HIDDEN_TOUR] = fields.tour;
    return dataFrag;
  };

  const makeContactResponseFields = (fields, dataFrag) => {
    dataFrag[templateProps.contactResponseFields.FNAME] = fields.fname;
    dataFrag[templateProps.contactResponseFields.LNAME] = fields.lname;
    dataFrag[templateProps.contactResponseFields.EMAIL] = fields.email;
    dataFrag[templateProps.contactResponseFields.PHONE] = fields.phone;
    dataFrag[templateProps.contactResponseFields.PACKAGE_SELECT] = fields.packageselect;
    dataFrag[templateProps.contactResponseFields.QUESTION] = fields.question;
    return dataFrag;
  };

  return {
    makeTemplateFragment: makeTemplateFragment,
  };
})();

export {templateFieldHelper};
