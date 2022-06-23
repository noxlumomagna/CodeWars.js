Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(array) {
  return array.sort((a,b)=>a-b).reduce((a,b)=>a+b*array.pop(),0);
}
