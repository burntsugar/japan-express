$(document).ready(function() {
  // Regular expression pattern attribution:
  // Dwayne Charrington
  // https://ilikekillnerds.com/2014/08/regular-expression-for-validating-australian-phone-numbers-including-landline-and-mobile/
  const phoneinput = document.getElementById('phone');
  phoneinput.addEventListener('input', function(event) {
    const patt = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
    const res = patt.test(phoneinput.value);
    if (res == true) {
      phoneinput.setCustomValidity('');
    } else {
      phoneinput.setCustomValidity('Enter a valid phone number!');
    }
  });
});
