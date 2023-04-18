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

export const isPath = (path) => {
  let pathRes = path.split('/')
  if (
    pathRes[2] === 'shopping-cart' ||
    pathRes[2] === 'mail-box' ||
    pathRes[2] === 'search' ||
    pathRes[2] === 'good' ||
    pathRes[2] === 'collect' ||
    pathRes[2] === 'space' ||
    pathRes[2] === 'wait' ||
    pathRes[2] === 'edit'
  ) return true
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

// 数组对象去重
export function unique(tempArr) {
  let result = [];
  let obj = {};
  for (let i = 0; i < tempArr.length; i++) {
    if (!obj[tempArr[i].id]) {
      result.push(tempArr[i]);
      obj[tempArr[i].id] = true;
    };
  };
  return result;
};
