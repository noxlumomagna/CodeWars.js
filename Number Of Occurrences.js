Write a function that returns the number of occurrences of an element in an array.



Array.prototype.numberOfOccurrences = function(number){
  return this.filter((e)=>e==number).length
}
