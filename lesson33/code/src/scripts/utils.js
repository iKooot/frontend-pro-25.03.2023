export function sum(a, b) {
  return a + b;
}

export function addCount(obj, arr) {
  return {
    ...obj,
    count: arr.reduce((acc, number) => acc + number, 0),
  };
}

export function getNull() {
  return null;
}

export function getUndefined() {
  return undefined;
}

export function getDefined() {
  return 42;
}

export function getTruthy() {
  return 'Hello, world!';
}

export function getFalsy() {
  return 0;
}

export function greaterThan() {
  return 1;
}

export function greaterThanOrEqual() {
  return 2;
}

export function lessThan() {
  return 3;
}

export function lessThanOrEqual() {
  return 5;
}

export function helloWorld() {
  return 'Hello world!';
}

export function addHobie(hobbies, newHobie) {
  return [...hobbies, newHobie];
}