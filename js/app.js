'use strict';

var counterCorrect = 0;

function startFunc() {
  var startGame = confirm('Do you want to learn all ABOUT ME?!');

  if(startGame) {
    alert('Great, let\'s play!');
    console.log('They want to play a game.');
  } else {
    alert('Ok see you later :(');
    console.log('They want don\'t want to play a game.');
  }
}

var name = prompt('What is your name?');
console.log('user entered' + name);

// Question 1

function colorFunc() {
  var favColor = prompt('Do you think my favorite color is yellow?').toUpperCase();

  if(favColor === 'YES') {
    alert('You are correct!! I like Yellow.');
    console.log('Correct about Yellow.');
    counterCorrect++;
    console.log('yellow: ' + counterCorrect);
  } else if (favColor === 'NO') {
    alert('WRONG! I like yellow.');
    console.log('Wrong about Yellow.');
  } else {
    alert('Please answer with yes or no! Use words people.');
    console.log('Didn\'t use yes or no, on Yellow Question.');
  }
}

// // Question 2

function foodFunc() {
  var favFood = prompt('Do you think my favorite food is sushi?').toUpperCase();

  if(favFood === 'YES') {
    alert('You are correct!! I like sushi.');
    console.log('Right about Sushi.');
    counterCorrect++;
    console.log('sushi: ' + counterCorrect);
  } else if (favFood === 'NO') {
    alert('WRONG! I like sushi.');
    console.log('Wrong about Sushi.');
  } else {
    alert('Please answer with yes or no! Use words people.');
    console.log('Didn\'t use yes or no, on Sushi Question.');
  }
}

// // Question 3

function bananasFunc() {
  var bananas = prompt('Do you think I like bananas?').toUpperCase();

  if(bananas === 'YES') {
    alert('You are correct!! I like bananas.');
    console.log('Right about bananas.');
    counterCorrect++;
    console.log('bananas: ' + counterCorrect);
  } else if (bananas === 'NO') {
    alert('WRONG! I like bananas.');
    console.log('Wrong about bananas.');
  } else {
    alert('Please answer with yes or no! Use words people.');
    console.log('Didn\'t use yes or no, on Bananas Question.');
  }

}

// Question 4

function coffeeFunc() {
  var coffee = prompt('Do you think I like coffee?').toUpperCase();

  if(coffee === 'YES') {
    alert('You are correct!! I like coffee.');
    console.log('Right about coffee.');
    counterCorrect++;
    console.log('coffee: ' + counterCorrect);
  } else if (coffee === 'NO') {
    alert('WRONG! I like coffee.');
    console.log('Wrong about coffee.');
  } else {
    alert('Please answer with yes or no! Use words people.');
    console.log('Didn\'t use yes or no, on Coffee Question.');
  }
}

// Question 5

function ballFunc() {
  var basketball = prompt('Do you think I like basketball?').toUpperCase();

  if(basketball === 'YES') {
    alert('You are correct!! I like basketball.');
    console.log('Right I like basketball');
    counterCorrect++;
    console.log('basketball: ' + counterCorrect);
  } else if (basketball === 'NO') {
    alert('WRONG! I like basketball.');
    console.log('Wrong like basketball');
  } else {
    alert('Please answer with yes or no! Use words people.');
    console.log('Didn\'t use yes or no, on Basketball Question.');
  }
}

// Question 6

function numFunc() {
  alert('Can you guess my favorite number?');
  var counter = 0;

  while (counter < 5) {
    var answer = prompt('What\'s your guess?');
    answer = parseInt(answer);

    if (answer === 3) {
      alert ('Right answer');
      counterCorrect++;
      console.log('favorite number' + counterCorrect);
      break;
    }

    else if (answer > 3) {
      alert ('your number is too high');
      counter++;
      console.log(counter);
    }

    else if (answer < 3){
      alert('your number is too low');
      counter++;
      console.log(counter);
    }

    if (counter === 5) {
      alert('Oh man, 4 tries is up, the answer is was 3!');
    }
  }
}


// Question 7

function stateFunc() {
  alert('Can you guess the states I\'ve lived in?');

  var states = ['oregon', 'washington', 'missouri', 'kansas'];
  var counterB = 0;
  do {
    var answerB = prompt('What is your guess?');
    answerB = answerB.toLowerCase();

    if (states.includes(answerB)) {
      alert ('You got it right');
      counterCorrect++;
      console.log('states' + counterCorrect);
      break;
    }

    if ( !states.includes(answerB)) {
      alert('wrong answer');
      counterB++;
      console.log(counterB);
    } 
    if (counterB === 5) {
      alert('5 tries is up, the answer is ...');
    }
  } while (counterB < 6 );
}

function userRightFunc() {
  alert( name + ' you got ' + counterCorrect + ' out of 7!');
}

startFunc();

colorFunc();

foodFunc();

bananasFunc();

coffeeFunc();

ballFunc();

numFunc();

stateFunc();

userRightFunc();
