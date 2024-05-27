/****************************************
 * chain
 ****************************************/

// const promise = new Promise((resolve) => {
//   resolve(1);
// });
//
// promise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((value) => {
//     return value + 1;
//   })
//   .then((value) => {
//     console.log(value);
//   });

// const start = Date.now();
//
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });
//
// promise
//   .then((value) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const random = Math.random();
//         if (random < 0.5) {
//           resolve(random);
//         } else {
//           reject(new Error("Error"));
//         }
//       }, 3000);
//     }).then((value1) => {
//       return value1 + 1;
//     });
//   })
//   .then((value) => {
//     console.log(value, "=> ", Date.now() - start);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/****************************************
 * all
 ****************************************/

// const start = Date.now();
//
// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(1)
//     },1000)
// })
//
// const promise2 = new Promise((_, reject) => {
//     setTimeout(() => {
//         reject(new Error('Ups...!'))
//     },2000)
// })
//
// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(3)
//     },3000)
// })
//
// const promise4 = new Promise((_, reject) => {
//     setTimeout(() => {
//         reject(new Error('Ups2...!'))
//     },4000)
// })
//
// const result = Promise.all([promise1, promise2, promise3]);
// // const result = Promise.allSettled([promise1, promise2, promise3]);
// // const result = Promise.race([promise1, promise2, promise3]);
// // const result = Promise.any([promise2, promise4]);
//
// result.then(value => {
//     console.log(value, '=> ', Date.now() - start)
// }).catch(error => {
//     console.log(error, '=> ', Date.now() - start)
// })

/****************************************
 * async
 ****************************************/

// async function foo() {
//     return 1
// }
//
//
// function foo() {
//     return new Promise( resolve => resolve(1))
// }

// async function foo() {
//     const promise = new Promise(resolve => {
//         setTimeout(() => resolve(1), 1000)
//     })
//
//     const result = await promise;
//
//     console.log(result + 1)
// }
//
// foo()

// async function fetchFilm() {
//     let films;
//
//     const res = await fetch('https://swapi.dev/api/films')
//     const data = await res.json();
//
//     films = data.results || []
//
//     console.log(films)
// }
//
// fetchFilm()

/****************************************
 * try catch
 ****************************************/
// console.log('before')
// try {
//     console.log(hello)
// } catch (error) {
//     console.log('Error => ', error)
// } finally {
//     console.log('Finally')
// }
// console.log('after')

/****************************************
 * Error
 ****************************************/

// const expression = 'cosole.log("hello!")';
//
// try {
//     eval(expression)
// } catch (e) {
//     console.error(e)
// }

// try {
//     new Array(-1)
// } catch (e) {
//     console.error(e)
// }

// try {
//     console.log(expression)
// } catch (e) {
//     console.error(e)
// }

// try {
//     console.log(expression;
// } catch (e) {
//     console.error(e)
// }

// try {
//     let some;
//     some.toString()
// } catch (e) {
//     console.error(e)
// }

// try {
//     decodeURIComponent('%')
// } catch (e) {
//     console.error(e)
// }

// console.dir(Error)
// console.dir(ReferenceError)

/****************************************
 * custom
 ****************************************/

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'ValidationError'
//     }
// }

// class PropertyRequieredError extends ValidationError {
//     constructor(property) {
//         super('No propery: ', property);
//         this.name = 'PropertyRequieredError';
//         this.property = property
//     }
// }
//
// try {
//     example
// } catch {
//     throw new PropertyRequieredError('example')
// }

/****************************************
 *
 ****************************************/

// fetch("https://reqres.in/api/users")
//   .then((value) => {
//     return value.json();
//   })
//   .then((value) => {
//     console.log(value);
//   });
//
// async function postUsers(user) {
//   const resp = await fetch("https://reqres.in/api/users", {
//     headers: { "Content-Type": "application/json" },
//     method: "POST",
//     body: JSON.stringify(user),
//   });
//
//   const data = await resp.json();
//
//   console.log(data);
// }
//
// postUsers({ name: "Serhii", job: "dev" });

