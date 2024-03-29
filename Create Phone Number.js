Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  let phone = numbers.join('')
  return `(${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6)}`
}

or

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  for(let i = 0; i < numbers.length; i++){
    format = format.replace('x', numbers[i]);
  }
  return format;
}
