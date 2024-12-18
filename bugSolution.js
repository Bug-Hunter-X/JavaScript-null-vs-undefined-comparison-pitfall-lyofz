function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // or throw an error, or return a default value, etc. 
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(undefined, 2)); // 0
console.log(foo(1, undefined)); // 0