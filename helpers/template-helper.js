
import {UtilsCommonRach} from '../utils/utils-common-rach.js';
import {templateProps} from './template-props.js';

const templateHelper = (() => {
  const makeTemplateFragment = (headerTitle = 'DEFAULT TITLE') => {
    const tHeadTitle = headerTitle;
    const tFooterCopyrightYear = UtilsCommonRach.makeDate();
    const tSearchFormActionEndpoint = templateProps.endpoints.SEARCH_ENDPOINT;

    const data = {
      [templateProps.tagHeaderNames.HEAD_TITLE]: tHeadTitle, [templateProps.tagHeaderNames.SEARCH_FORM_ACTION_ENDPOINT]: tSearchFormActionEndpoint, [templateProps.tagFooterNames.FOOTER_COPYRIGHT_YEAR]: tFooterCopyrightYear};

    return data;
  };

  return {
    makeTemplateFragment: makeTemplateFragment,
  };
})();

export {templateHelper};
