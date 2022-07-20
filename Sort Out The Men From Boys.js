Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt

function menFromBoys(arr){
  return [...new Set(arr.filter(e=>e%2==0).sort((a,b)=>a-b).concat(arr.filter(e=>e%2!==0).sort((a,b)=>b-a)))]
}
