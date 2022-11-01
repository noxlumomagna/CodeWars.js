Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(s){
  let vowels = ['a','e','i','o','u']
  return s.toLowerCase().split('').map(e=>vowels.includes(e) ? 1:0).join('')
}
