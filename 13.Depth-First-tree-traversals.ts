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

  // preorder traverse
  preorderTraverse(): number[] {
    let arr: number[] = [];
    function pret(node: BSTNode|null) {

      if(!node!) return arr;

      if(!node!.left && !node!.right)
        return arr.push(node!.value);

      if(node!.left) {
        arr.push(node!.value);
        pret(node!.left);

      } else arr.push(node!.value);

      if(node!.right) pret(node!.right);

    }

    pret(this.root!);
    return arr;
  }

  // inorder traverse
  inorderTraverse(): number[] {

    const arr: number[] = [];
    function int(node: BSTNode|null) {

      if(!node!) return arr;

      if(!node!.left && !node!.right)
        return arr.push(node!.value);

      if(node!.left) int(node!.left);

      if(node!.right) {
        arr.push(node!.value);
        int(node!.right);

      } else arr.push(node!.value);

    }

    int(this.root!);
    return arr;
  }
  
  // postorder traverse
  postorderTraverse(): number[] {

    const arr: number[] = [];
    function postt(node: BSTNode|null) {

      if(!node!) return arr;

      if(!node!.left && !node!.right) 
        return arr.push(node!.value);

      if(node!.left) postt(node!.left);

      if(node!.right) postt(node!.right);

      arr.push(node!.value);

    }

    postt(this.root!);
    return arr;
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

console.log("preorder: ", bst.preorderTraverse());
console.log("inorder: ", bst.inorderTraverse());
console.log("postorder: ", bst.postorderTraverse());