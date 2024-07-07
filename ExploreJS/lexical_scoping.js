// any variable inside a function is not accessible outside the function,
// but if an inner function is declared within a function then the variables of
// outer function are accessible in the inner function
function outer() {
  let name = "Mozilla";
  // password is not accessible which means outer function can't access scope of its inner functions.
  // console.log(password);
  function inner() {
    let password = "123";
    console.log(name);
  }
  function inner2() {
    console.log(name);
    // here password is not accessible which means inner functions can't share variables as well.
    // console.log(password);
  }
  inner();
  inner2()
}
outer();
