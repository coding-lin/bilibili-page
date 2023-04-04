import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Edit = () => {
  const navigate = useNavigate();

  return (
    <div className="edit-wrapper">
      <div className="edit-header">
        <i
          className="iconfont icon-xiangzuojiantou"
          onClick={() => navigate(-1)}
        />
        <span>账号资料</span>
      </div>
    </div>
  );
};

export default Edit;
