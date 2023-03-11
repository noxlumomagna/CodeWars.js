You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
  let strLength = s.length
  let midChar = s.length/2
  
  return strLength % 2 === 0 ? s.slice(midChar - 1,midChar+1) : s.charAt(midChar)
}
