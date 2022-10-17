Find the last element of the given argument(s).

function last(list){
  let last = arguments[arguments.length-1]
  return list[list.length-1] || last
}
