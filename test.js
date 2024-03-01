// fibonacci method
function fib(n) {
    if (n < 2) return n;
     else return fib(n-1) + fib(n-2);
}

//  Testing the fibonacci function
console.log("Fibonacci of 8 is: " + fib(8 )) 

//  Factorial method
function factorial(n) { if (n < 2) return n;
     else return n * factorial(n-1);
}




