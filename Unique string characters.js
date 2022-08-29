In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
Notice also that you return the characters from the first string concatenated with those from the second string.

function solve(a,b){
  let first = a.split('').filter(e=>!b.split('').includes(e)).join('')
  let second = b.split('').filter(e=>!a.split('').includes(e)).join('')
  return first+second
};

or

function solve(a,b){
 return (a+b).split('').filter(e=>!a.includes(e)|| !b.includes(e)).join('')
};
