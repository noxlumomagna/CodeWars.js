Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap (numbers){
  return Math.max(...numbers.sort((a,b)=>a-b).map((e,i,numbers)=>i>0?Math.abs(e-numbers[i-1]):0))
}
