When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

function swap (string) {
  let vowels = ['a','e','i','o','u']
  return string.split('').map(e=>vowels.includes(e) ? e.toUpperCase():e).join('')
}
