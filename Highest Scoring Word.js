Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

function getScore(word){
  return word.split('').reduce((a,b)=>{
    return a+(b.charCodeAt()-96)},0)
}

function high(x){
  return x.split(' ').reduce((a,b)=>{
    return getScore(b) > getScore(a) ? b:a
  })
}
