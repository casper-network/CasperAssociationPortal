(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1045,179],{71376:function(e,t,r){"use strict";var n,a=r(67294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.Z=function(e){return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:18,height:18},e),n||(n=a.createElement("path",{"data-name":"Icon ionic-md-checkbox-outline",d:"M4.9 7.1L3.5 8.5 8 13 18 3l-1.4-1.4L8 10.15zM16 16H2V2h10V0H2a2.006 2.006 0 00-2 2v14a2.006 2.006 0 002 2h14a2.006 2.006 0 002-2V8h-2z"})))}},96476:function(e,t,r){"use strict";var n,a=r(67294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.Z=function(e){return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:18,height:18},e),n||(n=a.createElement("g",{"data-name":"Rectangle 511",fill:"#fff",stroke:"#000",strokeWidth:2},a.createElement("rect",{width:18,height:18,rx:2,stroke:"none"}),a.createElement("rect",{x:1,y:1,width:16,height:16,rx:1,fill:"none"}))))}},12245:function(e,t,r){"use strict";r.d(t,{O$:function(){return f},qE:function(){return T},xE:function(){return _},zx:function(){return te},Zb:function(){return s},XZ:function(){return D},ZF:function(){return M},xZ:function(){return E},Lt:function(){return ae},ML:function(){return b},L3:function(){return H},fl:function(){return re},ko:function(){return X},r2:function(){return R},rs:function(){return ne},OK:function(){return v},iA:function(){return K.Z},CO:function(){return P}});var n=r(85893),a=r(67294),s=function(e){var t=e.children,r=e.className,a=e.noShadow;return(0,n.jsx)("div",{className:"bg-white ".concat(a?"":"shadow-2xl"," rounded-3xl ").concat(r||""),children:t})},c=r(96156),o=r(2949),i=r(11163),l=r(41664);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.children,r=e.activeClassName,s=(0,o.Z)(e,["children","activeClassName"]),c=(0,i.useRouter)().pathname,u=a.Children.only(t),f=u.props.className||"",h=f;return"/dashboard"===s.href?c===s.href&&(h="".concat(f," ").concat(r).trim()):"/dashboard/settings"===s.href?["/dashboard/profile","/dashboard/settings"].includes(c)&&(h="".concat(f," ").concat(r).trim()):(c.includes(s.href)||c.includes(s.as))&&(h="".concat(f," ").concat(r).trim()),(0,n.jsx)(l.default,d(d({},s),{},{children:a.cloneElement(u,{className:h||null})}))};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m,x,g=a.memo((function(e){var t=e.data[e.currentTab].content;return(0,n.jsx)(t,{})})),v=function(e){var t=e.data,r=e.className,s=e.scrollable,c=e.lazy,o=(0,i.useRouter)().asPath,u=(0,a.useState)(0),d=u[0],f=u[1];return(0,a.useEffect)((function(){var e,r=(e=o).includes("#")?e.split("#").pop():null;if(r){var n=t.findIndex((function(e){return e.id===r}));f(n)}else f(0)}),[o]),(0,n.jsx)("div",{className:r,children:t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("ul",{id:"tabs",className:"inline-flex w-full pb-3 justify-between lg:justify-start",children:t.map((function(e,t){return(0,n.jsx)("li",{className:"".concat(d===t?"opacity-100 text-primary":"opacity-40"," tab-header text-lg font-medium lg:pr-14"),children:(0,n.jsx)(l.default,{href:"#".concat(e.id),children:(0,n.jsx)("a",{children:e.title})})},"tab-header-".concat(t))}))}),(0,n.jsx)("div",{className:"border-primary border-b-2 lg:mr-card"}),(0,n.jsx)("div",{id:"tab-contents",className:"".concat(s?"overflow-y-scroll":""),style:{height:"90%"},children:c?(0,n.jsx)("div",{className:"lg:pr-card h-full",children:(0,n.jsx)(g,{data:t,currentTab:d})}):t.map((function(e,r){return(0,n.jsx)("div",{className:"lg:pr-card h-full",hidden:d!==r,children:p({},t[r].content())},"tab-content-".concat(r))}))})]})})},b=function(e){var t=e.placeholder,s=e.onChange,c=e.value,o=(0,a.useRef)(),i=(0,a.useState)(!1),l=i[0],u=i[1],d=o.current||{},f=d.CKEditor,h=d.ClassicEditor;return(0,a.useEffect)((function(){o.current={CKEditor:r(72757).CKEditor,ClassicEditor:r(5234)},u(!0)}),[]),l?(0,n.jsx)(f,{editor:h,config:{placeholder:t||"Write your comment here!",toolbar:["bold","italic"]},data:c,onChange:function(e,t){var r=t.getData();s&&s(r)}}):(0,n.jsx)("div",{children:"Editor loading"})};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var j,w=function(e){return a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 10.556 11.384"},e),m||(m=a.createElement("defs",null,a.createElement("style",null,".ic_arrow_left_svg__cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"))),x||(x=a.createElement("g",{id:"ic_arrow_left_svg__Icon_feather-arrow-left","data-name":"Icon feather-arrow-left",transform:"translate(-6.5 -6.086)"},a.createElement("path",{id:"ic_arrow_left_svg__Path_11184","data-name":"Path 11184",stroke:"currentColor",className:"ic_arrow_left_svg__cls-1",d:"M16.056 18H7.5",transform:"translate(0 -6.222)"}),a.createElement("path",{id:"ic_arrow_left_svg__Path_11185","data-name":"Path 11185",stroke:"currentColor",className:"ic_arrow_left_svg__cls-1",d:"M11.778 16.056L7.5 11.778 11.778 7.5"}))))};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var O=function(e){return a.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 18 18"},e),j||(j=a.createElement("path",{fill:"currentColor","data-name":"Icon awesome-arrow-alt-circle-left",className:"ic_arrow_left_circle_svg__cls-1",d:"M9 17.999a9 9 0 119-9 9 9 0 01-9 9zm4.21-10.6H9V4.83a.436.436 0 00-.744-.308L4.108 8.691a.432.432 0 000 .613l4.148 4.17A.435.435 0 009 13.166v-2.57h4.21a.437.437 0 00.435-.435V7.837a.437.437 0 00-.436-.434z"})))},_=function(e){var t=e.href,r=e.text,a=e.force;return(0,n.jsxs)(n.Fragment,{children:[!a&&(0,n.jsx)(l.default,{href:t,children:(0,n.jsxs)("a",{className:"flex items-center text-xs",children:[(0,n.jsx)("span",{className:"hidden lg:inline",children:(0,n.jsx)(w,{className:"mr-2.5 text-gray"})}),(0,n.jsx)("span",{className:"inline lg:hidden",children:(0,n.jsx)(O,{className:"mr-2.5 text-primary"})}),(0,n.jsx)("span",{className:"text-sm text-primary lg:text-gray lg:text-xs",children:r})]})}),a&&(0,n.jsx)(l.default,{href:t,children:(0,n.jsxs)("a",{className:"flex items-center",children:[(0,n.jsx)("span",{children:(0,n.jsx)(O,{className:"mr-2.5 text-primary"})}),(0,n.jsx)("span",{className:"text-sm text-primary",children:r})]})})]})},P=function(){var e=(0,a.useState)(),t=e[0],r=e[1];return(0,n.jsxs)("label",{htmlFor:"toggleA",className:"toggle-button flex items-center cursor-pointer off-tap-highlight",children:[(0,n.jsx)("div",{className:"flex items-center cursor-pointer",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",{type:"checkbox",defaultChecked:t,id:"toggleA",className:"sr-only",onChange:function(){return r(!t)}}),(0,n.jsx)("div",{className:"block bg-pink w-14 h-7 rounded-full"}),(0,n.jsx)("div",{className:"dot absolute left-0.5 top-0.5 bg-white w-6 h-6 rounded-full transition"})]})}),(0,n.jsx)("div",{className:"ml-3 text-gray-700 font-medium",children:t?"Active":"Deactive"})]})},C=r(34699),E=function(e){var t=e.onChange,r=e.className,s=e.value,c=e.disabled,o=(0,a.useState)(""),i=o[0],l=o[1],u=function(e){if("date"===e.target.type){if(e.target.value){var r=e.target.value.split("-"),n=(0,C.Z)(r,3),a=n[0],s=n[1],c=n[2];l("".concat(s,"/").concat(c,"/").concat(a)),t("".concat(s,"/").concat(c,"/").concat(a))}else l(""),t("");e.target.type="text"}else{if(e.target.value){var o=e.target.value.split("/"),i=(0,C.Z)(o,3),u=i[0],d=i[1],f=i[2];l("".concat(f,"-").concat(u,"-").concat(d))}e.target.type="date"}};return(0,a.useEffect)((function(){i||l(s)}),[s]),(0,n.jsx)("input",{type:"text",className:"".concat(r," px-7 lg:auto h-14 rounded-full shadow-md focus:outline-none"),placeholder:e.placeholder,onFocus:function(e){return u(e)},onBlur:function(e){return u(e)},value:i,onChange:function(e){return l(e.target.value)},disabled:c})},k=r(71376),S=r(96476),D=function(e){var t=e.value,r=e.labelText,s=e.onChange,c=e.readOnly,o=(0,a.useState)(!1),i=o[0],l=o[1];return(0,a.useEffect)((function(){l(t)}),[t]),(0,n.jsxs)("label",{className:"inline-flex items-center",onClick:function(){c||(l(!i),s(!i))},children:[(0,n.jsx)("i",{children:i?(0,n.jsx)(k.Z,{}):(0,n.jsx)(S.Z,{})}),(0,n.jsx)("span",{className:"pl-4",children:r})]})},F=r(17445),Z=r(96105),L=r(11699),M=function(e){var t=(0,a.useState)(""),r=t[0],s=t[1],c=(0,a.useState)(0),o=c[0],i=c[1],l=(0,a.useState)(null),u=l[0],d=l[1];return(0,a.useEffect)((function(){if(1===(0,F.Z)(new Date,e.endTime)){var t=(0,Z.Z)({start:new Date,end:e.endTime});s(t);var r=(0,L.Z)(e.endTime,e.startTime),n=setInterval((function(){var t=new Date,n=(0,Z.Z)({start:t,end:e.endTime}),a=(0,L.Z)(e.endTime,t),c=Math.round(a/r*100);i(Math.round(c)),s(n)}),1e3);d(n)}else s({days:0,hours:0,minutes:0});return function(){u&&clearInterval(u),s(""),i(0)}}),[e.endTime,e.startTime]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:[r.days,"d:",r.hours,"h:",r.minutes,"m"]}),!e.hideProgressBar&&(0,n.jsx)("div",{className:"".concat(e.className," w-28 overflow-hidden h-4 mt-2 text-xs border border-gray flex rounded-lg bg-opacity-50"),children:(0,n.jsx)("div",{className:"w-0 transition-width duration-600 ease-in-out transhadow-none flex flex-col text-center whitespace-nowrap rounded-lg bg-primary",style:{width:"".concat(o,"%")}})})]})},T=function(e){var t=e.info;return t&&t.avatar_url?(0,n.jsx)("img",{src:t.avatar_url,alt:"avatar",className:"h-8 w-8 rounded-full object-cover"}):(0,n.jsx)("div",{className:"flex justify-center items-center text-white bg-primary border rounded-full h-8 w-8",children:null===t||void 0===t?void 0:t.last_name[0]})},z={pass:"text-green",cancelled:"",fail:"text-primary"},B={for:"text-green",against:"text-primary"},I={active:"text-green uppercase",waiting:"capitalize",expired:"text-primary capitalize",inactive:"text-primary uppercase",off:"capitalize"},R=function(e){var t,r,a;return(0,n.jsxs)(n.Fragment,{children:[["pass","cancelled","fail"].includes(e.content)&&(0,n.jsx)("span",{className:"".concat(z[null===(t=e.content)||void 0===t?void 0:t.toLowerCase()]," ").concat(e.className),children:e.content}),["for","against"].includes(e.content)&&(0,n.jsx)("span",{className:"".concat(B[null===(r=e.content)||void 0===r?void 0:r.toLowerCase()]," ").concat(e.className),children:e.content}),["active","waiting","ended","inactive","OFF"].includes(e.content)&&(0,n.jsx)("span",{className:"".concat(I[null===(a=e.content)||void 0===a?void 0:a.toLowerCase()]," ").concat(e.className),children:e.content})]})},H=function(e){return(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"".concat(+e.splitFor>+e.splitAgainst&&"text-green"),children:e.splitFor}),"/",(0,n.jsx)("span",{className:"".concat(+e.splitAgainst>+e.splitFor&&"text-primary"),children:e.splitAgainst})]})},K=r(64605);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=function(e){var t=e.text,r=e.progress,a=e.options;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"progress-bar progress-bar-line relative w-full h-5 overflow-hidden h-4 mt-1 text-xs border border-gray1 flex rounded-lg bg-gray1",children:[(0,n.jsx)("div",{className:"w-0 transition-width duration-600 ease-in-out transhadow-none flex whitespace-nowrap rounded-lg bg-primary",style:{width:"".concat(r,"%")}}),(0,n.jsx)("span",{className:"progress-label text-white absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2",style:r>=15&&r<=55?{left:"".concat(r/2,"%")}:{left:"50%"},children:t})]}),(0,n.jsxs)("div",{className:"w-full flex justify-between",children:[(0,n.jsx)("span",{className:"text-xs text-gray",children:null===a||void 0===a?void 0:a.startText}),(0,n.jsx)("span",{className:"text-xs text-gray",children:null===a||void 0===a?void 0:a.endText})]})]})},q=function(e){var t=e.text,r=e.progress;e.options;return console.log(),(0,n.jsx)("div",{className:"progress-bar progress-bar-circle h-0 aspect-w-1 aspect-h-1 relative w-full inline-flex items-center justify-center overflow-hidden rounded-full",children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("svg",{width:"100%",height:"100%",children:[(0,n.jsx)("circle",{className:"progress-tracker shadow-light",strokeWidth:"3",stroke:"currentColor",fill:"transparent",r:"40%",cx:"50%",cy:"50%"}),(0,n.jsx)("circle",{className:"progress-tracking",strokeWidth:"6",strokeDasharray:80*Math.PI,strokeDashoffset:80*Math.PI-r/100*40*2*Math.PI,stroke:"currentColor",style:{transform:"rotate(-90deg)",transformOrigin:"center"},fill:"transparent",r:"40%",cx:"50%",cy:"50%"})]}),(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 h-4/5 w-4/5 shadow-normal rounded-full"}),(0,n.jsx)("span",{className:"progress-label font-thin absolute text-3xl top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4",children:t})]})})},X=function(e){var t=e.shape,r=void 0===t?"line":t,s=e.value,c=e.mask,o=void 0===c?"":c,i=e.total,l=(0,a.useState)(0),u=l[0],d=l[1],f=function(){return o.replace("x",s).replace("y",i)};return(0,a.useEffect)((function(){var e;e=i?s>0&&i?Math.round(s/i*100):0:s,d(e)}),[s]),"line"===r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(W,V({progress:u,text:f()},e))}):"circle"===r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(q,V({progress:u,text:f()},e))}):(0,n.jsx)(n.Fragment,{})},Y=r(733),$=r.n(Y);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q="text-white rounded-full bg-primary hover:opacity-40 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none shadow-md",U="text-primary rounded-full bg-white border-2 border-primary disabled:opacity-40 disabled:cursor-not-allowed shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",ee={default:"text-sm h-11 lg:w-52",small:"text-xs h-8 min-w-20",large:"text-lg h-16 w-52"};function te(e){var t=e.primary,r=e.primaryOutline,s=e.className,c=e.size,i=e.sizeSpinner,l=e.isLoading,u=e.colorSpinner,d=(0,o.Z)(e,["primary","primaryOutline","className","size","sizeSpinner","isLoading","colorSpinner"]),f=(0,a.useState)(""),h=f[0],p=f[1];return(0,a.useEffect)((function(){var e=c?ee[c]:ee.default;t?p("".concat(e," ").concat(Q)):r&&p("".concat(e," ").concat(U))}),[e]),(0,n.jsx)("button",J(J({type:"button",className:"".concat(s||""," ").concat(h)},d),{},{children:(0,n.jsxs)("div",{className:"flex items-center justify-center",children:[l&&(0,n.jsx)($(),{className:"mr-3",type:"spinningBubbles",color:u||"#FFFFFF",width:i||30,height:i||30}),e.children]})}))}function re(e){var t="flex items-center justify-center ".concat(e.className||""),r=e.colorSpinner?e.colorSpinner:"#FFFFFF";return(0,n.jsxs)("button",{className:t,type:e.type?e.type:"button",disabled:!!e.isDisabled&&e.isDisabled,onClick:function(){e.onClick&&"function"===typeof e.onClick&&e.onClick()},children:[e.isLoading&&(0,n.jsx)($(),{className:"mr-3",type:"spinningBubbles",color:r,width:e.size||30,height:e.size||30}),(0,n.jsx)("span",{children:e.title})]})}var ne=function(e){var t=e.checked,r=e.onChange;return(0,n.jsxs)("label",{className:"switch",children:[(0,n.jsx)("input",{type:"checkbox",checked:t,onChange:r}),(0,n.jsx)("span",{className:"slider round"})]})},ae=function(e){var t=e.className,r=e.trigger,s=e.children,c=(0,a.useState)(!1),o=c[0],i=c[1];return(0,n.jsxs)("div",{className:"".concat(t||""," relative dropdown z-50"),children:[(0,n.jsx)("button",{className:"w-full",type:"button",onClick:function(){return i(!o)},children:r}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"animate__animated animate__fadeIn animate__fastest",children:(0,n.jsx)("div",{className:"max-h-96 overflow-y-scroll absolute w-full -bottom-2 bg-white transform translate-y-full left-0 shadow-light p-4",onClick:function(){return i(!1)},children:s})}),(0,n.jsx)("div",{className:"fixed inset-0 -z-1",onClick:function(){return i(!1)}})]})]})}},64605:function(e,t,r){"use strict";r.d(t,{x:function(){return g}});var n=r(87329),a=r(85893),s=r(32465),c=r(67294),o=r(58533),i=r(733),l=r.n(i),u=r(29163);function d(){var e=(0,s.Z)(["\n  margin-left: 10px;\n  margin-top: 6px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  ","\n"]);return d=function(){return e},e}var f={0:"asc",1:"desc"},h=u.ZP.span(d(),(function(e){return"desc"===e.direction?"border-top: 7px solid black;":"asc"===e.direction?"border-bottom: 7px solid black;":void 0})),p=(0,c.createContext)({}),m=function(e){var t=e.direction;return(0,a.jsx)(h,{direction:t})},x=function(e){var t=(0,c.useState)(),r=t[0],n=t[1],s=(0,c.useState)(),o=s[0],i=s[1],l=(0,c.useState)(Math.random().toString(36).substring(7))[0];return(0,c.useEffect)((function(){r&&o>=0&&e.onSort&&"function"===typeof e.onSort&&e.onSort(r,f[o])}),[r,o]),(0,c.useEffect)((function(){e.register&&"function"===typeof e.register&&e.register(l)}),[]),(0,a.jsx)(p.Provider,{value:{sortKey:r,setSortKey:n,sortDirection:o,setSortDirection:i,randomId:l},children:(0,a.jsxs)("div",{className:"".concat(e.className," flex flex-col min-w-250"),children:[e.children[0],(0,c.cloneElement)(e.children[1],{onLoadMore:e.onLoadMore,hasMore:e.hasMore,dataLength:e.dataLength,height:e.height})]})})};x.Header=function(e){return(0,a.jsx)("div",{className:"table-header flex w-full pb-2",style:{paddingRight:"7px"},children:e.children.map((function(e,t){return(0,c.cloneElement)(e,{index:t+1})}))})},x.HeaderCell=function(e){var t=(0,c.useContext)(p),r=t.sortKey,n=t.setSortKey,s=t.sortDirection,o=t.setSortDirection,i=(0,c.useState)(!1),l=i[0],u=i[1];return(0,a.jsx)("div",{className:"\n        ".concat(e.className||""," \n        col col-").concat(e.index," \n        text-sm"),children:(0,a.jsxs)("button",{type:"button",className:"text-left font-semibold focus:outline-none flex cursor-pointer disabled:cursor-not-allowed",onClick:function(){e.sortKey&&(u(!0),n(e.sortKey),o(1^s),setTimeout((function(){return u(!1)}),1500))},disabled:l,children:[e.children,e.sortKey&&r===e.sortKey&&(0,a.jsx)(m,{direction:f[s]})]})})},x.Header.Cell=x.HeaderCell,x.Body=function(e){var t=(0,c.useContext)(p).randomId;return(0,a.jsx)("div",{id:t,className:"table-body ".concat(e.className||""),style:{overflowY:"scroll"},children:(0,a.jsx)(o.Z,{className:"flex flex-col w-full",style:{marginRight:"-7px"},dataLength:e.dataLength||0,next:e.onLoadMore,hasMore:e.hasMore,loader:(0,a.jsx)("div",{className:"py-4 flex justify-center loading-data",children:(0,a.jsx)(l(),{type:"spinningBubbles",color:"#FF473E",width:30,height:30})}),scrollableTarget:t,scrollThreshold:.99,children:e.dataLength?e.children:e.hasMore?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)("p",{className:"py-4 text-center opacity-40 no-result-text",children:"No Results Found"})})})},x.BodyRow=function(e){return(0,a.jsx)("div",{className:"".concat(e.className," flex items-center flex-row w-full py-2 border-b border-gray ").concat(e.selectRowHandler?"cursor-pointer":""),onClick:function(){e.selectRowHandler&&"function"===typeof e.selectRowHandler&&e.selectRowHandler()},children:e.children.map((function(e,t){return(0,c.cloneElement)(e,{index:t+1})}))})},x.BodyCell=function(e){return(0,a.jsx)("div",{className:"col col-".concat(e.index," pr-5"),children:e.children})},x.Body.Cell=x.BodyCell,x.Body.Row=x.BodyRow;var g=function(){var e=(0,c.useState)([]),t=e[0],r=e[1],a=(0,c.useState)(!0),s=a[0],o=a[1],i=(0,c.useState)(1),l=i[0],u=i[1],d=(0,c.useState)({}),f=d[0],h=d[1],p=(0,c.useState)(),m=p[0],x=p[1];return{data:t,setData:r,register:{register:function(e){x(e)}},hasMore:s,page:l,appendData:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r(t?function(t){return[].concat((0,n.Z)(e),(0,n.Z)(t))}:function(t){return[].concat((0,n.Z)(t),(0,n.Z)(e))})},resetData:function(){var e=document.getElementById(m);e&&(e.classList.add("opacity-0"),e.scrollTop=0,setTimeout((function(){r([]),u(1),o(!0),e.classList.remove("opacity-0")}),50))},setHasMore:o,setPage:u,params:f,setParams:h}};t.Z=x},14453:function(){}}]);