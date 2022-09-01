In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

Equation will be the form of ax^2 + bx + c = 0

Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

function quadratic(x1, x2){
 return [1, -1*(x1+x2), x1*x2]
}

or

quadratic=(x1,x2)=>[1, -1*(x1+x2), x1*x2] 
