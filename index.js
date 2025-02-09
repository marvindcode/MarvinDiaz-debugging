const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const wrongEntry = document.getElementById('wrong-entry')
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Fixed bug tenth Redifinding function hideAllMessages
//Fixed bug ninth per instructions, need to define function
//Fixed seventh bug the sign [] dosen't apply with elementIndex
//Fixed sixth bug element index
//Fixed fifth bug function not defined
function hideAllMessages() {
  for (let i=0; i < messages.length; i++) {
    messages[i].style.display = 'none';
  } 
}

//Fixed bug 11th to repositioninh function after calling hideAllMessages
function checkGuess() {
  hideAllMessages();
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  //Fixed bug 12th, could be writed as short form attempts += 1
  attempts += 1;
  //Fixed bug 13th to define range of numbers, created message
  if (guess < 1 || guess > 99) {
    wrongEntry.style.display = '';
    return;
  }

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }
// Fixed eight bug,tooLowMessage repited, should be tooHighMessage
  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      tooHighMessage.style.display = '';
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;

  //Fixed first bug, too many equal signs
  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
    resetButton.style.display = '';
    }
  }  

  guessInput.value = '';
}
  
//Fixed second bug word function misspelled 
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

//Fixed third bug, number of attempts should be 5 or less
  // Reset number of attempts
  attempts = 0;

//Fixed fourth bug changed disabeld to disabled on sub button
  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
