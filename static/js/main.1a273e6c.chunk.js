(this["webpackJsonptweet-annotator"]=this["webpackJsonptweet-annotator"]||[]).push([[0],{100:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),r=n(17),s=n.n(r),o=(n(100),n(19)),l=n(85),d=n.n(l),j=(n(101),n(32)),b=n(237),u={apiKey:"AIzaSyAoAangmjRhPmpGj9TZ9EpAZJYqxpTCVH4",authDomain:"tweet-annotator-7b789.firebaseapp.com",databaseURL:"https://tweet-annotator-7b789.firebaseio.com",projectId:"tweet-annotator-7b789",storageBucket:"tweet-annotator-7b789.appspot.com",messagingSenderId:"1057840760122",appId:"1:1057840760122:web:c036eba1a841db18e7bc03"},p="annotatedTweets",h="skippedTweets",g=n(16),m=n(10),O=n(229),f=n(231),x=n(232),v=n(233),w=n(90),y=n(228),k=n(207),I=n(230);function C(){return Object(a.jsxs)(k.a,{variant:"body2",color:"textSecondary",align:"center",children:["Built with React and Material UI for ",Object(a.jsx)(y.a,{color:"inherit",href:"https://pwr.edu.pl/en/",children:Object(a.jsx)("b",{children:"WUST"})})," ",".",Object(a.jsx)("br",{}),Object(a.jsxs)("span",{style:{fontSize:10},children:["Icons made by ",Object(a.jsx)(y.a,{href:"https://www.flaticon.com/authors/freepik",color:"inherit",title:"Freepik",children:"Freepik"})," from ",Object(a.jsx)(y.a,{href:"https://www.flaticon.com/",color:"inherit",title:"Flaticon",children:"www.flaticon.com"})]})]})}var F=Object(O.a)((function(e){return{appBar:{position:"relative"},layout:Object(m.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:1e3,marginLeft:"auto",marginRight:"auto"}),paper:Object(m.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)})}}));function S(e){var t=e.children,n=F(),c=Object(I.a)([p]),r=Object(g.a)(c,1)[0][p]||[];return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(f.a,{}),Object(a.jsx)(x.a,{position:"absolute",color:"default",className:n.appBar,children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(k.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Tweet annotator v1.0"}),Object(a.jsx)("span",{style:{flex:1}}),Object(a.jsxs)(k.a,{variant:"h6",color:"inherit",noWrap:!0,children:["You've annotated: ",Object(a.jsxs)("b",{style:{color:"blue"},children:[r.length," tweets"]})]})]})}),Object(a.jsxs)("main",{className:n.layout,children:[Object(a.jsx)(w.a,{className:n.paper,children:Object(a.jsx)(i.a.Fragment,{children:t})}),Object(a.jsx)(C,{})]})]})}var B=n(60),T=n.n(B),N=n(87),A=n(12),L=n(234),R=n(238),M=n(88),J=n(235),z=n(236),D=Object(O.a)((function(e){return{card:{backgroundColor:"rgba(29, 161, 242, 0.1)"}}}));function E(e){var t=e.tweetContent,n=void 0===t?"":t,c=D();return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(L.a,{item:!0,xs:12,children:Object(a.jsx)(J.a,{className:c.card,children:Object(a.jsx)(z.a,{children:Object(a.jsx)(k.a,{children:n})})})})})}var P=n.p+"static/media/anger.8528d165.svg",U=n.p+"static/media/disgusted.0f4f8fc2.svg",W=n.p+"static/media/fear.2470cbbc.svg",G=n.p+"static/media/guilt.90a5c032.svg",K=n.p+"static/media/happiness.4e02f678.svg",Y=n.p+"static/media/sad.2f887896.svg",Z=n.p+"static/media/shame.12d88091.svg",q=[{id:"joy",label:"Joy",icon:K},{id:"fear",label:"Fear",icon:W},{id:"anger",label:"Anger",icon:P},{id:"neutral",label:"Neutral",icon:n.p+"static/media/neutral.5623396f.svg"},{id:"sadness",label:"Sadness",icon:Y},{id:"disgust",label:"Disgust",icon:U},{id:"shame",label:"Shame",icon:Z},{id:"guilt",label:"Guilt",icon:G}],H=Object(O.a)((function(e){return{buttons:{display:"flex",justifyContent:"flex-end"},buttonContainer:{margin:"auto"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1),fontSize:"1rem"},labelIcon:{height:e.spacing(6),marginRight:e.spacing(2)}}})),V="tweets/",Q=31536e3,X="userId";function $(){var e=H(),t=Object(c.useState)(null),n=Object(g.a)(t,2),r=n[0],s=n[1],l=Object(I.a)([p,X,h]),d=Object(g.a)(l,2),b=d[0],u=d[1],m=b[p]||[],O=b[h]||[];null==b.userId&&u(X,Object(M.a)(),{maxAge:Q}),Object(c.useEffect)((function(){null!=r&&(u(h,[].concat(Object(A.a)(O),[r]),{maxAge:Q}),s(null))}),[r]);return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(L.a,{container:!0,spacing:3,children:null==r&&Object(a.jsx)(j.b,{path:V,orderByKey:!0,annotations:!0,skipped:!0,children:function(t){if(!t.value)return null;var n=t.value.filter((function(e){return!m.includes(e.id)&&!O.includes(e.id)})),c=n[Math.floor(Math.random()*n.length)].id,r=t.value.findIndex((function(e){return e.id===c}));return b.userId&&null!=t.value&&[t.value[r]].map((function(t){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(L.a,{item:!0,xs:12,children:Object(a.jsx)(E,{tweetContent:t.tweet})}),t&&Object(a.jsx)(j.a,{type:"update",path:V+"".concat(r,"/"),children:function(n){var c=n.runMutation;return Object(a.jsx)(L.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center",className:e.buttonContainer,children:q.map((function(n){return Object(a.jsxs)(R.a,{variant:"outlined",color:"secondary",className:e.button,onClick:Object(N.a)(T.a.mark((function e(){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(p,[].concat(Object(A.a)(m),[t.id]),{maxAge:Q}),e.next=3,c(Object(o.a)(Object(o.a)({},t),{},{annotations:[].concat(Object(A.a)(t&&t.annotations||[]),[n.id]),annotatedBy:[].concat(Object(A.a)(t&&t.annotatedBy||[]),[b.userId])}));case 3:a=e.sent,a.key;case 5:case"end":return e.stop()}}),e)}))),children:[Object(a.jsx)("img",{className:e.labelIcon,src:n.icon}),n.label]},n.id)}))})}}),Object(a.jsx)("div",{className:e.buttons,children:Object(a.jsx)(R.a,{variant:"contained",color:"secondary",onClick:function(){return function(e){s(e.id)}(t)},className:e.button,children:"Skip :("})})]},t.id)}))}})})})}var _=function(){return Object(a.jsx)(j.c,Object(o.a)(Object(o.a)({firebase:d.a},u),{},{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(S,{children:Object(a.jsx)($,{})})})}))},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,240)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),ee()}},[[206,1,2]]]);
//# sourceMappingURL=main.1a273e6c.chunk.js.map