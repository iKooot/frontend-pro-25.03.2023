/****************************************
 * Enums
 ****************************************/

// const Example = "Example";
//
// enum Diraction {
//   Up,
//   Down = Example,
//   Left = "Left",
//   Right = "Right",
// }
//
// enum UserRole {
//   Admin = "role:admin",
//   Viewer = "role:backand:viewer",
// }
//
// interface User {
//   role: UserRole;
// }

// const user: User = {
//   role: UserRole.Admin,
// };
//
// type Key = keyof typeof Diraction;
//
// const key: Key = "Up";
//
// console.log(key);
// console.log(Diraction.Right);
//
// enum LogLevel {
//   ERROR,
//   WARN,
//   INFO,
//   DEBUG,
// }

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
// type LogLevelStrings = keyof typeof LogLevel;
//
// function printImportant(key: LogLevelStrings, message: string) {
//   const num = LogLevel[key];
//   if (num <= LogLevel.WARN) {
//     console.log("Log level key is:", key);
//     console.log("Log level value is:", num);
//     console.log("Log level message is:", message);
//   }
// }
// printImportant("ERROR", "This is a message");

/****************************************
 * Narrowing
 ****************************************/

// function logStr(strs: string | string[] | null) {
// if (Array.isArray(strs)) {
//   for (const str of strs) {
//     console.log(str)
//   }
// } else if ( typeof strs === 'string') {
//   console.log(strs)
// } else {
//   console.log('String is null')
// }

//   if (strs === null) return;
//
//   if (Array.isArray(strs)) {
//     for (const str of strs) {
//       console.log(str);
//     }
//     return;
//   }
//
//   console.log(strs);
//   console.log(strs.toUpperCase());
// }
//
// logStr(["hello world"]);

// Boolean();
// !!'string';

/****************************************
 * in
 ****************************************/

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
//
// const animal: Fish = { swim: () => console.log("fish") };
//
// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }
//
//   return animal.fly();
// }
// Щоб визначити тип, що визначається користувачем, нам просто потрібно визначити функцію, типом повернення якої є предикат типу:
// function isFish(animal: Fish | Bird): animal is Fish {
//   return (animal as Fish).swim !== undefined;
// }
//
// if (isFish(animal)) {
//   animal.swim();
// }
//
// move(animal);
// move({ fly: () => console.log("bird") });
// move({  }); // Error

/****************************************
 * instanceof
 ****************************************/

// function logDate(x: Date | string) {
//   if (x instanceof Date) {
//     console.log(x.toUTCString());
//     return;
//   }
//
//   console.log(x.toUpperCase());
//   return;
// }

/****************************************
 * problem
 ****************************************/

// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }
//
// function handleShape(shape: Shape) {
//   if (shape.kind === 'rect') {
//
//   }
//   console.log(Math.PI * shape.radius ** 2);
// }

// solution

// interface Circle {
//   kind: "circle";
//   radius: number;
// }
// interface Square {
//   kind: "square";
//   sideLength: number;
// }
//
// interface Triangle {
//   kind: "triangle";
//   sideLength: number;
// }
//
// type Shape = Circle | Square | Triangle;
//
// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck = shape; // no error
//       const _exhaustiveCheck: never = shape; // errpr
//       return _exhaustiveCheck;
//   }
// }

/****************************************
 * function
 ****************************************/

// function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
// }
//
// function printToConsole(s: string) {
//   console.log(s);
// }
//
// greeter(printToConsole);

/****************************************
 * call signatures
 ****************************************/

// type FunctionFoo = {
//   description: string;
//   (someArg: number): boolean;
// };
//
// const myFunc = ((someArg: number) => {
//   return someArg > 3;
// }) as FunctionFoo; // declaration of function
//
// myFunc.description = "default description"; // declaration description
//
// function doSomething(fn: FunctionFoo) {
//   console.log(fn.description + " returned " + fn(6));
// }
//
// doSomething(myFunc);

/****************************************
 * object
 ****************************************/

