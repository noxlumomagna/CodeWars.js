In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion.

function factorial(n){
    let recursion = 1;
    while (n > 1) {
        recursion = recursion * n;
        n = n - 1;
    }
    return recursion;
}
