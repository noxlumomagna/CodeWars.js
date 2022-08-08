Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

function strong(n){
  if(n===1)return 'STRONG!!!!';
  let response = []
  let array = n.toString().split('').map((e)=>{
    for(let i=1;i<e;i++){
      response.push(i)
    }
  })
  return response.reduce((a,b)=>a*b,1)+1 == n ? 'STRONG!!!!':"Not Strong !!";
}
