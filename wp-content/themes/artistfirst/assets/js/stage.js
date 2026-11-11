(()=>{var tM=Object.create;var Og=Object.defineProperty;var nM=Object.getOwnPropertyDescriptor;var iM=Object.getOwnPropertyNames;var rM=Object.getPrototypeOf,sM=Object.prototype.hasOwnProperty;var ls=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var oM=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of iM(e))!sM.call(t,r)&&r!==n&&Og(t,r,{get:()=>e[r],enumerable:!(i=nM(e,r))||i.enumerable});return t};var Hh=(t,e,n)=>(n=t!=null?tM(rM(t)):{},oM(e||!t||!t.__esModule?Og(n,"default",{value:t,enumerable:!0}):n,t));var Zg=ls(Ke=>{"use strict";var ya=Symbol.for("react.element"),aM=Symbol.for("react.portal"),lM=Symbol.for("react.fragment"),cM=Symbol.for("react.strict_mode"),uM=Symbol.for("react.profiler"),hM=Symbol.for("react.provider"),dM=Symbol.for("react.context"),fM=Symbol.for("react.forward_ref"),pM=Symbol.for("react.suspense"),mM=Symbol.for("react.memo"),gM=Symbol.for("react.lazy"),kg=Symbol.iterator;function vM(t){return t===null||typeof t!="object"?null:(t=kg&&t[kg]||t["@@iterator"],typeof t=="function"?t:null)}var Vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,Gg={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||Vg}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wg(){}Wg.prototype=Qs.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||Vg}var Xh=Wh.prototype=new Wg;Xh.constructor=Wh;Hg(Xh,Qs.prototype);Xh.isPureReactComponent=!0;var zg=Array.isArray,Xg=Object.prototype.hasOwnProperty,Yh={current:null},Yg={key:!0,ref:!0,__self:!0,__source:!0};function qg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xg.call(e,i)&&!Yg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ya,type:t,key:s,ref:o,props:r,_owner:Yh.current}}function _M(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function yM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bg=/\/+/g;function Gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yM(""+t.key):e.toString(36)}function ql(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case aM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gh(o,0):i,zg(r)?(n="",t!=null&&(n=t.replace(Bg,"$&/")+"/"),ql(r,e,n,"",function(c){return c})):r!=null&&(qh(r)&&(r=_M(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Bg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",zg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gh(s,a);o+=ql(s,e,n,l,r)}else if(l=vM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gh(s,a++),o+=ql(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yl(t,e,n){if(t==null)return t;var i=[],r=0;return ql(t,i,"","",function(s){return e.call(n,s,r++)}),i}function xM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pn={current:null},$l={transition:null},MM={ReactCurrentDispatcher:Pn,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Yh};function $g(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Yl,forEach:function(t,e,n){Yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yl(t,function(){e++}),e},toArray:function(t){return Yl(t,function(e){return e})||[]},only:function(t){if(!qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Qs;Ke.Fragment=lM;Ke.Profiler=uM;Ke.PureComponent=Wh;Ke.StrictMode=cM;Ke.Suspense=pM;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MM;Ke.act=$g;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xg.call(e,l)&&!Yg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ya,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:dM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hM,_context:t},t.Consumer=t};Ke.createElement=qg;Ke.createFactory=function(t){var e=qg.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:fM,render:t}};Ke.isValidElement=qh;Ke.lazy=function(t){return{$$typeof:gM,_payload:{_status:-1,_result:t},_init:xM}};Ke.memo=function(t,e){return{$$typeof:mM,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};Ke.unstable_act=$g;Ke.useCallback=function(t,e){return Pn.current.useCallback(t,e)};Ke.useContext=function(t){return Pn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return Pn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return Pn.current.useEffect(t,e)};Ke.useId=function(){return Pn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return Pn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return Pn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return Pn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return Pn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return Pn.current.useReducer(t,e,n)};Ke.useRef=function(t){return Pn.current.useRef(t)};Ke.useState=function(t){return Pn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return Pn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return Pn.current.useTransition()};Ke.version="18.3.1"});var Zl=ls(($2,Kg)=>{"use strict";Kg.exports=Zg()});var o0=ls(xt=>{"use strict";function Jh(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Kl(r,e))t[i]=e,t[n]=r,n=i;else break e}}function mi(t){return t.length===0?null:t[0]}function jl(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>Kl(a,n))l<r&&0>Kl(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>Kl(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Kl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Jg=performance,xt.unstable_now=function(){return Jg.now()}):($h=Date,jg=$h.now(),xt.unstable_now=function(){return $h.now()-jg});var Jg,$h,jg,Ui=[],_r=[],SM=1,ni=null,fn=3,Ql=!1,cs=!1,Ma=!1,t0=typeof setTimeout=="function"?setTimeout:null,n0=typeof clearTimeout=="function"?clearTimeout:null,Qg=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function jh(t){for(var e=mi(_r);e!==null;){if(e.callback===null)jl(_r);else if(e.startTime<=t)jl(_r),e.sortIndex=e.expirationTime,Jh(Ui,e);else break;e=mi(_r)}}function Qh(t){if(Ma=!1,jh(t),!cs)if(mi(Ui)!==null)cs=!0,td(ed);else{var e=mi(_r);e!==null&&nd(Qh,e.startTime-t)}}function ed(t,e){cs=!1,Ma&&(Ma=!1,n0(Sa),Sa=-1),Ql=!0;var n=fn;try{for(jh(e),ni=mi(Ui);ni!==null&&(!(ni.expirationTime>e)||t&&!s0());){var i=ni.callback;if(typeof i=="function"){ni.callback=null,fn=ni.priorityLevel;var r=i(ni.expirationTime<=e);e=xt.unstable_now(),typeof r=="function"?ni.callback=r:ni===mi(Ui)&&jl(Ui),jh(e)}else jl(Ui);ni=mi(Ui)}if(ni!==null)var s=!0;else{var o=mi(_r);o!==null&&nd(Qh,o.startTime-e),s=!1}return s}finally{ni=null,fn=n,Ql=!1}}var ec=!1,Jl=null,Sa=-1,i0=5,r0=-1;function s0(){return!(xt.unstable_now()-r0<i0)}function Zh(){if(Jl!==null){var t=xt.unstable_now();r0=t;var e=!0;try{e=Jl(!0,t)}finally{e?xa():(ec=!1,Jl=null)}}else ec=!1}var xa;typeof Qg=="function"?xa=function(){Qg(Zh)}:typeof MessageChannel!="undefined"?(Kh=new MessageChannel,e0=Kh.port2,Kh.port1.onmessage=Zh,xa=function(){e0.postMessage(null)}):xa=function(){t0(Zh,0)};var Kh,e0;function td(t){Jl=t,ec||(ec=!0,xa())}function nd(t,e){Sa=t0(function(){t(xt.unstable_now())},e)}xt.unstable_IdlePriority=5;xt.unstable_ImmediatePriority=1;xt.unstable_LowPriority=4;xt.unstable_NormalPriority=3;xt.unstable_Profiling=null;xt.unstable_UserBlockingPriority=2;xt.unstable_cancelCallback=function(t){t.callback=null};xt.unstable_continueExecution=function(){cs||Ql||(cs=!0,td(ed))};xt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):i0=0<t?Math.floor(1e3/t):5};xt.unstable_getCurrentPriorityLevel=function(){return fn};xt.unstable_getFirstCallbackNode=function(){return mi(Ui)};xt.unstable_next=function(t){switch(fn){case 1:case 2:case 3:var e=3;break;default:e=fn}var n=fn;fn=e;try{return t()}finally{fn=n}};xt.unstable_pauseExecution=function(){};xt.unstable_requestPaint=function(){};xt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=fn;fn=t;try{return e()}finally{fn=n}};xt.unstable_scheduleCallback=function(t,e,n){var i=xt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:SM++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Jh(_r,t),mi(Ui)===null&&t===mi(_r)&&(Ma?(n0(Sa),Sa=-1):Ma=!0,nd(Qh,n-i))):(t.sortIndex=r,Jh(Ui,t),cs||Ql||(cs=!0,td(ed))),t};xt.unstable_shouldYield=s0;xt.unstable_wrapCallback=function(t){var e=fn;return function(){var n=fn;fn=e;try{return t.apply(this,arguments)}finally{fn=n}}}});var l0=ls((K2,a0)=>{"use strict";a0.exports=o0()});var dy=ls(Jn=>{"use strict";var wM=Zl(),Zn=l0();function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,Wa={};function Ss(t,e){Mo(t,e),Mo(t+"Capture",e)}function Mo(t,e){for(Wa[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var ji=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Td=Object.prototype.hasOwnProperty,EM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,c0={},u0={};function TM(t){return Td.call(u0,t)?!0:Td.call(c0,t)?!1:EM.test(t)?u0[t]=!0:(c0[t]=!0,!1)}function AM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bM(t,e,n,i){if(e===null||typeof e=="undefined"||AM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new Nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new Nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new Nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new Nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new Nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new Nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new Nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new Nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new Nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_f,yf);an[e]=new Nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_f,yf);an[e]=new Nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_f,yf);an[e]=new Nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new Nn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new Nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new Nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function xf(t,e,n,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bM(e,n,r,i)&&(n=null),i||r===null?TM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=wM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),no=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),Cd=Symbol.for("react.suspense_list"),wf=Symbol.for("react.memo"),xr=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var _v=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var h0=Symbol.iterator;function wa(t){return t===null||typeof t!="object"?null:(t=h0&&t[h0]||t["@@iterator"],typeof t=="function"?t:null)}var Dt=Object.assign,id;function Ia(t){if(id===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);id=e&&e[1]||""}return`
`+id+t}var rd=!1;function sd(t,e){if(!t||rd)return"";rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ia(t):""}function CM(t){switch(t.tag){case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 2:case 15:return t=sd(t.type,!1),t;case 11:return t=sd(t.type.render,!1),t;case 1:return t=sd(t.type,!0),t;default:return""}}function Rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case io:return"Fragment";case no:return"Portal";case Ad:return"Profiler";case Mf:return"StrictMode";case bd:return"Suspense";case Cd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case gv:return(t._context.displayName||"Context")+".Provider";case Sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wf:return e=t.displayName||null,e!==null?e:Rd(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return Rd(t(e))}catch(n){}}return null}function RM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(e);case 8:return e===Mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PM(t){var e=yv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nc(t){t._valueTracker||(t._valueTracker=PM(t))}function xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=yv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pc(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch(e){return t.body}}function Pd(t,e){var n=e.checked;return Dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function d0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mv(t,e){e=e.checked,e!=null&&xf(t,"checked",e,!1)}function Id(t,e){Mv(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ld(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function f0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ld(t,e,n){(e!=="number"||Pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var La=Array.isArray;function mo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return Dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function p0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(La(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function Sv(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function m0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ic,Ev=(function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ic=ic||document.createElement("div"),ic.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ic.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IM=["Webkit","ms","Moz","O"];Object.keys(Ua).forEach(function(t){IM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ua[e]=Ua[t]})});function Tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ua.hasOwnProperty(t)&&Ua[t]?(""+e).trim():e+"px"}function Av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var LM=Dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ud(t,e){if(e){if(LM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kd=null,go=null,vo=null;function g0(t){if(t=cl(t)){if(typeof kd!="function")throw Error(te(280));var e=t.stateNode;e&&(e=ru(e),kd(t.stateNode,t.type,e))}}function bv(t){go?vo?vo.push(t):vo=[t]:go=t}function Cv(){if(go){var t=go,e=vo;if(vo=go=null,g0(t),e)for(t=0;t<e.length;t++)g0(e[t])}}function Rv(t,e){return t(e)}function Pv(){}var od=!1;function Iv(t,e,n){if(od)return t(e,n);od=!0;try{return Rv(t,e,n)}finally{od=!1,(go!==null||vo!==null)&&(Pv(),Cv())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var i=ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var zd=!1;if(ji)try{eo={},Object.defineProperty(eo,"passive",{get:function(){zd=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch(t){zd=!1}var eo;function NM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Fa=!1,Ic=null,Lc=!1,Bd=null,DM={onError:function(t){Fa=!0,Ic=t}};function UM(t,e,n,i,r,s,o,a,l){Fa=!1,Ic=null,NM.apply(DM,arguments)}function FM(t,e,n,i,r,s,o,a,l){if(UM.apply(this,arguments),Fa){if(Fa){var c=Ic;Fa=!1,Ic=null}else throw Error(te(198));Lc||(Lc=!0,Bd=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v0(t){if(ws(t)!==t)throw Error(te(188))}function OM(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return v0(r),t;if(s===i)return v0(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Nv(t){return t=OM(t),t!==null?Dv(t):null}function Dv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dv(t);if(e!==null)return e;t=t.sibling}return null}var Uv=Zn.unstable_scheduleCallback,_0=Zn.unstable_cancelCallback,kM=Zn.unstable_shouldYield,zM=Zn.unstable_requestPaint,zt=Zn.unstable_now,BM=Zn.unstable_getCurrentPriorityLevel,Tf=Zn.unstable_ImmediatePriority,Fv=Zn.unstable_UserBlockingPriority,Nc=Zn.unstable_NormalPriority,VM=Zn.unstable_LowPriority,Ov=Zn.unstable_IdlePriority,eu=null,zi=null;function HM(t){if(zi&&typeof zi.onCommitFiberRoot=="function")try{zi.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch(e){}}var xi=Math.clz32?Math.clz32:XM,GM=Math.log,WM=Math.LN2;function XM(t){return t>>>=0,t===0?32:31-(GM(t)/WM|0)|0}var rc=64,sc=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Na(a):(s&=o,s!==0&&(i=Na(s)))}else o=n&~r,o!==0?i=Na(o):s!==0&&(i=Na(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-xi(e),r=1<<n,i|=t[n],e&=~r;return i}function YM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xi(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=YM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kv(){var t=rc;return rc<<=1,(rc&4194240)===0&&(rc=64),t}function ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xi(e),t[e]=n}function $M(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-xi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-xi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function zv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Bv,bf,Vv,Hv,Gv,Hd=!1,oc=[],Ar=null,br=null,Cr=null,qa=new Map,$a=new Map,Sr=[],ZM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function y0(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function Ea(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=cl(e),e!==null&&bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function KM(t,e,n,i,r){switch(e){case"focusin":return Ar=Ea(Ar,t,e,n,i,r),!0;case"dragenter":return br=Ea(br,t,e,n,i,r),!0;case"mouseover":return Cr=Ea(Cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return qa.set(s,Ea(qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$a.set(s,Ea($a.get(s)||null,t,e,n,i,r)),!0}return!1}function Wv(t){var e=ds(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=Lv(n),e!==null){t.blockedOn=e,Gv(t.priority,function(){Vv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Od=i,n.target.dispatchEvent(i),Od=null}else return e=cl(n),e!==null&&bf(e),t.blockedOn=n,!1;e.shift()}return!0}function x0(t,e,n){xc(t)&&n.delete(e)}function JM(){Hd=!1,Ar!==null&&xc(Ar)&&(Ar=null),br!==null&&xc(br)&&(br=null),Cr!==null&&xc(Cr)&&(Cr=null),qa.forEach(x0),$a.forEach(x0)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,Zn.unstable_scheduleCallback(Zn.unstable_NormalPriority,JM)))}function Za(t){function e(r){return Ta(r,t)}if(0<oc.length){Ta(oc[0],t);for(var n=1;n<oc.length;n++){var i=oc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ar!==null&&Ta(Ar,t),br!==null&&Ta(br,t),Cr!==null&&Ta(Cr,t),qa.forEach(e),$a.forEach(e),n=0;n<Sr.length;n++)i=Sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)Wv(n),n.blockedOn===null&&Sr.shift()}var _o=nr.ReactCurrentBatchConfig,Uc=!0;function jM(t,e,n,i){var r=pt,s=_o.transition;_o.transition=null;try{pt=1,Cf(t,e,n,i)}finally{pt=r,_o.transition=s}}function QM(t,e,n,i){var r=pt,s=_o.transition;_o.transition=null;try{pt=4,Cf(t,e,n,i)}finally{pt=r,_o.transition=s}}function Cf(t,e,n,i){if(Uc){var r=Gd(t,e,n,i);if(r===null)pd(t,e,i,Fc,n),y0(t,i);else if(KM(r,t,e,n,i))i.stopPropagation();else if(y0(t,i),e&4&&-1<ZM.indexOf(t)){for(;r!==null;){var s=cl(r);if(s!==null&&Bv(s),s=Gd(t,e,n,i),s===null&&pd(t,e,i,Fc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pd(t,e,i,null,n)}}var Fc=null;function Gd(t,e,n,i){if(Fc=null,t=Ef(i),t=ds(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fc=t,null}function Xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BM()){case Tf:return 1;case Fv:return 4;case Nc:case VM:return 16;case Ov:return 536870912;default:return 16}default:return 16}}var Er=null,Rf=null,Mc=null;function Yv(){if(Mc)return Mc;var t,e=Rf,n=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Mc=r.slice(t,1<i?1-i:void 0)}function Sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ac(){return!0}function M0(){return!1}function Kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ac:M0,this.isPropagationStopped=M0,this}return Dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pf=Kn(Co),ll=Dt({},Co,{view:0,detail:0}),eS=Kn(ll),ld,cd,Aa,tu=Dt({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(ld=t.screenX-Aa.screenX,cd=t.screenY-Aa.screenY):cd=ld=0,Aa=t),ld)},movementY:function(t){return"movementY"in t?t.movementY:cd}}),S0=Kn(tu),tS=Dt({},tu,{dataTransfer:0}),nS=Kn(tS),iS=Dt({},ll,{relatedTarget:0}),ud=Kn(iS),rS=Dt({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=Kn(rS),oS=Dt({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=Kn(oS),lS=Dt({},Co,{data:0}),w0=Kn(lS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hS[t])?!!e[t]:!1}function If(){return dS}var fS=Dt({},ll,{key:function(t){if(t.key){var e=cS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(t){return t.type==="keypress"?Sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=Kn(fS),mS=Dt({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E0=Kn(mS),gS=Dt({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),vS=Kn(gS),_S=Dt({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=Kn(_S),xS=Dt({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=Kn(xS),SS=[9,13,27,32],Lf=ji&&"CompositionEvent"in window,Oa=null;ji&&"documentMode"in document&&(Oa=document.documentMode);var wS=ji&&"TextEvent"in window&&!Oa,qv=ji&&(!Lf||Oa&&8<Oa&&11>=Oa),T0=" ",A0=!1;function $v(t,e){switch(t){case"keyup":return SS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ro=!1;function ES(t,e){switch(t){case"compositionend":return Zv(e);case"keypress":return e.which!==32?null:(A0=!0,T0);case"textInput":return t=e.data,t===T0&&A0?null:t;default:return null}}function TS(t,e){if(ro)return t==="compositionend"||!Lf&&$v(t,e)?(t=Yv(),Mc=Rf=Er=null,ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qv&&e.locale!=="ko"?null:e.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AS[t.type]:e==="textarea"}function Kv(t,e,n,i){bv(i),e=Oc(e,"onChange"),0<e.length&&(n=new Pf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ka=null,Ka=null;function bS(t){a_(t,0)}function nu(t){var e=ao(t);if(xv(e))return t}function CS(t,e){if(t==="change")return e}var Jv=!1;ji&&(ji?(cc="oninput"in document,cc||(hd=document.createElement("div"),hd.setAttribute("oninput","return;"),cc=typeof hd.oninput=="function"),lc=cc):lc=!1,Jv=lc&&(!document.documentMode||9<document.documentMode));var lc,cc,hd;function C0(){ka&&(ka.detachEvent("onpropertychange",jv),Ka=ka=null)}function jv(t){if(t.propertyName==="value"&&nu(Ka)){var e=[];Kv(e,Ka,t,Ef(t)),Iv(bS,e)}}function RS(t,e,n){t==="focusin"?(C0(),ka=e,Ka=n,ka.attachEvent("onpropertychange",jv)):t==="focusout"&&C0()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Ka)}function IS(t,e){if(t==="click")return nu(e)}function LS(t,e){if(t==="input"||t==="change")return nu(e)}function NS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Si=typeof Object.is=="function"?Object.is:NS;function Ja(t,e){if(Si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Td.call(e,r)||!Si(t[r],e[r]))return!1}return!0}function R0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function P0(t,e){var n=R0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=R0(n)}}function Qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=Pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch(i){n=!1}if(n)t=e.contentWindow;else break;e=Pc(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DS(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qv(n.ownerDocument.documentElement,n)){if(i!==null&&Nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=P0(n,s);var o=P0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var US=ji&&"documentMode"in document&&11>=document.documentMode,so=null,Wd=null,za=null,Xd=!1;function I0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xd||so==null||so!==Pc(i)||(i=so,"selectionStart"in i&&Nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),za&&Ja(za,i)||(za=i,i=Oc(Wd,"onSelect"),0<i.length&&(e=new Pf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=so)))}function uc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:uc("Animation","AnimationEnd"),animationiteration:uc("Animation","AnimationIteration"),animationstart:uc("Animation","AnimationStart"),transitionend:uc("Transition","TransitionEnd")},dd={},t_={};ji&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function iu(t){if(dd[t])return dd[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return dd[t]=e[n];return t}var n_=iu("animationend"),i_=iu("animationiteration"),r_=iu("animationstart"),s_=iu("transitionend"),o_=new Map,L0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){o_.set(t,e),Ss(e,[t])}for(hc=0;hc<L0.length;hc++)dc=L0[hc],N0=dc.toLowerCase(),D0=dc[0].toUpperCase()+dc.slice(1),Fr(N0,"on"+D0);var dc,N0,D0,hc;Fr(n_,"onAnimationEnd");Fr(i_,"onAnimationIteration");Fr(r_,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(s_,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function U0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,FM(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;U0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;U0(r,a,c),s=l}}}if(Lc)throw t=Bd,Lc=!1,Bd=null,t}function wt(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function fd(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var fc="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[fc]){t[fc]=!0,mv.forEach(function(n){n!=="selectionchange"&&(FS.has(n)||fd(n,!1,t),fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fc]||(e[fc]=!0,fd("selectionchange",!1,e))}}function l_(t,e,n,i){switch(Xv(e)){case 1:var r=jM;break;case 4:r=QM;break;default:r=Cf}n=r.bind(null,e,n,t),r=void 0,!zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pd(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ds(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Iv(function(){var c=s,u=Ef(n),f=[];e:{var d=o_.get(t);if(d!==void 0){var m=Pf,v=t;switch(t){case"keypress":if(Sc(n)===0)break e;case"keydown":case"keyup":m=pS;break;case"focusin":v="focus",m=ud;break;case"focusout":v="blur",m=ud;break;case"beforeblur":case"afterblur":m=ud;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=S0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vS;break;case n_:case i_:case r_:m=sS;break;case s_:m=yS;break;case"scroll":m=eS;break;case"wheel":m=MS;break;case"copy":case"cut":case"paste":m=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=E0}var x=(e&4)!==0,p=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,y;_!==null;){y=_;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,h!==null&&(M=Ya(_,h),M!=null&&x.push(Qa(_,M,y)))),p)break;_=_.return}0<x.length&&(d=new m(d,v,null,n,u),f.push({event:d,listeners:x}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Od&&(v=n.relatedTarget||n.fromElement)&&(ds(v)||v[Qi]))break e;if((m||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?ds(v):null,v!==null&&(p=ws(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(x=S0,M="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=E0,M="onPointerLeave",h="onPointerEnter",_="pointer"),p=m==null?d:ao(m),y=v==null?d:ao(v),d=new x(M,_+"leave",m,n,u),d.target=p,d.relatedTarget=y,M=null,ds(u)===c&&(x=new x(h,_+"enter",v,n,u),x.target=y,x.relatedTarget=p,M=x),p=M,m&&v)t:{for(x=m,h=v,_=0,y=x;y;y=to(y))_++;for(y=0,M=h;M;M=to(M))y++;for(;0<_-y;)x=to(x),_--;for(;0<y-_;)h=to(h),y--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=to(x),h=to(h)}x=null}else x=null;m!==null&&F0(f,d,m,x,!1),v!==null&&p!==null&&F0(f,p,v,x,!0)}}e:{if(d=c?ao(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=CS;else if(b0(d))if(Jv)C=LS;else{C=PS;var A=RS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=IS);if(C&&(C=C(t,c))){Kv(f,C,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Ld(d,"number",d.value)}switch(A=c?ao(c):window,t){case"focusin":(b0(A)||A.contentEditable==="true")&&(so=A,Wd=c,za=null);break;case"focusout":za=Wd=so=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,I0(f,n,u);break;case"selectionchange":if(US)break;case"keydown":case"keyup":I0(f,n,u)}var T;if(Lf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ro?$v(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(qv&&n.locale!=="ko"&&(ro||R!=="onCompositionStart"?R==="onCompositionEnd"&&ro&&(T=Yv()):(Er=u,Rf="value"in Er?Er.value:Er.textContent,ro=!0)),A=Oc(c,R),0<A.length&&(R=new w0(R,t,null,n,u),f.push({event:R,listeners:A}),T?R.data=T:(T=Zv(n),T!==null&&(R.data=T)))),(T=wS?ES(t,n):TS(t,n))&&(c=Oc(c,"onBeforeInput"),0<c.length&&(u=new w0("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=T))}a_(f,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ya(t,n),s!=null&&i.unshift(Qa(t,s,r)),s=Ya(t,e),s!=null&&i.push(Qa(t,s,r))),t=t.return}return i}function to(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function F0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ya(n,s),l!=null&&o.unshift(Qa(n,l,a))):r||(l=Ya(n,s),l!=null&&o.push(Qa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function O0(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(kS,"")}function pc(t,e,n){if(e=O0(e),O0(t)!==e&&n)throw Error(te(425))}function kc(){}var Yd=null,qd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof k0!="undefined"?function(t){return k0.resolve(null).then(t).catch(VS)}:Zd;function VS(t){setTimeout(function(){throw t})}function md(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Za(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function z0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ro,el="__reactProps$"+Ro,Qi="__reactContainer$"+Ro,Kd="__reactEvents$"+Ro,HS="__reactListeners$"+Ro,GS="__reactHandles$"+Ro;function ds(t){var e=t[ki];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[ki]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=z0(t);t!==null;){if(n=t[ki])return n;t=z0(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[ki]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function ru(t){return t[el]||null}var Jd=[],lo=-1;function Or(t){return{current:t}}function Et(t){0>lo||(t.current=Jd[lo],Jd[lo]=null,lo--)}function Mt(t,e){lo++,Jd[lo]=t.current,t.current=e}var Ur={},vn=Or(Ur),Vn=Or(!1),vs=Ur;function So(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Hn(t){return t=t.childContextTypes,t!=null}function zc(){Et(Vn),Et(vn)}function B0(t,e,n){if(vn.current!==Ur)throw Error(te(168));Mt(vn,e),Mt(Vn,n)}function c_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,RM(t)||"Unknown",r));return Dt({},n,i)}function Bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,vs=vn.current,Mt(vn,t),Mt(Vn,Vn.current),!0}function V0(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=c_(t,e,vs),i.__reactInternalMemoizedMergedChildContext=t,Et(Vn),Et(vn),Mt(vn,t)):Et(Vn),Mt(Vn,n)}var $i=null,su=!1,gd=!1;function u_(t){$i===null?$i=[t]:$i.push(t)}function WS(t){su=!0,u_(t)}function kr(){if(!gd&&$i!==null){gd=!0;var t=0,e=pt;try{var n=$i;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}$i=null,su=!1}catch(r){throw $i!==null&&($i=$i.slice(t+1)),Uv(Tf,kr),r}finally{pt=e,gd=!1}}return null}var co=[],uo=0,Vc=null,Hc=0,ii=[],ri=0,_s=null,Zi=1,Ki="";function us(t,e){co[uo++]=Hc,co[uo++]=Vc,Vc=t,Hc=e}function h_(t,e,n){ii[ri++]=Zi,ii[ri++]=Ki,ii[ri++]=_s,_s=t;var i=Zi;t=Ki;var r=32-xi(i)-1;i&=~(1<<r),n+=1;var s=32-xi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Zi=1<<32-xi(e)+r|n<<r|i,Ki=s+t}else Zi=1<<s|n<<r|i,Ki=t}function Df(t){t.return!==null&&(us(t,1),h_(t,1,0))}function Uf(t){for(;t===Vc;)Vc=co[--uo],co[uo]=null,Hc=co[--uo],co[uo]=null;for(;t===_s;)_s=ii[--ri],ii[ri]=null,Ki=ii[--ri],ii[ri]=null,Zi=ii[--ri],ii[ri]=null}var $n=null,qn=null,Rt=!1,yi=null;function d_(t,e){var n=si(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function H0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$n=t,qn=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$n=t,qn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_s!==null?{id:Zi,overflow:Ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=si(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$n=t,qn=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(Rt){var e=qn;if(e){var n=e;if(!H0(t,e)){if(jd(t))throw Error(te(418));e=Rr(n.nextSibling);var i=$n;e&&H0(t,e)?d_(i,n):(t.flags=t.flags&-4097|2,Rt=!1,$n=t)}}else{if(jd(t))throw Error(te(418));t.flags=t.flags&-4097|2,Rt=!1,$n=t}}}function G0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function mc(t){if(t!==$n)return!1;if(!Rt)return G0(t),Rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=qn)){if(jd(t))throw f_(),Error(te(418));for(;e;)d_(t,e),e=Rr(e.nextSibling)}if(G0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qn=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qn=null}}else qn=$n?Rr(t.stateNode.nextSibling):null;return!0}function f_(){for(var t=qn;t;)t=Rr(t.nextSibling)}function wo(){qn=$n=null,Rt=!1}function Ff(t){yi===null?yi=[t]:yi.push(t)}var XS=nr.ReactCurrentBatchConfig;function ba(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function gc(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function W0(t){var e=t._init;return e(t._payload)}function p_(t){function e(h,_){if(t){var y=h.deletions;y===null?(h.deletions=[_],h.flags|=16):y.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Nr(h,_),h.index=0,h.sibling=null,h}function s(h,_,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<_?(h.flags|=2,_):y):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,y,M){return _===null||_.tag!==6?(_=wd(y,h.mode,M),_.return=h,_):(_=r(_,y),_.return=h,_)}function l(h,_,y,M){var C=y.type;return C===io?u(h,_,y.props.children,M,y.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xr&&W0(C)===_.type)?(M=r(_,y.props),M.ref=ba(h,_,y),M.return=h,M):(M=Rc(y.type,y.key,y.props,null,h.mode,M),M.ref=ba(h,_,y),M.return=h,M)}function c(h,_,y,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Ed(y,h.mode,M),_.return=h,_):(_=r(_,y.children||[]),_.return=h,_)}function u(h,_,y,M,C){return _===null||_.tag!==7?(_=gs(y,h.mode,M,C),_.return=h,_):(_=r(_,y),_.return=h,_)}function f(h,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=wd(""+_,h.mode,y),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tc:return y=Rc(_.type,_.key,_.props,null,h.mode,y),y.ref=ba(h,null,_),y.return=h,y;case no:return _=Ed(_,h.mode,y),_.return=h,_;case xr:var M=_._init;return f(h,M(_._payload),y)}if(La(_)||wa(_))return _=gs(_,h.mode,y,null),_.return=h,_;gc(h,_)}return null}function d(h,_,y,M){var C=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(h,_,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tc:return y.key===C?l(h,_,y,M):null;case no:return y.key===C?c(h,_,y,M):null;case xr:return C=y._init,d(h,_,C(y._payload),M)}if(La(y)||wa(y))return C!==null?null:u(h,_,y,M,null);gc(h,y)}return null}function m(h,_,y,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(y)||null,a(_,h,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case tc:return h=h.get(M.key===null?y:M.key)||null,l(_,h,M,C);case no:return h=h.get(M.key===null?y:M.key)||null,c(_,h,M,C);case xr:var A=M._init;return m(h,_,y,A(M._payload),C)}if(La(M)||wa(M))return h=h.get(y)||null,u(_,h,M,C,null);gc(_,M)}return null}function v(h,_,y,M){for(var C=null,A=null,T=_,R=_=0,G=null;T!==null&&R<y.length;R++){T.index>R?(G=T,T=null):G=T.sibling;var g=d(h,T,y[R],M);if(g===null){T===null&&(T=G);break}t&&T&&g.alternate===null&&e(h,T),_=s(g,_,R),A===null?C=g:A.sibling=g,A=g,T=G}if(R===y.length)return n(h,T),Rt&&us(h,R),C;if(T===null){for(;R<y.length;R++)T=f(h,y[R],M),T!==null&&(_=s(T,_,R),A===null?C=T:A.sibling=T,A=T);return Rt&&us(h,R),C}for(T=i(h,T);R<y.length;R++)G=m(T,h,R,y[R],M),G!==null&&(t&&G.alternate!==null&&T.delete(G.key===null?R:G.key),_=s(G,_,R),A===null?C=G:A.sibling=G,A=G);return t&&T.forEach(function(w){return e(h,w)}),Rt&&us(h,R),C}function x(h,_,y,M){var C=wa(y);if(typeof C!="function")throw Error(te(150));if(y=C.call(y),y==null)throw Error(te(151));for(var A=C=null,T=_,R=_=0,G=null,g=y.next();T!==null&&!g.done;R++,g=y.next()){T.index>R?(G=T,T=null):G=T.sibling;var w=d(h,T,g.value,M);if(w===null){T===null&&(T=G);break}t&&T&&w.alternate===null&&e(h,T),_=s(w,_,R),A===null?C=w:A.sibling=w,A=w,T=G}if(g.done)return n(h,T),Rt&&us(h,R),C;if(T===null){for(;!g.done;R++,g=y.next())g=f(h,g.value,M),g!==null&&(_=s(g,_,R),A===null?C=g:A.sibling=g,A=g);return Rt&&us(h,R),C}for(T=i(h,T);!g.done;R++,g=y.next())g=m(T,h,R,g.value,M),g!==null&&(t&&g.alternate!==null&&T.delete(g.key===null?R:g.key),_=s(g,_,R),A===null?C=g:A.sibling=g,A=g);return t&&T.forEach(function(L){return e(h,L)}),Rt&&us(h,R),C}function p(h,_,y,M){if(typeof y=="object"&&y!==null&&y.type===io&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case tc:e:{for(var C=y.key,A=_;A!==null;){if(A.key===C){if(C=y.type,C===io){if(A.tag===7){n(h,A.sibling),_=r(A,y.props.children),_.return=h,h=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xr&&W0(C)===A.type){n(h,A.sibling),_=r(A,y.props),_.ref=ba(h,A,y),_.return=h,h=_;break e}n(h,A);break}else e(h,A);A=A.sibling}y.type===io?(_=gs(y.props.children,h.mode,M,y.key),_.return=h,h=_):(M=Rc(y.type,y.key,y.props,null,h.mode,M),M.ref=ba(h,_,y),M.return=h,h=M)}return o(h);case no:e:{for(A=y.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(h,_.sibling),_=r(_,y.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Ed(y,h.mode,M),_.return=h,h=_}return o(h);case xr:return A=y._init,p(h,_,A(y._payload),M)}if(La(y))return v(h,_,y,M);if(wa(y))return x(h,_,y,M);gc(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,y),_.return=h,h=_):(n(h,_),_=wd(y,h.mode,M),_.return=h,h=_),o(h)):n(h,_)}return p}var Eo=p_(!0),m_=p_(!1),Gc=Or(null),Wc=null,ho=null,Of=null;function kf(){Of=ho=Wc=null}function zf(t){var e=Gc.current;Et(Gc),t._currentValue=e}function ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function yo(t,e){Wc=t,Of=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Bn=!0),t.firstContext=null)}function ai(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(Wc===null)throw Error(te(308));ho=t,Wc.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var fs=null;function Bf(t){fs===null?fs=[t]:fs.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bf(e)):(n.next=r.next,r.next=n),e.interleaved=n,er(t,i)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(it&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(t,n)}return r=i.interleaved,r===null?(e.next=e,Bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(t,n)}function wc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Af(t,n)}}function X0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xc(t,e,n,i){var r=t.updateQueue;Mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(m,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(m,f,d):v,d==null)break e;f=Dt({},f,d);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=f}}function Y0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var ul={},Bi=Or(ul),tl=Or(ul),nl=Or(ul);function ps(t){if(t===ul)throw Error(te(174));return t}function Hf(t,e){switch(Mt(nl,e),Mt(tl,t),Mt(Bi,ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dd(e,t)}Et(Bi),Mt(Bi,e)}function To(){Et(Bi),Et(tl),Et(nl)}function __(t){ps(nl.current);var e=ps(Bi.current),n=Dd(e,t.type);e!==n&&(Mt(tl,t),Mt(Bi,n))}function Gf(t){tl.current===t&&(Et(Bi),Et(tl))}var Lt=Or(0);function Yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vd=[];function Wf(){for(var t=0;t<vd.length;t++)vd[t]._workInProgressVersionPrimary=null;vd.length=0}var Ec=nr.ReactCurrentDispatcher,_d=nr.ReactCurrentBatchConfig,ys=0,Nt=null,Yt=null,jt=null,qc=!1,Ba=!1,il=0,YS=0;function pn(){throw Error(te(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Si(t[n],e[n]))return!1;return!0}function Yf(t,e,n,i,r,s){if(ys=s,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ec.current=t===null||t.memoizedState===null?KS:JS,t=n(i,r),Ba){s=0;do{if(Ba=!1,il=0,25<=s)throw Error(te(301));s+=1,jt=Yt=null,e.updateQueue=null,Ec.current=jS,t=n(i,r)}while(Ba)}if(Ec.current=$c,e=Yt!==null&&Yt.next!==null,ys=0,jt=Yt=Nt=null,qc=!1,e)throw Error(te(300));return t}function qf(){var t=il!==0;return il=0,t}function Oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Nt.memoizedState=jt=t:jt=jt.next=t,jt}function li(){if(Yt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var e=jt===null?Nt.memoizedState:jt.next;if(e!==null)jt=e,Yt=t;else{if(t===null)throw Error(te(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},jt===null?Nt.memoizedState=jt=t:jt=jt.next=t}return jt}function rl(t,e){return typeof e=="function"?e(t):e}function yd(t){var e=li(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ys&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Nt.lanes|=u,xs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Si(i,e.memoizedState)||(Bn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Nt.lanes|=s,xs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xd(t){var e=li(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Si(s,e.memoizedState)||(Bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function y_(){}function x_(t,e){var n=Nt,i=li(),r=e(),s=!Si(i.memoizedState,r);if(s&&(i.memoizedState=r,Bn=!0),i=i.queue,$f(w_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,sl(9,S_.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(te(349));(ys&30)!==0||M_(n,e,r)}return r}function M_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function S_(t,e,n,i){e.value=n,e.getSnapshot=i,E_(e)&&T_(t)}function w_(t,e,n){return n(function(){E_(e)&&T_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Si(t,n)}catch(i){return!0}}function T_(t){var e=er(t,1);e!==null&&Mi(e,t,1,-1)}function q0(t){var e=Oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:t},e.queue=t,t=t.dispatch=ZS.bind(null,Nt,t),[e.memoizedState,t]}function sl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A_(){return li().memoizedState}function Tc(t,e,n,i){var r=Oi();Nt.flags|=t,r.memoizedState=sl(1|e,n,void 0,i===void 0?null:i)}function ou(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(Yt!==null){var o=Yt.memoizedState;if(s=o.destroy,i!==null&&Xf(i,o.deps)){r.memoizedState=sl(e,n,s,i);return}}Nt.flags|=t,r.memoizedState=sl(1|e,n,s,i)}function $0(t,e){return Tc(8390656,8,t,e)}function $f(t,e){return ou(2048,8,t,e)}function b_(t,e){return ou(4,2,t,e)}function C_(t,e){return ou(4,4,t,e)}function R_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,R_.bind(null,e,t),n)}function Zf(){}function I_(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function L_(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return(ys&21)===0?(t.baseState&&(t.baseState=!1,Bn=!0),t.memoizedState=n):(Si(n,e)||(n=kv(),Nt.lanes|=n,xs|=n,t.baseState=!0),e)}function qS(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=_d.transition;_d.transition={};try{t(!1),e()}finally{pt=n,_d.transition=i}}function D_(){return li().memoizedState}function $S(t,e,n){var i=Lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U_(t))F_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=Ln();Mi(n,t,i,r),O_(n,e,i)}}function ZS(t,e,n){var i=Lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U_(t))F_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Si(a,o)){var l=e.interleaved;l===null?(r.next=r,Bf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch(c){}finally{}n=g_(t,e,r,i),n!==null&&(r=Ln(),Mi(n,t,i,r),O_(n,e,i))}}function U_(t){var e=t.alternate;return t===Nt||e!==null&&e===Nt}function F_(t,e){Ba=qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Af(t,n)}}var $c={readContext:ai,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},KS={readContext:ai,useCallback:function(t,e){return Oi().memoizedState=[t,e===void 0?null:e],t},useContext:ai,useEffect:$0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4194308,4,R_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tc(4,2,t,e)},useMemo:function(t,e){var n=Oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=$S.bind(null,Nt,t),[i.memoizedState,t]},useRef:function(t){var e=Oi();return t={current:t},e.memoizedState=t},useState:q0,useDebugValue:Zf,useDeferredValue:function(t){return Oi().memoizedState=t},useTransition:function(){var t=q0(!1),e=t[0];return t=qS.bind(null,t[1]),Oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Nt,r=Oi();if(Rt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Qt===null)throw Error(te(349));(ys&30)!==0||M_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$0(w_.bind(null,i,s,t),[t]),i.flags|=2048,sl(9,S_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Oi(),e=Qt.identifierPrefix;if(Rt){var n=Ki,i=Zi;n=(i&~(1<<32-xi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JS={readContext:ai,useCallback:I_,useContext:ai,useEffect:$f,useImperativeHandle:P_,useInsertionEffect:b_,useLayoutEffect:C_,useMemo:L_,useReducer:yd,useRef:A_,useState:function(){return yd(rl)},useDebugValue:Zf,useDeferredValue:function(t){var e=li();return N_(e,Yt.memoizedState,t)},useTransition:function(){var t=yd(rl)[0],e=li().memoizedState;return[t,e]},useMutableSource:y_,useSyncExternalStore:x_,useId:D_,unstable_isNewReconciler:!1},jS={readContext:ai,useCallback:I_,useContext:ai,useEffect:$f,useImperativeHandle:P_,useInsertionEffect:b_,useLayoutEffect:C_,useMemo:L_,useReducer:xd,useRef:A_,useState:function(){return xd(rl)},useDebugValue:Zf,useDeferredValue:function(t){var e=li();return Yt===null?e.memoizedState=t:N_(e,Yt.memoizedState,t)},useTransition:function(){var t=xd(rl)[0],e=li().memoizedState;return[t,e]},useMutableSource:y_,useSyncExternalStore:x_,useId:D_,unstable_isNewReconciler:!1};function vi(t,e){if(t&&t.defaultProps){e=Dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function tf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Ln(),r=Lr(t),s=Ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(Mi(e,t,r,i),wc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Ln(),r=Lr(t),s=Ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(Mi(e,t,r,i),wc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ln(),i=Lr(t),r=Ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pr(t,r,i),e!==null&&(Mi(e,t,i,n),wc(e,t,i))}};function Z0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,i)||!Ja(r,s):!0}function k_(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=Hn(e)?vs:vn.current,i=e.contextTypes,s=(i=i!=null)?So(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function K0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=Hn(e)?vs:vn.current,r.context=So(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&au.enqueueReplaceState(r,r.state,null),Xc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",i=e;do n+=CM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Md(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QS=typeof WeakMap=="function"?WeakMap:Map;function z_(t,e,n){n=Ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kc||(Kc=!0,pf=i),rf(t,e)},n}function B_(t,e,n){n=Ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rf(t,e),typeof i!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function J0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new QS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=f1.bind(null,t,e,n),e.then(t,t))}function j0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Q0(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ji(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var e1=nr.ReactCurrentOwner,Bn=!1;function In(t,e,n,i){e.child=t===null?m_(e,null,n,i):Eo(e,t.child,n,i)}function ev(t,e,n,i,r){n=n.render;var s=e.ref;return yo(e,r),i=Yf(t,e,n,i,s,r),n=qf(),t!==null&&!Bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(Rt&&n&&Df(e),e.flags|=1,In(t,e,i,r),e.child)}function tv(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ip(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V_(t,e,s,i,r)):(t=Rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(o,i)&&t.ref===e.ref)return tr(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ja(s,i)&&t.ref===e.ref)if(Bn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(Bn=!0);else return e.lanes=t.lanes,tr(t,e,r)}return sf(t,e,n,i,r)}function H_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(po,Yn),Yn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(po,Yn),Yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Mt(po,Yn),Yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Mt(po,Yn),Yn|=i;return In(t,e,r,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sf(t,e,n,i,r){var s=Hn(n)?vs:vn.current;return s=So(e,s),yo(e,r),n=Yf(t,e,n,i,s,r),i=qf(),t!==null&&!Bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(Rt&&i&&Df(e),e.flags|=1,In(t,e,n,r),e.child)}function nv(t,e,n,i,r){if(Hn(n)){var s=!0;Bc(e)}else s=!1;if(yo(e,r),e.stateNode===null)Ac(t,e),k_(e,n,i),nf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ai(c):(c=Hn(n)?vs:vn.current,c=So(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&K0(e,o,i,c),Mr=!1;var d=e.memoizedState;o.state=d,Xc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Vn.current||Mr?(typeof u=="function"&&(tf(e,n,u,i),l=e.memoizedState),(a=Mr||Z0(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,v_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vi(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=Hn(n)?vs:vn.current,l=So(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&K0(e,o,i,l),Mr=!1,d=e.memoizedState,o.state=d,Xc(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||Vn.current||Mr?(typeof m=="function"&&(tf(e,n,m,i),v=e.memoizedState),(c=Mr||Z0(e,n,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return of(t,e,n,i,s,r)}function of(t,e,n,i,r,s){G_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&V0(e,n,!1),tr(t,e,s);i=e.stateNode,e1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Eo(e,t.child,null,s),e.child=Eo(e,null,a,s)):In(t,e,a,s),e.memoizedState=i.state,r&&V0(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?B0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&B0(t,e.context,!1),Hf(t,e.containerInfo)}function iv(t,e,n,i,r){return wo(),Ff(r),e.flags|=256,In(t,e,n,i),e.child}var af={dehydrated:null,treeContext:null,retryLane:0};function lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function X_(t,e,n){var i=e.pendingProps,r=Lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Mt(Lt,r&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uu(o,i,0,null),t=gs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lf(n),e.memoizedState=af,t):Kf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return t1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=gs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=af,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Kf(t,e){return e=uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vc(t,e,n,i){return i!==null&&Ff(i),Eo(e,t.child,null,n),t=Kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function t1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Md(Error(te(422))),vc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uu({mode:"visible",children:i.children},r,0,null),s=gs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Eo(e,t.child,null,o),e.child.memoizedState=lf(o),e.memoizedState=af,s);if((e.mode&1)===0)return vc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Md(s,i,void 0),vc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Bn||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(t,r),Mi(i,t,r,-1))}return np(),i=Md(Error(te(421))),vc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=p1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,qn=Rr(r.nextSibling),$n=e,Rt=!0,yi=null,t!==null&&(ii[ri++]=Zi,ii[ri++]=Ki,ii[ri++]=_s,Zi=t.id,Ki=t.overflow,_s=e),e=Kf(e,i.children),e.flags|=4096,e)}function rv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ef(t.return,e,n)}function Sd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Y_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(In(t,e,i.children,n),i=Lt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rv(t,n,e);else if(t.tag===19)rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Mt(Lt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Sd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Sd(e,!0,n,null,s);break;case"together":Sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ac(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function n1(t,e,n){switch(e.tag){case 3:W_(e),wo();break;case 5:__(e);break;case 1:Hn(e.type)&&Bc(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(Gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Lt,Lt.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?X_(t,e,n):(Mt(Lt,Lt.current&1),t=tr(t,e,n),t!==null?t.sibling:null);Mt(Lt,Lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Y_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Lt,Lt.current),i)break;return null;case 22:case 23:return e.lanes=0,H_(t,e,n)}return tr(t,e,n)}var q_,cf,$_,Z_;q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cf=function(){};$_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ps(Bi.current);var s=null;switch(n){case"input":r=Pd(t,r),i=Pd(t,i),s=[];break;case"select":r=Dt({},r,{value:void 0}),i=Dt({},i,{value:void 0}),s=[];break;case"textarea":r=Nd(t,r),i=Nd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kc)}Ud(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Z_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ca(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function mn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function i1(t,e,n){var i=e.pendingProps;switch(Uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(e),null;case 1:return Hn(e.type)&&zc(),mn(e),null;case 3:return i=e.stateNode,To(),Et(Vn),Et(vn),Wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(mc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,yi!==null&&(vf(yi),yi=null))),cf(t,e),mn(e),null;case 5:Gf(e);var r=ps(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)$_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return mn(e),null}if(t=ps(Bi.current),mc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ki]=e,i[el]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)wt(Da[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":d0(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":p0(i,s),wt("invalid",i)}Ud(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&pc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pc(i.textContent,a,t),r=["children",""+a]):Wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":nc(i),f0(i,s,!0);break;case"textarea":nc(i),m0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ki]=e,t[el]=i,q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fd(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)wt(Da[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":d0(t,i),r=Pd(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Dt({},i,{value:void 0}),wt("invalid",t);break;case"textarea":p0(t,i),r=Nd(t,i),wt("invalid",t);break;default:r=i}Ud(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Av(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ev(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xa(t,l):typeof l=="number"&&Xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&xf(t,s,l,o))}switch(n){case"input":nc(t),f0(t,i,!1);break;case"textarea":nc(t),m0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?mo(t,!!i.multiple,s,!1):i.defaultValue!=null&&mo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mn(e),null;case 6:if(t&&e.stateNode!=null)Z_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=ps(nl.current),ps(Bi.current),mc(e)){if(i=e.stateNode,n=e.memoizedProps,i[ki]=e,(s=i.nodeValue!==n)&&(t=$n,t!==null))switch(t.tag){case 3:pc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ki]=e,e.stateNode=i}return mn(e),null;case 13:if(Et(Lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&qn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)f_(),wo(),e.flags|=98560,s=!1;else if(s=mc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ki]=e}else wo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mn(e),s=!1}else yi!==null&&(vf(yi),yi=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Lt.current&1)!==0?qt===0&&(qt=3):np())),e.updateQueue!==null&&(e.flags|=4),mn(e),null);case 4:return To(),cf(t,e),t===null&&ja(e.stateNode.containerInfo),mn(e),null;case 10:return zf(e.type._context),mn(e),null;case 17:return Hn(e.type)&&zc(),mn(e),null;case 19:if(Et(Lt),s=e.memoizedState,s===null)return mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ca(s,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Yc(t),o!==null){for(e.flags|=128,Ca(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Lt,Lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&zt()>bo&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Rt)return mn(e),null}else 2*zt()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,n=Lt.current,Mt(Lt,i?n&1|2:n&1),e):(mn(e),null);case 22:case 23:return tp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Yn&1073741824)!==0&&(mn(e),e.subtreeFlags&6&&(e.flags|=8192)):mn(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function r1(t,e){switch(Uf(e),e.tag){case 1:return Hn(e.type)&&zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return To(),Et(Vn),Et(vn),Wf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(Et(Lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(Lt),null;case 4:return To(),null;case 10:return zf(e.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var _c=!1,gn=!1,s1=typeof WeakSet=="function"?WeakSet:Set,Me=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ot(t,e,i)}else n.current=null}function uf(t,e,n){try{n()}catch(i){Ot(t,e,i)}}var sv=!1;function o1(t,e){if(Yd=Uc,t=e_(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch(M){n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:t,selectionRange:n},Uc=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:vi(e.type,x),p);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){Ot(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return v=sv,sv=!1,v}function Va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&uf(e,n,s)}r=r.next}while(r!==i)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ki],delete e[el],delete e[Kd],delete e[HS],delete e[GS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J_(t){return t.tag===5||t.tag===3||t.tag===4}function ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kc));else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}function ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ff(t,e,n),t=t.sibling;t!==null;)ff(t,e,n),t=t.sibling}var sn=null,_i=!1;function yr(t,e,n){for(n=n.child;n!==null;)j_(t,e,n),n=n.sibling}function j_(t,e,n){if(zi&&typeof zi.onCommitFiberUnmount=="function")try{zi.onCommitFiberUnmount(eu,n)}catch(a){}switch(n.tag){case 5:gn||fo(n,e);case 6:var i=sn,r=_i;sn=null,yr(t,e,n),sn=i,_i=r,sn!==null&&(_i?(t=sn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):sn.removeChild(n.stateNode));break;case 18:sn!==null&&(_i?(t=sn,n=n.stateNode,t.nodeType===8?md(t.parentNode,n):t.nodeType===1&&md(t,n),Za(t)):md(sn,n.stateNode));break;case 4:i=sn,r=_i,sn=n.stateNode.containerInfo,_i=!0,yr(t,e,n),sn=i,_i=r;break;case 0:case 11:case 14:case 15:if(!gn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&uf(n,e,o),r=r.next}while(r!==i)}yr(t,e,n);break;case 1:if(!gn&&(fo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ot(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(gn=(i=gn)||n.memoizedState!==null,yr(t,e,n),gn=i):yr(t,e,n);break;default:yr(t,e,n)}}function av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new s1),e.forEach(function(i){var r=m1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function gi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:sn=a.stateNode,_i=!1;break e;case 3:sn=a.stateNode.containerInfo,_i=!0;break e;case 4:sn=a.stateNode.containerInfo,_i=!0;break e}a=a.return}if(sn===null)throw Error(te(160));j_(s,o,r),sn=null,_i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ot(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gi(e,t),Fi(t),i&4){try{Va(3,t,t.return),lu(3,t)}catch(x){Ot(t,t.return,x)}try{Va(5,t,t.return)}catch(x){Ot(t,t.return,x)}}break;case 1:gi(e,t),Fi(t),i&512&&n!==null&&fo(n,n.return);break;case 5:if(gi(e,t),Fi(t),i&512&&n!==null&&fo(n,n.return),t.flags&32){var r=t.stateNode;try{Xa(r,"")}catch(x){Ot(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mv(r,s),Fd(a,o);var c=Fd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Av(r,f):u==="dangerouslySetInnerHTML"?Ev(r,f):u==="children"?Xa(r,f):xf(r,u,f,c)}switch(a){case"input":Id(r,s);break;case"textarea":Sv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?mo(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?mo(r,!!s.multiple,s.defaultValue,!0):mo(r,!!s.multiple,s.multiple?[]:"",!1))}r[el]=s}catch(x){Ot(t,t.return,x)}}break;case 6:if(gi(e,t),Fi(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Ot(t,t.return,x)}}break;case 3:if(gi(e,t),Fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(x){Ot(t,t.return,x)}break;case 4:gi(e,t),Fi(t);break;case 13:gi(e,t),Fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qf=zt())),i&4&&av(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(gn=(c=gn)||u,gi(e,t),gn=c):gi(e,t),Fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(Me=t,u=t.child;u!==null;){for(f=Me=u;Me!==null;){switch(d=Me,m=d.child,d.tag){case 0:case 11:case 14:case 15:Va(4,d,d.return);break;case 1:fo(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Ot(i,n,x)}}break;case 5:fo(d,d.return);break;case 22:if(d.memoizedState!==null){cv(f);continue}}m!==null?(m.return=d,Me=m):cv(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tv("display",o))}catch(x){Ot(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Ot(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gi(e,t),Fi(t),i&4&&av(t);break;case 21:break;default:gi(e,t),Fi(t)}}function Fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(J_(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var s=ov(t);ff(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ov(t);df(t,a,o);break;default:throw Error(te(161))}}catch(l){Ot(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function a1(t,e,n){Me=t,ey(t,e,n)}function ey(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_c;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||gn;a=_c;var c=gn;if(_c=o,(gn=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?uv(r):l!==null?(l.return=o,Me=l):uv(r);for(;s!==null;)Me=s,ey(s,e,n),s=s.sibling;Me=r,_c=a,gn=c}lv(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,Me=s):lv(t,e,n)}}function lv(t){for(;Me!==null;){var e=Me;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:gn||lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!gn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:vi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Y0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Y0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}gn||e.flags&512&&hf(e)}catch(d){Ot(e,e.return,d)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function cv(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function uv(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){Ot(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ot(e,r,l)}}var s=e.return;try{hf(e)}catch(l){Ot(e,s,l)}break;case 5:var o=e.return;try{hf(e)}catch(l){Ot(e,o,l)}}}catch(l){Ot(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var l1=Math.ceil,Zc=nr.ReactCurrentDispatcher,Jf=nr.ReactCurrentOwner,oi=nr.ReactCurrentBatchConfig,it=0,Qt=null,Gt=null,on=0,Yn=0,po=Or(0),qt=0,ol=null,xs=0,cu=0,jf=0,Ha=null,zn=null,Qf=0,bo=1/0,qi=null,Kc=!1,pf=null,Ir=null,yc=!1,Tr=null,Jc=0,Ga=0,mf=null,bc=-1,Cc=0;function Ln(){return(it&6)!==0?zt():bc!==-1?bc:bc=zt()}function Lr(t){return(t.mode&1)===0?1:(it&2)!==0&&on!==0?on&-on:XS.transition!==null?(Cc===0&&(Cc=kv()),Cc):(t=pt,t!==0||(t=window.event,t=t===void 0?16:Xv(t.type)),t)}function Mi(t,e,n,i){if(50<Ga)throw Ga=0,mf=null,Error(te(185));al(t,n,i),((it&2)===0||t!==Qt)&&(t===Qt&&((it&2)===0&&(cu|=n),qt===4&&wr(t,on)),Gn(t,i),n===1&&it===0&&(e.mode&1)===0&&(bo=zt()+500,su&&kr()))}function Gn(t,e){var n=t.callbackNode;qM(t,e);var i=Dc(t,t===Qt?on:0);if(i===0)n!==null&&_0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_0(n),e===1)t.tag===0?WS(hv.bind(null,t)):u_(hv.bind(null,t)),BS(function(){(it&6)===0&&kr()}),n=null;else{switch(zv(i)){case 1:n=Tf;break;case 4:n=Fv;break;case 16:n=Nc;break;case 536870912:n=Ov;break;default:n=Nc}n=ly(n,ty.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ty(t,e){if(bc=-1,Cc=0,(it&6)!==0)throw Error(te(327));var n=t.callbackNode;if(xo()&&t.callbackNode!==n)return null;var i=Dc(t,t===Qt?on:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=jc(t,i);else{e=i;var r=it;it|=2;var s=iy();(Qt!==t||on!==e)&&(qi=null,bo=zt()+500,ms(t,e));do try{h1();break}catch(a){ny(t,a)}while(!0);kf(),Zc.current=s,it=r,Gt!==null?e=0:(Qt=null,on=0,e=qt)}if(e!==0){if(e===2&&(r=Vd(t),r!==0&&(i=r,e=gf(t,r))),e===1)throw n=ol,ms(t,0),wr(t,i),Gn(t,zt()),n;if(e===6)wr(t,i);else{if(r=t.current.alternate,(i&30)===0&&!c1(r)&&(e=jc(t,i),e===2&&(s=Vd(t),s!==0&&(i=s,e=gf(t,s))),e===1))throw n=ol,ms(t,0),wr(t,i),Gn(t,zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:hs(t,zn,qi);break;case 3:if(wr(t,i),(i&130023424)===i&&(e=Qf+500-zt(),10<e)){if(Dc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zd(hs.bind(null,t,zn,qi),e);break}hs(t,zn,qi);break;case 4:if(wr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-xi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*l1(i/1960))-i,10<i){t.timeoutHandle=Zd(hs.bind(null,t,zn,qi),i);break}hs(t,zn,qi);break;case 5:hs(t,zn,qi);break;default:throw Error(te(329))}}}return Gn(t,zt()),t.callbackNode===n?ty.bind(null,t):null}function gf(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(ms(t,e).flags|=256),t=jc(t,e),t!==2&&(e=zn,zn=n,e!==null&&vf(e)),t}function vf(t){zn===null?zn=t:zn.push.apply(zn,t)}function c1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Si(s(),r))return!1}catch(o){return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~jf,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xi(e),i=1<<n;t[n]=-1,e&=~i}}function hv(t){if((it&6)!==0)throw Error(te(327));xo();var e=Dc(t,0);if((e&1)===0)return Gn(t,zt()),null;var n=jc(t,e);if(t.tag!==0&&n===2){var i=Vd(t);i!==0&&(e=i,n=gf(t,i))}if(n===1)throw n=ol,ms(t,0),wr(t,e),Gn(t,zt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hs(t,zn,qi),Gn(t,zt()),null}function ep(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(bo=zt()+500,su&&kr())}}function Ms(t){Tr!==null&&Tr.tag===0&&(it&6)===0&&xo();var e=it;it|=1;var n=oi.transition,i=pt;try{if(oi.transition=null,pt=1,t)return t()}finally{pt=i,oi.transition=n,it=e,(it&6)===0&&kr()}}function tp(){Yn=po.current,Et(po)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zS(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(Uf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zc();break;case 3:To(),Et(Vn),Et(vn),Wf();break;case 5:Gf(i);break;case 4:To();break;case 13:Et(Lt);break;case 19:Et(Lt);break;case 10:zf(i.type._context);break;case 22:case 23:tp()}n=n.return}if(Qt=t,Gt=t=Nr(t.current,null),on=Yn=e,qt=0,ol=null,jf=cu=xs=0,zn=Ha=null,fs!==null){for(e=0;e<fs.length;e++)if(n=fs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}fs=null}return t}function ny(t,e){do{var n=Gt;try{if(kf(),Ec.current=$c,qc){for(var i=Nt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qc=!1}if(ys=0,jt=Yt=Nt=null,Ba=!1,il=0,Jf.current=null,n===null||n.return===null){qt=1,ol=e,Gt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=on,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=j0(o);if(m!==null){m.flags&=-257,Q0(m,o,a,s,e),m.mode&1&&J0(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if((e&1)===0){J0(s,c,e),np();break e}l=Error(te(426))}}else if(Rt&&a.mode&1){var p=j0(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),Q0(p,o,a,s,e),Ff(Ao(l,a));break e}}s=l=Ao(l,a),qt!==4&&(qt=2),Ha===null?Ha=[s]:Ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=z_(s,l,e);X0(s,h);break e;case 1:a=l;var _=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ir===null||!Ir.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=B_(s,a,e);X0(s,M);break e}}s=s.return}while(s!==null)}sy(n)}catch(C){e=C,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function iy(){var t=Zc.current;return Zc.current=$c,t===null?$c:t}function np(){(qt===0||qt===3||qt===2)&&(qt=4),Qt===null||(xs&268435455)===0&&(cu&268435455)===0||wr(Qt,on)}function jc(t,e){var n=it;it|=2;var i=iy();(Qt!==t||on!==e)&&(qi=null,ms(t,e));do try{u1();break}catch(r){ny(t,r)}while(!0);if(kf(),it=n,Zc.current=i,Gt!==null)throw Error(te(261));return Qt=null,on=0,qt}function u1(){for(;Gt!==null;)ry(Gt)}function h1(){for(;Gt!==null&&!kM();)ry(Gt)}function ry(t){var e=ay(t.alternate,t,Yn);t.memoizedProps=t.pendingProps,e===null?sy(t):Gt=e,Jf.current=null}function sy(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=i1(n,e,Yn),n!==null){Gt=n;return}}else{if(n=r1(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);qt===0&&(qt=5)}function hs(t,e,n){var i=pt,r=oi.transition;try{oi.transition=null,pt=1,d1(t,e,n,i)}finally{oi.transition=r,pt=i}return null}function d1(t,e,n,i){do xo();while(Tr!==null);if((it&6)!==0)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($M(t,s),t===Qt&&(Gt=Qt=null,on=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yc||(yc=!0,ly(Nc,function(){return xo(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=oi.transition,oi.transition=null;var o=pt;pt=1;var a=it;it|=4,Jf.current=null,o1(t,n),Q_(n,t),DS(qd),Uc=!!Yd,qd=Yd=null,t.current=n,a1(n,t,r),zM(),it=a,pt=o,oi.transition=s}else t.current=n;if(yc&&(yc=!1,Tr=t,Jc=r),s=t.pendingLanes,s===0&&(Ir=null),HM(n.stateNode,i),Gn(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kc)throw Kc=!1,t=pf,pf=null,t;return(Jc&1)!==0&&t.tag!==0&&xo(),s=t.pendingLanes,(s&1)!==0?t===mf?Ga++:(Ga=0,mf=t):Ga=0,kr(),null}function xo(){if(Tr!==null){var t=zv(Jc),e=oi.transition,n=pt;try{if(oi.transition=null,pt=16>t?16:t,Tr===null)var i=!1;else{if(t=Tr,Tr=null,Jc=0,(it&6)!==0)throw Error(te(331));var r=it;for(it|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if((Me.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:Va(8,u,s)}var f=u.child;if(f!==null)f.return=u,Me=f;else for(;Me!==null;){u=Me;var d=u.sibling,m=u.return;if(K_(u),u===c){Me=null;break}if(d!==null){d.return=m,Me=d;break}Me=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Me=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Va(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Me=h;break e}Me=s.return}}var _=t.current;for(Me=_;Me!==null;){o=Me;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,Me=y;else e:for(o=_;Me!==null;){if(a=Me,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(C){Ot(a,a.return,C)}if(a===o){Me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Me=M;break e}Me=a.return}}if(it=r,kr(),zi&&typeof zi.onPostCommitFiberRoot=="function")try{zi.onPostCommitFiberRoot(eu,t)}catch(C){}i=!0}return i}finally{pt=n,oi.transition=e}}return!1}function dv(t,e,n){e=Ao(n,e),e=z_(t,e,1),t=Pr(t,e,1),e=Ln(),t!==null&&(al(t,1,e),Gn(t,e))}function Ot(t,e,n){if(t.tag===3)dv(t,t,n);else for(;e!==null;){if(e.tag===3){dv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ir===null||!Ir.has(i))){t=Ao(n,t),t=B_(e,t,1),e=Pr(e,t,1),t=Ln(),e!==null&&(al(e,1,t),Gn(e,t));break}}e=e.return}}function f1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Ln(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(on&n)===n&&(qt===4||qt===3&&(on&130023424)===on&&500>zt()-Qf?ms(t,0):jf|=n),Gn(t,e)}function oy(t,e){e===0&&((t.mode&1)===0?e=1:(e=sc,sc<<=1,(sc&130023424)===0&&(sc=4194304)));var n=Ln();t=er(t,e),t!==null&&(al(t,e,n),Gn(t,n))}function p1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),oy(t,n)}function m1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),oy(t,n)}var ay;ay=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vn.current)Bn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Bn=!1,n1(t,e,n);Bn=(t.flags&131072)!==0}else Bn=!1,Rt&&(e.flags&1048576)!==0&&h_(e,Hc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ac(t,e),t=e.pendingProps;var r=So(e,vn.current);yo(e,n),r=Yf(null,e,i,t,r,n);var s=qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Hn(i)?(s=!0,Bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=au,e.stateNode=r,r._reactInternals=e,nf(e,i,t,n),e=of(null,e,i,!0,s,n)):(e.tag=0,Rt&&s&&Df(e),In(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ac(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=v1(i),t=vi(i,t),r){case 0:e=sf(null,e,i,t,n);break e;case 1:e=nv(null,e,i,t,n);break e;case 11:e=ev(null,e,i,t,n);break e;case 14:e=tv(null,e,i,vi(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),nv(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(t,e),Xc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(te(423)),e),e=iv(t,e,i,n,r);break e}else if(i!==r){r=Ao(Error(te(424)),e),e=iv(t,e,i,n,r);break e}else for(qn=Rr(e.stateNode.containerInfo.firstChild),$n=e,Rt=!0,yi=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),i===r){e=tr(t,e,n);break e}In(t,e,i,n)}e=e.child}return e;case 5:return __(e),t===null&&Qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$d(i,r)?o=null:s!==null&&$d(i,s)&&(e.flags|=32),G_(t,e),In(t,e,o,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return X_(t,e,n);case 4:return Hf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Eo(e,null,i,n):In(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),ev(t,e,i,r,n);case 7:return In(t,e,e.pendingProps,n),e.child;case 8:return In(t,e,e.pendingProps.children,n),e.child;case 12:return In(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(Gc,i._currentValue),i._currentValue=o,s!==null)if(Si(s.value,o)){if(s.children===r.children&&!Vn.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}In(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,yo(e,n),r=ai(r),i=i(r),e.flags|=1,In(t,e,i,n),e.child;case 14:return i=e.type,r=vi(i,e.pendingProps),r=vi(i.type,r),tv(t,e,i,r,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Ac(t,e),e.tag=1,Hn(i)?(t=!0,Bc(e)):t=!1,yo(e,n),k_(e,i,r),nf(e,i,r,n),of(null,e,i,!0,t,n);case 19:return Y_(t,e,n);case 22:return H_(t,e,n)}throw Error(te(156,e.tag))};function ly(t,e){return Uv(t,e)}function g1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,e,n,i){return new g1(t,e,n,i)}function ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v1(t){if(typeof t=="function")return ip(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sf)return 11;if(t===wf)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=si(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ip(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case io:return gs(n.children,r,s,e);case Mf:o=8,r|=8;break;case Ad:return t=si(12,n,e,r|2),t.elementType=Ad,t.lanes=s,t;case bd:return t=si(13,n,e,r),t.elementType=bd,t.lanes=s,t;case Cd:return t=si(19,n,e,r),t.elementType=Cd,t.lanes=s,t;case _v:return uu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gv:o=10;break e;case vv:o=9;break e;case Sf:o=11;break e;case wf:o=14;break e;case xr:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=si(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gs(t,e,n,i){return t=si(7,t,i,e),t.lanes=n,t}function uu(t,e,n,i){return t=si(22,t,i,e),t.elementType=_v,t.lanes=n,t.stateNode={isHidden:!1},t}function wd(t,e,n){return t=si(6,t,null,e),t.lanes=n,t}function Ed(t,e,n){return e=si(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ad(0),this.expirationTimes=ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ad(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rp(t,e,n,i,r,s,o,a,l){return t=new _1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=si(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function y1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cy(t){if(!t)return Ur;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Hn(n))return c_(t,n,e)}return e}function uy(t,e,n,i,r,s,o,a,l){return t=rp(n,i,!0,t,r,s,o,a,l),t.context=cy(null),n=t.current,i=Ln(),r=Lr(n),s=Ji(i,r),s.callback=e!=null?e:null,Pr(n,s,r),t.current.lanes=r,al(t,r,i),Gn(t,i),t}function hu(t,e,n,i){var r=e.current,s=Ln(),o=Lr(r);return n=cy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pr(r,e,o),t!==null&&(Mi(t,r,o,s),wc(t,r,o)),o}function Qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sp(t,e){fv(t,e),(t=t.alternate)&&fv(t,e)}function x1(){return null}var hy=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}du.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));hu(t,e,null,null)};du.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ms(function(){hu(null,t,null,null)}),e[Qi]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&Wv(t)}};function ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pv(){}function M1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Qc(o);s.call(c)}}var o=uy(e,i,t,0,null,!1,!1,"",pv);return t._reactRootContainer=o,t[Qi]=o.current,ja(t.nodeType===8?t.parentNode:t),Ms(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Qc(l);a.call(c)}}var l=rp(t,0,!1,null,null,!1,!1,"",pv);return t._reactRootContainer=l,t[Qi]=l.current,ja(t.nodeType===8?t.parentNode:t),Ms(function(){hu(e,l,n,i)}),l}function pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Qc(o);a.call(l)}}hu(e,o,t,r)}else o=M1(n,e,t,r,i);return Qc(o)}Bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(Af(e,n|1),Gn(e,zt()),(it&6)===0&&(bo=zt()+500,kr()))}break;case 13:Ms(function(){var i=er(t,1);if(i!==null){var r=Ln();Mi(i,t,1,r)}}),sp(t,1)}};bf=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=Ln();Mi(e,t,134217728,n)}sp(t,134217728)}};Vv=function(t){if(t.tag===13){var e=Lr(t),n=er(t,e);if(n!==null){var i=Ln();Mi(n,t,e,i)}sp(t,e)}};Hv=function(){return pt};Gv=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};kd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ru(i);if(!r)throw Error(te(90));xv(i),Id(i,r)}}}break;case"textarea":Sv(t,n);break;case"select":e=n.value,e!=null&&mo(t,!!n.multiple,e,!1)}};Rv=ep;Pv=Ms;var S1={usingClientEntryPoint:!1,Events:[cl,ao,ru,bv,Cv,ep]},Ra={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w1={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||x1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Pa.isDisabled&&Pa.supportsFiber))try{eu=Pa.inject(w1),zi=Pa}catch(t){}var Pa;Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;Jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error(te(200));return y1(t,e,null,n)};Jn.createRoot=function(t,e){if(!ap(t))throw Error(te(299));var n=!1,i="",r=hy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rp(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,ja(t.nodeType===8?t.parentNode:t),new op(e)};Jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Nv(e),t=t===null?null:t.stateNode,t};Jn.flushSync=function(t){return Ms(t)};Jn.hydrate=function(t,e,n){if(!fu(e))throw Error(te(200));return pu(null,t,e,!0,n)};Jn.hydrateRoot=function(t,e,n){if(!ap(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=hy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uy(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Qi]=e.current,ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new du(e)};Jn.render=function(t,e,n){if(!fu(e))throw Error(te(200));return pu(null,t,e,!1,n)};Jn.unmountComponentAtNode=function(t){if(!fu(t))throw Error(te(40));return t._reactRootContainer?(Ms(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Jn.unstable_batchedUpdates=ep;Jn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fu(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return pu(t,e,n,!1,i)};Jn.version="18.3.1-next-f1338f8080-20240426"});var my=ls((j2,py)=>{"use strict";function fy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fy)}catch(t){console.error(t)}}fy(),py.exports=dy()});var vy=ls(lp=>{"use strict";var gy=my();lp.createRoot=gy.createRoot,lp.hydrateRoot=gy.hydrateRoot;var Q2});var Ah=Hh(Zl()),Jx=Hh(vy());var An=Hh(Zl());var E1=0,_y=1,T1=2;var Tx=1,A1=2,lr=3,Zr=0,Xn=1,ui=2,qr=0,Ko=1,Ut=2,yy=3,xy=4,b1=5,Is=100,C1=101,R1=102,P1=103,I1=104,L1=200,N1=201,D1=202,U1=203,Hp=204,Gp=205,F1=206,O1=207,k1=208,z1=209,B1=210,V1=211,H1=212,G1=213,W1=214,Wp=0,Xp=1,Yp=2,ea=3,qp=4,$p=5,Zp=6,Kp=7,Ax=0,X1=1,Y1=2,$r=0,q1=1,$1=2,Z1=3,ag=4,K1=5,J1=6,j1=7;var bx=300,ta=301,na=302,Jp=303,jp=304,wh=306,Qp=1e3,Ns=1001,em=1002,Wn=1003,Q1=1004;var mu=1005;var Ai=1006,cp=1007;var Ds=1008;var dr=1009,Cx=1010,Rx=1011,bl=1012,lg=1013,Us=1014,Hi=1015,Ol=1016,cg=1017,ug=1018,ia=1020,Px=35902,Ix=1021,Lx=1022,Ci=1023,Nx=1024,Dx=1025,Jo=1026,ra=1027,hg=1028,dg=1029,Ux=1030,fg=1031;var pg=1033,Xu=33776,Yu=33777,qu=33778,$u=33779,tm=35840,nm=35841,im=35842,rm=35843,sm=36196,om=37492,am=37496,lm=37808,cm=37809,um=37810,hm=37811,dm=37812,fm=37813,pm=37814,mm=37815,gm=37816,vm=37817,_m=37818,ym=37819,xm=37820,Mm=37821,Zu=36492,Sm=36494,wm=36495,Fx=36283,Em=36284,Tm=36285,Am=36286;var Ju=2300,bm=2301,up=2302,My=2400,Sy=2401,wy=2402;var ew=3200,tw=3201;var Ox=0,nw=1,Xr="",ln="srgb",es="srgb-linear",mg="display-p3",Eh="display-p3-linear",ju="linear",Tt="srgb",Qu="rec709",eh="p3";var Po=7680;var Ey=519,iw=512,rw=513,sw=514,kx=515,ow=516,aw=517,lw=518,cw=519,Cm=35044,zx=35048;var Ty="300 es",ur=2e3,th=2001,Kr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ay=1234567,El=Math.PI/180,Cl=180/Math.PI;function hr(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[t&255]+_n[t>>8&255]+_n[t>>16&255]+_n[t>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function Fn(t,e,n){return Math.max(e,Math.min(n,t))}function gg(t,e){return(t%e+e)%e}function uw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function hw(t,e,n){return t!==e?(n-t)/(e-t):0}function Tl(t,e,n){return(1-n)*t+n*e}function dw(t,e,n,i){return Tl(t,e,1-Math.exp(-n*i))}function fw(t,e=1){return e-Math.abs(gg(t,e*2)-e)}function pw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function mw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function gw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function vw(t,e){return t+Math.random()*(e-t)}function _w(t){return t*(.5-Math.random())}function yw(t){t!==void 0&&(Ay=t);let e=Ay+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xw(t){return t*El}function Mw(t){return t*Cl}function Sw(t){return(t&t-1)===0&&t!==0}function ww(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ew(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Tw(t,e,n,i,r){let s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*m,a*c);break;case"YXY":t.set(l*m,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var cn={DEG2RAD:El,RAD2DEG:Cl,generateUUID:hr,clamp:Fn,euclideanModulo:gg,mapLinear:uw,inverseLerp:hw,lerp:Tl,damp:dw,pingpong:fw,smoothstep:pw,smootherstep:mw,randInt:gw,randFloat:vw,randFloatSpread:_w,seededRandom:yw,degToRad:xw,radToDeg:Mw,isPowerOfTwo:Sw,ceilPowerOfTwo:ww,floorPowerOfTwo:Ew,setQuaternionFromProperEuler:Tw,normalize:mt,denormalize:bi},He=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],x=r[0],p=r[3],h=r[6],_=r[1],y=r[4],M=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*p+a*y+l*A,s[6]=o*h+a*M+l*T,s[1]=c*x+u*_+f*C,s[4]=c*p+u*y+f*A,s[7]=c*h+u*M+f*T,s[2]=d*x+m*_+v*C,s[5]=d*p+m*y+v*A,s[8]=d*h+m*M+v*T,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,v=n*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hp.makeScale(e,n)),this}rotate(e){return this.premultiply(hp.makeRotation(-e)),this}translate(e,n){return this.premultiply(hp.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hp=new We;function Bx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Aw(){let t=Rl("canvas");return t.style.display="block",t}var by={};function Ku(t){t in by||(by[t]=!0,console.warn(t))}function bw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Cw(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rw(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Cy=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ry=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hl={[es]:{transfer:ju,primaries:Qu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ln]:{transfer:Tt,primaries:Qu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Eh]:{transfer:ju,primaries:eh,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Ry),fromReference:t=>t.applyMatrix3(Cy)},[mg]:{transfer:Tt,primaries:eh,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ry),fromReference:t=>t.applyMatrix3(Cy).convertLinearToSRGB()}},Pw=new Set([es,Eh]),ut={enabled:!0,_workingColorSpace:es,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Pw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=hl[e].toReference,r=hl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return hl[t].primaries},getTransfer:function(t){return t===Xr?ju:hl[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(hl[e].luminanceCoefficients)}};function jo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function dp(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Io,Rm=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Io===void 0&&(Io=Rl("canvas")),Io.width=e.width,Io.height=e.height;let i=Io.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Io}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let n=Rl("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(jo(n[i]/255)*255):n[i]=jo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Iw=0,nh=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fp(r[o].image)):s.push(fp(r[o]))}else s=fp(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function fp(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Rm.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lw=0,On=class t extends Kr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Ns,r=Ns,s=Ai,o=Ds,a=Ci,l=dr,c=t.DEFAULT_ANISOTROPY,u=Xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=hr(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qp:e.x=e.x-Math.floor(e.x);break;case Ns:e.x=e.x<0?0:1;break;case em:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qp:e.y=e.y-Math.floor(e.y);break;case Ns:e.y=e.y<0?0:1;break;case em:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=bx;On.DEFAULT_ANISOTROPY=1;var gt=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],x=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,M=(m+1)/2,C=(h+1)/2,A=(u+d)/4,T=(f+x)/4,R=(v+p)/4;return y>M&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=T/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(f-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pm=class extends Kr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new nh(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fr=class extends Pm{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ih=class extends On{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Im=class extends On{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==d||c!==m||u!==v){let p=1-a,h=l*d+c*m+u*v+f*x,_=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){let C=Math.sqrt(y),A=Math.atan2(C,h*_);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}let M=a*_;if(l=l*p+d*M,c=c*p+m*M,u=u*p+v*M,f=f*p+x*M,p===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*m-c*d,e[n+1]=l*v+u*d+c*f-a*m,e[n+2]=c*v+u*m+a*d-l*f,e[n+3]=u*v-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Py.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Py.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pp.copy(this).projectOnVector(e),this.sub(pp)}reflect(e){return this.sub(pp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pp=new N,Py=new Jr,pr=class{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=wi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wi):wi.fromBufferAttribute(s,o),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gu.copy(i.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),vu.subVectors(this.max,dl),Lo.subVectors(e.a,dl),No.subVectors(e.b,dl),Do.subVectors(e.c,dl),zr.subVectors(No,Lo),Br.subVectors(Do,No),Es.subVectors(Lo,Do);let n=[0,-zr.z,zr.y,0,-Br.z,Br.y,0,-Es.z,Es.y,zr.z,0,-zr.x,Br.z,0,-Br.x,Es.z,0,-Es.x,-zr.y,zr.x,0,-Br.y,Br.x,0,-Es.y,Es.x,0];return!mp(n,Lo,No,Do,vu)||(n=[1,0,0,0,1,0,0,0,1],!mp(n,Lo,No,Do,vu))?!1:(_u.crossVectors(zr,Br),n=[_u.x,_u.y,_u.z],mp(n,Lo,No,Do,vu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ir=[new N,new N,new N,new N,new N,new N,new N,new N],wi=new N,gu=new pr,Lo=new N,No=new N,Do=new N,zr=new N,Br=new N,Es=new N,dl=new N,vu=new N,_u=new N,Ts=new N;function mp(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ts.fromArray(t,s);let a=r.x*Math.abs(Ts.x)+r.y*Math.abs(Ts.y)+r.z*Math.abs(Ts.z),l=e.dot(Ts),c=n.dot(Ts),u=i.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Nw=new pr,fl=new N,gp=new N,mr=class{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Nw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fl.subVectors(e,this.center);let n=fl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fl.copy(e.center).add(gp)),this.expandByPoint(fl.copy(e.center).sub(gp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},rr=new N,vp=new N,yu=new N,Vr=new N,_p=new N,xu=new N,yp=new N,Pl=class{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=rr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,n),rr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vp.copy(e).add(n).multiplyScalar(.5),yu.copy(n).sub(e).normalize(),Vr.copy(this.origin).sub(vp);let s=e.distanceTo(n)*.5,o=-this.direction.dot(yu),a=Vr.dot(this.direction),l=-Vr.dot(yu),c=Vr.lengthSq(),u=Math.abs(1-o*o),f,d,m,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){let x=1/u;f*=x,d*=x,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vp).addScaledVector(yu,d),m}intersectSphere(e,n){rr.subVectors(e.center,this.origin);let i=rr.dot(this.direction),r=rr.dot(rr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,n,i,r,s){_p.subVectors(n,e),xu.subVectors(i,e),yp.crossVectors(_p,xu);let o=this.direction.dot(yp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vr.subVectors(this.origin,e);let l=a*this.direction.dot(xu.crossVectors(Vr,xu));if(l<0)return null;let c=a*this.direction.dot(_p.cross(Vr));if(c<0||l+c>o)return null;let u=-a*Vr.dot(yp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class t{constructor(e,n,i,r,s,o,a,l,c,u,f,d,m,v,x,p){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,m,v,x,p)}set(e,n,i,r,s,o,a,l,c,u,f,d,m,v,x,p){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Uo.setFromMatrixColumn(e,0).length(),s=1/Uo.setFromMatrixColumn(e,1).length(),o=1/Uo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*u,m=o*f,v=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*u,m=l*f,v=c*u,x=c*f;n[0]=d+x*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*u,m=l*f,v=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*u,m=o*f,v=a*u,x=a*f;n[0]=l*u,n[4]=v*c-m,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=v*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+v,n[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=m*f-v,n[2]=v*f-m,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dw,e,Uw)}lookAt(e,n,i){let r=this.elements;return jn.subVectors(e,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Hr.crossVectors(i,jn),Hr.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Hr.crossVectors(i,jn)),Hr.normalize(),Mu.crossVectors(jn,Hr),r[0]=Hr.x,r[4]=Mu.x,r[8]=jn.x,r[1]=Hr.y,r[5]=Mu.y,r[9]=jn.y,r[2]=Hr.z,r[6]=Mu.z,r[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],x=i[6],p=i[10],h=i[14],_=i[3],y=i[7],M=i[11],C=i[15],A=r[0],T=r[4],R=r[8],G=r[12],g=r[1],w=r[5],L=r[9],O=r[13],z=r[2],K=r[6],X=r[10],se=r[14],W=r[3],ge=r[7],ve=r[11],ee=r[15];return s[0]=o*A+a*g+l*z+c*W,s[4]=o*T+a*w+l*K+c*ge,s[8]=o*R+a*L+l*X+c*ve,s[12]=o*G+a*O+l*se+c*ee,s[1]=u*A+f*g+d*z+m*W,s[5]=u*T+f*w+d*K+m*ge,s[9]=u*R+f*L+d*X+m*ve,s[13]=u*G+f*O+d*se+m*ee,s[2]=v*A+x*g+p*z+h*W,s[6]=v*T+x*w+p*K+h*ge,s[10]=v*R+x*L+p*X+h*ve,s[14]=v*G+x*O+p*se+h*ee,s[3]=_*A+y*g+M*z+C*W,s[7]=_*T+y*w+M*K+C*ge,s[11]=_*R+y*L+M*X+C*ve,s[15]=_*G+y*O+M*se+C*ee,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],x=e[7],p=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+x*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],x=e[13],p=e[14],h=e[15],_=f*p*c-x*d*c+x*l*m-a*p*m-f*l*h+a*d*h,y=v*d*c-u*p*c-v*l*m+o*p*m+u*l*h-o*d*h,M=u*x*c-v*f*c+v*a*m-o*x*m-u*a*h+o*f*h,C=v*f*l-u*x*l-v*a*d+o*x*d+u*a*p-o*f*p,A=n*_+i*y+r*M+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=_*T,e[1]=(x*d*s-f*p*s-x*r*m+i*p*m+f*r*h-i*d*h)*T,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*T,e[4]=y*T,e[5]=(u*p*s-v*d*s+v*r*m-n*p*m-u*r*h+n*d*h)*T,e[6]=(v*l*s-o*p*s-v*r*c+n*p*c+o*r*h-n*l*h)*T,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*m+n*l*m)*T,e[8]=M*T,e[9]=(v*f*s-u*x*s-v*i*m+n*x*m+u*i*h-n*f*h)*T,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*h+n*a*h)*T,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*T,e[12]=C*T,e[13]=(u*x*r-v*f*r+v*i*d-n*x*d-u*i*p+n*f*p)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*p-n*a*p)*T,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,v=s*f,x=o*u,p=o*f,h=a*f,_=l*c,y=l*u,M=l*f,C=i.x,A=i.y,T=i.z;return r[0]=(1-(x+h))*C,r[1]=(m+M)*C,r[2]=(v-y)*C,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(d+h))*A,r[6]=(p+_)*A,r[7]=0,r[8]=(v+y)*T,r[9]=(p-_)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Uo.set(r[0],r[1],r[2]).length(),o=Uo.set(r[4],r[5],r[6]).length(),a=Uo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ei.copy(this);let c=1/s,u=1/o,f=1/a;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=u,Ei.elements[5]*=u,Ei.elements[6]*=u,Ei.elements[8]*=f,Ei.elements[9]*=f,Ei.elements[10]*=f,n.setFromRotationMatrix(Ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ur){let l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),m,v;if(a===ur)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===th)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ur){let l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,m=(i+r)*u,v,x;if(a===ur)v=(o+s)*f,x=-2*f;else if(a===th)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Uo=new N,Ei=new ht,Dw=new N(0,0,0),Uw=new N(1,1,1),Hr=new N,Mu=new N,jn=new N,Iy=new ht,Ly=new Jr,Gi=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Iy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iy,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ly.setFromEuler(this),this.setFromQuaternion(Ly,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var rh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fw=0,Ny=new N,Fo=new Jr,sr=new ht,Su=new N,pl=new N,Ow=new N,kw=new Jr,Dy=new N(1,0,0),Uy=new N(0,1,0),Fy=new N(0,0,1),Oy={type:"added"},zw={type:"removed"},Oo={type:"childadded",child:null},xp={type:"childremoved",child:null},$t=class t extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new N,n=new Gi,i=new Jr,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fo.setFromAxisAngle(e,n),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(e,n){return Fo.setFromAxisAngle(e,n),this.quaternion.premultiply(Fo),this}rotateX(e){return this.rotateOnAxis(Dy,e)}rotateY(e){return this.rotateOnAxis(Uy,e)}rotateZ(e){return this.rotateOnAxis(Fy,e)}translateOnAxis(e,n){return Ny.copy(e).applyQuaternion(this.quaternion),this.position.add(Ny.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dy,e)}translateY(e){return this.translateOnAxis(Uy,e)}translateZ(e){return this.translateOnAxis(Fy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Su.copy(e):Su.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(pl,Su,this.up):sr.lookAt(Su,pl,this.up),this.quaternion.setFromRotationMatrix(sr),r&&(sr.extractRotation(r.matrixWorld),Fo.setFromRotationMatrix(sr),this.quaternion.premultiply(Fo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oy),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zw),xp.child=e,this.dispatchEvent(xp),xp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oy),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pl,e,Ow),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pl,kw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};$t.DEFAULT_UP=new N(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new N,or=new N,Mp=new N,ar=new N,ko=new N,zo=new N,ky=new N,Sp=new N,wp=new N,Ep=new N,Tp=new gt,Ap=new gt,bp=new gt,Yr=class t{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ti.subVectors(e,n),r.cross(Ti);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ti.subVectors(r,n),or.subVectors(i,n),Mp.subVectors(e,n);let o=Ti.dot(Ti),a=Ti.dot(or),l=Ti.dot(Mp),c=or.dot(or),u=or.dot(Mp),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,m=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(o,ar.y),l.addScaledVector(a,ar.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Tp.setScalar(0),Ap.setScalar(0),bp.setScalar(0),Tp.fromBufferAttribute(e,n),Ap.fromBufferAttribute(e,i),bp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Tp,s.x),o.addScaledVector(Ap,s.y),o.addScaledVector(bp,s.z),o}static isFrontFacing(e,n,i,r){return Ti.subVectors(i,n),or.subVectors(e,n),Ti.cross(or).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ti.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;ko.subVectors(r,i),zo.subVectors(s,i),Sp.subVectors(e,i);let l=ko.dot(Sp),c=zo.dot(Sp);if(l<=0&&c<=0)return n.copy(i);wp.subVectors(e,r);let u=ko.dot(wp),f=zo.dot(wp);if(u>=0&&f<=u)return n.copy(r);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ko,o);Ep.subVectors(e,s);let m=ko.dot(Ep),v=zo.dot(Ep);if(v>=0&&m<=v)return n.copy(s);let x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(zo,a);let p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return ky.subVectors(s,r),a=(f-u)/(f-u+(m-v)),n.copy(r).addScaledVector(ky,a);let h=1/(p+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(ko,o).addScaledVector(zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},wu={h:0,s:0,l:0};function Cp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=gg(e,1),n=Fn(n,0,1),i=Fn(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cp(o,s,e+1/3),this.g=Cp(o,s,e),this.b=Cp(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,n=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){let i=Vx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}copyLinearToSRGB(e){return this.r=dp(e.r),this.g=dp(e.g),this.b=dp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return ut.fromWorkingColorSpace(yn.copy(this),e),Math.round(Fn(yn.r*255,0,255))*65536+Math.round(Fn(yn.g*255,0,255))*256+Math.round(Fn(yn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.fromWorkingColorSpace(yn.copy(this),n);let i=yn.r,r=yn.g,s=yn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=ln){ut.fromWorkingColorSpace(yn.copy(this),e);let n=yn.r,i=yn.g,r=yn.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+n,Gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gr),e.getHSL(wu);let i=Tl(Gr.h,wu.h,n),r=Tl(Gr.s,wu.s,n),s=Tl(Gr.l,wu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new ze;ze.NAMES=Vx;var Bw=0,Wi=class extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Ko,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hp,this.blendDst=Gp,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ey,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ko&&(i.blending=this.blending),this.side!==Zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hp&&(i.blendSrc=this.blendSrc),this.blendDst!==Gp&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ey&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Po&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Po&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Po&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},tn=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new N,Eu=new He,At=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cm,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(e),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bi(n,this.array)),n}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bi(n,this.array)),n}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bi(n,this.array)),n}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}};var sh=class extends At{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var oh=class extends At{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Sn=class extends At{constructor(e,n,i){super(new Float32Array(e),n,i)}},Vw=0,ci=new ht,Rp=new $t,Bo=new N,Qn=new pr,ml=new pr,en=new N,Bt=class t extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bx(e)?oh:sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,i){return ci.makeTranslation(e,n,i),this.applyMatrix4(ci),this}scale(e,n,i){return ci.makeScale(e,n,i),this.applyMatrix4(ci),this}lookAt(e){return Rp.lookAt(e),Rp.updateMatrix(),this.applyMatrix4(Rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];ml.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Qn.min,ml.min),Qn.expandByPoint(en),en.addVectors(Qn.max,ml.max),Qn.expandByPoint(en)):(Qn.expandByPoint(ml.min),Qn.expandByPoint(ml.max))}Qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(Bo.fromBufferAttribute(e,c),en.add(Bo)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;let c=new N,u=new N,f=new N,d=new He,m=new He,v=new He,x=new N,p=new N;function h(R,G,g){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,G),f.fromBufferAttribute(i,g),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,G),v.fromBufferAttribute(s,g),u.sub(c),f.sub(c),m.sub(d),v.sub(d);let w=1/(m.x*v.y-v.x*m.y);isFinite(w)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(w),a[R].add(x),a[G].add(x),a[g].add(x),l[R].add(p),l[G].add(p),l[g].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,G=_.length;R<G;++R){let g=_[R],w=g.start,L=g.count;for(let O=w,z=w+L;O<z;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new N,M=new N,C=new N,A=new N;function T(R){C.fromBufferAttribute(r,R),A.copy(C);let G=a[R];y.copy(G),y.sub(C.multiplyScalar(C.dot(G))).normalize(),M.crossVectors(A,G);let w=M.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,w)}for(let R=0,G=_.length;R<G;++R){let g=_[R],w=g.start,L=g.count;for(let O=w,z=w+L;O<z;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){let v=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new At(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zy=new ht,As=new Pl,Tu=new mr,By=new N,Au=new N,bu=new N,Cu=new N,Pp=new N,Ru=new N,Vy=new N,Pu=new N,Pe=class extends $t{constructor(e=new Bt,n=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ru.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(Pp.fromBufferAttribute(f,e),o?Ru.addScaledVector(Pp,u):Ru.addScaledVector(Pp.sub(n),u))}n.add(Ru)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tu.copy(i.boundingSphere),Tu.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(Tu.containsPoint(As.origin)===!1&&(As.intersectSphere(Tu,By)===null||As.origin.distanceToSquared(By)>(e.far-e.near)**2))&&(zy.copy(s).invert(),As.copy(e.ray).applyMatrix4(zy),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,As)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){let p=d[v],h=o[p.materialIndex],_=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,C=y;M<C;M+=3){let A=a.getX(M),T=a.getX(M+1),R=a.getX(M+2);r=Iu(this,h,e,i,c,u,f,A,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{let v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,h=x;p<h;p+=3){let _=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);r=Iu(this,o,e,i,c,u,f,_,y,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){let p=d[v],h=o[p.materialIndex],_=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,C=y;M<C;M+=3){let A=M,T=M+1,R=M+2;r=Iu(this,h,e,i,c,u,f,A,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{let v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,h=x;p<h;p+=3){let _=p,y=p+1,M=p+2;r=Iu(this,o,e,i,c,u,f,_,y,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}};function Hw(t,e,n,i,r,s,o,a){let l;if(e.side===Xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Zr,a),l===null)return null;Pu.copy(a),Pu.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Pu);return c<n.near||c>n.far?null:{distance:c,point:Pu.clone(),object:t}}function Iu(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Au),t.getVertexPosition(l,bu),t.getVertexPosition(c,Cu);let u=Hw(t,e,n,i,Au,bu,Cu,Vy);if(u){let f=new N;Yr.getBarycoord(Vy,Au,bu,Cu,f),r&&(u.uv=Yr.getInterpolatedAttribute(r,a,l,c,f,new He)),s&&(u.uv1=Yr.getInterpolatedAttribute(s,a,l,c,f,new He)),o&&(u.normal=Yr.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};Yr.getNormal(Au,bu,Cu,d.normal),u.face=d,u.barycoord=f}return u}var It=class t extends Bt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(f,2));function v(x,p,h,_,y,M,C,A,T,R,G){let g=M/T,w=C/R,L=M/2,O=C/2,z=A/2,K=T+1,X=R+1,se=0,W=0,ge=new N;for(let ve=0;ve<X;ve++){let ee=ve*w-O;for(let Qe=0;Qe<K;Qe++){let ot=Qe*g-L;ge[x]=ot*_,ge[p]=ee*y,ge[h]=z,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[p]=0,ge[h]=A>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Qe/T),f.push(1-ve/R),se+=1}}for(let ve=0;ve<R;ve++)for(let ee=0;ee<T;ee++){let Qe=d+ee+K*ve,ot=d+ee+K*(ve+1),Z=d+(ee+1)+K*(ve+1),ne=d+(ee+1)+K*ve;l.push(Qe,ot,ne),l.push(ot,Z,ne),W+=6}a.addGroup(m,W,G),m+=W,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sa(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Un(t){let e={};for(let n=0;n<t.length;n++){let i=sa(t[n]);for(let r in i)e[r]=i[r]}return e}function Gw(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hx(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Ww={clone:sa,merge:Un},Xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xi=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xw,this.fragmentShader=Yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=Gw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ah=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ur}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wr=new N,Hy=new He,Gy=new He,xn=class extends ah{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,n){return this.getViewBounds(e,Hy,Gy),n.subVectors(Gy,Hy)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(El*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Vo=-90,Ho=1,Lm=class extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xn(Vo,Ho,e,n);r.layers=this.layers,this.add(r);let s=new xn(Vo,Ho,e,n);s.layers=this.layers,this.add(s);let o=new xn(Vo,Ho,e,n);o.layers=this.layers,this.add(o);let a=new xn(Vo,Ho,e,n);a.layers=this.layers,this.add(a);let l=new xn(Vo,Ho,e,n);l.layers=this.layers,this.add(l);let c=new xn(Vo,Ho,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===ur)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===th)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},lh=class extends On{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ta,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nm=class extends fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new It(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:qr});s.uniforms.tEquirect.value=n;let o=new Pe(r,s),a=n.minFilter;return n.minFilter===Ds&&(n.minFilter=Ai),new Lm(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},Ip=new N,qw=new N,$w=new We,cr=class{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Ip.subVectors(i,n).cross(qw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Ip),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||$w.getNormalMatrix(e),r=this.coplanarPoint(Ip).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bs=new mr,Lu=new N,Il=class{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ur){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],x=r[10],p=r[11],h=r[12],_=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-m,M-h).normalize(),i[1].setComponents(l+s,d+c,p+m,M+h).normalize(),i[2].setComponents(l+o,d+u,p+v,M+_).normalize(),i[3].setComponents(l-o,d-u,p-v,M-_).normalize(),i[4].setComponents(l-a,d-f,p-x,M-y).normalize(),n===ur)i[5].setComponents(l+a,d+f,p+x,M+y).normalize();else if(n===th)i[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Lu.x=r.normal.x>0?e.max.x:e.min.x,Lu.y=r.normal.y>0?e.max.y:e.min.y,Lu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Zw(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){let v=f[d],x=f[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){let x=f[m];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var wn=class t extends Bt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,m=[],v=[],x=[],p=[];for(let h=0;h<u;h++){let _=h*d-o;for(let y=0;y<c;y++){let M=y*f-s;v.push(M,-_,0),x.push(0,0,1),p.push(y/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){let y=_+c*h,M=_+c*(h+1),C=_+1+c*(h+1),A=_+1+c*h;m.push(y,M,A),m.push(M,C,A)}this.setIndex(m),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Kw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ME=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ST=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ET=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ZT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Kw,alphahash_pars_fragment:Jw,alphamap_fragment:jw,alphamap_pars_fragment:Qw,alphatest_fragment:eE,alphatest_pars_fragment:tE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:rE,batching_vertex:sE,begin_vertex:oE,beginnormal_vertex:aE,bsdfs:lE,iridescence_fragment:cE,bumpmap_pars_fragment:uE,clipping_planes_fragment:hE,clipping_planes_pars_fragment:dE,clipping_planes_pars_vertex:fE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:gE,color_pars_vertex:vE,color_vertex:_E,common:yE,cube_uv_reflection_fragment:xE,defaultnormal_vertex:ME,displacementmap_pars_vertex:SE,displacementmap_vertex:wE,emissivemap_fragment:EE,emissivemap_pars_fragment:TE,colorspace_fragment:AE,colorspace_pars_fragment:bE,envmap_fragment:CE,envmap_common_pars_fragment:RE,envmap_pars_fragment:PE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:HE,envmap_vertex:LE,fog_vertex:NE,fog_pars_vertex:DE,fog_fragment:UE,fog_pars_fragment:FE,gradientmap_pars_fragment:OE,lightmap_pars_fragment:kE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:BE,lights_pars_begin:VE,lights_toon_fragment:GE,lights_toon_pars_fragment:WE,lights_phong_fragment:XE,lights_phong_pars_fragment:YE,lights_physical_fragment:qE,lights_physical_pars_fragment:$E,lights_fragment_begin:ZE,lights_fragment_maps:KE,lights_fragment_end:JE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:QE,logdepthbuf_pars_vertex:eT,logdepthbuf_vertex:tT,map_fragment:nT,map_pars_fragment:iT,map_particle_fragment:rT,map_particle_pars_fragment:sT,metalnessmap_fragment:oT,metalnessmap_pars_fragment:aT,morphinstance_vertex:lT,morphcolor_vertex:cT,morphnormal_vertex:uT,morphtarget_pars_vertex:hT,morphtarget_vertex:dT,normal_fragment_begin:fT,normal_fragment_maps:pT,normal_pars_fragment:mT,normal_pars_vertex:gT,normal_vertex:vT,normalmap_pars_fragment:_T,clearcoat_normal_fragment_begin:yT,clearcoat_normal_fragment_maps:xT,clearcoat_pars_fragment:MT,iridescence_pars_fragment:ST,opaque_fragment:wT,packing:ET,premultiplied_alpha_fragment:TT,project_vertex:AT,dithering_fragment:bT,dithering_pars_fragment:CT,roughnessmap_fragment:RT,roughnessmap_pars_fragment:PT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:LT,shadowmap_vertex:NT,shadowmask_pars_fragment:DT,skinbase_vertex:UT,skinning_pars_vertex:FT,skinning_vertex:OT,skinnormal_vertex:kT,specularmap_fragment:zT,specularmap_pars_fragment:BT,tonemapping_fragment:VT,tonemapping_pars_fragment:HT,transmission_fragment:GT,transmission_pars_fragment:WT,uv_pars_fragment:XT,uv_pars_vertex:YT,uv_vertex:qT,worldpos_vertex:$T,background_vert:ZT,background_frag:KT,backgroundCube_vert:JT,backgroundCube_frag:jT,cube_vert:QT,cube_frag:eA,depth_vert:tA,depth_frag:nA,distanceRGBA_vert:iA,distanceRGBA_frag:rA,equirect_vert:sA,equirect_frag:oA,linedashed_vert:aA,linedashed_frag:lA,meshbasic_vert:cA,meshbasic_frag:uA,meshlambert_vert:hA,meshlambert_frag:dA,meshmatcap_vert:fA,meshmatcap_frag:pA,meshnormal_vert:mA,meshnormal_frag:gA,meshphong_vert:vA,meshphong_frag:_A,meshphysical_vert:yA,meshphysical_frag:xA,meshtoon_vert:MA,meshtoon_frag:SA,points_vert:wA,points_frag:EA,shadow_vert:TA,shadow_frag:AA,sprite_vert:bA,sprite_frag:CA},ce={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Vi={basic:{uniforms:Un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Un([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Un([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Un([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Un([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Un([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Un([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Un([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Un([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Un([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Un([ce.lights,ce.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Vi.physical={uniforms:Un([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Nu={r:0,b:0,g:0},Cs=new Gi,RA=new ht;function PA(t,e,n,i,r,s,o){let a=new ze(0),l=s===!0?0:1,c,u,f=null,d=0,m=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function x(_){let y=!1,M=v(_);M===null?h(a,l):M&&M.isColor&&(h(M,1),y=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,y){let M=v(y);M&&(M.isCubeTexture||M.mapping===wh)?(u===void 0&&(u=new Pe(new It(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:sa(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cs.copy(y.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(RA.makeRotationFromEuler(Cs)),u.material.toneMapped=ut.getTransfer(M.colorSpace)!==Tt,(f!==M||d!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Pe(new wn(2,2),new Xi({name:"BackgroundMaterial",uniforms:sa(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,y){_.getRGB(Nu,Hx(t)),i.buffers.color.setClear(Nu.r,Nu.g,Nu.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:p}}function IA(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(g,w,L,O,z){let K=!1,X=f(O,L,w);s!==X&&(s=X,c(s.object)),K=m(g,O,L,z),K&&v(g,O,L,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(g,w,L,O),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(g){return t.bindVertexArray(g)}function u(g){return t.deleteVertexArray(g)}function f(g,w,L){let O=L.wireframe===!0,z=i[g.id];z===void 0&&(z={},i[g.id]=z);let K=z[w.id];K===void 0&&(K={},z[w.id]=K);let X=K[O];return X===void 0&&(X=d(l()),K[O]=X),X}function d(g){let w=[],L=[],O=[];for(let z=0;z<n;z++)w[z]=0,L[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:O,object:g,attributes:{},index:null}}function m(g,w,L,O){let z=s.attributes,K=w.attributes,X=0,se=L.getAttributes();for(let W in se)if(se[W].location>=0){let ve=z[W],ee=K[W];if(ee===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(ee=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(ee=g.instanceColor)),ve===void 0||ve.attribute!==ee||ee&&ve.data!==ee.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function v(g,w,L,O){let z={},K=w.attributes,X=0,se=L.getAttributes();for(let W in se)if(se[W].location>=0){let ve=K[W];ve===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(ve=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(ve=g.instanceColor));let ee={};ee.attribute=ve,ve&&ve.data&&(ee.data=ve.data),z[W]=ee,X++}s.attributes=z,s.attributesNum=X,s.index=O}function x(){let g=s.newAttributes;for(let w=0,L=g.length;w<L;w++)g[w]=0}function p(g){h(g,0)}function h(g,w){let L=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;L[g]=1,O[g]===0&&(t.enableVertexAttribArray(g),O[g]=1),z[g]!==w&&(t.vertexAttribDivisor(g,w),z[g]=w)}function _(){let g=s.newAttributes,w=s.enabledAttributes;for(let L=0,O=w.length;L<O;L++)w[L]!==g[L]&&(t.disableVertexAttribArray(L),w[L]=0)}function y(g,w,L,O,z,K,X){X===!0?t.vertexAttribIPointer(g,w,L,z,K):t.vertexAttribPointer(g,w,L,O,z,K)}function M(g,w,L,O){x();let z=O.attributes,K=L.getAttributes(),X=w.defaultAttributeValues;for(let se in K){let W=K[se];if(W.location>=0){let ge=z[se];if(ge===void 0&&(se==="instanceMatrix"&&g.instanceMatrix&&(ge=g.instanceMatrix),se==="instanceColor"&&g.instanceColor&&(ge=g.instanceColor)),ge!==void 0){let ve=ge.normalized,ee=ge.itemSize,Qe=e.get(ge);if(Qe===void 0)continue;let ot=Qe.buffer,Z=Qe.type,ne=Qe.bytesPerElement,we=Z===t.INT||Z===t.UNSIGNED_INT||ge.gpuType===lg;if(ge.isInterleavedBufferAttribute){let ye=ge.data,Be=ye.stride,Ce=ge.offset;if(ye.isInstancedInterleavedBuffer){for(let $e=0;$e<W.locationSize;$e++)h(W.location+$e,ye.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let $e=0;$e<W.locationSize;$e++)p(W.location+$e);t.bindBuffer(t.ARRAY_BUFFER,ot);for(let $e=0;$e<W.locationSize;$e++)y(W.location+$e,ee/W.locationSize,Z,ve,Be*ne,(Ce+ee/W.locationSize*$e)*ne,we)}else{if(ge.isInstancedBufferAttribute){for(let ye=0;ye<W.locationSize;ye++)h(W.location+ye,ge.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ye=0;ye<W.locationSize;ye++)p(W.location+ye);t.bindBuffer(t.ARRAY_BUFFER,ot);for(let ye=0;ye<W.locationSize;ye++)y(W.location+ye,ee/W.locationSize,Z,ve,ee*ne,ee/W.locationSize*ye*ne,we)}}else if(X!==void 0){let ve=X[se];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(W.location,ve);break;case 3:t.vertexAttrib3fv(W.location,ve);break;case 4:t.vertexAttrib4fv(W.location,ve);break;default:t.vertexAttrib1fv(W.location,ve)}}}}_()}function C(){R();for(let g in i){let w=i[g];for(let L in w){let O=w[L];for(let z in O)u(O[z].object),delete O[z];delete w[L]}delete i[g]}}function A(g){if(i[g.id]===void 0)return;let w=i[g.id];for(let L in w){let O=w[L];for(let z in O)u(O[z].object),delete O[z];delete w[L]}delete i[g.id]}function T(g){for(let w in i){let L=i[w];if(L[g.id]===void 0)continue;let O=L[g.id];for(let z in O)u(O[z].object),delete O[z];delete L[g.id]}}function R(){G(),o=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:G,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function LA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];n.update(m,i,1)}function l(c,u,f,d){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function NA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Ci&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===Ol&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==dr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hi&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function DA(t){let e=this,n=null,i=0,r=!1,s=!1,o=new cr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){let v=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{let _=s?0:i,y=_*4,M=h.clippingState||null;l.value=M,M=u(v,d,y,m);for(let C=0;C!==y;++C)M[C]=n[C];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,v){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,v!==!0||p===null){let h=m+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,M=m;y!==x;++y,M+=4)o.copy(f[y]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function UA(t){let e=new WeakMap;function n(o,a){return a===Jp?o.mapping=ta:a===jp&&(o.mapping=na),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jp||a===jp)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Nm(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ch=class extends ah{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Zo=4,Wy=[.125,.215,.35,.446,.526,.582],Ls=20,Lp=new ch,Xy=new ze,Np=null,Dp=0,Up=0,Fp=!1,Ps=(1+Math.sqrt(5))/2,Go=1/Ps,Yy=[new N(-Ps,Go,0),new N(Ps,Go,0),new N(-Go,0,Ps),new N(Go,0,Ps),new N(0,Ps,-Go),new N(0,Ps,Go),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],uh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Np=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Up=this._renderer.getActiveMipmapLevel(),Fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$y(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Np,Dp,Up),this._renderer.xr.enabled=Fp,e.scissorTest=!1,Du(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Np=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Up=this._renderer.getActiveMipmapLevel(),Fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Ol,format:Ci,colorSpace:es,depthBuffer:!1},r=qy(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qy(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FA(s)),this._blurMaterial=OA(s,e,n)}return r}_compileMaterial(e){let n=new Pe(this._lodPlanes[0],e);this._renderer.compile(n,Lp)}_sceneToCubeUV(e,n,i,r){let a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xy),u.toneMapping=$r,u.autoClear=!1;let m=new tn({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),v=new Pe(new It,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Xy),x=!0);for(let h=0;h<6;h++){let _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));let y=this._cubeSize;Du(r,_*y,h>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===ta||e.mapping===na;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$y());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Du(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lp)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yy[(r-s-1)%Yy.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Pe(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ls-1),x=s/v,p=isFinite(s)?1+Math.floor(u*x):Ls;p>Ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ls}`);let h=[],_=0;for(let T=0;T<Ls;++T){let R=T/x,G=Math.exp(-R*R/2);h.push(G),T===0?_+=G:T<p&&(_+=2*G)}for(let T=0;T<h.length;T++)h[T]=h[T]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-i;let M=this._sizeLods[r],C=3*M*(r>y-Zo?r-y+Zo:0),A=4*(this._cubeSize-M);Du(n,C,A,3*M,2*M),l.setRenderTarget(n),l.render(f,Lp)}};function FA(t){let e=[],n=[],i=[],r=t,s=t-Zo+1+Wy.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zo?l=Wy[o-t+Zo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,x=3,p=2,h=1,_=new Float32Array(x*v*m),y=new Float32Array(p*v*m),M=new Float32Array(h*v*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,R=A>2?0:-1,G=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(G,x*v*A),y.set(d,p*v*A);let g=[A,A,A,A,A,A];M.set(g,h*v*A)}let C=new Bt;C.setAttribute("position",new At(_,x)),C.setAttribute("uv",new At(y,p)),C.setAttribute("faceIndex",new At(M,h)),e.push(C),r>Zo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function qy(t,e,n){let i=new fr(t,e,n);return i.texture.mapping=wh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Du(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function OA(t,e,n){let i=new Float32Array(Ls),r=new N(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function $y(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Zy(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function vg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Jp||l===jp,u=l===ta||l===na;if(c||u){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new uh(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new uh(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function zA(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Ku("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function BA(t,e,n,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);for(let v in d.morphAttributes){let x=d.morphAttributes[v];for(let p=0,h=x.length;p<h;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let v in d)e.update(d[v],t.ARRAY_BUFFER);let m=f.morphAttributes;for(let v in m){let x=m[v];for(let p=0,h=x.length;p<h;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(f){let d=[],m=f.index,v=f.attributes.position,x=0;if(m!==null){let _=m.array;x=m.version;for(let y=0,M=_.length;y<M;y+=3){let C=_[y+0],A=_[y+1],T=_[y+2];d.push(C,A,A,T,T,C)}}else if(v!==void 0){let _=v.array;x=v.version;for(let y=0,M=_.length/3-1;y<M;y+=3){let C=y+0,A=y+1,T=y+2;d.push(C,A,A,T,T,C)}}else return;let p=new(Bx(d)?oh:sh)(d,1);p.version=x;let h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){let d=s.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,d*o,v),n.update(m,i,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];n.update(p,i,1)}function f(d,m,v,x){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/o,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,v);let h=0;for(let _=0;_<v;_++)h+=m[_];for(let _=0;_<x.length;_++)n.update(h,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function HA(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GA(t,e,n){let i=new WeakMap,r=new gt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let G=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",G)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;m===!0&&(y=1),v===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*C*4*f),T=new ih(A,M,C,f);T.type=Hi,T.needsUpdate=!0;let R=y*4;for(let g=0;g<f;g++){let w=p[g],L=h[g],O=_[g],z=M*C*4*g;for(let K=0;K<w.count;K++){let X=K*R;m===!0&&(r.fromBufferAttribute(w,K),A[z+X+0]=r.x,A[z+X+1]=r.y,A[z+X+2]=r.z,A[z+X+3]=0),v===!0&&(r.fromBufferAttribute(L,K),A[z+X+4]=r.x,A[z+X+5]=r.y,A[z+X+6]=r.z,A[z+X+7]=0),x===!0&&(r.fromBufferAttribute(O,K),A[z+X+8]=r.x,A[z+X+9]=r.y,A[z+X+10]=r.z,A[z+X+11]=O.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new He(M,C)},i.set(a,d),a.addEventListener("dispose",G)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function WA(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var hh=class extends On{constructor(e,n,i,r,s,o,a,l,c,u=Jo){if(u!==Jo&&u!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jo&&(i=Us),i===void 0&&u===ra&&(i=ia),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Wx=new On,Ky=new hh(1,1),Xx=new ih,Yx=new Im,qx=new lh,Jy=[],jy=[],Qy=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function la(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Jy[r];if(s===void 0&&(s=new Float32Array(r),Jy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Th(t,e){let n=jy[e];n===void 0&&(n=new Int32Array(e),jy[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function qA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function $A(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function ZA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(Zt(n,i))return;tx.set(i),t.uniformMatrix2fv(this.addr,!1,tx),Kt(n,i)}}function KA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(Zt(n,i))return;ex.set(i),t.uniformMatrix3fv(this.addr,!1,ex),Kt(n,i)}}function JA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(Zt(n,i))return;Qy.set(i),t.uniformMatrix4fv(this.addr,!1,Qy),Kt(n,i)}}function jA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function QA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function eb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function tb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function nb(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ib(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function rb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function sb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function ob(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ky.compareFunction=kx,s=Ky):s=Wx,n.setTexture2D(e||s,r)}function ab(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Yx,r)}function lb(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qx,r)}function cb(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xx,r)}function ub(t){switch(t){case 5126:return XA;case 35664:return YA;case 35665:return qA;case 35666:return $A;case 35674:return ZA;case 35675:return KA;case 35676:return JA;case 5124:case 35670:return jA;case 35667:case 35671:return QA;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}function hb(t,e){t.uniform1fv(this.addr,e)}function db(t,e){let n=la(e,this.size,2);t.uniform2fv(this.addr,n)}function fb(t,e){let n=la(e,this.size,3);t.uniform3fv(this.addr,n)}function pb(t,e){let n=la(e,this.size,4);t.uniform4fv(this.addr,n)}function mb(t,e){let n=la(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gb(t,e){let n=la(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vb(t,e){let n=la(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _b(t,e){t.uniform1iv(this.addr,e)}function yb(t,e){t.uniform2iv(this.addr,e)}function xb(t,e){t.uniform3iv(this.addr,e)}function Mb(t,e){t.uniform4iv(this.addr,e)}function Sb(t,e){t.uniform1uiv(this.addr,e)}function wb(t,e){t.uniform2uiv(this.addr,e)}function Eb(t,e){t.uniform3uiv(this.addr,e)}function Tb(t,e){t.uniform4uiv(this.addr,e)}function Ab(t,e,n){let i=this.cache,r=e.length,s=Th(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Wx,s[o])}function bb(t,e,n){let i=this.cache,r=e.length,s=Th(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Yx,s[o])}function Cb(t,e,n){let i=this.cache,r=e.length,s=Th(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qx,s[o])}function Rb(t,e,n){let i=this.cache,r=e.length,s=Th(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Xx,s[o])}function Pb(t){switch(t){case 5126:return hb;case 35664:return db;case 35665:return fb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return vb;case 5124:case 35670:return _b;case 35667:case 35671:return yb;case 35668:case 35672:return xb;case 35669:case 35673:return Mb;case 5125:return Sb;case 36294:return wb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Rb}}var Dm=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ub(n.type)}},Um=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Pb(n.type)}},Fm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Op=/(\w+)(\])?(\[|\.)?/g;function nx(t,e){t.seq.push(e),t.map[e.id]=e}function Ib(t,e,n){let i=t.name,r=i.length;for(Op.lastIndex=0;;){let s=Op.exec(i),o=Op.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nx(n,c===void 0?new Dm(a,t,e):new Um(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Fm(a),nx(n,f)),n=f}}}var Qo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Ib(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function ix(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Lb=37297,Nb=0;function Db(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Ub(t){let e=ut.getPrimaries(ut.workingColorSpace),n=ut.getPrimaries(t),i;switch(e===n?i="":e===eh&&n===Qu?i="LinearDisplayP3ToLinearSRGB":e===Qu&&n===eh&&(i="LinearSRGBToLinearDisplayP3"),t){case es:case Eh:return[i,"LinearTransferOETF"];case ln:case mg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function rx(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Db(t.getShaderSource(e),o)}else return r}function Fb(t,e){let n=Ub(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ob(t,e){let n;switch(e){case q1:n="Linear";break;case $1:n="Reinhard";break;case Z1:n="Cineon";break;case ag:n="ACESFilmic";break;case J1:n="AgX";break;case j1:n="Neutral";break;case K1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Uu=new N;function kb(){ut.getLuminanceCoefficients(Uu);let t=Uu.x.toFixed(4),e=Uu.y.toFixed(4),n=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function Bb(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Vb(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function wl(t){return t!==""}function sx(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ox(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Om(t){return t.replace(Hb,Wb)}var Gb=new Map;function Wb(t,e){let n=Ge[e];if(n===void 0){let i=Gb.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Om(n)}var Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(t){return t.replace(Xb,Yb)}function Yb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Tx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===A1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function $b(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case wh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function Kb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ax:e="ENVMAP_BLENDING_MULTIPLY";break;case X1:e="ENVMAP_BLENDING_MIX";break;case Y1:e="ENVMAP_BLENDING_ADD";break}return e}function Jb(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function jb(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=qb(n),c=$b(n),u=Zb(n),f=Kb(n),d=Jb(n),m=zb(n),v=Bb(s),x=r.createProgram(),p,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wl).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wl).join(`
`),h.length>0&&(h+=`
`)):(p=[lx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),h=[lx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$r?"#define TONE_MAPPING":"",n.toneMapping!==$r?Ge.tonemapping_pars_fragment:"",n.toneMapping!==$r?Ob("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Fb("linearToOutputTexel",n.outputColorSpace),kb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),o=Om(o),o=sx(o,n),o=ox(o,n),a=Om(a),a=sx(a,n),a=ox(a,n),o=ax(o),a=ax(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===Ty?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ty?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let y=_+p+o,M=_+h+a,C=ix(r,r.VERTEX_SHADER,y),A=ix(r,r.FRAGMENT_SHADER,M);r.attachShader(x,C),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(w){if(t.debug.checkShaderErrors){let L=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(C).trim(),z=r.getShaderInfoLog(A).trim(),K=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,A);else{let se=rx(r,C,"vertex"),W=rx(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+se+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||z==="")&&(X=!1);X&&(w.diagnostics={runnable:K,programLog:L,vertexShader:{log:O,prefix:p},fragmentShader:{log:z,prefix:h}})}r.deleteShader(C),r.deleteShader(A),R=new Qo(r,x),G=Vb(r,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let G;this.getAttributes=function(){return G===void 0&&T(this),G};let g=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(x,Lb)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}var Qb=0,km=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new zm(e),n.set(e,i)),i}},zm=class{constructor(e){this.id=Qb++,this.code=e,this.usedTimes=0}};function e2(t,e,n,i,r,s,o){let a=new rh,l=new km,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,v=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function h(g,w,L,O,z){let K=O.fog,X=z.geometry,se=g.isMeshStandardMaterial?O.environment:null,W=(g.isMeshStandardMaterial?n:e).get(g.envMap||se),ge=W&&W.mapping===wh?W.image.height:null,ve=x[g.type];g.precision!==null&&(v=r.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));let ee=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qe=ee!==void 0?ee.length:0,ot=0;X.morphAttributes.position!==void 0&&(ot=1),X.morphAttributes.normal!==void 0&&(ot=2),X.morphAttributes.color!==void 0&&(ot=3);let Z,ne,we,ye;if(ve){let bn=Vi[ve];Z=bn.vertexShader,ne=bn.fragmentShader}else Z=g.vertexShader,ne=g.fragmentShader,l.update(g),we=l.getVertexShaderID(g),ye=l.getFragmentShaderID(g);let Be=t.getRenderTarget(),Ce=z.isInstancedMesh===!0,$e=z.isBatchedMesh===!0,et=!!g.map,Re=!!g.matcap,I=!!W,nn=!!g.aoMap,Je=!!g.lightMap,Xe=!!g.bumpMap,Le=!!g.normalMap,dt=!!g.displacementMap,Oe=!!g.emissiveMap,b=!!g.metalnessMap,S=!!g.roughnessMap,k=g.anisotropy>0,$=g.clearcoat>0,j=g.dispersion>0,q=g.iridescence>0,me=g.sheen>0,ae=g.transmission>0,xe=k&&!!g.anisotropyMap,Ye=$&&!!g.clearcoatMap,ie=$&&!!g.clearcoatNormalMap,Se=$&&!!g.clearcoatRoughnessMap,De=q&&!!g.iridescenceMap,Ne=q&&!!g.iridescenceThicknessMap,_e=me&&!!g.sheenColorMap,Ze=me&&!!g.sheenRoughnessMap,ke=!!g.specularMap,ft=!!g.specularColorMap,D=!!g.specularIntensityMap,ue=ae&&!!g.transmissionMap,Y=ae&&!!g.thicknessMap,J=!!g.gradientMap,he=!!g.alphaMap,pe=g.alphaTest>0,je=!!g.alphaHash,Ct=!!g.extensions,un=$r;g.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(un=t.toneMapping);let tt={shaderID:ve,shaderType:g.type,shaderName:g.name,vertexShader:Z,fragmentShader:ne,defines:g.defines,customVertexShaderID:we,customFragmentShaderID:ye,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:$e,batchingColor:$e&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Be===null?t.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:es,alphaToCoverage:!!g.alphaToCoverage,map:et,matcap:Re,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:ge,aoMap:nn,lightMap:Je,bumpMap:Xe,normalMap:Le,displacementMap:m&&dt,emissiveMap:Oe,normalMapObjectSpace:Le&&g.normalMapType===nw,normalMapTangentSpace:Le&&g.normalMapType===Ox,metalnessMap:b,roughnessMap:S,anisotropy:k,anisotropyMap:xe,clearcoat:$,clearcoatMap:Ye,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:j,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:Ne,sheen:me,sheenColorMap:_e,sheenRoughnessMap:Ze,specularMap:ke,specularColorMap:ft,specularIntensityMap:D,transmission:ae,transmissionMap:ue,thicknessMap:Y,gradientMap:J,opaque:g.transparent===!1&&g.blending===Ko&&g.alphaToCoverage===!1,alphaMap:he,alphaTest:pe,alphaHash:je,combine:g.combine,mapUv:et&&p(g.map.channel),aoMapUv:nn&&p(g.aoMap.channel),lightMapUv:Je&&p(g.lightMap.channel),bumpMapUv:Xe&&p(g.bumpMap.channel),normalMapUv:Le&&p(g.normalMap.channel),displacementMapUv:dt&&p(g.displacementMap.channel),emissiveMapUv:Oe&&p(g.emissiveMap.channel),metalnessMapUv:b&&p(g.metalnessMap.channel),roughnessMapUv:S&&p(g.roughnessMap.channel),anisotropyMapUv:xe&&p(g.anisotropyMap.channel),clearcoatMapUv:Ye&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&p(g.sheenRoughnessMap.channel),specularMapUv:ke&&p(g.specularMap.channel),specularColorMapUv:ft&&p(g.specularColorMap.channel),specularIntensityMapUv:D&&p(g.specularIntensityMap.channel),transmissionMapUv:ue&&p(g.transmissionMap.channel),thicknessMapUv:Y&&p(g.thicknessMap.channel),alphaMapUv:he&&p(g.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Le||k),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(et||he),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:un,decodeVideoTexture:et&&g.map.isVideoTexture===!0&&ut.getTransfer(g.map.colorSpace)===Tt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ui,flipSided:g.side===Xn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ct&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&g.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function _(g){let w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(let L in g.defines)w.push(L),w.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(y(w,g),M(w,g),w.push(t.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function y(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapCubeUVHeight),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.morphAttributeCount),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function M(g,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),g.push(a.mask)}function C(g){let w=x[g.type],L;if(w){let O=Vi[w];L=Ww.clone(O.uniforms)}else L=g.uniforms;return L}function A(g,w){let L;for(let O=0,z=u.length;O<z;O++){let K=u[O];if(K.cacheKey===w){L=K,++L.usedTimes;break}}return L===void 0&&(L=new jb(t,w,g,s),u.push(L)),L}function T(g){if(--g.usedTimes===0){let w=u.indexOf(g);u[w]=u[u.length-1],u.pop(),g.destroy()}}function R(g){l.remove(g)}function G(){l.dispose()}return{getParameters:h,getProgramCacheKey:_,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:G}}function t2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function n2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ux(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,v,x,p){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:p},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=x,h.group=p),e++,h}function a(f,d,m,v,x,p){let h=o(f,d,m,v,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(f,d,m,v,x,p){let h=o(f,d,m,v,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||n2),i.length>1&&i.sort(d||cx),r.length>1&&r.sort(d||cx)}function u(){for(let f=e,d=t.length;f<d;f++){let m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function i2(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new ux,t.set(i,[o])):r>=s.length?(o=new ux,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function r2(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new ze};break;case"SpotLight":n={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function s2(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var o2=0;function a2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function l2(t){let e=new r2,n=s2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let r=new N,s=new ht,o=new ht;function a(c){let u=0,f=0,d=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let m=0,v=0,x=0,p=0,h=0,_=0,y=0,M=0,C=0,A=0,T=0;c.sort(a2);for(let G=0,g=c.length;G<g;G++){let w=c[G],L=w.color,O=w.intensity,z=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=L.r*O,f+=L.g*O,d+=L.b*O;else if(w.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(w.sh.coefficients[X],O);T++}else if(w.isDirectionalLight){let X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let se=w.shadow,W=n.get(w);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=w.shadow.matrix,_++}i.directional[m]=X,m++}else if(w.isSpotLight){let X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(L).multiplyScalar(O),X.distance=z,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,i.spot[x]=X;let se=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,se.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[x]=se.matrix,w.castShadow){let W=n.get(w);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=K,M++}x++}else if(w.isRectAreaLight){let X=e.get(w);X.color.copy(L).multiplyScalar(O),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=X,p++}else if(w.isPointLight){let X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){let se=w.shadow,W=n.get(w);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,W.shadowCameraNear=se.camera.near,W.shadowCameraFar=se.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=w.shadow.matrix,y++}i.point[v]=X,v++}else if(w.isHemisphereLight){let X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(O),X.groundColor.copy(w.groundColor).multiplyScalar(O),i.hemi[h]=X,h++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==x||R.rectAreaLength!==p||R.hemiLength!==h||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==M||R.numSpotMaps!==C||R.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=m,R.pointLength=v,R.spotLength=x,R.rectAreaLength=p,R.hemiLength=h,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=M,R.numSpotMaps=C,R.numLightProbes=T,i.version=o2++)}function l(c,u){let f=0,d=0,m=0,v=0,x=0,p=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){let y=c[h];if(y.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(y.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function hx(t){let e=new l2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function c2(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new hx(t),e.set(r,[a])):s>=o.length?(a=new hx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var Bm=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ew,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vm=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},u2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d2(t,e,n){let i=new Il,r=new He,s=new He,o=new gt,a=new Bm({depthPacking:tw}),l=new Vm,c={},u=n.maxTextureSize,f={[Zr]:Xn,[Xn]:Zr,[ui]:ui},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:u2,fragmentShader:h2}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let v=new Bt;v.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tx;let h=this.type;this.render=function(A,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let G=t.getRenderTarget(),g=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),L=t.state;L.setBlending(qr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=h!==lr&&this.type===lr,z=h===lr&&this.type!==lr;for(let K=0,X=A.length;K<X;K++){let se=A[K],W=se.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ge=W.getFrameExtents();if(r.multiply(ge),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,W.mapSize.y=s.y)),W.map===null||O===!0||z===!0){let ee=this.type!==lr?{minFilter:Wn,magFilter:Wn}:{};W.map!==null&&W.map.dispose(),W.map=new fr(r.x,r.y,ee),W.map.texture.name=se.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();let ve=W.getViewportCount();for(let ee=0;ee<ve;ee++){let Qe=W.getViewport(ee);o.set(s.x*Qe.x,s.y*Qe.y,s.x*Qe.z,s.y*Qe.w),L.viewport(o),W.updateMatrices(se,ee),i=W.getFrustum(),M(T,R,W.camera,se,this.type)}W.isPointLightShadow!==!0&&this.type===lr&&_(W,R),W.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(G,g,w)};function _(A,T){let R=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,R,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,R,m,x,null)}function y(A,T,R,G){let g=null,w=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)g=w;else if(g=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let L=g.uuid,O=T.uuid,z=c[L];z===void 0&&(z={},c[L]=z);let K=z[O];K===void 0&&(K=g.clone(),z[O]=K,T.addEventListener("dispose",C)),g=K}if(g.visible=T.visible,g.wireframe=T.wireframe,G===lr?g.side=T.shadowSide!==null?T.shadowSide:T.side:g.side=T.shadowSide!==null?T.shadowSide:f[T.side],g.alphaMap=T.alphaMap,g.alphaTest=T.alphaTest,g.map=T.map,g.clipShadows=T.clipShadows,g.clippingPlanes=T.clippingPlanes,g.clipIntersection=T.clipIntersection,g.displacementMap=T.displacementMap,g.displacementScale=T.displacementScale,g.displacementBias=T.displacementBias,g.wireframeLinewidth=T.wireframeLinewidth,g.linewidth=T.linewidth,R.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let L=t.properties.get(g);L.light=R}return g}function M(A,T,R,G,g){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===lr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let O=e.update(A),z=A.material;if(Array.isArray(z)){let K=O.groups;for(let X=0,se=K.length;X<se;X++){let W=K[X],ge=z[W.materialIndex];if(ge&&ge.visible){let ve=y(A,ge,G,g);A.onBeforeShadow(t,A,T,R,O,ve,W),t.renderBufferDirect(R,null,O,ve,A,W),A.onAfterShadow(t,A,T,R,O,ve,W)}}}else if(z.visible){let K=y(A,z,G,g);A.onBeforeShadow(t,A,T,R,O,K,null),t.renderBufferDirect(R,null,O,K,A,null),A.onAfterShadow(t,A,T,R,O,K,null)}}let L=A.children;for(let O=0,z=L.length;O<z;O++)M(L[O],T,R,G,g)}function C(A){A.target.removeEventListener("dispose",C);for(let R in c){let G=c[R],g=A.target.uuid;g in G&&(G[g].dispose(),delete G[g])}}}var f2={[Wp]:Xp,[Yp]:Zp,[qp]:Kp,[ea]:$p,[Xp]:Wp,[Zp]:Yp,[Kp]:qp,[$p]:ea};function p2(t){function e(){let D=!1,ue=new gt,Y=null,J=new gt(0,0,0,0);return{setMask:function(he){Y!==he&&!D&&(t.colorMask(he,he,he,he),Y=he)},setLocked:function(he){D=he},setClear:function(he,pe,je,Ct,un){un===!0&&(he*=Ct,pe*=Ct,je*=Ct),ue.set(he,pe,je,Ct),J.equals(ue)===!1&&(t.clearColor(he,pe,je,Ct),J.copy(ue))},reset:function(){D=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,Y=null,J=null,he=null;return{setReversed:function(pe){ue=pe},setTest:function(pe){pe?we(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(pe){Y!==pe&&!D&&(t.depthMask(pe),Y=pe)},setFunc:function(pe){if(ue&&(pe=f2[pe]),J!==pe){switch(pe){case Wp:t.depthFunc(t.NEVER);break;case Xp:t.depthFunc(t.ALWAYS);break;case Yp:t.depthFunc(t.LESS);break;case ea:t.depthFunc(t.LEQUAL);break;case qp:t.depthFunc(t.EQUAL);break;case $p:t.depthFunc(t.GEQUAL);break;case Zp:t.depthFunc(t.GREATER);break;case Kp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=pe}},setLocked:function(pe){D=pe},setClear:function(pe){he!==pe&&(t.clearDepth(pe),he=pe)},reset:function(){D=!1,Y=null,J=null,he=null}}}function i(){let D=!1,ue=null,Y=null,J=null,he=null,pe=null,je=null,Ct=null,un=null;return{setTest:function(tt){D||(tt?we(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!D&&(t.stencilMask(tt),ue=tt)},setFunc:function(tt,bn,Cn){(Y!==tt||J!==bn||he!==Cn)&&(t.stencilFunc(tt,bn,Cn),Y=tt,J=bn,he=Cn)},setOp:function(tt,bn,Cn){(pe!==tt||je!==bn||Ct!==Cn)&&(t.stencilOp(tt,bn,Cn),pe=tt,je=bn,Ct=Cn)},setLocked:function(tt){D=tt},setClear:function(tt){un!==tt&&(t.clearStencil(tt),un=tt)},reset:function(){D=!1,ue=null,Y=null,J=null,he=null,pe=null,je=null,Ct=null,un=null}}}let r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap,c={},u={},f=new WeakMap,d=[],m=null,v=!1,x=null,p=null,h=null,_=null,y=null,M=null,C=null,A=new ze(0,0,0),T=0,R=!1,G=null,g=null,w=null,L=null,O=null,z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,X=0,se=t.getParameter(t.VERSION);se.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(se)[1]),K=X>=1):se.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),K=X>=2);let W=null,ge={},ve=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),Qe=new gt().fromArray(ve),ot=new gt().fromArray(ee);function Z(D,ue,Y,J){let he=new Uint8Array(4),pe=t.createTexture();t.bindTexture(D,pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<Y;je++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return pe}let ne={};ne[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),we(t.DEPTH_TEST),s.setFunc(ea),Je(!1),Xe(_y),we(t.CULL_FACE),I(qr);function we(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ye(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Be(D,ue){return u[D]!==ue?(t.bindFramebuffer(D,ue),u[D]=ue,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ce(D,ue){let Y=d,J=!1;if(D){Y=f.get(ue),Y===void 0&&(Y=[],f.set(ue,Y));let he=D.textures;if(Y.length!==he.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,je=he.length;pe<je;pe++)Y[pe]=t.COLOR_ATTACHMENT0+pe;Y.length=he.length,J=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,J=!0);J&&t.drawBuffers(Y)}function $e(D){return m!==D?(t.useProgram(D),m=D,!0):!1}let et={[Is]:t.FUNC_ADD,[C1]:t.FUNC_SUBTRACT,[R1]:t.FUNC_REVERSE_SUBTRACT};et[P1]=t.MIN,et[I1]=t.MAX;let Re={[L1]:t.ZERO,[N1]:t.ONE,[D1]:t.SRC_COLOR,[Hp]:t.SRC_ALPHA,[B1]:t.SRC_ALPHA_SATURATE,[k1]:t.DST_COLOR,[F1]:t.DST_ALPHA,[U1]:t.ONE_MINUS_SRC_COLOR,[Gp]:t.ONE_MINUS_SRC_ALPHA,[z1]:t.ONE_MINUS_DST_COLOR,[O1]:t.ONE_MINUS_DST_ALPHA,[V1]:t.CONSTANT_COLOR,[H1]:t.ONE_MINUS_CONSTANT_COLOR,[G1]:t.CONSTANT_ALPHA,[W1]:t.ONE_MINUS_CONSTANT_ALPHA};function I(D,ue,Y,J,he,pe,je,Ct,un,tt){if(D===qr){v===!0&&(ye(t.BLEND),v=!1);return}if(v===!1&&(we(t.BLEND),v=!0),D!==b1){if(D!==x||tt!==R){if((p!==Is||y!==Is)&&(t.blendEquation(t.FUNC_ADD),p=Is,y=Is),tt)switch(D){case Ko:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ut:t.blendFunc(t.ONE,t.ONE);break;case yy:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xy:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ko:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ut:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yy:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xy:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,_=null,M=null,C=null,A.set(0,0,0),T=0,x=D,R=tt}return}he=he||ue,pe=pe||Y,je=je||J,(ue!==p||he!==y)&&(t.blendEquationSeparate(et[ue],et[he]),p=ue,y=he),(Y!==h||J!==_||pe!==M||je!==C)&&(t.blendFuncSeparate(Re[Y],Re[J],Re[pe],Re[je]),h=Y,_=J,M=pe,C=je),(Ct.equals(A)===!1||un!==T)&&(t.blendColor(Ct.r,Ct.g,Ct.b,un),A.copy(Ct),T=un),x=D,R=!1}function nn(D,ue){D.side===ui?ye(t.CULL_FACE):we(t.CULL_FACE);let Y=D.side===Xn;ue&&(Y=!Y),Je(Y),D.blending===Ko&&D.transparent===!1?I(qr):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(D){G!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),G=D)}function Xe(D){D!==E1?(we(t.CULL_FACE),D!==g&&(D===_y?t.cullFace(t.BACK):D===T1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),g=D}function Le(D){D!==w&&(K&&t.lineWidth(D),w=D)}function dt(D,ue,Y){D?(we(t.POLYGON_OFFSET_FILL),(L!==ue||O!==Y)&&(t.polygonOffset(ue,Y),L=ue,O=Y)):ye(t.POLYGON_OFFSET_FILL)}function Oe(D){D?we(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function b(D){D===void 0&&(D=t.TEXTURE0+z-1),W!==D&&(t.activeTexture(D),W=D)}function S(D,ue,Y){Y===void 0&&(W===null?Y=t.TEXTURE0+z-1:Y=W);let J=ge[Y];J===void 0&&(J={type:void 0,texture:void 0},ge[Y]=J),(J.type!==D||J.texture!==ue)&&(W!==Y&&(t.activeTexture(Y),W=Y),t.bindTexture(D,ue||ne[D]),J.type=D,J.texture=ue)}function k(){let D=ge[W];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){Qe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Qe.copy(D))}function _e(D){ot.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function Ze(D,ue){let Y=l.get(ue);Y===void 0&&(Y=new WeakMap,l.set(ue,Y));let J=Y.get(D);J===void 0&&(J=t.getUniformBlockIndex(ue,D.name),Y.set(D,J))}function ke(D,ue){let J=l.get(ue).get(D);a.get(ue)!==J&&(t.uniformBlockBinding(ue,J,D.__bindingPointIndex),a.set(ue,J))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},W=null,ge={},u={},f=new WeakMap,d=[],m=null,v=!1,x=null,p=null,h=null,_=null,y=null,M=null,C=null,A=new ze(0,0,0),T=0,R=!1,G=null,g=null,w=null,L=null,O=null,Qe.set(0,0,t.canvas.width,t.canvas.height),ot.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:we,disable:ye,bindFramebuffer:Be,drawBuffers:Ce,useProgram:$e,setBlending:I,setMaterial:nn,setFlipSided:Je,setCullFace:Xe,setLineWidth:Le,setPolygonOffset:dt,setScissorTest:Oe,activeTexture:b,bindTexture:S,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:Se,texImage3D:De,updateUBOMapping:Ze,uniformBlockBinding:ke,texStorage2D:Ye,texStorage3D:ie,texSubImage2D:q,texSubImage3D:me,compressedTexSubImage2D:ae,compressedTexSubImage3D:xe,scissor:Ne,viewport:_e,reset:ft}}function dx(t,e,n,i){let r=m2(i);switch(n){case Ix:return t*e;case Nx:return t*e;case Dx:return t*e*2;case hg:return t*e/r.components*r.byteLength;case dg:return t*e/r.components*r.byteLength;case Ux:return t*e*2/r.components*r.byteLength;case fg:return t*e*2/r.components*r.byteLength;case Lx:return t*e*3/r.components*r.byteLength;case Ci:return t*e*4/r.components*r.byteLength;case pg:return t*e*4/r.components*r.byteLength;case Xu:case Yu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qu:case $u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nm:case rm:return Math.max(t,16)*Math.max(e,8)/4;case tm:case im:return Math.max(t,8)*Math.max(e,8)/2;case sm:case om:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case am:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cm:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case um:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hm:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dm:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mm:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gm:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _m:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ym:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zu:case Sm:case wm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Fx:case Em:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tm:case Am:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function m2(t){switch(t){case dr:case Cx:return{byteLength:1,components:1};case bl:case Rx:case Ol:return{byteLength:2,components:1};case cg:case ug:return{byteLength:2,components:4};case Us:case lg:case Hi:return{byteLength:4,components:1};case Px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function g2(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function v(b,S){return m?new OffscreenCanvas(b,S):Rl("canvas")}function x(b,S,k){let $=1,j=Oe(b);if((j.width>k||j.height>k)&&($=k/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let q=Math.floor($*j.width),me=Math.floor($*j.height);f===void 0&&(f=v(q,me));let ae=S?v(q,me):f;return ae.width=q,ae.height=me,ae.getContext("2d").drawImage(b,0,0,q,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+me+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Wn&&b.minFilter!==Ai}function h(b){t.generateMipmap(b)}function _(b,S,k,$,j=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=S;if(S===t.RED&&(k===t.FLOAT&&(q=t.R32F),k===t.HALF_FLOAT&&(q=t.R16F),k===t.UNSIGNED_BYTE&&(q=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.R8UI),k===t.UNSIGNED_SHORT&&(q=t.R16UI),k===t.UNSIGNED_INT&&(q=t.R32UI),k===t.BYTE&&(q=t.R8I),k===t.SHORT&&(q=t.R16I),k===t.INT&&(q=t.R32I)),S===t.RG&&(k===t.FLOAT&&(q=t.RG32F),k===t.HALF_FLOAT&&(q=t.RG16F),k===t.UNSIGNED_BYTE&&(q=t.RG8)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RG8UI),k===t.UNSIGNED_SHORT&&(q=t.RG16UI),k===t.UNSIGNED_INT&&(q=t.RG32UI),k===t.BYTE&&(q=t.RG8I),k===t.SHORT&&(q=t.RG16I),k===t.INT&&(q=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RGB8UI),k===t.UNSIGNED_SHORT&&(q=t.RGB16UI),k===t.UNSIGNED_INT&&(q=t.RGB32UI),k===t.BYTE&&(q=t.RGB8I),k===t.SHORT&&(q=t.RGB16I),k===t.INT&&(q=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),k===t.UNSIGNED_INT&&(q=t.RGBA32UI),k===t.BYTE&&(q=t.RGBA8I),k===t.SHORT&&(q=t.RGBA16I),k===t.INT&&(q=t.RGBA32I)),S===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),S===t.RGBA){let me=j?ju:ut.getTransfer($);k===t.FLOAT&&(q=t.RGBA32F),k===t.HALF_FLOAT&&(q=t.RGBA16F),k===t.UNSIGNED_BYTE&&(q=me===Tt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(b,S){let k;return b?S===null||S===Us||S===ia?k=t.DEPTH24_STENCIL8:S===Hi?k=t.DEPTH32F_STENCIL8:S===bl&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Us||S===ia?k=t.DEPTH_COMPONENT24:S===Hi?k=t.DEPTH_COMPONENT32F:S===bl&&(k=t.DEPTH_COMPONENT16),k}function M(b,S){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Wn&&b.minFilter!==Ai?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function C(b){let S=b.target;S.removeEventListener("dispose",C),T(S),S.isVideoTexture&&u.delete(S)}function A(b){let S=b.target;S.removeEventListener("dispose",A),G(S)}function T(b){let S=i.get(b);if(S.__webglInit===void 0)return;let k=b.source,$=d.get(k);if($){let j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(b),Object.keys($).length===0&&d.delete(k)}i.remove(b)}function R(b){let S=i.get(b);t.deleteTexture(S.__webglTexture);let k=b.source,$=d.get(k);delete $[S.__cacheKey],o.memory.textures--}function G(b){let S=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)t.deleteFramebuffer(S.__webglFramebuffer[$][j]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=b.textures;for(let $=0,j=k.length;$<j;$++){let q=i.get(k[$]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(b)}let g=0;function w(){g=0}function L(){let b=g;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),g+=1,b}function O(b){let S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function z(b,S){let k=i.get(b);if(b.isVideoTexture&&Le(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){let $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(k,b,S);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function K(b,S){let k=i.get(b);if(b.version>0&&k.__version!==b.version){ot(k,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function X(b,S){let k=i.get(b);if(b.version>0&&k.__version!==b.version){ot(k,b,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function se(b,S){let k=i.get(b);if(b.version>0&&k.__version!==b.version){Z(k,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}let W={[Qp]:t.REPEAT,[Ns]:t.CLAMP_TO_EDGE,[em]:t.MIRRORED_REPEAT},ge={[Wn]:t.NEAREST,[Q1]:t.NEAREST_MIPMAP_NEAREST,[mu]:t.NEAREST_MIPMAP_LINEAR,[Ai]:t.LINEAR,[cp]:t.LINEAR_MIPMAP_NEAREST,[Ds]:t.LINEAR_MIPMAP_LINEAR},ve={[iw]:t.NEVER,[cw]:t.ALWAYS,[rw]:t.LESS,[kx]:t.LEQUAL,[sw]:t.EQUAL,[lw]:t.GEQUAL,[ow]:t.GREATER,[aw]:t.NOTEQUAL};function ee(b,S){if(S.type===Hi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ai||S.magFilter===cp||S.magFilter===mu||S.magFilter===Ds||S.minFilter===Ai||S.minFilter===cp||S.minFilter===mu||S.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,W[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,W[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,W[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ge[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wn||S.minFilter!==mu&&S.minFilter!==Ds||S.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",C));let $=S.source,j=d.get($);j===void 0&&(j={},d.set($,j));let q=O(S);if(q!==b.__cacheKey){j[q]===void 0&&(j[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[q].usedTimes++;let me=j[b.__cacheKey];me!==void 0&&(j[b.__cacheKey].usedTimes--,me.usedTimes===0&&R(S)),b.__cacheKey=q,b.__webglTexture=j[q].texture}return k}function ot(b,S,k){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);let j=Qe(b,S),q=S.source;n.bindTexture($,b.__webglTexture,t.TEXTURE0+k);let me=i.get(q);if(q.version!==me.__version||j===!0){n.activeTexture(t.TEXTURE0+k);let ae=ut.getPrimaries(ut.workingColorSpace),xe=S.colorSpace===Xr?null:ut.getPrimaries(S.colorSpace),Ye=S.colorSpace===Xr||ae===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ie=x(S.image,!1,r.maxTextureSize);ie=dt(S,ie);let Se=s.convert(S.format,S.colorSpace),De=s.convert(S.type),Ne=_(S.internalFormat,Se,De,S.colorSpace,S.isVideoTexture);ee($,S);let _e,Ze=S.mipmaps,ke=S.isVideoTexture!==!0,ft=me.__version===void 0||j===!0,D=q.dataReady,ue=M(S,ie);if(S.isDepthTexture)Ne=y(S.format===ra,S.type),ft&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Ne,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ie.width,ie.height,0,Se,De,null));else if(S.isDataTexture)if(Ze.length>0){ke&&ft&&n.texStorage2D(t.TEXTURE_2D,ue,Ne,Ze[0].width,Ze[0].height);for(let Y=0,J=Ze.length;Y<J;Y++)_e=Ze[Y],ke?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Se,De,_e.data):n.texImage2D(t.TEXTURE_2D,Y,Ne,_e.width,_e.height,0,Se,De,_e.data);S.generateMipmaps=!1}else ke?(ft&&n.texStorage2D(t.TEXTURE_2D,ue,Ne,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Se,De,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,ie.width,ie.height,0,Se,De,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Ne,Ze[0].width,Ze[0].height,ie.depth);for(let Y=0,J=Ze.length;Y<J;Y++)if(_e=Ze[Y],S.format!==Ci)if(Se!==null)if(ke){if(D)if(S.layerUpdates.size>0){let he=dx(_e.width,_e.height,S.format,S.type);for(let pe of S.layerUpdates){let je=_e.data.subarray(pe*he/_e.data.BYTES_PER_ELEMENT,(pe+1)*he/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,pe,_e.width,_e.height,1,Se,je,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,ie.depth,Se,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ne,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,ie.depth,Se,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ne,_e.width,_e.height,ie.depth,0,Se,De,_e.data)}else{ke&&ft&&n.texStorage2D(t.TEXTURE_2D,ue,Ne,Ze[0].width,Ze[0].height);for(let Y=0,J=Ze.length;Y<J;Y++)_e=Ze[Y],S.format!==Ci?Se!==null?ke?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Se,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Se,De,_e.data):n.texImage2D(t.TEXTURE_2D,Y,Ne,_e.width,_e.height,0,Se,De,_e.data)}else if(S.isDataArrayTexture)if(ke){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Ne,ie.width,ie.height,ie.depth),D)if(S.layerUpdates.size>0){let Y=dx(ie.width,ie.height,S.format,S.type);for(let J of S.layerUpdates){let he=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,Se,De,he)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,De,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,Se,De,ie.data);else if(S.isData3DTexture)ke?(ft&&n.texStorage3D(t.TEXTURE_3D,ue,Ne,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,De,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,Se,De,ie.data);else if(S.isFramebufferTexture){if(ft)if(ke)n.texStorage2D(t.TEXTURE_2D,ue,Ne,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,Ne,Y,J,0,Se,De,null),Y>>=1,J>>=1}}else if(Ze.length>0){if(ke&&ft){let Y=Oe(Ze[0]);n.texStorage2D(t.TEXTURE_2D,ue,Ne,Y.width,Y.height)}for(let Y=0,J=Ze.length;Y<J;Y++)_e=Ze[Y],ke?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se,De,_e):n.texImage2D(t.TEXTURE_2D,Y,Ne,Se,De,_e);S.generateMipmaps=!1}else if(ke){if(ft){let Y=Oe(ie);n.texStorage2D(t.TEXTURE_2D,ue,Ne,Y.width,Y.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,De,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Se,De,ie);p(S)&&h($),me.__version=q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Z(b,S,k){if(S.image.length!==6)return;let $=Qe(b,S),j=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+k);let q=i.get(j);if(j.version!==q.__version||$===!0){n.activeTexture(t.TEXTURE0+k);let me=ut.getPrimaries(ut.workingColorSpace),ae=S.colorSpace===Xr?null:ut.getPrimaries(S.colorSpace),xe=S.colorSpace===Xr||me===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let J=0;J<6;J++)!Ye&&!ie?Se[J]=x(S.image[J],!0,r.maxCubemapSize):Se[J]=ie?S.image[J].image:S.image[J],Se[J]=dt(S,Se[J]);let De=Se[0],Ne=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),Ze=_(S.internalFormat,Ne,_e,S.colorSpace),ke=S.isVideoTexture!==!0,ft=q.__version===void 0||$===!0,D=j.dataReady,ue=M(S,De);ee(t.TEXTURE_CUBE_MAP,S);let Y;if(Ye){ke&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ze,De.width,De.height);for(let J=0;J<6;J++){Y=Se[J].mipmaps;for(let he=0;he<Y.length;he++){let pe=Y[he];S.format!==Ci?Ne!==null?ke?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,pe.width,pe.height,Ne,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,pe.width,pe.height,Ne,_e,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ze,pe.width,pe.height,0,Ne,_e,pe.data)}}}else{if(Y=S.mipmaps,ke&&ft){Y.length>0&&ue++;let J=Oe(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ze,J.width,J.height)}for(let J=0;J<6;J++)if(ie){ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se[J].width,Se[J].height,Ne,_e,Se[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,Se[J].width,Se[J].height,0,Ne,_e,Se[J].data);for(let he=0;he<Y.length;he++){let je=Y[he].image[J].image;ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,je.width,je.height,Ne,_e,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ze,je.width,je.height,0,Ne,_e,je.data)}}else{ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,_e,Se[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,Ne,_e,Se[J]);for(let he=0;he<Y.length;he++){let pe=Y[he];ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ne,_e,pe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ze,Ne,_e,pe.image[J])}}}p(S)&&h(t.TEXTURE_CUBE_MAP),q.__version=j.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ne(b,S,k,$,j,q){let me=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),xe=_(k.internalFormat,me,ae,k.colorSpace);if(!i.get(S).__hasExternalTextures){let ie=Math.max(1,S.width>>q),Se=Math.max(1,S.height>>q);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,q,xe,ie,Se,S.depth,0,me,ae,null):n.texImage2D(j,q,xe,ie,Se,0,me,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,j,i.get(k).__webglTexture,0,Je(S)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,j,i.get(k).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(b,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer){let $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=y(S.stencilBuffer,j),me=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Je(S);Xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,q,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,q,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,q,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,b)}else{let $=S.textures;for(let j=0;j<$.length;j++){let q=$[j],me=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),xe=_(q.internalFormat,me,ae,q.colorSpace),Ye=Je(S);k&&Xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,xe,S.width,S.height):Xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,xe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,xe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let $=i.get(S.depthTexture).__webglTexture,j=Je(S);if(S.depthTexture.format===Jo)Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(S.depthTexture.format===ra)Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Be(b){let S=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){let $=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ye(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),we(S.__webglDepthbuffer[$],b,!1);else{let j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),we(S.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,j)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(b,S,k){let $=i.get(b);S!==void 0&&ne($.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Be(b)}function $e(b){let S=b.texture,k=i.get(b),$=i.get(S);b.addEventListener("dispose",A);let j=b.textures,q=b.isWebGLCubeRenderTarget===!0,me=j.length>1;if(me||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let xe=0;xe<S.mipmaps.length;xe++)k.__webglFramebuffer[ae][xe]=t.createFramebuffer()}else k.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)k.__webglFramebuffer[ae]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(me)for(let ae=0,xe=j.length;ae<xe;ae++){let Ye=i.get(j[ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Xe(b)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){let xe=j[ae];k.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);let Ye=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),Se=_(xe.internalFormat,Ye,ie,xe.colorSpace,b.isXRRenderTarget===!0),De=Je(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Se,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),we(k.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),ee(t.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ne(k.__webglFramebuffer[ae][xe],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe);else ne(k.__webglFramebuffer[ae],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(S)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let ae=0,xe=j.length;ae<xe;ae++){let Ye=j[ae],ie=i.get(Ye);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ee(t.TEXTURE_2D,Ye),ne(k.__webglFramebuffer,b,Ye,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),p(Ye)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,$.__webglTexture),ee(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ne(k.__webglFramebuffer[xe],b,S,t.COLOR_ATTACHMENT0,ae,xe);else ne(k.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,ae,0);p(S)&&h(ae),n.unbindTexture()}b.depthBuffer&&Be(b)}function et(b){let S=b.textures;for(let k=0,$=S.length;k<$;k++){let j=S[k];if(p(j)){let q=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(j).__webglTexture;n.bindTexture(q,me),h(q),n.unbindTexture()}}}let Re=[],I=[];function nn(b){if(b.samples>0){if(Xe(b)===!1){let S=b.textures,k=b.width,$=b.height,j=t.COLOR_BUFFER_BIT,q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(b),ae=S.length>1;if(ae)for(let xe=0;xe<S.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let Ye=i.get(S[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,k,$,0,0,k,$,j,t.NEAREST),l===!0&&(Re.length=0,I.length=0,Re.push(t.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Re.push(q),I.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let xe=0;xe<S.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let Ye=i.get(S[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let S=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Je(b){return Math.min(r.maxSamples,b.samples)}function Xe(b){let S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(b){let S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function dt(b,S){let k=b.colorSpace,$=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==es&&k!==Xr&&(ut.getTransfer(k)===Tt?($!==Ci||j!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Oe(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=w,this.setTexture2D=z,this.setTexture2DArray=K,this.setTexture3D=X,this.setTextureCube=se,this.rebindTextures=Ce,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Xe}function v2(t,e){function n(i,r=Xr){let s,o=ut.getTransfer(r);if(i===dr)return t.UNSIGNED_BYTE;if(i===cg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ug)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Px)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Cx)return t.BYTE;if(i===Rx)return t.SHORT;if(i===bl)return t.UNSIGNED_SHORT;if(i===lg)return t.INT;if(i===Us)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===Ol)return t.HALF_FLOAT;if(i===Ix)return t.ALPHA;if(i===Lx)return t.RGB;if(i===Ci)return t.RGBA;if(i===Nx)return t.LUMINANCE;if(i===Dx)return t.LUMINANCE_ALPHA;if(i===Jo)return t.DEPTH_COMPONENT;if(i===ra)return t.DEPTH_STENCIL;if(i===hg)return t.RED;if(i===dg)return t.RED_INTEGER;if(i===Ux)return t.RG;if(i===fg)return t.RG_INTEGER;if(i===pg)return t.RGBA_INTEGER;if(i===Xu||i===Yu||i===qu||i===$u)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$u)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tm||i===nm||i===im||i===rm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===im)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sm||i===om||i===am)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sm||i===om)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===am)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lm||i===cm||i===um||i===hm||i===dm||i===fm||i===pm||i===mm||i===gm||i===vm||i===_m||i===ym||i===xm||i===Mm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===um)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_m)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ym)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mm)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zu||i===Sm||i===wm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zu)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fx||i===Em||i===Tm||i===Am)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Em)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Am)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Hm=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mn=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},_2={type:"move"},Al=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=n.getJointPose(x,i),h=this._getHandJoint(c,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},y2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new On,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Xi({vertexShader:y2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pe(new wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wm=class extends Kr{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null,x=new Gm,p=n.getContextAttributes(),h=null,_=null,y=[],M=[],C=new He,A=null,T=new xn;T.layers.enable(1),T.viewport=new gt;let R=new xn;R.layers.enable(2),R.viewport=new gt;let G=[T,R],g=new Hm;g.layers.enable(1),g.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=y[Z];return ne===void 0&&(ne=new Al,y[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=y[Z];return ne===void 0&&(ne=new Al,y[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=y[Z];return ne===void 0&&(ne=new Al,y[Z]=ne),ne.getHandSpace()};function O(Z){let ne=M.indexOf(Z.inputSource);if(ne===-1)return;let we=y[ne];we!==void 0&&(we.update(Z.inputSource,Z.frame,c||o),we.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",K);for(let Z=0;Z<y.length;Z++){let ne=M[Z];ne!==null&&(M[Z]=null,y[Z].disconnect(ne))}w=null,L=null,x.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,_=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new fr(m.framebufferWidth,m.framebufferHeight,{format:Ci,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,we=null,ye=null;p.depth&&(ye=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=p.stencil?ra:Jo,we=p.stencil?ia:Us);let Be={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new fr(d.textureWidth,d.textureHeight,{format:Ci,type:dr,depthTexture:new hh(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(Z){for(let ne=0;ne<Z.removed.length;ne++){let we=Z.removed[ne],ye=M.indexOf(we);ye>=0&&(M[ye]=null,y[ye].disconnect(we))}for(let ne=0;ne<Z.added.length;ne++){let we=Z.added[ne],ye=M.indexOf(we);if(ye===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=M.length){M.push(we),ye=Ce;break}else if(M[Ce]===null){M[Ce]=we,ye=Ce;break}if(ye===-1)break}let Be=y[ye];Be&&Be.connect(we)}}let X=new N,se=new N;function W(Z,ne,we){X.setFromMatrixPosition(ne.matrixWorld),se.setFromMatrixPosition(we.matrixWorld);let ye=X.distanceTo(se),Be=ne.projectionMatrix.elements,Ce=we.projectionMatrix.elements,$e=Be[14]/(Be[10]-1),et=Be[14]/(Be[10]+1),Re=(Be[9]+1)/Be[5],I=(Be[9]-1)/Be[5],nn=(Be[8]-1)/Be[0],Je=(Ce[8]+1)/Ce[0],Xe=$e*nn,Le=$e*Je,dt=ye/(-nn+Je),Oe=dt*-nn;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Oe),Z.translateZ(dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Be[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let b=$e+dt,S=et+dt,k=Xe-Oe,$=Le+(ye-Oe),j=Re*et/S*b,q=I*et/S*b;Z.projectionMatrix.makePerspective(k,$,j,q,b,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ge(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ne=Z.near,we=Z.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(we=x.depthFar)),g.near=R.near=T.near=ne,g.far=R.far=T.far=we,(w!==g.near||L!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),w=g.near,L=g.far);let ye=Z.parent,Be=g.cameras;ge(g,ye);for(let Ce=0;Ce<Be.length;Ce++)ge(Be[Ce],ye);Be.length===2?W(g,T,R):g.projectionMatrix.copy(T.projectionMatrix),ve(Z,g,ye)};function ve(Z,ne,we){we===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Cl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let ee=null;function Qe(Z,ne){if(u=ne.getViewerPose(c||o),v=ne,u!==null){let we=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ye=!1;we.length!==g.cameras.length&&(g.cameras.length=0,ye=!0);for(let Ce=0;Ce<we.length;Ce++){let $e=we[Ce],et=null;if(m!==null)et=m.getViewport($e);else{let I=f.getViewSubImage(d,$e);et=I.viewport,Ce===0&&(e.setRenderTargetTextures(_,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(_))}let Re=G[Ce];Re===void 0&&(Re=new xn,Re.layers.enable(Ce),Re.viewport=new gt,G[Ce]=Re),Re.matrix.fromArray($e.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray($e.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(et.x,et.y,et.width,et.height),Ce===0&&(g.matrix.copy(Re.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ye===!0&&g.cameras.push(Re)}let Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){let Ce=f.getDepthInformation(we[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,r.renderState)}}for(let we=0;we<y.length;we++){let ye=M[we],Be=y[we];ye!==null&&Be!==void 0&&Be.update(ye,ne,c||o)}ee&&ee(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}let ot=new Gx;ot.setAnimationLoop(Qe),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}},Rs=new Gi,M2=new ht;function S2(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Hx(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,_,y,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,M)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,_,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Xn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Xn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _=e.get(h),y=_.envMap,M=_.envMapRotation;y&&(p.envMap.value=y,Rs.copy(M),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),p.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(Rs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,_,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=y*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){let _=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w2(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let M=y.program;i.uniformBlockBinding(_,M)}function c(_,y){let M=r[_.id];M===void 0&&(v(_),M=u(_),r[_.id]=M,_.addEventListener("dispose",p));let C=y.program;i.updateUBOMapping(_,C);let A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function u(_){let y=f();_.__bindingPointIndex=y;let M=t.createBuffer(),C=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=r[_.id],M=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,T=M.length;A<T;A++){let R=Array.isArray(M[A])?M[A]:[M[A]];for(let G=0,g=R.length;G<g;G++){let w=R[G];if(m(w,A,G,C)===!0){let L=w.__offset,O=Array.isArray(w.value)?w.value:[w.value],z=0;for(let K=0;K<O.length;K++){let X=O[K],se=x(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,L+z,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,z),z+=se.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,y,M,C){let A=_.value,T=y+"_"+M;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{let R=C[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function v(_){let y=_.uniforms,M=0,C=16;for(let T=0,R=y.length;T<R;T++){let G=Array.isArray(y[T])?y[T]:[y[T]];for(let g=0,w=G.length;g<w;g++){let L=G[g],O=Array.isArray(L.value)?L.value:[L.value];for(let z=0,K=O.length;z<K;z++){let X=O[z],se=x(X),W=M%C,ge=W%se.boundary,ve=W+ge;M+=ge,ve!==0&&C-ve<se.storage&&(M+=C-ve),L.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=se.storage}}}let A=M%C;return A>0&&(M+=C-A),_.__size=M,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){let y=_.target;y.removeEventListener("dispose",p);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(let _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}var dh=class{constructor(e={}){let{canvas:n=Aw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),v=new Int32Array(4),x=null,p=null,h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=$r,this.toneMappingExposure=1;let y=this,M=!1,C=0,A=0,T=null,R=-1,G=null,g=new gt,w=new gt,L=null,O=new ze(0),z=0,K=n.width,X=n.height,se=1,W=null,ge=null,ve=new gt(0,0,K,X),ee=new gt(0,0,K,X),Qe=!1,ot=new Il,Z=!1,ne=!1,we=new ht,ye=new ht,Be=new N,Ce=new gt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Re(){return T===null?se:1}let I=i;function nn(E,U){return n.getContext(E,U)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r169"),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",pe,!1),I===null){let U="webgl2";if(I=nn(U,E),I===null)throw nn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Je,Xe,Le,dt,Oe,b,S,k,$,j,q,me,ae,xe,Ye,ie,Se,De,Ne,_e,Ze,ke,ft,D;function ue(){Je=new zA(I),Je.init(),ke=new v2(I,Je),Xe=new NA(I,Je,e,ke),Le=new p2(I),Xe.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),dt=new HA(I),Oe=new t2,b=new g2(I,Je,Le,Oe,Xe,ke,dt),S=new UA(y),k=new kA(y),$=new Zw(I),ft=new IA(I,$),j=new BA(I,$,dt,ft),q=new WA(I,j,$,dt),Ne=new GA(I,Xe,b),ie=new DA(Oe),me=new e2(y,S,k,Je,Xe,ft,ie),ae=new S2(y,Oe),xe=new i2,Ye=new c2(Je),De=new PA(y,S,k,Le,q,d,l),Se=new d2(y,q,Xe),D=new w2(I,dt,Xe,Le),_e=new LA(I,Je,dt),Ze=new VA(I,Je,dt),dt.programs=me.programs,y.capabilities=Xe,y.extensions=Je,y.properties=Oe,y.renderLists=xe,y.shadowMap=Se,y.state=Le,y.info=dt}ue();let Y=new Wm(y,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(K,X,!1))},this.getSize=function(E){return E.set(K,X)},this.setSize=function(E,U,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,X=U,n.width=Math.floor(E*se),n.height=Math.floor(U*se),V===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(K*se,X*se).floor()},this.setDrawingBufferSize=function(E,U,V){K=E,X=U,se=V,n.width=Math.floor(E*V),n.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(g)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,U,V,B){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,U,V,B),Le.viewport(g.copy(ve).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,U,V,B){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,U,V,B),Le.scissor(w.copy(ee).multiplyScalar(se).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(E){Le.setScissorTest(Qe=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(E=!0,U=!0,V=!0){let B=0;if(E){let F=!1;if(T!==null){let re=T.texture.format;F=re===pg||re===fg||re===dg}if(F){let re=T.texture.type,de=re===dr||re===Us||re===bl||re===ia||re===cg||re===ug,Te=De.getClearColor(),Ee=De.getClearAlpha(),Ie=Te.r,Ue=Te.g,Ae=Te.b;de?(m[0]=Ie,m[1]=Ue,m[2]=Ae,m[3]=Ee,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=Ie,v[1]=Ue,v[2]=Ae,v[3]=Ee,I.clearBufferiv(I.COLOR,0,v))}else B|=I.COLOR_BUFFER_BIT}U&&(B|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),Ye.dispose(),Oe.dispose(),S.dispose(),k.dispose(),q.dispose(),ft.dispose(),D.dispose(),me.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",da),Y.removeEventListener("sessionend",fa),Li.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=dt.autoReset,U=Se.enabled,V=Se.autoUpdate,B=Se.needsUpdate,F=Se.type;ue(),dt.autoReset=E,Se.enabled=U,Se.autoUpdate=V,Se.needsUpdate=B,Se.type=F}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){let U=E.target;U.removeEventListener("dispose",je),Ct(U)}function Ct(E){un(E),Oe.remove(E)}function un(E){let U=Oe.get(E).programs;U!==void 0&&(U.forEach(function(V){me.releaseProgram(V)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,B,F,re){U===null&&(U=$e);let de=F.isMesh&&F.matrixWorld.determinant()<0,Te=ga(E,U,V,B,F);Le.setMaterial(B,de);let Ee=V.index,Ie=1;if(B.wireframe===!0){if(Ee=j.getWireframeAttribute(V),Ee===void 0)return;Ie=2}let Ue=V.drawRange,Ae=V.attributes.position,at=Ue.start*Ie,lt=(Ue.start+Ue.count)*Ie;re!==null&&(at=Math.max(at,re.start*Ie),lt=Math.min(lt,(re.start+re.count)*Ie)),Ee!==null?(at=Math.max(at,0),lt=Math.min(lt,Ee.count)):Ae!=null&&(at=Math.max(at,0),lt=Math.min(lt,Ae.count));let St=lt-at;if(St<0||St===1/0)return;ft.setup(F,B,Te,V,Ee);let _t,nt=_e;if(Ee!==null&&(_t=$.get(Ee),nt=Ze,nt.setIndex(_t)),F.isMesh)B.wireframe===!0?(Le.setLineWidth(B.wireframeLinewidth*Re()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(F.isLine){let be=B.linewidth;be===void 0&&(be=1),Le.setLineWidth(be*Re()),F.isLineSegments?nt.setMode(I.LINES):F.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else F.isPoints?nt.setMode(I.POINTS):F.isSprite&&nt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let be=F._multiDrawStarts,Ft=F._multiDrawCounts,rt=F._multiDrawCount,rn=Ee?$.get(Ee).bytesPerElement:1,Rn=Oe.get(B).currentProgram.getUniforms();for(let kt=0;kt<rt;kt++)Rn.setValue(I,"_gl_DrawID",kt),nt.render(be[kt]/rn,Ft[kt])}else if(F.isInstancedMesh)nt.renderInstances(at,St,F.count);else if(V.isInstancedBufferGeometry){let be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ft=Math.min(V.instanceCount,be);nt.renderInstances(at,St,Ft)}else nt.render(at,St)};function tt(E,U,V){E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=Xn,E.needsUpdate=!0,gr(E,U,V),E.side=Zr,E.needsUpdate=!0,gr(E,U,V),E.side=ui):gr(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),p=Ye.get(V),p.init(U),_.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let B=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let re=F.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){let Te=re[de];tt(Te,V,F),B.add(Te)}else tt(re,V,F),B.add(re)}),_.pop(),p=null,B},this.compileAsync=function(E,U,V=null){let B=this.compile(E,U,V);return new Promise(F=>{function re(){if(B.forEach(function(de){Oe.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){F(E);return}setTimeout(re,10)}Je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let bn=null;function Cn(E){bn&&bn(E)}function da(){Li.stop()}function fa(){Li.start()}let Li=new Gx;Li.setAnimationLoop(Cn),typeof self!="undefined"&&Li.setContext(self),this.setAnimationLoop=function(E){bn=E,Y.setAnimationLoop(E),E===null?Li.stop():Li.start()},Y.addEventListener("sessionstart",da),Y.addEventListener("sessionend",fa),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,U,T),p=Ye.get(E,_.length),p.init(U),_.push(p),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ot.setFromProjectionMatrix(ye),ne=this.localClippingEnabled,Z=ie.init(this.clippingPlanes,ne),x=xe.get(E,h.length),x.init(),h.push(x),Y.enabled===!0&&Y.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&Yi(re,U,-1/0,y.sortObjects)}Yi(E,U,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(W,ge),et=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,et&&De.addToRenderList(x,E),this.info.render.frame++,Z===!0&&ie.beginShadows();let V=p.state.shadowsArray;Se.render(V,E,U),Z===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=x.opaque,F=x.transmissive;if(p.setupLights(),U.isArrayCamera){let re=U.cameras;if(F.length>0)for(let de=0,Te=re.length;de<Te;de++){let Ee=re[de];pa(B,F,E,Ee)}et&&De.render(E);for(let de=0,Te=re.length;de<Te;de++){let Ee=re[de];ns(x,E,Ee,Ee.viewport)}}else F.length>0&&pa(B,F,E,U),et&&De.render(E),ns(x,E,U);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(y,E,U),ft.resetDefaultState(),R=-1,G=null,_.pop(),_.length>0?(p=_[_.length-1],Z===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Yi(E,U,V,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ot.intersectsSprite(E)){B&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);let de=q.update(E),Te=E.material;Te.visible&&x.push(E,de,Te,V,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ot.intersectsObject(E))){let de=q.update(E),Te=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ce.copy(de.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){let Ee=de.groups;for(let Ie=0,Ue=Ee.length;Ie<Ue;Ie++){let Ae=Ee[Ie],at=Te[Ae.materialIndex];at&&at.visible&&x.push(E,de,at,V,Ce.z,Ae)}}else Te.visible&&x.push(E,de,Te,V,Ce.z,null)}}let re=E.children;for(let de=0,Te=re.length;de<Te;de++)Yi(re[de],U,V,B)}function ns(E,U,V,B){let F=E.opaque,re=E.transmissive,de=E.transparent;p.setupLightsView(V),Z===!0&&ie.setGlobalState(y.clippingPlanes,V),B&&Le.viewport(g.copy(B)),F.length>0&&Xs(F,U,V),re.length>0&&Xs(re,U,V),de.length>0&&Xs(de,U,V),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function pa(E,U,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new fr(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Ol:dr,minFilter:Ds,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let re=p.state.transmissionRenderTarget[B.id],de=B.viewport||g;re.setSize(de.z,de.w);let Te=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(O),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),et&&De.render(V);let Ee=y.toneMapping;y.toneMapping=$r;let Ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Z===!0&&ie.setGlobalState(y.clippingPlanes,B),Xs(E,V,B),b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ae=0,at=U.length;Ae<at;Ae++){let lt=U[Ae],St=lt.object,_t=lt.geometry,nt=lt.material,be=lt.group;if(nt.side===ui&&St.layers.test(B.layers)){let Ft=nt.side;nt.side=Xn,nt.needsUpdate=!0,ma(St,V,B,_t,nt,be),nt.side=Ft,nt.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re))}y.setRenderTarget(Te),y.setClearColor(O,z),Ie!==void 0&&(B.viewport=Ie),y.toneMapping=Ee}function Xs(E,U,V){let B=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=E.length;F<re;F++){let de=E[F],Te=de.object,Ee=de.geometry,Ie=B===null?de.material:B,Ue=de.group;Te.layers.test(V.layers)&&ma(Te,U,V,Ee,Ie,Ue)}}function ma(E,U,V,B,F,re){E.onBeforeRender(y,U,V,B,F,re),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(y,U,V,B,E,re),F.transparent===!0&&F.side===ui&&F.forceSinglePass===!1?(F.side=Xn,F.needsUpdate=!0,y.renderBufferDirect(V,U,B,F,E,re),F.side=Zr,F.needsUpdate=!0,y.renderBufferDirect(V,U,B,F,E,re),F.side=ui):y.renderBufferDirect(V,U,B,F,E,re),E.onAfterRender(y,U,V,B,F,re)}function gr(E,U,V){U.isScene!==!0&&(U=$e);let B=Oe.get(E),F=p.state.lights,re=p.state.shadowsArray,de=F.state.version,Te=me.getParameters(E,F.state,re,U,V),Ee=me.getProgramCacheKey(Te),Ie=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?k:S).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",je),Ie=new Map,B.programs=Ie);let Ue=Ie.get(Ee);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===de)return qs(E,Te),Ue}else Te.uniforms=me.getUniforms(E),E.onBeforeCompile(Te,y),Ue=me.acquireProgram(Te,Ee),Ie.set(Ee,Ue),B.uniforms=Te.uniforms;let Ae=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),qs(E,Te),B.needsLights=vr(E),B.lightsStateVersion=de,B.needsLights&&(Ae.ambientLightColor.value=F.state.ambient,Ae.lightProbe.value=F.state.probe,Ae.directionalLights.value=F.state.directional,Ae.directionalLightShadows.value=F.state.directionalShadow,Ae.spotLights.value=F.state.spot,Ae.spotLightShadows.value=F.state.spotShadow,Ae.rectAreaLights.value=F.state.rectArea,Ae.ltc_1.value=F.state.rectAreaLTC1,Ae.ltc_2.value=F.state.rectAreaLTC2,Ae.pointLights.value=F.state.point,Ae.pointLightShadows.value=F.state.pointShadow,Ae.hemisphereLights.value=F.state.hemi,Ae.directionalShadowMap.value=F.state.directionalShadowMap,Ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ae.spotShadowMap.value=F.state.spotShadowMap,Ae.spotLightMatrix.value=F.state.spotLightMatrix,Ae.spotLightMap.value=F.state.spotLightMap,Ae.pointShadowMap.value=F.state.pointShadowMap,Ae.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function Ys(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Qo.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function qs(E,U){let V=Oe.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function ga(E,U,V,B,F){U.isScene!==!0&&(U=$e),b.resetTextureUnits();let re=U.fog,de=B.isMeshStandardMaterial?U.environment:null,Te=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:es,Ee=(B.isMeshStandardMaterial?k:S).get(B.envMap||de),Ie=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color,St=$r;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(St=y.toneMapping);let _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=_t!==void 0?_t.length:0,be=Oe.get(B),Ft=p.state.lights;if(Z===!0&&(ne===!0||E!==G)){let Jt=E===G&&B.id===R;ie.setState(B,E,Jt)}let rt=!1;B.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ft.state.version||be.outputColorSpace!==Te||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==Ee||B.fog===!0&&be.fog!==re||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ie.numPlanes||be.numIntersection!==ie.numIntersection)||be.vertexAlphas!==Ie||be.vertexTangents!==Ue||be.morphTargets!==Ae||be.morphNormals!==at||be.morphColors!==lt||be.toneMapping!==St||be.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,be.__version=B.version);let rn=be.currentProgram;rt===!0&&(rn=gr(B,U,F));let Rn=!1,kt=!1,is=!1,yt=rn.getUniforms(),fi=be.uniforms;if(Le.useProgram(rn.program)&&(Rn=!0,kt=!0,is=!0),B.id!==R&&(R=B.id,kt=!0),Rn||G!==E){Xe.reverseDepthBuffer?(we.copy(E.projectionMatrix),Cw(we),Rw(we),yt.setValue(I,"projectionMatrix",we)):yt.setValue(I,"projectionMatrix",E.projectionMatrix),yt.setValue(I,"viewMatrix",E.matrixWorldInverse);let Jt=yt.map.cameraPosition;Jt!==void 0&&Jt.setValue(I,Be.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&yt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,kt=!0,is=!0)}if(F.isSkinnedMesh){yt.setOptional(I,F,"bindMatrix"),yt.setOptional(I,F,"bindMatrixInverse");let Jt=F.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),yt.setValue(I,"boneTexture",Jt.boneTexture,b))}F.isBatchedMesh&&(yt.setOptional(I,F,"batchingTexture"),yt.setValue(I,"batchingTexture",F._matricesTexture,b),yt.setOptional(I,F,"batchingIdTexture"),yt.setValue(I,"batchingIdTexture",F._indirectTexture,b),yt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",F._colorsTexture,b));let Ni=V.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Ne.update(F,V,rn),(kt||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,yt.setValue(I,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(fi.envMap.value=Ee,fi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(fi.envMapIntensity.value=U.environmentIntensity),kt&&(yt.setValue(I,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&Vt(fi,is),re&&B.fog===!0&&ae.refreshFogUniforms(fi,re),ae.refreshMaterialUniforms(fi,B,se,X,p.state.transmissionRenderTarget[E.id]),Qo.upload(I,Ys(be),fi,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qo.upload(I,Ys(be),fi,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&yt.setValue(I,"center",F.center),yt.setValue(I,"modelViewMatrix",F.modelViewMatrix),yt.setValue(I,"normalMatrix",F.normalMatrix),yt.setValue(I,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Jt=B.uniformsGroups;for(let va=0,rs=Jt.length;va<rs;va++){let pi=Jt[va];D.update(pi,rn),D.bind(pi,rn)}}return rn}function Vt(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function vr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,V){Oe.get(E.texture).__webglTexture=U,Oe.get(E.depthTexture).__webglTexture=V;let B=Oe.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=V===void 0,B.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let V=Oe.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,V=0){T=E,C=U,A=V;let B=!0,F=null,re=!1,de=!1;if(E){let Ee=Oe.get(E);if(Ee.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(I.FRAMEBUFFER,null),B=!1;else if(Ee.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Ee.__hasExternalTextures)b.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ae=E.depthTexture;if(Ee.__boundDepthTexture!==Ae){if(Ae!==null&&Oe.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);let Ue=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?F=Ue[U][V]:F=Ue[U],re=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?F=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[V]:F=Ue,g.copy(E.viewport),w.copy(E.scissor),L=E.scissorTest}else g.copy(ve).multiplyScalar(se).floor(),w.copy(ee).multiplyScalar(se).floor(),L=Qe;if(Le.bindFramebuffer(I.FRAMEBUFFER,F)&&B&&Le.drawBuffers(E,F),Le.viewport(g),Le.scissor(w),Le.setScissorTest(L),re){let Ee=Oe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,V)}else if(de){let Ee=Oe.get(E.texture),Ie=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Ie)}R=-1},this.readRenderTargetPixels=function(E,U,V,B,F,re,de){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(Te=Te[de]),Te){Le.bindFramebuffer(I.FRAMEBUFFER,Te);try{let Ee=E.texture,Ie=Ee.format,Ue=Ee.type;if(!Xe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&V>=0&&V<=E.height-F&&I.readPixels(U,V,B,F,ke.convert(Ie),ke.convert(Ue),re)}finally{let Ee=T!==null?Oe.get(T).__webglFramebuffer:null;Le.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,U,V,B,F,re,de){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(Te=Te[de]),Te){let Ee=E.texture,Ie=Ee.format,Ue=Ee.type;if(!Xe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-B&&V>=0&&V<=E.height-F){Le.bindFramebuffer(I.FRAMEBUFFER,Te);let Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,re.byteLength,I.STREAM_READ),I.readPixels(U,V,B,F,ke.convert(Ie),ke.convert(Ue),0);let at=T!==null?Oe.get(T).__webglFramebuffer:null;Le.bindFramebuffer(I.FRAMEBUFFER,at);let lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await bw(I,lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,re),I.deleteBuffer(Ae),I.deleteSync(lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,V=0){E.isTexture!==!0&&(Ku("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let B=Math.pow(2,-V),F=Math.floor(E.image.width*B),re=Math.floor(E.image.height*B),de=U!==null?U.x:0,Te=U!==null?U.y:0;b.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,de,Te,F,re),Le.unbindTexture()},this.copyTextureToTexture=function(E,U,V=null,B=null,F=0){E.isTexture!==!0&&(Ku("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let re,de,Te,Ee,Ie,Ue;V!==null?(re=V.max.x-V.min.x,de=V.max.y-V.min.y,Te=V.min.x,Ee=V.min.y):(re=E.image.width,de=E.image.height,Te=0,Ee=0),B!==null?(Ie=B.x,Ue=B.y):(Ie=0,Ue=0);let Ae=ke.convert(U.format),at=ke.convert(U.type);b.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let lt=I.getParameter(I.UNPACK_ROW_LENGTH),St=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_t=I.getParameter(I.UNPACK_SKIP_PIXELS),nt=I.getParameter(I.UNPACK_SKIP_ROWS),be=I.getParameter(I.UNPACK_SKIP_IMAGES),Ft=E.isCompressedTexture?E.mipmaps[F]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ee),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Ie,Ue,re,de,Ae,at,Ft.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Ie,Ue,Ft.width,Ft.height,Ae,Ft.data):I.texSubImage2D(I.TEXTURE_2D,F,Ie,Ue,re,de,Ae,at,Ft),I.pixelStorei(I.UNPACK_ROW_LENGTH,lt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be),F===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,U,V=null,B=null,F=0){E.isTexture!==!0&&(Ku("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,B=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0);let re,de,Te,Ee,Ie,Ue,Ae,at,lt,St=E.isCompressedTexture?E.mipmaps[F]:E.image;V!==null?(re=V.max.x-V.min.x,de=V.max.y-V.min.y,Te=V.max.z-V.min.z,Ee=V.min.x,Ie=V.min.y,Ue=V.min.z):(re=St.width,de=St.height,Te=St.depth,Ee=0,Ie=0,Ue=0),B!==null?(Ae=B.x,at=B.y,lt=B.z):(Ae=0,at=0,lt=0);let _t=ke.convert(U.format),nt=ke.convert(U.type),be;if(U.isData3DTexture)b.setTexture3D(U,0),be=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)b.setTexture2DArray(U,0),be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Ft=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=I.getParameter(I.UNPACK_SKIP_PIXELS),Rn=I.getParameter(I.UNPACK_SKIP_ROWS),kt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(be,F,Ae,at,lt,re,de,Te,_t,nt,St.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(be,F,Ae,at,lt,re,de,Te,_t,St.data):I.texSubImage3D(be,F,Ae,at,lt,re,de,Te,_t,nt,St),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ft),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt),F===0&&U.generateMipmaps&&I.generateMipmap(be),Le.unbindTexture()},this.initRenderTarget=function(E){Oe.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Le.reset(),ft.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===mg?"display-p3":"srgb",n.unpackColorSpace=ut.workingColorSpace===Eh?"display-p3":"srgb"}},fh=class t{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=n}clone(){return new t(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ph=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Xm=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Cm,this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new N,mh=class t{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix4(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dn.fromBufferAttribute(this,n),Dn.applyNormalMatrix(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dn.fromBufferAttribute(this,n),Dn.transformDirection(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=bi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=bi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=bi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=bi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new At(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hi=class extends Wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wo,gl=new N,Xo=new N,Yo=new N,qo=new He,vl=new He,$x=new ht,Fu=new N,_l=new N,Ou=new N,fx=new He,kp=new He,px=new He,Ri=class extends $t{constructor(e=new hi){if(super(),this.isSprite=!0,this.type="Sprite",Wo===void 0){Wo=new Bt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xm(n,5);Wo.setIndex([0,1,2,0,2,3]),Wo.setAttribute("position",new mh(i,3,0,!1)),Wo.setAttribute("uv",new mh(i,2,3,!1))}this.geometry=Wo,this.material=e,this.center=new He(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xo.setFromMatrixScale(this.matrixWorld),$x.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xo.multiplyScalar(-Yo.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;ku(Fu.set(-.5,-.5,0),Yo,o,Xo,r,s),ku(_l.set(.5,-.5,0),Yo,o,Xo,r,s),ku(Ou.set(.5,.5,0),Yo,o,Xo,r,s),fx.set(0,0),kp.set(1,0),px.set(1,1);let a=e.ray.intersectTriangle(Fu,_l,Ou,!1,gl);if(a===null&&(ku(_l.set(-.5,.5,0),Yo,o,Xo,r,s),kp.set(0,1),a=e.ray.intersectTriangle(Fu,Ou,_l,!1,gl),a===null))return;let l=e.ray.origin.distanceTo(gl);l<e.near||l>e.far||n.push({distance:l,point:gl.clone(),uv:Yr.getInterpolation(gl,Fu,_l,Ou,fx,kp,px,new He),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ku(t,e,n,i,r,s){qo.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(vl.x=s*qo.x-r*qo.y,vl.y=r*qo.x+s*qo.y):vl.copy(qo),t.copy(e),t.x+=vl.x,t.y+=vl.y,t.applyMatrix4($x)}var Ym=class extends On{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Wn,u=Wn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gh=class extends At{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$o=new ht,mx=new ht,zu=[],gx=new pr,E2=new ht,yl=new Pe,xl=new mr,Fs=class extends Pe{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new gh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,E2)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,$o),gx.copy(e.boundingBox).applyMatrix4($o),this.boundingBox.union(gx)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,$o),xl.copy(e.boundingSphere).applyMatrix4($o),this.boundingSphere.union(xl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){let i=this.matrixWorld,r=this.count;if(yl.geometry=this.geometry,yl.material=this.material,yl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(i),e.ray.intersectsSphere(xl)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,$o),mx.multiplyMatrices(i,$o),yl.matrixWorld=mx,yl.raycast(e,zu);for(let o=0,a=zu.length;o<a;o++){let l=zu[o];l.instanceId=s,l.object=this,n.push(l)}zu.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){let i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ym(new Float32Array(r*this.count),r,this.count,hg,Hi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Os=class extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vh=new N,_h=new N,vx=new ht,Ml=new Pl,Bu=new mr,zp=new N,_x=new N,oa=class extends $t{constructor(e=new Bt,n=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vh.fromBufferAttribute(n,r-1),_h.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vh.distanceTo(_h);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bu.copy(i.boundingSphere),Bu.applyMatrix4(r),Bu.radius+=s,e.ray.intersectsSphere(Bu)===!1)return;vx.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(vx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=m,p=v-1;x<p;x+=c){let h=u.getX(x),_=u.getX(x+1),y=Vu(this,e,Ml,l,h,_);y&&n.push(y)}if(this.isLineLoop){let x=u.getX(v-1),p=u.getX(m),h=Vu(this,e,Ml,l,x,p);h&&n.push(h)}}else{let m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=m,p=v-1;x<p;x+=c){let h=Vu(this,e,Ml,l,x,x+1);h&&n.push(h)}if(this.isLineLoop){let x=Vu(this,e,Ml,l,v-1,m);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Vu(t,e,n,i,r,s){let o=t.geometry.attributes.position;if(vh.fromBufferAttribute(o,r),_h.fromBufferAttribute(o,s),n.distanceSqToSegment(vh,_h,zp,_x)>i)return;zp.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(zp);if(!(l<e.near||l>e.far))return{distance:l,point:_x.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}var jr=class extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yx=new ht,qm=new Pl,Hu=new mr,Gu=new N,ks=class extends $t{constructor(e=new Bt,n=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hu.copy(i.boundingSphere),Hu.applyMatrix4(r),Hu.radius+=s,e.ray.intersectsSphere(Hu)===!1)return;yx.copy(r).invert(),qm.copy(e.ray).applyMatrix4(yx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=d,x=m;v<x;v++){let p=c.getX(v);Gu.fromBufferAttribute(f,p),xx(Gu,p,l,r,e,n,this)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,x=m;v<x;v++)Gu.fromBufferAttribute(f,v),xx(Gu,v,l,r,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xx(t,e,n,i,r,s,o){let a=qm.distanceSqToPoint(t);if(a<n){let l=new N;qm.closestPointToPoint(t,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Qr=class extends On{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var En=class t extends Bt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],f=[],d=[],m=[],v=0,x=[],p=i/2,h=0;_(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Sn(f,3)),this.setAttribute("normal",new Sn(d,3)),this.setAttribute("uv",new Sn(m,2));function _(){let M=new N,C=new N,A=0,T=(n-e)/i;for(let R=0;R<=s;R++){let G=[],g=R/s,w=g*(n-e)+e;for(let L=0;L<=r;L++){let O=L/r,z=O*l+a,K=Math.sin(z),X=Math.cos(z);C.x=w*K,C.y=-g*i+p,C.z=w*X,f.push(C.x,C.y,C.z),M.set(K,T,X).normalize(),d.push(M.x,M.y,M.z),m.push(O,1-g),G.push(v++)}x.push(G)}for(let R=0;R<r;R++)for(let G=0;G<s;G++){let g=x[G][R],w=x[G+1][R],L=x[G+1][R+1],O=x[G][R+1];e>0&&(u.push(g,w,O),A+=3),n>0&&(u.push(w,L,O),A+=3)}c.addGroup(h,A,0),h+=A}function y(M){let C=v,A=new He,T=new N,R=0,G=M===!0?e:n,g=M===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,p*g,0),d.push(0,g,0),m.push(.5,.5),v++;let w=v;for(let L=0;L<=r;L++){let z=L/r*l+a,K=Math.cos(z),X=Math.sin(z);T.x=G*X,T.y=p*g,T.z=G*K,f.push(T.x,T.y,T.z),d.push(0,g,0),A.x=K*.5+.5,A.y=X*.5*g+.5,m.push(A.x,A.y),v++}for(let L=0;L<r;L++){let O=C+L,z=w+L;M===!0?u.push(z,z+1,O):u.push(z+1,z,O),R+=3}c.addGroup(h,R,M===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $m=class t extends Bt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Sn(s,3)),this.setAttribute("normal",new Sn(s.slice(),3)),this.setAttribute("uv",new Sn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new N,M=new N,C=new N;for(let A=0;A<n.length;A+=3)m(n[A+0],y),m(n[A+1],M),m(n[A+2],C),l(y,M,C,_)}function l(_,y,M,C){let A=C+1,T=[];for(let R=0;R<=A;R++){T[R]=[];let G=_.clone().lerp(M,R/A),g=y.clone().lerp(M,R/A),w=A-R;for(let L=0;L<=w;L++)L===0&&R===A?T[R][L]=G:T[R][L]=G.clone().lerp(g,L/w)}for(let R=0;R<A;R++)for(let G=0;G<2*(A-R)-1;G++){let g=Math.floor(G/2);G%2===0?(d(T[R][g+1]),d(T[R+1][g]),d(T[R][g])):(d(T[R][g+1]),d(T[R+1][g+1]),d(T[R+1][g]))}}function c(_){let y=new N;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(_),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function u(){let _=new N;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];let M=p(_)/2/Math.PI+.5,C=h(_)/Math.PI+.5;o.push(M,1-C)}v(),f()}function f(){for(let _=0;_<o.length;_+=6){let y=o[_+0],M=o[_+2],C=o[_+4],A=Math.max(y,M,C),T=Math.min(y,M,C);A>.9&&T<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function m(_,y){let M=_*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function v(){let _=new N,y=new N,M=new N,C=new N,A=new He,T=new He,R=new He;for(let G=0,g=0;G<s.length;G+=9,g+=6){_.set(s[G+0],s[G+1],s[G+2]),y.set(s[G+3],s[G+4],s[G+5]),M.set(s[G+6],s[G+7],s[G+8]),A.set(o[g+0],o[g+1]),T.set(o[g+2],o[g+3]),R.set(o[g+4],o[g+5]),C.copy(_).add(y).add(M).divideScalar(3);let w=p(C);x(A,g+0,_,w),x(T,g+2,y,w),x(R,g+4,M,w)}}function x(_,y,M,C){C<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.details)}};var Ll=class t extends $m{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var Pi=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ox,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Wu(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function T2(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var aa=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zm=class extends aa{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:My,endingEnd:My}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sy:s=e,a=2*n-i;break;case wy:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sy:o=e,l=2*i-n;break;case wy:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(i-n)/(r-n),x=v*v,p=x*v,h=-d*p+2*d*x-d*v,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*v+1,y=(-1-m)*p+(1.5+m)*x+.5*v,M=m*p-m*x;for(let C=0;C!==a;++C)s[C]=h*o[u+C]+_*o[c+C]+y*o[l+C]+M*o[f+C];return s}},Km=class extends aa{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}},Jm=class extends aa{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ii=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wu(n,this.TimeBufferType),this.values=Wu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Wu(e.times,Array),values:Wu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Ju:n=this.InterpolantFactoryMethodDiscrete;break;case bm:n=this.InterpolantFactoryMethodLinear;break;case up:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ju;case this.InterpolantFactoryMethodLinear:return bm;case this.InterpolantFactoryMethodSmooth:return up}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&T2(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===up,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,m=f+i;for(let v=0;v!==i;++v){let x=n[f+v];if(x!==n[d+v]||x!==n[m+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let m=0;m!==i;++m)n[d+m]=n[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=bm;var zs=class extends Ii{constructor(e,n,i){super(e,n,i)}};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Ju;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var jm=class extends Ii{};jm.prototype.ValueTypeName="color";var Qm=class extends Ii{};Qm.prototype.ValueTypeName="number";var eg=class extends aa{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)Jr.slerpFlat(s,0,o,c-a,o,c,l);return s}},yh=class extends Ii{InterpolantFactoryMethodLinear(e){return new eg(this.times,this.values,this.getValueSize(),e)}};yh.prototype.ValueTypeName="quaternion";yh.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends Ii{constructor(e,n,i){super(e,n,i)}};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Ju;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var tg=class extends Ii{};tg.prototype.ValueTypeName="vector";var Mx={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},ng=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}},A2=new ng,Nl=class{constructor(e){this.manager=e!==void 0?e:A2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ig=class extends Nl{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Mx.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;let a=Rl("img");function l(){u(),Mx.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var xh=class extends Nl{constructor(e){super(e)}load(e,n,i,r){let s=new On,o=new ig(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}},Dl=class extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var Bp=new ht,Sx=new N,wx=new N,Mh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;Sx.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sx),wx.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wx),n.updateMatrixWorld(),Bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ex=new ht,Sl=new N,Vp=new N,rg=class extends Mh{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Sl.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sl),Vp.copy(i.position),Vp.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Vp),i.updateMatrixWorld(),r.makeTranslation(-Sl.x,-Sl.y,-Sl.z),Ex.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ex)}},Ul=class extends Dl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new rg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sg=class extends Mh{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fl=class extends Dl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Sh=class extends Dl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var _g="\\[\\]\\.:\\/",b2=new RegExp("["+_g+"]","g"),yg="[^"+_g+"]",C2="[^"+_g.replace("\\.","")+"]",R2=/((?:WC+[\/:])*)/.source.replace("WC",yg),P2=/(WCOD+)?/.source.replace("WCOD",C2),I2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yg),L2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yg),N2=new RegExp("^"+R2+P2+I2+L2+"$"),D2=["material","materials","bones","map"],og=class{constructor(e,n,i){let r=i||Pt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Pt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b2,"")}static parseTrackName(e){let n=N2.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);D2.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=og;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tC=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var bt=[{beam:16777215,warm:15986921,wash:14341576},{beam:15659775,warm:16054271,wash:13227240},{beam:16773862,warm:16775408,wash:15260875},{beam:15790320,warm:16777215,wash:13619151},{beam:15265008,warm:16185594,wash:13028564},{beam:16775392,warm:16776690,wash:15129792}],ts=26,Vs=13.5,Hs=10.2,ca=-24.5,di=2,ua=-11.6,Zx=124,Tn=typeof window!="undefined"&&window.matchMedia("(pointer: coarse)").matches,U2=typeof window!="undefined"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function F2(t=.5){let n=document.createElement("canvas");n.width=256,n.height=256;let i=n.getContext("2d"),r=i.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(t*.5,"rgba(255,255,255,0.55)"),r.addColorStop(t,"rgba(255,255,255,0.16)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,256,256);let s=new Qr(n);return s.colorSpace=ln,s}function O2(){let n=document.createElement("canvas");n.width=128,n.height=512;let i=n.getContext("2d"),r=i.createImageData(128,512);for(let o=0;o<512;o+=1){let a=o/511,l=Math.pow(1-a,1.9);for(let c=0;c<128;c+=1){let u=c/127*2-1,f=Math.pow(Math.max(0,1-u*u),2.1),d=Math.min(1,l*f+l*f*.35),m=(o*128+c)*4;r.data[m]=255,r.data[m+1]=255,r.data[m+2]=255,r.data[m+3]=Math.round(d*255)}}i.putImageData(r,0,0);let s=new Qr(n);return s.colorSpace=ln,s}function Gs(t){return`#${new ze(t).getHexString()}`}function k2(){let t=document.createElement("canvas");t.width=1920,t.height=1e3;let e=t.getContext("2d"),n=new Qr(t);return n.colorSpace=ln,{canvas:t,ctx:e,texture:n}}function xg(t,e,n,i){let{ctx:r,canvas:s}=t,o=s.width,a=s.height;r.clearRect(0,0,o,a);let l=r.createLinearGradient(0,0,o,a);if(l.addColorStop(0,"#151019"),l.addColorStop(.5,"#0a0a0e"),l.addColorStop(1,"#050507"),r.fillStyle=l,r.fillRect(0,0,o,a),i&&i.width){let x=Math.max(o/i.width,a/i.height)*1.04,p=i.width*x,h=i.height*x;r.save(),r.globalAlpha=.92,r.drawImage(i,(o-p)/2,(a-h)/2-a*.02,p,h),r.restore()}let c=r.createLinearGradient(0,0,o,a);c.addColorStop(0,`${Gs(n.wash)}cc`),c.addColorStop(.45,`${Gs(n.wash)}22`),c.addColorStop(1,"rgba(0,0,0,0)"),r.globalCompositeOperation="soft-light",r.fillStyle=c,r.fillRect(0,0,o,a),r.globalCompositeOperation="source-over";let u=r.createLinearGradient(0,0,0,a);u.addColorStop(0,"rgba(0,0,0,0.22)"),u.addColorStop(.4,"rgba(0,0,0,0)"),u.addColorStop(.72,"rgba(0,0,0,0.28)"),u.addColorStop(1,"rgba(0,0,0,0.78)"),r.fillStyle=u,r.fillRect(0,0,o,a),r.globalAlpha=.06,r.fillStyle="#ffffff";for(let x=0;x<a;x+=4)r.fillRect(0,x,o,1);r.globalAlpha=1,r.shadowColor="rgba(0,0,0,0.55)",r.shadowBlur=22,r.fillStyle=Gs(n.beam),r.fillRect(78,84,12,12),r.fillStyle="rgba(255,255,255,0.72)",r.font='600 25px "Inter Tight", Helvetica, Arial, sans-serif',r.letterSpacing="9px",r.fillText("A1 LIVE / STAGE 01",110,98),r.textAlign="right",r.fillStyle="rgba(255,255,255,0.55)",r.font='600 22px "Inter Tight", Helvetica, Arial, sans-serif',r.letterSpacing="6px",r.fillText("CAM 01",o-86,96),r.textAlign="left",r.fillStyle=Gs(n.beam),r.beginPath(),r.arc(o-158,90,7,0,Math.PI*2),r.fill(),r.fillStyle="rgba(255,255,255,0.6)",r.font='500 21px "Inter Tight", Helvetica, Arial, sans-serif',r.letterSpacing="5px";let f=[e.genre,e.origin].filter(Boolean).join("  /  ").toUpperCase();f&&r.fillText(f,78,158);let d=a-96;r.fillStyle=Gs(n.beam);for(let x=0;x<34;x+=1){let p=12+Math.abs(Math.sin(x*1.7)*Math.cos(x*.6))*62;r.globalAlpha=.5+Math.abs(Math.sin(x*1.3))*.5,r.fillRect(78+x*15,d-p,7,p)}r.globalAlpha=1,r.fillStyle="rgba(255,255,255,0.5)",r.font='600 21px "Inter Tight", Helvetica, Arial, sans-serif',r.letterSpacing="7px",r.fillText("ON AIR",78,a-58),r.letterSpacing="0px",r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=2;let m=26;[[44,44,1,1],[o-44,44,-1,1],[44,a-44,1,-1],[o-44,a-44,-1,-1]].forEach(([x,p,h,_])=>{r.beginPath(),r.moveTo(x+h*m,p),r.lineTo(x,p),r.lineTo(x,p+_*m),r.stroke()});let v=r.createRadialGradient(o*.5,a*.45,a*.2,o*.5,a*.45,o*.72);v.addColorStop(0,"rgba(0,0,0,0)"),v.addColorStop(1,"rgba(0,0,0,0.55)"),r.fillStyle=v,r.fillRect(0,0,o,a),t.texture.needsUpdate=!0}function z2(){let t=document.createElement("canvas");t.width=256,t.height=768;let e=t.getContext("2d"),n=new Qr(t);return n.colorSpace=ln,n.minFilter=1006,{canvas:t,ctx:e,texture:n}}function B2(t,e,n,i,r){let{ctx:s,canvas:o}=t,a=o.width,l=o.height,c=Gs(n.beam);s.clearRect(0,0,a,l);let u=s.createLinearGradient(0,0,0,l);u.addColorStop(0,"#0c0c11"),u.addColorStop(.55,"#050508"),u.addColorStop(1,"#010102"),s.fillStyle=u,s.fillRect(0,0,a,l),s.strokeStyle="rgba(255,255,255,0.055)",s.lineWidth=1;for(let v=24;v<l;v+=48)s.beginPath(),s.moveTo(0,v),s.lineTo(a,v),s.stroke();for(let v=24;v<a;v+=48)s.beginPath(),s.moveTo(v,0),s.lineTo(v,l),s.stroke();s.strokeStyle="rgba(255,255,255,0.2)",s.lineWidth=3,s.strokeRect(12,12,a-24,l-24),s.textAlign="left",s.fillStyle=c,s.font='800 92px "Inter Tight", Helvetica, Arial, sans-serif',s.fillText(String(i+1).padStart(2,"0"),26,118),s.fillStyle="rgba(255,255,255,0.34)",s.font='600 17px "Inter Tight", Helvetica, Arial, sans-serif',s.letterSpacing="6px",s.fillText(`/ ${String(r).padStart(2,"0")}`,30,146),s.save(),s.translate(a-40,l-34),s.rotate(-Math.PI/2),s.fillStyle="rgba(255,255,255,0.62)",s.font='700 24px "Inter Tight", Helvetica, Arial, sans-serif',s.letterSpacing="11px",s.fillText("ARTIST FIRST \xB7 A1",0,0),s.restore();let f=l*.56;s.strokeStyle=c,s.globalAlpha=.75,s.lineWidth=3,s.beginPath();for(let v=24;v<a-24;v+=6){let x=f+Math.sin(v*.12+i)*26+Math.sin(v*.05)*16;v===24?s.moveTo(v,x):s.lineTo(v,x)}s.stroke(),s.globalAlpha=.24,s.beginPath();for(let v=24;v<a-24;v+=6){let x=f-44+Math.sin(v*.09+i*2)*18;v===24?s.moveTo(v,x):s.lineTo(v,x)}s.stroke(),s.globalAlpha=1;for(let v=0;v<10;v+=1){let x=16+Math.abs(Math.sin(v*1.8+i))*58;s.fillStyle=v%3===0?c:"rgba(255,255,255,0.42)",s.fillRect(28+v*21,l-96-x,9,x)}let d=(e.name||"AF").replace(/\s+/g," ");s.fillStyle="rgba(255,255,255,0.9)",s.font='800 30px "Inter Tight", Helvetica, Arial, sans-serif',s.letterSpacing="2px",(d.length>14?d.split(" "):[d]).slice(0,3).forEach((v,x)=>{s.fillText(v.slice(0,12).toUpperCase(),26,232+x*36)}),s.fillStyle=c,s.beginPath(),s.arc(a-34,34,6,0,Math.PI*2),s.fill(),s.fillStyle="rgba(255,255,255,0.5)",s.font='600 12px "Inter Tight", Helvetica, Arial, sans-serif',s.letterSpacing="3px",s.textAlign="right",s.fillText("REC",a-48,39),s.textAlign="left",t.texture.needsUpdate=!0}function V2(){let t=window.AudioContext||window.webkitAudioContext;if(!t)return null;let e=new t,n=e.createGain();n.gain.value=1e-4;let i=e.createDynamicsCompressor();i.threshold.value=-22,i.knee.value=26,i.ratio.value=4,i.attack.value=.004,i.release.value=.24,n.connect(i),i.connect(e.destination);let r=e.createBuffer(1,e.sampleRate*2,e.sampleRate),s=r.getChannelData(0);for(let g=0;g<s.length;g+=1)s[g]=Math.random()*2-1;let o=e.createBufferSource();o.buffer=r,o.loop=!0;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=560,a.Q.value=.4;let l=e.createGain();l.gain.value=.055,o.connect(a),a.connect(l),l.connect(n),o.start();let c=e.createGain();c.gain.value=.018;let u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=760,u.Q.value=1.1,c.connect(u),u.connect(n),[55,82.41,110,164.81].forEach((g,w)=>{let L=e.createOscillator();L.type=w===3?"triangle":"sawtooth",L.frequency.value=g,L.detune.value=w%2===0?-5:6,L.connect(c),L.start()});let f=e.createOscillator();f.frequency.value=.07;let d=e.createGain();d.gain.value=240,f.connect(d),d.connect(u.frequency),f.start();let m=60/Zx/4,v={next:0,step:0,timer:null},x=null,p=(g,w=1)=>{let L=e.createOscillator(),O=e.createGain();L.frequency.setValueAtTime(148,g),L.frequency.exponentialRampToValueAtTime(42,g+.16),O.gain.setValueAtTime(.85*w,g),O.gain.exponentialRampToValueAtTime(.001,g+.4),L.connect(O),O.connect(n),L.start(g),L.stop(g+.44)},h=(g,w)=>{let L=e.createBufferSource();L.buffer=r;let O=e.createBiquadFilter();O.type="highpass",O.frequency.value=7600;let z=e.createGain();z.gain.setValueAtTime(w,g),z.gain.exponentialRampToValueAtTime(5e-4,g+.05),L.connect(O),O.connect(z),z.connect(n),L.start(g),L.stop(g+.07)},_=g=>{let w=e.createBufferSource();w.buffer=r;let L=e.createBiquadFilter();L.type="bandpass",L.frequency.value=1700,L.Q.value=1.1;let O=e.createGain();O.gain.setValueAtTime(.3,g),O.gain.exponentialRampToValueAtTime(6e-4,g+.18),w.connect(L),L.connect(O),O.connect(n),w.start(g),w.stop(g+.2)},y=(g,w)=>{let L=e.createOscillator();L.type="sawtooth",L.frequency.setValueAtTime(w,g);let O=e.createBiquadFilter();O.type="lowpass",O.frequency.setValueAtTime(320,g),O.frequency.exponentialRampToValueAtTime(110,g+.2);let z=e.createGain();z.gain.setValueAtTime(1e-4,g),z.gain.linearRampToValueAtTime(.24,g+.012),z.gain.exponentialRampToValueAtTime(5e-4,g+.24),L.connect(O),O.connect(z),z.connect(n),L.start(g),L.stop(g+.26)},M=[55,55,65.41,49,49,58.27,55,41.2],C=(g,w)=>{let L=g%16;[0,4,8,12].includes(L)&&p(w,L===0?1:.8),[4,12].includes(L)&&_(w),L%2===0?h(w,L%4===2?.095:.032):Math.random()>.55&&h(w,.02),[0,3,6,8,11,14].includes(L)&&y(w,M[Math.floor(g/4)%M.length])},A=()=>{if(e.state==="running")for(;v.next<e.currentTime+.16;)C(v.step,v.next),v.next+=m,v.step+=1};return{start:()=>{x&&(clearTimeout(x),x=null),e.resume().then(()=>{let g=e.currentTime;n.gain.cancelScheduledValues(g),n.gain.setValueAtTime(Math.max(n.gain.value,1e-4),g),n.gain.exponentialRampToValueAtTime(.62,g+.9),v.next=g+.08,v.step=0,v.timer&&clearInterval(v.timer),v.timer=setInterval(A,25),A()}).catch(()=>{})},stop:()=>{v.timer&&(clearInterval(v.timer),v.timer=null);let g=e.currentTime;n.gain.cancelScheduledValues(g),n.gain.setValueAtTime(Math.max(n.gain.value,1e-4),g),n.gain.exponentialRampToValueAtTime(1e-4,g+.4),x=setTimeout(()=>{e.state==="running"&&e.suspend().catch(()=>{})},520)},burst:()=>{if(e.state!=="running")return;let g=e.currentTime,w=e.createBufferSource();w.buffer=r;let L=e.createBiquadFilter();L.type="bandpass",L.frequency.setValueAtTime(240,g),L.frequency.exponentialRampToValueAtTime(9400,g+1.6),L.Q.value=1.7;let O=e.createGain();O.gain.setValueAtTime(1e-4,g),O.gain.exponentialRampToValueAtTime(.17,g+1.45),O.gain.exponentialRampToValueAtTime(1e-4,g+1.85),w.connect(L),L.connect(O),O.connect(n),w.start(g),w.stop(g+1.9);let z=e.createOscillator(),K=e.createGain();z.frequency.setValueAtTime(82,g+1.6),z.frequency.exponentialRampToValueAtTime(26,g+2.5),K.gain.setValueAtTime(1e-4,g+1.6),K.gain.linearRampToValueAtTime(.6,g+1.66),K.gain.exponentialRampToValueAtTime(5e-4,g+2.6),z.connect(K),K.connect(n),z.start(g+1.6),z.stop(g+2.65)},destroy(){v.timer&&clearInterval(v.timer),x&&clearTimeout(x),e.close().catch(()=>{})}}}function H2(t,e,n){let i=new Mn,r=n*2,s=new Bt;s.setAttribute("position",new At(new Float32Array([-r*.06,0,0,r*.06,0,0,r*.5,-e,0,-r*.5,-e,0]),3)),s.setAttribute("uv",new At(new Float32Array([.46,1,.54,1,1,0,0,0]),2)),s.setIndex([0,1,2,0,2,3]),s.computeVertexNormals();let o=[];for(let a=0;a<2;a+=1){let l=new tn({map:t,transparent:!0,depthWrite:!1,blending:Ut,side:ui,toneMapped:!1,fog:!1,opacity:0}),c=new Pe(s,l);c.rotation.y=Math.PI/2*a,c.renderOrder=3,i.add(c),o.push(l)}return{group:i,planes:o,geometry:s}}var G2=(0,An.forwardRef)(function({slides:e=[],index:n=0,view:i="audience",sound:r=!1,boost:s=0},o){let a=(0,An.useRef)(null),l=(0,An.useRef)(null),c=(0,An.useRef)({index:n,view:i,sound:r,boost:s});return c.current={index:n,view:i,sound:r,boost:s},(0,An.useEffect)(()=>{let u=a.current;if(!u)return;let f=u.parentElement,d=f&&f.closest&&f.closest(".af-stage__host")||f,m=()=>{u.classList.add("is-ready"),d&&d.classList.add("is-3d-ready")},v=()=>{d&&d.classList.remove("is-3d-ready")},x=U2,p;try{p=new dh({antialias:!Tn,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(P){u.classList.add("is-fallback");return}if(!p.getContext()){u.classList.add("is-fallback");return}let h=u.clientWidth||window.innerWidth,_=u.clientHeight||window.innerHeight;p.setPixelRatio(Math.min(window.devicePixelRatio||1,Tn?1.6:1.8)),p.setSize(h,_),p.outputColorSpace=ln,p.toneMapping=ag,p.toneMappingExposure=1.22,p.domElement.setAttribute("aria-hidden","true"),u.appendChild(p.domElement);let y=Math.min(8,p.capabilities.getMaxAnisotropy()),M=new ph;M.fog=new fh(263175,.017);let C=new xn(42,h/_,.1,320),A=new N(0,2.6,24),T=new N(0,8.6,-22),R=new N().copy(A),G=new N().copy(T);C.position.copy(A),C.lookAt(T),M.add(new Sh(2304831,1.5));let g=new Fl(13622527,1.05);g.position.set(-12,26,20),M.add(g);let w=new Fl(15986921,.5);w.position.set(10,12,-30),M.add(w);let L=new Ul(16777215,78,120,2);L.position.set(0,6,-18),M.add(L);let O=new Ul(9418495,26,60,2);O.position.set(0,9,12),M.add(O);let z=new Pi({color:2368555,roughness:.36,metalness:.8}),K=new Pi({color:789521,roughness:.52,metalness:.55}),X=new Pi({color:855314,roughness:.3,metalness:.6}),se=new Pi({color:328967,roughness:.24,metalness:.72}),W=F2(.62),ge=O2(),ve=new Pe(new wn(260,260),se);ve.rotation.x=-Math.PI/2,ve.position.y=-.02,M.add(ve);let ee=new Mn;M.add(ee);let Qe=40,ot=15,Z=new Pe(new It(Qe,di,ot),X);Z.position.set(0,di/2,-19.1),ee.add(Z);let ne=new Pe(new wn(Qe,1.9),K);ne.position.set(0,.95,ua+.01),ee.add(ne);let we=new Pe(new wn(Qe,.16),new tn({color:bt[0].beam,toneMapped:!1,fog:!1}));we.position.set(0,1.78,ua+.04),ee.add(we);let ye=[];for(let P=0;P<10;P+=1){let H=new Pe(new It(.5,.12,.12),new tn({color:bt[0].beam,toneMapped:!1,fog:!1}));H.position.set(-13.5+P*3,di+.06,ua+.4),ee.add(H),ye.push(H)}let Be=new Pe(new It(ts+1.6,Vs+1.6,.9),K);Be.position.set(0,Hs,ca-.5),ee.add(Be);let Ce=k2(),$e=new Pe(new wn(ts,Vs),new tn({map:Ce.texture,toneMapped:!1,fog:!1}));$e.position.set(0,Hs,ca),$e.renderOrder=2,ee.add($e);let et=document.createElement("canvas");et.width=1024,et.height=512;let Re=et.getContext("2d"),I=new Qr(et);I.colorSpace=ln;let nn=new Pe(new wn(ts*.985,Vs*.985),new tn({map:I,transparent:!0,depthWrite:!1,blending:Ut,opacity:.9,toneMapped:!1,fog:!1}));nn.position.set(0,Hs,ca+.06),nn.renderOrder=3,ee.add(nn);let Je=(P,H)=>{let fe=et.width,le=et.height;Re.clearRect(0,0,fe,le);let Ve=Gs(vt.beam);Re.globalAlpha=.62;for(let Di=0;Di<58;Di+=1){let as=8+(.2+Math.abs(Math.sin(Di*.62+P*2.1))*.48+H*.16)*66;Re.fillStyle=Di%7===0?Ve:"#ffffff",Re.fillRect(62+Di*15.6,le-56-as,6,as)}Re.globalAlpha=1;let qe=P*58%le,oe=Re.createLinearGradient(0,qe-26,0,qe+26);oe.addColorStop(0,"rgba(255,255,255,0)"),oe.addColorStop(.5,"rgba(255,255,255,0.13)"),oe.addColorStop(1,"rgba(255,255,255,0)"),Re.fillStyle=oe,Re.fillRect(0,qe-26,fe,52),Re.textAlign="right",Re.fillStyle="rgba(255,255,255,0.68)",Re.font='600 17px "Inter Tight", Helvetica, Arial, sans-serif',Re.letterSpacing="4px";let Fe=String(Math.floor(P*24%24)).padStart(2,"0"),Ht=String(Math.floor(P%60)).padStart(2,"0"),Xt=String(Math.floor(P/60%60)).padStart(2,"0"),ti=String(Math.floor(P/3600%24)).padStart(2,"0");Re.fillText(`${ti}:${Xt}:${Ht}:${Fe}`,fe-58,74),Re.fillStyle=Ve,Re.beginPath(),Re.arc(fe-66,106,6,0,Math.PI*2),Re.fill(),Re.fillStyle="rgba(255,255,255,0.5)",Re.font='600 14px "Inter Tight", Helvetica, Arial, sans-serif',Re.fillText("REC",fe-82,112),Re.textAlign="left",I.needsUpdate=!0},Xe=new Ri(new hi({map:W,color:bt[0].wash,transparent:!0,depthWrite:!1,blending:Ut,opacity:.42,fog:!1}));Xe.scale.set(ts*2.1,Vs*2.2,1),Xe.position.set(0,Hs,ca-.9),Xe.renderOrder=1,ee.add(Xe);let Le=new tn({color:bt[0].beam,toneMapped:!1,transparent:!0,opacity:.8,fog:!1}),dt=new Pe(new It(ts+1.2,.06,.06),Le);dt.position.set(0,Hs+Vs/2+.5,ca-.1),ee.add(dt);let Oe=dt.clone();Oe.position.y=Hs-Vs/2-.5,ee.add(Oe);let b=new Pe(new It(.06,Vs+1.2,.06),Le);b.position.set(-ts/2-.5,Hs,ca-.1),ee.add(b);let S=b.clone();S.position.x=ts/2+.5,ee.add(S);let k=new Pe(new wn(ts*1.2,9),new tn({map:Ce.texture,toneMapped:!1,transparent:!0,opacity:.11,depthWrite:!1,blending:Ut}));k.rotation.x=-Math.PI/2,k.position.set(0,di+.02,-16),ee.add(k);let $=new Pe(new wn(96,96),new tn({map:W,color:bt[0].wash,transparent:!0,depthWrite:!1,blending:Ut,opacity:.24,fog:!1}));$.rotation.x=-Math.PI/2,$.position.set(0,.02,2),M.add($);let j=(P,H,fe,le,Ve,qe,oe=z)=>{let Fe=new Pe(new It(P,H,fe),oe);return Fe.position.set(le,Ve,qe),ee.add(Fe),Fe},q=-9.4,me=17.9;j(44,.3,.3,0,me+.55,q),j(44,.3,.3,0,me-.85,q),j(.24,.24,.24,0,me+.55,q+.42),j(.24,.24,.24,0,me-.85,q+.42);for(let P=-22;P<=22;P+=2.4)j(.13,1.4,.13,P,me-.15,q);let ae=-22.6;j(40,.3,.3,0,me+.4,ae),j(40,.3,.3,0,me-.9,ae);for(let P=-20;P<=20;P+=2.2)j(.13,1.3,.13,P,me-.25,ae);j(.5,19,.5,-18.4,9.5,q),j(.5,19,.5,18.4,9.5,q),j(.34,19,.34,-17.6,9.5,ae),j(.34,19,.34,17.6,9.5,ae);let xe=[];[-15.6,15.6].forEach((P,H)=>{let fe=new Pe(new It(3.2,7.4,3),K);fe.position.set(P,5.7,-13.2),ee.add(fe);for(let Ve=0;Ve<4;Ve+=1)for(let qe=0;qe<2;qe+=1){let oe=new Pe(new En(.44,.44,.14,16),new Pi({color:1315866,roughness:.75,metalness:.4}));oe.rotation.x=Math.PI/2,oe.position.set(P-.72+qe*1.44,8.4-Ve*1.42,-11.68),ee.add(oe)}let le=new Ri(new hi({map:W,color:bt[0].beam,transparent:!0,depthWrite:!1,blending:Ut,opacity:.16,fog:!1}));le.scale.set(7,7,1),le.position.set(P,4.2,-13),ee.add(le),xe.push(le)});let Ye=new Mn,ie=new Pe(new En(.045,.045,4.4,8),z);ie.position.y=2.2,Ye.add(ie);let Se=new Pe(new En(.62,.62,.08,20),z);Ye.add(Se);let De=new Pe(new En(.1,.1,.36,10),K);De.position.set(.16,4.32,0),De.rotation.z=-.5,Ye.add(De),Ye.position.set(-4.6,di,-14.6),ee.add(Ye),[-8.2,8.2].forEach(P=>{let H=new Pe(new It(3.6,.9,1.7),K);H.position.set(P,di+.45,ua+1.1),ee.add(H)}),[-8,-4,4,8].forEach(P=>{let H=new Pe(new It(3.4,1.5,2.2),K);H.position.set(P,.75,ua-1.4),ee.add(H)});let Ne=new Pi({color:460554,roughness:.62,metalness:.22}),_e=new Pi({color:1250075,roughness:.38,metalness:.55}),Ze=[],ke=({x:P,z:H,scale:fe=1,rotY:le=0,guitar:Ve=!1,seated:qe=!1,riser:oe=0})=>{let Fe=new Mn;Fe.position.set(P,di+oe,H),Fe.scale.setScalar(fe),Fe.rotation.y=le;let Ht=new Pe(new En(.3,.19,.82,10),Ne);Ht.position.y=1.42,Fe.add(Ht);let Xt=new Pe(new It(.56,.16,.24),_e);Xt.position.y=1.78,Fe.add(Xt);let ti=new Pe(new Ll(.2,2),Ne);ti.position.y=2,Fe.add(ti);let Di=new Pe(new En(.07,.07,.12,8),Ne);Di.position.y=1.84,Fe.add(Di);let js=[];qe||[-.13,.13].forEach(hn=>{let dn=new Pe(new It(.15,.92,.18),Ne);dn.position.set(hn,.58,0),Fe.add(dn),js.push(dn)});let as=[];if([-1,1].forEach(hn=>{let dn=new Mn;dn.position.set(hn*.34,1.72,0);let Fg=new Pe(new It(.11,.66,.12),_e);Fg.position.y=-.31,dn.add(Fg),dn.rotation.z=hn*(Ve?.72:.12),Fe.add(dn),as.push({pivot:dn,base:dn.rotation.z})}),Ve){let hn=new Pe(new It(.72,.09,.26),_e);hn.position.set(.02,1.06,.28),hn.rotation.z=-.22,Fe.add(hn);let dn=new Pe(new It(.82,.06,.07),z);dn.position.set(.72,1.16,.3),dn.rotation.z=.22,Fe.add(dn)}let Q=new Ri(new hi({map:W,color:15986921,transparent:!0,depthWrite:!1,blending:Ut,opacity:.1,fog:!1}));Q.position.set(0,1.22,-.6),Q.scale.set(3.2,4.3,1),Fe.add(Q),ee.add(Fe),Ze.push({group:Fe,halo:Q,arms:as,legs:js,baseY:di+oe,phase:Math.random()*Math.PI*2,seated:qe})};ke({x:-4.6,z:-15.15,scale:1.02,rotY:.04}),ke({x:1.6,z:-15.7,scale:1,rotY:-.14,guitar:!0}),ke({x:-10.4,z:-16.05,scale:.99,rotY:.12,guitar:!0}),ke({x:9.55,z:-18.05,scale:.94,rotY:.08,seated:!0,riser:.34});let ft=new Pe(new It(5.2,.34,3.7),K);ft.position.set(9.55,di+.17,-17.15),ee.add(ft);let D=new Pe(new En(.72,.72,.66,20),z);D.rotation.x=Math.PI/2,D.position.set(9.55,di+.95,-16.1),ee.add(D),[[8.85,3.5,-16.45],[10.25,3.5,-16.45]].forEach(([P,H,fe])=>{let le=new Pe(new En(.3,.3,.3,14),z);le.position.set(P,H,fe),ee.add(le)}),[[8.05,4.25,-16.95],[11.05,4.35,-16.85],[9.55,4.55,-17.65]].forEach(([P,H,fe])=>{let le=new Pe(new En(.035,.035,1.6,6),z);le.position.set(P,H-.8,fe),ee.add(le);let Ve=new Pe(new En(.56,.56,.035,20),_e);Ve.position.set(P,H,fe),Ve.rotation.z=.16,ee.add(Ve)}),[-12.2,12.4].forEach(P=>{let H=new Pe(new It(2.5,3.4,1.6),K);H.position.set(P,di+1.7,-17.9),ee.add(H);let fe=new Pe(new wn(1.5,.06),new tn({color:bt[0].beam,toneMapped:!1,fog:!1,transparent:!0,opacity:.7}));fe.position.set(P,di+2.35,-17.06),ee.add(fe)});let ue=[];[-1,1].forEach(P=>{let H=z2(),fe=new Pe(new It(4.05,10.9,.34),K);fe.position.set(P*15.9,7.35,-20.62),fe.rotation.y=P*-.2,ee.add(fe);let le=new Pe(new wn(3.55,10.25),new tn({map:H.texture,toneMapped:!1,fog:!1}));le.position.set(P*15.9,7.35,-20.4),le.rotation.y=P*-.2,le.renderOrder=2,ee.add(le),ue.push({surface:H,panel:le})});let Y=new Pe(new wn(28,26),new tn({map:Ce.texture,transparent:!0,opacity:.055,depthWrite:!1,blending:Ut,toneMapped:!1,fog:!1}));Y.rotation.x=-Math.PI/2,Y.position.set(0,.018,-2.4),M.add(Y);let J=new Mn;J.position.set(0,21.4,-14.6);let he=[],pe=[];for(let P=0;P<64;P+=1){let H=P/64*Math.PI*2;pe.push(Math.cos(H)*8.7,0,Math.sin(H)*8.7)}let je=new oa(new Bt().setAttribute("position",new At(new Float32Array(pe),3)),new Os({color:16777215,transparent:!0,opacity:.16,blending:Ut,depthWrite:!1,fog:!1}));J.add(je);for(let P=0;P<18;P+=1){let H=P/18*Math.PI*2,fe=new Ri(new hi({map:W,color:16777215,transparent:!0,depthWrite:!1,blending:Ut,opacity:.4,fog:!1}));fe.position.set(Math.cos(H)*8.7,0,Math.sin(H)*8.7),fe.scale.set(1.2,1.2,1),J.add(fe),he.push({bulb:fe,phase:H})}ee.add(J);let Ct=[],un=Tn?8:12,tt=(P,H,fe,le,Ve,qe)=>{let oe=new Mn;oe.position.set(P,H,fe),oe.rotation.set(le,0,Ve),ee.add(oe);let Fe=new Pe(new En(.34,.46,.92,14),z);Fe.position.y=-.1,oe.add(Fe);let Ht=new Pe(new En(.26,.26,.1,14),new tn({color:16777215,toneMapped:!1,fog:!1}));Ht.position.y=-.56,oe.add(Ht);let Xt=new Ri(new hi({map:W,color:16777215,transparent:!0,depthWrite:!1,blending:Ut,opacity:.8,fog:!1}));Xt.scale.set(2.2,2.2,1),Xt.position.y=-.6,oe.add(Xt);let ti=H2(ge,26,1.9);ti.group.position.y=-.6,oe.add(ti.group),Ct.push({group:oe,lens:Ht,flare:Xt,beam:ti,baseTilt:le,basePan:Ve,targetTilt:le,targetPan:Ve,phase:Math.random()*Math.PI*2,colorIndex:qe})};[-14,-9.5,-5,0,5,9.5,14].slice(0,un).forEach((P,H)=>{tt(P,me-1.1,q+.3,-.22-Math.random()*.12,(Math.random()-.5)*.3,H)}),Tn||[-11,-3.5,3.5,11].forEach((P,H)=>{tt(P,me-1.1,ae+.3,-.34-Math.random()*.1,(Math.random()-.5)*.4,H+3)});let Cn=new Mn;Cn.position.set(0,14.5,-20),ee.add(Cn);let da=[],fa=Tn?6:12;for(let P=0;P<fa;P+=1){let H=new Bt,fe=(P-(fa-1)/2)*1.35;H.setAttribute("position",new At(new Float32Array([0,0,0,fe*2.1,-9,52]),3));let le=new Os({color:16777215,transparent:!0,opacity:.1,blending:Ut,depthWrite:!1,fog:!1}),Ve=new oa(H,le);Cn.add(Ve),da.push({line:Ve,material:le,phase:Math.random()*Math.PI*2})}let Li=[];for(let P=0;P<(Tn?5:10);P+=1){let H=-18+P*4,fe=H*.58+(Math.random()-.5)*7,le=5+Math.random()*11,Ve=.4+Math.random()*2.6,qe=new Bt;qe.setAttribute("position",new At(new Float32Array([H,me-1.2,q+.2,fe,Ve,le]),3));let oe=new Os({color:16777215,transparent:!0,opacity:0,blending:Ut,depthWrite:!1,fog:!1}),Fe=new oa(qe,oe);ee.add(Fe),Li.push({material:oe,phase:Math.random()*Math.PI*2})}let Yi=new Mn;M.add(Yi);let ns=Tn?90:170,pa=new Ll(.36,1);pa.scale(1,1.1,.94);let Xs=new En(.27,.48,1.2,6),ma=new It(.1,1,.1);ma.translate(0,.5,0);let gr=new Pi({color:526348,roughness:.92,metalness:.04}),Ys=new Fs(pa,gr,ns),qs=new Fs(Xs,gr,ns),ga=new Fs(ma,gr,ns),Vt=new $t,vr=[],E=[],U=[],V=[];for(let P=0;P<ns;P+=1){let H=7+Math.pow(Math.random(),.72)*10.5,fe=6.8+(H-7)*1.15,le=(Math.random()*2-1)*fe,Ve=.86+Math.random()*.34,qe=1.58+(H-6)*.012;Vt.position.set(le,qe,H),Vt.rotation.set(0,Math.random()*Math.PI,0),Vt.scale.setScalar(Ve),Vt.updateMatrix(),Ys.setMatrixAt(P,Vt.matrix),Vt.position.set(le,qe-.95,H),Vt.updateMatrix(),qs.setMatrixAt(P,Vt.matrix);let oe=Math.random()>.42;if(Vt.position.set(le+(Math.random()>.5?.4:-.4)*Ve,qe-.3,H+.05),Vt.rotation.set((Math.random()-.5)*.4,0,(Math.random()-.5)*.8+(Math.random()>.5?.24:-.24)),Vt.scale.set(Ve,oe?Ve:Ve*.3,Ve),Vt.updateMatrix(),ga.setMatrixAt(P,Vt.matrix),V.push({x:le,z:H,headY:qe,phase:Math.random()*Math.PI*2}),Math.random()>.68&&vr.length<(Tn?24:56)){vr.push(le+(Math.random()-.5)*1.2,qe+.62+Math.random()*.45,H+.2),U.push(vr[vr.length-2]);let Fe=Math.random();Fe>.78?E.push(1,.6,.25):Fe>.58?E.push(.55,.82,1):E.push(1,.98,.92)}}Ys.instanceMatrix.needsUpdate=!0,qs.instanceMatrix.needsUpdate=!0,ga.instanceMatrix.needsUpdate=!0,Yi.add(Ys,qs,ga);let B=new Bt;B.setAttribute("position",new At(new Float32Array(vr),3)),B.setAttribute("color",new At(new Float32Array(E),3));let F=new Float32Array(vr),re=new ks(B,new jr({size:.55,map:W,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ut,sizeAttenuation:!0,opacity:.7,fog:!1}));re.renderOrder=4,M.add(re);let de=[],Te=Tn?8:16;for(let P=0;P<Te;P+=1){let H=new hi({map:W,color:bt[P%bt.length].wash,transparent:!0,depthWrite:!1,blending:Ut,opacity:.04+Math.random()*.035,fog:!1}),fe=new Ri(H);fe.position.set((Math.random()*2-1)*18,3+Math.random()*12,-18+Math.random()*28),fe.scale.set(28+Math.random()*26,16+Math.random()*12,1),fe.material.rotation=Math.random()*Math.PI,M.add(fe),de.push({sprite:fe,phase:Math.random()*Math.PI*2,speed:.05+Math.random()*.08})}let Ee=Tn?90:200,Ie=new Float32Array(Ee*3),Ue=new Float32Array(Ee);for(let P=0;P<Ee;P+=1)Ie[P*3]=(Math.random()*2-1)*22,Ie[P*3+1]=Math.random()*18,Ie[P*3+2]=-24+Math.random()*40,Ue[P]=.12+Math.random()*.4;let Ae=new Bt;Ae.setAttribute("position",new At(Ie.slice(),3));let at=new ks(Ae,new jr({size:.22,map:W,color:16771030,transparent:!0,opacity:.55,depthWrite:!1,blending:Ut,sizeAttenuation:!0,fog:!1}));M.add(at);let lt=Ae.attributes.position.array,St=Tn?120:280,_t=new Fs(new wn(.19,.4),new tn({side:ui,transparent:!0,opacity:.96,toneMapped:!1,fog:!1}),St);_t.frustumCulled=!1,_t.instanceMatrix.setUsage(zx),_t.renderOrder=5,M.add(_t);let nt=new ht().makeScale(0,0,0),be=[16777215,15986921,14275783,10327946,16777215,15131092],Ft=[];for(let P=0;P<St;P+=1)_t.setMatrixAt(P,nt),_t.setColorAt(P,new ze(be[P%be.length])),Ft.push({active:!1,position:new N,velocity:new N,rotation:new N,spin:new N,age:0,life:1,scale:1});_t.instanceColor&&(_t.instanceColor.needsUpdate=!0),_t.instanceMatrix.needsUpdate=!0;let rt=P=>{let H=0;for(let fe=0;fe<Ft.length&&H<P;fe+=1){let le=Ft[fe];le.active||(le.active=!0,le.age=0,le.life=3.4+Math.random()*2.8,le.scale=.55+Math.random()*1.15,le.position.set((Math.random()*2-1)*25,16.6+Math.random()*3,-12+Math.random()*6),le.velocity.set((Math.random()*2-1)*7,.6+Math.random()*5,(Math.random()-.35)*5+4.5),le.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),le.spin.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),H+=1)}return H},rn=Tn?90:190,Rn=new Float32Array(rn*3),kt=new Float32Array(rn*3),is=new Float32Array(rn),yt=new Bt;yt.setAttribute("position",new At(Rn,3));let fi=new jr({size:.62,map:W,color:16250092,transparent:!0,opacity:0,depthWrite:!1,blending:Ut,sizeAttenuation:!0,fog:!1}),Ni=new ks(yt,fi);Ni.frustumCulled=!1,Ni.visible=!1,Ni.renderOrder=6,M.add(Ni);let Jt=0,va=()=>{let P=[-12,-6,6,12];for(let H=0;H<rn;H+=1){let fe=P[H%P.length];Rn[H*3]=fe+(Math.random()-.5)*.8,Rn[H*3+1]=2.05,Rn[H*3+2]=ua+.3+Math.random()*.5,kt[H*3]=(Math.random()-.5)*2.3,kt[H*3+1]=14+Math.random()*14,kt[H*3+2]=1.2+Math.random()*4.4,is[H]=1.05+Math.random()*1.15}yt.attributes.position.needsUpdate=!0,Ni.visible=!0,Jt=2.2},rs=Tn?70:160,pi=new Float32Array(rs*3),ss=new Float32Array(rs*3),bh=new Float32Array(rs),zl=new Bt;zl.setAttribute("position",new At(pi,3));let Sg=new jr({size:.2,map:W,color:16774888,transparent:!0,opacity:0,depthWrite:!1,blending:Ut,sizeAttenuation:!0,fog:!1}),$s=new ks(zl,Sg);$s.frustumCulled=!1,$s.visible=!1,$s.renderOrder=6,M.add($s);let _a=0,jx=()=>{for(let P=0;P<rs;P+=1)pi[P*3]=(Math.random()*2-1)*22,pi[P*3+1]=17.5+Math.random()*4,pi[P*3+2]=-14+Math.random()*16,ss[P*3]=(Math.random()-.5)*4,ss[P*3+1]=1.5+Math.random()*6,ss[P*3+2]=(Math.random()-.5)*3,bh[P]=1.4+Math.random()*2.2;zl.attributes.position.needsUpdate=!0,$s.visible=!0,_a=4},wg=()=>{rt(Tn?80:210),va(),jx()},Eg=[],Tg=Tn?5:9;for(let P=0;P<Tg;P+=1){let H=new Ri(new hi({map:W,color:16777215,transparent:!0,depthWrite:!1,blending:Ut,opacity:0,fog:!1}));H.position.set(-17+P/Math.max(1,Tg-1)*34,me-.15,q+.9),H.scale.set(7,7,1),ee.add(H),Eg.push({sprite:H,phase:Math.random()*Math.PI*2})}let Ag=[];for(let P=0;P<7;P+=1){let H=new Ri(new hi({map:W,color:16777215,transparent:!0,depthWrite:!1,blending:Ut,opacity:0,fog:!1}));H.position.set((Math.random()*2-1)*15,2.1+Math.random()*1.6,8+Math.random()*9),H.scale.set(1.6,1.6,1),M.add(H),Ag.push({sprite:H,next:Math.random()*3,peak:0})}let X2=new xh,Qx=new Map,Ch=new Map,Rh=0,eM=P=>new Promise(H=>{if(!P){H(null);return}if(Ch.has(P)){H(Ch.get(P));return}let fe=new Image;fe.crossOrigin="anonymous",fe.decoding="async",fe.onload=()=>{Ch.set(P,fe),H(fe)},fe.onerror=()=>H(null),fe.src=P}),Ph=async P=>{let H=e[P];if(!H)return;Rh+=1;let fe=Rh,le=bt[P%bt.length];xg(Ce,H,le,null),ue.forEach((oe,Fe)=>B2(oe.surface,H,le,P+Fe*3,e.length)),Ih();let Ve=H.hero||H.image,qe=await eM(Ve);fe===Rh&&(qe?xg(Ce,H,le,qe):xg(Ce,H,le,null),Ih())},Ih=()=>{},Lh=P=>{let H=bt[P%bt.length];Zs.beam.setHex(H.beam),Zs.warm.setHex(H.warm),Zs.wash.setHex(H.wash)},vt={beam:new ze(bt[n%bt.length].beam),warm:new ze(bt[n%bt.length].warm),wash:new ze(bt[n%bt.length].wash)},Zs={beam:new ze(bt[n%bt.length].beam),warm:new ze(bt[n%bt.length].warm),wash:new ze(bt[n%bt.length].wash)},Nh=h/_<.95,Ks={audience:Nh?{pos:[0,4.4,35],look:[0,5.4,-22],fov:50}:{pos:[0,2.6,24],look:[0,8.8,-22],fov:42},stage:Nh?{pos:[0,5.6,6],look:[0,10.6,-24],fov:58}:{pos:[0,6.4,6.5],look:[0,11.4,-24],fov:52},drone:Nh?{pos:[0,34,20],look:[0,3,-16],fov:56}:{pos:[0,27,14],look:[0,3,-16],fov:46}},bg=P=>{let H=Ks[P]||Ks.audience;R.set(H.pos[0],H.pos[1],H.pos[2]),G.set(H.look[0],H.look[1],H.look[2])};bg(c.current.view);let kn={x:0,y:0,tx:0,ty:0},ct={x:0,y:0,tx:0,ty:0,active:!1,lastX:0,lastY:0},Cg=0,st=0,Dh=0,Uh=performance.now()/1e3,Fh=-1,Oh=0,Rg=c.current.boost,kh=!0,Js=null,zh=!1,Pg=P=>{if(P.pointerType==="touch")return;let H=u.getBoundingClientRect();kn.tx=(P.clientX-H.left)/H.width*2-1,kn.ty=(P.clientY-H.top)/H.height*2-1,ct.active&&(ct.tx=cn.clamp(ct.tx+(P.clientX-ct.lastX)/H.width*.85,-.32,.32),ct.ty=cn.clamp(ct.ty+(P.clientY-ct.lastY)/H.height*.45,-.18,.18),ct.lastX=P.clientX,ct.lastY=P.clientY)},Ig=P=>{P.pointerType!=="touch"&&(P.target.closest&&P.target.closest("a, button, input, select, textarea, .af-hud")||(ct.active=!0,ct.lastX=P.clientX,ct.lastY=P.clientY,u.classList.add("is-dragging"),u.setPointerCapture&&u.setPointerCapture(P.pointerId)))},Bl=()=>{ct.active=!1,u.classList.remove("is-dragging")},Vl=()=>{let P=u.getBoundingClientRect();Cg=cn.clamp(-P.top/Math.max(P.height,1),0,1)},Bh=()=>{let P=u.clientWidth||window.innerWidth,H=u.clientHeight||window.innerHeight;p.setPixelRatio(Math.min(window.devicePixelRatio||1,Tn?1.6:1.8)),p.setSize(P,H),C.aspect=P/H,C.updateProjectionMatrix(),Vl()};u.addEventListener("pointermove",Pg,{passive:!0}),u.addEventListener("pointerdown",Ig),window.addEventListener("pointerup",Bl),window.addEventListener("blur",Bl),window.addEventListener("scroll",Vl,{passive:!0}),window.addEventListener("resize",Bh);let Hl="ResizeObserver"in window?new ResizeObserver(Bh):null;Hl&&Hl.observe(u);let Gl="IntersectionObserver"in window?new IntersectionObserver(P=>{P.forEach(H=>{kh=H.isIntersecting,kh?Wl():Xl()})},{rootMargin:"180px"}):null;Gl&&Gl.observe(u);let Lg=()=>{document.hidden?Xl():kh&&Wl()};document.addEventListener("visibilitychange",Lg);let Ng=P=>{P.preventDefault(),u.classList.add("is-fallback"),v(),Xl()};p.domElement.addEventListener("webglcontextlost",Ng,!1);let ei=null,Vh=()=>{c.current.sound?(ei||(ei=V2()),ei&&ei.start()):ei&&ei.stop()},os=(P,H)=>{let fe=H?st*Zx/60:0,le=H?Math.pow(1-fe%1,3):0,Ve=H&&st<Oh,qe=Ve?Math.pow(1-fe*2%1,2):0;if(vt.beam.lerp(Zs.beam,Math.min(1,P*2.4)),vt.warm.lerp(Zs.warm,Math.min(1,P*2.4)),vt.wash.lerp(Zs.wash,Math.min(1,P*2.4)),Xe.material.color.copy(vt.wash),Xe.material.opacity=.4+le*.16+qe*.22,Le.color.copy(vt.beam),Le.opacity=.5+le*.35+qe*.4,we.material.color.copy(vt.beam),k.material.opacity=.09+le*.05,$.material.color.copy(vt.wash),$.material.opacity=.2+le*.08+qe*.06,L.color.copy(vt.beam),L.intensity=80+le*40+qe*40,O.color.copy(vt.warm),O.intensity=22+le*6,ye.forEach(oe=>{oe.material.color.copy(vt.warm)}),xe.forEach(oe=>{oe.material.color.copy(vt.wash),oe.material.opacity=.08+le*.07}),Ct.forEach((oe,Fe)=>{H&&(oe.group.rotation.x=cn.damp(oe.group.rotation.x,oe.targetTilt,3.2,P),oe.group.rotation.z=cn.damp(oe.group.rotation.z,oe.targetPan,3.2,P));let Ht=H?.09+le*.085+qe*.14:.12;oe.beam.planes.forEach(Xt=>{Xt.color.copy(Fe%4===0?vt.beam:vt.warm),Xt.opacity=Ht}),oe.lens.material.color.copy(vt.warm),oe.flare.material.color.copy(vt.warm),oe.flare.material.opacity=H?.55+le*.35+qe*.3:.6,oe.flare.scale.setScalar(2+le*.9+qe*.7)}),Cn.rotation.z=H?Math.sin(st*.3)*.1+ct.x*.6:0,Cn.rotation.y=H?Math.sin(st*.19)*.14:0,da.forEach((oe,Fe)=>{oe.material.color.copy(Fe%3===0?vt.warm:vt.beam),oe.material.opacity=H?Ve?.34+Math.sin(st*16+oe.phase)*.16:.03+Math.sin(st*.8+oe.phase)*.02:.05}),Li.forEach((oe,Fe)=>{oe.material.color.copy(Fe%2===0?vt.beam:vt.warm),oe.material.opacity=Ve?.08+Math.max(0,Math.sin(st*8+oe.phase))*.24:0}),Ze.forEach((oe,Fe)=>{let Ht=H?le*.028+Math.sin(st*1.15+oe.phase)*.014:0;oe.group.position.y=oe.baseY+Ht,oe.group.rotation.z=H?Math.sin(st*.7+oe.phase)*.008:0,oe.halo.material.color.copy(vt.wash),oe.halo.material.opacity=.06+le*.06+qe*.1,oe.halo.scale.set(3.1+le*.2,4.2+qe*.5,1),oe.arms.forEach((Xt,ti)=>{Xt.pivot.rotation.z=H?Xt.base+Math.sin(st*1.35+oe.phase+ti*1.7)*(Fe===0?.12:.06):Xt.base})}),J.rotation.y=H?st*.08:0,je.material.opacity=.1+le*.1+qe*.12,he.forEach(oe=>{oe.bulb.material.color.copy(vt.warm),oe.bulb.material.opacity=.22+Math.max(0,Math.sin(st*1.6+oe.phase))*.34+(Ve?.2:0),oe.bulb.scale.setScalar(.9+le*.45)}),ue.forEach((oe,Fe)=>{oe.panel.material.color.copy(Fe===0?vt.warm:vt.beam)}),Dh+=P,H&&Dh>.095&&(Dh=0,Je(st,le)),H){Yi.position.y=le*.09+qe*.05,Yi.position.x=Math.sin(st*.33)*.3,Yi.rotation.y=Math.sin(st*.16)*.005;let oe=B.attributes.position.array;for(let Q=0;Q<oe.length;Q+=3)oe[Q]=F[Q]+Math.sin(st*.7+Q)*.09,oe[Q+1]=F[Q+1]+Math.sin(st*1.3+Q*.5)*.05;B.attributes.position.needsUpdate=!0,de.forEach((Q,hn)=>{Q.sprite.position.x+=Math.sin(st*Q.speed+Q.phase)*P*.4,Q.sprite.position.y+=Math.cos(st*Q.speed*.7+Q.phase)*P*.12,Q.sprite.material.rotation+=P*.01,Q.sprite.material.color.copy(hn%3===0?vt.wash:vt.beam),Q.sprite.material.opacity=.035+le*.02});for(let Q=0;Q<Ee;Q+=1)lt[Q*3+1]+=Ue[Q]*P,lt[Q*3]+=Math.sin(st*.4+Q)*P*.05,lt[Q*3+1]>20&&(lt[Q*3+1]=0,lt[Q*3]=(Math.random()*2-1)*22);if(Ae.attributes.position.needsUpdate=!0,Ft.forEach((Q,hn)=>{if(!Q.active)return;if(Q.age+=P,Q.velocity.y-=9.2*P,Q.velocity.multiplyScalar(.996),Q.position.addScaledVector(Q.velocity,P),Q.rotation.x+=Q.spin.x*P,Q.rotation.y+=Q.spin.y*P,Q.rotation.z+=Q.spin.z*P,Q.position.y<.08||Q.age>Q.life){Q.active=!1,_t.setMatrixAt(hn,nt);return}let dn=Math.min(1,(Q.life-Q.age)*1.8);Vt.position.copy(Q.position),Vt.rotation.set(Q.rotation.x,Q.rotation.y,Q.rotation.z),Vt.scale.setScalar(Q.scale*dn),Vt.updateMatrix(),_t.setMatrixAt(hn,Vt.matrix)}),_t.instanceMatrix.needsUpdate=!0,Jt>0){Jt-=P,fi.opacity=Math.min(1,Jt/1.35)*.92;for(let Q=0;Q<rn;Q+=1){if(is[Q]-=P,is[Q]<=0){Rn[Q*3+1]=-40;continue}kt[Q*3+1]-=6.4*P,Rn[Q*3]+=kt[Q*3]*P,Rn[Q*3+1]+=kt[Q*3+1]*P,Rn[Q*3+2]+=kt[Q*3+2]*P}yt.attributes.position.needsUpdate=!0,Jt<=0&&(Ni.visible=!1)}if(_a>0){_a-=P,Sg.opacity=Math.min(1,_a/2.4)*.9;for(let Q=0;Q<rs;Q+=1){if(bh[Q]-=P,bh[Q]<=0){pi[Q*3+1]=-40;continue}ss[Q*3+1]-=7.6*P,pi[Q*3]+=ss[Q*3]*P,pi[Q*3+1]+=ss[Q*3+1]*P,pi[Q*3+2]+=ss[Q*3+2]*P}zl.attributes.position.needsUpdate=!0,_a<=0&&($s.visible=!1)}Eg.forEach(Q=>{let hn=Ve?Math.sin(st*24+Q.phase)>.1?1:.08:le>.9?1:0;Q.sprite.material.color.copy(vt.warm),Q.sprite.material.opacity=.04+hn*.62,Q.sprite.scale.setScalar(5+hn*3.4)}),Ag.forEach(Q=>{Q.peak*=Math.pow(.015,P),st>Q.next&&(Q.peak=.85+Math.random()*.15,Q.next=st+.5+Math.random()*3.2,Q.sprite.position.set((Math.random()*2-1)*15,2+Math.random()*1.8,8+Math.random()*9)),Q.sprite.material.opacity=Q.peak*.9,Q.sprite.scale.setScalar(1.1+Q.peak*3.4)}),kn.x=cn.damp(kn.x,kn.tx,3.2,P),kn.y=cn.damp(kn.y,kn.ty,3.2,P),ct.active?(ct.x=cn.damp(ct.x,ct.tx,8,P),ct.y=cn.damp(ct.y,ct.ty,8,P)):(ct.x+=(0-ct.x)*Math.min(1,P*.6),ct.y+=(0-ct.y)*Math.min(1,P*.6));let Fe=c.current.view,Ht=Ks[Fe]||Ks.audience,Xt=Fe==="audience"?Cg*4.5:0,ti=Fe==="audience"?Math.sin(st*.075)*.5:0,Di=Fe==="audience"?Math.sin(st*.105)*.2:0;R.set(Ht.pos[0]+kn.x*1.5+ct.x*8+ti,Ht.pos[1]-kn.y*.7+Xt*.28-ct.y*4+Di,Ht.pos[2]-Xt),G.set(Ht.look[0]+kn.x*1.2+ct.x*12,Ht.look[1]-kn.y*.6+ct.y*5,Ht.look[2]),A.x=cn.damp(A.x,R.x,2.3,P),A.y=cn.damp(A.y,R.y,2.3,P),A.z=cn.damp(A.z,R.z,2.3,P),T.x=cn.damp(T.x,G.x,2.6,P),T.y=cn.damp(T.y,G.y,2.6,P),T.z=cn.damp(T.z,G.z,2.6,P);let js=Ve?.05:.009;C.position.set(A.x+Math.sin(st*39)*js*le,A.y+Math.cos(st*35)*js*le,A.z),C.lookAt(T);let as=Ht.fov+le*.4+(Ve?1.1:0);C.fov=cn.damp(C.fov,as,2,P),C.updateProjectionMatrix()}H&&Math.floor(fe)!==Fh&&(Fh=Math.floor(fe),Ct.forEach(oe=>{let Fe=Ve||Fh%8===0;oe.targetTilt=oe.baseTilt+Math.sin(st*.55+oe.phase)*.14+(Fe?(Math.random()-.55)*.36:0)+kn.y*.08,oe.targetPan=oe.basePan+Math.sin(st*.4+oe.phase*1.6)*(Fe?.4:.14)+ct.x*.5+kn.x*.16})),p.render(M,C)};x&&(Ih=()=>os(.016,!1));let Dg=()=>{if(zh)return;Js=requestAnimationFrame(Dg);let P=performance.now()/1e3,H=Math.min(.05,P-Uh);Uh=P,st+=H,c.current.boost!==Rg&&(Rg=c.current.boost,Oh=st+2.6,wg()),os(H,!0)},Wl=()=>{x||zh||Js!==null||(Uh=performance.now()/1e3,Js=requestAnimationFrame(Dg))},Xl=()=>{Js!==null&&(cancelAnimationFrame(Js),Js=null)};Ph(c.current.index),Lh(c.current.index),Vh(),Vl(),os(.016,!x),m();let Ug=()=>{try{return os(.016,!1),p.domElement.toDataURL("image/png")}catch(P){return null}};return x?(l.current={show(P){Ph(P),Lh(P),os(.016,!1)},view(P){let H=Ks[P]||Ks.audience;C.position.set(H.pos[0],H.pos[1],H.pos[2]),C.lookAt(H.look[0],H.look[1],H.look[2]),C.fov=H.fov,C.updateProjectionMatrix(),os(.016,!1)},sound(P){c.current.sound=P,Vh()},burst(){ei&&ei.burst(),os(.016,!1)},capture:Ug},Wl()):(l.current={show(P){Ph(P),Lh(P)},view(P){bg(P)},sound(P){c.current.sound=P,Vh()},burst(){Oh=st+2.6,ei&&ei.burst(),wg()},capture:Ug},Wl()),()=>{zh=!0,Xl(),ei&&ei.destroy(),u.removeEventListener("pointermove",Pg),u.removeEventListener("pointerdown",Ig),window.removeEventListener("pointerup",Bl),window.removeEventListener("blur",Bl),window.removeEventListener("scroll",Vl),window.removeEventListener("resize",Bh),document.removeEventListener("visibilitychange",Lg),p.domElement.removeEventListener("webglcontextlost",Ng),Hl&&Hl.disconnect(),Gl&&Gl.disconnect(),p.dispose(),p.domElement.parentNode===u&&u.removeChild(p.domElement),u.classList.remove("is-ready","is-dragging"),v(),Qx.forEach(P=>P.dispose()),W.dispose(),ge.dispose(),Ce.texture.dispose(),I.dispose(),ue.forEach(P=>P.surface.texture.dispose()),M.traverse(P=>{P.geometry&&P.geometry.dispose(),P.material&&(Array.isArray(P.material)?P.material:[P.material]).forEach(fe=>{fe.map&&fe.map!==W&&fe.map!==ge&&fe.map!==Ce.texture&&fe.map.dispose(),fe.dispose()})})}},[]),(0,An.useEffect)(()=>{l.current&&l.current.show(n)},[n]),(0,An.useEffect)(()=>{l.current&&l.current.view(i)},[i]),(0,An.useEffect)(()=>{l.current&&l.current.sound(r)},[r]),(0,An.useEffect)(()=>{s>0&&l.current&&(l.current.boost?l.current.boost():l.current.burst())},[s]),(0,An.useImperativeHandle)(o,()=>({capture(){return l.current&&l.current.capture?l.current.capture():null}}),[]),An.default.createElement("div",{className:"af-stage__scene",ref:a,"aria-hidden":"true"})}),Kx=G2;var Ws=null,kl=Ah.default.createRef(),ha=0;function Mg(t){Ws&&Ws.render(Ah.default.createElement(Kx,{ref:kl,...t}))}function W2(t){ha||(ha=window.requestAnimationFrame(()=>{ha=0,Mg(t)}))}window.AFStage={mount(t,e){Ws||(Ws=(0,Jx.createRoot)(t),kl=Ah.default.createRef()),Mg(e);let n=e;return{update(i){n=i,W2(n)},capture(){return kl.current&&kl.current.capture?kl.current.capture():null},destroy(){ha&&(window.cancelAnimationFrame(ha),ha=0),Ws&&Ws.unmount(),Ws=null}}}};})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
