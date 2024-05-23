/****************************************
 * timers
 ****************************************/

// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html

// function seyHello(name) {
//   console.log(`Hello ${name}`);
//   console.log(new Date().toISOString());
// }
//
// console.log(new Date().toISOString());
// let timerId = setTimeout(seyHello, 1000, "Serhii");
// clearTimeout(timerId)

// setTimeout(() => {
//     console.log('hello world2');
// })
//
// console.log('hello world');

// let intervalId = setInterval(seyHello, 1000, 'Serhii');
// clearInterval(intervalId)

// const $p = document.querySelector('#interval-value');
//
// let i = 0;
//
// const intervalId = setInterval(() => {
//     i++;
//     $p.textContent = i;
//
//     if (i === 5 ) clearInterval(intervalId)
// }, 1000);

// let i = 0;
//
// let start = Date.now();
//
// function count() {
//     for (let j = 0; j < 1e6; j++) {
//         i++
//     }
//
//     console.log(`Done by ${Date.now() - start} ms`)
// }
//
// count()

// let i = 0;
//
// let start = Date.now();
//
// function count() {
//     console.log(i);
//
//     do {
//         i++
//     } while (i % 1000 != 0);
//
//     if (i === 1e6) {
//         console.log(`Done by ${Date.now() - start} ms`);
//     } else {
//         setTimeout(count)
//     }
// }

// count()

// console.log(new Date().toISOString());
// let timer = setTimeout(function a() {
//     console.log('tick');
//     console.log(new Date().toISOString());
//     timer = setTimeout(a, 1000);
// }, 3000);

// let deley = 2000;
// let status = "loading";
// let requests = 0;
//
// console.log(new Date().toISOString());
//
// let timerId = setTimeout(function request() {
//   console.log("Sending request");
//
//   requests++;
//   requests > 2 ? (status = "success") : (status = "reject");
//
//   if (status === "reject") {
//     console.log("rejected need to do more time");
//     console.log(new Date().toISOString());
//     deley *= 2;
//   }
//
//   timerId = setTimeout(request, deley);
//
//   if (status === "success") {
//     console.log("success");
//     console.log(new Date().toISOString());
//     clearTimeout(timerId);
//   }
// }, deley);

/****************************************
 * progress
 ****************************************/

// const $progress = document.querySelector('#progress');
//
// let i = 0;
//
// function count() {
//     const progress = i * 100 / 1e7;
//     $progress.style.width = `${progress}%`;
//
//     do {
//         i++
//     } while ( i % 1e4 !== 0);
//
//     if (i < 1e7) {
//         setTimeout(count)
//     }
// }
//
// count()

/****************************************
 *
 ****************************************/

// console.log('before')
// setTimeout(function inner1() {
//     console.log(1)
//     console.log(new Date().toISOString())
// }, 1000)
//
// setTimeout(function inner2() {
//     console.log(2)
//     console.log(new Date().toISOString())
// }, 3000)
//
// setTimeout(function inner3() {
//     console.log(3)
//     console.log(new Date().toISOString())
// }, 2000)
// console.log('after')
//
// console.log(1);
//
// setTimeout(function a() {
//   console.log(2);
// }, 100);
//
// setTimeout(function b() {
//   console.log(3);
//
//   Promise.resolve().then(function c() {
//     console.log(4);
//   });
// }, 0);
//
// Promise.resolve().then(function d() {
//   console.log(5);
// });
//
// queueMicrotask(function e() {
//   console.log(6);
// });
//
// console.log(7);

/****************************************
 * callback
 ****************************************/

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//
//   script.onload = () => callback(script);
//
//   document.head.append(script);
// }
//
// loadScript("./utils.js", (scrElement) => {
//   console.log(scrElement);
//   console.log(sum(2, 2));
// });

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Failed to load script ${script}`));

  document.head.append(script);
}

function handleError(error) {
  throw error;
}

// loadScript("./utils.js", (error, scrElement) => {
//     if (error) {
//         handleError(error)
//     } else {
//         loadScript("./utils2.js", (error, scrElement) => {
//             if (error) {
//                 handleError(error)
//             } else {
//                 loadScript("./utils3.js", (error, scrElement) => {
//                     if (error) {
//                         handleError(error)
//                     } else {
//                         loadScript("./utils4.js", (error, scrElement) => {
//                             if (error) {
//                                 handleError(error)
//                             } else {
//                                 console.log(sum(2, 2))
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

// function step1(error, script) {
//     if (error) {
//         handleError(error)
//     } else {
//         loadScript('', step2)
//     }
// }
//
// function step2(error, script) {
//     if (error) {
//         handleError(error)
//     } else {
//         loadScript('', step2)
//     }
// }
//
// function step3(error, script) {
//     if (error) {
//         handleError(error)
//     } else {
//         loadScript('', step3)
//     }
// }

/****************************************
 * Promises
 ****************************************/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();

    if (random > 0.5) {
      resolve("Success");
    } else {
      reject("Error");
    }
  }, 1000);
});

console.log(promise);

// promise
//   .then((result) => {
//     console.log(promise);
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(promise);
//     console.log(error);
//   });

// promise.then(
//   (result) => {
//     console.log(promise);
//     console.log(result);
//   },
//   (error) => {
//     console.log(promise);
//     console.log(error);
//   },
// );

// promise.catch((error) => {
//   console.log(promise);
//   console.log(error);
// });

// promise.finally(() => {
//     console.log(promise);
//     console.log('finaly')
// });
//
// promise
//   .catch((error) => {
//     console.log("catch", error);
//   })
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (reason) => {
//       console.log("then", reason);
//     },
//   );
