import{R as h,g,_ as D,h as L}from"./index.4f73175a.js";function S(i,o){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},S(i,o)}function R(i,o){i.prototype=Object.create(o.prototype),i.prototype.constructor=i,S(i,o)}function M(i,o){return i.classList?!!o&&i.classList.contains(o):(" "+(i.className.baseVal||i.className)+" ").indexOf(" "+o+" ")!==-1}function P(i,o){i.classList?i.classList.add(o):M(i,o)||(typeof i.className=="string"?i.className=i.className+" "+o:i.setAttribute("class",(i.className&&i.className.baseVal||"")+" "+o))}function O(i,o){return i.replace(new RegExp("(^|\\s)"+o+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function I(i,o){i.classList?i.classList.remove(o):typeof i.className=="string"?i.className=O(i.className,o):i.setAttribute("class",O(i.className&&i.className.baseVal||"",o))}var _={disabled:!1},k=h.createContext(null),A=function(o){return o.scrollTop},C="unmounted",E="exited",v="entering",m="entered",T="exiting",c=function(i){R(o,i);function o(t,s){var e;e=i.call(this,t,s)||this;var r=s,n=r&&!r.isMounting?t.enter:t.appear,a;return e.appearStatus=null,t.in?n?(a=E,e.appearStatus=v):a=m:t.unmountOnExit||t.mountOnEnter?a=C:a=E,e.state={status:a},e.nextCallback=null,e}o.getDerivedStateFromProps=function(s,e){var r=s.in;return r&&e.status===C?{status:E}:null};var l=o.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(s){var e=null;if(s!==this.props){var r=this.state.status;this.props.in?r!==v&&r!==m&&(e=v):(r===v||r===m)&&(e=T)}this.updateStatus(!1,e)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var s=this.props.timeout,e,r,n;return e=r=n=s,s!=null&&typeof s!="number"&&(e=s.exit,r=s.enter,n=s.appear!==void 0?s.appear:r),{exit:e,enter:r,appear:n}},l.updateStatus=function(s,e){if(s===void 0&&(s=!1),e!==null)if(this.cancelNextCallback(),e===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);r&&A(r)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:C})},l.performEnter=function(s){var e=this,r=this.props.enter,n=this.context?this.context.isMounting:s,a=this.props.nodeRef?[n]:[g.findDOMNode(this),n],p=a[0],u=a[1],f=this.getTimeouts(),d=n?f.appear:f.enter;if(!s&&!r||_.disabled){this.safeSetState({status:m},function(){e.props.onEntered(p)});return}this.props.onEnter(p,u),this.safeSetState({status:v},function(){e.props.onEntering(p,u),e.onTransitionEnd(d,function(){e.safeSetState({status:m},function(){e.props.onEntered(p,u)})})})},l.performExit=function(){var s=this,e=this.props.exit,r=this.getTimeouts(),n=this.props.nodeRef?void 0:g.findDOMNode(this);if(!e||_.disabled){this.safeSetState({status:E},function(){s.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:T},function(){s.props.onExiting(n),s.onTransitionEnd(r.exit,function(){s.safeSetState({status:E},function(){s.props.onExited(n)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(s,e){e=this.setNextCallback(e),this.setState(s,e)},l.setNextCallback=function(s){var e=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,e.nextCallback=null,s(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},l.onTransitionEnd=function(s,e){this.setNextCallback(e);var r=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),n=s==null&&!this.props.addEndListener;if(!r||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],p=a[0],u=a[1];this.props.addEndListener(p,u)}s!=null&&setTimeout(this.nextCallback,s)},l.render=function(){var s=this.state.status;if(s===C)return null;var e=this.props,r=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var n=D(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return h.createElement(k.Provider,{value:null},typeof r=="function"?r(s,n):h.cloneElement(h.Children.only(r),n))},o}(h.Component);c.contextType=k;c.propTypes={};function x(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x};c.UNMOUNTED=C;c.EXITED=E;c.ENTERING=v;c.ENTERED=m;c.EXITING=T;var U=c,y=function(o,l){return o&&l&&l.split(" ").forEach(function(t){return P(o,t)})},N=function(o,l){return o&&l&&l.split(" ").forEach(function(t){return I(o,t)})},b=function(i){R(o,i);function o(){for(var t,s=arguments.length,e=new Array(s),r=0;r<s;r++)e[r]=arguments[r];return t=i.call.apply(i,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(n,a){var p=t.resolveArguments(n,a),u=p[0],f=p[1];t.removeClasses(u,"exit"),t.addClass(u,f?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(n,a)},t.onEntering=function(n,a){var p=t.resolveArguments(n,a),u=p[0],f=p[1],d=f?"appear":"enter";t.addClass(u,d,"active"),t.props.onEntering&&t.props.onEntering(n,a)},t.onEntered=function(n,a){var p=t.resolveArguments(n,a),u=p[0],f=p[1],d=f?"appear":"enter";t.removeClasses(u,d),t.addClass(u,d,"done"),t.props.onEntered&&t.props.onEntered(n,a)},t.onExit=function(n){var a=t.resolveArguments(n),p=a[0];t.removeClasses(p,"appear"),t.removeClasses(p,"enter"),t.addClass(p,"exit","base"),t.props.onExit&&t.props.onExit(n)},t.onExiting=function(n){var a=t.resolveArguments(n),p=a[0];t.addClass(p,"exit","active"),t.props.onExiting&&t.props.onExiting(n)},t.onExited=function(n){var a=t.resolveArguments(n),p=a[0];t.removeClasses(p,"exit"),t.addClass(p,"exit","done"),t.props.onExited&&t.props.onExited(n)},t.resolveArguments=function(n,a){return t.props.nodeRef?[t.props.nodeRef.current,n]:[n,a]},t.getClassNames=function(n){var a=t.props.classNames,p=typeof a=="string",u=p&&a?a+"-":"",f=p?""+u+n:a[n],d=p?f+"-active":a[n+"Active"],$=p?f+"-done":a[n+"Done"];return{baseClassName:f,activeClassName:d,doneClassName:$}},t}var l=o.prototype;return l.addClass=function(s,e,r){var n=this.getClassNames(e)[r+"ClassName"],a=this.getClassNames("enter"),p=a.doneClassName;e==="appear"&&r==="done"&&p&&(n+=" "+p),r==="active"&&s&&A(s),n&&(this.appliedClasses[e][r]=n,y(s,n))},l.removeClasses=function(s,e){var r=this.appliedClasses[e],n=r.base,a=r.active,p=r.done;this.appliedClasses[e]={},n&&N(s,n),a&&N(s,a),p&&N(s,p)},l.render=function(){var s=this.props;s.classNames;var e=D(s,["classNames"]);return h.createElement(U,L({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(h.Component);b.defaultProps={classNames:""};b.propTypes={};var j=b;export{j as C};
