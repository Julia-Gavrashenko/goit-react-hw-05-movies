"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[43],{618:function(n,e,t){t.d(e,{Df:function(){return c},Jh:function(){return d},M1:function(){return x},TP:function(){return u},zi:function(){return p}});var r=t(861),a=t(757),i=t.n(a),o=t(243),s="eb6a45a4ae6328e079a1ce9a0d7e00e8";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e,"'&page=").concat(t,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},43:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,i,o,s,c,p,u,x,d,l,h,f,g,v=t(861),w=t(439),Z=t(757),m=t.n(Z),b=t(791),j=t(87),k=t(689),y=t(168),P=t(444),_=P.ZP.button(r||(r=(0,y.Z)(["\n  display: inline-flex;\n  margin-left: 50px;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: white;\n  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: lightskyblue;\n  }\n"]))),U=P.ZP.section(a||(a=(0,y.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n  /* padding-top: 30px; */\n  padding-bottom: 10px;\n"]))),S=P.ZP.div(i||(i=(0,y.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-bottom: 30px;\n"]))),z=P.ZP.img(o||(o=(0,y.Z)(["\n  width: 300px;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n  object-fit: cover;\n"]))),C=P.ZP.div(s||(s=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n"]))),I=P.ZP.h2(c||(c=(0,y.Z)(["\n  color: white;\n  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n  font-weight: 700;\n  font-size: 35px;\n"]))),L=P.ZP.h3(p||(p=(0,y.Z)(["\n  color: white;\n  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n  font-weight: 500;\n  font-size: 25px;\n"]))),R=P.ZP.p(u||(u=(0,y.Z)(["\n\n  color: lightskyblue;\n  font-weight: 500;\n  font-size: 20px;\n   text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n \n"]))),T=P.ZP.ul(x||(x=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n"]))),A=P.ZP.li(d||(d=(0,y.Z)(["\n  color: lightskyblue;\n  font-weight: 500;\n  font-size: 20px;\n   text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n \n"]))),G=P.ZP.div(l||(l=(0,y.Z)(["\n  display: flex;\n    gap: 30px;\n    align-items: baseline;\n"]))),M=P.ZP.h4(h||(h=(0,y.Z)(["\n  color: white;\n  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n  font-weight: 500;\n  font-size: 30px;\n"]))),O=P.ZP.ul(f||(f=(0,y.Z)(["\n    display: flex;\n    gap: 30px;\n    \n"]))),q=P.ZP.li(g||(g=(0,y.Z)(["\n    color: white;\n  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n  font-weight: 500;\n  font-size: 30px;\n     text-decoration: underline;\n\n  :focus,\n  &:hover {  \n   \n     text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n  }\n    \n"]))),B=t(184),D=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.vote_average,i=e.overview,o=e.genres;e.id;return(0,B.jsxs)(U,{children:[(0,B.jsxs)(S,{children:[(0,B.jsx)("div",{children:(0,B.jsx)(z,{src:t?"https://image.tmdb.org/t/p/original".concat(t):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r})}),(0,B.jsxs)(C,{children:[(0,B.jsx)(I,{children:r}),(0,B.jsxs)(R,{children:["User Score: ",Math.round(10*a),"%"]}),(0,B.jsx)(L,{children:"Overview"}),(0,B.jsx)(R,{children:i}),(0,B.jsx)(L,{children:"Genres"}),(0,B.jsx)(T,{children:null===o||void 0===o?void 0:o.map((function(n){var e=n.id,t=n.name;return(0,B.jsx)(A,{children:t},e)}))})]})]}),(0,B.jsxs)(G,{children:[(0,B.jsx)(M,{children:"Additional Information:"}),(0,B.jsxs)(O,{children:[(0,B.jsx)(q,{children:(0,B.jsx)(j.rU,{to:"cast",children:(0,B.jsx)("p",{children:"Cast"})})}),(0,B.jsx)(q,{children:(0,B.jsx)(j.rU,{to:"reviews",children:(0,B.jsx)("p",{children:"Reviews"})})})]})]}),(0,B.jsx)(b.Suspense,{fallback:(0,B.jsx)("div",{children:"Loading..."}),children:(0,B.jsx)(k.j3,{})})]})},E=t(618),F=function(){var n,e,t=(0,b.useState)([]),r=(0,w.Z)(t,2),a=r[0],i=r[1],o=(0,b.useState)(!1),s=(0,w.Z)(o,2),c=s[0],p=s[1],u=(0,b.useState)(null),x=(0,w.Z)(u,2),d=x[0],l=x[1],h=(0,k.UO)().movieId,f=(0,k.TH)(),g=(0,b.useRef)(null!==(n=null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,b.useEffect)((function(){var n=function(){var n=(0,v.Z)(m().mark((function n(){var e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.prev=1,n.next=4,(0,E.TP)(h);case 4:e=n.sent,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),l(d);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[d,h]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(j.rU,{to:g.current,children:(0,B.jsx)(_,{type:"button",children:" Go Back"})}),(0,B.jsxs)("section",{children:[c&&(0,B.jsx)("div",{children:"Loading..."}),(0,B.jsx)(D,{movie:a})]})]})}}}]);
//# sourceMappingURL=43.7c981d70.chunk.js.map