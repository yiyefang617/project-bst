import React, { Component } from "react";
import BinaryNode from "../classes/BinaryNode";
import BinarySearchTreeNode from "../classes/BinrayTreeNode";

class BinarySearchTreeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bTree: new BinarySearchTreeNode(),
    };
  }

  insert = () => {
    this.state.bTree.insert(this.state.insertValue);
  };

  remove = () => {
    if (this.state.bTree !== null && !isNaN(this.state.remove)) {
      this.state.bTree.remove(parseInt(this.state.remove, 10));
    }
  };
  componentDidMount() {
    this.state.bTree.insert(10);
    this.state.bTree.insert(6);
    this.state.bTree.insert(15);
    this.state.bTree.insert(20);
  }
  render() {
    console.log(this.state.bTree);
    return <div> Hello World</div>;
  }
}
export default BinarySearchTreeApp;
