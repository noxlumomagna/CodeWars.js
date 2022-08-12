It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

function joinStrings(string1, string2){
   return `${string1} ${string2}`
}

or

joinStrings=(s1, s2)=>`${s1} ${s2}`
