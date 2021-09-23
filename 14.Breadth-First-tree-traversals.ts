class BST {

  root: BSTNode | null = null;
  length: number = 0;

  // add
  add(value: number) {
    // create new node
    const newNode = new BSTNode(value);

    let currentNode = this.root;

    // check root
    if(!this.root) {
      this.root = newNode;
    } else {
      // find the right place to add new node
      while(currentNode) {
        if(value > currentNode!.value) {
          if(!currentNode!.right) {
            currentNode!.right = newNode;
            break;
          } else {
            currentNode = currentNode!.right;
          }
        } else {
          if(!currentNode!.left) {
            currentNode!.left = newNode;
            break;
          } else {
            currentNode = currentNode!.left;
          }
        }
      }
    }

    // increase length
    this.length++;
  }

  // find
  find(value: number) {

    let currentNode = this.root;

    // iterate over tree
    while(currentNode!.right || currentNode!.left) {
      // check every value
      if(currentNode!.value == value) {
        return currentNode!;
      } else {
        if(value > currentNode!.value) {
          currentNode = currentNode!.right;
        } else {
          currentNode = currentNode!.left
        }
      }
    }
    return null;
  }
  
  // delete

  // log
  log() {
    console.log(this.root);
  }

  // breadth first tree traversal
  // best solution
  /*
  breadthFirstTraversal(queue: (BSTNode|null)[], array: number[]): number[] {
    if(!queue.length) return array;

    const node = queue.shift();
    array.push(node!.value);
    if(node!.left) queue.push(node!.left);
    if(node!.right) queue.push(node!.right);
    return this.breadthFirstTraversal(queue, array);
  }
  */

  // my solution
  breadthFirstTraversal(): number[] {

    let finalArray: number[] = [];
    let queue: BSTNode[] = [this.root!];

    // iterative
    while(queue.length) {

      // dequeue value to final array
      let temp = queue.shift()!;
      finalArray.push(temp.value);

      // queue children of the last dequeued node
      if(temp.left) queue.push(temp.left);
      if(temp.right) queue.push(temp.right);
    }

    return finalArray;
  }
}

class BSTNode {
  value: number;
  left: BSTNode | null = null;
  right: BSTNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

const bst = new BST();

bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);
bst.add(6);
bst.add(14);
bst.add(4);
bst.add(7);
bst.add(13);

console.log("breadth first traversal: ", bst.breadthFirstTraversal());