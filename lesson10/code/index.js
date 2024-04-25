// const name = 'name'
// // Object()
//
// const obj = {
//     name: 'Serhii',
//     'age': 33,
//     getInfo() {
//         console.log('info');
//     },
//     getInfo2: function() {
//         console.log('info');
//     },
//     [32 - 2]: 'Hello world',
//     [32 - 4]: 'Hello world3',
//     [name]: 'Hello world3',
//     obj: {
//         name: 'Serhii2'
//     }
// };
//
// console.log(obj)
//
// obj.hobbies = [];
// obj[(function () { return 'hello' })()] = 'example';
//
// console.log(obj.name);
// console.log(obj[name]);
// console.log(obj[(function () { return 'hello' })()]);
// console.log(obj.example);
// console.log(obj.obj.name);
// console.log(obj.example?.name);
// console.log(obj.example?.());

// { [string]: any }

/****************************************
 * delete keys
 ****************************************/

// const hobbies = {
//     shooting: true,
//     football: false,
// };

// const hobbies = [{ shooting: false }];
//
// const obj = {
//   name: "Serhii",
//   age: 32,
//   // hobbies: hobbies,
//   hobbies: structuredClone(hobbies),
// };
//
// // delete obj.name // Bad
//
// const { name, ...newObj } = obj;
//
// console.log(name);
// console.log(newObj);
//
// console.log(newObj.hobbies === hobbies);
// console.log(newObj === structuredClone(newObj));

/****************************************
 * in
 ****************************************/

// const obj = {
//     name: 'Sehii',
//     age: 33
// };
//
// if ('name' in obj) {
//     console.log(obj);
// }
//
// if (obj.name !== undefined) {
//     console.log(obj);
// }

// console.log('name' in obj)
// console.log('hobbies' in obj)

/****************************************
 * for in
 ****************************************/

// const obj = {
//     name: 'Serhii',
//     age: 33
// }

// for (const key in obj) {
//     console.log('key =>', key)
//     console.log('value =>', obj[key])
// }

// console.log(Object.keys(obj))
// for (const key of Object.keys(obj)) {
//     console.log(key)
// }

// console.log(Object.values(obj))
// for (const value of Object.values(obj)) {
//     console.log(value)
// }

// console.log(Object.entries(obj))
// for (const entries of Object.entries(obj)) {
//     console.log(entries)
//     console.log(entries[0])
//     console.log(entries[1])
// }
// for (const [key, value] of Object.entries(obj)) {
//     console.log('key =>', key)
//     console.log('value =>', value)
// }

/****************************************
 * assign
 ****************************************/

// const obj1 = {
//     name: 'Serhii'
// }
//
// const obj2 = {
//     age: 33
// }

// const newObj = Object.assign(obj1, obj2, { hobbies: [] }, ['hello']);
// const newObj = Object.assign({ key: 1 }, { key: 2}, { key: 3});
// console.log(newObj)

// console.log(obj1)
// console.log(obj2)
// console.log(newObj)
// console.log(newObj === obj1)

/****************************************
 * defineProperties
 ****************************************/

// const obj = {};

// Object.defineProperty(obj, "name", {
//   value: "Serhii",
//   configurable: true,
//   writable: true,
//   enumerable: true,
// });
//
// Object.defineProperty(obj, "age", {
//   value: 33,
//   configurable: false,
//   writable: true,
//   enumerable: true,
// });
//
// Object.defineProperty(obj, "hobbies", {
//   value: [],
//   configurable: false,
//   writable: false,
//   enumerable: true,
// });
//
// Object.defineProperty(obj, "isAdmin", {
//   value: true,
//   configurable: false,
//   writable: false,
//   enumerable: false,
// });

// const newObj = Object.defineProperties(
//   {},
//   {
//     name: {
//       value: "Serhii",
//       writable: true,
//       enumerable: true,
//       configurable: true,
//     },
//     age: {
//       value: 32,
//       configurable: false,
//       enumerable: true,
//       writable: true,
//     },
//     hobbies: {
//       value: [],
//       writable: false,
//       enumerable: true,
//       configurable: false,
//     },
//     _admin: {
//       value: true,
//       configurable: false,
//       writable: true,
//       enumerable: false,
//     },
//     isAdmin: {
//       get: function () {
//         return this._admin;
//       },
//       set(value) {
//         this._admin = value;
//       },
//     },
//   },
// );

// console.log(newObj);
// newObj.isAdmin = false
// console.log(newObj.isAdmin)

// console.log(obj);
// obj.hobbies = "example";
// console.log(obj);
// delete obj.age;
// console.log(obj);

/****************************************
 * freeze seal
 ****************************************/
// const obj = {
//     name: 'Kus'
// }

// const o = Object.freeze(obj);
// console.log(Object.isFrozen(obj));

// const o = Object.seal(obj);
// console.log(Object.isSealed(obj))
//
// obj.age = 33;
// obj.name = '33';
// delete obj.name;
//
// console.log(obj)
// console.log(o)
// console.log(o === obj)

/****************************************
 * instanceof
 ****************************************/

// const obj = {};
//
// console.log(obj);
// console.log(obj instanceof Object);
//
// function User() {}
//
// const user = new User();
//
// console.log(user);
// console.log(user instanceof User);
// console.log(user instanceof Object);
