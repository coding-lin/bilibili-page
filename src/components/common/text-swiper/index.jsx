import React from "react";
import "./index.scss";

const TextSwiper = ({ data }) => {
  return (
    <div className="g-container">
      <ul style={{ "--s": 2 }}>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TextSwiper;
