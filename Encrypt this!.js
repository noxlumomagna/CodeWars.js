Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

function encryptThis(text){
  if (text == '') return ''
  let arr = text.split(' ')
  let encrypt = arr.map(e=>{
  let words = e.split('');
    words[0] = e.charCodeAt(0);
    [words[1],words[words.length-1]] = [words[words.length-1],words[1]]
    return words.join('')
  })
  return encrypt.join(' ')
}
