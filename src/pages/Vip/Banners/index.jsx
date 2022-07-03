import React, { useEffect } from "react";
import { BannersWrapper } from "./style";
import propTypes from "prop-types";
import Swiper from "swiper";
import { Link } from "react-router-dom";

export default function Banners({banners}) {
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
    let items = banners.slice(0, 10);
    return items.map((item) => {
      return (
        <Link to="/dongman/id" className="swiper-item" key={item.id}>
          <div>
            <p>
              <img src={item.img} />
            </p>
            <span>{item.title}</span>
          </div>
        </Link>
      )
    })
  }

  const renderBtnBannersPage2 = () => {
    let items = banners.slice(10);
    return items.map((item) => {
      return (
        <Link to="/dongman/id" className="swiper-item" key={item.id}>
          <div>
            <p>
              <img src={item.img} />
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
  banners: propTypes.array.isRequired
}
