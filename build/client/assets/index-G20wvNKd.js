import{r as O,g as S}from"./chunk-HA7DTUK3-CbFDrjxG.js";var d={exports:{}},n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function R(){if(l)return n;l=1;var u=O();function g(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var i={d:{f:a,r:function(){throw Error(g(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},m=Symbol.for("react.portal");function v(e,r,t){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:c==null?null:""+c,children:e,containerInfo:r,implementation:t}}var f=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function s(e,r){if(e==="font")return"";if(typeof r=="string")return r==="use-credentials"?r:""}return n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,n.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)throw Error(g(299));return v(e,r,null,t)},n.flushSync=function(e){var r=f.T,t=i.p;try{if(f.T=null,i.p=2,e)return e()}finally{f.T=r,i.p=t,i.d.f()}},n.preconnect=function(e,r){typeof e=="string"&&(r?(r=r.crossOrigin,r=typeof r=="string"?r==="use-credentials"?r:"":void 0):r=null,i.d.C(e,r))},n.prefetchDNS=function(e){typeof e=="string"&&i.d.D(e)},n.preinit=function(e,r){if(typeof e=="string"&&r&&typeof r.as=="string"){var t=r.as,c=s(t,r.crossOrigin),y=typeof r.integrity=="string"?r.integrity:void 0,o=typeof r.fetchPriority=="string"?r.fetchPriority:void 0;t==="style"?i.d.S(e,typeof r.precedence=="string"?r.precedence:void 0,{crossOrigin:c,integrity:y,fetchPriority:o}):t==="script"&&i.d.X(e,{crossOrigin:c,integrity:y,fetchPriority:o,nonce:typeof r.nonce=="string"?r.nonce:void 0})}},n.preinitModule=function(e,r){if(typeof e=="string")if(typeof r=="object"&&r!==null){if(r.as==null||r.as==="script"){var t=s(r.as,r.crossOrigin);i.d.M(e,{crossOrigin:t,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0})}}else r==null&&i.d.M(e)},n.preload=function(e,r){if(typeof e=="string"&&typeof r=="object"&&r!==null&&typeof r.as=="string"){var t=r.as,c=s(t,r.crossOrigin);i.d.L(e,t,{crossOrigin:c,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0,type:typeof r.type=="string"?r.type:void 0,fetchPriority:typeof r.fetchPriority=="string"?r.fetchPriority:void 0,referrerPolicy:typeof r.referrerPolicy=="string"?r.referrerPolicy:void 0,imageSrcSet:typeof r.imageSrcSet=="string"?r.imageSrcSet:void 0,imageSizes:typeof r.imageSizes=="string"?r.imageSizes:void 0,media:typeof r.media=="string"?r.media:void 0})}},n.preloadModule=function(e,r){if(typeof e=="string")if(r){var t=s(r.as,r.crossOrigin);i.d.m(e,{as:typeof r.as=="string"&&r.as!=="script"?r.as:void 0,crossOrigin:t,integrity:typeof r.integrity=="string"?r.integrity:void 0})}else i.d.m(e)},n.requestFormReset=function(e){i.d.r(e)},n.unstable_batchedUpdates=function(e,r){return e(r)},n.useFormState=function(e,r,t){return f.H.useFormState(e,r,t)},n.useFormStatus=function(){return f.H.useHostTransitionStatus()},n.version="19.0.0",n}var _;function E(){if(_)return d.exports;_=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(g){console.error(g)}}return u(),d.exports=R(),d.exports}var T=E();const h=S(T);export{h as R,T as a,E as r};
