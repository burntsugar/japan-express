
import {templateHelper} from '../helpers/template-helper.js';

const pagesController = (() => {
  /**
   *
   * @param {string} pageName
   * @param {object} fields
   * @return {object}
   */
  const makeTemplateFragment = (pageName, fields = {}) => {
    return templateHelper.makeTemplateFragment(pageName, fields);
  };

  return {
    makeTemplateFragment: makeTemplateFragment,
  };
})();

export {pagesController};
