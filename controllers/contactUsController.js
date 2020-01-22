
import {gmapsUrlHelper} from '../helpers/gmaps-url-helper.js';
/**
 * RMP
 */
const contactUsController = (() => {
  const templateTagNames = {
    gmapurl: 'gmapurl',
  };

  /**
     * @public
     * @return {object}
     */
  const makeTemplateFragment = () => {
    return gmapsUrlHelper.makeTemplateFragment(templateTagNames.gmapurl);
  };

  return {
    makeTemplateFragment: makeTemplateFragment,
  };
})();

export {contactUsController};
