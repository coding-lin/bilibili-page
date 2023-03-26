import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Collect = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="header">
        <i
          className="iconfont icon-fanhuijiantou"
          onClick={() => navigate(-1)}
        />
        <h2>我的收藏</h2>
      </div>
    </div>
  );
};

export default Collect;
