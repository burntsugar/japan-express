/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:07:04 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:07:04 
 */

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
