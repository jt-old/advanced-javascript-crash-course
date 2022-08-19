// Function Scope

/* In JavaScript, it is possible to define a function within a function.

Lexical Scoping describes how JavaScript resovles variable names when functions are nested.

When we have nested fucntions, JavaScript variable lookup begins at the inner-most function and moves outward until it reaches the global scope.

The main takeaway is that nested functions have access to variables in their own scope as well as access to variables in the outer scope. */

// Nested Functions

/* let a = 10

function outer() {
  let b = 20
  function inner() {
    let c = 30
    console.log(a, b, c)
  }
  inner()
}
outer() */ // 10 20 30

// JS checks to see if 'c' is defined in the inner function, next it looks for 'b'. It looks to see if 'b' is defined in the inner function. It is not, so JS goes one level up and checks in the 'outer' fuction scope. It is and it's value is 20, so 20 is logged in the terminal. Next, JS checks if 'a' is present in the 'inner' function scope. It is not, so it checks to see if it is in the 'outer' function scope. It still is not, so JS goes to the next level up, to the global scope. It checks again, and the variable is present in the global scope, so it logs the value to the console. This is called: Lexical Scoping, which describes how JavaScript resovles variable names when functions are nested.

// Closures

/* According to [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), a closure is the combination of a function bundled together with references to its surrounding state. Closures are created everytime a function is created, at function creation time.

This definition doesn't really help someone understand what closure is.... How about:

In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the funciton definition have an associated persistent memory which could hold on to live data between executions. This combination of the function and its scope chain is what is called closure in JavaScript. */

/* function outer() {
  let counter = 0
  function inner() {
    counter++
    console.log(counter)
  }
  inner()
}
outer() // 1
outer() // 1 1 */

// When the variable 'counter' is encounted, the JS engine checks to see if 'counter' is present in the 'inner' function scope. It is not, so it checks the 'outer' function scope. The variable is present and it increments the value by '1' and logs the new value to the terminal, which is '1'. If we invoke the function twice, a temporary memory is established and we have a new counter variable initialized to '0' and then incrememented. Hence, every outer function call will always print '1' to the console.

// In JavaScript, it is possible to return a function from other functions.

// Let's say we don't necessarily want to invoke the inner function right away, instead we want to 'return' the function and invoke it at a later point in time. In JavaScript, it is possible to return a function from other functions. In returning the function, we can assign the result of invoking out the function to a variable, that we'll call 'fn'. So, const fn = outer(). All we are doing is, instead of executing the inner function from within the outer function, we are returning it and then invoking the function twice.

/* function outer() {
  let counter = 0
  function inner() {
    counter++
    console.log(counter)
  }
  return inner
}
const fn = outer()

//invoking the 'fn' function twice
fn()
fn() */

// logs: 1 2
//This is because of the concept of Closures in JavaScript. In such a scenario, JavaScript doesn't just return the 'inner' function. It returns the 'inner' function as well as its scope. In this example the function scope has just one variable, 'counter' initialized as '0'. So, we have the function 'inner' bundled together with the variable 'counter' which is together termed as a Closure. In such situations, the function will persist, or remember, the value of the variable 'counte'. So, when we invoked the 'fn' function the first time, the function 'outer' incremented the counter by '1'. The outer function remembers that 'counter' is now '1', so the next time we invoke the 'fn' function, it processes it as 1+1.

// The key pojnt to keep in mind is that, in closures, an inner function has access to variables in the outer function scope, even after the outer function has finished execution.

// Function Currying

/* Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time

ex. function f(a,b,c) is transformed into f(a)(b)(c)

Currying doesn't call a function, it simply transforms it.

Currying is used to compose reusable functions and makes composing new functions very easy. */

/* function sum(a, b, c) {
  return a + b + c
} */
// console.log(sum(2, 3, 5)) // 10

// Currying this sum function means that we need to transform 'sum' from calling it with all three argumnets to calling it with one argument at a time.

// Need to transform (sum(2, 3, 5) into sum(2)(3)(4)

// The way we do this is by nesting functions, where each function takes one argument at a time

/* We start off with a function called curry. This function will accept a functiona as its argument and return a curried version of the function. For each of the three arguments, we return individual functions which accept one argument at a time. The functions are nested one at a time.*/

/* From the innermost function, we return the actual passed in function with all of the necessary arguments. */

/* function sum(a, b, c) {
  return a + b + c
}

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c)
      }
    }
  }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5)) // 10

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5) // 10 */

/* The three parenthesis can be broken down into three different function calls. The first const accepts the first argument, the second accepts the second argument, and the third const accepts the third argument. We are accepting the sum of all three arguments, then returning the result. console.log(add5) is just accepting add5 instead of actually invoking add5 */

// this

/* The JavaScript 'this' keyword which is used in a function, refers to the object it belongs to.

It makes functions reusable by letting you decide the object value.

This value is determined entirely by how a function is called. */

/* function sayMyName(name) {
  console.log('My name is ${name}')
}

sayMyName('Walter White') */

/*  You can determine the value of 'this' keyword by how a function is called.

There are four ways to invoke a function in JavaScirpt and determine the value of 'this' keyword.

1. Implicit binding
2. Explicit binding
3. New binding
4. Default binding
*/

// 1. Implicit Binding

const person = {
  name: 'Justin',
  sayMyName: function () {
    console.log('My name is ${this.name}')
  },
}

person.sayMyName() // My name is Justin

/* The implicit binding rule states that when a funciton is invoked with the 'dot' notation, the object to the left of the dot is what this keyword is referencing. In the above example, JavaScript treats 'this.name' as 'person.name', which is equal to the string 'Justin' and the output  */

// 2. Explicit Binding

/*  */

function sayMyName() {
  console.log('My name is ${this.name}')
}
