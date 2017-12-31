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

/* --------------------------------------------
Delete This - Tutorial Project Exercise
-------------------------------------------- */

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// var age = prompt('What is your age?');
// console.log('Your full name is ' + firstName + ' ' + lastName);
// console.log('You are ' + age + ' years old');

// var age = prompt('What is your age?');
// alert(age + ' years is roughly ' + age * 365.25 + ' days');

// var age = prompt('What is your age?');
// var odd = age % 2;
// if (age < 0) {
//   alert('You mean to tell me you don\'t exist yet');
// } else if (age === 21) {
//   alert('happy 21st birthday');
// } else if (odd !== 0) {
//   alert('your age is odd');
// }
