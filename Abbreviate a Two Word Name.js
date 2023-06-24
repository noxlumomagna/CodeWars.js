Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

function abbrevName(name){
  let firstAndLast = name.toUpperCase().split(' ')
  return firstAndLast[0].slice(0,1) + '.' + firstAndLast[1].slice(0,1)
}

or

function abbrevName(name){
  return name.split(' ').map(e=>e[0].toUpperCase()).join('.')
}
