
import {envKeys} from '../keys.js';
/**
 * RMP
 */
const gmapsUrlHelper = (() => {
  /**
     * @public
     * @return {string} maps.googleapis.com/maps/api/js key
     */
  const getAPIKey = () => {
    const apiKey = envKeys.GMAPSAPIKEY;
    return apiKey;
  };

  /**
     * @public
     * @return {string} maps.googleapis.com/maps/api/js endpoint
     * including api key.
     */
  const getUrl = () => {
    const key = getAPIKey();
    const url = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=myMap`;
    return url;
  };

  /**
     * @public
     * @param {string} tagName
     * @return {object} template data.
     */
  const makeTemplateFragment = (tagName) => {
    const url = getUrl();
    const templateFragment = {
      [tagName]: url,
    };
    return templateFragment;
  };

  return {
    getAPIKey: getAPIKey,
    getUrl: getUrl,
    makeTemplateFragment: makeTemplateFragment,
  };
})();

export {gmapsUrlHelper};
