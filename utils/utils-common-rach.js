'use strict';

/**
 * RMP
 */
const UtilsCommonRach = (() => {
  /**
     * Returns today's year.
     * @public
     * @return {number} today's year.
     */
  const makeDate = () => {
    const d = new Date();
    return d.getFullYear();
  };

  return {
    makeDate: makeDate,
  };
})();

export {UtilsCommonRach};

