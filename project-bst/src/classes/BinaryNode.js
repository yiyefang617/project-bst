class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  left() {
    return this.left;
  }
  right() {
    return this.right;
  }
  free() {
    this.left = null;
    this.right = null;
  }
}
export default BinaryNode;
