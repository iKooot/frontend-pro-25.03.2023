// dont use
// function *generators() {
//
// }

// function* fGen() {
//     yield 1
//     yield 2
//     yield 3
// }

// // init gen
// const generator = fGen(); // {}
// // first yield
// const one = generator.next(); // { value: 1, done: false }
// console.log(one)
// // second yield
// const two = generator.next(); // { value: 2, done: false }
// console.log(two)
// // third yield
// const three = generator.next(); // { value: 3, done: false }
// console.log(three)
// // gen is finished
// const end = generator.next(); // { value: undefined, done: true }
// console.log(end)

/****************************************
 * cycle
 ****************************************/

// function* fGen() {
//     yield 1
//     yield 2
//     return 3
// }

// function* fGen() {
//     yield 1
//     yield 2
//     return 3
// }
//
// const gen = fGen();

// gen.next();
// gen.next();
// const result = gen.next();
// console.log(result)

// for (const value of gen) {
//     console.log(value)
// }

/****************************************
 * spread
 ****************************************/

// function* fGen() {
//     yield 1
//     yield 2
//     return 3
// }
//
// const array = [0, ...fGen()];
//
// function* dobleGen(array = []) {
//     for (let i = 0; i < array.length; i++) {
//         yield array[i] = array[i] * 2
//     }
// }
//
// console.log([...dobleGen(array)])

/****************************************
 * obj
 ****************************************/

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   [Symbol.iterator]: function () {
//     const entries = Object.entries(this);
//     let index = 0;
//
//     return {
//       next: function () {
//         if (index < entries.length) {
//           const value = entries[index][1];
//           index++;
//           return { value, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// console.log([...obj]);
//
// const obj2 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   *[Symbol.iterator]() {
//     for (const key of Object.keys(this)) {
//       yield this[key];
//     }
//   },
// };
//
// console.log([...obj2]);

/****************************************
 * composition
 ****************************************/

// function* sequenceGen(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }
//
// function* genPassCodes() {
//   yield* sequenceGen(48, 57);
//   // for (let i = 48; i <= 57; i++) yield i;
//
//   yield* sequenceGen(65, 90);
//   yield* sequenceGen(97, 122);
// }
//
// let pass = "";
//
// for (const code of genPassCodes()) {
//   pass += String.fromCharCode(code);
// }
//
// console.log(pass);

/****************************************
 * 2 ways
 ****************************************/

// function* gen() {
//   return yield "What is your name?";
// }
//
// const generator = gen();
//
// const question = generator.next();
// console.log(question);
//
// const answer = generator.next("Serhii");
// console.log(answer);
//
// const answer2 = generator.next("Serhii2"); // undefined
// console.log(answer2);

/****************************************
 * LOGGER
 ****************************************/

// function* logger(level) {
//   let color;
//
//   switch (level) {
//     case "info":
//       color = "\x1b[32m";
//       break;
//     case "warning":
//       color = "\x1b[33m";
//       break;
//     case "error":
//       color = "\x1b[31m";
//       break;
//     default:
//       color = "\x1b[0m";
//   }
//
//   while (true) {
//     const message = yield;
//     console.log(`${color}[${level.toUpperCase()}]: ${message}\x1b[0m`);
//   }
// }
//
// function* compositionLogger(loggers) {
//   while (true) {
//     const { level, message } = yield;
//
//     if (loggers[level]) {
//       loggers[level].next(message);
//     } else {
//       console.log(`\x1b[35m[UNKNOWN LEVEL]: ${message}\x1b[0m`);
//     }
//   }
// }
//
// const loggers = {
//   info: logger("info"),
//   warning: logger("warning"),
//   error: logger("error"),
// };
//
// for (const key of Object.keys(loggers)) {
//   loggers[key].next();
// }
//
// const appLogger = compositionLogger(loggers);
// appLogger.next();
//
// appLogger.next({ level: "info", message: "App is runing!" });
// appLogger.next({ level: "warning", message: "Add validation" });
// appLogger.next({ level: "error", message: "404" });
// appLogger.next({ level: "unknown", message: "Ups..." });

/****************************************
 * throw
 ****************************************/

// function* gen() {
//   return yield "What is your name?";
// }
//
// const generators = gen();
//
// let question = generators.next('Serhii').value;
//
// try {
//     generators.throw(new Error('Ennter your name'))
// } catch (e) {
//     console.log(e)
// }


