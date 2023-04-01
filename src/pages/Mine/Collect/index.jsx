import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Toast, PullToRefresh } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";
import { getGoodsList } from "@/pages/Vip/store/actionCreators";
import { connect } from "react-redux";
import { statusRecord, nothing } from "@/config";
import "./index.scss";

const CollectVideos = () => <Empty />;

const CollectGoods = () => <Empty />;

const Empty = () => {
  return (
    <div className="nothing">
      <img src={nothing} alt="" />
      <p>╮(╯﹏╰）╭再怎么找也没有啦</p>
      <span>你可能还喜欢</span>
    </div>
  );
};

async function doRefresh() {
  await sleep(1000);
  Toast.show("刷新成功");
}

const Collect = (props) => {
  const { goodsList, enterLoading, collectGoodsList } = props;
  const { getGoodListDispatch } = props;
  const navigate = useNavigate();
  console.log(collectGoodsList);

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
      <PullToRefresh
        onRefresh={doRefresh}
        renderText={(status) => <div>{statusRecord[status]}</div>}
      >
        <Tabs defaultActiveKey="goods">
          <Tabs.Tab title="视频" key="videos">
            <CollectVideos />
          </Tabs.Tab>
          <Tabs.Tab title="商品" key="goods">
            <CollectGoods />
          </Tabs.Tab>
        </Tabs>
      </PullToRefresh>
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
