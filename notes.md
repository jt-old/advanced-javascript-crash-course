# Notes

## Scope

### Three Types of Scope

These scope types are covered in the JavaScript Fundamentals Crash Course

1. Block Scope - variables declred inside a pair of curly braces canot be accessed fro outside the block
2. Function Scope- variables declared inside a function cannot be accessed fro outside the function
3. Global Scope - globally scoped variables can be accessed inside a block or function

### Nested Function Scope

In JavaScript, it is possible to define a function within a function.

Lexical Scoping describes how JavaScript resovles variable names when functions are nested.

When we have nested fucntions, JavaScript variable lookup begins at the inner-most function and moves outward until it reaches the global scope.

The main takeaway is that nested functions have access to variables in their own scope as well as access to variables in the outer scope.

## Closures

According to [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), a closure is the combination of a function bundled together with references to its surrounding state. Closures are created everytime a function is created, at function creation time.

This definition doesn't really help someone understand what closure is.... How about:

In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the funciton definition have an associated persistent memory which could hold on to live data between executions. This combination of the function and its scope chain is what is called closure in JavaScript.
