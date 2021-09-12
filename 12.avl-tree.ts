class AVL {

  root: AVLNode | null = null;
  length: number = 0;

  // add
  add(value: number) {
    // create new node
    const newNode = new AVLNode(value);

    let currentNode = this.root;
    let pre: AVLNode;
    let prePre: AVLNode;

    // check root
    if(!this.root) {
      this.root = newNode;
    } else {
      // find the right place to add new node
      while(currentNode) {
        if(value > currentNode!.value) {
          // go right
          if(!currentNode!.right) {
            currentNode!.right = newNode;
            break;
          } else {
            prePre = pre!;
            pre = currentNode!;
            currentNode = currentNode!.right;
          }
        } else {
          // go left
          if(!currentNode!.left) {
            currentNode!.left = newNode;
            break;
          } else {
            prePre = pre!;
            pre = currentNode!;
            currentNode = currentNode!.left;
          }
        }
      }
    }

    // check for right rotation
    if(pre! && prePre! && !pre!.left && !currentNode!.left) {
      currentNode!.left = pre!;
      pre!.right = null;
      prePre!.right = currentNode!;
    }

    // check for left rotation
    else if(pre! && prePre! && !pre!.right && !currentNode!.right) {
      currentNode!.right = pre!;
      pre!.left = null;
      prePre!.left = currentNode!;
    }

    // check for right double rotation
    else if(pre! && prePre! && !pre!.left && !currentNode!.right) {
      // first rotation
      pre!.right = newNode;
      newNode.right = currentNode!;
      currentNode!.left = null;

      // second rotation
      newNode!.left = pre!;
      pre!.right = null;
      prePre!.right = newNode!;
    }
    
    // check for left double rotation
    else if(pre! && prePre! && !pre!.right && !currentNode!.left) {
      // first rotation
      pre!.left = newNode;
      newNode.left = currentNode!;
      currentNode!.right = null;

      // second rotation
      newNode!.right = pre!;
      pre!.left = null;
      prePre!.left = newNode!;
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

class AVLNode {
  value: number;
  left: AVLNode | null = null;
  right: AVLNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

const avl = new AVL();

avl.add(15);
avl.add(6);
avl.add(50);
avl.add(4);
avl.add(7);
avl.add(23);
avl.add(71);
avl.add(5);
avl.add(11);
avl.add(9);

avl.log();