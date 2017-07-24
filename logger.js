const moment = require('moment');
const chalk = require('chalk');
function logger(message){

let currentDate =chalk.magentaBright(moment().format(" dddd, MMMM Do YYYY, h:mm:ss a")
);
console.log('it is', currentDate);

let day = chalk.cyanBright(moment().format("DDDo")
);
console.log('it is the', day,'day of the year');

let seconds = chalk.magentaBright(moment().unix()
);
console.log('it is', seconds, 'seconds into the day');


let dayLight = chalk.greenBright(moment().isDST()
);
  if(dayLight === true){
    dayLight = 'it is what it is';

  }
  console.log(dayLight);
  
let leapYear = chalk.greenBright(moment().isLeapYear()
);
console.log('it is during',leapYear);

  // console.log('it is',currentDate,'it is the', day,
  // 'day of the year','it is during', dayLight, leapYear,message);
}
module.exports = logger;
