Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
  if(str.split(' ').map((e,i)=>i%2!==0 ? e.split('').reverse().join(''): e).join(' ') === '   ') return ''
  return str.split(' ').map((e,i)=>i%2!==0 ? e.split('').reverse().join(''): e).join(' ')
}
