// function pow(x, n) {
//   // context x = 2, n = 1
//   if (n === 1) {
//     // false
//     return x; // база
//   } else {
//     // context x = 2, n = 1
//     return x * pow(x, n - 1); // крок
//   }
// }

// function pow2(x, n) {
//   let result = 1;
//
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
//
// const digit = pow(2, 200);
// console.log(digit);

/****************************************
 * practice 2
 ****************************************/

/*
Створити конструктор, для роботи з числом користувача "n" (за замовчуванням 6):

метод визначення суми натуральних чисел до “n” (1+2+...+n); // 21
метод визначення факторіалу з “n” (1*2*...*n); // 720
метод зведення числа “n” у ступінь “m” (2^2 = 2*2, 2^3 = 2*2*2, 2^4 = 2*2*2*2)
пошук "n" числа Фібоначчі * (0, 1, 1, 2, 3, 5, 8, 13, 21, 34) // 8

Умови
Число "n" більше або дорівнює нулю
Якщо користувач вводить менше нуля, віддавати ‘Error!’ на всіх методах
Число вводить користувач (за замовчуванням 6)
Усі методи (крім ступеня) можна викликати з будь-яким числом "n". Але за умовчанням, те, що вводив користувач при ініціалізації
 */

function NuberOperations(n = 6) {
    if ( n < 0 ) {
        console.error('Error!');
        return // undefined
    }

    this.n = n;
    this.sumOfNaruralNumbers = function() {
        let result = 0;
        for (let i = 0; i <= this.n; i++) {
            result += i;
        }

        return result
    }
    this.factorial = function() {
        let  result = 1;
        for (let i = 1; i <= this.n; i++) {
            result *= i;
        }

        return result
    }
    this.power = function(m) {
        let  result = this.n;
        for (let i = 1; i < m; i++) {
            result *= this.n;
        }

        return result
    }
    this.fibonacci = function() {
        if (this.n === 0) return 0;
        if (this.n === 1) return 1;
        // Find and resolve errors
        // correct fibonacci line is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

        // let a = 0, b = 1;

        // for (let i = 2; i <= this.n; i++) {
        //     let temp = b;
        //     b = a + b
        //     a = temp
        // }

        // return a
    }
}

const numbObj = new NuberOperations(5);
console.log('sum => ', numbObj.sumOfNaruralNumbers());
console.log('factorial => ', numbObj.factorial());
console.log('power => ', numbObj.power(2));
console.log('fibonacci => ', numbObj.fibonacci());
