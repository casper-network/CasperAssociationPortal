(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1381],{4015:function(e,n,t){"use strict";t.d(n,{a:function(){return d}});var r=t(6156),i=t(5893),o=t(7294),l=t(1163),a=t(9226);var u=t(4791);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var d=function(e,n){return function(t){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,n=void 0===e?"public":e,t=(0,a.v9)((function(e){return e.authReducer.userInfo}));return(0,o.useEffect)((function(){if("public"!==n&&n&&t)if(t&&null!==t&&void 0!==t&&t.isLoggedIn)if("member"===t.role){if("auth"===n)return"verifying"===t.period&&l.default.push("/verify-email"),"onboarding"===t.period&&l.default.push("/onboard"),void("final"===t.period&&l.default.push("/dashboard"));if("verifying"===n)return"onboarding"===t.period&&l.default.push("/onboard"),void("final"===t.period&&l.default.push("/dashboard"));if("onboarding"===n)return"verifying"===t.period&&l.default.push("/verify-email"),void("final"===t.period&&l.default.push("/dashboard"));if("final-member"===n||"final-all"===n)return"verifying"===t.period&&l.default.push("/verify-email"),void("onboarding"===t.period&&l.default.push("/onboard"));"final-admin"===n&&("verifying"===t.period&&l.default.push("/verify-email"),"onboarding"===t.period&&l.default.push("/onboard"),"final"===t.period&&l.default.push("/dashboard"))}else"admin"===t.role&&"final-all"!==n&&"final-admin"!==n&&l.default.push("/admin/dashboard");else"auth"!==n&&l.default.push("/login")}),[t,n]),{user:t}}({urlType:n}).user;if(n&&"public"!==n){if(!d)return(0,i.jsx)(u.Z,{});if("auth"===n&&d.isLoggedIn)return(0,i.jsx)(u.Z,{});if("auth"!==n&&!d.isLoggedIn)return(0,i.jsx)(u.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(n)&&"final"!==d.period)return(0,i.jsx)(u.Z,{});if(["verifying"].includes(n)&&"verifying"!==d.period)return(0,i.jsx)(u.Z,{});if(["onboarding"].includes(n)&&"onboarding"!==d.period)return(0,i.jsx)(u.Z,{})}if("admin"===d.role&&["verifying","onboarding","final-member"].includes(n))return(0,i.jsx)(u.Z,{})}return(0,i.jsx)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t))}}},4791:function(e,n,t){"use strict";var r=t(5893),i=t(733),o=t.n(i);n.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(o(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},6407:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7329),o=t(2465),l=t(1163),a=t(7294),u=t(9226),c=t(9163),d=t(4015),s=t(5955),f=t(8569),p=t(7028),y=t(9586);function h(){var e=(0,o.Z)(["\n  .active-votes-table {\n    .col-1 {\n      width: 30%;\n    }\n    .col-2 {\n      width: 30%;\n    }\n    .col-3 {\n      width: 30%;\n    }\n    .col-4 {\n      width: 10%;\n    }\n  }\n"]);return h=function(){return e},e}function v(){var e=(0,o.Z)(["\n  .active-ballot-table {\n    width: 100%;\n    & > tr {\n      td {\n        vertical-align: top;\n        padding-bottom: 30px;\n      }\n      td:nth-child(1) {\n        width: 25%;\n      }\n      td:nth-child(2) {\n        width: 75%;\n      }\n    }\n  }\n"]);return v=function(){return e},e}var j=c.ZP.div(v()),E=c.ZP.div(h());n.default=(0,d.a)((function(){var e,n,t,o=(0,a.useState)(),c=o[0],d=o[1],h=(0,a.useState)([]),v=h[0],x=h[1],_=(0,a.useState)(1),b=_[0],m=_[1],T=(0,a.useState)(!0),g=T[0],A=T[1],S=l.default.query.id,L=(0,u.I0)(),N=function(){L((0,p.TT)({id:S,page:b},(function(e,n){A(n),x((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(e))})),m((function(e){return e+1}))})))};return(0,a.useEffect)((function(){L((0,p.Lx)(S,(function(e){d(e)}))),N()}),[S]),(0,r.jsx)(s.Z,{children:(0,r.jsx)(f.Zb,{className:"h-full lg:pl-24 lg:py-11 lg:shadow-2xl",noShadow:!0,children:(0,r.jsxs)("div",{className:"w-full h-full",children:[(0,r.jsxs)("div",{className:"card-header lg:mr-24 lg:h-70px",children:[(0,r.jsx)(f.xE,{href:"/admin/ballots/detail/".concat(S),text:"Back",force:!0}),(0,r.jsx)("div",{className:"flex justify-between items-center mb-3.5",children:(0,r.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium",children:"Current Votes"})}),(0,r.jsx)("div",{className:"border-primary border-b-2"})]}),(0,r.jsxs)("div",{className:"card-body pt-8 pb-28 overflow-y-auto lg:h-100%-70px",children:[(0,r.jsx)(j,{className:"lg:pr-24",children:(0,r.jsxs)("table",{className:"active-ballot-table border-0",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Ballot Title:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:null===c||void 0===c?void 0:c.title})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Start Time:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:(0,y.p)(null===c||void 0===c?void 0:c.created_at,"dd/MM/yyyy - hh:mm aaa")})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Time Remaining:"})}),(0,r.jsx)("td",{children:c&&(0,r.jsx)(f.ZF,{className:"w-40",endTime:new Date(null===c||void 0===c?void 0:c.time_end),startTime:new Date(null===c||void 0===c?void 0:c.created_at)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Total Votes:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:null===c||void 0===c||null===(e=c.vote)||void 0===e?void 0:e.result_count})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Split:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:(0,r.jsx)(f.L3,{splitFor:null===c||void 0===c||null===(n=c.vote)||void 0===n?void 0:n.for_value,splitAgainst:null===c||void 0===c||null===(t=c.vote)||void 0===t?void 0:t.against_value})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Final Result:"})}),(0,r.jsxs)("td",{children:["active"!==(null===c||void 0===c?void 0:c.status)&&(0,r.jsx)(f.r2,{content:null===c||void 0===c?void 0:c.status,className:"uppercase"}),"active"===(null===c||void 0===c?void 0:c.status)&&"-"]})]})]})}),(0,r.jsx)(E,{className:"lg:pr-24 max-h-96",children:(0,r.jsxs)(f.iA,{className:"active-votes-table pt-3 max-h-96",onLoadMore:N,hasMore:g,dataLength:null===v||void 0===v?void 0:v.length,children:[(0,r.jsxs)(f.iA.Header,{children:[(0,r.jsx)(f.iA.HeaderCell,{children:(0,r.jsx)("p",{className:"py-2",children:"User ID"})}),(0,r.jsx)(f.iA.HeaderCell,{children:(0,r.jsx)("p",{className:"py-2",children:"Email"})}),(0,r.jsx)(f.iA.HeaderCell,{children:(0,r.jsx)("p",{className:"py-2",children:"Time of Vote"})}),(0,r.jsx)(f.iA.HeaderCell,{children:(0,r.jsx)("p",{className:"py-2",children:"Direction"})})]}),(0,r.jsx)(f.iA.Body,{children:v.map((function(e,n){return(0,r.jsxs)(f.iA.BodyRow,{children:[(0,r.jsx)(f.iA.BodyCell,{children:(0,r.jsx)("p",{children:e.user_id})}),(0,r.jsx)(f.iA.BodyCell,{children:(0,r.jsx)("p",{className:"truncate",children:e.user.email})}),(0,r.jsxs)(f.iA.BodyCell,{children:[(0,r.jsx)("p",{children:(0,y.p)(e.created_at,"hh:mmaaa")}),(0,r.jsx)("p",{children:(0,y.p)(e.created_at,"dd/MM/yyyy")})]}),(0,r.jsx)(f.iA.BodyCell,{children:(0,r.jsx)(f.r2,{className:"capitalize",content:e.type})})]},n)}))})]})})]})]})})})}),"final-all")},9586:function(e,n,t){"use strict";t.d(n,{p:function(){return i},e:function(){return o}});var r=t(8661),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",t=new Date(e);return"Invalid Date"===t.toString()?t.toString():(0,r.Z)(t,n)},o=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},7028:function(e,n,t){"use strict";t.d(n,{lL:function(){return r},yW:function(){return i},nE:function(){return o},FH:function(){return l},C4:function(){return a},iA:function(){return u},Xp:function(){return c},ed:function(){return d},c8:function(){return s},fX:function(){return f},Od:function(){return p},fI:function(){return y},yG:function(){return h},Lx:function(){return v},TT:function(){return j},I2:function(){return E},MC:function(){return x},CQ:function(){return _},ie:function(){return b},Hi:function(){return m},zb:function(){return T},QT:function(){return g},cX:function(){return A},b$:function(){return S},y3:function(){return L},Nk:function(){return N},Xs:function(){return R},O2:function(){return I},J5:function(){return O},og:function(){return C},Xj:function(){return w},lf:function(){return D},D:function(){return M},Vk:function(){return P}});var r=function(e,n){return{type:"GET_LIST_MEMBER",payload:e,callback:n}},i=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},o=function(e){return{type:"GET_USER_DETAIL",payload:e}},l=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},a=function(e){return{type:"GET_USER_KYC_INFO",payload:e}},u=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},c=function(e){return{type:"APPROVE_KYC",payload:e}},d=function(e){return{type:"DENY_KYC",payload:e}},s=function(e,n){return{type:"GET_LIST_INTAKE",payload:e,successCb:n}},f=function(e,n){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:n}},p=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},y=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},h=function(e,n){return{type:"GET_BALLOTS",payload:e,callback:n}},v=function(e,n){return{type:"GET_BALLOT_DETAIL",payload:e,callback:n}},j=function(e,n){return{type:"GET_BALLOT_VOTES",payload:e,callback:n}},E=function(e,n,t){return{type:"SUBMIT_BALLOT",payload:e,resolve:n,reject:t}},x=function(e,n,t){return{type:"CANCEL_BALLOT",payload:e,resolve:n,reject:t}},_=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},b=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},m=function(e,n,t){return{type:"APPROVE_USER",payload:e,resolve:n,reject:t}},T=function(e,n,t){return{type:"RESET_USER",payload:e,resolve:n,reject:t}},g=function(e,n,t){return{type:"BAN_USER",payload:e,resolve:n,reject:t}},A=function(e,n,t){return{type:"BAN_VERIFIED_USER",payload:e,resolve:n,reject:t}},S=function(e,n,t){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:n,reject:t}},L=function(e,n,t){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:n,reject:t}},N=function(e,n,t){return{type:"APPROVE_USER_AML",payload:e,resolve:n,reject:t}},R=function(e,n,t){return{type:"RESET_USER_AML",payload:e,resolve:n,reject:t}},I=function(e,n,t){return{type:"APPROVE_USER_KYC",payload:e,resolve:n,reject:t}},O=function(e,n,t){return{type:"RESET_USER_KYC",payload:e,resolve:n,reject:t}},C=function(e,n){return{type:"GET_EMAILER_DATA",resolve:e,reject:n}},w=function(e,n,t){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:n,reject:t}},D=function(e,n,t){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:n,reject:t}},M=function(e,n,t){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:n,reject:t}},P=function(e,n,t){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:n,reject:t}}},4184:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/ballots/detail/[id]/current-votes",function(){return t(6407)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,8661,1878,5955],(function(){return n=4184,e(e.s=n);var n}));var n=e.O();_N_E=n}]);