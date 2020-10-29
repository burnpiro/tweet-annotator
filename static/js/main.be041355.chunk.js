(this["webpackJsonptweet-annotator"] = this["webpackJsonptweet-annotator"] || []).push([[0],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(24);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.cjs.js
var index_cjs = __webpack_require__(90);
var index_cjs_default = /*#__PURE__*/__webpack_require__.n(index_cjs);

// EXTERNAL MODULE: ./node_modules/firebase/database/dist/index.esm.js
var index_esm = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/@react-firebase/database/dist/index.esm.js + 1 modules
var dist_index_esm = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/react-cookie/es6/CookiesProvider.js
var CookiesProvider = __webpack_require__(249);

// CONCATENATED MODULE: ./src/config.js
// Firebase Config
var config={apiKey:"AIzaSyAoAangmjRhPmpGj9TZ9EpAZJYqxpTCVH4",authDomain:"tweet-annotator-7b789.firebaseapp.com",databaseURL:"https://tweet-annotator-7b789.firebaseio.com",projectId:"tweet-annotator-7b789",storageBucket:"tweet-annotator-7b789.appspot.com",messagingSenderId:"1057840760122",appId:"1:1057840760122:web:c036eba1a841db18e7bc03"};var cookieKey="annotatedTweets";var skippedKey="skippedTweets";
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/react-cookie/es6/useCookies.js
var useCookies = __webpack_require__(239);

// CONCATENATED MODULE: ./src/components/Layout/Layout.js
function Copyright(){return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Typography["a" /* default */],{variant:"body2",color:"textSecondary",align:"center",children:["Built with React and Material UI for ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Link["a" /* default */],{color:"inherit",href:"https://pwr.edu.pl/en/",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"WUST"})})," ",".",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:{fontSize:10},children:["Icons made by ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Link["a" /* default */],{href:"https://www.flaticon.com/authors/freepik",color:"inherit",title:"Freepik",children:"Freepik"})," from ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Link["a" /* default */],{href:"https://www.flaticon.com/",color:"inherit",title:"Flaticon",children:"www.flaticon.com"})]})]});}var useStyles=Object(makeStyles["a" /* default */])(function(theme){return{appBar:{position:"relative"},layout:Object(defineProperty["a" /* default */])({width:"auto",marginLeft:theme.spacing(2),marginRight:theme.spacing(2)},theme.breakpoints.up(600+theme.spacing(2)*2),{width:1000,marginLeft:"auto",marginRight:"auto"}),paper:Object(defineProperty["a" /* default */])({marginTop:theme.spacing(3),marginBottom:theme.spacing(3),padding:theme.spacing(2)},theme.breakpoints.up(600+theme.spacing(3)*2),{marginTop:theme.spacing(6),marginBottom:theme.spacing(6),padding:theme.spacing(3)})};});function Layout(_ref){var children=_ref.children;var classes=useStyles();var _useCookies=Object(useCookies["a" /* default */])([cookieKey]),_useCookies2=Object(slicedToArray["a" /* default */])(_useCookies,1),cookies=_useCookies2[0];var annotations=cookies[cookieKey]||[];return/*#__PURE__*/Object(jsx_runtime["jsxs"])(react_default.a.Fragment,{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(CssBaseline["a" /* default */],{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(AppBar["a" /* default */],{position:"absolute",color:"default",className:classes.appBar,children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Toolbar["a" /* default */],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */],{variant:"h6",color:"inherit",noWrap:true,children:"Tweet annotator v1.0"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{'flex':1}}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(Typography["a" /* default */],{variant:"h6",color:"inherit",noWrap:true,children:["You've annotated: ",/*#__PURE__*/Object(jsx_runtime["jsxs"])("b",{style:{color:'blue'},children:[annotations.length," tweets"]})]})]})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("main",{className:classes.layout,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Paper["a" /* default */],{className:classes.paper,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.Fragment,{children:children})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Copyright,{})]})]});}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(65);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js + 7 modules
var Button = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/nanoid/index.browser.js + 1 modules
var index_browser = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(247);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js
var SnackbarContent = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Icon/Icon.js
var Icon = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/react-twitter-embed/dist/index.es.js + 5 modules
var index_es = __webpack_require__(93);

// EXTERNAL MODULE: ./src/components/Tweet/Tweet.css
var Tweet = __webpack_require__(211);

// CONCATENATED MODULE: ./src/components/Tweet/Tweet.js
var Tweet_useStyles=Object(makeStyles["a" /* default */])(function(theme){return{card:{backgroundColor:"rgba(29, 161, 242, 0.1)"},tweet:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},error:{backgroundColor:"#f44336",color:"#fff",fontWeight:500},errorMessage:{textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},info:{backgroundColor:'#2196f336',color:"#000",fontWeight:500}};});function Tweet_Tweet(_ref){var _ref$tweetContent=_ref.tweetContent,tweetContent=_ref$tweetContent===void 0?"":_ref$tweetContent,tweetId=_ref.tweetId;var classes=Tweet_useStyles();var _useState=Object(react["useState"])(true),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),loading=_useState2[0],setLoading=_useState2[1];var _useState3=Object(react["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),error=_useState4[0],setError=_useState4[1];var onLoad=function onLoad(){setLoading(false);};var onFail=function onFail(){setLoading(false);setError(true);};if(error===true){return/*#__PURE__*/Object(jsx_runtime["jsx"])(SnackbarContent["a" /* default */],{className:classes.error,message:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.Fragment,{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:classes.errorMessage,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Icon["a" /* default */],{style:{marginRight:"10px"},children:"error_outline"}),"Ups... There is a problem with this tweet. Please check if you have Adblock Disabled and if you have then just skip this tweet."]})})});}return tweetId&&/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.Fragment,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{item:true,xs:12,children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Card["a" /* default */],{className:classes.card,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(SnackbarContent["a" /* default */],{className:classes.info,message:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.Fragment,{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:classes.errorMessage,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Icon["a" /* default */],{style:{marginRight:"10px"},children:"help_outlined_outlined"}),"If there is a problem loading a tweet, please disable Adblock."]})})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(CardContent["a" /* default */],{className:"tweet-content",children:[loading&&/*#__PURE__*/Object(jsx_runtime["jsx"])(CircularProgress["a" /* default */],{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(index_es["a" /* TwitterTweetEmbed */],{onLoad:onLoad,tweetId:tweetId,options:{maxWidth:800}})]})]})})});}
// CONCATENATED MODULE: ./src/components/Form/anger.svg
/* harmony default export */ var anger = (__webpack_require__.p + "static/media/anger.8528d165.svg");
// CONCATENATED MODULE: ./src/components/Form/disgusted.svg
/* harmony default export */ var disgusted = (__webpack_require__.p + "static/media/disgusted.0f4f8fc2.svg");
// CONCATENATED MODULE: ./src/components/Form/fear.svg
/* harmony default export */ var fear = (__webpack_require__.p + "static/media/fear.2470cbbc.svg");
// CONCATENATED MODULE: ./src/components/Form/guilt.svg
/* harmony default export */ var guilt = (__webpack_require__.p + "static/media/guilt.90a5c032.svg");
// CONCATENATED MODULE: ./src/components/Form/happiness.svg
/* harmony default export */ var happiness = (__webpack_require__.p + "static/media/happiness.4e02f678.svg");
// CONCATENATED MODULE: ./src/components/Form/sad.svg
/* harmony default export */ var sad = (__webpack_require__.p + "static/media/sad.2f887896.svg");
// CONCATENATED MODULE: ./src/components/Form/shame.svg
/* harmony default export */ var shame = (__webpack_require__.p + "static/media/shame.12d88091.svg");
// CONCATENATED MODULE: ./src/components/Form/neutral.svg
/* harmony default export */ var neutral = (__webpack_require__.p + "static/media/neutral.5623396f.svg");
// CONCATENATED MODULE: ./src/components/Form/Form.js
var labels=[{id:"joy",label:"Joy",icon:happiness},{id:"fear",label:"Fear",icon:fear},{id:"anger",label:"Anger",icon:anger},{id:"neutral",label:"Neutral",icon:neutral},{id:"sadness",label:"Sadness",icon:sad},{id:"disgust",label:"Disgust",icon:disgusted},{id:"shame",label:"Shame",icon:shame},{id:"guilt",label:"Guilt",icon:guilt}];var Form_useStyles=Object(makeStyles["a" /* default */])(function(theme){return{buttons:{display:"flex",justifyContent:"flex-end"},buttonContainer:{margin:"auto"},button:{marginTop:theme.spacing(3),marginLeft:theme.spacing(1),fontSize:"1rem"},labelIcon:{height:theme.spacing(6),marginRight:theme.spacing(2)}};});var path="tweets/";var cookieAge=60*60*24*365;//year
var idKey="userId";function Form(){var classes=Form_useStyles();var _useState=Object(react["useState"])(null),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),settingSkip=_useState2[0],setSettingSkip=_useState2[1];var _useState3=Object(react["useState"])(null),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),selectedTweet=_useState4[0],setSelectedTweet=_useState4[1];var _useCookies=Object(useCookies["a" /* default */])([cookieKey,idKey,skippedKey]),_useCookies2=Object(slicedToArray["a" /* default */])(_useCookies,2),cookies=_useCookies2[0],setCookies=_useCookies2[1];var annotations=cookies[cookieKey]||[];var skipped=cookies[skippedKey]||[];if(cookies[idKey]==null){setCookies(idKey,Object(index_browser["a" /* nanoid */])(),{maxAge:cookieAge});}Object(react["useEffect"])(function(){if(settingSkip!=null){setCookies(skippedKey,[].concat(Object(toConsumableArray["a" /* default */])(skipped),[settingSkip]),{maxAge:cookieAge});setSettingSkip(null);setSelectedTweet(null);}},[settingSkip]);var handleSkip=function handleSkip(tweet){setSettingSkip(tweet.id);};return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.Fragment,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{container:true,spacing:3,children:settingSkip==null&&/*#__PURE__*/Object(jsx_runtime["jsxs"])(react_default.a.Fragment,{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{item:true,xs:12,children:selectedTweet&&/*#__PURE__*/Object(jsx_runtime["jsx"])(Tweet_Tweet,{tweetContent:selectedTweet.tweet,tweetId:""+selectedTweet.id+""})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(react_default.a.Fragment,{children:[selectedTweet&&/*#__PURE__*/Object(jsx_runtime["jsx"])(dist_index_esm["a" /* FirebaseDatabaseMutation */],{type:"update",path:path+"".concat(selectedTweet.pos,"/"),children:function children(_ref){var runMutation=_ref.runMutation;return/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{container:true,alignContent:"center",justify:"center",alignItems:"center",className:classes.buttonContainer,children:labels.map(function(label){return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Button["a" /* default */],{// variant="contained"
variant:"outlined",color:"secondary",className:classes.button,onClick:/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var copy,_yield$runMutation,key;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setCookies(cookieKey,[].concat(Object(toConsumableArray["a" /* default */])(annotations),[selectedTweet.id]),{maxAge:cookieAge});copy=Object(objectSpread2["a" /* default */])({},selectedTweet);setSelectedTweet(null);_context.next=5;return runMutation(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},copy),{},{annotations:[].concat(Object(toConsumableArray["a" /* default */])(copy?copy.annotations||[]:[]),[label.id]),annotatedBy:[].concat(Object(toConsumableArray["a" /* default */])(copy?copy.annotatedBy||[]:[]),[cookies[idKey]])}));case 5:_yield$runMutation=_context.sent;key=_yield$runMutation.key;case 7:case"end":return _context.stop();}}},_callee);})),children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{className:classes.labelIcon,src:label.icon}),label.label]},label.id);})});}}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classes.buttons,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{variant:"contained",color:"secondary",onClick:function onClick(){return handleSkip(selectedTweet);},className:classes.button,children:"Skip :("})})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(dist_index_esm["b" /* FirebaseDatabaseNode */],{path:path,orderByKey:true,annotations:true,skipped:true,children:function children(d){if(!d.value){return null;}var selectedTweets=d.value.filter(function(tweet){return!annotations.includes(tweet.id)&&!skipped.includes(tweet.id);});selectedTweets=selectedTweets.filter(function(tweet){return tweet.annotations==null||tweet.annotations.length<3||tweet.id==='221320792345319788545';});var selectedTweetId=selectedTweets[Math.floor(Math.random()*selectedTweets.length)].id;var tweetIndex=d.value.findIndex(function(tweet){return tweet.id===selectedTweetId;});console.log(selectedTweetId,tweetIndex);if(cookies[idKey]&&d.value!=null&&selectedTweet==null){setSelectedTweet(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},d.value[tweetIndex]),{},{pos:tweetIndex}));}return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{});}})]})})});}
// CONCATENATED MODULE: ./src/components/App/App.js
function App(){return/*#__PURE__*/Object(jsx_runtime["jsx"])(dist_index_esm["c" /* FirebaseDatabaseProvider */],Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({firebase:index_cjs_default.a},config),{},{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(CookiesProvider["a" /* default */],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Layout,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Form,{})})})}));}/* harmony default export */ var App_App = (App);
// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals=function reportWebVitals(onPerfEntry){if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 252)).then(function(_ref){var getCLS=_ref.getCLS,getFID=_ref.getFID,getFCP=_ref.getFCP,getLCP=_ref.getLCP,getTTFB=_ref.getTTFB;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// CONCATENATED MODULE: ./src/index.js
react_dom_default.a.render(/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.StrictMode,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(App_App,{})}),document.getElementById('root'));// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
src_reportWebVitals();

/***/ })

},[[212,1,2]]]);
//# sourceMappingURL=main.be041355.chunk.js.map