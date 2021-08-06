(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3598,179],{44791:function(e,t,n){"use strict";var a=n(85893),l=n(733),i=n.n(l);t.Z=function(){return(0,a.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-40",children:[(0,a.jsx)("div",{className:"fixed inset-0 bg-white opacity-40"}),(0,a.jsx)(i(),{className:"z-50",type:"spinningBubbles",color:"#FF473E",width:100,height:100})]})}},16071:function(e,t,n){"use strict";var a=n(63038),l=n(20862);t.default=void 0;var i=l(n(67294)),r=n(11689),o=n(72441),s=n(75749),c={};function u(e,t,n,a){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var l=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(l?"%"+l:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),l=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,r.resolveHref)(l,e.href,!0),n=a(t,2),i=n[0],o=n[1];return{href:i,as:e.as?(0,r.resolveHref)(l,e.as):o||i}}),[l,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,x=e.shallow,g=e.scroll,y=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var _=i.Children.only(m),v=_&&"object"===typeof _&&_.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),b=a(w,2),j=b[0],N=b[1],E=i.default.useCallback((function(e){j(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,j]);(0,i.useEffect)((function(){var e=N&&t&&(0,r.isLocalURL)(d),a="undefined"!==typeof y?y:n&&n.locale,l=c[d+"%"+p+(a?"%"+a:"")];e&&!l&&u(n,d,p,{locale:a})}),[p,d,N,y,t,n]);var L={ref:E,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,a,l,i,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[l?"replace":"push"](n,a,{shallow:i,locale:s,scroll:o}))}(e,n,d,p,h,x,g,y)},onMouseEnter:function(e){(0,r.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var k="undefined"!==typeof y?y:n&&n.locale,C=n&&n.isLocaleDomain&&(0,r.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);L.href=C||(0,r.addBasePath)((0,r.addLocale)(p,k,n&&n.defaultLocale))}return i.default.cloneElement(_,L)};t.default=f},89695:function(e,t,n){"use strict";n.r(t);var a=n(85893),l=n(41664),i=n(7318),r=n.n(i),o=n(11163),s=n(7667),c=n(66570),u=n(24015);t.default=(0,u.a)((function(){var e=(0,o.useRouter)(),t=r()();return(0,a.jsx)("div",{className:"flex justify-center h-screen",style:{backgroundImage:"url('/images/bg_welcome".concat(t.isMobile()?"_mobile":"",".png')"),backgroundSize:"cover"},children:(0,a.jsxs)("div",{className:" flex flex-col w-full p-4 lg:max-w-380 lg:p-9 xl:max-w-screen-xl xl:p-9 2xl:max-w-screen-2xl",children:[(0,a.jsx)(c.Z,{theme:"light"}),(0,a.jsx)("div",{className:"flex-grow flex items-center justify-center",children:(0,a.jsxs)("div",{className:"bg-white w-full lg:w-2/3 text-center px-4 py-12 lg:py-44 lg:px-80",style:{backgroundImage:"url('/images/login_overlay.png')",backgroundSize:"cover"},children:[(0,a.jsx)("p",{className:"text-4xl text-center whitespace-pre-line animate__animated animate__fadeInUp",children:"What type of account are you registering?"}),(0,a.jsxs)("div",{className:"lg:flex lg:flex-col mt-10 lg:justify-center animate__animated animate__fadeInUp animate__delay-2s",children:[(0,a.jsx)("button",{type:"button",className:" my-4 text-lg text-white w-full lg:w-full h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none shadow-md animate__animated animate__fadeInLeft animate__delay-4s",onClick:function(){return e.push("/register-individual")},children:"Individual"}),(0,a.jsx)("button",{type:"button",className:"my-4 text-lg border-2 border-primary text-primary w-full lg:w-full h-16 rounded-full bg-white hover:bg-primary hover:bg-opacity-40 hover:text-white focus:outline-none shadow-md animate__animated animate__fadeInLeft animate__delay-4s",onClick:function(){return e.push("/register-entity")},children:"Entity"})]}),(0,a.jsxs)("p",{className:"text-xs text-center mt-5 whitespace-pre-line animate__animated animate__fadeInUp animate__delay-4s",children:["Already have an account? ",(0,a.jsx)(l.default,{href:"/login",children:(0,a.jsx)("a",{className:"text-primary underline font-medium",children:"Sign in"})})]})]})}),(0,a.jsx)(s.Z,{theme:"light"})]})})}),"auth")},89032:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register-type",function(){return n(89695)}])},41664:function(e,t,n){e.exports=n(16071)},14453:function(){}},function(e){e.O(0,[9774,4597,9650,6993,5243],(function(){return t=89032,e(e.s=t);var t}));var t=e.O();_N_E=t}]);