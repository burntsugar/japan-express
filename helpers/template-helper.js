
import {UtilsCommonRach} from '../utils/utils-common-rach.js';

const templateHelper = (() => {
  const tagNames = {
    HEAD_TITLE: 'head-title',
    BODY_CONTENT: 'content',
    FOOTER_COPYRIGHT_YEAR: 'footer-copyright-year',
    SEARCH_FORM_ACTION_ENDPOINT: 'search-form-action-endpoint',
  };

  const SEARCH_ENDPOINT = '/search';

  const makeTemplateFragment = (headTitle = 'TEMPLATE TITLE',
    content = 'CONTENT') => {
    const tHeadTitle = headTitle;
    const tContent = content;
    const tFooterCopyrightYear = UtilsCommonRach.makeDate();
    const tSearchFormActionEndpoint = SEARCH_ENDPOINT;

    const data = {
      [tagNames.HEAD_TITLE]: tHeadTitle,
      [tagNames.BODY_CONTENT]: tContent,
      [tagNames.FOOTER_COPYRIGHT_YEAR]: tFooterCopyrightYear,
      [tagNames.SEARCH_FORM_ACTION_ENDPOINT]: tSearchFormActionEndpoint,
    };

    return data;
  };

  return {
    makeTemplateFragment: makeTemplateFragment,
  };
})();

export {templateHelper};
