"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[925],{96178:function(e,a,s){s.d(a,{I8:function(){return o},qV:function(){return i}});var n=s(72426),l=s(70365),t=(0,n.ZF)({apiKey:"AIzaSyAATHyxmQgxxSsoDQmW-D1lccpbJAxXEHg",authDomain:"kol-project-b8e21.firebaseapp.com",projectId:"kol-project-b8e21",storageBucket:"kol-project-b8e21.appspot.com",messagingSenderId:"1083015288012",appId:"1:1083015288012:web:3bb80b054f5c102e49de69",measurementId:"G-98HT13QRRN"}),o=(0,l.v0)(t),i=new l.hJ},38925:function(e,a,s){s.r(a),s.d(a,{default:function(){return v}});var n=s(4942),l=s(1413),t=s(70885),o=s(72791),i=s(70808),r=s(70365),c=s(96178),d=s(16871),m=s(43504),u=s(26313),p=s(59434),h=s(9085),f=s(39951),x=(s(5462),s(80184)),v=function(){var e=(0,p.I0)(),a=(0,d.s0)(),s=(0,o.useState)(!0),v=(0,t.Z)(s,2),g=v[0],j=v[1],b=(0,o.useState)(!1),w=(0,t.Z)(b,2),N=(w[0],w[1]),y=(0,o.useState)(""),k=(0,t.Z)(y,2),Z=k[0],S=k[1],C=(0,o.useState)(!1),I=(0,t.Z)(C,2),A=(I[0],I[1],(0,o.useState)(!1)),E=(0,t.Z)(A,2),T=E[0],P=E[1],D=(0,o.useState)({email:"",password:""}),J=(0,t.Z)(D,2),L=J[0],F=J[1],U=(0,o.useState)({name:"",email:"",token:""}),_=(0,t.Z)(U,2),H=_[0],K=_[1];(0,o.useEffect)((function(){return function(){e((0,u.Jo)())}}),[]);var Q=(0,o.useState)("password"),V=(0,t.Z)(Q,2),q=V[0],z=V[1],G=(0,o.useState)({name:"",email:""}),M=(0,t.Z)(G,2),O=M[0],R=M[1];var W=function(e){F((function(a){return(0,l.Z)((0,l.Z)({},a),{},(0,n.Z)({},e.target.name,e.target.value))})),B(e)},B=function(e){var a=e.target,s=a.name,t=a.value;R((function(e){var a=(0,l.Z)((0,l.Z)({},e),{},(0,n.Z)({},s,""));switch(s){case"email":t?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||(a[s]="Please enter correct email"):a[s]="Please enter email";break;case"password":t||(a[s]="Please enter password")}return a}))};return(0,o.useEffect)((function(){if(H.token)return e((0,u.Cb)(H)).then((function(e){console.log(e),201===e.payload.statusCode&&(e.payload.data.token?a("/home"):(a("/role"),h.Am.success(e.payload.message)))})),function(){e((0,u.Jo)())}}),[H.token]),(0,x.jsx)("div",{className:"main-div",children:(0,x.jsx)("section",{className:"container d-flex flex-wrap justify-content-center align-items-center",children:(0,x.jsx)("div",{className:" login-container",children:(0,x.jsx)("div",{className:"card login-card",children:(0,x.jsx)("div",{className:"card-body login-card-body",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-6 col-sm-12 login-div",children:(0,x.jsxs)("div",{className:"d-flex  flex-wrap align-items-center",children:[(0,x.jsx)("div",{className:"rounded-circle roundIcon my-3",children:"\xa0"}),(0,x.jsx)("h2",{className:"text-white form-heading",children:"Target More & Influence More Users With KOL"}),(0,x.jsx)("div",{className:"bordered-text col-lg-8 col-md-12",children:(0,x.jsx)("p",{className:"text-white mb-0",children:"To get the maximum attention on your product and services, invest in KOL."})})]})}),(0,x.jsx)("div",{className:"col-lg-6  col-sm-12 login-form",children:(0,x.jsxs)("div",{className:"row align-items-center ",children:[(0,x.jsxs)("form",{onSubmit:function(s){var n,l;if(s.preventDefault(),P(!0),!((null===O||void 0===O||null===(n=O.email)||void 0===n?void 0:n.length)>0||(null===O||void 0===O||null===(l=O.password)||void 0===l?void 0:l.length)>0))return""==L.email||""==L.password?(S("Please fill the mandatory filed"),void P(!1)):(e((0,u.vx)(L)).then((function(e){var s,n,l,t;if(console.log(e),null!==e&&void 0!==e&&null!==(s=e.payload)&&void 0!==s&&null!==(n=s.data)&&void 0!==n&&n.token)a("/home"),h.Am.success(null===e||void 0===e||null===(t=e.payload)||void 0===t?void 0:t.message),P(!1);else if(401===e.payload.statusCode){var o;a("/emailVerify"),h.Am.success(null===e||void 0===e||null===(o=e.payload)||void 0===o?void 0:o.message),P(!1)}else if(404===(null===e||void 0===e||null===(l=e.payload)||void 0===l?void 0:l.statusCode)){var i;h.Am.error(null===e||void 0===e||null===(i=e.payload)||void 0===i?void 0:i.message),P(!1),F({email:"",password:""})}else{var r;h.Am.error(null===e||void 0===e||null===(r=e.payload)||void 0===r?void 0:r.message),P(!1)}})),s.target.reset(),function(){e((0,u.Jo)())});P(!1)},children:[(0,x.jsx)("h2",{className:"login-heading mb-3",children:"Login"}),(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{children:"Email"}),(0,x.jsx)("span",{className:"astric-span",children:"*"}),(0,x.jsx)("input",{type:"text",id:"form2Example17",className:"form-control ".concat(""===Z||L.email?"":"border-danger"),placeholder:"Enter email",name:"email",onChange:W,autoComplete:"off"}),(0,x.jsx)("span",{className:"err text-danger",children:O.email||Z&&""==L.email&&(0,x.jsx)(x.Fragment,{children:Z||O.email})})]}),(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{children:"Password"}),(0,x.jsx)("span",{className:"astric-span",children:"*"}),(0,x.jsxs)("div",{className:"position-relative",children:[(0,x.jsx)("input",{type:q,id:"form2Example27",className:"form-control ".concat(""===Z||L.password?"":"border-danger"),placeholder:"Enter password",name:"password",onChange:W,autoComplete:"off"}),(0,x.jsx)("i",{onClick:function(){"password"==q?(z("text"),j(!1),N(!0)):(z("password"),j(!0),N(!1))},className:"eye-icon fa ".concat(g?"fa-eye-slash":"fa-eye")}),(0,x.jsx)("span",{className:"err text-danger",children:O.password||Z&&""==L.password&&(0,x.jsx)(x.Fragment,{children:Z||O.password})})]})]}),(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,x.jsx)("button",{type:"submit",className:"btn theme-btn btn-lg btn-block spiner-btn",children:T?(0,x.jsx)(f.Z,{type:"spinner-cub",title:"Login",size:20}):"Login"}),(0,x.jsx)("span",{className:"optionText1 text-right",children:(0,x.jsx)(m.rU,{to:"/emailCheck",children:"Forgot password ?"})})]})]}),(0,x.jsxs)("div",{className:"col-12 justify-content-center align-items-center position-relative my-4",children:[(0,x.jsx)("hr",{className:"col-12"})," ",(0,x.jsx)("span",{className:"orText",children:"or "})]}),(0,x.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center mb-3",children:(0,x.jsx)(i.ZP,{label:"Sign in with Google",style:{background:"#342951"},onClick:function(){(0,r.rh)(c.I8,c.qV).then((function(e){K((function(a){return(0,l.Z)((0,l.Z)({},a),{},{name:e.user.displayName,email:e.user.email,token:e.user.accessToken})}))})).catch((function(e){}))}})}),(0,x.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center mt-3",children:(0,x.jsxs)("span",{className:"optionText text-center",children:["Don't have an account? ",(0,x.jsx)(m.rU,{to:"/role",children:"Sign Up"})]})})]})})]})})})})})})}}}]);
//# sourceMappingURL=925.de1fa7f8.chunk.js.map