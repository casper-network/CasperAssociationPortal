(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9189,8408],{4015:function(e,t,l){"use strict";l.d(t,{a:function(){return d}});var s=l(6156),a=l(5893),r=l(7294),n=l(1163),i=l(9226);var c=l(4791);function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,s)}return l}var d=function(e,t){return function(l){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,l=(0,i.v9)((function(e){return e.authReducer.userInfo}));return(0,r.useEffect)((function(){if("public"!==t&&t&&l)if(l&&null!==l&&void 0!==l&&l.isLoggedIn)if("member"===l.role){if("auth"===t)return"verifying"===l.period&&n.default.push("/verify-email"),"onboarding"===l.period&&n.default.push("/onboard"),void("final"===l.period&&n.default.push("/dashboard"));if("verifying"===t)return"onboarding"===l.period&&n.default.push("/onboard"),void("final"===l.period&&n.default.push("/dashboard"));if("onboarding"===t)return"verifying"===l.period&&n.default.push("/verify-email"),void("final"===l.period&&n.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===l.period&&n.default.push("/verify-email"),void("onboarding"===l.period&&n.default.push("/onboard"));"final-admin"===t&&("verifying"===l.period&&n.default.push("/verify-email"),"onboarding"===l.period&&n.default.push("/onboard"),"final"===l.period&&n.default.push("/dashboard"))}else"admin"===l.role&&"final-all"!==t&&"final-admin"!==t&&n.default.push("/admin/dashboard");else"auth"!==t&&n.default.push("/login")}),[l,t]),{user:l}}({urlType:t}).user;if(t&&"public"!==t){if(!d)return(0,a.jsx)(c.Z,{});if("auth"===t&&d.isLoggedIn)return(0,a.jsx)(c.Z,{});if("auth"!==t&&!d.isLoggedIn)return(0,a.jsx)(c.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(t)&&"final"!==d.period)return(0,a.jsx)(c.Z,{});if(["verifying"].includes(t)&&"verifying"!==d.period)return(0,a.jsx)(c.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==d.period)return(0,a.jsx)(c.Z,{})}if("admin"===d.role&&["verifying","onboarding","final-member"].includes(t))return(0,a.jsx)(c.Z,{})}return(0,a.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){(0,s.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},l))}}},6632:function(e,t,l){"use strict";var s=l(5893),a=l(7329),r=l(2465),n=l(7294),i=l(9226),c=l(1163),o=l(9163),d=l(8517),u=l(8569);function m(){var e=(0,r.Z)(["\n  .active-vote-table {\n    .col-1 {\n      width: 55%;\n    }\n    .col-2 {\n      width: 45%;\n    }\n    .custom-row {\n      border: 0;\n      padding: 10px 0;\n    }\n  }\n"]);return m=function(){return e},e}var f=o.ZP.div(m());t.Z=function(e){var t=e.toggleOpenVotes,l=(0,n.useState)([]),r=l[0],o=l[1],m=(0,n.useState)(!0),x=m[0],h=m[1],p=(0,n.useState)(1),g=p[0],v=p[1],j=(0,i.I0)(),y=(0,c.useRouter)(),w=function(){j((0,d.uM)({status:"active",page:g},(function(e,t){h(t),o((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e))})),v((function(e){return e+1}))})))};(0,n.useEffect)((function(){w()}),[]),(0,n.useEffect)((function(){console.log("!!activeVotes.length",!!r.length),t(!!r.length)}),[JSON.stringify(r)]);return(0,s.jsxs)("div",{className:"flex flex-col px-8 py-7 h-full",children:[(0,s.jsx)("p",{className:"text-2.5xl text-black1",children:"Open Votes"}),(0,s.jsx)("div",{className:"flex flex-col lg:pt-6 h-8.5/10",children:(0,s.jsx)(f,{className:"h-full w-full",children:(0,s.jsxs)(u.iA,{className:"active-vote-table w-full h-full min-w-full",onLoadMore:w,hasMore:x,dataLength:r.length,children:[(0,s.jsxs)(u.iA.Header,{children:[(0,s.jsx)(u.iA.HeaderCell,{children:(0,s.jsx)("p",{className:"underline font-normal",children:"Title"})}),(0,s.jsx)(u.iA.HeaderCell,{children:(0,s.jsx)("p",{className:"underline font-normal",children:"Time Left"})})]}),(0,s.jsx)(u.iA.Body,{children:r.map((function(e,t){return(0,s.jsxs)(u.iA.BodyRow,{selectRowHandler:function(){return t=e.id,void y.push("/dashboard/votes/active/".concat(t));var t},className:"custom-row",children:[(0,s.jsx)(u.iA.BodyCell,{children:(0,s.jsx)("p",{className:"truncate",children:e.title})}),(0,s.jsx)(u.iA.BodyCell,{children:(0,s.jsx)(u.ZF,{endTime:new Date(e.time_end),startTime:new Date(e.created_at),hideProgressBar:!0})})]},t)}))})]})})})]})}},4791:function(e,t,l){"use strict";var s=l(5893),a=l(733),r=l.n(a);t.Z=function(){return(0,s.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,s.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,s.jsx)(r(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},370:function(e,t,l){"use strict";l.d(t,{Z:function(){return E}});var s,a,r,n,i,c,o,d=l(5893),u=l(4504),m=l(9226),f=l(7294),x=l(8569),h=l(6570);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}var b=[{key:"dashboard",icon:function(e){return f.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.71 24.9"},e),s||(s=f.createElement("g",{"data-name":"Icon feather-home",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},f.createElement("path",{"data-name":"Path 11159",d:"M1.5 9.165L11.355 1.5l9.855 7.665V21.21a2.19 2.19 0 01-2.19 2.19H3.69a2.19 2.19 0 01-2.19-2.19z"}),f.createElement("path",{"data-name":"Path 11160",d:"M8.07 23.4V12.45h6.57V23.4"}))))},path:"/dashboard"},{key:"info",icon:function(e){return f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 23 22.02"},e),a||(a=f.createElement("g",{"data-name":"Group 1075",fill:"none",stroke:"#ff473e",strokeWidth:3},f.createElement("path",{"data-name":"Path 11164",d:"M11.5 22.02V.001"}),f.createElement("path",{"data-name":"Path 11166",d:"M16.5 17.742V4.278"}),f.createElement("path",{"data-name":"Path 11167",d:"M21.5 13.493V8.528"}),f.createElement("path",{"data-name":"Path 11165",d:"M6.5 17.742V4.278"}),f.createElement("path",{"data-name":"Path 11168",d:"M1.5 13.493V8.528"}))))},path:"/dashboard/nodes"},{key:"chat",icon:function(e){return f.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.338 22.338"},e),r||(r=f.createElement("path",{"data-name":"Icon material-chat",d:"M20.1 0H2.234A2.231 2.231 0 00.011 2.234L0 22.338l4.468-4.468H20.1a2.24 2.24 0 002.234-2.234V2.234A2.24 2.24 0 0020.1 0zM4.468 7.818h13.4v2.234h-13.4zM13.4 13.4H4.468v-2.231H13.4zm4.47-6.7H4.468V4.468h13.4z",fill:"#ff473e"})))},path:"/dashboard/discussion"},{key:"vote",icon:function(e){return f.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 31.235 21.865"},e),n||(n=f.createElement("path",{"data-name":"Icon awesome-vote-yea",d:"M29.673 14.056H26.55v3.123h1.093a.436.436 0 01.469.39v.781a.436.436 0 01-.469.39H3.592a.436.436 0 01-.469-.39v-.78a.436.436 0 01.469-.39h1.093v-3.124H1.562A1.56 1.56 0 000 15.617v4.685a1.56 1.56 0 001.562 1.562h28.111a1.56 1.56 0 001.562-1.562v-4.685a1.56 1.56 0 00-1.562-1.561zm-4.685 3.123V1.576A1.576 1.576 0 0023.412 0H7.828a1.58 1.58 0 00-1.581 1.576v15.6zm-14.68-8.882l1.245-1.235a.52.52 0 01.742 0l2.016 2.03 4.645-4.602a.52.52 0 01.742 0l1.235 1.245a.52.52 0 010 .742l-6.262 6.208a.52.52 0 01-.742 0l-3.616-3.646a.52.52 0 010-.742z",fill:"#ff473e"})))},path:"/dashboard/votes"},{key:"user",icon:function(e){return f.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.933 23.398"},e),i||(i=f.createElement("g",{"data-name":"Icon feather-user-plus",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},f.createElement("path",{"data-name":"Path 11206",d:"M18.5 21.9v-2.267a4.533 4.533 0 00-4.534-4.533H6.033A4.533 4.533 0 001.5 19.633V21.9"}),f.createElement("path",{"data-name":"Path 11207",d:"M14.533 6.033A4.533 4.533 0 1110 1.5a4.533 4.533 0 014.533 4.533z"}),f.createElement("path",{"data-name":"Path 11208",d:"M23.033 7.166v6.8"}),f.createElement("path",{"data-name":"Path 11209",d:"M26.433 10.566h-6.8"}))))},path:"/dashboard/member-perks"},{key:"verification",icon:function(e){return f.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 22.454 27.445"},e),o||(o=f.createElement("path",{d:"M11.227 0L0 4.99v7.485c0 6.923 4.79 13.4 11.227 14.97 6.437-1.572 11.227-8.046 11.227-14.97V4.99zM8.732 19.96l-4.99-4.99L5.5 13.211l3.231 3.218 8.221-8.221 1.759 1.771z",fill:"#ff473e"})))},path:"/dashboard/verification"},{key:"setting",icon:function(e){return f.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.09 27.09"},e),c||(c=f.createElement("g",{"data-name":"Icon feather-settings",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},f.createElement("path",{"data-name":"Path 11161",d:"M16.83 13.545a3.285 3.285 0 11-3.285-3.285 3.285 3.285 0 013.285 3.285z"}),f.createElement("path",{"data-name":"Path 11162",d:"M21.648 16.83a1.807 1.807 0 00.361 1.993l.066.066a2.192 2.192 0 11-3.1 3.1l-.066-.066a1.821 1.821 0 00-3.088 1.292v.185a2.19 2.19 0 01-4.38 0v-.1a1.807 1.807 0 00-1.183-1.653 1.807 1.807 0 00-1.993.361l-.066.066a2.192 2.192 0 11-3.1-3.1l.066-.066a1.821 1.821 0 00-1.292-3.088H3.69a2.19 2.19 0 110-4.38h.1a1.807 1.807 0 001.652-1.18 1.807 1.807 0 00-.361-1.993L5.015 8.2a2.192 2.192 0 113.1-3.1l.066.066a1.807 1.807 0 001.993.361h.088a1.807 1.807 0 001.095-1.653V3.69a2.19 2.19 0 014.38 0v.1a1.821 1.821 0 003.088 1.292l.066-.066a2.192 2.192 0 113.1 3.1l-.066.066a1.807 1.807 0 00-.361 1.993v.088a1.807 1.807 0 001.653 1.095h.183a2.19 2.19 0 010 4.38h-.1a1.807 1.807 0 00-1.653 1.095z"}))))},path:"/dashboard/settings"}],_=function(){var e=(0,m.v9)((function(e){return e.authReducer.userInfo.fullInfo})),t=(0,f.useState)(!1),l=t[0],s=t[1],a=(0,f.useState)(!1),r=a[0],n=a[1];return(0,f.useEffect)((function(){var t;s("admin"===(null===e||void 0===e?void 0:e.role)),n("approved"===(null===e||void 0===e||null===(t=e.profile)||void 0===t?void 0:t.status))}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(x.Zb,{className:"flex-col w-24 px-5 hidden lg:flex h-full overflow-y-scroll",children:[(0,d.jsx)("img",{className:"py-6 border-b-2 align-center border-primary",src:"/images/ic_logo_home.svg",alt:"Casper"}),(0,d.jsx)("ul",{className:" mb-4 flex flex-col items-center lg:pt-8 xl:pt-8 2xl:pt-12 ",children:b.map((function(e,t){return(0,d.jsx)(d.Fragment,{children:(l||r)&&"verification"===e.key?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("li",{className:"".concat(l?"lg:py-1 2xl:py-2":"py-3"),children:(0,d.jsx)(x.O$,{activeClassName:"shadow-activeLink",href:"".concat(l&&"dashboard"===e.key?"/admin/dashboard":e.path),children:(0,d.jsx)("a",{className:" rounded-lg inline-block  xl:p-2 2xl:p-3 ",children:(0,d.jsx)(e.icon,{width:l?"1.25rem":"1.5rem",height:l?"1.25rem":"1.5rem"})})})},t)})}))}),l&&(0,d.jsxs)("ul",{className:"flex flex-col py-4 border-t-2 border-primary",children:[(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(x.O$,{activeClassName:"text-primary",href:"/admin/dashboard",children:(0,d.jsx)("p",{children:"Admin"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(x.O$,{activeClassName:"text-primary",href:"/admin/intake",children:(0,d.jsx)("p",{children:"Intake"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(x.O$,{activeClassName:"text-primary",href:"/admin/users",children:(0,d.jsx)("p",{children:"Users"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(x.O$,{activeClassName:"text-primary",href:"/admin/ballots",children:(0,d.jsx)("p",{children:"Ballots"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(x.O$,{activeClassName:"text-primary",href:"/admin/perks",children:(0,d.jsx)("p",{children:"Perks"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(x.O$,{activeClassName:"text-primary",href:"/admin/teams",children:(0,d.jsx)("p",{children:"Teams"})})}),(0,d.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,d.jsx)(x.O$,{activeClassName:"text-primary",href:"/admin/settings",children:(0,d.jsx)("p",{children:"Settings"})})})]})]}),(0,d.jsx)(h.Z,{className:"py-4 lg:hidden",theme:"dark"})]})};function E(e){var t=e.children;return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"dashboard-layout",children:(0,d.jsxs)("div",{className:" relative h-screen h-px mx-auto flex flex-col px-4 lg:pt-10 lg:pb-20 lg:max-w-380 xl:py-20 xl:max-w-404  2xl:py-24 2xl:min-h-105",children:[(0,d.jsxs)("div",{className:"flex h-full flex-col lg:flex-row",children:[(0,d.jsx)("div",{className:"flex-none",children:(0,d.jsx)(_,{})}),(0,d.jsx)("div",{className:"pt-12 lg:pt-0 lg:pl-6 dashboard-content flex-grow h-full",children:t})]}),(0,d.jsx)("div",{className:"absolute py-8 left-0 bottom-0 right-0",children:(0,d.jsx)(u.Z,{theme:"dark"})})]})})})}},8098:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return p}});var s=l(5893),a=l(370),r=l(8569),n=l(7757),i=l.n(n),c=l(2137),o=l(5774),d=(l(2897),l(9226)),u=l(3022),m=function(){var e=(0,d.I0)(),t=(0,d.v9)((function(e){return e.authReducer.userInfo.fullInfo}));return(0,s.jsxs)("div",{className:"flex flex-col mx-9 my-3 bg-white",children:[(0,s.jsxs)("div",{className:" flex flex-col border-b-2 border-gray pb-8 xl:pb-4 2xl:pb-8 ",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("img",{className:"pr-2",src:"/images/ic_awesome_user_circle.svg",alt:"User"}),(0,s.jsx)("span",{className:"text-2.5xl",children:"admin"===(null===t||void 0===t?void 0:t.role)?"Admin":"Member"})]}),(0,s.jsx)("span",{className:"text-lg",children:null===t||void 0===t?void 0:t.email}),(0,s.jsx)("button",{type:"button",className:"inline-flex text-xs text-primary underline",onClick:function(){var t=(0,c.Z)(i().mark((function t(l){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.preventDefault(),e((0,u.Rg)());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Logout"})]}),(0,s.jsxs)("div",{className:" flex flex-col  pt-3 lg:pb-3 2xl:pt-5 ",children:[(0,s.jsx)("span",{className:"text-2.5xl",children:"Metrics"}),(0,s.jsxs)("div",{className:"flex flex-col py-3 xl:py-1 2xl:py-3",children:[(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-lg",children:"Total Users"}),(0,s.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsx)("span",{className:"text-base text-black1 font-thin",children:"2,1155"})]}),(0,s.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-lg",children:"Member\u2019s Stake"}),(0,s.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsx)("span",{className:"text-base text-black1 font-thin",children:"12,382,414"})]}),(0,s.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-lg",children:"Total Delegators"}),(0,s.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsx)("span",{className:"text-base text-black1 font-thin",children:"19"})]}),(0,s.jsxs)("div",{className:"flex flex-col py-2 2xl:py-3",children:[(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-lg",children:"Average Uptime"}),(0,s.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsx)("div",{className:"overflow-hidden h-4 mt-2 text-xs flex rounded-lg bg-gray bg-opacity-50",children:(0,s.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})})]}),(0,s.jsxs)("div",{className:"flex flex-col pt-2 pb-9 xl:pb-6 2xl:pb-9 border-b-2 border-gray",children:[(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-lg",children:"Average Peers"}),(0,s.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsx)("div",{className:"overflow-hidden h-4 mt-2 text-xs flex rounded-lg bg-gray bg-opacity-50",children:(0,s.jsx)("div",{className:"w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"49/88"})})]}),(0,s.jsxs)("div",{className:"flex justify-between py-9 xl:py-6 2xl:py-9",children:[(0,s.jsxs)("div",{className:"flex w-1/2 flex-col pr-4 justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-row pb-4 items-baseline",children:[(0,s.jsx)("span",{className:"text-sm font-medium h-12",children:"Average CPU Load"}),(0,s.jsx)("img",{className:"pl-2",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsx)("div",{style:{height:"100%",width:"100%"},children:(0,s.jsx)(o.Ip,{value:61,text:"".concat(61,"%"),styles:(0,o.y3)({pathColor:"#FF473E",strokeLinecap:"butt",textColor:"#313131",textSize:"26px",trailColor:"#9A9A9A"})})})]}),(0,s.jsxs)("div",{className:"flex w-1/2 flex-col pl-4 justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-row pb-4 items-baseline",children:[(0,s.jsx)("span",{className:"text-sm font-medium h-12",children:"Performance"}),(0,s.jsx)("img",{className:"pl-2",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,s.jsx)("div",{style:{height:"100%",width:"100%"},children:(0,s.jsx)(o.Ip,{value:83,text:"".concat(83,"%"),styles:(0,o.y3)({pathColor:"#FF473E",strokeLinecap:"butt",textColor:"#313131",textSize:"26px",trailColor:"#9A9A9A"})})})]})]})]})]})},f=l(7294),x=l(6632),h=function(){var e=(0,f.useState)(!1),t=e[0],l=e[1];return(0,s.jsxs)("div",{className:"flex flex-col lg:justify-between w-full h-full lg:pr-6",children:[(0,s.jsx)("div",{className:"flex flex-wrap lg:flex-nowrap lg:h-1/10 -mx-3",children:(0,s.jsx)("div",{className:"w-full px-3 mb-3",children:(0,s.jsx)(r.Zb,{className:"lg:flex-grow bg-primary",children:(0,s.jsxs)("div",{className:"flex flex-col px-9 py-4",children:[(0,s.jsx)("span",{className:"text-lg font-bold text-white",children:"New Alert"}),(0,s.jsx)("span",{className:"text-base text-white",children:"There are new comments to be read!"})]})})})}),(0,s.jsxs)("div",{className:"flex flex-col-reverse lg:flex-col lg:h-8.5/10 lg:justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row my-10 lg:mt-0 h-auto lg:h-1/3",children:[(0,s.jsx)("div",{className:"flex-grow w-full mt-0 lg:w-2/3 lg:mr-3 h-full",children:(0,s.jsxs)("div",{className:"flex lg:flex-row flex-col justify-between -mx-3 h-full",children:[(0,s.jsx)(r.Zb,{className:"h-full lg:w-full my-4 lg:my-0 lg:py-0 mx-3",children:(0,s.jsxs)("div",{className:"flex flex-col justify-between p-6 h-full text-center",children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:"KYC for Review"}),(0,s.jsx)("p",{className:"text-5xl py-4 font-thin",children:"4"}),(0,s.jsx)("button",{type:"button",className:"text-lg text-white w-full h-11 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",children:"Review"})]})}),(0,s.jsx)(r.Zb,{className:"h-full lg:w-full my-4 lg:my-0 lg:py-0 mx-3",children:(0,s.jsxs)("div",{className:"flex flex-col justify-between p-6 h-full text-center",children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:"Failing Nodes"}),(0,s.jsx)("p",{className:"text-5xl py-4 font-thin",children:"2"}),(0,s.jsx)("button",{type:"button",className:"text-lg text-white w-full h-11 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",children:"Review"})]})}),(0,s.jsx)(r.Zb,{className:"h-full lg:w-full my-4 lg:my-0 lg:py-0 mx-3",children:(0,s.jsxs)("div",{className:"flex flex-col justify-between p-6 h-full text-center",children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:"Perks Activated"}),(0,s.jsx)("p",{className:"text-5xl py-4 font-thin",children:"8"}),(0,s.jsx)("p",{className:"flex items-center justify-center h-11 text-base",children:"( Last 7 days )"})]})})]})}),(0,s.jsxs)(r.Zb,{className:"flex-grow flex flex-row w-full lg:w-1/3 mt-5 lg:my-0 lg:ml-3 h-full",children:[(0,s.jsx)("div",{className:"flex flex-col p-6",children:(0,s.jsxs)("div",{className:"flex flex-col justify-between h-full text-center",children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:"Forum Activity"}),(0,s.jsx)("p",{className:"text-5xl py-4 font-thin",children:"610"}),(0,s.jsx)("p",{className:"flex items-center justify-center h-11 text-base",children:"New Comments (7 Days)"})]})}),(0,s.jsx)("div",{className:"flex flex-col p-6",children:(0,s.jsxs)("div",{className:"flex flex-col justify-between h-full text-center",children:[(0,s.jsx)("p",{className:"text-lg font-medium invisible",children:"Forum Activity"}),(0,s.jsx)("p",{className:"text-5xl py-4 font-thin",children:"15"}),(0,s.jsx)("p",{className:"flex items-center justify-center h-11 text-base",children:"New Threads (7 Days)"})]})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col-reverse lg:flex-row h-3/5",children:[(0,s.jsx)(r.Zb,{className:"flex-grow w-full mt-10 lg:mt-0 lg:w-2/3 lg:mr-3 h-full",children:(0,s.jsxs)("div",{className:"flex flex-col px-8 py-7 h-full",children:[(0,s.jsx)("p",{className:"text-2.5xl text-black1",children:"Trending Discussions"}),(0,s.jsxs)("div",{className:"flex flex-col pt-6 h-8.5/10",children:[(0,s.jsxs)("div",{className:"hidden lg:flex w-full h-1/5",children:[(0,s.jsx)("p",{className:"w-3/6 pb-2 text-lg underline text-left font-normal",children:"Title"}),(0,s.jsxs)("div",{className:"flex w-3/6",children:[(0,s.jsx)("p",{className:"w-3/5 pl-12 pb-2 text-lg underline text-left font-normal",children:"Comments"}),(0,s.jsx)("p",{className:"w-3/5 pl-12 pb-2 text-lg underline text-left font-normal",children:"Date"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full lg:mt-5 overflow-y-scroll",children:[(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full py-2.5",children:[(0,s.jsx)("p",{className:"w-full lg:w-3/6 pb-2 truncate",children:"Lorem ipsum dolor sit amet, consectetur adipiscing"}),(0,s.jsxs)("div",{className:"flex w-full lg:w-3/6",children:[(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 lg:pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_material_mode_comment.svg",alt:"Comment"})}),(0,s.jsx)("span",{children:"26"})]}),(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_awesome_calendar.svg",alt:"Calendar"})}),(0,s.jsx)("span",{children:"5/6/21"})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full py-2.5",children:[(0,s.jsx)("p",{className:"w-full lg:w-3/6 pb-2 truncate",children:"Lorem ipsum dolor sit amet, consectetur adipiscing"}),(0,s.jsxs)("div",{className:"flex w-full lg:w-3/6",children:[(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 lg:pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_material_mode_comment.svg",alt:"Comment"})}),(0,s.jsx)("span",{children:"26"})]}),(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_awesome_calendar.svg",alt:"Calendar"})}),(0,s.jsx)("span",{children:"5/6/21"})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full py-2.5",children:[(0,s.jsx)("p",{className:"w-full lg:w-3/6 pb-2 truncate",children:"Lorem ipsum dolor sit amet, consectetur adipiscing"}),(0,s.jsxs)("div",{className:"flex w-full lg:w-3/6",children:[(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 lg:pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_material_mode_comment.svg",alt:"Comment"})}),(0,s.jsx)("span",{children:"26"})]}),(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_awesome_calendar.svg",alt:"Calendar"})}),(0,s.jsx)("span",{children:"5/6/21"})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full py-2.5",children:[(0,s.jsx)("p",{className:"w-full lg:w-3/6 pb-2 truncate",children:"Lorem ipsum dolor sit amet, consectetur adipiscing"}),(0,s.jsxs)("div",{className:"flex w-full lg:w-3/6",children:[(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 lg:pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_material_mode_comment.svg",alt:"Comment"})}),(0,s.jsx)("span",{children:"26"})]}),(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_awesome_calendar.svg",alt:"Calendar"})}),(0,s.jsx)("span",{children:"5/6/21"})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full py-2.5",children:[(0,s.jsx)("p",{className:"w-full lg:w-3/6 pb-2 truncate",children:"Lorem ipsum dolor sit amet, consectetur adipiscing"}),(0,s.jsxs)("div",{className:"flex w-full lg:w-3/6",children:[(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 lg:pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_material_mode_comment.svg",alt:"Comment"})}),(0,s.jsx)("span",{children:"26"})]}),(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_awesome_calendar.svg",alt:"Calendar"})}),(0,s.jsx)("span",{children:"5/6/21"})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full py-2.5",children:[(0,s.jsx)("p",{className:"w-full lg:w-3/6 pb-2 truncate",children:"Lorem ipsum dolor sit amet, consectetur adipiscing"}),(0,s.jsxs)("div",{className:"flex w-full lg:w-3/6",children:[(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 lg:pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_material_mode_comment.svg",alt:"Comment"})}),(0,s.jsx)("span",{children:"26"})]}),(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_awesome_calendar.svg",alt:"Calendar"})}),(0,s.jsx)("span",{children:"5/6/21"})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full py-2.5",children:[(0,s.jsx)("p",{className:"w-full lg:w-3/6 pb-2 truncate",children:"Lorem ipsum dolor sit amet, consectetur adipiscing"}),(0,s.jsxs)("div",{className:"flex w-full lg:w-3/6",children:[(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 lg:pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_material_mode_comment.svg",alt:"Comment"})}),(0,s.jsx)("span",{children:"26"})]}),(0,s.jsxs)("div",{className:"flex items-center lg:items-start lg:w-3/5 pl-12 pb-2",children:[(0,s.jsx)("div",{className:"pr-3",children:(0,s.jsx)("img",{src:"/images/ic_awesome_calendar.svg",alt:"Calendar"})}),(0,s.jsx)("span",{children:"5/6/21"})]})]})]})]})]})]})}),(0,s.jsx)(r.Zb,{className:"".concat(t?"flex-grow w-full lg:w-1/3 mt-10 lg:mt-0 lg:ml-3 h-full":"w-0 h-0 opacity-0"),children:(0,s.jsx)(x.Z,{toggleOpenVotes:l})})]})]})]})},p=(0,l(4015).a)((function(){return(0,s.jsx)(a.Z,{children:(0,s.jsxs)("div",{className:"flex h:auto lg:h-full",children:[(0,s.jsx)(h,{}),(0,s.jsx)(r.Zb,{className:"hidden lg:block h-full",children:(0,s.jsx)("div",{className:"overflow-y-scroll h-full w-80",children:(0,s.jsx)(m,{})})})]})})}),"final-admin")},8517:function(e,t,l){"use strict";l.d(t,{sp:function(){return s},HA:function(){return a},uM:function(){return r},u0:function(){return n},Dz:function(){return i},M3:function(){return c},eK:function(){return o},wT:function(){return d},Vu:function(){return u},Hp:function(){return m},Pf:function(){return f},j_:function(){return x},E_:function(){return h},XQ:function(){return p},Vk:function(){return g},vv:function(){return v},kO:function(){return j},nn:function(){return y},ob:function(){return w},O7:function(){return N},Gi:function(){return b},pV:function(){return _}});var s=function(e){return{type:"GET_DASHBOARD_DATA_DEMO_SUCCESS",payload:e}},a=function(e){return{type:"GET_DASHBOARD_DATA_DEMO_SUCCESS_ERROR",payload:e}},r=function(e,t){return{type:"GET_VOTES",payload:e,successCb:t}},n=function(e,t){return{type:"GET_VOTE_DETAIL",payload:e,callback:t}},i=function(e){return{type:"GET_VOTE_DETAIL_SUCCESS",payload:e}},c=function(e){return{type:"GET_VOTE_DETAIL_ERROR",payload:e}},o=function(e,t){return{type:"RECORD_VOTE",payload:e,callback:t}},d=function(e){return{type:"RECORD_VOTE_SUCCESS",payload:e}},u=function(e){return{type:"RECORD_VOTE_ERROR",payload:e}},m=function(e,t){return{type:"GET_DISCUSSIONS",payload:e,successCb:t}},f=function(e){return{type:"GET_PINNED_DISCUSSIONS",successCb:e}},x=function(e){return{type:"GET_MY_DISCUSSIONS",successCb:e}},h=function(e){return{type:"GET_TRENDING_DISCUSSIONS",successCb:e}},p=function(e,t){return{type:"GET_DISCUSSION_DETAIL",id:e,successCb:t}},g=function(e,t){return{type:"SET_DISCUSSION_PIN",id:e,successCb:t}},v=function(e,t,l){return{type:"CREATE_DISCUSSION",payload:e,successCb:t,resetSubmitting:l}},j=function(e,t){return{type:"SET_REMOVE_NEW",id:e,successCb:t}},y=function(e,t){return{type:"POST_DISCUSSION_COMMENT",payload:e,successCb:t}},w=function(e,t){return{type:"VOTE_DISCUSSION",payload:e,successCb:t}},N=function(e,t,l){return{type:"SUBMIT_NODE",payload:e,resolve:t,reject:l}},b=function(e,t,l){return{type:"SUBMIT_DETAIL",payload:e,resolve:t,reject:l}},_=function(e,t,l){return{type:"UPDATE_VERIFICATION_DOCUMENTS",payload:e,resolve:t,reject:l}}},4737:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return l(8098)}])},2897:function(){},5774:function(e,t,l){"use strict";l.d(t,{Ip:function(){return c},y3:function(){return o}});var s=l(7294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var l in t)t.hasOwnProperty(l)&&(e[l]=t[l])})(e,t)};function r(e){var t=e.className,l=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,c=e.strokeWidth,o=e.style;return(0,s.createElement)("path",{className:t,style:Object.assign({},o,i({pathRadius:r,dashRatio:a,counterClockwise:l})),d:n({pathRadius:r,counterClockwise:l}),strokeWidth:c,fillOpacity:0})}function n(e){var t=e.pathRadius,l=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+l+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+l+" 1 1 0,-"+2*t+"\n    "}function i(e){var t=e.counterClockwise,l=e.dashRatio,s=e.pathRadius,a=2*Math.PI*s,r=(1-l)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-r:r)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function l(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(l.prototype=t.prototype,new l)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,l=e.minValue,s=e.maxValue;return(Math.min(Math.max(t,l),s)-l)/(s-l)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,l=e.className,a=e.classes,n=e.counterClockwise,i=e.styles,c=e.strokeWidth,o=e.text,d=this.getPathRadius(),u=this.getPathRatio();return(0,s.createElement)("svg",{className:a.root+" "+l,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,s.createElement)("circle",{className:a.background,style:i.background,cx:50,cy:50,r:50}):null,(0,s.createElement)(r,{className:a.trail,counterClockwise:n,dashRatio:t,pathRadius:d,strokeWidth:c,style:i.trail}),(0,s.createElement)(r,{className:a.path,counterClockwise:n,dashRatio:u*t,pathRadius:d,strokeWidth:c,style:i.path}),o?(0,s.createElement)("text",{className:a.text,style:i.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(s.Component);function o(e){var t=e.rotation,l=e.strokeLinecap,s=e.textColor,a=e.textSize,r=e.pathColor,n=e.pathTransition,i=e.pathTransitionDuration,c=e.trailColor,o=e.backgroundColor,u=null==t?void 0:"rotate("+t+"turn)",m=null==t?void 0:"center center";return{root:{},path:d({stroke:r,strokeLinecap:l,transform:u,transformOrigin:m,transition:n,transitionDuration:null==i?void 0:i+"s"}),trail:d({stroke:c,strokeLinecap:l,transform:u,transformOrigin:m}),text:d({fill:s,fontSize:a}),background:d({fill:o})}}function d(e){return Object.keys(e).forEach((function(t){null==e[t]&&delete e[t]})),e}}},function(e){e.O(0,[9774,2554,1282,8930,6993,6095,5679],(function(){return t=4737,e(e.s=t);var t}));var t=e.O();_N_E=t}]);