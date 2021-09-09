function binarySearch(arr: number[], number: number): number {

  // set length variable
  let startIndex = 0; 
  let lastIndex = arr.length;
  let midIndex = Math.floor(lastIndex / 2);

  let isFound = false;

  // iterate over an array
  for(let i = 0; i < arr.length; i++) {
    // check if middle element is equal to the target
    if(arr[midIndex] == number) {
      isFound = true;
      break;
    } else if(startIndex == lastIndex) break;

    // determine the target number in left or right
    if(number > arr[midIndex]) {

      startIndex = midIndex;

      // find new middle element
      midIndex = Math.floor((lastIndex + startIndex ) / 2);

    } else if (number < arr[midIndex]) {

      lastIndex = midIndex;
      midIndex = Math.floor((lastIndex - startIndex ) / 2);
    }

  }

  // return length if element found
  if(isFound) return midIndex;
  else return -1;
  
}

let l = binarySearch([1, 2, 7, 9, 22, 24, 33, 47, 79], 24);
console.log(l);