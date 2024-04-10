/*! For license information please see main.323e8043.js.LICENSE.txt */
(()=>{"use strict";var e={605:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(43),o=r(579);function a(e,t){e.setHeaderType(t),console.log(e.headerType)}const i=function(e){let t=null;return t="Home"===e.headerType?(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"hello-text",children:"Hello"}),", ",(0,o.jsx)("span",{className:"name-text",children:"I am Ari."})]}):(0,o.jsx)("p",{children:e.headerType}),(0,o.jsxs)("div",{className:"header",children:[t,(0,o.jsxs)("div",{className:"button-container",children:[(0,o.jsx)("button",{"aria-label":"home",onClick:()=>a(e,"Home"),children:"Home Page"}),(0,o.jsx)("button",{"aria-label":"exp",onClick:()=>a(e,"Experience"),children:"Experience"}),(0,o.jsx)("button",{"aria-label":"proj",onClick:()=>a(e,"Projects"),children:"Projects"})]})]})},s=()=>(0,o.jsxs)("div",{className:"tabs",children:[(0,o.jsx)("img",{className:"dataServer",src:"https://i.postimg.cc/sXT535tk/dataserver.png",alt:"data server explanation (see github readme)"}),(0,o.jsx)("img",{className:"ghiblify",src:"https://i.postimg.cc/RZPRS5Ks/ghiblify.png",alt:"data server explanation (see github readme)"}),(0,o.jsx)("img",{className:"shell",src:"https://i.postimg.cc/SQWfXzcz/shell.png",alt:"shell explanation (see github readme)"}),(0,o.jsx)("img",{className:"malloc",src:"https://i.postimg.cc/mkRM3871/malloc.png",alt:"malloc explanation (see github readme)"}),(0,o.jsx)("img",{className:"decisionTree",src:"https://i.postimg.cc/jqgd4M6V/decision-Tree.png",alt:"decision tree explanation (see github readme)"}),(0,o.jsx)("img",{className:"search",src:"https://i.postimg.cc/HkQgRzMk/search.png",alt:"searchexplanation (see github readme)"}),(0,o.jsx)("img",{className:"website",src:"https://i.postimg.cc/LsQ23Xft/website.png",alt:"this website!"})]}),c=()=>(0,o.jsx)("div",{className:"photos",children:(0,o.jsx)("img",{className:"brown",src:"https://i.postimg.cc/dVJWgV81/Screenshot-2024-04-02-at-10-11-36-AM.png",alt:"expierence learning @ brown + working there"})}),l=()=>(0,o.jsxs)("div",{className:"whole",children:[(0,o.jsxs)("div",{className:"me",children:[(0,o.jsx)("img",{src:"https://i.postimg.cc/vBNSdZY0/trial4.png",className:"myImage",alt:"an image of me from my linkedin"}),(0,o.jsx)("a",{href:"https://github.com/acodjoe25",className:"git",children:"GitHub"}),(0,o.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/ariana-codjoe-771603230/",children:"Linkedin"})]}),(0,o.jsx)("div",{className:"bioText",children:(0,o.jsx)("p",{children:"As a junior at Brown University majoring in Computer Science and Applied Mathematics, I'm deeply intrigued by the analytical nature of mathematics and the creative expression found in theater. I see parallels between structured problem-solving in mathematics and individual interpretation in theater, which led me to pursue computer science. I'm fascinated by the blend of structure and creativity in software engineering, likening it to crafting characters in a play. Moreover, I'm drawn to exploring storytelling through computer science, particularly in mediums like virtual reality. I'm also passionate about the ethical considerations in computer science and actively involved in diversity-related efforts within the field. I relish the collaborative aspect of software engineering, particularly in daily standup sessions where teamwork and knowledge sharing thrive. Witnessing my contributions seamlessly integrate into larger projects is deeply fulfilling, reminiscent of my experiences in high school crew. Overall, I find software engineering's dynamic nature, collective accomplishments, and opportunities for personal growth and creativity a perfect fit for my diverse interests and strengths. Embracing this vibrant journey, I eagerly anticipate the boundless possibilities ahead."})})]});const u=function(){const[e,t]=(0,n.useState)("Home");let r=null;return r="Home"===e?l:"Experience"===e?c:"Projects"===e?s:l,(0,o.jsxs)("div",{className:"overarching component",children:[(0,o.jsx)("div",{className:"header",children:(0,o.jsx)(i,{headerType:e,setHeaderType:e=>{t(e)}})}),(0,o.jsxs)("div",{className:"temp",children:[r&&(0,o.jsx)(r,{})," "]})]})}},534:(e,t,r)=>{var n=r(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:s.current}}t.jsx=l,t.jsxs=l},202:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var _=g.prototype=new b;_.constructor=g,h(_,v.prototype),_.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,o)&&!k.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:w.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function N(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===a?"."+N(c,0):a,x(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),R(i,t,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",x(e))for(var l=0;l<e.length;l++){var u=a+N(s=e[l],l);c+=R(s,t,o,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=R(s=s.value,t,o,u=a+N(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},$={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},43:(e,t,r)=>{e.exports=r(202)},579:(e,t,r)=>{e.exports=r(534)},555:()=>{},663:e=>{e.exports=import("https://cdn.skypack.dev/react")},222:e=>{e.exports=import("https://cdn.skypack.dev/react-dom")},153:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(555);var n=r(605),o=r(114),a=r(663),i=r(222),s=r(579),c=e([a,i]);[a,i]=c.then?(await c)():c;i.default.createRoot(document.getElementById("root")).render((0,s.jsx)(a.default.StrictMode,{children:(0,s.jsx)(n.A,{})})),(0,o.A)(),t()}catch(l){t(l)}}))},114:(e,t,r)=>{r.d(t,{A:()=>n});const n=e=>{e&&e instanceof Function&&r.e(453).then(r.bind(r,453)).then((t=>{let{getCLS:r,getFID:n,getFCP:o,getLCP:a,getTTFB:i}=t;r(e),n(e),o(e),a(e),i(e)}))}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))};r.a=(r,a,i)=>{var s;i&&((s=[]).d=-1);var c,l,u,f=new Set,p=r.exports,d=new Promise(((e,t)=>{u=t,l=e}));d[t]=p,d[e]=e=>(s&&e(s),f.forEach(e),d.catch((e=>{}))),r.exports=d,a((r=>{var a;c=(r=>r.map((r=>{if(null!==r&&"object"===typeof r){if(r[e])return r;if(r.then){var a=[];a.d=0,r.then((e=>{i[t]=e,o(a)}),(e=>{i[n]=e,o(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=r,s})))(r);var i=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),l=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==s&&!f.has(e)&&(f.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](r)))}));return a.r?l:i()}),(e=>(e?u(d[n]=e):l(p),o(s)))),s&&s.d<0&&(s.d=0)}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+".a6a97343.chunk.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="app:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+a){s=f;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={792:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error;r.l(i,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,a,i=n[0],s=n[1],c=n[2],l=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();r(153)})();
//# sourceMappingURL=main.323e8043.js.map