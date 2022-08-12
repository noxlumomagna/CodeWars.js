Given an array/list [] of integers , Find the Nth smallest element in this array of integers

function nthSmallest(arr,pos){
  let sorted = arr.sort((a,b)=>a-b)
  for(let i=0; i<sorted.length;i++){
    return sorted[pos-1]
  }
}
