"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[311],{618:function(n,t,e){e.d(t,{Df:function(){return c},Jh:function(){return l},M1:function(){return p},TP:function(){return d},zi:function(){return u}});var r=e(861),o=e(757),a=e.n(o),i=e(243),s="eb6a45a4ae6328e079a1ce9a0d7e00e8";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"'&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},311:function(n,t,e){e.r(t),e.d(t,{default:function(){return Xn}});var r,o=e(433),a=e(861),i=e(439),s=e(757),c=e.n(s),u=e(168),d=e(444),p=d.ZP.button(r||(r=(0,u.Z)(["\n  display: inline-block;\n  margin-left: 920px;\n  margin-bottom: 40px;\n  width: 200px;\n  height: 40px;\n\n  box-shadow: 0px 10px 25px -7px #26393c;\n  background: linear-gradient(to bottom, #899092 5%, #8e9a9d 100%);\n  border-radius: 8px;\n  color: #ffffff;\n  font-family: Arial;\n font-size: 20px;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #3d768a;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    background: linear-gradient(to bottom, #232c2d 5%, #599bb3 100%);\n    background-color: #c1c9ca;\n  }\n"]))),l=e(184),f=function(n){var t=n.onBtnClick;return(0,l.jsx)(p,{onClick:t,children:"More Results"})},m=e(791);function g(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function h(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function v(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){g(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var x={data:""},b=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||x},y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|  +/g,Z=/\n+/g,k=function n(t,e){var r="",o="",a="",i=function(i){var c=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?n(c,i):i+"{"+n(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=n(c,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=n.p?n.p(i,c):i+":"+c+";"),s=i};for(var s in t)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},j={},O=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},P=function(n,t,e,r,o){var a=O(n),i=j[a]||(j[a]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(a));if(!j[i]){var s=a!==n?n:function(n){for(var t,e,r=[{}];t=y.exec(n.replace(w,""));)t[4]?r.shift():t[3]?(e=t[3].replace(Z," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(Z," ").trim();return r[0]}(n);j[i]=k(o?g({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&j.g?j.g:null;return e&&(j.g=j[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(j[i],t,r,c),i},E=function(n,t,e){return n.reduce((function(n,r,o){var a=t[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":k(i,""):!1===i?"":i}return n+r+(null==a?"":a)}),"")};function S(n){var t=this||{},e=n.call?n(t.p):n;return P(e.unshift?e.raw?E(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,b(t.target),t.g,t.o,t.k)}S.bind({g:1});var C,z,D,_,N,A,M,T,I,F,L,U,H,B,R,q,J,Y,$,G=S.bind({k:1});function K(n,t){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:z&&z()},s),e.o=/ *go\d+/.test(c),s.className=S.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),D&&u[0]&&D(s),C(u,s)}return t?t(o):o}}var Q=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},V=function(){var n=0;return function(){return(++n).toString()}}(),W=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),X=new Map,nn=function(n){if(!X.has(n)){var t=setTimeout((function(){X.delete(n),on({type:4,toastId:n})}),1e3);X.set(n,t)}},tn=function n(t,e){switch(e.type){case 0:return v(v({},t),{},{toasts:[e.toast].concat((0,o.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=X.get(n);t&&clearTimeout(t)}(e.toast.id),v(v({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?v(v({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var a=e.toastId;return a?nn(a):t.toasts.forEach((function(n){nn(n.id)})),v(v({},t),{},{toasts:t.toasts.map((function(n){return n.id===a||void 0===a?v(v({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?v(v({},t),{},{toasts:[]}):v(v({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return v(v({},t),{},{pausedAt:e.time});case 6:var i=e.time-(t.pausedAt||0);return v(v({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return v(v({},n),{},{pauseDuration:n.pauseDuration+i})}))})}},en=[],rn={toasts:[],pausedAt:void 0},on=function(n){rn=tn(rn,n),en.forEach((function(n){n(rn)}))},an={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},sn=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return v(v({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||V()})}(t,n,e);return on({type:2,toast:r}),r.id}},cn=function(n,t){return sn("blank")(n,t)};cn.error=sn("error"),cn.success=sn("success"),cn.loading=sn("loading"),cn.custom=sn("custom"),cn.dismiss=function(n){on({type:3,toastId:n})},cn.remove=function(n){return on({type:4,toastId:n})},cn.promise=function(n,t,e){var r=cn.loading(t.loading,v(v({},e),null==e?void 0:e.loading));return n.then((function(n){return cn.success(Q(t.success,n),v(v({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){cn.error(Q(t.error,n),v(v({id:r},e),null==e?void 0:e.error))})),n};var un=function(n,t){on({type:1,toast:{id:n,height:t}})},dn=function(){on({type:5,time:Date.now()})},pn=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,m.useState)(rn),e=(0,i.Z)(t,2),r=e[0],o=e[1];(0,m.useEffect)((function(){return en.push(o),function(){var n=en.indexOf(o);n>-1&&en.splice(n,1)}}),[r]);var a=r.toasts.map((function(t){var e,r;return v(v(v(v({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||an[t.type],style:v(v(v({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return v(v({},r),{},{toasts:a})}(n),e=t.toasts,r=t.pausedAt;(0,m.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return cn.dismiss(t.id)}),e);t.visible&&cn.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var a=(0,m.useCallback)((function(){r&&on({type:6,time:Date.now()})}),[r]),s=(0,m.useCallback)((function(n,t){var r,a=t||{},i=a.reverseOrder,s=void 0!==i&&i,c=a.gutter,u=void 0===c?8:c,d=a.defaultPosition,p=e.filter((function(t){return(t.position||d)===(n.position||d)&&t.height})),l=p.findIndex((function(t){return t.id===n.id})),f=p.filter((function(n,t){return t<l&&n.visible})).length;return(r=p.filter((function(n){return n.visible}))).slice.apply(r,(0,o.Z)(s?[f+1]:[0,f])).reduce((function(n,t){return n+(t.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:un,startPause:dn,endPause:a,calculateOffset:s}}},ln=G(_||(_=(0,u.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),fn=G(N||(N=(0,u.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),mn=G(A||(A=(0,u.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),gn=K("div")(M||(M=(0,u.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),ln,fn,(function(n){return n.secondary||"#fff"}),mn),hn=G(T||(T=(0,u.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),vn=K("div")(I||(I=(0,u.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),hn),xn=G(F||(F=(0,u.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),bn=G(L||(L=(0,u.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),yn=K("div")(U||(U=(0,u.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),xn,bn,(function(n){return n.secondary||"#fff"})),wn=K("div")(H||(H=(0,u.Z)(["\n  position: absolute;\n"]))),Zn=K("div")(B||(B=(0,u.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),kn=G(R||(R=(0,u.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),jn=K("div")(q||(q=(0,u.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),kn),On=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"==typeof e?m.createElement(jn,null,e):e:"blank"===r?null:m.createElement(Zn,null,m.createElement(vn,v({},o)),"loading"!==r&&m.createElement(wn,null,"error"===r?m.createElement(gn,v({},o)):m.createElement(yn,v({},o))))},Pn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},En=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},Sn=K("div")(J||(J=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Cn=K("div")(Y||(Y=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),zn=m.memo((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,a=t.height?function(n,t){var e=n.includes("top")?1:-1,r=W()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Pn(e),En(e)],o=(0,i.Z)(r,2),a=o[0],s=o[1];return{animation:t?"".concat(G(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(G(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},s=m.createElement(On,{toast:t}),c=m.createElement(Cn,v({},t.ariaProps),Q(t.message,t));return m.createElement(Sn,{className:t.className,style:v(v(v({},a),r),t.style)},"function"==typeof o?o({icon:s,message:c}):m.createElement(m.Fragment,null,s,c))}));!function(n,t,e,r){k.p=t,C=n,z=e,D=r}(m.createElement);var Dn,_n,Nn,An,Mn,Tn,In,Fn=function(n){var t=n.id,e=n.className,r=n.style,o=n.onHeightUpdate,a=n.children,i=m.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;o(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return m.createElement("div",{ref:i,className:e,style:r},a)},Ln=S($||($=(0,u.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Un=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,o=n.toastOptions,a=n.gutter,i=n.children,s=n.containerStyle,c=n.containerClassName,u=pn(o),d=u.toasts,p=u.handlers;return m.createElement("div",{style:v({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:p.startPause,onMouseLeave:p.endPause},d.map((function(n){var e=n.position||r,o=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return v(v({left:0,right:0,display:"flex",position:"absolute",transition:W()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),o)}(e,p.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:r}));return m.createElement(Fn,{id:n.id,key:n.id,onHeightUpdate:p.updateHeight,className:n.visible?Ln:"",style:o},"custom"===n.type?Q(n.message,n):i?i(n):m.createElement(zn,{toast:n,position:e}))})))},Hn=d.ZP.div(Dn||(Dn=(0,u.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),Bn=d.ZP.form(_n||(_n=(0,u.Z)(["\n  \n  display: flex;\n  align-items:  center;\n"]))),Rn=d.ZP.input(Nn||(Nn=(0,u.Z)(["\n  display: inline-block;\n  margin-right: 40px;\n  width: 400px;\n  height: 40px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 4px;\n  border-radius: 8px;\n  box-shadow: 0px 10px 14px -7px #44666c;\n\n  color: #065c7c;\n  font-weight: 500;\n  :placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: linear-gradient(to bottom, #899092 5%, #8e9a9d 100%);\n  }\n"]))),qn=d.ZP.button(An||(An=(0,u.Z)(["\n  display: inline-block;\n  width: 150px;\n  height: 40px;\n\n  box-shadow: 0px 10px 14px -7px #44666c;\n  background: linear-gradient(to bottom, #899092 5%, #8e9a9d 100%);\n  /* background-color:#599bb3; */\n  border-radius: 8px;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #3d768a;\n  text-transform: uppercase;\n \n\n  &:hover,\n  &:focus {\n    background: linear-gradient(to bottom, #232c2d 5%, #599bb3 100%);\n    background-color: #c1c9ca;\n  }\n"]))),Jn=function(n){var t=n.onSubmit,e=(0,m.useState)(""),r=(0,i.Z)(e,2),o=r[0],a=r[1];return(0,l.jsx)(Hn,{children:(0,l.jsxs)(Bn,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(t(o),a("")):cn("Please, enter something to search")},children:[(0,l.jsx)(Rn,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"movieName",value:o,onChange:function(n){a(n.currentTarget.value.toLowerCase())}}),(0,l.jsx)(qn,{type:"submit",children:"Search"})]})})},Yn=e(87),$n=d.ZP.div(Mn||(Mn=(0,u.Z)(["\n    padding-right: 50px;\n    padding-left: 50px;\n    padding-top: 30px;\n    padding-bottom: 10px;\n"]))),Gn=d.ZP.ul(Tn||(Tn=(0,u.Z)(["\n    \n    display: grid;\n   max-width: calc(100vw - 20px); \n   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); \n  grid-gap: 5px;\n  column-gap: 40px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Kn=d.ZP.li(In||(In=(0,u.Z)(["\ncolor: white;\n    font-size: 20px;\n\n  :focus,\n  &:hover {  \n    text-decoration: underline;\n     text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n  }\n"]))),Qn=function(n){var t=n.searchMovies,e=n.location;return(0,l.jsx)($n,{children:(0,l.jsx)(Gn,{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,r=n.title;return(0,l.jsx)(Kn,{children:(0,l.jsx)(Yn.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,l.jsxs)("p",{children:[" ",r]})})},t)}))})})},Vn=e(618),Wn=e(689),Xn=function(){var n,t=(0,m.useState)([]),e=(0,i.Z)(t,2),r=e[0],s=e[1],u=(0,m.useState)(1),d=(0,i.Z)(u,2),p=d[0],g=d[1],h=(0,m.useState)(0),v=(0,i.Z)(h,2),x=v[0],b=v[1],y=(0,m.useState)(!1),w=(0,i.Z)(y,2),Z=w[0],k=w[1],j=(0,m.useState)(null),O=(0,i.Z)(j,2),P=O[0],E=O[1],S=(0,Yn.lr)(),C=(0,i.Z)(S,2),z=C[0],D=C[1],_=(0,Wn.TH)(),N=null!==(n=z.get("name"))&&void 0!==n?n:"";(0,m.useEffect)((function(){if(N){var n=function(){var n=(0,a.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.prev=1,n.next=4,(0,Vn.zi)(N,p);case 4:t=n.sent,console.log(t),s((function(n){return[].concat((0,o.Z)(n),(0,o.Z)(t.results))})),b(t.total_results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),E(P);case 13:return n.prev=13,k(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[N,p,P]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{children:[Z&&(0,l.jsx)("div",{children:"Loading..."}),(0,l.jsx)("div",{children:(0,l.jsx)(Jn,{value:N,onSubmit:function(n){D(""!==n?{name:n}:{}),s([]),g(1)}})}),(0,l.jsx)(Qn,{searchMovies:r,location:_}),r.length>0&&r.length<x&&(0,l.jsx)(f,{onBtnClick:function(){g(p+1)}}),(0,l.jsx)(Un,{position:"top-right",toastOptions:{duration:3e3}})]})})}}}]);
//# sourceMappingURL=311.942cf918.chunk.js.map