/* --------------------------------------------
Main Filter Functionality
-------------------------------------------- */
var options = {
  valueNames: ['html', 'css', 'javascript', 'workflow'],
};

var refList = new List('references', options);

/* --------------------------------------------
Transform
-------------------------------------------- */

/* ------ Translate ------ */

$('#button').click(function () {
  $('.no-one').toggleClass('crazy-one');
  $('.no-two').toggleClass('crazy-two');
  $('.no-three').toggleClass('crazy-three');
  $('.no-four').toggleClass('crazy-four');
});

/* --------------------------------------------
Form
-------------------------------------------- */

// Overides materialze's default select tag styling
$(document).ready(function () {
  $('select').material_select();
});
