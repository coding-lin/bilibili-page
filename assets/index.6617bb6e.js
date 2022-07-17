import{R as v,g as S,_ as A,h as G,s as N,c as w,u as M,r as b,a as D,j as d}from"./index.75b00479.js";import{S as j}from"./index.6947956f.js";import{G as F,a as I}from"./index.df849aac.js";function y(i,o){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},y(i,o)}function P(i,o){i.prototype=Object.create(o.prototype),i.prototype.constructor=i,y(i,o)}function U(i,o){return i.classList?!!o&&i.classList.contains(o):(" "+(i.className.baseVal||i.className)+" ").indexOf(" "+o+" ")!==-1}function z(i,o){i.classList?i.classList.add(o):U(i,o)||(typeof i.className=="string"?i.className=i.className+" "+o:i.setAttribute("class",(i.className&&i.className.baseVal||"")+" "+o))}function k(i,o){return i.replace(new RegExp("(^|\\s)"+o+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function W(i,o){i.classList?i.classList.remove(o):typeof i.className=="string"?i.className=k(i.className,o):i.setAttribute("class",k(i.className&&i.className.baseVal||"",o))}var _={disabled:!1},$=v.createContext(null),C="unmounted",x="exited",E="entering",g="entered",O="exiting",f=function(i){P(o,i);function o(t,s){var e;e=i.call(this,t,s)||this;var a=s,n=a&&!a.isMounting?t.enter:t.appear,r;return e.appearStatus=null,t.in?n?(r=x,e.appearStatus=E):r=g:t.unmountOnExit||t.mountOnEnter?r=C:r=x,e.state={status:r},e.nextCallback=null,e}o.getDerivedStateFromProps=function(s,e){var a=s.in;return a&&e.status===C?{status:x}:null};var l=o.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(s){var e=null;if(s!==this.props){var a=this.state.status;this.props.in?a!==E&&a!==g&&(e=E):(a===E||a===g)&&(e=O)}this.updateStatus(!1,e)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var s=this.props.timeout,e,a,n;return e=a=n=s,s!=null&&typeof s!="number"&&(e=s.exit,a=s.enter,n=s.appear!==void 0?s.appear:a),{exit:e,enter:a,appear:n}},l.updateStatus=function(s,e){s===void 0&&(s=!1),e!==null?(this.cancelNextCallback(),e===E?this.performEnter(s):this.performExit()):this.props.unmountOnExit&&this.state.status===x&&this.setState({status:C})},l.performEnter=function(s){var e=this,a=this.props.enter,n=this.context?this.context.isMounting:s,r=this.props.nodeRef?[n]:[S.findDOMNode(this),n],p=r[0],u=r[1],c=this.getTimeouts(),h=n?c.appear:c.enter;if(!s&&!a||_.disabled){this.safeSetState({status:g},function(){e.props.onEntered(p)});return}this.props.onEnter(p,u),this.safeSetState({status:E},function(){e.props.onEntering(p,u),e.onTransitionEnd(h,function(){e.safeSetState({status:g},function(){e.props.onEntered(p,u)})})})},l.performExit=function(){var s=this,e=this.props.exit,a=this.getTimeouts(),n=this.props.nodeRef?void 0:S.findDOMNode(this);if(!e||_.disabled){this.safeSetState({status:x},function(){s.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:O},function(){s.props.onExiting(n),s.onTransitionEnd(a.exit,function(){s.safeSetState({status:x},function(){s.props.onExited(n)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(s,e){e=this.setNextCallback(e),this.setState(s,e)},l.setNextCallback=function(s){var e=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,e.nextCallback=null,s(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},l.onTransitionEnd=function(s,e){this.setNextCallback(e);var a=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this),n=s==null&&!this.props.addEndListener;if(!a||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],p=r[0],u=r[1];this.props.addEndListener(p,u)}s!=null&&setTimeout(this.nextCallback,s)},l.render=function(){var s=this.state.status;if(s===C)return null;var e=this.props,a=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var n=A(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return v.createElement($.Provider,{value:null},typeof a=="function"?a(s,n):v.cloneElement(v.Children.only(a),n))},o}(v.Component);f.contextType=$;f.propTypes={};function m(){}f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m};f.UNMOUNTED=C;f.EXITED=x;f.ENTERING=E;f.ENTERED=g;f.EXITING=O;var X=f,V=function(o,l){return o&&l&&l.split(" ").forEach(function(t){return z(o,t)})},T=function(o,l){return o&&l&&l.split(" ").forEach(function(t){return W(o,t)})},L=function(i){P(o,i);function o(){for(var t,s=arguments.length,e=new Array(s),a=0;a<s;a++)e[a]=arguments[a];return t=i.call.apply(i,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(n,r){var p=t.resolveArguments(n,r),u=p[0],c=p[1];t.removeClasses(u,"exit"),t.addClass(u,c?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(n,r)},t.onEntering=function(n,r){var p=t.resolveArguments(n,r),u=p[0],c=p[1],h=c?"appear":"enter";t.addClass(u,h,"active"),t.props.onEntering&&t.props.onEntering(n,r)},t.onEntered=function(n,r){var p=t.resolveArguments(n,r),u=p[0],c=p[1],h=c?"appear":"enter";t.removeClasses(u,h),t.addClass(u,h,"done"),t.props.onEntered&&t.props.onEntered(n,r)},t.onExit=function(n){var r=t.resolveArguments(n),p=r[0];t.removeClasses(p,"appear"),t.removeClasses(p,"enter"),t.addClass(p,"exit","base"),t.props.onExit&&t.props.onExit(n)},t.onExiting=function(n){var r=t.resolveArguments(n),p=r[0];t.addClass(p,"exit","active"),t.props.onExiting&&t.props.onExiting(n)},t.onExited=function(n){var r=t.resolveArguments(n),p=r[0];t.removeClasses(p,"exit"),t.addClass(p,"exit","done"),t.props.onExited&&t.props.onExited(n)},t.resolveArguments=function(n,r){return t.props.nodeRef?[t.props.nodeRef.current,n]:[n,r]},t.getClassNames=function(n){var r=t.props.classNames,p=typeof r=="string",u=p&&r?r+"-":"",c=p?""+u+n:r[n],h=p?c+"-active":r[n+"Active"],R=p?c+"-done":r[n+"Done"];return{baseClassName:c,activeClassName:h,doneClassName:R}},t}var l=o.prototype;return l.addClass=function(s,e,a){var n=this.getClassNames(e)[a+"ClassName"],r=this.getClassNames("enter"),p=r.doneClassName;e==="appear"&&a==="done"&&p&&(n+=" "+p),a==="active"&&s&&s.scrollTop,n&&(this.appliedClasses[e][a]=n,V(s,n))},l.removeClasses=function(s,e){var a=this.appliedClasses[e],n=a.base,r=a.active,p=a.done;this.appliedClasses[e]={},n&&T(s,n),r&&T(s,r),p&&T(s,p)},l.render=function(){var s=this.props;s.classNames;var e=A(s,["classNames"]);return v.createElement(X,G({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(v.Component);L.defaultProps={classNames:""};L.propTypes={};var H=L;const B=N.div`
  background-color: rgba(55, 30, 60, 0.1);
`,q=N.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  z-index: 999;
  i {
    position: absolute;
    font-size: 20px;
    top: 14px;
    left: 14px;
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 60px;
  }
  /* CSSTransition 过度类型给children  */
  &.fly-enter,&.fly-appear {
    opacity: 0;
    /* 启用GPU加速 */
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-apply-active {
    opacity: 1;
    transition: all .3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0,0,0)
  }
  &.fly-exit-active {
    opacity: 0;
    transition: all .3s;
    transform: translate3d(100%, 0, 0);
  }
`,J=N.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(50, 50, 50, 0.08);
  .info {
    position: relative;
    width: 100%;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 40%;
      height: 60%;
      margin: 0 auto;
    }
    p {
      font-size: 14px;
      left: -50%;
      right: -50%;
      bottom: 36px;
    }
    span {
      position: absolute;
      bottom: -14px;
      left: 50%;
      right: 50%;
      width: 110px;
      height: 26px;
      margin-top: -55px;
      margin-left: -55px;
      padding: 2px;
      border-radius: 14px;
      font-size: 15px;
      background-color: Silver;
    }
  }
`;N.div`
  
`;var K="./assets/empty.3071a740.png";const Q=()=>d(J,{children:D("div",{className:"info",children:[d("img",{src:K}),d("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),d("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),Y=i=>{const o=M(),{goodsList:l,enterLoading:t}=i,{getGoodListDispatch:s}=i,[e,a]=b.exports.useState(!1);b.exports.useEffect(()=>{o("/shopping-cart")},[]),b.exports.useEffect(()=>{a(!0),s()},[]);const n=()=>d(F,{goodsList:l});return D(B,{children:[d(H,{in:e,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:D(q,{children:[d("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>o("/vip")}),d("h2",{children:"\u8D2D\u7269\u8F66"})]})}),Q(),t?d(j.Paragraph,{lineCount:25,animated:!0}):n()]})},Z=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),tt=i=>({getGoodListDispatch(){i(I())}});var it=w(Z,tt)(v.memo(Y));export{it as default};
