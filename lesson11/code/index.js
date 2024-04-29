/****************************************
 * spread & rest operators
 ****************************************/

// const obj = {
//   name: "Serhii",
//   age: 33,
//   hobbies: ["shooting"],
//   isAdmin: true,
//   preferences: {
//     confirmed: true,
//     devices: []
//   }
// };
//
// const arr = ["el1", { name: "Serhii" }, 3, 4 ,5];

// const { preferences: { confirmed = false }} = obj;
// const { preferences: userPreferences} = obj;
// const { name: userName, preferences: example, ...rest} = obj;
// console.log(confirmed)
// console.log(userPreferences)
// console.log(example)
// console.log(userName)
// rest.hobbies.push('example');
// console.log(obj)

// const [first = 'Hello world!', second, ...rest] = arr;
//
// console.log(first)
// console.log(second)
// console.log(rest)

// const { name, age, hobbies} = obj;
//
// console.log(name)
// console.log(age)
// console.log(hobbies)

// const { name, ...rest} = obj;
//
// console.log(name)
// console.log(rest)

// const { name = null, example = null, ...rest } = obj;
//
// console.log(name)
// console.log(example)
// console.log(rest)

// function foo(a, b, c, ...rest) {
//   console.log(rest)
//   return a + b + 0 + c
// }

// const arr1 = [1, 1, 1]
// const string = '12afasfasdfa'
//
// console.log(foo(1, 1, 1))
// console.log(foo(...arr1))
// console.log(foo(...string))

// console.log({
//   ...arr
// })

// console.log({
//   ...obj,
// });
//
// console.log([...arr]);

// function foo({ digit1 = 0, digit2 = 0 }) {
//   return digit1 + digit2;
// }
//
// function foo2(a, b, c) {
//   return a + b + c;
// }
//
// console.log(foo({ digit1: 1 }));

/****************************************
 * window
 ****************************************/

// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.history)
// console.log(window.location)
// console.log(window)

/****************************************
 * document
 ****************************************/

// console.log(document)
// console.log(document.body)
// console.log(document.head)
//
// document.body.style.backgroundColor = 'white';
// const button = document.createElement('button');
// button.innerText = 'Reload the page';
// button.onclick = () => {
//   window.location.reload()
// }
// document.body.insertAdjacentElement('beforeend', button)

/****************************************
 * navigation
 ****************************************/

// for (const node of document.body.childNodes) {
//   console.log(node)
// }

// const titleNode = document.body.childNodes[1]
//
// console.log(titleNode)

// console.log(title.firstChild)
// console.log(title.lastChild)
// console.log(title.previousSibling)
// console.log(title.nextSibling)
// console.log(title.childNodes)
//
// console.log(title === document.body.childNodes[0])

// const titleElement = document.body.children[1];

// console.log(titleElement)
// console.log(titleElement.children)
// console.log(titleElement.firstElementChild)
// console.log(titleElement.lastElementChild)
// console.log(titleElement.previousElementSibling)
// console.log(titleElement.nextElementSibling)

// console.log(titleElement)
// console.log(titleElement.childNodes)
// console.log(titleElement.firstChild)
// console.log(titleElement.lastChild)
// console.log(titleElement.previousSibling)
// console.log(titleElement.nextSibling)

/****************************************
 * searching
 ****************************************/

// const title = document.getElementById('title');
// const lis = document.querySelectorAll('li')
// const ul = document.querySelector('ul')
//
// for (const li of lis) {
//     if (li.matches('.example')) {
//         li.style.backgroundColor = 'red'
//     }
//
//     console.log(li.closest('.parent'))
// }
// // console.log(title)
// // console.log(lis)
// // console.log(ul)
//
// console.log(document.querySelectorAll('*'))

/****************************************
 * interfaces
 ****************************************/

// const titile = document.body.children[0];
// console.dir(titile)
//
// console.log(titile instanceof HTMLHeadingElement)
// console.log(titile instanceof HTMLElement)
// console.log(titile instanceof Node)
// console.log(titile instanceof EventTarget)
// console.log(titile instanceof CharacterData)

// for ( const node of document.childNodes) {
//     console.log(node.nodeType)
// }

/****************************************
 * content
 ****************************************/

// const title = document.body.children[0];
//
// title.innerText = 'Hello world' // element
// title.textContent = 'Hello world' // node

// const img = document.getElementById('image');
// img.src = '../assets/cat.jpeg';
// img.style.width = '300px';
// img.style.height = '200px';

// const button = document.querySelector('button');
// button.onclick = () => {
//     console.log('click')
// }


