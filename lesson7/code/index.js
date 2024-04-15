/****************************************
 * callback
 ****************************************/

// const array = [1, 2, 3, 4, 5];

// const newArray = array.map((el, i, array) => {
//     return el * 2
// });
//
// console.log(newArray);

// function mapForEach(arr, cb) {
//     const newArray = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         newArray[i] = cb(arr[i]);
//     }
//
//     return newArray;
// }

// const newArray = mapForEach(array, function(el) {
//     return el * 2
// });
//
// console.log(newArray);

/****************************************
 * IIFE
 ****************************************/

// (function foo() {
//     console.log('foo');
// })()

// (функція без ії виклику)(аргументи)

// (function foo(message) {
//     console.log(message);
// })('Hello world!')
//
// const message = (function (a, b) {
//   return a + b;
// })(1, 1);
//
// console.log(message);
//
// function sum(a, b) {
//   return a + b;
// }
//
// const message2 = (sum)(1, 1);
//
// console.log(message2);

/****************************************
 * nestedness
 ****************************************/
// // outer => null
// // a() => function
// // x = uninitialized
// // console => window
// let x; // global scope => x = undefined
// x = 5; // x = 5
// x = 10; // x = 10
// function a() {
//     // y = uninitialized
//     // x = 10
//     // b() => function
//     let y = 5; // y = 5
//     // y = 5
//     // x = 10
//     // b() => function
//     function b() {
//         // y = 5
//         // x = 10
//         // z = uninitialized
//         let z = 1; // z = 1
//         // y = 5
//         // x = 10
//         // z = 1
//         console.log(x + y + z); // 5 + 10 + 1
//     }
//     // y = uninitialized
//     // x = 10
//     // b() => function
//     b();
// }
//
// a() // 16

/****************************************
 * carrying
 ****************************************/
// foo(1, 2, 3, 4)
// foo(1)(2)(3)(4)

// function sum(a, b) {
//    return a + b
// }
//
// console.log(sum(1, 1))

// function sum2(a) {
//     return function(b) {
//         return a + b
//     }
// }
//
// console.log(sum2(1)(2))

// function mult(a) {
//   return function (b) {
//     return b * a;
//   };
// }

// const doble = mult(2); // 2
// const tripple = mult(3); // 3
//
// console.log(doble(5)); // 10
// console.log(tripple(5)); // 15

/****************************************
 * closer
 ****************************************/

// function foo() {
//     const a = 'example';
//
//     return function() {
//         console.log(a)
//     }
// }
//
// const example = foo();
//
// example();

// function counter(initialValue) {
//     let count = initialValue ?? 1;
//
//     return function() {
//         count += 1
//         return count;
//     }
// }
//
// const conter1 = counter();
//
// const second = conter1();
// console.log(second);
//
// const conter2 = counter(5);
//
// conter2();
// conter2();
// conter2();
// conter2();
// conter2();
// const second2 = conter2();
// console.log(second2);

/****************************************
 * Array 2
 ****************************************/
// const arr1 = [1, 2];
// const arr2 = [3, 4];
//
// const newArr = arr1.concat(arr2, [5]);
// console.log(newArr);

// const obj1 = {
//     0: 1,
//     1: 2,
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// }
//
// const obj2 = {
//     0: 3,
//     1: 4,
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// }
//
// const newArray = ['Start'].concat(obj1, obj2, 'string', null, undefined);
// console.log(newArray);
// console.log(newArray[7]);

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.indexOf(4, 4));
// console.log(arr.indexOf(4));
// console.log(
//   arr.find((el, i, arr) => {
//     return el === 10;
//   }),
// );
// console.log(
//   arr.find((el, i, arr) => {
//     return el === 4;
//   }),
// );

// console.log(arr.includes(4));
// console.log(arr.includes(4, 5));
// console.log(arr.includes(10));

// const arr = ["A", "b", "a", "f", "some"];
// const arr = [1, 7, 3, 5, 4, 6, 2];
//
// arr.sort((a, b) => {
//     // return a.localeCompare(b)
//     // return ~a.localeCompare(b)
//     // return a > b ? -1 : 0
//     if (a > b) return 1
//     if (a < b) return -1
//     return 0
// })
//
// console.log(arr)

// const array = [1, 2, 3, 4, 5];
//
// console.log([...array].reverse());
// console.log(array);

// console.log('string ! string2'.split('!'))
// console.log(['s', 't', 'r'].join('0_0'))

// const arr = [1, 2, 3, 4, 5];
// const arr = [2, 4];

// const even = arr.some((el) => {
//     return el % 2 === 0
// });

// const even = arr.every((el) => {
//     return el % 2 === 0
// });
//
// console.log(even)

/****************************************
 * logger
 ****************************************/

// const log = console.log;
//
// function infoLogger(...args) {
//     return log('==>', ...args, '<==')
// }
//
// console.log = infoLogger;
//
// console.log('Hello world');

/****************************************
 * infinity carrying
 ****************************************/

function sum(a) {
    // створюємо лічильник
    let currentSum = a;
    // створюємо функцію додавання
    function add(b) {
        currentSum += b;
        // вона мусить повернути сама себе
        return add;
    }
    // Створюємо функцію вивода результату
    add.print = function() {
        return currentSum;
    };
    // Повертаємо функцію додавання
    return add;
}

const total = sum(1)(1)(1)(1).print();
console.log(total)


