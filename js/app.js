'use strict';

var startGame = confirm('Do you want to learn all ABOUT ME?!');

if(startGame) {
  alert('Great, let\'s play!');
  console.log('They want to play a game.');
} else {
  alert('Ok see you later :(');
  console.log('They want don\'t want to play a game.');
}

var favColor = prompt('Do you think my favorite color is yellow?').toUpperCase();

if(favColor === 'YES') {
    alert('You are correct!! I like Yellow.');
    console.log('Correct about Yellow.');
  } else if (favColor === 'NO') {
    alert('WRONG! I like yellow.');
    console.log('Wrong about Yellow.');
  } else {
    alert('Please answer with yes or no! Use words people.');
    console.log('Didn\t use yes or no, on Yellow Question.');

  }

var favFood = prompt('Do you think my favorite food is sushi?').toUpperCase();

if(favFood === 'YES') {
  alert('You are correct!! I like sushi.');
  console.log('Right about Sushi.');
} else if (favFood === 'NO') {
  alert('WRONG! I like sushi.');
  console.log('Wrong about Sushi.');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\t use yes or no, on Sushi Question.');

}

var bananas = prompt('Do you think I like bananas?').toUpperCase();

if(bananas === 'YES') {
  alert('You are correct!! I like bananas.');
  console.log('Right about bananas.');
} else if (bananas === 'NO') {
  alert('WRONG! I like bananas.');
  console.log('Wrong about bananas.');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\t use yes or no, on Bananas Question.');

}

var coffee = prompt('Do you think I like coffee?').toUpperCase();

if(coffee === 'YES') {
  alert('You are correct!! I like coffee.');
  console.log('Right about coffee.');
} else if (coffee === 'NO') {
  alert('WRONG! I like coffee.');
  console.log('Wrong about coffee.');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\t use yes or no, on Coffee Question.');
}

var basketball = prompt('Do you think I like basketball?').toUpperCase();

if(basketball === 'YES') {
  alert('You are correct!! I like basketball.');
  console.log('Right I like basketball');
} else if (basketball === 'NO') {
  alert('WRONG! I like basketball.');
  console.log('Wrong like basketball');
} else {
  alert('Please answer with yes or no! Use words people.');
  console.log('Didn\t use yes or no, on basketball Question.');
}

