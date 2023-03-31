import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Popup, Toast, ImageViewer } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import { avatar, linkList } from "@/config";
import "./index.scss";

const Space = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="back-icon">
        <i
          className="iconfont icon-fanhuijiantou"
          onClick={() => navigate(-1)}
        />
      </div>
      <div
        className="sousuo-icon"
        onClick={() => {
          setShowImage(true);
        }}
      >
        <i className="iconfont icon-sousuo" />
      </div>
      <ImageViewer
        image="https://img01.anzhiy.cn/useruploads/113/2023/03/31/642688586e8a9.jpg"
        visible={showImage}
        onClose={() => {
          setShowImage(false);
        }}
      />
      <MoreOutline
        className="share"
        onClick={() => {
          setVisible(true);
        }}
      />
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
            <span className="data">1</span>
            <p>粉丝</p>
          </div>
          <div>
            <span>34</span>
            <p>关注</p>
          </div>
          <div>
            <span>10</span>
            <p>获赞</p>
          </div>
        </div>
        <div className="edit" onClick={() => Toast.show("暂不支持编辑")}>
          <span>编辑资料</span>
        </div>
        <div className="username">
          <span>dafenqi616</span>
        </div>
        <div className="vip">
          <img
            src="https://img01.anzhiy.cn/useruploads/113/2023/03/30/64259d5d149e7.png"
            alt=""
          />
        </div>
        <div className="schlool">
          <img
            src="https://img01.anzhiy.cn/useruploads/113/2023/03/30/64259ca543116.png"
            alt=""
          />
          <span onClick={() => setShowDetail(!showDetail)}>
            {showDetail ? "收起" : "详情"}
          </span>
        </div>
        {showDetail ? (
          <div className="details">
            <span>热爱生活 记得快乐</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <Tabs defaultActiveKey="home">
        <Tabs.Tab title="主页" key="home">
          主页
        </Tabs.Tab>
        <Tabs.Tab title="动态" key="trends">
          动态
        </Tabs.Tab>
        <Tabs.Tab title="投稿" key="contribute">
          投稿
        </Tabs.Tab>
        <Tabs.Tab title="收藏" key="collect">
          收藏
        </Tabs.Tab>
      </Tabs>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "30vh" }}
      >
        <div className="link">
          <span>分享</span>
          <div className="icon-container">
            {linkList.map((item) => (
              <div key={item.id} className="icon">
                <img src={item.icon} alt="" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bottom"
          onClick={() => {
            setVisible(false);
          }}
        >
          <span>取消</span>
        </div>
      </Popup>
    </>
  );
};

export default Space;
