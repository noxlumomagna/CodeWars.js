Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(e=>e.length > n)
}

or

filterLongWords=(sentence,n)=>sentence.split(' ').filter(e=>e.length > n)
