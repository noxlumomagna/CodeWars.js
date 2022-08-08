Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

function calc(x){
  return x.split('').map(e => e.charCodeAt()).join('')
          .split('').map(Number).filter(x=>x===7).length * 6
}
