console.log('Start');

setTimeout(() => {
    console.log('setTimeout 1');
}, 0);

new Promise((resolve, reject) => {
    console.log('Promise 1');
    resolve('Resolved');
}).then(value => {
    console.log(value);
    return 'Promise 2';
}).then(value => {
    console.log(value);
});

setTimeout(() => {
    console.log('setTimeout 2');
}, 0);

console.log('End');

/*
Start
Promis 1
End
Resolved
Promis 2
setTimout 1
setTimout 2
 */