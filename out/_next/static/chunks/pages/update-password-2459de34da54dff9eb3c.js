(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5650],{24015:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var r=n(96156),a=n(85893),i=n(67294),o=n(11163),s=n(49226);var u=n(44791);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=function(e,t){return function(n){var l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,s.v9)((function(e){return e.authReducer.userInfo}));return(0,i.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&o.default.push("/verify-email"),"onboarding"===n.period&&o.default.push("/onboard"),void("final"===n.period&&o.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&o.default.push("/onboard"),void("final"===n.period&&o.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&o.default.push("/verify-email"),void("final"===n.period&&o.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&o.default.push("/verify-email"),void("onboarding"===n.period&&o.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&o.default.push("/verify-email"),"onboarding"===n.period&&o.default.push("/onboard"),"final"===n.period&&o.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==t&&"final-admin"!==t&&o.default.push("/admin/dashboard");else"auth"!==t&&o.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!l)return(0,a.jsx)(u.Z,{});if("auth"===t&&l.isLoggedIn)return(0,a.jsx)(u.Z,{});if("auth"!==t&&!l.isLoggedIn)return(0,a.jsx)(u.Z,{});if("member"===l.role){if(["final-all","final-member"].includes(t)&&"final"!==l.period)return(0,a.jsx)(u.Z,{});if(["verifying"].includes(t)&&"verifying"!==l.period)return(0,a.jsx)(u.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==l.period)return(0,a.jsx)(u.Z,{})}if(["admin","sub-admin"].includes(l.role)&&["verifying","onboarding","final-member"].includes(t))return(0,a.jsx)(u.Z,{})}return(0,a.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},66570:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r,a=n(85893),i=n(87757),o=n.n(i),s=n(92137),u=n(25675),c=n(49226),l=n(67294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){return l.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 23"},e),r||(r=l.createElement("g",{"data-name":"Group 1031",fill:"none",stroke:"currentColor",strokeWidth:3},l.createElement("path",{"data-name":"Line 1",d:"M35 21.5H0"}),l.createElement("path",{"data-name":"Line 2",d:"M35 11.5H9.082"}),l.createElement("path",{"data-name":"Line 3",d:"M35 1.5H0"}))))},p=n(43022),m=function(e){var t=e.className,n=e.theme,r=(0,c.I0)();return(0,a.jsxs)("div",{className:"flex items-center justify-between ".concat(t||""),children:[(0,a.jsx)(u.default,{className:"animate__animated animate__fadeIn",src:"/images/casper_logo_".concat(n,".svg"),alt:"casper logo",width:125,height:33}),(0,a.jsx)("button",{className:"animate__animated animate__fadeIn animate__delay-2s",type:"button",onClick:function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r((0,p.Rg)());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,a.jsx)(f,{width:"2rem",height:"1.25rem",className:"".concat("light"===n?"text-white":"text-dark2")})})]})}},44791:function(e,t,n){"use strict";var r=n(85893),a=n(733),i=n.n(a);t.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(i(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},24205:function(e,t,n){"use strict";n.d(t,{Ge:function(){return r},QI:function(){return a},zC:function(){return i},qn:function(){return o},tH:function(){return s},VX:function(){return u},FZ:function(){return c},ec:function(){return l},mS:function(){return d}});var r=/^[\.a-zA-Z\s ]*$/,a=/^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z\u200c\u200b]{2,})$/,i=/(^[0-9])/,o=/^-?[1-9]/,s=/^[A-Za-z0-9-]*$/,u=/^[A-Za-z0-9-]*$/,c=/(^)@[A-Za-z0-9-\_]*$/,l=/^[A-Za-z0-9-\s\.\_ ]*$/,d=new RegExp("".concat(/(?=.*?[a-zA-Z])/.source).concat(/(?=.*?[0-9])/.source).concat(/(?=.*?[\!\"\-\@\#\$\%\&\*\(\)\'\^\`\.\,\/\:\;\_\+\=\<\>\?\{\}\[\\\]])/.source))},87647:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(96156),i=n(41664),o=n(7318),s=n.n(o),u=n(42283),c=n(11163),l=n(67294),d=n(49226),f=n(7667),p=n(66570),m=n(24205),g=n(89),h=n(43022),y=n(24015);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=(0,y.a)((function(){var e,t,n,a,o=(0,u.cI)(),y=o.clearErrors,_=o.formState,b=o.register,v=o.handleSubmit,w=o.getValues,j=o.setError,E=(0,d.I0)(),O=(0,c.useRouter)(),N=s()(),S=(0,l.useState)(!1),I=S[0],P=S[1],A=(0,l.useState)(!1),R=A[0],k=A[1];return(0,r.jsx)("div",{className:"flex justify-center h-screen",style:{backgroundImage:"url('/images/bg_welcome".concat(N.isMobile()?"_mobile":"",".png')"),backgroundSize:"cover"},children:(0,r.jsxs)("div",{className:" flex flex-col w-full p-4 lg:max-w-380 lg:p-9 xl:max-w-screen-xl xl:p-9 2xl:max-w-screen-2xl",children:[(0,r.jsx)(p.Z,{theme:"light"}),(0,r.jsx)("form",{className:"flex-grow flex items-center justify-center",onSubmit:v((function(e){var t=e;k(!0),t.email=O.query.email,t.code=O.query.code,E((0,h.gQ)(x({},t),(function(){P(!0)}),(function(){k(!1)})))})),children:I?(0,r.jsxs)("div",{className:"bg-white w-full lg:w-2/3 text-center px-4 py-12 lg:p-44",style:{backgroundImage:"url('/images/login_overlay.png')",backgroundSize:"cover"},children:[(0,r.jsx)("p",{className:"text-4xl text-center animate__animated animate__fadeInUp",children:"Your Password has been updated"}),(0,r.jsx)("div",{className:"lg:flex lg:space-x-5 lg:mt-12 mt-8 lg:justify-center animate__animated animate__fadeInUp animate__delay-2s",children:(0,r.jsx)("button",{type:"button",onClick:function(){return O.push("/login")},className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",children:"Go to Login"})})]}):(0,r.jsxs)("div",{className:"bg-white w-full lg:w-2/3 text-center px-4 py-12 lg:p-44",style:{backgroundImage:"url('/images/login_overlay.png')",backgroundSize:"cover"},children:[(0,r.jsx)("p",{className:"text-4xl text-center animate__animated animate__fadeInUp",children:"Update Your Password"}),(0,r.jsx)("p",{className:"text-xs text-center mt-2 animate__animated animate__fadeInUp animate__delay-2s",children:"Please create a new password and click Submit"}),(0,r.jsxs)("div",{className:"w-full flex flex-col animate__animated animate__fadeInLeft animate__delay-4s",children:[(0,r.jsx)("input",x({type:"password",className:"text-center w-full h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Enter New Password",name:"password"},b("password",{required:"Password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Password is invalid",value:m.mS},validate:function(e){return e===w().confirmPassword||"Password not match"}}))),(null===(e=_.errors)||void 0===e?void 0:e.password)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(t=_.errors.password)||void 0===t?void 0:t.message})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col animate__animated animate__fadeInLeft animate__delay-4s",children:[(0,r.jsx)("input",x({type:"password",className:"text-center w-full h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Verify New Password",name:"confirmPassword"},b("confirmPassword",{required:"Confirm password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Confirm password is invalid",value:m.mS},validate:function(e){return e===w().password?y("password"):j("password",{message:"Password not match"})}}))),(null===(n=_.errors)||void 0===n?void 0:n.confirmPassword)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(a=_.errors.confirmPassword)||void 0===a?void 0:a.message})]}),(0,r.jsx)("div",{className:"lg:flex lg:space-x-5 lg:mt-4 mt-14 lg:justify-center animate__animated animate__fadeInUp animate__delay-2s",children:(0,r.jsx)(g.fl,{type:"submit",isDisabled:R,isLoading:R,title:"Submit",className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"})}),(0,r.jsx)(i.default,{href:"/home",children:(0,r.jsxs)("p",{className:"cursor-pointer text-xs text-center mt-5 flex justify-center animate__animated animate__fadeInUp animate__delay-4s",children:[(0,r.jsx)("img",{src:"/images/ic_decline.svg",className:"mr-2",alt:"Go home page"}),(0,r.jsx)("a",{className:"text-primary underline font-medium",children:"Cancel and go back"})]})})]})}),(0,r.jsx)(f.Z,{theme:"light"})]})})}),"auth")},43022:function(e,t,n){"use strict";n.d(t,{q0:function(){return r},Rg:function(){return a},uB:function(){return i},xv:function(){return o},c0:function(){return s},s:function(){return u},gQ:function(){return c},lm:function(){return l},hh:function(){return d},CS:function(){return f},$Y:function(){return p},B0:function(){return m},av:function(){return g},Nq:function(){return h},pn:function(){return y},NL:function(){return _},V$:function(){return x},x8:function(){return b},Nc:function(){return v},zg:function(){return w},qA:function(){return j},j_:function(){return E}});var r=function(e,t,n){return{type:"LOGIN_APP",callback:t,payload:e,resetSubmitting:n}},a=function(){return{type:"LOGOUT_APP"}},i=function(e,t,n){return{type:"REGISTER_ENTITY",callback:t,payload:e,resetSubmitting:n}},o=function(e,t,n){return{type:"REGISTER_INDIVIDUAL",callback:t,payload:e,resetSubmitting:n}},s=function(e,t,n){return{type:"RESET_PASSWORD",callback:t,payload:e,resetSubmitting:n}},u=function(e,t,n){return{type:"UPDATE_EMAIL",callback:t,payload:e,resetSubmitting:n}},c=function(e,t,n){return{type:"UPDATE_PASSWORD",callback:t,payload:e,resetSubmitting:n}},l=function(e,t,n){return{type:"VERIFY_EMAIL",callback:t,payload:e,resetSubmitting:n}},d=function(e,t){return{type:"RESEND_VERIFICATION_CODE",resolve:e,reject:t}},f=function(e){return{type:"FETCH_USER_INFO",resolve:e}},p=function(e){return{type:"FETCH_USER_INFO_SUCCESS",payload:e}},m=function(e){return{type:"FETCH_USER_INFO_ERROR",payload:e}},g=function(e){return{type:"SET_USER_INFO",payload:e}},h=function(e){return{type:"UPDATE_USER_INFO",payload:e}},y=function(){return{type:"CLEAR_USER_INFO"}},_=function(){return{type:"CLEAR_METRICS"}},x=function(e,t,n){return{type:"CHANGE_EMAIL_CONFIRM",payload:e,resolve:t,reject:n}},b=function(e,t,n){return{type:"CHANGE_EMAIL_CANCEL",payload:e,resolve:t,reject:n}},v=function(e,t,n){return{type:"VERIFY_2FA",payload:e,resolve:t,reject:n}},w=function(e,t,n){return{type:"RESEND_2FA_CODE",resolve:t,reject:n}},j=function(){return{type:"GET_MY_METRICS"}},E=function(e){return{type:"SET_METRICS",payload:e}}},20465:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/update-password",function(){return n(87647)}])},7318:function(e,t,n){"use strict";const{useEffect:r}=n(67294),a=e=>{const t=()=>Boolean(e.match(/Android/i)),n=()=>Boolean(e.match(/iPhone|iPad|iPod/i)),r=()=>Boolean(e.match(/SSR/i)),a=()=>Boolean(t()||n()||Boolean(e.match(/Opera Mini/i))||Boolean(e.match(/IEMobile/i)));return{isMobile:a,isDesktop:()=>Boolean(!a()&&!r()),isAndroid:t,isIos:n,isSSR:r}};e.exports=()=>{const e="undefined"===typeof navigator?"SSR":navigator.userAgent;return a(e)}}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,2283,7010],(function(){return t=20465,e(e.s=t);var t}));var t=e.O();_N_E=t}]);