"use strict";

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("copyrightyear").innerHTML = makeDate();
});

const makeDate = () => {
    var d = new Date();
    return d.getFullYear();
};

