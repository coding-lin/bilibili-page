import React from "react";
import { Popup } from "antd-mobile";
import { linkList } from "@/config";
import "./index.scss";

const SharePopup = ({visible, setVisible}) => {

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false);
      }}
      bodyStyle={{ height: "10rem" }}
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
  );
};

export default SharePopup;
