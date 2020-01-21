!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}([function(e,t){e.exports=require("@emotion/core")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@emotion/styled-base")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("redux-persist")},function(e,t){e.exports=require("moment")},function(e,t){e.exports=require("redux-persist-cookie-storage")},function(e,t){e.exports=require("cookies")},function(e,t){e.exports=require("redux-devtools-extension")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("redux-persist/lib/integration/react")},function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t){e.exports=require("redux-persist-transform-encrypt")},function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),a=n(15),i=n.n(a),c=n(1),s=n(18),u=n.n(s),l=n(9),p=n(5),j=n(16),m=n(23),b=n(24),d=n.n(b),x=n(25),f=n.n(x),g=n(3),h=(n(26),n(19)),O=(n(27),n(21)),v=n(22),y=n.n(v),k=n(10),w=n.n(k),C=n(11),S=n.n(C),L=n(12),T=n.n(L),P=n(13),q=n.n(P),D=n(14),R=n.n(D),M=n(4),E=n.n(M),F=n(6),_=n.n(F),A=n(20),I=n.n(A),N=n(0);var W=E()("div",{target:"e1pc2kf40",label:"BoxContainerStyled"})({name:"p58oka",styles:"display:flex;flex-direction:row;flex-wrap:wrap;"}),U=E()("div",{target:"e1pc2kf41",label:"BoxItemStyled"})({name:"ovp49p",styles:"color:black;border-radius:4px;box-shadow:2px 4px #898989;margin:5px;max-width:200px;width:200px;height:200px;padding:10px;flex-grow:1;background-color:#ffff;a{text-decoration:none;color:inherit;}p{font-size:12px;}"}),B=function(e){function t(e){var n;return w()(this,t),(n=T()(this,q()(t).call(this,e))).state={activeMeetings:null},n}return R()(t,e),S()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.token;_()({headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(t)},url:"".concat(API_URL,"/meetings/active/"),method:"GET"}).then((function(t){var n=t.data.meetings;e.setState({activeMeetings:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.activeMeetings;return Object(N.jsx)(c.Fragment,null,e&&Object(N.jsx)(W,null,e.map((function(e){var t=e.meeting_uuid,n=e.start_date,r=e.meeting_template;return Object(N.jsx)(U,null,Object(N.jsx)(g.Link,{to:"/meeting/preview/".concat(t,"/")},r.name),Object(N.jsx)("p",null,"Description: ".concat(r.description)),Object(N.jsx)("p",null,"Start Date: ".concat(I()(n).format("MMMM Do YYYY, h:mm:ss a"))))}))),!e&&Object(N.jsx)("p",null," No Active Meetings"))}}]),t}(c.Component),X=Object(p.connect)((function(e){return{token:e.reducer.user.token}}),null)(B);var z=E()("div",{target:"e85gih90",label:"BoxContainerStyled"})({name:"p58oka",styles:"display:flex;flex-direction:row;flex-wrap:wrap;"}),H=E()("div",{target:"e85gih91",label:"BoxItemStyled"})({name:"ovp49p",styles:"color:black;border-radius:4px;box-shadow:2px 4px #898989;margin:5px;max-width:200px;width:200px;height:200px;padding:10px;flex-grow:1;background-color:#ffff;a{text-decoration:none;color:inherit;}p{font-size:12px;}"}),Y=function(e){function t(e){var n;return w()(this,t),(n=T()(this,q()(t).call(this,e))).state={activeTemplates:null},n}return R()(t,e),S()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.token,n="".concat(API_URL,"/meetings/active/template");_()({headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(t)},url:n,method:"GET"}).then((function(t){var n=t.data.templates;e.setState({activeTemplates:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.activeTemplates;return Object(N.jsx)(c.Fragment,null,e&&Object(N.jsx)(z,null,e.map((function(e){var t=e.name,n=e.description;return Object(N.jsx)(H,null,Object(N.jsx)(g.Link,{to:"/meeting/preview/"},t),Object(N.jsx)("p",null,"Description: ".concat(n)))}))),!e&&Object(N.jsx)("p",null," No Active Meetings"))}}]),t}(c.Component),J=Object(p.connect)((function(e){return{token:e.reducer.user.token}}),null)(Y);var G={};G.UlElement=E()("ul",{target:"e15t2dwo0"})({name:"jfjb73",styles:"max-width:800px;margin:0 auto;list-style-type:none;padding:0;"}),G.FlexList=E()("ul",{target:"e15t2dwo1"})({name:"39htxe",styles:"list-style-type:none;padding:0;display:flex;flex-wrap:wrap;align-items:center;padding:0 8px;flex:1 0 220px;li{width:100px;}"}),G.ListElement=E()("li",{target:"e15t2dwo2"})({name:"1fsmdt9",styles:"display:flex;flex-wrap:wrap;align-items:center;label,p{padding:8px;font-weight:300;letter-spacing:0.09em;text-transform:uppercase;flex:1 0 120px;max-width:220px;}"}),G.ButtonElement=E()("button",{target:"e15t2dwo3"})({name:"wz5jyj",styles:"padding:8px 16px;border:none;background:#333;color:#f2f2f2;text-transform:uppercase;letter-spacing:0.09em;border-radius:2px;"});var K=G,Q=function(e){var t=e.history;return Object(N.jsx)(c.Fragment,null,Object(N.jsx)("h1",null," Your Meetings: "),Object(N.jsx)(X,null),Object(N.jsx)("h1",null," Create a New Meeting: "),Object(N.jsx)(K.ButtonElement,{onClick:function(){return t.push("/meeting/create")}},"Create Meeting"),Object(N.jsx)("h1",null," Trending Templates: "),Object(N.jsx)(J,null))},V=n(2),Z=n.n(V),$=n(8),ee=n.n($);function te(e){return console.log(e),{type:"SET_TOKEN",value:e}}var ne=function(e){var t=Object(c.useState)(""),n=Z()(t,2),r=n[0],o=n[1],a=Object(c.useState)(""),i=Z()(a,2),s=i[0],u=i[1];return Object(N.jsx)(c.Fragment,null,Object(N.jsx)("h1",null," Login "),Object(N.jsx)(K.UlElement,null,Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"email"},"Email"),Object(N.jsx)("input",{type:"text",name:"email",value:r,onChange:function(e){return o(e.target.value)}})),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"password"},"Password"),Object(N.jsx)("input",{type:"password",name:"password",value:s,onChange:function(e){return u(e.target.value)}})),Object(N.jsx)(K.ButtonElement,{onClick:function(){return t="".concat(API_URL,"/users/token-auth/"),(n=new FormData).append("email",r),n.append("password",s),void _()({headers:{"X-Requested-With":"XMLHttpRequest"},url:t,method:"POST",data:n}).then((function(t){var n=t.data,r=e.setTokenAction,o=e.history;r(n.token),o.push("/")})).catch((function(e){console.log(e)}));var t,n}}," Login ")))};ne.propTypes={setToken:ee.a.func},ne.defaultProps={setToken:null};var re=Object(p.connect)(null,(function(e){return{setTokenAction:function(t){return e(te(t))}}}))(ne),oe=function(e){var t=e.setTokenAction,n=e.history,r=Object(c.useState)(""),o=Z()(r,2),a=o[0],i=o[1],s=Object(c.useState)(""),u=Z()(s,2),l=u[0],p=u[1],j=Object(c.useState)(""),m=Z()(j,2),b=m[0],d=m[1],x=Object(c.useState)(""),f=Z()(x,2),g=f[0],h=f[1],O=Object(c.useState)(""),v=Z()(O,2),y=v[0],k=v[1],w=Object(c.useState)(""),C=Z()(w,2),S=C[0],L=C[1];return Object(N.jsx)(c.Fragment,null,Object(N.jsx)("h1",null," Registration "),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"first-name"},"First Name"),Object(N.jsx)("input",{type:"text",name:"first-name",value:a,onChange:function(e){return i(e.target.value)}})),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"last-name"},"Last Name"),Object(N.jsx)("input",{type:"text",name:"last-name",value:l,onChange:function(e){return p(e.target.value)}})),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"phone-number"},"Phone number"),Object(N.jsx)("input",{type:"text",name:"phone-number",value:g,onChange:function(e){return h(e.target.value)}})),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"date-of-birth"},"Date of Birth"),Object(N.jsx)("input",{type:"date",name:"date-of-birth",value:b,onChange:function(e){return d(e.target.value)}})),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"email"},"Email"),Object(N.jsx)("input",{type:"email",name:"email",value:y,onChange:function(e){return k(e.target.value)}})),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"email"},"Password"),Object(N.jsx)("input",{type:"password",name:"password",value:S,onChange:function(e){return L(e.target.value)}})),Object(N.jsx)(K.ButtonElement,{onClick:function(){return e="".concat(API_URL,"/users/register/"),(r=new FormData).append("first_name",a),r.append("last_name",l),r.append("date_of_birth",b),r.append("email",y),r.append("password",S),void _()({headers:{"X-Requested-With":"XMLHttpRequest"},url:e,method:"POST",data:r}).then((function(e){var r=e.data.token;t(r),n.push("/")})).catch((function(e){console.log(e)}));var e,r}}," Register "))};oe.propTypes={setTokenAction:ee.a.func.isRequired};var ae=Object(p.connect)(null,(function(e){return{setTokenAction:function(t){return e(te(t))}}}))(oe);var ie={};ie.Nav=E()("nav",{target:"e10mgfkx0"})({name:"tw5309",styles:"width:100%;padding-left:30px;padding-right:10px;display:flex;justify-content:space-between;align-items:center;"}),ie.Ul=E()("ul",{target:"e10mgfkx1"})({name:"n8z9vn",styles:"display:flex;list-style:none;li a{display:inline-block;padding:10px 15px;text-decoration:none;}"});var ce=ie,se=function(e){var t=e.setTokenAction;e.history;return Object(N.jsx)(ce.Ul,null,Object(N.jsx)("li",null,Object(N.jsx)(g.Link,{to:"/"},"Home")),Object(N.jsx)("li",null,Object(N.jsx)(g.Link,{to:"/profile"},"Profile")),Object(N.jsx)("li",null,Object(N.jsx)(g.Link,{to:"/",onClick:function(){t(null),window.location.href="/login"}}," Logout")))};se.propTypes={setTokenAction:ee.a.func.isRequired};var ue=Object(p.connect)(null,(function(e){return{setTokenAction:function(t){return e(te(t))}}}))(se),le=function(){return Object(N.jsx)(ce.Ul,null,Object(N.jsx)("li",null,Object(N.jsx)(g.Link,{to:"/"},"Home")),Object(N.jsx)("li",null,Object(N.jsx)(g.Link,{to:"/login"},"Login")),Object(N.jsx)("li",null,Object(N.jsx)(g.Link,{to:"/register"},"Register")))},pe=Object(p.connect)((function(e){return{token:e.reducer.user.token}}),null)((function(e){var t=!!e.token;return Object(N.jsx)(ce.Nav,null,!t&&Object(N.jsx)(le,null),t&&Object(N.jsx)(ue,null))}));var je={name:"1a6n37v-globalCSS",styles:'body{font:normal 18px/1.5 "Fira Sans","Helvetica Neue",sans-serif;background:#f4f4f4;color:#0e8afc;;label:globalCSS;'},me={name:"1jidj1q-pageCss",styles:"width:80%;max-width:1200px;margin:0 auto;;label:pageCss;"},be=function(e){var t=e.route;e.match;return Object(N.jsx)("div",null,Object(N.jsx)(N.Global,{styles:je}),Object(N.jsx)(pe,null),Object(N.jsx)("div",{css:me},Object(l.renderRoutes)(t.routes)))};be.propTypes={route:ee.a.objectOf(ee.a.any)},be.defaultProps={route:null};var de=be,xe=function(){var e=Object(g.useRouteMatch)().url;return Object(N.jsx)("div",null,Object(N.jsx)("p",null,Object(N.jsx)(g.Link,{to:e+"/create"}," Host a meeting ")),Object(N.jsx)("p",null,Object(N.jsx)(g.Link,{to:e+"/active"}," Your Meetings ")),Object(N.jsx)("p",null,Object(N.jsx)(g.Link,{to:e+"/template"}," Trending Templates ")))},fe=function(e){var t=e.route;return Object(N.jsx)("div",null,Object(l.renderRoutes)(t.routes,{someProp:"these extra props are optional"}))},ge=n(17),he=n.n(ge);function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ve=function(e){var t=e.selectedComponents,n=e.componentList,r=e.updateComponentList,o=Object(c.useState)(""),a=Z()(o,2),i=a[0],s=a[1],u=Object(c.useState)(""),l=Z()(u,2),p=l[0],j=l[1],m=Object(c.useState)({}),b=Z()(m,2),d=b[0],x=b[1],f=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){he()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.find((function(t){return e==t.id})));t.agenda_item=i,t.duration=p,x(t)};return Object(N.jsx)(c.Fragment,null,Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"meeting-component"},"Meeting Component"),Object(N.jsx)("input",{type:"text",name:"meeting-component",value:i,placeholder:"Name",onChange:function(e){return s(e.target.value)}}),Object(N.jsx)("input",{type:"number",name:"meeting-component-duration",value:p,placeholder:"Duration",onChange:function(e){return j(e.target.value)}}),Object(N.jsx)("select",{onChange:function(e){return f(e.target.value)}},Object(N.jsx)("option",{key:"none",value:null},"Type"),n&&n.map((function(e){return Object(N.jsx)("option",{key:e.type,value:e.id}," ",e.name)}))),Object(N.jsx)(K.ButtonElement,{onClick:function(){var e=t.concat([d]);r(e)}}," + ")))},ye=function(e){var t=e.meetingName,n=e.meetingDescription,r=e.componentList,o=e.setMeetingName,a=e.setMeetingDescription,i=(e.setComponent,e.addComponent),s=e.updateComponentList,u=e.selectedComponents;return Object(N.jsx)(c.Fragment,null,Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"meeting-name"},"Meeting Name"),Object(N.jsx)("input",{type:"text",name:"meeting-name",value:t,onChange:function(e){return o(e.target.value)}})),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"meeting-description"},"Meeting Description"),Object(N.jsx)("input",{type:"text",name:"meeting-description",value:n,onChange:function(e){return a(e.target.value)}})),r&&Object(N.jsx)(ve,{updateComponentList:s,componentList:r,addComponent:i,selectedComponents:u}))},ke=function(e){var t=e.startDate,n=e.setStartDate,r=e.isPublic,o=e.setPublic,a=e.isRecurring,i=e.setRecurring,s=e.setInterval;return Object(N.jsx)(c.Fragment,null,Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"public"},"Public ?"),Object(N.jsx)(K.FlexList,null,Object(N.jsx)("li",null,Object(N.jsx)("label",{htmlFor:"yes"}," Yes "),Object(N.jsx)("input",{type:"radio",id:"yes",checked:!0===r,onChange:function(e){return o(!0)}})),Object(N.jsx)("li",null,Object(N.jsx)("label",{htmlFor:"no"}," No "),Object(N.jsx)("input",{type:"radio",id:"no",checked:!1===r,onChange:function(e){return o(!1)}})))),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"date"},"Start Date "),Object(N.jsx)("input",{type:"date",name:"start-date",value:t,onChange:function(e){return n(e.target.value)}})),Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"recurring"},"Recurring ?"),Object(N.jsx)(K.FlexList,null,Object(N.jsx)("li",null,Object(N.jsx)("label",{htmlFor:"yes"}," Yes "),Object(N.jsx)("input",{type:"radio",id:"yes",checked:!0===a,onChange:function(e){return i(!0)}})),Object(N.jsx)("li",null,Object(N.jsx)("label",{htmlFor:"no"}," No "),Object(N.jsx)("input",{type:"radio",id:"no",checked:!1===a,onChange:function(e){return i(!1)}})))),a&&Object(N.jsx)(K.ListElement,null,Object(N.jsx)("label",{htmlFor:"Interval"},"How Often? "),Object(N.jsx)("select",{onChange:function(e){return s(e.target.value)}},Object(N.jsx)("option",{value:"Day"},"Daily"),Object(N.jsx)("option",{value:"Month"},"Monthly"),Object(N.jsx)("option",{value:"Week"},"Weekly"),Object(N.jsx)("option",{value:"Year"},"Yearly"))))},we=function(e){var t=e.componentList;return Object(N.jsx)(c.Fragment,null,t.map((function(e){return Object(N.jsx)("p",{key:e.customName},"Name: ".concat(e.agenda_item," Duration: ").concat(e.duration," minutes Type: ").concat(e.name))})))};we.propTypes={componentList:ee.a.array},we.defaultProps={componentList:[]};var Ce=we,Se=Object(p.connect)((function(e){return{token:e.reducer.user.token}}),null)((function(e){var t=Object(c.useState)(""),n=Z()(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),u=Z()(s,2),l=u[0],p=u[1],j=Object(c.useState)(!1),m=Z()(j,2),b=m[0],d=m[1],x=Object(c.useState)(!1),f=Z()(x,2),g=f[0],h=f[1],O=Object(c.useState)(""),v=Z()(O,2),y=v[0],k=v[1],w=Object(c.useState)(""),C=Z()(w,2),S=C[0],L=C[1],T=Object(c.useState)(null),P=Z()(T,2),q=P[0],D=P[1],R=Object(c.useState)([]),M=Z()(R,2),E=M[0],F=M[1];Object(c.useEffect)((function(){(function(){var t=i()(o.a.mark((function t(){var n,r,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.token,r="".concat(API_URL,"/meetings/components/"),t.next=4,_()({headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(n)},url:r,method:"GET"});case 4:a=t.sent,i=a.data,D(i.components);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var A=function(){var t=i()(o.a.mark((function t(){var n,a,i,c,s,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(API_URL,"/meetings/structure/create/"),a=e.token,i=e.history,(c=new FormData).append("name",r),c.append("public",b),c.append("start_date",y),c.append("description",l),c.append("recurring",g),c.append("interval",S),c.append("selected_components",JSON.stringify(E)),t.next=12,_()({headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(a)},url:n,method:"POST",data:c});case 12:200===(s=t.sent).status&&(u=s.data.meeting_uuid,i.push("/meeting/preview/".concat(u)));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsx)(c.Fragment,null,Object(N.jsx)("h2",null," Meeting Creation "),Object(N.jsx)(ye,{componentList:q,selectedComponents:E,meetingName:r,meetingDescription:l,setMeetingName:a,setMeetingDescription:p,updateComponentList:F}),E&&Object(N.jsx)(Ce,{componentList:E}),Object(N.jsx)(ke,{startDate:y,setPublic:d,isPublic:b,isRecurring:g,setStartDate:k,setRecurring:h,setInterval:L}),Object(N.jsx)(K.ButtonElement,{onClick:function(){return A()}}," Create "))})),Le=n(28),Te=n.n(Le);var Pe=E()("div",{target:"ej0ovxe0",label:"BoxContainerStyled"})({name:"p58oka",styles:"display:flex;flex-direction:row;flex-wrap:wrap;"}),qe=E()("div",{target:"ej0ovxe1",label:"BoxItemStyled"})({name:"ovp49p",styles:"color:black;border-radius:4px;box-shadow:2px 4px #898989;margin:5px;max-width:200px;width:200px;height:200px;padding:10px;flex-grow:1;background-color:#ffff;a{text-decoration:none;color:inherit;}p{font-size:12px;}"}),De=function(e){function t(e){var n;return w()(this,t),n=T()(this,q()(t).call(this,e)),he()(Te()(n),"addCard",(function(){var e=n.props,t=e.match,r=e.token,o=n.state.content,a=t.params.meetingID,i=new FormData;i.append("content",o),i.append("meeting_uuid",a),_()({headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(r)},url:"".concat(API_URL,"/meetings/brainstorm/"),method:"POST",data:i}).then((function(e){var t=e.data.brainstorm_cards;n.setState({brainstormCards:t})})).catch((function(e){console.log(e)}))})),n.state={brainstormCards:null,content:null,isLoading:!1},n}return R()(t,e),S()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,r=t.token,o=n.params.meetingID;this.setState({isLoading:!0}),_()({headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(r)},url:"".concat(API_URL,"/meetings/brainstorm/"),method:"GET",params:{meeting_uuid:o}}).then((function(t){var n=t.data.brainstorm_cards;e.setState({brainstormCards:n}),e.setState({isLoading:!1})})).catch((function(t){console.log(t),e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.brainstormCards,r=t.isLoading,o=this.props.history;return Object(N.jsx)(c.Fragment,null,Object(N.jsx)("h1",null," Brainstorm Activity "),n&&Object(N.jsx)(Pe,null,n.map((function(e){var t=e.content;return Object(N.jsx)(qe,{key:"".concat(t)},Object(N.jsx)("p",null," ","".concat(t)))})),Object(N.jsx)(qe,null,Object(N.jsx)("textarea",{onChange:function(t){return e.setState({content:t.target.value})}}),Object(N.jsx)(K.ButtonElement,{onClick:function(){return e.addCard()}}," Add Card "))),r&&Object(N.jsx)("h3",null," Loading ..."),Object(N.jsx)(K.ButtonElement,{onClick:function(){return o.push("/")}}," Complete Activity "))}}]),t}(c.Component),Re=Object(p.connect)((function(e){return{token:e.reducer.user.token}}),null)(De);var Me=E()("div",{target:"e177ilib0",label:"BoxItemStyled"})({name:"162zrb6",styles:"color:black;border-radius:4px;box-shadow:2px 4px #898989;width:100%;height:100%;padding:10px;background-color:#ffff;display:flex;flex-direction:column;p{font-size:12px;}"}),Ee=E()("div",{target:"e177ilib1",label:"ComponentRowStyled"})({name:"1jba0ws",styles:"display:flex;flex-direction:row;justify-content:space-between;p{font-size:12px;}"}),Fe=function(e){function t(e){var n;return w()(this,t),(n=T()(this,q()(t).call(this,e))).state={activeMeetingTemplate:null,meetingUUID:null},n}return R()(t,e),S()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.token,r=t.match.params.meetingID;_()({headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(n)},url:"".concat(API_URL,"/meetings/active/preview/"),method:"GET",params:{meeting_uuid:r}}).then((function(t){var n=t.data.meeting,r=n.meeting_template;e.setState({activeMeetingTemplate:r,meetingUUID:n.meeting_uuid})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.activeMeetingTemplate,n=e.meetingUUID,r=this.props.history;return Object(N.jsx)(c.Fragment,null,t&&Object(N.jsx)(c.Fragment,null,Object(N.jsx)(Me,null,Object(N.jsx)("h1",null,"Name: ".concat(t.name)),Object(N.jsx)("h2",null,"Description: ".concat(t.description)),t.components.length>0&&t.components.map((function(e){return Object(N.jsx)(Ee,null,Object(N.jsx)("p",null,e.agenda_item),Object(N.jsx)("p",null,e.name),Object(N.jsx)("p",null,e.duration))}))),Object(N.jsx)(K.ButtonElement,{onClick:function(){return r.push("/meeting/activity/".concat(n,"/brainstorm/"))}}," Start PreWork ")))}}]),t}(c.Component),_e=Object(p.connect)((function(e){return{token:e.reducer.user.token}}),null)(Fe),Ae=[{component:de,routes:[{component:Q,path:"/",exact:!0},{component:re,path:"/login",exact:!0},{component:ae,path:"/register",exact:!0},{component:xe,path:"/meeting",exact:!0},{path:"/meeting/:category?/:meetingID?/:meetingActivity?",component:fe,routes:[{path:"/meeting/create/",component:Se,exact:!0},{path:"/meeting/active/",component:X,exact:!0},{path:"/meeting/preview/:meetingID/",component:_e,exact:!0},{path:"/meeting/activity/:meetingID/brainstorm/",component:Re}]}]}];n(29);function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){he()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var We={token:null};var Ue={reducer:Object(j.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=(t.payload,t.value);switch(n){case"SET_TOKEN":return Ne({},e,{token:r});default:return e}}})},Be=process.env.PORT||3006,Xe=u()();Xe.use(u.a.static("public")),Xe.use(y.a.express()),Xe.use(function(){var e=i()(o.a.mark((function e(t,n,r){var a,i,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new O.NodeCookiesWrapper(new y.a(t,n)),i={key:"root",storage:new O.CookieStorage(a),stateReconciler:function(e,t){return t}},e.prev=2,e.next=5,Object(h.getStoredState)(i);case 5:c=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c={};case 11:s=Object(h.persistCombineReducers)(i,Ue),t.reduxStore=Object(j.createStore)(s,c,Object(m.composeWithDevTools)(Object(j.applyMiddleware)(d.a))),n.removeHeader("Set-Cookie"),r();case 15:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),u.a.static("public")),Xe.get("*",(function(e,t){Object(l.matchRoutes)(Ae,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(store,id):null})).map((function(e){return e?new Promise((function(t,n){e.then(t).catch(t)})):null}));var n=f.a.renderToString(Object(N.jsx)(p.Provider,{store:e.reduxStore},Object(N.jsx)(g.StaticRouter,{location:e.path,context:{}},Object(N.jsx)("div",null,Object(l.renderRoutes)(Ae)))));return t.send('<!DOCTYPE html>\n<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n</head>\n<body>\n    <div id="root">'.concat(n,'</div>\n    <script src="/bundle.js"><\/script>\n    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n</body>\n</html>'))})),Xe.listen(Be,(function(){console.log("😎 Server is listening on port ".concat(Be))}))}]);