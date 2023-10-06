#!/usr/bin/env node
import isNumberEven, { greetUser } from './brain-even.js';

console.log('Welcome to the brain games!');

greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

isNumberEven();
