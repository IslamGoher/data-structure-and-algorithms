let n = 0;
function insertionSort(arr: number[]): number[] {
  
  let swap: number;
  let i = 0;
  let newArr: number[] = [];
  
  do{
    newArr.push(arr[i]);
    
    if(newArr.length > 1) {
      
      if(newArr[i-1] > newArr[i]) {
        swap = newArr[i];
        newArr[i] = newArr[i-1];
        newArr[i-1] = swap;
        
        for(let l = newArr.length-1; l >= 0; l--) {
          if(newArr[l] < newArr[l-1]) {
            swap = newArr[l];
            newArr[l] = newArr[l-1];
            newArr[l-1] = swap;
          }
          n++;
        }

      }
      
    }
    i++;
  } while(i < arr.length);
  
  return newArr;
}

// console.log(insertionSort([3, 2, 5, 4, 1]));
// console.log(n);

/*

// perfect solution
let n = 0;
function insertionSort(nums: number[]): number[] {
  for(let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let j: number;
    
    for(j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      nums[j+1] = nums[j];
      n++;
    }
    
    nums[j + 1] = numberToInsert;
  }
  
  return nums;
}

console.log(insertionSort2([3, 2, 5, 4, 1]));
console.log(n);

*/


// insertion sort v2

let l = 0;
function insertionSort2(arr: number[]): number[] {
  let swap: number;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      swap = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = swap;
      for(let j = i-1; j > 0 ; j--) {
        l++;
        if(arr[j] < arr[j-1]) {
          swap = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = swap;
        } else {break}
      }
    }
  }
  return arr;
}

let result = insertionSort2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(result);
console.log(l);