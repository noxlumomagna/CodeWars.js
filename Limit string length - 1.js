The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

function solution(str,limit){
 return str.length > limit ? str.slice(0, limit) + '...' : str;
}
