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

/* ------ Loops Exercises ------ */

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
//
//   even++;
// }

// console.log('Ex3 *****');
// var odd = 300;
// while (odd <= 333) {
//   if (odd % 2 !== 0) {
//     console.log(odd);
//   }
//
//   odd++;
// }

// console.log('Ex 4 *****');
// var multiNum = 5;
// while (multiNum <= 50) {
//   if (multiNum % 5 === 0 && multiNum % 3 === 0) {
//     console.log(multiNum);
//   }
//
//   multiNum++;
// }

// ****** ARE WE THERE YET EX. 1
// var answer = prompt('Are we there yet?');
//
// while (answer !== 'yes' && answer !== 'yeah') {
//   var answer = prompt('Are we there yet?');
// }
//
// alert('YAY, WE MADE IT!!!');
//
// ****** ARE WE THERE YET EX. 2
// var answer = prompt('Are we there yet?');
// while (answer.indexOf('yes') === -1) {
//   var answer = prompt('Are we there yet?');
// }
//
// alert('YAY, WE MADE IT!!!');

// ****** LOOP EXERCISES
// console.log('Ex. 1');
// var num = -10;
// for (i = num; i <= 19; i++) {
//   console.log(i);
// }

// console.log('Ex. 2');
// var even = 10;
// for (i = even; i <= 40; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// console.log('Ex. 3');
// var odd = 300;
// for (i = odd; i <= 333; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// console.log('Ex. 4');
// var numDiv = 5;
// for (i = numDiv; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// ****** Function Exercises
// console.log('Ex. 1');
// function isEven(num) {
//   if (typeof num === 'string') {
//     console.log('That\'s not a number');
//   } else if (num % 2 === 0) {
//     console.log('true');
//   } else {
//     console.log(false);
//   }
// }
//
// isEven('two');
// isEven(4);
// isEven(5);
//
// console.log('Ex. 2');
// function factorial(num) {
//   var result = 1;
//   for (i = num; i > 0; i--) {
//     result *= i;
//   }
//
//   console.log(result);
// }
//
// factorial(5);
// factorial(2);
// factorial(10);
// factorial(0);
//
// console.log('Ex. 3');
// function kebabToSnake(str) {
//   var newStr = str.replace(/-/g, '_');
//   console.log(newStr);
// }
//
// kebabToSnake('hello-world');

/* ------ Prompt Based ToDo List ------ */

// var todos = ['test', 'test2', 'test3'];
//
// var input = prompt('What would you like to do?');
//
// while (input !== 'quit') {
//   if (input === 'list') {
//     listTodos();
//   } else if (input === 'new') {
//     addTodo();
//   } else if (input === 'delete') {
//     deleteTodo();
//   }
//
//   input = prompt('What would you like to do?');
// }
//
// console.log('OK, YOU QUIT THE APP');
//
// function listTodos() {
//   console.log('*********');
//   todos.forEach(function (listItem, index) {
//     console.log(index + ': ' + listItem);
//   });
//
//   console.log('*********');
// }
//
// function addTodo() {
//   var newTodo = prompt('What would you like to add to your list?');
//   todos.push(newTodo);
// }
//
// function deleteTodo() {
//   var index = prompt('Enter index of todo to delete');
//   todos.splice(index, 1);
//   listTodos();
// }

/* ------ Array Exercise ------ */

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0) {
//     console.log(numbers[i]);
//   }
// };
//
// console.log('Ex. 1 ******');
// var revNums = [1, 2, 3, 4, 5];
// function printReverse(arr) {
//   for (i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
//
// printReverse(revNums);
//
// console.log('Ex. 2 ******');
// var uniNums1 = [1, 1, 1, 1];
// var uniNums2 = [1, 1, 4, 1];
// function isUniform(arr) {
//   var compareNum = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] !== compareNum) {
//       return console.log(false);
//     }
//   }
//
//   console.log(true);
// }
//
// isUniform(uniNums1);
// isUniform(uniNums2);
//
// console.log('Ex. 3 ******');
// var addNums = [10, 20, 20];
// function sumArray(arr) {
//   var total = 0;
//   arr.forEach(function (val) {
//     total += val;
//   });
//
//   console.log(total);
// }
//
// sumArray(addNums);
//
// console.log('Ex. 4 ******');
// var maxNums = [1, 204, 3, 55];
// function max(arr) {
//   var maxNum = arr[0];
//   arr.forEach(function (val) {
//     if (val > maxNum) {
//       maxNum = val;
//     }
//   });
//
//   console.log(maxNum);
// }
//
// max(maxNums);

/* ------ Object Exercise ------ */

// var movies = [
//   {
//     title: 'In Bruges',
//     rating: '5 stars',
//     hasWatched: true,
//   },
//   {
//     title: 'Frozen',
//     rating: '4.5 stars',
//     hasWatched: false,
//   },
//   {
//     title: 'Mad Max Fury Road',
//     rating: '5 stars',
//     hasWatched: true,
//   },
//   {
//     title: 'Les Miserables',
//     rating: '3.5 stars',
//     hasWatched: false,
//   },
// ];
//
// function movieSpecs(arr) {
//   arr.forEach(function (val, index) {
//     var movie = arr[index];
//     var watched = function () {
//       if (movie.hasWatched) {
//         return 'You have seen';
//       } else {
//         return 'You have not seen';
//       }
//     };
//
//     console.log(watched() + ' ' + movie.title + ' - ' + movie.rating);
//   });
// }
//
// movieSpecs(movies);
