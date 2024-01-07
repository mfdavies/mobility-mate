function A1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function R1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ZE={exports:{}},hh={},eI={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=Symbol.for("react.element"),P1=Symbol.for("react.portal"),C1=Symbol.for("react.fragment"),k1=Symbol.for("react.strict_mode"),x1=Symbol.for("react.profiler"),N1=Symbol.for("react.provider"),b1=Symbol.for("react.context"),D1=Symbol.for("react.forward_ref"),O1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),L1=Symbol.for("react.lazy"),Ay=Symbol.iterator;function M1(t){return t===null||typeof t!="object"?null:(t=Ay&&t[Ay]||t["@@iterator"],typeof t=="function"?t:null)}var tI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nI=Object.assign,rI={};function yo(t,e,n){this.props=t,this.context=e,this.refs=rI,this.updater=n||tI}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iI(){}iI.prototype=yo.prototype;function Pm(t,e,n){this.props=t,this.context=e,this.refs=rI,this.updater=n||tI}var Cm=Pm.prototype=new iI;Cm.constructor=Pm;nI(Cm,yo.prototype);Cm.isPureReactComponent=!0;var Ry=Array.isArray,sI=Object.prototype.hasOwnProperty,km={current:null},oI={key:!0,ref:!0,__self:!0,__source:!0};function aI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sI.call(e,r)&&!oI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:kl,type:t,key:s,ref:o,props:i,_owner:km.current}}function F1(t,e){return{$$typeof:kl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xm(t){return typeof t=="object"&&t!==null&&t.$$typeof===kl}function U1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Py=/\/+/g;function bd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U1(""+t.key):e.toString(36)}function Fu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case kl:case P1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bd(o,0):r,Ry(i)?(n="",t!=null&&(n=t.replace(Py,"$&/")+"/"),Fu(i,e,n,"",function(u){return u})):i!=null&&(xm(i)&&(i=F1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Py,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ry(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bd(s,a);o+=Fu(s,e,n,l,i)}else if(l=M1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bd(s,a++),o+=Fu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cu(t,e,n){if(t==null)return t;var r=[],i=0;return Fu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Uu={transition:null},B1={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Uu,ReactCurrentOwner:km};J.Children={map:cu,forEach:function(t,e,n){cu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cu(t,function(){e++}),e},toArray:function(t){return cu(t,function(e){return e})||[]},only:function(t){if(!xm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=yo;J.Fragment=C1;J.Profiler=x1;J.PureComponent=Pm;J.StrictMode=k1;J.Suspense=O1;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=km.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sI.call(e,l)&&!oI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:kl,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:b1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N1,_context:t},t.Consumer=t};J.createElement=aI;J.createFactory=function(t){var e=aI.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:D1,render:t}};J.isValidElement=xm;J.lazy=function(t){return{$$typeof:L1,_payload:{_status:-1,_result:t},_init:$1}};J.memo=function(t,e){return{$$typeof:V1,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Uu.transition;Uu.transition={};try{t()}finally{Uu.transition=e}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(t,e){return It.current.useCallback(t,e)};J.useContext=function(t){return It.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return It.current.useDeferredValue(t)};J.useEffect=function(t,e){return It.current.useEffect(t,e)};J.useId=function(){return It.current.useId()};J.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return It.current.useMemo(t,e)};J.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};J.useRef=function(t){return It.current.useRef(t)};J.useState=function(t){return It.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return It.current.useTransition()};J.version="18.2.0";eI.exports=J;var j=eI.exports;const lI=R1(j),j1=A1({__proto__:null,default:lI},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=j,q1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),G1=Object.prototype.hasOwnProperty,K1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H1={key:!0,ref:!0,__self:!0,__source:!0};function uI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)G1.call(e,r)&&!H1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:q1,type:t,key:s,ref:o,props:i,_owner:K1.current}}hh.Fragment=W1;hh.jsx=uI;hh.jsxs=uI;ZE.exports=hh;var I=ZE.exports,Df={},cI={exports:{}},zt={},hI={exports:{}},dI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,G){var H=M.length;M.push(G);e:for(;0<H;){var xe=H-1>>>1,Be=M[xe];if(0<i(Be,G))M[xe]=G,M[H]=Be,H=xe;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var G=M[0],H=M.pop();if(H!==G){M[0]=H;e:for(var xe=0,Be=M.length,lu=Be>>>1;xe<lu;){var ai=2*(xe+1)-1,Nd=M[ai],li=ai+1,uu=M[li];if(0>i(Nd,H))li<Be&&0>i(uu,Nd)?(M[xe]=uu,M[li]=H,xe=li):(M[xe]=Nd,M[ai]=H,xe=ai);else if(li<Be&&0>i(uu,H))M[xe]=uu,M[li]=H,xe=li;else break e}}return G}function i(M,G){var H=M.sortIndex-G.sortIndex;return H!==0?H:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,g=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(M){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=M)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function T(M){if(y=!1,_(M),!g)if(n(l)!==null)g=!0,kd(P);else{var G=n(u);G!==null&&xd(T,G.startTime-M)}}function P(M,G){g=!1,y&&(y=!1,m(F),F=-1),f=!0;var H=d;try{for(_(G),h=n(l);h!==null&&(!(h.expirationTime>G)||M&&!tn());){var xe=h.callback;if(typeof xe=="function"){h.callback=null,d=h.priorityLevel;var Be=xe(h.expirationTime<=G);G=t.unstable_now(),typeof Be=="function"?h.callback=Be:h===n(l)&&r(l),_(G)}else r(l);h=n(l)}if(h!==null)var lu=!0;else{var ai=n(u);ai!==null&&xd(T,ai.startTime-G),lu=!1}return lu}finally{h=null,d=H,f=!1}}var x=!1,b=null,F=-1,ae=5,K=-1;function tn(){return!(t.unstable_now()-K<ae)}function Mo(){if(b!==null){var M=t.unstable_now();K=M;var G=!0;try{G=b(!0,M)}finally{G?Fo():(x=!1,b=null)}}else x=!1}var Fo;if(typeof p=="function")Fo=function(){p(Mo)};else if(typeof MessageChannel<"u"){var Sy=new MessageChannel,S1=Sy.port2;Sy.port1.onmessage=Mo,Fo=function(){S1.postMessage(null)}}else Fo=function(){v(Mo,0)};function kd(M){b=M,x||(x=!0,Fo())}function xd(M,G){F=v(function(){M(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){g||f||(g=!0,kd(P))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var H=d;d=G;try{return M()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var H=d;d=M;try{return G()}finally{d=H}},t.unstable_scheduleCallback=function(M,G,H){var xe=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?xe+H:xe):H=xe,M){case 1:var Be=-1;break;case 2:Be=250;break;case 5:Be=1073741823;break;case 4:Be=1e4;break;default:Be=5e3}return Be=H+Be,M={id:c++,callback:G,priorityLevel:M,startTime:H,expirationTime:Be,sortIndex:-1},H>xe?(M.sortIndex=H,e(u,M),n(l)===null&&M===n(u)&&(y?(m(F),F=-1):y=!0,xd(T,H-xe))):(M.sortIndex=Be,e(l,M),g||f||(g=!0,kd(P))),M},t.unstable_shouldYield=tn,t.unstable_wrapCallback=function(M){var G=d;return function(){var H=d;d=G;try{return M.apply(this,arguments)}finally{d=H}}}})(dI);hI.exports=dI;var Q1=hI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fI=j,$t=Q1;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pI=new Set,Oa={};function Ji(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Oa[t]=e,t=0;t<e.length;t++)pI.add(e[t])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cy={},ky={};function J1(t){return Of.call(ky,t)?!0:Of.call(Cy,t)?!1:Y1.test(t)?ky[t]=!0:(Cy[t]=!0,!1)}function X1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Z1(t,e,n,r){if(e===null||typeof e>"u"||X1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nm=/[\-:]([a-z])/g;function bm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nm,bm);it[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nm,bm);it[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nm,bm);it[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dm(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Z1(e,n,i,r)&&(n=null),r||i===null?J1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=fI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hu=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Om=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),mI=Symbol.for("react.provider"),gI=Symbol.for("react.context"),Vm=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),_I=Symbol.for("react.offscreen"),xy=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=xy&&t[xy]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Dd;function ia(t){if(Dd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dd=e&&e[1]||""}return`
`+Dd+t}var Od=!1;function Vd(t,e){if(!t||Od)return"";Od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function eC(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Vd(t.type,!1),t;case 11:return t=Vd(t.type.render,!1),t;case 1:return t=Vd(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case ws:return"Portal";case Vf:return"Profiler";case Om:return"StrictMode";case Lf:return"Suspense";case Mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gI:return(t.displayName||"Context")+".Consumer";case mI:return(t._context.displayName||"Context")+".Provider";case Vm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lm:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function tC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===Om?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nC(t){var e=yI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function du(t){t._valueTracker||(t._valueTracker=nC(t))}function vI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uf(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ny(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wI(t,e){e=e.checked,e!=null&&Dm(t,"checked",e,!1)}function $f(t,e){wI(t,e);var n=Lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bf(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function by(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bf(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(sa(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function EI(t,e){var n=Lr(e.value),r=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Oy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function II(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?II(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fu,TI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fu=fu||document.createElement("div"),fu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rC=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){rC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function SI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function AI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=SI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iC=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(iC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gf=null;function Mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kf=null,Vs=null,Ls=null;function Vy(t){if(t=bl(t)){if(typeof Kf!="function")throw Error(C(280));var e=t.stateNode;e&&(e=gh(e),Kf(t.stateNode,t.type,e))}}function RI(t){Vs?Ls?Ls.push(t):Ls=[t]:Vs=t}function PI(){if(Vs){var t=Vs,e=Ls;if(Ls=Vs=null,Vy(t),e)for(t=0;t<e.length;t++)Vy(e[t])}}function CI(t,e){return t(e)}function kI(){}var Ld=!1;function xI(t,e,n){if(Ld)return t(e,n);Ld=!0;try{return CI(t,e,n)}finally{Ld=!1,(Vs!==null||Ls!==null)&&(kI(),PI())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var r=gh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Hf=!1;if(Yn)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Hf=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Hf=!1}function sC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ga=!1,dc=null,fc=!1,Qf=null,oC={onError:function(t){ga=!0,dc=t}};function aC(t,e,n,r,i,s,o,a,l){ga=!1,dc=null,sC.apply(oC,arguments)}function lC(t,e,n,r,i,s,o,a,l){if(aC.apply(this,arguments),ga){if(ga){var u=dc;ga=!1,dc=null}else throw Error(C(198));fc||(fc=!0,Qf=u)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function NI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ly(t){if(Xi(t)!==t)throw Error(C(188))}function uC(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ly(i),t;if(s===r)return Ly(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function bI(t){return t=uC(t),t!==null?DI(t):null}function DI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=DI(t);if(e!==null)return e;t=t.sibling}return null}var OI=$t.unstable_scheduleCallback,My=$t.unstable_cancelCallback,cC=$t.unstable_shouldYield,hC=$t.unstable_requestPaint,Ne=$t.unstable_now,dC=$t.unstable_getCurrentPriorityLevel,Fm=$t.unstable_ImmediatePriority,VI=$t.unstable_UserBlockingPriority,pc=$t.unstable_NormalPriority,fC=$t.unstable_LowPriority,LI=$t.unstable_IdlePriority,dh=null,Cn=null;function pC(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(dh,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:_C,mC=Math.log,gC=Math.LN2;function _C(t){return t>>>=0,t===0?32:31-(mC(t)/gC|0)|0}var pu=64,mu=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oa(a):(s&=o,s!==0&&(r=oa(s)))}else o=n&~i,o!==0?r=oa(o):s!==0&&(r=oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function yC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=yC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function MI(){var t=pu;return pu<<=1,!(pu&4194240)&&(pu=64),t}function Md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function wC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function FI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var UI,$m,$I,BI,jI,Jf=!1,gu=[],Rr=null,Pr=null,Cr=null,Ma=new Map,Fa=new Map,_r=[],EC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fy(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function Bo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bl(e),e!==null&&$m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function IC(t,e,n,r,i){switch(e){case"focusin":return Rr=Bo(Rr,t,e,n,r,i),!0;case"dragenter":return Pr=Bo(Pr,t,e,n,r,i),!0;case"mouseover":return Cr=Bo(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ma.set(s,Bo(Ma.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fa.set(s,Bo(Fa.get(s)||null,t,e,n,r,i)),!0}return!1}function zI(t){var e=vi(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=NI(n),e!==null){t.blockedOn=e,jI(t.priority,function(){$I(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gf=r,n.target.dispatchEvent(r),Gf=null}else return e=bl(n),e!==null&&$m(e),t.blockedOn=n,!1;e.shift()}return!0}function Uy(t,e,n){$u(t)&&n.delete(e)}function TC(){Jf=!1,Rr!==null&&$u(Rr)&&(Rr=null),Pr!==null&&$u(Pr)&&(Pr=null),Cr!==null&&$u(Cr)&&(Cr=null),Ma.forEach(Uy),Fa.forEach(Uy)}function jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Jf||(Jf=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,TC)))}function Ua(t){function e(i){return jo(i,t)}if(0<gu.length){jo(gu[0],t);for(var n=1;n<gu.length;n++){var r=gu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&jo(Rr,t),Pr!==null&&jo(Pr,t),Cr!==null&&jo(Cr,t),Ma.forEach(e),Fa.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)zI(n),n.blockedOn===null&&_r.shift()}var Ms=rr.ReactCurrentBatchConfig,gc=!0;function SC(t,e,n,r){var i=ie,s=Ms.transition;Ms.transition=null;try{ie=1,Bm(t,e,n,r)}finally{ie=i,Ms.transition=s}}function AC(t,e,n,r){var i=ie,s=Ms.transition;Ms.transition=null;try{ie=4,Bm(t,e,n,r)}finally{ie=i,Ms.transition=s}}function Bm(t,e,n,r){if(gc){var i=Xf(t,e,n,r);if(i===null)Kd(t,e,r,_c,n),Fy(t,r);else if(IC(i,t,e,n,r))r.stopPropagation();else if(Fy(t,r),e&4&&-1<EC.indexOf(t)){for(;i!==null;){var s=bl(i);if(s!==null&&UI(s),s=Xf(t,e,n,r),s===null&&Kd(t,e,r,_c,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kd(t,e,r,null,n)}}var _c=null;function Xf(t,e,n,r){if(_c=null,t=Mm(r),t=vi(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=NI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function qI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dC()){case Fm:return 1;case VI:return 4;case pc:case fC:return 16;case LI:return 536870912;default:return 16}default:return 16}}var Er=null,jm=null,Bu=null;function WI(){if(Bu)return Bu;var t,e=jm,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bu=i.slice(t,1<r?1-r:void 0)}function ju(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function $y(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_u:$y,this.isPropagationStopped=$y,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=qt(vo),Nl=Ee({},vo,{view:0,detail:0}),RC=qt(Nl),Fd,Ud,zo,fh=Ee({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Fd=t.screenX-zo.screenX,Ud=t.screenY-zo.screenY):Ud=Fd=0,zo=t),Fd)},movementY:function(t){return"movementY"in t?t.movementY:Ud}}),By=qt(fh),PC=Ee({},fh,{dataTransfer:0}),CC=qt(PC),kC=Ee({},Nl,{relatedTarget:0}),$d=qt(kC),xC=Ee({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),NC=qt(xC),bC=Ee({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DC=qt(bC),OC=Ee({},vo,{data:0}),jy=qt(OC),VC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MC[t])?!!e[t]:!1}function qm(){return FC}var UC=Ee({},Nl,{key:function(t){if(t.key){var e=VC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ju(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qm,charCode:function(t){return t.type==="keypress"?ju(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ju(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$C=qt(UC),BC=Ee({},fh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zy=qt(BC),jC=Ee({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qm}),zC=qt(jC),qC=Ee({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),WC=qt(qC),GC=Ee({},fh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KC=qt(GC),HC=[9,13,27,32],Wm=Yn&&"CompositionEvent"in window,_a=null;Yn&&"documentMode"in document&&(_a=document.documentMode);var QC=Yn&&"TextEvent"in window&&!_a,GI=Yn&&(!Wm||_a&&8<_a&&11>=_a),qy=" ",Wy=!1;function KI(t,e){switch(t){case"keyup":return HC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function HI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function YC(t,e){switch(t){case"compositionend":return HI(e);case"keypress":return e.which!==32?null:(Wy=!0,qy);case"textInput":return t=e.data,t===qy&&Wy?null:t;default:return null}}function JC(t,e){if(Is)return t==="compositionend"||!Wm&&KI(t,e)?(t=WI(),Bu=jm=Er=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return GI&&e.locale!=="ko"?null:e.data;default:return null}}var XC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XC[t.type]:e==="textarea"}function QI(t,e,n,r){RI(r),e=yc(e,"onChange"),0<e.length&&(n=new zm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ya=null,$a=null;function ZC(t){oT(t,0)}function ph(t){var e=As(t);if(vI(e))return t}function ek(t,e){if(t==="change")return e}var YI=!1;if(Yn){var Bd;if(Yn){var jd="oninput"in document;if(!jd){var Ky=document.createElement("div");Ky.setAttribute("oninput","return;"),jd=typeof Ky.oninput=="function"}Bd=jd}else Bd=!1;YI=Bd&&(!document.documentMode||9<document.documentMode)}function Hy(){ya&&(ya.detachEvent("onpropertychange",JI),$a=ya=null)}function JI(t){if(t.propertyName==="value"&&ph($a)){var e=[];QI(e,$a,t,Mm(t)),xI(ZC,e)}}function tk(t,e,n){t==="focusin"?(Hy(),ya=e,$a=n,ya.attachEvent("onpropertychange",JI)):t==="focusout"&&Hy()}function nk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ph($a)}function rk(t,e){if(t==="click")return ph(e)}function ik(t,e){if(t==="input"||t==="change")return ph(e)}function sk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:sk;function Ba(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Of.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function Qy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yy(t,e){var n=Qy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qy(n)}}function XI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?XI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ZI(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ok(t){var e=ZI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&XI(n.ownerDocument.documentElement,n)){if(r!==null&&Gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yy(n,s);var o=Yy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ak=Yn&&"documentMode"in document&&11>=document.documentMode,Ts=null,Zf=null,va=null,ep=!1;function Jy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||Ts==null||Ts!==hc(r)||(r=Ts,"selectionStart"in r&&Gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),va&&Ba(va,r)||(va=r,r=yc(Zf,"onSelect"),0<r.length&&(e=new zm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ts)))}function yu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:yu("Animation","AnimationEnd"),animationiteration:yu("Animation","AnimationIteration"),animationstart:yu("Animation","AnimationStart"),transitionend:yu("Transition","TransitionEnd")},zd={},eT={};Yn&&(eT=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function mh(t){if(zd[t])return zd[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eT)return zd[t]=e[n];return t}var tT=mh("animationend"),nT=mh("animationiteration"),rT=mh("animationstart"),iT=mh("transitionend"),sT=new Map,Xy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){sT.set(t,e),Ji(e,[t])}for(var qd=0;qd<Xy.length;qd++){var Wd=Xy[qd],lk=Wd.toLowerCase(),uk=Wd[0].toUpperCase()+Wd.slice(1);Yr(lk,"on"+uk)}Yr(tT,"onAnimationEnd");Yr(nT,"onAnimationIteration");Yr(rT,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(iT,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ck=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Zy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lC(r,e,void 0,t),t.currentTarget=null}function oT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zy(i,a,u),s=l}}}if(fc)throw t=Qf,fc=!1,Qf=null,t}function ce(t,e){var n=e[sp];n===void 0&&(n=e[sp]=new Set);var r=t+"__bubble";n.has(r)||(aT(e,t,2,!1),n.add(r))}function Gd(t,e,n){var r=0;e&&(r|=4),aT(n,t,r,e)}var vu="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[vu]){t[vu]=!0,pI.forEach(function(n){n!=="selectionchange"&&(ck.has(n)||Gd(n,!1,t),Gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vu]||(e[vu]=!0,Gd("selectionchange",!1,e))}}function aT(t,e,n,r){switch(qI(e)){case 1:var i=SC;break;case 4:i=AC;break;default:i=Bm}n=i.bind(null,e,n,t),i=void 0,!Hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xI(function(){var u=s,c=Mm(n),h=[];e:{var d=sT.get(t);if(d!==void 0){var f=zm,g=t;switch(t){case"keypress":if(ju(n)===0)break e;case"keydown":case"keyup":f=$C;break;case"focusin":g="focus",f=$d;break;case"focusout":g="blur",f=$d;break;case"beforeblur":case"afterblur":f=$d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=By;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=CC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=zC;break;case tT:case nT:case rT:f=NC;break;case iT:f=WC;break;case"scroll":f=RC;break;case"wheel":f=KC;break;case"copy":case"cut":case"paste":f=DC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=zy}var y=(e&4)!==0,v=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var p=u,_;p!==null;){_=p;var T=_.stateNode;if(_.tag===5&&T!==null&&(_=T,m!==null&&(T=La(p,m),T!=null&&y.push(za(p,T,_)))),v)break;p=p.return}0<y.length&&(d=new f(d,g,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Gf&&(g=n.relatedTarget||n.fromElement)&&(vi(g)||g[Jn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?vi(g):null,g!==null&&(v=Xi(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(y=By,T="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=zy,T="onPointerLeave",m="onPointerEnter",p="pointer"),v=f==null?d:As(f),_=g==null?d:As(g),d=new y(T,p+"leave",f,n,c),d.target=v,d.relatedTarget=_,T=null,vi(c)===u&&(y=new y(m,p+"enter",g,n,c),y.target=_,y.relatedTarget=v,T=y),v=T,f&&g)t:{for(y=f,m=g,p=0,_=y;_;_=as(_))p++;for(_=0,T=m;T;T=as(T))_++;for(;0<p-_;)y=as(y),p--;for(;0<_-p;)m=as(m),_--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=as(y),m=as(m)}y=null}else y=null;f!==null&&ev(h,d,f,y,!1),g!==null&&v!==null&&ev(h,v,g,y,!0)}}e:{if(d=u?As(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var P=ek;else if(Gy(d))if(YI)P=ik;else{P=nk;var x=tk}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=rk);if(P&&(P=P(t,u))){QI(h,P,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&Bf(d,"number",d.value)}switch(x=u?As(u):window,t){case"focusin":(Gy(x)||x.contentEditable==="true")&&(Ts=x,Zf=u,va=null);break;case"focusout":va=Zf=Ts=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,Jy(h,n,c);break;case"selectionchange":if(ak)break;case"keydown":case"keyup":Jy(h,n,c)}var b;if(Wm)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Is?KI(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(GI&&n.locale!=="ko"&&(Is||F!=="onCompositionStart"?F==="onCompositionEnd"&&Is&&(b=WI()):(Er=c,jm="value"in Er?Er.value:Er.textContent,Is=!0)),x=yc(u,F),0<x.length&&(F=new jy(F,t,null,n,c),h.push({event:F,listeners:x}),b?F.data=b:(b=HI(n),b!==null&&(F.data=b)))),(b=QC?YC(t,n):JC(t,n))&&(u=yc(u,"onBeforeInput"),0<u.length&&(c=new jy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}oT(h,e)})}function za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=La(t,n),s!=null&&r.unshift(za(t,s,i)),s=La(t,e),s!=null&&r.push(za(t,s,i))),t=t.return}return r}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ev(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=La(n,s),l!=null&&o.unshift(za(n,l,a))):i||(l=La(n,s),l!=null&&o.push(za(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hk=/\r\n?/g,dk=/\u0000|\uFFFD/g;function tv(t){return(typeof t=="string"?t:""+t).replace(hk,`
`).replace(dk,"")}function wu(t,e,n){if(e=tv(e),tv(t)!==e&&n)throw Error(C(425))}function vc(){}var tp=null,np=null;function rp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ip=typeof setTimeout=="function"?setTimeout:void 0,fk=typeof clearTimeout=="function"?clearTimeout:void 0,nv=typeof Promise=="function"?Promise:void 0,pk=typeof queueMicrotask=="function"?queueMicrotask:typeof nv<"u"?function(t){return nv.resolve(null).then(t).catch(mk)}:ip;function mk(t){setTimeout(function(){throw t})}function Hd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ua(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),gn="__reactFiber$"+wo,qa="__reactProps$"+wo,Jn="__reactContainer$"+wo,sp="__reactEvents$"+wo,gk="__reactListeners$"+wo,_k="__reactHandles$"+wo;function vi(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rv(t);t!==null;){if(n=t[gn])return n;t=rv(t)}return e}t=n,n=t.parentNode}return null}function bl(t){return t=t[gn]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function gh(t){return t[qa]||null}var op=[],Rs=-1;function Jr(t){return{current:t}}function fe(t){0>Rs||(t.current=op[Rs],op[Rs]=null,Rs--)}function le(t,e){Rs++,op[Rs]=t.current,t.current=e}var Mr={},dt=Jr(Mr),Nt=Jr(!1),Di=Mr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function wc(){fe(Nt),fe(dt)}function iv(t,e,n){if(dt.current!==Mr)throw Error(C(168));le(dt,e),le(Nt,n)}function lT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,tC(t)||"Unknown",i));return Ee({},n,r)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Di=dt.current,le(dt,t),le(Nt,Nt.current),!0}function sv(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=lT(t,e,Di),r.__reactInternalMemoizedMergedChildContext=t,fe(Nt),fe(dt),le(dt,t)):fe(Nt),le(Nt,n)}var Un=null,_h=!1,Qd=!1;function uT(t){Un===null?Un=[t]:Un.push(t)}function yk(t){_h=!0,uT(t)}function Xr(){if(!Qd&&Un!==null){Qd=!0;var t=0,e=ie;try{var n=Un;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Un=null,_h=!1}catch(i){throw Un!==null&&(Un=Un.slice(t+1)),OI(Fm,Xr),i}finally{ie=e,Qd=!1}}return null}var Ps=[],Cs=0,Ic=null,Tc=0,Wt=[],Gt=0,Oi=null,$n=1,Bn="";function ci(t,e){Ps[Cs++]=Tc,Ps[Cs++]=Ic,Ic=t,Tc=e}function cT(t,e,n){Wt[Gt++]=$n,Wt[Gt++]=Bn,Wt[Gt++]=Oi,Oi=t;var r=$n;t=Bn;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$n=1<<32-ln(e)+i|n<<i|r,Bn=s+t}else $n=1<<s|n<<i|r,Bn=t}function Km(t){t.return!==null&&(ci(t,1),cT(t,1,0))}function Hm(t){for(;t===Ic;)Ic=Ps[--Cs],Ps[Cs]=null,Tc=Ps[--Cs],Ps[Cs]=null;for(;t===Oi;)Oi=Wt[--Gt],Wt[Gt]=null,Bn=Wt[--Gt],Wt[Gt]=null,$n=Wt[--Gt],Wt[Gt]=null}var Ut=null,Mt=null,pe=!1,on=null;function hT(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ov(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Mt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Oi!==null?{id:$n,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Mt=null,!0):!1;default:return!1}}function ap(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lp(t){if(pe){var e=Mt;if(e){var n=e;if(!ov(t,e)){if(ap(t))throw Error(C(418));e=kr(n.nextSibling);var r=Ut;e&&ov(t,e)?hT(r,n):(t.flags=t.flags&-4097|2,pe=!1,Ut=t)}}else{if(ap(t))throw Error(C(418));t.flags=t.flags&-4097|2,pe=!1,Ut=t}}}function av(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Eu(t){if(t!==Ut)return!1;if(!pe)return av(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rp(t.type,t.memoizedProps)),e&&(e=Mt)){if(ap(t))throw dT(),Error(C(418));for(;e;)hT(t,e),e=kr(e.nextSibling)}if(av(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ut?kr(t.stateNode.nextSibling):null;return!0}function dT(){for(var t=Mt;t;)t=kr(t.nextSibling)}function Ys(){Mt=Ut=null,pe=!1}function Qm(t){on===null?on=[t]:on.push(t)}var vk=rr.ReactCurrentBatchConfig;function rn(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Sc=Jr(null),Ac=null,ks=null,Ym=null;function Jm(){Ym=ks=Ac=null}function Xm(t){var e=Sc.current;fe(Sc),t._currentValue=e}function up(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Ac=t,Ym=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(Ym!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(Ac===null)throw Error(C(308));ks=t,Ac.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var wi=null;function Zm(t){wi===null?wi=[t]:wi.push(t)}function fT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xn(t,r)}function Xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function eg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xn(t,n)}function zu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Um(t,n)}}function lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rc(t,e,n,r){var i=t.updateQueue;gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,f=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(f,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(f,h,d):g,d==null)break e;h=Ee({},h,d);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Li|=o,t.lanes=o,t.memoizedState=h}}function uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var mT=new fI.Component().refs;function cp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yh={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=br(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(un(e,t,i,r),zu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=br(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(un(e,t,i,r),zu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=br(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=xr(t,i,r),e!==null&&(un(e,t,r,n),zu(e,t,r))}};function cv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,r)||!Ba(i,s):!0}function gT(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=bt(e)?Di:dt.current,r=e.contextTypes,s=(r=r!=null)?Qs(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yh.enqueueReplaceState(e,e.state,null)}function hp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=mT,eg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=bt(e)?Di:dt.current,i.context=Qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yh.enqueueReplaceState(i,i.state,null),Rc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===mT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Iu(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dv(t){var e=t._init;return e(t._payload)}function _T(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Dr(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,_,T){return p===null||p.tag!==6?(p=nf(_,m.mode,T),p.return=m,p):(p=i(p,_),p.return=m,p)}function l(m,p,_,T){var P=_.type;return P===Es?c(m,p,_.props.children,T,_.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===mr&&dv(P)===p.type)?(T=i(p,_.props),T.ref=qo(m,p,_),T.return=m,T):(T=Qu(_.type,_.key,_.props,null,m.mode,T),T.ref=qo(m,p,_),T.return=m,T)}function u(m,p,_,T){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=rf(_,m.mode,T),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function c(m,p,_,T,P){return p===null||p.tag!==7?(p=Ci(_,m.mode,T,P),p.return=m,p):(p=i(p,_),p.return=m,p)}function h(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=nf(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hu:return _=Qu(p.type,p.key,p.props,null,m.mode,_),_.ref=qo(m,null,p),_.return=m,_;case ws:return p=rf(p,m.mode,_),p.return=m,p;case mr:var T=p._init;return h(m,T(p._payload),_)}if(sa(p)||Uo(p))return p=Ci(p,m.mode,_,null),p.return=m,p;Iu(m,p)}return null}function d(m,p,_,T){var P=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(m,p,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case hu:return _.key===P?l(m,p,_,T):null;case ws:return _.key===P?u(m,p,_,T):null;case mr:return P=_._init,d(m,p,P(_._payload),T)}if(sa(_)||Uo(_))return P!==null?null:c(m,p,_,T,null);Iu(m,_)}return null}function f(m,p,_,T,P){if(typeof T=="string"&&T!==""||typeof T=="number")return m=m.get(_)||null,a(p,m,""+T,P);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case hu:return m=m.get(T.key===null?_:T.key)||null,l(p,m,T,P);case ws:return m=m.get(T.key===null?_:T.key)||null,u(p,m,T,P);case mr:var x=T._init;return f(m,p,_,x(T._payload),P)}if(sa(T)||Uo(T))return m=m.get(_)||null,c(p,m,T,P,null);Iu(p,T)}return null}function g(m,p,_,T){for(var P=null,x=null,b=p,F=p=0,ae=null;b!==null&&F<_.length;F++){b.index>F?(ae=b,b=null):ae=b.sibling;var K=d(m,b,_[F],T);if(K===null){b===null&&(b=ae);break}t&&b&&K.alternate===null&&e(m,b),p=s(K,p,F),x===null?P=K:x.sibling=K,x=K,b=ae}if(F===_.length)return n(m,b),pe&&ci(m,F),P;if(b===null){for(;F<_.length;F++)b=h(m,_[F],T),b!==null&&(p=s(b,p,F),x===null?P=b:x.sibling=b,x=b);return pe&&ci(m,F),P}for(b=r(m,b);F<_.length;F++)ae=f(b,m,F,_[F],T),ae!==null&&(t&&ae.alternate!==null&&b.delete(ae.key===null?F:ae.key),p=s(ae,p,F),x===null?P=ae:x.sibling=ae,x=ae);return t&&b.forEach(function(tn){return e(m,tn)}),pe&&ci(m,F),P}function y(m,p,_,T){var P=Uo(_);if(typeof P!="function")throw Error(C(150));if(_=P.call(_),_==null)throw Error(C(151));for(var x=P=null,b=p,F=p=0,ae=null,K=_.next();b!==null&&!K.done;F++,K=_.next()){b.index>F?(ae=b,b=null):ae=b.sibling;var tn=d(m,b,K.value,T);if(tn===null){b===null&&(b=ae);break}t&&b&&tn.alternate===null&&e(m,b),p=s(tn,p,F),x===null?P=tn:x.sibling=tn,x=tn,b=ae}if(K.done)return n(m,b),pe&&ci(m,F),P;if(b===null){for(;!K.done;F++,K=_.next())K=h(m,K.value,T),K!==null&&(p=s(K,p,F),x===null?P=K:x.sibling=K,x=K);return pe&&ci(m,F),P}for(b=r(m,b);!K.done;F++,K=_.next())K=f(b,m,F,K.value,T),K!==null&&(t&&K.alternate!==null&&b.delete(K.key===null?F:K.key),p=s(K,p,F),x===null?P=K:x.sibling=K,x=K);return t&&b.forEach(function(Mo){return e(m,Mo)}),pe&&ci(m,F),P}function v(m,p,_,T){if(typeof _=="object"&&_!==null&&_.type===Es&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case hu:e:{for(var P=_.key,x=p;x!==null;){if(x.key===P){if(P=_.type,P===Es){if(x.tag===7){n(m,x.sibling),p=i(x,_.props.children),p.return=m,m=p;break e}}else if(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===mr&&dv(P)===x.type){n(m,x.sibling),p=i(x,_.props),p.ref=qo(m,x,_),p.return=m,m=p;break e}n(m,x);break}else e(m,x);x=x.sibling}_.type===Es?(p=Ci(_.props.children,m.mode,T,_.key),p.return=m,m=p):(T=Qu(_.type,_.key,_.props,null,m.mode,T),T.ref=qo(m,p,_),T.return=m,m=T)}return o(m);case ws:e:{for(x=_.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=rf(_,m.mode,T),p.return=m,m=p}return o(m);case mr:return x=_._init,v(m,p,x(_._payload),T)}if(sa(_))return g(m,p,_,T);if(Uo(_))return y(m,p,_,T);Iu(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=nf(_,m.mode,T),p.return=m,m=p),o(m)):n(m,p)}return v}var Js=_T(!0),yT=_T(!1),Dl={},kn=Jr(Dl),Wa=Jr(Dl),Ga=Jr(Dl);function Ei(t){if(t===Dl)throw Error(C(174));return t}function tg(t,e){switch(le(Ga,e),le(Wa,t),le(kn,Dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zf(e,t)}fe(kn),le(kn,e)}function Xs(){fe(kn),fe(Wa),fe(Ga)}function vT(t){Ei(Ga.current);var e=Ei(kn.current),n=zf(e,t.type);e!==n&&(le(Wa,t),le(kn,n))}function ng(t){Wa.current===t&&(fe(kn),fe(Wa))}var ye=Jr(0);function Pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function rg(){for(var t=0;t<Yd.length;t++)Yd[t]._workInProgressVersionPrimary=null;Yd.length=0}var qu=rr.ReactCurrentDispatcher,Jd=rr.ReactCurrentBatchConfig,Vi=0,ve=null,Fe=null,ze=null,Cc=!1,wa=!1,Ka=0,wk=0;function ot(){throw Error(C(321))}function ig(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function sg(t,e,n,r,i,s){if(Vi=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qu.current=t===null||t.memoizedState===null?Sk:Ak,t=n(r,i),wa){s=0;do{if(wa=!1,Ka=0,25<=s)throw Error(C(301));s+=1,ze=Fe=null,e.updateQueue=null,qu.current=Rk,t=n(r,i)}while(wa)}if(qu.current=kc,e=Fe!==null&&Fe.next!==null,Vi=0,ze=Fe=ve=null,Cc=!1,e)throw Error(C(300));return t}function og(){var t=Ka!==0;return Ka=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ve.memoizedState=ze=t:ze=ze.next=t,ze}function Zt(){if(Fe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=ze===null?ve.memoizedState:ze.next;if(e!==null)ze=e,Fe=t;else{if(t===null)throw Error(C(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},ze===null?ve.memoizedState=ze=t:ze=ze.next=t}return ze}function Ha(t,e){return typeof e=="function"?e(t):e}function Xd(t){var e=Zt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Vi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ve.lanes|=c,Li|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,cn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zd(t){var e=Zt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wT(){}function ET(t,e){var n=ve,r=Zt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,ag(ST.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Qa(9,TT.bind(null,n,r,i,e),void 0,null),We===null)throw Error(C(349));Vi&30||IT(n,e,i)}return i}function IT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function TT(t,e,n,r){e.value=n,e.getSnapshot=r,AT(e)&&RT(t)}function ST(t,e,n){return n(function(){AT(e)&&RT(t)})}function AT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function RT(t){var e=Xn(t,1);e!==null&&un(e,t,1,-1)}function fv(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=Tk.bind(null,ve,t),[e.memoizedState,t]}function Qa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function PT(){return Zt().memoizedState}function Wu(t,e,n,r){var i=mn();ve.flags|=t,i.memoizedState=Qa(1|e,n,void 0,r===void 0?null:r)}function vh(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&ig(r,o.deps)){i.memoizedState=Qa(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Qa(1|e,n,s,r)}function pv(t,e){return Wu(8390656,8,t,e)}function ag(t,e){return vh(2048,8,t,e)}function CT(t,e){return vh(4,2,t,e)}function kT(t,e){return vh(4,4,t,e)}function xT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function NT(t,e,n){return n=n!=null?n.concat([t]):null,vh(4,4,xT.bind(null,e,t),n)}function lg(){}function bT(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function DT(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function OT(t,e,n){return Vi&21?(cn(n,e)||(n=MI(),ve.lanes|=n,Li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function Ek(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=Jd.transition;Jd.transition={};try{t(!1),e()}finally{ie=n,Jd.transition=r}}function VT(){return Zt().memoizedState}function Ik(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},LT(t))MT(e,n);else if(n=fT(t,e,n,r),n!==null){var i=_t();un(n,t,r,i),FT(n,e,r)}}function Tk(t,e,n){var r=br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(LT(t))MT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=e.interleaved;l===null?(i.next=i,Zm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=fT(t,e,i,r),n!==null&&(i=_t(),un(n,t,r,i),FT(n,e,r))}}function LT(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function MT(t,e){wa=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function FT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Um(t,n)}}var kc={readContext:Xt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Sk={readContext:Xt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:pv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,xT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ik.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:fv,useDebugValue:lg,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=fv(!1),e=t[0];return t=Ek.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=mn();if(pe){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),We===null)throw Error(C(349));Vi&30||IT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pv(ST.bind(null,r,s,t),[t]),r.flags|=2048,Qa(9,TT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mn(),e=We.identifierPrefix;if(pe){var n=Bn,r=$n;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ak={readContext:Xt,useCallback:bT,useContext:Xt,useEffect:ag,useImperativeHandle:NT,useInsertionEffect:CT,useLayoutEffect:kT,useMemo:DT,useReducer:Xd,useRef:PT,useState:function(){return Xd(Ha)},useDebugValue:lg,useDeferredValue:function(t){var e=Zt();return OT(e,Fe.memoizedState,t)},useTransition:function(){var t=Xd(Ha)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:wT,useSyncExternalStore:ET,useId:VT,unstable_isNewReconciler:!1},Rk={readContext:Xt,useCallback:bT,useContext:Xt,useEffect:ag,useImperativeHandle:NT,useInsertionEffect:CT,useLayoutEffect:kT,useMemo:DT,useReducer:Zd,useRef:PT,useState:function(){return Zd(Ha)},useDebugValue:lg,useDeferredValue:function(t){var e=Zt();return Fe===null?e.memoizedState=t:OT(e,Fe.memoizedState,t)},useTransition:function(){var t=Zd(Ha)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:wT,useSyncExternalStore:ET,useId:VT,unstable_isNewReconciler:!1};function Zs(t,e){try{var n="",r=e;do n+=eC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Pk=typeof WeakMap=="function"?WeakMap:Map;function UT(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nc||(Nc=!0,Ip=r),dp(t,e)},n}function $T(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dp(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Pk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Bk.bind(null,t,e,n),e.then(t,t))}function gv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _v(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var Ck=rr.ReactCurrentOwner,Pt=!1;function ft(t,e,n,r){e.child=t===null?yT(e,null,n,r):Js(e,t.child,n,r)}function yv(t,e,n,r,i){n=n.render;var s=e.ref;return Fs(e,i),r=sg(t,e,n,r,s,i),n=og(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(pe&&n&&Km(e),e.flags|=1,ft(t,e,r,i),e.child)}function vv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,BT(t,e,s,r,i)):(t=Qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(o,r)&&t.ref===e.ref)return Zn(t,e,i)}return e.flags|=1,t=Dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function BT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ba(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Zn(t,e,i)}return fp(t,e,n,r,i)}function jT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Ns,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Ns,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Ns,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Ns,Vt),Vt|=r;return ft(t,e,i,n),e.child}function zT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fp(t,e,n,r,i){var s=bt(n)?Di:dt.current;return s=Qs(e,s),Fs(e,i),n=sg(t,e,n,r,s,i),r=og(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(pe&&r&&Km(e),e.flags|=1,ft(t,e,n,i),e.child)}function wv(t,e,n,r,i){if(bt(n)){var s=!0;Ec(e)}else s=!1;if(Fs(e,i),e.stateNode===null)Gu(t,e),gT(e,n,r),hp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=bt(n)?Di:dt.current,u=Qs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&hv(e,o,r,u),gr=!1;var d=e.memoizedState;o.state=d,Rc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Nt.current||gr?(typeof c=="function"&&(cp(e,n,c,r),l=e.memoizedState),(a=gr||cv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:rn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xt(l):(l=bt(n)?Di:dt.current,l=Qs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hv(e,o,r,l),gr=!1,d=e.memoizedState,o.state=d,Rc(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Nt.current||gr?(typeof f=="function"&&(cp(e,n,f,r),g=e.memoizedState),(u=gr||cv(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return pp(t,e,n,r,s,i)}function pp(t,e,n,r,i,s){zT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sv(e,n,!1),Zn(t,e,s);r=e.stateNode,Ck.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&sv(e,n,!0),e.child}function qT(t){var e=t.stateNode;e.pendingContext?iv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iv(t,e.context,!1),tg(t,e.containerInfo)}function Ev(t,e,n,r,i){return Ys(),Qm(i),e.flags|=256,ft(t,e,n,r),e.child}var mp={dehydrated:null,treeContext:null,retryLane:0};function gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function WT(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ye,i&1),t===null)return lp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ih(o,r,0,null),t=Ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gp(n),e.memoizedState=mp,t):ug(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=Ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mp,r}return s=t.child,t=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ug(t,e){return e=Ih({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tu(t,e,n,r){return r!==null&&Qm(r),Js(e,t.child,null,n),t=ug(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ef(Error(C(422))),Tu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ih({mode:"visible",children:r.children},i,0,null),s=Ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=gp(o),e.memoizedState=mp,s);if(!(e.mode&1))return Tu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=ef(s,r,void 0),Tu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Pt||a){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xn(t,i),un(r,t,i,-1))}return mg(),r=ef(Error(C(421))),Tu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=jk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=kr(i.nextSibling),Ut=e,pe=!0,on=null,t!==null&&(Wt[Gt++]=$n,Wt[Gt++]=Bn,Wt[Gt++]=Oi,$n=t.id,Bn=t.overflow,Oi=e),e=ug(e,r.children),e.flags|=4096,e)}function Iv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),up(t.return,e,n)}function tf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function GT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iv(t,n,e);else if(t.tag===19)Iv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tf(e,!0,n,null,s);break;case"together":tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xk(t,e,n){switch(e.tag){case 3:qT(e),Ys();break;case 5:vT(e);break;case 1:bt(e.type)&&Ec(e);break;case 4:tg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(Sc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?WT(t,e,n):(le(ye,ye.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);le(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return GT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,jT(t,e,n)}return Zn(t,e,n)}var KT,_p,HT,QT;KT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_p=function(){};HT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ei(kn.current);var s=null;switch(n){case"input":i=Uf(t,i),r=Uf(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=jf(t,i),r=jf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vc)}qf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};QT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wo(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Nk(t,e,n){var r=e.pendingProps;switch(Hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return bt(e.type)&&wc(),at(e),null;case 3:return r=e.stateNode,Xs(),fe(Nt),fe(dt),rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Eu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(Ap(on),on=null))),_p(t,e),at(e),null;case 5:ng(e);var i=Ei(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)HT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return at(e),null}if(t=Ei(kn.current),Eu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[qa]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<aa.length;i++)ce(aa[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Ny(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Dy(r,s),ce("invalid",r)}qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":du(r),by(r,s,!0);break;case"textarea":du(r),Oy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=II(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[qa]=r,KT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wf(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<aa.length;i++)ce(aa[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":Ny(t,r),i=Uf(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Dy(t,r),i=jf(t,r),ce("invalid",t);break;default:i=r}qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?AI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&TI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&Dm(t,s,l,o))}switch(n){case"input":du(t),by(t,r,!1);break;case"textarea":du(t),Oy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Os(t,!!r.multiple,s,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)QT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Ei(Ga.current),Ei(kn.current),Eu(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:wu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return at(e),null;case 13:if(fe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&Mt!==null&&e.mode&1&&!(e.flags&128))dT(),Ys(),e.flags|=98560,s=!1;else if(s=Eu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[gn]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else on!==null&&(Ap(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ue===0&&(Ue=3):mg())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return Xs(),_p(t,e),t===null&&ja(e.stateNode.containerInfo),at(e),null;case 10:return Xm(e.type._context),at(e),null;case 17:return bt(e.type)&&wc(),at(e),null;case 19:if(fe(ye),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wo(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pc(t),o!==null){for(e.flags|=128,Wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>eo&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return at(e),null}else 2*Ne()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=ye.current,le(ye,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return pg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function bk(t,e){switch(Hm(e),e.tag){case 1:return bt(e.type)&&wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),fe(Nt),fe(dt),rg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ng(e),null;case 13:if(fe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ye),null;case 4:return Xs(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var Su=!1,ut=!1,Dk=typeof WeakSet=="function"?WeakSet:Set,L=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function yp(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Tv=!1;function Ok(t,e){if(tp=gc,t=ZI(),Gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(np={focusedElem:t,selectionRange:n},gc=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,v=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:rn(e.type,y),v);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(T){Te(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return g=Tv,Tv=!1,g}function Ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yp(e,n,s)}i=i.next}while(i!==r)}}function wh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function YT(t){var e=t.alternate;e!==null&&(t.alternate=null,YT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[qa],delete e[sp],delete e[gk],delete e[_k])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function JT(t){return t.tag===5||t.tag===3||t.tag===4}function Sv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||JT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(r!==4&&(t=t.child,t!==null))for(wp(t,e,n),t=t.sibling;t!==null;)wp(t,e,n),t=t.sibling}function Ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;t!==null;)Ep(t,e,n),t=t.sibling}var Je=null,sn=!1;function ur(t,e,n){for(n=n.child;n!==null;)XT(t,e,n),n=n.sibling}function XT(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(dh,n)}catch{}switch(n.tag){case 5:ut||xs(n,e);case 6:var r=Je,i=sn;Je=null,ur(t,e,n),Je=r,sn=i,Je!==null&&(sn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(sn?(t=Je,n=n.stateNode,t.nodeType===8?Hd(t.parentNode,n):t.nodeType===1&&Hd(t,n),Ua(t)):Hd(Je,n.stateNode));break;case 4:r=Je,i=sn,Je=n.stateNode.containerInfo,sn=!0,ur(t,e,n),Je=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yp(n,e,o),i=i.next}while(i!==r)}ur(t,e,n);break;case 1:if(!ut&&(xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,ur(t,e,n),ut=r):ur(t,e,n);break;default:ur(t,e,n)}}function Av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dk),e.forEach(function(r){var i=zk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,sn=!1;break e;case 3:Je=a.stateNode.containerInfo,sn=!0;break e;case 4:Je=a.stateNode.containerInfo,sn=!0;break e}a=a.return}if(Je===null)throw Error(C(160));XT(s,o,i),Je=null,sn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ZT(e,t),e=e.sibling}function ZT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),pn(t),r&4){try{Ea(3,t,t.return),wh(3,t)}catch(y){Te(t,t.return,y)}try{Ea(5,t,t.return)}catch(y){Te(t,t.return,y)}}break;case 1:nn(e,t),pn(t),r&512&&n!==null&&xs(n,n.return);break;case 5:if(nn(e,t),pn(t),r&512&&n!==null&&xs(n,n.return),t.flags&32){var i=t.stateNode;try{Va(i,"")}catch(y){Te(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wI(i,s),Wf(a,o);var u=Wf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?AI(i,h):c==="dangerouslySetInnerHTML"?TI(i,h):c==="children"?Va(i,h):Dm(i,c,h,u)}switch(a){case"input":$f(i,s);break;case"textarea":EI(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Os(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Os(i,!!s.multiple,s.defaultValue,!0):Os(i,!!s.multiple,s.multiple?[]:"",!1))}i[qa]=s}catch(y){Te(t,t.return,y)}}break;case 6:if(nn(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Te(t,t.return,y)}}break;case 3:if(nn(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(y){Te(t,t.return,y)}break;case 4:nn(e,t),pn(t);break;case 13:nn(e,t),pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dg=Ne())),r&4&&Av(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(u=ut)||c,nn(e,t),ut=u):nn(e,t),pn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ea(4,d,d.return);break;case 1:xs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Te(r,n,y)}}break;case 5:xs(d,d.return);break;case 22:if(d.memoizedState!==null){Pv(h);continue}}f!==null?(f.return=d,L=f):Pv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=SI("display",o))}catch(y){Te(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Te(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:nn(e,t),pn(t),r&4&&Av(t);break;case 21:break;default:nn(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(JT(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Va(i,""),r.flags&=-33);var s=Sv(t);Ep(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sv(t);wp(t,a,o);break;default:throw Error(C(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vk(t,e,n){L=t,e0(t)}function e0(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Su;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ut;a=Su;var u=ut;if(Su=o,(ut=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Cv(i):l!==null?(l.return=o,L=l):Cv(i);for(;s!==null;)L=s,e0(s),s=s.sibling;L=i,Su=a,ut=u}Rv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):Rv(t)}}function Rv(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||wh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ua(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ut||e.flags&512&&vp(e)}catch(d){Te(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Pv(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Cv(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wh(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{vp(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{vp(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var Lk=Math.ceil,xc=rr.ReactCurrentDispatcher,cg=rr.ReactCurrentOwner,Yt=rr.ReactCurrentBatchConfig,te=0,We=null,Me=null,tt=0,Vt=0,Ns=Jr(0),Ue=0,Ya=null,Li=0,Eh=0,hg=0,Ia=null,Rt=null,dg=0,eo=1/0,Fn=null,Nc=!1,Ip=null,Nr=null,Au=!1,Ir=null,bc=0,Ta=0,Tp=null,Ku=-1,Hu=0;function _t(){return te&6?Ne():Ku!==-1?Ku:Ku=Ne()}function br(t){return t.mode&1?te&2&&tt!==0?tt&-tt:vk.transition!==null?(Hu===0&&(Hu=MI()),Hu):(t=ie,t!==0||(t=window.event,t=t===void 0?16:qI(t.type)),t):1}function un(t,e,n,r){if(50<Ta)throw Ta=0,Tp=null,Error(C(185));xl(t,n,r),(!(te&2)||t!==We)&&(t===We&&(!(te&2)&&(Eh|=n),Ue===4&&yr(t,tt)),Dt(t,r),n===1&&te===0&&!(e.mode&1)&&(eo=Ne()+500,_h&&Xr()))}function Dt(t,e){var n=t.callbackNode;vC(t,e);var r=mc(t,t===We?tt:0);if(r===0)n!==null&&My(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&My(n),e===1)t.tag===0?yk(kv.bind(null,t)):uT(kv.bind(null,t)),pk(function(){!(te&6)&&Xr()}),n=null;else{switch(FI(r)){case 1:n=Fm;break;case 4:n=VI;break;case 16:n=pc;break;case 536870912:n=LI;break;default:n=pc}n=l0(n,t0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t0(t,e){if(Ku=-1,Hu=0,te&6)throw Error(C(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=mc(t,t===We?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dc(t,r);else{e=r;var i=te;te|=2;var s=r0();(We!==t||tt!==e)&&(Fn=null,eo=Ne()+500,Pi(t,e));do try{Uk();break}catch(a){n0(t,a)}while(!0);Jm(),xc.current=s,te=i,Me!==null?e=0:(We=null,tt=0,e=Ue)}if(e!==0){if(e===2&&(i=Yf(t),i!==0&&(r=i,e=Sp(t,i))),e===1)throw n=Ya,Pi(t,0),yr(t,r),Dt(t,Ne()),n;if(e===6)yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Mk(i)&&(e=Dc(t,r),e===2&&(s=Yf(t),s!==0&&(r=s,e=Sp(t,s))),e===1))throw n=Ya,Pi(t,0),yr(t,r),Dt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:hi(t,Rt,Fn);break;case 3:if(yr(t,r),(r&130023424)===r&&(e=dg+500-Ne(),10<e)){if(mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ip(hi.bind(null,t,Rt,Fn),e);break}hi(t,Rt,Fn);break;case 4:if(yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lk(r/1960))-r,10<r){t.timeoutHandle=ip(hi.bind(null,t,Rt,Fn),r);break}hi(t,Rt,Fn);break;case 5:hi(t,Rt,Fn);break;default:throw Error(C(329))}}}return Dt(t,Ne()),t.callbackNode===n?t0.bind(null,t):null}function Sp(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Pi(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Ap(e)),t}function Ap(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function Mk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~hg,e&=~Eh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function kv(t){if(te&6)throw Error(C(327));Us();var e=mc(t,0);if(!(e&1))return Dt(t,Ne()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var r=Yf(t);r!==0&&(e=r,n=Sp(t,r))}if(n===1)throw n=Ya,Pi(t,0),yr(t,e),Dt(t,Ne()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,Rt,Fn),Dt(t,Ne()),null}function fg(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(eo=Ne()+500,_h&&Xr())}}function Mi(t){Ir!==null&&Ir.tag===0&&!(te&6)&&Us();var e=te;te|=1;var n=Yt.transition,r=ie;try{if(Yt.transition=null,ie=1,t)return t()}finally{ie=r,Yt.transition=n,te=e,!(te&6)&&Xr()}}function pg(){Vt=Ns.current,fe(Ns)}function Pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fk(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wc();break;case 3:Xs(),fe(Nt),fe(dt),rg();break;case 5:ng(r);break;case 4:Xs();break;case 13:fe(ye);break;case 19:fe(ye);break;case 10:Xm(r.type._context);break;case 22:case 23:pg()}n=n.return}if(We=t,Me=t=Dr(t.current,null),tt=Vt=e,Ue=0,Ya=null,hg=Eh=Li=0,Rt=Ia=null,wi!==null){for(e=0;e<wi.length;e++)if(n=wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wi=null}return t}function n0(t,e){do{var n=Me;try{if(Jm(),qu.current=kc,Cc){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Vi=0,ze=Fe=ve=null,wa=!1,Ka=0,cg.current=null,n===null||n.return===null){Ue=1,Ya=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=gv(o);if(f!==null){f.flags&=-257,_v(f,o,a,s,e),f.mode&1&&mv(s,u,e),e=f,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){mv(s,u,e),mg();break e}l=Error(C(426))}}else if(pe&&a.mode&1){var v=gv(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),_v(v,o,a,s,e),Qm(Zs(l,a));break e}}s=l=Zs(l,a),Ue!==4&&(Ue=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=UT(s,l,e);lv(s,m);break e;case 1:a=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Nr===null||!Nr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=$T(s,a,e);lv(s,T);break e}}s=s.return}while(s!==null)}s0(n)}catch(P){e=P,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function r0(){var t=xc.current;return xc.current=kc,t===null?kc:t}function mg(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(Li&268435455)&&!(Eh&268435455)||yr(We,tt)}function Dc(t,e){var n=te;te|=2;var r=r0();(We!==t||tt!==e)&&(Fn=null,Pi(t,e));do try{Fk();break}catch(i){n0(t,i)}while(!0);if(Jm(),te=n,xc.current=r,Me!==null)throw Error(C(261));return We=null,tt=0,Ue}function Fk(){for(;Me!==null;)i0(Me)}function Uk(){for(;Me!==null&&!cC();)i0(Me)}function i0(t){var e=a0(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?s0(t):Me=e,cg.current=null}function s0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bk(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}else if(n=Nk(n,e,Vt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function hi(t,e,n){var r=ie,i=Yt.transition;try{Yt.transition=null,ie=1,$k(t,e,n,r)}finally{Yt.transition=i,ie=r}return null}function $k(t,e,n,r){do Us();while(Ir!==null);if(te&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wC(t,s),t===We&&(Me=We=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Au||(Au=!0,l0(pc,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=ie;ie=1;var a=te;te|=4,cg.current=null,Ok(t,n),ZT(n,t),ok(np),gc=!!tp,np=tp=null,t.current=n,Vk(n),hC(),te=a,ie=o,Yt.transition=s}else t.current=n;if(Au&&(Au=!1,Ir=t,bc=i),s=t.pendingLanes,s===0&&(Nr=null),pC(n.stateNode),Dt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nc)throw Nc=!1,t=Ip,Ip=null,t;return bc&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Tp?Ta++:(Ta=0,Tp=t):Ta=0,Xr(),null}function Us(){if(Ir!==null){var t=FI(bc),e=Yt.transition,n=ie;try{if(Yt.transition=null,ie=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,bc=0,te&6)throw Error(C(331));var i=te;for(te|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Ea(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,f=c.return;if(YT(c),c===u){L=null;break}if(d!==null){d.return=f,L=d;break}L=f}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var p=t.current;for(L=p;L!==null;){o=L;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,L=_;else e:for(o=p;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wh(9,a)}}catch(P){Te(a,a.return,P)}if(a===o){L=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,L=T;break e}L=a.return}}if(te=i,Xr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(dh,t)}catch{}r=!0}return r}finally{ie=n,Yt.transition=e}}return!1}function xv(t,e,n){e=Zs(n,e),e=UT(t,e,1),t=xr(t,e,1),e=_t(),t!==null&&(xl(t,1,e),Dt(t,e))}function Te(t,e,n){if(t.tag===3)xv(t,t,n);else for(;e!==null;){if(e.tag===3){xv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=Zs(n,t),t=$T(e,t,1),e=xr(e,t,1),t=_t(),e!==null&&(xl(e,1,t),Dt(e,t));break}}e=e.return}}function Bk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(tt&n)===n&&(Ue===4||Ue===3&&(tt&130023424)===tt&&500>Ne()-dg?Pi(t,0):hg|=n),Dt(t,e)}function o0(t,e){e===0&&(t.mode&1?(e=mu,mu<<=1,!(mu&130023424)&&(mu=4194304)):e=1);var n=_t();t=Xn(t,e),t!==null&&(xl(t,e,n),Dt(t,n))}function jk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o0(t,n)}function zk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),o0(t,n)}var a0;a0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,xk(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,pe&&e.flags&1048576&&cT(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gu(t,e),t=e.pendingProps;var i=Qs(e,dt.current);Fs(e,n),i=sg(null,e,r,t,i,n);var s=og();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(e),i.updater=yh,e.stateNode=i,i._reactInternals=e,hp(e,r,t,n),e=pp(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Km(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Wk(r),t=rn(r,t),i){case 0:e=fp(null,e,r,t,n);break e;case 1:e=wv(null,e,r,t,n);break e;case 11:e=yv(null,e,r,t,n);break e;case 14:e=vv(null,e,r,rn(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),fp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),wv(t,e,r,i,n);case 3:e:{if(qT(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pT(t,e),Rc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zs(Error(C(423)),e),e=Ev(t,e,r,n,i);break e}else if(r!==i){i=Zs(Error(C(424)),e),e=Ev(t,e,r,n,i);break e}else for(Mt=kr(e.stateNode.containerInfo.firstChild),Ut=e,pe=!0,on=null,n=yT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===i){e=Zn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return vT(e),t===null&&lp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rp(r,i)?o=null:s!==null&&rp(r,s)&&(e.flags|=32),zT(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&lp(e),null;case 13:return WT(t,e,n);case 4:return tg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Js(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),yv(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(Sc,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Gn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),up(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),up(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=Xt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),vv(t,e,r,i,n);case 15:return BT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Gu(t,e),e.tag=1,bt(r)?(t=!0,Ec(e)):t=!1,Fs(e,n),gT(e,r,i),hp(e,r,i,n),pp(null,e,r,!0,t,n);case 19:return GT(t,e,n);case 22:return jT(t,e,n)}throw Error(C(156,e.tag))};function l0(t,e){return OI(t,e)}function qk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new qk(t,e,n,r)}function gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wk(t){if(typeof t=="function")return gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vm)return 11;if(t===Lm)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Ci(n.children,i,s,e);case Om:o=8,i|=8;break;case Vf:return t=Ht(12,n,e,i|2),t.elementType=Vf,t.lanes=s,t;case Lf:return t=Ht(13,n,e,i),t.elementType=Lf,t.lanes=s,t;case Mf:return t=Ht(19,n,e,i),t.elementType=Mf,t.lanes=s,t;case _I:return Ih(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mI:o=10;break e;case gI:o=9;break e;case Vm:o=11;break e;case Lm:o=14;break e;case mr:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ci(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function Ih(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=_I,t.lanes=n,t.stateNode={isHidden:!1},t}function nf(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function rf(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Md(0),this.expirationTimes=Md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _g(t,e,n,r,i,s,o,a,l){return t=new Gk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),t}function Kk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u0(t){if(!t)return Mr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(bt(n))return lT(t,n,e)}return e}function c0(t,e,n,r,i,s,o,a,l){return t=_g(n,r,!0,t,i,s,o,a,l),t.context=u0(null),n=t.current,r=_t(),i=br(n),s=Gn(r,i),s.callback=e??null,xr(n,s,i),t.current.lanes=i,xl(t,i,r),Dt(t,r),t}function Th(t,e,n,r){var i=e.current,s=_t(),o=br(i);return n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(i,e,o),t!==null&&(un(t,i,o,s),zu(t,i,o)),o}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yg(t,e){Nv(t,e),(t=t.alternate)&&Nv(t,e)}function Hk(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function vg(t){this._internalRoot=t}Sh.prototype.render=vg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Th(t,e,null,null)};Sh.prototype.unmount=vg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mi(function(){Th(null,t,null,null)}),e[Jn]=null}};function Sh(t){this._internalRoot=t}Sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=BI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&zI(t)}};function wg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ah(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bv(){}function Qk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Oc(o);s.call(u)}}var o=c0(e,r,t,0,null,!1,!1,"",bv);return t._reactRootContainer=o,t[Jn]=o.current,ja(t.nodeType===8?t.parentNode:t),Mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Oc(l);a.call(u)}}var l=_g(t,0,!1,null,null,!1,!1,"",bv);return t._reactRootContainer=l,t[Jn]=l.current,ja(t.nodeType===8?t.parentNode:t),Mi(function(){Th(e,l,n,r)}),l}function Rh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Oc(o);a.call(l)}}Th(e,o,t,i)}else o=Qk(n,e,t,i,r);return Oc(o)}UI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Um(e,n|1),Dt(e,Ne()),!(te&6)&&(eo=Ne()+500,Xr()))}break;case 13:Mi(function(){var r=Xn(t,1);if(r!==null){var i=_t();un(r,t,1,i)}}),yg(t,1)}};$m=function(t){if(t.tag===13){var e=Xn(t,134217728);if(e!==null){var n=_t();un(e,t,134217728,n)}yg(t,134217728)}};$I=function(t){if(t.tag===13){var e=br(t),n=Xn(t,e);if(n!==null){var r=_t();un(n,t,e,r)}yg(t,e)}};BI=function(){return ie};jI=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};Kf=function(t,e,n){switch(e){case"input":if($f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gh(r);if(!i)throw Error(C(90));vI(r),$f(r,i)}}}break;case"textarea":EI(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};CI=fg;kI=Mi;var Yk={usingClientEntryPoint:!1,Events:[bl,As,gh,RI,PI,fg]},Go={findFiberByHostInstance:vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Jk={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bI(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||Hk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{dh=Ru.inject(Jk),Cn=Ru}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yk;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wg(e))throw Error(C(200));return Kk(t,e,null,n)};zt.createRoot=function(t,e){if(!wg(t))throw Error(C(299));var n=!1,r="",i=h0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_g(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,ja(t.nodeType===8?t.parentNode:t),new vg(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=bI(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Mi(t)};zt.hydrate=function(t,e,n){if(!Ah(e))throw Error(C(200));return Rh(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!wg(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=h0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c0(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,ja(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sh(e)};zt.render=function(t,e,n){if(!Ah(e))throw Error(C(200));return Rh(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!Ah(t))throw Error(C(40));return t._reactRootContainer?(Mi(function(){Rh(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};zt.unstable_batchedUpdates=fg;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ah(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Rh(t,e,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";function d0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0)}catch(t){console.error(t)}}d0(),cI.exports=zt;var Xk=cI.exports,Dv=Xk;Df.createRoot=Dv.createRoot,Df.hydrateRoot=Dv.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vc(){return Vc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vc.apply(this,arguments)}var Tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Tr||(Tr={}));const Ov="popstate";function Zk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Rp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:f0(i)}return tx(e,n,null,t)}function Ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Eg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ex(){return Math.random().toString(36).substr(2,8)}function Vv(t,e){return{usr:t.state,key:t.key,idx:e}}function Rp(t,e,n,r){return n===void 0&&(n=null),Vc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ph(e):e,{state:n,key:e&&e.key||r||ex()})}function f0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ph(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function tx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Tr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Vc({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Tr.Pop;let v=c(),m=v==null?null:v-u;u=v,l&&l({action:a,location:y.location,delta:m})}function d(v,m){a=Tr.Push;let p=Rp(y.location,v,m);n&&n(p,v),u=c()+1;let _=Vv(p,u),T=y.createHref(p);try{o.pushState(_,"",T)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(T)}s&&l&&l({action:a,location:y.location,delta:1})}function f(v,m){a=Tr.Replace;let p=Rp(y.location,v,m);n&&n(p,v),u=c();let _=Vv(p,u),T=y.createHref(p);o.replaceState(_,"",T),s&&l&&l({action:a,location:y.location,delta:0})}function g(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof v=="string"?v:f0(v);return Ot(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ov,h),l=v,()=>{i.removeEventListener(Ov,h),l=null}},createHref(v){return e(i,v)},createURL:g,encodeLocation(v){let m=g(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:f,go(v){return o.go(v)}};return y}var Lv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Lv||(Lv={}));function nx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ph(e):e,i=g0(r.pathname||"/",n);if(i==null)return null;let s=p0(t);rx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=dx(s[a],mx(i));return o}function p0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ot(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=$s([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),p0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:cx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of m0(s.path))i(s,o,l)}),e}function m0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=m0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function rx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ix=/^:\w+$/,sx=3,ox=2,ax=1,lx=10,ux=-2,Mv=t=>t==="*";function cx(t,e){let n=t.split("/"),r=n.length;return n.some(Mv)&&(r+=ux),e&&(r+=ox),n.filter(i=>!Mv(i)).reduce((i,s)=>i+(ix.test(s)?sx:s===""?ax:lx),r)}function hx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=fx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:$s([i,c.pathname]),pathnameBase:_x($s([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=$s([i,c.pathnameBase]))}return s}function fx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=px(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:f}=c;if(d==="*"){let y=a[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[h];return f&&!g?u[d]=void 0:u[d]=gx(g||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function px(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Eg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function mx(t){try{return decodeURI(t)}catch(e){return Eg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function gx(t,e){try{return decodeURIComponent(t)}catch(n){return Eg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function g0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const $s=t=>t.join("/").replace(/\/\/+/g,"/"),_x=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function yx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _0=["post","put","patch","delete"];new Set(_0);const vx=["get",..._0];new Set(vx);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lc(){return Lc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lc.apply(this,arguments)}const wx=j.createContext(null),Ex=j.createContext(null),y0=j.createContext(null),Ch=j.createContext(null),kh=j.createContext({outlet:null,matches:[],isDataRoute:!1}),v0=j.createContext(null);function Ig(){return j.useContext(Ch)!=null}function Ix(){return Ig()||Ot(!1),j.useContext(Ch).location}function Tx(t,e){return Sx(t,e)}function Sx(t,e,n,r){Ig()||Ot(!1);let{navigator:i}=j.useContext(y0),{matches:s}=j.useContext(kh),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ix(),c;if(e){var h;let v=typeof e=="string"?Ph(e):e;l==="/"||(h=v.pathname)!=null&&h.startsWith(l)||Ot(!1),c=v}else c=u;let d=c.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",g=nx(t,{pathname:f}),y=kx(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:$s([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:$s([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&y?j.createElement(Ch.Provider,{value:{location:Lc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Tr.Pop}},y):y}function Ax(){let t=Dx(),e=yx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const Rx=j.createElement(Ax,null);class Px extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(kh.Provider,{value:this.props.routeContext},j.createElement(v0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cx(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(wx);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(kh.Provider,{value:e},r)}function kx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||Ot(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:f}=n,g=h.route.loader&&d[h.route.id]===void 0&&(!f||f[h.route.id]===void 0);if(h.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let f,g=!1,y=null,v=null;n&&(f=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||Rx,l&&(u<0&&d===0?(Ox("route-fallback",!1),g=!0,v=null):u===d&&(g=!0,v=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,d+1)),p=()=>{let _;return f?_=y:g?_=v:h.route.Component?_=j.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=c,j.createElement(Cx,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?j.createElement(Px,{location:n.location,revalidation:n.revalidation,component:y,error:f,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Pp=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pp||{});function xx(t){let e=j.useContext(Ex);return e||Ot(!1),e}function Nx(t){let e=j.useContext(kh);return e||Ot(!1),e}function bx(t){let e=Nx(),n=e.matches[e.matches.length-1];return n.route.id||Ot(!1),n.route.id}function Dx(){var t;let e=j.useContext(v0),n=xx(Pp.UseRouteError),r=bx(Pp.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}const Fv={};function Ox(t,e,n){!e&&!Fv[t]&&(Fv[t]=!0)}function ps(t){Ot(!1)}function Vx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Tr.Pop,navigator:s,static:o=!1,future:a}=t;Ig()&&Ot(!1);let l=e.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:l,navigator:s,static:o,future:Lc({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ph(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:g="default"}=r,y=j.useMemo(()=>{let v=g0(c,l);return v==null?null:{location:{pathname:v,search:h,hash:d,state:f,key:g},navigationType:i}},[l,c,h,d,f,g,i]);return y==null?null:j.createElement(y0.Provider,{value:u},j.createElement(Ch.Provider,{children:n,value:y}))}function Lx(t){let{children:e,location:n}=t;return Tx(Cp(e),n)}new Promise(()=>{});function Cp(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Cp(r.props.children,s));return}r.type!==ps&&Ot(!1),!r.props.index||!r.props.children||Ot(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Cp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Mx="startTransition",Uv=j1[Mx];function Fx(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=Zk({window:i,v5Compat:!0}));let o=s.current,[a,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=j.useCallback(h=>{u&&Uv?Uv(()=>l(h)):l(h)},[l,u]);return j.useLayoutEffect(()=>o.listen(c),[o,c]),j.createElement(Vx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var $v;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($v||($v={}));var Bv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Bv||(Bv={}));const Ux="/assets/landingDoodle-2bo-Q0ip.jpeg",Tg="/assets/mobilityMate-NoBg-lg-Em_qO2jW.png",$x=()=>I.jsx("div",{className:"w-full h-full bg-black flex justify-center items-center",children:I.jsxs("div",{className:"w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20",children:[I.jsx("div",{className:"w-1/2 h-full flex flex-col justify-center items-center",children:I.jsx("img",{src:Ux,alt:"Welcome",className:"object-cover h-[110%] w-[100%] mt-[-3em]"})}),I.jsx("div",{className:"w-px mt-40 mb-40 bg-gray-200"}),I.jsxs("div",{className:"w-2/5 p-12 rounded-xl",children:[I.jsx("header",{className:"mb-12",children:I.jsxs("div",{className:"flex justify-center items-center",children:[I.jsx("img",{src:Tg,alt:"MobilityMate Logo",className:"h-20 mr-3"}),I.jsx("span",{className:"text-3xl font-bold text-gray-700",children:"MobilityMate"})]})}),I.jsxs("main",{children:[I.jsx("h1",{className:"text-4xl font-bold mb-6 text-gray-800",children:"Enhancing Your Mobility Journey"}),I.jsx("p",{className:"text-gray-700 mb-8",children:"Join us in revolutionizing the way practitioners and patients interact. Experience seamless management of exercise routines, patient records, and progress tracking."}),I.jsxs("div",{className:"flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0",children:[I.jsx("a",{href:"/practitioner/signUp",className:"bg-gray-800 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 flex-grow text-center",children:"Sign Up as Practitioner"}),I.jsx("a",{href:"/patient/signUp",className:"bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 flex-grow text-center",children:"Join as a Patient"})]})]}),I.jsx("footer",{className:"text-center py-4 mt-12 text-gray-800",children:I.jsxs("p",{children:["© ",new Date().getFullYear()," MobilityMate. All rights reserved."]})})]})]})}),Bx=()=>I.jsxs("div",{className:"navbar bg-base-100",children:[I.jsx("div",{className:"flex-1",children:I.jsx("a",{className:"btn btn-ghost text-xl",children:"MobilityMate"})}),I.jsxs("div",{className:"flex-none",children:[I.jsx("div",{className:"dropdown dropdown-end",children:I.jsx("div",{tabIndex:0,className:"mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow",children:I.jsxs("div",{className:"card-body",children:[I.jsx("span",{className:"font-bold text-lg",children:"8 Items"}),I.jsx("span",{className:"text-info",children:"Subtotal: $999"}),I.jsx("div",{className:"card-actions",children:I.jsx("button",{className:"btn btn-primary btn-block",children:"View cart"})})]})})}),I.jsxs("div",{className:"dropdown dropdown-end",children:[I.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle avatar",children:I.jsx("div",{className:"w-10 rounded-full",children:I.jsx("img",{alt:"Tailwind CSS Navbar component",src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"})})}),I.jsxs("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[I.jsx("li",{children:I.jsxs("a",{className:"justify-between",children:["Profile",I.jsx("span",{className:"badge",children:"New"})]})}),I.jsx("li",{children:I.jsx("a",{children:"Settings"})}),I.jsx("li",{children:I.jsx("a",{children:"Logout"})})]})]})]})]});function w0(t,e){return function(){return t.apply(e,arguments)}}const{toString:jx}=Object.prototype,{getPrototypeOf:Sg}=Object,xh=(t=>e=>{const n=jx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Mn=t=>(t=t.toLowerCase(),e=>xh(e)===t),Nh=t=>e=>typeof e===t,{isArray:Eo}=Array,Ja=Nh("undefined");function zx(t){return t!==null&&!Ja(t)&&t.constructor!==null&&!Ja(t.constructor)&&Jt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const E0=Mn("ArrayBuffer");function qx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&E0(t.buffer),e}const Wx=Nh("string"),Jt=Nh("function"),I0=Nh("number"),bh=t=>t!==null&&typeof t=="object",Gx=t=>t===!0||t===!1,Yu=t=>{if(xh(t)!=="object")return!1;const e=Sg(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Kx=Mn("Date"),Hx=Mn("File"),Qx=Mn("Blob"),Yx=Mn("FileList"),Jx=t=>bh(t)&&Jt(t.pipe),Xx=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Jt(t.append)&&((e=xh(t))==="formdata"||e==="object"&&Jt(t.toString)&&t.toString()==="[object FormData]"))},Zx=Mn("URLSearchParams"),eN=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ol(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Eo(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function T0(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const S0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,A0=t=>!Ja(t)&&t!==S0;function kp(){const{caseless:t}=A0(this)&&this||{},e={},n=(r,i)=>{const s=t&&T0(e,i)||i;Yu(e[s])&&Yu(r)?e[s]=kp(e[s],r):Yu(r)?e[s]=kp({},r):Eo(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ol(arguments[r],n);return e}const tN=(t,e,n,{allOwnKeys:r}={})=>(Ol(e,(i,s)=>{n&&Jt(i)?t[s]=w0(i,n):t[s]=i},{allOwnKeys:r}),t),nN=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),rN=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},iN=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Sg(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},sN=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},oN=t=>{if(!t)return null;if(Eo(t))return t;let e=t.length;if(!I0(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},aN=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Sg(Uint8Array)),lN=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},uN=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},cN=Mn("HTMLFormElement"),hN=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),jv=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),dN=Mn("RegExp"),R0=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ol(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},fN=t=>{R0(t,(e,n)=>{if(Jt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Jt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},pN=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Eo(t)?r(t):r(String(t).split(e)),n},mN=()=>{},gN=(t,e)=>(t=+t,Number.isFinite(t)?t:e),sf="abcdefghijklmnopqrstuvwxyz",zv="0123456789",P0={DIGIT:zv,ALPHA:sf,ALPHA_DIGIT:sf+sf.toUpperCase()+zv},_N=(t=16,e=P0.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function yN(t){return!!(t&&Jt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const vN=t=>{const e=new Array(10),n=(r,i)=>{if(bh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Eo(r)?[]:{};return Ol(r,(o,a)=>{const l=n(o,i+1);!Ja(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},wN=Mn("AsyncFunction"),EN=t=>t&&(bh(t)||Jt(t))&&Jt(t.then)&&Jt(t.catch),S={isArray:Eo,isArrayBuffer:E0,isBuffer:zx,isFormData:Xx,isArrayBufferView:qx,isString:Wx,isNumber:I0,isBoolean:Gx,isObject:bh,isPlainObject:Yu,isUndefined:Ja,isDate:Kx,isFile:Hx,isBlob:Qx,isRegExp:dN,isFunction:Jt,isStream:Jx,isURLSearchParams:Zx,isTypedArray:aN,isFileList:Yx,forEach:Ol,merge:kp,extend:tN,trim:eN,stripBOM:nN,inherits:rN,toFlatObject:iN,kindOf:xh,kindOfTest:Mn,endsWith:sN,toArray:oN,forEachEntry:lN,matchAll:uN,isHTMLForm:cN,hasOwnProperty:jv,hasOwnProp:jv,reduceDescriptors:R0,freezeMethods:fN,toObjectSet:pN,toCamelCase:hN,noop:mN,toFiniteNumber:gN,findKey:T0,global:S0,isContextDefined:A0,ALPHABET:P0,generateString:_N,isSpecCompliantForm:yN,toJSONObject:vN,isAsyncFn:wN,isThenable:EN};function Z(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const C0=Z.prototype,k0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{k0[t]={value:t}});Object.defineProperties(Z,k0);Object.defineProperty(C0,"isAxiosError",{value:!0});Z.from=(t,e,n,r,i,s)=>{const o=Object.create(C0);return S.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Z.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const IN=null;function xp(t){return S.isPlainObject(t)||S.isArray(t)}function x0(t){return S.endsWith(t,"[]")?t.slice(0,-2):t}function qv(t,e,n){return t?t.concat(e).map(function(i,s){return i=x0(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function TN(t){return S.isArray(t)&&!t.some(xp)}const SN=S.toFlatObject(S,{},null,function(e){return/^is[A-Z]/.test(e)});function Dh(t,e,n){if(!S.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,v){return!S.isUndefined(v[y])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(e);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(S.isDate(g))return g.toISOString();if(!l&&S.isBlob(g))throw new Z("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(g)||S.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,y,v){let m=g;if(g&&!v&&typeof g=="object"){if(S.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(S.isArray(g)&&TN(g)||(S.isFileList(g)||S.endsWith(y,"[]"))&&(m=S.toArray(g)))return y=x0(y),m.forEach(function(_,T){!(S.isUndefined(_)||_===null)&&e.append(o===!0?qv([y],T,s):o===null?y:y+"[]",u(_))}),!1}return xp(g)?!0:(e.append(qv(v,y,s),u(g)),!1)}const h=[],d=Object.assign(SN,{defaultVisitor:c,convertValue:u,isVisitable:xp});function f(g,y){if(!S.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(g),S.forEach(g,function(m,p){(!(S.isUndefined(m)||m===null)&&i.call(e,m,S.isString(p)?p.trim():p,y,d))===!0&&f(m,y?y.concat(p):[p])}),h.pop()}}if(!S.isObject(t))throw new TypeError("data must be an object");return f(t),e}function Wv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ag(t,e){this._pairs=[],t&&Dh(t,this,e)}const N0=Ag.prototype;N0.append=function(e,n){this._pairs.push([e,n])};N0.toString=function(e){const n=e?function(r){return e.call(this,r,Wv)}:Wv;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function AN(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function b0(t,e,n){if(!e)return t;const r=n&&n.encode||AN,i=n&&n.serialize;let s;if(i?s=i(e,n):s=S.isURLSearchParams(e)?e.toString():new Ag(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Gv{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){S.forEach(this.handlers,function(r){r!==null&&e(r)})}}const D0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},RN=typeof URLSearchParams<"u"?URLSearchParams:Ag,PN=typeof FormData<"u"?FormData:null,CN=typeof Blob<"u"?Blob:null,kN={isBrowser:!0,classes:{URLSearchParams:RN,FormData:PN,Blob:CN},protocols:["http","https","file","blob","url","data"]},O0=typeof window<"u"&&typeof document<"u",xN=(t=>O0&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),NN=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:O0,hasStandardBrowserEnv:xN,hasStandardBrowserWebWorkerEnv:NN},Symbol.toStringTag,{value:"Module"})),In={...bN,...kN};function DN(t,e){return Dh(t,new In.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return In.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function ON(t){return S.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function VN(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function V0(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&S.isArray(i)?i.length:o,l?(S.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!S.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&S.isArray(i[o])&&(i[o]=VN(i[o])),!a)}if(S.isFormData(t)&&S.isFunction(t.entries)){const n={};return S.forEachEntry(t,(r,i)=>{e(ON(r),i,n,0)}),n}return null}function LN(t,e,n){if(S.isString(t))try{return(e||JSON.parse)(t),S.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Rg={transitional:D0,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=S.isObject(e);if(s&&S.isHTMLForm(e)&&(e=new FormData(e)),S.isFormData(e))return i&&i?JSON.stringify(V0(e)):e;if(S.isArrayBuffer(e)||S.isBuffer(e)||S.isStream(e)||S.isFile(e)||S.isBlob(e))return e;if(S.isArrayBufferView(e))return e.buffer;if(S.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return DN(e,this.formSerializer).toString();if((a=S.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Dh(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),LN(e)):e}],transformResponse:[function(e){const n=this.transitional||Rg.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&S.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Z.from(a,Z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:In.classes.FormData,Blob:In.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],t=>{Rg.headers[t]={}});const Pg=Rg,MN=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),FN=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&MN[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Kv=Symbol("internals");function Ko(t){return t&&String(t).trim().toLowerCase()}function Ju(t){return t===!1||t==null?t:S.isArray(t)?t.map(Ju):String(t)}function UN(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const $N=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function of(t,e,n,r,i){if(S.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!S.isString(e)){if(S.isString(r))return e.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(e)}}function BN(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function jN(t,e){const n=S.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Oh{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=Ko(l);if(!c)throw new Error("header name must be a non-empty string");const h=S.findKey(i,c);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||l]=Ju(a))}const o=(a,l)=>S.forEach(a,(u,c)=>s(u,c,l));return S.isPlainObject(e)||e instanceof this.constructor?o(e,n):S.isString(e)&&(e=e.trim())&&!$N(e)?o(FN(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Ko(e),e){const r=S.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return UN(i);if(S.isFunction(n))return n.call(this,i,r);if(S.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ko(e),e){const r=S.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||of(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Ko(o),o){const a=S.findKey(r,o);a&&(!n||of(r,r[a],a,n))&&(delete r[a],i=!0)}}return S.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||of(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return S.forEach(this,(i,s)=>{const o=S.findKey(r,s);if(o){n[o]=Ju(i),delete n[s];return}const a=e?BN(s):String(s).trim();a!==s&&delete n[s],n[a]=Ju(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return S.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Kv]=this[Kv]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Ko(o);r[a]||(jN(i,o),r[a]=!0)}return S.isArray(e)?e.forEach(s):s(e),this}}Oh.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(Oh.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});S.freezeMethods(Oh);const Kn=Oh;function af(t,e){const n=this||Pg,r=e||n,i=Kn.from(r.headers);let s=r.data;return S.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function L0(t){return!!(t&&t.__CANCEL__)}function Vl(t,e,n){Z.call(this,t??"canceled",Z.ERR_CANCELED,e,n),this.name="CanceledError"}S.inherits(Vl,Z,{__CANCEL__:!0});function zN(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Z("Request failed with status code "+n.status,[Z.ERR_BAD_REQUEST,Z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const qN=In.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];S.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),S.isString(r)&&o.push("path="+r),S.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function WN(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function GN(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function M0(t,e){return t&&!WN(e)?GN(t,e):e}const KN=In.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=S.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function HN(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function QN(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const f=c&&u-c;return f?Math.round(d*1e3/f):void 0}}function Hv(t,e){let n=0;const r=QN(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const YN=typeof XMLHttpRequest<"u",JN=YN&&function(t){return new Promise(function(n,r){let i=t.data;const s=Kn.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function u(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let c;if(S.isFormData(i)){if(In.hasStandardBrowserEnv||In.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((c=s.getContentType())!==!1){const[y,...v]=c?c.split(";").map(m=>m.trim()).filter(Boolean):[];s.setContentType([y||"multipart/form-data",...v].join("; "))}}let h=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",v=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+v))}const d=M0(t.baseURL,t.url);h.open(t.method.toUpperCase(),b0(d,t.params,t.paramsSerializer),!0),h.timeout=t.timeout;function f(){if(!h)return;const y=Kn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),m={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:y,config:t,request:h};zN(function(_){n(_),u()},function(_){r(_),u()},m),h=null}if("onloadend"in h?h.onloadend=f:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(f)},h.onabort=function(){h&&(r(new Z("Request aborted",Z.ECONNABORTED,t,h)),h=null)},h.onerror=function(){r(new Z("Network Error",Z.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let v=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const m=t.transitional||D0;t.timeoutErrorMessage&&(v=t.timeoutErrorMessage),r(new Z(v,m.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,t,h)),h=null},In.hasStandardBrowserEnv&&(a&&S.isFunction(a)&&(a=a(t)),a||a!==!1&&KN(d))){const y=t.xsrfHeaderName&&t.xsrfCookieName&&qN.read(t.xsrfCookieName);y&&s.set(t.xsrfHeaderName,y)}i===void 0&&s.setContentType(null),"setRequestHeader"in h&&S.forEach(s.toJSON(),function(v,m){h.setRequestHeader(m,v)}),S.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),o&&o!=="json"&&(h.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&h.addEventListener("progress",Hv(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Hv(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=y=>{h&&(r(!y||y.type?new Vl(null,t,h):y),h.abort(),h=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const g=HN(d);if(g&&In.protocols.indexOf(g)===-1){r(new Z("Unsupported protocol "+g+":",Z.ERR_BAD_REQUEST,t));return}h.send(i||null)})},Np={http:IN,xhr:JN};S.forEach(Np,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Qv=t=>`- ${t}`,XN=t=>S.isFunction(t)||t===null||t===!1,F0={getAdapter:t=>{t=S.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!XN(n)&&(r=Np[(o=String(n)).toLowerCase()],r===void 0))throw new Z(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Qv).join(`
`):" "+Qv(s[0]):"as no adapter specified";throw new Z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Np};function lf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Vl(null,t)}function Yv(t){return lf(t),t.headers=Kn.from(t.headers),t.data=af.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),F0.getAdapter(t.adapter||Pg.adapter)(t).then(function(r){return lf(t),r.data=af.call(t,t.transformResponse,r),r.headers=Kn.from(r.headers),r},function(r){return L0(r)||(lf(t),r&&r.response&&(r.response.data=af.call(t,t.transformResponse,r.response),r.response.headers=Kn.from(r.response.headers))),Promise.reject(r)})}const Jv=t=>t instanceof Kn?t.toJSON():t;function to(t,e){e=e||{};const n={};function r(u,c,h){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge.call({caseless:h},u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function i(u,c,h){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function s(u,c){if(!S.isUndefined(c))return r(void 0,c)}function o(u,c){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,h){if(h in e)return r(u,c);if(h in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(Jv(u),Jv(c),!0)};return S.forEach(Object.keys(Object.assign({},t,e)),function(c){const h=l[c]||i,d=h(t[c],e[c],c);S.isUndefined(d)&&h!==a||(n[c]=d)}),n}const U0="1.6.5",Cg={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Cg[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Xv={};Cg.transitional=function(e,n,r){function i(s,o){return"[Axios v"+U0+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new Z(i(o," has been removed"+(n?" in "+n:"")),Z.ERR_DEPRECATED);return n&&!Xv[o]&&(Xv[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function ZN(t,e,n){if(typeof t!="object")throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Z("option "+s+" must be "+l,Z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Z("Unknown option "+s,Z.ERR_BAD_OPTION)}}const bp={assertOptions:ZN,validators:Cg},cr=bp.validators;class Mc{constructor(e){this.defaults=e,this.interceptors={request:new Gv,response:new Gv}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=to(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&bp.assertOptions(r,{silentJSONParsing:cr.transitional(cr.boolean),forcedJSONParsing:cr.transitional(cr.boolean),clarifyTimeoutError:cr.transitional(cr.boolean)},!1),i!=null&&(S.isFunction(i)?n.paramsSerializer={serialize:i}:bp.assertOptions(i,{encode:cr.function,serialize:cr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&S.merge(s.common,s[n.method]);s&&S.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=Kn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,h=0,d;if(!l){const g=[Yv.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),d=g.length,c=Promise.resolve(n);h<d;)c=c.then(g[h++],g[h++]);return c}d=a.length;let f=n;for(h=0;h<d;){const g=a[h++],y=a[h++];try{f=g(f)}catch(v){y.call(this,v);break}}try{c=Yv.call(this,f)}catch(g){return Promise.reject(g)}for(h=0,d=u.length;h<d;)c=c.then(u[h++],u[h++]);return c}getUri(e){e=to(this.defaults,e);const n=M0(e.baseURL,e.url);return b0(n,e.params,e.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(e){Mc.prototype[e]=function(n,r){return this.request(to(r||{},{method:e,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(to(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Mc.prototype[e]=n(),Mc.prototype[e+"Form"]=n(!0)});const Xu=Mc;class kg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Vl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new kg(function(i){e=i}),cancel:e}}}const eb=kg;function tb(t){return function(n){return t.apply(null,n)}}function nb(t){return S.isObject(t)&&t.isAxiosError===!0}const Dp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dp).forEach(([t,e])=>{Dp[e]=t});const rb=Dp;function $0(t){const e=new Xu(t),n=w0(Xu.prototype.request,e);return S.extend(n,Xu.prototype,e,{allOwnKeys:!0}),S.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return $0(to(t,i))},n}const Oe=$0(Pg);Oe.Axios=Xu;Oe.CanceledError=Vl;Oe.CancelToken=eb;Oe.isCancel=L0;Oe.VERSION=U0;Oe.toFormData=Dh;Oe.AxiosError=Z;Oe.Cancel=Oe.CanceledError;Oe.all=function(e){return Promise.all(e)};Oe.spread=tb;Oe.isAxiosError=nb;Oe.mergeConfig=to;Oe.AxiosHeaders=Kn;Oe.formToJSON=t=>V0(S.isHTMLForm(t)?new FormData(t):t);Oe.getAdapter=F0.getAdapter;Oe.HttpStatusCode=rb;Oe.default=Oe;var B0={};const uf=B0.REACT_APP_FLASK_API_URL||"http://localhost:8080";console.log(B0.REACT_APP_FLASK_API_URL);const ib=()=>{const[t,e]=j.useState(!1),[n,r]=j.useState(null),[i,s]=j.useState(null),[o,a]=j.useState(!1),l=async()=>{const c=new URLSearchParams;if(c.set("patient","demo"),c.set("practitioner","demo"),!o){console.log("starting conversation"),console.log(uf);const g=await Oe.get(`${uf}/conversation/start?${c.toString()}`);a(!0),console.log(g.data.reply)}const h=await navigator.mediaDevices.getUserMedia({audio:!0}),d=new MediaRecorder(h),f=[];d.ondataavailable=g=>{g.data.size>0&&f.push(g.data)},d.onstop=async()=>{const g=new Blob(f,{type:"audio/wav"}),y=new FormData;y.append("audioFile",g,"recorded_audio.wav");const v=await Oe.post(`${uf}/conversation/send_message?${c.toString()}`,y);console.log(v.data.reply)},d.start(),r(h),s(d),e(!0)},u=()=>{i&&n&&(i.stop(),n.getTracks().forEach(c=>c.stop())),e(!1)};return I.jsxs("div",{children:[t?I.jsx("p",{children:"Recording..."}):I.jsx("p",{children:"Click Start Recording to begin recording."}),I.jsx("button",{onClick:t?u:l,children:t?"Stop Recording":"Start Recording"})]})},sb=()=>I.jsxs("div",{className:"min-h-screen bg-blue-100",children:[I.jsx(Bx,{}),I.jsxs("main",{className:"p-6",children:[I.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Welcome to Your Home Page"}),I.jsx("p",{className:"text-gray-700",children:"Here you can find your daily routines, track your progress, and manage your health journey."}),I.jsx(ib,{})]})]}),ob=()=>I.jsxs("div",{className:"min-h-screen bg-green-100",children:[I.jsx("header",{className:"bg-green-600 text-white text-xl py-4 px-6",children:"Practitioner Dashboard"}),I.jsxs("main",{className:"p-6",children:[I.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Welcome, Practitioner"}),I.jsx("p",{className:"text-gray-700",children:"Access patient records, set exercise routines, and view progress reports."})]})]}),j0="/assets/signupPractitioner-6pnr10r4.jpeg";var Zv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ab=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},q0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ab(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new lb;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ub=function(t){const e=z0(t);return q0.encodeByteArray(e,!0)},Fc=function(t){return ub(t).replace(/\./g,"")},W0=function(t){try{return q0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Uc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cb(n)||(t[n]=Uc(t[n],e[n]));return t}function cb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=()=>hb().__FIREBASE_DEFAULTS__,fb=()=>{if(typeof process>"u"||typeof Zv>"u")return;const t=Zv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W0(t[1]);return e&&JSON.parse(e)},xg=()=>{try{return db()||fb()||pb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},G0=()=>{var t;return(t=xg())===null||t===void 0?void 0:t.config},mb=t=>{var e;return(e=xg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fc(JSON.stringify(n)),Fc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Ng(){var t;const e=(t=xg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vb(){return typeof self=="object"&&self.self===self}function K0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H0(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wb(){return!Ng()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xa(){try{return typeof indexedDB=="object"}catch{return!1}}function Eb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="FirebaseError";class yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ib,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Tb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yt(i,a,r)}}function Tb(t,e){return t.replace(Sb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ab(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Op(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tw(s)&&tw(o)){if(!Op(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function la(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Q0(t,e){const n=new Rb(t,e);return n.subscribe.bind(n)}class Rb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cf),i.error===void 0&&(i.error=cf),i.complete===void 0&&(i.complete=cf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xb(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kb(t){return t===di?void 0:t}function xb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=[];var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Y0={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},bb=Q.INFO,Db={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Ob=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Db[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=bb,this._logHandler=Ob,this._userLogHandler=null,Dg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function Vb(t){Dg.forEach(e=>{e.setLogLevel(t)})}function Lb(t,e){for(const n of Dg){let r=null;e&&e.level&&(r=Y0[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Q[s].toLowerCase(),message:a,args:o,type:i.name})}}}const Mb=(t,e)=>e.some(n=>t instanceof n);let nw,rw;function Fb(){return nw||(nw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ub(){return rw||(rw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J0=new WeakMap,Vp=new WeakMap,X0=new WeakMap,hf=new WeakMap,Og=new WeakMap;function $b(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&J0.set(n,t)}).catch(()=>{}),Og.set(e,t),e}function Bb(t){if(Vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vp.set(t,e)}let Lp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jb(t){Lp=t(Lp)}function zb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(df(this),e,...n);return X0.set(r,e.sort?e.sort():[e]),Or(r)}:Ub().includes(t)?function(...e){return t.apply(df(this),e),Or(J0.get(this))}:function(...e){return Or(t.apply(df(this),e))}}function qb(t){return typeof t=="function"?zb(t):(t instanceof IDBTransaction&&Bb(t),Mb(t,Fb())?new Proxy(t,Lp):t)}function Or(t){if(t instanceof IDBRequest)return $b(t);if(hf.has(t))return hf.get(t);const e=qb(t);return e!==t&&(hf.set(t,e),Og.set(e,t)),e}const df=t=>Og.get(t);function Wb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Or(o.result),l.oldVersion,l.newVersion,Or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Gb=["get","getKey","getAll","getAllKeys","count"],Kb=["put","add","delete","clear"],ff=new Map;function iw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ff.get(e))return ff.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Kb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ff.set(e,s),s}jb(t=>({...t,get:(e,n,r)=>iw(e,n)||t.get(e,n,r),has:(e,n)=>!!iw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mp="@firebase/app",sw="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Vh("@firebase/app"),Yb="@firebase/app-compat",Jb="@firebase/analytics-compat",Xb="@firebase/analytics",Zb="@firebase/app-check-compat",eD="@firebase/app-check",tD="@firebase/auth",nD="@firebase/auth-compat",rD="@firebase/database",iD="@firebase/database-compat",sD="@firebase/functions",oD="@firebase/functions-compat",aD="@firebase/installations",lD="@firebase/installations-compat",uD="@firebase/messaging",cD="@firebase/messaging-compat",hD="@firebase/performance",dD="@firebase/performance-compat",fD="@firebase/remote-config",pD="@firebase/remote-config-compat",mD="@firebase/storage",gD="@firebase/storage-compat",_D="@firebase/firestore",yD="@firebase/firestore-compat",vD="firebase",wD="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]",ED={[Mp]:"fire-core",[Yb]:"fire-core-compat",[Xb]:"fire-analytics",[Jb]:"fire-analytics-compat",[eD]:"fire-app-check",[Zb]:"fire-app-check-compat",[tD]:"fire-auth",[nD]:"fire-auth-compat",[rD]:"fire-rtdb",[iD]:"fire-rtdb-compat",[sD]:"fire-fn",[oD]:"fire-fn-compat",[aD]:"fire-iid",[lD]:"fire-iid-compat",[uD]:"fire-fcm",[cD]:"fire-fcm-compat",[hD]:"fire-perf",[dD]:"fire-perf-compat",[fD]:"fire-rc",[pD]:"fire-rc-compat",[mD]:"fire-gcs",[gD]:"fire-gcs-compat",[_D]:"fire-fst",[yD]:"fire-fst-compat","fire-js":"fire-js",[vD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Map,Za=new Map;function $c(t,e){try{t.container.addComponent(e)}catch(n){Fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Z0(t,e){t.container.addOrOverwriteComponent(e)}function $r(t){const e=t.name;if(Za.has(e))return Fi.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,t);for(const n of Ur.values())$c(n,t);return!0}function eS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ID(t,e,n=Fr){eS(t,e).clearInstance(n)}function TD(){Za.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new Zi("app","Firebase",SD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AD=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=wD;function Vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Hn.create("bad-app-name",{appName:String(i)});if(n||(n=G0()),!n)throw Hn.create("no-options");const s=Ur.get(i);if(s){if(Op(n,s.options)&&Op(r,s.config))return s;throw Hn.create("duplicate-app",{appName:i})}const o=new Nb(i);for(const l of Za.values())o.addComponent(l);const a=new AD(n,r,o);return Ur.set(i,a),a}function RD(t=Fr){const e=Ur.get(t);if(!e&&t===Fr&&G0())return Vg();if(!e)throw Hn.create("no-app",{appName:t});return e}function PD(){return Array.from(Ur.values())}async function tS(t){const e=t.name;Ur.has(e)&&(Ur.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function xn(t,e,n){var r;let i=(r=ED[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fi.warn(a.join(" "));return}$r(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function nS(t,e){if(t!==null&&typeof t!="function")throw Hn.create("invalid-log-argument");Lb(t,e)}function rS(t){Vb(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD="firebase-heartbeat-database",kD=1,el="firebase-heartbeat-store";let pf=null;function iS(){return pf||(pf=Wb(CD,kD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(el)}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),pf}async function xD(t){try{return await(await iS()).transaction(el).objectStore(el).get(sS(t))}catch(e){if(e instanceof yt)Fi.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fi.warn(n.message)}}}async function ow(t,e){try{const r=(await iS()).transaction(el,"readwrite");await r.objectStore(el).put(e,sS(t)),await r.done}catch(n){if(n instanceof yt)Fi.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fi.warn(r.message)}}}function sS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=1024,bD=30*24*60*60*1e3;class DD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=aw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=aw(),{heartbeatsToSend:r,unsentEntries:i}=OD(this._heartbeatsCache.heartbeats),s=Fc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function aw(){return new Date().toISOString().substring(0,10)}function OD(t,e=ND){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xa()?Eb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ow(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ow(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lw(t){return Fc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t){$r(new Dn("platform-logger",e=>new Hb(e),"PRIVATE")),$r(new Dn("heartbeat",e=>new DD(e),"PRIVATE")),xn(Mp,sw,t),xn(Mp,sw,"esm2017"),xn("fire-js","")}LD("");const MD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:yt,SDK_VERSION:Zr,_DEFAULT_ENTRY_NAME:Fr,_addComponent:$c,_addOrOverwriteComponent:Z0,_apps:Ur,_clearComponents:TD,_components:Za,_getProvider:eS,_registerComponent:$r,_removeServiceInstance:ID,deleteApp:tS,getApp:RD,getApps:PD,initializeApp:Vg,onLog:nS,registerVersion:xn,setLogLevel:rS},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this._delegate=e,this.firebase=n,$c(e,new Dn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),tS(this._delegate)))}_getService(e,n=Fr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Fr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){$c(this._delegate,e)}_addOrOverwriteComponent(e){Z0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},uw=new Zi("app-compat","Firebase",UD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:xn,setLogLevel:rS,onLog:nS,apps:null,SDK_VERSION:Zr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:MD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Fr,!ew(e,u))throw uw.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=Vg(u,c);if(ew(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if($r(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw uw.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&Uc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){const t=$D(FD);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:oS,extendNamespace:e,createSubscribe:Q0,ErrorFactory:Zi,deepExtend:Uc});function e(n){Uc(t,n)}return t}const BD=oS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=new Vh("@firebase/app-compat"),jD="@firebase/app-compat",zD="0.2.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t){xn(jD,zD,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(vb()&&self.firebase!==void 0){cw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&cw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Nn=BD;qD();var WD="firebase",GD="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn.registerVersion(WD,GD,"app-compat");var KD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Lg=Lg||{},z=KD||self;function Lh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ll(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HD(t){return Object.prototype.hasOwnProperty.call(t,mf)&&t[mf]||(t[mf]=++QD)}var mf="closure_uid_"+(1e9*Math.random()>>>0),QD=0;function YD(t,e,n){return t.call.apply(t.bind,arguments)}function JD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=YD:ct=JD,ct.apply(null,arguments)}function Pu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ei(){this.s=this.s,this.o=this.o}var XD=0;ei.prototype.s=!1;ei.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),XD!=0)&&HD(this)};ei.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const aS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Mg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var ZD=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};z.addEventListener("test",n,e),z.removeEventListener("test",n,e)}catch{}return t}();function tl(t){return/^[\s\xa0]*$/.test(t)}function Mh(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function _n(t){return Mh().indexOf(t)!=-1}function Fg(t){return Fg[" "](t),t}Fg[" "]=function(){};function eO(t,e){var n=GO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var tO=_n("Opera"),no=_n("Trident")||_n("MSIE"),lS=_n("Edge"),Fp=lS||no,uS=_n("Gecko")&&!(Mh().toLowerCase().indexOf("webkit")!=-1&&!_n("Edge"))&&!(_n("Trident")||_n("MSIE"))&&!_n("Edge"),nO=Mh().toLowerCase().indexOf("webkit")!=-1&&!_n("Edge");function cS(){var t=z.document;return t?t.documentMode:void 0}var Up;e:{var gf="",_f=function(){var t=Mh();if(uS)return/rv:([^\);]+)(\)|;)/.exec(t);if(lS)return/Edge\/([\d\.]+)/.exec(t);if(no)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nO)return/WebKit\/(\S+)/.exec(t);if(tO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_f&&(gf=_f?_f[1]:""),no){var yf=cS();if(yf!=null&&yf>parseFloat(gf)){Up=String(yf);break e}}Up=gf}var $p;if(z.document&&no){var dw=cS();$p=dw||parseInt(Up,10)||void 0}else $p=void 0;var rO=$p;function nl(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uS){e:{try{Fg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nl.$.h.call(this)}}He(nl,ht);var iO={2:"touch",3:"pen",4:"mouse"};nl.prototype.h=function(){nl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ml="closure_listenable_"+(1e6*Math.random()|0),sO=0;function oO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++sO,this.fa=this.ia=!1}function Fh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ug(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function aO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function hS(t){const e={};for(const n in t)e[n]=t[n];return e}const fw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fw.length;s++)n=fw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Uh(t){this.src=t,this.g={},this.h=0}Uh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=jp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new oO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Bp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=aS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Fh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var $g="closure_lm_"+(1e6*Math.random()|0),vf={};function fS(t,e,n,r,i){if(r&&r.once)return mS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)fS(t,e[s],n,r,i);return null}return n=zg(n),t&&t[Ml]?t.O(e,n,Ll(r)?!!r.capture:!!r,i):pS(t,e,n,!1,r,i)}function pS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ll(i)?!!i.capture:!!i,a=jg(t);if(a||(t[$g]=a=new Uh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=lO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ZD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_S(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lO(){function t(n){return e.call(t.src,t.listener,n)}const e=uO;return t}function mS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)mS(t,e[s],n,r,i);return null}return n=zg(n),t&&t[Ml]?t.P(e,n,Ll(r)?!!r.capture:!!r,i):pS(t,e,n,!0,r,i)}function gS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)gS(t,e[s],n,r,i);else r=Ll(r)?!!r.capture:!!r,n=zg(n),t&&t[Ml]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=jp(s,n,r,i),-1<n&&(Fh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=jg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jp(e,n,r,i)),(n=-1<t?e[t]:null)&&Bg(n))}function Bg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ml])Bp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_S(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jg(e))?(Bp(n,t),n.h==0&&(n.src=null,e[$g]=null)):Fh(t)}}}function _S(t){return t in vf?vf[t]:vf[t]="on"+t}function uO(t,e){if(t.fa)t=!0;else{e=new nl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bg(t),t=n.call(r,e)}return t}function jg(t){return t=t[$g],t instanceof Uh?t:null}var wf="__closure_events_fn_"+(1e9*Math.random()>>>0);function zg(t){return typeof t=="function"?t:(t[wf]||(t[wf]=function(e){return t.handleEvent(e)}),t[wf])}function Ke(){ei.call(this),this.i=new Uh(this),this.S=this,this.J=null}He(Ke,ei);Ke.prototype[Ml]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){gS(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),dS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Cu(o,r,!0,e)&&i}if(o=e.g=t,i=Cu(o,r,!0,e)&&i,i=Cu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Cu(o,r,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fh(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Cu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var qg=z.JSON.stringify;class cO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hO(){var t=Wg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dO{constructor(){this.h=this.g=null}add(e,n){const r=yS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yS=new cO(()=>new fO,t=>t.reset());class fO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function mO(t){z.setTimeout(()=>{throw t},0)}let rl,il=!1,Wg=new dO,vS=()=>{const t=z.Promise.resolve(void 0);rl=()=>{t.then(gO)}};var gO=()=>{for(var t;t=hO();){try{t.h.call(t.g)}catch(n){mO(n)}var e=yS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}il=!1};function $h(t,e){Ke.call(this),this.h=t||1,this.g=e||z,this.j=ct(this.qb,this),this.l=Date.now()}He($h,Ke);O=$h.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(Gg(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){$h.$.N.call(this),Gg(this),delete this.g};function Kg(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function wS(t){t.g=Kg(()=>{t.g=null,t.i&&(t.i=!1,wS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _O extends ei{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wS(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sl(t){ei.call(this),this.h=t,this.g={}}He(sl,ei);var pw=[];function ES(t,e,n,r){Array.isArray(n)||(n&&(pw[0]=n.toString()),n=pw);for(var i=0;i<n.length;i++){var s=fS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function IS(t){Ug(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bg(e)},t),t.g={}}sl.prototype.N=function(){sl.$.N.call(this),IS(this)};sl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bh(){this.g=!0}Bh.prototype.Ea=function(){this.g=!1};function yO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function vO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ds(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+EO(t,n)+(r?" "+r:"")})}function wO(t,e){t.info(function(){return"TIMEOUT: "+e})}Bh.prototype.info=function(){};function EO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return qg(n)}catch{return e}}var es={},mw=null;function jh(){return mw=mw||new Ke}es.Ta="serverreachability";function TS(t){ht.call(this,es.Ta,t)}He(TS,ht);function ol(t){const e=jh();nt(e,new TS(e))}es.STAT_EVENT="statevent";function SS(t,e){ht.call(this,es.STAT_EVENT,t),this.stat=e}He(SS,ht);function gt(t){const e=jh();nt(e,new SS(e,t))}es.Ua="timingevent";function AS(t,e){ht.call(this,es.Ua,t),this.size=e}He(AS,ht);function Fl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var zh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},RS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hg(){}Hg.prototype.h=null;function gw(t){return t.h||(t.h=t.i())}function PS(){}var Ul={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qg(){ht.call(this,"d")}He(Qg,ht);function Yg(){ht.call(this,"c")}He(Yg,ht);var zp;function qh(){}He(qh,Hg);qh.prototype.g=function(){return new XMLHttpRequest};qh.prototype.i=function(){return{}};zp=new qh;function $l(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new sl(this),this.P=IO,t=Fp?125:void 0,this.V=new $h(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new CS}function CS(){this.i=null,this.g="",this.h=!1}var IO=45e3,kS={},qp={};O=$l.prototype;O.setTimeout=function(t){this.P=t};function Wp(t,e,n){t.L=1,t.A=Gh(er(e)),t.u=n,t.S=!0,xS(t,null)}function xS(t,e){t.G=Date.now(),Bl(t),t.B=er(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),FS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new CS,t.g=sA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new _O(ct(t.Pa,t,t.g),t.O)),ES(t.U,t.g,"readystatechange",t.nb),e=t.I?hS(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ol(),yO(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&Tn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=Tn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Fp||this.g&&(this.h.h||this.g.ja()||ww(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ol(3):ol(2)),Wh(this);var n=this.g.da();this.ca=n;t:if(NS(this)){var r=ww(this.g);t="";var i=r.length,s=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ii(this),Sa(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,vO(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tl(a)){var u=a;break t}}u=null}if(n=u)Ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gp(this,n);else{this.i=!1,this.s=3,gt(12),Ii(this),Sa(this);break e}}this.S?(bS(this,c,o),Fp&&this.i&&c==3&&(ES(this.U,this.V,"tick",this.mb),this.V.start())):(Ds(this.j,this.m,o,null),Gp(this,o)),c==4&&Ii(this),this.i&&!this.J&&(c==4?tA(this.l,this):(this.i=!1,Bl(this)))}else zO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Ii(this),Sa(this)}}}catch{}finally{}};function NS(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function bS(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=TO(t,n),i==qp){e==4&&(t.s=4,gt(14),r=!1),Ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==kS){t.s=4,gt(15),Ds(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ds(t.j,t.m,i,null),Gp(t,i);NS(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),n_(e),e.M=!0,gt(11))):(Ds(t.j,t.m,n,"[Invalid Chunked Response]"),Ii(t),Sa(t))}O.mb=function(){if(this.g){var t=Tn(this.g),e=this.g.ja();this.o<e.length&&(Wh(this),bS(this,t,e),this.i&&t!=4&&Bl(this))}};function TO(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?qp:(n=Number(e.substring(n,r)),isNaN(n)?kS:(r+=1,r+n>e.length?qp:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,Ii(this)};function Bl(t){t.Y=Date.now()+t.P,DS(t,t.P)}function DS(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Fl(ct(t.lb,t),e)}function Wh(t){t.C&&(z.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(wO(this.j,this.B),this.L!=2&&(ol(),gt(17)),Ii(this),this.s=2,Sa(this)):DS(this,this.Y-t)};function Sa(t){t.l.H==0||t.J||tA(t.l,t)}function Ii(t){Wh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gg(t.V),IS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Gp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Kp(n.i,t))){if(!t.K&&Kp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)zc(n),Yh(n);else break e;t_(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Fl(ct(n.ib,n),6e3));if(1>=BS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ti(n,11)}else if((t.K||n.g==t)&&zc(n),!tl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Jg(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,he(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=iA(r,r.J?r.pa:null,r.Y),o.K){jS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Wh(a),Bl(a)),r.g=o}else ZS(r);0<n.j.length&&Jh(n)}else u[0]!="stop"&&u[0]!="close"||Ti(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ti(n,7):e_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ol(4)}catch{}}function SO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function AO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function OS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AO(t),r=SO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var VS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ki(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ki){this.h=t.h,Bc(this,t.j),this.s=t.s,this.g=t.g,jc(this,t.m),this.l=t.l;var e=t.i,n=new al;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_w(this,n),this.o=t.o}else t&&(e=String(t).match(VS))?(this.h=!1,Bc(this,e[1]||"",!0),this.s=ua(e[2]||""),this.g=ua(e[3]||"",!0),jc(this,e[4]),this.l=ua(e[5]||"",!0),_w(this,e[6]||"",!0),this.o=ua(e[7]||"")):(this.h=!1,this.i=new al(null,this.h))}ki.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ca(e,yw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ca(e,yw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ca(n,n.charAt(0)=="/"?kO:CO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ca(n,NO)),t.join("")};function er(t){return new ki(t)}function Bc(t,e,n){t.j=n?ua(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _w(t,e,n){e instanceof al?(t.i=e,bO(t.i,t.h)):(n||(e=ca(e,xO)),t.i=new al(e,t.h))}function he(t,e,n){t.i.set(e,n)}function Gh(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ua(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ca(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yw=/[#\/\?@]/g,CO=/[#\?:]/g,kO=/[#\?]/g,xO=/[#\?@]/g,NO=/#/g;function al(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ti(t){t.g||(t.g=new Map,t.h=0,t.i&&RO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=al.prototype;O.add=function(t,e){ti(this),this.i=null,t=To(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function LS(t,e){ti(t),e=To(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function MS(t,e){return ti(t),e=To(t,e),t.g.has(e)}O.forEach=function(t,e){ti(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){ti(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){ti(this);let e=[];if(typeof t=="string")MS(this,t)&&(e=e.concat(this.g.get(To(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return ti(this),this.i=null,t=To(this,t),MS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function FS(t,e,n){LS(t,e),0<n.length&&(t.i=null,t.g.set(To(t,e),Mg(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function To(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bO(t,e){e&&!t.j&&(ti(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(LS(this,r),FS(this,i,n))},t)),t.j=e}var DO=class{constructor(t,e){this.g=t,this.map=e}};function US(t){this.l=t||OO,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OO=10;function $S(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function BS(t){return t.h?1:t.g?t.g.size:0}function Kp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jg(t,e){t.g?t.g.add(e):t.h=e}function jS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}US.prototype.cancel=function(){if(this.i=zS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Mg(t.i)}var VO=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function LO(){this.g=new VO}function MO(t,e,n){const r=n||"";try{OS(t,function(i,s){let o=i;Ll(i)&&(o=qg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function FO(t,e){const n=new Bh;if(z.Image){const r=new Image;r.onload=Pu(ku,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pu(ku,n,r,"TestLoadImage: error",!1,e),r.onabort=Pu(ku,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pu(ku,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ku(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Kh(t){this.l=t.ec||null,this.j=t.ob||!1}He(Kh,Hg);Kh.prototype.g=function(){return new Hh(this.l,this.j)};Kh.prototype.i=function(t){return function(){return t}}({});function Hh(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Hh,Ke);var Xg=0;O=Hh.prototype;O.open=function(t,e){if(this.readyState!=Xg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ll(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jl(this)),this.readyState=Xg};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ll(this)),this.g&&(this.readyState=3,ll(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jl(this):ll(this),this.readyState==3&&qS(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,jl(this))};O.Ya=function(t){this.g&&(this.response=t,jl(this))};O.ka=function(){this.g&&jl(this)};function jl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ll(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ll(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var UO=z.JSON.parse;function Ae(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=WS,this.L=this.M=!1}He(Ae,Ke);var WS="",$O=/^https?$/i,BO=["POST","PUT"];O=Ae.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zp.g(),this.C=this.u?gw(this.u):gw(zp),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){vw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=aS(BO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{HS(this),0<this.B&&((this.L=jO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=Kg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vw(this,s)}};function jO(t){return no&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Lg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function vw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,GS(t),Qh(t)}function GS(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Qh(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qh(this,!0)),Ae.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?KS(this):this.kb())};O.kb=function(){KS(this)};function KS(t){if(t.h&&typeof Lg<"u"&&(!t.C[1]||Tn(t)!=4||t.da()!=2)){if(t.v&&Tn(t)==4)Kg(t.La,0,t);else if(nt(t,"readystatechange"),Tn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(VS)[1]||null;!i&&z.self&&z.self.location&&(i=z.self.location.protocol.slice(0,-1)),r=!$O.test(i?i.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var s=2<Tn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",GS(t)}}finally{Qh(t)}}}}function Qh(t,e){if(t.g){HS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function HS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Tn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),UO(e)}};function ww(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case WS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function zO(t){const e={};t=(t.g&&2<=Tn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(tl(t[r]))continue;var n=pO(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}aO(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function QS(t){let e="";return Ug(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=QS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Ho(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function YS(t){this.Ga=0,this.j=[],this.l=new Bh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ho("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ho("baseRetryDelayMs",5e3,t),this.hb=Ho("retryDelaySeedMs",1e4,t),this.eb=Ho("forwardChannelMaxRetries",2,t),this.xa=Ho("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new US(t&&t.concurrentRequestLimit),this.Ja=new LO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=YS.prototype;O.ra=8;O.H=1;function e_(t){if(JS(t),t.H==3){var e=t.W++,n=er(t.I);if(he(n,"SID",t.K),he(n,"RID",e),he(n,"TYPE","terminate"),zl(t,n),e=new $l(t,t.l,e),e.L=2,e.A=Gh(er(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.A,n=!0),n||(e.g=sA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Bl(e)}rA(t)}function Yh(t){t.g&&(n_(t),t.g.cancel(),t.g=null)}function JS(t){Yh(t),t.u&&(z.clearTimeout(t.u),t.u=null),zc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Jh(t){if(!$S(t.i)&&!t.m){t.m=!0;var e=t.Na;rl||vS(),il||(rl(),il=!0),Wg.add(e,t),t.C=0}}function qO(t,e){return BS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Fl(ct(t.Na,t,e),nA(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new $l(this,this.l,t);let s=this.s;if(this.U&&(s?(s=hS(s),dS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=XS(this,i,e),n=er(this.I),he(n,"RID",t),he(n,"CVER",22),this.F&&he(n,"X-HTTP-Session-Id",this.F),zl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(QS(s)))+"&"+e:this.o&&Zg(n,this.o,s)),Jg(this.i,i),this.bb&&he(n,"TYPE","init"),this.P?(he(n,"$req",e),he(n,"SID","null"),i.aa=!0,Wp(i,n,null)):Wp(i,n,e),this.H=2}}else this.H==3&&(t?Ew(this,t):this.j.length==0||$S(this.i)||Ew(this))};function Ew(t,e){var n;e?n=e.m:n=t.W++;const r=er(t.I);he(r,"SID",t.K),he(r,"RID",n),he(r,"AID",t.V),zl(t,r),t.o&&t.s&&Zg(r,t.o,t.s),n=new $l(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=XS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jg(t.i,n),Wp(n,r,e)}function zl(t,e){t.na&&Ug(t.na,function(n,r){he(e,r,n)}),t.h&&OS({},function(n,r){he(e,r,n)})}function XS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ct(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{MO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ZS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;rl||vS(),il||(rl(),il=!0),Wg.add(e,t),t.A=0}}function t_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Fl(ct(t.Ma,t),nA(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,eA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Fl(ct(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Yh(this),eA(this))};function n_(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function eA(t){t.g=new $l(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=er(t.wa);he(e,"RID","rpc"),he(e,"SID",t.K),he(e,"AID",t.V),he(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&he(e,"TO",t.qa),he(e,"TYPE","xmlhttp"),zl(t,e),t.o&&t.s&&Zg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Gh(er(e)),n.u=null,n.S=!0,xS(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Yh(this),t_(this),gt(19))};function zc(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function tA(t,e){var n=null;if(t.g==e){zc(t),n_(t),t.g=null;var r=2}else if(Kp(t.i,e))n=e.F,jS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=jh(),nt(r,new AS(r,n)),Jh(t)}else ZS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&qO(t,e)||r==2&&t_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ti(t,5);break;case 4:Ti(t,10);break;case 3:Ti(t,6);break;default:Ti(t,2)}}}function nA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ti(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ct(t.pb,t);n||(n=new ki("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Bc(n,"https"),Gh(n)),FO(n.toString(),r)}else gt(2);t.H=0,t.h&&t.h.za(e),rA(t),JS(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function rA(t){if(t.H=0,t.ma=[],t.h){const e=zS(t.i);(e.length!=0||t.j.length!=0)&&(hw(t.ma,e),hw(t.ma,t.j),t.i.i.length=0,Mg(t.j),t.j.length=0),t.h.ya()}}function iA(t,e,n){var r=n instanceof ki?er(n):new ki(n);if(r.g!="")e&&(r.g=e+"."+r.g),jc(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ki(null);r&&Bc(s,r),e&&(s.g=e),i&&jc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&he(r,n,e),he(r,"VER",t.ra),zl(t,r),r}function sA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ae(new Kh({ob:n})):new Ae(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function oA(){}O=oA.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function qc(){if(no&&!(10<=Number(rO)))throw Error("Environmental error: no available transport.")}qc.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){Ke.call(this),this.g=new YS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!tl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!tl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new So(this)}He(Bt,Ke);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=iA(t,null,t.Y),Jh(t)};Bt.prototype.close=function(){e_(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qg(t),t=n);e.j.push(new DO(e.fb++,t)),e.H==3&&Jh(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,e_(this.g),delete this.g,Bt.$.N.call(this)};function aA(t){Qg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(aA,Qg);function lA(){Yg.call(this),this.status=1}He(lA,Yg);function So(t){this.g=t}He(So,oA);So.prototype.Ba=function(){nt(this.g,"a")};So.prototype.Aa=function(t){nt(this.g,new aA(t))};So.prototype.za=function(t){nt(this.g,new lA)};So.prototype.ya=function(){nt(this.g,"b")};function WO(){this.blockSize=-1}function hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(hn,WO);hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ef(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}hn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ef(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ef(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ef(this,r),i=0;break}}this.h=i,this.i+=e};hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function se(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var GO={};function r_(t){return-128<=t&&128>t?eO(t,function(e){return new se([e|0],0>e?-1:0)}):new se([t|0],0>t?-1:0)}function Sn(t){if(isNaN(t)||!isFinite(t))return Bs;if(0>t)return Ze(Sn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Hp;return new se(e,0)}function uA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(uA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Sn(Math.pow(e,8)),r=Bs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Sn(Math.pow(e,s)),r=r.R(s).add(Sn(o))):(r=r.R(n),r=r.add(Sn(o)))}return r}var Hp=4294967296,Bs=r_(0),Qp=r_(1),Iw=r_(16777216);O=se.prototype;O.ea=function(){if(Kt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Hp+r)*e,e*=Hp}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(jn(this))return"0";if(Kt(this))return"-"+Ze(this).toString(t);for(var e=Sn(Math.pow(t,6)),n=this,r="";;){var i=Gc(n,e).g;n=Wc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,jn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function jn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kt(t){return t.h==-1}O.X=function(t){return t=Wc(this,t),Kt(t)?-1:jn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new se(n,~t.h).add(Qp)}O.abs=function(){return Kt(this)?Ze(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new se(n,n[n.length-1]&-2147483648?-1:0)};function Wc(t,e){return t.add(Ze(e))}O.R=function(t){if(jn(this)||jn(t))return Bs;if(Kt(this))return Kt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Kt(t))return Ze(this.R(Ze(t)));if(0>this.X(Iw)&&0>t.X(Iw))return Sn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,xu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,xu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,xu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,xu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new se(n,0)};function xu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Qo(t,e){this.g=t,this.h=e}function Gc(t,e){if(jn(e))throw Error("division by zero");if(jn(t))return new Qo(Bs,Bs);if(Kt(t))return e=Gc(Ze(t),e),new Qo(Ze(e.g),Ze(e.h));if(Kt(e))return e=Gc(t,Ze(e)),new Qo(Ze(e.g),e.h);if(30<t.g.length){if(Kt(t)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Qp,r=e;0>=r.X(t);)n=Tw(n),r=Tw(r);var i=ls(n,1),s=ls(r,1);for(r=ls(r,2),n=ls(n,2);!jn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ls(r,1),n=ls(n,1)}return e=Wc(t,i.R(e)),new Qo(i,e)}for(i=Bs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Sn(n),o=s.R(e);Kt(o)||0<o.X(t);)n-=r,s=Sn(n),o=s.R(e);jn(s)&&(s=Qp),i=i.add(s),t=Wc(t,o)}return new Qo(i,t)}O.gb=function(t){return Gc(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new se(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new se(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new se(n,this.h^t.h)};function Tw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new se(n,t.h)}function ls(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new se(i,t.h)}qc.prototype.createWebChannel=qc.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;zh.NO_ERROR=0;zh.TIMEOUT=8;zh.HTTP_ERROR=6;RS.COMPLETE="complete";PS.EventType=Ul;Ul.OPEN="a";Ul.CLOSE="b";Ul.ERROR="c";Ul.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Ae.prototype.listenOnce=Ae.prototype.P;Ae.prototype.getLastError=Ae.prototype.Sa;Ae.prototype.getLastErrorCode=Ae.prototype.Ia;Ae.prototype.getStatus=Ae.prototype.da;Ae.prototype.getResponseJson=Ae.prototype.Wa;Ae.prototype.getResponseText=Ae.prototype.ja;Ae.prototype.send=Ae.prototype.ha;Ae.prototype.setWithCredentials=Ae.prototype.Oa;hn.prototype.digest=hn.prototype.l;hn.prototype.reset=hn.prototype.reset;hn.prototype.update=hn.prototype.j;se.prototype.add=se.prototype.add;se.prototype.multiply=se.prototype.R;se.prototype.modulo=se.prototype.gb;se.prototype.compare=se.prototype.X;se.prototype.toNumber=se.prototype.ea;se.prototype.toString=se.prototype.toString;se.prototype.getBits=se.prototype.D;se.fromNumber=Sn;se.fromString=uA;var KO=function(){return new qc},HO=function(){return jh()},If=zh,QO=RS,YO=es,Sw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Nu=PS,JO=Ae,XO=hn,js=se,ZO={};const Aw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Vh("@firebase/firestore");function ms(){return Br.logLevel}function eV(t){Br.setLogLevel(t)}function R(t,...e){if(Br.logLevel<=Q.DEBUG){const n=e.map(i_);Br.debug(`Firestore (${Ao}): ${t}`,...n)}}function be(t,...e){if(Br.logLevel<=Q.ERROR){const n=e.map(i_);Br.error(`Firestore (${Ao}): ${t}`,...n)}}function dn(t,...e){if(Br.logLevel<=Q.WARN){const n=e.map(i_);Br.warn(`Firestore (${Ao}): ${t}`,...n)}}function i_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+t;throw be(e),new Error(e)}function U(t,e){t||V()}function tV(t,e){t||V()}function D(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class rV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iV{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ge,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ge)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string"),new cA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new qe(e)}}class sV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(U(typeof n.token=="string"),this.R=n.token,new aV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=uV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function q(t,e){return t<e?-1:t>e?1:0}function ro(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function dA(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new _e(0,0))}static max(){return new $(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ul.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ul?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends ul{construct(e,n,r){return new ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const cV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends ul{construct(e,n,r){return new me(e,n,r)}static isValidIdentifier(e){return cV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(n)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ee.fromString(e))}static fromName(e){return new N(ee.fromString(e).popFirst(5))}static empty(){return new N(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ee(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Yp(t){return t.fields.find(e=>e.kind===2)}function fi(t){return t.fields.filter(e=>e.kind!==2)}Kc.UNKNOWN_ID=-1;class Zu{constructor(e,n){this.fieldPath=e,this.kind=n}}class cl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new cl(0,jt.min())}}function fA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new jt(i,N.empty(),e)}function pA(t){return new jt(t.readTime,t.key,-1)}class jt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jt($.min(),N.empty(),-1)}static max(){return new jt($.max(),N.empty(),-1)}}function s_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==mA)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Ge,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Aa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=o_(r.target.error);this.V.reject(new Aa(e,i))}}static open(e,n,r,i){try{return new Xh(n,e.transaction(i,r))}catch(s){throw new Aa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new dV(n)}}class an{constructor(e,n,r){this.name=e,this.version=n,this.p=r,an.S(Ie())===12.2&&be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),pi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Xa())return!1;if(an.C())return!0;const e=Ie(),n=an.S(e),r=0<n&&n<10,i=an.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=ZO)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Aa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Aa(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Xh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class hV{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return pi(this.k.delete())}}class Aa extends A{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ri(t){return t.name==="IndexedDbTransactionError"}class dV{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),pi(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),pi(this.store.add(e))}get(e){return pi(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),pi(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),pi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=o_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new hV(a),u=n(a.primaryKey,a.value,l);if(u instanceof w){const c=u.catch(h=>(l.done(),w.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function pi(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=o_(r.target.error);n(i)}})}let Rw=!1;function o_(t){const e=an.S(Ie());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Rw||(Rw=!0,setTimeout(()=>{throw r},0)),r}}return t}class fV{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(n){ri(n)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await ni(n)}await this.ee(6e4)})}}class pV{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return R("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(R("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=pA(s);s_(o,r)>0&&(r=o)}),new jt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ct._e=-1;function ql(t){return t==null}function hl(t){return t===0&&1/t==-1/0}function _A(t){return typeof t=="number"&&Number.isInteger(t)&&!hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pw(e)),e=mV(t.get(n),e);return Pw(e)}function mV(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Pw(t){return t+""}function An(t){const e=t.length;if(U(e>=2),e===2)return U(t.charAt(0)===""&&t.charAt(1)===""),ee.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&V(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:V()}s=o+2}return new ee(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e){return[t,vt(e)]}function yA(t,e,n){return[t,vt(e),n]}const gV={},_V=["prefixPath","collectionGroup","readTime","documentId"],yV=["prefixPath","collectionGroup","documentId"],vV=["collectionGroup","readTime","prefixPath","documentId"],wV=["canonicalId","targetId"],EV=["targetId","path"],IV=["path","targetId"],TV=["collectionId","parent"],SV=["indexId","uid"],AV=["uid","sequenceNumber"],RV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],PV=["indexId","uid","orderedDocumentKey"],CV=["userId","collectionPath","documentId"],kV=["userId","collectionPath","largestBatchId"],xV=["userId","collectionGroup","largestBatchId"],vA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],NV=[...vA,"documentOverlays"],wA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],EA=wA,bV=[...EA,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp extends gA{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function Qe(t,e){const n=D(t);return an.M(n.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xw(this.data.getIterator())}getIteratorFrom(e){return new xw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new oe(this.comparator);return n.data=e,n}}class xw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function us(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new kt([])}unionWith(e){let n=new oe(me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DV(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TA("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const OV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(U(!!t),typeof t=="string"){let e=0;const n=OV.exec(t);if(U(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function a_(t){const e=t.mapValue.fields.__previous_value__;return Zh(e)?a_(e):e}function dl(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tc={nullValue:"NULL_VALUE"};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zh(t)?4:SA(t)?9007199254740991:10:V()}function On(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return dl(t).isEqual(dl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),a=jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return zr(i.bytesValue).isEqual(zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),a=Se(s.doubleValue);return o===a?hl(o)===hl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ro(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(kw(o)!==kw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!On(o[l],a[l])))return!1;return!0}(t,e);default:return V()}}function fl(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Wr(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Se(s.integerValue||s.doubleValue),l=Se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Nw(t.timestampValue,e.timestampValue);case 4:return Nw(dl(t),dl(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=zr(s),l=zr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=q(a[u],l[u]);if(c!==0)return c}return q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=q(Se(s.latitude),Se(o.latitude));return a!==0?a:q(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Wr(a[u],l[u]);if(c)return c}return q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Sr.mapValue&&o===Sr.mapValue)return 0;if(s===Sr.mapValue)return 1;if(o===Sr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=q(l[h],c[h]);if(d!==0)return d;const f=Wr(a[l[h]],u[c[h]]);if(f!==0)return f}return q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw V()}}function Nw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);const n=jr(t),r=jr(e),i=q(n.seconds,r.seconds);return i!==0?i:q(n.nanos,r.nanos)}function io(t){return Xp(t)}function Xp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Xp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Xp(n.fields[o])}`;return i+"}"}(t.mapValue):V()}function $i(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zp(t){return!!t&&"integerValue"in t}function pl(t){return!!t&&"arrayValue"in t}function bw(t){return!!t&&"nullValue"in t}function Dw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nc(t){return!!t&&"mapValue"in t}function Ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function LV(t){return"nullValue"in t?tc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?$i(qr.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:V()}function MV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?$i(qr.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Sr:V()}function Ow(t,e){const n=Wr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Vw(t,e){const n=Wr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(n)}setAll(e){let n=me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ra(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new et(Ra(this.value))}}function AA(t){const e=[];return ts(t.fields,(n,r)=>{const i=new me([n]);if(nc(r)){const s=AA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new de(e,0,$.min(),$.min(),$.min(),et.empty(),0)}static newFoundDocument(e,n,r,i){return new de(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new de(e,2,n,$.min(),$.min(),et.empty(),0)}static newUnknownDocument(e,n){return new de(e,3,n,$.min(),$.min(),et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){this.position=e,this.inclusive=n}}function Lw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=Wr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function FV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{}class Y extends RA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UV(e,n,r):n==="array-contains"?new jV(e,r):n==="in"?new bA(e,r):n==="not-in"?new zV(e,r):n==="array-contains-any"?new qV(e,r):new Y(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $V(e,r):new BV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wr(n,this.value)):n!==null&&Ui(this.value)===Ui(n)&&this.matchesComparison(Wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends RA{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new re(e,n)}matches(e){return so(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function so(t){return t.op==="and"}function em(t){return t.op==="or"}function l_(t){return PA(t)&&so(t)}function PA(t){for(const e of t.filters)if(e instanceof re)return!1;return!0}function tm(t){if(t instanceof Y)return t.field.canonicalString()+t.op.toString()+io(t.value);if(l_(t))return t.filters.map(e=>tm(e)).join(",");{const e=t.filters.map(n=>tm(n)).join(",");return`${t.op}(${e})`}}function CA(t,e){return t instanceof Y?function(r,i){return i instanceof Y&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof re?function(r,i){return i instanceof re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&CA(o,i.filters[a]),!0):!1}(t,e):void V()}function kA(t,e){const n=t.filters.concat(e);return re.create(n,t.op)}function xA(t){return t instanceof Y?function(n){return`${n.field.canonicalString()} ${n.op} ${io(n.value)}`}(t):t instanceof re?function(n){return n.op.toString()+" {"+n.getFilters().map(xA).join(" ,")+"}"}(t):"Filter"}class UV extends Y{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class $V extends Y{constructor(e,n){super(e,"in",n),this.keys=NA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BV extends Y{constructor(e,n){super(e,"not-in",n),this.keys=NA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class jV extends Y{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pl(n)&&fl(n.arrayValue,this.value)}}class bA extends Y{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class zV extends Y{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fl(this.value.arrayValue,n)}}class qV extends Y{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function nm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WV(t,e,n,r,i,s,o)}function Bi(t){const e=D(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>io(r)).join(",")),e.ce=n}return e.ce}function Wl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mw(t.startAt,e.startAt)&&Mw(t.endAt,e.endAt)}function Hc(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Qc(t,e){return t.filters.filter(n=>n instanceof Y&&n.field.isEqual(e))}function Fw(t,e,n){let r=tc,i=!0;for(const s of Qc(t,e)){let o=tc,a=!0;switch(s.op){case"<":case"<=":o=LV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=tc}Ow({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Ow({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Uw(t,e,n){let r=Sr,i=!0;for(const s of Qc(t,e)){let o=Sr,a=!0;switch(s.op){case">=":case">":o=MV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Sr}Vw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Vw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function DA(t,e,n,r,i,s,o,a){return new ir(t,e,n,r,i,s,o,a)}function Ro(t){return new ir(t)}function $w(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function u_(t){return t.collectionGroup!==null}function zs(t){const e=D(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new oe(me.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new ml(s,r))}),n.has(me.keyField().canonicalString())||e.le.push(new ml(me.keyField(),r))}return e.le}function wt(t){const e=D(t);return e.he||(e.he=GV(e,zs(t))),e.he}function GV(t,e){if(t.limitType==="F")return nm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ml(i.field,s)});const n=t.endAt?new Gr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gr(t.startAt.position,t.startAt.inclusive):null;return nm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rm(t,e){const n=t.filters.concat([e]);return new ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yc(t,e,n){return new ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return Wl(wt(t),wt(e))&&t.limitType===e.limitType}function OA(t){return`${Bi(wt(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xA(i)).join(", ")}]`),ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>io(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>io(i)).join(",")),`Target(${r})`}(wt(t))}; limitType=${t.limitType})`}function Kl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Lw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,zs(r),i)||r.endAt&&!function(o,a,l){const u=Lw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,zs(r),i))}(t,e)}function VA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function LA(t){return(e,n)=>{let r=!1;for(const i of zs(t)){const s=KV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KV(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Wr(l,u):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return IA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HV=new ue(N.comparator);function xt(){return HV}const MA=new ue(N.comparator);function ha(...t){let e=MA;for(const n of t)e=e.insert(n.key,n);return e}function FA(t){let e=MA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rn(){return Pa()}function UA(){return Pa()}function Pa(){return new ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const QV=new ue(N.comparator),YV=new oe(N.comparator);function W(...t){let e=YV;for(const n of t)e=e.add(n);return e}const JV=new oe(q);function c_(){return JV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hl(e)?"-0":e}}function BA(t){return{integerValue:""+t}}function jA(t,e){return _A(e)?BA(e):$A(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this._=void 0}}function XV(t,e,n){return t instanceof oo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zh(s)&&(s=a_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ji?qA(t,e):t instanceof zi?WA(t,e):function(i,s){const o=zA(i,s),a=Bw(o)+Bw(i.Ie);return Zp(o)&&Zp(i.Ie)?BA(a):$A(i.serializer,a)}(t,e)}function ZV(t,e,n){return t instanceof ji?qA(t,e):t instanceof zi?WA(t,e):n}function zA(t,e){return t instanceof ao?function(r){return Zp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class oo extends ed{}class ji extends ed{constructor(e){super(),this.elements=e}}function qA(t,e){const n=GA(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class zi extends ed{constructor(e){super(),this.elements=e}}function WA(t,e){let n=GA(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class ao extends ed{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Bw(t){return Se(t.integerValue||t.doubleValue)}function GA(t){return pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.field=e,this.transform=n}}function eL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ji&&i instanceof ji||r instanceof zi&&i instanceof zi?ro(r.elements,i.elements,On):r instanceof ao&&i instanceof ao?On(r.Ie,i.Ie):r instanceof oo&&i instanceof oo}(t.transform,e.transform)}class tL{constructor(e,n){this.version=e,this.transformResults=n}}class ge{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ge}static exists(e){return new ge(void 0,e)}static updateTime(e){return new ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class td{}function KA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Co(t.key,ge.none()):new Po(t.key,t.data,ge.none());{const n=t.data,r=et.empty();let i=new oe(me.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new sr(t.key,r,new kt(i.toArray()),ge.none())}}function nL(t,e,n){t instanceof Po?function(i,s,o){const a=i.value.clone(),l=zw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(i,s,o){if(!rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(HA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ca(t,e,n,r){return t instanceof Po?function(s,o,a,l){if(!rc(s.precondition,o))return a;const u=s.value.clone(),c=qw(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof sr?function(s,o,a,l){if(!rc(s.precondition,o))return a;const u=qw(s.fieldTransforms,l,o),c=o.data;return c.setAll(HA(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zA(r.transform,i||null);s!=null&&(n===null&&(n=et.empty()),n.set(r.field,s))}return n||null}function jw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ro(r,i,(s,o)=>eL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Po extends td{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sr extends td{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function HA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zw(t,e,n){const r=new Map;U(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZV(o,a,n[i]))}return r}function qw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,XV(s,o,e))}return r}class Co extends td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h_ extends td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=UA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=KA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,r)=>jw(n,r))&&ro(this.baseMutations,e.baseMutations,(n,r)=>jw(n,r))}}class f_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){U(e.mutations.length===r.length);let i=function(){return QV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new f_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,X;function QA(t){switch(t){default:return V();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function YA(t){if(t===void 0)return be("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ve.OK:return E.OK;case Ve.CANCELLED:return E.CANCELLED;case Ve.UNKNOWN:return E.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return E.INTERNAL;case Ve.UNAVAILABLE:return E.UNAVAILABLE;case Ve.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ve.NOT_FOUND:return E.NOT_FOUND;case Ve.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ve.ABORTED:return E.ABORTED;case Ve.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ve.DATA_LOSS:return E.DATA_LOSS;default:return V()}}(X=Ve||(Ve={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=new js([4294967295,4294967295],0);function Ww(t){const e=JA().encode(t),n=new XO;return n.update(e),new Uint8Array(n.digest())}function Gw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new js([n,r],0),new js([i,s],0)]}class m_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new da(`Invalid padding: ${n}`);if(r<0)throw new da(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new da(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new da(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=js.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(js.fromNumber(r)));return i.compare(sL)===1&&(i=new js([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ww(e),[r,i]=Gw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new m_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Ww(e),[r,i]=Gw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Yl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ql($.min(),i,new ue(q),xt(),W())}}class Yl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yl(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class XA{constructor(e,n){this.targetId=e,this.fe=n}}class ZA{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Kw{constructor(){this.ge=0,this.pe=Qw(),this.ye=$e.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=W(),n=W(),r=W();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Yl(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Qw()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,U(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class oL{constructor(e){this.Le=e,this.ke=new Map,this.qe=xt(),this.Qe=Hw(),this.Ke=new ue(q)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Hc(s))if(r===0){const o=new N(s.path);this.We(n,o,de.newNoDocument(o,$.min()))}else U(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=zr(r).toUint8Array()}catch(l){if(l instanceof TA)return dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new m_(o,i,s)}catch(l){return dn(l instanceof da?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Hc(a.target)){const l=new N(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,de.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=W();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Ql(e,n,this.Ke,this.qe,r);return this.qe=xt(),this.Qe=Hw(),this.Ke=new ue(q),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Kw,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new oe(q),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Kw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hw(){return new ue(N.comparator)}function Qw(){return new ue(N.comparator)}const aL={asc:"ASCENDING",desc:"DESCENDING"},lL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uL={and:"AND",or:"OR"};class cL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function im(t,e){return t.useProto3Json||ql(e)?e:{value:e}}function lo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hL(t,e){return lo(t,e.toTimestamp())}function De(t){return U(!!t),$.fromTimestamp(function(n){const r=jr(n);return new _e(r.seconds,r.nanos)}(t))}function g_(t,e){return function(r){return new ee(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function tR(t){const e=ee.fromString(t);return U(cR(e)),e}function gl(t,e){return g_(t.databaseId,e.path)}function bn(t,e){const n=tR(e);if(n.get(1)!==t.databaseId.projectId)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(rR(n))}function sm(t,e){return g_(t.databaseId,e)}function nR(t){const e=tR(t);return e.length===4?ee.emptyPath():rR(e)}function _l(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rR(t){return U(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yw(t,e,n){return{name:gl(t,e),fields:n.value.mapValue.fields}}function iR(t,e,n){const r=bn(t,e.name),i=De(e.updateTime),s=e.createTime?De(e.createTime):$.min(),o=new et({mapValue:{fields:e.fields}}),a=de.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function dL(t,e){return"found"in e?function(r,i){U(!!i.found),i.found.name,i.found.updateTime;const s=bn(r,i.found.name),o=De(i.found.updateTime),a=i.found.createTime?De(i.found.createTime):$.min(),l=new et({mapValue:{fields:i.found.fields}});return de.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){U(!!i.missing),U(!!i.readTime);const s=bn(r,i.missing),o=De(i.readTime);return de.newNoDocument(s,o)}(t,e):V()}function fL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(U(c===void 0||typeof c=="string"),$e.fromBase64String(c||"")):(U(c===void 0||c instanceof Uint8Array),$e.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?E.UNKNOWN:YA(u.code);return new A(c,u.message||"")}(o);n=new ZA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bn(t,r.document.name),s=De(r.document.updateTime),o=r.document.createTime?De(r.document.createTime):$.min(),a=new et({mapValue:{fields:r.document.fields}}),l=de.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ic(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bn(t,r.document),s=r.readTime?De(r.readTime):$.min(),o=de.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bn(t,r.document),s=r.removedTargetIds||[];n=new ic([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new iL(i,s),a=r.targetId;n=new XA(a,o)}}return n}function yl(t,e){let n;if(e instanceof Po)n={update:Yw(t,e.key,e.value)};else if(e instanceof Co)n={delete:gl(t,e.key)};else if(e instanceof sr)n={update:Yw(t,e.key,e.data),updateMask:vL(e.fieldMask)};else{if(!(e instanceof h_))return V();n={verify:gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof oo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ao)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:V()}(t,e.precondition)),n}function om(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?ge.updateTime(De(s.updateTime)):s.exists!==void 0?ge.exists(s.exists):ge.none()}(e.currentDocument):ge.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)U(a.setToServerValue==="REQUEST_TIME"),l=new oo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new ji(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new zi(c)}else"increment"in a?l=new ao(o,a.increment):V();const u=me.fromServerFormat(a.fieldPath);return new Hl(u,l)}(t,i)):[];if(e.update){e.update.name;const i=bn(t,e.update.name),s=new et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new kt(u.map(c=>me.fromServerFormat(c)))}(e.updateMask);return new sr(i,s,o,n,r)}return new Po(i,s,n,r)}if(e.delete){const i=bn(t,e.delete);return new Co(i,n)}if(e.verify){const i=bn(t,e.verify);return new h_(i,n)}return V()}function pL(t,e){return t&&t.length>0?(U(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?De(i.updateTime):De(s);return o.isEqual($.min())&&(o=De(s)),new tL(o,i.transformResults||[])}(n,e))):[]}function sR(t,e){return{documents:[sm(t,e.path)]}}function oR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=sm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return uR(re.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:_s(h.field),direction:gL(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=im(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function aR(t){let e=nR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){U(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=lR(h);return d instanceof re&&l_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new ml(ys(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ql(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Gr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Gr(f,d)}(n.endAt)),DA(e,i,o,s,a,"F",l,u)}function mL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ys(n.unaryFilter.field);return Y.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ys(n.unaryFilter.field);return Y.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ys(n.unaryFilter.field);return Y.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ys(n.unaryFilter.field);return Y.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(n){return Y.create(ys(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return re.create(n.compositeFilter.filters.map(r=>lR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return V()}}(n.compositeFilter.op))}(t):V()}function gL(t){return aL[t]}function _L(t){return lL[t]}function yL(t){return uL[t]}function _s(t){return{fieldPath:t.canonicalString()}}function ys(t){return me.fromServerFormat(t.fieldPath)}function uR(t){return t instanceof Y?function(n){if(n.op==="=="){if(Dw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(bw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(bw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:_L(n.op),value:n.value}}}(t):t instanceof re?function(n){const r=n.getFilters().map(i=>uR(i));return r.length===1?r[0]:{compositeFilter:{op:yL(n.op),filters:r}}}(t):V()}function vL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,r,i,s=$.min(),o=$.min(),a=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.ut=e}}function wL(t,e){let n;if(e.document)n=iR(t.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),i=Wi(e.noDocument.readTime);n=de.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return V();{const r=N.fromSegments(e.unknownDocument.path),i=Wi(e.unknownDocument.version);n=de.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new _e(i[0],i[1]);return $.fromTimestamp(s)}(e.readTime)),n}function Jw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Jc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:gl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:lo(s,o.version.toTimestamp()),createTime:lo(s,o.createTime.toTimestamp())}}(t.ut,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:qi(e.version)};else{if(!e.isUnknownDocument())return V();r.unknownDocument={path:n.path.toArray(),version:qi(e.version)}}return r}function Jc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Wi(t){const e=new _e(t.seconds,t.nanoseconds);return $.fromTimestamp(e)}function mi(t,e){const n=(e.baseMutations||[]).map(s=>om(t.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>om(t.ut,s)),i=_e.fromMillis(e.localWriteTimeMs);return new d_(e.batchId,i,n,r)}function fa(t){const e=Wi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Wi(t.lastLimboFreeSnapshotVersion):$.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return U(s.documents.length===1),wt(Ro(nR(s.documents[0])))}(t.query):function(s){return wt(aR(s))}(t.query),new zn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,$e.fromBase64String(t.resumeToken))}function dR(t,e){const n=qi(e.snapshotVersion),r=qi(e.lastLimboFreeSnapshotVersion);let i;i=Hc(e.target)?sR(t.ut,e.target):oR(t.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Bi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function __(t){const e=aR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yc(e,e.limit,"L"):e}function Tf(t,e){return new p_(e.largestBatchId,om(t.ut,e.overlayMutation))}function Xw(t,e){const n=e.path.lastSegment();return[t,vt(e.path.popLast()),n]}function Zw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:qi(r.readTime),documentKey:vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{getBundleMetadata(e,n){return eE(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Wi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return eE(e).put(function(i){return{bundleId:i.id,createTime:qi(De(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return tE(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:__(s.bundledQuery),readTime:Wi(s.readTime)}}(r)})}saveNamedQuery(e,n){return tE(e).put(function(i){return{name:i.name,readTime:qi(De(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function eE(t){return Qe(t,"bundles")}function tE(t){return Qe(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.serializer=e,this.userId=n}static ct(e,n){const r=n.uid||"";return new nd(e,r)}getOverlay(e,n){return Yo(e).get(Xw(this.userId,n)).next(r=>r?Tf(this.serializer,r):null)}getOverlays(e,n){const r=Rn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new p_(n,o);i.push(this.lt(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Yo(e).H("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Rn(),s=vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Yo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Tf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Rn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Yo(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=Tf(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}lt(e,n){return Yo(e).put(function(i,s,o){const[a,l,u]=Xw(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yl(i.ut,o.mutation)}}(this.serializer,this.userId,n))}}function Yo(t){return Qe(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){}ht(e,n){this.Pt(e,n),n.It()}Pt(e,n){if("nullValue"in e)this.Tt(n,5);else if("booleanValue"in e)this.Tt(n,10),n.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(n,15),n.Et(Se(e.integerValue));else if("doubleValue"in e){const r=Se(e.doubleValue);isNaN(r)?this.Tt(n,13):(this.Tt(n,15),hl(r)?n.Et(0):n.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(n,20),typeof r=="string"?n.dt(r):(n.dt(`${r.seconds||""}`),n.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,n),this.Rt(n);else if("bytesValue"in e)this.Tt(n,30),n.Vt(zr(e.bytesValue)),this.Rt(n);else if("referenceValue"in e)this.ft(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(n,45),n.Et(r.latitude||0),n.Et(r.longitude||0)}else"mapValue"in e?SA(e)?this.Tt(n,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,n),this.Rt(n)):"arrayValue"in e?(this.yt(e.arrayValue,n),this.Rt(n)):V()}At(e,n){this.Tt(n,25),this.wt(e,n)}wt(e,n){n.dt(e)}gt(e,n){const r=e.fields||{};this.Tt(n,55);for(const i of Object.keys(r))this.At(i,n),this.Pt(r[i],n)}yt(e,n){const r=e.values||[];this.Tt(n,50);for(const i of r)this.Pt(i,n)}ft(e,n){this.Tt(n,37),N.fromName(e).path.forEach(r=>{this.Tt(n,60),this.wt(r,n)})}Tt(e,n){e.Et(n)}Rt(e){e.Et(2)}}gi.St=new gi;function IL(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function nE(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=IL(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class TL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Dt(r.value),r=n.next();this.Ct()}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=n.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const n=this.Bt(e),r=nE(n);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}kt(e){const n=this.Bt(e),r=nE(n);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Dt(e){const n=255&e;n===0?(this.Qt(0),this.Qt(255)):n===255?(this.Qt(255),this.Qt(0)):this.Qt(n)}Ft(e){const n=255&e;n===0?(this.$t(0),this.$t(255)):n===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class SL{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class AL{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class Jo{constructor(){this.Wt=new TL,this.Gt=new SL(this.Wt),this.zt=new AL(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new _i(this.indexId,this.documentKey,this.arrayValue,r)}}function hr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=rE(t.arrayValue,e.arrayValue),n!==0?n:(n=rE(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function rE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.Jt=new oe((n,r)=>me.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(U(e.collectionGroup===this.collectionId),this.Xt)return!1;const n=Yp(e);if(n!==void 0&&!this.tn(n))return!1;const r=fi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.nn(a,l)||!this.rn(this.Yt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new oe(me.comparator);const n=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Zu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Zu(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Zu(r.field,r.dir==="asc"?0:1)));return new Kc(Kc.UNKNOWN_ID,this.collectionId,n,cl.empty())}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){var e,n;if(U(t instanceof Y||t instanceof re),t instanceof Y){if(t instanceof bA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Y.create(t.field,"==",s)))||[];return re.create(i,"or")}return t}const r=t.filters.map(i=>fR(i));return re.create(r,t.op)}function RL(t){if(t.getFilters().length===0)return[];const e=um(fR(t));return U(pR(e)),am(e)||lm(e)?[e]:e.getFilters()}function am(t){return t instanceof Y}function lm(t){return t instanceof re&&l_(t)}function pR(t){return am(t)||lm(t)||function(n){if(n instanceof re&&em(n)){for(const r of n.getFilters())if(!am(r)&&!lm(r))return!1;return!0}return!1}(t)}function um(t){if(U(t instanceof Y||t instanceof re),t instanceof Y)return t;if(t.filters.length===1)return um(t.filters[0]);const e=t.filters.map(r=>um(r));let n=re.create(e,t.op);return n=Xc(n),pR(n)?n:(U(n instanceof re),U(so(n)),U(n.filters.length>1),n.filters.reduce((r,i)=>y_(r,i)))}function y_(t,e){let n;return U(t instanceof Y||t instanceof re),U(e instanceof Y||e instanceof re),n=t instanceof Y?e instanceof Y?function(i,s){return re.create([i,s],"and")}(t,e):sE(t,e):e instanceof Y?sE(e,t):function(i,s){if(U(i.filters.length>0&&s.filters.length>0),so(i)&&so(s))return kA(i,s.getFilters());const o=em(i)?i:s,a=em(i)?s:i,l=o.filters.map(u=>y_(u,a));return re.create(l,"or")}(t,e),Xc(n)}function sE(t,e){if(so(e))return kA(e,t.getFilters());{const n=e.filters.map(r=>y_(t,r));return re.create(n,"or")}}function Xc(t){if(U(t instanceof Y||t instanceof re),t instanceof Y)return t;const e=t.getFilters();if(e.length===1)return Xc(e[0]);if(PA(t))return t;const n=e.map(i=>Xc(i)),r=[];return n.forEach(i=>{i instanceof Y?r.push(i):i instanceof re&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:re.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(){this.on=new v_}addToCollectionParentIndex(e,n){return this.on.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(jt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class v_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new oe(ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new oe(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Uint8Array(0);class CL{constructor(e,n){this.user=e,this.databaseId=n,this._n=new v_,this.an=new ii(r=>Bi(r),(r,i)=>Wl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this._n.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this._n.add(n)});const s={collectionId:r,parent:vt(i)};return oE(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[dA(n),""],!1,!0);return oE(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(An(o.parent))}return r})}addFieldIndex(e,n){const r=Xo(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=hs(e);return s.next(a=>{o.put(Zw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Xo(e),i=hs(e),s=cs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Xo(e),r=cs(e),i=hs(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return w.forEach(this.un(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new iE(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=cs(e);let i=!0;const s=new Map;return w.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=W();const a=[];return w.forEach(s,(l,u)=>{R("IndexedDbIndexManager",`Using index ${function(_){return`id=${_.indexId}|cg=${_.collectionGroup}|f=${_.fields.map(T=>`${T.fieldPath}:${T.kind}`).join(",")}`}(l)} to execute ${Bi(n)}`);const c=function(_,T){const P=Yp(T);if(P===void 0)return null;for(const x of Qc(_,P.fieldPath))switch(x.op){case"array-contains-any":return x.value.arrayValue.values||[];case"array-contains":return[x.value]}return null}(u,l),h=function(_,T){const P=new Map;for(const x of fi(T))for(const b of Qc(_,x.fieldPath))switch(b.op){case"==":case"in":P.set(x.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return P.set(x.fieldPath.canonicalString(),b.value),Array.from(P.values())}return null}(u,l),d=function(_,T){const P=[];let x=!0;for(const b of fi(T)){const F=b.kind===0?Fw(_,b.fieldPath,_.startAt):Uw(_,b.fieldPath,_.startAt);P.push(F.value),x&&(x=F.inclusive)}return new Gr(P,x)}(u,l),f=function(_,T){const P=[];let x=!0;for(const b of fi(T)){const F=b.kind===0?Uw(_,b.fieldPath,_.endAt):Fw(_,b.fieldPath,_.endAt);P.push(F.value),x&&(x=F.inclusive)}return new Gr(P,x)}(u,l),g=this.ln(l,u,d),y=this.ln(l,u,f),v=this.hn(l,u,h),m=this.Pn(l.indexId,c,g,d.inclusive,y,f.inclusive,v);return w.forEach(m,p=>r.j(p,n.limit).next(_=>{_.forEach(T=>{const P=N.fromSegments(T.documentKey);o.has(P)||(o=o.add(P),a.push(P))})}))}).next(()=>a)}return w.resolve(null)})}un(e){let n=this.an.get(e);return n||(e.filters.length===0?n=[e]:n=RL(re.create(e.filters,"and")).map(r=>nm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,n),n)}Pn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.In(n[h/u]):Du,f=this.Tn(e,d,r[h%u],i),g=this.En(e,d,s[h%u],o),y=a.map(v=>this.Tn(e,d,v,!0));c.push(...this.createRange(f,g,y))}return c}Tn(e,n,r,i){const s=new _i(e,N.empty(),n,r);return i?s:s.Ht()}En(e,n,r,i){const s=new _i(e,N.empty(),n,r);return i?s.Ht():s}cn(e,n){const r=new iE(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return w.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new oe(me.comparator),c=!1;for(const h of l.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?c=!0:u=u.add(d.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}dn(e,n){const r=new Jo;for(const i of fi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);gi.St.ht(s,o)}return r.Ut()}In(e){const n=new Jo;return gi.St.ht(e,n.jt(0)),n.Ut()}An(e,n){const r=new Jo;return gi.St.ht($i(this.databaseId,n),r.jt(function(s){const o=fi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new Jo);let s=0;for(const o of fi(e)){const a=r[s++];for(const l of i)if(this.Rn(n,o.fieldPath)&&pl(a))i=this.Vn(i,o,a);else{const u=l.jt(o.kind);gi.St.ht(a,u)}}return this.mn(i)}ln(e,n,r){return this.hn(e,n,r.position)}mn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ut();return n}Vn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Jo;l.seed(a.Ut()),gi.St.ht(o,l.jt(n.kind)),s.push(l)}return s}Rn(e,n){return!!e.filters.find(r=>r instanceof Y&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Xo(e),i=hs(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const d=h?new cl(h.sequenceNumber,new jt(Wi(h.readTime),new N(An(h.documentKey)),h.largestBatchId)):cl.empty(),f=c.fields.map(([g,y])=>new Zu(me.fromServerFormat(g),y));return new Kc(c.indexId,c.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:q(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Xo(e),s=hs(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,l=>s.put(Zw(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,l=>this.gn(e,i,l).next(u=>{const c=this.pn(s,l);return u.isEqual(c)?w.resolve():this.yn(e,s,l,u,c)}))))})}wn(e,n,r,i){return cs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,n.key),documentKey:n.key.path.toArray()})}Sn(e,n,r,i){return cs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,n.key),n.key.path.toArray()])}gn(e,n,r){const i=cs(e);let s=new oe(hr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,n)])},(o,a)=>{s=s.add(new _i(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,n){let r=new oe(hr);const i=this.dn(n,e);if(i==null)return r;const s=Yp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(pl(o))for(const a of o.arrayValue.values||[])r=r.add(new _i(n.indexId,e.key,this.In(a),i))}else r=r.add(new _i(n.indexId,e.key,Du,i));return r}yn(e,n,r,i,s){R("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,d){const f=l.getIterator(),g=u.getIterator();let y=us(f),v=us(g);for(;y||v;){let m=!1,p=!1;if(y&&v){const _=c(y,v);_<0?p=!0:_>0&&(m=!0)}else y!=null?p=!0:m=!0;m?(h(v),v=us(g)):p?(d(y),y=us(f)):(y=us(f),v=us(g))}}(i,s,hr,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.Sn(e,n,r,a))}),w.waitFor(o)}fn(e){let n=1;return hs(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>hr(o,a)).filter((o,a,l)=>!a||hr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=hr(o,e),l=hr(o,n);if(a===0)i[0]=e.Ht();else if(a>0&&l<0)i.push(o),i.push(o.Ht());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Du,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Du,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return hr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(aE)}getMinOffset(e,n){return w.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||V())).next(aE)}}function oE(t){return Qe(t,"collectionParents")}function cs(t){return Qe(t,"indexEntries")}function Xo(t){return Qe(t,"indexConfiguration")}function hs(t){return Qe(t,"indexState")}function aE(t){U(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;s_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new jt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{U(a===1)}));const u=[];for(const c of n.mutations){const h=yA(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return w.waitFor(s).next(()=>u)}function Zc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw V();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);class rd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,n,r,i){U(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new rd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=vs(e),o=dr(e);return o.add({}).next(a=>{U(typeof a=="number");const l=new d_(a,n,r,i),u=function(f,g,y){const v=y.baseMutations.map(p=>yl(f.ut,p)),m=y.mutations.map(p=>yl(f.ut,p));return{userId:g,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:m}}(this.serializer,this.userId,l),c=[];let h=new oe((d,f)=>q(d.canonicalString(),f.canonicalString()));for(const d of i){const f=yA(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,gV))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=l.keys()}),w.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return dr(e).get(n).next(r=>r?(U(r.userId===this.userId),mi(this.serializer,r)):null)}Cn(e,n){return this.Dn[n]?w.resolve(this.Dn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Dn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return dr(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(U(a.batchId>=r),s=mi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return dr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return dr(e).W("userMutationsIndex",n).next(r=>r.map(i=>mi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ec(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return vs(e).Y({range:i},(o,a,l)=>{const[u,c,h]=o,d=An(c);if(u===this.userId&&n.path.isEqual(d))return dr(e).get(h).next(f=>{if(!f)throw V();U(f.userId===this.userId),s.push(mi(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new oe(q);const i=[];return n.forEach(s=>{const o=ec(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=vs(e).Y({range:a},(u,c,h)=>{const[d,f,g]=u,y=An(f);d===this.userId&&s.path.isEqual(y)?r=r.add(g):h.done()});i.push(l)}),w.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=ec(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new oe(q);return vs(e).Y({range:o},(l,u,c)=>{const[h,d,f]=l,g=An(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):c.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(dr(e).get(s).next(o=>{if(o===null)throw V();U(o.userId===this.userId),r.push(mi(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return mR(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Fn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return vs(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=An(s[1]);i.push(l)}else a.done()}).next(()=>{U(i.length===0)})})}containsKey(e,n){return gR(e,this.userId,n)}Mn(e){return _R(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function gR(t,e,n){const r=ec(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return vs(t).Y({range:s,J:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function dr(t){return Qe(t,"mutations")}function vs(t){return Qe(t,"documentMutations")}function _R(t){return Qe(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Gi(0)}static Nn(){return new Gi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new Gi(n.highestTargetId);return n.highestTargetId=r.next(),this.Ln(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>$.fromTimestamp(new _e(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Ln(e,i)))}addTargetData(e,n){return this.kn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(n,r),this.Ln(e,r))))}updateTargetData(e,n){return this.kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ds(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(U(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ds(e).Y((o,a)=>{const l=fa(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ds(e).Y((r,i)=>{const s=fa(i);n(s)})}Bn(e){return uE(e).get("targetGlobalKey").next(n=>(U(n!==null),n))}Ln(e,n){return uE(e).put("targetGlobalKey",n)}kn(e,n){return ds(e).put(dR(this.serializer,n))}qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Bi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ds(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=fa(a);Wl(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=vr(e);return n.forEach(o=>{const a=vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=vr(e);return w.forEach(n,s=>{const o=vt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=vr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=vr(e);let s=W();return i.Y({range:r,J:!0},(o,a,l)=>{const u=An(o[1]),c=new N(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=vt(n.path),i=IDBKeyRange.bound([r],[dA(r)],!1,!0);let s=0;return vr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return ds(e).get(n).next(r=>r?fa(r):null)}}function ds(t){return Qe(t,"targets")}function uE(t){return Qe(t,"targetGlobal")}function vr(t){return Qe(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE([t,e],[n,r]){const i=q(t,n);return i===0?q(e,r):i}class xL{constructor(e){this.Qn=e,this.buffer=new oe(cE),this.Kn=0}$n(){return++this.Kn}Un(e){const n=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class NL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ri(n)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ni(n)}await this.Gn(3e5)})}}class bL{constructor(e,n){this.zn=e,this.params=n}calculateTargetCount(e,n){return this.zn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Ct._e);const r=new xL(n);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(lE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lE):this.Jn(e,n))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ms()<=Q.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function DL(t,e){return new bL(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n){this.db=e,this.garbageCollector=DL(this,n)}jn(e){const n=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Yn(e){let n=0;return this.Hn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Hn(e,n){return this.Zn(e,(r,i)=>n(i))}addReference(e,n,r){return Ou(e,r)}removeReference(e,n,r){return Ou(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Ou(e,n)}Xn(e,n){return function(i,s){let o=!1;return _R(i).Z(a=>gR(i,a,s).next(l=>(l&&(o=!0),w.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,$.min()),vr(e).delete(function(h){return[0,vt(h.path)]}(o))))});i.push(l)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Ou(e,n)}Zn(e,n){const r=vr(e);let i,s=Ct._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Ct._e&&n(new N(An(i)),s),s=u,i=l):s=Ct._e}).next(()=>{s!==Ct._e&&n(new N(An(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ou(t,e){return vr(t).put(function(r,i){return{targetId:0,path:vt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.changes=new ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ui(e).put(r)}removeEntry(e,n,r){return ui(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Jc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.er(e,r)))}getEntry(e,n){let r=de.newInvalidDocument(n);return ui(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Zo(n))},(i,s)=>{r=this.tr(n,s)}).next(()=>r)}nr(e,n){let r={size:0,document:de.newInvalidDocument(n)};return ui(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Zo(n))},(i,s)=>{r={document:this.tr(n,s),size:Zc(s)}}).next(()=>r)}getEntries(e,n){let r=xt();return this.rr(e,n,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,n){let r=xt(),i=new ue(N.comparator);return this.rr(e,n,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Zc(o))}).next(()=>({documents:r,sr:i}))}rr(e,n,r){if(n.isEmpty())return w.resolve();let i=new oe(fE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Zo(i.first()),Zo(i.last())),o=i.getIterator();let a=o.getNext();return ui(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=N.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&fE(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(Zo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Jc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ui(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=xt();for(const h of u){const d=this.tr(N.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Kl(n,d)||i.has(d.key))&&(c=c.insert(d.key,d))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=xt();const o=dE(n,r),a=dE(n,jt.max());return ui(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.tr(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new LL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return hE(e).get("remoteDocumentGlobalKey").next(n=>(U(!!n),n))}er(e,n){return hE(e).put("remoteDocumentGlobalKey",n)}tr(e,n){if(n){const r=wL(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual($.min())))return r}return de.newInvalidDocument(e)}}function vR(t){return new VL(t)}class LL extends yR{constructor(e,n){super(),this._r=e,this.trackRemovals=n,this.ar=new ii(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new oe((s,o)=>q(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(n.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Jw(this._r.serializer,o);i=i.add(s.path.popLast());const u=Zc(l);r+=u-a.size,n.push(this._r.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Jw(this._r.serializer,o.convertToNoDocument($.min()));n.push(this._r.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),n.push(this._r.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this._r.nr(e,n).next(r=>(this.ar.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this._r.ir(e,n).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function hE(t){return Qe(t,"remoteDocumentGlobal")}function ui(t){return Qe(t,"remoteDocumentsV14")}function Zo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function dE(t,e){const n=e.documentKey.path.toArray();return[t,Jc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function fE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=q(n[s],r[s]),i)return i;return i=q(n.length,r.length),i||(i=q(n[n.length-2],r[r.length-2]),i||q(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ca(r.mutation,i,kt.empty(),_e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Rn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ha();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=xt();const o=Pa(),a=function(){return Pa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof sr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ca(c.mutation,u,c.mutation.getFieldMask(),_e.now())):o.set(u.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new ML(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Pa();let i=new ue((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||kt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=UA();c.forEach(d=>{if(!s.has(d)){const f=KA(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):u_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Rn());let a=-1,l=s;return o.next(u=>w.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:FA(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let i=ha();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ha();return this.indexManager.getCollectionParents(e,s).next(a=>w.forEach(a,l=>{const u=function(h,d){return new ir(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,de.newInvalidDocument(c)))});let a=ha();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ca(c.mutation,u,kt.empty(),_e.now()),Kl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return w.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:De(i.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:__(i.bundledQuery),readTime:De(i.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(){this.overlays=new ue(N.comparator),this.lr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Rn(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Rn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Rn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return w.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new p_(n,r));let s=this.lr.get(n);s===void 0&&(s=W(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.hr=new oe(je.Pr),this.Ir=new oe(je.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new je(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new je(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new N(new ee([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new N(new ee([])),r=new je(n,e),i=new je(n,e+1);let s=W();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return N.comparator(e.key,n.key)||q(e.gr,n.gr)}static Tr(e,n){return q(e.gr,n.gr)||N.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new oe(je.Pr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new oe(q);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),w.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new je(new N(s),0);let a=new oe(q);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),w.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){U(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return w.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new je(n,0),i=this.yr.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e){this.Cr=e,this.docs=function(){return new ue(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():de.newInvalidDocument(n))}getEntries(e,n){let r=xt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():de.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xt();const o=n.path,a=new N(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||s_(pA(c),r)<=0||(i.has(c.key)||Kl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){V()}vr(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jL(this)}getSize(e){return w.resolve(this.size)}}class jL extends yR{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e){this.persistence=e,this.Fr=new ii(n=>Bi(n),Wl),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Mr=0,this.Or=new w_,this.targetCount=0,this.Nr=Gi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),w.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.kn(n),w.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ct(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new zL(this),this.indexManager=new PL,this.remoteDocumentCache=function(i){return new BL(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new hR(n),this.Kr=new FL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new $L(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new qL(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return w.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class qL extends gA{constructor(e){super(),this.currentSequenceNumber=e}}class id{constructor(e){this.persistence=e,this.Gr=new w_,this.zr=null}static jr(e){return new id(e)}get Hr(){if(this.zr)return this.zr;throw V()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Hr,r=>{const i=N.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return w.or([()=>w.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.serializer=e}N(e,n,r,i){const s=new Xh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Cw,{unique:!0}),l.createObjectStore("documentMutations")}(e),pE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),pE(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:$.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Cw,{unique:!0});const h=u.store("mutations"),d=c.map(f=>h.put(f));return w.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:CV});u.createIndex("collectionPathOverlayIndex",kV,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",xV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:_V});u.createIndex("documentKeyIndex",yV),u.createIndex("collectionGroupIndex",vV)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:SV}).createIndex("sequenceNumberIndex",AV,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:RV}).createIndex("documentKeyIndex",PV,{unique:!1})}(e))),o}Xr(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=Zc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,l=>{U(l.userId===s.userId);const u=mi(this.serializer,l);return mR(e,s.userId,u).next(()=>{})}))}))}ei(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new ee(o),u=function(h){return[0,vt(h)]}(l);s.push(n.get(u).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:vt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:TV});const r=n.store("collectionParents"),i=new v_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:vt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new ee(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=An(a);return s(c.popLast())}))}ni(e){const n=e.store("targets");return n.Y((r,i)=>{const s=fa(i),o=dR(this.serializer,s);return n.put(o)})}ri(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new N(ee.fromString(h.document.name).popFirst(5)):h.noDocument?N.fromSegments(h.noDocument.path):h.unknownDocument?N.fromSegments(h.unknownDocument.path):V()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>w.waitFor(i))}ii(e,n){const r=n.store("mutations"),i=vR(this.serializer),s=new ER(id.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:W();mi(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),w.forEach(a,(l,u)=>{const c=new qe(u),h=nd.ct(this.serializer,c),d=s.getIndexManager(c),f=rd.ct(c,this.serializer,d,s.referenceDelegate);return new wR(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Jp(n,Ct._e),l).next()})})}}function pE(t){t.createObjectStore("targetDocuments",{keyPath:EV}).createIndex("documentTargetsIndex",IV,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",wV,{unique:!0}),t.createObjectStore("targetGlobal")}const Sf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class E_{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=c,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!E_.D())throw new A(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new OL(this,i),this.Ii=n+"main",this.serializer=new hR(l),this.Ti=new an(this.Ii,this.ai,new WL(this.serializer)),this.qr=new kL(this.referenceDelegate,this.serializer),this.remoteDocumentCache=vR(this.serializer),this.Kr=new EL,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,c===!1&&be("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(E.FAILED_PRECONDITION,Sf);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new Ct(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Vu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(n=>this.isPrimary&&!n?this.pi(e).next(()=>!1):!!n&&this.yi(e).next(()=>!0))).catch(e=>{if(ri(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return ea(e).get("owner").next(n=>w.resolve(this.wi(n)))}Si(e){return Vu(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Qe(n,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const n of e)this.Ei.removeItem(this.vi(n.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?w.resolve(!0):ea(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)){if(this.wi(n)&&this.networkEnabled)return!0;if(!this.wi(n)){if(!n.allowTabSynchronization)throw new A(E.FAILED_PRECONDITION,Sf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Vu(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Jp(e,Ct._e);return this.pi(n).next(()=>this.Si(n))}),this.Ti.close(),this.Ni()}Ci(e,n){return e.filter(r=>this.Di(r.updateTimeMs,n)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Vu(e).W().next(n=>this.Ci(n,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,n){return rd.ct(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new CL(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return nd.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?bV:l===14?EA:l===13?wA:l===12?NV:l===11?vA:void V()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new Jp(a,this.Lr?this.Lr.next():Ct._e),n==="readwrite-primary"?this.fi(o).next(l=>!!l||this.gi(o)).next(l=>{if(!l)throw be(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new A(E.FAILED_PRECONDITION,mA);return r(o)}).next(l=>this.yi(o).next(()=>l)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return ea(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)&&!this.wi(n)&&!(this._i||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(E.FAILED_PRECONDITION,Sf)})}yi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ea(e).put("owner",n)}static D(){return an.D()}pi(e){const n=ea(e);return n.get("owner").next(r=>this.wi(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}Di(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(be(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const n=/(?:Version|Mobile)\/1[456]/;wb()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var n;try{const r=((n=this.Ei)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return be("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){be("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ea(t){return Qe(t,"owner")}function Vu(t){return Qe(t,"clientMetadata")}function I_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new T_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GL;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(ms()<=Q.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),w.resolve()):(ms()<=Q.DEBUG&&R("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(ms()<=Q.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(n))):w.resolve())}zi(e,n){if($w(n))return w.resolve(null);let r=wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yc(n,null,"F"),r=wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Yc(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return $w(n)||i.isEqual($.min())?w.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?w.resolve(null):(ms()<=Q.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.Xi(e,o,n,fA(i,-1)).next(a=>a))})}Yi(e,n){let r=new oe(LA(e));return n.forEach((i,s)=>{Kl(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return ms()<=Q.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Gi.getDocumentsMatchingQuery(e,n,jt.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ue(q),this.ns=new ii(s=>Bi(s),Wl),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function TR(t,e,n,r){return new KL(t,e,n,r)}async function SR(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function HL(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=w.resolve();return d.forEach(g=>{f=f.next(()=>c.getEntry(l,g)).next(y=>{const v=u.docVersions.get(g);U(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AR(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function QL(t,e){const n=D(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken($e.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(y,v,m){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.qr.updateTargetData(s,f))});let l=xt(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(RR(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual($.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function RR(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function YL(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uo(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function co(t,e,n){const r=D(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ri(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function eh(t,e,n){const r=D(t);let i=$.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=D(l),d=h.ns.get(c);return d!==void 0?w.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:W())).next(a=>(kR(r,VA(e),a),{documents:a,ls:s})))}function PR(t,e){const n=D(t),r=D(n.qr),i=n.ts.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function CR(t,e){const n=D(t),r=n.rs.get(e)||$.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ss.getAllFromCollectionGroup(i,e,fA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(kR(n,e,i),i))}function kR(t,e,n){let r=t.rs.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}async function JL(t,e,n,r){const i=D(t);let s=W(),o=xt();for(const u of n){const c=e.hs(u.metadata.name);u.document&&(s=s.add(c));const h=e.Ps(u);h.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(c,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),l=await uo(i,function(c){return wt(Ro(ee.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>RR(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.us,c.cs)).next(()=>c.us)))}async function XL(t,e,n=W()){const r=await uo(t,wt(__(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=De(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken($e.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function mE(t,e){return`firestore_clients_${t}_${e}`}function gE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Af(t,e){return`firestore_targets_${t}_${e}`}class th{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ts(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new th(e,n,i.state,s):(be("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ka{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ts(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new ka(e,r.state,i):(be("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ts(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=c_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=_A(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new nh(e,s):(be("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class S_{constructor(e,n){this.clientId=e,this.onlineState=n}static Ts(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new S_(n.clientId,n.onlineState):(be("SharedClientState",`Failed to parse online state: ${e}`),null)}}class cm{constructor(){this.activeTargetIds=c_()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rf{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new ue(q),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=mE(this.persistenceKey,this.Rs),this.ws=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new cm),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.vs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(mE(this.persistenceKey,r));if(i){const s=nh.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const n=this.storage.getItem(this.Cs);if(n){const r=this.Ms(n);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let n=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,n,r){this.Ns(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Af(this.persistenceKey,e));if(r){const i=ka.Ts(e,r);i&&(n=i.state)}}return this.Ls.ds(e),this.Fs(),n}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Af(this.persistenceKey,e))}updateQueryState(e,n,r){this.ks(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ys)return void be("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ss.test(n.key)){if(n.newValue==null){const r=this.Ks(n.key);return this.$s(r,null)}{const r=this.Us(n.key,n.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(n.key)){if(n.newValue!==null){const r=this.Ws(n.key,n.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(n.key===this.Cs){if(n.newValue!==null){const r=this.Ms(n.newValue);if(r)return this.xs(r)}}else if(n.key===this.ws){const r=function(s){let o=Ct._e;if(s!=null)try{const a=JSON.parse(s);U(typeof a=="number"),o=a}catch(a){be("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ct._e&&this.sequenceNumberHandler(r)}else if(n.key===this.vs){const r=this.Hs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(n)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,n,r){const i=new th(this.currentUser,e,n,r),s=gE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const n=gE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}qs(e){const n={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(n))}ks(e,n,r){const i=Af(this.persistenceKey,e),s=new ka(e,n,r);this.setItem(i,s.Es())}Qs(e){const n=JSON.stringify(Array.from(e));this.setItem(this.vs,n)}Ks(e){const n=this.Ss.exec(e);return n?n[1]:null}Us(e,n){const r=this.Ks(e);return nh.Ts(r,n)}Ws(e,n){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return th.Ts(new qe(s),i,n)}zs(e,n){const r=this.Ds.exec(e),i=Number(r[1]);return ka.Ts(i,n)}Ms(e){return S_.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,n){const r=n?this.gs.insert(e,n):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let n=c_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class xR{constructor(){this.eo=new cm,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new cm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu=null;function Pf(){return Lu===null?Lu=function(){return 268435456+Math.round(2147483648*Math.random())}():Lu++,"0x"+Lu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class nM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Pf(),l=this.So(n,r);R("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(R("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw dn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ao}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=eM[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Pf();return new Promise((o,a)=>{const l=new JO;l.setWithCredentials(!0),l.listenOnce(QO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case If.NO_ERROR:const c=l.getResponseJson();R(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case If.TIMEOUT:R(lt,`RPC '${e}' ${s} timed out`),a(new A(E.DEADLINE_EXCEEDED,"Request time out"));break;case If.HTTP_ERROR:const h=l.getStatus();if(R(lt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const m=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(f.status);a(new A(g,f.message))}else a(new A(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(E.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{R(lt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(lt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Pf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KO(),a=HO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(lt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const g=new tM({co:v=>{f?R(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(R(lt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),R(lt,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},lo:()=>h.close()}),y=(v,m,p)=>{v.listen(m,_=>{try{p(_)}catch(T){setTimeout(()=>{throw T},0)}})};return y(h,Nu.EventType.OPEN,()=>{f||R(lt,`RPC '${e}' stream ${i} transport opened.`)}),y(h,Nu.EventType.CLOSE,()=>{f||(f=!0,R(lt,`RPC '${e}' stream ${i} transport closed`),g.Ro())}),y(h,Nu.EventType.ERROR,v=>{f||(f=!0,dn(lt,`RPC '${e}' stream ${i} transport errored:`,v),g.Ro(new A(E.UNAVAILABLE,"The operation could not be completed")))}),y(h,Nu.EventType.MESSAGE,v=>{var m;if(!f){const p=v.data[0];U(!!p);const _=p,T=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(T){R(lt,`RPC '${e}' stream ${i} received error:`,T);const P=T.status;let x=function(ae){const K=Ve[ae];if(K!==void 0)return YA(K)}(P),b=T.message;x===void 0&&(x=E.INTERNAL,b="Unknown error status: "+P+" with message "+T.message),f=!0,g.Ro(new A(x,b)),h.close()}else R(lt,`RPC '${e}' stream ${i} received:`,p),g.Vo(p)}}),y(a,YO.STAT_EVENT,v=>{v.stat===Sw.PROXY?R(lt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Sw.NOPROXY&&R(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(){return typeof window<"u"?window:null}function sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t){return new cL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new A_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(be(n.toString()),be("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new A(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rM extends bR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=fL(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?De(o.readTime):$.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=_l(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Hc(l)?{documents:sR(s,l)}:{query:oR(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=eR(s,o.resumeToken);const u=im(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=lo(s,o.snapshotVersion.toTimestamp());const u=im(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=mL(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=_l(this.serializer),n.removeTarget=e,this.e_(n)}}class iM extends bR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=pL(e.writeResults,e.commitTime),r=De(e.commitTime);return this.listener.I_(r,n)}return U(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=_l(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yl(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(E.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(E.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class oM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(be(n),this.f_=!1):R("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{si(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=D(l);u.C_.add(4),await ko(u),u.M_.set("Unknown"),u.C_.delete(4),await Xl(u)}(this))})}),this.M_=new oM(r,i)}}async function Xl(t){if(si(t))for(const e of t.v_)await e(!0)}async function ko(t){for(const e of t.v_)await e(!1)}function sd(t,e){const n=D(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),C_(n)?P_(n):No(n).Ho()&&R_(n,e))}function vl(t,e){const n=D(t),r=No(n);n.D_.delete(e),r.Ho()&&DR(n,e),n.D_.size===0&&(r.Ho()?r.Zo():si(n)&&n.M_.set("Unknown"))}function R_(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}No(t).u_(e)}function DR(t,e){t.x_.Oe(e),No(t).c_(e)}function P_(t){t.x_=new oL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),No(t).start(),t.M_.g_()}function C_(t){return si(t)&&!No(t).jo()&&t.D_.size>0}function si(t){return D(t).C_.size===0}function OR(t){t.x_=void 0}async function lM(t){t.D_.forEach((e,n)=>{R_(t,e)})}async function uM(t,e){OR(t),C_(t)?(t.M_.w_(e),P_(t)):t.M_.set("Unknown")}async function cM(t,e,n){if(t.M_.set("Online"),e instanceof ZA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rh(t,r)}else if(e instanceof ic?t.x_.$e(e):e instanceof XA?t.x_.Je(e):t.x_.Ge(e),!n.isEqual($.min()))try{const r=await AR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken($e.EMPTY_BYTE_STRING,c.snapshotVersion)),DR(s,l);const h=new zn(c.target,l,u,c.sequenceNumber);R_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await rh(t,r)}}async function rh(t,e,n){if(!ri(e))throw e;t.C_.add(1),await ko(t),t.M_.set("Offline"),n||(n=()=>AR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Xl(t)})}function VR(t,e){return e().catch(n=>rh(t,n,e))}async function xo(t){const e=D(t),n=Kr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;hM(e);)try{const i=await YL(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,dM(e,i)}catch(i){await rh(e,i)}LR(e)&&MR(e)}function hM(t){return si(t)&&t.b_.length<10}function dM(t,e){t.b_.push(e);const n=Kr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function LR(t){return si(t)&&!Kr(t).jo()&&t.b_.length>0}function MR(t){Kr(t).start()}async function fM(t){Kr(t).E_()}async function pM(t){const e=Kr(t);for(const n of t.b_)e.P_(n.mutations)}async function mM(t,e,n){const r=t.b_.shift(),i=f_.from(r,e,n);await VR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xo(t)}async function gM(t,e){e&&Kr(t).h_&&await async function(r,i){if(function(o){return QA(o)&&o!==E.ABORTED}(i.code)){const s=r.b_.shift();Kr(r).Yo(),await VR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xo(r)}}(t,e),LR(t)&&MR(t)}async function yE(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=si(n);n.C_.add(3),await ko(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Xl(n)}async function hm(t,e){const n=D(t);e?(n.C_.delete(2),await Xl(n)):e||(n.C_.add(2),await ko(n),n.M_.set("Unknown"))}function No(t){return t.O_||(t.O_=function(n,r,i){const s=D(n);return s.A_(),new rM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:lM.bind(null,t),Io:uM.bind(null,t),a_:cM.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),C_(t)?P_(t):t.M_.set("Unknown")):(await t.O_.stop(),OR(t))})),t.O_}function Kr(t){return t.N_||(t.N_=function(n,r,i){const s=D(n);return s.A_(),new iM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:fM.bind(null,t),Io:gM.bind(null,t),T_:pM.bind(null,t),I_:mM.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await xo(t)):(await t.N_.stop(),t.b_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new k_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bo(t,e){if(be("AsyncQueue",`${e}: ${t}`),ri(t))return new A(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=ha(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.B_=new ue(N.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):V():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ho{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ho(e,n,qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(){this.k_=void 0,this.listeners=[]}}class yM{constructor(){this.queries=new ii(e=>OA(e),Gl),this.onlineState="Unknown",this.q_=new Set}}async function x_(t,e){const n=D(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _M),i)try{s.k_=await n.onListen(r)}catch(o){const a=bo(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&b_(n)}async function N_(t,e){const n=D(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vM(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&b_(n)}function wM(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function b_(t){t.q_.forEach(e=>{e.next()})}class D_{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n){this.Y_=e,this.byteLength=n}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.serializer=e}hs(e){return bn(this.serializer,e)}Ps(e){return e.metadata.exists?iR(this.serializer,e.document,!1):de.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return De(e)}}class IM{constructor(e,n,r){this.X_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=FR(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++n;const r=ee.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ta(e){const n=new Map,r=new wE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||W()).add(s);n.set(o,a)}}return n}async complete(){const e=await JL(this.localStore,new wE(this.serializer),this.documents,this.X_.id),n=this.ta(this.documents);for(const r of this.queries)await XL(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function FR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.key=e}}class $R{constructor(e){this.key=e}}class BR{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=W(),this.mutatedKeys=W(),this._a=LA(e),this.aa=new qs(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new vE,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Kl(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),v=!0):this.ha(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this._a(f,l)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,h)=>function(f,g){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return y(f)-y(g)}(c.type,h.type)||this._a(c.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new ho(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new vE,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=W(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new $R(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new UR(r))}),n}da(e){this.ia=e.ls,this.oa=W();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ho.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class TM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SM{constructor(e){this.key=e,this.Ra=!1}}class AM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ii(a=>OA(a),Gl),this.fa=new Map,this.ga=new Set,this.pa=new ue(N.comparator),this.ya=new Map,this.wa=new w_,this.Sa={},this.ba=new Map,this.Da=Gi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function RM(t,e){const n=F_(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await uo(n.localStore,wt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await O_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&sd(n.remoteStore,o)}return i}async function O_(t,e,n,r,i){t.va=(h,d,f)=>async function(y,v,m,p){let _=v.view.ca(m);_.Zi&&(_=await eh(y.localStore,v.query,!1).then(({documents:b})=>v.view.ca(b,_)));const T=p&&p.targetChanges.get(v.targetId),P=p&&p.targetMismatches.get(v.targetId)!=null,x=v.view.applyChanges(_,y.isPrimaryClient,T,P);return dm(y,v.targetId,x.Ta),x.snapshot}(t,h,d,f);const s=await eh(t.localStore,e,!0),o=new BR(e,s.ls),a=o.ca(s.documents),l=Yl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);dm(t,n,u.Ta);const c=new TM(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function PM(t,e){const n=D(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Gl(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await co(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),vl(n.remoteStore,r.targetId),fo(n,r.targetId)}).catch(ni)):(fo(n,r.targetId),await co(n.localStore,r.targetId,!0))}async function CM(t,e,n){const r=U_(t);try{const i=await function(o,a){const l=D(o),u=_e.now(),c=a.reduce((f,g)=>f.add(g.key),W());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=xt(),y=W();return l.ss.getEntries(f,c).next(v=>{g=v,g.forEach((m,p)=>{p.isValidDocument()||(y=y.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const m=[];for(const p of a){const _=rL(p,h.get(p.key).overlayedDocument);_!=null&&m.push(new sr(p.key,_,AA(_.value.mapValue),ge.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(v=>{d=v;const m=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,m)})}).then(()=>({batchId:d.batchId,changes:FA(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new ue(q)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await or(r,i.changes),await xo(r.remoteStore)}catch(i){const s=bo(i,"Failed to persist write");n.reject(s)}}async function jR(t,e){const n=D(t);try{const r=await QL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?U(o.Ra):i.removedDocuments.size>0&&(U(o.Ra),o.Ra=!1))}),await or(n,r,e)}catch(r){await ni(r)}}function EE(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=D(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&b_(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kM(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new ue(N.comparator);o=o.insert(s,de.newNoDocument(s,$.min()));const a=W().add(s),l=new Ql($.min(),new Map,new ue(q),o,a);await jR(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),M_(r)}else await co(r.localStore,e,!1).then(()=>fo(r,e,n)).catch(ni)}async function xM(t,e){const n=D(t),r=e.batch.batchId;try{const i=await HL(n.localStore,e);L_(n,r,null),V_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await or(n,i)}catch(i){await ni(i)}}async function NM(t,e,n){const r=D(t);try{const i=await function(o,a){const l=D(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(U(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);L_(r,e,n),V_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await or(r,i)}catch(i){await ni(i)}}async function bM(t,e){const n=D(t);si(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=D(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ba.get(r)||[];i.push(e),n.ba.set(r,i)}catch(r){const i=bo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function V_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function L_(t,e,n){const r=D(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function fo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||zR(t,r)})}function zR(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(vl(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),M_(t))}function dm(t,e,n){for(const r of n)r instanceof UR?(t.wa.addReference(r.key,e),DM(t,r)):r instanceof $R?(R("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||zR(t,r.key)):V()}function DM(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ga.add(r),M_(t))}function M_(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new N(ee.fromString(e)),r=t.Da.next();t.ya.set(r,new SM(n)),t.pa=t.pa.insert(n,r),sd(t.remoteStore,new zn(wt(Ro(n.path)),r,"TargetPurposeLimboResolution",Ct._e))}}async function or(t,e,n){const r=D(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=T_.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=D(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(u,d=>w.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>w.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ri(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);c.ts=c.ts.insert(d,y)}}}(r.localStore,s))}async function OM(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await SR(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new A(E.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await or(n,r._s)}}function VM(t,e){const n=D(t),r=n.ya.get(e);if(r&&r.Ra)return W().add(r.key);{let i=W();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function LM(t,e){const n=D(t),r=await eh(n.localStore,e.query,!0),i=e.view.da(r);return n.isPrimaryClient&&dm(n,e.targetId,i.Ta),i}async function MM(t,e){const n=D(t);return CR(n.localStore,e).then(r=>or(n,r))}async function FM(t,e,n,r){const i=D(t),s=await function(a,l){const u=D(a),c=D(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.Cn(h,l).next(d=>d?u.localDocuments.getDocuments(h,d):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await xo(i.remoteStore):n==="acknowledged"||n==="rejected"?(L_(i,e,r||null),V_(i,e),function(a,l){D(D(a).mutationQueue).Fn(l)}(i.localStore,e)):V(),await or(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function UM(t,e){const n=D(t);if(F_(n),U_(n),e===!0&&n.Ca!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await IE(n,r.toArray());n.Ca=!0,await hm(n.remoteStore,!0);for(const s of i)sd(n.remoteStore,s)}else if(e===!1&&n.Ca!==!1){const r=[];let i=Promise.resolve();n.fa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(fo(n,o),co(n.localStore,o,!0))),vl(n.remoteStore,o)}),await i,await IE(n,r),function(o){const a=D(o);a.ya.forEach((l,u)=>{vl(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new ue(N.comparator)}(n),n.Ca=!1,await hm(n.remoteStore,!1)}}async function IE(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const l=r.fa.get(o);if(l&&l.length!==0){a=await uo(r.localStore,wt(l[0]));for(const u of l){const c=r.ma.get(u),h=await LM(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await PR(r.localStore,o);a=await uo(r.localStore,u),await O_(r,qR(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function qR(t){return DA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function $M(t){return function(n){return D(D(n).persistence).Bi()}(D(t).localStore)}async function BM(t,e,n,r){const i=D(t);if(i.Ca)return void R("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await CR(i.localStore,VA(s[0])),a=Ql.createSynthesizedRemoteEventForCurrentChange(e,n==="current",$e.EMPTY_BYTE_STRING);await or(i,o,a);break}case"rejected":await co(i.localStore,e,!0),fo(i,e,r);break;default:V()}}async function jM(t,e,n){const r=F_(t);if(r.Ca){for(const i of e){if(r.fa.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await PR(r.localStore,i),o=await uo(r.localStore,s);await O_(r,qR(s),o.targetId,!1,o.resumeToken),sd(r.remoteStore,o)}for(const i of n)r.fa.has(i)&&await co(r.localStore,i,!1).then(()=>{vl(r.remoteStore,i),fo(r,i)}).catch(ni)}}function F_(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kM.bind(null,e),e.Va.a_=vM.bind(null,e.eventManager),e.Va.Fa=wM.bind(null,e.eventManager),e}function U_(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NM.bind(null,e),e}function zM(t,e,n){const r=D(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,g){const y=D(f),v=De(g.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",m=>y.Kr.getBundleMetadata(m,g.id)).then(m=>!!m&&m.createTime.compareTo(v)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(FR(l));const u=new IM(l,s.localStore,o.serializer);let c=await o.Ma();for(;c;){const d=await u.ea(c);d&&a._updateProgress(d),c=await o.Ma()}const h=await u.complete();return await or(s,h.ra,void 0),await function(f,g){const y=D(f);return y.persistence.runTransaction("Save bundle","readwrite",v=>y.Kr.saveBundleMetadata(v,g))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.na)}catch(l){return dn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class fm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return TR(this.persistence,new IR,e.initialUser,this.serializer)}createPersistence(e){return new ER(id.jr,this.serializer)}createSharedClientState(e){return new xR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WR extends fm{constructor(e,n,r){super(),this.xa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await U_(this.xa.syncEngine),await xo(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return TR(this.persistence,new IR,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new NL(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new pV(n,this.persistence);return new fV(e.asyncQueue,r)}createPersistence(e){const n=I_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new E_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,NR(),sc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new xR}}class qM extends WR{constructor(e,n){super(e,n,!1),this.xa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xa.syncEngine;this.sharedClientState instanceof Rf&&(this.sharedClientState.syncEngine={Ys:FM.bind(null,n),Zs:BM.bind(null,n),Xs:jM.bind(null,n),Bi:$M.bind(null,n),Js:MM.bind(null,n)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await UM(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=NR();if(!Rf.D(n))throw new A(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=I_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Rf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class $_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>EE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OM.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yM}()}createDatastore(e){const n=Jl(e.databaseInfo.databaseId),r=function(s){return new nM(s)}(e.databaseInfo);return function(s,o,a,l){return new sM(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new aM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>EE(this.syncEngine,n,0),function(){return _E.D()?new _E:new ZL}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new AM(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=D(n);R("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ko(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):be("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n){this.Ba=e,this.serializer=n,this.metadata=new Ge,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const n=this.La.decode(e),r=Number(n);isNaN(r)&&this.Qa(`length string (${n}) is not valid number`);const i=await this.Ka(r);return new EM(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e===123)}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const n=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=D(i),a=_l(o.serializer)+"/documents",l={documents:s.map(d=>gl(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=dL(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());U(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Co(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=N.fromPath(r);this.mutations.push(new h_(i,this.precondition(i)))}),await async function(r,i){const s=D(r),o=_l(s.serializer)+"/documents",a={writes:i.map(l=>yl(s.serializer,l))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw V();n=$.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual($.min())?ge.exists(!1):ge.updateTime(n):ge.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual($.min()))throw new A(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ge.updateTime(n)}return ge.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new A_(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new GM(this.datastore),n=this.za(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const n=this.updateFunction(e);return!ql(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!QA(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=hA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oc(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await SR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await B_(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>yE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>yE(e.remoteStore,s)),t._onlineComponents=e}function GR(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function B_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!GR(n))throw n;dn("Error using user provided cache. Falling back to memory cache: "+n),await oc(t,new fm)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await oc(t,new fm);return t._offlineComponents}async function ad(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await pm(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await pm(t,new $_))),t._onlineComponents}function KR(t){return B_(t).then(e=>e.persistence)}function j_(t){return B_(t).then(e=>e.localStore)}function HR(t){return ad(t).then(e=>e.remoteStore)}function z_(t){return ad(t).then(e=>e.syncEngine)}function QM(t){return ad(t).then(e=>e.datastore)}async function po(t){const e=await ad(t),n=e.eventManager;return n.onListen=RM.bind(null,e.syncEngine),n.onUnlisten=PM.bind(null,e.syncEngine),n}function YM(t){return t.asyncQueue.enqueue(async()=>{const e=await KR(t),n=await HR(t);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.C_.delete(0),Xl(s)}(n)})}function JM(t){return t.asyncQueue.enqueue(async()=>{const e=await KR(t),n=await HR(t);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.C_.add(0),await ko(s),s.M_.set("Offline")}(n)})}function XM(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=D(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new A(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=bo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await j_(t),e,n)),n.promise}function QR(t,e,n={}){const r=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new od({next:d=>{o.enqueueAndForget(()=>N_(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new A(E.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new A(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new D_(Ro(a.path),c,{includeMetadataChanges:!0,J_:!0});return x_(s,h)}(await po(t),t.asyncQueue,e,n,r)),r.promise}function ZM(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await eh(i,s,!0),l=new BR(s,a.ls),u=l.ca(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=bo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await j_(t),e,n)),n.promise}function YR(t,e,n={}){const r=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new od({next:d=>{o.enqueueAndForget(()=>N_(s,h)),d.fromCache&&l.source==="server"?u.reject(new A(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new D_(a,c,{includeMetadataChanges:!0,J_:!0});return x_(s,h)}(await po(t),t.asyncQueue,e,n,r)),r.promise}function eF(t,e){const n=new od(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).q_.add(s),s.next()}(await po(t),n)),()=>{n.Na(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).q_.delete(s)}(await po(t),n))}}function tF(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?JA().encode(o):o,function(c,h){return new WM(c,h)}(function(c,h){if(c instanceof Uint8Array)return TE(c,h);if(c instanceof ArrayBuffer)return TE(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Jl(e));t.asyncQueue.enqueueAndForget(async()=>{zM(await z_(t),i,r)})}function nF(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=D(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await j_(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t,e,n){if(!n)throw new A(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XR(t,e,n,r){if(e===!0&&r===!0)throw new A(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function AE(t){if(!N.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function RE(t){if(N.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ld(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ld(t);throw new A(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ZR(t,e){if(e<=0)throw new A(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nV;switch(r.type){case"firstParty":return new oV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new A(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=SE.get(n);r&&(R("ComponentProvider","Removing Datastore"),SE.delete(n),r.terminate())}(this),Promise.resolve()}}function rF(t,e,n,r={}){var i;const s=(t=ne(t,Zl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qe.MOCK_USER;else{a=_b(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qe(u)}t._authCredentials=new rV(new cA(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Et=class eP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new eP(this.firestore,e,this._query)}},we=class tP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tP(this.firestore,e,this._key)}},Vr=class nP extends Et{constructor(e,n,r){super(e,n,Ro(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new N(e))}withConverter(e){return new nP(this.firestore,e,this._path)}};function rP(t,e,...n){if(t=B(t),q_("collection","path",e),t instanceof Zl){const r=ee.fromString(e,...n);return RE(r),new Vr(t,null,r)}{if(!(t instanceof we||t instanceof Vr))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return RE(r),new Vr(t.firestore,null,r)}}function iF(t,e){if(t=ne(t,Zl),q_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Et(t,null,function(r){return new ir(ee.emptyPath(),r)}(e))}function ih(t,e,...n){if(t=B(t),arguments.length===1&&(e=hA.newId()),q_("doc","path",e),t instanceof Zl){const r=ee.fromString(e,...n);return AE(r),new we(t,null,new N(r))}{if(!(t instanceof we||t instanceof Vr))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return AE(r),new we(t.firestore,t instanceof Vr?t.converter:null,new N(r))}}function iP(t,e){return t=B(t),e=B(e),(t instanceof we||t instanceof Vr)&&(e instanceof we||e instanceof Vr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function sP(t,e){return t=B(t),e=B(e),t instanceof Et&&e instanceof Et&&t.firestore===e.firestore&&Gl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new A_(this,"async_queue_retry"),this.iu=()=>{const n=sc();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ge;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ri(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=k_.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&V()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function mm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class oF{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ge,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF=-1;let Re=class extends Zl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new sF}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oP(this),this._firestoreClient.terminate()}};function Ye(t){return t._firestoreClient||oP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new VV(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,JR(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new HM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function lF(t,e){lP(t=ne(t,Re));const n=Ye(t);if(n._uninitializedComponentsProvider)throw new A(E.FAILED_PRECONDITION,"SDK cache is already specified.");dn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new $_;return aP(n,i,new WR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function uF(t){lP(t=ne(t,Re));const e=Ye(t);if(e._uninitializedComponentsProvider)throw new A(E.FAILED_PRECONDITION,"SDK cache is already specified.");dn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new $_;return aP(e,r,new qM(r,n.cacheSizeBytes))}function aP(t,e,n){const r=new Ge;return t.asyncQueue.enqueue(async()=>{try{await oc(t,n),await pm(t,e),r.resolve()}catch(i){const s=i;if(!GR(s))throw s;dn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function cF(t){if(t._initialized&&!t._terminated)throw new A(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ge;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!an.D())return Promise.resolve();const i=r+"main";await an.delete(i)}(I_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function hF(t){return function(n){const r=new Ge;return n.asyncQueue.enqueueAndForget(async()=>bM(await z_(n),r)),r.promise}(Ye(t=ne(t,Re)))}function dF(t){return YM(Ye(t=ne(t,Re)))}function fF(t){return JM(Ye(t=ne(t,Re)))}function pF(t,e){const n=Ye(t=ne(t,Re)),r=new oF;return tF(n,t._databaseId,e,r),r}function mF(t,e){return nF(Ye(t=ne(t,Re)),e).then(n=>n?new Et(t,null,n.query):null)}function lP(t){if(t._initialized||t._terminated)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn($e.fromBase64String(e))}catch(n){throw new A(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vn($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=/^__.*__$/;class _F{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Po(e,this.data,n,this.fieldTransforms)}}class uP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class cd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new cd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return sh(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(cP(this.Iu)&&gF.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class yF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jl(e)}pu(e,n,r,i=!1){return new cd({Iu:e,methodName:n,gu:r,path:me.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rs(t){const e=t._freezeSettings(),n=Jl(t._databaseId);return new yF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hd(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);H_("Data must be an object, but it was:",o,r);const a=fP(r,o);let l,u;if(s.merge)l=new kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=gm(e,h,n);if(!o.contains(d))throw new A(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mP(c,d)||c.push(d)}l=new kt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new _F(new et(a),l,u)}class eu extends ns{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eu}}function hP(t,e,n){return new cd({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class W_ extends ns{_toFieldTransform(e){return new Hl(e.path,new oo)}isEqual(e){return e instanceof W_}}class vF extends ns{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=hP(this,e,!0),r=this.yu.map(s=>is(s,n)),i=new ji(r);return new Hl(e.path,i)}isEqual(e){return this===e}}class wF extends ns{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=hP(this,e,!0),r=this.yu.map(s=>is(s,n)),i=new zi(r);return new Hl(e.path,i)}isEqual(e){return this===e}}class EF extends ns{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new ao(e.serializer,jA(e.serializer,this.wu));return new Hl(e.path,n)}isEqual(e){return this===e}}function G_(t,e,n,r){const i=t.pu(1,e,n);H_("Data must be an object, but it was:",i,r);const s=[],o=et.empty();ts(r,(l,u)=>{const c=Q_(e,l,n);u=B(u);const h=i.Ru(c);if(u instanceof eu)s.push(c);else{const d=is(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new kt(s);return new uP(o,a,i.fieldTransforms)}function K_(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[gm(e,r,n)],l=[i];if(s.length%2!=0)throw new A(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(gm(e,s[d])),l.push(s[d+1]);const u=[],c=et.empty();for(let d=a.length-1;d>=0;--d)if(!mP(u,a[d])){const f=a[d];let g=l[d];g=B(g);const y=o.Ru(f);if(g instanceof eu)u.push(f);else{const v=is(g,y);v!=null&&(u.push(f),c.set(f,v))}}const h=new kt(u);return new uP(c,h,o.fieldTransforms)}function dP(t,e,n,r=!1){return is(n,t.pu(r?4:3,e))}function is(t,e){if(pP(t=B(t)))return H_("Unsupported field value:",e,t),fP(t,e);if(t instanceof ns)return function(r,i){if(!cP(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=is(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=B(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_e.fromDate(r);return{timestampValue:lo(i.serializer,s)}}if(r instanceof _e){const s=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lo(i.serializer,s)}}if(r instanceof ud)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vn)return{bytesValue:eR(i.serializer,r._byteString)};if(r instanceof we){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:g_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${ld(r)}`)}(t,e)}function fP(t,e){const n={};return IA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,i)=>{const s=is(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof ud||t instanceof Vn||t instanceof we||t instanceof ns)}function H_(t,e,n){if(!pP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ld(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function gm(t,e,n){if((e=B(e))instanceof Hr)return e._internalPath;if(typeof e=="string")return Q_(t,e);throw sh("Field path arguments must be of type string or ",t,!1,void 0,n)}const IF=new RegExp("[~\\*/\\[\\]]");function Q_(t,e,n){if(e.search(IF)>=0)throw sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hr(...e.split("."))._internalPath}catch{throw sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(E.INVALID_ARGUMENT,a+t+l)}function mP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TF extends wl{data(){return super.data()}}function dd(t,e){return typeof e=="string"?Q_(t,e):e instanceof Hr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Y_{}class tu extends Y_{}function fr(t,e,...n){let r=[];e instanceof Y_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof J_).length,a=s.filter(l=>l instanceof fd).length;if(o>1||o>0&&a>0)throw new A(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class fd extends tu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fd(e,n,r)}_apply(e){const n=this._parse(e);return yP(e._query,n),new Et(e.firestore,e.converter,rm(e._query,n))}_parse(e){const n=rs(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){kE(h,c);const f=[];for(const g of h)f.push(CE(l,s,g));d={arrayValue:{values:f}}}else d=CE(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||kE(h,c),d=dP(a,o,h,c==="in"||c==="not-in");return Y.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function SF(t,e,n){const r=e,i=dd("where",t);return fd._create(i,r,n)}class J_ extends Y_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new J_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:re.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)yP(o,l),o=rm(o,l)}(e._query,n),new Et(e.firestore,e.converter,rm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class X_ extends tu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new X_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ml(s,o)}(e._query,this._field,this._direction);return new Et(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ir(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function AF(t,e="asc"){const n=e,r=dd("orderBy",t);return X_._create(r,n)}class pd extends tu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new pd(e,n,r)}_apply(e){return new Et(e.firestore,e.converter,Yc(e._query,this._limit,this._limitType))}}function RF(t){return ZR("limit",t),pd._create("limit",t,"F")}function PF(t){return ZR("limitToLast",t),pd._create("limitToLast",t,"L")}class md extends tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new md(e,n,r)}_apply(e){const n=_P(e,this.type,this._docOrFields,this._inclusive);return new Et(e.firestore,e.converter,function(i,s){return new ir(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function CF(...t){return md._create("startAt",t,!0)}function kF(...t){return md._create("startAfter",t,!1)}class gd extends tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new gd(e,n,r)}_apply(e){const n=_P(e,this.type,this._docOrFields,this._inclusive);return new Et(e.firestore,e.converter,function(i,s){return new ir(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function xF(...t){return gd._create("endBefore",t,!1)}function NF(...t){return gd._create("endAt",t,!0)}function _P(t,e,n,r){if(n[0]=B(n[0]),n[0]instanceof wl)return function(s,o,a,l,u){if(!l)throw new A(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of zs(s))if(h.field.isKeyField())c.push($i(o,l.key));else{const d=l.data.field(h.field);if(Zh(d))throw new A(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new A(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(d)}return new Gr(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=rs(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new A(E.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<c.length;g++){const y=c[g];if(d[g].field.isKeyField()){if(typeof y!="string")throw new A(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!u_(o)&&y.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const v=o.path.child(ee.fromString(y));if(!N.isDocumentKey(v))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const m=new N(v);f.push($i(a,m))}else{const v=dP(l,u,y);f.push(v)}}return new Gr(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function CE(t,e,n){if(typeof(n=B(n))=="string"){if(n==="")throw new A(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!u_(e)&&n.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ee.fromString(n));if(!N.isDocumentKey(r))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $i(t,new N(r))}if(n instanceof we)return $i(t,n._key);throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ld(n)}.`)}function kE(t,e){if(!Array.isArray(t)||t.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Z_{convertValue(e,n="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ts(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ud(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=a_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(dl(e));default:return null}}convertTimestamp(e){const n=jr(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ee.fromString(e);U(cR(r));const i=new qr(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class bF extends Z_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let tr=class extends wl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},xa=class extends tr{data(e={}){return super.data(e)}},Qr=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Si(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xa(this._firestore,this._userDataWriter,r.key,r,new Si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new xa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Si(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new xa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Si(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:DF(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function DF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}function vP(t,e){return t instanceof tr&&e instanceof tr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Qr&&e instanceof Qr&&t._firestore===e._firestore&&sP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OF(t){t=ne(t,we);const e=ne(t.firestore,Re);return QR(Ye(e),t._key).then(n=>ey(e,t,n))}class ss extends Z_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}function VF(t){t=ne(t,we);const e=ne(t.firestore,Re),n=Ye(e),r=new ss(e);return XM(n,t._key).then(i=>new tr(e,r,t._key,i,new Si(i!==null&&i.hasLocalMutations,!0),t.converter))}function LF(t){t=ne(t,we);const e=ne(t.firestore,Re);return QR(Ye(e),t._key,{source:"server"}).then(n=>ey(e,t,n))}function MF(t){t=ne(t,Et);const e=ne(t.firestore,Re),n=Ye(e),r=new ss(e);return gP(t._query),YR(n,t._query).then(i=>new Qr(e,r,t,i))}function FF(t){t=ne(t,Et);const e=ne(t.firestore,Re),n=Ye(e),r=new ss(e);return ZM(n,t._query).then(i=>new Qr(e,r,t,i))}function UF(t){t=ne(t,Et);const e=ne(t.firestore,Re),n=Ye(e),r=new ss(e);return YR(n,t._query,{source:"server"}).then(i=>new Qr(e,r,t,i))}function xE(t,e,n){t=ne(t,we);const r=ne(t.firestore,Re),i=_d(t.converter,e,n);return nu(r,[hd(rs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ge.none())])}function NE(t,e,n,...r){t=ne(t,we);const i=ne(t.firestore,Re),s=rs(i);let o;return o=typeof(e=B(e))=="string"||e instanceof Hr?K_(s,"updateDoc",t._key,e,n,r):G_(s,"updateDoc",t._key,e),nu(i,[o.toMutation(t._key,ge.exists(!0))])}function $F(t){return nu(ne(t.firestore,Re),[new Co(t._key,ge.none())])}function BF(t,e){const n=ne(t.firestore,Re),r=ih(t),i=_d(t.converter,e);return nu(n,[hd(rs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ge.exists(!1))]).then(()=>r)}function wP(t,...e){var n,r,i;t=B(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(mm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof we)u=ne(t.firestore,Re),c=Ro(t._key.path),l={next:h=>{e[o]&&e[o](ey(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ne(t,Et);u=ne(h.firestore,Re),c=h._query;const d=new ss(u);l={next:f=>{e[o]&&e[o](new Qr(u,d,h,f))},error:e[o+1],complete:e[o+2]},gP(t._query)}return function(d,f,g,y){const v=new od(y),m=new D_(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>x_(await po(d),m)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>N_(await po(d),m))}}(Ye(u),c,a,l)}function jF(t,e){return eF(Ye(t=ne(t,Re)),mm(e)?e:{next:e})}function nu(t,e){return function(r,i){const s=new Ge;return r.asyncQueue.enqueueAndForget(async()=>CM(await z_(r),i,s)),s.promise}(Ye(t),e)}function ey(t,e,n){const r=n.docs.get(e._key),i=new ss(t);return new tr(t,i,e._key,r,new Si(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qF=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=rs(e)}set(e,n,r){this._verifyNotCommitted();const i=wr(e,this._firestore),s=_d(i.converter,n,r),o=hd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ge.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=wr(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof Hr?K_(this._dataReader,"WriteBatch.update",s._key,n,r,i):G_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ge.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=wr(e,this._firestore);return this._mutations=this._mutations.concat(new Co(n._key,ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function wr(t,e){if((t=B(t)).firestore!==e)throw new A(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WF=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=rs(n)}get(n){const r=wr(n,this._firestore),i=new bF(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return V();const o=s[0];if(o.isFoundDocument())return new wl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new wl(this._firestore,i,r._key,null,r.converter);throw V()})}set(n,r,i){const s=wr(n,this._firestore),o=_d(s.converter,r,i),a=hd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=wr(n,this._firestore);let a;return a=typeof(r=B(r))=="string"||r instanceof Hr?K_(this._dataReader,"Transaction.update",o._key,r,i,s):G_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=wr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=wr(e,this._firestore),r=new ss(this._firestore);return super.get(e).then(i=>new tr(this._firestore,r,n._key,i._document,new Si(!1,!1),n.converter))}};function GF(t,e,n){t=ne(t,Re);const r=Object.assign(Object.assign({},zF),n);return function(s){if(s.maxAttempts<1)throw new A(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Ge;return s.asyncQueue.enqueueAndForget(async()=>{const u=await QM(s);new KM(s.asyncQueue,u,a,o,l).run()}),l.promise}(Ye(t),i=>e(new WF(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KF(){return new eu("deleteField")}function HF(){return new W_("serverTimestamp")}function QF(...t){return new vF("arrayUnion",t)}function YF(...t){return new wF("arrayRemove",t)}function JF(t){return new EF("increment",t)}(function(e,n=!0){(function(i){Ao=i})(Zr),$r(new Dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Re(new iV(r.getProvider("auth-internal")),new lV(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new A(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xn(Aw,"4.4.0",e),xn(Aw,"4.4.0","esm2017")})();const XF="@firebase/firestore-compat",ZF="0.3.23";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function DE(){if(!DV())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}let EP=class _m{constructor(e){this._delegate=e}static fromBase64String(e){return DE(),new _m(Vn.fromBase64String(e))}static fromUint8Array(e){return bE(),new _m(Vn.fromUint8Array(e))}toBase64(){return DE(),this._delegate.toBase64()}toUint8Array(){return bE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){return e2(t,["next","error","complete"])}function e2(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{enableIndexedDbPersistence(e,n){return lF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return uF(e._delegate)}clearIndexedDbPersistence(e){return cF(e._delegate)}}class IP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof qr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&dn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){rF(this._delegate,e,n,r)}enableNetwork(){return dF(this._delegate)}disableNetwork(){return fF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,XR("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return hF(this._delegate)}onSnapshotsInSync(e){return jF(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new mo(this,rP(this._delegate,e))}catch(n){throw mt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Qt(this,ih(this._delegate,e))}catch(n){throw mt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new pt(this,iF(this._delegate,e))}catch(n){throw mt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return GF(this._delegate,n=>e(new TP(this,n)))}batch(){return Ye(this._delegate),new SP(new qF(this._delegate,e=>nu(this._delegate,e)))}loadBundle(e){return pF(this._delegate,e)}namedQuery(e){return mF(this._delegate,e).then(n=>n?new pt(this,n):null)}}class yd extends Z_{constructor(e){super(),this.firestore=e}convertBytes(e){return new EP(new Vn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Qt.forKey(n,this.firestore,null)}}function n2(t){eV(t)}class TP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new yd(e)}get(e){const n=Ai(e);return this._delegate.get(n).then(r=>new El(this._firestore,new tr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ai(e);return r?(ty("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ai(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ai(e);return this._delegate.delete(n),this}}class SP{constructor(e){this._delegate=e}set(e,n,r){const i=Ai(e);return r?(ty("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ai(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ai(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ki{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new xa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Il(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ki.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ki(e,new yd(e),n),i.set(n,s)),s}}Ki.INSTANCES=new WeakMap;class Qt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new yd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Qt(n,new we(n._delegate,r,new N(e)))}static forKey(e,n,r){return new Qt(n,new we(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new mo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new mo(this.firestore,rP(this._delegate,e))}catch(n){throw mt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof we?iP(this._delegate,e):!1}set(e,n){n=ty("DocumentReference.set",n);try{return n?xE(this._delegate,e,n):xE(this._delegate,e)}catch(r){throw mt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?NE(this._delegate,e):NE(this._delegate,e,n,...r)}catch(i){throw mt(i,"updateDoc()","DocumentReference.update()")}}delete(){return $F(this._delegate)}onSnapshot(...e){const n=AP(e),r=RP(e,i=>new El(this.firestore,new tr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return wP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=VF(this._delegate):(e==null?void 0:e.source)==="server"?n=LF(this._delegate):n=OF(this._delegate),n.then(r=>new El(this.firestore,new tr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Qt(this.firestore,e?this._delegate.withConverter(Ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function mt(t,e,n){return t.message=t.message.replace(e,n),t}function AP(t){for(const e of t)if(typeof e=="object"&&!ym(e))return e;return{}}function RP(t,e){var n,r;let i;return ym(t[0])?i=t[0]:ym(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class El{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Qt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return vP(this._delegate,e._delegate)}}class Il extends El{data(e){const n=this._delegate.data(e);return this._delegate._converter||tV(n!==void 0),n}}class pt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new yd(e)}where(e,n,r){try{return new pt(this.firestore,fr(this._delegate,SF(e,n,r)))}catch(i){throw mt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new pt(this.firestore,fr(this._delegate,AF(e,n)))}catch(r){throw mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new pt(this.firestore,fr(this._delegate,RF(e)))}catch(n){throw mt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new pt(this.firestore,fr(this._delegate,PF(e)))}catch(n){throw mt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new pt(this.firestore,fr(this._delegate,CF(...e)))}catch(n){throw mt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new pt(this.firestore,fr(this._delegate,kF(...e)))}catch(n){throw mt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new pt(this.firestore,fr(this._delegate,xF(...e)))}catch(n){throw mt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new pt(this.firestore,fr(this._delegate,NF(...e)))}catch(n){throw mt(n,"endAt()","Query.endAt()")}}isEqual(e){return sP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=FF(this._delegate):(e==null?void 0:e.source)==="server"?n=UF(this._delegate):n=MF(this._delegate),n.then(r=>new vm(this.firestore,new Qr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=AP(e),r=RP(e,i=>new vm(this.firestore,new Qr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return wP(this._delegate,n,r)}withConverter(e){return new pt(this.firestore,e?this._delegate.withConverter(Ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class r2{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Il(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class vm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new pt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Il(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new r2(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Il(this._firestore,r))})}isEqual(e){return vP(this._delegate,e._delegate)}}class mo extends pt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Qt(this.firestore,e):null}doc(e){try{return e===void 0?new Qt(this.firestore,ih(this._delegate)):new Qt(this.firestore,ih(this._delegate,e))}catch(n){throw mt(n,"doc()","CollectionReference.doc()")}}add(e){return BF(this._delegate,e).then(n=>new Qt(this.firestore,n))}isEqual(e){return iP(this._delegate,e._delegate)}withConverter(e){return new mo(this.firestore,e?this._delegate.withConverter(Ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ai(t){return ne(t,we)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(...e){this._delegate=new Hr(...e)}static documentId(){return new ny(me.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof Hr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._delegate=e}static serverTimestamp(){const e=HF();return e._methodName="FieldValue.serverTimestamp",new yi(e)}static delete(){const e=KF();return e._methodName="FieldValue.delete",new yi(e)}static arrayUnion(...e){const n=QF(...e);return n._methodName="FieldValue.arrayUnion",new yi(n)}static arrayRemove(...e){const n=YF(...e);return n._methodName="FieldValue.arrayRemove",new yi(n)}static increment(e){const n=JF(e);return n._methodName="FieldValue.increment",new yi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2={Firestore:IP,GeoPoint:ud,Timestamp:_e,Blob:EP,Transaction:TP,WriteBatch:SP,DocumentReference:Qt,DocumentSnapshot:El,Query:pt,QueryDocumentSnapshot:Il,QuerySnapshot:vm,CollectionReference:mo,FieldPath:ny,FieldValue:yi,setLogLevel:n2,CACHE_SIZE_UNLIMITED:aF};function s2(t,e){t.INTERNAL.registerComponent(new Dn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},i2)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){s2(t,(e,n)=>new IP(e,n,new t2)),t.registerVersion(XF,ZF)}o2(Nn);function ry(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ta={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},fs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function PP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l2=a2,u2=PP,CP=new Zi("auth","Firebase",PP());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Vh("@firebase/auth");function c2(t,...e){oh.logLevel<=Q.WARN&&oh.warn(`Auth (${Zr}): ${t}`,...e)}function ac(t,...e){oh.logLevel<=Q.ERROR&&oh.error(`Auth (${Zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,...e){throw iy(t,...e)}function rt(t,...e){return iy(t,...e)}function kP(t,e,n){const r=Object.assign(Object.assign({},u2()),{[e]:n});return new Zi("auth","Firebase",r).create(e,{appName:t.name})}function Do(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),kP(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function iy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CP.create(t,...e)}function k(t,e,...n){if(!t)throw iy(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ac(e),new Error(e)}function fn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sy(){return OE()==="http:"||OE()==="https:"}function OE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sy()||K0()||"connection"in navigator)?navigator.onLine:!0}function d2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=yb()||bg()}get(){return h2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=new ru(3e4,6e4);function Ce(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ke(t,e,n,r,i={}){return NP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Io(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xP.fetch()(bP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function NP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},f2),e);try{const i=new g2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kP(t,c,u);st(t,c)}}catch(i){if(i instanceof yt)throw i;st(t,"network-request-failed",{message:String(i)})}}async function ar(t,e,n,r,i={}){const s=await ke(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?oy(t.config,i):`${t.config.apiScheme}://${i}`}function m2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),p2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){return t!==void 0&&t.getResponse!==void 0}function LE(t){return t!==void 0&&t.enterprise!==void 0}class _2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return m2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y2(t){return(await ke(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function v2(t,e){return ke(t,"GET","/v2/recaptchaConfig",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,e){return ke(t,"POST","/v1/accounts:delete",e)}async function E2(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function I2(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function T2(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=vd(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Na(Cf(i.auth_time)),issuedAtTime:Na(Cf(i.iat)),expirationTime:Na(Cf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cf(t){return Number(t)*1e3}function vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ac("JWT malformed, contained fewer than 3 sections"),null;try{const i=W0(n);return i?JSON.parse(i):(ac("Failed to decode base64 JWT payload"),null)}catch(i){return ac("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function S2(t){const e=vd(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yt&&A2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function A2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await nr(t,I2(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?k2(s.providerUserInfo):[],a=C2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new DP(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function P2(t){const e=B(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function C2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function k2(t){return t.map(e=>{var{providerId:n}=e,r=ry(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(t,e){const n=await NP(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bP(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function N2(t,e){return ke(t,"POST","/v2/accounts:revokeToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):S2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await x2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Al;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Al,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ry(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new DP(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await nr(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return T2(this,e)}reload(){return P2(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,w2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:T,isAnonymous:P,providerData:x,stsTokenManager:b}=n;k(_&&b,e,"internal-error");const F=Al.fromJSON(this.name,b);k(typeof _=="string",e,"internal-error"),pr(h,e.name),pr(d,e.name),k(typeof T=="boolean",e,"internal-error"),k(typeof P=="boolean",e,"internal-error"),pr(f,e.name),pr(g,e.name),pr(y,e.name),pr(v,e.name),pr(m,e.name),pr(p,e.name);const ae=new xi({uid:_,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:P,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:F,createdAt:m,lastLoginAt:p});return x&&Array.isArray(x)&&(ae.providerData=x.map(K=>Object.assign({},K))),v&&(ae._redirectEventId=v),ae}static async _fromIdTokenResponse(e,n,r=!1){const i=new Al;i.updateFromServerResponse(n);const s=new xi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=new Map;function Ft(t){fn(t instanceof Function,"Expected a class definition");let e=ME.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ME.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OP.type="NONE";const go=OP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ni(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ni("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(Ft(go),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(go);const o=Ni(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=xi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ws(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FP(e))return"Blackberry";if(UP(e))return"Webos";if(ay(e))return"Safari";if((e.includes("chrome/")||LP(e))&&!e.includes("edge/"))return"Chrome";if(iu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VP(t=Ie()){return/firefox\//i.test(t)}function ay(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LP(t=Ie()){return/crios\//i.test(t)}function MP(t=Ie()){return/iemobile/i.test(t)}function iu(t=Ie()){return/android/i.test(t)}function FP(t=Ie()){return/blackberry/i.test(t)}function UP(t=Ie()){return/webos/i.test(t)}function Oo(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function b2(t=Ie()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function D2(t=Ie()){var e;return Oo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function O2(){return H0()&&document.documentMode===10}function $P(t=Ie()){return Oo(t)||iu(t)||UP(t)||FP(t)||/windows phone/i.test(t)||MP(t)}function V2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t,e=[]){let n;switch(t){case"Browser":n=FE(Ie());break;case"Worker":n=`${FE(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(t,e={}){return ke(t,"GET","/v2/passwordPolicy",Ce(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=6;class U2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:F2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new UE(this),this.idTokenSubscription=new UE(this),this.beforeStateQueue=new L2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=d2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await M2(this),n=new U2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await N2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&c2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pe(t){return B(t)}class UE{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q0(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ly(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",B2().appendChild(r)})}function jP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const j2="https://www.google.com/recaptcha/enterprise.js?render=",z2="recaptcha-enterprise",q2="NO_RECAPTCHA";class W2{constructor(e){this.type=z2,this.auth=Pe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{v2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new _2(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;LE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(q2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&LE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ly(j2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function $E(t,e,n,r=!1){const i=new W2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $E(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $E(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function G2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function K2(t,e,n){const r=Pe(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=zP(e),{host:o,port:a}=H2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Q2()}function zP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function H2(t){const e=zP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:BE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:BE(o)}}}function BE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Q2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){return ke(t,"POST","/v1/accounts:resetPassword",Ce(t,e))}async function Y2(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function J2(t,e){return ke(t,"POST","/v1/accounts:signUp",e)}async function X2(t,e){return ke(t,"POST","/v1/accounts:update",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(t,e){return ar(t,"POST","/v1/accounts:signInWithPassword",Ce(t,e))}async function wd(t,e){return ke(t,"POST","/v1/accounts:sendOobCode",Ce(t,e))}async function eU(t,e){return wd(t,e)}async function tU(t,e){return wd(t,e)}async function nU(t,e){return wd(t,e)}async function rU(t,e){return wd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iU(t,e){return ar(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}async function sU(t,e){return ar(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Vo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,n,"signInWithPassword",Z2);case"emailLink":return iU(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,r,"signUpPassword",J2);case"emailLink":return sU(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e){return ar(t,"POST","/v1/accounts:signInWithIdp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU="http://localhost";class Ln extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ry(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ln(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}buildRequest(){const e={requestUri:oU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aU(t,e){return ke(t,"POST","/v1/accounts:sendVerificationCode",Ce(t,e))}async function lU(t,e){return ar(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e))}async function uU(t,e){const n=await ar(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e));if(n.temporaryProof)throw pa(t,"account-exists-with-different-credential",n);return n}const cU={USER_NOT_FOUND:"user-not-found"};async function hU(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ar(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,n),cU)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Vo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new bi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new bi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return lU(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return uU(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return hU(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new bi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fU(t){const e=bs(la(t)).link,n=e?bs(la(e)).deep_link_id:null,r=bs(la(t)).deep_link_id;return(r?bs(la(r)).link:null)||r||n||e||t}class Ed{constructor(e){var n,r,i,s,o,a;const l=bs(la(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=dU((i=l.mode)!==null&&i!==void 0?i:null);k(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fU(e);try{return new Ed(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return Pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ed.parseLink(n);return k(r,"argument-error"),Pl._fromEmailAndCode(e,r.code,r.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Gs extends Lo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),Ln._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Ln._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Gs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Gs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Gs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Lo{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ln._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Lo{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU="http://localhost";class _o extends Vo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new _o(r,s)}static _create(e,n){return new _o(e,n)}buildRequest(){return{requestUri:pU,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU="saml.";class ah extends lr{constructor(e){k(e.startsWith(mU),"argument-error"),super(e)}static credentialFromResult(e){return ah.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ah.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=_o.fromJSON(e);return k(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return _o._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Lo{constructor(){super("twitter.com")}static credential(e,n){return Ln._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return En.credential(n,r)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(t,e){return ar(t,"POST","/v1/accounts:signUp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xi._fromIdTokenResponse(e,r,i),o=jE(r);return new en({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jE(r);return new en({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gU(t){var e;const n=Pe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new en({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await WP(n,{returnSecureToken:!0}),i=await en._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,lh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new lh(e,n,r,i)}}function GP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?lh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _U(t,e){const n=B(t);await Id(!0,n,e);const{providerUserInfo:r}=await E2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=KP(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function uy(t,e,n=!1){const r=await nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return en._forOperation(t,"link",r)}async function Id(t,e,n){await Sl(e);const r=KP(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";k(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await nr(t,GP(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=vd(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(t.uid===a,r,"user-mismatch"),en._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t,e,n=!1){const r="signIn",i=await GP(t,r,e),s=await en._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Td(t,e){return QP(Pe(t),e)}async function YP(t,e){const n=B(t);return await Id(!1,n,e.providerId),uy(n,e)}async function JP(t,e){return HP(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yU(t,e){return ar(t,"POST","/v1/accounts:signInWithCustomToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vU(t,e){const n=Pe(t),r=await yU(n,{token:e,returnSecureToken:!0}),i=await en._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?cy._fromServerResponse(e,n):"totpInfo"in n?hy._fromServerResponse(e,n):st(e,"internal-error")}}class cy extends su{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new cy(n)}}class hy extends su{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new hy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e,n){var r;k(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t){const e=Pe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wU(t,e,n){const r=Pe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Sd(r,i,n),await Rl(r,i,"getOobCode",tU)}async function EU(t,e,n){await qP(B(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dy(t),r})}async function IU(t,e){await X2(B(t),{oobCode:e})}async function XP(t,e){const n=B(t),r=await qP(n,{oobCode:e}),i=r.requestType;switch(k(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=su._fromServerResponse(Pe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function TU(t,e){const{data:n}=await XP(B(t),e);return n.email}async function SU(t,e,n){const r=Pe(t),o=await Rl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&dy(t),l}),a=await en._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function AU(t,e,n){return Td(B(t),oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RU(t,e,n){const r=Pe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){k(a.handleCodeInApp,r,"argument-error"),a&&Sd(r,o,a)}s(i,n),await Rl(r,i,"getOobCode",nU)}function PU(t,e){const n=Ed.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function CU(t,e,n){const r=B(t),i=oi.credentialWithLink(e,n||Tl());return k(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Td(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kU(t,e){return ke(t,"POST","/v1/accounts:createAuthUri",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xU(t,e){const n=sy()?Tl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await kU(B(t),r);return i||[]}async function NU(t,e){const n=B(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Sd(n.auth,i,e);const{email:s}=await eU(n.auth,i);s!==t.email&&await t.reload()}async function bU(t,e,n){const r=B(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Sd(r.auth,s,n);const{email:o}=await rU(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DU(t,e){return ke(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await nr(r,DU(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VU(t,e){return ZP(B(t),e,null)}function LU(t,e){return ZP(B(t),null,e)}async function ZP(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await nr(t,Y2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=vd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ks(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new FU(s,i);case"github.com":return new UU(s,i);case"google.com":return new $U(s,i);case"twitter.com":return new BU(s,i,t.screenName||null);case"custom":case"anonymous":return new Ks(s,null);default:return new Ks(s,r,i)}}class Ks{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class e1 extends Ks{constructor(e,n,r,i){super(e,n,r),this.username=i}}class FU extends Ks{constructor(e,n){super(e,"facebook.com",n)}}class UU extends e1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class $U extends Ks{constructor(e,n){super(e,"google.com",n)}}class BU extends e1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function jU(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:MU(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Ri("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ri("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ri._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ri._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Pe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>su._fromServerResponse(r,a));k(i.mfaPendingCredential,r,"internal-error");const o=Ri._fromMfaPendingCredential(i.mfaPendingCredential);return new fy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await en._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return k(n.user,r,"internal-error"),en._forOperation(n.user,n.operationType,u);default:st(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function zU(t,e){var n;const r=B(t),i=e;return k(e.customData.operationType,r,"argument-error"),k((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),fy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:start",Ce(t,e))}function WU(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(t,e))}function GU(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ce(t,e))}class py{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>su._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new py(e)}async getSession(){return Ri._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await nr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await nr(this.user,GU(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const kf=new WeakMap;function KU(t){const e=B(t);return kf.has(e)||kf.set(e,py._fromUser(e)),kf.get(e)}const uh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uh,"1"),this.storage.removeItem(uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(){const t=Ie();return ay(t)||Oo(t)}const QU=1e3,YU=10;class n1 extends t1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HU()&&V2(),this.fallbackToPolling=$P(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);O2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n1.type="LOCAL";const my=n1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1 extends t1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r1.type="SESSION";const Hi=r1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ad(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await JU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ad.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ou("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function ZU(t){Le().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function e$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function t$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function n$(){return gy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="firebaseLocalStorageDb",r$=1,ch="firebaseLocalStorage",s1="fbase_key";class au{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rd(t,e){return t.transaction([ch],e?"readwrite":"readonly").objectStore(ch)}function i$(){const t=indexedDB.deleteDatabase(i1);return new au(t).toPromise()}function wm(){const t=indexedDB.open(i1,r$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ch,{keyPath:s1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ch)?e(r):(r.close(),await i$(),e(await wm()))})})}async function zE(t,e,n){const r=Rd(t,!0).put({[s1]:e,value:n});return new au(r).toPromise()}async function s$(t,e){const n=Rd(t,!1).get(e),r=await new au(n).toPromise();return r===void 0?null:r.value}function qE(t,e){const n=Rd(t,!0).delete(e);return new au(n).toPromise()}const o$=800,a$=3;class o1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>a$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ad._getInstance(n$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await e$(),!this.activeServiceWorker)return;this.sender=new XU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||t$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wm();return await zE(e,uh,"1"),await qE(e,uh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>s$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rd(i,!1).getAll();return new au(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),o$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o1.type="LOCAL";const Cl=o1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l$(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:start",Ce(t,e))}function u$(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:finalize",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c$=500,h$=6e4,Mu=1e12;class d${constructor(e){this.auth=e,this.counter=Mu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new f$(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Mu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Mu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Mu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class f${constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=p$(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},h$)},c$))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function p$(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=jP("rcb"),m$=new ru(3e4,6e4),g$="https://www.google.com/recaptcha/api.js?";class _${constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Le().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return k(y$(n),e,"argument-error"),this.shouldResolveImmediately(n)&&VE(Le().grecaptcha)?Promise.resolve(Le().grecaptcha):new Promise((r,i)=>{const s=Le().setTimeout(()=>{i(rt(e,"network-request-failed"))},m$.get());Le()[xf]=()=>{Le().clearTimeout(s),delete Le()[xf];const a=Le().grecaptcha;if(!a||!VE(a)){i(rt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${g$}?${Io({onload:xf,render:"explicit",hl:n})}`;ly(o).catch(()=>{clearTimeout(s),i(rt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Le().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function y$(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class v${async load(e){return new d$(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="recaptcha",w$={theme:"light",type:"image"};let E$=class{constructor(e,n,r=Object.assign({},w$)){this.parameters=r,this.type=a1,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Pe(e),this.isInvisible=this.parameters.size==="invisible",k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new v$:new _$,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Le()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(sy()&&!gy(),this.auth,"internal-error"),await I$(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await y2(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function I$(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=bi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function T$(t,e,n){const r=Pe(t),i=await Pd(r,e,B(n));return new _y(i,s=>Td(r,s))}async function S$(t,e,n){const r=B(t);await Id(!1,r,"phone");const i=await Pd(r.auth,e,B(n));return new _y(i,s=>YP(r,s))}async function A$(t,e,n){const r=B(t),i=await Pd(r.auth,e,B(n));return new _y(i,s=>JP(r,s))}async function Pd(t,e,n){var r;const i=await n.verify();try{k(typeof i=="string",t,"argument-error"),k(n.type===a1,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return k(o.type==="enroll",t,"internal-error"),(await qU(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await l$(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await aU(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function R$(t,e){await uy(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi=class lc{constructor(e){this.providerId=lc.PROVIDER_ID,this.auth=Pe(e)}verifyPhoneNumber(e,n){return Pd(this.auth,e,B(n))}static credential(e,n){return bi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return lc.credentialFromTaggedObject(n)}static credentialFromError(e){return lc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?bi._fromTokenResponse(n,r):null}};Qi.PROVIDER_ID="phone";Qi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t,e){return e?Ft(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function P$(t){return QP(t.auth,new yy(t),t.bypassAuthState)}function C$(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),HP(n,new yy(t),t.bypassAuthState)}async function k$(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),uy(n,new yy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P$;case"linkViaPopup":case"linkViaRedirect":return k$;case"reauthViaPopup":case"reauthViaRedirect":return C$;default:st(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x$=new ru(2e3,1e4);async function N$(t,e,n){const r=Pe(t);Do(t,e,lr);const i=os(r,n);return new qn(r,"signInViaPopup",e,i).executeNotNull()}async function b$(t,e,n){const r=B(t);Do(r.auth,e,lr);const i=os(r.auth,n);return new qn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function D$(t,e,n){const r=B(t);Do(r.auth,e,lr);const i=os(r.auth,n);return new qn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class qn extends l1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x$.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O$="pendingRedirect",ba=new Map;class V$ extends l1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ba.get(this.auth._key());if(!e){try{const r=await L$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ba.set(this.auth._key(),e)}return this.bypassAuthState||ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L$(t,e){const n=c1(e),r=u1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function vy(t,e){return u1(t)._set(c1(e),"true")}function M$(){ba.clear()}function wy(t,e){ba.set(t._key(),e)}function u1(t){return Ft(t._redirectPersistence)}function c1(t){return Ni(O$,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F$(t,e,n){return U$(t,e,n)}async function U$(t,e,n){const r=Pe(t);Do(t,e,lr),await r._initializationPromise;const i=os(r,n);return await vy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function $$(t,e,n){return B$(t,e,n)}async function B$(t,e,n){const r=B(t);Do(r.auth,e,lr),await r.auth._initializationPromise;const i=os(r.auth,n);await vy(i,r.auth);const s=await h1(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function j$(t,e,n){return z$(t,e,n)}async function z$(t,e,n){const r=B(t);Do(r.auth,e,lr),await r.auth._initializationPromise;const i=os(r.auth,n);await Id(!1,r,e.providerId),await vy(i,r.auth);const s=await h1(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function q$(t,e){return await Pe(t)._initializationPromise,Cd(t,e,!1)}async function Cd(t,e,n=!1){const r=Pe(t),i=os(r,e),o=await new V$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function h1(t){const e=ou(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W$=10*60*1e3;class d1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!G$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!f1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W$&&this.cachedEventUids.clear(),this.cachedEventUids.has(WE(e))}saveEventToCache(e){this.cachedEventUids.add(WE(e)),this.lastProcessedEventTime=Date.now()}}function WE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function G$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e={}){return ke(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H$=/^https?/;async function Q$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p1(t);for(const n of e)try{if(Y$(n))return}catch{}st(t,"unauthorized-domain")}function Y$(t){const e=Tl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!H$.test(n))return!1;if(K$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J$=new ru(3e4,6e4);function GE(){const t=Le().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function X$(t){return new Promise((e,n)=>{var r,i,s;function o(){GE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{GE(),n(rt(t,"network-request-failed"))},timeout:J$.get()})}if(!((i=(r=Le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Le().gapi)===null||s===void 0)&&s.load)o();else{const a=jP("iframefcb");return Le()[a]=()=>{gapi.load?o():n(rt(t,"network-request-failed"))},ly(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw uc=null,e})}let uc=null;function Z$(t){return uc=uc||X$(t),uc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=new ru(5e3,15e3),t4="__/auth/iframe",n4="emulator/auth/iframe",r4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s4(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oy(e,n4):`https://${t.config.authDomain}/${t4}`,r={apiKey:e.apiKey,appName:t.name,v:Zr},i=i4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Io(r).slice(1)}`}async function o4(t){const e=await Z$(t),n=Le().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:s4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rt(t,"network-request-failed"),a=Le().setTimeout(()=>{s(o)},e4.get());function l(){Le().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l4=500,u4=600,c4="_blank",h4="http://localhost";class KE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d4(t,e,n,r=l4,i=u4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},a4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ie().toLowerCase();n&&(a=LP(u)?c4:n),VP(u)&&(e=e||h4,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(D2(u)&&a!=="_self")return f4(e||"",a),new KE(null);const h=window.open(e||"",a,c);k(h,t,"popup-blocked");try{h.focus()}catch{}return new KE(h)}function f4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4="__/auth/handler",m4="emulator/auth/handler",g4=encodeURIComponent("fac");async function Em(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zr,eventId:i};if(e instanceof lr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ab(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Lo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${g4}=${encodeURIComponent(l)}`:"";return`${_4(t)}?${Io(a).slice(1)}${u}`}function _4({config:t}){return t.emulator?oy(t,m4):`https://${t.authDomain}/${p4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="webStorageSupport";class y4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hi,this._completeRedirectFn=Cd,this._overrideRedirectResult=wy}async _openPopup(e,n,r,i){var s;fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Em(e,n,r,Tl(),i);return d4(e,o,ou())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Em(e,n,r,Tl(),i);return ZU(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await o4(e),r=new d1(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nf,{type:Nf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nf];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Q$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $P()||ay()||Oo()}}const v4=y4;class w4{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Pn("unexpected MultiFactorSessionType")}}}class Ey extends w4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ey(e)}_finalizeEnroll(e,n,r){return WU(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return u$(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class m1{constructor(){}static assertion(e){return Ey._fromCredential(e)}}m1.FACTOR_ID="phone";var HE="@firebase/auth",QE="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function T4(t){$r(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BP(t)},u=new $2(r,i,s,l);return G2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new Dn("auth-internal",e=>{const n=Pe(e.getProvider("auth").getImmediate());return(r=>new E4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(HE,QE,I4(t)),xn(HE,QE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4=5*60;mb("authIdTokenMaxAge");T4("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4=2e3;async function R4(t,e,n){var r;const{BuildInfo:i}=Yi();fn(e.sessionId,"AuthEvent did not contain a session ID");const s=await N4(e.sessionId),o={};return Oo()?o.ibi=i.packageName:iu()?o.apn=i.packageName:st(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Em(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function P4(t){const{BuildInfo:e}=Yi(),n={};Oo()?n.iosBundleId=e.packageName:iu()?n.androidPackageName=e.packageName:st(t,"operation-not-supported-in-this-environment"),await p1(t,n)}function C4(t){const{cordova:e}=Yi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,b2()?"_blank":"_system","location=yes"),n(i)})})}async function k4(t,e,n){const{cordova:r}=Yi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(rt(t,"redirect-cancelled-by-user"))},A4))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),iu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function x4(t){var e,n,r,i,s,o,a,l,u,c;const h=Yi();k(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function N4(t){const e=b4(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function b4(t){if(fn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D4=20;class O4 extends d1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function V4(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:F4(),postBody:null,tenantId:t.tenantId,error:rt(t,"no-auth-event")}}function L4(t,e){return Im()._set(Tm(t),e)}async function YE(t){const e=await Im()._get(Tm(t));return e&&await Im()._remove(Tm(t)),e}function M4(t,e){var n,r;const i=$4(e);if(i.includes("/__/auth/callback")){const s=cc(i),o=s.firebaseError?U4(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?rt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function F4(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<D4;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Im(){return Ft(my)}function Tm(t){return Ni("authEvent",t.config.apiKey,t.name)}function U4(t){try{return JSON.parse(t)}catch{return null}}function $4(t){const e=cc(t),n=e.link?decodeURIComponent(e.link):void 0,r=cc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return cc(i).link||i||r||n||t}function cc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return bs(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4=500;class j4{constructor(){this._redirectPersistence=Hi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Cd,this._overrideRedirectResult=wy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new O4(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){st(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){x4(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),M$(),await this._originValidation(e);const o=V4(e,r,i);await L4(e,o);const a=await R4(e,o,n),l=await C4(a);return k4(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=P4(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Yi(),o=setTimeout(async()=>{await YE(e),n.onEvent(JE())},B4),a=async c=>{clearTimeout(o);const h=await YE(e);let d=null;h&&(c!=null&&c.url)&&(d=M4(h,c.url)),n.onEvent(d||JE())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Yi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const z4=j4;function JE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:rt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q4(t,e){Pe(t)._logFramework(e)}var W4="@firebase/auth-compat",G4="0.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=1e3;function Da(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function H4(){return Da()==="http:"||Da()==="https:"}function g1(t=Ie()){return!!((Da()==="file:"||Da()==="ionic:"||Da()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Q4(){return bg()||Ng()}function Y4(){return H0()&&(document==null?void 0:document.documentMode)===11}function J4(t=Ie()){return/Edge\/\d+/.test(t)}function X4(t=Ie()){return Y4()||J4(t)}function _1(){try{const t=self.localStorage,e=ou();if(t)return t.setItem(e,"1"),t.removeItem(e),X4()?Xa():!0}catch{return Iy()&&Xa()}return!1}function Iy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function bf(){return(H4()||K0()||g1())&&!Q4()&&_1()&&!Iy()}function y1(){return g1()&&typeof document<"u"}async function Z4(){return y1()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},K4);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function eB(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={LOCAL:"local",NONE:"none",SESSION:"session"},na=k,v1="persistence";function tB(t,e){if(na(Object.values(Lt).includes(e),t,"invalid-persistence-type"),bg()){na(e!==Lt.SESSION,t,"unsupported-persistence-type");return}if(Ng()){na(e===Lt.NONE,t,"unsupported-persistence-type");return}if(Iy()){na(e===Lt.NONE||e===Lt.LOCAL&&Xa(),t,"unsupported-persistence-type");return}na(e===Lt.NONE||_1(),t,"unsupported-persistence-type")}async function Sm(t){await t._initializationPromise;const e=w1(),n=Ni(v1,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function nB(t,e){const n=w1();if(!n)return[];const r=Ni(v1,t,e);switch(n.getItem(r)){case Lt.NONE:return[go];case Lt.LOCAL:return[Cl,Hi];case Lt.SESSION:return[Hi];default:return[]}}function w1(){var t;try{return((t=eB())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rB=k;class Ar{constructor(){this.browserResolver=Ft(v4),this.cordovaResolver=Ft(z4),this.underlyingResolver=null,this._redirectPersistence=Hi,this._completeRedirectFn=Cd,this._overrideRedirectResult=wy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return y1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return rB(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Z4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){return t.unwrap()}function iB(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sB(t){return I1(t)}function oB(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new aB(t,zU(t,e))}else if(r){const i=I1(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function I1(t){const{_tokenResponse:e}=t instanceof yt?t.customData:t;if(!e)return null;if(!(t instanceof yt)&&"temporaryProof"in e&&"phoneNumber"in e)return Qi.credentialFromResult(t);const n=e.providerId;if(!n||n===ta.PASSWORD)return null;let r;switch(n){case ta.GOOGLE:r=vn;break;case ta.FACEBOOK:r=yn;break;case ta.GITHUB:r=wn;break;case ta.TWITTER:r=En;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?_o._create(n,a):Ln._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Gs(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof yt?r.credentialFromError(t):r.credentialFromResult(t)}function At(t,e){return e.catch(n=>{throw n instanceof yt&&oB(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:sB(n),additionalUserInfo:jU(n),user:Wn.getOrCreate(i)}})}async function Am(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>At(t,n.confirm(r))}}class aB{constructor(e,n){this.resolver=n,this.auth=iB(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return At(E1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._delegate=e,this.multiFactor=KU(e)}static getOrCreate(e){return Wn.USER_MAP.has(e)||Wn.USER_MAP.set(e,new Wn(e)),Wn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return At(this.auth,YP(this._delegate,e))}async linkWithPhoneNumber(e,n){return Am(this.auth,S$(this._delegate,e,n))}async linkWithPopup(e){return At(this.auth,D$(this._delegate,e,Ar))}async linkWithRedirect(e){return await Sm(Pe(this.auth)),j$(this._delegate,e,Ar)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return At(this.auth,JP(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Am(this.auth,A$(this._delegate,e,n))}reauthenticateWithPopup(e){return At(this.auth,b$(this._delegate,e,Ar))}async reauthenticateWithRedirect(e){return await Sm(Pe(this.auth)),$$(this._delegate,e,Ar)}sendEmailVerification(e){return NU(this._delegate,e)}async unlink(e){return await _U(this._delegate,e),this}updateEmail(e){return VU(this._delegate,e)}updatePassword(e){return LU(this._delegate,e)}updatePhoneNumber(e){return R$(this._delegate,e)}updateProfile(e){return OU(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return bU(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Wn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=k;class Rm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ra(r,"invalid-api-key",{appName:e.name}),ra(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Ar:void 0;this._delegate=n.initialize({options:{persistence:lB(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(l2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Wn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){K2(this._delegate,e,n)}applyActionCode(e){return IU(this._delegate,e)}checkActionCode(e){return XP(this._delegate,e)}confirmPasswordReset(e,n){return EU(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return At(this._delegate,SU(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return xU(this._delegate,e)}isSignInWithEmailLink(e){return PU(this._delegate,e)}async getRedirectResult(){ra(bf(),this._delegate,"operation-not-supported-in-this-environment");const e=await q$(this._delegate,Ar);return e?At(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){q4(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=XE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=XE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return RU(this._delegate,e,n)}sendPasswordResetEmail(e,n){return wU(this._delegate,e,n||void 0)}async setPersistence(e){tB(this._delegate,e);let n;switch(e){case Lt.SESSION:n=Hi;break;case Lt.LOCAL:n=await Ft(Cl)._isAvailable()?Cl:my;break;case Lt.NONE:n=go;break;default:return st("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return At(this._delegate,gU(this._delegate))}signInWithCredential(e){return At(this._delegate,Td(this._delegate,e))}signInWithCustomToken(e){return At(this._delegate,vU(this._delegate,e))}signInWithEmailAndPassword(e,n){return At(this._delegate,AU(this._delegate,e,n))}signInWithEmailLink(e,n){return At(this._delegate,CU(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Am(this._delegate,T$(this._delegate,e,n))}async signInWithPopup(e){return ra(bf(),this._delegate,"operation-not-supported-in-this-environment"),At(this._delegate,N$(this._delegate,e,Ar))}async signInWithRedirect(e){return ra(bf(),this._delegate,"operation-not-supported-in-this-environment"),await Sm(this._delegate),F$(this._delegate,e,Ar)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return TU(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Rm.Persistence=Lt;function XE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Wn.getOrCreate(o)),error:e,complete:n}}function lB(t,e){const n=nB(t,e);if(typeof self<"u"&&!n.includes(Cl)&&n.push(Cl),typeof window<"u")for(const r of[my,Hi])n.includes(r)||n.push(r);return n.includes(go)||n.push(go),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.providerId="phone",this._delegate=new Qi(E1(Nn.auth()))}static credential(e,n){return Qi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Ty.PHONE_SIGN_IN_METHOD=Qi.PHONE_SIGN_IN_METHOD;Ty.PROVIDER_ID=Qi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uB=k;class cB{constructor(e,n,r=Nn.app()){var i;uB((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new E$(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hB="auth-compat";function dB(t){t.INTERNAL.registerComponent(new Dn(hB,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Rm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:fs.EMAIL_SIGNIN,PASSWORD_RESET:fs.PASSWORD_RESET,RECOVER_EMAIL:fs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:fs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:fs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:fs.VERIFY_EMAIL}},EmailAuthProvider:oi,FacebookAuthProvider:yn,GithubAuthProvider:wn,GoogleAuthProvider:vn,OAuthProvider:Gs,SAMLAuthProvider:ah,PhoneAuthProvider:Ty,PhoneMultiFactorGenerator:m1,RecaptchaVerifier:cB,TwitterAuthProvider:En,Auth:Rm,AuthCredential:Vo,Error:yt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(W4,G4)}dB(Nn);const fB={apiKey:"AIzaSyCdjuKe_DkpM9PT71WMfl7l3SVpCeZfD5c",authDomain:"mobilitymate-a8b53.firebaseapp.com",projectId:"mobilitymate-a8b53",storageBucket:"mobilitymate-a8b53.appspot.com",messagingSenderId:"911524752185",appId:"1:911524752185:web:928da1ee8a528a348356e8"};Nn.apps.length?Nn.app():Nn.initializeApp(fB);const pB=Nn.firestore(),T1=Nn.auth(),mB=()=>{const t=async e=>{e.preventDefault();const{name:n,email:r,password:i}=e.target.elements;if(!n.value||!r.value||!i.value){alert("All fields are required.");return}if(!/\S+@\S+\.\S+/.test(r.value)){alert("Please enter a valid email address.");return}if(i.value.length<8){alert("Password must be at least 8 characters.");return}try{const o=(await T1.createUserWithEmailAndPassword(r.value,i.value)).user;await pB.collection("practitioners").doc(o.uid).set({name:n.value,email:r.value,userId:o.uid}),window.location.href="/"}catch(s){s.code==="auth/email-already-in-use"?alert("This email is already in use."):(console.error("Error: ",s),alert(s.message))}};return I.jsx("div",{className:"w-full h-full bg-black flex justify-center items-center",children:I.jsxs("div",{className:"w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20",children:[I.jsxs("div",{className:"w-2/5 p-12 rounded-xl",children:[I.jsxs("form",{onSubmit:t,children:[I.jsxs("div",{className:"flex flex-row mb-12",children:[I.jsx("div",{className:"flex justify-center items-center",children:I.jsx("div",{className:"h-11 w-12 mb-4",children:I.jsx("img",{src:Tg,alt:"MobilityMate Logo"})})}),I.jsx("div",{className:"font-regular text-3xl text-gray-700 ml-4 mt-[6px]",children:I.jsx("a",{href:"/",children:"MobilityMate"})})]}),I.jsx("h2",{className:"font-medium text-3xl text-gray-800 mb-2",children:"Create an account"}),I.jsxs("div",{className:"space-y-4 mb-6",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),I.jsx("input",{type:"name",id:"name",name:"name",placeholder:"John Doe",className:"mt-1 block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),I.jsx("input",{type:"email",id:"email",name:"email",placeholder:"name@example.com",className:"mt-1 block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),I.jsx("input",{type:"password",id:"password",name:"password",placeholder:"Password (at least 8 characters)",className:"mt-1 block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"})]}),I.jsx("button",{type:"submit",className:"w-full h-[55px] bg-black hover:bg-gray-800 text-white py-2 px-4 rounded transition duration-300 ease-in-out",children:"Sign Up"}),I.jsxs("p",{className:"text-xs text-gray-600",children:["By clicking continue, you agree to our ",I.jsx("a",{href:"#",className:"text-blue-500 hover:underline",children:"Terms of Service"})," and ",I.jsx("a",{href:"#",className:"text-blue-500 hover:underline",children:"Privacy Policy"}),"."]})]}),I.jsxs("div",{className:"flex text-gray-800",children:["Already have an account?",I.jsx("a",{href:"/practitioner/login",className:"ml-3",children:I.jsx("b",{className:"underline hover:text-gray-700",children:"Login"})})]})]}),I.jsxs("div",{className:"mt-8 p-4 bg-gray-100 rounded-lg text-xs text-gray-800",children:["Your well-being is our priority! Our team is here to assist you every step of the way. Let us be a part of your journey to a better, more fulfilling lifestyle.",I.jsx("p",{className:"font-semibold text-gray-800 mt-2",children:"The MobilityMate Team 🏋️‍♂️"})]})]}),I.jsx("div",{className:"w-px mt-40 mb-40 bg-gray-200"}),I.jsx("div",{className:"w-1/2 h-full flex justify-center items-center",children:I.jsx("img",{src:j0,alt:"Support For All",className:"object-cover h-[110%] w-[100%] mt-[-3em]"})})]})})},gB=()=>{const t=async e=>{e.preventDefault();const{email:n,password:r}=e.target.elements;try{await T1.signInWithEmailAndPassword(n.value,r.value),window.location.href="/patient/home"}catch(i){console.error("Login Error: ",i),alert("Failed to login. Please check your credentials.")}};return I.jsx("div",{className:"w-full h-full bg-black flex justify-center items-center",children:I.jsxs("div",{className:"w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20",children:[I.jsx("div",{className:"w-2/5 p-12 rounded-xl",children:I.jsxs("form",{onSubmit:t,children:[I.jsxs("div",{className:"flex flex-row mb-12",children:[I.jsx("div",{className:"flex justify-center items-center",children:I.jsx("div",{className:"h-11 w-12 mb-4",children:I.jsx("img",{src:Tg,alt:"logo"})})}),I.jsx("div",{className:"font-regular text-3xl text-gray-700 ml-4 mt-[6px]",children:I.jsx("a",{href:"/",children:"MobilityMate"})})]}),I.jsx("div",{className:"font-medium text-gray-800 text-3xl mb-2",children:"Welcome back!"}),I.jsx("div",{className:"font-light text-gray-800 text-md mb-8",children:"Please login in to your account."}),I.jsxs("div",{className:"mb-6",children:[I.jsx("label",{htmlFor:"email",className:"text-gray-800",children:"Email"}),I.jsx("input",{type:"text",id:"email",name:"email",placeholder:"johndoe@domain.com",className:"block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"})]}),I.jsxs("div",{className:"mb-6",children:[I.jsx("label",{htmlFor:"password",className:"text-gray-800",children:"Password"}),I.jsx("input",{type:"password",id:"password",name:"password",placeholder:"Password",className:"block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"})]}),I.jsx("div",{className:"flex mb-10",children:I.jsx("button",{type:"submit",className:"w-full h-[55px] bg-black hover:bg-gray-800 text-white py-2 px-4 rounded",children:"Login"})}),I.jsxs("div",{className:"flex text-gray-800",children:["Don't have an account yet?",I.jsx("a",{href:"/practitioner/signUp",className:"ml-3",children:I.jsx("b",{className:"underline hover:text-gray-700",children:"Sign Up"})})]})]})}),I.jsx("div",{className:"w-px mt-40 mb-40 bg-gray-200"}),I.jsx("div",{className:"w-1/2 h-full flex justify-center items-center",children:I.jsx("img",{src:j0,alt:"Support For All",className:"object-cover h-[110%] w-[100%] mt-[-3em]"})})]})})},_B=()=>I.jsx(Fx,{children:I.jsxs(Lx,{children:[I.jsx(ps,{path:"/",element:I.jsx($x,{})}),I.jsx(ps,{path:"/patient/:patientID",element:I.jsx(sb,{})}),I.jsx(ps,{path:"/practitioner/dashboard",element:I.jsx(ob,{})}),I.jsx(ps,{path:"/practitioner/signUp",element:I.jsx(mB,{})}),I.jsx(ps,{path:"/practitioner/login",element:I.jsx(gB,{})})]})});Df.createRoot(document.getElementById("root")).render(I.jsx(lI.StrictMode,{children:I.jsx(_B,{})}));
