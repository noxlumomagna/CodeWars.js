Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

function balance(left,right){
   left = left.split("").map(e=>e == "!" ? 2 : 3).reduce((a,b)=>a+b,0)
   right = right.split("").map(e=>e == "!" ? 2 : 3).reduce((a,b)=>a+b,0)
    return right === left ? "Balance" : right > left ? "Right" : "Left"
}
