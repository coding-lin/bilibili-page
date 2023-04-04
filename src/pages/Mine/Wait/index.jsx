import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import WaitVideos from "@/components/WaitVideos";
import { Popup, Toast } from "antd-mobile";
import { MoreOutline, UnorderedListOutline, CloseCircleOutline } from "antd-mobile-icons";
import { delWaitVideos } from "@/pages/Home/store/actionCreators";
import { empty } from "@/config";
import "./index.scss";

const Empty = () => {
  return (
    <div className="wait-nothing">
      <img src={empty} alt="" />
      <p>这里还什么都没有呢~</p>
    </div>
  )
}

const Wait = (props) => {
  const { waitVideosList, delDispatch } = props;
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="wait-wrapper">
      <div className="wait-header">
        <i
          className="iconfont icon-xiangzuojiantou"
          onClick={() => navigate(-1)}
        />
        <span>稍后再看 ({waitVideosList.length})</span>
        <MoreOutline
          className="wait-head-icon"
          onClick={() => {
            setVisible(true)
          }}
        />
      </div>
      <div className="wait-container">
        {waitVideosList.length > 0 ? (
          <>
            {waitVideosList.map((item) => (
              <WaitVideos
                key={item.id}
                data={item}
                delDispatch={delDispatch}
              />
            ))}
          </>
        ) : (
          <Empty />
        )}
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "7.5rem" }}
      >
        <div className="wait-pop-manage">
          <UnorderedListOutline className="manage-icon" />
          <span>管理视频</span>
        </div>
        <div className="wait-pop-del">
          <CloseCircleOutline className="del-icon" />
          <span>一键移除视频</span>
        </div>
        <div className="wait-pop-cancle" onClick={() => setVisible(false)}>
          <span>取消</span>
        </div>
      </Popup>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    waitVideosList: state.home.waitVideosList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delDispatch(id) {
      dispatch(delWaitVideos(id));
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Wait));
