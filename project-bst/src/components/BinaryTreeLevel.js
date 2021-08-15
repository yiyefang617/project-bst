import React from "react";
import BinaryNodeComponent from "./BinaryNodeComponent";
const BinaryTreeLevel = (props) => {
  const width = 100 / Math.pow(2, props.level - 1);
  const style = {
    width: width + "%",
    float: "left",
    align: "center",
  };
  return (
    <div
      className="Binary-Tree-Level"
      style={{ width: "100%", height: "100px" }}
    >
      {props.values &&
        props.values.map((node, index) => (
          <BinaryNodeComponent
            key={`${props.level}_${index}`}
            value={node.value}
            level={props.level}
            style={style}
            left={!(node.left === null)}
            right={!(node.right === null)}
          />
        ))}
    </div>
  );
};

export default BinaryTreeLevel;
