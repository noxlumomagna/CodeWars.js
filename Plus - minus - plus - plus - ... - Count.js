Count how often sign changes in array.

function catchSignChange(arr){
  let changes=0;
  let a=arr.map((e,i,arr)=>(e>=0&&arr[i+1]<0)||(e<0&&arr[i+1]>=0) ? changes++ : changes)
  return changes
}

or

function catchSignChange(arr){
  let changes = 0
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]>= 0 && arr[i+1]<0 || arr[i]<0 && arr[i+1]>=0)
    changes++
  }
  return changes
}
