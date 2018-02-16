/* --------------------------------------------
Main Filter Functionality
-------------------------------------------- */

var options = {
  valueNames: ['html', 'css', 'javascript', 'workflow'],
};

var refList = new List('references', options);

/* --------------------------------------------
Pre/Code Tags Modification
-------------------------------------------- */

// ignores starting indentation when using pre/code tags
$('pre code').each(function () {
  var html = $(this).html();
  var pattern = html.match(/\s*\n[\t\s]*/);
  $(this).html(html.replace(new RegExp(pattern, 'g'), '\n'));
});

/* --------------------------------------------
Keyframe Animation
-------------------------------------------- */

/* ------ Rainbow Text ------ */

$('#init-rainbow').click(function () {
  $('.no-rainbow').toggleClass('rainbow-text');
});

/* ------ Loader Icon ------ */

$('#init-loader').click(function () {
  $('.loader').toggleClass('loading');
});

/* ------ Sun Scene ------ */

$('#init-sun-scene').click(function () {
  $('.no-sun-scene').toggleClass('sun-scene');
  $('.no-sun').toggleClass('sun');
});

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

/* ------ Rotate ------ */

$('#init-rotate').click(function () {
  $('.no-rotate-one').toggleClass('rotated-one');
  $('.no-rotate-two').toggleClass('rotated-two');
  $('.no-rotate-three').toggleClass('rotated-three');
  $('.no-rotate-four').toggleClass('rotated-four');
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
Greetr.js
-------------------------------------------- */

// let's use our object on the click of the login button
$('#login').click(function () {

  // create a new 'Greetr' object (let's pretend we know the  nmae  from the login)
  var loginGrtr = G$('Aaron', 'Casanova');

  // hide the login on the screen
  $('#logindiv').hide();

  // fire off an HTML greeting, passing the '#GreetrHTML'
  // as the selector and the chosen language,
  // and log the welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#GreetrHTML', true).log();
});

/* --------------------------------------------
UpperCaseWords
-------------------------------------------- */

goUpper = document.getElementById('uppercase-submit');
goUpper.addEventListener('click', function () {

  function upperCaseFirst(word) {
    // each word passes through this function as a string
    // [0] pulls out the first letter of the string passed in
    // .slice(1) returns a string with the first letter chopped off
    return word[0].toUpperCase() + word.slice(1);
  }

  function upperCaseWords(sentence) {
    // breaks 'sentence' into individual items of an array at every ' '
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
      // passes each word in array to upperCaseFirst function
      words[i] = upperCaseFirst(words[i]);
    }

    // .join(' ') takes words array and concats to string with ' ' between each array item
    var upperResult = words.join(' ');

    // grabs display div on page
    var upperHTML = document.querySelector('.uppercase-display');

    // places new uppercase contents on page
    upperHTML.innerHTML = upperResult;

    return upperResult;
  }

  // stores the value/contents of the input and passes through the upperCaseWords function
  var upperInput = upperCaseWords(document.getElementById('uppercase-input').value);
});

/* --------------------------------------------
Timer
-------------------------------------------- */

// grabs timer button
var timerBtn = document.querySelector('.timer-btn');

// adds click event to button
timerBtn.addEventListener('click', function () {
  // grabs timer input value
  var seconds = document.querySelector('.timer-input').value;

  // grabs html display div
  var timerDisplay = document.querySelector('.timer-display');

  // displays starting timer content
  timerDisplay.textContent = seconds + ' : Seconds Left!';

  // begins setInterval timer - storing interval id in variable for use when clearing the interval
  var intervalId = setInterval(function () {
    // decrementing seconds
    seconds--;

    //logic for display contents
    if (seconds > 0) {
      timerDisplay.textContent = seconds + ' : Seconds Left!';
    } else {
      timerDisplay.textContent = seconds + ' : Ring Ring, That\'s a wrap!';

      // uses id stored in var to clear the setInterval
      clearInterval(intervalId);
    }

  }, 1000);
});

/* --------------------------------------------
XMLHttpRequest
-------------------------------------------- */

/* ------ XHR Quote ------ */

var xhrBtn = document.querySelector('.xhr-btn');

xhrBtn.addEventListener('click', function () {

  // makes new instance of the XMLHTTP Request
  var XHR = new XMLHttpRequest();

  // onreadystatechange executes the function every time
  // the readyState changes (readyState = 0 through 4)
  XHR.onreadystatechange = function () {
    // if readyState is 4(done) && status is good
    // display XHR.responseText on page
    if (XHR.readyState == 4 && XHR.status == 200) {
      var xhrDisplay = document.querySelector('.xhr-display');
      xhrDisplay.textContent = XHR.responseText;
    }
  };

  // specifies what type of request to make and url
  XHR.open('GET', 'https://api.github.com/zen');

  // initiates the request
  XHR.send();
});

/* ------ XHR Photo ------ */

var ajaxBtn = document.querySelector('.xhr-photo-btn');

ajaxBtn.addEventListener('click', function () {
  // makes new instance of the XMLHTTP Request
  var XHR = new XMLHttpRequest();

  // onreadystatechange executes the function every time
  // the readyState changes (readyState = 0 through 4)
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      //Parses JSON into JS object and stores in var
      var xhrResponse = JSON.parse(XHR.responseText);

      // grabs img on page
      var xhrPhoto = document.querySelector('.xhr-photo');

      // updates the img src attr with the parsed message (url)
      xhrPhoto.src = xhrResponse.message;
    }
  };

  XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
  XHR.send();
});

