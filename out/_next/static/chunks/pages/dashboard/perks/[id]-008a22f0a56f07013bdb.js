(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7699],{99310:function(e,t,n){"use strict";var r,o=n(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.Z=function(e){return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 19.997 14.452"},e),r||(r=o.createElement("path",{fill:"none",stroke:"currentColor",d:"M17.875 2.121L7.044 12.952 2.121 8.029",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3})))}},9420:function(e,t,n){"use strict";var r,o=n(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.Z=function(e){return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 41.191 41.191"},e),r||(r=o.createElement("path",{"data-name":"Icon metro-cross",d:"M40.815 33.092l-12.5-12.5 12.5-12.5a1.29 1.29 0 000-1.82l-5.9-5.9a1.291 1.291 0 00-1.82 0l-12.5 12.5L8.099.372a1.29 1.29 0 00-1.82 0l-5.9 5.9a1.29 1.29 0 000 1.82l12.5 12.5-12.5 12.5a1.29 1.29 0 000 1.82l5.9 5.9a1.29 1.29 0 001.82 0l12.5-12.5 12.5 12.5a1.29 1.29 0 001.82 0l5.9-5.9a1.29 1.29 0 000-1.82z",fill:"currentColor"})))}},22163:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(85893),o=n(12245),i=function(e){var t,n,i=e.perk;return(0,r.jsxs)("div",{className:"flex py-6 gap-8",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/4 h-48",children:null!==i&&void 0!==i&&null!==(t=i.image)&&void 0!==t&&t.url?(0,r.jsx)("img",{className:"object-cover w-full h-full bg-gray1",src:(null===i||void 0===i||null===(n=i.image)||void 0===n?void 0:n.url)||"",alt:""}):(0,r.jsx)("div",{className:"bg-gray1 w-full h-full"})}),(0,r.jsxs)("div",{className:"w-full lg:w-3/4",children:[(0,r.jsxs)("div",{className:"flex text-primary text-xs mb-6",children:[(0,r.jsx)("span",{className:"pr-1",children:"Time Remaining:"}),(0,r.jsx)(o.ZF,{endTime:new Date(null===i||void 0===i?void 0:i.end_date),hideProgressBar:!0})]}),(0,r.jsx)("h4",{className:"font-bold mb-4 line-clamp-2",children:null===i||void 0===i?void 0:i.title}),(0,r.jsx)("p",{children:null===i||void 0===i?void 0:i.content})]})]})}},24015:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var r=n(96156),o=n(85893),i=n(67294),l=n(11163),u=n(49226);var a=n(44791);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(e,t){return function(n){var s=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,n=(0,u.v9)((function(e){return e.authReducer.userInfo}));return(0,i.useEffect)((function(){if("public"!==t&&t&&n)if(n&&null!==n&&void 0!==n&&n.isLoggedIn)if("member"===n.role){if("auth"===t)return"verifying"===n.period&&l.default.push("/verify-email"),"onboarding"===n.period&&l.default.push("/onboard"),void("final"===n.period&&l.default.push("/dashboard"));if("verifying"===t)return"onboarding"===n.period&&l.default.push("/onboard"),void("final"===n.period&&l.default.push("/dashboard"));if("onboarding"===t)return"verifying"===n.period&&l.default.push("/verify-email"),void("final"===n.period&&l.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===n.period&&l.default.push("/verify-email"),void("onboarding"===n.period&&l.default.push("/onboard"));"final-admin"===t&&("verifying"===n.period&&l.default.push("/verify-email"),"onboarding"===n.period&&l.default.push("/onboard"),"final"===n.period&&l.default.push("/dashboard"))}else["admin","sub-admin"].includes(n.role)&&"final-all"!==t&&"final-admin"!==t&&l.default.push("/admin/dashboard");else"auth"!==t&&l.default.push("/login")}),[n,t]),{user:n}}({urlType:t}).user;if(t&&"public"!==t){if(!s)return(0,o.jsx)(a.Z,{});if("auth"===t&&s.isLoggedIn)return(0,o.jsx)(a.Z,{});if("auth"!==t&&!s.isLoggedIn)return(0,o.jsx)(a.Z,{});if("member"===s.role){if(["final-all","final-member"].includes(t)&&"final"!==s.period)return(0,o.jsx)(a.Z,{});if(["verifying"].includes(t)&&"verifying"!==s.period)return(0,o.jsx)(a.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==s.period)return(0,o.jsx)(a.Z,{})}if(["admin","sub-admin"].includes(s.role)&&["verifying","onboarding","final-member"].includes(t))return(0,o.jsx)(a.Z,{})}return(0,o.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}}},96002:function(e,t,n){"use strict";n.d(t,{q:function(){return y}});var r=n(85893),o=n(96156),i=n(67294),l=n(49226),u=n(41664),a=n(8517),c=n(4478),s=n(99310),d=n(9420);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e,t){return function(n){var o=(0,l.I0)(),f=(0,l.v9)((function(e){return e.authReducer.userInfo})),y=(0,i.useState)(null),h=y[0],m=y[1],_=(0,i.useState)({}),v=_[0],j=_[1],x=(0,c.R)(),E=x.setDialog,b=x.onClosed;(0,i.useEffect)((function(){["admin","sub-admin"].includes(f.role)||o((0,a.ko)((function(e){m(e)}),(function(){})))}),[f]),(0,i.useEffect)((function(){if(h){var e,n,r={};h.kyc_not_verify.includes(t)&&(r.kyc_not_verify_lock=!0),f.kyc_verified_at||(r.kyc_not_verify=!0),null!==(e=h.status_is_poor)&&void 0!==e&&e.includes(t)&&(r.node_poor_lock=!0),"Ok"!==(null===(n=h.block_height)||void 0===n?void 0:n.node_status)&&(r.node_poor=!0),j((function(e){return p(p({},e),r)}))}}),[f,h]),(0,i.useEffect)((function(){return g(v)&&E({type:"DialogCustom",data:{content:(0,r.jsxs)("div",{className:"p-16",children:[(0,r.jsx)("p",{className:"text-2xl text-center text-primary mb-5",children:"This Page is Restricted"}),(0,r.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between border-gray",children:g(v)})]})},settings:{noClose:!0}}),function(){b()}}),[v]);var g=function(e){if(e){if(e.kyc_not_verify_lock&&e.node_poor_lock)return e.kyc_not_verify||e.node_poor?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"mb-9",children:"Sorry, but to access this page you must be a KYC Verified member and have all nodes in good standing. Please solve any problems below to view and interact with this part of the platform."}),(0,r.jsx)("div",{className:"flex justify-center w-full",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"flex items-center",children:e.kyc_not_verify?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{className:"text-primary"}),(0,r.jsx)("span",{className:"text-primary pl-3",children:"KYC Verified"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{})," ",(0,r.jsx)("span",{className:"pl-3",children:"KYC Verified"})]})}),(0,r.jsx)("div",{className:"flex items-center mt-3",children:e.node_poor?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{className:"text-primary"}),(0,r.jsx)("span",{className:"text-primary pl-3",children:"Node in good standing"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("span",{className:"pl-3",children:"Node in good standing"})]})})]})}),e.kyc_not_verify&&e.node_poor&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"my-9",children:["Looks like a couple actions are needed to unlock your portal. Let's get them done! ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," First, you need to go through the KYC process to unlock all of the features in your portal. Click the button below to start. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),' After that, your node needs some help. Please see your "Membership" tab for more information on getting your node in tip-tip shape.']}),(0,r.jsx)(u.default,{href:"/dashboard/verification",children:(0,r.jsx)("button",{type:"button",className:"lg:mr-5 h-16 lg:h-11 text-lg w-8/12 text-white rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"Go to KYC page"})})]}),e.kyc_not_verify&&!e.node_poor&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"my-9",children:"Easy fix! It looks like you just need to go through the KYC process to unlock all of the features in your portal. Click the button below to start."}),(0,r.jsx)(u.default,{href:"/dashboard/verification",children:(0,r.jsx)("button",{type:"button",className:"lg:mr-5 h-16 lg:h-11 text-lg w-8/12 text-white rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"Go to KYC page"})})]}),!e.kyc_not_verify&&e.node_poor&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"my-9",children:'Uh oh! Your node needs some help. Please see your "Membership" tab for more information on getting your node in tip-tip shape.'}),(0,r.jsx)(u.default,{href:"/dashboard/membership",children:(0,r.jsx)("button",{type:"button",className:"lg:mr-5 h-16 lg:h-11 text-lg w-8/12 text-white rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"Go to Membership page"})})]})]}):null;if(e.kyc_not_verify_lock)return e.kyc_not_verify?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"mb-9",children:"Sorry, but to access this page you must be a KYC Verified member. Please solve any problems below to view and interact with this part of the platform."}),(0,r.jsxs)("div",{className:"flex text-primary items-center justify-center w-full",children:[(0,r.jsx)(d.Z,{})," ",(0,r.jsx)("span",{className:"pl-3",children:"KYC Verified"})]}),(0,r.jsx)("p",{className:"my-9",children:"Easy fix! It looks like you just need to go through the KYC process to unlock all of the features in your portal. Click the button below to start."}),(0,r.jsx)(u.default,{href:"/dashboard/verification",children:(0,r.jsx)("button",{type:"button",className:"lg:mr-5 h-16 lg:h-11 text-lg w-8/12 text-white rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"Go to KYC page"})})]}):null;if(e.node_poor_lock)return e.node_poor?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"mb-9",children:"Sorry, but to access this page you have all nodes in good standing. Please solve any problems below to view and interact with this part of the platform."}),(0,r.jsxs)("div",{className:"flex items-center text-primary justify-center w-full",children:[(0,r.jsx)(d.Z,{})," ",(0,r.jsx)("span",{className:"pl-3",children:"Node in good standing"})]}),(0,r.jsx)("p",{className:"my-9",children:'Uh oh! Your node needs some help. Please see your "Membership" tab for more information on getting your node in tip-tip shape.'}),(0,r.jsx)(u.default,{href:"/dashboard/membership",children:(0,r.jsx)("button",{type:"button",className:"lg:mr-5 h-16 lg:h-11 text-lg w-8/12 text-white rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",children:"Go to Membership page"})})]}):null}return null};return(0,r.jsx)(e,p({},n))}}},44791:function(e,t,n){"use strict";var r=n(85893),o=n(733),i=n.n(o);t.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(i(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},4478:function(e,t,n){"use strict";n.d(t,{T:function(){return f},R:function(){return s}});var r=n(96156),o=n(85893),i=n(67294),l=n(73935);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=i.createContext({setDialog:function(e){return e}}),s=function(){var e=i.useContext(c);if(!e)throw new Error("useDialog must be used within a DialogProvider");return e},d=function(e){var t,n=e.dialog,u=e.onClosed,a=n.settings?n.settings:{},c=(0,i.useState)(n.defaultValue||""),s=c[0],d=c[1],f=function(e){u(),n.afterClosed&&("DialogPrompt"===n.type?e&&n.afterClosed(s):n.afterClosed(e))};return(0,l.createPortal)((0,o.jsxs)("div",{className:"w-screen h-screen justify-center items-center flex fixed inset-0 ".concat(null!==a&&void 0!==a&&a.zIndex?"z-".concat(null===a||void 0===a?void 0:a.zIndex):""),children:[(0,o.jsx)("div",{onClick:function(){a.noClose||f(!1)},className:"backdrop-filter backdrop-blur-sm fixed inset-0 z-40"}),(0,o.jsxs)("div",{className:"".concat(a.className||""," w-full max-w-2xl shadow-2xl mx-4 relative bg-white z-50"),style:a.style,children:["Dialog"===n.type&&(0,o.jsxs)("div",{className:"p-16",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"text-2xl text-center pt-4 ".concat(a.titleClass),children:n.data.title}),!a.noClose&&(0,o.jsx)("a",{onClick:function(){return f(!1)},children:(0,o.jsx)("img",{src:"/images/ic_decline.svg",className:"absolute right-4 top-4",alt:"Cancel"})}),(0,o.jsx)("div",{className:"h-full w-full py-16 flex flex-col items-center justify-between border-gray",children:(0,o.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:n.data.content})})]}),!a.hideButton&&(0,o.jsx)("button",{type:"button",className:"transform -translate-x-1/2 absolute left-1/2 bottom-6 text-lg text-white w-1/2 lg:w-1/2 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return f(!1)},children:"OK"})]}),"DialogConfirm"===n.type&&(0,o.jsxs)("div",{className:"p-16",children:[n.data.title&&(0,o.jsx)("h3",{className:"text-2xl text-center mb-6",children:n.data.title}),(0,o.jsx)("div",{className:"h-full w-full flex mb-6 flex-col items-center justify-between border-gray",children:(0,o.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:n.data.content})}),(0,o.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,o.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return f(!1)},children:n.data.cancel}),(0,o.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return f(!0)},children:n.data.ok})]})]}),"DialogPrompt"===n.type&&(0,o.jsxs)("div",{className:"border border-gray",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"text-2xl text-center m-20",children:n.data.title}),(0,o.jsx)("div",{className:"mx-20",children:(0,o.jsx)("input",{type:"text",className:"w-full h-16 text-xl px-4 shadow-md focus:outline-none",placeholder:"Email",value:s,onChange:function(e){d(e.target.value)},name:"email"})})]}),(0,o.jsxs)("div",{className:"flex flex-row justify-center m-20",children:[(0,o.jsx)("button",(t={type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"},(0,r.Z)(t,"className","mx-2 bottom-6 text-lg text-white w-1/4 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md"),(0,r.Z)(t,"onClick",(function(){return f(!0)})),(0,r.Z)(t,"children",n.data.ok),t)),(0,o.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/4 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){return f(!1)},children:n.data.cancel})]})]}),"DialogCustom"===n.type&&(0,o.jsx)("div",{className:"rounded-xl",children:n.data.content}),"Notification"===n.type&&(0,o.jsxs)("div",{className:"p-16",children:[n.data.title&&(0,o.jsx)("h3",{className:"text-2xl text-center mb-6",children:n.data.title}),(0,o.jsx)("a",{onClick:function(){return f(!1)},children:(0,o.jsx)("img",{src:"/images/ic_decline.svg",className:"absolute right-6 top-6",alt:"Cancel"})}),(0,o.jsx)("div",{className:"h-full w-full flex mb-6 flex-col items-center justify-between border-gray",children:(0,o.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:n.data.content})}),(0,o.jsx)("div",{className:"flex flex-row justify-center",children:n.data.ok&&(0,o.jsx)("button",{type:"button",className:"mx-2 bottom-6 text-lg text-white w-1/2 h-11 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md",onClick:function(){window.open(n.data.link,"_blank"),f(!0)},children:n.data.ok})})]})]})]}),document.body)},f=function(e){var t=(0,i.useState)(null),n=t[0],r=t[1],l=(0,i.useCallback)((function(){r(null)}),[r]);return(0,o.jsxs)(c.Provider,a(a({value:{dialog:n,onClosed:l,setDialog:r}},e),{},{children:[e.children,n&&(0,o.jsx)(d,{dialog:n,onClosed:l})]}))}},49519:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),i=n(11163),l=n(49226),u=n(24015),a=n(37124),c=n(12245),s=n(22163),d=n(87028),f=n(96002);t.default=(0,u.a)((0,f.q)((function(){var e=(0,o.useState)(),t=e[0],n=e[1],u=i.default.query.id,f=(0,l.I0)(),p=(0,l.v9)((function(e){var t;return null===(t=e.authReducer.userInfo)||void 0===t?void 0:t.fullInfo}));return(0,o.useEffect)((function(){f((0,d.q6)({id:u},(function(e){n(e)}),(function(){})))}),[u]),(0,r.jsx)(a.Z,{children:(0,r.jsx)(c.Zb,{className:"h-full lg:pl-card lg:py-5 lg:shadow-2xl",noShadow:!0,children:(0,r.jsxs)("div",{className:"w-full h-full",children:[(0,r.jsxs)("div",{className:"card-header lg:mr-card lg:h-40px",children:[(0,r.jsxs)("div",{className:"mb-2 flex justify-between items-center",children:[(0,r.jsx)(c.xE,{href:"member"===p.role?"/dashboard/perks":"/admin/perks",text:"Back",force:!0}),(0,r.jsx)(c.zx,{primary:!0,children:"Activate Perk"})]}),(0,r.jsx)("div",{className:"border-primary border-b-2"})]}),(0,r.jsx)("div",{className:"card-body pb-10 overflow-y-auto lg:h-100%-40px",children:(0,r.jsx)("div",{className:"lg:pr-card",children:(0,r.jsx)(s.o,{perk:t})})})]})})})}),"perks"),"final-all")},87028:function(e,t,n){"use strict";n.d(t,{lL:function(){return r},yW:function(){return o},nE:function(){return i},Eg:function(){return l},BQ:function(){return u},FH:function(){return a},iA:function(){return c},c8:function(){return s},fX:function(){return d},Od:function(){return f},fI:function(){return p},yG:function(){return y},Lx:function(){return h},TT:function(){return m},I2:function(){return _},qG:function(){return v},hy:function(){return j},MC:function(){return x},CQ:function(){return E},ie:function(){return b},kB:function(){return g},Pj:function(){return T},ZZ:function(){return N},nQ:function(){return S},yT:function(){return I},sW:function(){return O},Dj:function(){return w},li:function(){return C},tA:function(){return A},Hi:function(){return D},zb:function(){return R},QT:function(){return k},cX:function(){return P},b$:function(){return G},y3:function(){return L},Nk:function(){return U},Xs:function(){return M},O2:function(){return V},J5:function(){return B},bG:function(){return K},og:function(){return F},Xj:function(){return Z},lf:function(){return Y},D:function(){return H},Vk:function(){return z},M6:function(){return W},Ng:function(){return X},lN:function(){return q},VO:function(){return Q},R$:function(){return $},q6:function(){return J},Li:function(){return ee},wN:function(){return te},t:function(){return ne},uy:function(){return re},HC:function(){return oe},AL:function(){return ie},xC:function(){return le},kF:function(){return ue},ud:function(){return ae},Vi:function(){return ce},_i:function(){return se}});var r=function(e,t){return{type:"GET_LIST_MEMBER",payload:e,callback:t}},o=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},i=function(e){return{type:"GET_USER_DETAIL",payload:e}},l=function(e,t,n){return{type:"GET_USER_METRICS",payload:e,resolve:t,reject:n}},u=function(e,t,n){return{type:"UPDATE_USER_METRICS",payload:e,resolve:t,reject:n}},a=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},c=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},s=function(e,t){return{type:"GET_LIST_INTAKE",payload:e,successCb:t}},d=function(e,t){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:t}},f=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},p=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},y=function(e,t){return{type:"GET_BALLOTS",payload:e,callback:t}},h=function(e,t){return{type:"GET_BALLOT_DETAIL",payload:e,callback:t}},m=function(e,t){return{type:"GET_BALLOT_VOTES",payload:e,callback:t}},_=function(e,t,n){return{type:"SUBMIT_BALLOT",payload:e,resolve:t,reject:n}},v=function(e,t,n){return{type:"SUBMIT_PERK",payload:e,resolve:t,reject:n}},j=function(e,t,n){return{type:"EDIT_PERK",payload:e,resolve:t,reject:n}},x=function(e,t,n){return{type:"CANCEL_BALLOT",payload:e,resolve:t,reject:n}},E=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},b=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},g=function(e,t){return{type:"GET_SUBADMINS",payload:e,callback:t}},T=function(e,t,n){return{type:"REGISTER_SUB_ADMIN",payload:e,resolve:t,reject:n}},N=function(e,t){return{type:"GET_IP_HISTORIES",payload:e,callback:t}},S=function(e,t,n){return{type:"INVITE_SUBADMIN",email:e,resolve:t,reject:n}},I=function(e,t,n){return{type:"REVOKE_SUBADMIN",id:e,resolve:t,reject:n}},O=function(e,t,n){return{type:"UNDO_REVOKE_SUBADMIN",id:e,resolve:t,reject:n}},w=function(e,t,n){return{type:"RESET_SUBADMIN_PASSWORD",id:e,resolve:t,reject:n}},C=function(e,t,n){return{type:"RESEND_INVITE_SUBADMIN",id:e,resolve:t,reject:n}},A=function(e,t,n){return{type:"CHANGE_SUBADMIN_PERMISSIONS",id:e,payload:t,callback:n}},D=function(e,t,n){return{type:"APPROVE_USER",payload:e,resolve:t,reject:n}},R=function(e,t,n){return{type:"RESET_USER",payload:e,resolve:t,reject:n}},k=function(e,t,n){return{type:"BAN_USER",payload:e,resolve:t,reject:n}},P=function(e,t,n){return{type:"BAN_VERIFIED_USER",payload:e,resolve:t,reject:n}},G=function(e,t,n){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:t,reject:n}},L=function(e,t,n){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:t,reject:n}},U=function(e,t,n){return{type:"APPROVE_USER_AML",payload:e,resolve:t,reject:n}},M=function(e,t,n){return{type:"RESET_USER_AML",payload:e,resolve:t,reject:n}},V=function(e,t,n){return{type:"APPROVE_USER_KYC",payload:e,resolve:t,reject:n}},B=function(e,t,n){return{type:"RESET_USER_KYC",payload:e,resolve:t,reject:n}},K=function(e,t,n){return{type:"ACTIVATE_VERIFIED_STATUS",payload:e,resolve:t,reject:n}},F=function(e,t){return{type:"GET_EMAILER_DATA",resolve:e,reject:t}},Z=function(e,t,n){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:t,reject:n}},Y=function(e,t,n){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:t,reject:n}},H=function(e,t,n){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:t,reject:n}},z=function(e,t,n){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:t,reject:n}},W=function(e,t,n){return{type:"GET_LIST_PERKS",payload:e,resolve:t,reject:n}},X=function(e,t,n){return{type:"GET_ACTIVE_PERKS",payload:e,resolve:t,reject:n}},q=function(e,t,n){return{type:"GET_LIST_PERK_ENGAGEMENT",payload:e,resolve:t,reject:n}},Q=function(e,t,n){return{type:"GET_PERK_DETAIL",payload:e,resolve:t,reject:n}},$=function(e,t){return{type:"GET_WARNING_METRICS",resolve:e,reject:t}},J=function(e,t,n){return{type:"GET_ACTIVE_PERK_DETAIL",payload:e,resolve:t,reject:n}},ee=function(e,t,n){return{type:"UPDATE_WARNING_METRICS",payload:e,resolve:t,reject:n}},te=function(e,t,n){return{type:"ADD_NOTIFICATION",payload:e,resolve:t,reject:n}},ne=function(e,t,n){return{type:"EDIT_NOTIFICATION",payload:e,resolve:t,reject:n}},re=function(e,t,n){return{type:"GET_NOTIFICATION_DETAIL",payload:e,resolve:t,reject:n}},oe=function(e,t,n){return{type:"GET_LIST_NOTIFICATIONS",payload:e,resolve:t,reject:n}},ie=function(e,t){return{type:"GET_NOTIFICATION_VIEW_LOGS",payload:e,resolve:t}},le=function(e,t){return{type:"GET_HIGH_PRIORITY_NOTIFICATION",resolve:e,reject:t}},ue=function(e,t){return{type:"GET_ADMIN_DASHBOARD",resolve:e,reject:t}},ae=function(e,t,n){return{type:"GET_NODES_FROM_ADMIN",payload:e,resolve:t,reject:n}},ce=function(e,t){return{type:"GET_LOCK_PAGE_RULES",resolve:e,reject:t}},se=function(e,t,n){return{type:"UPDATE_LOCK_PAGE_RULES",payload:e,resolve:t,reject:n}}},8517:function(e,t,n){"use strict";n.d(t,{sp:function(){return r},HA:function(){return o},uM:function(){return i},mm:function(){return l},u0:function(){return u},Dz:function(){return a},M3:function(){return c},eK:function(){return s},wT:function(){return d},Vu:function(){return f},Hp:function(){return p},Pf:function(){return y},j_:function(){return h},E_:function(){return m},XQ:function(){return _},oo:function(){return v},Vk:function(){return j},vv:function(){return x},kO:function(){return E},nn:function(){return b},ob:function(){return g},O7:function(){return T},Gi:function(){return N},pV:function(){return S},_Y:function(){return I},gg:function(){return O},oH:function(){return w},d2:function(){return C},N5:function(){return A},V6:function(){return D},H:function(){return R},ko:function(){return k}});var r=function(e){return{type:"GET_DASHBOARD_DATA_DEMO_SUCCESS",payload:e}},o=function(e){return{type:"GET_DASHBOARD_DATA_DEMO_SUCCESS_ERROR",payload:e}},i=function(e,t){return{type:"GET_VOTES",payload:e,successCb:t}},l=function(e,t){return{type:"GET_MY_VOTES",payload:e,successCb:t}},u=function(e,t,n){return{type:"GET_VOTE_DETAIL",payload:e,resolve:t,reject:n}},a=function(e){return{type:"GET_VOTE_DETAIL_SUCCESS",payload:e}},c=function(e){return{type:"GET_VOTE_DETAIL_ERROR",payload:e}},s=function(e,t,n){return{type:"RECORD_VOTE",payload:e,resolve:t,reject:n}},d=function(e){return{type:"RECORD_VOTE_SUCCESS",payload:e}},f=function(e){return{type:"RECORD_VOTE_ERROR",payload:e}},p=function(e,t){return{type:"GET_DISCUSSIONS",payload:e,successCb:t}},y=function(e,t,n){return{type:"GET_PINNED_DISCUSSIONS",payload:e,resolve:t,reject:n}},h=function(e,t,n){return{type:"GET_MY_DISCUSSIONS",payload:e,resolve:t,reject:n}},m=function(e,t){return{type:"GET_TRENDING_DISCUSSIONS",payload:e,resolve:t}},_=function(e,t,n){return{type:"GET_DISCUSSION_DETAIL",id:e,resolve:t,reject:n}},v=function(e,t){return{type:"GET_DISCUSSION_COMMENTS",payload:e,resolve:t}},j=function(e){return{type:"SET_DISCUSSION_PIN",id:e}},x=function(e,t,n){return{type:"CREATE_DISCUSSION",payload:e,resolve:t,reject:n}},E=function(e){return{type:"SET_REMOVE_NEW",id:e}},b=function(e,t,n){return{type:"POST_DISCUSSION_COMMENT",payload:e,resolve:t,reject:n}},g=function(e,t){return{type:"VOTE_DISCUSSION",payload:e,successCb:t}},T=function(e,t,n){return{type:"SUBMIT_NODE",payload:e,resolve:t,reject:n}},N=function(e,t,n){return{type:"SUBMIT_DETAIL",payload:e,resolve:t,reject:n}},S=function(e,t,n){return{type:"UPDATE_VERIFICATION_DOCUMENTS",payload:e,resolve:t,reject:n}},I=function(e,t){return{type:"GET_MY_INFO",resolve:e,reject:t}},O=function(e,t,n){return{type:"UPLOAD_AVATAR",payload:e,resolve:t,reject:n}},w=function(e,t,n){return{type:"CHECK_PASSWORD",payload:e,resolve:t,reject:n}},C=function(e,t,n){return{type:"UPDATE_USER_SETTINGS",payload:e,resolve:t,reject:n}},A=function(e,t){return{type:"DISMISS_NOTIFICATION",payload:e,resolve:t}},D=function(e,t){return{type:"UPDATE_VIEW_NOTIFICATION",payload:e,resolve:t}},R=function(e,t){return{type:"UPDATE_CLICK_CTA",payload:e,resolve:t}},k=function(e,t){return{type:"GET_LOCK_PAGE_CONDITIONS",resolve:e,reject:t}}},38886:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/perks/[id]",function(){return n(49519)}])}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,1045,7124],(function(){return t=38886,e(e.s=t);var t}));var t=e.O();_N_E=t}]);