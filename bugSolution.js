function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object' || typeof x.length !== 'number') {
    return 0; // Handle null, undefined, and non-objects gracefully
  }
  return x.length; 
}
//Example usage
console.log(foo(null)); //Outputs 0
console.log(foo([1,2,3])); //Outputs 3
console.log(foo(undefined)); //Outputs 0
console.log(foo(5)); //Outputs 0