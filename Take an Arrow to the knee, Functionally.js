You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

function ArrowFunc(arr){
  return arr.map(e=>String.fromCharCode(e)).join('')
}

or

ArrowFunc=arr=>arr.map(e=>String.fromCharCode(e)).join('')
