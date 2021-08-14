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
    if (newNode.value < node.value) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else if (node.value === newNode.value) {
      node.value = newNode.value;
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
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
    var res = [];
    const traverse = (node, level, index) => {
      if (node === null) return;
      const count = Math.pow(2, level);
      if (res[level] === undefined) {
        res[level] = new Array(count).fill("");
      }
      res[level][index] = node;
      const leftIndex = 2 * index;
      const rightIndex = 2 * index + 1;
      traverse(node.left, level + 1, leftIndex);
      traverse(node.right, level + 1, rightIndex);
    };
    traverse(this.root, 0, 0);
    return res;
  }
}

export default BinarySearchTreeNode;
