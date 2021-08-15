import React from "react";
import BinaryNodeComponent from "./BinaryNodeComponent";
const BinaryTreeLevel = (props) => {
  return (
    <div className="Binary-Tree-Level">
      {props.values &&
        props.values.map((node, value) => (
          <BinaryNodeComponent
            value={node.value}
            level={props.level}
            left={!(node.left === null)}
            right={!(node.right === null)}
          />
        ))}
    </div>
  );
};

export default BinaryTreeLevel;
