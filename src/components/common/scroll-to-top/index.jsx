import React, { useEffect, useState } from "react";
import { debounce } from "@/utils";
import "./index.scss";

const ScrollToTop = ({top}) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = debounce(() => {
    const scrollTop =
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      0;
    if (scrollTop > top) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, 100);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, true);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <>
      {visible && (
        <div className="to-top" onClick={() => window.scrollTo(0, 0)}>
          <i className="iconfont icon-fanhuijiantou"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
