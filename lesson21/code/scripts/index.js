// const [ first, second,  ...rest] = [1, 2, 3];
// console.log(second)
// console.log(rest)

// const { name: firstName, hobbies: [ firstHobbie], ...rest } =  { name: 'Serhii', job: 'dev', hobbies: [ 'shooting', 'coding' ] };
//
// console.log(firstName)
// console.log(firstHobbie)
// console.log(rest)
// console.log(name)
// console.log(rest)
//
// const newObj = { ...rest }
//
// console.log(newObj)
// console.log(newObj === rest)
//
//
// function foo(a, b, c) {
//     console.log(arguments)
//     return a + b + c
// }
//
// console.log(foo(...[1, 'hello', 2, 3, 4]))

// console.log([1, 2, ...[3, 4, ...[5, 6]]])

// function foo(a = null) {}

/****************************************
 * modules
 ****************************************/

// import utils, { sum } from './utils.js';
//
// const digit = 1 + 2;
//
// utils(sum(digit, 3));

/****************************************
 * Map
 ****************************************/

// const myMap = new Map();
// const key = { key: "key" };
// const value = { value: "value" };
//
// myMap.set(key, value);
// myMap.set(null, []);
//
// console.log(myMap.size);
// console.log(myMap.get(key));
// console.log(myMap.has(key));
// console.log(myMap.delete(key));
// console.log(myMap.size);
// myMap.clear();
// console.log(myMap.size);
//
// myMap
//   .set(key, value)
//   .set(key, { ...value, example: "1" })
//   .set(1, value)
//   .set(1, "value")
//   .set("1", value)
//   .set(true, value)
//   .set(null, value)
//   .set(null, value);
//
// console.log(myMap);
// console.log(myMap.size);

/****************************************
 *
 ****************************************/

// console.log(myMap.keys())
// console.log(myMap.values())
// console.log(myMap.entries())

// for (const key of myMap.keys()) {
//     console.log(key)
// }
//
// for (const value of myMap.values()) {
//     console.log(value)
// }
//
// for (const [ key, value ] of myMap.entries()) {
//     console.log(key, value)
// }
//
// myMap.forEach( (value, key, map) => {
//     console.log(value, key)
// })

/****************************************
 *
 ****************************************/

// const myMap = new Map([[{ key: 'key', value: 'value'}, { key: 'key', value: 'value'}], [1, 'value'], [null, 'value']]);
//
// console.log(myMap.entries())
// console.log(Object.fromEntries(myMap.entries()))

/****************************************
 * set
 ****************************************/

// const mySet = new Set();
//
// const obj = {};
//
// mySet
//   .add("string")
//   .add("string")
//   .add("1")
//   .add("1")
//   .add("1")
//   .add(1)
//   .add(1)
//   .add(1)
//   .add(1)
//   .add(null)
//   .add(null)
//   .add(null)
//   .add(obj)
//   .add(obj);
//
// console.log(mySet);
// console.log(mySet.has(obj));
// console.log(mySet.size);
// mySet.clear();
// console.log(mySet.size);
//
// const arr = [1, 1, 1, 1, 2, 3, 4, 5];
//
// const newArr = arr.reduce((acc, el) => {
//     if (!acc.includes(el)) acc.push(el)
//     return acc
// }, [])
//
// console.log(newArr)
//
// const newArr2 = new Set(arr);
//
// console.log(Array.from(newArr2))

// let obj = { key: 'value' };
//
// console.log(obj);
//
// obj = null;

// const pow = 2 ** 2

/****************************************
 * ES8
 ****************************************/

// const str = 'string';
//
// console.log(str.padStart(10, '!'))
// console.log(str.padEnd(10, '!'))
//
// function foo(a, b,) {
//
// }

// async function foo() {
//     const response = await fetch();
// }

/****************************************
 * ES10
 ****************************************/

// const arr = [1, 2, 3, 4, [ 5, 6, 7, [8, 9, 10] ]]
// const arr2 = [1, 2, 3, 4, 5, 6, 7, [8, 9, 10] ]
//
// console.log(arr.flat(2));
//
// console.log(arr2.flatMap((digit => {
//     return digit
// })))

// console.log('      example'.trimStart())
// console.log('example     '.trimEnd())
//
// try {
//
// } catch {
//
// }

/****************************************
 * ES11
 ****************************************/

// const obj = {
//     name: 'Serhii'
// }
//
// console.log(obj?.sayHy)
// console.log(obj?.sayHy?.())

// console.log(false ?? "value");
// console.log(undefined ?? "value");
// console.log(null ?? "value");
// console.log(NaN ?? "value");


(async function(name) {
    const module = await import('./utils.js');

    module.logger(name)
})('serhii')

// const str = 'abc';
// const regex = /[a-c]/g;
//
// const iterator = str.matchAll(regex);
//
// for (const result of iterator) {
//     console.log(result)
// }

// console.log(globalThis)
// console.log(this)
// console.log(window)

