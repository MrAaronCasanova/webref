/* --------------------------------------------
Main Filter Functionality
-------------------------------------------- */
var options = {
  valueNames: ['html', 'css', 'javascript', 'git'],
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
