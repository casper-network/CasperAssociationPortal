(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{24015:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(96156),i=n(85893),a=n(67294),o=n(11163),u=n(49226);var s=n(44791);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=function(e,t){return function(n){var c=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,u.v9)((function(e){return e.authReducer.userInfo}));return(0,a.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&o.default.push("/verify-email"),"onboarding"===n.period&&o.default.push("/onboard"),void("final"===n.period&&o.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&o.default.push("/onboard"),void("final"===n.period&&o.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&o.default.push("/verify-email"),void("final"===n.period&&o.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&o.default.push("/verify-email"),void("onboarding"===n.period&&o.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&o.default.push("/verify-email"),"onboarding"===n.period&&o.default.push("/onboard"),"final"===n.period&&o.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==t&&"final-admin"!==t&&o.default.push("/admin/dashboard");else"auth"!==t&&o.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!c)return(0,i.jsx)(s.Z,{});if("auth"===t&&c.isLoggedIn)return(0,i.jsx)(s.Z,{});if("auth"!==t&&!c.isLoggedIn)return(0,i.jsx)(s.Z,{});if("member"===c.role){if(["final-all","final-member"].includes(t)&&"final"!==c.period)return(0,i.jsx)(s.Z,{});if(["verifying"].includes(t)&&"verifying"!==c.period)return(0,i.jsx)(s.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==c.period)return(0,i.jsx)(s.Z,{})}if(["admin","sub-admin"].includes(c.role)&&["verifying","onboarding","final-member"].includes(t))return(0,i.jsx)(s.Z,{})}return(0,i.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},66570:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r,i=n(85893),a=n(87757),o=n.n(a),u=n(92137),s=n(25675),l=n(49226),c=n(67294);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=function(e){return c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 23"},e),r||(r=c.createElement("g",{"data-name":"Group 1031",fill:"none",stroke:"currentColor",strokeWidth:3},c.createElement("path",{"data-name":"Line 1",d:"M35 21.5H0"}),c.createElement("path",{"data-name":"Line 2",d:"M35 11.5H9.082"}),c.createElement("path",{"data-name":"Line 3",d:"M35 1.5H0"}))))},p=n(43022),m=function(e){var t=e.className,n=e.theme,r=(0,l.I0)();return(0,i.jsxs)("div",{className:"flex items-center justify-between ".concat(t||""),children:[(0,i.jsx)(s.default,{className:"animate__animated animate__fadeIn",src:"/images/casper_logo_".concat(n,".svg"),alt:"casper logo",width:125,height:33}),(0,i.jsx)("button",{className:"animate__animated animate__fadeIn animate__delay-2s",type:"button",onClick:function(){var e=(0,u.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r((0,p.Rg)());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,i.jsx)(d,{width:"2rem",height:"1.25rem",className:"".concat("light"===n?"text-white":"text-dark2")})})]})}},44791:function(e,t,n){"use strict";var r=n(85893),i=n(733),a=n.n(i);t.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(a(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},24205:function(e,t,n){"use strict";n.d(t,{Ge:function(){return r},QI:function(){return i},zC:function(){return a},qn:function(){return o},tH:function(){return u},VX:function(){return s},FZ:function(){return l},ec:function(){return c},mS:function(){return f}});var r=/^[\.a-zA-Z\s ]*$/,i=/^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z\u200c\u200b]{2,})$/,a=/(^[0-9])/,o=/^-?[1-9]/,u=/^[A-Za-z0-9-]*$/,s=/^[A-Za-z0-9-]*$/,l=/(^)@[A-Za-z0-9-\_]*$/,c=/^[A-Za-z0-9-\s\.\_ ]*$/,f=new RegExp("".concat(/(?=.*?[a-zA-Z])/.source).concat(/(?=.*?[0-9])/.source).concat(/(?=.*?[\!\"\-\@\#\$\%\&\*\(\)\'\^\`\.\,\/\:\;\_\+\=\<\>\?\{\}\[\\\]])/.source))},76133:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(87757),a=n.n(i),o=n(96156),u=n(92137),s=n(41664),l=n(7318),c=n.n(l),f=n(42283),d=n(11163),p=n(67294),m=n(49226),h=n(7667),y=n(66570),g=n(24205),b=n(89),_=n(43022),x=n(24015);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=(0,x.a)((function(){var e,t,n,i,o=(0,f.cI)(),l=o.formState,x=o.register,v=o.handleSubmit,w=(0,m.I0)(),E=(0,d.useRouter)(),O=c()(),S=(0,p.useState)(!1),N=S[0],I=S[1],R=function(){var e=(0,u.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(!0),w((0,_.q0)(j({},t),(function(){w((0,_.CS)((function(){E.push("/dashboard")})))}),(function(){I(!1)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"flex justify-center h-screen",style:{backgroundImage:"url('/images/bg_welcome".concat(O.isMobile()?"_mobile":"",".png')"),backgroundSize:"cover"},children:(0,r.jsxs)("div",{className:" flex flex-col w-full p-4 lg:max-w-380 lg:p-9 xl:max-w-screen-xl xl:p-9 2xl:max-w-screen-2xl ",children:[(0,r.jsx)(y.Z,{theme:"light"}),(0,r.jsx)("form",{className:"flex-grow flex items-center justify-center",onSubmit:v(R),children:(0,r.jsxs)("div",{className:"bg-white w-full lg:w-2/3 text-center px-4 py-12 lg:p-44",style:{backgroundImage:"url('/images/login_overlay.png')",backgroundSize:"cover"},children:[(0,r.jsx)("p",{className:"text-4xl text-center animate__animated animate__fadeInUp",children:"Sign In"}),(0,r.jsxs)("p",{className:"text-xs text-center mt-2 animate__animated animate__fadeInUp animate__delay-2s",children:["Don\u2019t have an account yet? ",(0,r.jsx)(s.default,{href:"/register-type",children:(0,r.jsx)("a",{className:"text-primary underline font-medium",children:"Register"})})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col animate__animated animate__fadeInLeft animate__delay-4s",children:[(0,r.jsx)("input",j({type:"text",className:"w-full h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Email",name:"email"},x("email",{required:"Email is required",pattern:{message:"Email is invalid",value:g.QI}}))),(null===(e=l.errors)||void 0===e?void 0:e.email)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(t=l.errors.email)||void 0===t?void 0:t.message})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col animate__animated animate__fadeInLeft animate__delay-4s",children:[(0,r.jsx)("input",j({type:"password",className:"w-full h-16 text-xl mt-5 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Password",name:"password"},x("password",{required:"Password is required"}))),(null===(n=l.errors)||void 0===n?void 0:n.password)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary text-left",children:null===(i=l.errors.password)||void 0===i?void 0:i.message})]}),(0,r.jsxs)("div",{className:"lg:flex lg:space-x-5 mt-14 lg:justify-center animate__animated animate__fadeInUp animate__delay-2s",children:[(0,r.jsx)(b.fl,{type:"submit",isDisabled:N,isLoading:N,title:"Sign in",className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"}),(0,r.jsx)("button",{type:"button",className:"mt-2 lg:mt-0 text-lg border-2 border-primary text-primary w-full lg:w-64 h-16 rounded-full bg-white hover:bg-primary hover:bg-opacity-40 hover:text-white focus:outline-none shadow-md",children:"Sign in as Guest"})]}),(0,r.jsxs)("p",{className:"text-xs text-center mt-5 animate__animated animate__fadeInUp animate__delay-4s",children:["Forgot your password? ",(0,r.jsx)(s.default,{href:"/reset-password",children:(0,r.jsx)("a",{className:"text-primary underline font-medium",children:"Reset"})})]})]})}),(0,r.jsx)(h.Z,{theme:"light"})]})})}),"auth")},43022:function(e,t,n){"use strict";n.d(t,{q0:function(){return r},Rg:function(){return i},uB:function(){return a},xv:function(){return o},c0:function(){return u},s:function(){return s},gQ:function(){return l},lm:function(){return c},hh:function(){return f},CS:function(){return d},$Y:function(){return p},B0:function(){return m},av:function(){return h},Nq:function(){return y},pn:function(){return g},NL:function(){return b},V$:function(){return _},x8:function(){return x},Nc:function(){return v},zg:function(){return j},qA:function(){return w},j_:function(){return E}});var r=function(e,t,n){return{type:"LOGIN_APP",callback:t,payload:e,resetSubmitting:n}},i=function(){return{type:"LOGOUT_APP"}},a=function(e,t,n){return{type:"REGISTER_ENTITY",callback:t,payload:e,resetSubmitting:n}},o=function(e,t,n){return{type:"REGISTER_INDIVIDUAL",callback:t,payload:e,resetSubmitting:n}},u=function(e,t,n){return{type:"RESET_PASSWORD",callback:t,payload:e,resetSubmitting:n}},s=function(e,t,n){return{type:"UPDATE_EMAIL",callback:t,payload:e,resetSubmitting:n}},l=function(e,t,n){return{type:"UPDATE_PASSWORD",callback:t,payload:e,resetSubmitting:n}},c=function(e,t,n){return{type:"VERIFY_EMAIL",callback:t,payload:e,resetSubmitting:n}},f=function(e,t){return{type:"RESEND_VERIFICATION_CODE",resolve:e,reject:t}},d=function(e){return{type:"FETCH_USER_INFO",resolve:e}},p=function(e){return{type:"FETCH_USER_INFO_SUCCESS",payload:e}},m=function(e){return{type:"FETCH_USER_INFO_ERROR",payload:e}},h=function(e){return{type:"SET_USER_INFO",payload:e}},y=function(e){return{type:"UPDATE_USER_INFO",payload:e}},g=function(){return{type:"CLEAR_USER_INFO"}},b=function(){return{type:"CLEAR_METRICS"}},_=function(e,t,n){return{type:"CHANGE_EMAIL_CONFIRM",payload:e,resolve:t,reject:n}},x=function(e,t,n){return{type:"CHANGE_EMAIL_CANCEL",payload:e,resolve:t,reject:n}},v=function(e,t,n){return{type:"VERIFY_2FA",payload:e,resolve:t,reject:n}},j=function(e,t,n){return{type:"RESEND_2FA_CODE",resolve:t,reject:n}},w=function(){return{type:"GET_MY_METRICS"}},E=function(e){return{type:"SET_METRICS",payload:e}}},7156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(76133)}])},7318:function(e,t,n){"use strict";const{useEffect:r}=n(67294),i=e=>{const t=()=>Boolean(e.match(/Android/i)),n=()=>Boolean(e.match(/iPhone|iPad|iPod/i)),r=()=>Boolean(e.match(/SSR/i)),i=()=>Boolean(t()||n()||Boolean(e.match(/Opera Mini/i))||Boolean(e.match(/IEMobile/i)));return{isMobile:i,isDesktop:()=>Boolean(!i()&&!r()),isAndroid:t,isIos:n,isSSR:r}};e.exports=()=>{const e="undefined"===typeof navigator?"SSR":navigator.userAgent;return i(e)}}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,2283,7010],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);