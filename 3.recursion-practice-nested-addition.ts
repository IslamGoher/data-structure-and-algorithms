// input: [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]]
let n = 0;
function addNested(arr: any[]): number {
  n++;
  let result = 0;

  arr.forEach(el => {
    n++;
    
    if(typeof(el) != 'number') {
      result += addNested(el);
    } else {
      result += el;
    }

  });

  return result;
}

let result = addNested([1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]]);
console.log(result);
console.log(n);