You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

function decipherThis(str){
    return str.split(' ').map(e=>{
    let number = ''
    let letters = ''
    let array = e.split('')
    for(let i=0; i<array.length; i++){
      if(+array[i] == array[i]){
        number = number + array[i]
      }else{
        letters = letters + array[i]
      }
    }
    if(letters.length > 1){
      return String.fromCharCode(number)+letters.slice(-1)+letters.slice(1,-1)+letters.slice(0,1)
    }
    return String.fromCharCode(number)+letters
  }).join(' ')
}
