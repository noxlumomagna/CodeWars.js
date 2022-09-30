Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

function mostFrequentItemCount(collection){
  let count = 0;
  let frequentCount = 0;
  for(let i=0;i<collection.length;i++){
    for(let j=0;j<collection.length;j++){
      if(collection[i] === collection[j]){
        count++
      }
      if(frequentCount < count){
        frequentCount = count
      }
    }
    count = 0
  }
  return frequentCount
}
