
import {templateHelper} from '../helpers/template-helper.js';
const templateController = (() => {
  /**
     * @public
     * @return {object}
     */
  const makeTemplateFragment = () => {
    return templateHelper.makeTemplateFragment();
  };

  return {
    makeTemplateFragment: makeTemplateFragment,
  };
})();

export {templateController};
