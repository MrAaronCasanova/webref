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

// var secretNumber = 9;
// var stringGuess = prompt('Guess a number');
// var guess = Number(stringGuess);
// if (guess === secretNumber) {
//   alert('YOU GOT IT RIGHT!');
// } else if (guess > secretNumber) {
//   alert('Too high. Guess again!');
// } else {
//   alert('Too low. Guess again!');
// }

// console.log('Ex 1 *****');
// var num = -10;
// while (num <= 19) {
//   console.log(num);
//   num++;
// }

// console.log('Ex 2 *****');
// var even = 10;
// while (even <= 40) {
//   if (even % 2 === 0) {
//     console.log(even);
//   }

//   even++;
// }

// console.log('Ex3 *****');
// var odd = 300;
// while (odd <= 333) {
//   if (odd % 2 !== 0) {
//     console.log(odd);
//   }

//   odd++;
// }

// console.log('Ex 4 *****');
// var multiNum = 5;
// while (multiNum <= 50) {
//   if (multiNum % 5 === 0 && multiNum % 3 === 0) {
//     console.log(multiNum);
//   }

//   multiNum++;
// }
