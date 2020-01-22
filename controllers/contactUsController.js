
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
     */
    const makeTemplateFragment = () => {
        return gmapsUrlHelper.makeTemplateFragment(templateTagNames.gmapurl);
    };
    
    return {
        makeTemplateFragment: makeTemplateFragment,
    };
})();

export{contactUsController};
