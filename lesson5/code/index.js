// while (true) {
//     console.log('Infinity')
// }

/****************************************
 * while
 ****************************************/

// let i = 0;
//
// console.log('before');
//
// while (i < 10) {
//     console.log(i)
//     i++
//     // checking condition
// }
//
// console.log('after');

// let start = false;
// let i = 0;
//
// do {
//     start = confirm('Do you want do calc?');
//     console.log(i);
//     i++;
// } while (start);

/****************************************
 * for
 ****************************************/

// let i = 0;
//
// for (;i < 10;) {
//     console.log(i);
//     i++
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i += 0.5) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i += 0.5) {
//     console.log(i);
// }

// console.log(i) // if variable is not var => Error

// for (let i = 0, j = 10; i < 10 && j > 5 ; i++, j--) {
//     console.log(i, j);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log('Inside if', i)
//         continue;
//     }
//     console.log('after if ===========>', i)
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log('Inside if', i)
//         break;
//     }
//     console.log('after if ===========>', i)
// }

// let i = 0;
//
// while (true) {
//     console.log(i)
//     if (i === 10) break;
//     i++
// }
//
// console.log(i)

/****************************************
 * identifiers
 ****************************************/

// const users = [ { hobbies: [  ] } ]

// let j = 1
//
// outer: for (let i = 1; i <= 10; i++) {
//     console.log('outer for', i);
//
//     for (;j <= 10; j++) {
//         console.log('inner for ===>', j * i);
//         if (j % 2 === 0) break outer;
//     }
// }

/****************************************
 * for of
 ****************************************/

// const string = 'string';
// const array = [1, 2, 3, 4, 5]

// for (const stringElement of string) {
//     console.log(stringElement)
// }
//
// for (const arrayElement of array) {
//     console.log(arrayElement)
// }
//
// for (let i = 0; i < string.length; i++) {
//     console.log(string[i])
// }

/****************************************
 * for in
 ***************************************/

// const obj = { key: 'value' };
//
// for (const key in obj) {
//     console.log(obj[key]);
// }

