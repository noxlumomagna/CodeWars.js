In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

function calculate(str){
  return eval(str.split('plus').join('+').split('minus').join('-')).toString()
}

or

calculate=str=>eval(str.split('plus').join('+').split('minus').join('-')).toString()
