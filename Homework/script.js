const number = +prompt("Введите число")

if(number === 0){
    console.log("Число равно нулю");
  }else if(number % 2 == 0){
    console.log("Число чётное");
  }else if(number % 2 !== 0) {
    console.log("Число не чётное");
  }
  const userInput = prompt("Введите значение:");
  if (!isNaN(Number(userInput))) {
      alert("Это значение можно преобразовать в число.");
  } else {
      alert("Это значение преобразовать в число не получится. Получится NaN.");
  }