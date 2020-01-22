$(document).ready(function() {
  'use strict';

  const urlParams = new URLSearchParams(location.search);

  if (urlParams.has('tour')) {
    const s = urlParams.get('tour');
    $('#packageselect').val(s).change();
    $('#buttonAlert').addClass('show');
    $('#packageselect').trigger('focus');
    $('#selectedqcity').text('You have selected ' + s + '!');


    $('#buttonAlert').on('closed.bs.alert', function() {
      $('#fname').focus();
    });
  }
});
