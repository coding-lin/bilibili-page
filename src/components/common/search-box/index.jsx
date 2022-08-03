import React, { useState, useEffect, useRef, useMemo } from "react";
import { debounce } from "@/utils";
import { SearchInput } from './style'

const SearchBox = (props) => {
  const queryRef = useRef();
  // console.log(queryRef, '///')
  // 解构父组件props时， 分两部分，
  // 读props
  // 方法
  const { newQuery } = props;
  const { handleQuery } = props;
  const [query, setQuery] = useState("");
  // 父组件传过来的函数封装一下
  // 优化再升级
  // useMomo 可以缓存 上一次函数计算的结果
  let handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 500);
  }, [handleQuery]);

  // mount
  useEffect(() => {
    // console.log(queryRef)
    // 挂载后
    queryRef.current.focus();
  }, []);
  // 使用useEffect 去更新
  useEffect(() => {
    //query 更新
    // console.log(queryRef)
    // let curQuery = query
    handleQueryDebounce(query);
  }, [query]);

  useEffect(() => {
    // mount 时候 执行 父组件  newQuery -> input query
    let curQuery = query;
    if (newQuery !== query) {
      curQuery = newQuery;
      queryRef.current.value = newQuery;
    }
    setQuery(curQuery);
    // newQuery 更新时执行
  }, [newQuery]);

  const clearQuery = () => {
    setQuery("");
    queryRef.current.value = "";
    queryRef.current.focus();
  };

  const handleChange = (e) => {
    let val = e.currentTarget.value;
    setQuery(val);
  };

  const displayStyle = query ? { display: "block" } : { display: "none" };

  return (
    <SearchInput>
      <i className="iconfont icon-sousuo"></i>
      <input
        type="text"
        placeholder="请输入搜索内容"
        ref={queryRef}
        onChange={handleChange}
      />
      <i 
        className="iconfont icon-shanchu" 
        style={displayStyle}
        onClick={clearQuery}
      ></i>
    </SearchInput>
  );
};

export default React.memo(SearchBox);
