let n = 0;
let l = 0;

// bubble sort function
function bubbleSort(arr: number[]): number[] {

  let isThereAnyChange = false;

  // loop on array
  for(let i = 0; i < arr.length - n; i++) {
    l++;
    
    // swap variable
    let swap: number;
    
    // check if element is bigger than the next one
    if(arr[i] > arr[i+1]) {
      swap = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = swap;
      isThereAnyChange = true;
    }
    
  }
  
  // if there's any swaping reloop
  if(isThereAnyChange) {
    n++;
    return bubbleSort(arr);
  } else {
    return arr;
  }

}

console.log(bubbleSort([1, 5, 4, 2, 3]));
console.log(l);

/*

  1. i created the bubble sort function
  2. the bubble sort technique is working if input was [1, 5, 4, 2, 3] like that:
    1. [ 1, 5, 4, 2, 3 ]
    2. [ 1, 5, 4, 2, 3 ]
    3. [ 1, 4, 5, 2, 3 ]
    4. [ 1, 4, 2, 5, 3 ]
    5. [ 1, 4, 2, 3, 5 ]
    6. [ 1, 4, 2, 3, 5 ]
    7. [ 1, 4, 2, 3, 5 ]
    8. [ 1, 2, 4, 3, 5 ]
    9. [ 1, 2, 3, 4, 5 ]
    10. [ 1, 2, 3, 4, 5 ]
    11. [ 1, 2, 3, 4, 5 ]
    12. [ 1, 2, 3, 4, 5 ]
    13. [ 1, 2, 3, 4, 5 ]
    14. [ 1, 2, 3, 4, 5 ]
    15. [ 1, 2, 3, 4, 5 ]

  3. i noticed that after line number 5 the last element in the array is already the bigger one
  4. to increase performance i recognized that i need to ignore that last element in the array
  5. so i create 'n' variable to decrease the length of the array every for loop
  6. the bubble sort now is working like this:
    1. [ 1, 5, 4, 2, 3 ]
    2. [ 1, 5, 4, 2, 3 ]
    3. [ 1, 4, 5, 2, 3 ]
    4. [ 1, 4, 2, 5, 3 ]
    5. [ 1, 4, 2, 3, 5 ]
    6. [ 1, 4, 2, 3, 5 ]
    7. [ 1, 4, 2, 3, 5 ]
    8. [ 1, 2, 4, 3, 5 ]
    9. [ 1, 2, 3, 4, 5 ]
    10. [ 1, 2, 3, 4, 5 ]
    11. [ 1, 2, 3, 4, 5 ]
    12. [ 1, 2, 3, 4, 5 ]

*/