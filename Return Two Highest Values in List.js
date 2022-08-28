In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

function twoHighest(arr) {
  return [... new Set(arr)].sort((a,b)=>b-a).slice(0,2);
}
