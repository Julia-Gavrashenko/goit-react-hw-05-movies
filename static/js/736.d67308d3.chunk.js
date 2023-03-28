"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,i,c,u,o,s=e(861),p=e(439),f=e(757),d=e.n(f),l=e(618),h=e(791),x=e(689),g=e(168),m=e(444),v=m.ZP.ul(r||(r=(0,g.Z)(["\n display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));\n  grid-gap: 40px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),w=(m.ZP.li(a||(a=(0,g.Z)(["\n    \n"]))),m.ZP.img(i||(i=(0,g.Z)(["\n  width: 100%;\n  height: 400px;\n  margin-bottom: 10px;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n   border-radius: 4px;\n  object-fit: cover;\n"])))),Z=m.ZP.p(c||(c=(0,g.Z)(["\n  color: white;\n  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n  font-weight: 500;\n  font-size: 25px;\n  padding: 0px;\n"]))),b=m.ZP.p(u||(u=(0,g.Z)(["\n color: lightskyblue;\n  font-weight: 500;\n  font-size: 20px;\n  text-shadow: 3px 4px 7px rgba(7, 34, 38, 0.8);\n \n  padding: 10px;\n"]))),k=m.ZP.p(o||(o=(0,g.Z)(["\ncolor: white;\n  font-weight: 500;\n  font-size: 20px;\n"]))),y=e(184),_=function(){var n=(0,h.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,h.useState)(!1),i=(0,p.Z)(a,2),c=i[0],u=i[1],o=(0,h.useState)(null),f=(0,p.Z)(o,2),g=f[0],m=f[1],_=(0,x.UO)().movieId;return(0,h.useEffect)((function(){var n=function(){var n=(0,s.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.prev=1,n.next=4,(0,l.M1)(_);case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),m(g);case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[g,_]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("section",{children:[c&&(0,y.jsx)("div",{children:"Loading..."}),0!==e.length?(0,y.jsx)(v,{children:e.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,y.jsxs)("li",{children:[(0,y.jsx)(w,{src:r?"https://image.tmdb.org/t/p/original".concat(r):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:e}),(0,y.jsx)(Z,{children:e}),(0,y.jsxs)(b,{children:["Character: ",(0,y.jsx)("span",{children:a})]})]},t)}))}):(0,y.jsx)(k,{children:"We don't have any information about the cast of this movie"})]})})}},618:function(n,t,e){e.d(t,{Df:function(){return o},Jh:function(){return d},M1:function(){return f},TP:function(){return p},zi:function(){return s}});var r=e(861),a=e(757),i=e.n(a),c=e(243),u="eb6a45a4ae6328e079a1ce9a0d7e00e8";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(u,"&query=").concat(t,"'&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.d67308d3.chunk.js.map