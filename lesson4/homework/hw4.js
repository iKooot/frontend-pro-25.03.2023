/****************************************
 * hw5
 ****************************************/

const number = Number.parseInt(prompt("Enter yor number"));
let shouldCalc = true;

if (!number || (number > 999 || number <= 100)) {
  alert(
    "You entered wrong number, try to use correct number and less or equal 999. I need to reload the page",
  );
  shouldCalc = false;
}

if (shouldCalc) {
  const firstNumber = Number.parseInt(number / 100);
  const secondNumber = Number.parseInt((number % 100) / 10);
  const thirdNumber = number % 10;

  if (
    firstNumber === secondNumber &&
    secondNumber === thirdNumber &&
    firstNumber === thirdNumber
  ) {
    alert("All digits are the same");
  } else if (
    firstNumber === secondNumber ||
    secondNumber === thirdNumber ||
    firstNumber === thirdNumber
  ) {
    alert("Only tow digits are the same");
  } else {
    alert("All digits are different");
  }
}

/****************************************
 * hw6
 ****************************************/

let resultMessage = "";

const userYearOfBirth = prompt("Enter your year of birth.");

if (!userYearOfBirth) {
  alert("It is a pity that you did not want to enter year of birth.");
} else {
  resultMessage += `Your age: ${new Date().getFullYear() - userYearOfBirth}\n`;
  const userCity = prompt("Enter city where are you leave.");

  if (!userCity.toLowerCase()) {
    alert("It is a pity that you did not want to enter your city.");
  } else {
    switch (userCity) {
      case "kyiv":
        resultMessage += `You live in the capital of Ukraine\n`;
        break;
      case "washington":
        resultMessage += `You live in the capital of USA\n`;
        break;
      case "london":
        resultMessage += `You live in the capital of Great Britain\n`;
        break;
      default:
        resultMessage += `You live in the city ${userCity}\n`;
        break;
    }

    const userFavoriteSport = prompt("Enter yor favorite sport.");

    if (!userFavoriteSport) {
      alert("It is a pity that you did not want to enter your favorite sport.");
    } else {
      switch (userCity) {
        case "footbal":
          resultMessage += `Do you want to be like Cristiano Ronaldo?\n`;
          break;
        case "swimming":
          resultMessage += `Do you want to be like Jerry Mikulek?\n`;
          break;
        case "shooting":
          resultMessage += `Do you want to be like Caleb Dressel?\n`;
          break;
        default:
          resultMessage += `Yor favorite sport is ${userCity}`;
          break;
      }

      alert(resultMessage)
    }
  }
}

/****************************************
 * HW 7
 ****************************************/

let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log("ви скасували");
    break;
  case numOrStr.trim() === "":
    console.log("Empty String");
    break;
  case isNaN(+numOrStr):
    console.log(" number is Ba_NaN");
    break;
  default:
    console.log("OK!");
    break;
}

/****************************************
 * HW 8
 ****************************************/

const userName = prompt("Enter your name", "");

const message = "Hello, John! How are you?";
console.log(message.replace("John", userName));
