Write a function that takes an array and counts the number of each unique element present.

function count(array){
  let object = {}
  array.map(e=>(object[e]=object[e]+1||1))
  return object
}
