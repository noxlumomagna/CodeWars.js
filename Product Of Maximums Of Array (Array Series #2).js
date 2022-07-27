Given an array/list [] of integers , Find the product of the k maximal numbers.

function maxProduct(numbers, size){
  return numbers.sort((a,b)=>a-b).slice(numbers.length-size).reduce((a,b)=>a*b,1)
}

or

maxProduct=(numbers,size)=>numbers.sort((a,b)=>a-b).slice(numbers.length-size).reduce((a,b)=>a*b,1)
