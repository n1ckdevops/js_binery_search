const binaryGame = function () {
  const guessNumber = Math.round(Math.random() * 100) + 1;
  console.log(guessNumber);
  const playGame = function () {
    userInput = prompt("Угадай число от 1 до 100");

    // 1 проверка на отмену
    if (userInput === null) {
      alert("Сворачивайся, игра завершена... Не ту кнопку нажал, братец.");
      return;
    }

    const guess = parseInt(userInput);

    if (isNaN(guess)) {
      alert("Введи число, сказали же!");
      playGame();
      return;
    }

    if (userInput > guessNumber) {
      alert("Загаданное число меньше");
      playGame();
    } else if (userInput < guessNumber) {
      alert("Загаданное число больше");
      playGame();
    } else {
      alert("Вы угадали!!!");
    }
  };
  playGame();
};

binaryGame();
