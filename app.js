// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('What is your name?', function(name){
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });
const logger = require('logger')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter a number', function(number1){
  rl.question('Please enter another number.',function(number2){
    console.log(`You entered ${number1} and ${number2}`);
  rl.close();
  });


});
