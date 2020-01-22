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
