/****************************************
 * variables
 ****************************************/
// var let const

// var text = 'test';
// var a, b;
// let c, d; // if we will change data inside variable
// const e = '1'; // Priority
// const f = '2'; // Priority
//
// console.log(text);
// console.log(a);

/****************************************
 * var names
 ****************************************/

// const names = 'let, const, break, continue, for, function, case, switch, default, delete, return, try, true, false, null, new, if, else, while'
//
// const $example = '';
// const _example = '';
//
// const $ = 1;
// const _ = 2;
//
// console.log($);
// console.log(_);
//
// const a = 1;
// const A = 1;

// const didSome = '' // Bad
// const userAge = '' // Good
// const user = { age: 1, by: 2016 } // Bad

/****************************************
 * hosting
 ****************************************/


/****************************************
 * var
 ****************************************/

// console.log(example);

// var example = 'example';
//
// {
//     // console.log(example)
//     var example = 'example2'
//     // console.log(example)
// }
//
// console.log(example);

/****************************************
 * let
 ****************************************/

// console.log(a)
// let a = 1;
//
// {
//     let a = 2;
//     {
//         let a = 3;
//         console.log(a)
//     }
// }

// console.log(a)

/****************************************
 * const
 ****************************************/

// let a = 1;
//
// {
//     console.log(a)
//     a = 2;
// }
//
// console.log(a)
//
// const b = 1;
//
// {
//     console.log(b)
//     b = 2; // Error
// }
//
// console.log(b)
//
// const c = 3;
//
// {
//     // let c = 5;
//     const c = 5;
//     console.log(c)
// }
//
// function foo() {
//     console.log(c)
// }
//
// function bar() {
//     console.log(c)
// }

/****************************************
 * types
 ****************************************/

/****************************************
 * Primitives
 ****************************************/

// const string = 'string'; // String()
// const number = 1; // Number()
// const bigInt = 10n; // BigInt()
// const boolean = true; // Boolean()
// const nuLL = null;
// const undeFined = undefined;
// const symbol = Symbol(); // Symbol()
//
//
// /****************************************
//  * Reference type
//  ****************************************/
// const object = {};
// // 'string' => Sting('string') => toUpperCase() => 'STRING' => return value && remove Sting()
// const string2 = string.toUpperCase();
// console.log(string2)

/****************************************
 * typeof
 ****************************************/

// console.log(typeof 'string') // string
// console.log(typeof 1) // number
// console.log(typeof true) // boolean
// console.log(typeof 10n) // bigint
// console.log(typeof Symbol('id')) // symbol
// console.log(typeof Math) // object
// console.log(typeof {}) // object
// console.log(typeof []) // object
// console.log(typeof null) // object
// console.log(typeof prompt) // function
// console.log(typeof undefined) // undefined

/****************************************
 * Number
 ****************************************/

// const number1  = 1;
// const number2  = 1 / 0;
// const number3  = 'string' / 0;
// const number4  = NaN + 1;
// const number5  = 100_000_000;
// const number6  = 1e6;
// const number7  = 0xff;

// NaN - обчислювальна помилка

// console.log(number1)
// console.log(number2)
// console.log(number3)
// console.log(number4)
// console.log(number5)
// console.log(number6)
// console.log(number7)
//
// console.log(isNaN(number4))
// console.log(Number.isNaN(number4))

// console.log(Number('1'))
// console.log(parseInt('1'))
// console.log(parseInt('1.1'))
// console.log(parseFloat('1.1'))
// console.log(parseFloat('1.1asdfas'))
// console.log(Number.parseFloat('1.1asdfas'))
// console.log(Number.parseFloat('asdfas1.1'))

/****************************************
 * string
 ****************************************/

// const string1 = 'string'
// const string2 = "string"
// const string3 = `string`
// const string4 = `string ${(function() { return '4'})()}`
// const string5 = `string ${prompt('Enter')}`
//
// console.log(string1)
// console.log(string2)
// console.log(string3)
// console.log(string4)
// console.log(string5)

/****************************************
 * null
 ****************************************/

// const a = null;
//
// console.log(a)
// console.log(typeof a)

/****************************************
 * undefined
 ****************************************/

// const b = undefined;
//
// console.log(b)
// console.log(typeof b)

/****************************************
 * Boolean
 ****************************************/

// const bool1 = true;
// const bool2 = false;
//
// console.log(bool1)
// console.log(bool2)

/****************************************
 * Object
 ****************************************/

// const user = {
//     name: "Serhii",
//     age: 33,
//     hobbies: [1, 2, 3],
//     sayHello() {
//         console.log(this.name)
//     }
// }
//
// const user2 = {
//     name: "Serhii",
//     age: 33,
//     hobbies: [1, 2, 3],
//     sayHello() {
//         console.log(this.name)
//     }
// }
//
// console.log(user == user2)
// console.log(user === user2)

/****************************************
 * + - !
 ****************************************/

// const string = '1'
//
// console.log(typeof Number(string))
// console.log(typeof Number.parseInt(string))
// console.log(typeof +string)

// const message1 = +prompt('Enter number', 0)
// const message2 = Number(prompt('Enter number', 0))
// console.log(typeof message1)
// console.log(typeof message2)

// let number = 10
// number++
// console.log(-number)

// let boolean = true
//
// console.log(boolean)
// console.log(!boolean)
// console.log(!'')
// console.log(!'a')

/****************************************
 * convert type
 ****************************************/

/*

Number()
Boolean()
String()
+

 */

// const some = 1 + '1'
//
// console.log(some)

// console.log(Boolean(1))
// console.log(Boolean(0))
// console.log(Boolean(-1))

/****************************************
 * String
 ****************************************/

// const string = 'Hello world! I am Serhii.'

// console.log(string[0])
// console.log(string[1])
// console.log(string[2])

// console.log(string.at(-1)); // e
// console.log(string[-1]); // undefined

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// console.log(string);

// console.log(string.trim());

// console.log(string.includes('E', 1)); // false
// console.log(string.substring(1, 2)); // x
// console.log(string.split('! '));



