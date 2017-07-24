const readLineSync = require('readline-sync');
const logger = require('../logger')
logger('before question 1');
let number1 = readLineSync.question('Please enter a number');
let number2 = readLineSync.question('Please enter another number');
logger(`You entered ${number1} and ${number2}`);
