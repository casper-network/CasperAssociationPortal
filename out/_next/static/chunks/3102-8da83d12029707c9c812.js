(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3102],{72935:function(e,t,i){"use strict";var n,s=i(67294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}t.Z=function(e){return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 17 38"},e),n||(n=s.createElement("path",{d:"M1.193 20.334a2 2 0 010-2.667L13.51 3.9A2 2 0 0117 5.235v27.53a2 2 0 01-3.49 1.335z",fill:"#fff"})))}},11168:function(e,t,i){"use strict";var n,s=i(67294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}t.Z=function(e){return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 8.392 4.695"},e),n||(n=s.createElement("path",{"data-name":"Path 11155",d:"M.707.707l3.489 3.488L7.684.707",fill:"none",stroke:"#9a9a9a",strokeLinecap:"round",strokeLinejoin:"round"})))}},9420:function(e,t,i){"use strict";var n,s=i(67294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}t.Z=function(e){return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 41.191 41.191"},e),n||(n=s.createElement("path",{"data-name":"Icon metro-cross",d:"M40.815 33.092l-12.5-12.5 12.5-12.5a1.29 1.29 0 000-1.82l-5.9-5.9a1.291 1.291 0 00-1.82 0l-12.5 12.5L8.099.372a1.29 1.29 0 00-1.82 0l-5.9 5.9a1.29 1.29 0 000 1.82l12.5 12.5-12.5 12.5a1.29 1.29 0 000 1.82l5.9 5.9a1.29 1.29 0 001.82 0l12.5-12.5 12.5 12.5a1.29 1.29 0 001.82 0l5.9-5.9a1.29 1.29 0 000-1.82z",fill:"currentColor"})))}},50368:function(e,t,i){"use strict";i.d(t,{F:function(){return y}});var n=i(85893),s=i(96156),r=i(42283),o=i(49226),a=i(67294),l=i(11163),c=i(59936),d=i(89),h=i(87028),u=i(29586),p=i(11168),f=i(71376),m=i(96476),x=i(56073);function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var y=a.memo((function(e){var t,i,s,v,y,g,j,w,N,k,_,O,C,S,E=e.editMode,M=e.value,T=e.onChangeValue,D=e.onEditing,Z=(0,a.useState)(!1),P=Z[0],L=Z[1],I=(0,a.useState)(!1),B=I[0],F=I[1],q=(0,a.useState)(null),H=q[0],z=q[1],W=(0,a.useContext)(x.AppContext).setLoading,A=(0,o.I0)(),R=(0,r.cI)({mode:"onChange"}),U=R.register,Q=(R.setValue,R.watch),X=R.control,Y=R.handleSubmit,V=R.formState,$=R.reset,K=Q();(0,a.useEffect)((function(){T(K)}),[K]),(0,a.useEffect)((function(){E&&M&&$(M)}),[M]),(0,a.useEffect)((function(){(null===M||void 0===M?void 0:M.id)===(null===H||void 0===H?void 0:H.id)&&z(null)}),[M,H]),(0,a.useEffect)((function(){W(!0),G(),E&&F(!0)}),[]);var G=function(){A((0,h.xC)((function(e){W(!1),z(e)}),(function(){W(!1)})))},J=function(e){E&&(F(e),D(!e))};return(0,n.jsx)("form",{onSubmit:Y((function(e){var t=e;L(!0),t.start_date&&(t.start_date=(0,u.p)(new Date(e.start_date),"yyyy-MM-dd")),t.end_date&&(t.end_date=(0,u.p)(new Date(e.end_date),"yyyy-MM-dd")),t.setting=t.setting?1:0,E?A((0,h.t)({id:M.id,data:b({},t)},(function(){l.default.push("/admin/settings/notifications")}),(function(){L(!1)}))):(H&&(t.high_priority=0),A((0,h.wN)(t,(function(){l.default.push("/admin/settings/notifications")}),(function(){L(!1)}))))})),children:(0,n.jsxs)("div",{className:"mt-4 pb-8 relative",children:[(0,n.jsxs)("div",{className:"w-full lg:w-3/12 pb-10 relative ".concat(B||E?"opacity-50 pointer-events-none":"opacity-100"),children:[(0,n.jsx)("label",{htmlFor:"notification-type text-lg font-medium",children:"Notification Type"}),(0,n.jsxs)("div",{id:"notification-type",className:"relative mt-2 border border-gray1 w-full flex-1 h-14 px-5 shadow-md focus:outline-none",children:[(0,n.jsx)(r.Qr,{name:"type",rules:{required:!0},control:X,render:function(e){var t=e.field;t.value,t.onChange;return(0,n.jsxs)("select",b(b({className:"w-full h-full cursor-pointer ".concat(E?"pointer-events-none":""),required:!0},U("type")),{},{children:[(0,n.jsx)("option",{selected:!0,value:"",disabled:!0,children:"Select Type"}),(0,n.jsx)("option",{value:"Banner",children:"Banner"}),(0,n.jsx)("option",{value:"Popup",children:"Popup"})]}))}}),(0,n.jsx)(p.Z,{className:"absolute right-7 top-5"})]})]}),null!==K&&void 0!==K&&K.type?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-full ".concat(B?"opacity-50 pointer-events-none":"opacity-100"),children:["Banner"===K.type?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-full lg:w-5/12 pb-10 relative ".concat(H&&!B?"opacity-50 pointer-events-none":"opacity-100"),children:[(0,n.jsx)("label",{htmlFor:"priority",children:"High Priority? Should this show IN FRONT OF all other banners?"}),(0,n.jsx)(r.Qr,{name:"high_priority",control:X,render:function(e){var t=e.field,i=(t.value,t.onChange);return(0,n.jsxs)("div",{className:"flex items-center mt-2",children:[(0,n.jsxs)("label",{className:"radio-square relative flex items-center",children:[(0,n.jsx)("input",{name:"high_priority",type:"radio",className:"text-primary",value:"1",checked:K.high_priority,onChange:function(e){i(e)}}),(0,n.jsx)("i",{children:+K.high_priority?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.Z,{})}),(0,n.jsx)("span",{className:"text-sm text-dark1 pl-2",children:"YES"})]}),(0,n.jsxs)("label",{className:"radio-square relative ml-20 flex items-center",children:[(0,n.jsx)("input",{name:"high_priority",type:"radio",className:"text-primary",value:"0",checked:0===+K.high_priority||H,onChange:function(e){i(e)}}),(0,n.jsx)("i",{children:0===+K.high_priority||H?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.Z,{})}),(0,n.jsx)("span",{className:"text-sm text-dark1 pl-2",children:"NO"})]})]})}}),!!H&&!B&&(0,n.jsxs)("p",{className:"mt-2 text-primary text-sm",children:["Alert number ",H.id," currently has high priority selected. You must edit and remove the high priority status from Alert number"," ",H.id," before adding it here."]})]}),(0,n.jsxs)("div",{className:"w-full lg:w-5/12 pb-10 relative",children:[(0,n.jsx)("label",{children:"Allow user to dismiss? If YES, a dismiss button will be available."}),(0,n.jsx)(r.Qr,{name:"allow_dismiss_btn",rules:{required:"Please check this setting"},control:X,render:function(e){var t=e.field,i=(t.value,t.onChange);return(0,n.jsxs)("div",{className:"flex items-center mt-2",children:[(0,n.jsxs)("label",{className:"radio-square relative flex items-center",children:[(0,n.jsx)("input",{name:"allow_dismiss_btn",type:"radio",className:"text-primary",value:"1",checked:+K.allow_dismiss_btn,onChange:function(e){i(e)}}),(0,n.jsx)("i",{children:+K.allow_dismiss_btn?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.Z,{})}),(0,n.jsx)("span",{className:"text-sm text-dark1 pl-2",children:"YES"})]}),(0,n.jsxs)("label",{className:"radio-square relative ml-20 flex items-center",children:[(0,n.jsx)("input",{name:"allow_dismiss_btn",type:"radio",className:"text-primary",value:"0",checked:0===+K.allow_dismiss_btn,onChange:function(e){i(e)}}),(0,n.jsx)("i",{children:0===+K.allow_dismiss_btn?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.Z,{})}),(0,n.jsx)("span",{className:"text-sm text-dark1 pl-2",children:"NO"})]})]})}}),(null===(t=V.errors)||void 0===t?void 0:t.allow_dismiss_btn)&&(0,n.jsx)("p",{className:"mt-2 text-primary text-sm",children:null===(i=V.errors.allow_dismiss_btn)||void 0===i?void 0:i.message})]})]}):(0,n.jsxs)("div",{className:"w-full lg:w-5/12 pb-10 relative",children:[(0,n.jsx)("label",{children:"Show on every login? If NO, each user will only see this ONCE."}),(0,n.jsx)(r.Qr,{name:"show_login",rules:{required:"Please check this setting"},control:X,render:function(e){var t=e.field,i=(t.value,t.onChange);return(0,n.jsxs)("div",{className:"flex items-center mt-2",children:[(0,n.jsxs)("label",{className:"radio-square relative flex items-center",children:[(0,n.jsx)("input",{name:"show_login",type:"radio",className:"text-primary",value:"1",checked:K.show_login,onChange:function(e){i(e)}}),(0,n.jsx)("i",{children:+K.show_login?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.Z,{})}),(0,n.jsx)("span",{className:"text-sm text-dark1 pl-2",children:"YES"})]}),(0,n.jsxs)("label",{className:"radio-square relative ml-20 flex items-center",children:[(0,n.jsx)("input",{name:"show_login",type:"radio",className:"text-primary",value:"0",checked:0===+K.show_login,onChange:function(e){i(e)}}),(0,n.jsx)("i",{children:0===+K.show_login?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.Z,{})}),(0,n.jsx)("span",{className:"text-sm text-dark1 pl-2",children:"NO"})]})]})}}),(null===(s=V.errors)||void 0===s?void 0:s.show_login)&&(0,n.jsx)("p",{className:"mt-2 text-primary text-sm",children:null===(v=V.errors.show_login)||void 0===v?void 0:v.message})]}),(0,n.jsxs)("div",{className:"w-full lg:w-9/12 pb-10 relative",children:[(0,n.jsx)("label",{htmlFor:"title",children:"Banner"===K.type?"Banner Title Text":"Popup Header Text"}),(0,n.jsx)("input",b({id:"title",type:"text",className:"mt-2 border border-gray1 w-full flex-1 h-14 px-5 shadow-md focus:outline-none",placeholder:"Banner"===K.type?"Limit 60 characters":"Limit 150 characters",maxLength:"Banner"===K.type?60:150},U("title",{required:"Title is required"}))),(null===(y=V.errors)||void 0===y?void 0:y.title)&&(0,n.jsx)("p",{className:"mt-2 text-primary text-sm",children:null===(g=V.errors.title)||void 0===g?void 0:g.message})]}),(0,n.jsxs)("div",{className:"w-full lg:w-9/12 pb-10 relative",children:[(0,n.jsx)("label",{htmlFor:"content",children:"Banner"===K.type?"Banner Body Text":"Popup Body Text"}),(0,n.jsx)("textarea",b({id:"content",type:"text",rows:"5",className:"mt-2 border border-gray1 w-full flex-1 p-5 shadow-md focus:outline-none",placeholder:"Limit 200 characters",maxLength:"200"},U("body",{required:"Content is required"}))),(null===(j=V.errors)||void 0===j?void 0:j.body)&&(0,n.jsx)("p",{className:"mt-2 text-primary text-sm",children:null===(w=V.errors.body)||void 0===w?void 0:w.message})]}),(0,n.jsxs)("div",{className:"w-full lg:w-8/12 flex-grow relative pb-10",children:[(0,n.jsx)("label",{htmlFor:"title",children:"Have call to action button? "}),(0,n.jsx)(r.Qr,{name:"have_action",rules:{required:"Please check this setting"},control:X,render:function(e){var t=e.field,i=(t.value,t.onChange);return(0,n.jsxs)("div",{className:"flex items-center mt-2",children:[(0,n.jsxs)("label",{className:"radio-square relative flex items-center",children:[(0,n.jsx)("input",{name:"have_action",type:"radio",className:"text-primary",value:"1",checked:K.have_action,onChange:function(e){i(e)}}),(0,n.jsx)("i",{children:+K.have_action?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.Z,{})}),(0,n.jsx)("span",{className:"text-sm text-dark1 pl-2",children:"YES"})]}),(0,n.jsxs)("label",{className:"radio-square relative ml-20 flex items-center",children:[(0,n.jsx)("input",{name:"have_action",type:"radio",className:"text-primary",value:"0",checked:0===+K.have_action,onChange:function(e){i(e)}}),(0,n.jsx)("i",{children:0===+K.have_action?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.Z,{})}),(0,n.jsx)("span",{className:"text-sm text-dark1 pl-2",children:"NO"})]})]})}}),(null===(N=V.errors)||void 0===N?void 0:N.have_action)&&(0,n.jsx)("p",{className:"mt-2 text-primary text-sm",children:null===(k=V.errors.have_action)||void 0===k?void 0:k.message})]}),(0,n.jsx)(n.Fragment,{children:1===+K.have_action&&(0,n.jsx)("div",{className:"w-full lg:w-8/12",children:(0,n.jsxs)("div",{className:"flex items-center w-full mt-3",children:[(0,n.jsxs)("div",{className:"relative pb-10 max-w-xl flex-grow",children:[(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("input",b({type:"text",className:"mt-2 border border-gray1 w-full flex-1 h-14 px-5 shadow-md focus:outline-none",placeholder:"Link for CTA button"},U("action_link",{required:"Action link is required"})))}),(null===(_=V.errors)||void 0===_?void 0:_.action_link)&&(0,n.jsx)("p",{className:"mt-2 text-primary text-sm",children:null===(O=V.errors.action_link)||void 0===O?void 0:O.message})]}),"Popup"===K.type&&(0,n.jsxs)("div",{className:"ml-4 relative pb-10",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("label",{className:"absolute left-0 -top-10",children:"Button Text"}),(0,n.jsx)("input",b({type:"text",className:"mt-2 border border-gray1 w-full flex-1 h-14 px-5 shadow-md focus:outline-none",placeholder:"Button text"},U("btn_text",{required:"Button text is required"})))]}),(null===(C=V.errors)||void 0===C?void 0:C.btn_text)&&(0,n.jsx)("p",{className:"mt-2 text-primary text-sm",children:null===(S=V.errors.btn_text)||void 0===S?void 0:S.message})]})]})})}),(0,n.jsxs)("div",{className:"w-full lg:w-6/12 pb-4 flex gap-4",children:[(0,n.jsxs)("div",{className:"w-1/2",children:[(0,n.jsx)("label",{htmlFor:"title",children:"Date & Time for ".concat(K.type," to show live")}),(0,n.jsx)(r.Qr,{name:"start_date",control:X,defaultValue:"",render:function(e){var t=e.field,i=t.value,s=t.onChange;return(0,n.jsx)(d.xZ,{value:i,className:"date-time-perks",onChange:s,placeholder:"Select..."})}})]}),(0,n.jsxs)("div",{className:"w-1/2",children:[(0,n.jsx)("label",{htmlFor:"title",children:"Set Expiration for ".concat(K.type," to HIDE")}),(0,n.jsx)(r.Qr,{name:"end_date",control:X,defaultValue:"",render:function(e){var t=e.field,i=t.value,s=t.onChange;return(0,n.jsx)(d.xZ,{value:i,className:"date-time-perks",onChange:s,placeholder:"Select..."})}})]})]}),(0,n.jsx)("p",{className:"py-4 w-full lg:w-8/12",children:"Should this notification be ON now. Please note if the start time and end time fields are complete, then notifications in ON status will only show visibly if they have passed the start time and not yet passed the end time above."}),(0,n.jsxs)("div",{className:"pb-4 flex items-center gap-4",children:[(0,n.jsx)("label",{htmlFor:"status",className:"".concat(K.setting?"opacity-30":""),children:"OFF"}),(0,n.jsx)(r.Qr,{name:"setting",control:X,defaultValue:!1,render:function(e){var t=e.field,i=t.value,s=t.onChange;return(0,n.jsx)(c.default,{id:"status",checked:i,onChange:s,checkedIcon:null,uncheckedIcon:null,offColor:"#bbb",onColor:"#ff474e",height:18,width:40})}}),(0,n.jsx)("label",{htmlFor:"status",className:"".concat(K.setting?"":"opacity-30"),children:"ON"})]})]}),(0,n.jsxs)("div",{className:"flex gap-4",children:[!E&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.zx,{primary:!0,type:"submit",disabled:P,isLoading:P,sizeSpinner:20,children:"Save"}),(0,n.jsx)(d.zx,{primaryOutline:!0,onClick:function(){return l.default.push("/admin/settings/notifications")},children:"Cancel"})]}),E&&B&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.zx,{primary:!0,type:"button",onClick:function(){return J(!1)},children:"Edit"})}),E&&!B&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.zx,{primary:!0,type:"submit",disabled:P,isLoading:P,sizeSpinner:20,children:"Save"}),(0,n.jsx)(d.zx,{primaryOutline:!0,onClick:function(){return J(!0)},children:"Cancel"})]})]})]}):(0,n.jsx)(n.Fragment,{})]})})}))},90785:function(e,t,i){"use strict";i.d(t,{k:function(){return c}});var n=i(85893),s=i(89),r=i(72935),o=i(9420),a=function(e){var t=e.notification;return(0,n.jsxs)(s.Zb,{className:"w-full flex bg-primary items-center justify-center px-5 h-70px items-center",children:[(0,n.jsx)("div",{className:"text-3xl text-white focus:outline-none",children:(0,n.jsx)(r.Z,{})}),(0,n.jsxs)("div",{className:"flex items-center",style:{width:"calc(100% - 3.75rem)"},children:[(0,n.jsx)("div",{className:"overflow-hidden px-5 text-white h-full block flex-grow w-full",style:{width:0},children:(0,n.jsxs)("div",{className:"h-full",children:[(0,n.jsx)("p",{className:"text-base font-bold pb-1",children:null===t||void 0===t?void 0:t.title}),(0,n.jsxs)("p",{className:"text-xs",children:[(0,n.jsx)("span",{children:null===t||void 0===t?void 0:t.body}),1===+(null===t||void 0===t?void 0:t.allow_dismiss_btn)&&(0,n.jsxs)("span",{className:"text-white pl-2",children:[(0,n.jsx)("span",{children:(0,n.jsx)(o.Z,{className:"text-xs inline"})}),(0,n.jsx)("span",{className:"underline pl-1",children:"Dismiss"})]})]})]})}),1===+(null===t||void 0===t?void 0:t.have_action)&&(0,n.jsx)("div",{className:"mx-5 text-lg text-primary w-48 h-12 rounded-full bg-white hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md flex items-center justify-center",children:"Learn More"})]}),(0,n.jsx)("div",{className:"text-3xl text-white focus:outline-none transform rotate-180",children:(0,n.jsx)(r.Z,{})})]})},l=function(e){var t=e.notification;return(0,n.jsx)("div",{className:"w-full shadow-2xl mx-4 relative bg-white",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-4xl text-center pt-4",children:null===t||void 0===t?void 0:t.title}),(0,n.jsx)("p",{children:(0,n.jsx)("img",{src:"/images/ic_decline.svg",className:"absolute right-4 top-4",alt:"Cancel"})}),(0,n.jsx)("div",{className:"h-full w-full pt-16 px-16 pb-36 flex flex-col items-center justify-between border-gray",children:(0,n.jsx)("div",{className:"h-full w-full flex flex-col items-center justify-between",children:null===t||void 0===t?void 0:t.body})})]}),(null===t||void 0===t?void 0:t.btn_text)&&(0,n.jsx)("div",{className:"transform -translate-x-1/2 absolute left-1/2 bottom-6 text-lg text-white w-1/2 lg:w-1/2 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md flex items-center justify-center",children:(0,n.jsx)("p",{children:null===t||void 0===t?void 0:t.btn_text})})]})})},c=function(e){var t=e.notification;return(0,n.jsxs)("div",{className:"w-full p-5",children:["Banner"===(null===t||void 0===t?void 0:t.type)&&(0,n.jsx)(a,{notification:t}),"Popup"===(null===t||void 0===t?void 0:t.type)&&(0,n.jsx)(l,{notification:t})]})}},24015:function(e,t,i){"use strict";i.d(t,{a:function(){return d}});var n=i(96156),s=i(85893),r=i(67294),o=i(11163),a=i(49226);var l=i(44791);function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var d=function(e,t){return function(i){var d=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,t=void 0===e?"public":e,i=(0,a.v9)((function(e){return e.authReducer.userInfo}));return(0,r.useEffect)((function(){if("public"!==t&&t&&i)if(i&&null!==i&&void 0!==i&&i.isLoggedIn)if("member"===i.role){if("auth"===t)return"verifying"===i.period&&o.default.push("/verify-email"),"onboarding"===i.period&&o.default.push("/onboard"),void("final"===i.period&&o.default.push("/dashboard"));if("verifying"===t)return"onboarding"===i.period&&o.default.push("/onboard"),void("final"===i.period&&o.default.push("/dashboard"));if("onboarding"===t)return"verifying"===i.period&&o.default.push("/verify-email"),void("final"===i.period&&o.default.push("/dashboard"));if("final-member"===t||"final-all"===t)return"verifying"===i.period&&o.default.push("/verify-email"),void("onboarding"===i.period&&o.default.push("/onboard"));"final-admin"===t&&("verifying"===i.period&&o.default.push("/verify-email"),"onboarding"===i.period&&o.default.push("/onboard"),"final"===i.period&&o.default.push("/dashboard"))}else"admin"===i.role&&"final-all"!==t&&"final-admin"!==t&&o.default.push("/admin/dashboard");else"auth"!==t&&o.default.push("/login")}),[i,t]),{user:i}}({urlType:t}).user;if(t&&"public"!==t){if(!d)return(0,s.jsx)(l.Z,{});if("auth"===t&&d.isLoggedIn)return(0,s.jsx)(l.Z,{});if("auth"!==t&&!d.isLoggedIn)return(0,s.jsx)(l.Z,{});if("member"===d.role){if(["final-all","final-member"].includes(t)&&"final"!==d.period)return(0,s.jsx)(l.Z,{});if(["verifying"].includes(t)&&"verifying"!==d.period)return(0,s.jsx)(l.Z,{});if(["onboarding"].includes(t)&&"onboarding"!==d.period)return(0,s.jsx)(l.Z,{})}if("admin"===d.role&&["verifying","onboarding","final-member"].includes(t))return(0,s.jsx)(l.Z,{})}return(0,s.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},i))}}},83231:function(e,t,i){var n=i(67294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var r=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),o=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(e){if(7===e.length)return e;for(var t="#",i=1;i<4;i+=1)t+=e[i]+e[i];return t}function l(e,t,i,n,s){return function(e,t,i,n,s){var r=(e-i)/(t-i);if(0===r)return n;if(1===r)return s;for(var o="#",a=1;a<6;a+=2){var l=parseInt(n.substr(a,2),16),c=parseInt(s.substr(a,2),16),d=Math.round((1-r)*l+r*c).toString(16);1===d.length&&(d="0"+d),o+=d}return o}(e,t,i,a(n),a(s))}var c=function(e){function t(t){e.call(this,t);var i=t.height,n=t.width,s=t.checked;this.t=t.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:s?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,i=t.R,n=t.h,s=(this.props.checked?this.i:this.o)+e-i;t.N||e===i||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,s));r!==n&&this.setState({h:r})},t.prototype.U=function(e){var t=this.state,i=t.h,n=t.N,s=t.B,r=this.props.checked,o=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-s;(!n||a<250||r&&i<=o||!r&&i>=o)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.M=function(e){this.L(e.touches[0].clientX)},t.prototype.m=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,i=e.disabled,r=e.className,o=e.offColor,a=e.onColor,c=e.offHandleColor,d=e.onHandleColor,h=e.checkedIcon,u=e.uncheckedIcon,p=e.checkedHandleIcon,f=e.uncheckedHandleIcon,m=e.boxShadow,x=e.activeBoxShadow,v=e.height,b=e.width,y=e.borderRadius,g=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(i[n]=e[n]);return i}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),j=this.state,w=j.h,N=j.N,k=j.j,_={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:v/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},O={height:v,width:b,margin:Math.max(0,(this.t-v)/2),position:"relative",background:l(w,this.i,this.o,o,a),borderRadius:"number"==typeof y?y:v/2,cursor:i?"default":"pointer",WebkitTransition:N?null:"background 0.25s",MozTransition:N?null:"background 0.25s",transition:N?null:"background 0.25s"},C={height:v,width:Math.min(1.5*v,b-(this.t+v)/2+1),position:"relative",opacity:(w-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},S={height:v,width:Math.min(1.5*v,b-(this.t+v)/2+1),position:"absolute",opacity:1-(w-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},E={height:this.t,width:this.t,background:l(w,this.i,this.o,c,d),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof y?y-1:"50%",position:"absolute",transform:"translateX("+w+"px)",top:Math.max(0,(v-this.t)/2),outline:0,boxShadow:k?x:m,border:0,WebkitTransition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:N?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},M={height:this.t,width:this.t,opacity:Math.max(2*(1-(w-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"},T={height:this.t,width:this.t,opacity:Math.max(2*((w-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:N?null:"opacity 0.25s",MozTransition:N?null:"opacity 0.25s",transition:N?null:"opacity 0.25s"};return n.createElement("div",{className:r,style:_},n.createElement("div",{className:"react-switch-bg",style:O,onClick:i?null:this.T,onMouseDown:function(e){return e.preventDefault()}},h&&n.createElement("div",{style:C},h),u&&n.createElement("div",{style:S},u)),n.createElement("div",{className:"react-switch-handle",style:E,onClick:function(e){return e.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},f&&n.createElement("div",{style:M},f),p&&n.createElement("div",{style:T},p)),n.createElement("input",s({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(n.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:o,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},t.default=c},59936:function(e,t,i){e.exports=i(83231)}}]);