function guessNumberGame(numbersAmount) {
  let maxNumber = numbersAmount;
  let secretNumber = parseInt(Math.random() * maxNumber + 1);
  let chosenNumber;
  let tries = 1;
  let triesWord = tries > 1 ? 'tentativas' : 'tentativa';

  while (chosenNumber != secretNumber) {
    chosenNumber = prompt(`Escolha um número entre 1 e ${maxNumber}`);
    if (chosenNumber == secretNumber || chosenNumber == null) {
      break;
    } else {
      if (chosenNumber > maxNumber || chosenNumber < 1) {
        alert(`🔴 O número precisa estar entre 1 e ${maxNumber}`);
      } else if (chosenNumber > secretNumber) {
        alert(`🔵 O número secreto é menor que ${chosenNumber}`);
      } else {
        alert(`🔵 O número secreto é maior que ${chosenNumber}`);
      }
    }
    tries ++;
  }

  if (chosenNumber == secretNumber) {
    alert(`🟢 Parabéns! Você descobriu o número secreto, ${secretNumber}! Com ${tries} ${triesWord}.`);
  }
}

const title = document.querySelector('#title');
const paragraph = document.querySelector('#paragraph');
const label = document.querySelector('#label');
const chosenNumber = document.querySelector('#chosenNumber');
const guessBtn = document.querySelector('#guessBtn');
const restartBtn = document.querySelector('#restartBtn');
const message = document.querySelector('#message');

title.innerHTML = 'Advinhe o número';
paragraph.innerHTML = 'Este é um jogo de advinhação, tente acertar o número secreto com o menor número de tentativas possível.';
label.innerHTML = 'Escolha um número entre 1 e 100.';
guessBtn.innerHTML = 'chutar';
restartBtn.innerHTML = 'recomeçar';
message.innerHTML = 'Parabéns! Você descobriu o número secreto!';

message.classList.add('success');