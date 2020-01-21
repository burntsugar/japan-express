$(document).ready(function () {
    "use strict";

    var urlParams = new URLSearchParams(location.search);

    if (urlParams.has('tour')) {
        var s = urlParams.get('tour');
        $("#packageselect").val(s).change();
        $("#buttonAlert").addClass('show');
        $('#packageselect').trigger('focus');
        $('#selectedqcity').text("You have selected " + s + "!")


        $('#buttonAlert').on('closed.bs.alert', function () {
            $("#fname").focus();
        })

    }


});
