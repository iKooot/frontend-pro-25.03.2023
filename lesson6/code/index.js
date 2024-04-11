/****************************************
 * function
 ****************************************/

// const user = { name: 'Serhii' };
//
// function foo(obj) {
//     obj.age = 33;
// }
//
// function bar(obj) {
//     const newObj = { ...obj }
//
//     newObj.age = 33;
//
//     return newObj;
// }
//
// foo(user);
//
// console.log(user)

// function foo() {
//     var a = 'example';
//     console.log('outside', a)
//
//     function bar() {
//         console.log('inner', a)
//     }
//
//     bar()
// }
//
// foo()
// console.log(a)

// let a = 'Example';
//
// function foo() {
//     let a = 2;
//     a = 1;
//     console.log('inside foo', a)
// }
//
// foo();
// console.log(a);

// let digit = 1;
//
// function foo(digit) {
//     digit = 2;
//     console.log(digit)
// }
//
// foo(digit)
// console.log(digit)

// let array = [1, 2];
//
// function foo(array) {
//     array[0] = 2;
//     array = 2; // Horrible
//     console.log(array);
// }
//
// foo(array);
// console.log(array);

/****************************************
 * Function declaration statement
 ****************************************/

// console.log(foo());
//
// function foo() {
//     console.log(this);
//     return 'foo';
// }

/****************************************
 * Function definition expression
 ****************************************/

// const foo = function() {
//     console.log(this);
//     return 'foo';
// }
//
// console.log(foo());
//
// const foo = function bar() {
//     console.log(bar);
//     console.log(this);
//     return 'foo';
// }
//
// console.log(foo());

/****************************************
 * args
 ****************************************/

// function sum(a = 0, b = 0) {
//     return a + b
// }
//
// console.log(sum(1))
// console.log(sum(1, 2))
// console.log(sum(3, 5))

/****************************************
 * return
 ****************************************/

// function sum(a, b) {
//     if (!a) return 'i dont have a';
//     if (!b) return 'i dont have b';
//     //...
//     return a + b;
// }

// function sum(a, b) {
//     switch (true) {
//         case !a: return 'i dont have a';
//         case !b: return 'i dont have a';
//         default: return a + b;
//     }
// }
//
// console.log(sum())
// console.log(sum(1))
// console.log(sum(1, 2))

// function sum(a, b) {
//     return // undefined dont do it
//     a + b;
// }
//
// console.log(sum(1, 2));

/****************************************
 * arguments
 ****************************************/

// function foo(a, b, c) {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
//
//     // arguments.push('1') // Error
// }
//
// foo(1, 2)

/****************************************
 * Array
 ****************************************/

// console.log(typeof []);
// console.log(Array.isArray([]));

// const arr = Array(5).fill('');
// const arr = [];

// arr.example = 5;
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(typeof arr[i])
// }

// arr[100] = 5;

// console.log(arr)

// console.log(0 == arr);
// console.log('0' == arr);

// const arr = [
//     1,
//     2,
//     3,
// ];

// arr.length = 0

// console.log(arr[0])
// console.log(arr.at(0))
//
// console.log(arr[-1]) // undefined
// console.log(arr[arr.length - 1])
// console.log(arr.at(-1))

// arr[3] = 4;
//
// console.log(arr)

// const arr = [];
//
// for (let i = 0; i < 5; i++) {
//     arr[arr.length] = i
// }
//
// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (const el of arr) {
//     console.log(el);
// }

/****************************************
 * methods
 ****************************************/

// const arr = [0];

// arr.push(1, 2, 3);
// const el = arr.pop();

// console.log(arr);
// console.log(el);

// const example = arr.forEach((el, i, arr) => {
//     if (el === 1) return 123
//     console.log('element => ', el)
//     console.log('index => ', i)
//     console.log('array => ', arr)
// })
//
// console.log(example);

// const newArray = arr.map((el, i, arr) => {
//     console.log('element => ', el)
//     console.log('index => ', i)
//     console.log('array => ', arr)
//     return el * 2
// })
//
// console.log(newArray);
// console.log(newArray === arr);

// const arr = ['string', 1, 2];
//
// const total = arr.reduce((acc, el, i, arr) => {
//     if (typeof el === 'number') acc += el
//
//     return acc
// }, 0);
//
// console.log(total);

// const arr = ['string', 1, 2];
//
// arr.splice(0, 0, 0, '11', '123');
//
// console.log(arr);








