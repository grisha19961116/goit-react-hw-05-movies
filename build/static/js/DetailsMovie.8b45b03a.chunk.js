(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[2],{36:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return d}));var n=a(34),r=a.n(n),c=a(35),i=a(38);i.defaults.baseURL="https://api.themoviedb.org/3";i.defaults.params={api_key:"78f2432cb0b978404715fbeff43c36be"};var s=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,e.next=3,i.get("/trending/all/day?page=".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,i.get("/search/movie?language=en-US&page=".concat(a,"&include_adult=false&query=").concat(t));case 3:return n=e.sent,c=n.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"?language=en-US"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits?language=en-US"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,i.get("/movie/".concat(t,"/reviews?language=en-US&page=").concat(a));case 3:return n=e.sent,c=n.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},70:function(e,t,a){e.exports={detail_h2:"DetailsMovie_detail_h2__2Ex9A",detail_h4:"DetailsMovie_detail_h4__dxAh2",detail_h3:"DetailsMovie_detail_h3__n6iXb",detail__wrapper:"DetailsMovie_detail__wrapper__2fXDh",detail_h3_list:"DetailsMovie_detail_h3_list__1z9rl",div_links:"DetailsMovie_div_links__3rCnj",link:"DetailsMovie_link__CdUrf",warning:"DetailsMovie_warning__1J0NE",warning__h1:"DetailsMovie_warning__h1__lWpFu"}},75:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),c=a(35),i=a(37),s=a(1),o=a(70),l=a.n(o),u=a(36),d=a(0),h=a(2),p=a(9),_=a(13);t.default=function(){var e=Object(h.g)().params.id,t=Object(d.useState)([]),a=Object(i.a)(t,2),n=a[0],o=a[1],b=Object(d.useState)("/"),f=Object(i.a)(b,2),v=f[0],j=f[1];Object(d.useEffect)((function(){var e=localStorage.getItem("path");e&&j(e)}),[]),Object(d.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u.b)(e);case 3:if(null!==(a=t.sent)&&0!==a.length){t.next=6;break}return t.abrupt("return");case 6:o(a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var g=n.genres,m=n.backdrop_path,x=n.original_title,O=n.release_date,w=n.popularity,k=n.overview,y=n.imdb_id;return Object(s.jsxs)("div",{children:[g&&Object(s.jsx)(_.a,{text:"back to ".concat("/"===v?"Home Page":"Search Bar"),to:v}),g&&Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:l.a.detail__wrapper,children:[Object(s.jsx)("img",{alt:"s",src:"https://image.tmdb.org/t/p/w500/".concat(m),width:"500px",height:"300px"}),Object(s.jsxs)("h2",{className:l.a.detail_h2,children:[x," ",O.slice(0,4)]}),Object(s.jsxs)("h4",{className:l.a.detail_h4,children:["User score : ",w]}),Object(s.jsxs)("h3",{className:l.a.detail_h3,children:["Overview ",k]}),Object(s.jsx)("h3",{className:l.a.detail_h3_list,children:"Genres"}),Object(s.jsx)("ul",{children:g.map((function(e){var t=e.name;return Object(s.jsx)("li",{children:t},t)}))}),Object(s.jsxs)("div",{className:l.a.div_links,children:[Object(s.jsx)("h3",{className:l.a.detail_h3_list,children:"Additional information"}),Object(s.jsx)("span",{children:Object(s.jsx)(p.c,{onClick:function(){return localStorage.setItem("id",y)},className:l.a.link,activeStyle:{color:"blue"},to:"/movies/".concat(e,"/cast"),children:"Cast"})}),Object(s.jsx)("span",{children:Object(s.jsx)(p.c,{onClick:function(){return localStorage.setItem("id",y)},className:l.a.link,activeStyle:{color:"blue"},to:"/movies/".concat(e,"/review"),children:"Reviews"})})]})]})}),!g&&Object(s.jsx)("div",{className:l.a.warning,children:Object(s.jsxs)("h1",{className:l.a.warning__h1,children:["We do not have details information about this film",Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(_.a,{text:"back to ".concat("/"===v?"Home Page":"Search Bar"),to:v})})]})})]})}}}]);
//# sourceMappingURL=DetailsMovie.8b45b03a.chunk.js.map