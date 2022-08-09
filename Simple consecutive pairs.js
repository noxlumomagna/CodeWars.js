In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

function pairs(array){
  let consecutive = []
  for(let i=0;i<array.length;i+=2){
    if(array[i]+1===array[i+1] || array[i]===array[i+1]+1){
      consecutive.push([array[i],array[i+1]])
    }
  }
  return consecutive.length;
}
