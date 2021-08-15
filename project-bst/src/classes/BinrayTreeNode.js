import BinaryNode from "./BinaryNode";
class BinarySearchTreeNode {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!Number.isInteger(value)) return;
    const newNode = new BinaryNode(value);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    try {
      if (this.root === null) this.root = newNode;
      if (newNode.value < node.value) {
        if (node.left === null) node.left = newNode;
        else this.insertNode(node.left, newNode);
      } else if (node.value === newNode.value) {
        node.value = newNode.value;
      } else {
        if (node.right === null) node.right = newNode;
        else this.insertNode(node.right, newNode);
      }
    } catch (e) {
      console.log(e);
    }
  }

  remove(value) {
    if (!Number.isInteger(value)) return;
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) return null;
    else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return;
      }
    }
  }
  levelOrder() {
    if (!this.root) return [];
    var array = [];
    search(this.root, 1, 1);

    function search(node, level, index) {
      if (node) {
        const count = Math.pow(2, level - 1);
        if (array.length < level) {
          array.push(Array(count).fill(""));
        }
        var arr = array[level - 1];
        arr[index - 1] = node;
        const leftIndex = 2 * index - 1;
        const rightIndex = 2 * index;
        search(node.left, level + 1, leftIndex);
        search(node.right, level + 1, rightIndex);
      } else {
        return;
      }
    }

    return array;
  }
}
export default BinarySearchTreeNode;
