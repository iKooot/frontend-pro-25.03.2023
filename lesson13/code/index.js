/****************************************
 * forms
 ****************************************/

// const forms = document.forms;
// const passwordInput = document.querySelector('#exampleInputPassword1');

// console.log(forms)
// console.log(forms.example)
// console.log(forms.example.elements)
// console.log(forms.example.elements.email)
// console.log(forms.example.elements.password)
// console.log(passwordInput.form)

// const email = document.forms.example.elements.email;
// email.addEventListener('input', (e) => {
//     console.log(e.target.value);
// });
//
// const checkbox = document.forms.example.elements.formCheck;
// checkbox.addEventListener('input', (e) => {
//     console.log(e.target.checked);
// });
//
// const radio = document.forms.example.elements.flexRadioDefault;
// console.log(radio)
//
//
// const textArea = document.forms.example.elements.textArea;
// textArea.addEventListener('input', (e) => {
//     console.log(e.target.value);
// });

/****************************************
 * select
 ****************************************/

// function iterator() {
//     const keys = Object.keys(this);
//     let index = 0;
//
//     return {
//         next: () => {
//             if (index < keys.length) {
//                 const key = keys[index++];
//                 return { value: this[key], done: false }
//             } else {
//                 return { done: true }
//             }
//         }
//     }
// }
//
// const select = document.forms.example.elements.select;
//
// const options = [
//     {  text: 'Text 1', value: 'text1', defaultSelected: false, selected: false, [Symbol.iterator]: iterator },
//     {  text: 'Text 2', value: 'text2', defaultSelected: true, selected: true, [Symbol.iterator]: iterator },
//     {  text: 'Text 3', value: 'text3', defaultSelected: false, selected: false, [Symbol.iterator]: iterator },
//     {  text: 'Text 4', value: 'text4', defaultSelected: false, selected: false, [Symbol.iterator]: iterator },
// ];
//
// options.forEach( el => {
//     const option = new Option(...el);
//     select.append(option)
// })

/****************************************
 * tabindex
 ****************************************/
//
// document.forms.example.elements.name.tabIndex = 1
// document.forms.example.elements.password.tabIndex = -1

/****************************************
 * focus
 ****************************************/

// document.forms.example.elements.name.addEventListener('focus', () => {
//     console.log('focus')
// })
//
// document.forms.example.elements.name.addEventListener('blur', (e) => {
//     console.log('blur', e.target.value)
// })

// document.forms.example.addEventListener('focusin', (e) => {
//     console.log('focusin', e.target)
// })
//
// document.forms.example.addEventListener('focusout', (e) => {
//     console.log('focusout', e.target)
// })

/****************************************
 * events
 ****************************************/

// document.forms.example.elements.name.addEventListener('change', (e) => {
//     console.log('value was changed', e.target.value)
// })
//
// document.forms.example.elements.formCheck.addEventListener('change', (e) => {
//     console.log('value was changed', e.target.checked)
// })
//
// document.forms.example.elements.name.addEventListener('input', (e) => {
//     console.log('value was changed', e.target.value)
// })
//
// document.forms.example.elements.formCheck.addEventListener('input', (e) => {
//     console.log('value was changed', e.target.checked)
// })

// document.forms.example.elements.name.addEventListener('copy', (e) => {
//     console.log('copy')
//     e.clipboardData.setData('text', e.target.value)
//     // e.preventDefault();
// })
//
// document.forms.example.elements.name.addEventListener('paste', (e) => {
//
//     console.log('paste', e.clipboardData.getData('text'))
// })

// function createError(root, content) {
//     // awesome code
// }

// document.forms.example.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     const result = {}
//
//     Array.from(e.target.elements).forEach( el => {
//         result[el.name] = el.value
//
//         if (el.type === 'checkbox') result[el.name] = el.checked
//         if (el.type === 'radio' && el.checked) result[el.name] = el.value
//     })
//
//     console.log(result)
// })

/****************************************
 * regex
 ****************************************/

// const variable = 'world'
//
// const regex1 = new RegExp(`hello ${variable}`, 'i');
// const regex2 = /hello/i
//
// const str = 'Hello world! This World is great.';

