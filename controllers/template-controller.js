
import {templateHelper} from '../helpers/template-helper.js';
import {gmapsUrlHelper} from '../helpers/gmaps-url-helper.js';
import {templateProps} from '../helpers/template-props.js';


const templateController = (() => {
  /**
     * @public
     * @return {object}
     */
  const makeTemplateFragment = (pageName = 'default') => {
    return templateHelper.makeTemplateFragment(pageName);
  };

  /**
     * @public
     * @return {object}
     */
  const makeTemplateFragmentForContactUs = () => {
    const content = gmapsUrlHelper.getUrl;
    const gmapsFrag = templateHelper.makeTemplateFragment('CONTACT US');
    gmapsFrag[templateProps.tagBodyNames.GMAPS_SCRIPT_SOURCE] = content;
    gmapsFrag[templateProps.tagBodyNames.CONTACT_FORM_ACTION_ENDPOINT]= templateProps.endpoints.CONTACTUS_RESPONSE_ENDPOINT;
    return gmapsFrag;
  };

  return {
    makeTemplateFragment: makeTemplateFragment,
    makeTemplateFragmentForContactUs: makeTemplateFragmentForContactUs,
  };
})();

export {templateController};
