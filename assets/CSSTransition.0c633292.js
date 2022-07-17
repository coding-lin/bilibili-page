import{R as h,h as g,_ as D,i as L}from"./index.839d6523.js";function S(a,p){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},S(a,p)}function k(a,p){a.prototype=Object.create(p.prototype),a.prototype.constructor=a,S(a,p)}function R(a,p){return a.classList?!!p&&a.classList.contains(p):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+p+" ")!==-1}function P(a,p){a.classList?a.classList.add(p):R(a,p)||(typeof a.className=="string"?a.className=a.className+" "+p:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+p))}function O(a,p){return a.replace(new RegExp("(^|\\s)"+p+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function M(a,p){a.classList?a.classList.remove(p):typeof a.className=="string"?a.className=O(a.className,p):a.setAttribute("class",O(a.className&&a.className.baseVal||"",p))}var _={disabled:!1},A=h.createContext(null),C="unmounted",E="exited",v="entering",m="entered",T="exiting",c=function(a){k(p,a);function p(t,s){var e;e=a.call(this,t,s)||this;var r=s,n=r&&!r.isMounting?t.enter:t.appear,i;return e.appearStatus=null,t.in?n?(i=E,e.appearStatus=v):i=m:t.unmountOnExit||t.mountOnEnter?i=C:i=E,e.state={status:i},e.nextCallback=null,e}p.getDerivedStateFromProps=function(s,e){var r=s.in;return r&&e.status===C?{status:E}:null};var l=p.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(s){var e=null;if(s!==this.props){var r=this.state.status;this.props.in?r!==v&&r!==m&&(e=v):(r===v||r===m)&&(e=T)}this.updateStatus(!1,e)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var s=this.props.timeout,e,r,n;return e=r=n=s,s!=null&&typeof s!="number"&&(e=s.exit,r=s.enter,n=s.appear!==void 0?s.appear:r),{exit:e,enter:r,appear:n}},l.updateStatus=function(s,e){s===void 0&&(s=!1),e!==null?(this.cancelNextCallback(),e===v?this.performEnter(s):this.performExit()):this.props.unmountOnExit&&this.state.status===E&&this.setState({status:C})},l.performEnter=function(s){var e=this,r=this.props.enter,n=this.context?this.context.isMounting:s,i=this.props.nodeRef?[n]:[g.findDOMNode(this),n],o=i[0],u=i[1],f=this.getTimeouts(),d=n?f.appear:f.enter;if(!s&&!r||_.disabled){this.safeSetState({status:m},function(){e.props.onEntered(o)});return}this.props.onEnter(o,u),this.safeSetState({status:v},function(){e.props.onEntering(o,u),e.onTransitionEnd(d,function(){e.safeSetState({status:m},function(){e.props.onEntered(o,u)})})})},l.performExit=function(){var s=this,e=this.props.exit,r=this.getTimeouts(),n=this.props.nodeRef?void 0:g.findDOMNode(this);if(!e||_.disabled){this.safeSetState({status:E},function(){s.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:T},function(){s.props.onExiting(n),s.onTransitionEnd(r.exit,function(){s.safeSetState({status:E},function(){s.props.onExited(n)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(s,e){e=this.setNextCallback(e),this.setState(s,e)},l.setNextCallback=function(s){var e=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,e.nextCallback=null,s(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},l.onTransitionEnd=function(s,e){this.setNextCallback(e);var r=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),n=s==null&&!this.props.addEndListener;if(!r||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],o=i[0],u=i[1];this.props.addEndListener(o,u)}s!=null&&setTimeout(this.nextCallback,s)},l.render=function(){var s=this.state.status;if(s===C)return null;var e=this.props,r=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var n=D(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return h.createElement(A.Provider,{value:null},typeof r=="function"?r(s,n):h.cloneElement(h.Children.only(r),n))},p}(h.Component);c.contextType=A;c.propTypes={};function x(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x};c.UNMOUNTED=C;c.EXITED=E;c.ENTERING=v;c.ENTERED=m;c.EXITING=T;var I=c,U=function(p,l){return p&&l&&l.split(" ").forEach(function(t){return P(p,t)})},N=function(p,l){return p&&l&&l.split(" ").forEach(function(t){return M(p,t)})},b=function(a){k(p,a);function p(){for(var t,s=arguments.length,e=new Array(s),r=0;r<s;r++)e[r]=arguments[r];return t=a.call.apply(a,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(n,i){var o=t.resolveArguments(n,i),u=o[0],f=o[1];t.removeClasses(u,"exit"),t.addClass(u,f?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(n,i)},t.onEntering=function(n,i){var o=t.resolveArguments(n,i),u=o[0],f=o[1],d=f?"appear":"enter";t.addClass(u,d,"active"),t.props.onEntering&&t.props.onEntering(n,i)},t.onEntered=function(n,i){var o=t.resolveArguments(n,i),u=o[0],f=o[1],d=f?"appear":"enter";t.removeClasses(u,d),t.addClass(u,d,"done"),t.props.onEntered&&t.props.onEntered(n,i)},t.onExit=function(n){var i=t.resolveArguments(n),o=i[0];t.removeClasses(o,"appear"),t.removeClasses(o,"enter"),t.addClass(o,"exit","base"),t.props.onExit&&t.props.onExit(n)},t.onExiting=function(n){var i=t.resolveArguments(n),o=i[0];t.addClass(o,"exit","active"),t.props.onExiting&&t.props.onExiting(n)},t.onExited=function(n){var i=t.resolveArguments(n),o=i[0];t.removeClasses(o,"exit"),t.addClass(o,"exit","done"),t.props.onExited&&t.props.onExited(n)},t.resolveArguments=function(n,i){return t.props.nodeRef?[t.props.nodeRef.current,n]:[n,i]},t.getClassNames=function(n){var i=t.props.classNames,o=typeof i=="string",u=o&&i?i+"-":"",f=o?""+u+n:i[n],d=o?f+"-active":i[n+"Active"],$=o?f+"-done":i[n+"Done"];return{baseClassName:f,activeClassName:d,doneClassName:$}},t}var l=p.prototype;return l.addClass=function(s,e,r){var n=this.getClassNames(e)[r+"ClassName"],i=this.getClassNames("enter"),o=i.doneClassName;e==="appear"&&r==="done"&&o&&(n+=" "+o),r==="active"&&s&&s.scrollTop,n&&(this.appliedClasses[e][r]=n,U(s,n))},l.removeClasses=function(s,e){var r=this.appliedClasses[e],n=r.base,i=r.active,o=r.done;this.appliedClasses[e]={},n&&N(s,n),i&&N(s,i),o&&N(s,o)},l.render=function(){var s=this.props;s.classNames;var e=D(s,["classNames"]);return h.createElement(I,L({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},p}(h.Component);b.defaultProps={classNames:""};b.propTypes={};var G=b;export{G as C};
