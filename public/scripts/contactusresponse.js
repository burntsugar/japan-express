$(document).ready(function () {
    "use strict";

    var urlParams = new URLSearchParams(location.search);

    if (urlParams.has('fname')) {
        $("#fname").text(urlParams.get('fname'));
        $("#lname").text(urlParams.get('lname'));
        $("#email").text(urlParams.get('email'));
        $("#phone").text(urlParams.get('phone'));
        $("#packageselect").text(urlParams.get('packageselect'));
        $("#question").text(urlParams.get('question'));

    }

});
