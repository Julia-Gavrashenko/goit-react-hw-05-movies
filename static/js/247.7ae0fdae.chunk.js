"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(618),s=n(791),o=n(689),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,s.useState)(!1),l=(0,a.Z)(f,2),h=l[0],d=l[1],v=(0,s.useState)(null),m=(0,a.Z)(v,2),g=m[0],x=m[1],k=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,(0,i.M1)(k);case 4:t=e.sent,console.log(t),c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),x(g);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[g,k]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("section",{children:[h&&(0,p.jsx)("div",{children:"Loading..."}),0!==n.length?(0,p.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.name,r=e.profile_path,a=e.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:r?"https://image.tmdb.org/t/p/original".concat(r):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:n,width:200}),(0,p.jsx)("p",{children:n}),(0,p.jsxs)("p",{children:["Character: ",(0,p.jsx)("span",{children:a})]})]},t)}))}):(0,p.jsx)("p",{children:"We don't have any information about the cast of this movie"})]})})}},618:function(e,t,n){n.d(t,{Df:function(){return s},Jh:function(){return l},M1:function(){return f},TP:function(){return p},zi:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="eb6a45a4ae6328e079a1ce9a0d7e00e8";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"'&page=").concat(n,"&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.7ae0fdae.chunk.js.map