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
  delete(value: number) {
    // find the node that will be deleted
    let {currentDel, prevDel, direction} = this.findToDelete(value);

    // delete
    // check if the node will be deleted has no children
    if(!currentDel!.left && !currentDel!.right) {

      // delete if root
      if(currentDel == this.root)
        this.root = null;
      else prevDel![direction] = null;
    }

    // replace on left
    else if(currentDel!.left) {
    
      // find the node that will replace deleted node
      let {currentRep, prevRep} = this.findLeftToReplace(currentDel!);

      // check if there's no direction
      // that means the node that will be deleted is root
      if(!direction) {
        
        // replace if root
        if(currentDel!.left != currentRep)
          currentRep!.left = this.root!.left;
        if(currentDel!.right != currentRep)
          currentRep!.right = this.root!.right;
        this.root = currentRep!;
        if(prevRep) {
          prevRep!.right = null;
        }
        
      } else {
        
        // replace
        if(currentDel!.right != currentRep)
          currentRep!.right = currentDel!.right;
        if(currentDel!.left != currentRep)
          currentRep!.left = currentDel!.left;
        prevDel![direction] = currentRep!;
        if(prevRep) {
          prevRep!.right = null;
        }
        
      }
      
    }
    
    // replace on right
    else if(currentDel!.right) {
      
      // find the node that will replace deleted node
      let {currentRep, prevRep} = this.findRightToReplace(currentDel!);

      // check if there's no direction
      // that means the node that will be deleted is root
      if(!direction) {
        
        // replace if root
        if(currentDel!.left != currentRep)
          currentRep!.left = this.root!.left;
        if(currentDel!.right != currentRep)
          currentRep!.right = this.root!.right;
        this.root = currentRep!;
        if(prevRep) {
          prevRep!.left = null;
        }

      } else {

        // replace
        if(currentDel!.right != currentRep)
          currentRep!.right = currentDel!.right;
        if(currentDel!.left != currentRep)
          currentRep!.left = currentDel!.left;
        prevDel![direction] = currentRep!;
        if(prevRep) {
          prevRep!.left = null;
        }
        
      }
      
    }

  }
  
  // find node to delete
  private findToDelete(value: number): {
    currentDel: BSTNode|null,
    prevDel: BSTNode|null,
    direction: string
  } {
    let currentDel = this.root;
    let prevDel: BSTNode|null = null;
    let direction = '';
    
    // iterate over the tree
    while(true) {
      // check if find value
      if(currentDel!.value == value) break;

      // check if value is greater
      else if(value > currentDel!.value) {
        prevDel = currentDel!;
        currentDel = currentDel!.right;
        direction = 'right';
      }

      // check if value is smaller
      else if(value < currentDel!.value) {
        prevDel = currentDel!;
        currentDel = currentDel!.left;
        direction = 'left';
      }
    }

    return {currentDel, prevDel, direction}
  }

  // find node that will replace deleted node by searching on left branch
  private findLeftToReplace(currentDel: BSTNode): {
    currentRep: BSTNode|null,
    prevRep: BSTNode|null
  } {
    let currentRep: BSTNode|null = currentDel;
    let prevRep: BSTNode|null = null;
    
    // check if left node has no right child
    if(!currentRep!.left!.right){
      currentRep = currentRep!.left;
    } else {
      currentRep = currentRep!.left;
      
      // iterate over tree to find the largest node
      while(true) {
        // base case: check if node has no right children
        if(!currentRep!.right) break;
        
        // move to the right node
        prevRep = currentRep!;
        currentRep = currentRep!.right;
      }
    }
    
    return {currentRep, prevRep}
  }
  
  // find node that will replace deleted node by searching on right branch
  private findRightToReplace(currentDel: BSTNode): {
    currentRep: BSTNode|null,
    prevRep: BSTNode|null
  } {
    let currentRep: BSTNode|null = currentDel;
    let prevRep: BSTNode|null = null;

    // check if right node has no left child
    if(!currentRep!.right!.left){
      currentRep = currentRep!.right;
    } else {
      currentRep = currentRep!.right;
      
      // iterate over tree to find the largest node
      while(true) {
        // base case: check if node has no right children
        if(!currentRep!.left!.left) break;
        
        // move to the right node
        prevRep = currentRep!;
        currentRep = currentRep!.left;
      }
    }
    
    return {currentRep, prevRep}
  }

  // log
  log() {
    console.log(this.root);
  }

}

class BSTNode {

  // declaring index signature
  [index: string]: any;

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

bst.delete(12);
bst.log();