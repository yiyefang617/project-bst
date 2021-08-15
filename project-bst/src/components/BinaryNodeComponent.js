import React from "react";

const BinaryNodeComponent = (props) => {
  return (
    <div style={props.style}>
      <div className="round" style={{ width: "100%" }}>
        <div className="value" title={props.value}>
          {props.value}
        </div>
        {props.left && <div>left</div>}
        {props.right && <div>right</div>}
      </div>
    </div>
  );
};

export default BinaryNodeComponent;
