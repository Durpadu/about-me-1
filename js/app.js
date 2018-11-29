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


// Question 6

alert('Can you guess my favorite number?');

var counter = 0;

while (counter < 5) {
  var answer = prompt('What’s your guess?');

  if ( answer === 3) {
  alert ('Right answer');
  ++counterCorrect
  break;
  }

  else if (answer > 3){
    alert('your number is too high');
    ++counter
  }
  
  else if (answer < 3){
   alert('your number is too low');
   ++counter
 }


alert('Oh man, 4 tries is up, the answer is was 3!');



// Question 7

alert('Can you guess the states I\'ve lived in?');

var states = ['Oregon', 'Washington', 'Missouri']
states = states.toUpperCase();

var answer = prompt('What is your guess?');
answer = answer.toUpperCase();

for ( i=1 ; i<7 ; i++ ); {

  if (answer === states[i]) {
    alert ('you got it right');
    ++counterCorrect
    break;
    }

  else {
    alert('wrong answer');
    i++
  }
}

  alert('6 tries is up, the answer is ...');

  alert('You got ' + counterCorrect + ' out of 7 questions,' + name );
  
}

// if (cityWouldLive.includes(cityGuessed)) {
//   ... 
// }