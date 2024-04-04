{
    // userName TDZ starts here at the beginning of the block local scope
    // userName TDZ continues here
    // console.log(userName) // Reference error here userName TDZ continues here
    let userName = "Sergey"; // userName TDZ ends
    // userName TDZ does not exist
}

/****************************************
 * String
 ****************************************/

// const a = 1
// const b = true
// const c = { key: 'value', hobbies: [{name: 'coding', id: 1}] }
//
// console.log(typeof a.toString())
// console.log(typeof String(a))
//
// console.log(b.toString())
// console.log(String(b))
//
// console.log(c.toString())
// console.log(String(c))
// console.log(JSON.stringify(c)) // return JSON string
// console.log(JSON.parse(JSON.stringify(c))) // return Object
//
// console.log(c === JSON.parse(JSON.stringify(c))) // false
//
// const string = "Hello world!"
// const transformedString = string.replace("world", "World") // returned new string
//
// console.log(transformedString)

/****************************************
 * Number
 ****************************************/

// console.log(Number(true))
// console.log(Number(false))

/****************************************
 * Math
 ****************************************/

// const result = (1 + 2) * 2;
// console.log(result)

// console.log(10 % 2)
// console.log(12345 % 10)
// console.log(12345 / 10)
// console.log(12345 % 100)
// console.log(12345 / 100)

// let number = 1;
// // number = number + 1;
// number += 1;
// number -= 1;
// number *= 1;
// number /= 1;
//
// console.log(number);

// let a = 0;

// console.log(a++)
// console.log(++a)
// console.log(a--)
// console.log(--a)

// console.log(5 % 2) // 1
// console.log(6 % 2) // 0

/****************************************
 * Boolean
 ****************************************/

// console.log(Boolean(0))
// console.log(Boolean(1))

// falsy values

// const a = false;
// const b = '';
// const c = null;
// const d = 0;
// const e = undefined;
// const f = NaN;
//
// console.log(Boolean(a))
// console.log(Boolean(b))
// console.log(Boolean(c))
// console.log(Boolean(d))
// console.log(Boolean(e))
// console.log(Boolean(f))
//
// // truthy values
//
// const true1 = true;
// const true2 = {};
// const true3 = { key: ''};
// const true4 = ' ';
// const true5 = [];
// const true6 = [1];
//
// console.log(Boolean(true1))
// console.log(Boolean(true2))
// console.log(Boolean(true3))
// console.log(Boolean(true4))
// console.log(Boolean(true5))
// console.log(Boolean(true6))

/****************************************
 * == | ===
 ****************************************/

// const a = 5;
// const b = '5';
//
// const a1 = 0;
// const b1 = false;
//
// const b2 = null;
//
// console.log('number', a == b);
// console.log('number', a === b);
// console.log('boolean', a1 == b1);
// console.log('boolean', a1 === b1);
//
// console.log(Number(b2));
// console.log(parseInt(b2));
//
// console.log(a1 == b2); // Exception return false
// console.log(a1 === b2); // return false

/****************************************
 * Logic
 ****************************************/

// console.log( 1 && true )
// console.log( 0 && true )
// console.log( 1 && 2 && 3 )
// console.log( 1 && false && 1 )
// console.log( true && 0 )

// console.log( 0 || 5) // 5
// console.log( 0 || null || true) // true
// console.log( 0 || 5 || 0 || 1 ) // 5
// console.log( (0 || 5) || (0 || 1) ) // 5
// console.log( (0 || 5) && (0 || 1) ) // 1

// console.log(!true) // false
// console.log(!false) // true

// const a = null;
// const a = undefined;
// const b = 'Example';

// console.log(a ?? b); // return Example

/****************************************
 * if else
 ****************************************/

// const color = prompt('Enter color');
//
// if (color === 'red') {
//     alert(`stop`);
// } else if (color === 'yellow') {
//     alert(`warn`);
// } else {
//     alert('go!');
// }

/****************************************
 * ? :
 ****************************************/

// const color = prompt('Enter color');
//
// color === 'red'
//     ? alert('stop')
//     : color === 'yellow'
//         ? alert('warn')
//         : alert('go')

// const color = confirm('Do you want get color?') ? 'red' : null;
// const color = prompt('Do you want get color?') || 'red';
// console.log(color);

/****************************************
 * switch case
 ****************************************/

// const color = prompt('Enter color');
//
// switch (color) {
//     case 'blue':
//     case 'white':
//     case 'black': alert('something strange'); break;
//     case 'red': alert('STOP'); break;
//     case 'yellow': {
//         alert('WARN');
//         break;
//     }
//     case 'green': {
//         alert('GO');
//         break;
//     }
//     default: {
//         console.log('Ups something went wrong');
//         break;
//     }
// }


/****************************************
 * empty obj
 ****************************************/

// const arr = [];
//
// if (arr.length > 0) {
//     console.log('not empty');
// }
//
// if (!arr.length) {
//     console.log('not empty');
// }
//
// const obj = { key: 'value'};
// console.log(Object.keys(obj).length);
// console.log(JSON.stringify(obj).length > 2);

