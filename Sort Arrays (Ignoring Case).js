Sort the given array of strings in alphabetical order, case insensitive. For example:

function sortme(names){
  return names.sort((a,b)=>a.localeCompare(b, undefined, {sensitivity: 'base'}))
}
