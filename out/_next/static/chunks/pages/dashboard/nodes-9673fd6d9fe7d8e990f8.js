(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7785],{4015:function(e,l,s){"use strict";s.d(l,{a:function(){return d}});var a=s(6156),t=s(5893),n=s(7294),i=s(1163),r=s(9226);var c=s(4791);function x(e,l){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),s.push.apply(s,a)}return s}var d=function(e,l){return function(s){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,l=void 0===e?"public":e,s=(0,r.v9)((function(e){return e.authReducer.userInfo}));return(0,n.useEffect)((function(){if("public"!==l&&l&&s)if(s&&null!==s&&void 0!==s&&s.isLoggedIn)if("member"===s.role){if("auth"===l)return"verifying"===s.period&&i.default.push("/verify-email"),"onboarding"===s.period&&i.default.push("/onboard"),void("final"===s.period&&i.default.push("/dashboard"));if("verifying"===l)return"onboarding"===s.period&&i.default.push("/onboard"),void("final"===s.period&&i.default.push("/dashboard"));if("onboarding"===l)return"verifying"===s.period&&i.default.push("/verify-email"),void("final"===s.period&&i.default.push("/dashboard"));if("final-member"===l||"final-all"===l)return"verifying"===s.period&&i.default.push("/verify-email"),void("onboarding"===s.period&&i.default.push("/onboard"));"final-admin"===l&&("verifying"===s.period&&i.default.push("/verify-email"),"onboarding"===s.period&&i.default.push("/onboard"),"final"===s.period&&i.default.push("/dashboard"))}else"admin"===s.role&&"final-all"!==l&&"final-admin"!==l&&i.default.push("/admin/dashboard");else"auth"!==l&&i.default.push("/login")}),[s,l]),{user:s}}({urlType:l}).user;if(l&&"public"!==l){if(!d)return(0,t.jsx)(c.Z,{});if("auth"===l&&d.isLoggedIn)return(0,t.jsx)(c.Z,{});if("auth"!==l&&!d.isLoggedIn)return(0,t.jsx)(c.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(l)&&"final"!==d.period)return(0,t.jsx)(c.Z,{});if(["verifying"].includes(l)&&"verifying"!==d.period)return(0,t.jsx)(c.Z,{});if(["onboarding"].includes(l)&&"onboarding"!==d.period)return(0,t.jsx)(c.Z,{})}if("admin"===d.role&&["verifying","onboarding","final-member"].includes(l))return(0,t.jsx)(c.Z,{})}return(0,t.jsx)(e,function(e){for(var l=1;l<arguments.length;l++){var s=null!=arguments[l]?arguments[l]:{};l%2?x(Object(s),!0).forEach((function(l){(0,a.Z)(e,l,s[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(s,l))}))}return e}({},s))}}},4791:function(e,l,s){"use strict";var a=s(5893),t=s(733),n=s.n(t);l.Z=function(){return(0,a.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,a.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,a.jsx)(n(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},5955:function(e,l,s){"use strict";s.d(l,{Z:function(){return y}});var a,t,n,i,r,c,x=s(5893),d=s(4504),o=s(9226),h=s(7294),f=s(5587),m=s(6570);function p(){return(p=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function u(){return(u=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function g(){return(g=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function j(){return(j=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function b(){return(b=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function v(){return(v=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var N=[{key:"dashboard",icon:function(e){return h.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.71 24.9"},e),a||(a=h.createElement("g",{"data-name":"Icon feather-home",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},h.createElement("path",{"data-name":"Path 11159",d:"M1.5 9.165L11.355 1.5l9.855 7.665V21.21a2.19 2.19 0 01-2.19 2.19H3.69a2.19 2.19 0 01-2.19-2.19z"}),h.createElement("path",{"data-name":"Path 11160",d:"M8.07 23.4V12.45h6.57V23.4"}))))},path:"/dashboard"},{key:"info",icon:function(e){return h.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 23 22.02"},e),t||(t=h.createElement("g",{"data-name":"Group 1075",fill:"none",stroke:"#ff473e",strokeWidth:3},h.createElement("path",{"data-name":"Path 11164",d:"M11.5 22.02V.001"}),h.createElement("path",{"data-name":"Path 11166",d:"M16.5 17.742V4.278"}),h.createElement("path",{"data-name":"Path 11167",d:"M21.5 13.493V8.528"}),h.createElement("path",{"data-name":"Path 11165",d:"M6.5 17.742V4.278"}),h.createElement("path",{"data-name":"Path 11168",d:"M1.5 13.493V8.528"}))))},path:"/dashboard/nodes"},{key:"chat",icon:function(e){return h.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.338 22.338"},e),n||(n=h.createElement("path",{"data-name":"Icon material-chat",d:"M20.1 0H2.234A2.231 2.231 0 00.011 2.234L0 22.338l4.468-4.468H20.1a2.24 2.24 0 002.234-2.234V2.234A2.24 2.24 0 0020.1 0zM4.468 7.818h13.4v2.234h-13.4zM13.4 13.4H4.468v-2.231H13.4zm4.47-6.7H4.468V4.468h13.4z",fill:"#ff473e"})))},path:"/dashboard/discussion"},{key:"vote",icon:function(e){return h.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 31.235 21.865"},e),i||(i=h.createElement("path",{"data-name":"Icon awesome-vote-yea",d:"M29.673 14.056H26.55v3.123h1.093a.436.436 0 01.469.39v.781a.436.436 0 01-.469.39H3.592a.436.436 0 01-.469-.39v-.78a.436.436 0 01.469-.39h1.093v-3.124H1.562A1.56 1.56 0 000 15.617v4.685a1.56 1.56 0 001.562 1.562h28.111a1.56 1.56 0 001.562-1.562v-4.685a1.56 1.56 0 00-1.562-1.561zm-4.685 3.123V1.576A1.576 1.576 0 0023.412 0H7.828a1.58 1.58 0 00-1.581 1.576v15.6zm-14.68-8.882l1.245-1.235a.52.52 0 01.742 0l2.016 2.03 4.645-4.602a.52.52 0 01.742 0l1.235 1.245a.52.52 0 010 .742l-6.262 6.208a.52.52 0 01-.742 0l-3.616-3.646a.52.52 0 010-.742z",fill:"#ff473e"})))},path:"/dashboard/votes"},{key:"user",icon:function(e){return h.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.933 23.398"},e),r||(r=h.createElement("g",{"data-name":"Icon feather-user-plus",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},h.createElement("path",{"data-name":"Path 11206",d:"M18.5 21.9v-2.267a4.533 4.533 0 00-4.534-4.533H6.033A4.533 4.533 0 001.5 19.633V21.9"}),h.createElement("path",{"data-name":"Path 11207",d:"M14.533 6.033A4.533 4.533 0 1110 1.5a4.533 4.533 0 014.533 4.533z"}),h.createElement("path",{"data-name":"Path 11208",d:"M23.033 7.166v6.8"}),h.createElement("path",{"data-name":"Path 11209",d:"M26.433 10.566h-6.8"}))))},path:"/dashboard/member-perks"},{key:"setting",icon:function(e){return h.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.09 27.09"},e),c||(c=h.createElement("g",{"data-name":"Icon feather-settings",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},h.createElement("path",{"data-name":"Path 11161",d:"M16.83 13.545a3.285 3.285 0 11-3.285-3.285 3.285 3.285 0 013.285 3.285z"}),h.createElement("path",{"data-name":"Path 11162",d:"M21.648 16.83a1.807 1.807 0 00.361 1.993l.066.066a2.192 2.192 0 11-3.1 3.1l-.066-.066a1.821 1.821 0 00-3.088 1.292v.185a2.19 2.19 0 01-4.38 0v-.1a1.807 1.807 0 00-1.183-1.653 1.807 1.807 0 00-1.993.361l-.066.066a2.192 2.192 0 11-3.1-3.1l.066-.066a1.821 1.821 0 00-1.292-3.088H3.69a2.19 2.19 0 110-4.38h.1a1.807 1.807 0 001.652-1.18 1.807 1.807 0 00-.361-1.993L5.015 8.2a2.192 2.192 0 113.1-3.1l.066.066a1.807 1.807 0 001.993.361h.088a1.807 1.807 0 001.095-1.653V3.69a2.19 2.19 0 014.38 0v.1a1.821 1.821 0 003.088 1.292l.066-.066a2.192 2.192 0 113.1 3.1l-.066.066a1.807 1.807 0 00-.361 1.993v.088a1.807 1.807 0 001.653 1.095h.183a2.19 2.19 0 010 4.38h-.1a1.807 1.807 0 00-1.653 1.095z"}))))},path:"/dashboard/settings"}],w=function(){var e=(0,o.v9)((function(e){return e.authReducer.userInfo.fullInfo})),l=(0,h.useState)(!1),s=l[0],a=l[1];return(0,h.useEffect)((function(){a("admin"===(null===e||void 0===e?void 0:e.role))}),[e]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(f.Zb,{className:"flex-col w-24 px-5 hidden lg:flex h-full overflow-y-scroll",children:[(0,x.jsx)("img",{className:"py-6 border-b-2 align-center border-primary",src:"/images/ic_logo_home.svg",alt:"Casper"}),(0,x.jsx)("ul",{className:" mb-4 flex flex-col items-center xl:pt-8 2xl:pt-12 ",children:N.map((function(e){return(0,x.jsx)("li",{className:"".concat(s?"xl:py-1 2xl:py-2":"py-3"),children:(0,x.jsx)(f.O$,{activeClassName:"shadow-activeLink",href:"".concat(s&&"dashboard"===e.key?"/admin/dashboard":e.path),children:(0,x.jsx)("a",{className:" rounded-lg inline-block  xl:p-2 2xl:p-3 ",children:(0,x.jsx)(e.icon,{width:s?"1.25rem":"1.5rem",height:s?"1.25rem":"1.5rem"})})})})}))}),s&&(0,x.jsxs)("ul",{className:"flex flex-col py-4 border-t-2 border-primary",children:[(0,x.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,x.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/dashboard",children:(0,x.jsx)("p",{children:"Admin"})})}),(0,x.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,x.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/intake",children:(0,x.jsx)("p",{children:"Intake"})})}),(0,x.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,x.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/users",children:(0,x.jsx)("p",{children:"Users"})})}),(0,x.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,x.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/ballots",children:(0,x.jsx)("p",{children:"Ballots"})})}),(0,x.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,x.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/perks",children:(0,x.jsx)("p",{children:"Perks"})})}),(0,x.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,x.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/teams",children:(0,x.jsx)("p",{children:"Teams"})})}),(0,x.jsx)("li",{className:"xl:py-1 2xl:py-1.5 cursor-pointer",children:(0,x.jsx)(f.O$,{activeClassName:"text-primary",href:"/admin/settings",children:(0,x.jsx)("p",{children:"Settings"})})})]})]}),(0,x.jsx)(m.Z,{className:"py-4 lg:hidden",theme:"dark"})]})};function y(e){var l=e.children;return(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"dashboard-layout",children:(0,x.jsxs)("div",{className:" relative h-screen h-px mx-auto flex flex-col max-w-404 px-4 lg:py-4 xl:py-20 2xl:py-24 2xl:min-h-105",children:[(0,x.jsxs)("div",{className:"flex h-full flex-col lg:flex-row",children:[(0,x.jsx)("div",{className:"flex-none",children:(0,x.jsx)(w,{})}),(0,x.jsx)("div",{className:"pt-12 lg:pt-0 lg:pl-6 dashboard-content flex-grow h-full",children:l})]}),(0,x.jsx)("div",{className:"absolute py-8 left-0 bottom-0 right-0",children:(0,x.jsx)(d.Z,{theme:"dark"})})]})})})}},2155:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return m}});var a=s(5893),t=s(5587),n=s(5955),i=s(7757),r=s.n(i),c=s(2137),x=s(9226),d=s(3022),o=function(){var e=(0,x.I0)(),l=(0,x.v9)((function(e){var l;return null===(l=e.authReducer.userInfo)||void 0===l?void 0:l.fullInfo}));return(0,a.jsxs)("div",{className:"flex flex-col mx-2 lg:mx-4 py-3 bg-white h-full",children:[(0,a.jsxs)("div",{className:"hidden lg:flex flex-col mx-3 lg:mx-5 pb-8 border-b-2 border-gray",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("img",{className:"pr-2",src:"/images/ic_awesome_user_circle.svg",alt:"User"}),(0,a.jsx)("span",{className:"text-2.5xl truncate",children:null===l||void 0===l?void 0:l.full_name})]}),(0,a.jsx)("button",{type:"button",className:"inline-flex text-xs text-primary underline",onClick:function(){var l=(0,c.Z)(r().mark((function l(s){return r().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:s.preventDefault(),e((0,d.Rg)());case 2:case"end":return l.stop()}}),l)})));return function(e){return l.apply(this,arguments)}}(),children:"Logout"})]}),(0,a.jsxs)("div",{className:"flex lg:hidden flex-col mt-2 mx-5 pb-8 border-b-2 border-gray h-1/10",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"text-lg font-normal",children:"Node Name"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"text-base font-thin overflow-hidden overflow-ellipsis",children:"0x961d61792ca1c5e08a3cec4261e08ef4eaea5b5d"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_down.svg",alt:"Info"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col pt-5 lg:pb-3 h-9/10",children:[(0,a.jsxs)("div",{className:"flex px-5",children:[(0,a.jsx)("span",{className:"text-lg font medium lg:font-normal",children:"Node Rank"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"h-full overflow-y-scroll",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"1"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"2"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"3"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"4"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"5"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5 lg:bg-primary",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 lg:text-white font-thin",children:"6"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-white font-thin bg-primary",children:"My Node"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"7"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"8"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"9"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"10"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"11"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"12"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"13"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"14"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"15"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"16"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"17"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"18"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"19"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center py-1 lg:rounded-2xl px-5",children:[(0,a.jsx)("div",{className:"w-8 lg:w-10",children:(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"20"})}),(0,a.jsx)("span",{className:"px-2 py-1 w-full rounded-2xl lg:pl-0 text-base text-black1 font-thin",children:"0x84a50xe09jb4z1pfbcya6"})]})]})]})]})},h=s(871),f=function(){var e={datasets:[{backgroundColor:"rgba(255,71,62, 0.7)",data:[1400,1600,1500,2e3,1800,1600,1850],fill:!0,fillOpacity:.6,label:"Current",pointRadius:0,showLine:!1},{borderColor:"#FF473E",borderDash:[5,5],data:[1500,1550,1650,1900,1700,1650,1780],fill:!1,label:"Previous",pointRadius:0,showLine:!0}],labels:["Sun","Mon","Tues","Wed","Thrs","Fri","Sat"]},l={maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1}},y:{grid:{borderDash:[5,5],drawBorder:!1}}}};return(0,a.jsxs)("div",{className:"flex flex-col lg:justify-between w-full h-full lg:pr-6",children:[(0,a.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap lg:h-1/10 -mx-3",children:[(0,a.jsx)("div",{className:"hidden lg:block lg:w-4/6 px-3 mb-3",children:(0,a.jsx)(t.Zb,{className:"lg:flex-grow",children:(0,a.jsxs)("div",{className:"flex flex-col px-9 py-4",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"text-lg font-normal",children:"Node Name"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"text-base font-thin",children:"0x961d61792ca1c5e08a3cec4261e08ef4eaea5b5d"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_down.svg",alt:"Info"})]})]})})}),(0,a.jsx)("div",{className:"w-2/4 lg:w-1/3 px-3 mb-3",children:(0,a.jsx)(t.Zb,{className:"lg:flex-none",children:(0,a.jsxs)("div",{className:"flex flex-col px-5 lg:px-9 py-4",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"text-base lg:text-lg lg:text-lg font-normal text-black1",children:"Stake Amount"}),(0,a.jsx)("img",{className:"hidden lg:block pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"2,502,815"})]})})}),(0,a.jsx)("div",{className:"w-2/4 lg:w-1/3 px-3 mb-3",children:(0,a.jsx)(t.Zb,{className:"lg:flex-none",children:(0,a.jsxs)("div",{className:"flex flex-col px-5 lg:px-9 py-4",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"text-base lg:text-lg lg:text-lg font-normal text-black1",children:"Delegators"}),(0,a.jsx)("img",{className:"hidden lg:block pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("span",{className:"text-base text-black1 font-thin",children:"8"})]})})})]}),(0,a.jsx)(t.Zb,{className:"block lg:hidden h-auto",children:(0,a.jsx)("div",{className:"h-auto w-full",children:(0,a.jsx)(o,{})})}),(0,a.jsxs)("div",{className:"flex flex-col lg:h-8.5/10 lg:justify-between",children:[(0,a.jsx)("div",{className:"hidden lg:flex my-10 lg:mt-0 h-auto lg:h-1/3",children:(0,a.jsx)(t.Zb,{className:"w-full px-9 py-5",children:(0,a.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-between",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("p",{className:"text-lg",children:"Validator Rewards"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("img",{className:"pl-10",src:"/images/ic_line_node.svg",alt:"Line"}),(0,a.jsx)("p",{className:"text-xs pl-2",children:"Previous"})]})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{className:"mt-4 lg:mt-0 flex items-center",children:[(0,a.jsx)("li",{className:"text-sm lg:mx-4",children:(0,a.jsx)("a",{children:"Day"})}),(0,a.jsx)("li",{className:"px-4",children:(0,a.jsx)("a",{className:"rounded-lg px-4 py-1 text-primary text-sm shadow-activeLink",children:"Week"})}),(0,a.jsx)("li",{className:"text-sm mx-4",children:(0,a.jsx)("a",{children:"Month"})}),(0,a.jsx)("li",{className:"text-sm mx-4",children:(0,a.jsx)("a",{children:"Year"})})]})})]}),(0,a.jsx)("div",{className:"h-full py-4",children:(0,a.jsx)(h.x1,{data:e,options:l})})]})})}),(0,a.jsxs)("div",{className:"flex flex-col-reverse mb-20 lg:mb-0 lg:flex-row auto lg:h-3/5",children:[(0,a.jsx)(t.Zb,{className:"flex-grow w-full lg:w-2/5 mt-5 lg:mt-0 lg:mr-3 h-full",children:(0,a.jsxs)("div",{className:"w-full px-9 py-5 flex flex-col h-full justify-between",children:[(0,a.jsx)("p",{className:"text-lg",children:"CPU Usage"}),(0,a.jsx)("div",{className:"h-full py-4",children:(0,a.jsx)(h.x1,{data:{datasets:[{borderColor:"#FF473E",borderWidth:1,data:[11,92,53,78,54],fill:!1,label:"CPU",pointRadius:0,showLine:!0}],labels:["12:00","13:00","14:00","15:00","16:00"]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1}},y:{grid:{borderDash:[5,5],drawBorder:!1},position:"left",ticks:{fontSize:10,max:100,min:0,stepSize:25,callback:function(e){return e+"%"}}}}}})})]})}),(0,a.jsxs)("div",{className:"flex flex-col justify-between w-full mt-5 lg:mt-0 lg:w-3/5 lg:ml-3 h-auto lg:h-full",children:[(0,a.jsxs)(t.Zb,{className:"flex flex-col justify-between px-5 lg:px-9 py-7 h-auto lg:h-3/5 w-full overflow-y-scroll",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row py-1",children:[(0,a.jsx)("span",{className:"text-lg",children:"Uptime"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("div",{className:"overflow-hidden h-4 mt-2 text-xs flex rounded-lg bg-gray bg-opacity-50",children:(0,a.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row py-1",children:[(0,a.jsx)("span",{className:"text-lg",children:"Peers"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("div",{className:"overflow-hidden h-4 mt-2 text-xs flex rounded-lg bg-gray bg-opacity-50",children:(0,a.jsx)("div",{className:"w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"49/88"})})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row py-1",children:[(0,a.jsx)("span",{className:"text-lg",children:"Performance"}),(0,a.jsx)("img",{className:"pl-3",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsx)("div",{className:"overflow-hidden h-4 mt-2 text-xs flex rounded-lg bg-gray bg-opacity-50",children:(0,a.jsx)("div",{className:"w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white font-thin justify-center bg-primary",children:"75%"})})]})]}),(0,a.jsxs)(t.Zb,{className:"flex flex-row mt-5 lg:mt-0 py-4 lg:py-6 lg:h-1/3",children:[(0,a.jsxs)("div",{className:"flex flex-col w-1/2 px-5 lg:px-0 border-r border-gray lg:pl-20 justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-lg",children:"Daily Earnings"}),(0,a.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"flex flex-row mt-3",children:[(0,a.jsx)("img",{width:"18px",height:"18px",src:"/images/ic_logo_home.svg",alt:"Info"}),(0,a.jsx)("span",{className:"text-base font-thin pl-3",children:"0.0154"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col px-5 lg:px-0 w-1/2 lg:pl-20 justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-lg",children:"Total Earnings"}),(0,a.jsx)("img",{className:"pl-3 lg:pl-5",src:"/images/ic_feather_info.svg",alt:"Info"})]}),(0,a.jsxs)("div",{className:"flex flex-row mt-3",children:[(0,a.jsx)("img",{width:"18px",height:"18px",src:"/images/ic_logo_home.svg",alt:"Info"}),(0,a.jsx)("span",{className:"text-base font-thin pl-3",children:"6.101297"})]})]})]}),(0,a.jsx)("div",{className:"flex lg:hidden mt-5 h-auto",children:(0,a.jsx)(t.Zb,{className:"w-full px-9 py-5",children:(0,a.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-between",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("p",{className:"text-2xl",children:"Validator Rewards"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("img",{className:"lg:pl-10",src:"/images/ic_line_node.svg",alt:"Line"}),(0,a.jsx)("p",{className:"text-xs pl-2",children:"Previous"})]})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{className:"mt-4 lg:mt-0 flex items-center",children:[(0,a.jsx)("li",{className:"text-sm lg:mx-4",children:(0,a.jsx)("a",{children:"Day"})}),(0,a.jsx)("li",{className:"px-4",children:(0,a.jsx)("a",{className:"rounded-lg px-4 py-1 text-primary text-sm shadow-activeLink",children:"Week"})}),(0,a.jsx)("li",{className:"text-sm mx-4",children:(0,a.jsx)("a",{children:"Month"})}),(0,a.jsx)("li",{className:"text-sm mx-4",children:(0,a.jsx)("a",{children:"Year"})})]})})]}),(0,a.jsx)("div",{className:"h-full py-4",children:(0,a.jsx)(h.x1,{data:e,options:l})})]})})})]})]})]})]})},m=(0,s(4015).a)((function(){return(0,a.jsx)(n.Z,{children:(0,a.jsxs)("div",{className:"flex h:auto lg:h-full",children:[(0,a.jsx)(f,{}),(0,a.jsx)(t.Zb,{className:"hidden lg:block h-full",children:(0,a.jsx)("div",{className:"h-full w-80",children:(0,a.jsx)(o,{})})})]})})}),"final-all")},9426:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/nodes",function(){return s(2155)}])}},function(e){e.O(0,[9774,2554,7570,1282,8930,6993,6095,4733,4982,4004],(function(){return l=9426,e(e.s=l);var l}));var l=e.O();_N_E=l}]);