/* ------ XHR Bitcoin Price ------ */
/* ------ read above comment for reference ------ */

var coinBtn = document.querySelector('.coin-btn');

coinBtn.addEventListener('click', function () {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var coinDiv = document.querySelector('.coin-price');
      var coinPrice = JSON.parse(XHR.responseText).bpi.USD;
      coinDiv.textContent = coinPrice.rate + ' ' + coinPrice.code;
    }
  };

  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
});

/* --------------------------------------------
Fetch API
-------------------------------------------- */

// Would be better to refactor, but left as is to comment

// grabbing everything we need from the page
var userImg = document.querySelector('.user-image');
var userFullname = document.querySelector('.user-fullname');
var userUsername = document.querySelector('.user-username');
var userEmail = document.querySelector('.user-email');
var userCity = document.querySelector('.user-city');

var userUrl = 'https://randomuser.me/api/';
var userBtn = document.querySelector('.user-btn');
userBtn.addEventListener('click', function () {
  fetch(userUrl)
  .then(function (res) {
    // res is the response/promise object
    // .ok is a built-in property that specifies if the request was successfull or not
    // the ! flips the false to true so the if statement can run the error
    if (!res.ok) {
      throw Error('Woah Woah Woah... Back Up!!! ' + res.status);
    }

    return res;
  })
  .then(function (res) {
    // .json() is a built in method to extract/parse the json from the object
    return res.json();
  })
  .then(function (data) {
    // console.log(data);
    // data is the returned/parsed json of res obj
    var userData = data.results[0];

    // logic to update the DOM
    userFullname.textContent = userData.name.first + ' ' + userData.name.last;
    userUsername.textContent = userData.login.username;
    userEmail.textContent = userData.email;
    userCity.textContent = userData.location.city;
    userImg.src = userData.picture.medium;
  })
  .catch(function (error) {
    console.log(error);
  });
});

/* --------------------------------------------
3rd Party AJAX
-------------------------------------------- */

/* ------ jQuery Cat Photo ------ */

$('.cat-photo-btn').click(function () {
  $.ajax({
    method: 'GET',
    url: 'https://random.cat/meow',
    dataType: 'json',
  })
  .done(function (data) {
    $('.cat-photo-display').attr('src', data.file);
  });
});

/* ------ Axios Trivia ------ */

var axiosUrl = 'https://opentdb.com/api.php?amount=1';
var axiosQuestionDisp = document.querySelector('.axios-question');
var axiosAnswerDisp = document.querySelector('.axios-answer');
var axiosQuestionBtn = document.querySelector('.axios-question-btn');
var axiosAnswerBtn = document.querySelector('.axios-answer-btn');

axiosQuestionBtn.addEventListener('click', function () {
  axios.get(axiosUrl)
  .then(function (res) {
    // res is the entire response obj
    // .data is where the requested data is stored
    var axiosData = res.data.results[0];

    // DOM Manipulation Section
    axiosQuestionDisp.innerHTML = axiosData.question;
    axiosAnswerDisp.innerHTML = axiosData.correct_answer;
    axiosAnswerDisp.style.opacity = 0;
    axiosQuestionBtn.textContent = 'Next Question';
    axiosAnswerBtn.textContent = 'Answer';
  })
  .catch(function (err) {
    if (err.response) {
      console.log('Problem With Response', err.response.status);
    } else if (err.request) {
      console.log('Problem With Request', err.request);
    } else {
      console.log('Error', err.message);
    }
  });
});

