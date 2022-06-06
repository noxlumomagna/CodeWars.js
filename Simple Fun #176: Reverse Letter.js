Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

function reverseLetter(str){
  let array = [];
  for(let i=0; i<str.length; i++){
    if(96 < str[i].charCodeAt(0) && str[i].charCodeAt(0) < 123){
      array.push(str[i])
    }
  }
  return  array.reverse().join('');
}
