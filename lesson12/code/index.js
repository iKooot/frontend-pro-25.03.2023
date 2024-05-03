// const h1 = document.getElementById('title');

// h1.id = 'new-title';
// console.log(h1.id)
//
// h1.showContent = function () {
//     console.log(this.innerHTML)
// }
//
// h1.showContent()
// console.dir(h1)

// console.log(h1.hasAttribute('id'));
// console.log(h1.hasAttribute('class'));
//
// if (h1.hasAttribute('id')) console.log(h1.getAttribute('id'));
//
// if (!h1.hasAttribute('class')) h1.setAttribute('class', 'title');
//
// h1.removeAttribute('class')

// for (const attr of h1.attributes) {
//     console.log(attr.value)
// }

// h1.dataset.title = 'header'
// h1.dataset.myName = ''
//
// console.log(document.querySelector('[data-my-name]'))

/****************************************
 * create
 ****************************************/
// const div = document.querySelector('.container')
//
// const subTitle = document.createElement('h2');
// const content = document.createTextNode('Sub title');
// subTitle.append(content)
// subTitle.prepend(content)

// div.append(subTitle)
// div.prepend(subTitle)
// div.before(subTitle)
// div.after(subTitle)
// div.replaceWith(subTitle)

// div.insertAdjacentElement('beforebegin', subTitle)
// div.insertAdjacentElement('afterbegin', subTitle)
// div.insertAdjacentElement('beforeend', subTitle)
// div.insertAdjacentElement('afterend', subTitle)

/****************************************
 * remove
 ****************************************/

// div.remove();

/****************************************
 * clone
 ****************************************/

// const cloneDiv = div.cloneNode();
// const cloneDiv = div.cloneNode(true);
// console.log(cloneDiv)

/****************************************
 * fragments
 ****************************************/

// const data = [1, 2, 3, 4, 5];
//
// function createList(data) {
//   const list = document.createElement("ul");
//
//   // const fragment = new DocumentFragment();
//   const fragment = document.createDocumentFragment();
//
//   data.forEach((el) => {
//     const li = document.createElement("li");
//     li.innerText = el;
//
//     fragment.append(li);
//   });
//
//   list.append(fragment);
//
//   return list;
// }
//
// document.body.insertAdjacentElement("beforeend", createList(data));

/****************************************
 * classes
 ****************************************/

// const h1 = document.getElementById('title');
//
// h1.className = 'example example2';
// console.log(h1.className);
// h1.classList.forEach( el => {
//     console.log(el)
// })
// h1.classList.add('new-class');
// h1.classList.remove('new-class');
// console.log(h1.classList.contains('new-class'));
// h1.classList.toggle('new-class');

/****************************************
 * style
 ****************************************/

// const h1 = document.getElementById('title');
// h1.style.fontWeight = 700;

// h1.style.cssText = `color: red; opacity: 1; transition: all 0.5s ease-out allow-discrete`;
// console.log(getComputedStyle(h1))

/****************************************
 * events
 ****************************************/

// const button = document.querySelector('[data-button]');
// const input = document.querySelector('[data-input]');

// class InputHandlers {
// handleEvent(event) {
//     console.log(event)
//     switch (event.type) {
//         case 'input': {
//             console.log('input', event.target.value);
//             break
//         }
//         case 'click': {
//             console.log('click');
//             break
//         }
//         default: {
//             break
//         }
//     }
// }

//     handleEvent(event) {
//         //on<event>
//         const method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
//         this[method](event)
//     }
//
//     onClick(event) {
//         console.log('click')
//     }
//
//     onInput(event) {
//         console.log('input', event.target.value)
//     }
// }
//
// const inputHandler = new InputHandlers().onInput
//
// input.addEventListener('input', inputHandler)
// input.removeEventListener('input', inputHandler)
// input.addEventListener('click', new InputHandlers())

// // on<event>
//
// button.onclick = function () {
//     console.log(this.classList.toggle('active'));
// }
//
// window.onresize = () => {
//     console.log('resize')
// }
//
// // button.onclick = null;
// window.onresize = null;

// let counter = 1;
//
// const clickHandler = () => {
//     counter++
//     if (counter === 2 ) button.removeEventListener('click', clickHandler)
//     console.log('click3')
// }
//
// button.addEventListener('click', () => {
//     console.log('click2')
// }, { once: true })
//
// button.addEventListener('click', clickHandler);

/****************************************
 *
 ****************************************/

// const input = document.querySelector('[data-input]')
// const div = document.querySelector('[data-container]')
// const button = document.querySelector('[data-button]')
// const body = document.body

// input.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     // e.stopImmediatePropagation()
//     console.log('input', e)
//     console.log('input', e.currentTarget)
//     console.log('input', e.target)
// })
//
// button.addEventListener('click', (e) => {
//     console.log('button', e)
//     console.log('button', e.currentTarget)
//     console.log('button', e.target)
// })
//
// div.addEventListener('click', (e) => {
//     console.log('div', e)
//     console.log('div', e.currentTarget)
//     console.log('div', e.target)
// },{capture: true })
//
// body.addEventListener('click', function(e) {
//     console.log('body', e)
//     console.log('body', e.currentTarget === this)
//     console.log('body', e.target)
// })

// const div = document.querySelector('[data-container]');
//
// div.addEventListener('click', (e) => {
//     if (e.target.type === 'submit') {
//         window.location = 'https://www.google.com'
//     }
//     if (e.target.type === 'text') {
//         console.log(e.target.value)
//     }
// })

/****************************************
 *
 ****************************************/

// class ButtonHandlers {
//   constructor(el) {
//     this._el = el;
//     el.onclick = this.onClick.bind(this);
//   }
//
//   submit() {
//     console.log("submit");
//   }
//
//   reload() {
//     console.log("reload");
//   }
//
//   save() {
//     console.log("save");
//   }
//
//   onClick(e) {
//       const action = e.target.dataset.action;
//       if (action) {
//           this[action]()
//       }
//   }
// }
//
// const container = document.getElementById('container');
// new ButtonHandlers(container);

/****************************************
 *
 ****************************************/

// document.forms.myForm.onsubmit = (e) => {
//     e.preventDefault()
//     console.log('submit')
// }