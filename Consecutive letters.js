Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True


function solve(s){
  let sorted = s.split('').sort().map(e=>e.charCodeAt())
  return sorted.map((e,i,arr)=>e+1===arr[i+1]).filter(e=>e===false).length<2
}
