/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:10:06 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:10:06 
 */


/**
 * @file
 * @author Rachael Colley <rcolley@rcolley>
 * @fileoverview Provides access to environment variables.
 */

const envKeys = {
  PORT: process.env.PORT || 3000,
  GMAPSAPIKEY: process.env.GMAPKEY || 'not set',
};

export {envKeys};