// interface User {
//   name: string;
//   age: number;
// }
//
// interface UserConstructor {
//   new (name: string, age: number): User;
// }
//
// class User implements User {
//   constructor(public name: string, public age: number) {}
// }
//
// function createUser(ctor: UserConstructor) {
//   // do some fetch and get some value name and age
//   return new ctor("Serhii", 33);
// }
//
// const user = createUser(User);
//
// console.log(user)

/****************************************
 * generic
 ****************************************/

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }
//
// // s is of type 'string'
// const s = firstElement(["a", "b", "c"]);
// console.log(s);
// // n is of type 'number'
// const n = firstElement([1, 2, 3]);
// console.log(n);
// // u is of type undefined
// const u = firstElement([]);
// console.log(u);
//
// function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
//   return arr1.concat(arr2);
// }
//
// function myMap<Input, Output>(
//   arr: Input[],
//   func: (arg: Input) => Output,
// ): Output[] {
//   return arr.map(func);
// }
//
// console.log(
//   myMap<{ name: string; age: number }, number>(
//     [{ name: "Serhii", age: 33 }],
//     (user) => user.age,
//   ),
// );

/****************************************
 * optional params
 ****************************************/

// Although the parameter is specified as type number,
// the x parameter will actually have the type number | undefined because unspecified parameters in JavaScript get the value undefined.

// function f(x: number | undefined ) { // this meens i expected param x with value
// function f(x?: number) { // this meen x can be not defined
//                          // ...
// }
// f(); // OK
// f(10); // OK
// f(undefined)

/****************************************
 * Function Overloads
 ****************************************/

// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// // const d3 = makeDate(1, 3); // Error
//
// function len(s: string): number;
// function len(arr: unknown[]): number;
// function len(x: unknown[] | string): number {
//   return x.length;
// }
//
// console.log(len("")); // OK
// console.log(len([0])); // OK

/****************************************
 * Object
 ****************************************/

// type Hobbies = string[];
// interface User {
//   name: string;
//   age: number;
//   hobbies?: Hobbies;
// }
//
// const user: User = {
//   name: "Serhii",
//   age: 33,
// };

/****************************************
 * readonly
 ****************************************/

// interface NewUser extends User {
//   readonly isAdmin: boolean;
//   readonly innerData: { id: string; isVisible: boolean };
// }
//
// const newUser: NewUser = {
//   name: "Jonn",
//   age: 32,
//   isAdmin: true,
//   innerData: {
//     id: "1",
//     isVisible: true,
//   },
// };
//
// console.log(newUser.isAdmin);
// // newUser.isAdmin = false // Error
// // newUser.innerData = false // no error
// newUser.innerData.isVisible = false // no error
// console.log(newUser);

/****************************************
 * Index Signatures
 ****************************************/

// interface StringArray {
//   [index: number]: string;
// }
//
// const myArray: StringArray = ["Hello", "World"];
// console.log(myArray[0]); // Output: Hello
// console.log(myArray[1]); // Output: World
//
// interface Dictionary {
//   [key: string]: string;
// }
//
// const myDict: Dictionary = {
//   name: "John",
//   age: "30",
//   country: "USA",
// };
//
// console.log(myDict["name"]); // Output: John
// console.log(myDict["age"]); // Output: 30
// console.log(myDict["country"]); // Output: USA
//
// interface User {
//   name: string;
//   age: number;
// }

// Using an index signature in a class
// class UserCollection {
//   private users: { [id: string]: User } = {};
//
//   addUser(id: string, user: User) {
//     this.users[id] = user;
//   }
//
//   getUser(id: string): User | undefined {
//     return this.users[id];
//   }
// }
//
// const userCollection = new UserCollection();
// userCollection.addUser("1", { name: "Alice", age: 25 });
// userCollection.addUser("2", { name: "Bob", age: 30 });
//
// const user1 = userCollection.getUser("1");
// console.log(user1); // Output: { name: 'Alice', age: 25 }
//
// const user2 = userCollection.getUser("2");
// console.log(user2); // Output: { name: 'Bob', age: 30 }

/****************************************
 * Extending Types
 ****************************************/

// interface User {
//   name: string;
//   age: number;
// }

