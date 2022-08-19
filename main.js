// Nested Functions
/*
let a = 10

function outer() {
  let b = 20
  function inner() {
    let c = 30
    console.log(a, b, c)
  }
  inner()
}
outer() // 10 20 30
*/

// JS checks to see if 'c' is defined in the inner function, next it looks for 'b'. It looks to see if 'b' is defined in the inner function. It is not, so JS goes one level up and checks in the 'outer' fuction scope. It is and it's value is 20, so 20 is logged in the terminal. Next, JS checks if 'a' is present in the 'inner' function scope. It is not, so it checks to see if it is in the 'outer' function scope. It still is not, so JS goes to the next level up, to the global scope. It checks again, and the variable is present in the global scope, so it logs the value to the console. This is called: Lexical Scoping, which describes how JavaScript resovles variable names when functions are nested.

// Closures
/*
function outer() {
  let counter = 0
  function inner() {
    counter++
    console.log(counter)
  }
  inner()
}
outer() // 1
outer() // 1 1
*/

// When the variable 'counter' is encounted, the JS engine checks to see if 'counter' is present in the 'inner' function scope. It is not, so it checks the 'outer' function scope. The variable is present and it increments the value by '1' and logs the new value to the terminal, which is '1'. If we invoke the function twice, a temporary memory is established and we have a new counter variable initialized to '0' and then incrememented. Hence, every outer function call will always print '1' to the console.

// In JavaScript, it is possible to return a function from other functions.

// Let's say we don't necessarily want to invoke the inner fucntion right away, instead we want to 'return' the function and invoke it at a later point in time. In JavaScript, it is possible to return a function from other functions. In returning the function, we can assign the result of invoking out the function to a variable, that we'll call 'fn'. So, const fn = outer(). All we are doing is, instead of executing the inner function from within the outer function, we are returning it and then invoking the function twice.
function outer() {
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
fn()
// logs: 1 2
//This is because of the concept of Closures in JavaScript. In such a scenario, JavaScript doesn't just return the inner function. It returns the inner function as well as its scope. In this example functin scope has just one variable, 'counter'
