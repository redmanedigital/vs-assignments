var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';
let q = 'What would you like to do today?: '

while(option != 2){
  option = ask.keyInSelect(options, q);
  if(option === 0){
    console.log("You pick some flowers. You make a bouquet.");
  } else if (option === 1) {
    console.log("You shoot guns.");
  } else if (option === -1) {
    console.log('You need to select an option.')
  }
}

console.log("You fought a bear and got beat up!");
