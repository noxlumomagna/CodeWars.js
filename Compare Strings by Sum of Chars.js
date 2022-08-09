Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

function compare(s1,s2) {
  function convert(s){
    if(s === null){
      return 0;
    }
    let total = 0
    let array = s.toUpperCase().split('')
    for(let i = 0; i < array.length; i++){
      let value = array[i].charCodeAt()
      if(value > 64 && value < 91){
        total = total + value
      }else{
        return 0
      }
    }
    return total
  }
  return convert(s1) === convert(s2)
}
