
const templateProps = (() => {
  const tagHeaderNames = {
    HEAD_TITLE: 'head-title',
    SEARCH_FORM_ACTION_ENDPOINT: 'search-form-action-endpoint',
  };

  const tagBodyNames = {
    BODY_CONTENT: 'content',
    GMAPS_SCRIPT_SOURCE: 'gmapurl',
    CONTACT_FORM_ACTION_ENDPOINT: 'contact-form-action-endpoint',
  };

  const tagFooterNames = {
    FOOTER_COPYRIGHT_YEAR: 'footer-copyright-year',
  };

  return {
    tagHeaderNames: tagHeaderNames,
    tagBodyNames: tagBodyNames,
    tagFooterNames: tagFooterNames,
  };
})();

export {templateProps};
