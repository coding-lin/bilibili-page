import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Skeleton } from "antd-mobile";
import { sleep } from 'antd-mobile/es/utils/sleep';
import { getGoodsList, addCollectGoods, delCollectGoods } from "@/pages/Vip/store/actionCreators";
import CollectGoods from "@/components/CollectGoods";
import NewInfiniteScroll from "@/components/InfiniteScroll";
import GoodsList from "../../Vip/GoodsList";
import ScrollToTop from '@/components/common/scroll-to-top';
import { connect } from "react-redux";
import { empty } from "@/config";
import "./index.scss";

const CollectVideos = () => <Empty />;

const Empty = () => {
  return (
    <div className="nothing">
      <img src={empty} alt="" />
      <p>╮(╯﹏╰）╭再怎么找也没有啦</p>
    </div>
  );
};

const Other = () => {
  return (
    <div className="other">
      <span>你可能还喜欢</span>
      <p></p>
    </div>
  )
}

const Collect = (props) => {
  const { goodsList, enterLoading, collectGoodsList } = props;
  const { getGoodListDispatch, addDispatch, delDispatch } = props;
  const [hasMore, setHasMore] = useState(true);
  const [goodData, setGoodData] = useState([]);
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    getGoodListDispatch();
  }, []);

  async function mockRequest() {  
    if (count >= 5) return [];
    await sleep(1000);
    setCount(count => count + 1);
    return goodsList.map(item => {
      if (count >= 1) {
        return {
          ...item,
          id: item.id += goodsList.length
        }
      } else {
        return {...item}
      }
    });
  }

  async function loadMore() {
    const append = await mockRequest();
    setGoodData((val) => [...val, ...append]);
    setHasMore(append.length > 0);
  }

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
          <Other />
        </Tabs.Tab>
        <Tabs.Tab title="商品" key="goods">
          {collectGoodsList.length > 0 ? (
            <>
              {collectGoodsList.map((item) => (
                <CollectGoods
                  key={item.id}
                  data={item}
                  delDispatch={delDispatch}
                />
              ))}
            </>
          ) : (
            <Empty />
          )}
          <Other />
          {enterLoading ? (
            <Skeleton.Paragraph lineCount={20} animated />
          ) : (
            <>
              <GoodsList
                goodData={goodData}
                addDispatch={addDispatch}
                delDispatch={delDispatch}
              />
              <NewInfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </>
          )}
          <ScrollToTop top={3000} />
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
    addDispatch(id) {
      dispatch(addCollectGoods(id));
    },
    delDispatch(id) {
      dispatch(delCollectGoods(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Collect));
