(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3300],{99310:function(e,n,a){"use strict";var o,i=a(67294);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}n.Z=function(e){return i.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:19.997,height:14.452},e),o||(o=i.createElement("path",{fill:"none",stroke:"currentColor",d:"M17.875 2.121L7.044 12.952 2.121 8.029",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3})))}},6280:function(e,n,a){"use strict";a.d(n,{e$:function(){return d},t1:function(){return t},sp:function(){return c}});var o=a(85893),i=a(67294),r=function(e){var n=e.onApproveUser,a=e.onResetUser,i=e.onBanUser;return(0,o.jsxs)("div",{className:"py-16 text-center w-96 mx-auto",children:[(0,o.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Letter Review"}),(0,o.jsx)("p",{className:"text-xs text-gray mb-8",children:"Please click to review the provided letter and make a decision"}),(0,o.jsxs)("div",{className:"flex gap-2.5 flex-col items-center",children:[(0,o.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:n,children:"Approve User"}),(0,o.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:a,children:"Deny & Reset"}),(0,o.jsx)("button",{type:"button",className:"mt-3 text-primary underline",onClick:i,children:"Deny & Ban User"})]})]})},d=function(e){var n=e.description,a=e.onResetUser,r=e.onBack,d=(0,i.useState)(""),t=d[0],c=d[1];return(0,o.jsxs)("div",{className:"py-16 text-center mx-auto",style:{maxWidth:"37.5rem"},children:[(0,o.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Reset User"}),(0,o.jsx)("p",{className:"text-xs text-gray pb-5",children:n}),(0,o.jsx)("textarea",{value:t,onChange:function(e){return c(e.target.value)},rows:"6",className:"p-4 w-full border border-gray focus:outline-none"}),(0,o.jsxs)("div",{className:"mt-8 mx-auto w-96 flex gap-2.5 flex-col items-center",children:[(0,o.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:function(){return a(t)},children:"Reset & Email User"}),(0,o.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:r,children:"Cancel & Go Back"})]})]})},t=function(e){var n=e.onBanUser,a=e.onBack;return(0,o.jsxs)("div",{className:"text-center mx-auto py-28",style:{maxWidth:"26rem"},children:[(0,o.jsx)("h3",{className:"text-xl text-center mb-2.5",children:"Ban User"}),(0,o.jsx)("p",{className:"text-xs text-gray",children:"Are you sure? This will change the user to banned status and prevent login."}),(0,o.jsxs)("div",{className:"w-96 flex gap-2.5 flex-col items-center mx-auto mt-8",children:[(0,o.jsx)("button",{type:"button",className:"w-full text-lg text-primary h-16 rounded-full bg-white border-2 border-primary shadow-md focus:outline-none hover:bg-primary hover:bg-opacity-40 hover:text-white",onClick:n,children:"Yes, Ban This User"}),(0,o.jsx)("button",{type:"button",className:"w-full text-lg text-white h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40",onClick:a,children:"Cancel & Go Back"})]})]})},c=function(e){var n=e.onApproveUser,a=e.onBanUser,c=e.onResetUser,s=(0,i.useState)("approve"),l=s[0],m=s[1];return(0,o.jsxs)(o.Fragment,{children:["approve"===l&&(0,o.jsx)(r,{onApproveUser:n,onResetUser:function(){return m("reset")},onBanUser:function(){return m("ban")}}),"ban"===l&&(0,o.jsx)(t,{onBanUser:a,onBack:function(){return m("approve")}}),"reset"===l&&(0,o.jsx)(d,{description:"This will reset the submit letter step and tell the user through email to submit again for the following reason:",onResetUser:function(e){return c(e)},onBack:function(){return m("approve")}})]})}},24015:function(e,n,a){"use strict";a.d(n,{a:function(){return l}});var o=a(96156),i=a(85893),r=a(67294),d=a(11163),t=a(49226);var c=a(44791);function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}var l=function(e,n){return function(a){var l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).urlType,n=void 0===e?"public":e,a=(0,t.v9)((function(e){return e.authReducer.userInfo}));return(0,r.useEffect)((function(){if("public"!==n&&n&&a)if(a&&null!==a&&void 0!==a&&a.isLoggedIn)if("member"===a.role){if("auth"===n)return"verifying"===a.period&&d.default.push("/verify-email"),"onboarding"===a.period&&d.default.push("/onboard"),void("final"===a.period&&d.default.push("/dashboard"));if("verifying"===n)return"onboarding"===a.period&&d.default.push("/onboard"),void("final"===a.period&&d.default.push("/dashboard"));if("onboarding"===n)return"verifying"===a.period&&d.default.push("/verify-email"),void("final"===a.period&&d.default.push("/dashboard"));if("final-member"===n||"final-all"===n)return"verifying"===a.period&&d.default.push("/verify-email"),void("onboarding"===a.period&&d.default.push("/onboard"));"final-admin"===n&&("verifying"===a.period&&d.default.push("/verify-email"),"onboarding"===a.period&&d.default.push("/onboard"),"final"===a.period&&d.default.push("/dashboard"))}else["admin","sub-admin"].includes(a.role)&&"final-all"!==n&&"final-admin"!==n&&d.default.push("/admin/dashboard");else"auth"!==n&&d.default.push("/login")}),[a,n]),{user:a}}({urlType:n}).user;if(n&&"public"!==n){if(!l)return(0,i.jsx)(c.Z,{});if("auth"===n&&l.isLoggedIn)return(0,i.jsx)(c.Z,{});if("auth"!==n&&!l.isLoggedIn)return(0,i.jsx)(c.Z,{});if("member"===l.role){if(["final-all","final-member"].includes(n)&&"final"!==l.period)return(0,i.jsx)(c.Z,{});if(["verifying"].includes(n)&&"verifying"!==l.period)return(0,i.jsx)(c.Z,{});if(["onboarding"].includes(n)&&"onboarding"!==l.period)return(0,i.jsx)(c.Z,{})}if(["admin","sub-admin"].includes(l.role)&&["verifying","onboarding","final-member"].includes(n))return(0,i.jsx)(c.Z,{})}return(0,i.jsx)(e,function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){(0,o.Z)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}({},a))}}},31394:function(e,n,a){"use strict";a.r(n);var o=a(85893),i=a(32465),r=a(67294),d=a(11163),t=a(49226),c=a(29163),s=a(41664),l=a(24015),m=a(71457),u=a(12245),h=a(97705),p=a(87028),f=a(43732),v=a(99310),x=a(29586),b=a(4478),g=a(6280);function y(){var e=(0,i.Z)(["\n  .verification-table {\n    width: 100%;\n    tr {\n      td {\n        vertical-align: top;\n        padding-bottom: 10px;\n      }\n      td:nth-child(1) {\n        width: 20%;\n        font-weight: 500;\n      }\n      td:nth-child(2) {\n        width: 75%;\n      }\n    }\n  }\n"]);return y=function(){return e},e}var j=c.ZP.div(y());n.default=(0,l.a)((function(){var e,n,a,i,c,l=(0,r.useState)(),y=l[0],N=l[1],S=(0,r.useState)(),w=S[0],C=S[1],M=(0,r.useState)(!1),k=M[0],B=M[1],A=(0,r.useState)(),I=A[0],T=A[1],G=(0,t.I0)(),R=d.default.query.id,P=(0,b.R)(),E=P.setDialog,L=P.onClosed,U=(0,r.useState)(),O=U[0],D=U[1],K=(0,r.useContext)(h.AppContext).setLoading,F=(0,r.useState)(!1),Z=F[0],_=F[1];(0,r.useEffect)((function(){K(!0),G((0,p.y3)({id:R},(function(e){var n,a;K(!1),N(e),T(null===e||void 0===e||null===(n=e.profile)||void 0===n?void 0:n.document_verified_at);var o=null===e||void 0===e||null===(a=e.document_files)||void 0===a?void 0:a.find((function(n){var a;return+n.id===+(null===e||void 0===e||null===(a=e.profile)||void 0===a?void 0:a.page_is_representative)}));C(o)}),(function(){K(!1)})))}),[]);var V=function(){return(0,o.jsxs)("div",{className:"pr-44",children:[(0,o.jsxs)("p",{className:"text-sm",children:["This is an ",(0,o.jsx)("b",{children:"ENTITY"}),". Please click the link to review the"," ",(0,o.jsx)("a",{className:"text-primary cursor-pointer underline",onClick:function(){return B(!0),void y.document_files.forEach((function(e){window.open("".concat("https://backend.caspermember.com").concat(e.url),"_blank")}))},children:"uploaded document"})," ","to make sure the name appears in the document. The user has indicated this name is on"," ",(0,o.jsx)("a",{className:"text-primary cursor-pointer underline",href:"".concat("https://backend.caspermember.com").concat(null===w||void 0===w?void 0:w.url),target:"_blank",rel:"noreferrer",children:null===w||void 0===w?void 0:w.name}),". If you can confirm this, click confirm. If you cannot see the above name in the document, click reset. You can log your reason after clicking reset."]}),!I&&(0,o.jsxs)("div",{className:"pt-12 actions",children:[(0,o.jsxs)(u.zx,{primary:!0,className:"mr-5",onClick:function(){return D(!0),void G((0,p.b$)({id:R},(function(e){T(new Date),D(!1)}),(function(){D(!1)})))},isLoading:O,sizeSpinner:20,disabled:!k||O,children:[(0,o.jsx)(v.Z,{})," ",(0,o.jsx)("span",{className:"pl-2",children:"Confirm"})]}),(0,o.jsx)(u.zx,{primaryOutline:!0,onClick:function(){E({type:"DialogCustom",data:{content:(0,o.jsx)(g.e$,{description:"This will reset the KYC step and tell the user through email to submit again for the following reason:",onResetUser:function(e){G((0,p.J5)({id:R,message:e},(function(e){L()})))},onBack:function(){return L()}})}})},disabled:!k,children:"Reset"})]}),I&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"pt-4 text-primary",children:[(0,o.jsx)("b",{children:"Confirmed in Document:"}),(0,o.jsx)("span",{className:"pl-7",children:(0,x.p)(I,"dd/MM/yyyy hh:mm aa")})]}),(0,o.jsx)(z,{})]})]})},z=function(){var e,n,a,i,r;return(0,o.jsxs)("div",{className:"pt-8",children:[(0,o.jsx)("div",{className:"mb-12 w-14 border-b border-primary"}),(0,o.jsx)("p",{className:"text-sm",children:"The KYC/AML provider returned the following:"}),(0,o.jsx)(j,{className:"pt-12",children:(0,o.jsx)("table",{className:"verification-table border-0",children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:"AML Status:"})}),(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:null!==y&&void 0!==y&&null!==(e=y.shuftipro)&&void 0!==e&&e.background_checks_result?"VERIFIED":"Needs Review"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:"KYC Status:"})}),(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:"approved"===(null===y||void 0===y||null===(n=y.shuftipro)||void 0===n?void 0:n.status)?"VERIFIED":"Needs Review"})})]})]})})}),(0,o.jsx)("div",{className:"pt-12 actions",children:null!==y&&void 0!==y&&null!==(a=y.shuftipro)&&void 0!==a&&a.background_checks_result&&"approved"===(null===y||void 0===y||null===(i=y.shuftipro)||void 0===i?void 0:i.status)?(0,o.jsx)(u.zx,{isLoading:Z,disabled:Z,primary:!0,className:"mr-5",sizeSpinner:20,onClick:function(){return _(!0),void G((0,p.bG)({id:R},(function(){_(!1),L(),d.default.push("../")}),(function(){_(!1)})))},children:"Activate Verified Status"}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.zx,{primary:!0,className:"mr-5",onClick:function(){return function(){var e,n=null!==y&&void 0!==y&&null!==(e=y.shuftipro)&&void 0!==e&&e.background_checks_result?"".concat(R,"/kyc-review"):"".concat(R,"/aml-review");d.default.push(n)}()},children:"Begin Review"}),"entity"===(null===y||void 0===y||null===(r=y.profile)||void 0===r?void 0:r.type)?(0,o.jsx)(u.zx,{primaryOutline:!0,onClick:function(){return T(null)},children:"Go Back"}):(0,o.jsx)(s.default,{href:"../",children:(0,o.jsx)("a",{children:(0,o.jsx)(u.zx,{primaryOutline:!0,children:"Go Back"})})})]})})]})};return(0,o.jsx)(m.Z,{children:(0,o.jsx)(u.Zb,{className:"h-full lg:pl-24 lg:py-11 lg:shadow-2xl",noShadow:!0,children:(0,o.jsxs)("div",{className:"w-full h-full",children:[(0,o.jsxs)("div",{className:"card-header lg:mr-24 lg:h-70px",children:[(0,o.jsx)(u.xE,{href:"/admin/intake",text:"Back",force:!0}),(0,o.jsxs)("h3",{className:"text-dark2 text-xl lg:pr-32 font-medium mb-3.5",children:["IDverification for"," ",(0,o.jsx)("span",{className:"capitalize",children:null===y||void 0===y||null===(e=y.profile)||void 0===e?void 0:e.type})]}),(0,o.jsx)("div",{className:"border-primary border-b-2"})]}),(0,o.jsx)("div",{className:"card-body pt-8 pb-28 overflow-y-auto lg:h-100%-70px",children:(0,o.jsxs)("div",{className:"lg:pr-24",children:[(0,o.jsx)("p",{children:"The following information was provided by the user and checked for KYC and AML:"}),(0,o.jsx)(j,{className:"pt-12",children:(0,o.jsx)("table",{className:"verification-table border-0",children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:"First Name:"})}),(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:null===y||void 0===y?void 0:y.first_name})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:"Last Name:"})}),(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:null===y||void 0===y?void 0:y.last_name})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:"Date of Birth:"})}),(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:null===y||void 0===y||null===(n=y.profile)||void 0===n?void 0:n.dob})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:"Country:"})}),(0,o.jsx)("td",{children:(0,o.jsx)("span",{children:function(e){var n;return null===(n=f.find((function(n){return n.code===e})))||void 0===n?void 0:n.name}(null===y||void 0===y||null===(a=y.profile)||void 0===a?void 0:a.country_citizenship)})})]})]})})}),(0,o.jsxs)("div",{children:["entity"===(null===y||void 0===y||null===(i=y.profile)||void 0===i?void 0:i.type)&&(0,o.jsx)(V,{}),"individual"===(null===y||void 0===y||null===(c=y.profile)||void 0===c?void 0:c.type)&&(0,o.jsx)(z,{})]})]})})]})})})}),"final-admin")},67374:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/intake/verification/[id]",function(){return a(31394)}])},43732:function(e){"use strict";e.exports=JSON.parse('[{"name":"Afghanistan","code":"AF"},{"name":"\xc5land Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"AndorrA","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\'Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\'S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\'S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]')}},function(e){e.O(0,[9774,2554,4597,9650,6993,6095,8661,9669,3913,1045,1457,8216],(function(){return n=67374,e(e.s=n);var n}));var n=e.O();_N_E=n}]);