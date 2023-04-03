import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import WaitVideos from "@/components/WaitVideos";
import { delWaitVideos } from "@/pages/Home/store/actionCreators";
import { waitEmpty } from "@/config";
import "./index.scss";

const Empty = () => {
  return (
    <div className="wait-nothing">
      <img src={waitEmpty} alt="" />
      <p>这里还什么都没有呢~</p>
    </div>
  )
}

const Wait = (props) => {
  const { waitVideosList, delDispatch } = props;
  const navigate = useNavigate();

  return (
    <div className="wait-wrapper">
      <div className="wait-header">
        <i
          className="iconfont icon-xiangzuojiantou"
          onClick={() => navigate(-1)}
        />
        <span>稍后再看 ({waitVideosList.length})</span>
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
