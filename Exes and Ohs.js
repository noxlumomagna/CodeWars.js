Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

function XO(str) {
    let xcount = 0
    let ocount = 0
    let checker = str.split('').map(e=>e.toLowerCase())
    for(let i=0;i<=checker.length;i++){
      if(checker[i] =='x') xcount++
      if(checker[i] =='o') ocount++
    }
  return xcount === ocount
}
