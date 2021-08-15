import React, { Component } from "react";
import BinaryTreeLevel from "./BinaryTreeLevel";
import "../css/BinaryNodeTreeApp.css";
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

  // remove = () => {
  //   if (this.state.bTree !== null && !isNaN(this.state.remove)) {
  //     this.state.bTree.remove(parseInt(this.state.remove, 10));
  //   }
  // };
  remove = (value) => {
    console.log("deleting!");
    if (this.state.bTree !== null && !isNaN()) {
      this.state.bTree.remove(value);
    }
  };

  componentDidMount() {
    console.log("componentdidmount");
    this.state.bTree.insert(10);
    this.state.bTree.insert(0);
    this.state.bTree.insert(25);
    this.state.bTree.insert(50);
    this.setState({ bTree: this.state.bTree });
  }
  componentDidUpdate(prevProps) {
    this.state.bTree.insert(this.props.number);
    if (this.props.number !== prevProps.number) {
      this.setState({ bTree: this.state.bTree });
    }
  }

  render() {
    const values = this.state.bTree.levelOrder();
    console.log("values" + values);
    return (
      <div>
        <div className="BST" style={{ position: "relative" }}>
          {values.length > 0 &&
            values.map((value, index) => (
              <BinaryTreeLevel
                key={index}
                level={index + 1}
                values={value}
                onRemove={this.remove}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default BinarySearchTreeApp;
