import React, { useEffect, useState } from "react";
import { debounce } from "@/utils";
import "./index.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const backToTopHandle = () => {
    document.documentElement.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = debounce(() => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 2000) {
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
        <div className="to-top" onClick={backToTopHandle}>
          <i className="iconfont icon-fanhuijiantou"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
