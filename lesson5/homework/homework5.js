/****************************************
 * HW9
 ****************************************/

for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

/****************************************
 * HW10
 ****************************************/

const currency = prompt("Choose currency:\n\n1. Euro - €.\n2. Dollar - $");
const euroCourse = 41.99;
const dollarCourse = 39.34;
let result = "";

switch (currency && currency.toLowerCase()) {
  case "euro":
  case "€":
  case "1": {
    for (let i = 10; i <= 100; i += 10) {
      result += `${i}€ = ${Math.round(i * euroCourse)}₴;\n`;
    }
    alert(result);
    break;
  }
  case "dollar":
  case "$":
  case "2": {
    for (let i = 10; i <= 100; i += 10) {
      result += `${i}$ = ${Math.round(i * dollarCourse)}₴;\n`;
    }
    alert(result);
    break;
  }
  default: {
    alert("I dont recognize currency, enter valid currency like 1 or Euro");
  }
}

/****************************************
 * HW11
 ****************************************/

const digit = prompt("Enter your digit");

if (digit && Number.parseInt(digit)) {
  for (let i = 1; i <= 100 && Number.parseInt(digit) >= i ** 2; i++) {
    console.log(i);
  }
} else {
  alert("Please enter valid digit");
}

/****************************************
 * HW12
 ****************************************/
let shouldCheck = true;

do {
  const digit = prompt("Enter your digit");
  let isPrime = true;

  if (digit && Number.parseInt(digit)) {
    for (let i = 2; i <= Math.sqrt(Number.parseInt(digit)); i++) {
      if (digit % i === 0) {
        isPrime = false;
      }
    }
  } else {
    if (digit === null) break;

    alert("You enter invalid digit");
    continue;
  }

  alert(`Digit ${digit} is ${isPrime ? "prime" : "not prime"}`);

  shouldCheck = confirm("Do you want to check another digit?");
} while (shouldCheck);
