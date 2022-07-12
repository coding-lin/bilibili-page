// 配置请求对象
import axios from 'axios'
// 本地调试 dev 开发阶段
export const baseUrl = "https://www.fastmock.site/mock/059647e88be0d33ef58d6ab4bf009dd9/bilibili"
// 单例设计模式
const axiosInstance = axios.create({
  baseURL: baseUrl
})

export { axiosInstance }