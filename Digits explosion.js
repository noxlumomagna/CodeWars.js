Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

function explode(s){
  return s.split('').map(e=>e.repeat(e)).join('')
}

or

explode=s=>s.split('').map(e=>e.repeat(e)).join('')
