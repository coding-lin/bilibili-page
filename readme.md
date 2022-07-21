## React + Redux仿写哔哩哔哩移动端首页+会员购页面

bilibili 会员购商品布局方法，使用了 `multi-column` 多栏布局实现瀑布流：

关键代码：

```css
/* 父容器 */
.container {
  column-count: 2;  // 两列布局
  column-gap: 10px;  // 列间距为 10px
}
/* 子元素 */
.good-box { 
  width: 100%;
  break-inside: avoid;  // 元素不能中断，auto 可以中断 
}
```

- 瀑布流的优点如下：

1. 节省空间，外表美观，更有艺术性。
2. 对于触屏设备非常友好，通过向上滑动浏览。
2. 用户浏览时的观赏和思维不容易被打断，留存更容易。

- 遇到的问题：
  1. 解决顶部不能对齐的问题
    > `multi-column` 布局中子元素的排列顺序是先从上往下再从左至右的，子元素中使用 `margin-top` 会出现两列顶部不能对齐的情况，使用 `margin-bottom` 既能顶部对齐，也能让元素之间不粘连，更具美感。

视频列表和商品列表使用了 `antd-mobile` 骨架屏和 `LazyLoad` 图片懒加载功能
  > 因为大多数图片资源是从 `fastmock` 中请求过来的，受网络影响需一些时间，用户在等待的过程中页面出现空白状态很影响体验，引入骨架屏让页面更丰富，填补了等待时间段，提升用户体验。

  > 图片懒加载功能又称为按需加载功能，对于那些含有大量图片资源的网站，会采用“按需加载”的方式，也就是当图片资源出现在视口区域内，才会被加载，能大大节省网站的流量。

  实现代码：

```jsx
import LazyLoad from 'react-lazyload'
import bilibili from '@/assets/images/bilibili.jpeg'
// 图片未加载出来时，使用本地 bilibili 图片占位
<LazyLoad
  placeholder={<img width="100%" 
  height="100%" src={bilibili}/>}
>
  <img src={good.img} />
</LazyLoad>
```

- 性能优化

  1. 手写骨架屏

  2. 手写懒加载功能