/****************************************
 * formData
 ****************************************/

// const form = document.forms["add-user-form"];
//
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//
//   const requestBody = new FormData(e.currentTarget);
//
//   let response = await fetch("https://reqres.in/api/users", {
//     method: "POST",
//     body: requestBody,
//     headers: { "Content-Type": "multipart/form-data" },
//   });
//
//   let result = await response.json();
//
//   console.log(result);
// });


// const form = document.forms['add-user-form'];
//
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//
//     const input = {
//       name: e.currentTarget.elements.name.value,
//       surname: e.currentTarget.elements.surname.value
//     }
//
//     const response = await fetch("https://reqres.in/api/users", {
//         method: "POST",
//         body: JSON.stringify(input),
//         headers: { "Content-Type": "application/json" },
//     })
//
//     const reader = response.body.getReader();
//
//     const contentLength = +response.headers.get('Content-Length');
//
//     let recivLength = 0;
//     let chunks = [];
//
//     while (true) {
//         const { done, value } = await reader.read();
//
//         if (done) {
//             break;
//         }
//
//         chunks.push(value);
//         recivLength += value.length;
//
//         console.log(`Recived ${recivLength} from ${contentLength}`)
//     }
//
//     let chunksAll = new Uint8Array(recivLength);
//     let i = 0;
//
//     for (const chunk of chunks) {
//         chunksAll.set(chunk, i)
//         i += chunk.length
//     }
//
//     const data = new TextDecoder('utf-8').decode(chunksAll);
//     const result = JSON.parse(data)
//
//     console.log(result)
//
// })

/****************************************
 * fetch films
 ****************************************/
// const fetchBtn = document.querySelector("[data-fetch]");
// const filmsList = document.querySelector("[data-list]");
// const loader = document.querySelector("[data-loader]");
//
// class Fetch {
//   static convertPath(url, path) {
//     return new URL(path, url);
//   }
//
//   constructor(url) {
//     this.url = url;
//     this.abortController = null;
//   }
//
//   async get(path, headers) {
//     this.abortController = new AbortController();
//     const resp = await fetch(Fetch.convertPath(this.url, path), {
//       signal: this.abortController.signal,
//       headers,
//     });
//
//     if (!resp.ok) throw new Error("ups something went wrong");
//
//     return await resp.json();
//   }
//
//   get controller() {
//     return this.abortController;
//   }
// }
//
// const swapi = new Fetch("https://swapi.dev/api/");
//
// loader.addEventListener("click", () => {
//   swapi.abortController.abort();
// });
//
// function showLoader(status) {
//   if (!status) return;
//
//   switch (status) {
//     case "loading": {
//       loader.classList.remove("d-none");
//       break;
//     }
//     case "success": {
//       loader.classList.add("d-none");
//       break;
//     }
//     case "error": {
//       loader.classList.add("d-none");
//       break;
//     }
//     default: {
//       break;
//     }
//   }
// }
//
// async function fetchFilms() {
//     showLoader("loading");
//     try {
//         const films = await swapi.get("films");
//         showLoader("success");
//
//         films.results.forEach((el) => {
//             addFilms(el.title);
//         });
//     } catch (e) {
//         console.log(e);
//         showLoader("error");
//         fetchBtn.classList.remove('d-none')
//     } finally {
//         showLoader(null);
//     }
// }
//
// function addFilms(content) {
//     const li = document.createElement("li");
//     li.classList.add(
//         "list-group-item",
//         "d-flex",
//         "justify-content-between",
//         "align-items-center",
//     );
//     li.textContent = content;
//
//     const button = document.createElement("button");
//     button.classList.add("btn", "btn-link");
//     button.textContent = "Show info";
//
//     li.insertAdjacentElement("beforeend", button);
//     filmsList.insertAdjacentElement("beforeend", li);
// }
//
// fetchBtn.addEventListener("click", (e) => {
//     filmsList.classList.remove("d-none");
//     e.currentTarget.classList.add("d-none");
//     fetchFilms();
// });
