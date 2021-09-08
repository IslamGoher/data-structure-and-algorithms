
function quickSort(arr: number[]): number[] {
  
  if(arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length-1];
  let right: number[] = [];
  let left: number[] = [];
  for(let i = 0; i < arr.length-1; i++) {
    if(arr[i] < pivot) left.push(arr[i]);
    else if(arr[i] > pivot) right.push(arr[i]);
  }

  return Array.prototype.concat(quickSort(left), [pivot], quickSort(right));

}

let arr = quickSort([4,9,3,5]);
console.log(arr);