Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

function divCon(x){
  let strings = x.filter(n => typeof n === 'string')
  let nums = x.filter(n => typeof n === 'number')
  
  let strSum = strings.reduce((a, b) => a + +b, 0)
  let numSum = nums.reduce((a, b) => a + b, 0)

  return numSum - strSum
}
