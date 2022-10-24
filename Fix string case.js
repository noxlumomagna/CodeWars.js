In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
    let upperCaseCount = s.split('').filter(e=>e===e.toUpperCase()).length
    let lowerCaseCount = s.split('').filter(e=>e===e.toLowerCase()).length
    
    return upperCaseCount > lowerCaseCount ? s.toUpperCase() : s.toLowerCase()
}
