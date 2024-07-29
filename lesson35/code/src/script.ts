// console.log("Hello world");
//
// type Example = { example: string };
//
// const obj: Example = { example: "example" };
//
// function foo(obj: Example): string {
//   return obj.example;
// }
//
// console.log(foo(obj));

/****************************************
 * primitives
 ****************************************/
// const string = <string>'Hello world';
// let string = 'Hello world';
// string = 4; // Error
// string = false; // Error
// string = 'Hello world2';
// let string2: string = 'Hello world';
// let number = 4;
// number = '4'; // Error
// number = 1
// let bool = true;
// let bool2: boolean = false;

// let number: number;
//
// number = Number('4');
// number = +'3';
// console.log(typeof number)
// console.log('Hello' + 'world')
// console.log('Hello' * 'world')

/****************************************
 * array
 ****************************************/
// const array: Array<string> = [];
// const array: string[] = [];
// array.push('1');
// array.push(String(1));
// array.push(1); // Error
// array.push(false); // Error
// array.push({}); // Error
// array.push([]); // Error

// let array: [string, number];
// array = ['', 1]
//
// array.push(1)
// console.log(array)

/****************************************
 * function
 ****************************************/

// function foo(name) {
//   return name
// }
//
// console.log(foo('Serhii'));
// /**
//  * Function will return sum of arguments.
//  *
//  * @param a - number 1.
//  * @param b - number 2.
//  * @returns Sum of a and b.
//  */
// function sum(a: number, b: number): number {
//   return a + b;
// }
//
// console.log(sum(1, 1));
//
// function loggerOfSum(a: number, b: number): void {
//   console.log(`Sum: ${a + b}`);
// }
//
// loggerOfSum(1, 2);
//
// async function fetchUsers(url: string): Promise<string[]> {
//   const resp = await fetch(url);
//   const data: string[] = await resp.json();
//   return data;
// }
//
// ['apple', 1].forEach((el) => {
//   console.log(el)
// })

/****************************************
 * obj
 ****************************************/

const obj = { x: 1 };
const obj2: { x: number; y: number } = { x: 1, y: 2 };

// function foo(obj) {
//   if ('x' in obj) console.log(`x: ${obj.x}`);
//   if ('x' in obj) console.log(`y: ${obj.y}`);
// }

// function foo(obj: { x: number; y?: number }) {
// // function foo(obj: { x: number; y: number | undefined }) {
//   console.log(`x: ${obj.x}`);
//   console.log(`y: ${obj.y}`);
// }
//
// foo(obj2);
// foo(obj);

/****************************************
 * Union
 ****************************************/

// function foo(id: number | string) {
//   console.log(id)
// }
//
// foo(1)
// foo('1')
// foo(false) // error

/****************************************
 * Type
 ****************************************/

// type Digit = number | string;
//
// function foo(digit: Digit): number {
//   return Number(digit)
// }
//
// console.log(foo('1'));
// console.log(foo(1));

// type User = {
//   name: string;
//   age: number;
// }
//
// type Hobbies = {
//   hobbies: string[]
// };
//
// function foo(user: User & Hobbies) {
//   console.log(JSON.stringify(user))
// }
//
// foo({ name: 'Serhii', age: 33, hobbies: [] })

/****************************************
 * HTML
 ****************************************/

// const div = document.getElementById('div') as HTMLDivElement;
// const ul = <HTMLUListElement>document.getElementById('ul');
// const example = 'string' as unknown as HTMLUListElement; // Dont do this

/****************************************
 * Literal
 ****************************************/

// let hello: "hello" = "hello";
//
// let example = "left";
//
// function foo(s: string, aligment: "left" | "right" | "center"): 1 | 0 | -1 {
//   return 1;
// }
//
// foo("", example);

// declare function htmlRequest(url: string, method: "GET" | "POST"): void;
//
// const req = { url: "http://example.com", method: "GET" } as const;
// htmlRequest(req.url, req.method);
