(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9635],{11849:function(e,n,r){"use strict";r.r(n);var t=r(85893),o=r(87757),u=r.n(o),c=r(92137),i=r(96156),l=r(32465),a=r(11163),s=r(49226),d=r(67294),p=r(29163),f=r(25955),y=r(89),E=r(87028),_=r(29586),j=r(64605);function T(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function I(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?T(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function A(){var e=(0,l.Z)(["\n  .members-table {\n    .col-1 {\n      width: 8%;\n    }\n    .col-2 {\n      width: 9%;\n    }\n    .col-3 {\n      width: 20%;\n    }\n    .col-4 {\n      width: 10%;\n    }\n    .col-5 {\n      width: 10%;\n    }\n    .col-6 {\n      width: 13%;\n    }\n    .col-7 {\n      width: 8%;\n    }\n    .col-8 {\n      width: 10%;\n    }\n    .col-9 {\n      width: 12%;\n    }\n  }\n"]);return A=function(){return e},e}var v=p.ZP.div(A());n.default=function(){var e=(0,j.x)(),n=e.data,r=e.register,o=e.hasMore,i=e.appendData,l=e.resetData,p=e.setHasMore,T=e.page,A=e.setPage,h=e.params,S=e.setParams,N=(0,s.I0)(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;N((0,E.lL)(I({page:e},n),(function(e,n){p(n),i(e),A((function(e){return e+1}))})))};(0,d.useEffect)((function(){x()}),[]);var R=function(){var e=(0,c.Z)(u().mark((function e(n,r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t={sort_key:n,sort_direction:r}),l(),x(1,t);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return(0,t.jsx)(f.Z,{children:(0,t.jsx)(y.Zb,{className:"h-full px-24 py-7",children:(0,t.jsxs)("div",{className:"bg-transparent h-full",children:[(0,t.jsx)("div",{className:"w-full h-70px",children:(0,t.jsxs)("div",{className:"lg:h-70px flex flex-col justify-center",children:[(0,t.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-2.5",children:"User List"}),(0,t.jsx)("p",{className:"text-sm text-gray pb-3.5",children:"Click any user for more details"}),(0,t.jsx)("div",{className:"border-primary border-b-2"})]})}),(0,t.jsx)("div",{className:"flex flex-col h-100%-70px",children:(0,t.jsx)(v,{className:"h-full",children:(0,t.jsxs)(y.iA,I(I({},r),{},{className:"members-table pt-3 h-full",onLoadMore:x,hasMore:o,dataLength:null===n||void 0===n?void 0:n.length,onSort:R,children:[(0,t.jsxs)(y.iA.Header,{children:[(0,t.jsx)(y.iA.HeaderCell,{sortKey:"id",children:(0,t.jsx)("p",{children:"User ID"})}),(0,t.jsx)(y.iA.HeaderCell,{children:(0,t.jsxs)("p",{children:["Membership ",(0,t.jsx)("br",{})," Status"]})}),(0,t.jsx)(y.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"User Email"})}),(0,t.jsx)(y.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Entity Name"})}),(0,t.jsx)(y.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"First/Last Name"})}),(0,t.jsx)(y.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Node Address"})}),(0,t.jsx)(y.iA.HeaderCell,{children:(0,t.jsxs)("p",{children:["CSPR",(0,t.jsx)("br",{})," Delegated"]})}),(0,t.jsx)(y.iA.HeaderCell,{children:(0,t.jsxs)("p",{children:["Registration",(0,t.jsx)("br",{})," Date"]})}),(0,t.jsx)(y.iA.HeaderCell,{children:(0,t.jsx)("p",{children:"Further Details"})})]}),(0,t.jsx)(y.iA.Body,{className:"lg:-mr-24 lg:pr-24",children:n.map((function(e,n){return(0,t.jsxs)(y.iA.BodyRow,{children:[(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsx)("p",{children:null===e||void 0===e?void 0:e.id})}),(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsx)("p",{children:null===e||void 0===e?void 0:e.member_status})}),(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsx)("p",{className:"truncate",children:null===e||void 0===e?void 0:e.email})}),(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsx)("p",{className:"truncate",children:null!==e&&void 0!==e&&e.entity_name?null===e||void 0===e?void 0:e.entity_name:"-"})}),(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsxs)("p",{className:"truncate",children:[null===e||void 0===e?void 0:e.first_name," ",null===e||void 0===e?void 0:e.last_name]})}),(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsx)("p",{children:(0,_.e)(null===e||void 0===e?void 0:e.public_address_node)})}),(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsx)("p",{children:"2,000,250"})}),(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsx)("p",{children:(0,_.p)(null===e||void 0===e?void 0:e.created_at)})}),(0,t.jsx)(y.iA.BodyCell,{children:(0,t.jsx)("button",{type:"button",onClick:function(){return a.default.push("/admin/users/".concat(null===e||void 0===e?void 0:e.id))},className:"px-4 py-1 text-sm text-white rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",children:"View/Manage"})})]},n)}))})]}))})})]})})})}},29586:function(e,n,r){"use strict";r.d(n,{p:function(){return o},e:function(){return u}});var t=r(38661),o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",r=new Date(e);return"Invalid Date"===r.toString()?r.toString():(0,t.Z)(r,n)},u=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},87028:function(e,n,r){"use strict";r.d(n,{lL:function(){return t},yW:function(){return o},nE:function(){return u},Eg:function(){return c},BQ:function(){return i},FH:function(){return l},C4:function(){return a},iA:function(){return s},Xp:function(){return d},ed:function(){return p},c8:function(){return f},fX:function(){return y},Od:function(){return E},fI:function(){return _},yG:function(){return j},Lx:function(){return T},TT:function(){return I},I2:function(){return A},qG:function(){return v},hy:function(){return h},MC:function(){return S},CQ:function(){return N},ie:function(){return x},kB:function(){return R},Pj:function(){return C},ZZ:function(){return O},nQ:function(){return L},yT:function(){return D},sW:function(){return m},Dj:function(){return b},li:function(){return G},tA:function(){return M},Hi:function(){return P},zb:function(){return U},QT:function(){return B},cX:function(){return g},b$:function(){return w},y3:function(){return k},Nk:function(){return K},Xs:function(){return V},O2:function(){return H},J5:function(){return F},og:function(){return Z},Xj:function(){return Y},lf:function(){return X},D:function(){return W},Vk:function(){return Q},M6:function(){return q},Ng:function(){return $},lN:function(){return z},VO:function(){return J},R$:function(){return ee},q6:function(){return ne},Li:function(){return re},wN:function(){return te},t:function(){return oe},uy:function(){return ue},HC:function(){return ce},AL:function(){return ie},xC:function(){return le}});var t=function(e,n){return{type:"GET_LIST_MEMBER",payload:e,callback:n}},o=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},u=function(e){return{type:"GET_USER_DETAIL",payload:e}},c=function(e,n,r){return{type:"GET_USER_METRICS",payload:e,resolve:n,reject:r}},i=function(e,n,r){return{type:"UPDATE_USER_METRICS",payload:e,resolve:n,reject:r}},l=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},a=function(e){return{type:"GET_USER_KYC_INFO",payload:e}},s=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},d=function(e){return{type:"APPROVE_KYC",payload:e}},p=function(e){return{type:"DENY_KYC",payload:e}},f=function(e,n){return{type:"GET_LIST_INTAKE",payload:e,successCb:n}},y=function(e,n){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:n}},E=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},_=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},j=function(e,n){return{type:"GET_BALLOTS",payload:e,callback:n}},T=function(e,n){return{type:"GET_BALLOT_DETAIL",payload:e,callback:n}},I=function(e,n){return{type:"GET_BALLOT_VOTES",payload:e,callback:n}},A=function(e,n,r){return{type:"SUBMIT_BALLOT",payload:e,resolve:n,reject:r}},v=function(e,n,r){return{type:"SUBMIT_PERK",payload:e,resolve:n,reject:r}},h=function(e,n,r){return{type:"EDIT_PERK",payload:e,resolve:n,reject:r}},S=function(e,n,r){return{type:"CANCEL_BALLOT",payload:e,resolve:n,reject:r}},N=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},x=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},R=function(e,n){return{type:"GET_SUBADMINS",payload:e,callback:n}},C=function(e,n,r){return{type:"REGISTER_SUB_ADMIN",payload:e,resolve:n,reject:r}},O=function(e,n){return{type:"GET_IP_HISTORIES",payload:e,callback:n}},L=function(e,n,r){return{type:"INVITE_SUBADMIN",email:e,resolve:n,reject:r}},D=function(e,n,r){return{type:"REVOKE_SUBADMIN",id:e,resolve:n,reject:r}},m=function(e,n,r){return{type:"UNDO_REVOKE_SUBADMIN",id:e,resolve:n,reject:r}},b=function(e,n,r){return{type:"RESET_SUBADMIN_PASSWORD",id:e,resolve:n,reject:r}},G=function(e,n,r){return{type:"RESEND_INVITE_SUBADMIN",id:e,resolve:n,reject:r}},M=function(e,n,r){return{type:"CHANGE_SUBADMIN_PERMISSIONS",id:e,payload:n,callback:r}},P=function(e,n,r){return{type:"APPROVE_USER",payload:e,resolve:n,reject:r}},U=function(e,n,r){return{type:"RESET_USER",payload:e,resolve:n,reject:r}},B=function(e,n,r){return{type:"BAN_USER",payload:e,resolve:n,reject:r}},g=function(e,n,r){return{type:"BAN_VERIFIED_USER",payload:e,resolve:n,reject:r}},w=function(e,n,r){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:n,reject:r}},k=function(e,n,r){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:n,reject:r}},K=function(e,n,r){return{type:"APPROVE_USER_AML",payload:e,resolve:n,reject:r}},V=function(e,n,r){return{type:"RESET_USER_AML",payload:e,resolve:n,reject:r}},H=function(e,n,r){return{type:"APPROVE_USER_KYC",payload:e,resolve:n,reject:r}},F=function(e,n,r){return{type:"RESET_USER_KYC",payload:e,resolve:n,reject:r}},Z=function(e,n){return{type:"GET_EMAILER_DATA",resolve:e,reject:n}},Y=function(e,n,r){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:n,reject:r}},X=function(e,n,r){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:n,reject:r}},W=function(e,n,r){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:n,reject:r}},Q=function(e,n,r){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:n,reject:r}},q=function(e,n,r){return{type:"GET_LIST_PERKS",payload:e,resolve:n,reject:r}},$=function(e,n,r){return{type:"GET_ACTIVE_PERKS",payload:e,resolve:n,reject:r}},z=function(e,n,r){return{type:"GET_LIST_PERK_ENGAGEMENT",payload:e,resolve:n,reject:r}},J=function(e,n,r){return{type:"GET_PERK_DETAIL",payload:e,resolve:n,reject:r}},ee=function(e,n){return{type:"GET_WARNING_METRICS",resolve:e,reject:n}},ne=function(e,n,r){return{type:"GET_ACTIVE_PERK_DETAIL",payload:e,resolve:n,reject:r}},re=function(e,n,r){return{type:"UPDATE_WARNING_METRICS",payload:e,resolve:n,reject:r}},te=function(e,n,r){return{type:"ADD_NOTIFICATION",payload:e,resolve:n,reject:r}},oe=function(e,n,r){return{type:"EDIT_NOTIFICATION",payload:e,resolve:n,reject:r}},ue=function(e,n,r){return{type:"GET_NOTIFICATION_DETAIL",payload:e,resolve:n,reject:r}},ce=function(e,n,r){return{type:"GET_LIST_NOTIFICATIONS",payload:e,resolve:n,reject:r}},ie=function(e,n){return{type:"GET_NOTIFICATION_VIEW_LOGS",payload:e,resolve:n}},le=function(e,n){return{type:"GET_HIGH_PRIORITY_NOTIFICATION",resolve:e,reject:n}}},82475:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users",function(){return r(11849)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,8661,7010,5955],(function(){return n=82475,e(e.s=n);var n}));var n=e.O();_N_E=n}]);