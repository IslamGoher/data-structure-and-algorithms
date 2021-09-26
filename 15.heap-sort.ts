// heap sort
function heapSort(arr: number[]): number[] {
  let sortedArray: number[] = [];

  while(arr.length) {
    // determine index to start with
    let index = Math.ceil(arr.length / 2) - 1;

    // convert input array to heap
    arr = heapify(arr, index);

    // swap first and last items
    swap(0, (arr.length - 1), arr);

    // delete the last item and add it at the first of sorted array
    sortedArray.unshift(arr.pop()!);
  }

  return sortedArray;
}

// convert array to heap
function heapify(arr: number[], index: number): number[] {
  // iterate over an array
  for(let i = index; i >= 0; i--) {
    // determine indexes of left and right children
    let leftChildIndex = (arr[(i * 2) + 1]) ? (i * 2) + 1 : -1;
    let rightChildIndex = (arr[(i * 2) + 2]) ? (i * 2) + 2 : -1;
    
    let leftChild = (leftChildIndex == -1) ? -1 : arr[leftChildIndex];
    let rightChild = (rightChildIndex == -1) ? -1 : arr[rightChildIndex];

    // swap if parent smaller than one of children
    if(arr[i] < leftChild || arr[i] < rightChild) {
      // determine the index of the greater child
      let indexOfGreater = (leftChild > rightChild)? leftChildIndex! : rightChildIndex!;
      
      // swap
      swap(i, indexOfGreater, arr);
    }

  }

  return arr;
}

// swap two array elements
function swap(index1: number, index2: number, arr: number[]): number[] {

  // swap
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

let sortedArray = heapSort([6, 5, 3, 1, 8, 7, 2, 4]);
console.log(sortedArray);