/****************************************
 * abstract
 ****************************************/

// const calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     substract: function (a, b) {
//         return a - b
//     }
//     //....
// }
//
// const result1 = calculator.add(1, 2);
// console.log(result1)

/****************************************
 * encapsulation
 ****************************************/

// function User(name, age) {
//   let _name = name;
//
//   this.getName = function () {
//     return _name;
//   };
//
//   this.setName = function (newName) {
//     _name = newName;
//   };
// }
//
// const user1 = new User("Serhii", 33);
//
// console.log(user1.getName());
//
// user1.setName("Jon");
//
// console.log(user1.getName());

/****************************************
 *
 ****************************************/

// const animal = {
//     run: true
// };
//
// const wolf = {
//     name: 'Kus',
//     __proto__: animal
// }
//
// function foo() {}
//
// foo.prototype.example = () => {}

/****************************************
 *
 ****************************************/

// const dog = {
//     likeWalk: true,
//     voice: () => {
//         console.log('WoW')
//     }
// }
//
// const cat = {
//     likeSlip: true,
//     voice: () => {
//         console.log('Meow')
//     }
// }
//
// dog.voice()
// cat.voice()

/****************************************
 * get / set
 ****************************************/

// const person = {
//     name: 'Serhii',
//     surname: 'Savchuk',
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(name) {
//         const parts = name.split(' ');
//         this.name = parts[0];
//         this.surname = parts[1];
//     }
// }
//
// console.log(person.fullName);
// person.fullName = 'Jon Doe';
// console.log(person.fullName);

// function User(name, bDay) {
//     this.name = name;
//     this.bDay = bDay;
//
//     Object.defineProperty(this, 'age', {
//         get() {
//             let totalYear = new Date().getFullYear();
//             return totalYear - this.bDay.getFullYear()
//         }
//     });
// };
//
// const user = new User('Serhii', new Date(1991, 0, 1));
// console.log(user.age);

// console.log({})

/****************************************
 * classes
 ****************************************/

// class User {
//     constructor(name) {
//         this.name = name;
//         // return Object.defineProperty(this, 'hello', { value: '' })
//     }
//
//     sayHi() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// }
//
// const user1 = new User('Serhii');
// console.log(user1)
// console.dir(User)

// user1.sayHi();
// console.log(typeof User)
// console.log(User)
// console.log(User.prototype)

// function User2(name) {
//     this.name = name
// }
//
// User2.prototype.sayHi = function () {
//     console.log(`Hello my name is ${this.name}`)
// }

// const myClass = class User {
//     showLog() {
//         console.log('hello')
//     }
// }
//
// new myClass().showLog()
//
// function foo() {
//     return class User2 {}
// }
//
// function foo2(myClass) {
//     const user = new myClass()
// }
//
// const class2 = foo();
//
// new class2()

/****************************************
 * get/set
 ****************************************/

class User {
  example = 'some string';
  // ['some' + 'key'] = 2;
  // showLog() {
  //     console.log(this.example);
  // }

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(name) {
    const parts = name.split(" ");
    this.name = parts[0];
    this.surname = parts[1];
  }
}

const user = new User("Serhii", "Savchuk");

console.log(user.fullName);
user.fullName = "Jon Doe";
console.log(user.fullName);

console.dir(User)
console.dir(user)
