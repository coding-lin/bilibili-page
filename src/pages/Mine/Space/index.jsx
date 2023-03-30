import React from "react";
import { useNavigate } from "react-router-dom";
import { avatar } from "@/config";
import "./index.scss";

const Space = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="back-icon">
        <i
          className="iconfont icon-fanhuijiantou"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="sousuo-icon">
        <i className="iconfont icon-sousuo" />
      </div>
      <div className="bg-img">
        <img
          src="https://img01.anzhiy.cn/useruploads/113/2023/03/30/64254aee57d84.jpg"
          alt=""
        />
      </div>
      <div className="info">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="detail">
          <div>
            <span className="data">0</span>
            <p>粉丝</p>
          </div>
          <div>
            <span>30</span>
            <p>关注</p>
          </div>
          <div>
            <span>10</span>
            <p>获赞</p>
          </div>
        </div>
        <div className="edit">
          <span>编辑资料</span>
        </div>
      </div>

      <div className="wrapper"></div>
    </>
  );
};

export default Space;
