import React from "react";

const BinaryNodeComponent = (props) => {
  const binaryNode =
    props.value === undefined || props.value === "" ? "void" : "nonVoid";
  let leftStyle, rightStyle;
  if (props.level === 1) {
    leftStyle = {
      left: "-20vw",
      width: "20vw",
      MozTransform: "rotate(-15deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-15deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-15deg)",
      transformOrigin: "100% 0",
    };
    rightStyle = {
      right: "0vw",
      width: "20vw",
      MozTransform: "rotate(-165deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-165deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-165deg)",
      transformOrigin: "100% 0",
    };
  } else if (props.level === 2) {
    leftStyle = {
      left: "-10vw",
      width: "10vw",
      MozTransform: "rotate(-30deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-30deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-30deg)",
      transformOrigin: "100% 0",
    };
    rightStyle = {
      right: "0vw",
      width: "10vw",
      MozTransform: "rotate(-150deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-150deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-150deg)",
      transformOrigin: "100% 0",
    };
  } else if (props.level === 3) {
    leftStyle = {
      left: "-6.5vw",
      width: "6.5vw",
      MozTransform: "rotate(-60deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-60deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-60deg)",
      transformOrigin: "100% 0",
    };
    rightStyle = {
      right: "0vw",
      width: "6.5vw",
      MozTransform: "rotate(-120deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-120deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-120deg)",
      transformOrigin: "100% 0",
    };
  } else if (props.level === 4) {
    leftStyle = {
      left: "-5.75vw",
      width: "5.75vw",
      MozTransform: "rotate(-70deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-70deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-70deg)",
      transformOrigin: "100% 0",
    };
    rightStyle = {
      right: "0vw",
      width: "5.75vw",
      MozTransform: "rotate(-110deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-110deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-110deg)",
      transformOrigin: "100% 0",
    };
  } else {
    leftStyle = {
      display: "none",
    };
    rightStyle = {
      display: "none",
    };
  }
  const handleClick = (value) => {
    props.onRemove(value);
  };
  return (
    <div className={binaryNode} style={props.style}>
      <div
        className="round"
        style={{
          position: "relative",
          margin: "0 auto",
          width: "60px",
          height: "60px",
        }}
      >
        <div style={{ width: "100%" }} title={props.value}>
          <button
            style={{
              margin: "0 auto",
              border: "1px solid black",
              width: "40px",
              height: "40px",
              padding: "5px",
              borderRadius: "50%",
              fontSize: "20px",
            }}
            onClick={() => handleClick(props.value)}
          >
            {props.value}
          </button>
        </div>
        {props.left && <div className="left" style={leftStyle} />}
        {props.right && <div className="right" style={rightStyle} />}
      </div>
    </div>
  );
};

export default BinaryNodeComponent;
