(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[2],{101:function(e,t,a){"use strict";a.r(t);var r=a(60),n=a.n(r),i=a(61),s=a(63),c=a(1),l=a(0),u=a(3),o=a(96),_=a.n(o),d=a(62),p=a(14);t.default=function(){var e=Object(u.g)().params.id,t=Object(l.useState)([]),a=Object(s.a)(t,2),r=a[0],o=a[1],f=Object(l.useState)("/"),v=Object(s.a)(f,2),b=v[0],g=v[1];Object(l.useEffect)((function(){var e=localStorage.getItem("path");e&&g(e)}),[]),Object(l.useEffect)((function(){Object(i.a)(n.a.mark((function t(){var a,r,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d.b)(e);case 3:if(null!==(a=t.sent)&&0!==a.length){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Object(d.c)(e);case 8:if(null!==(r=t.sent)&&0!==r.length){t.next=11;break}return t.abrupt("return");case 11:i={key:r.results[0]?r.results[0].key:null,backdrop_path:a.backdrop_path&&"https://image.tmdb.org/t/p/w500/".concat(a.backdrop_path),release_date:a.release_date?a.release_date:null,genres:a.genres?a.genres:null,original_title:a.original_title?a.original_title:null,popularity:a.popularity?a.popularity:null,overview:a.overview?a.overview:null},o(i),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}),[e]);var h=function(){return Math.floor(16777215*Math.random()).toString(16)},m=r.key,j=r.backdrop_path,w=r.release_date,x=r.genres,O=r.original_title,y=r.popularity,k=r.overview;return r?Object(c.jsxs)("div",{className:_.a.detail__wrapper,children:[Object(c.jsx)("div",{className:_.a.detail_btn_wrapper,children:Object(c.jsx)(p.a,{text:"/"===b?"Home":"Movies",to:b})}),Object(c.jsxs)("div",{className:_.a.wrapper_description,children:[m?Object(c.jsx)("iframe",{className:_.a.detail_iframe_trailer,title:"trailer",width:"420",height:"345",src:"https://www.youtube.com/embed/".concat(m)}):Object(c.jsx)("img",{className:_.a.detail_img_trailer,alt:"trailer",src:j||"https://thumbs.dreamstime.com/z/illustration-red-unavailable-sign-white-background-174556653.jpg",width:"500px",height:"300px"}),Object(c.jsxs)("div",{className:_.a.detail_description,children:[Object(c.jsx)("h2",{className:_.a.detail_title,children:O||"Title is missing"}),Object(c.jsx)("h2",{className:_.a.detail_data,children:w||"Data is missing"}),Object(c.jsxs)("h2",{className:_.a.detail_popularity,children:["Votes : ",y?y+" \ud83d\udc96":"is missing"]}),Object(c.jsxs)("ul",{className:_.a.detail_genres_list,children:[Object(c.jsx)("li",{className:_.a.detail_genres_list_first_item,children:"Genres :"},"first"),x?x.map((function(e,t){var a=e.name;return Object(c.jsxs)("li",{style:{color:"#"+h()},children:[a,","]},t)})):Object(c.jsx)("li",{style:{color:"#"+h()},children:"not available!"},"warn")]}),Object(c.jsx)("h2",{className:_.a.detail_overview,children:k||"Overview is missing"})]})]}),Object(c.jsxs)("div",{className:_.a.detail_navigation_wrapper,children:[Object(c.jsx)(p.a,{text:"Cast",to:"/movies/".concat(e,"/cast"),isRedirect:!0}),Object(c.jsx)(p.a,{text:"Review",to:"/movies/".concat(e,"/review"),isRedirect:!0})]})]}):null}},62:function(e,t,a){"use strict";a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return _})),a.d(t,"d",(function(){return d}));var r=a(60),n=a.n(r),i=a(61),s=a(64);s.defaults.baseURL="https://api.themoviedb.org/3";s.defaults.params={api_key:"78f2432cb0b978404715fbeff43c36be"};var c=function(){var e=Object(i.a)(n.a.mark((function e(){var t,a,r,i=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,e.next=3,s.get("/trending/all/day?page=".concat(t));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r,i,c=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.get("/search/movie?language=en-US&page=".concat(a,"&include_adult=false&query=").concat(t));case 3:return r=e.sent,i=r.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"?language=en-US"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/videos?language=en-US"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits?language=en-US"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r,i,c=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.get("/movie/".concat(t,"/reviews?language=en-US&page=").concat(a));case 3:return r=e.sent,i=r.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},96:function(e,t,a){e.exports={detail__wrapper:"Detail_detail__wrapper__2LAy-",detail_btn_wrapper:"Detail_detail_btn_wrapper__vHQRb",detail_navigation_wrapper:"Detail_detail_navigation_wrapper__bZ3Nt",wrapper_description:"Detail_wrapper_description__c2nny",detail_iframe_trailer:"Detail_detail_iframe_trailer__12nuf",detail_img_trailer:"Detail_detail_img_trailer__jtSQf",detail_description:"Detail_detail_description__CXzhA",detail_title:"Detail_detail_title__1T2ek",detail_data:"Detail_detail_data__3ePlD",detail_popularity:"Detail_detail_popularity__KW7vT",detail_overview:"Detail_detail_overview__3N9OT",detail_genres_list:"Detail_detail_genres_list__34AWE",detail_genres_list_first_item:"Detail_detail_genres_list_first_item__3tadl",detail_genres_list_item:"Detail_detail_genres_list_item__1KLnF"}}}]);
//# sourceMappingURL=DetailPage.1b026623.chunk.js.map