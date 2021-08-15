import React, { Component } from "react";
import BinaryTreeLevel from "./BinaryTreeLevel";
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
    console.log("componentdidmount");
    this.state.bTree.insert(10);
    this.state.bTree.insert(6);
    this.state.bTree.insert(15);
    this.state.bTree.insert(20);
    this.setState({ bTree: this.state.bTree });
  }
  render() {
    const values = this.state.bTree;
    console.log("values" + values);
    return (
      <div>
        <div className="bTree">
          {values.length > 0 &&
            values.map((value, index) => (
              <BinaryTreeLevel key={index} level={index + 1} values={value} />
            ))}
        </div>
      </div>
    );
  }
}
export default BinarySearchTreeApp;
