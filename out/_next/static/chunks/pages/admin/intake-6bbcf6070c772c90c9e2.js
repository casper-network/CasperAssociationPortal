(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2747],{99310:function(e,r,n){"use strict";var t,i=n(67294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}r.Z=function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:19.997,height:14.452},e),t||(t=i.createElement("path",{fill:"none",stroke:"currentColor",d:"M17.875 2.121L7.044 12.952 2.121 8.029",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3})))}},6280:function(e,r,n){"use strict";n.d(r,{e$:function(){return s},t1:function(){return o},sp:function(){return a}});var t=n(85893),i=n(67294),l=function(e){var r=e.onApproveUser,n=e.onResetUser,i=e.onBanUser;return(0,t.jsxs)("div",{className:"py-16 text-center w-96 mx-auto",children:[(0,t.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Letter Review"}),(0,t.jsx)("p",{className:"text-xs text-gray mb-8",children:"Please click to review the provided letter and make a decision"}),(0,t.jsxs)("div",{className:"flex gap-2.5 flex-col items-center",children:[(0,t.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:r,children:"Approve User"}),(0,t.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:n,children:"Deny & Reset"}),(0,t.jsx)("button",{type:"button",className:"mt-3 text-primary underline",onClick:i,children:"Deny & Ban User"})]})]})},s=function(e){var r=e.description,n=e.onResetUser,l=e.onBack,s=(0,i.useState)(""),o=s[0],a=s[1];return(0,t.jsxs)("div",{className:"py-16 text-center mx-auto",style:{maxWidth:"37.5rem"},children:[(0,t.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Reset User"}),(0,t.jsx)("p",{className:"text-xs text-gray pb-5",children:r}),(0,t.jsx)("textarea",{value:o,onChange:function(e){return a(e.target.value)},rows:"6",className:"p-4 w-full border border-gray focus:outline-none"}),(0,t.jsxs)("div",{className:"mt-8 mx-auto w-96 flex gap-2.5 flex-col items-center",children:[(0,t.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:function(){return n(o)},children:"Reset & Email User"}),(0,t.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:l,children:"Cancel & Go Back"})]})]})},o=function(e){var r=e.onBanUser,n=e.onBack;return(0,t.jsxs)("div",{className:"text-center mx-auto py-28",style:{maxWidth:"26rem"},children:[(0,t.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Ban User"}),(0,t.jsx)("p",{className:"text-xs text-gray",children:"Are you sure? This will change the user to banned status and prevent login."}),(0,t.jsxs)("div",{className:"w-96 flex gap-2.5 flex-col items-center mx-auto mt-8",children:[(0,t.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:r,children:"Yes, Ban This User"}),(0,t.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:n,children:"Cancel & Go Back"})]})]})},a=function(e){var r=e.onApproveUser,n=e.onBanUser,a=e.onResetUser,c=(0,i.useState)("approve"),d=c[0],u=c[1];return(0,t.jsxs)(t.Fragment,{children:["approve"===d&&(0,t.jsx)(l,{onApproveUser:r,onResetUser:function(){return u("reset")},onBanUser:function(){return u("ban")}}),"ban"===d&&(0,t.jsx)(o,{onBanUser:n,onBack:function(){return u("approve")}}),"reset"===d&&(0,t.jsx)(s,{description:"This will reset the submit letter step and tell the user through email to submit again for the following reason:",onResetUser:function(e){return a(e)},onBack:function(){return u("approve")}})]})}},24015:function(e,r,n){"use strict";n.d(r,{a:function(){return d}});var t=n(96156),i=n(85893),l=n(67294),s=n(11163),o=n(49226);var a=n(44791);function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var d=function(e,r){return function(n){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,r=void 0===e?"public":e,n=(0,o.v9)((function(e){return e.authReducer.userInfo}));return(0,l.useEffect)((function(){if("public"!==r&&r&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===r)return"verifying"===n.period&&s.default.push("/verify-email"),"onboarding"===n.period&&s.default.push("/onboard"),void("final"===n.period&&s.default.push("/dashboard"));if("verifying"===r)return"onboarding"===n.period&&s.default.push("/onboard"),void("final"===n.period&&s.default.push("/dashboard"));if("onboarding"===r)return"verifying"===n.period&&s.default.push("/verify-email"),void("final"===n.period&&s.default.push("/dashboard"));if("final-member"===r||"final-all"===r)return"verifying"===n.period&&s.default.push("/verify-email"),void("onboarding"===n.period&&s.default.push("/onboard"));"final-admin"===r&&("verifying"===n.period&&s.default.push("/verify-email"),"onboarding"===n.period&&s.default.push("/onboard"),"final"===n.period&&s.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==r&&"final-admin"!==r&&s.default.push("/admin/dashboard");else"auth"!==r&&s.default.push("/login")}),[n,r]),{user:n}}({urlType:r}).user;if(r&&"public"!==r){if(!d)return(0,i.jsx)(a.Z,{});if("auth"===r&&d.isLoggedIn)return(0,i.jsx)(a.Z,{});if("auth"!==r&&!d.isLoggedIn)return(0,i.jsx)(a.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(r)&&"final"!==d.period)return(0,i.jsx)(a.Z,{});if(["verifying"].includes(r)&&"verifying"!==d.period)return(0,i.jsx)(a.Z,{});if(["onboarding"].includes(r)&&"onboarding"!==d.period)return(0,i.jsx)(a.Z,{})}if(["admin","sub-admin"].includes(d.role)&&["verifying","onboarding","final-member"].includes(r))return(0,i.jsx)(a.Z,{})}return(0,i.jsx)(e,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},n))}}},54606:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return D}});var t=n(85893),i=n(24015),l=n(25955),s=n(89),o=n(96156),a=n(87329),c=n(32465),d=n(67294),u=n(49226),p=n(29163),f=n(87028),h=n(64605),x=n(6280),m=n(4478),b=n(29586),j=n(99310),v=n(97705);function y(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?y(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function w(){var e=(0,c.Z)(["\n  .intake-table {\n    .col-1 {\n      width: 25%;\n    }\n    .col-2 {\n      width: 35%;\n    }\n    .col-3 {\n      width: 15%;\n    }\n    .col-4 {\n      width: 15%;\n    }\n    .col-5 {\n      width: 10%;\n    }\n  }\n"]);return w=function(){return e},e}var N=p.ZP.div(w()),O=function(){var e=(0,m.R)(),r=e.setDialog,n=e.onClosed,i=(0,u.I0)(),l=(0,d.useContext)(v.AppContext).setLoading,o=(0,h.x)(),c=o.data,p=o.setData,y=o.register,w=o.hasMore,O=o.appendData,C=o.setHasMore,A=o.page,k=o.setPage,P=function(){i((0,f.c8)({page:A},(function(e,r){C(r),O(e),k((function(e){return e+1}))})))};(0,d.useEffect)((function(){P()}),[]);var _=function(e,s){window.open("".concat(e.letter_file_url),"_blank"),r({type:"DialogCustom",data:{content:(0,t.jsx)(x.sp,{onResetUser:function(r){return function(e,r,t){l(!0),i((0,f.zb)({id:e,message:r},(function(){c[t].letter_file=null,p((0,a.Z)(c)),n(),l(!1)}),(function(){l(!1)})))}(e.id,r,s)},onBanUser:function(){return r=e.id,t=s,l(!0),void i((0,f.QT)({id:r},(function(){c.splice(t,1),p((0,a.Z)(c)),n(),l(!1)}),(function(){l(!1)})));var r,t},onApproveUser:function(){return r=e.id,t=s,l(!0),void i((0,f.Hi)({id:r},(function(){c[t].letter_verified_at=!0,p((0,a.Z)(c)),n(),l(!1)}),(function(){l(!1)})));var r,t}})}})};return(0,t.jsx)(N,{className:"h-full",children:(0,t.jsxs)(s.iA,g(g({},y),{},{className:"intake-table pt-5 h-full",onLoadMore:P,hasMore:w,dataLength:c.length,children:[(0,t.jsxs)(s.iA.Header,{children:[(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Registration Date"})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Users Email"})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsxs)("p",{children:["Signature ",(0,t.jsx)("br",{})," Complete"]})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsxs)("p",{children:["Node Verification ",(0,t.jsx)("br",{})," Complete"]})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Letter of Motivation"})})]}),(0,t.jsx)(s.iA.Body,{className:"lg:-mr-24 lg:pr-24",children:c.map((function(e,r){return(0,t.jsxs)(s.iA.BodyRow,{children:[(0,t.jsx)(s.iA.BodyCell,{children:(0,t.jsx)("p",{children:(0,b.p)(new Date(null===e||void 0===e?void 0:e.created_at))})}),(0,t.jsx)(s.iA.BodyCell,{children:(0,t.jsx)("p",{className:"truncate",children:e.email})}),(0,t.jsx)(s.iA.BodyCell,{children:!!e.signature_request_id&&(0,t.jsx)(j.Z,{className:"text-primary"})}),(0,t.jsx)(s.iA.BodyCell,{children:!!e.node_verified_at&&(0,t.jsx)(j.Z,{className:"text-primary"})}),(0,t.jsx)(s.iA.BodyCell,{children:e.letter_verified_at?(0,t.jsx)(j.Z,{className:"text-primary"}):(0,t.jsx)("button",{type:"button",onClick:function(){return _(e,r)},className:"text-primary cursor-pointer underline disabled:opacity-40 disabled:cursor-not-allowed",disabled:!e.letter_file,children:"Review"})})]},r)}))})]}))})},C=n(41664);function A(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?A(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function P(){var e=(0,c.Z)(["\n  .intake-table {\n    .col-1 {\n      width: 20%;\n    }\n    .col-2 {\n      width: 25%;\n    }\n    .col-3 {\n      width: 15%;\n    }\n    .col-4 {\n      width: 15%;\n    }\n    .col-5 {\n      width: 15%;\n    }\n    .col-6 {\n      width: 10%;\n    }\n  }\n"]);return P=function(){return e},e}var _=p.ZP.div(P()),B=function(){var e=(0,u.I0)(),r=(0,h.x)(),n=r.data,i=r.register,l=r.hasMore,o=r.appendData,a=r.setHasMore,c=r.page,p=r.setPage,x=function(){e((0,f.fX)({page:c},(function(e,r){a(r),o(e),p((function(e){return e+1}))})))};return(0,d.useEffect)((function(){x()}),[]),(0,t.jsx)(_,{className:"h-full",children:(0,t.jsxs)(s.iA,k(k({},i),{},{className:"intake-table pt-5 h-full",onLoadMore:x,hasMore:l,dataLength:n.length,children:[(0,t.jsxs)(s.iA.Header,{children:[(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Registration Date"})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Users Email"})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Type"})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsxs)("p",{children:["AML API ",(0,t.jsx)("br",{})," Response"]})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsxs)("p",{children:["KYC API ",(0,t.jsx)("br",{})," Response"]})}),(0,t.jsx)(s.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Action"})})]}),(0,t.jsx)(s.iA.Body,{className:"lg:-mr-24 lg:pr-24",children:n.map((function(e,r){return(0,t.jsxs)(s.iA.BodyRow,{children:[(0,t.jsx)(s.iA.BodyCell,{children:(0,t.jsx)("p",{children:(0,b.p)(new Date(null===e||void 0===e?void 0:e.created_at))})}),(0,t.jsx)(s.iA.BodyCell,{children:(0,t.jsx)("p",{className:"truncate",children:e.email})}),(0,t.jsx)(s.iA.BodyCell,{children:(0,t.jsx)("p",{className:"capitalize",children:null===e||void 0===e?void 0:e.type})}),(0,t.jsx)(s.iA.BodyCell,{children:(0,t.jsx)("p",{children:null!==e&&void 0!==e&&e.background_checks_result?"OK":"Needs Review"})}),(0,t.jsx)(s.iA.BodyCell,{children:(0,t.jsx)("p",{children:"approved"===(null===e||void 0===e?void 0:e.kyc_status)?"OK":"Needs Review"})}),(0,t.jsx)(s.iA.BodyCell,{children:(0,t.jsx)(C.default,{href:"/admin/intake/verification/".concat(e.user_id),children:(0,t.jsx)("a",{className:"text-primary cursor-pointer underline",children:"Review"})})})]},r)}))})]}))})},D=(0,i.a)((function(){return(0,t.jsx)(l.Z,{children:(0,t.jsxs)(s.Zb,{className:"h-full px-24 py-7",children:[(0,t.jsxs)("div",{className:"bg-transparent h-1/2 xl:pb-2 2xl:pb-5",children:[(0,t.jsx)("div",{className:"w-full h-70px",children:(0,t.jsxs)("div",{className:"lg:h-70px flex flex-col justify-center",children:[(0,t.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-2.5",children:"General Intake"}),(0,t.jsx)("p",{className:"text-sm text-gray pb-3.5",children:"New members needing approval"}),(0,t.jsx)("div",{className:"border-primary border-b-2"})]})}),(0,t.jsx)("div",{className:"flex flex-col h-100%-70px",children:(0,t.jsx)(O,{})})]}),(0,t.jsxs)("div",{className:"bg-transparent h-1/2 xl:pt-2 2xl:pt-5",children:[(0,t.jsx)("div",{className:"w-full h-70px",children:(0,t.jsxs)("div",{className:"lg:h-70px flex flex-col justify-center",children:[(0,t.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-2.5",children:"IDverification"}),(0,t.jsx)("p",{className:"text-sm text-gray pb-3.5",children:"Members wanting to get verified"}),(0,t.jsx)("div",{className:"border-primary border-b-2"})]})}),(0,t.jsx)("div",{className:"flex flex-col h-100%-70px",children:(0,t.jsx)(B,{})})]})]})})}),"final-admin")},34936:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/intake",function(){return n(54606)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,8661,9669,3913,7010,5955,8216],(function(){return r=34936,e(e.s=r);var r}));var r=e.O();_N_E=r}]);