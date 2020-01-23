/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:08:31 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:08:31 
 */


$(document).ready(function() {
  'use strict';

  const urlParams = new URLSearchParams(location.search);

  if (urlParams.has('fname')) {
    $('#fname').text(urlParams.get('fname'));
    $('#lname').text(urlParams.get('lname'));
    $('#email').text(urlParams.get('email'));
    $('#phone').text(urlParams.get('phone'));
    $('#packageselect').text(urlParams.get('packageselect'));
    $('#question').text(urlParams.get('question'));
  }
});
