Given a string, swap the case for each of the letters.

function swap(str){
  return str.split('').map(e=>e == e.toLowerCase() ? e.toUpperCase(): e.toLowerCase()).join('')  
}
