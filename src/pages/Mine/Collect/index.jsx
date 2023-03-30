import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd-mobile";
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
        <span>我的收藏</span>
      </div>
      <Tabs defaultActiveKey="goods">
        <Tabs.Tab title="视频" key="videos">
          视频
        </Tabs.Tab>
        <Tabs.Tab title="商品" key="goods">
          商品
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Collect;
