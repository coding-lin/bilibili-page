import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const BannersWrapper = styled.div`
  height: ${px2rem(160)};
  margin-top: ${px2rem(94)};
  .btn_banners {
    width: 100%;
    height: ${px2rem(50)};
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
    margin-top: ${px2rem(10)};
  }
  .swiper-item div p {
    height: ${px2rem(50)};
    width: ${px2rem(50)};
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
    height: ${px2rem(18)};
    bottom: ${px2rem(-6)};
  }
  .swiper-pagination-bullet {
    border-radius: 50%;
    width: ${px2rem(6)};
    height: ${px2rem(6)};
  }
`