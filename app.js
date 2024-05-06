function changeText(element, content) {
  const HtmlElement = document.querySelector(element);
  HtmlElement.innerHTML = content;
}

function setMessage(priority, text) {
  const HtmlElement =  document.querySelector('#message');

  if (HtmlElement.classList.length = 2) {
    HtmlElement.classList.remove(HtmlElement.classList[1]);
  }
  
  HtmlElement.innerHTML = text;
  HtmlElement.classList.add(priority);
}

function removeMessage() {
  const HtmlElement =  document.querySelector('#message');

  if (HtmlElement.classList.length = 2) {
    HtmlElement.classList.remove(HtmlElement.classList[1]);
  }

  HtmlElement.innerHTML = '';
}

function getRandonNumber() {
  return parseInt(Math.random() * 100 + 1);
}

let secretNumber = getRandonNumber();
let tries = 0;
let triesWord = tries > 1 ? 'tentativa' : 'tentativas';

changeText('#title', 'Advinhe o número');
changeText('#paragraph', 'Este é um jogo de advinhação, tente acertar o número secreto com o menor número de tentativas possível.');
changeText('#label', 'Escolha um número entre 1 e 100.');
changeText('#guessBtn', 'chutar');
changeText('#restartBtn', 'recomeçar');

function checkGuess() {

  const chosenNumber = document.querySelector('#chosenNumber').value;

  tries ++;

  if (chosenNumber) {

    if (chosenNumber == secretNumber) { 

      setMessage('success', `Parabéns! Você descobriu o número secreto com ${tries} ${triesWord}.`);

      document.querySelector('#guessBtn').setAttribute('disabled', 'disabled');

    } else if (chosenNumber > secretNumber) {

      setMessage('info', `O número secreto é menor que ${chosenNumber}.`);
    } else {

      setMessage('info', `O número secreto é maior que ${chosenNumber}.`);
    }
  } else {

    setMessage('error', 'O número não pode ser vazio.');
  }

}

function cleanInput() {
  secretNumber = getRandonNumber();

  tries = 0;

  const inputField = document.querySelector('#chosenNumber');

  inputField.value = '';

  document.querySelector('#guessBtn').removeAttribute('disabled', 'disabled');
  removeMessage();
}