axiosAnswerBtn.addEventListener('click', function () {
  axiosAnswerDisp.style.opacity = 1;
});

/* ------ Ron Swanson ------ */

var ronUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var ronQuotes = document.querySelector('.ron-quotes');
var ronBtnXhr = document.querySelector('.ron-btn-xhr');
var ronBtnFetch = document.querySelector('.ron-btn-fetch');
var ronBtnJquery = document.querySelector('.ron-btn-jQuery');
var ronBtnAxios = document.querySelector('.ron-btn-axios');

ronBtnXhr.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', ronUrl);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var resData = JSON.parse(xhr.responseText)[0];
      ronQuotes.innerHTML = resData;
    }
  };

  xhr.send();
});

ronBtnFetch.addEventListener('click', function () {
  fetch(ronUrl)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    ronQuotes.innerHTML = data[0];
  })
  .catch(function () {
    alert('Error!');
  });
});

ronBtnJquery.addEventListener('click', function () {
  $.ajax({
    method: 'GET',
    url: ronUrl,
    dataType: 'json',
  })
  .done(function (resData) {
    ronQuotes.innerHTML = resData[0];
  });
});

ronBtnAxios.addEventListener('click', function () {
  axios.get(ronUrl)
  .then(function (res) {
    ronQuotes.innerHTML = res.data[0];
  })
  .catch(function () {
    alert('Whoops');
  });
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

/* ------ Jasmine ------ */

// var earth = {
//   isRound: true,
//   numberFromSun: 3,
// };
//
// // 'describe' and 'it' both accept a string as there first param
// // and require a callback for the second param
// describe('Earth', function () {
//   it('is round', function () {
//     // the 'expect' function returns an object we can attach other methods to
//     // the methods we attach to the returned 'expect' obj are called matchers
//     expect(earth.isRound).toBe(true);
//   });
//
//   it('is the third planet from the sun', function () {
//     expect(earth.numberFromSun).toBe(3);
//   });
// });

// describe('Jasmine Matcher', function () {
//   it('allows for === and deep equality', function () {
//     expect(1 + 1).toBe(2);
//     expect([1, 2, 3]).toEqual([1, 2, 3]);
//   });
//
//   it('allows for easy precision checking', function () {
//     expect(3.1415).toBeCloseTo(3.14, 2);
//   });
//
//   it('allows for easy truthy / falsey checking', function () {
//     expect(0).toBeFalsy();
//     expect([]).toBeTruthy();
//   });
//
//   it('allows for checking contents of an object', function () {
//     expect([1, 2, 3]).toContain(1);
//     expect({ name: 'Aaron' }).toEqual(jasmine.objectContaining({ name: 'Aaron' }));
//   });
//
//   it('allows for easy type checking', function () {
//     expect([]).toEqual(jasmine.any(Array));
//     expect(function () {}).toEqual(jasmine.any(Function));
//   });
// });

// describe('Arrays', function () {
//   // declare var outside beforeEach so the scope chain
//   // can reference the value assigned inside beforeEach for every test
//   var arr;
//   beforeEach(function () {
//     arr = [1, 3, 5];
//   });
//
//   it('adds elements to an array', function () {
//     arr.push(7);
//     expect(arr).toEqual([1, 3, 5, 7]);
//   });
//
//   it('returns the new length of the array', function () {
//     expect(arr.push(7)).toBe(4);
//   });
//
//   it('adds anything into the array', function () {
//     expect(arr.push({})).toBe(4);
//   });
// });

// describe('Counting', function () {
//   var count = 0;
//
//   beforeEach(function () {
//     count++;
//   });
//
//   afterEach(function () {
//     count = 0;
//   });
//
//   it('has a counter that increments', function () {
//     expect(count).toBe(1);
//   });
//
//   it('count was reset after last test', function () {
//     expect(count).toBe(1);
//   });
// });

// function add() {
//   return a + b + c;
// }
//
// describe('add', function () {
//   var addSpy;
//   var result;
//   beforeEach(function () {
//     addSpy = spyOn(window, 'add');
//     result = addSpy(1, 2, 3);
//   });
//
//   it('is can have params tested', function () {
//     expect(addSpy).toHaveBeenCalled();
//     expect(addSpy).toHaveBeenCalledWith(1, 2, 3);
//   });
// });

// describe('a simple setTimeout', function () {
//   var sample;
//   beforeEach(function () {
//     sample = jasmine.createSpy('sampleFunction');
//     jasmine.clock().install();
//   });
//
//   afterEach(function () {
//     jasmine.clock().uninstall();
//   });
//
//   it('is only invoked after 1000 milliseconds', function () {
//     setTimeout(function () {
//       sample();
//     }, 1000);
//
//     jasmine.clock().tick(999);
//     expect(sample).not.toHaveBeenCalled();
//     jasmine.clock().tick(1);
//     expect(sample).toHaveBeenCalled();
//   });
// });

// function getUserInfo(username) {
//   return console.log($.getJSON('https://ron-swanson-quotes.herokuapp.com/v2/quotes' + username));
// }

// function getRonQuotes(route) {
//   return $.getJSON('https://ron-swanson-quotes.herokuapp.com/v2/' + route);
// }
//
// describe('#getRonQuotes', function () {
//   it('returns ron quotes', function (done) {
//     getRonQuotes('quotes')
//     .then(function (data) {
//       expect(data.status).toBe(200);
//       done();
//     });
//   });
// });

/* --------------------------------------------
ES6
-------------------------------------------- */

/* ------ forEach ------ */

// let myNumbers = [1, 2, 3, 4, 5, 6, 7];
//
// function doubleValues(nums) {
//   let dNums = [];
//   nums.forEach(function (num) {
//     dNums.push(num * 2);
//   });
//
//   return dNums;
// }
//
// console.log(doubleValues(myNumbers));
//
// function onlyEven(arr) {
//   let newArr = [];
//   arr.forEach(function (val) {
//     if (val % 2 === 0) {
//       newArr.push(val);
//     }
//   });
//
//   return newArr;
// }
//
// console.log(onlyEven(myNumbers));
//
// function showFirstAndLast(arr) {
//   let newArr = [];
//   arr.forEach(function (val, index, array) {
//     if (index === 0) {
//       newArr.push(val);
//     } else if (++index === array.length) {
//       newArr.push(val);
//     }
//   });
//
//   return newArr;
// }
//
// console.log(showFirstAndLast(myNumbers));
//
// function vowelCount(str) {
//   let splitArr = str.split('');
//   let obj = {};
//   let vowels = 'aeiou';
//
//   splitArr.forEach(function (letter) {
//     if (vowels.indexOf(letter.toLowerCase()) !== -1) {
//       obj[letter] = obj[letter] + 1 || 1;
//     } else {
//       obj[letter] = 1;
//     }
//   });
//
//   return obj;
// }
//
// console.log(vowelCount('aaron casanova'));

/* ------ map ------ */

// let myNums = [1, 2, 3, 4, 5, 6];
//
// function doubleVals(arr) {
//   return arr.map(function (val) {
//     return val * 2;
//   });
// }
//
// console.log(doubleVals(myNums));
//
// function valTimesIndex(arr) {
//   return arr.map(function (val, index) {
//     return val * index;
//   });
// }
//
// console.log(valTimesIndex(myNums));
//
// function extractKey(arr, key) {
//   return arr.map(function (val) {
//     return val[key];
//     // we use bracket notation for [key] instead of val.key
//     // so JS will evaluate the argument passed to the key variable
//     // rather than search for a key with the name of
//     // 'key' on the object
//   });
// }
//
// let names = [
//   {
//     first: 'Aaron',
//     last: 'Casanova',
//   },
//   {
//     first: 'Lisa',
//     last: 'Wazewski',
//   },
// ];
//
// console.log(extractKey(names, 'first'));
//
// function firstAndLast(arr) {
//   return arr.map(function (val) {
//     return `Why hello ${val.first} ${val.last}`;
//   });
// }
//
// console.log(firstAndLast(names));

/* ------ filter ------ */

// let names = [
//   {
//     first: 'Aaron',
//     last: 'Casanova',
//   },
//   {
//     first: 'Lisa',
//     last: 'Wazewski',
//   },
//   {
//     fullname: 'John Doe',
//   },
// ];
//
// let myNums = [1, 2, 3, 4, 5, 6];
//
// function filterByValue(arr, key) {
//   return arr.filter(function (val) {
//     return val[key] !== undefined;
//   });
// }
//
// console.log(filterByValue(names, 'first'));
//
// function find(arr, searchValue) {
//   return arr.filter(function (val) {
//     return val === searchValue;
//   })[0];
// }
//
// console.log(find(myNums, 3));
//
// function findInObj(arr, key, searchValue) {
//   return arr.filter(function (val) {
//     return val[key] === searchValue;
//   })[0];
// }
//
// console.log(findInObj(names, 'first', 'Lisa'));
//
// function removeVowels(str) {
//   let vowels = 'aeiou';
//   let splitArr = str.split('');
//   let noVowels = splitArr.filter(function (letter) {
//     return vowels.indexOf(letter.toLowerCase()) === -1;
//   });
//
//   return noVowels.join('');
// }
//
// console.log(removeVowels('Aaron'));
//
// function doubleOddNums(arr) {
//   return arr.filter(function (val) {
//     return val % 3 === 0;
//   }).map(function (val) {
//     return val * 2;
//   });
// }
//
// console.log(doubleOddNums(myNums));

/* ------ every & some ------ */

// let myNums = [1, 2, 3, 4, 5, 6];
//
// function hasOddNums(arr) {
//   return arr.some(function (val) {
//     return val % 2 !== 0;
//   });
// }
//
// console.log(hasOddNums(myNums));
//
// function hasOnlyOddNums(arr) {
//   return arr.every(function (val) {
//     return val % 2 !== 0;
//   });
// }
//
// console.log(hasOnlyOddNums(myNums));
//
// function hasNoDuplicates(arr) {
//   return arr.every(function (val) {
//     return arr.indexOf(val) === arr.lastIndexOf(val);
//   });
// }
//
// console.log(hasNoDuplicates(myNums));
//
// let arrObj = [
//   {
//     hello: 'world',
//     john: 'doe',
//   },
//   {
//     aaron: 'casanova',
//     lisa: 'wazewski',
//   },
// ];
//
// function hasCertainKey(arr, key) {
//   return arr.some(function (val) {
//     return val[key] !== undefined;
//   });
// }
//
// console.log(hasCertainKey(arrObj, 'aaron'));
//
// function hasCertainVal(arr, key, searchValue) {
//   return arr.some(function (val) {
//     return val[key] === searchValue;
//   });
// }
//
// console.log(hasCertainVal(arrObj, 'aaron', 'casanova'));

/* ------ reduce ------ */

// var arr = [5, 4, 1, 4, 5];
//
// arr.reduce(function (acc, nextVal) {
//   if (nextVal in acc) {
//     acc[nextVal]++;
//   } else {
//     acc[nextVal] = 1;
//   }
//
//   return acc;
// }, {});
//
// console.log(arr);
//
// let myArr = [
//   {
//     first: 'Aaron',
//     last: 'Casanova',
//   },
//   {
//     first: 'Lisa',
//     last: 'Wazewski',
//   },
// ];
//
// // extracts specified keys into new array
// function extractValue(arr, key) {
//   return arr.reduce(function (acc, next) {
//     acc.push(next[key]);
//     return acc;
//   }, []);
// }
//
// console.log(extractValue(myArr, 'last'));
//
// // only counts the vowels in the passed string
// function vowelCount(str) {
//   let vowels = 'aeiou';
//   let splitStr = str.toLowerCase().split('');
//   return splitStr.reduce(function (acc, next) {
//     if (vowels.indexOf(next) !== -1) {
//       acc[next] = acc[next] + 1 || 1;
//     } else {
//       acc[next] = 1;
//     }
//
//     return acc;
//   }, {});
// }
//
// console.log(vowelCount('abcdefgaeeciouuo'));
//
// // adds key value pair to every each array item obj
// function addKeyAndValue(arr, key, value) {
//   return arr.reduce(function (acc, next, idx) {
//     acc[idx][key] = value;
//     return acc;
//   }, arr);
// }
//
// console.log(addKeyAndValue(myArr, 'Jane', 'Doe'));
//
// // splits results of callback function into seperate arrays
// function partition(arr, cb) {
//   return arr.reduce(function (acc, next) {
//     if (cb(next)) {
//       acc[0].push(next);
//     } else {
//       acc[1].push(next);
//     }
//
//     return acc;
//   }, [[], []]);
// }
//
// console.log(partition([1, 2, 3, 4], function (a) {
//   return a > 2;
// }));
