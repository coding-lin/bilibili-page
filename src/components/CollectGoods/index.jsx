import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Popup } from "antd-mobile";
import SharePopup from "@/components/SharePopup";
import { MoreOutline } from "antd-mobile-icons";
import "./index.scss";

const CollectGoods = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [share, setShare] = useState(false);

  const shareClick = () => {
    setVisible(false);
    setShare(true);
  };

  return (
    <div className="coll-container">
      <div className="coll-img">
        <img src={data.img} alt="" />
      </div>
      <div className="coll-title">
        {data.info ? <span>{data.info}</span> : ""}
        <span>{data.title}</span>
      </div>
      <div className="coll-info">
        <div className="rank">{data.rank ? <span>{data.rank}</span> : ""}</div>
        <div className="time">{data.time ? <span>{data.time}</span> : ""}</div>
      </div>
      <div className="coll-price">
        <span>¥{data.price}</span>
      </div>
      <Link to="/vip">
        <div className="vip">
          <span>会员购</span>
          <span>去逛逛 &gt; </span>
        </div>
      </Link>
      <MoreOutline
        className="pop"
        onClick={() => {
          setVisible(true);
        }}
      />
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "7rem" }}
      >
        <div className="share-btn" onClick={shareClick}>
          <span>分享</span>
        </div>
        <div className="cancle-coll">
          <span>取消收藏</span>
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
      <SharePopup visible={share} setVisible={setShare} />
    </div>
  );
};

export default CollectGoods;
