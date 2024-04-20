/****************************************
 * HW16
 ****************************************/

function init() {
  let sum = 0;
  return (number) => {
    return (sum += number);
  };
}

const sum = init();

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27

/****************************************
 * HW17
 ****************************************/

function product(a) {
  return (b) => {
    return a * b;
  };
}

const result = product(5)(2);

console.log(result);

/****************************************
 * HW18
 ****************************************/

function promptNumber() {
  let userInput;
  let iteration = 0;

  while (iteration < 10) {
    userInput = prompt("Будь ласка, введіть число більше 100:");

    if (userInput === null) {
      console.log("Ви скасували введення. Останнє введене число: " + userInput);
      break;
    }

    userInput = Number(userInput);

    if (userInput > 100) {
      console.log(
        "Ви ввели число більше 100. Останнє введене число: " + userInput,
      );
      break;
    } else {
      console.log("Ви ввели число менше 100.");
    }

    iteration++;
  }

  if (iteration === 10) {
    console.log(
      "Досягнуто максимальну кількість ітерацій. Останнє введене число: " +
        userInput,
    );
  }
}

promptNumber();
