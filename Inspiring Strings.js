When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

function longestWord(stringOfWords){
  return stringOfWords.split(' ').sort((a,b)=>a.length-b.length).slice(-1).toString()
}

or 

longestWord=stringOfWords=>stringOfWords.split(' ').sort((a,b)=>a.length-b.length).slice(-1).toString()
