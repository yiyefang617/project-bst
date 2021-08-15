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

  remove = (value) => {
    console.log(value);

    this.state.bTree.remove(value);
    this.setState({ bTree: this.state.bTree });
  };

  componentDidMount() {
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
    return (
      <div>
        <div
          className="BST"
          style={{ position: "relative", marginTop: "10px" }}
        >
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
