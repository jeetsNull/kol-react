"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[144],{1144:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var i=e(2982),a=e(885),c=e(2791),s=e(8690),r=e(184),l=function(n){var t=n.dataLength,e=n.pageLimit,i=n.dataLimit,s=(0,c.useState)(Math.round(t/i)),l=(0,a.Z)(s,1)[0],d=(0,c.useState)(1),o=(0,a.Z)(d,2),h=o[0],u=o[1],x=function(n){var t=Number(n.target.textContent);u(t)};return(0,c.useEffect)((function(){window.scrollTo({behavior:"smooth",top:"0px"})}),[h]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"pagination",children:[(0,r.jsx)("button",{onClick:function(){u((function(n){return n-1}))},className:"prev ".concat(1===h?"disabled":""),children:"prev"}),function(){var n=Math.floor((h-1)/e)*e;return new Array(e).fill().map((function(t,e){return n+e+1}))}().map((function(n,t){return(0,r.jsx)("button",{onClick:x,className:"paginationItem ".concat(h===n?"active":null),children:(0,r.jsx)("span",{children:n})},t)})),(0,r.jsx)("button",{onClick:function(){u((function(n){return n+1}))},className:"next ".concat(h===l?"disabled":""),children:"next"})]})})},d=e(3504),o=e(6871),h=function(){var n=localStorage.getItem("token"),t=(0,c.useState)([]),e=(0,a.Z)(t,2),h=e[0],u=e[1];(0,o.s0)();(0,c.useEffect)((function(){(0,s.fE)((function(n){u((0,i.Z)(n))}),n)}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"row col-12",children:[(0,r.jsx)("div",{className:"col-6",children:(0,r.jsx)("h3",{className:"mt-4",children:"Kol Announcements"})}),(0,r.jsx)("div",{className:"col-6",children:(0,r.jsx)(d.rU,{to:"/dashboard/announcement/",children:"Add Announcement"})})]}),(0,r.jsxs)("div",{className:"dashboard-main-listing",children:[(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Title"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Start Date"}),(0,r.jsx)("th",{children:"End Date"}),(0,r.jsx)("th",{children:"Social Platform"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Image"}),(0,r.jsx)("th",{children:"Action"})]}),h&&h.map((function(n,t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:n.title}),(0,r.jsx)("td",{children:n.description}),(0,r.jsx)("td",{children:n.start_date}),(0,r.jsx)("td",{children:n.end_date}),(0,r.jsx)("td",{children:n.social_platform}),(0,r.jsx)("td",{children:n.status}),(0,r.jsx)("td",{children:n.image}),(0,r.jsxs)("td",{children:[(0,r.jsx)(d.rU,{to:"/dashboard/announcement/".concat(n.id),children:"Edit"}),(0,r.jsx)(d.rU,{to:"/dashboard/announcement/view/".concat(n.id),children:"View"}),(0,r.jsx)("button",{onClick:void n.id,children:(0,r.jsx)("i",{className:"fa-regular fa-trash",children:"Delete"})})]})]},t)}))]}),h.length>0?(0,r.jsx)(l,{dataLength:h.length,pageLimit:5,dataLimit:5}):(0,r.jsx)("h1",{children:"No Posts to display"})]})]})}}}]);
//# sourceMappingURL=144.8ee93e34.chunk.js.map