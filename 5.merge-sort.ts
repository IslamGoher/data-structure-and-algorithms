// function that sort any 2 input arrays
// every single array must be already sorted
function sort(arr1: number[], arr2: number[]): number[] {
  let sortedArray: number[] = [];
  let length = arr1.length + arr2.length;

  for(let i = 0; i < length; i++) {


    // check arr length
    if(arr1.length == 0) {
      for(let j = 0; j < arr2.length; j++) {

        sortedArray.push(arr2[j]);
      }
      break;
    } else if(arr2.length == 0) {
      for(let j = 0; j < arr1.length; j++) {

        sortedArray.push(arr1[j]);
      }
      break;
    }

    // sort elements
    if(arr1[0] < arr2[0]) {
      sortedArray.push(arr1[0]);
      arr1.shift();
    } else {
      sortedArray.push(arr2[0]);
      arr2.shift();
    }
  }

  return sortedArray;
}

// exaple input: [1, 5, 7, 4, 2, 3, 6]
// recursive fuction that achive merge sort
function mergeSort(arr: number[]): number[] {

  // check base level
  if(arr.length == 1) {
    return arr;
  }
  
  let devider = Math.floor(arr.length/2);
  let fArr = arr.slice(0, devider);
  let sArr = arr.slice(devider, arr.length);
  return sort(mergeSort(fArr), mergeSort(sArr));
    
}

let sortedArray = mergeSort([1, 5, 7, 4, 2, 3, 6]);
console.log(sortedArray);