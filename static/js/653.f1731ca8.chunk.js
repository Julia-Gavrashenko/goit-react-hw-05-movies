"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{618:function(t,n,e){e.d(n,{Df:function(){return c},Jh:function(){return d},M1:function(){return f},TP:function(){return l},zi:function(){return u}});var r=e(861),a=e(757),o=e.n(a),i=e(243),s="eb6a45a4ae6328e079a1ce9a0d7e00e8";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var t=(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(o().mark((function t(n,e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n,"'&page=").concat(e,"&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},653:function(t,n,e){e.r(n),e.d(n,{default:function(){return Mt}});var r=e(433),a=e(861),o=e(439),i=e(757),s=e.n(i),c=e(791);function u(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p={data:""},m=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||p},v=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,b=function t(n,e){var r="",a="",o="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":a+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?a+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&o?e+"{"+o+"}":o)+a},y={},x=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},w=function(t,n,e,r,a){var o=x(t),i=y[o]||(y[o]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(o));if(!y[i]){var s=o!==t?t:function(t){for(var n,e,r=[{}];n=v.exec(t.replace(h,""));)n[4]?r.shift():n[3]?(e=n[3].replace(g," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(g," ").trim();return r[0]}(t);y[i]=b(a?l({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&y.g?y.g:null;return e&&(y.g=y[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(y[i],n,r,c),i},j=function(t,n,e){return t.reduce((function(t,r,a){var o=n[a];if(o&&o.call){var i=o(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=s?"."+s:i&&"object"==typeof i?i.props?"":b(i,""):!1===i?"":i}return t+r+(null==o?"":o)}),"")};function k(t){var n=this||{},e=t.call?t(n.p):t;return w(e.unshift?e.raw?j(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,m(n.target),n.g,n.o,n.k)}k.bind({g:1});var O,E,Z,P,S,C,D,z,_,N,M,A,T,I,F,L,U,H,R,q=k.bind({k:1});function B(t,n){var e=this||{};return function(){var r=arguments;function a(o,i){var s=Object.assign({},o),c=s.className||a.className;e.p=Object.assign({theme:E&&E()},s),e.o=/ *go\d+/.test(c),s.className=k.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),Z&&u[0]&&Z(s),O(u,s)}return n?n(a):a}}var J=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},Y=function(){var t=0;return function(){return(++t).toString()}}(),$=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),G=new Map,K=function(t){if(!G.has(t)){var n=setTimeout((function(){G.delete(t),X({type:4,toastId:t})}),1e3);G.set(t,n)}},Q=function t(n,e){switch(e.type){case 0:return d(d({},n),{},{toasts:[e.toast].concat((0,r.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=G.get(t);n&&clearTimeout(n)}(e.toast.id),d(d({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?d(d({},t),e.toast):t}))});case 2:var a=e.toast;return n.toasts.find((function(t){return t.id===a.id}))?t(n,{type:1,toast:a}):t(n,{type:0,toast:a});case 3:var o=e.toastId;return o?K(o):n.toasts.forEach((function(t){K(t.id)})),d(d({},n),{},{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?d(d({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?d(d({},n),{},{toasts:[]}):d(d({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return d(d({},n),{},{pausedAt:e.time});case 6:var i=e.time-(n.pausedAt||0);return d(d({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return d(d({},t),{},{pauseDuration:t.pauseDuration+i})}))})}},V=[],W={toasts:[],pausedAt:void 0},X=function(t){W=Q(W,t),V.forEach((function(t){t(W)}))},tt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},nt=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return d(d({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||Y()})}(n,t,e);return X({type:2,toast:r}),r.id}},et=function(t,n){return nt("blank")(t,n)};et.error=nt("error"),et.success=nt("success"),et.loading=nt("loading"),et.custom=nt("custom"),et.dismiss=function(t){X({type:3,toastId:t})},et.remove=function(t){return X({type:4,toastId:t})},et.promise=function(t,n,e){var r=et.loading(n.loading,d(d({},e),null==e?void 0:e.loading));return t.then((function(t){return et.success(J(n.success,t),d(d({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){et.error(J(n.error,t),d(d({id:r},e),null==e?void 0:e.error))})),t};var rt=function(t,n){X({type:1,toast:{id:t,height:n}})},at=function(){X({type:5,time:Date.now()})},ot=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,c.useState)(W),e=(0,o.Z)(n,2),r=e[0],a=e[1];(0,c.useEffect)((function(){return V.push(a),function(){var t=V.indexOf(a);t>-1&&V.splice(t,1)}}),[r]);var i=r.toasts.map((function(n){var e,r;return d(d(d(d({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||tt[n.type],style:d(d(d({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return d(d({},r),{},{toasts:i})}(t),e=n.toasts,a=n.pausedAt;(0,c.useEffect)((function(){if(!a){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return et.dismiss(n.id)}),e);n.visible&&et.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,a]);var i=(0,c.useCallback)((function(){a&&X({type:6,time:Date.now()})}),[a]),s=(0,c.useCallback)((function(t,n){var a,o=n||{},i=o.reverseOrder,s=void 0!==i&&i,c=o.gutter,u=void 0===c?8:c,l=o.defaultPosition,f=e.filter((function(n){return(n.position||l)===(t.position||l)&&n.height})),d=f.findIndex((function(n){return n.id===t.id})),p=f.filter((function(t,n){return n<d&&t.visible})).length;return(a=f.filter((function(t){return t.visible}))).slice.apply(a,(0,r.Z)(s?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:rt,startPause:at,endPause:i,calculateOffset:s}}},it=q(P||(P=u(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),st=q(S||(S=u(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ct=q(C||(C=u(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),ut=B("div")(D||(D=u(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),it,st,(function(t){return t.secondary||"#fff"}),ct),lt=q(z||(z=u(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ft=B("div")(_||(_=u(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),lt),dt=q(N||(N=u(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),pt=q(M||(M=u(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),mt=B("div")(A||(A=u(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),dt,pt,(function(t){return t.secondary||"#fff"})),vt=B("div")(T||(T=u(["\n  position: absolute;\n"]))),ht=B("div")(I||(I=u(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),gt=q(F||(F=u(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),bt=B("div")(L||(L=u(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),gt),yt=function(t){var n=t.toast,e=n.icon,r=n.type,a=n.iconTheme;return void 0!==e?"string"==typeof e?c.createElement(bt,null,e):e:"blank"===r?null:c.createElement(ht,null,c.createElement(ft,d({},a)),"loading"!==r&&c.createElement(vt,null,"error"===r?c.createElement(ut,d({},a)):c.createElement(mt,d({},a))))},xt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},wt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},jt=B("div")(U||(U=u(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),kt=B("div")(H||(H=u(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Ot=c.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,i=n.height?function(t,n){var e=t.includes("top")?1:-1,r=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[xt(e),wt(e)],a=(0,o.Z)(r,2),i=a[0],s=a[1];return{animation:n?"".concat(q(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(q(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},s=c.createElement(yt,{toast:n}),u=c.createElement(kt,d({},n.ariaProps),J(n.message,n));return c.createElement(jt,{className:n.className,style:d(d(d({},i),r),n.style)},"function"==typeof a?a({icon:s,message:u}):c.createElement(c.Fragment,null,s,u))}));!function(t,n,e,r){b.p=n,O=t,E=e,Z=r}(c.createElement);var Et=function(t){var n=t.id,e=t.className,r=t.style,a=t.onHeightUpdate,o=t.children,i=c.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;a(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,a]);return c.createElement("div",{ref:i,className:e,style:r},o)},Zt=k(R||(R=u(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Pt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,a=t.toastOptions,o=t.gutter,i=t.children,s=t.containerStyle,u=t.containerClassName,l=ot(a),f=l.toasts,p=l.handlers;return c.createElement("div",{style:d({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:u,onMouseEnter:p.startPause,onMouseLeave:p.endPause},f.map((function(t){var e=t.position||r,a=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return d(d({left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),a)}(e,p.calculateOffset(t,{reverseOrder:n,gutter:o,defaultPosition:r}));return c.createElement(Et,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?Zt:"",style:a},"custom"===t.type?J(t.message,t):i?i(t):c.createElement(Ot,{toast:t,position:e}))})))},St=e(184),Ct=function(t){var n=t.onSubmit,e=(0,c.useState)(""),r=(0,o.Z)(e,2),a=r[0],i=r[1];return(0,St.jsx)("div",{children:(0,St.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==a.trim()?(n(a),i("")):et("Please, enter something to search")},children:[(0,St.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"movieName",value:a,onChange:function(t){i(t.currentTarget.value.toLowerCase())}}),(0,St.jsx)("button",{type:"submit",children:"Search"})]})})},Dt=e(87),zt=function(t){var n=t.searchMovies,e=t.location;return(0,St.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){return(0,St.jsx)("li",{children:(0,St.jsx)(Dt.rU,{to:"/movies/".concat(t.id),state:{from:e},children:(0,St.jsxs)("p",{children:[" ",t.title]})})},t.id)}))})},_t=e(618),Nt=e(689),Mt=function(){var t,n=(0,c.useState)([]),e=(0,o.Z)(n,2),i=e[0],u=e[1],l=(0,c.useState)(1),f=(0,o.Z)(l,2),d=f[0],p=f[1],m=(0,c.useState)(0),v=(0,o.Z)(m,2),h=v[0],g=v[1],b=(0,c.useState)(!1),y=(0,o.Z)(b,2),x=y[0],w=y[1],j=(0,c.useState)(null),k=(0,o.Z)(j,2),O=k[0],E=k[1],Z=(0,Dt.lr)(),P=(0,o.Z)(Z,2),S=P[0],C=P[1],D=(0,Nt.TH)(),z=null!==(t=S.get("name"))&&void 0!==t?t:"";(0,c.useEffect)((function(){if(z){var t=function(){var t=(0,a.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,(0,_t.zi)(z,d);case 4:n=t.sent,console.log(n),u((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(n.results))})),g(n.total_results),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),E(O);case 13:return t.prev=13,w(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}}),[z,d,O]);return(0,St.jsx)(St.Fragment,{children:(0,St.jsxs)("section",{children:[x&&(0,St.jsx)("div",{children:"Loading..."}),(0,St.jsx)("div",{children:(0,St.jsx)(Ct,{value:z,onSubmit:function(t){C(""!==t?{name:t}:{}),u([]),p(1)}})}),(0,St.jsx)(zt,{searchMovies:i,location:D}),i.length>0&&i.length<h&&(0,St.jsx)("button",{onClick:function(){p(d+1)},children:"More Results"}),(0,St.jsx)(Pt,{position:"top-right",toastOptions:{duration:3e3}})]})})}}}]);
//# sourceMappingURL=653.f1731ca8.chunk.js.map