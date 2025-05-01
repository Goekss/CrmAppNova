import React from "react";

const ConfusionMatrix = () => {
  return (
    <div style={{padding:"20px"}}>
      <h2>AI Confusion Matrix</h2>

      <img
        src="http://127.0.0.1:8000/confusion-matrix"
        alt="confusion"
        style={{width:"500px", border:"2px solid black"}}
      />
    </div>
  );
};

export default ConfusionMatrix;