// class User {
//   constructor() {}
//
//   get name() {
//     return this._name;
//   }
//
//   set name(value) {
//     this._name = value;
//   }
//
//   showName() {
//     console.log(this.name);
//   }
//
//   // showName = function () {};
//
//   // showName = () => {
//   //   console.log(this.name);
//   // }
// }
//
// const user = new User();
//
// console.log(user.name);
// user.name = "Serhii";
// console.log(user.name);
// console.log(user._name);
//
// setTimeout(user.showName.bind(user), 500);
// setTimeout(user.showName, 500);

/****************************************
 * extends
 ****************************************/

// class Child extends Parent {
//
// }
//
// Child.prototype.[[Prototype]] = Parent.prototype

// class Animal {
//   constructor() {}
//
//   get name() {
//     return this._name;
//   }
//
//   set name(value) {
//     this._name = value;
//   }
// }
//
// class Wolf extends Animal {
//     type = 'mammals';
//
//     showInfo() {
//         console.log('type =>', this.type)
//         console.log('name =>', this.name)
//     }
// }
//
// const animal = new Animal();
// const wolf = new Wolf();
//
// wolf.name = 'Kus';
// console.log(wolf.name)
// console.log(animal.name)
//
// console.log(Wolf.prototype)
// console.log(wolf.__proto__)
//
// console.log(Animal.prototype)
// console.log(animal.__proto__)

/****************************************
 * polimorf
 ****************************************/

// class Animal {
//   constructor(name, age = 1) {
//     this.name = name;
//     this.age = age;
//   }
//
//   showInfo() {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }
//
// class Wolf extends Animal {
//   constructor(name, speed) {
//     super(name, 12);
//     this.speed = speed;
//   }
//
//   showInfo() {
//     super.showInfo();
//     console.log(this.speed);
//   }
// }
//
// const wolf = new Wolf("Kus", 10);
//
// wolf.showInfo();
//
// console.log(wolf);

/****************************************
 * problem
 ****************************************/

// const animal = {
//     name: 'animal',
//     run() {
//         console.log(`this ${this.name} run.`)
//     }
// }
//
// const wolf = {
//     __proto__: animal,
//     run() {
//         this.__proto__.run.call(this); // *
//     }
// }
//
// const kusKus = {
//     __proto__: wolf,
//     run() {
//         this.__proto__.run.call(this); // **
//     }
// }
//
// // [[HomeObject]]
//
// kusKus.run()

/****************************************
 * solution
 ****************************************/

// const animal = {
//     name: 'animal',
//     run() {
//         console.log(`this ${this.name} run.`)
//     }
// }
//
// const wolf = {
//     __proto__: animal,
//     run() {
//         super.run()
//     }
// }
//
// const kusKus = {
//     __proto__: wolf,
//     name: 'KusKus',
//     run() {
//         super.run()
//     }
// }
//
// kusKus.run()

/****************************************
 * static
 ****************************************/

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//
//   static createTodo(name) {
//     const user = new this(name);
//     console.log("I need to create todo for user", user);
//     return { user, todo: [] };
//   }
// }
//
// const todos = User.createTodo("Serhii");
// console.log(todos);
// const user = new User("Serhii2");
// console.log(user);
//
// class Users {
//     constructor(url) {
//         this.url = url
//     }
//
//     static sortUsers(data) {
//         // logic
//     }
//
//     fetchUsers() {
//         // fetching
//     }
// }
//
// const caller = new Users('https://');
//
// const data = caller.fetchUsers();
// Users.sortUsers(data);
//
// class API {
//     static url = 'https://localhost:3000';
//
//     constructor(headers) {
//         this.headers = headers;
//     }
// }
//
// //https://localhost:3000/users
// class UsersApi extends API {
//     static prefix = '/users'
//
//     async get() {
//         return await fetch(UsersApi.url + UsersApi.prefix, this.headers)
//     }
// }
//
// const userCaller = new UsersApi({});
// // userCaller.get();
//
// console.dir(UsersApi)
// console.dir(userCaller)
// console.dir(API)

/****************************************
 * private
 ****************************************/

// class User {
//   _salery = 0;
//   _isOvner = false;
//
//   constructor(name) {
//     this.name = name;
//     this._isOvner = false;
//   }
//
//   set salery(value) {
//     this._salery = value;
//   }
//
//   get salery() {
//     return this._salery;
//   }
//
//   get isOvner() {
//       return this._isOvner;
//   }
// }
//
// const user = new User('Serhii');
// user._isOvner = true;
// console.log(user.isOvner)

// class User {
//   #isOvner = false;
//
//   constructor(name) {
//     this.name = name;
//   }
//
//   #setOvner() {
//       this.#isOvner = true
//   }
//
//   reseUp() {
//       // logic
//       this.#setOvner();
//   }
// }
//
// const user = new User('Serhii');
// console.log(user)
// // console.log(user.#isOvner)
//
// user.reseUp();
//
// console.log(user)

/****************************************
 * extender
 ****************************************/

// class MyArray extends Array {
//   myMap(callback) {
//     const mappedArray = super.map((el, i, arr) => {
//       console.log("%c " + "logger: " + el, "color: green");
//       return callback(el, i, arr);
//     });
//
//     return new MyArray(...mappedArray);
//   }
//   isEmpty() {
//     return this.length === 0;
//   }
// }
//
// const arr = new MyArray(1, 2, 3);
// console.log(arr.isEmpty());
// console.log(arr);
// console.log(arr.myMap((el) => el + 1));

/****************************************
 * mixin
 ****************************************/

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }
//
// const getInfo = {
//     showName() {
//         console.log(this.name)
//     }
// }
//
// Object.assign(User.prototype, getInfo);
//
// const user = new User('Serhii');
//
// user.showName();

// class View {
//     constructor(user) {
//         this.user = user
//     }
//
//     createBox() {
//         return `<div>${this.user.name}</div>`
//     }
// }
//
// class User extends View {
//     constructor(name) {
//         super({ name });
//     }
// }
//
// const info = {
//     showName() {
//         console.log(this.user.name)
//     }
// }
//
// Object.assign(User.prototype, info);
//
// const user = new User('Serhii')
// console.log(user.createBox())
// user.showName()


