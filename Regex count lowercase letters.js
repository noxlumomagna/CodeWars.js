Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
  return str.split('').filter(e => e.charCodeAt(0)>96 && e.charCodeAt(0)<123).length
}
