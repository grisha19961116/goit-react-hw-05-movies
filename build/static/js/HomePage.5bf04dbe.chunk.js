(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[4],{101:function(t,e,n){"use strict";n.r(e);var r=n(63),a=n(1),c=n(0),s=n(68);e.default=function(){var t=Object(c.useState)(null),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){var t=localStorage.getItem("query");i(t)}),[]),Object(a.jsx)(s.a,{flag:!0,query:n})}},62:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return f}));var r=n(60),a=n.n(r),c=n(61),s=n(64);s.defaults.baseURL="https://api.themoviedb.org/3";s.defaults.params={api_key:"78f2432cb0b978404715fbeff43c36be"};var i=function(){var t=Object(c.a)(a.a.mark((function t(){var e,n,r,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:1,t.next=3,s.get("/trending/all/day?page=".concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,t.next=3,s.get("/search/movie?language=en-US&page=".concat(n,"&include_adult=false&query=").concat(e));case 3:return r=t.sent,c=r.data,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"?language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/videos?language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/credits?language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,t.next=3,s.get("/movie/".concat(e,"/reviews?language=en-US&page=").concat(n));case 3:return r=t.sent,c=r.data,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},65:function(t,e,n){"use strict";e.a=n.p+"static/media/360_F_17777112_qXha4dViITwacvljBhqexBJdA0w09W3p(1).4c8afd6f.png"},66:function(t,e,n){t.exports={hits_list:"Hits_hits_list__FdrtX"}},67:function(t,e,n){t.exports={hits_item:"HitsList_hits_item__1_Lqj",hits_link:"HitsList_hits_link__2m4Sh",hits_img:"HitsList_hits_img__1ftXX",hits_title:"HitsList_hits_title__3L-VY"}},68:function(t,e,n){"use strict";var r=n(60),a=n.n(r),c=n(61),s=n(63),i=n(1),u=n(0),o=n(3),p=n(18),l=n(66),f=n.n(l),h=n(62),b=n(17),v=n(10),d=n(65),g=n(67),j=n.n(g),m=function(t){var e=t.data,n=Object(o.g)().path;return e.length>0?e.map((function(t,e){var r=t.original_title,a=t.backdrop_path,c=t.id;return Object(i.jsx)("li",{className:j.a.hits_item,children:Object(i.jsxs)(v.b,{className:j.a.hits_link,to:"/movies/".concat(c),onClick:function(){return localStorage.setItem("path",n)},children:[Object(i.jsx)("img",{className:j.a.hits_img,alt:r||"title",src:a?"https://image.tmdb.org/t/p/w500/".concat(a):d.a,width:"500px",height:"300px"}),Object(i.jsx)("p",{className:j.a.hits_title,children:r||"Unknown film..."})]})},e)})):null};e.a=function(t){var e=t.flag,n=t.query,r=Object(u.useState)([]),l=Object(s.a)(r,2),v=l[0],d=l[1],g=Object(u.useState)(!1),j=Object(s.a)(g,2),_=j[0],x=j[1];return Object(u.useEffect)((function(){var t=function(){return p.b.error("\ud83d\ude80 Server error!",{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},r=function(t){return p.b.warn("\u26a0\ufe0f".concat(t?"Not exist hits on '".concat(n,"'"):"Default hits is not available"," !"),{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};function s(){return(s=Object(c.a)(a.a.mark((function e(){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,Object(h.f)();case 4:if(n=e.sent,null!==(c=n.results)&&0!==c.length){e.next=8;break}return e.abrupt("return",r(!1));case 8:d(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t();case 14:return e.prev=14,x(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}function i(){return(i=Object(c.a)(a.a.mark((function e(){var c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,Object(h.e)(n);case 4:if(c=e.sent,null!==(s=c.results)&&0!==s.length){e.next=8;break}return e.abrupt("return",r(!0));case 8:d(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t(e.t0);case 14:return e.prev=14,x(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return e?function(){return s.apply(this,arguments)}():n&&!e?function(){return i.apply(this,arguments)}(n):void 0}),[n,e]),Object(i.jsxs)(o.a,{children:[Object(i.jsx)("ul",{className:f.a.hits_list,children:Object(i.jsx)(m,{data:v})}),_&&Object(i.jsx)(b.a,{})]})}}}]);
//# sourceMappingURL=HomePage.5bf04dbe.chunk.js.map