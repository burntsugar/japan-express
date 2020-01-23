/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:07:59 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:07:59 
 */


import {UtilsCommonRach} from '../utils/utils-common-rach.js';
import {templateProps} from './template-props.js';
import {templateFieldHelper} from './template-field-helper.js';

const templateHelper = (() => {
  const makeTemplateFragment = (headerTitle, fields = {}) => {
    let data = makeCommonData(headerTitle);

    if (headerTitle == templateProps.PAGE_NAMES.CONTACTUS) {
      data = templateFieldHelper.makeTemplateFragment(templateProps.PAGE_NAMES.CONTACTUS, fields, data);
    }

    if (headerTitle == templateProps.PAGE_NAMES.CONTACTUSRESPONSE) {
      data = templateFieldHelper.makeTemplateFragment(templateProps.PAGE_NAMES.CONTACTUSRESPONSE, fields, data);
    }

    return data;
  };

  const makeCommonData = (pageName) => {
    const dataFrag = {
      [templateProps.tagHeaderNames.HEAD_TITLE]: pageName, [templateProps.tagHeaderNames.SEARCH_FORM_ACTION_ENDPOINT]: templateProps.endpoints.SEARCH_ENDPOINT, [templateProps.tagFooterNames.FOOTER_COPYRIGHT_YEAR]: UtilsCommonRach.makeDate(),
    };
    return dataFrag;
  };

  return {
    makeTemplateFragment: makeTemplateFragment,
  };
})();

export {templateHelper};
