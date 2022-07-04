import axios from 'axios'

export const getVideos = () =>  // 首页视频数据
  axios.get('https://www.fastmock.site/mock/059647e88be0d33ef58d6ab4bf009dd9/bilibili/videolist')

export const getBanners = () =>  // 会员购 banners 数据
  axios.get('https://www.fastmock.site/mock/059647e88be0d33ef58d6ab4bf009dd9/bilibili/banners')

export const getGoods = () =>  // 会员购商品列表
  axios.get('https://www.fastmock.site/mock/059647e88be0d33ef58d6ab4bf009dd9/bilibili/goodslist')