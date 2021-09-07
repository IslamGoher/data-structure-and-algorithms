function getFactorial(num: number): number {
  let result = 1;
  if(num <= 1) {
    return 1;
  } else {
    result = num * getFactorial(num-1);
  }
  return result;
}
let factorial = getFactorial(5);
console.log(factorial);