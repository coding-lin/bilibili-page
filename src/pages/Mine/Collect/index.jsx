import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd-mobile";
import { getGoodsList } from "@/pages/Vip/store/actionCreators";
import CollectGoods from "@/components/CollectGoods";
import { connect } from "react-redux";
import { nothing } from "@/config";
import "./index.scss";

const CollectVideos = () => <Empty />;

const Empty = () => {
  return (
    <div className="nothing">
      <img src={nothing} alt="" />
      <p>╮(╯﹏╰）╭再怎么找也没有啦</p>
      <span>你可能还喜欢</span>
    </div>
  );
};

const Collect = (props) => {
  const { goodsList, enterLoading, collectGoodsList } = props;
  const { getGoodListDispatch } = props;
  const navigate = useNavigate();

  useEffect(() => {
    getGoodListDispatch();
  }, []);

  return (
    <div className="collect-container">
      <div className="header">
        <i
          className="iconfont icon-fanhuijiantou"
          onClick={() => navigate(-1)}
        />
        <span>我的收藏</span>
      </div>
      <Tabs defaultActiveKey="goods">
        <Tabs.Tab title="视频" key="videos">
          <CollectVideos />
        </Tabs.Tab>
        <Tabs.Tab title="商品" key="goods">
          {collectGoodsList ? (
            <>
              {collectGoodsList.map((item, index) => (
                <CollectGoods key={index} data={item} />
              ))}
            </>
          ) : (
            <Empty />
          )}
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    enterLoading: state.vip.enterLoading,
    goodsList: state.vip.goodsList,
    collectGoodsList: state.vip.collectGoodsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGoodListDispatch() {
      dispatch(getGoodsList());
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Collect));