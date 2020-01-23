/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:09:44 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:09:44 
 */


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

