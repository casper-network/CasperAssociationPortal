(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1381],{24015:function(e,n,r){"use strict";r.d(n,{a:function(){return d}});var t=r(96156),i=r(85893),u=r(67294),o=r(11163),c=r(49226);var l=r(44791);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var d=function(e,n){return function(r){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,n=void 0===e?"public":e,r=(0,c.v9)((function(e){return e.authReducer.userInfo}));return(0,u.useEffect)((function(){if("public"!==n&&n&&r)if(r&&null!==r&&void 0!==r&&r.isLoggedIn)if("member"===r.role){if("auth"===n)return"verifying"===r.period&&o.default.push("/verify-email"),"onboarding"===r.period&&o.default.push("/onboard"),void("final"===r.period&&o.default.push("/dashboard"));if("verifying"===n)return"onboarding"===r.period&&o.default.push("/onboard"),void("final"===r.period&&o.default.push("/dashboard"));if("onboarding"===n)return"verifying"===r.period&&o.default.push("/verify-email"),void("final"===r.period&&o.default.push("/dashboard"));if("final-member"===n||"final-all"===n)return"verifying"===r.period&&o.default.push("/verify-email"),void("onboarding"===r.period&&o.default.push("/onboard"));"final-admin"===n&&("verifying"===r.period&&o.default.push("/verify-email"),"onboarding"===r.period&&o.default.push("/onboard"),"final"===r.period&&o.default.push("/dashboard"))}else["admin","sub-admin"].includes(r.role)&&"final-all"!==n&&"final-admin"!==n&&o.default.push("/admin/dashboard");else"auth"!==n&&o.default.push("/login")}),[r,n]),{user:r}}({urlType:n}).user;if(n&&"public"!==n){if(!d)return(0,i.jsx)(l.Z,{});if("auth"===n&&d.isLoggedIn)return(0,i.jsx)(l.Z,{});if("auth"!==n&&!d.isLoggedIn)return(0,i.jsx)(l.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(n)&&"final"!==d.period)return(0,i.jsx)(l.Z,{});if(["verifying"].includes(n)&&"verifying"!==d.period)return(0,i.jsx)(l.Z,{});if(["onboarding"].includes(n)&&"onboarding"!==d.period)return(0,i.jsx)(l.Z,{})}if(["admin","sub-admin"].includes(d.role)&&["verifying","onboarding","final-member"].includes(n))return(0,i.jsx)(l.Z,{})}return(0,i.jsx)(e,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},r))}}},96407:function(e,n,r){"use strict";r.r(n);var t=r(85893),i=r(87329),u=r(32465),o=r(11163),c=r(67294),l=r(49226),a=r(29163),d=r(24015),s=r(37124),f=r(12245),p=r(87028),y=r(29586);function E(){var e=(0,u.Z)(["\n  .active-votes-table {\n    .col-1 {\n      width: 30%;\n    }\n    .col-2 {\n      width: 30%;\n    }\n    .col-3 {\n      width: 30%;\n    }\n    .col-4 {\n      width: 10%;\n    }\n  }\n"]);return E=function(){return e},e}function _(){var e=(0,u.Z)(["\n  .active-ballot-table {\n    width: 100%;\n    & > tr {\n      td {\n        vertical-align: top;\n        padding-bottom: 30px;\n      }\n      td:nth-child(1) {\n        width: 25%;\n      }\n      td:nth-child(2) {\n        width: 75%;\n      }\n    }\n  }\n"]);return _=function(){return e},e}var v=a.ZP.div(_()),j=a.ZP.div(E());n.default=(0,d.a)((function(){var e,n,r,u=(0,c.useState)(),a=u[0],d=u[1],E=(0,c.useState)([]),_=E[0],T=E[1],h=(0,c.useState)(1),I=h[0],A=h[1],S=(0,c.useState)(!0),x=S[0],N=S[1],R=o.default.query.id,b=(0,l.I0)(),m=function(){b((0,p.TT)({id:R,page:I},(function(e,n){N(n),T((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(e))})),A((function(e){return e+1}))})))};return(0,c.useEffect)((function(){b((0,p.Lx)(R,(function(e){d(e)}))),m()}),[R]),(0,t.jsx)(s.Z,{children:(0,t.jsx)(f.Zb,{className:"h-full lg:pl-card lg:py-5 lg:shadow-2xl",noShadow:!0,children:(0,t.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,t.jsx)("div",{className:"card-header lg:mr-card border-primary border-b-2",children:(0,t.jsxs)("div",{className:"h-11 mb-3",children:[(0,t.jsx)(f.xE,{href:"/admin/ballots/detail/".concat(R),text:"Back",force:!0}),(0,t.jsx)("h3",{className:"text-dark2 text-xl font-medium",children:"Current Votes"})]})}),(0,t.jsxs)("div",{className:"card-body pt-8 overflow-y-auto flex-1 min-h-0",children:[(0,t.jsx)(v,{className:"lg:pr-card",children:(0,t.jsxs)("table",{className:"active-ballot-table border-0",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:"Ballot Title:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:null===a||void 0===a?void 0:a.title})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:"Start Time:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:(0,y.p)(null===a||void 0===a?void 0:a.created_at,"dd/MM/yyyy - hh:mm aaa")})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:"Time Remaining:"})}),(0,t.jsx)("td",{children:a&&(0,t.jsx)(f.ZF,{className:"w-40",endTime:new Date(null===a||void 0===a?void 0:a.time_end),startTime:new Date(null===a||void 0===a?void 0:a.created_at)})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:"Total Votes:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:null===a||void 0===a||null===(e=a.vote)||void 0===e?void 0:e.result_count})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:"Split:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{children:(0,t.jsx)(f.L3,{splitFor:null===a||void 0===a||null===(n=a.vote)||void 0===n?void 0:n.for_value,splitAgainst:null===a||void 0===a||null===(r=a.vote)||void 0===r?void 0:r.against_value})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:"Final Result:"})}),(0,t.jsxs)("td",{children:["active"!==(null===a||void 0===a?void 0:a.status)&&(0,t.jsx)(f.r2,{content:null===a||void 0===a?void 0:a.status,className:"uppercase"}),"active"===(null===a||void 0===a?void 0:a.status)&&"-"]})]})]})}),(0,t.jsx)(j,{className:"lg:pr-card max-h-96",children:(0,t.jsxs)(f.iA,{className:"active-votes-table pt-3 max-h-96",onLoadMore:m,hasMore:x,dataLength:null===_||void 0===_?void 0:_.length,children:[(0,t.jsxs)(f.iA.Header,{children:[(0,t.jsx)(f.iA.HeaderCell,{children:(0,t.jsx)("p",{className:"py-2",children:"User ID"})}),(0,t.jsx)(f.iA.HeaderCell,{children:(0,t.jsx)("p",{className:"py-2",children:"Email"})}),(0,t.jsx)(f.iA.HeaderCell,{children:(0,t.jsx)("p",{className:"py-2",children:"Time of Vote"})}),(0,t.jsx)(f.iA.HeaderCell,{children:(0,t.jsx)("p",{className:"py-2",children:"Direction"})})]}),(0,t.jsx)(f.iA.Body,{className:"padding-tracker",children:_.map((function(e,n){return(0,t.jsxs)(f.iA.BodyRow,{children:[(0,t.jsx)(f.iA.BodyCell,{children:(0,t.jsx)("p",{children:e.user_id})}),(0,t.jsx)(f.iA.BodyCell,{children:(0,t.jsx)("p",{className:"truncate",children:e.user.email})}),(0,t.jsxs)(f.iA.BodyCell,{children:[(0,t.jsx)("p",{children:(0,y.p)(e.created_at,"hh:mmaaa")}),(0,t.jsx)("p",{children:(0,y.p)(e.created_at,"dd/MM/yyyy")})]}),(0,t.jsx)(f.iA.BodyCell,{children:(0,t.jsx)(f.r2,{className:"capitalize",content:e.type})})]},n)}))})]})})]})]})})})}),"final-all")},29586:function(e,n,r){"use strict";r.d(n,{p:function(){return i},e:function(){return u}});var t=r(38661),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",r=new Date(e);return"Invalid Date"===r.toString()?r.toString():(0,t.Z)(r,n)},u=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},87028:function(e,n,r){"use strict";r.d(n,{lL:function(){return t},yW:function(){return i},nE:function(){return u},Eg:function(){return o},BQ:function(){return c},FH:function(){return l},iA:function(){return a},c8:function(){return d},fX:function(){return s},Od:function(){return f},fI:function(){return p},yG:function(){return y},Lx:function(){return E},TT:function(){return _},I2:function(){return v},qG:function(){return j},hy:function(){return T},MC:function(){return h},CQ:function(){return I},ie:function(){return A},kB:function(){return S},Pj:function(){return x},ZZ:function(){return N},nQ:function(){return R},yT:function(){return b},sW:function(){return m},Dj:function(){return O},li:function(){return L},tA:function(){return D},Hi:function(){return C},zb:function(){return g},QT:function(){return G},cX:function(){return M},b$:function(){return U},y3:function(){return P},Nk:function(){return B},Xs:function(){return w},O2:function(){return V},J5:function(){return Z},bG:function(){return k},og:function(){return F},Xj:function(){return K},lf:function(){return H},D:function(){return W},Vk:function(){return X},M6:function(){return Q},Ng:function(){return Y},lN:function(){return q},VO:function(){return z},R$:function(){return $},q6:function(){return J},Li:function(){return ee},wN:function(){return ne},t:function(){return re},uy:function(){return te},HC:function(){return ie},AL:function(){return ue},xC:function(){return oe},kF:function(){return ce},ud:function(){return le},Vi:function(){return ae},_i:function(){return de}});var t=function(e,n){return{type:"GET_LIST_MEMBER",payload:e,callback:n}},i=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},u=function(e){return{type:"GET_USER_DETAIL",payload:e}},o=function(e,n,r){return{type:"GET_USER_METRICS",payload:e,resolve:n,reject:r}},c=function(e,n,r){return{type:"UPDATE_USER_METRICS",payload:e,resolve:n,reject:r}},l=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},a=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},d=function(e,n){return{type:"GET_LIST_INTAKE",payload:e,successCb:n}},s=function(e,n){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:n}},f=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},p=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},y=function(e,n){return{type:"GET_BALLOTS",payload:e,callback:n}},E=function(e,n){return{type:"GET_BALLOT_DETAIL",payload:e,callback:n}},_=function(e,n){return{type:"GET_BALLOT_VOTES",payload:e,callback:n}},v=function(e,n,r){return{type:"SUBMIT_BALLOT",payload:e,resolve:n,reject:r}},j=function(e,n,r){return{type:"SUBMIT_PERK",payload:e,resolve:n,reject:r}},T=function(e,n,r){return{type:"EDIT_PERK",payload:e,resolve:n,reject:r}},h=function(e,n,r){return{type:"CANCEL_BALLOT",payload:e,resolve:n,reject:r}},I=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},A=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},S=function(e,n){return{type:"GET_SUBADMINS",payload:e,callback:n}},x=function(e,n,r){return{type:"REGISTER_SUB_ADMIN",payload:e,resolve:n,reject:r}},N=function(e,n){return{type:"GET_IP_HISTORIES",payload:e,callback:n}},R=function(e,n,r){return{type:"INVITE_SUBADMIN",email:e,resolve:n,reject:r}},b=function(e,n,r){return{type:"REVOKE_SUBADMIN",id:e,resolve:n,reject:r}},m=function(e,n,r){return{type:"UNDO_REVOKE_SUBADMIN",id:e,resolve:n,reject:r}},O=function(e,n,r){return{type:"RESET_SUBADMIN_PASSWORD",id:e,resolve:n,reject:r}},L=function(e,n,r){return{type:"RESEND_INVITE_SUBADMIN",id:e,resolve:n,reject:r}},D=function(e,n,r){return{type:"CHANGE_SUBADMIN_PERMISSIONS",id:e,payload:n,callback:r}},C=function(e,n,r){return{type:"APPROVE_USER",payload:e,resolve:n,reject:r}},g=function(e,n,r){return{type:"RESET_USER",payload:e,resolve:n,reject:r}},G=function(e,n,r){return{type:"BAN_USER",payload:e,resolve:n,reject:r}},M=function(e,n,r){return{type:"BAN_VERIFIED_USER",payload:e,resolve:n,reject:r}},U=function(e,n,r){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:n,reject:r}},P=function(e,n,r){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:n,reject:r}},B=function(e,n,r){return{type:"APPROVE_USER_AML",payload:e,resolve:n,reject:r}},w=function(e,n,r){return{type:"RESET_USER_AML",payload:e,resolve:n,reject:r}},V=function(e,n,r){return{type:"APPROVE_USER_KYC",payload:e,resolve:n,reject:r}},Z=function(e,n,r){return{type:"RESET_USER_KYC",payload:e,resolve:n,reject:r}},k=function(e,n,r){return{type:"ACTIVATE_VERIFIED_STATUS",payload:e,resolve:n,reject:r}},F=function(e,n){return{type:"GET_EMAILER_DATA",resolve:e,reject:n}},K=function(e,n,r){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:n,reject:r}},H=function(e,n,r){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:n,reject:r}},W=function(e,n,r){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:n,reject:r}},X=function(e,n,r){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:n,reject:r}},Q=function(e,n,r){return{type:"GET_LIST_PERKS",payload:e,resolve:n,reject:r}},Y=function(e,n,r){return{type:"GET_ACTIVE_PERKS",payload:e,resolve:n,reject:r}},q=function(e,n,r){return{type:"GET_LIST_PERK_ENGAGEMENT",payload:e,resolve:n,reject:r}},z=function(e,n,r){return{type:"GET_PERK_DETAIL",payload:e,resolve:n,reject:r}},$=function(e,n){return{type:"GET_WARNING_METRICS",resolve:e,reject:n}},J=function(e,n,r){return{type:"GET_ACTIVE_PERK_DETAIL",payload:e,resolve:n,reject:r}},ee=function(e,n,r){return{type:"UPDATE_WARNING_METRICS",payload:e,resolve:n,reject:r}},ne=function(e,n,r){return{type:"ADD_NOTIFICATION",payload:e,resolve:n,reject:r}},re=function(e,n,r){return{type:"EDIT_NOTIFICATION",payload:e,resolve:n,reject:r}},te=function(e,n,r){return{type:"GET_NOTIFICATION_DETAIL",payload:e,resolve:n,reject:r}},ie=function(e,n,r){return{type:"GET_LIST_NOTIFICATIONS",payload:e,resolve:n,reject:r}},ue=function(e,n){return{type:"GET_NOTIFICATION_VIEW_LOGS",payload:e,resolve:n}},oe=function(e,n){return{type:"GET_HIGH_PRIORITY_NOTIFICATION",resolve:e,reject:n}},ce=function(e,n,r){return{type:"GET_ADMIN_DASHBOARD",payload:e,resolve:n,reject:r}},le=function(e,n,r){return{type:"GET_NODES_FROM_ADMIN",payload:e,resolve:n,reject:r}},ae=function(e,n){return{type:"GET_LOCK_PAGE_RULES",resolve:e,reject:n}},de=function(e,n,r){return{type:"UPDATE_LOCK_PAGE_RULES",payload:e,resolve:n,reject:r}}},54184:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/ballots/detail/[id]/current-votes",function(){return r(96407)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,8661,1045,804],(function(){return n=54184,e(e.s=n);var n}));var n=e.O();_N_E=n}]);