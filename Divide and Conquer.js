Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

function divCon(array){
  let stringIntegers = array.filter(e => typeof e === "string")
  let numberIntegers = array.filter(e => typeof e === "number")
  
  return numberIntegers.reduce((a,b)=>a+b,0) - stringIntegers.reduce((a,b)=>a + +b,0)

}
