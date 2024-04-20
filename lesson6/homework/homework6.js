/****************************************
 * HW13
 ****************************************/

// const message = prompt('Enter yor string');
// const chars = prompt('Enter some chars for removing');
//
// function foo(string, arr) {
//     let newString = '';
//     for (let i = 0; i < string.length; i++) {
//         if (arr.includes(string[i])) continue;
//         newString += string[i]
//     }
//     return newString
// }
//
// const result = foo(message, chars.split(''));
//
// alert(result);

/****************************************
 * HW14
 ****************************************/

// const array = [{}, 1, 2, 3, 4, 5, 6, "string", null];
//
// function foo(array) {
//   const { total, count } = array.reduce(
//     (acc, el) => {
//       if (typeof el === "number") {
//         acc.total += el;
//         acc.count += 1;
//       }
//
//       return acc;
//     },
//     { total: 0, count: 0 },
//   );
//   return total / count;
// }
//
// const result = foo(array);
//
// console.log(result);

/****************************************
 * HW15
 ****************************************/

const array = [1, 3, 4, 6, 2, 5, 7];

// function removeElement(array, item) {
//     return array.filter((el) => el === item)
// }

function removeElement(array, item) {
    const index = array.indexOf(item)
    if (index >= 0) array.splice(index, 1)
}

removeElement(array,4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
