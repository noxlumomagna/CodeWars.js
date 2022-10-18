Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

function uniqueSum(arr){
  return [...new Set(arr)].reduce((a,b)=>a+b,null)
}
