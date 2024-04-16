'strict mode';
let random = Math.floor(Math.random() * 20 + 1);
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}




document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no input
  if (!guess) {
    displayMessage('⛔ No number');
  }
  // Player wins
  else if (guess == random) {

    displayMessage('🏆 Correct Number');
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width ='30rem';
    document.querySelector('.number').textContent = random;

  }
  // when guess is differen
  else if (guess !== random) {
    if (score > 1) {
      displayMessage(guess > random ? '📈Too high' : '📉Too low')

      score = score - 1;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMessage('💥You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess to high
  // else if (guess > random) {

  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too high!'
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else {
  //     document.querySelector('.message').textContent = '💥You lost the game !';
  //     document.querySelector('.score').textContent = 0;
  //   }



  // }
  // //when guess to low
  // else if (guess < random) {

  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low!'
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else {
  //     document.querySelector('.message').textContent = '💥You lost the game !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

})
// setting Again functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = "";
  random = Math.floor(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

})