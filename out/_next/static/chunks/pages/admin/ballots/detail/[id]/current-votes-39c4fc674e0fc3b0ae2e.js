(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1381,9872],{5708:function(e,n,t){"use strict";var r,a=t(7294);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}n.Z=function(e){return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 22.454 27.445"},e),r||(r=a.createElement("path",{d:"M11.227 0L0 4.99v7.485c0 6.923 4.79 13.4 11.227 14.97 6.437-1.572 11.227-8.046 11.227-14.97V4.99zM8.732 19.96l-4.99-4.99L5.5 13.211l3.231 3.218 8.221-8.221 1.759 1.771z",fill:"#ff473e"})))}},4015:function(e,n,t){"use strict";t.d(n,{a:function(){return d}});var r=t(6156),a=t(5893),i=t(7294),l=t(1163),o=t(9226);var s=t(4791);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var d=function(e,n){return function(t){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,n=void 0===e?"public":e,t=(0,o.v9)((function(e){return e.authReducer.userInfo}));return(0,i.useEffect)((function(){if("public"!==n&&n&&t)if(t&&null!==t&&void 0!==t&&t.isLoggedIn)if("member"===t.role){if("auth"===n)return"verifying"===t.period&&l.default.push("/verify-email"),"onboarding"===t.period&&l.default.push("/onboard"),void("final"===t.period&&l.default.push("/dashboard"));if("verifying"===n)return"onboarding"===t.period&&l.default.push("/onboard"),void("final"===t.period&&l.default.push("/dashboard"));if("onboarding"===n)return"verifying"===t.period&&l.default.push("/verify-email"),void("final"===t.period&&l.default.push("/dashboard"));if("final-member"===n||"final-all"===n)return"verifying"===t.period&&l.default.push("/verify-email"),void("onboarding"===t.period&&l.default.push("/onboard"));"final-admin"===n&&("verifying"===t.period&&l.default.push("/verify-email"),"onboarding"===t.period&&l.default.push("/onboard"),"final"===t.period&&l.default.push("/dashboard"))}else"admin"===t.role&&"final-all"!==n&&"final-admin"!==n&&l.default.push("/admin/dashboard");else"auth"!==n&&l.default.push("/login")}),[t,n]),{user:t}}({urlType:n}).user;if(n&&"public"!==n){if(!d)return(0,a.jsx)(s.Z,{});if("auth"===n&&d.isLoggedIn)return(0,a.jsx)(s.Z,{});if("auth"!==n&&!d.isLoggedIn)return(0,a.jsx)(s.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(n)&&"final"!==d.period)return(0,a.jsx)(s.Z,{});if(["verifying"].includes(n)&&"verifying"!==d.period)return(0,a.jsx)(s.Z,{});if(["onboarding"].includes(n)&&"onboarding"!==d.period)return(0,a.jsx)(s.Z,{})}if("admin"===d.role&&["verifying","onboarding","final-member"].includes(n))return(0,a.jsx)(s.Z,{})}return(0,a.jsx)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t))}}},4791:function(e,n,t){"use strict";var r=t(5893),a=t(733),i=t.n(a);n.Z=function(){return(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,r.jsx)(i(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},5955:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var r,a,i,l,o,s,c=t(5893),d=t(4504),u=t(9226),p=t(7294),h=t(8569),f=t(6570);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var E=function(e){return p.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.09 27.09"},e),s||(s=p.createElement("g",{"data-name":"Icon feather-settings",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},p.createElement("path",{"data-name":"Path 11161",d:"M16.83 13.545a3.285 3.285 0 11-3.285-3.285 3.285 3.285 0 013.285 3.285z"}),p.createElement("path",{"data-name":"Path 11162",d:"M21.648 16.83a1.807 1.807 0 00.361 1.993l.066.066a2.192 2.192 0 11-3.1 3.1l-.066-.066a1.821 1.821 0 00-3.088 1.292v.185a2.19 2.19 0 01-4.38 0v-.1a1.807 1.807 0 00-1.183-1.653 1.807 1.807 0 00-1.993.361l-.066.066a2.192 2.192 0 11-3.1-3.1l.066-.066a1.821 1.821 0 00-1.292-3.088H3.69a2.19 2.19 0 110-4.38h.1a1.807 1.807 0 001.652-1.18 1.807 1.807 0 00-.361-1.993L5.015 8.2a2.192 2.192 0 113.1-3.1l.066.066a1.807 1.807 0 001.993.361h.088a1.807 1.807 0 001.095-1.653V3.69a2.19 2.19 0 014.38 0v.1a1.821 1.821 0 003.088 1.292l.066-.066a2.192 2.192 0 113.1 3.1l-.066.066a1.807 1.807 0 00-.361 1.993v.088a1.807 1.807 0 001.653 1.095h.183a2.19 2.19 0 010 4.38h-.1a1.807 1.807 0 00-1.653 1.095z"}))))},b=[{key:"dashboard",icon:function(e){return p.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.71 24.9"},e),r||(r=p.createElement("g",{"data-name":"Icon feather-home",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},p.createElement("path",{"data-name":"Path 11159",d:"M1.5 9.165L11.355 1.5l9.855 7.665V21.21a2.19 2.19 0 01-2.19 2.19H3.69a2.19 2.19 0 01-2.19-2.19z"}),p.createElement("path",{"data-name":"Path 11160",d:"M8.07 23.4V12.45h6.57V23.4"}))))},path:"/dashboard"},{key:"info",icon:function(e){return p.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 23 22.02"},e),a||(a=p.createElement("g",{"data-name":"Group 1075",fill:"none",stroke:"#ff473e",strokeWidth:3},p.createElement("path",{"data-name":"Path 11164",d:"M11.5 22.02V.001"}),p.createElement("path",{"data-name":"Path 11166",d:"M16.5 17.742V4.278"}),p.createElement("path",{"data-name":"Path 11167",d:"M21.5 13.493V8.528"}),p.createElement("path",{"data-name":"Path 11165",d:"M6.5 17.742V4.278"}),p.createElement("path",{"data-name":"Path 11168",d:"M1.5 13.493V8.528"}))))},path:"/dashboard/nodes"},{key:"chat",icon:function(e){return p.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 22.338 22.338"},e),i||(i=p.createElement("path",{"data-name":"Icon material-chat",d:"M20.1 0H2.234A2.231 2.231 0 00.011 2.234L0 22.338l4.468-4.468H20.1a2.24 2.24 0 002.234-2.234V2.234A2.24 2.24 0 0020.1 0zM4.468 7.818h13.4v2.234h-13.4zM13.4 13.4H4.468v-2.231H13.4zm4.47-6.7H4.468V4.468h13.4z",fill:"#ff473e"})))},path:"/dashboard/discussion"},{key:"vote",icon:function(e){return p.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 31.235 21.865"},e),l||(l=p.createElement("path",{"data-name":"Icon awesome-vote-yea",d:"M29.673 14.056H26.55v3.123h1.093a.436.436 0 01.469.39v.781a.436.436 0 01-.469.39H3.592a.436.436 0 01-.469-.39v-.78a.436.436 0 01.469-.39h1.093v-3.124H1.562A1.56 1.56 0 000 15.617v4.685a1.56 1.56 0 001.562 1.562h28.111a1.56 1.56 0 001.562-1.562v-4.685a1.56 1.56 0 00-1.562-1.561zm-4.685 3.123V1.576A1.576 1.576 0 0023.412 0H7.828a1.58 1.58 0 00-1.581 1.576v15.6zm-14.68-8.882l1.245-1.235a.52.52 0 01.742 0l2.016 2.03 4.645-4.602a.52.52 0 01.742 0l1.235 1.245a.52.52 0 010 .742l-6.262 6.208a.52.52 0 01-.742 0l-3.616-3.646a.52.52 0 010-.742z",fill:"#ff473e"})))},path:"/dashboard/votes"},{key:"user",icon:function(e){return p.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 27.933 23.398"},e),o||(o=p.createElement("g",{"data-name":"Icon feather-user-plus",fill:"none",stroke:"#ff473e",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},p.createElement("path",{"data-name":"Path 11206",d:"M18.5 21.9v-2.267a4.533 4.533 0 00-4.534-4.533H6.033A4.533 4.533 0 001.5 19.633V21.9"}),p.createElement("path",{"data-name":"Path 11207",d:"M14.533 6.033A4.533 4.533 0 1110 1.5a4.533 4.533 0 014.533 4.533z"}),p.createElement("path",{"data-name":"Path 11208",d:"M23.033 7.166v6.8"}),p.createElement("path",{"data-name":"Path 11209",d:"M26.433 10.566h-6.8"}))))},path:"/dashboard/member-perks"},{key:"verification",icon:t(5708).Z,path:"/dashboard/verification"},{key:"setting",icon:E,path:"/dashboard/settings"}],_=function(){var e=(0,u.v9)((function(e){return e.authReducer.userInfo.fullInfo})),n=(0,p.useState)(!1),t=n[0],r=n[1],a=(0,p.useState)(!1),i=a[0],l=a[1];return(0,p.useEffect)((function(){var n;r("admin"===(null===e||void 0===e?void 0:e.role)),l("approved"===(null===e||void 0===e||null===(n=e.profile)||void 0===n?void 0:n.status))}),[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(h.Zb,{className:"flex-col w-24 px-5 hidden lg:flex h-full overflow-y-scroll",children:[(0,c.jsx)("img",{className:"py-6 border-b-2 align-center border-primary",src:"/images/ic_logo_home.svg",alt:"Casper"}),(0,c.jsx)("ul",{className:" mb-4 flex flex-col items-center lg:pt-8 xl:pt-8 2xl:pt-12 ",children:b.map((function(e,n){return(0,c.jsx)(c.Fragment,{children:(t||i)&&"verification"===e.key?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)("li",{className:"".concat(t?"lg:py-1 2xl:py-2":"py-3"),children:(0,c.jsx)(h.O$,{activeClassName:"shadow-activeLink",href:"".concat(t&&"dashboard"===e.key?"/admin/dashboard":e.path),children:(0,c.jsx)("a",{className:" rounded-lg inline-block  xl:p-2 2xl:p-3 ",children:(0,c.jsx)(e.icon,{width:t?"1.25rem":"1.5rem",height:t?"1.25rem":"1.5rem"})})})},n)})}))}),t&&(0,c.jsxs)("ul",{className:"flex flex-col py-4 border-t-2 border-primary",children:[(0,c.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(h.O$,{activeClassName:"text-primary",href:"/admin/dashboard",children:(0,c.jsx)("p",{children:"Admin"})})}),(0,c.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(h.O$,{activeClassName:"text-primary",href:"/admin/intake",children:(0,c.jsx)("p",{children:"Intake"})})}),(0,c.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(h.O$,{activeClassName:"text-primary",href:"/admin/users",children:(0,c.jsx)("p",{children:"Users"})})}),(0,c.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(h.O$,{activeClassName:"text-primary",href:"/admin/ballots",children:(0,c.jsx)("p",{children:"Ballots"})})}),(0,c.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(h.O$,{activeClassName:"text-primary",href:"/admin/perks",children:(0,c.jsx)("p",{children:"Perks"})})}),(0,c.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(h.O$,{activeClassName:"text-primary",href:"/admin/teams",children:(0,c.jsx)("p",{children:"Teams"})})}),(0,c.jsx)("li",{className:"lg:py-1 2xl:py-1.5 cursor-pointer",children:(0,c.jsx)(h.O$,{activeClassName:"text-primary",href:"/admin/settings",children:(0,c.jsx)("p",{children:"Settings"})})})]})]}),(0,c.jsx)(f.Z,{className:"py-4 lg:hidden",theme:"dark"})]})};function w(e){var n=e.children;return(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"dashboard-layout",children:(0,c.jsxs)("div",{className:" relative h-screen h-px mx-auto flex flex-col px-4 lg:pt-10 lg:pb-20 lg:max-w-380 xl:py-20 xl:max-w-404  2xl:py-24 2xl:min-h-105",children:[(0,c.jsxs)("div",{className:"flex h-full flex-col lg:flex-row",children:[(0,c.jsx)("div",{className:"flex-none",children:(0,c.jsx)(_,{})}),(0,c.jsx)("div",{className:"pt-12 lg:pt-0 lg:pl-6 dashboard-content flex-grow h-full",children:n})]}),(0,c.jsx)("div",{className:"absolute py-8 left-0 bottom-0 right-0",children:(0,c.jsx)(d.Z,{theme:"dark"})})]})})})}},6407:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(7329),i=t(2465),l=t(1163),o=t(7294),s=t(9226),c=t(9163),d=t(4015),u=t(5955),p=t(8569),h=t(7028),f=t(9586);function m(){var e=(0,i.Z)(["\n  .active-votes-table {\n    .col-1 {\n      width: 30%;\n    }\n    .col-2 {\n      width: 30%;\n    }\n    .col-3 {\n      width: 30%;\n    }\n    .col-4 {\n      width: 10%;\n    }\n  }\n"]);return m=function(){return e},e}function v(){var e=(0,i.Z)(["\n  .active-ballot-table {\n    width: 100%;\n    & > tr {\n      td {\n        vertical-align: top;\n        padding-bottom: 30px;\n      }\n      td:nth-child(1) {\n        width: 25%;\n      }\n      td:nth-child(2) {\n        width: 75%;\n      }\n    }\n  }\n"]);return v=function(){return e},e}var y=c.ZP.div(v()),x=c.ZP.div(m());n.default=(0,d.a)((function(){var e,n=(0,o.useState)(),t=n[0],i=n[1],c=(0,o.useState)([]),d=c[0],m=c[1],v=(0,o.useState)(1),j=v[0],g=v[1],E=(0,o.useState)(!0),b=E[0],_=E[1],w=l.default.query.id,N=(0,s.I0)(),O=function(){N((0,h.TT)({id:w,page:j},(function(e,n){_(n),m((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e))})),g((function(e){return e+1}))})))};return(0,o.useEffect)((function(){N((0,h.Lx)(w,(function(e){i(e)}))),O()}),[w]),(0,r.jsx)(u.Z,{children:(0,r.jsx)(p.Zb,{className:"h-full lg:pl-24 lg:py-11 lg:shadow-2xl",noShadow:!0,children:(0,r.jsxs)("div",{className:"w-full h-full",children:[(0,r.jsxs)("div",{className:"card-header lg:mr-24 lg:h-70px",children:[(0,r.jsx)(p.xE,{href:"/admin/ballots/detail/".concat(w),text:"Back",force:!0}),(0,r.jsx)("div",{className:"flex justify-between items-center mb-3.5",children:(0,r.jsx)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium",children:"Current Votes"})}),(0,r.jsx)("div",{className:"border-primary border-b-2"})]}),(0,r.jsxs)("div",{className:"card-body pt-8 pb-28 overflow-y-auto lg:h-100%-70px",children:[(0,r.jsx)(y,{className:"lg:pr-24",children:(0,r.jsxs)("table",{className:"active-ballot-table border-0",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Ballot Title:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:null===t||void 0===t?void 0:t.title})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Start Time:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:(0,f.p)(null===t||void 0===t?void 0:t.created_at,"dd/MM/yyyy - hh:mm aaa")})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Time Remaining:"})}),(0,r.jsx)("td",{children:t&&(0,r.jsx)(p.ZF,{className:"w-40",endTime:new Date(null===t||void 0===t?void 0:t.time_end),startTime:new Date(null===t||void 0===t?void 0:t.created_at)})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Total Votes:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:null===t||void 0===t||null===(e=t.vote)||void 0===e?void 0:e.result_count})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Split:"})}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:(0,r.jsx)(p.L3,{splitFor:null===t||void 0===t?void 0:t.split_for,splitAgainst:null===t||void 0===t?void 0:t.split_against})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{children:"Final Result:"})}),(0,r.jsxs)("td",{children:["active"!==(null===t||void 0===t?void 0:t.status)&&(0,r.jsx)(p.r2,{content:null===t||void 0===t?void 0:t.status,className:"uppercase"}),"active"===(null===t||void 0===t?void 0:t.status)&&"-"]})]})]})}),(0,r.jsx)(x,{className:"lg:pr-24 max-h-96",children:(0,r.jsxs)(p.iA,{className:"active-votes-table pt-3 max-h-96",onLoadMore:O,hasMore:b,dataLength:null===d||void 0===d?void 0:d.length,children:[(0,r.jsxs)(p.iA.Header,{children:[(0,r.jsx)(p.iA.HeaderCell,{children:(0,r.jsx)("p",{className:"py-2",children:"User ID"})}),(0,r.jsx)(p.iA.HeaderCell,{children:(0,r.jsx)("p",{className:"py-2",children:"Email"})}),(0,r.jsx)(p.iA.HeaderCell,{children:(0,r.jsx)("p",{className:"py-2",children:"Time of Vote"})}),(0,r.jsx)(p.iA.HeaderCell,{children:(0,r.jsx)("p",{className:"py-2",children:"Direction"})})]}),(0,r.jsx)(p.iA.Body,{children:d.map((function(e,n){return(0,r.jsxs)(p.iA.BodyRow,{children:[(0,r.jsx)(p.iA.BodyCell,{children:(0,r.jsx)("p",{children:e.user_id})}),(0,r.jsx)(p.iA.BodyCell,{children:(0,r.jsx)("p",{className:"truncate",children:e.user.email})}),(0,r.jsxs)(p.iA.BodyCell,{children:[(0,r.jsx)("p",{children:(0,f.p)(e.created_at,"hh:mmaaa")}),(0,r.jsx)("p",{children:(0,f.p)(e.created_at,"dd/MM/yyyy")})]}),(0,r.jsx)(p.iA.BodyCell,{children:(0,r.jsx)(p.r2,{className:"capitalize",content:e.type})})]},n)}))})]})})]})]})})})}),"final-all")},9586:function(e,n,t){"use strict";t.d(n,{p:function(){return a},e:function(){return i}});var r=t(8661),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",t=new Date(e);return"Invalid Date"===t.toString()?t.toString():(0,r.Z)(t,n)},i=function(e){return e?"".concat(e.substr(0,10),"...").concat(e.substr(-4)):"-"}},7028:function(e,n,t){"use strict";t.d(n,{lL:function(){return r},yW:function(){return a},nE:function(){return i},FH:function(){return l},C4:function(){return o},iA:function(){return s},Xp:function(){return c},ed:function(){return d},c8:function(){return u},fX:function(){return p},Od:function(){return h},fI:function(){return f},yG:function(){return m},Lx:function(){return v},TT:function(){return y},I2:function(){return x},MC:function(){return j},CQ:function(){return g},ie:function(){return E},Hi:function(){return b},zb:function(){return _},QT:function(){return w},cX:function(){return N},b$:function(){return O},y3:function(){return T},Nk:function(){return A},Xs:function(){return L},O2:function(){return S},J5:function(){return I},og:function(){return C},Xj:function(){return R},lf:function(){return k},D:function(){return P},Vk:function(){return M}});var r=function(e,n){return{type:"GET_LIST_MEMBER",payload:e,callback:n}},a=function(e){return{type:"GET_LIST_MEMBER_SUCCESS",payload:e}},i=function(e){return{type:"GET_USER_DETAIL",payload:e}},l=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},o=function(e){return{type:"GET_USER_KYC_INFO",payload:e}},s=function(e){return{type:"GET_USER_KYC_INFO_SUCCESS",payload:e}},c=function(e){return{type:"APPROVE_KYC",payload:e}},d=function(e){return{type:"DENY_KYC",payload:e}},u=function(e,n){return{type:"GET_LIST_INTAKE",payload:e,successCb:n}},p=function(e,n){return{type:"GET_LIST_VERIFICATIONS",payload:e,resolve:n}},h=function(e){return{type:"GET_LIST_INTAKE_SUCCESS",payload:e}},f=function(e){return{type:"GET_LIST_INTAKE_ERROR",payload:e}},m=function(e,n){return{type:"GET_BALLOTS",payload:e,callback:n}},v=function(e,n){return{type:"GET_BALLOT_DETAIL",payload:e,callback:n}},y=function(e,n){return{type:"GET_BALLOT_VOTES",payload:e,callback:n}},x=function(e,n,t){return{type:"SUBMIT_BALLOT",payload:e,resolve:n,reject:t}},j=function(e,n,t){return{type:"CANCEL_BALLOT",payload:e,resolve:n,reject:t}},g=function(e){return{type:"CANCEL_BALLOT_SUCCESS",payload:e}},E=function(e){return{type:"CANCEL_BALLOT_ERROR",payload:e}},b=function(e,n,t){return{type:"APPROVE_USER",payload:e,resolve:n,reject:t}},_=function(e,n,t){return{type:"RESET_USER",payload:e,resolve:n,reject:t}},w=function(e,n,t){return{type:"BAN_USER",payload:e,resolve:n,reject:t}},N=function(e,n,t){return{type:"BAN_VERIFIED_USER",payload:e,resolve:n,reject:t}},O=function(e,n,t){return{type:"APPROVED_DOCUMENTS",payload:e,resolve:n,reject:t}},T=function(e,n){return{type:"GET_LIST_VERIFICATION_DETAIL",payload:e,resolve:n}},A=function(e,n,t){return{type:"APPROVE_USER_AML",payload:e,resolve:n,reject:t}},L=function(e,n,t){return{type:"RESET_USER_AML",payload:e,resolve:n,reject:t}},S=function(e,n,t){return{type:"APPROVE_USER_KYC",payload:e,resolve:n,reject:t}},I=function(e,n,t){return{type:"RESET_USER_KYC",payload:e,resolve:n,reject:t}},C=function(e,n){return{type:"GET_EMAILER_DATA",resolve:e,reject:n}},R=function(e,n,t){return{type:"ADD_EMAILER_ADMIN",payload:e,resolve:n,reject:t}},k=function(e,n,t){return{type:"DELETE_EMAILER_ADMIN",payload:e,resolve:n,reject:t}},P=function(e,n,t){return{type:"UPDATE_EMAILER_TRIGGER_USER",payload:e,resolve:n,reject:t}},M=function(e,n,t){return{type:"UPDATE_EMAILER_TRIGGER_ADMIN",payload:e,resolve:n,reject:t}}},4184:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/ballots/detail/[id]/current-votes",function(){return t(6407)}])}},function(e){e.O(0,[9774,2554,1282,8930,6993,6095,8661,5679],(function(){return n=4184,e(e.s=n);var n}));var n=e.O();_N_E=n}]);