/**
 * @author hjl
 * @func 根据path判断是否在数组配置中
 * @params {path string}
 * @return boolean 
 */
export const isPathPartlyExisted = (path) => {
  let pathRes = path.split('/')
  if (pathRes[1] && pathRes[1] === 'home') return true
  return false
}

export const isPathShoppingCart = (path) => {
  let pathRes = path.split('/')
  if (pathRes[1] && pathRes[1] === 'shopping-cart') return true
  return false
}
// 防抖函数
export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
      if(timer) {
      clearTimeout(timer);
      }
      timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
      }, delay);
  };
};
