import { axiosInstance } from "./config";

export const getVideosListRequest = () => 
  axiosInstance.get('/videoslist')  // 首页视频列表

export const getSuggestListRequest = () =>
  axiosInstance.get('/suggestlist')  // 首页搜索建议列表

export const getBannersListRequest = () => 
  axiosInstance.get('/bannerslist')  // 会员购 banners 

export const getGoodsListRequest = () => 
  axiosInstance.get('/goodslist')  // 会员购商品列表