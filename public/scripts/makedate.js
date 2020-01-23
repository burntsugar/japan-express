/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:08:47 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:08:47 
 */


'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('copyrightyear').innerHTML = makeDate();
});

const makeDate = () => {
  const d = new Date();
  return d.getFullYear();
};

