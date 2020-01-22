'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('copyrightyear').innerHTML = makeDate();
});

const makeDate = () => {
  const d = new Date();
  return d.getFullYear();
};

