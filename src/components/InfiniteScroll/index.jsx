import { InfiniteScroll, DotLoading } from "antd-mobile";

const NewInfiniteScroll = ({ loadMore, hasMore }) => {
  const InfiniteScrollContent = ({ hasMore }) => {
    return (
      <>
        {hasMore ? (
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.7rem" }}>一大波信息向你飞奔过来~</span>
            <DotLoading />
          </div>
        ) : (
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.7rem" }}>--- 我是有底线的 ---</span>
          </div>
        )}
      </>
    );
  };

  return (
    <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
      <InfiniteScrollContent hasMore={hasMore} />
    </InfiniteScroll>
  );
};

export default NewInfiniteScroll;
