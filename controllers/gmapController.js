/**
 * RMP
 */
const GoogleMapController = (() => {

    /**
     * @public
     */
    const getAPIKey = () => {
        const apiKey = process.env.GMAPKEY || "not set";
        return apiKey;
    };

    /**
     * @public
     */
    const getUrl= () => {
        const key = getAPIKey();
        const url = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=myMap`;
        return url;
    };

    /**
     * @public
     */
    const makeTemplateFragment = (tagName) => {
        const pro = tagName;
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
    }
})();

export{GoogleMapController};