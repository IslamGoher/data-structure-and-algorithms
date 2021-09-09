function redixSort(arr: any[]): number[] {
  let longestNumber = 0;
  let arrLength = arr.length;
  let tempArr: number[][] = [
    [], [], [], [], [], [], [], [], [], []
  ];

  // find longest number 
  for(let i = 0; i < arr.length; i++) {
    let length = `${arr[i]}`.length;
    if(length > longestNumber) longestNumber = length;
  }

  for(let i = 1; i <= longestNumber; i++) {
    for(let j = 0; j < arrLength; j++) {
      let storedIn: number;
      let stringOfNum = `${arr.shift()}`;
      storedIn = parseInt(stringOfNum[stringOfNum.length - i]);
      if(stringOfNum.length < i) storedIn = 0;
      tempArr[storedIn].push(parseInt(stringOfNum));
    }

    for(let i = 0; i < tempArr.length; i++) {
      let tempArrLength = tempArr[i].length;
      if(tempArrLength != 0){
        for(let j = 0; j < tempArrLength; j++) {
          arr.push(tempArr[i].shift());
        }
      }
    }
    
  }

  return arr;
}

let storedArr = redixSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(storedArr);