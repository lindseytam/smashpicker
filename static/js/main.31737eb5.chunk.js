(this.webpackJsonpsmash=this.webpackJsonpsmash||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),r=a(27),s=a.n(r),o=(a(34),a(6)),i=a.p+"static/media/background.f3769753.png",l=a(1);var u=function(e){var t=e.children;return Object(l.jsxs)(c.a.Fragment,{children:[t,Object(l.jsxs)("div",{id:"app-background",children:[Object(l.jsx)("div",{id:"background-bar"}),Object(l.jsx)("img",{id:"background-img",src:i}),Object(l.jsxs)("p",{className:"Suggestions-Content",children:["Have a suggestion? Give us some feedback ",Object(l.jsx)("a",{href:"https://forms.gle/18p1JQgghmbrQkpV9",target:"_blank",rel:"noreferrer",children:"here"})]})]})]})},d=a(18),h=a(15);function b(e){var t=e.children,a=e.color,n=e.className,c=e.onClick,r=e.style;return Object(l.jsx)("button",{style:Object(h.a)(Object(h.a)({},r),{},{display:"inline"}),onClick:c,className:"".concat(n," button-").concat(a," button bordered drop-shadow parallelogram"),children:Object(l.jsx)("span",{children:t})})}function j(e){var t=e.name,a=e.activeDropdown,n=e.setActiveDropdown,c=e.children,r=e.color,s=e.className,o=e.options,i=e.onChange,u=e.style;return Object(l.jsxs)("div",{style:Object(h.a)(Object(h.a)({},u),{},{display:"inline",position:"relative"}),className:"button-container",children:[Object(l.jsx)("button",{onClick:function(){n(a?null:t)},className:"".concat(s," dropdown-button button-").concat(r," button bordered drop-shadow parallelogram"),children:Object(l.jsx)("span",{children:c})}),Object(l.jsx)("div",{className:"dropdown-content ".concat(a?"bordered":""," drop-shadow"),style:{height:a?"auto":"0"},children:o.map((function(e){return Object(l.jsx)("a",{className:"dropdown-element",onClick:function(e){return i(e.target.text)},value:e,children:e},e)}))})]})}function m(e){var t=e.children,a=e.curVal,c=e.toggleVal,r=e.style,s=Object(n.useState)(a),i=Object(o.a)(s,2),u=i[0],d=i[1];return Object(n.useEffect)((function(){d(a)}),[a]),Object(l.jsx)("button",{style:Object(h.a)(Object(h.a)({},r),{},{display:"inline"}),onClick:function(){d(!u),c()},className:"dropdown-button button-".concat(u?"green":"red"," button bordered drop-shadow parallelogram"),children:Object(l.jsx)("span",{children:t})})}a(36);var O=function(e){var t=e.theme,a=e.tagData,c=e.charData,r=e.setLoaded,s=e.omitChars,i=e.setOmitChars,u=Object(n.useState)(null),h=Object(o.a)(u,2),b=h[0],j=h[1];Object(n.useEffect)((function(){c.length>0&&Object.keys(c[0]).length>0&&j(Object.keys(c[0]).length)}),[c]),Object(n.useEffect)((function(){0===b&&r(!0)}),[b]),Object(n.useEffect)((function(){"Random Theme"===t&&r(!0)}),[t]);var m=function(e){if(s.includes(e.target.id)){var t=s.filter((function(t){return t!==e.target.id}));i(t)}else{var a=[].concat(Object(d.a)(s),[e.target.id]);i(a)}};return Object(l.jsx)("div",{className:"Char-Grid",children:Object(l.jsx)("div",{className:"row",children:0===c.length?[]:Object.keys(c[0]).map((function(e){return function(e){var n=c[0][e].Img,r=c[0][e].Name,o="All Characters"===t||"Random Theme"===t?Object.keys(c[0]):a[0][t];return Object(l.jsx)("div",{className:s.includes(r)||!o.includes(r)?"Omit column":"column",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("img",{id:r,onClick:m,className:"Char-Img",src:n,onLoad:function(){return j((function(e){return e-1}))}})})},e)}(e)}))})})},f=a.p+"static/media/loading-logo.0fb25ec2.png";var g=function(){return Object(l.jsx)("div",{style:{position:"absolute",zIndex:3,height:"100vh",width:"100vw",backgroundColor:"var(--black)",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)("img",{src:f,className:"loading-logo",alt:"logo"})})},p=a(12),v=a.n(p),x=a(28),C=a.n(x);function y(e){var t=e.theme,a=e.omitChars,c=e.tagData,r=e.charData,s=e.unique,i=e.numPlayers,l=e.setError,u=e.chosenChars,d=e.setChosenChars,h=Object(n.useState)([]),b=Object(o.a)(h,2),j=b[0],m=b[1],O=function(e){var t=e.filter((function(e){return!a.includes(e)}));m(t)},f=function(e){return e[Math.floor(Math.random()*e.length)]};return Object(n.useEffect)((function(){!function(){if(0!==r.length&&"All Characters"===t)O(Object.keys(r[0]));else if(0!==r.length&&"Random Theme"===t){var e=f(Object.keys(c[0]));O(c[0][e])}else 0!==r.length&&O(c[0][t])}()}),[t,r,a,i]),Object(n.useEffect)((function(){!function(){for(var e=[],t=C.a.cloneDeep(j),a=function(a){var n=f(t);e.push(n),s&&(t=t.filter((function(e){return e!==n})))},n=0;n<i;n++)a();d(e)}()}),[j,s]),Object(n.useEffect)((function(){var e=u.includes(null)||u.includes(void 0);l(e)}),[u,i]),null}y.propTypes={theme:v.a.string,omitChars:v.a.array,tagData:v.a.array,charData:v.a.array,unique:v.a.bool,numPlayers:v.a.number,chosenChars:v.a.array,setError:v.a.func};var S=y;a(40);var N=function(e){var t=e.setError,a=e.screenSize;return Object(l.jsx)("div",{id:"error",className:"mobile"===a?"Error-Message bordered drop-shadow center":"Error-Message parallelogram bordered drop-shadow center",children:Object(l.jsxs)("div",{className:"Error-Contents",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("i",{children:"Not enough characters enabled"})}),Object(l.jsx)("p",{children:"Please enable more characters to choose from before continuing."}),Object(l.jsx)(b,{className:"uppercase extrabold italic",color:"golden",onClick:function(){return t(!1)},style:{top:"3em"},children:"OK"})]})})};var P=function(e){var t=e.theme,a=e.numPlayers,r=e.unique,s=e.onSelectionScreen,i=e.setOnSelectionScreen,u=e.setNumPlayers,h=e.setTheme,f=e.setUnique,p=e.charData,v=e.tagData,x=e.omitChars,C=e.setOmitChars,y=e.chosenChars,P=e.setChosenChars,D=e.screenSize,E=Object(n.useState)(null),w=Object(o.a)(E,2),k=w[0],A=w[1],T=Object(n.useState)(["Random Theme","All Characters"]),R=Object(o.a)(T,2),_=R[0],I=R[1],L=Object(n.useState)(0!==p.length),U=Object(o.a)(L,2),z=U[0],q=U[1],F=Object(n.useState)(!1),M=Object(o.a)(F,2),V=M[0],B=M[1];return Object(n.useEffect)((function(){if(0!==v.length){var e=Object.keys(v[0]).concat(_),t=Object(d.a)(new Set(e));I(t)}}),[v]),Object(l.jsxs)("div",{style:{display:s?"block":"none"},children:[!z&&Object(l.jsx)(g,{}),z&&V&&Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)("div",{id:"background-blur"}),Object(l.jsx)(N,{screenSize:D,setError:B})]}),Object(l.jsx)("div",{id:"selection-panel",className:"mobile"===D?"container bordered drop-shadow":"parallelogram bordered drop-shadow center",style:{display:z?"block":"none"},children:Object(l.jsxs)("div",{className:"panel-contents",children:[Object(l.jsxs)("div",{id:"button-bar",children:[Object(l.jsx)(j,{name:"playersDropdown",activeDropdown:"playersDropdown"===k,setActiveDropdown:A,options:["1 Player","2 Players","3 Players","4 Players","5 Players","6 Players","7 Players","8 Players"],onChange:function(e){var t=parseInt(e.split(" ")[0]);u(t),A(null)},children:"".concat(a," ").concat(a>1?"Players":"Player")}),Object(l.jsx)(j,{name:"themeDropdown",activeDropdown:"themeDropdown"===k,setActiveDropdown:A,options:_,onChange:function(e){h(e),A(null)},children:t}),Object(l.jsx)(m,{curVal:r,toggleVal:function(){return f(!r)},children:r?"Unique":"Not Unique"})]}),Object(l.jsx)(O,{theme:t,tagData:v,charData:p,setLoaded:q,omitChars:x,setOmitChars:C}),z&&Object(l.jsx)(S,{chosenChars:y,setChosenChars:P,theme:t,omitChars:x,tagData:v,charData:p,unique:r,numPlayers:a,setError:B}),Object(l.jsx)(b,{className:"uppercase extrabold italic",color:"golden",onClick:function(){y.includes(null)||y.includes(void 0)?B(!0):i(!1)},style:{top:"2em"},children:"Generate"})]})})]})},D=a(11),E=a.n(D),w=a(17),k={1:"red",2:"blue",3:"yellow",4:"green",5:"orange",6:"cyan",7:"pink",8:"purple"};var A=function(e){var t=e.characterName,a=e.onImgLoad,n=e.characterImgUrl,c=e.playerNum,r=e.screenSize;return Object(l.jsx)(l.Fragment,{children:"mobile"===r?Object(l.jsxs)("div",{className:"Selected-Char",children:[Object(l.jsxs)("h2",{className:"Player-Num",children:["P",c]}),Object(l.jsx)("div",{className:"parallelogram drop-shadow",children:Object(l.jsx)("div",{className:"selected-character-box selection",style:{backgroundColor:"var(--"+k[c]+")"},children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{src:n,onLoad:a}),Object(l.jsx)("div",{className:"name-box mobile-slant"}),Object(l.jsx)("div",{className:"name-box ",children:Object(l.jsx)("h1",{className:"Selected-Char-Name",children:t})})]})})})]}):Object(l.jsxs)("div",{className:"selected-character-box selection",style:{backgroundColor:"var(--"+k[c]+")"},children:[Object(l.jsxs)("h2",{className:"Player-Num",children:["P",c]}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{src:n,onLoad:a}),Object(l.jsx)("div",{className:"char-name-border"}),Object(l.jsx)("div",{className:"name-box desktop-slant",children:Object(l.jsx)("h1",{className:"Selected-Char-Name",children:t})})]})]})})};a(42);var T=function(e){var t=e.numPlayers,a=e.theme,c=e.chosenChars,r=e.setChosenChars,s=e.omitChars,i=e.tagData,u=e.unique,d=e.charData,h=e.onSelectionScreen,j=e.setOnSelectionScreen,m=e.screenSize,O=Object(n.useState)(!1),g=Object(o.a)(O,2),p=g[0],v=g[1],x=Object(n.useState)(c.length-1),C=Object(o.a)(x,2),y=C[0],N=C[1];Object(n.useEffect)((function(){N(c.length-1)}),[c]);var P=function(e){return new Promise((function(t){return setTimeout(t,e)}))},D=function(){var e=Object(w.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,P(100);case 3:v(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){N((function(e){return e-1}))};return h?Object(l.jsx)("span",{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"results-screen",className:"mobile"===m?"container":"Results-Screen",children:[y>0&&"mobile"!==m&&Object(l.jsx)("img",{src:f,className:"loading-logo",alt:"logo",style:{position:"absolute"}}),Object(l.jsx)("div",{style:{opacity:y<=0?1:0},className:"mobile"===m?"results-container drop-shadow":"parallelogram results-container res",children:c.includes(null)||c.includes(void 0)||0===d[0].length?null:c.map((function(e,t){return void 0!==e&&void 0!==d[0][e]&&Object(l.jsx)(A,{onImgLoad:k,characterName:d[0][e].Name,characterImgUrl:d[0][e].Img,playerNum:t+1,screenSize:m},e)}))}),Object(l.jsxs)("div",{className:"Result-Buttons-Container",children:[Object(l.jsx)(b,{onClick:function(){return j(!0)},className:"uppercase extrabold",children:Object(l.jsx)("span",{children:"Back"})}),Object(l.jsx)(b,{onClick:D,className:"uppercase extrabold",color:"golden",children:"Shuffle"})]})]}),p&&Object(l.jsx)(S,{chosenChars:c,setChosenChars:r,theme:a,omitChars:s,tagData:i,charData:d,unique:u,numPlayers:t,setError:function(){return null}})]})},R=a(29),_=a(19);a(43).config();var I=function(e){var t=e.setTagData,a=e.setCharData,c={apiKey:"AIzaSyDUVO2icMOw3Z9-wPZQl9zU6-0gk7Xieew",authDomain:"smash-89ac9.firebaseapp.com",databaseURL:"https://smash-89ac9-default-rtdb.firebaseio.com",projectId:"smash-89ac9",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APIKEY:"AIzaSyDUVO2icMOw3Z9-wPZQl9zU6-0gk7Xieew",REACT_APP_DOMAIN:"smash-89ac9.firebaseapp.com",REACT_APP_DATABASE:"https://smash-89ac9-default-rtdb.firebaseio.com",REACT_APP_PROJECTID:"smash-89ac9",REACT_APP_STORAGEBUCKET:"smash-89ac9.appspot.com",REACT_APP_SENDERID:"235176020211",REACT_APP_APPID:"1:235176020211:web:860a5a85928da8edcc8f86",REACT_APP_MEASUREMENTID:"G-H9RJLC8VPD"}).REACT_APP_STORAGE,messagingSenderId:"235176020211",appId:"1:235176020211:web:860a5a85928da8edcc8f86",measurementId:"G-H9RJLC8VPD"};Object(R.a)(c);var r=Object(_.a)();return!0,Object(n.useEffect)((function(){!function(){var e=Object(_.c)(r,"chars");Object(_.b)(e,(function(e){a([e.val()])}))}(),function(){var e=Object(_.c)(r,"tags");Object(_.b)(e,(function(e){t([e.val()])}))}()}),[true]),null};a(47),a(48);var L=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(4),s=Object(o.a)(r,2),i=s[0],d=s[1],h=Object(n.useState)("All Characters"),b=Object(o.a)(h,2),j=b[0],m=b[1],O=Object(n.useState)([]),f=Object(o.a)(O,2),g=f[0],p=f[1],v=Object(n.useState)([]),x=Object(o.a)(v,2),C=x[0],y=x[1],S=Object(n.useState)([]),N=Object(o.a)(S,2),D=N[0],E=N[1],w=Object(n.useState)([]),k=Object(o.a)(w,2),A=k[0],R=k[1],_=Object(n.useState)(!0),L=Object(o.a)(_,2),U=L[0],z=L[1],q=function(){var e=window.innerWidth,t=window.innerHeight;return e<768||t<450?"mobile":e<1367?"tablet":"desktop"},F=Object(n.useState)(q),M=Object(o.a)(F,2),V=M[0],B=M[1];return window.addEventListener("resize",(function(){B(q)}),!0),Object(n.useEffect)((function(){if("Random Theme"===j)z(!1);else{var e=function(){var e=A.length;if(1===C.length){var t="Random Theme"===j||"All Characters"===j?Object.keys(g[0]).length:C[0][j].length;return 0!==e&&e<=t}}();z(void 0===e||e)}}),[j]),Object(l.jsxs)(u,{children:[Object(l.jsx)(I,{setCharData:function(e){p(e)},setTagData:function(e){y(e)}}),Object(l.jsx)(P,{numPlayers:i,theme:j,unique:U,onSelectionScreen:a,setOnSelectionScreen:c,setNumPlayers:d,setTheme:m,setUnique:z,charData:g,tagData:C,omitChars:D,setOmitChars:function(e){E(e)},chosenChars:A,setChosenChars:R,screenSize:V}),Object(l.jsx)(T,{numPlayers:i,theme:j,chosenChars:A,setChosenChars:R,omitChars:D,tagData:C,unique:U,charData:g,onSelectionScreen:a,setOnSelectionScreen:c,screenSize:V})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsxs)(c.a.StrictMode,{children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{className:"outline",children:"Smash Picker"})}),Object(l.jsx)(L,{})]}),document.getElementById("root")),U()}},[[49,1,2]]]);
//# sourceMappingURL=main.31737eb5.chunk.js.map