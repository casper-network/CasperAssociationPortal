(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1592],{24015:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(96156),a=n(85893),i=n(67294),s=n(11163),l=n(49226);var o=n(44791);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=function(e,t){return function(n){var c=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,l.v9)((function(e){return e.authReducer.userInfo}));return(0,i.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&s.default.push("/verify-email"),"onboarding"===n.period&&s.default.push("/onboard"),void("final"===n.period&&s.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&s.default.push("/onboard"),void("final"===n.period&&s.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&s.default.push("/verify-email"),void("final"===n.period&&s.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&s.default.push("/verify-email"),void("onboarding"===n.period&&s.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&s.default.push("/verify-email"),"onboarding"===n.period&&s.default.push("/onboard"),"final"===n.period&&s.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==t&&"final-admin"!==t&&s.default.push("/admin/dashboard");else"auth"!==t&&s.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!c)return(0,a.jsx)(o.Z,{});if("auth"===t&&c.isLoggedIn)return(0,a.jsx)(o.Z,{});if("auth"!==t&&!c.isLoggedIn)return(0,a.jsx)(o.Z,{});if("member"===c.role){if(["final-all","final-member"].includes(t)&&"final"!==c.period)return(0,a.jsx)(o.Z,{});if(["verifying"].includes(t)&&"verifying"!==c.period)return(0,a.jsx)(o.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==c.period)return(0,a.jsx)(o.Z,{})}if(["admin","sub-admin"].includes(c.role)&&["verifying","onboarding","final-member"].includes(t))return(0,a.jsx)(o.Z,{})}return(0,a.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},7667:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(85893);n(67294);var a=function(e){var t=e.theme;return(0,r.jsx)("div",{className:"flex items-center justify-center lg:visible invisible",children:(0,r.jsx)("p",{className:"".concat("light"===t?"text-white":"text-dark2"," text-xs animate__animated animate__fadeIn animate__delay-5s\n    "),children:"\xa92021 CasperLabs.io"})})}},66570:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r,a=n(85893),i=n(87757),s=n.n(i),l=n(92137),o=n(25675),u=n(49226),c=n(67294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e){return c.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 23"},e),r||(r=c.createElement("g",{"data-name":"Group 1031",fill:"none",stroke:"currentColor",strokeWidth:3},c.createElement("path",{"data-name":"Line 1",d:"M35 21.5H0"}),c.createElement("path",{"data-name":"Line 2",d:"M35 11.5H9.082"}),c.createElement("path",{"data-name":"Line 3",d:"M35 1.5H0"}))))},f=n(43022),p=function(e){var t=e.className,n=e.theme,r=(0,u.I0)(),i=(0,u.v9)((function(e){return e.authReducer.userInfo}));return(0,a.jsxs)("div",{className:"flex items-center justify-between ".concat(t||""),children:[(0,a.jsx)(o.default,{className:"animate__animated animate__fadeIn",src:"/images/casper_logo_".concat(n,".svg"),alt:"casper logo",width:125,height:33}),(null===i||void 0===i?void 0:i.isLoggedIn)&&(0,a.jsx)("button",{className:"animate__animated animate__fadeIn animate__delay-2s",type:"button",onClick:function(){var e=(0,l.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r((0,f.Rg)());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,a.jsx)(m,{width:"2rem",height:"1.25rem",className:"".concat("light"===n?"text-white":"text-dark2")})})]})}},44791:function(e,t,n){"use strict";var r=n(85893),a=n(733),i=n.n(a);t.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(i(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},24205:function(e,t,n){"use strict";n.d(t,{Ge:function(){return r},QI:function(){return a},zC:function(){return i},qn:function(){return s},tH:function(){return l},VX:function(){return o},FZ:function(){return u},ec:function(){return c},mS:function(){return d}});var r=/^[\.a-zA-Z\s ]*$/,a=/^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z\u200c\u200b]{2,})$/,i=/(^[0-9])/,s=/^-?[1-9]/,l=/^[A-Za-z0-9-]*$/,o=/^[A-Za-z0-9-]*$/,u=/(^)@[A-Za-z0-9-\_]*$/,c=/^[A-Za-z0-9-\s\.\_ ]*$/,d=new RegExp("".concat(/(?=.*?[a-zA-Z])/.source).concat(/(?=.*?[0-9])/.source).concat(/(?=.*?[\!\"\-\@\#\$\%\&\*\(\)\'\^\`\.\,\/\:\;\_\+\=\<\>\?\{\}\[\\\]])/.source))},36178:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(96156),i=n(67294),s=n(11163),l=n(42283),o=n(49226),u=n(7667),c=n(66570),d=n(24205),m=n(12245),f=n(43022),p=n(24015);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=(0,p.a)((function(){var e,t,n,a,p,v,x,g,y,_,j,b,N,w,E,O,I=(0,i.useState)(!1),S=I[0],P=I[1],C=(0,i.useState)(!1),A=C[0],R=C[1],T=(0,s.useRouter)(),k=(0,l.cI)({mode:"onBlur"}),F=k.control,L=k.formState,Z=k.register,D=k.handleSubmit,U=k.getValues,q=k.setValue,z=k.clearErrors,G=k.setError,M=(0,o.I0)(),H=(0,i.useState)(!1),B=H[0],$=H[1];return(0,r.jsx)("div",{className:"flex justify-center min-h-screen",children:(0,r.jsxs)("div",{className:" flex flex-col w-full p-4 lg:max-w-380 lg:p-9 xl:max-w-screen-xl xl:p-9 2xl:max-w-screen-2xl",children:[(0,r.jsx)(c.Z,{theme:"dark"}),(0,r.jsx)("form",{className:"flex-grow flex items-center justify-center mt-16 lg:mt-0",onSubmit:D((function(e){$(!0),M((0,f.xv)(h({},e),(function(){T.push("/verify-email")}),(function(){$(!1)})))})),children:(0,r.jsxs)("div",{className:"w-full lg:w-9/12",children:[(0,r.jsx)("p",{className:"text-2xl animate__animated animate__fadeInLeft",children:"New Individual User"}),(0,r.jsx)("p",{className:"text-sm text-dark mt-2 animate__animated animate__fadeInLeft animate__delay-2s",children:"Fill out the form to register."}),(0,r.jsxs)("div",{className:"text-sm text-dark mt-2 animate__animated animate__fadeInUp animate__delay-4s",children:[(0,r.jsxs)("div",{className:"lg:flex mt-10 lg:space-x-5",children:[(0,r.jsxs)("div",{className:"flex-1 flex-col",children:[(0,r.jsx)("input",h({type:"text",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"First Name *",name:"firstName"},Z("firstName",{required:"First name is required",pattern:{message:"First name is invalid",value:d.Ge}}))),(null===(e=L.errors)||void 0===e?void 0:e.firstName)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(t=L.errors.firstName)||void 0===t?void 0:t.message})]}),(0,r.jsxs)("div",{className:"flex-1 flex-col",children:[(0,r.jsx)("input",h({type:"text",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Last Name *",name:"lastName"},Z("lastName",{required:"Last name is required",pattern:{message:"Last name is invalid",value:d.Ge}}))),(null===(n=L.errors)||void 0===n?void 0:n.lastName)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(a=L.errors.lastName)||void 0===a?void 0:a.message})]})]}),(0,r.jsxs)("div",{className:"lg:flex mt-5 lg:space-x-5",children:[(0,r.jsxs)("div",{className:"flex-1 flex-col",children:[(0,r.jsx)("input",h({type:"text",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Email *",name:"email"},Z("email",{required:"Email is required",pattern:{message:"Email is invalid",value:d.QI},validate:function(e){return e===U().confirmEmail||!L.touchedFields.confirmEmail||"Email not match"}}))),(null===(p=L.errors)||void 0===p?void 0:p.email)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(v=L.errors.email)||void 0===v?void 0:v.message})]}),(0,r.jsxs)("div",{className:"flex-1 flex-col",children:[(0,r.jsx)("input",h({type:"text",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Confirm Email *",name:"confirmEmail"},Z("confirmEmail",{required:"Email Confirm is required",pattern:{message:"Email Confirm is invalid",value:d.QI},validate:function(e){return e===U().email?z("email"):G("email",{message:"Email not match"})}}))),(null===(x=L.errors)||void 0===x?void 0:x.confirmEmail)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(g=L.errors.confirmEmail)||void 0===g?void 0:g.message})]})]}),(0,r.jsxs)("div",{className:"lg:flex mt-5 lg:space-x-5",children:[(0,r.jsxs)("div",{className:"flex-1 flex-col",children:[(0,r.jsx)("input",h({type:"password",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Password *",name:"password"},Z("password",{required:"Password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Password is invalid",value:d.mS},validate:function(e){return e===U().confirmPassword||!L.touchedFields.confirmPassword||"Password not match"}}))),(null===(y=L.errors)||void 0===y?void 0:y.password)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(_=L.errors.password)||void 0===_?void 0:_.message})]}),(0,r.jsxs)("div",{className:"flex-1 flex-col",children:[(0,r.jsx)("input",h({type:"password",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Confirm Password *",name:"confirmPassword"},Z("confirmPassword",{required:"Confirm password is required",minLength:{message:"Min 8 character",value:8},pattern:{message:"Confirm password is invalid",value:d.mS},validate:function(e){return e===U().password?z("password"):G("password",{message:"Password not match"})}}))),(null===(j=L.errors)||void 0===j?void 0:j.confirmPassword)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(b=L.errors.confirmPassword)||void 0===b?void 0:b.message})]})]}),(0,r.jsxs)("div",{className:"lg:flex mt-5 lg:space-x-5",children:[(0,r.jsxs)("div",{className:"flex-1 flex-col",children:[(0,r.jsx)("input",h({type:"text",className:"w-full h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Forum Name / Pseudonym *",name:"pseudonym"},Z("pseudonym",{required:"Forum name is required",pattern:{message:"Forum name is invalid",value:d.tH}}))),(null===(N=L.errors)||void 0===N?void 0:N.pseudonym)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(w=L.errors.pseudonym)||void 0===w?void 0:w.message})]}),(0,r.jsxs)("div",{className:"flex-1 flex-col",children:[(0,r.jsx)(l.Qr,{name:"telegram",control:F,rules:{pattern:{message:"Telegram is invalid",value:d.FZ}},render:function(e){var t=e.field,n=t.value,a=t.onChange,i=t.onBlur;return(0,r.jsx)("input",{type:"text",className:"w-full mt-2 lg:mt-0 h-14 px-7 rounded-full shadow-md focus:outline-none",placeholder:"Telegram",name:"telegram",value:n,onChange:function(e){!function(e){""!==e.target.value&&/^@/.test(e.target.value)?q("telegram",e.target.value):(q("telegram","@"),e.target.value="@")}(e),a(e)},onBlur:function(e){!function(e){"@"===e.target.value&&q("telegram","")}(e),i(e)},onFocus:function(e){return function(e){e.target.value&&""!==e.target.value||q("telegram","@")}(e)}})}}),(null===(E=L.errors)||void 0===E?void 0:E.telegram)&&(0,r.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(O=L.errors.telegram)||void 0===O?void 0:O.message})]})]})]}),(0,r.jsxs)("div",{className:"flex mt-10 animate__animated animate__fadeInUp animate__delay-6s",children:[(0,r.jsx)("button",{type:"button",className:"flex items-baseline focus:outline-none",onClick:function(){return P(!S)},children:(0,r.jsx)("img",{src:"/images/".concat(S?"ic_check.svg":"ic_uncheck.svg"),alt:"agree checkbox",width:18,height:18})}),(0,r.jsx)("p",{className:"flex-1 text-dark1 text-sm ml-4",children:"I agree the Terms and Conditions, cookie policy, and privacy policy."})]}),(0,r.jsxs)("div",{className:"flex mt-5 animate__animated animate__fadeInUp animate__delay-7s",children:[(0,r.jsx)("button",{type:"button",className:"flex items-baseline focus:outline-none",onClick:function(){return R(!A)},children:(0,r.jsx)("img",{src:"/images/".concat(A?"ic_check.svg":"ic_uncheck.svg"),alt:"understand checkbox",width:18,height:18})}),(0,r.jsx)("p",{className:"flex-1 text-dark1 text-sm ml-4 break-words",children:"I understand that this portal is only for Casper blockchain node operators and affirm that I do operate a node and understand that I will be required to prove I am a node operator."})]}),(0,r.jsx)("div",{className:"lg:flex lg:flex-row-reverse mt-10",children:(0,r.jsx)("div",{className:"animate__animated animate__fadeInLeft animate__delay-8s",children:(0,r.jsx)(m.fl,{type:"submit",isDisabled:!(S&&A)||B,isLoading:B,title:"Submit",className:"text-lg text-white w-full lg:w-64 h-16 rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md"})})})]})}),(0,r.jsx)(u.Z,{theme:"dark"})]})})}),"auth")},43022:function(e,t,n){"use strict";n.d(t,{q0:function(){return r},Rg:function(){return a},uB:function(){return i},xv:function(){return s},c0:function(){return l},s:function(){return o},gQ:function(){return u},lm:function(){return c},hh:function(){return d},CS:function(){return m},$Y:function(){return f},B0:function(){return p},av:function(){return v},Nq:function(){return h},pn:function(){return x},V$:function(){return g},x8:function(){return y},Nc:function(){return _},zg:function(){return j},qA:function(){return b},j_:function(){return N},NL:function(){return w},EU:function(){return E},O7:function(){return O},Rv:function(){return I},L1:function(){return S},Pn:function(){return P},cK:function(){return C}});var r=function(e,t,n){return{type:"LOGIN_APP",callback:t,payload:e,resetSubmitting:n}},a=function(){return{type:"LOGOUT_APP"}},i=function(e,t,n){return{type:"REGISTER_ENTITY",callback:t,payload:e,resetSubmitting:n}},s=function(e,t,n){return{type:"REGISTER_INDIVIDUAL",callback:t,payload:e,resetSubmitting:n}},l=function(e,t,n){return{type:"RESET_PASSWORD",callback:t,payload:e,resetSubmitting:n}},o=function(e,t,n){return{type:"UPDATE_EMAIL",callback:t,payload:e,resetSubmitting:n}},u=function(e,t,n){return{type:"UPDATE_PASSWORD",callback:t,payload:e,resetSubmitting:n}},c=function(e,t,n){return{type:"VERIFY_EMAIL",callback:t,payload:e,resetSubmitting:n}},d=function(e,t){return{type:"RESEND_VERIFICATION_CODE",resolve:e,reject:t}},m=function(e){return{type:"FETCH_USER_INFO",resolve:e}},f=function(e){return{type:"FETCH_USER_INFO_SUCCESS",payload:e}},p=function(e){return{type:"FETCH_USER_INFO_ERROR",payload:e}},v=function(e){return{type:"SET_USER_INFO",payload:e}},h=function(e){return{type:"UPDATE_USER_INFO",payload:e}},x=function(){return{type:"CLEAR_USER_INFO"}},g=function(e,t,n){return{type:"CHANGE_EMAIL_CONFIRM",payload:e,resolve:t,reject:n}},y=function(e,t,n){return{type:"CHANGE_EMAIL_CANCEL",payload:e,resolve:t,reject:n}},_=function(e,t,n){return{type:"VERIFY_2FA",payload:e,resolve:t,reject:n}},j=function(e,t,n){return{type:"RESEND_2FA_CODE",resolve:t,reject:n}},b=function(){return{type:"GET_MY_METRICS"}},N=function(e){return{type:"SET_METRICS",payload:e}},w=function(){return{type:"CLEAR_METRICS"}},E=function(){return{type:"GET_BANNER_NOTIFICATIONS"}},O=function(){return{type:"GET_POPUP_NOTIFICATIONS"}},I=function(e){return{type:"SET_NOTIFICATIONS",payload:e}},S=function(){return{type:"CLEAR_NOTIFICATIONS"}},P=function(e,t,n){return{type:"GET_NODES_FROM_USER",payload:e,resolve:t,reject:n}},C=function(e,t){return{type:"GET_USER_DASHBOARD",resolve:e,reject:t}}},619:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register-individual",function(){return n(36178)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,2283,1045],(function(){return t=619,e(e.s=t);var t}));var t=e.O();_N_E=t}]);