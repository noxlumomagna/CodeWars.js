Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

function removeVowels(str){
  return str.split('').filter(e=>!'aeiou'.includes(e)).join('')
}

or

removeVowels=str=>str.split('').filter(e=>!'aeiou'.includes(e)).join('')
