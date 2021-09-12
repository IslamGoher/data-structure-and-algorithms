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
bst.add(4);
bst.add(12);
bst.add(2);
bst.add(5);
bst.add(10);
bst.add(14);

bst.log();

console.log('Find: ', bst.find(4));