// interface Employee extends User {
//   companyName: string;
// }
//
// interface Developer extends Employee {
//   isDev: boolean;
// }

// interface Employee {
//   companyName: string;
// }
//
// interface Developer extends User, Employee {
//   isDev: boolean;
// }
//
// const dev: Developer = {
//   name: "Serhii",
//   age: 33,
//   companyName: "Hillel",
//   isDev: true,
// };
//
// console.log(dev);

/****************************************
 * intersection
 ****************************************/

// interface Person1 {
//   name: string;
// }
//
// interface Person2 {
//   name: number;
// }
//
// type StaffIntersection = Person1 | Person2;
// // type StaffUnion = Person1 & Person2;
//
// const obj: StaffIntersection = {
//   name: '3',
// };

/****************************************
 * Generic Object Types
 ****************************************/

// type OrNull<Type> = Type | null;
//
// const a: OrNull<string> = null
// const a2: OrNull<string> = 'null'
// // const a3: OrNull<string> = 3 // Error
//
// type OneOrMany<Type> = Type | Type[];
// const b: OneOrMany<string> = 'example';
// const b2: OneOrMany<string> = ['example'];
// // const b3: OneOrMany<string> = [3]; // Error
//
// type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>; // the same type OneOrManyOrNull<Type> = OneOrMany<Type> | null
//
// type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
//
// interface Dictionary<T> {
//   [key: string]: T;
// }
//
// // Using the generic interface with a string type
// const stringDict: Dictionary<string> = {
//   name: "Alice",
//   job: "Engineer",
// };
//
// console.log(stringDict["name"]); // Output: Alice
// console.log(stringDict["job"]); // Output: Engineer
//
// // Using the generic interface with a number type
// const numberDict: Dictionary<number> = {
//   age: 30,
//   year: 2024,
// };
//
// console.log(numberDict["age"]); // Output: 30
// console.log(numberDict["year"]); // Output: 2024

// // Using the generic interface with a complex type
// interface User {
//   name: string;
//   age: number;
// }
//
// const userDict: Dictionary<User> = {
//   user1: { name: "Alice", age: 25 },
//   user2: { name: "Bob", age: 30 },
// };
//
// console.log(userDict["user1"]); // Output: { name: 'Alice', age: 25 }
// console.log(userDict["user2"]); // Output: { name: 'Bob', age: 30 }

// Generic class
// class DataStorage<T> {
//   private storage: Dictionary<T> = {};
//
//   addItem(key: string, item: T) {
//     this.storage[key] = item;
//   }
//
//   getItem(key: string): T | undefined {
//     return this.storage[key];
//   }
// }
//
// // Using the generic class with a string type
// const stringStorage = new DataStorage<string>();
// stringStorage.addItem("name", "Alice");
// console.log(stringStorage.getItem("name")); // Output: Alice
//
// // Using the generic class with a complex type
// const userStorage = new DataStorage<User>();
// userStorage.addItem("user1", { name: "Alice", age: 25 });
// console.log(userStorage.getItem("user1")); // Output: { name: 'Alice', age: 25 }

/****************************************
 * class
 ****************************************/

// class Animal {
//   readonly name: string;
//   public readonly surname?: string;
//   speed!: number; // not error
//
//   constructor(name: string);
//   constructor(name: string, surname: string);
//   constructor(name: string, surname?: string) {
//     if (!surname) {
//       const [firstName, ...rest] = name.split(" ");
//       this.name = firstName;
//       this.surname = rest.join(" ") || undefined;
//
//       return this;
//     }
//
//     this.name = name;
//     this.surname = surname;
//   }
//
//   voice(description: string) {
//     console.log(`${this.name} say ${description}`);
//   }
//
//   printInfo() {
//     console.log(`Name: ${this.name}; Surname: ${this.surname}`);
//   }
// }
//
// const dog = new Animal("Kus Kus");
// // dog.name = 'some' // Error
// dog.voice("wow");
// dog.printInfo();
//
// const cat = new Animal("Cap", "Carap");
// cat.voice("mew");
// cat.printInfo();

