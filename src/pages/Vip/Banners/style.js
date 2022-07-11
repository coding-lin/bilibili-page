import styled from "styled-components";

export const BannersWrapper = styled.div`
  height: 1.582rem;
  margin-top: 100px;
  .btn_banners {
    width: 100%;
    height: 50vw;
    background: #fff;
  }
  .swiper-slide {
    display: flex;
    flex-wrap: wrap;
  }
  .swiper-item {
    display: flex;
    width: 20%;
    height: 40%;
    justify-content: space-around;
  }
  .swiper-item div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3vw;
  }
  .swiper-item div p {
    height: 14vw;
    width: 14vw;
    background: pink;
  }
  .swiper-item div img {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
  .swiper-item div span {
    color: #000;
  }
  .swiper-pagination {
    bottom: -6px;
  }
  .swiper-pagination-bullet {
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
`