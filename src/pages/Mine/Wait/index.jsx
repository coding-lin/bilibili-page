import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Wait = () => {
  const navigate = useNavigate();
  return (
    <div className="wait-wrapper">
      <div className="wait-header">
        <i
          className="iconfont icon-xiangzuojiantou"
          onClick={() => navigate(-1)}
        />
        <span>稍后再看 ()</span>
      </div>
      <div className="wait-container"></div>
    </div>
  );
};

export default Wait;