/****************************************
 * super
 ****************************************/

// class Wolf extends Animal {
//   private readonly type = true;
//   // private type = true; // if only get = readonly
//
//   constructor(name: string, surname?: string) {
//     if (!surname) {
//       super(name);
//       return this;
//     }
//
//     super(name, surname);
//   }
//
//   voice(description: string) {
//     super.voice(`I am wolf, ${description}`);
//   }
//
//   get isWolf() {
//     return this.type;
//   }
// }
//
// const wolf = new Wolf("Bite Bite");
// console.log(wolf);
// console.log(wolf.isWolf);
// // wolf.isWolf = false
// wolf.voice("im hungry");
// wolf.printInfo();

/****************************************
 * Class Heritage
 ****************************************/

// interface IAnimal {
//   name: string;
//   voice(): void;
// }
//
// class Animal implements IAnimal {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   voice() {
//     console.log("WoW");
//   }
// }
//
// interface IDog extends IAnimal {
//   age: number;
// }
//
// class Dog extends Animal implements IDog {
//   public age: number;
//   constructor(name: string, age: number) {
//     super(name);
//     this.age = age;
//   }
// }

/****************************************
 * Member Visibility
 ****************************************/
//
// // public видимість членів класу є загальнодоступною. Доступ до публічного учасника можна отримати будь-де:
//
// class Greeter {
//   public greet() {
//     console.log("hi!");
//   }
// }
// const g = new Greeter();
// g.greet();
//
// // protected члени видимі лише для підкласів класу, у якому вони оголошені.
//
// class Greeter {
//   public greet() {
//     console.log("Hello, " + this.getName());
//   }
//   protected getName() {
//     return "hi";
//   }
// }
//
// class SpecialGreeter extends Greeter {
//   public howdy() {
//     // OK to access protected member here
//     console.log("Howdy, " + this.getName());
//   }
// }
// const g = new SpecialGreeter();
// g.greet(); // OK
// g.getName(); // error
//
// // private виглядає як захищений, але не дозволяє доступ до члена навіть із підкласів:
//
// class Base {
//   private x = 0;
//
//   constructor(number) {
//     this.x = number
//   }
//
//   logger() {
//     console.log(this.x)
//   }
// }
// const b = new Base(2);
// // Can't access from outside the class
// console.log(b.x); // error
//
// class Derived extends Base {
//   showX() {
//     // Can't access in subclasses
//     console.log(this.x); // error
//   }
// }

/****************************************
 * Static
 ****************************************/

class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}

/****************************************
 * Constructor Signatures
 ****************************************/

// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
//
// type AnimalInstance = InstanceType<typeof Animal>;
//
// function foo(animal: AnimalInstance) {
//   animal.name = 'Kus'
// }
//
// const animal = new Animal('WoW');
// foo(animal);
// console.log(animal.name)

/****************************************
 * abstract
 ****************************************/

// interface IAnimal {
//   makeSound(): void;
//   move(): void;
// }
//
// abstract class Animal implements IAnimal {
//   // Abstract method with no implementation
//   abstract makeSound(): void;
//
//   // Concrete method with implementation
//   move(): void {
//     console.log("Moving...");
//   }
// }
//
// class Dog extends Animal {
//   // Implementing the abstract method
//   makeSound(): void {
//     console.log("Woof!");
//   }
// }
//
// class Cat extends Animal {
//   // Implementing the abstract method
//   makeSound(): void {
//     console.log("Meow!");
//   }
// }
//
// // Instantiate concrete classes
// const myDog = new Dog();
// myDog.makeSound(); // Output: Woof!
// myDog.move();      // Output: Moving...
//
// const myCat = new Cat();
// myCat.makeSound(); // Output: Meow!
// myCat.move();      // Output: Moving...

/****************************************
 * KeyOf
 ****************************************/

