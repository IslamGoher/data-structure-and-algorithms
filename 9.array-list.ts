

class ArrayList  {

  // declearing an index signature
  [index: number]: any;

  // create length
  l = 0;

  // push
  push(element: any): void {
    
    // add the new element
    this[this.l] = element;

    // increase length
    this.l++;

  }

  // pop
  pop(): any {
    
    let deletedElement = this.l;
    // delete the last element
    delete this[this.l-1];

    // decrease the length
    this.l--;

    // return deleted element
    return deletedElement;
  }

  // get
  get(index: number) {

    // return an element
    return this[index];

  }

  // delete
  delete(element: any): any {

    let index = -1;
    let swap: any;

    // find the element
    for(let property in this) {
      if(this[property] == element) {
        index = parseInt(property);
      }
    }

    if(!index) {
      return void 0;
    }
    let newIndex = index
    
    // shift the element to the end of the array list
    for(let i = index; i < this.l - 1; i++) {
      swap = this[i];
      this[i] = this[i+1];
      this[i+1] = swap;
      // there's another option better than swapping
      // this[i] = this[i+1]
      newIndex++;
    }

    // delete the element
    delete this[newIndex];

  }

  // length
  length(): number {

    // return the length
    return this.l;

  }

  // log
  log() {
    let temp: {l?: number} = {...this};
    delete temp.l;
    console.log(temp);
  }
}


const arraylist = new ArrayList();
arraylist.push(1);
arraylist.push(2);
arraylist.push(3);
arraylist.push(4);
arraylist.push(5);
arraylist.push(6);

arraylist.log();

arraylist.pop();

arraylist.log();

console.log('arrayList[1] = ', arraylist.get(1));

console.log('arrayList.length = ', arraylist.length());

arraylist.delete(2);

arraylist.log();