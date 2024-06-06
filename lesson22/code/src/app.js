import { sum } from './scripts/utils.js';
import _ from 'lodash';
import 'bootstrap';
import './styles/css/main.css';
import './styles/scss/main.scss';

import Cat from './images/cat.jpeg';

console.log(sum(1, 2));
console.log(_.uniq([1, 1, 1, 2, 2, 2, 2]));

const img = document.createElement('img');
img.src = Cat;

document.body.insertAdjacentElement('beforeend', img);
