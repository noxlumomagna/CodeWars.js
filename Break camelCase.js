Complete the solution so that the function will break up camel casing, using a space between words.
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

function solution(string){
    return string.split('').map(e=> e===e.toUpperCase() ?  ' '.concat(e) : e).join('')
}

or

solution=a=>a.split('').map(e=>e===e.toUpperCase()?' '.concat(e):e).join('')
