(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{3028:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video/comment",function(){return n(1531)}])},9246:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,r=t.disabled||!c,d=a.useRef(),l=o(a.useState(!1),2),m=l[0],_=l[1],f=o(a.useState(e?e.current:null),2),C=f[0],h=f[1],v=a.useCallback((function(t){d.current&&(d.current(),d.current=void 0),r||m||t&&t.tagName&&(d.current=function(t,e,n){var r=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},r=s.find((function(t){return t.root===n.root&&t.margin===n.margin}));r?e=u.get(r):(e=u.get(n),s.push(n));if(e)return e;var o=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var e=o.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return u.set(n,e={id:n,observer:a,elements:o}),e}(n),o=r.id,a=r.observer,i=r.elements;return i.set(t,e),a.observe(t),function(){if(i.delete(t),a.unobserve(t),0===i.size){a.disconnect(),u.delete(o);var e=s.findIndex((function(t){return t.root===o.root&&t.margin===o.margin}));e>-1&&s.splice(e,1)}}}(t,(function(t){return t&&_(t)}),{root:C,rootMargin:n}))}),[r,C,n,m]),p=a.useCallback((function(){_(!1)}),[]);return a.useEffect((function(){if(!c&&!m){var t=i.requestIdleCallback((function(){return _(!0)}));return function(){return i.cancelIdleCallback(t)}}}),[m]),a.useEffect((function(){e&&h(e.current)}),[e]),[v,m,p]};var a=n(7294),i=n(4686),c="undefined"!==typeof IntersectionObserver;var u=new Map,s=[];("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},1531:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=n(685),a=n.n(o),i=n(137),c=n(5675),u=n.n(c);e.default=function(t){return t.data||(t.data={id:0,author:"Undefined",content:"",timestamp:0,avatar:"/user.png"}),(0,r.jsxs)("div",{className:a().CommentContainer,children:[(0,r.jsx)("div",{className:a().CommentAvatarContainer,children:(0,r.jsx)(u(),{src:t.data.avatar,width:48,height:48})}),(0,r.jsxs)("div",{className:a().CommentData,children:[(0,r.jsxs)("div",{className:a().CommentTop,children:[(0,r.jsx)("span",{className:a().CommentAuthor,children:t.data.author}),(0,r.jsx)("span",{className:a().CommentDate,children:(0,i._)(Date.now()-t.data.timestamp)})]}),(0,r.jsx)("div",{className:a().CommentBottom,children:t.data.content})]})]})}},137:function(t,e,n){"use strict";n.d(e,{V:function(){return o},_:function(){return a}});var r=["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze\u015bnia","pa\u017adziernika","listopada","grudnia"],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(t.getDate()," ").concat(r[t.getMonth()]," ").concat(t.getFullYear())},a=function(t){var e=Math.floor(t/1e3),n=Math.floor(e/60),r=Math.floor(n/60),o=Math.floor(r/24),a=Math.floor(o/30),i=Math.floor(o/365);return i>0?"".concat(i," ").concat(i>1&&i<5?"lata":1===i?"rok":"lat"," temu"):a>0?"".concat(a," ").concat(a>1&&a<5?"miesi\u0105ce":1===a?"miesi\u0105c":"miesi\u0119cy"," temu"):o>0?"".concat(o," ").concat(o>0?"dni":"dzie\u0144"," temu"):r>0?"".concat(r," ").concat(r>1&&r<5?"godziny":1===r?"godzina":"godzin"," temu"):n>0?"".concat(n," ").concat(n>1&&n<5?"minuty":1===n?"minuta":"minut"," temu"):"".concat(e," ").concat(e>1&&e<5?"sekundy":1===e?"sekunda":"sekund"," temu")}},685:function(t){t.exports={Container:"Video_Container__NLBGe",LeftContainer:"Video_LeftContainer__O0p7D",FrameContainer:"Video_FrameContainer__b6TWR",Frame:"Video_Frame__7VwpK",Title:"Video_Title__ccptz",ViewsAndLikesContainer:"Video_ViewsAndLikesContainer__yBeh_",ViewsContainer:"Video_ViewsContainer__g5IW1",LikesContainer:"Video_LikesContainer__VsMVa",Likes:"Video_Likes__8cmrm",Dislikes:"Video_Dislikes__gs3Ty",Views:"Video_Views__CXaUx",AuthorContainer:"Video_AuthorContainer__3zOUZ",AuthorAvatar:"Video_AuthorAvatar__zuW4_",Author:"Video_Author__edCfp",AuthorName:"Video_AuthorName__cU_AA",Subscriptions:"Video_Subscriptions__1lgXv",DescriptionContainer:"Video_DescriptionContainer__YNVEe",WriteCommentContainer:"Video_WriteCommentContainer__2pAGT",CommentAvatar:"Video_CommentAvatar__VZtb5",RightContainer:"Video_RightContainer___3v_V",CommentContainer:"Video_CommentContainer__J24Hc",CommentAvatarContainer:"Video_CommentAvatarContainer__IZ61T",CommentData:"Video_CommentData__1dsjB",CommentAuthor:"Video_CommentAuthor__Wt8bi",CommentDate:"Video_CommentDate__PHYNt"}}},function(t){t.O(0,[675,774,888,179],(function(){return e=3028,t(t.s=e);var e}));var e=t.O();_N_E=e}]);