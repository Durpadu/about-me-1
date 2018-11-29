'use strict';

var startGame = confirm('Do you want to learn all ABOUT ME?!');

if(startGame) {
  alert('Great, let\'s play!');
  console.log('They want to play a game.');
} else {
  alert('Ok see you later :(');
  console.log('They want don\'t want to play a game.');
}

var name = prompt('What is your name?');

// Question 1
var favColor = prompt('Do you think my favorite color is yellow?').toUpperCase();

if(favColor === 'YES') {
  alert('You are correct!! I like Yellow.');
  console.log('Correct about Yellow.');
} else if (favColor === 'NO') {
  alert('WRONG! I like yellow.');
  console.log('Wrong about Yellow.');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\'t use yes or no, on Yellow Question.');
}

// Question 2
var favFood = prompt('Do you think my favorite food is sushi?').toUpperCase();

if(favFood === 'YES') {
  alert('You are correct!! I like sushi.');
  console.log('Right about Sushi.');
} else if (favFood === 'NO') {
  alert('WRONG! I like sushi.');
  console.log('Wrong about Sushi.');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\'t use yes or no, on Sushi Question.');

}

// Question 3
var bananas = prompt('Do you think I like bananas?').toUpperCase();

if(bananas === 'YES') {
  alert('You are correct!! I like bananas.');
  console.log('Right about bananas.');
} else if (bananas === 'NO') {
  alert('WRONG! I like bananas.');
  console.log('Wrong about bananas.');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\'t use yes or no, on Bananas Question.'); 

}

// Question 4
var coffee = prompt('Do you think I like coffee?').toUpperCase();

if(coffee === 'YES') {
  alert('You are correct!! I like coffee.');
  console.log('Right about coffee.');
} else if (coffee === 'NO') {
  alert('WRONG! I like coffee.');
  console.log('Wrong about coffee.');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\'t use yes or no, on Coffee Question.');
}

// Question 5
var basketball = prompt('Do you think I like basketball?').toUpperCase();

if(basketball === 'YES') {
  alert('You are correct!! I like basketball.');
  console.log('Right I like basketball');
} else if (basketball === 'NO') {
  alert('WRONG! I like basketball.');
  console.log('Wrong like basketball');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\'t use yes or no, on Basketball Question.');
}


// // Question 6
// // var guessNumber = prompt('Can you guess my favorite number? You have 4 tries to guess it.');
// var guessesRemaining = 1;

// while(guessesRemaining < 5) {
//  do something here;
//  ++guessesRemaining;
// }


// while(guessesRemaining === !3) {
//   console.log('Wrong');
// }

// while(guessesRemaining = 5) {
//   prompt('Can you guess my favorite number? You have 4 tries to guess it.')
//   ++guessesRemaining;
// }

// var favNumber = 3;
// while(flag === false) {
//   make the user keep guessing;
//   if correct, reassign flag to true;
// }

// // 4 tries
// // too high
// // too low


// // Question 7
// var guessStates = prompt('Can you guess which states I\'ve lived in?');
// var states = ['Kansas','Oregon','Missouri','Washington'];

// 6 tries
// upon 6 tries or a match
// alert('I\'ve lived in Kansas, Oregon & Missouri!');

// var numGuess = prompt('Guess my favorite number, it is between 1 and 3');

// switch(numGuess) {
//  case '0':
//    alert('Too low');

//  case '1':
//    alert('Correct!');
//    break;

//  case '2':
//    alert('Too high!');

//  default:
//    break;
// }




// // Question 8
// count correct answers
// while(the # of correct answers is increasing){

// }

// alert('You got' + numberCorrect + 'out of 7 questions correct, ' + name + '! Better luck next time.');