(this.webpackJsonpsmash=this.webpackJsonpsmash||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),r=a(27),s=a.n(r),o=(a(34),a(6)),i=a.p+"static/media/background.f3769753.png",l=a(1);var d=function(e){var t=e.children;return Object(l.jsxs)(c.a.Fragment,{children:[t,Object(l.jsxs)("div",{id:"app-background",children:[Object(l.jsx)("div",{id:"background-bar"}),Object(l.jsx)("img",{id:"background-img",src:i}),Object(l.jsxs)("p",{className:"Suggestions-Content",children:["Have a suggestion? Give us some feedback ",Object(l.jsx)("a",{href:"https://forms.gle/18p1JQgghmbrQkpV9",target:"_blank",rel:"noreferrer",children:"here"})]})]})]})},u=a(18),h=a(15);function j(e){var t=e.children,a=e.color,n=e.className,c=e.onClick,r=e.style;return Object(l.jsx)("button",{style:Object(h.a)(Object(h.a)({},r),{},{display:"inline"}),onClick:c,className:"".concat(n," button-").concat(a," button bordered drop-shadow parallelogram"),children:Object(l.jsx)("span",{children:t})})}function b(e){var t=e.name,a=e.activeDropdown,n=e.setActiveDropdown,c=e.children,r=e.color,s=e.className,o=e.options,i=e.onChange,d=e.style;return Object(l.jsxs)("div",{style:Object(h.a)(Object(h.a)({},d),{},{display:"inline",position:"relative"}),className:"button-container",children:[Object(l.jsx)("button",{onClick:function(){n(a?null:t)},className:"".concat(s," dropdown-button button-").concat(r," button bordered drop-shadow parallelogram"),children:Object(l.jsx)("span",{children:c})}),Object(l.jsx)("div",{className:"dropdown-content ".concat(a?"bordered":""," drop-shadow"),style:{height:a?"auto":"0"},children:o.map((function(e){return Object(l.jsx)("a",{className:"dropdown-element",onClick:function(e){return i(e.target.text)},value:e,children:e},e)}))})]})}function m(e){var t=e.children,a=e.curVal,c=e.toggleVal,r=e.style,s=Object(n.useState)(a),i=Object(o.a)(s,2),d=i[0],u=i[1];return Object(n.useEffect)((function(){u(a)}),[a]),Object(l.jsx)("button",{style:Object(h.a)(Object(h.a)({},r),{},{display:"inline"}),onClick:function(){u(!d),c()},className:"dropdown-button button-".concat(d?"green":"red"," button bordered drop-shadow parallelogram"),children:Object(l.jsx)("span",{children:t})})}a(36);var O=function(e){var t=e.theme,a=e.tagData,c=e.charData,r=e.setLoaded,s=e.omitChars,i=e.setOmitChars,d=Object(n.useState)(null),h=Object(o.a)(d,2),j=h[0],b=h[1];Object(n.useEffect)((function(){c.length>0&&Object.keys(c[0]).length>0&&b(Object.keys(c[0]).length)}),[c]),Object(n.useEffect)((function(){0===j&&r(!0)}),[j]),Object(n.useEffect)((function(){"Random Theme"===t&&r(!0)}),[t]);var m=function(e){if(s.includes(e.target.id)){var t=s.filter((function(t){return t!==e.target.id}));i(t)}else{var a=[].concat(Object(u.a)(s),[e.target.id]);i(a)}};return Object(l.jsx)("div",{className:"Char-Grid",children:Object(l.jsx)("div",{className:"row",children:0===c.length?[]:Object.keys(c[0]).map((function(e){return function(e){var n=c[0][e].Img,r=c[0][e].Name,o="All Characters"===t||"Random Theme"===t?Object.keys(c[0]):a[0][t];return Object(l.jsx)("div",{className:s.includes(r)||!o.includes(r)?"Omit column":"column",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("img",{id:r,onClick:m,className:"Char-Img",src:n,onLoad:function(){return b(j-1)}})})},e)}(e)}))})})},f=a.p+"static/media/loading-logo.0fb25ec2.png";var p=function(){return Object(l.jsx)("div",{style:{position:"absolute",zIndex:3,height:"100vh",width:"100vw",backgroundColor:"var(--black)",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)("img",{src:f,className:"loading-logo",alt:"logo"})})},g=a(12),v=a.n(g),x=a(28),C=a.n(x);function y(e){var t=e.theme,a=e.omitChars,c=e.tagData,r=e.charData,s=e.unique,i=e.numPlayers,l=e.setError,d=e.chosenChars,u=e.setChosenChars,h=Object(n.useState)([]),j=Object(o.a)(h,2),b=j[0],m=j[1],O=function(e){var t=e.filter((function(e){return!a.includes(e)}));m(t)},f=function(e){return e[Math.floor(Math.random()*e.length)]};return Object(n.useEffect)((function(){!function(){if(0!==r.length&&"All Characters"===t)O(Object.keys(r[0]));else if(0!==r.length&&"Random Theme"===t){var e=f(Object.keys(c[0]));O(c[0][e])}else 0!==r.length&&O(c[0][t])}()}),[t,r,a,i]),Object(n.useEffect)((function(){!function(){for(var e=[],t=C.a.cloneDeep(b),a=function(a){var n=f(t);e.push(n),s&&(t=t.filter((function(e){return e!==n})))},n=0;n<i;n++)a();u(e)}()}),[b,s]),Object(n.useEffect)((function(){var e=d.includes(null)||d.includes(void 0);l(e)}),[d,i]),null}y.propTypes={theme:v.a.string,omitChars:v.a.array,tagData:v.a.array,charData:v.a.array,unique:v.a.bool,numPlayers:v.a.number,chosenChars:v.a.array,setError:v.a.func};var N=y;a(40);var S=function(e){var t=e.setError,a=e.screenSize;return Object(l.jsx)("div",{id:"error",className:"mobile"===a?"Error-Message bordered drop-shadow center":"Error-Message parallelogram bordered drop-shadow center",children:Object(l.jsxs)("div",{className:"Error-Contents",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("i",{children:"Not enough characters enabled"})}),Object(l.jsx)("p",{children:"Please enable more characters to choose from before continuing."}),Object(l.jsx)(j,{className:"uppercase extrabold italic",color:"golden",onClick:function(){return t(!1)},style:{top:"3em"},children:"OK"})]})})};var P=function(e){var t=e.theme,a=e.numPlayers,r=e.unique,s=e.setOnSelectionScreen,i=e.setNumPlayers,d=e.setTheme,h=e.setUnique,f=e.charData,g=e.tagData,v=e.omitChars,x=e.setOmitChars,C=e.chosenChars,y=e.setChosenChars,P=e.screenSize,D=Object(n.useState)(null),w=Object(o.a)(D,2),E=w[0],k=w[1],A=Object(n.useState)(["Random Theme","All Characters"]),T=Object(o.a)(A,2),R=T[0],_=T[1],I=Object(n.useState)(0!==f.length),U=Object(o.a)(I,2),z=U[0],F=U[1],q=Object(n.useState)(!1),L=Object(o.a)(q,2),M=L[0],V=L[1];return Object(n.useEffect)((function(){if(0!==g.length){var e=Object.keys(g[0]).concat(R),t=Object(u.a)(new Set(e));_(t)}}),[g]),Object(l.jsxs)(c.a.Fragment,{children:[!z&&Object(l.jsx)(p,{}),z&&Object(l.jsx)(l.Fragment,{children:M&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{id:"background-blur"}),Object(l.jsx)(S,{screenSize:P,setError:V})]})}),Object(l.jsx)("div",{id:"selection-panel",className:"mobile"===P?"container bordered drop-shadow":"parallelogram bordered drop-shadow center",style:{display:z?"block":"none"},children:Object(l.jsxs)("div",{className:"panel-contents",children:[Object(l.jsxs)("div",{id:"button-bar",children:[Object(l.jsx)(b,{name:"playersDropdown",activeDropdown:"playersDropdown"===E,setActiveDropdown:k,options:["1 Player","2 Players","3 Players","4 Players","5 Players","6 Players","7 Players","8 Players"],onChange:function(e){var t=parseInt(e.split(" ")[0]);i(t),k(null)},children:"".concat(a," ").concat(a>1?"Players":"Player")}),Object(l.jsx)(b,{name:"themeDropdown",activeDropdown:"themeDropdown"===E,setActiveDropdown:k,options:R,onChange:function(e){d(e),k(null)},children:t}),Object(l.jsx)(m,{curVal:r,toggleVal:function(){return h(!r)},children:r?"Unique":"Not Unique"})]}),Object(l.jsx)(O,{theme:t,tagData:g,charData:f,setLoaded:F,omitChars:v,setOmitChars:x}),z&&Object(l.jsx)(N,{chosenChars:C,setChosenChars:y,theme:t,omitChars:v,tagData:g,charData:f,unique:r,numPlayers:a,setError:V}),Object(l.jsx)(j,{className:"uppercase extrabold italic",color:"golden",onClick:function(){C.includes(null)||C.includes(void 0)?V(!0):s(!1)},style:{top:"2em"},children:"Generate"})]})})]})},D=a(11),w=a.n(D),E=a(17),k={1:"red",2:"blue",3:"yellow",4:"green",5:"orange",6:"cyan",7:"pink",8:"purple"};var A=function(e){var t=e.characterName,a=e.characterImgUrl,n=e.playerNum,c=e.screenSize;return Object(l.jsx)(l.Fragment,{children:"mobile"===c?Object(l.jsxs)("div",{className:"Selected-Char",children:[Object(l.jsxs)("h2",{className:"Player-Num",children:["P",n]}),Object(l.jsx)("div",{className:"parallelogram drop-shadow",children:Object(l.jsx)("div",{className:"selected-character-box selection",style:{backgroundColor:"var(--"+k[n]+")"},children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{src:a}),Object(l.jsx)("div",{className:"name-box mobile-slant"}),Object(l.jsx)("div",{className:"name-box ",children:Object(l.jsx)("h1",{className:"Selected-Char-Name",children:t})})]})})})]}):Object(l.jsxs)("div",{className:"selected-character-box selection",style:{backgroundColor:"var(--"+k[n]+")"},children:[Object(l.jsxs)("h2",{className:"Player-Num",children:["P",n]}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{src:a}),Object(l.jsx)("div",{className:"char-name-border"}),Object(l.jsx)("div",{className:"name-box desktop-slant",children:Object(l.jsx)("h1",{className:"Selected-Char-Name",children:t})})]})]})})};a(42);var T=function(e){var t=e.numPlayers,a=e.theme,c=e.chosenChars,r=e.setChosenChars,s=e.omitChars,i=e.tagData,d=e.unique,u=e.charData,h=e.setOnSelectionScreen,b=e.screenSize,m=Object(n.useState)(!1),O=Object(o.a)(m,2),f=O[0],p=O[1],g=function(e){return new Promise((function(t){return setTimeout(t,e)}))},v=function(){var e=Object(E.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,g(1e3);case 3:p(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"results-screen",className:"mobile"===b?"container":"Results-Screen",children:[Object(l.jsx)("div",{className:"mobile"===b?"results-container drop-shadow":"parallelogram results-container bordered drop-shadow res",children:c.includes(null)||c.includes(void 0)||0===u[0].length?null:c.map((function(e,t){return void 0!==e&&void 0!==u[0][e]&&Object(l.jsx)(A,{characterName:u[0][e].Name,characterImgUrl:u[0][e].Img,playerNum:t+1,screenSize:b},e)}))}),Object(l.jsxs)("div",{className:"Result-Buttons-Container",children:[Object(l.jsx)(j,{onClick:function(){return h(!0)},className:"uppercase extrabold",children:Object(l.jsx)("span",{children:"Back"})}),Object(l.jsx)(j,{onClick:v,className:"uppercase extrabold",color:"golden",children:"Shuffle"})]})]}),f&&Object(l.jsx)(N,{chosenChars:c,setChosenChars:r,theme:a,omitChars:s,tagData:i,charData:u,unique:d,numPlayers:t,setError:function(){return null}})]})},R=a(29),_=a(19);a(43).config();var I=function(e){var t=e.setTagData,a=e.setCharData,c={apiKey:"AIzaSyDUVO2icMOw3Z9-wPZQl9zU6-0gk7Xieew",authDomain:"smash-89ac9.firebaseapp.com",databaseURL:"https://smash-89ac9-default-rtdb.firebaseio.com",projectId:"smash-89ac9",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APIKEY:"AIzaSyDUVO2icMOw3Z9-wPZQl9zU6-0gk7Xieew",REACT_APP_DOMAIN:"smash-89ac9.firebaseapp.com",REACT_APP_DATABASE:"https://smash-89ac9-default-rtdb.firebaseio.com",REACT_APP_PROJECTID:"smash-89ac9",REACT_APP_STORAGEBUCKET:"smash-89ac9.appspot.com",REACT_APP_SENDERID:"235176020211",REACT_APP_APPID:"1:235176020211:web:860a5a85928da8edcc8f86",REACT_APP_MEASUREMENTID:"G-H9RJLC8VPD"}).REACT_APP_STORAGE,messagingSenderId:"235176020211",appId:"1:235176020211:web:860a5a85928da8edcc8f86",measurementId:"G-H9RJLC8VPD"};Object(R.a)(c);var r=Object(_.a)();return!0,Object(n.useEffect)((function(){!function(){var e=Object(_.c)(r,"chars");Object(_.b)(e,(function(e){a([e.val()])}))}(),function(){var e=Object(_.c)(r,"tags");Object(_.b)(e,(function(e){t([e.val()])}))}()}),[true]),null};a(47),a(48);var U=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(4),i=Object(o.a)(s,2),u=i[0],h=i[1],j=Object(n.useState)("All Characters"),b=Object(o.a)(j,2),m=b[0],O=b[1],f=Object(n.useState)([]),p=Object(o.a)(f,2),g=p[0],v=p[1],x=Object(n.useState)([]),C=Object(o.a)(x,2),y=C[0],N=C[1],S=Object(n.useState)([]),D=Object(o.a)(S,2),w=D[0],E=D[1],k=Object(n.useState)([]),A=Object(o.a)(k,2),R=A[0],_=A[1],U=Object(n.useState)(!0),z=Object(o.a)(U,2),F=z[0],q=z[1],L=function(){var e=window.innerWidth,t=window.innerHeight;return e<768||t<450?"mobile":e<1367?"tablet":"desktop"},M=Object(n.useState)(L),V=Object(o.a)(M,2),B=V[0],G=V[1];window.addEventListener("resize",(function(){G(L)}),!0);var H=null;return Object(n.useEffect)((function(){if("Random Theme"===m)q(!1);else{var e=function(){var e=R.length;if(1===y.length){var t="Random Theme"===m||"All Characters"===m?Object.keys(g[0]).length:y[0][m].length;return 0!==e&&e<=t}}();q(void 0===e||e)}}),[m]),H=a?Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)(I,{setCharData:function(e){v(e)},setTagData:function(e){N(e)}}),Object(l.jsx)(P,{numPlayers:u,theme:m,unique:F,setOnSelectionScreen:r,setNumPlayers:h,setTheme:O,setUnique:q,charData:g,tagData:y,omitChars:w,setOmitChars:function(e){E(e)},chosenChars:R,setChosenChars:_,screenSize:B})]}):Object(l.jsx)(T,{numPlayers:u,theme:m,chosenChars:R,setChosenChars:_,omitChars:w,tagData:y,unique:F,charData:g,setOnSelectionScreen:r,screenSize:B}),Object(l.jsx)(d,{children:H})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsxs)(c.a.StrictMode,{children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{className:"outline",children:"Smash Picker"})}),Object(l.jsx)(U,{})]}),document.getElementById("root")),z()}},[[49,1,2]]]);
//# sourceMappingURL=main.9346a4c6.chunk.js.map