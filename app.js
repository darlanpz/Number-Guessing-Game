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