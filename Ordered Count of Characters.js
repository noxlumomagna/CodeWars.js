Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

function orderedCount(text){
  return Array.from(text.split('').reduce((e,i)=>e.set(i,e.has(i)?e.get(i)+1:1),new Map()))
}