// interface Person {
//   name: string;
//   age: number;
//   email: string;
// }
//
// type PersonKeys = keyof Person;
//
// function getProperty(person: Person, key: PersonKeys) {
//   return person[key];
// }
//
// // Create an instance of Person
// const john: Person = {
//   name: "John Doe",
//   age: 30,
//   email: "john.doe@example.com"
// };
//
// // Use the getProperty function with valid keys
// console.log(getProperty(john, "name")); // Output: John Doe
// console.log(getProperty(john, "age"));  // Output: 30
// console.log(getProperty(john, "email")); // Output: john.doe@example.com

/****************************************
 * Utilities
 ****************************************/

// async function getNumber(): Promise<number> {
//   return 42;
// }
//
// type ResolvedNumber = Awaited<ReturnType<typeof getNumber>>;
//
// function printNumber(num: ResolvedNumber) {
//   console.log(`Number: ${num}`);
// }
//
// getNumber().then(printNumber); // Output: Number: 42

// Partial<Todo>

// interface Todo {
//   title: string;
//   description: string;
// }
//
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   return { ...todo, ...fieldsToUpdate };
// }
//
// const todo1 = {
//   title: "organize desk",
//   description: "clear clutter",
// };
//
// const todo2 = updateTodo(todo1, {
//   description: "throw out trash",
// });

// Required<Type>

// interface Props {
//   a?: number;
//   b?: string;
// }
//
// const obj: Props = { a: 5 };
//
// // const obj2: Required<Props> = { a: 5 }; // error
// const obj2: Required<Props> = { a: 5, b: '3' };

// Readonly

// interface Todo {
//   title: string;
// }
//
// const todo: Readonly<Todo> = {
//   title: "Delete inactive users",
// };
//
// todo.title = "Hello";

// Record

// type CatName = "miffy" | "boris" | "mordred";
//
// interface CatInfo {
//   age: number;
//   breed: string;
// }
//
// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: "Persian" },
//   boris: { age: 5, breed: "Maine Coon" },
//   mordred: { age: 16, breed: "British Shorthair" },
// };
//
// console.log(cats.boris);
//
// interface IString {
//   [key: string]: string
// }
//
// const obj: Record<string, string> = {
//   example: 'example'
// }
//
// const obj2: IString = {
//   example: 'example'
// }

// Pik

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }
//
// type TodoPreview = Pick<Todo, "title" | "completed">;
//
// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };
//
// console.log(todo);

// Omit

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }
//
// type TodoPreview = Omit<Todo, "description">;
//
// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   createdAt: 1615544252770,
// };
//
// console.log(todo);

// Exclude

// type Fruits = "apple" | "banana" | "orange" | "grape";
//
// // Use Exclude to remove "banana" and "grape" from Fruits
// type CommonFruits = Exclude<Fruits, "banana" | "grape">;
//
// // Define a function that takes only the remaining fruits
// function printFruit(fruit: CommonFruits) {
//   console.log(`Fruit: ${fruit}`);
// }
//
// // Call the function with valid values
// printFruit("apple");  // Output: Fruit: apple
// printFruit("orange"); // Output: Fruit: orange

// nonNulleble

// // Define a type that includes null and undefined
// type Mixed = string | number | null | undefined;
//
// // Use NonNullable to exclude null and undefined
// type NonNullableMixed = NonNullable<Mixed>;
//
// // Define a function that takes only non-nullable values
// function printValue(value: NonNullableMixed) {
//   console.log(`Value: ${value}`);
// }
//
// // Call the function with valid values
// printValue("Hello"); // Output: Value: Hello
// printValue(42);      // Output: Value: 42

// returnType

// Define a function that returns a specific type
// function getUserInfo(userId: number): { name: string; age: number } {
//   return {
//     name: "Alice",
//     age: 30
//   };
// }
//
// // Use ReturnType to get the return type of getUserInfo
// type UserInfo = ReturnType<typeof getUserInfo>;
//
// // Define a function that takes an argument of type UserInfo
// function printUserInfo(user: UserInfo) {
//   console.log(`Name: ${user.name}`);
//   console.log(`Age: ${user.age}`);
// }
//
// // Create a user object based on the return type
// const userInfo: UserInfo = getUserInfo(1);
//
// // Call the function with the user info
// printUserInfo(userInfo);
