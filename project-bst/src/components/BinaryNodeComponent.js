import React from "react";

const BinaryNodeComponent = (props) => {
  return (
    <div>
      <div className="round">
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
