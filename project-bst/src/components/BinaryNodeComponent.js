import React from "react";

const BinaryNodeComponent = (props) => {
  const binaryNode =
    props.value === undefined || props.value === "" ? "void" : "nonVoid";
  let leftStyle, rightStyle;
  if (props.level === 1) {
    leftStyle = {
      left: "-20vw",
      width: "20vw",
      MozTransform: "rotate(-20deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-20deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-20deg)",
      transformOrigin: "100% 0",
    };
    rightStyle = {
      right: "0vw",
      width: "20vw",
      MozTransform: "rotate(-160deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-160deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-160deg)",
      transformOrigin: "100% 0",
    };
  } else if (props.level === 2) {
    leftStyle = {
      left: "-10vw",
      width: "10vw",
      MozTransform: "rotate(-40deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-40deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-40deg)",
      transformOrigin: "100% 0",
    };
    rightStyle = {
      right: "0vw",
      width: "10vw",
      MozTransform: "rotate(-140deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-140deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-140deg)",
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
      MozTransform: "rotate(-80deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-80deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-80deg)",
      transformOrigin: "100% 0",
    };
    rightStyle = {
      right: "0vw",
      width: "5.75vw",
      MozTransform: "rotate(-100deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-100deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-100deg)",
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
              width: "30px",
              height: "30px",
              padding: "5px",
              borderRadius: "50%",
              fontSize: "20px",
            }}
            onClick={props.onRemove(props.value)}
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