// console.log(str.match(/hello/));
// console.log(str.match(/hello/i));
// console.log(str.match(/world/g));
// console.log(str.match(/world/gi));

// console.log(str.replace(/world/ig, '$& (after)'))
// console.log(str.replace(/world/i, '$`(before)'))
// console.log(str.replace(/world/i, "$'(before)'"))
// console.log(str.replace(/world/i, "$n"))
// console.log(str.replace(/world/i, "$<name>"))
// console.log(str.replace(/world/i, "$$"))

// const email = 'example@email.com';
//
// console.log(/@/.test(email))
// console.log(/123/.test(email))

/****************************************
 * classes
 ****************************************/

// console.log('hello123_'.match(/\w/ig))
// console.log('12345'.match(/\d/ig))
// console.log('\t \n \v \f \r    12345      '.match(/\s/ig))

// const str = '        some       value       ';

// console.log(str.replace(/\s/, ''))
// console.log(str.replace(/\s/g, ''))
// console.log(str.replace(/^\s+/, ''))
// console.log(str.replace(/\s+$/, ''))
// console.log(str.replace(/^\s+|\s+$/, ''))
//
// const str = 'Some walue #!@#$%@#$^%$#%^&%^&*(^&*(^%$#^@$#!1234_';
//
// console.log(str.replace(/\W+/g, ''))
// console.log(str.replace(/\S+/g, ''))
// console.log(str.replace(/\D+/g, ''))
/****************************************
 * dot
 ****************************************/

// const regex1 = /version.\d/i
// const regex2 = /version.\d/is
//
// console.log('May app is version1'.match(regex1))
// console.log('May app is version.1'.match(regex1))
// console.log('May app is version-1'.match(regex1))
// console.log('May app is version=1'.match(regex1))
// console.log('May app is version\n1'.match(regex1))
// console.log('May app is version\n1'.match(regex2))

/****************************************
 * anchors ^.....$
 ****************************************/

// const email = 'example@email.com'
// const email2 = '!#$@$!@#$!@email.com'
//
// console.log(/^hello/i.test('Hello world, hello name'))
// console.log(/name$/i.test('Hello world, hello name'))
// console.log(/^\w+@\w+.com$/i.test(email))
// console.log(/^\w+@\w+.com$/i.test(email2))


/****************************************
 * /b
 ****************************************/

// const str = 'Hello world!';
//
// console.log(str.match(/world!/i))
// console.log(str.match(/\bworld!/i))
// console.log(str.match(/\bhello!/i))
// console.log(str.match(/world!\b/i))
// console.log(str.match(/\bworld\b/i))
// console.log('1 11 2222 22'.match(/\b\d\d\b/i))
// console.log('1 11 2222 22'.match(/\b\d\d\b/ig))

/****************************************
 * []{}()/^$.|?*+
 ****************************************/

// const str = 'PI: 3.14';
//
// console.log(str.match(/\d\.\d+/))

/****************************************
 * []
 ****************************************/

// const str = 'Hello world! some';
//
// console.log(str.match(/[lw]o/gi))
// console.log(str.match(/[^lw]o/gi))
// console.log(str.match(/[a-z]/gi))
// console.log(str.match(/[a-zA-Z]/gi))

// \d = [0-9]
// \w = [a-zA-Z0-9_]
// \s = [\t\n\v\f\r]

/****************************************
 * + ? *
 ****************************************/
//
// + = {1,}
// ? = {0,1}
// * = {0,}

// const str = 'Hello "some" i want to do "this"';
//
// console.log(str.match(/".+"/g))
// console.log(str.match(/".+?"/g))
// console.log(str.match(/"[^"]+"/g))

/****************************************
 * ()
 ****************************************/
//
// const domains = 'example.com example2.in example.example.com';
//
// console.log(domains.match(/(\w+\.)+\w+/g));
//
// const emails = 'example@mail.com @some exapmple@site-site.com';
//
// console.log(emails.match(/[-.\w]+@([\w-]+\.)+\w+/g))

/****************************************
 * |
 ****************************************/

// const time = 'now is 12:59 not 99:99';
//
// console.log(time.match(/([01]\d|2[0-3]):[0-5][0-9]/))






