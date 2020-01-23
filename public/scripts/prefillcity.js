/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:08:54 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:08:54 
 */


$(document).ready(function() {
  'use strict';

  const tourName = $('#hidden-tour').text();
  console.log('tourname: ' + tourName);
  if (tourName.length > 0) {
    $('#packageselect').val(tourName).change();
    $('#buttonAlert').addClass('show');
    $('#packageselect').trigger('focus');
    $('#selectedqcity').text('You have selected ' + tourName + '!');
  }

  $('#buttonAlert').on('closed.bs.alert', function() {
    $('#fname').focus();
  });
});

