## 项目启动

- `git clone https://github.com/gemini-hjl/bilibili-page.git`

- `cd bilibili-page`

- `yarn install`

- `yarn start`

## React + Redux 仿写哔哩哔哩移动端首页+会员购页面

### 亮眼之处

一、bilibili 会员购商品布局方法，使用了 `multi-column` 多栏布局实现瀑布流：

关键代码：

```css
/* 父容器 */
.container {
  column-count: 2; // 两列布局
  column-gap: 10px; // 列间距为 10px
}
/* 子元素 */
.good-box {
  width: 100%;
  break-inside: avoid; // 元素不能中断，auto 可以中断
}
```

- 瀑布流的优点如下：
  > 1. 节省空间，外表美观，更有艺术性。
  >
  > 2. 对于触屏设备非常友好，通过向上滑动浏览。
  >
  > 3. 用户浏览时的观赏和思维不容易被打断，留存更容易。

二、 视频列表和商品列表使用了 `antd-mobile` 骨架屏和 `LazyLoad` 图片懒加载功能

> 因为大多数图片资源是从 `fastmock` 中请求过来的，受网络影响需一些时间，用户在等待的过程中页面出现空白状态很影响体验，引入骨架屏让页面更丰富，填补了等待时间段，提升用户体验。

> 图片懒加载功能又称为按需加载功能，对于那些含有大量图片资源的网站，会采用“按需加载”的方式，也就是当图片资源出现在视口区域内，才会被加载，能大大节省网站的流量。

实现代码：

```jsx
import LazyLoad from "react-lazyload";
import bilibili from "@/assets/images/bilibili.jpeg";
// 当图片未加载出来时，使用本地图片 bilibili 占位
<LazyLoad placeholder={<img width="100%" height="100%" src={bilibili} />}>
  <img src={good.img} />
</LazyLoad>;
```

### 遇到的问题及解决方法

1. 解决顶部不能对齐的问题

   > `multi-column` 布局中子元素的排列顺序是先从上往下再从左至右的，子元素中使用 `margin-top` 会出现两列顶部不能对齐的情况，使用 `margin-bottom` 既能顶部对齐，也能让元素之间不粘连，更具美感。

2. 收藏某件商品时，将所有商品收藏，解决方法：
   > 把商品组件进行单独封装作为子组件，父组件将 good 传递给子组件，子组件拿到单独的 id，在进行之后的操作时，就不会对其它的子组件造成影响。

### 性能优化

1. 手写骨架屏(待实现)

2. 手写懒加载功能(待实现)

3. 全局样式风格文件

```js
export default {
  "background-color": "rgba(50, 50, 50, 0.06)",
  "search_bar-color": "rgba(50, 50, 50, 0.08)",
  "border-color": "rgba(50, 50, 50, 0.2)",
  "loading-color": "rgba(0, 150, 250, 0.8)",
};
```

- 引入方式：`import style from '@/assets/global-style';`
- 使用方式：`background: ${style["background-color"]};`

4. 全局 `rem` 移动端适配

- 在 `src` 下添加文件 `rem.js`

```js
const init = function () {
  let clientWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  if (clientWidth >= 640) {
    clientWidth = 640;
  }
  const fontSize = (20 / 375) * clientWidth;
  document.documentElement.style.fontSize = fontSize + "px";
};

init();

window.addEventListener("resize", init);
export default init;
```

- 在 `global-style.js` 中添加：

```js
export const px2rem = (px) => {
  return `${px / 20}rem`;
};
```

- 在样式文件中引入 `import { px2rem } from '@/assets/global-style';`
- 之后编写样式时，直接将长度单位、字体大小等直接按 `px` 大小进行编写，省去计算过程。例如：`font-size: ${px2rem(18)};`

5. memo 性能优化
   > 组件在相同 `props` 的情况下渲染相同的结果，那么你可以通过将其包装在 `React.memo` 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。
