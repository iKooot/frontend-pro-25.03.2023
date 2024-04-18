/****************************************
 * FP
 ****************************************/

// let counter = 1;
//
// function foo() {
//     counter += 1;
// }
//
// const PI = 3.14;
//
// function foo(radius) {
//     return radius * radius * PI
// }
//
// function foo(radius, pi) { // clear
//     return radius * radius * pi
// }
//
// foo(10, PI)
//
// function foo() {
//     if (Math.random() > 0.5) return 'string'
//
//     return 'number'
// }
//
// function foo(file) {
//     const readStream = fs.ReadStream(file);
//     let content = open(file);
//     return content.length;
// }
//
// async function foo(url) {
//     const resp = await fetch(url);
//     const { data } = await resp.json();
//
//     return data
// }
//
// const arr = [ 1, 2, 3 ]
//
// function foo(arr) {
//     // arr.sort((a, b) => a < b ? 1: -1)
//
//     [...arr].sort((a, b) => a < b ? 1: -1)
// }
//
// foo(arr)

/****************************************
 * Arrow function
 ****************************************/

// function foo() {
//
// }
//
// const foo = function () {
//
// }

// const foo = () => {}

// function sum(a, b) {
//   console.log(this);
//   return a + b;
// }
//
// const sum = function (a, b) {
//   console.log(this);
//   return a + b;
// };
//
// const sum = (a, b) => {
//   console.log(this);
//   console.log(arguments);
//   return a + b;
// };
// const sum = (a, b) => a + b;

// console.dir(sum);

// const foo = x => x + 1
// const foo = () => x + 1
// foo(1)

/****************************************
 * object
 ****************************************/

// const user = Object()

// const user = {
//     name: 'Serhii',
//     // sayHy: function () {
//     //
//     // }
//     sayHi() {
//         console.log(this)
//     },
//     sayHi2: () => {
//         console.log(this)
//     }
// }
//
// console.log(user.name);
// user.sayHi()

// const user = {
//     name: 'Serhii',
//     showName() {
//         console.log(this.name)
//     },
// }
//
// setTimeout(user.showName.bind(user), 500);

// function User(name) {
//     this.name = name
// }
//
// const user = new User('Serhii');
//
// console.log(user)

/****************************************
 * Object
 ****************************************/
// const animal = {
//     type: 'animal',
//     voice() {
//         console.log('Hello')
//     }
// }
//
// const wolf = {
//     name: 'Kus'
// }
//
// wolf.__proto__ = animal; // [[Prototype]] === animal
// animal.__proto__ = wolf; // Error

// console.log(wolf)
// console.log(animal)

// console.log(wolf.type);
// wolf.voice()

// const user = {}

// user.__proto__ = null
// user.__proto__ = { name: 'Serhii' }

// console.log(user)

// const user = {
//     get userName() {
//         this.name
//     },
//     set userName(name) {
//         this.name = name
//     }
// }
//
// console.log(user.name);
// user.name = 'Sehii';
// console.log(user.name);

// const info = {
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const wolf = {
//     name: 'Kus',
//     __proto__: info
// }
//
// for (const key in wolf) {
//     if (wolf.hasOwnProperty(key)) console.log(key)
// }


/****************************************
 * Prototype
 ****************************************/

// const info = {
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const wolf = Object.setPrototypeOf({ name: 'Kus' }, info);
//
// wolf.showName()
// console.log(wolf);

/****************************************
 * Prototype function
 ****************************************/

function Animal(name) {
    this.name = name
}

const infoMethods = {
    showName: function () {
        console.log(this.name)
    }
}

Animal.prototype = infoMethods;
//
// const cat = new Animal('Kitten');

// cat.showName()

// console.log(Animal)
// console.log(Animal.prototype)
// console.log(infoMethods)
window.String.prototype = infoMethods
// console.log(String.prototype = infoMethods)
console.dir(String)






