import React, { useEffect } from "react";
import { BannersWrapper } from "./style";
import propTypes from "prop-types";
import Swiper from "swiper";
import { Link } from "react-router-dom";

export default function Banners({bannersList}) {
  let swiper = null;
  useEffect(() => {
    if (swiper) return;
    swiper = new Swiper(".btn-banners", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    })
  }, [])

  const renderBtnBannersPage1 = () => {
    let items = bannersList.slice(0, 10);
    return items.map((item) => {
      let pathStr = `/vip/dongman?id=${item.id}`;
      return (
        <Link to={pathStr} className="swiper-item" key={item.id}>
          <div>
            <p>
              <img src={item.img} alt="" />
            </p>
            <span>{item.title}</span>
          </div>
        </Link>
      )
    })
  }

  const renderBtnBannersPage2 = () => {
    let items = bannersList.slice(10);
    return items.map((item) => {
      let pathStr = `/vip/dongman?id=${item.id}`;
      return (
        <Link to={pathStr} className="swiper-item" key={item.id}>
          <div>
            <p>
              <img src={item.img} alt="" />
            </p>
            <span>{item.title}</span>
          </div>
        </Link>
      )
    })
  }

  return (
    <BannersWrapper>
      <div className="btn-banners swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">{renderBtnBannersPage1()}</div>
          <div className="swiper-slide">{renderBtnBannersPage2()}</div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </BannersWrapper>
  )
}

Banners.propTypes = {
  bannersList: propTypes.array.isRequired
}
