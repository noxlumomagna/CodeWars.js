In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

function solve(arr){
   return [...Array(arr.sort((a,b)=>a-b).length)].map((e,i)=>i%2 ? arr.shift():arr.pop());
};
