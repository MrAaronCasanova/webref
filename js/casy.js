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
Score Keeper Exercise
-------------------------------------------- */

var p1Button = document.querySelector('.p1');
var p2Button = document.querySelector('.p2');
var resetButton = document.querySelector('.reset');
var p1ScoreBoard = document.querySelector('.p1-score-board');
var p2ScoreBoard = document.querySelector('.p2-score-board');
var numInput = document.querySelector('.num-input');
var playToNum = document.querySelector('.play-to-num');

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener('click', function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1ScoreBoard.classList.add('winner');
      gameOver = true;
    }

    p1ScoreBoard.textContent = p1Score;
  }
});

p2Button.addEventListener('click', function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2ScoreBoard.classList.add('winner');
      gameOver = true;
    }

    p2ScoreBoard.textContent = p2Score;
  }
});

resetButton.addEventListener('click', function () {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1ScoreBoard.textContent = p1Score;
  p2ScoreBoard.textContent = p2Score;
  p1ScoreBoard.classList.remove('winner');
  p2ScoreBoard.classList.remove('winner');
  gameOver = false;
}

numInput.addEventListener('change', function () {
  playToNum.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});

/* --------------------------------------------
DOM Events
-------------------------------------------- */

/* ------ Click Demo ------ */
var clickDemo = document.querySelector('.click-demo');

var isClicked = false;

clickDemo.addEventListener('click', function () {
  if (isClicked) {
    clickDemo.style.color = 'black';
  } else {
    clickDemo.style.color = 'coral';
  }

  isClicked = !isClicked;
});

// ^^^ Would be better to create .custom-styling separately in CSS
// ^^^ and use clickDemo.classList.toggle('custom-styling');

/* ------ Mouse Over & Mouse Out ------ */
var mouseoverNout = document.querySelectorAll('.mouseover-n-out');

for (i = 0; i < mouseoverNout.length; i++) {
  mouseoverNout[i].addEventListener('mouseover', function () {
    this.classList.add('selected');
  });

  mouseoverNout[i].addEventListener('mouseout', function () {
    this.classList.remove('selected');
  });
}

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

// Counts all event on MDN's event reference page
// var events = document.querySelectorAll('td code a');
// var count = 0;
// for (i = 0; i < events.length; i++) {
//   count += 1;
// }
//
// console.log(count);

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

/* ------ DOM ------ */

// Playing with Google

// var links = document.getElementsByTagName('a');
//
// for (i = 0; i < links.length; i++) {
//   links[i].style.background = 'pink';
//   links[i].style.border = '1px solid #000';
//   links[i].setAttribute('href', 'https://www.soundcloud.com/casymusic');
// }

/* ------ 'THIS' keyword ------ */

// var person = {
//   firstName: 'Aaron',
//   sayHi: function () {
//     return 'Hi ' + this.firstname;
//   },
//
//   determineContext: function () {
//     return this === person;
//   },
//
//   dog: {
//     sayHello: function () {
//       return 'Hello ' + this.firstName;
//     },
//
//     determineContext: function () {
//       return this === person;
//     },
//   },
//
//   addNumbers: function (a, b, c, d) {
//     return this.firstName + ' just calculated ' + (a + b + c + d);
//   },
//
//   sayHowdy: function () {
//     setTimeout(function () {
//       console.log('Howdy ' + this.firstName);
//     }, 1000);
//   },
//
//   sayBonjour: function () {
//     setTimeout(function () {
//       console.log('Bonjour ' + this.firstName);
//     }.bind(this), 1000);
//   },
// };
//
// var casanova = {
//   firstName: 'Casy',
// };
//
// var casyCalc = person.addNumbers.bind(casanova, 1, 2, 3, 4); // function() {}...
// // does not invoke / returns function definition
//
// // With bind - we do not need to know all the arguments up front
// var casyCalc2 = person.addNumbers.bind(casanova, 1, 2);
//
// function FullName(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
//
// var casy = new FullName('Aaron', 'Casanova');
//
// person.sayHi(); // 'Hi Aaron'
// person.determineContext(); // true
//
// person.dog.sayHello.call(person); // 'Hello Aaron'
// person.dog.determineContext.call(person); // true
// // Notice when using the 'call' method we do NOT invoke sayHello or determineContext
// // (the 'thisArg' can be any declared object in the file)
// person.sayHi.call(casanova); // Hi Casy
// person.sayHi.apply(casanova); // Hi Casy
//
// person.addNumbers(1, 2, 3, 4); // Aaron just calculated 10
// person.addNumbers.call(casanova, 1, 2, 3, 4); // Casy just calculated 10
// person.addNumbers.apply(casanova, [1, 2, 3, 4]); // Casy just calculated 10
//
// casyCalc(); // Casy just calculated 10
// casyCalc2(3, 4); // Casy just calculated 10
//
// // setTimeout is a method on the window object
// person.sayHowdy(); // Howdy undefined (1000 milliseconds later)
// // Use bind to set the correct context of 'this'
// person.sayBonjour(); // Bonjour Aaron (1000 milliseconds later)
//
// casy.firstName; // 'Aaron'
// casy.lastName;// 'Casanova'

/* ------ Obect Oriented Programming (OOP) ------ */

// Capitalize function name

// function House(bedrooms, bathrooms, numSqft) {
//   this.bedrooms = bedrooms;
//   this.bathrooms = bathrooms;
//   this.numSqft = numSqft;
// }
//
// var firstHouse = new House(2, 2, 1200);
// console.log(firstHouse.bedrooms); // 2
// console.log(firstHouse.bathrooms); // 2
// console.log(firstHouse.numSqft); // 1200
//
// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
//   this.bark = function () {
//     console.log(this.name + ' just barked!');
//   };
// }
//
// var moose = new Dog('Moose', 3);
//
// moose.bark();
//
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//
//   // we can also set properties on the keyword 'this'
//   // that are preset values
//   this.numWheels = 4;
// }
//
// function Motorcycle(make, model, year) {
//   // using call
//   Car.call(this, make, model, year);
//   this.numWheels = 2;
// }
//
// function Motorcycle(make, model, year) {
//   // using apply
//   Car.apply(this, [make, model, year]);
//   this.numWheels = 2;
// }
//
// function Motocycle(make, model, year) {
//   // even better using apply with arguments
//   Car.apply(this, arguments);
//   this.numWheels = 2;
// }

/* ------ prototype & __proto__ ------ */

// // this is the constructor function
// function Person(name) {
//   this.name = name;
// }
//
// // this is an object created from the Person constructor
// var casy = new Person('Aaron');
// var nova = new Person('Casanova');
//
// // since we used the new keyword, we have established
// // a link between the object and the prototype property
// // we can access that using __proto__
//
// casy.__proto__ === Person.prototype; // true
// nova.__proto__ === Person.prototype; // true
//
// // the Person.prototype object also has a property
// // called constructor which points back to the function
// Person.prototype.constructor === Person; // true

// function Person(name) {
//   this.name = name;
// }
//
// Person.prototype.sayHi = function () {
//   return 'Hi ' + this.name;
// };
//
// var aaron = new Person('Aaron');
// console.log(aaron.sayHi());
//
// function Vehicle(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.isRunning = false;
// }
//
// Vehicle.prototype.turnOn = function () {
//   return this.isRunning = true;
// };
//
// Vehicle.prototype.turnOff = function () {
//   return this.isRunning = false;
// };
//
// Vehicle.prototype.honk = function () {
//   if (this.isRunning) {
//     return 'beep';
//   }
// };

/* ------ Closures ------ */

// function outer() {
//   var data = 'closures are ';
//   return function inner() {
//     var innerData = 'awesome';
//     return data + innerData;
//   };
// }
//
// outer()(); // closures are awesome
//
// function outer(a) {
//   return function inner(b) {
//     // the inner function is making use of the variable 'a'
//     // which was defined in an outer funtion called 'outer'
//     // and by the time this is called, that outer function
//     // has returned this function called 'inner' is a closure
//     return a + b;
//   };
// }
//
// outer(5)(5); // 10
//
// var storeOuter = outer(5);
// storeOuter(10); //15

// function counter() {
//   var count = 0;
//   return function () {
//     return ++count;
//   };
// }
//
// counter1 = counter();
// counter1(); // 1
// counter1(); // 2
//
// counter2 = counter();
// counter2(); // 1
// counter2(); // 2
//
// counter1(); // 3 this is not affected by counter2!
//
// count; // ReferenceError: count is not defined - because it is private!
//
// function classRoom() {
//   var instructors = ['Colt', 'Elie']; // private var
//   return {
//     getInstructors: function () {
//       return instructors;
//     },
//
//     addInstructor: function (instructor) {
//       instructors.push(instructor);
//       return instructors;
//     },
//   };
// }
//
// course1 = classRoom();
// course1.getInstructors(); // ['Colt', 'Elie']
// course1.getInstructors('Ian'); // ['Colt', 'Elie', 'Ian']
// course1.getInstructors(); // ['Colt', 'Elie', 'Ian']
//
// course2 = classRoom();
// course2.getInstructors(); // ['Colt', 'Elie'] - not affected by course1
//
// // We also have NO access to the instructors variables
// // which makes it private - no one can modify it...
