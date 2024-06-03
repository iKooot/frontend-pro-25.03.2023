"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = logger;
exports.sum = sum;
function sum(a, b) {
  return a + b;
}
var foo = function foo() {
  console.log('foo');
};
function logger(arg) {
  console.log(arg);
}