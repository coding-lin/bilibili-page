// import { axiosInstance } from "./config";
import axios from 'axios'

// export const getVideosListRequest = () =>  // 首页视频数据
//   axiosInstance.get('/videoslist')

// export const getBannersListRequest = () =>  // 会员购 banners 数据
//   axiosInstance.get('/bannerslist')

// export const getGoodsListRequest = () =>  // 会员购商品列表
//   axiosInstance.get('/goodslist')

export const getVideosList = () => 
  axios.get('https://www.fastmock.site/mock/059647e88be0d33ef58d6ab4bf009dd9/bilibili/videoslist')

export const getBannersListRequest = () => 
  axios.get('https://www.fastmock.site/mock/059647e88be0d33ef58d6ab4bf009dd9/bilibili/bannerslist')

export const getGoodsListRequest = () => 
  axios.get('https://www.fastmock.site/mock/059647e88be0d33ef58d6ab4bf009dd9/bilibili/goodslist')