Write a program that outputs the top n elements from a list.

function largest(n,xs){
    return xs.sort((a,b)=>a-b).slice(xs.length-n)
}
