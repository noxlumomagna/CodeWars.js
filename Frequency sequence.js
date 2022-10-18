Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

function freqSeq(str, sep) {
  let object = {}
  str.split('').map(e=>object[e] = object[e]? object[e]+1:1)
  return str.split('').map(e=>object[e]).join(sep)
}

or

function freqSeq(str, sep) {
  return str.split('').map((e,i,arr)=>arr.filter(i=>i===e).length).join(sep)
}
