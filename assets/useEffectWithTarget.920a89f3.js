import{r as a}from"./index.2af84c25.js";import{a as E,b as R}from"./index.f0ed51d6.js";import{i as p}from"./index.82106837.js";function v(r,n){if(r===n)return!0;for(var e=0;e<r.length;e++)if(!Object.is(r[e],n[e]))return!1;return!0}function g(r,n){if(!!p){if(!r)return n;var e;return E(r)?e=r():"current"in r?e=r.current:e=r,e}}var x=function(r){var n=function(e,i,s){var o=a.exports.useRef(!1),f=a.exports.useRef([]),l=a.exports.useRef([]),u=a.exports.useRef();r(function(){var t,m=Array.isArray(s)?s:[s],c=m.map(function(h){return g(h)});if(!o.current){o.current=!0,f.current=c,l.current=i,u.current=e();return}(c.length!==f.current.length||!v(c,f.current)||!v(i,l.current))&&((t=u.current)===null||t===void 0||t.call(u),f.current=c,l.current=i,u.current=e())}),R(function(){var t;(t=u.current)===null||t===void 0||t.call(u),o.current=!1})};return n},T=x,W=T(a.exports.useEffect),y=W;export{T as c,g,y as u};