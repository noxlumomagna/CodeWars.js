Given an array/list [] of integers , Find all the LEADERS in the array.

function arrayLeaders(numbers){
  return numbers.filter((e,i,arr)=>e>arr.slice(i+1).reduce((a,b)=>a+b,0))
}
