import React, { useState } from "react";

const Line = ({ emoji, index }) => {
  //STATES
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div
      className="line"
      key={index}
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
    >
      <div>{emoji.symbol}</div>
      <div>{emoji.title}</div>

      {hoverLine && <div className="copy">Click to copy !</div>}
    </div>
  );
};

export default Line;
