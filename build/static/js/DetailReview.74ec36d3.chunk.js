(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[3],{100:function(e,t,r){e.exports={review_wrapper:"Review_review_wrapper__3y8Mf",review_block:"Review_review_block__1yqre",review_title:"Review_review_title__CPpuL",review_img:"Review_review_img__3Pw_x",review_created:"Review_review_created__3sW9A",review_updated:"Review_review_updated__1PjhJ",review_link:"Review_review_link__2nOLE",review_error:"Review_review_error__3n_m1"}},103:function(e,t,r){"use strict";r.r(t);var a=r(60),n=r.n(a),c=r(61),i=r(63),s=r(1),u=r(0),o=r(3),p=r(18),d=r(100),v=r.n(d),l=r(62),f=r(65),_=r(17);t.default=function(){var e=Object(u.useState)(null),t=Object(i.a)(e,2),r=t[0],a=t[1],d=Object(u.useState)(!1),w=Object(i.a)(d,2),h=w[0],b=w[1],g=Object(o.g)().params.id;Object(u.useEffect)((function(){function e(){return(e=Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,Object(l.d)(g);case 4:t=e.sent,r=t.results,a(r[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p.b.error("\ud83d\ude80 Server error!",{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g]);var m=r&&r.author_details?r.author_details.avatar_path:null;return Object(s.jsxs)(s.Fragment,{children:[" ",r?Object(s.jsxs)("div",{className:v.a.review_wrapper,children:[Object(s.jsxs)("div",{className:v.a.review_block,children:[Object(s.jsxs)("h3",{className:v.a.review_title,children:["Was written by '",r.author?r.author:"unknown author","'..."]}),Object(s.jsx)("img",{className:v.a.review_img,alt:"Author_img is missed",width:"180px",height:"120px",src:m?m.length<40?"https://image.tmdb.org/t/p/w500".concat(m):m.slice(1):f.a}),Object(s.jsxs)("h4",{className:v.a.review_created,children:["Was created",r.created_at?r.created_at:"is missed..."]}),Object(s.jsxs)("h4",{className:v.a.review_updated,children:["Was updated",r.updated_at?r.updated_at:"is missed..."]}),Object(s.jsx)("a",{className:v.a.review_link,href:r.url?r.url:"#",target:"blank",children:"Link for well of resource"})]}),r.content?r.content:"Description is missed..."]}):Object(s.jsx)("h3",{className:v.a.review_error,children:"Review content is missed..."}),h&&Object(s.jsx)(_.a,{})]})}},62:function(e,t,r){"use strict";r.d(t,"f",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return v}));var a=r(60),n=r.n(a),c=r(61),i=r(64);i.defaults.baseURL="https://api.themoviedb.org/3";i.defaults.params={api_key:"78f2432cb0b978404715fbeff43c36be"};var s=function(){var e=Object(c.a)(n.a.mark((function e(){var t,r,a,c=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,e.next=3,i.get("/trending/all/day?page=".concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c,s=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,i.get("/search/movie?language=en-US&page=".concat(r,"&include_adult=false&query=").concat(t));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"?language=en-US"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/videos?language=en-US"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits?language=en-US"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c,s=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,i.get("/movie/".concat(t,"/reviews?language=en-US&page=").concat(r));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},65:function(e,t,r){"use strict";t.a=r.p+"static/media/360_F_17777112_qXha4dViITwacvljBhqexBJdA0w09W3p(1).4c8afd6f.png"}}]);
//# sourceMappingURL=DetailReview.74ec36d3.chunk.js.map