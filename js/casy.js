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
  $('.noOne').toggleClass('crazyOne');
  $('.noTwo').toggleClass('crazyTwo');
  $('.noThree').toggleClass('crazyThree');
  $('.noFour').toggleClass('crazyFour');
});

/* --------------------------------------------
Form
-------------------------------------------- */

// Overides materialze's default select tag styling
$(document).ready(function () {
  $('select').material_select();
});
