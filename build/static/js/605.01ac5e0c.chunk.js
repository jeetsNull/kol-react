(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[605],{40605:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(42982),r=a(70885),i=a(72791),s=a(8690),o=a(43504),l=a(31389),c=a(59434),u=a(96048),p=a.n(u),d=a(83383),g=a(80184),f=function(e){var t=e.currentItems,a=e.handleDelete;return(0,g.jsxs)("table",{className:"table table-bordered",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Title"}),(0,g.jsx)("th",{children:"Description"}),(0,g.jsx)("th",{children:"Start Date"}),(0,g.jsx)("th",{children:"End Date"}),(0,g.jsx)("th",{children:"Social Platform"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{width:"180",children:"Banner Thumb"}),(0,g.jsx)("th",{width:"230",children:"Action"})]})}),(0,g.jsx)("tbody",{children:t&&t.map((function(e,t){return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:e.title}),(0,g.jsx)("td",{children:e.description}),(0,g.jsx)("td",{children:e.start_date}),(0,g.jsx)("td",{children:e.end_date}),(0,g.jsx)("td",{children:e.social_platform}),(0,g.jsx)("td",{children:e.status}),(0,g.jsx)("td",{children:null==e.image?"No Image":(0,g.jsx)("img",{className:"announcment-thumb",src:"".concat(d.s).concat(e.image),alt:"Banner Thumb"})}),(0,g.jsxs)("td",{children:[(0,g.jsx)(o.rU,{className:"btn btn-sm btn-success me-2",to:"/dashboard/announcement/view/".concat(e.id),children:"View"}),(0,g.jsx)(o.rU,{className:"btn btn-sm btn-primary me-2",to:"/dashboard/announcement/".concat(e.id),children:"Edit"}),(0,g.jsxs)("button",{className:"btn btn-sm btn-danger",onClick:function(){return a(e.id)},children:[" ",(0,g.jsx)("i",{className:"fa fa-trash"})," Delete "]})]})]},t)}))})]})},h=function(e){var t=e.itemsPerPage,a=(0,c.I0)(),o=localStorage.getItem("token"),u=(0,i.useState)([]),d=(0,r.Z)(u,2),h=d[0],m=d[1];(0,i.useEffect)((function(){(0,s.fE)((function(e){m((0,n.Z)(e))}),o)}),[]),(0,i.useEffect)((function(){(0,s.fE)((function(e){m((0,n.Z)(e))}),o)}),[]);var v=(0,i.useState)(null),b=(0,r.Z)(v,2),C=b[0],y=b[1],x=(0,i.useState)(0),P=(0,r.Z)(x,2),k=P[0],N=P[1],L=(0,i.useState)(0),j=(0,r.Z)(L,2),E=j[0],O=j[1];(0,i.useEffect)((function(){var e=E+t;y(h.slice(E,e)),N(Math.ceil(h.length/t))}),[E,t,h]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{currentItems:C,handleDelete:function(e){a((0,l.gL)(e)).then((function(e){if(200===e.payload.statusCode){(0,s.fE)((function(e){y((0,n.Z)(e))}),o)}}))}}),(0,g.jsx)(p(),{nextLabel:"Next >",onPageChange:function(e){var a=e.selected*t%h.length;O(a)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:k,previousLabel:"< Previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})]})},m=function(){var e=localStorage.getItem("token"),t=(0,i.useState)([]),a=(0,r.Z)(t,2),l=a[0],c=a[1];return(0,i.useEffect)((function(){(0,s.fE)((function(e){c((0,n.Z)(e))}),e)}),[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"card",children:[(0,g.jsx)("div",{className:"card-header",children:(0,g.jsxs)("div",{className:"card-title h5 justify-content-between m-0 d-flex align-items-center",children:[(0,g.jsx)("span",{children:"Kol Announcements List"}),(0,g.jsx)(o.rU,{className:"btn theme-btn btn-sm",to:"../announcement/",children:"Add Announcement"})]})}),(0,g.jsx)("div",{className:"card-body px-4",children:(0,g.jsx)("div",{className:"",children:(null===l||void 0===l?void 0:l.length)>0?(0,g.jsx)(h,{itemsPerPage:5}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h4",{children:"No Records Found"})," "]})})})]})})}},96048:function(e,t,a){var n;e.exports=(n=a(72791),function(){var e={703:function(e,t,a){"use strict";var n=a(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=n}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";a.r(r),a.d(r,{default:function(){return P}});var e=a(98),t=a.n(e),n=a(697),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}var o=function(e){var a=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,h=e.ariaLabel||"Page "+r+(d?" "+d:""),m=null;return i&&(m="page",h=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+o:o,void 0!==n?void 0!==l&&(n=n+" "+l):n=l),t().createElement("li",{className:a},t().createElement("a",s({rel:f,role:p?void 0:"button",className:n,href:p,tabIndex:i?"-1":"0","aria-label":h,"aria-current":m,onKeyPress:u},c(u)),g(r)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var u=function(e){var a=e.breakLabel,n=e.breakClassName,r=e.breakLinkClassName,i=e.breakHandler,s=e.getEventListener,o=n||"break";return t().createElement("li",{className:o},t().createElement("a",c({className:r,role:"button",tabIndex:"0",onKeyPress:i},s(i)),a))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var p=u;function d(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(o,e);var a,n,r,i,s=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(i){var a=C(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return v(this,e)});function o(e){var a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),y(b(a=s.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),y(b(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;a.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})})),y(b(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),y(b(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),y(b(a),"getEventListener",(function(e){return y({},a.props.eventListener,e)})),y(b(a),"handleClick",(function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,s=void 0!==i&&i,o=r.isNext,l=void 0!==o&&o,c=r.isBreak,u=void 0!==c&&c,p=r.isActive,d=void 0!==p&&p;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=a.state.selected,f=a.props.onClick,h=n;if(f){var m=f({index:t,selected:g,nextSelectedPage:n,event:e,isPrevious:s,isNext:l,isBreak:u,isActive:d});if(!1===m)return;Number.isInteger(m)&&(h=m)}void 0!==h&&a.handlePageChange(h)})),y(b(a),"handleBreakClick",(function(e,t){var n=a.state.selected;a.handleClick(t,e,n<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),y(b(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),y(b(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),y(b(a),"getElementPageRel",(function(e){var t=a.state.selected,n=a.props,r=n.nextPageRel,i=n.prevPageRel,s=n.selectedPageRel;return t-1===e?i:t===e?s:t+1===e?r:void 0})),y(b(a),"pagination",(function(){var e=[],n=a.props,r=n.pageRangeDisplayed,i=n.pageCount,s=n.marginPagesDisplayed,o=n.breakLabel,l=n.breakClassName,c=n.breakLinkClassName,u=a.state.selected;if(i<=r)for(var d=0;d<i;d++)e.push(a.getPageElement(d));else{var g=r/2,f=r-g;u>i-r/2?g=r-(f=i-u):u<r/2&&(f=r-(g=u));var h,m,v=function(e){return a.getPageElement(e)},b=[];for(h=0;h<i;h++){var C=h+1;C<=s||C>i-s||h>=u-g&&h<=u+(0===u&&r>1?f-1:f)?b.push({type:"page",index:h,display:v(h)}):o&&b.length>0&&b[b.length-1].display!==m&&(r>0||s>0)&&(m=t().createElement(p,{key:h,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,h),getEventListener:a.getEventListener}),b.push({type:"break",index:h,display:m}))}b.forEach((function(t,a){var n=t;"break"===t.type&&b[a-1]&&"page"===b[a-1].type&&b[a+1]&&"page"===b[a+1].type&&b[a+1].index-b[a-1].index<=2&&(n={type:"page",index:t.index,display:v(t.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:n},a}return a=o,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==t&&t>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount,r=t.hrefAllControls;if(a)return r||e>=0&&e<n?a(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,s=n.activeClassName,o=n.activeLinkClassName,c=n.extraAriaContext,u=n.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,n=a.disabledClassName,r=a.disabledLinkClassName,i=a.pageCount,s=a.className,o=a.containerClassName,l=a.previousLabel,c=a.previousClassName,u=a.previousLinkClassName,p=a.previousAriaLabel,g=a.prevRel,h=a.nextLabel,m=a.nextClassName,v=a.nextLinkClassName,b=a.nextAriaLabel,C=a.nextRel,y=this.state.selected,x=0===y,P=y===i-1,k="".concat(d(c)).concat(x?" ".concat(d(n)):""),N="".concat(d(m)).concat(P?" ".concat(d(n)):""),L="".concat(d(u)).concat(x?" ".concat(d(r)):""),j="".concat(d(v)).concat(P?" ".concat(d(r)):""),E=x?"true":"false",O=P?"true":"false";return t().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:k},t().createElement("a",f({className:L,href:this.getElementHref(y-1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":E,"aria-label":p,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:N},t().createElement("a",f({className:j,href:this.getElementHref(y+1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":b,rel:C},this.getEventListener(this.handleNextPage)),h)))}}])&&h(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),o}(e.Component);y(x,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),y(x,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var P=x}(),r}())}}]);
//# sourceMappingURL=605.01ac5e0c.chunk.js.map