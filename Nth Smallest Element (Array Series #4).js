Given an array/list [] of integers , Find the Nth smallest element in this array of integers

function nthSmallest(arr,pos){
  return arr.sort((a,b)=>a-b)[pos-1]
}

or

nthSmallest=(arr,pos)=>arr.sort((a,b)=>a-b)[pos-1]
