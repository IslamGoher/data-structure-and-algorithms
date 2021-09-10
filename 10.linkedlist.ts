class LinkedList {

  private head: LNode|null = null;
  private tail: LNode|null = null;
  private length = 0;

  // push
  push(num: number) {
    
    // create new node
    const newNode = new LNode(num);
    
    // ckeck head
    if(!this.head) {
      this.head = newNode;
      
    } else {
      this.tail!.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  // pop
  pop() {
    let currentValue = this.tail!.value

    // remove the last node
    let currentNode = this.find(this.length-1);
    currentNode!.next = null;
    this.tail = currentNode;
    this.length--;

    return currentValue;
  }

  // get
  get(index: number) {
    // call find method
    return this.find(index)!.value;
  }

  // delete
  delete(index: number) {
    let preNode = this.find(index-1);
    let currentNode: LNode = preNode!.next!;
    let currentValue = currentNode.value;

    // delete node
    preNode!.next = currentNode.next;
    currentNode.next = null;
    this.length--;

    return currentValue;
  }

  // find
  private find(index: number) {
    let currentNode = this.head;
    for(let i = 1; i < index; i++) {
      currentNode = currentNode!.next;
    }
    return currentNode;
  }

  // log
  log() {
    console.log(this.head);
  }

}

class LNode {

  value: number;
  next: LNode|null = null;

  constructor(value: number) {
    this.value = value;
  }

}

let linkedList = new LinkedList();

linkedList.push(11);
linkedList.push(22);
linkedList.push(33);
linkedList.push(44);

linkedList.log();

linkedList.pop();

linkedList.log();

console.log(linkedList.get(3));

linkedList.delete(2);

linkedList.log();