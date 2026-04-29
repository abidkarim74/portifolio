(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))f(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&f(y)}).observe(document,{childList:!0,subtree:!0});function u(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function f(p){if(p.ep)return;p.ep=!0;const h=u(p);fetch(p.href,h)}})();var Ql={exports:{}},Pr={},Yl={exports:{}},Z={};var ic;function Df(){if(ic)return Z;ic=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),y=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),E=Symbol.iterator;function I(v){return v===null||typeof v!="object"?null:(v=E&&v[E]||v["@@iterator"],typeof v=="function"?v:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,O={};function T(v,z,q){this.props=v,this.context=z,this.refs=O,this.updater=q||H}T.prototype.isReactComponent={},T.prototype.setState=function(v,z){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,z,"setState")},T.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Y(){}Y.prototype=T.prototype;function U(v,z,q){this.props=v,this.context=z,this.refs=O,this.updater=q||H}var J=U.prototype=new Y;J.constructor=U,X(J,T.prototype),J.isPureReactComponent=!0;var ae=Array.isArray,se=Object.prototype.hasOwnProperty,he={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function be(v,z,q){var ee,ne={},re=null,ue=null;if(z!=null)for(ee in z.ref!==void 0&&(ue=z.ref),z.key!==void 0&&(re=""+z.key),z)se.call(z,ee)&&!ye.hasOwnProperty(ee)&&(ne[ee]=z[ee]);var le=arguments.length-2;if(le===1)ne.children=q;else if(1<le){for(var pe=Array(le),Ke=0;Ke<le;Ke++)pe[Ke]=arguments[Ke+2];ne.children=pe}if(v&&v.defaultProps)for(ee in le=v.defaultProps,le)ne[ee]===void 0&&(ne[ee]=le[ee]);return{$$typeof:o,type:v,key:re,ref:ue,props:ne,_owner:he.current}}function Oe(v,z){return{$$typeof:o,type:v.type,key:z,ref:v.ref,props:v.props,_owner:v._owner}}function Fe(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function nn(v){var z={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(q){return z[q]})}var ht=/\/+/g;function Ge(v,z){return typeof v=="object"&&v!==null&&v.key!=null?nn(""+v.key):z.toString(36)}function ot(v,z,q,ee,ne){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var ue=!1;if(v===null)ue=!0;else switch(re){case"string":case"number":ue=!0;break;case"object":switch(v.$$typeof){case o:case c:ue=!0}}if(ue)return ue=v,ne=ne(ue),v=ee===""?"."+Ge(ue,0):ee,ae(ne)?(q="",v!=null&&(q=v.replace(ht,"$&/")+"/"),ot(ne,z,q,"",function(Ke){return Ke})):ne!=null&&(Fe(ne)&&(ne=Oe(ne,q+(!ne.key||ue&&ue.key===ne.key?"":(""+ne.key).replace(ht,"$&/")+"/")+v)),z.push(ne)),1;if(ue=0,ee=ee===""?".":ee+":",ae(v))for(var le=0;le<v.length;le++){re=v[le];var pe=ee+Ge(re,le);ue+=ot(re,z,q,pe,ne)}else if(pe=I(v),typeof pe=="function")for(v=pe.call(v),le=0;!(re=v.next()).done;)re=re.value,pe=ee+Ge(re,le++),ue+=ot(re,z,q,pe,ne);else if(re==="object")throw z=String(v),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ue}function gt(v,z,q){if(v==null)return v;var ee=[],ne=0;return ot(v,ee,"","",function(re){return z.call(q,re,ne++)}),ee}function Be(v){if(v._status===-1){var z=v._result;z=z(),z.then(function(q){(v._status===0||v._status===-1)&&(v._status=1,v._result=q)},function(q){(v._status===0||v._status===-1)&&(v._status=2,v._result=q)}),v._status===-1&&(v._status=0,v._result=z)}if(v._status===1)return v._result.default;throw v._result}var we={current:null},M={transition:null},G={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:M,ReactCurrentOwner:he};function A(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:gt,forEach:function(v,z,q){gt(v,function(){z.apply(this,arguments)},q)},count:function(v){var z=0;return gt(v,function(){z++}),z},toArray:function(v){return gt(v,function(z){return z})||[]},only:function(v){if(!Fe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},Z.Component=T,Z.Fragment=u,Z.Profiler=p,Z.PureComponent=U,Z.StrictMode=f,Z.Suspense=S,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Z.act=A,Z.cloneElement=function(v,z,q){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ee=X({},v.props),ne=v.key,re=v.ref,ue=v._owner;if(z!=null){if(z.ref!==void 0&&(re=z.ref,ue=he.current),z.key!==void 0&&(ne=""+z.key),v.type&&v.type.defaultProps)var le=v.type.defaultProps;for(pe in z)se.call(z,pe)&&!ye.hasOwnProperty(pe)&&(ee[pe]=z[pe]===void 0&&le!==void 0?le[pe]:z[pe])}var pe=arguments.length-2;if(pe===1)ee.children=q;else if(1<pe){le=Array(pe);for(var Ke=0;Ke<pe;Ke++)le[Ke]=arguments[Ke+2];ee.children=le}return{$$typeof:o,type:v.type,key:ne,ref:re,props:ee,_owner:ue}},Z.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:h,_context:v},v.Consumer=v},Z.createElement=be,Z.createFactory=function(v){var z=be.bind(null,v);return z.type=v,z},Z.createRef=function(){return{current:null}},Z.forwardRef=function(v){return{$$typeof:N,render:v}},Z.isValidElement=Fe,Z.lazy=function(v){return{$$typeof:b,_payload:{_status:-1,_result:v},_init:Be}},Z.memo=function(v,z){return{$$typeof:C,type:v,compare:z===void 0?null:z}},Z.startTransition=function(v){var z=M.transition;M.transition={};try{v()}finally{M.transition=z}},Z.unstable_act=A,Z.useCallback=function(v,z){return we.current.useCallback(v,z)},Z.useContext=function(v){return we.current.useContext(v)},Z.useDebugValue=function(){},Z.useDeferredValue=function(v){return we.current.useDeferredValue(v)},Z.useEffect=function(v,z){return we.current.useEffect(v,z)},Z.useId=function(){return we.current.useId()},Z.useImperativeHandle=function(v,z,q){return we.current.useImperativeHandle(v,z,q)},Z.useInsertionEffect=function(v,z){return we.current.useInsertionEffect(v,z)},Z.useLayoutEffect=function(v,z){return we.current.useLayoutEffect(v,z)},Z.useMemo=function(v,z){return we.current.useMemo(v,z)},Z.useReducer=function(v,z,q){return we.current.useReducer(v,z,q)},Z.useRef=function(v){return we.current.useRef(v)},Z.useState=function(v){return we.current.useState(v)},Z.useSyncExternalStore=function(v,z,q){return we.current.useSyncExternalStore(v,z,q)},Z.useTransition=function(){return we.current.useTransition()},Z.version="18.3.1",Z}var ac;function ro(){return ac||(ac=1,Yl.exports=Df()),Yl.exports}var lc;function Of(){if(lc)return Pr;lc=1;var o=ro(),c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function y(N,S,C){var b,E={},I=null,H=null;C!==void 0&&(I=""+C),S.key!==void 0&&(I=""+S.key),S.ref!==void 0&&(H=S.ref);for(b in S)f.call(S,b)&&!h.hasOwnProperty(b)&&(E[b]=S[b]);if(N&&N.defaultProps)for(b in S=N.defaultProps,S)E[b]===void 0&&(E[b]=S[b]);return{$$typeof:c,type:N,key:I,ref:H,props:E,_owner:p.current}}return Pr.Fragment=u,Pr.jsx=y,Pr.jsxs=y,Pr}var oc;function Ff(){return oc||(oc=1,Ql.exports=Of()),Ql.exports}var l=Ff(),j=ro(),Qi={},Gl={exports:{}},Ye={},Kl={exports:{}},Xl={};var sc;function Af(){return sc||(sc=1,(function(o){function c(M,G){var A=M.length;M.push(G);e:for(;0<A;){var v=A-1>>>1,z=M[v];if(0<p(z,G))M[v]=G,M[A]=z,A=v;else break e}}function u(M){return M.length===0?null:M[0]}function f(M){if(M.length===0)return null;var G=M[0],A=M.pop();if(A!==G){M[0]=A;e:for(var v=0,z=M.length,q=z>>>1;v<q;){var ee=2*(v+1)-1,ne=M[ee],re=ee+1,ue=M[re];if(0>p(ne,A))re<z&&0>p(ue,ne)?(M[v]=ue,M[re]=A,v=re):(M[v]=ne,M[ee]=A,v=ee);else if(re<z&&0>p(ue,A))M[v]=ue,M[re]=A,v=re;else break e}}return G}function p(M,G){var A=M.sortIndex-G.sortIndex;return A!==0?A:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var y=Date,N=y.now();o.unstable_now=function(){return y.now()-N}}var S=[],C=[],b=1,E=null,I=3,H=!1,X=!1,O=!1,T=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(M){for(var G=u(C);G!==null;){if(G.callback===null)f(C);else if(G.startTime<=M)f(C),G.sortIndex=G.expirationTime,c(S,G);else break;G=u(C)}}function ae(M){if(O=!1,J(M),!X)if(u(S)!==null)X=!0,Be(se);else{var G=u(C);G!==null&&we(ae,G.startTime-M)}}function se(M,G){X=!1,O&&(O=!1,Y(be),be=-1),H=!0;var A=I;try{for(J(G),E=u(S);E!==null&&(!(E.expirationTime>G)||M&&!nn());){var v=E.callback;if(typeof v=="function"){E.callback=null,I=E.priorityLevel;var z=v(E.expirationTime<=G);G=o.unstable_now(),typeof z=="function"?E.callback=z:E===u(S)&&f(S),J(G)}else f(S);E=u(S)}if(E!==null)var q=!0;else{var ee=u(C);ee!==null&&we(ae,ee.startTime-G),q=!1}return q}finally{E=null,I=A,H=!1}}var he=!1,ye=null,be=-1,Oe=5,Fe=-1;function nn(){return!(o.unstable_now()-Fe<Oe)}function ht(){if(ye!==null){var M=o.unstable_now();Fe=M;var G=!0;try{G=ye(!0,M)}finally{G?Ge():(he=!1,ye=null)}}else he=!1}var Ge;if(typeof U=="function")Ge=function(){U(ht)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,gt=ot.port2;ot.port1.onmessage=ht,Ge=function(){gt.postMessage(null)}}else Ge=function(){T(ht,0)};function Be(M){ye=M,he||(he=!0,Ge())}function we(M,G){be=T(function(){M(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(M){M.callback=null},o.unstable_continueExecution=function(){X||H||(X=!0,Be(se))},o.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<M?Math.floor(1e3/M):5},o.unstable_getCurrentPriorityLevel=function(){return I},o.unstable_getFirstCallbackNode=function(){return u(S)},o.unstable_next=function(M){switch(I){case 1:case 2:case 3:var G=3;break;default:G=I}var A=I;I=G;try{return M()}finally{I=A}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var A=I;I=M;try{return G()}finally{I=A}},o.unstable_scheduleCallback=function(M,G,A){var v=o.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?v+A:v):A=v,M){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=A+z,M={id:b++,callback:G,priorityLevel:M,startTime:A,expirationTime:z,sortIndex:-1},A>v?(M.sortIndex=A,c(C,M),u(S)===null&&M===u(C)&&(O?(Y(be),be=-1):O=!0,we(ae,A-v))):(M.sortIndex=z,c(S,M),X||H||(X=!0,Be(se))),M},o.unstable_shouldYield=nn,o.unstable_wrapCallback=function(M){var G=I;return function(){var A=I;I=G;try{return M.apply(this,arguments)}finally{I=A}}}})(Xl)),Xl}var uc;function Uf(){return uc||(uc=1,Kl.exports=Af()),Kl.exports}var cc;function Bf(){if(cc)return Ye;cc=1;var o=ro(),c=Uf();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function h(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},E={};function I(e){return S.call(E,e)?!0:S.call(b,e)?!1:C.test(e)?E[e]=!0:(b[e]=!0,!1)}function H(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,n,r){if(t===null||typeof t>"u"||H(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y,U);T[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y,U);T[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y,U);T[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function J(e,t,n,r){var i=T.hasOwnProperty(t)?T[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,n,i,r)&&(n=null),r||i===null?I(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ae=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),he=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),nn=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,v;function z(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var q=!1;function ee(e,t){if(!e||q)return"";q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var r=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){r=k}e.call(t.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var i=k.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,d=a.length-1;1<=s&&0<=d&&i[s]!==a[d];)d--;for(;1<=s&&0<=d;s--,d--)if(i[s]!==a[d]){if(s!==1||d!==1)do if(s--,d--,0>d||i[s]!==a[d]){var m=`
`+i[s].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=s&&0<=d);break}}}finally{q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function ne(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case he:return"Portal";case Oe:return"Profiler";case be:return"StrictMode";case Ge:return"Suspense";case ot:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nn:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(t);case 8:return t===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Ke(e))}function uo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zi(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function co(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fo(e,t){t=t.checked,t!=null&&J(e,"checked",t,!1)}function ea(e,t){fo(e,t);var n=le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ta(e,t.type,n):t.hasOwnProperty("defaultValue")&&ta(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function po(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ta(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Vn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function ho(e,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,xo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function yo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Uc=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,t){if(t){if(Uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function oa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,yn=null,wn=null;function ko(e){if(e=hr(e)){if(typeof sa!="function")throw Error(u(280));var t=e.stateNode;t&&(t=oi(t),sa(e.stateNode,e.type,t))}}function jo(e){yn?wn?wn.push(e):wn=[e]:yn=e}function So(){if(yn){var e=yn,t=wn;if(wn=yn=null,ko(e),t)for(e=0;e<t.length;e++)ko(t[e])}}function No(e,t){return e(t)}function bo(){}var ua=!1;function Eo(e,t,n){if(ua)return e(t,n);ua=!0;try{return No(e,t,n)}finally{ua=!1,(yn!==null||wn!==null)&&(bo(),So())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var ca=!1;if(N)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){ca=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{ca=!1}function Bc(e,t,n,r,i,a,s,d,m){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(P){this.onError(P)}}var Xn=!1,Ar=null,Ur=!1,da=null,Wc={onError:function(e){Xn=!0,Ar=e}};function $c(e,t,n,r,i,a,s,d,m){Xn=!1,Ar=null,Bc.apply(Wc,arguments)}function Hc(e,t,n,r,i,a,s,d,m){if($c.apply(this,arguments),Xn){if(Xn){var k=Ar;Xn=!1,Ar=null}else throw Error(u(198));Ur||(Ur=!0,da=k)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Co(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ro(e){if(rn(e)!==e)throw Error(u(188))}function Vc(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ro(i),e;if(a===r)return Ro(i),t;a=a.sibling}throw Error(u(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,d=i.child;d;){if(d===n){s=!0,n=i,r=a;break}if(d===r){s=!0,r=i,n=a;break}d=d.sibling}if(!s){for(d=a.child;d;){if(d===n){s=!0,n=a,r=i;break}if(d===r){s=!0,r=a,n=i;break}d=d.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function zo(e){return e=Vc(e),e!==null?Po(e):null}function Po(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Po(e);if(t!==null)return t;e=e.sibling}return null}var Lo=c.unstable_scheduleCallback,_o=c.unstable_cancelCallback,Qc=c.unstable_shouldYield,Yc=c.unstable_requestPaint,je=c.unstable_now,Gc=c.unstable_getCurrentPriorityLevel,fa=c.unstable_ImmediatePriority,To=c.unstable_UserBlockingPriority,Br=c.unstable_NormalPriority,Kc=c.unstable_LowPriority,Io=c.unstable_IdlePriority,Wr=null,vt=null;function Xc(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Wr,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Zc,Jc=Math.log,qc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Jc(e)/qc|0)|0}var $r=64,Hr=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var d=s&~i;d!==0?r=Jn(d):(a&=s,a!==0&&(r=Jn(a)))}else s=n&~i,s!==0?r=Jn(s):a!==0&&(r=Jn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-st(a),d=1<<s,m=i[s];m===-1?((d&n)===0||(d&r)!==0)&&(i[s]=ed(d,t)):m<=t&&(e.expiredLanes|=d),a&=~d}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mo(){var e=$r;return $r<<=1,($r&4194240)===0&&($r=64),e}function ma(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function nd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Do(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Oo,ga,Fo,Ao,Uo,va=!1,Qr=[],It=null,Mt=null,Dt=null,Zn=new Map,er=new Map,Ot=[],rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bo(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function tr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=hr(t),t!==null&&ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function id(e,t,n,r,i){switch(t){case"focusin":return It=tr(It,e,t,n,r,i),!0;case"dragenter":return Mt=tr(Mt,e,t,n,r,i),!0;case"mouseover":return Dt=tr(Dt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Zn.set(a,tr(Zn.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,er.set(a,tr(er.get(a)||null,e,t,n,r,i)),!0}return!1}function Wo(e){var t=an(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Co(n),t!==null){e.blockedOn=t,Uo(e.priority,function(){Fo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);la=r,n.target.dispatchEvent(r),la=null}else return t=hr(n),t!==null&&ga(t),e.blockedOn=n,!1;t.shift()}return!0}function $o(e,t,n){Yr(e)&&n.delete(t)}function ad(){va=!1,It!==null&&Yr(It)&&(It=null),Mt!==null&&Yr(Mt)&&(Mt=null),Dt!==null&&Yr(Dt)&&(Dt=null),Zn.forEach($o),er.forEach($o)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,va||(va=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ad)))}function rr(e){function t(i){return nr(i,e)}if(0<Qr.length){nr(Qr[0],e);for(var n=1;n<Qr.length;n++){var r=Qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&nr(It,e),Mt!==null&&nr(Mt,e),Dt!==null&&nr(Dt,e),Zn.forEach(t),er.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Wo(n),n.blockedOn===null&&Ot.shift()}var kn=ae.ReactCurrentBatchConfig,Gr=!0;function ld(e,t,n,r){var i=oe,a=kn.transition;kn.transition=null;try{oe=1,xa(e,t,n,r)}finally{oe=i,kn.transition=a}}function od(e,t,n,r){var i=oe,a=kn.transition;kn.transition=null;try{oe=4,xa(e,t,n,r)}finally{oe=i,kn.transition=a}}function xa(e,t,n,r){if(Gr){var i=ya(e,t,n,r);if(i===null)Da(e,t,r,Kr,n),Bo(e,r);else if(id(i,e,t,n,r))r.stopPropagation();else if(Bo(e,r),t&4&&-1<rd.indexOf(e)){for(;i!==null;){var a=hr(i);if(a!==null&&Oo(a),a=ya(e,t,n,r),a===null&&Da(e,t,r,Kr,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Da(e,t,r,null,n)}}var Kr=null;function ya(e,t,n,r){if(Kr=null,e=oa(r),e=an(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Co(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function Ho(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case fa:return 1;case To:return 4;case Br:case Kc:return 16;case Io:return 536870912;default:return 16}default:return 16}}var Ft=null,wa=null,Xr=null;function Vo(){if(Xr)return Xr;var e,t=wa,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return Xr=i.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function Qo(){return!1}function Xe(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qr:Qo,this.isPropagationStopped=Qo,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Xe(jn),ir=A({},jn,{view:0,detail:0}),sd=Xe(ir),ja,Sa,ar,Zr=A({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(ja=e.screenX-ar.screenX,Sa=e.screenY-ar.screenY):Sa=ja=0,ar=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),Yo=Xe(Zr),ud=A({},Zr,{dataTransfer:0}),cd=Xe(ud),dd=A({},ir,{relatedTarget:0}),Na=Xe(dd),fd=A({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),pd=Xe(fd),md=A({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hd=Xe(md),gd=A({},jn,{data:0}),Go=Xe(gd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function ba(){return wd}var kd=A({},ir,{key:function(e){if(e.key){var t=vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jd=Xe(kd),Sd=A({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Xe(Sd),Nd=A({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),bd=Xe(Nd),Ed=A({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=Xe(Ed),Rd=A({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=Xe(Rd),Pd=[9,13,27,32],Ea=N&&"CompositionEvent"in window,lr=null;N&&"documentMode"in document&&(lr=document.documentMode);var Ld=N&&"TextEvent"in window&&!lr,Xo=N&&(!Ea||lr&&8<lr&&11>=lr),Jo=" ",qo=!1;function Zo(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function es(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function _d(e,t){switch(e){case"compositionend":return es(t);case"keypress":return t.which!==32?null:(qo=!0,Jo);case"textInput":return e=t.data,e===Jo&&qo?null:e;default:return null}}function Td(e,t){if(Sn)return e==="compositionend"||!Ea&&Zo(e,t)?(e=Vo(),Xr=wa=Ft=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xo&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function ns(e,t,n,r){jo(r),t=ii(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function Md(e){ws(e,0)}function ei(e){var t=Rn(e);if(uo(t))return e}function Dd(e,t){if(e==="change")return t}var rs=!1;if(N){var Ca;if(N){var Ra="oninput"in document;if(!Ra){var is=document.createElement("div");is.setAttribute("oninput","return;"),Ra=typeof is.oninput=="function"}Ca=Ra}else Ca=!1;rs=Ca&&(!document.documentMode||9<document.documentMode)}function as(){or&&(or.detachEvent("onpropertychange",ls),sr=or=null)}function ls(e){if(e.propertyName==="value"&&ei(sr)){var t=[];ns(t,sr,e,oa(e)),Eo(Md,t)}}function Od(e,t,n){e==="focusin"?(as(),or=t,sr=n,or.attachEvent("onpropertychange",ls)):e==="focusout"&&as()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei(sr)}function Ad(e,t){if(e==="click")return ei(t)}function Ud(e,t){if(e==="input"||e==="change")return ei(t)}function Bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Bd;function ur(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!S.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ss(e,t){var n=os(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=os(n)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cs(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=cs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&us(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ss(n,a);var s=ss(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $d=N&&"documentMode"in document&&11>=document.documentMode,Nn=null,Pa=null,cr=null,La=!1;function ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;La||Nn==null||Nn!==Or(r)||(r=Nn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&ur(cr,r)||(cr=r,r=ii(Pa,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionend:ti("Transition","TransitionEnd")},_a={},fs={};N&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function ni(e){if(_a[e])return _a[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fs)return _a[e]=t[n];return e}var ps=ni("animationend"),ms=ni("animationiteration"),hs=ni("animationstart"),gs=ni("transitionend"),vs=new Map,xs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){vs.set(e,t),h(t,[e])}for(var Ta=0;Ta<xs.length;Ta++){var Ia=xs[Ta],Hd=Ia.toLowerCase(),Vd=Ia[0].toUpperCase()+Ia.slice(1);At(Hd,"on"+Vd)}At(ps,"onAnimationEnd"),At(ms,"onAnimationIteration"),At(hs,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(gs,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function ys(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hc(r,t,void 0,e),e.currentTarget=null}function ws(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var d=r[s],m=d.instance,k=d.currentTarget;if(d=d.listener,m!==a&&i.isPropagationStopped())break e;ys(i,d,k),a=m}else for(s=0;s<r.length;s++){if(d=r[s],m=d.instance,k=d.currentTarget,d=d.listener,m!==a&&i.isPropagationStopped())break e;ys(i,d,k),a=m}}}if(Ur)throw e=da,Ur=!1,da=null,e}function de(e,t){var n=t[Wa];n===void 0&&(n=t[Wa]=new Set);var r=e+"__bubble";n.has(r)||(ks(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),ks(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[ri]){e[ri]=!0,f.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,Ma("selectionchange",!1,t))}}function ks(e,t,n,r){switch(Ho(t)){case 1:var i=ld;break;case 4:i=od;break;default:i=xa}n=i.bind(null,t,n,e),i=void 0,!ca||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Da(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var m=s.tag;if((m===3||m===4)&&(m=s.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;s=s.return}for(;d!==null;){if(s=an(d),s===null)return;if(m=s.tag,m===5||m===6){r=a=s;continue e}d=d.parentNode}}r=r.return}Eo(function(){var k=a,P=oa(n),L=[];e:{var R=vs.get(e);if(R!==void 0){var D=ka,B=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":D=jd;break;case"focusin":B="focus",D=Na;break;case"focusout":B="blur",D=Na;break;case"beforeblur":case"afterblur":D=Na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=bd;break;case ps:case ms:case hs:D=pd;break;case gs:D=Cd;break;case"scroll":D=sd;break;case"wheel":D=zd;break;case"copy":case"cut":case"paste":D=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Ko}var W=(t&4)!==0,Se=!W&&e==="scroll",x=W?R!==null?R+"Capture":null:R;W=[];for(var g=k,w;g!==null;){w=g;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,x!==null&&(_=Gn(g,x),_!=null&&W.push(pr(g,_,w)))),Se)break;g=g.return}0<W.length&&(R=new D(R,B,null,n,P),L.push({event:R,listeners:W}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",R&&n!==la&&(B=n.relatedTarget||n.fromElement)&&(an(B)||B[Nt]))break e;if((D||R)&&(R=P.window===P?P:(R=P.ownerDocument)?R.defaultView||R.parentWindow:window,D?(B=n.relatedTarget||n.toElement,D=k,B=B?an(B):null,B!==null&&(Se=rn(B),B!==Se||B.tag!==5&&B.tag!==6)&&(B=null)):(D=null,B=k),D!==B)){if(W=Yo,_="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=Ko,_="onPointerLeave",x="onPointerEnter",g="pointer"),Se=D==null?R:Rn(D),w=B==null?R:Rn(B),R=new W(_,g+"leave",D,n,P),R.target=Se,R.relatedTarget=w,_=null,an(P)===k&&(W=new W(x,g+"enter",B,n,P),W.target=w,W.relatedTarget=Se,_=W),Se=_,D&&B)t:{for(W=D,x=B,g=0,w=W;w;w=En(w))g++;for(w=0,_=x;_;_=En(_))w++;for(;0<g-w;)W=En(W),g--;for(;0<w-g;)x=En(x),w--;for(;g--;){if(W===x||x!==null&&W===x.alternate)break t;W=En(W),x=En(x)}W=null}else W=null;D!==null&&js(L,R,D,W,!1),B!==null&&Se!==null&&js(L,Se,B,W,!0)}}e:{if(R=k?Rn(k):window,D=R.nodeName&&R.nodeName.toLowerCase(),D==="select"||D==="input"&&R.type==="file")var $=Dd;else if(ts(R))if(rs)$=Ud;else{$=Fd;var V=Od}else(D=R.nodeName)&&D.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&($=Ad);if($&&($=$(e,k))){ns(L,$,n,P);break e}V&&V(e,R,k),e==="focusout"&&(V=R._wrapperState)&&V.controlled&&R.type==="number"&&ta(R,"number",R.value)}switch(V=k?Rn(k):window,e){case"focusin":(ts(V)||V.contentEditable==="true")&&(Nn=V,Pa=k,cr=null);break;case"focusout":cr=Pa=Nn=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,ds(L,n,P);break;case"selectionchange":if($d)break;case"keydown":case"keyup":ds(L,n,P)}var Q;if(Ea)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Sn?Zo(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Xo&&n.locale!=="ko"&&(Sn||K!=="onCompositionStart"?K==="onCompositionEnd"&&Sn&&(Q=Vo()):(Ft=P,wa="value"in Ft?Ft.value:Ft.textContent,Sn=!0)),V=ii(k,K),0<V.length&&(K=new Go(K,e,null,n,P),L.push({event:K,listeners:V}),Q?K.data=Q:(Q=es(n),Q!==null&&(K.data=Q)))),(Q=Ld?_d(e,n):Td(e,n))&&(k=ii(k,"onBeforeInput"),0<k.length&&(P=new Go("onBeforeInput","beforeinput",null,n,P),L.push({event:P,listeners:k}),P.data=Q))}ws(L,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Gn(e,n),a!=null&&r.unshift(pr(e,a,i)),a=Gn(e,t),a!=null&&r.push(pr(e,a,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function js(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var d=n,m=d.alternate,k=d.stateNode;if(m!==null&&m===r)break;d.tag===5&&k!==null&&(d=k,i?(m=Gn(n,a),m!=null&&s.unshift(pr(n,m,d))):i||(m=Gn(n,a),m!=null&&s.push(pr(n,m,d)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Yd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function Ss(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Gd,"")}function ai(e,t,n){if(t=Ss(t),Ss(e)!==t&&n)throw Error(u(425))}function li(){}var Oa=null,Fa=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,Ns=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ns<"u"?function(e){return Ns.resolve(null).then(e).catch(Jd)}:Ua;function Jd(e){setTimeout(function(){throw e})}function Ba(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Cn,mr="__reactProps$"+Cn,Nt="__reactContainer$"+Cn,Wa="__reactEvents$"+Cn,qd="__reactListeners$"+Cn,Zd="__reactHandles$"+Cn;function an(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bs(e);e!==null;){if(n=e[xt])return n;e=bs(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[xt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function oi(e){return e[mr]||null}var $a=[],zn=-1;function Bt(e){return{current:e}}function fe(e){0>zn||(e.current=$a[zn],$a[zn]=null,zn--)}function ce(e,t){zn++,$a[zn]=e.current,e.current=t}var Wt={},Te=Bt(Wt),We=Bt(!1),ln=Wt;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function si(){fe(We),fe(Te)}function Es(e,t,n){if(Te.current!==Wt)throw Error(u(168));ce(Te,t),ce(We,n)}function Cs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(u(108,ue(e)||"Unknown",i));return A({},n,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,ln=Te.current,ce(Te,e),ce(We,We.current),!0}function Rs(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Cs(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,fe(We),fe(Te),ce(Te,e)):fe(We),ce(We,n)}var bt=null,ci=!1,Ha=!1;function zs(e){bt===null?bt=[e]:bt.push(e)}function ef(e){ci=!0,zs(e)}function $t(){if(!Ha&&bt!==null){Ha=!0;var e=0,t=oe;try{var n=bt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,ci=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),Lo(fa,$t),i}finally{oe=t,Ha=!1}}return null}var Ln=[],_n=0,di=null,fi=0,et=[],tt=0,on=null,Et=1,Ct="";function sn(e,t){Ln[_n++]=fi,Ln[_n++]=di,di=e,fi=t}function Ps(e,t,n){et[tt++]=Et,et[tt++]=Ct,et[tt++]=on,on=e;var r=Et;e=Ct;var i=32-st(r)-1;r&=~(1<<i),n+=1;var a=32-st(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Et=1<<32-st(t)+i|n<<i|r,Ct=a+e}else Et=1<<a|n<<i|r,Ct=e}function Va(e){e.return!==null&&(sn(e,1),Ps(e,1,0))}function Qa(e){for(;e===di;)di=Ln[--_n],Ln[_n]=null,fi=Ln[--_n],Ln[_n]=null;for(;e===on;)on=et[--tt],et[tt]=null,Ct=et[--tt],et[tt]=null,Et=et[--tt],et[tt]=null}var Je=null,qe=null,me=!1,ct=null;function Ls(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,qe=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,qe=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(me){var t=qe;if(t){var n=t;if(!_s(e,t)){if(Ya(e))throw Error(u(418));t=Ut(n.nextSibling);var r=Je;t&&_s(e,t)?Ls(r,n):(e.flags=e.flags&-4097|2,me=!1,Je=e)}}else{if(Ya(e))throw Error(u(418));e.flags=e.flags&-4097|2,me=!1,Je=e}}}function Ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function pi(e){if(e!==Je)return!1;if(!me)return Ts(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=qe)){if(Ya(e))throw Is(),Error(u(418));for(;t;)Ls(e,t),t=Ut(t.nextSibling)}if(Ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Je?Ut(e.stateNode.nextSibling):null;return!0}function Is(){for(var e=qe;e;)e=Ut(e.nextSibling)}function Tn(){qe=Je=null,me=!1}function Ka(e){ct===null?ct=[e]:ct.push(e)}var tf=ae.ReactCurrentBatchConfig;function gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var d=i.refs;s===null?delete d[a]:d[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ms(e){var t=e._init;return t(e._payload)}function Ds(e){function t(x,g){if(e){var w=x.deletions;w===null?(x.deletions=[g],x.flags|=16):w.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function i(x,g){return x=Jt(x,g),x.index=0,x.sibling=null,x}function a(x,g,w){return x.index=w,e?(w=x.alternate,w!==null?(w=w.index,w<g?(x.flags|=2,g):w):(x.flags|=2,g)):(x.flags|=1048576,g)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function d(x,g,w,_){return g===null||g.tag!==6?(g=Ul(w,x.mode,_),g.return=x,g):(g=i(g,w),g.return=x,g)}function m(x,g,w,_){var $=w.type;return $===ye?P(x,g,w.props.children,_,w.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Be&&Ms($)===g.type)?(_=i(g,w.props),_.ref=gr(x,g,w),_.return=x,_):(_=Fi(w.type,w.key,w.props,null,x.mode,_),_.ref=gr(x,g,w),_.return=x,_)}function k(x,g,w,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Bl(w,x.mode,_),g.return=x,g):(g=i(g,w.children||[]),g.return=x,g)}function P(x,g,w,_,$){return g===null||g.tag!==7?(g=gn(w,x.mode,_,$),g.return=x,g):(g=i(g,w),g.return=x,g)}function L(x,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ul(""+g,x.mode,w),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case se:return w=Fi(g.type,g.key,g.props,null,x.mode,w),w.ref=gr(x,null,g),w.return=x,w;case he:return g=Bl(g,x.mode,w),g.return=x,g;case Be:var _=g._init;return L(x,_(g._payload),w)}if(Vn(g)||G(g))return g=gn(g,x.mode,w,null),g.return=x,g;mi(x,g)}return null}function R(x,g,w,_){var $=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return $!==null?null:d(x,g,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case se:return w.key===$?m(x,g,w,_):null;case he:return w.key===$?k(x,g,w,_):null;case Be:return $=w._init,R(x,g,$(w._payload),_)}if(Vn(w)||G(w))return $!==null?null:P(x,g,w,_,null);mi(x,w)}return null}function D(x,g,w,_,$){if(typeof _=="string"&&_!==""||typeof _=="number")return x=x.get(w)||null,d(g,x,""+_,$);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case se:return x=x.get(_.key===null?w:_.key)||null,m(g,x,_,$);case he:return x=x.get(_.key===null?w:_.key)||null,k(g,x,_,$);case Be:var V=_._init;return D(x,g,w,V(_._payload),$)}if(Vn(_)||G(_))return x=x.get(w)||null,P(g,x,_,$,null);mi(g,_)}return null}function B(x,g,w,_){for(var $=null,V=null,Q=g,K=g=0,Pe=null;Q!==null&&K<w.length;K++){Q.index>K?(Pe=Q,Q=null):Pe=Q.sibling;var ie=R(x,Q,w[K],_);if(ie===null){Q===null&&(Q=Pe);break}e&&Q&&ie.alternate===null&&t(x,Q),g=a(ie,g,K),V===null?$=ie:V.sibling=ie,V=ie,Q=Pe}if(K===w.length)return n(x,Q),me&&sn(x,K),$;if(Q===null){for(;K<w.length;K++)Q=L(x,w[K],_),Q!==null&&(g=a(Q,g,K),V===null?$=Q:V.sibling=Q,V=Q);return me&&sn(x,K),$}for(Q=r(x,Q);K<w.length;K++)Pe=D(Q,x,K,w[K],_),Pe!==null&&(e&&Pe.alternate!==null&&Q.delete(Pe.key===null?K:Pe.key),g=a(Pe,g,K),V===null?$=Pe:V.sibling=Pe,V=Pe);return e&&Q.forEach(function(qt){return t(x,qt)}),me&&sn(x,K),$}function W(x,g,w,_){var $=G(w);if(typeof $!="function")throw Error(u(150));if(w=$.call(w),w==null)throw Error(u(151));for(var V=$=null,Q=g,K=g=0,Pe=null,ie=w.next();Q!==null&&!ie.done;K++,ie=w.next()){Q.index>K?(Pe=Q,Q=null):Pe=Q.sibling;var qt=R(x,Q,ie.value,_);if(qt===null){Q===null&&(Q=Pe);break}e&&Q&&qt.alternate===null&&t(x,Q),g=a(qt,g,K),V===null?$=qt:V.sibling=qt,V=qt,Q=Pe}if(ie.done)return n(x,Q),me&&sn(x,K),$;if(Q===null){for(;!ie.done;K++,ie=w.next())ie=L(x,ie.value,_),ie!==null&&(g=a(ie,g,K),V===null?$=ie:V.sibling=ie,V=ie);return me&&sn(x,K),$}for(Q=r(x,Q);!ie.done;K++,ie=w.next())ie=D(Q,x,K,ie.value,_),ie!==null&&(e&&ie.alternate!==null&&Q.delete(ie.key===null?K:ie.key),g=a(ie,g,K),V===null?$=ie:V.sibling=ie,V=ie);return e&&Q.forEach(function(Mf){return t(x,Mf)}),me&&sn(x,K),$}function Se(x,g,w,_){if(typeof w=="object"&&w!==null&&w.type===ye&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case se:e:{for(var $=w.key,V=g;V!==null;){if(V.key===$){if($=w.type,$===ye){if(V.tag===7){n(x,V.sibling),g=i(V,w.props.children),g.return=x,x=g;break e}}else if(V.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Be&&Ms($)===V.type){n(x,V.sibling),g=i(V,w.props),g.ref=gr(x,V,w),g.return=x,x=g;break e}n(x,V);break}else t(x,V);V=V.sibling}w.type===ye?(g=gn(w.props.children,x.mode,_,w.key),g.return=x,x=g):(_=Fi(w.type,w.key,w.props,null,x.mode,_),_.ref=gr(x,g,w),_.return=x,x=_)}return s(x);case he:e:{for(V=w.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(x,g.sibling),g=i(g,w.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=Bl(w,x.mode,_),g.return=x,x=g}return s(x);case Be:return V=w._init,Se(x,g,V(w._payload),_)}if(Vn(w))return B(x,g,w,_);if(G(w))return W(x,g,w,_);mi(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(x,g.sibling),g=i(g,w),g.return=x,x=g):(n(x,g),g=Ul(w,x.mode,_),g.return=x,x=g),s(x)):n(x,g)}return Se}var In=Ds(!0),Os=Ds(!1),hi=Bt(null),gi=null,Mn=null,Xa=null;function Ja(){Xa=Mn=gi=null}function qa(e){var t=hi.current;fe(hi),e._currentValue=t}function Za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){gi=e,Xa=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(He=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(gi===null)throw Error(u(308));Mn=e,gi.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var un=null;function el(e){un===null?un=[e]:un.push(e)}function Fs(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,el(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(te&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,el(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function Us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xi(e,t,n,r){var i=e.updateQueue;Ht=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var m=d,k=m.next;m.next=null,s===null?a=k:s.next=k,s=m;var P=e.alternate;P!==null&&(P=P.updateQueue,d=P.lastBaseUpdate,d!==s&&(d===null?P.firstBaseUpdate=k:d.next=k,P.lastBaseUpdate=m))}if(a!==null){var L=i.baseState;s=0,P=k=m=null,d=a;do{var R=d.lane,D=d.eventTime;if((r&R)===R){P!==null&&(P=P.next={eventTime:D,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var B=e,W=d;switch(R=t,D=n,W.tag){case 1:if(B=W.payload,typeof B=="function"){L=B.call(D,L,R);break e}L=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=W.payload,R=typeof B=="function"?B.call(D,L,R):B,R==null)break e;L=A({},L,R);break e;case 2:Ht=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,R=i.effects,R===null?i.effects=[d]:R.push(d))}else D={eventTime:D,lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},P===null?(k=P=D,m=L):P=P.next=D,s|=R;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;R=d,d=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);if(P===null&&(m=L),i.baseState=m,i.firstBaseUpdate=k,i.lastBaseUpdate=P,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);fn|=s,e.lanes=s,e.memoizedState=L}}function Bs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(u(191,i));i.call(r)}}}var vr={},yt=Bt(vr),xr=Bt(vr),yr=Bt(vr);function cn(e){if(e===vr)throw Error(u(174));return e}function nl(e,t){switch(ce(yr,t),ce(xr,e),ce(yt,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ra(t,e)}fe(yt),ce(yt,t)}function On(){fe(yt),fe(xr),fe(yr)}function Ws(e){cn(yr.current);var t=cn(yt.current),n=ra(t,e.type);t!==n&&(ce(xr,e),ce(yt,n))}function rl(e){xr.current===e&&(fe(yt),fe(xr))}var ge=Bt(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function al(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var wi=ae.ReactCurrentDispatcher,ll=ae.ReactCurrentBatchConfig,dn=0,ve=null,Ee=null,Re=null,ki=!1,wr=!1,kr=0,nf=0;function Ie(){throw Error(u(321))}function ol(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function sl(e,t,n,r,i,a){if(dn=a,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wi.current=e===null||e.memoizedState===null?of:sf,e=n(r,i),wr){a=0;do{if(wr=!1,kr=0,25<=a)throw Error(u(301));a+=1,Re=Ee=null,t.updateQueue=null,wi.current=uf,e=n(r,i)}while(wr)}if(wi.current=Ni,t=Ee!==null&&Ee.next!==null,dn=0,Re=Ee=ve=null,ki=!1,t)throw Error(u(300));return e}function ul(){var e=kr!==0;return kr=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ve.memoizedState=Re=e:Re=Re.next=e,Re}function rt(){if(Ee===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Re===null?ve.memoizedState:Re.next;if(t!==null)Re=t,Ee=e;else{if(e===null)throw Error(u(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Re===null?ve.memoizedState=Re=e:Re=Re.next=e}return Re}function jr(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=rt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var d=s=null,m=null,k=a;do{var P=k.lane;if((dn&P)===P)m!==null&&(m=m.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var L={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};m===null?(d=m=L,s=r):m=m.next=L,ve.lanes|=P,fn|=P}k=k.next}while(k!==null&&k!==a);m===null?s=r:m.next=d,ut(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ve.lanes|=a,fn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=rt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);ut(a,t.memoizedState)||(He=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $s(){}function Hs(e,t){var n=ve,r=rt(),i=t(),a=!ut(r.memoizedState,i);if(a&&(r.memoizedState=i,He=!0),r=r.queue,fl(Ys.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Sr(9,Qs.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(u(349));(dn&30)!==0||Vs(n,t,i)}return i}function Vs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qs(e,t,n,r){t.value=n,t.getSnapshot=r,Gs(t)&&Ks(e)}function Ys(e,t,n){return n(function(){Gs(t)&&Ks(e)})}function Gs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Ks(e){var t=Rt(e,1);t!==null&&mt(t,e,1,-1)}function Xs(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},t.queue=e,e=e.dispatch=lf.bind(null,ve,e),[t.memoizedState,e]}function Sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Js(){return rt().memoizedState}function ji(e,t,n,r){var i=wt();ve.flags|=e,i.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}function Si(e,t,n,r){var i=rt();r=r===void 0?null:r;var a=void 0;if(Ee!==null){var s=Ee.memoizedState;if(a=s.destroy,r!==null&&ol(r,s.deps)){i.memoizedState=Sr(t,n,a,r);return}}ve.flags|=e,i.memoizedState=Sr(1|t,n,a,r)}function qs(e,t){return ji(8390656,8,e,t)}function fl(e,t){return Si(2048,8,e,t)}function Zs(e,t){return Si(4,2,e,t)}function eu(e,t){return Si(4,4,e,t)}function tu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nu(e,t,n){return n=n!=null?n.concat([e]):null,Si(4,4,tu.bind(null,t,e),n)}function pl(){}function ru(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ol(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function iu(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ol(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function au(e,t,n){return(dn&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n):(ut(n,t)||(n=Mo(),ve.lanes|=n,fn|=n,e.baseState=!0),t)}function rf(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{oe=n,ll.transition=r}}function lu(){return rt().memoizedState}function af(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ou(e))su(t,n);else if(n=Fs(e,t,n,r),n!==null){var i=Ue();mt(n,e,r,i),uu(n,t,r)}}function lf(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ou(e))su(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,d=a(s,n);if(i.hasEagerState=!0,i.eagerState=d,ut(d,s)){var m=t.interleaved;m===null?(i.next=i,el(t)):(i.next=m.next,m.next=i),t.interleaved=i;return}}catch{}n=Fs(e,t,i,r),n!==null&&(i=Ue(),mt(n,e,r,i),uu(n,t,r))}}function ou(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function su(e,t){wr=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var Ni={readContext:nt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},of={readContext:nt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:qs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ji(4194308,4,tu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return ji(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=af.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Xs,useDebugValue:pl,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Xs(!1),t=e[0];return e=rf.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=wt();if(me){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),ze===null)throw Error(u(349));(dn&30)!==0||Vs(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,qs(Ys.bind(null,r,a,e),[e]),r.flags|=2048,Sr(9,Qs.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=wt(),t=ze.identifierPrefix;if(me){var n=Ct,r=Et;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sf={readContext:nt,useCallback:ru,useContext:nt,useEffect:fl,useImperativeHandle:nu,useInsertionEffect:Zs,useLayoutEffect:eu,useMemo:iu,useReducer:cl,useRef:Js,useState:function(){return cl(jr)},useDebugValue:pl,useDeferredValue:function(e){var t=rt();return au(t,Ee.memoizedState,e)},useTransition:function(){var e=cl(jr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:$s,useSyncExternalStore:Hs,useId:lu,unstable_isNewReconciler:!1},uf={readContext:nt,useCallback:ru,useContext:nt,useEffect:fl,useImperativeHandle:nu,useInsertionEffect:Zs,useLayoutEffect:eu,useMemo:iu,useReducer:dl,useRef:Js,useState:function(){return dl(jr)},useDebugValue:pl,useDeferredValue:function(e){var t=rt();return Ee===null?t.memoizedState=e:au(t,Ee.memoizedState,e)},useTransition:function(){var e=dl(jr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:$s,useSyncExternalStore:Hs,useId:lu,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bi={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Kt(e),a=zt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Vt(e,a,i),t!==null&&(mt(t,e,i,r),vi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Kt(e),a=zt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Vt(e,a,i),t!==null&&(mt(t,e,i,r),vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Kt(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,r),t!==null&&(mt(t,e,r,n),vi(t,e,r))}};function cu(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(i,a):!0}function du(e,t,n){var r=!1,i=Wt,a=t.contextType;return typeof a=="object"&&a!==null?a=nt(a):(i=$e(t)?ln:Te.current,r=t.contextTypes,a=(r=r!=null)?Pn(e,i):Wt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bi.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},tl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=nt(a):(a=$e(t)?ln:Te.current,i.context=Pn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ml(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bi.enqueueReplaceState(i,i.state,null),xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=ne(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function pu(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,_l=r),vl(e,t)},n}function mu(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){vl(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var df=ae.ReactCurrentOwner,He=!1;function Ae(e,t,n,r){t.child=e===null?Os(t,null,n,r):In(t,e.child,n,r)}function xu(e,t,n,r,i){n=n.render;var a=t.ref;return Dn(t,i),r=sl(e,t,n,r,a,i),n=ul(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(me&&n&&Va(t),t.flags|=1,Ae(e,t,r,i),t.child)}function yu(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Al(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,wu(e,t,a,r,i)):(e=Fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(s,r)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Jt(a,r),e.ref=t.ref,e.return=t,t.child=e}function wu(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ur(a,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return xl(e,t,n,r,i)}function ku(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Un,Ze),Ze|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Un,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ce(Un,Ze),Ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ce(Un,Ze),Ze|=r;return Ae(e,t,i,n),t.child}function ju(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xl(e,t,n,r,i){var a=$e(n)?ln:Te.current;return a=Pn(t,a),Dn(t,i),n=sl(e,t,n,r,a,i),r=ul(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(me&&r&&Va(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Su(e,t,n,r,i){if($e(n)){var a=!0;ui(t)}else a=!1;if(Dn(t,i),t.stateNode===null)Ci(e,t),du(t,n,r),hl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,d=t.memoizedProps;s.props=d;var m=s.context,k=n.contextType;typeof k=="object"&&k!==null?k=nt(k):(k=$e(n)?ln:Te.current,k=Pn(t,k));var P=n.getDerivedStateFromProps,L=typeof P=="function"||typeof s.getSnapshotBeforeUpdate=="function";L||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==r||m!==k)&&fu(t,s,r,k),Ht=!1;var R=t.memoizedState;s.state=R,xi(t,r,s,i),m=t.memoizedState,d!==r||R!==m||We.current||Ht?(typeof P=="function"&&(ml(t,n,P,r),m=t.memoizedState),(d=Ht||cu(t,n,d,r,R,m,k))?(L||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=k,r=d):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,As(e,t),d=t.memoizedProps,k=t.type===t.elementType?d:dt(t.type,d),s.props=k,L=t.pendingProps,R=s.context,m=n.contextType,typeof m=="object"&&m!==null?m=nt(m):(m=$e(n)?ln:Te.current,m=Pn(t,m));var D=n.getDerivedStateFromProps;(P=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==L||R!==m)&&fu(t,s,r,m),Ht=!1,R=t.memoizedState,s.state=R,xi(t,r,s,i);var B=t.memoizedState;d!==L||R!==B||We.current||Ht?(typeof D=="function"&&(ml(t,n,D,r),B=t.memoizedState),(k=Ht||cu(t,n,k,r,R,B,m)||!1)?(P||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,B,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,B,m)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),s.props=r,s.state=B,s.context=m,r=k):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),r=!1)}return yl(e,t,n,r,a,i)}function yl(e,t,n,r,i,a){ju(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Rs(t,n,!1),Pt(e,t,a);r=t.stateNode,df.current=t;var d=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=In(t,e.child,null,a),t.child=In(t,null,d,a)):Ae(e,t,d,a),t.memoizedState=r.state,i&&Rs(t,n,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?Es(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Es(e,t.context,!1),nl(e,t.containerInfo)}function bu(e,t,n,r,i){return Tn(),Ka(i),t.flags|=256,Ae(e,t,n,r),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eu(e,t,n){var r=t.pendingProps,i=ge.current,a=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ge,i&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Ai(s,r,0,null),e=gn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=kl(n),t.memoizedState=wl,e):jl(t,s));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return ff(e,t,s,r,d,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,d=i.sibling;var m={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=Jt(i,m),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?a=Jt(d,a):(a=gn(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?kl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=wl,r}return a=e.child,e=a.sibling,r=Jt(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jl(e,t){return t=Ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ei(e,t,n,r){return r!==null&&Ka(r),In(t,e.child,null,n),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ff(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(u(422))),Ei(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ai({mode:"visible",children:r.children},i,0,null),a=gn(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&In(t,e.child,null,s),t.child.memoizedState=kl(s),t.memoizedState=wl,a);if((t.mode&1)===0)return Ei(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,a=Error(u(419)),r=gl(a,r,void 0),Ei(e,t,s,r)}if(d=(s&e.childLanes)!==0,He||d){if(r=ze,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Rt(e,i),mt(r,e,i,-1))}return Fl(),r=gl(Error(u(421))),Ei(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bf.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,qe=Ut(i.nextSibling),Je=t,me=!0,ct=null,e!==null&&(et[tt++]=Et,et[tt++]=Ct,et[tt++]=on,Et=e.id,Ct=e.overflow,on=t),t=jl(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Za(e.return,t,n)}function Sl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Ru(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ae(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,a);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ci(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pf(e,t,n){switch(t.tag){case 3:Nu(t),Tn();break;case 5:Ws(t);break;case 1:$e(t.type)&&ui(t);break;case 4:nl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(hi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Eu(e,t,n):(ce(ge,ge.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ru(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,ku(e,t,n)}return Pt(e,t,n)}var zu,Nl,Pu,Lu;zu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Pu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cn(yt.current);var a=null;switch(n){case"input":i=Zi(e,i),r=Zi(e,r),a=[];break;case"select":i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),a=[];break;case"textarea":i=na(e,i),r=na(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}ia(n,r);var s;n=null;for(k in i)if(!r.hasOwnProperty(k)&&i.hasOwnProperty(k)&&i[k]!=null)if(k==="style"){var d=i[k];for(s in d)d.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(p.hasOwnProperty(k)?a||(a=[]):(a=a||[]).push(k,null));for(k in r){var m=r[k];if(d=i?.[k],r.hasOwnProperty(k)&&m!==d&&(m!=null||d!=null))if(k==="style")if(d){for(s in d)!d.hasOwnProperty(s)||m&&m.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in m)m.hasOwnProperty(s)&&d[s]!==m[s]&&(n||(n={}),n[s]=m[s])}else n||(a||(a=[]),a.push(k,n)),n=m;else k==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,d=d?d.__html:void 0,m!=null&&d!==m&&(a=a||[]).push(k,m)):k==="children"?typeof m!="string"&&typeof m!="number"||(a=a||[]).push(k,""+m):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(p.hasOwnProperty(k)?(m!=null&&k==="onScroll"&&de("scroll",e),a||d===m||(a=[])):(a=a||[]).push(k,m))}n&&(a=a||[]).push("style",n);var k=a;(t.updateQueue=k)&&(t.flags|=4)}},Lu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mf(e,t,n){var r=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return $e(t.type)&&si(),Me(t),null;case 3:return r=t.stateNode,On(),fe(We),fe(Te),al(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(Ml(ct),ct=null))),Nl(e,t),Me(t),null;case 5:rl(t);var i=cn(yr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Me(t),null}if(e=cn(yt.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[xt]=t,r[mr]=a,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)de(dr[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":co(r,a),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},de("invalid",r);break;case"textarea":mo(r,a),de("invalid",r)}ia(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="children"?typeof d=="string"?r.textContent!==d&&(a.suppressHydrationWarning!==!0&&ai(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&ai(r.textContent,d,e),i=["children",""+d]):p.hasOwnProperty(s)&&d!=null&&s==="onScroll"&&de("scroll",r)}switch(n){case"input":Dr(r),po(r,a,!0);break;case"textarea":Dr(r),go(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=li)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[xt]=t,e[mr]=r,zu(e,t,!1,!1),t.stateNode=e;e:{switch(s=aa(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)de(dr[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":co(e,r),i=Zi(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=A({},r,{value:void 0}),de("invalid",e);break;case"textarea":mo(e,r),i=na(e,r),de("invalid",e);break;default:i=r}ia(n,i),d=i;for(a in d)if(d.hasOwnProperty(a)){var m=d[a];a==="style"?wo(e,m):a==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&xo(e,m)):a==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&Qn(e,m):typeof m=="number"&&Qn(e,""+m):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?m!=null&&a==="onScroll"&&de("scroll",e):m!=null&&J(e,a,m,s))}switch(n){case"input":Dr(e),po(e,r,!1);break;case"textarea":Dr(e),go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+le(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?xn(e,!!r.multiple,a,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=cn(yr.current),cn(yt.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(a=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ai(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Me(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Is(),Tn(),t.flags|=98560,a=!1;else if(a=pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[xt]=t}else Tn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else ct!==null&&(Ml(ct),ct=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?Ce===0&&(Ce=3):Fl())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return On(),Nl(e,t),e===null&&fr(t.stateNode.containerInfo),Me(t),null;case 10:return qa(t.type._context),Me(t),null;case 17:return $e(t.type)&&si(),Me(t),null;case 19:if(fe(ge),a=t.memoizedState,a===null)return Me(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Nr(a,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=yi(e),s!==null){for(t.flags|=128,Nr(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&je()>Bn&&(t.flags|=128,r=!0,Nr(a,!1),t.lanes=4194304)}else{if(!r)if(e=yi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!me)return Me(t),null}else 2*je()-a.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,Nr(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=je(),t.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function hf(e,t){switch(Qa(t),t.tag){case 1:return $e(t.type)&&si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),fe(We),fe(Te),al(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return rl(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return On(),null;case 10:return qa(t.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var Ri=!1,De=!1,gf=typeof WeakSet=="function"?WeakSet:Set,F=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function bl(e,t,n){try{n()}catch(r){ke(e,t,r)}}var _u=!1;function vf(e,t){if(Oa=Gr,e=cs(),za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,d=-1,m=-1,k=0,P=0,L=e,R=null;t:for(;;){for(var D;L!==n||i!==0&&L.nodeType!==3||(d=s+i),L!==a||r!==0&&L.nodeType!==3||(m=s+r),L.nodeType===3&&(s+=L.nodeValue.length),(D=L.firstChild)!==null;)R=L,L=D;for(;;){if(L===e)break t;if(R===n&&++k===i&&(d=s),R===a&&++P===r&&(m=s),(D=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=D}n=d===-1||m===-1?null:{start:d,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fa={focusedElem:e,selectionRange:n},Gr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var W=B.memoizedProps,Se=B.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?W:dt(t.type,W),Se);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(_){ke(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return B=_u,_u=!1,B}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bl(t,n,a)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function El(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Tu(e){var t=e.alternate;t!==null&&(e.alternate=null,Tu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[mr],delete t[Wa],delete t[qd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iu(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var Le=null,ft=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Du(e,t,n),n=n.sibling}function Du(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Wr,n)}catch{}switch(n.tag){case 5:De||An(n,t);case 6:var r=Le,i=ft;Le=null,Qt(e,t,n),Le=r,ft=i,Le!==null&&(ft?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(ft?(e=Le,n=n.stateNode,e.nodeType===8?Ba(e.parentNode,n):e.nodeType===1&&Ba(e,n),rr(e)):Ba(Le,n.stateNode));break;case 4:r=Le,i=ft,Le=n.stateNode.containerInfo,ft=!0,Qt(e,t,n),Le=r,ft=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&((a&2)!==0||(a&4)!==0)&&bl(n,t,s),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!De&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){ke(n,t,d)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Qt(e,t,n),De=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gf),t.forEach(function(r){var i=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 5:Le=d.stateNode,ft=!1;break e;case 3:Le=d.stateNode.containerInfo,ft=!0;break e;case 4:Le=d.stateNode.containerInfo,ft=!0;break e}d=d.return}if(Le===null)throw Error(u(160));Du(a,s,i),Le=null,ft=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(k){ke(i,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fu(t,e),t=t.sibling}function Fu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),kt(e),r&4){try{br(3,e,e.return),zi(3,e)}catch(W){ke(e,e.return,W)}try{br(5,e,e.return)}catch(W){ke(e,e.return,W)}}break;case 1:pt(t,e),kt(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(pt(t,e),kt(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{Qn(i,"")}catch(W){ke(e,e.return,W)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,d=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&fo(i,a),aa(d,s);var k=aa(d,a);for(s=0;s<m.length;s+=2){var P=m[s],L=m[s+1];P==="style"?wo(i,L):P==="dangerouslySetInnerHTML"?xo(i,L):P==="children"?Qn(i,L):J(i,P,L,k)}switch(d){case"input":ea(i,a);break;case"textarea":ho(i,a);break;case"select":var R=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var D=a.value;D!=null?xn(i,!!a.multiple,D,!1):R!==!!a.multiple&&(a.defaultValue!=null?xn(i,!!a.multiple,a.defaultValue,!0):xn(i,!!a.multiple,a.multiple?[]:"",!1))}i[mr]=a}catch(W){ke(e,e.return,W)}}break;case 6:if(pt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(W){ke(e,e.return,W)}}break;case 3:if(pt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(W){ke(e,e.return,W)}break;case 4:pt(t,e),kt(e);break;case 13:pt(t,e),kt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ll=je())),r&4&&Ou(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(De=(k=De)||P,pt(t,e),De=k):pt(t,e),kt(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!P&&(e.mode&1)!==0)for(F=e,P=e.child;P!==null;){for(L=F=P;F!==null;){switch(R=F,D=R.child,R.tag){case 0:case 11:case 14:case 15:br(4,R,R.return);break;case 1:An(R,R.return);var B=R.stateNode;if(typeof B.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(W){ke(r,n,W)}}break;case 5:An(R,R.return);break;case 22:if(R.memoizedState!==null){Bu(L);continue}}D!==null?(D.return=R,F=D):Bu(L)}P=P.sibling}e:for(P=null,L=e;;){if(L.tag===5){if(P===null){P=L;try{i=L.stateNode,k?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=L.stateNode,m=L.memoizedProps.style,s=m!=null&&m.hasOwnProperty("display")?m.display:null,d.style.display=yo("display",s))}catch(W){ke(e,e.return,W)}}}else if(L.tag===6){if(P===null)try{L.stateNode.nodeValue=k?"":L.memoizedProps}catch(W){ke(e,e.return,W)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;P===L&&(P=null),L=L.return}P===L&&(P=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:pt(t,e),kt(e),r&4&&Ou(e);break;case 21:break;default:pt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Iu(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qn(i,""),r.flags&=-33);var a=Mu(e);Rl(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,d=Mu(e);Cl(e,d,s);break;default:throw Error(u(161))}}catch(m){ke(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e,t,n){F=e,Au(e)}function Au(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ri;if(!s){var d=i.alternate,m=d!==null&&d.memoizedState!==null||De;d=Ri;var k=De;if(Ri=s,(De=m)&&!k)for(F=i;F!==null;)s=F,m=s.child,s.tag===22&&s.memoizedState!==null?Wu(i):m!==null?(m.return=s,F=m):Wu(i);for(;a!==null;)F=a,Au(a),a=a.sibling;F=i,Ri=d,De=k}Uu(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,F=a):Uu(e)}}function Uu(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:De||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bs(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bs(t,s,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var L=P.dehydrated;L!==null&&rr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}De||t.flags&512&&El(t)}catch(R){ke(t,t.return,R)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Bu(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Wu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(m){ke(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(m){ke(t,i,m)}}var a=t.return;try{El(t)}catch(m){ke(t,a,m)}break;case 5:var s=t.return;try{El(t)}catch(m){ke(t,s,m)}}}catch(m){ke(t,t.return,m)}if(t===e){F=null;break}var d=t.sibling;if(d!==null){d.return=t.return,F=d;break}F=t.return}}var yf=Math.ceil,Pi=ae.ReactCurrentDispatcher,zl=ae.ReactCurrentOwner,it=ae.ReactCurrentBatchConfig,te=0,ze=null,Ne=null,_e=0,Ze=0,Un=Bt(0),Ce=0,Er=null,fn=0,Li=0,Pl=0,Cr=null,Ve=null,Ll=0,Bn=1/0,Lt=null,_i=!1,_l=null,Yt=null,Ti=!1,Gt=null,Ii=0,Rr=0,Tl=null,Mi=-1,Di=0;function Ue(){return(te&6)!==0?je():Mi!==-1?Mi:Mi=je()}function Kt(e){return(e.mode&1)===0?1:(te&2)!==0&&_e!==0?_e&-_e:tf.transition!==null?(Di===0&&(Di=Mo()),Di):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Ho(e.type)),e)}function mt(e,t,n,r){if(50<Rr)throw Rr=0,Tl=null,Error(u(185));qn(e,n,r),((te&2)===0||e!==ze)&&(e===ze&&((te&2)===0&&(Li|=n),Ce===4&&Xt(e,_e)),Qe(e,r),n===1&&te===0&&(t.mode&1)===0&&(Bn=je()+500,ci&&$t()))}function Qe(e,t){var n=e.callbackNode;td(e,t);var r=Vr(e,e===ze?_e:0);if(r===0)n!==null&&_o(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_o(n),t===1)e.tag===0?ef(Hu.bind(null,e)):zs(Hu.bind(null,e)),Xd(function(){(te&6)===0&&$t()}),n=null;else{switch(Do(r)){case 1:n=fa;break;case 4:n=To;break;case 16:n=Br;break;case 536870912:n=Io;break;default:n=Br}n=qu(n,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $u(e,t){if(Mi=-1,Di=0,(te&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=Vr(e,e===ze?_e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Oi(e,r);else{t=r;var i=te;te|=2;var a=Qu();(ze!==e||_e!==t)&&(Lt=null,Bn=je()+500,mn(e,t));do try{jf();break}catch(d){Vu(e,d)}while(!0);Ja(),Pi.current=a,te=i,Ne!==null?t=0:(ze=null,_e=0,t=Ce)}if(t!==0){if(t===2&&(i=pa(e),i!==0&&(r=i,t=Il(e,i))),t===1)throw n=Er,mn(e,0),Xt(e,r),Qe(e,je()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!wf(i)&&(t=Oi(e,r),t===2&&(a=pa(e),a!==0&&(r=a,t=Il(e,a))),t===1))throw n=Er,mn(e,0),Xt(e,r),Qe(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:hn(e,Ve,Lt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=Ll+500-je(),10<t)){if(Vr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ua(hn.bind(null,e,Ve,Lt),t);break}hn(e,Ve,Lt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-st(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=Ua(hn.bind(null,e,Ve,Lt),r);break}hn(e,Ve,Lt);break;case 5:hn(e,Ve,Lt);break;default:throw Error(u(329))}}}return Qe(e,je()),e.callbackNode===n?$u.bind(null,e):null}function Il(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Ml(t)),e}function Ml(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function wf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!ut(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~Pl,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if((te&6)!==0)throw Error(u(327));Wn();var t=Vr(e,0);if((t&1)===0)return Qe(e,je()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=pa(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=Er,mn(e,0),Xt(e,t),Qe(e,je()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Ve,Lt),Qe(e,je()),null}function Dl(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Bn=je()+500,ci&&$t())}}function pn(e){Gt!==null&&Gt.tag===0&&(te&6)===0&&Wn();var t=te;te|=1;var n=it.transition,r=oe;try{if(it.transition=null,oe=1,e)return e()}finally{oe=r,it.transition=n,te=t,(te&6)===0&&$t()}}function Ol(){Ze=Un.current,fe(Un)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&si();break;case 3:On(),fe(We),fe(Te),al();break;case 5:rl(r);break;case 4:On();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:qa(r.type._context);break;case 22:case 23:Ol()}n=n.return}if(ze=e,Ne=e=Jt(e.current,null),_e=Ze=t,Ce=0,Er=null,Pl=Li=fn=0,Ve=Cr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}un=null}return e}function Vu(e,t){do{var n=Ne;try{if(Ja(),wi.current=Ni,ki){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ki=!1}if(dn=0,Re=Ee=ve=null,wr=!1,kr=0,zl.current=null,n===null||n.return===null){Ce=1,Er=t,Ne=null;break}e:{var a=e,s=n.return,d=n,m=t;if(t=_e,d.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var k=m,P=d,L=P.tag;if((P.mode&1)===0&&(L===0||L===11||L===15)){var R=P.alternate;R?(P.updateQueue=R.updateQueue,P.memoizedState=R.memoizedState,P.lanes=R.lanes):(P.updateQueue=null,P.memoizedState=null)}var D=gu(s);if(D!==null){D.flags&=-257,vu(D,s,d,a,t),D.mode&1&&hu(a,k,t),t=D,m=k;var B=t.updateQueue;if(B===null){var W=new Set;W.add(m),t.updateQueue=W}else B.add(m);break e}else{if((t&1)===0){hu(a,k,t),Fl();break e}m=Error(u(426))}}else if(me&&d.mode&1){var Se=gu(s);if(Se!==null){(Se.flags&65536)===0&&(Se.flags|=256),vu(Se,s,d,a,t),Ka(Fn(m,d));break e}}a=m=Fn(m,d),Ce!==4&&(Ce=2),Cr===null?Cr=[a]:Cr.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=pu(a,m,t);Us(a,x);break e;case 1:d=m;var g=a.type,w=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Yt===null||!Yt.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=mu(a,d,t);Us(a,_);break e}}a=a.return}while(a!==null)}Gu(n)}catch($){t=$,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function Qu(){var e=Pi.current;return Pi.current=Ni,e===null?Ni:e}function Fl(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),ze===null||(fn&268435455)===0&&(Li&268435455)===0||Xt(ze,_e)}function Oi(e,t){var n=te;te|=2;var r=Qu();(ze!==e||_e!==t)&&(Lt=null,mn(e,t));do try{kf();break}catch(i){Vu(e,i)}while(!0);if(Ja(),te=n,Pi.current=r,Ne!==null)throw Error(u(261));return ze=null,_e=0,Ce}function kf(){for(;Ne!==null;)Yu(Ne)}function jf(){for(;Ne!==null&&!Qc();)Yu(Ne)}function Yu(e){var t=Ju(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Gu(e):Ne=t,zl.current=null}function Gu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=mf(n,t,Ze),n!==null){Ne=n;return}}else{if(n=hf(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Ce===0&&(Ce=5)}function hn(e,t,n){var r=oe,i=it.transition;try{it.transition=null,oe=1,Sf(e,t,n,r)}finally{it.transition=i,oe=r}return null}function Sf(e,t,n,r){do Wn();while(Gt!==null);if((te&6)!==0)throw Error(u(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(nd(e,a),e===ze&&(Ne=ze=null,_e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ti||(Ti=!0,qu(Br,function(){return Wn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=it.transition,it.transition=null;var s=oe;oe=1;var d=te;te|=4,zl.current=null,vf(e,n),Fu(n,e),Wd(Fa),Gr=!!Oa,Fa=Oa=null,e.current=n,xf(n),Yc(),te=d,oe=s,it.transition=a}else e.current=n;if(Ti&&(Ti=!1,Gt=e,Ii=i),a=e.pendingLanes,a===0&&(Yt=null),Xc(n.stateNode),Qe(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_i)throw _i=!1,e=_l,_l=null,e;return(Ii&1)!==0&&e.tag!==0&&Wn(),a=e.pendingLanes,(a&1)!==0?e===Tl?Rr++:(Rr=0,Tl=e):Rr=0,$t(),null}function Wn(){if(Gt!==null){var e=Do(Ii),t=it.transition,n=oe;try{if(it.transition=null,oe=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Ii=0,(te&6)!==0)throw Error(u(331));var i=te;for(te|=4,F=e.current;F!==null;){var a=F,s=a.child;if((F.flags&16)!==0){var d=a.deletions;if(d!==null){for(var m=0;m<d.length;m++){var k=d[m];for(F=k;F!==null;){var P=F;switch(P.tag){case 0:case 11:case 15:br(8,P,a)}var L=P.child;if(L!==null)L.return=P,F=L;else for(;F!==null;){P=F;var R=P.sibling,D=P.return;if(Tu(P),P===k){F=null;break}if(R!==null){R.return=D,F=R;break}F=D}}}var B=a.alternate;if(B!==null){var W=B.child;if(W!==null){B.child=null;do{var Se=W.sibling;W.sibling=null,W=Se}while(W!==null)}}F=a}}if((a.subtreeFlags&2064)!==0&&s!==null)s.return=a,F=s;else e:for(;F!==null;){if(a=F,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:br(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,F=x;break e}F=a.return}}var g=e.current;for(F=g;F!==null;){s=F;var w=s.child;if((s.subtreeFlags&2064)!==0&&w!==null)w.return=s,F=w;else e:for(s=g;F!==null;){if(d=F,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:zi(9,d)}}catch($){ke(d,d.return,$)}if(d===s){F=null;break e}var _=d.sibling;if(_!==null){_.return=d.return,F=_;break e}F=d.return}}if(te=i,$t(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Wr,e)}catch{}r=!0}return r}finally{oe=n,it.transition=t}}return!1}function Ku(e,t,n){t=Fn(n,t),t=pu(e,t,1),e=Vt(e,t,1),t=Ue(),e!==null&&(qn(e,1,t),Qe(e,t))}function ke(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Fn(n,e),e=mu(t,e,1),t=Vt(t,e,1),e=Ue(),t!==null&&(qn(t,1,e),Qe(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(_e&n)===n&&(Ce===4||Ce===3&&(_e&130023424)===_e&&500>je()-Ll?mn(e,0):Pl|=n),Qe(e,t)}function Xu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Hr,Hr<<=1,(Hr&130023424)===0&&(Hr=4194304)));var n=Ue();e=Rt(e,t),e!==null&&(qn(e,t,n),Qe(e,n))}function bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Xu(e,n)}var Ju;Ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return He=!1,pf(e,t,n);He=(e.flags&131072)!==0}else He=!1,me&&(t.flags&1048576)!==0&&Ps(t,fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ci(e,t),e=t.pendingProps;var i=Pn(t,Te.current);Dn(t,n),i=sl(null,t,r,e,i,n);var a=ul();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(a=!0,ui(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tl(t),i.updater=bi,t.stateNode=i,i._reactInternals=t,hl(t,r,e,n),t=yl(null,t,r,!0,a,n)):(t.tag=0,me&&a&&Va(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ci(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rf(r),e=dt(r,e),i){case 0:t=xl(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=xu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,dt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),xl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Su(e,t,r,i,n);case 3:e:{if(Nu(t),e===null)throw Error(u(387));r=t.pendingProps,a=t.memoizedState,i=a.element,As(e,t),xi(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Fn(Error(u(423)),t),t=bu(e,t,r,n,i);break e}else if(r!==i){i=Fn(Error(u(424)),t),t=bu(e,t,r,n,i);break e}else for(qe=Ut(t.stateNode.containerInfo.firstChild),Je=t,me=!0,ct=null,n=Os(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=Pt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return Ws(t),e===null&&Ga(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Aa(r,i)?s=null:a!==null&&Aa(r,a)&&(t.flags|=32),ju(e,t),Ae(e,t,s,n),t.child;case 6:return e===null&&Ga(t),null;case 13:return Eu(e,t,n);case 4:return nl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=In(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),xu(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ce(hi,r._currentValue),r._currentValue=s,a!==null)if(ut(a.value,s)){if(a.children===i.children&&!We.current){t=Pt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var d=a.dependencies;if(d!==null){s=a.child;for(var m=d.firstContext;m!==null;){if(m.context===r){if(a.tag===1){m=zt(-1,n&-n),m.tag=2;var k=a.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?m.next=m:(m.next=P.next,P.next=m),k.pending=m}}a.lanes|=n,m=a.alternate,m!==null&&(m.lanes|=n),Za(a.return,n,t),d.lanes|=n;break}m=m.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(u(341));s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Za(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=nt(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),yu(e,t,r,i,n);case 15:return wu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Ci(e,t),t.tag=1,$e(r)?(e=!0,ui(t)):e=!1,Dn(t,n),du(t,r,i),hl(t,r,i,n),yl(null,t,r,!0,e,n);case 19:return Ru(e,t,n);case 22:return ku(e,t,n)}throw Error(u(156,t.tag))};function qu(e,t){return Lo(e,t)}function Cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Cf(e,t,n,r)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return Al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ht)return 11;if(e===gt)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")Al(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ye:return gn(n.children,i,a,t);case be:s=8,i|=8;break;case Oe:return e=at(12,n,t,i|2),e.elementType=Oe,e.lanes=a,e;case Ge:return e=at(13,n,t,i),e.elementType=Ge,e.lanes=a,e;case ot:return e=at(19,n,t,i),e.elementType=ot,e.lanes=a,e;case we:return Ai(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:s=10;break e;case nn:s=9;break e;case ht:s=11;break e;case gt:s=14;break e;case Be:s=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=at(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function gn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ai(e,t,n,r){return e=at(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function Ul(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wl(e,t,n,r,i,a,s,d,m){return e=new zf(e,t,n,d,m),t===1?(t=1,a===!0&&(t|=8)):t=0,a=at(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tl(a),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zu(e){if(!e)return Wt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if($e(n))return Cs(e,n,t)}return t}function ec(e,t,n,r,i,a,s,d,m){return e=Wl(n,r,!0,e,i,a,s,d,m),e.context=Zu(null),n=e.current,r=Ue(),i=Kt(n),a=zt(r,i),a.callback=t??null,Vt(n,a,i),e.current.lanes=i,qn(e,i,r),Qe(e,r),e}function Ui(e,t,n,r){var i=t.current,a=Ue(),s=Kt(i);return n=Zu(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(i,t,s),e!==null&&(mt(e,i,s,a),vi(e,i,s)),s}function Bi(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $l(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}function Lf(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}Wi.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ui(e,t,null,null)},Wi.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Ui(null,e,null,null)}),t[Nt]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ao();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Wo(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rc(){}function _f(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var k=Bi(s);a.call(k)}}var s=ec(t,r,e,0,null,!1,!1,"",rc);return e._reactRootContainer=s,e[Nt]=s.current,fr(e.nodeType===8?e.parentNode:e),pn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var k=Bi(m);d.call(k)}}var m=Wl(e,0,!1,null,null,!1,!1,"",rc);return e._reactRootContainer=m,e[Nt]=m.current,fr(e.nodeType===8?e.parentNode:e),pn(function(){Ui(t,m,n,r)}),m}function Hi(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var d=i;i=function(){var m=Bi(s);d.call(m)}}Ui(t,s,e,i)}else s=_f(n,t,e,i,r);return Bi(s)}Oo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jn(t.pendingLanes);n!==0&&(ha(t,n|1),Qe(t,je()),(te&6)===0&&(Bn=je()+500,$t()))}break;case 13:pn(function(){var r=Rt(e,1);if(r!==null){var i=Ue();mt(r,e,1,i)}}),$l(e,1)}},ga=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=Ue();mt(t,e,134217728,n)}$l(e,134217728)}},Fo=function(e){if(e.tag===13){var t=Kt(e),n=Rt(e,t);if(n!==null){var r=Ue();mt(n,e,t,r)}$l(e,t)}},Ao=function(){return oe},Uo=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}},sa=function(e,t,n){switch(t){case"input":if(ea(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oi(r);if(!i)throw Error(u(90));uo(r),ea(r,i)}}}break;case"textarea":ho(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}},No=Dl,bo=pn;var Tf={usingClientEntryPoint:!1,Events:[hr,Rn,oi,jo,So,Dl]},zr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zo(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{Wr=Vi.inject(If),vt=Vi}catch{}}return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf,Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(u(200));return Pf(e,t,null,n)},Ye.createRoot=function(e,t){if(!Vl(e))throw Error(u(299));var n=!1,r="",i=nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wl(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,fr(e.nodeType===8?e.parentNode:e),new Hl(t)},Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=zo(t),e=e===null?null:e.stateNode,e},Ye.flushSync=function(e){return pn(e)},Ye.hydrate=function(e,t,n){if(!$i(t))throw Error(u(200));return Hi(null,e,t,!0,n)},Ye.hydrateRoot=function(e,t,n){if(!Vl(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=nc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ec(t,null,e,1,n??null,i,!1,a,s),e[Nt]=t.current,fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wi(t)},Ye.render=function(e,t,n){if(!$i(t))throw Error(u(200));return Hi(null,e,t,!1,n)},Ye.unmountComponentAtNode=function(e){if(!$i(e))throw Error(u(40));return e._reactRootContainer?(pn(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1},Ye.unstable_batchedUpdates=Dl,Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$i(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Hi(e,t,n,!1,r)},Ye.version="18.3.1-next-f1338f8080-20240426",Ye}var dc;function Wf(){if(dc)return Gl.exports;dc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Gl.exports=Bf(),Gl.exports}var fc;function $f(){if(fc)return Qi;fc=1;var o=Wf();return Qi.createRoot=o.createRoot,Qi.hydrateRoot=o.hydrateRoot,Qi}var Hf=$f();var pc="popstate";function Vf(o={}){function c(f,p){let{pathname:h,search:y,hash:N}=f.location;return to("",{pathname:h,search:y,hash:N},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function u(f,p){return typeof p=="string"?p:_r(p)}return Yf(c,u,null,o)}function xe(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function jt(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Qf(){return Math.random().toString(36).substring(2,10)}function mc(o,c){return{usr:o.state,key:o.key,idx:c}}function to(o,c,u=null,f){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof c=="string"?$n(c):c,state:u,key:c&&c.key||f||Qf()}}function _r({pathname:o="/",search:c="",hash:u=""}){return c&&c!=="?"&&(o+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(o+=u.charAt(0)==="#"?u:"#"+u),o}function $n(o){let c={};if(o){let u=o.indexOf("#");u>=0&&(c.hash=o.substring(u),o=o.substring(0,u));let f=o.indexOf("?");f>=0&&(c.search=o.substring(f),o=o.substring(0,f)),o&&(c.pathname=o)}return c}function Yf(o,c,u,f={}){let{window:p=document.defaultView,v5Compat:h=!1}=f,y=p.history,N="POP",S=null,C=b();C==null&&(C=0,y.replaceState({...y.state,idx:C},""));function b(){return(y.state||{idx:null}).idx}function E(){N="POP";let T=b(),Y=T==null?null:T-C;C=T,S&&S({action:N,location:O.location,delta:Y})}function I(T,Y){N="PUSH";let U=to(O.location,T,Y);C=b()+1;let J=mc(U,C),ae=O.createHref(U);try{y.pushState(J,"",ae)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;p.location.assign(ae)}h&&S&&S({action:N,location:O.location,delta:1})}function H(T,Y){N="REPLACE";let U=to(O.location,T,Y);C=b();let J=mc(U,C),ae=O.createHref(U);y.replaceState(J,"",ae),h&&S&&S({action:N,location:O.location,delta:0})}function X(T){return Gf(T)}let O={get action(){return N},get location(){return o(p,y)},listen(T){if(S)throw new Error("A history only accepts one active listener");return p.addEventListener(pc,E),S=T,()=>{p.removeEventListener(pc,E),S=null}},createHref(T){return c(p,T)},createURL:X,encodeLocation(T){let Y=X(T);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:I,replace:H,go(T){return y.go(T)}};return O}function Gf(o,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),xe(u,"No window.location.(origin|href) available to create URL");let f=typeof o=="string"?o:_r(o);return f=f.replace(/ $/,"%20"),!c&&f.startsWith("//")&&(f=u+f),new URL(f,u)}function wc(o,c,u="/"){return Kf(o,c,u,!1)}function Kf(o,c,u,f){let p=typeof c=="string"?$n(c):c,h=Tt(p.pathname||"/",u);if(h==null)return null;let y=kc(o);Xf(y);let N=null;for(let S=0;N==null&&S<y.length;++S){let C=op(h);N=ap(y[S],C,f)}return N}function kc(o,c=[],u=[],f="",p=!1){let h=(y,N,S=p,C)=>{let b={relativePath:C===void 0?y.path||"":C,caseSensitive:y.caseSensitive===!0,childrenIndex:N,route:y};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(f)&&S)return;xe(b.relativePath.startsWith(f),`Absolute route path "${b.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(f.length)}let E=_t([f,b.relativePath]),I=u.concat(b);y.children&&y.children.length>0&&(xe(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),kc(y.children,c,I,E,S)),!(y.path==null&&!y.index)&&c.push({path:E,score:rp(E,y.index),routesMeta:I})};return o.forEach((y,N)=>{if(y.path===""||!y.path?.includes("?"))h(y,N);else for(let S of jc(y.path))h(y,N,!0,S)}),c}function jc(o){let c=o.split("/");if(c.length===0)return[];let[u,...f]=c,p=u.endsWith("?"),h=u.replace(/\?$/,"");if(f.length===0)return p?[h,""]:[h];let y=jc(f.join("/")),N=[];return N.push(...y.map(S=>S===""?h:[h,S].join("/"))),p&&N.push(...y),N.map(S=>o.startsWith("/")&&S===""?"/":S)}function Xf(o){o.sort((c,u)=>c.score!==u.score?u.score-c.score:ip(c.routesMeta.map(f=>f.childrenIndex),u.routesMeta.map(f=>f.childrenIndex)))}var Jf=/^:[\w-]+$/,qf=3,Zf=2,ep=1,tp=10,np=-2,hc=o=>o==="*";function rp(o,c){let u=o.split("/"),f=u.length;return u.some(hc)&&(f+=np),c&&(f+=Zf),u.filter(p=>!hc(p)).reduce((p,h)=>p+(Jf.test(h)?qf:h===""?ep:tp),f)}function ip(o,c){return o.length===c.length&&o.slice(0,-1).every((f,p)=>f===c[p])?o[o.length-1]-c[c.length-1]:0}function ap(o,c,u=!1){let{routesMeta:f}=o,p={},h="/",y=[];for(let N=0;N<f.length;++N){let S=f[N],C=N===f.length-1,b=h==="/"?c:c.slice(h.length)||"/",E=Xi({path:S.relativePath,caseSensitive:S.caseSensitive,end:C},b),I=S.route;if(!E&&C&&u&&!f[f.length-1].route.index&&(E=Xi({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},b)),!E)return null;Object.assign(p,E.params),y.push({params:p,pathname:_t([h,E.pathname]),pathnameBase:dp(_t([h,E.pathnameBase])),route:I}),E.pathnameBase!=="/"&&(h=_t([h,E.pathnameBase]))}return y}function Xi(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[u,f]=lp(o.path,o.caseSensitive,o.end),p=c.match(u);if(!p)return null;let h=p[0],y=h.replace(/(.)\/+$/,"$1"),N=p.slice(1);return{params:f.reduce((C,{paramName:b,isOptional:E},I)=>{if(b==="*"){let X=N[I]||"";y=h.slice(0,h.length-X.length).replace(/(.)\/+$/,"$1")}const H=N[I];return E&&!H?C[b]=void 0:C[b]=(H||"").replace(/%2F/g,"/"),C},{}),pathname:h,pathnameBase:y,pattern:o}}function lp(o,c=!1,u=!0){jt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let f=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,N,S)=>(f.push({paramName:N,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(f.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),f]}function op(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return jt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),o}}function Tt(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,f=o.charAt(u);return f&&f!=="/"?null:o.slice(u)||"/"}var sp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function up(o,c="/"){let{pathname:u,search:f="",hash:p=""}=typeof o=="string"?$n(o):o,h;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?h=gc(u.substring(1),"/"):h=gc(u,c)):h=c,{pathname:h,search:fp(f),hash:pp(p)}}function gc(o,c){let u=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?u.length>1&&u.pop():p!=="."&&u.push(p)}),u.length>1?u.join("/"):"/"}function Jl(o,c,u,f){return`Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cp(o){return o.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function Sc(o){let c=cp(o);return c.map((u,f)=>f===c.length-1?u.pathname:u.pathnameBase)}function Nc(o,c,u,f=!1){let p;typeof o=="string"?p=$n(o):(p={...o},xe(!p.pathname||!p.pathname.includes("?"),Jl("?","pathname","search",p)),xe(!p.pathname||!p.pathname.includes("#"),Jl("#","pathname","hash",p)),xe(!p.search||!p.search.includes("#"),Jl("#","search","hash",p)));let h=o===""||p.pathname==="",y=h?"/":p.pathname,N;if(y==null)N=u;else{let E=c.length-1;if(!f&&y.startsWith("..")){let I=y.split("/");for(;I[0]==="..";)I.shift(),E-=1;p.pathname=I.join("/")}N=E>=0?c[E]:"/"}let S=up(p,N),C=y&&y!=="/"&&y.endsWith("/"),b=(h||y===".")&&u.endsWith("/");return!S.pathname.endsWith("/")&&(C||b)&&(S.pathname+="/"),S}var _t=o=>o.join("/").replace(/\/\/+/g,"/"),dp=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),fp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,pp=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,mp=class{constructor(o,c,u,f=!1){this.status=o,this.statusText=c||"",this.internal=f,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function hp(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function gp(o){return o.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var bc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ec(o,c){let u=o;if(typeof u!="string"||!sp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let f=u,p=!1;if(bc)try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),N=Tt(y.pathname,c);y.origin===h.origin&&N!=null?u=N+y.search+y.hash:p=!0}catch{jt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:f,isExternal:p,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cc=["POST","PUT","PATCH","DELETE"];new Set(Cc);var vp=["GET",...Cc];new Set(vp);var Hn=j.createContext(null);Hn.displayName="DataRouter";var Ji=j.createContext(null);Ji.displayName="DataRouterState";var xp=j.createContext(!1),Rc=j.createContext({isTransitioning:!1});Rc.displayName="ViewTransition";var yp=j.createContext(new Map);yp.displayName="Fetchers";var wp=j.createContext(null);wp.displayName="Await";var lt=j.createContext(null);lt.displayName="Navigation";var Tr=j.createContext(null);Tr.displayName="Location";var St=j.createContext({outlet:null,matches:[],isDataRoute:!1});St.displayName="Route";var io=j.createContext(null);io.displayName="RouteError";var zc="REACT_ROUTER_ERROR",kp="REDIRECT",jp="ROUTE_ERROR_RESPONSE";function Sp(o){if(o.startsWith(`${zc}:${kp}:{`))try{let c=JSON.parse(o.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Np(o){if(o.startsWith(`${zc}:${jp}:{`))try{let c=JSON.parse(o.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new mp(c.status,c.statusText,c.data)}catch{}}function bp(o,{relative:c}={}){xe(Ir(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:f}=j.useContext(lt),{hash:p,pathname:h,search:y}=Mr(o,{relative:c}),N=h;return u!=="/"&&(N=h==="/"?u:_t([u,h])),f.createHref({pathname:N,search:y,hash:p})}function Ir(){return j.useContext(Tr)!=null}function tn(){return xe(Ir(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Tr).location}var Pc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lc(o){j.useContext(lt).static||j.useLayoutEffect(o)}function Ep(){let{isDataRoute:o}=j.useContext(St);return o?Bp():Cp()}function Cp(){xe(Ir(),"useNavigate() may be used only in the context of a <Router> component.");let o=j.useContext(Hn),{basename:c,navigator:u}=j.useContext(lt),{matches:f}=j.useContext(St),{pathname:p}=tn(),h=JSON.stringify(Sc(f)),y=j.useRef(!1);return Lc(()=>{y.current=!0}),j.useCallback((S,C={})=>{if(jt(y.current,Pc),!y.current)return;if(typeof S=="number"){u.go(S);return}let b=Nc(S,JSON.parse(h),p,C.relative==="path");o==null&&c!=="/"&&(b.pathname=b.pathname==="/"?c:_t([c,b.pathname])),(C.replace?u.replace:u.push)(b,C.state,C)},[c,u,h,p,o])}var Rp=j.createContext(null);function zp(o){let c=j.useContext(St).outlet;return j.useMemo(()=>c&&j.createElement(Rp.Provider,{value:o},c),[c,o])}function Mr(o,{relative:c}={}){let{matches:u}=j.useContext(St),{pathname:f}=tn(),p=JSON.stringify(Sc(u));return j.useMemo(()=>Nc(o,JSON.parse(p),f,c==="path"),[o,p,f,c])}function Pp(o,c){return _c(o,c)}function _c(o,c,u,f,p){xe(Ir(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=j.useContext(lt),{matches:y}=j.useContext(St),N=y[y.length-1],S=N?N.params:{},C=N?N.pathname:"/",b=N?N.pathnameBase:"/",E=N&&N.route;{let U=E&&E.path||"";Ic(C,!E||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${C}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let I=tn(),H;if(c){let U=typeof c=="string"?$n(c):c;xe(b==="/"||U.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${U.pathname}" was given in the \`location\` prop.`),H=U}else H=I;let X=H.pathname||"/",O=X;if(b!=="/"){let U=b.replace(/^\//,"").split("/");O="/"+X.replace(/^\//,"").split("/").slice(U.length).join("/")}let T=wc(o,{pathname:O});jt(E||T!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),jt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Mp(T&&T.map(U=>Object.assign({},U,{params:Object.assign({},S,U.params),pathname:_t([b,h.encodeLocation?h.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?b:_t([b,h.encodeLocation?h.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),y,u,f,p);return c&&Y?j.createElement(Tr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},Y):Y}function Lp(){let o=Up(),c=hp(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),u=o instanceof Error?o.stack:null,f="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:f},h={padding:"2px 4px",backgroundColor:f},y=null;return console.error("Error handled by React Router default ErrorBoundary:",o),y=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:h},"ErrorBoundary")," or"," ",j.createElement("code",{style:h},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},c),u?j.createElement("pre",{style:p},u):null,y)}var _p=j.createElement(Lp,null),Tc=class extends j.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,c){return c.location!==o.location||c.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:c.error,location:c.location,revalidation:o.revalidation||c.revalidation}}componentDidCatch(o,c){this.props.onError?this.props.onError(o,c):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const u=Np(o.digest);u&&(o=u)}let c=o!==void 0?j.createElement(St.Provider,{value:this.props.routeContext},j.createElement(io.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?j.createElement(Tp,{error:o},c):c}};Tc.contextType=xp;var ql=new WeakMap;function Tp({children:o,error:c}){let{basename:u}=j.useContext(lt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let f=Sp(c.digest);if(f){let p=ql.get(c);if(p)throw p;let h=Ec(f.location,u);if(bc&&!ql.get(c))if(h.isExternal||f.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:f.replace}));throw ql.set(c,y),y}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return o}function Ip({routeContext:o,match:c,children:u}){let f=j.useContext(Hn);return f&&f.static&&f.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=c.route.id),j.createElement(St.Provider,{value:o},u)}function Mp(o,c=[],u=null,f=null,p=null){if(o==null){if(!u)return null;if(u.errors)o=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)o=u.matches;else return null}let h=o,y=u?.errors;if(y!=null){let b=h.findIndex(E=>E.route.id&&y?.[E.route.id]!==void 0);xe(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),h=h.slice(0,Math.min(h.length,b+1))}let N=!1,S=-1;if(u)for(let b=0;b<h.length;b++){let E=h[b];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(S=b),E.route.id){let{loaderData:I,errors:H}=u,X=E.route.loader&&!I.hasOwnProperty(E.route.id)&&(!H||H[E.route.id]===void 0);if(E.route.lazy||X){N=!0,S>=0?h=h.slice(0,S+1):h=[h[0]];break}}}let C=u&&f?(b,E)=>{f(b,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:gp(u.matches),errorInfo:E})}:void 0;return h.reduceRight((b,E,I)=>{let H,X=!1,O=null,T=null;u&&(H=y&&E.route.id?y[E.route.id]:void 0,O=E.route.errorElement||_p,N&&(S<0&&I===0?(Ic("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,T=null):S===I&&(X=!0,T=E.route.hydrateFallbackElement||null)));let Y=c.concat(h.slice(0,I+1)),U=()=>{let J;return H?J=O:X?J=T:E.route.Component?J=j.createElement(E.route.Component,null):E.route.element?J=E.route.element:J=b,j.createElement(Ip,{match:E,routeContext:{outlet:b,matches:Y,isDataRoute:u!=null},children:J})};return u&&(E.route.ErrorBoundary||E.route.errorElement||I===0)?j.createElement(Tc,{location:u.location,revalidation:u.revalidation,component:O,error:H,children:U(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:C}):U()},null)}function ao(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dp(o){let c=j.useContext(Hn);return xe(c,ao(o)),c}function Op(o){let c=j.useContext(Ji);return xe(c,ao(o)),c}function Fp(o){let c=j.useContext(St);return xe(c,ao(o)),c}function lo(o){let c=Fp(o),u=c.matches[c.matches.length-1];return xe(u.route.id,`${o} can only be used on routes that contain a unique "id"`),u.route.id}function Ap(){return lo("useRouteId")}function Up(){let o=j.useContext(io),c=Op("useRouteError"),u=lo("useRouteError");return o!==void 0?o:c.errors?.[u]}function Bp(){let{router:o}=Dp("useNavigate"),c=lo("useNavigate"),u=j.useRef(!1);return Lc(()=>{u.current=!0}),j.useCallback(async(p,h={})=>{jt(u.current,Pc),u.current&&(typeof p=="number"?await o.navigate(p):await o.navigate(p,{fromRouteId:c,...h}))},[o,c])}var vc={};function Ic(o,c,u){!c&&!vc[o]&&(vc[o]=!0,jt(!1,u))}j.memo(Wp);function Wp({routes:o,future:c,state:u,onError:f}){return _c(o,void 0,u,f,c)}function $p(o){return zp(o.context)}function Zt(o){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Hp({basename:o="/",children:c=null,location:u,navigationType:f="POP",navigator:p,static:h=!1,unstable_useTransitions:y}){xe(!Ir(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=o.replace(/^\/*/,"/"),S=j.useMemo(()=>({basename:N,navigator:p,static:h,unstable_useTransitions:y,future:{}}),[N,p,h,y]);typeof u=="string"&&(u=$n(u));let{pathname:C="/",search:b="",hash:E="",state:I=null,key:H="default"}=u,X=j.useMemo(()=>{let O=Tt(C,N);return O==null?null:{location:{pathname:O,search:b,hash:E,state:I,key:H},navigationType:f}},[N,C,b,E,I,H,f]);return jt(X!=null,`<Router basename="${N}"> is not able to match the URL "${C}${b}${E}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:j.createElement(lt.Provider,{value:S},j.createElement(Tr.Provider,{children:c,value:X}))}function Vp({children:o,location:c}){return Pp(no(o),c)}function no(o,c=[]){let u=[];return j.Children.forEach(o,(f,p)=>{if(!j.isValidElement(f))return;let h=[...c,p];if(f.type===j.Fragment){u.push.apply(u,no(f.props.children,h));return}xe(f.type===Zt,`[${typeof f.type=="string"?f.type:f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!f.props.index||!f.props.children,"An index route cannot have child routes.");let y={id:f.props.id||h.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,middleware:f.props.middleware,loader:f.props.loader,action:f.props.action,hydrateFallbackElement:f.props.hydrateFallbackElement,HydrateFallback:f.props.HydrateFallback,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.hasErrorBoundary===!0||f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(y.children=no(f.props.children,h)),u.push(y)}),u}var Gi="get",Ki="application/x-www-form-urlencoded";function qi(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Qp(o){return qi(o)&&o.tagName.toLowerCase()==="button"}function Yp(o){return qi(o)&&o.tagName.toLowerCase()==="form"}function Gp(o){return qi(o)&&o.tagName.toLowerCase()==="input"}function Kp(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Xp(o,c){return o.button===0&&(!c||c==="_self")&&!Kp(o)}var Yi=null;function Jp(){if(Yi===null)try{new FormData(document.createElement("form"),0),Yi=!1}catch{Yi=!0}return Yi}var qp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zl(o){return o!=null&&!qp.has(o)?(jt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ki}"`),null):o}function Zp(o,c){let u,f,p,h,y;if(Yp(o)){let N=o.getAttribute("action");f=N?Tt(N,c):null,u=o.getAttribute("method")||Gi,p=Zl(o.getAttribute("enctype"))||Ki,h=new FormData(o)}else if(Qp(o)||Gp(o)&&(o.type==="submit"||o.type==="image")){let N=o.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=o.getAttribute("formaction")||N.getAttribute("action");if(f=S?Tt(S,c):null,u=o.getAttribute("formmethod")||N.getAttribute("method")||Gi,p=Zl(o.getAttribute("formenctype"))||Zl(N.getAttribute("enctype"))||Ki,h=new FormData(N,o),!Jp()){let{name:C,type:b,value:E}=o;if(b==="image"){let I=C?`${C}.`:"";h.append(`${I}x`,"0"),h.append(`${I}y`,"0")}else C&&h.append(C,E)}}else{if(qi(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Gi,f=null,p=Ki,y=o}return h&&p==="text/plain"&&(y=h,h=void 0),{action:f,method:u.toLowerCase(),encType:p,formData:h,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function oo(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function em(o,c,u,f){let p=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return u?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${f}`:p.pathname=`${p.pathname}.${f}`:p.pathname==="/"?p.pathname=`_root.${f}`:c&&Tt(p.pathname,c)==="/"?p.pathname=`${c.replace(/\/$/,"")}/_root.${f}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${f}`,p}async function tm(o,c){if(o.id in c)return c[o.id];try{let u=await import(o.module);return c[o.id]=u,u}catch(u){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nm(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function rm(o,c,u){let f=await Promise.all(o.map(async p=>{let h=c.routes[p.route.id];if(h){let y=await tm(h,u);return y.links?y.links():[]}return[]}));return om(f.flat(1).filter(nm).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function xc(o,c,u,f,p,h){let y=(S,C)=>u[C]?S.route.id!==u[C].route.id:!0,N=(S,C)=>u[C].pathname!==S.pathname||u[C].route.path?.endsWith("*")&&u[C].params["*"]!==S.params["*"];return h==="assets"?c.filter((S,C)=>y(S,C)||N(S,C)):h==="data"?c.filter((S,C)=>{let b=f.routes[S.route.id];if(!b||!b.hasLoader)return!1;if(y(S,C)||N(S,C))return!0;if(S.route.shouldRevalidate){let E=S.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function im(o,c,{includeHydrateFallback:u}={}){return am(o.map(f=>{let p=c.routes[f.route.id];if(!p)return[];let h=[p.module];return p.clientActionModule&&(h=h.concat(p.clientActionModule)),p.clientLoaderModule&&(h=h.concat(p.clientLoaderModule)),u&&p.hydrateFallbackModule&&(h=h.concat(p.hydrateFallbackModule)),p.imports&&(h=h.concat(p.imports)),h}).flat(1))}function am(o){return[...new Set(o)]}function lm(o){let c={},u=Object.keys(o).sort();for(let f of u)c[f]=o[f];return c}function om(o,c){let u=new Set;return new Set(c),o.reduce((f,p)=>{let h=JSON.stringify(lm(p));return u.has(h)||(u.add(h),f.push({key:h,link:p})),f},[])}function Mc(){let o=j.useContext(Hn);return oo(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function sm(){let o=j.useContext(Ji);return oo(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var so=j.createContext(void 0);so.displayName="FrameworkContext";function Dc(){let o=j.useContext(so);return oo(o,"You must render this element inside a <HydratedRouter> element"),o}function um(o,c){let u=j.useContext(so),[f,p]=j.useState(!1),[h,y]=j.useState(!1),{onFocus:N,onBlur:S,onMouseEnter:C,onMouseLeave:b,onTouchStart:E}=c,I=j.useRef(null);j.useEffect(()=>{if(o==="render"&&y(!0),o==="viewport"){let O=Y=>{Y.forEach(U=>{y(U.isIntersecting)})},T=new IntersectionObserver(O,{threshold:.5});return I.current&&T.observe(I.current),()=>{T.disconnect()}}},[o]),j.useEffect(()=>{if(f){let O=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(O)}}},[f]);let H=()=>{p(!0)},X=()=>{p(!1),y(!1)};return u?o!=="intent"?[h,I,{}]:[h,I,{onFocus:Lr(N,H),onBlur:Lr(S,X),onMouseEnter:Lr(C,H),onMouseLeave:Lr(b,X),onTouchStart:Lr(E,H)}]:[!1,I,{}]}function Lr(o,c){return u=>{o&&o(u),u.defaultPrevented||c(u)}}function cm({page:o,...c}){let{router:u}=Mc(),f=j.useMemo(()=>wc(u.routes,o,u.basename),[u.routes,o,u.basename]);return f?j.createElement(fm,{page:o,matches:f,...c}):null}function dm(o){let{manifest:c,routeModules:u}=Dc(),[f,p]=j.useState([]);return j.useEffect(()=>{let h=!1;return rm(o,c,u).then(y=>{h||p(y)}),()=>{h=!0}},[o,c,u]),f}function fm({page:o,matches:c,...u}){let f=tn(),{future:p,manifest:h,routeModules:y}=Dc(),{basename:N}=Mc(),{loaderData:S,matches:C}=sm(),b=j.useMemo(()=>xc(o,c,C,h,f,"data"),[o,c,C,h,f]),E=j.useMemo(()=>xc(o,c,C,h,f,"assets"),[o,c,C,h,f]),I=j.useMemo(()=>{if(o===f.pathname+f.search+f.hash)return[];let O=new Set,T=!1;if(c.forEach(U=>{let J=h.routes[U.route.id];!J||!J.hasLoader||(!b.some(ae=>ae.route.id===U.route.id)&&U.route.id in S&&y[U.route.id]?.shouldRevalidate||J.hasClientLoader?T=!0:O.add(U.route.id))}),O.size===0)return[];let Y=em(o,N,p.unstable_trailingSlashAwareDataRequests,"data");return T&&O.size>0&&Y.searchParams.set("_routes",c.filter(U=>O.has(U.route.id)).map(U=>U.route.id).join(",")),[Y.pathname+Y.search]},[N,p.unstable_trailingSlashAwareDataRequests,S,f,h,b,c,o,y]),H=j.useMemo(()=>im(E,h),[E,h]),X=dm(E);return j.createElement(j.Fragment,null,I.map(O=>j.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...u})),H.map(O=>j.createElement("link",{key:O,rel:"modulepreload",href:O,...u})),X.map(({key:O,link:T})=>j.createElement("link",{key:O,nonce:u.nonce,...T,crossOrigin:T.crossOrigin??u.crossOrigin})))}function pm(...o){return c=>{o.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mm&&(window.__reactRouterVersion="7.13.0")}catch{}function hm({basename:o,children:c,unstable_useTransitions:u,window:f}){let p=j.useRef();p.current==null&&(p.current=Vf({window:f,v5Compat:!0}));let h=p.current,[y,N]=j.useState({action:h.action,location:h.location}),S=j.useCallback(C=>{u===!1?N(C):j.startTransition(()=>N(C))},[u]);return j.useLayoutEffect(()=>h.listen(S),[h,S]),j.createElement(Hp,{basename:o,children:c,location:y.location,navigationType:y.action,navigator:h,unstable_useTransitions:u})}var Oc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,en=j.forwardRef(function({onClick:c,discover:u="render",prefetch:f="none",relative:p,reloadDocument:h,replace:y,state:N,target:S,to:C,preventScrollReset:b,viewTransition:E,unstable_defaultShouldRevalidate:I,...H},X){let{basename:O,unstable_useTransitions:T}=j.useContext(lt),Y=typeof C=="string"&&Oc.test(C),U=Ec(C,O);C=U.to;let J=bp(C,{relative:p}),[ae,se,he]=um(f,H),ye=ym(C,{replace:y,state:N,target:S,preventScrollReset:b,relative:p,viewTransition:E,unstable_defaultShouldRevalidate:I,unstable_useTransitions:T});function be(Fe){c&&c(Fe),Fe.defaultPrevented||ye(Fe)}let Oe=j.createElement("a",{...H,...he,href:U.absoluteURL||J,onClick:U.isExternal||h?c:be,ref:pm(X,se),target:S,"data-discover":!Y&&u==="render"?"true":void 0});return ae&&!Y?j.createElement(j.Fragment,null,Oe,j.createElement(cm,{page:J})):Oe});en.displayName="Link";var gm=j.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:f="",end:p=!1,style:h,to:y,viewTransition:N,children:S,...C},b){let E=Mr(y,{relative:C.relative}),I=tn(),H=j.useContext(Ji),{navigator:X,basename:O}=j.useContext(lt),T=H!=null&&Nm(E)&&N===!0,Y=X.encodeLocation?X.encodeLocation(E).pathname:E.pathname,U=I.pathname,J=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;u||(U=U.toLowerCase(),J=J?J.toLowerCase():null,Y=Y.toLowerCase()),J&&O&&(J=Tt(J,O)||J);const ae=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let se=U===Y||!p&&U.startsWith(Y)&&U.charAt(ae)==="/",he=J!=null&&(J===Y||!p&&J.startsWith(Y)&&J.charAt(Y.length)==="/"),ye={isActive:se,isPending:he,isTransitioning:T},be=se?c:void 0,Oe;typeof f=="function"?Oe=f(ye):Oe=[f,se?"active":null,he?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof h=="function"?h(ye):h;return j.createElement(en,{...C,"aria-current":be,className:Oe,ref:b,style:Fe,to:y,viewTransition:N},typeof S=="function"?S(ye):S)});gm.displayName="NavLink";var vm=j.forwardRef(({discover:o="render",fetcherKey:c,navigate:u,reloadDocument:f,replace:p,state:h,method:y=Gi,action:N,onSubmit:S,relative:C,preventScrollReset:b,viewTransition:E,unstable_defaultShouldRevalidate:I,...H},X)=>{let{unstable_useTransitions:O}=j.useContext(lt),T=jm(),Y=Sm(N,{relative:C}),U=y.toLowerCase()==="get"?"get":"post",J=typeof N=="string"&&Oc.test(N),ae=se=>{if(S&&S(se),se.defaultPrevented)return;se.preventDefault();let he=se.nativeEvent.submitter,ye=he?.getAttribute("formmethod")||y,be=()=>T(he||se.currentTarget,{fetcherKey:c,method:ye,navigate:u,replace:p,state:h,relative:C,preventScrollReset:b,viewTransition:E,unstable_defaultShouldRevalidate:I});O&&u!==!1?j.startTransition(()=>be()):be()};return j.createElement("form",{ref:X,method:U,action:Y,onSubmit:f?S:ae,...H,"data-discover":!J&&o==="render"?"true":void 0})});vm.displayName="Form";function xm(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fc(o){let c=j.useContext(Hn);return xe(c,xm(o)),c}function ym(o,{target:c,replace:u,state:f,preventScrollReset:p,relative:h,viewTransition:y,unstable_defaultShouldRevalidate:N,unstable_useTransitions:S}={}){let C=Ep(),b=tn(),E=Mr(o,{relative:h});return j.useCallback(I=>{if(Xp(I,c)){I.preventDefault();let H=u!==void 0?u:_r(b)===_r(E),X=()=>C(o,{replace:H,state:f,preventScrollReset:p,relative:h,viewTransition:y,unstable_defaultShouldRevalidate:N});S?j.startTransition(()=>X()):X()}},[b,C,E,u,f,c,o,p,h,y,N,S])}var wm=0,km=()=>`__${String(++wm)}__`;function jm(){let{router:o}=Fc("useSubmit"),{basename:c}=j.useContext(lt),u=Ap(),f=o.fetch,p=o.navigate;return j.useCallback(async(h,y={})=>{let{action:N,method:S,encType:C,formData:b,body:E}=Zp(h,c);if(y.navigate===!1){let I=y.fetcherKey||km();await f(I,u,y.action||N,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:b,body:E,formMethod:y.method||S,formEncType:y.encType||C,flushSync:y.flushSync})}else await p(y.action||N,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:b,body:E,formMethod:y.method||S,formEncType:y.encType||C,replace:y.replace,state:y.state,fromRouteId:u,flushSync:y.flushSync,viewTransition:y.viewTransition})},[f,p,c,u])}function Sm(o,{relative:c}={}){let{basename:u}=j.useContext(lt),f=j.useContext(St);xe(f,"useFormAction must be used inside a RouteContext");let[p]=f.matches.slice(-1),h={...Mr(o||".",{relative:c})},y=tn();if(o==null){h.search=y.search;let N=new URLSearchParams(h.search),S=N.getAll("index");if(S.some(b=>b==="")){N.delete("index"),S.filter(E=>E).forEach(E=>N.append("index",E));let b=N.toString();h.search=b?`?${b}`:""}}return(!o||o===".")&&p.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:_t([u,h.pathname])),_r(h)}function Nm(o,{relative:c}={}){let u=j.useContext(Rc);xe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:f}=Fc("useViewTransitionState"),p=Mr(o,{relative:c});if(!u.isTransitioning)return!1;let h=Tt(u.currentLocation.pathname,f)||u.currentLocation.pathname,y=Tt(u.nextLocation.pathname,f)||u.nextLocation.pathname;return Xi(p.pathname,y)!=null||Xi(p.pathname,h)!=null}const eo=[{label:"Home",href:"/"},{label:"Experience",href:"/experience"},{label:"Teaching",href:"/teaching"},{label:"Projects",href:"/projects"},{label:"Skills",href:"/skills"},{label:"Contact",href:"/contact"}];function vn(){const o=tn(),[c,u]=j.useState(!1),[f,p]=j.useState(!1),[h,y]=j.useState(null),[N,S]=j.useState(!1);j.useEffect(()=>{const b=()=>u(window.scrollY>10);return window.addEventListener("scroll",b,{passive:!0}),()=>window.removeEventListener("scroll",b)},[]),j.useEffect(()=>(document.body.style.overflow=f?"hidden":"",()=>{document.body.style.overflow=""}),[f]),j.useEffect(()=>{const b=()=>{window.innerWidth>=768&&p(!1)};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const C=b=>b==="/"?o.pathname==="/":o.pathname.startsWith(b);return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }
        
        @keyframes neonPulse {
          0%, 100% { text-shadow: 0 0 4px rgba(0,255,255,0.3), 0 0 8px rgba(0,255,255,0.1); }
          50% { text-shadow: 0 0 8px rgba(0,255,255,0.5), 0 0 16px rgba(0,255,255,0.2), 0 0 24px rgba(0,255,255,0.1); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes magneticOrbit {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(0,255,255,0.1); }
          50% { border-color: rgba(0,255,255,0.3); }
        }

        .nav-link-underline {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link-underline::before {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
        }

        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #00ffff;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          box-shadow: 0 0 8px rgba(0,255,255,0.5);
        }

        .nav-link-group:hover .nav-link-underline::after {
          width: 100%;
        }

        .logo-glitch:hover {
          animation: glitch 0.3s ease infinite;
        }

        .nav-scrolled {
          border-color: rgba(255,255,255,0.06) !important;
          background: rgba(8,12,15,0.92) !important;
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }

        .hamburger-btn {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.10);
          cursor: pointer;
          z-index: 102;
          position: relative;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        
        .hamburger-btn:hover { 
          border-color: #00ffff;
          box-shadow: 0 0 15px rgba(0,255,255,0.2);
        }
        
        .hamburger-line {
          display: block;
          width: 18px;
          height: 1.5px;
          background: #e0e0e0;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        
        .hamburger-btn.open .hamburger-line:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
          background: #00ffff;
        }
        
        .hamburger-btn.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        
        .hamburger-btn.open .hamburger-line:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
          background: #00ffff;
        }

        .nav-desktop-links {
          display: flex;
          list-style: none;
          gap: 36px;
          margin: 0;
          padding: 0;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 101;
          background: rgba(8,12,15,0.0);
          -webkit-backdrop-filter: blur(0px);
          backdrop-filter: blur(0px);
          visibility: hidden;
          transition: background 0.35s ease, backdrop-filter 0.35s ease, visibility 0.35s;
          pointer-events: none;
        }
        
        .mobile-overlay.open {
          background: rgba(8,12,15,0.6);
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
          visibility: visible;
          pointer-events: all;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85vw);
          background: linear-gradient(135deg, #0a0e13 0%, #0d1117 100%);
          border-left: 1px solid rgba(255,255,255,0.07);
          z-index: 102;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
          background: rgba(0,255,255,0.02);
        }

        .drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono), monospace;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #999;
          transition: all 0.3s;
          opacity: 0;
          transform: translateX(16px);
          animation: drawerSlide 0.4s ease forwards;
          position: relative;
          overflow: hidden;
        }
        
        .drawer-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #00ffff, transparent);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }
        
        .drawer-link:hover::before,
        .drawer-link.active-link::before {
          transform: scaleY(1);
        }
        
        .drawer-link.active-link {
          color: #00ffff;
          background: rgba(0,255,255,0.04);
        }
        
        .drawer-link:hover {
          color: #e0e0e0;
          background: rgba(255,255,255,0.03);
          padding-left: 32px;
        }
        
        .drawer-link .link-arrow {
          font-size: 0.7rem;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.3s;
        }
        
        .drawer-link:hover .link-arrow,
        .drawer-link.active-link .link-arrow {
          opacity: 1;
          transform: translateX(0);
          color: #00ffff;
        }
        
        @keyframes drawerSlide {
          to { opacity: 1; transform: translateX(0); }
        }

        .drawer-resume {
          margin: 20px 24px;
          display: block;
          font-family: var(--font-mono), monospace;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 20px;
          background: linear-gradient(135deg, rgba(0,255,255,0.05) 0%, rgba(0,255,255,0.1) 100%);
          border: 1px solid rgba(0,255,255,0.25);
          color: #00ffff;
          text-align: center;
          transition: all 0.3s;
          opacity: 0;
          animation: drawerSlide 0.4s ease forwards;
          position: relative;
          overflow: hidden;
        }
        
        .drawer-resume::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .drawer-resume:hover::before {
          left: 100%;
        }
        
        .drawer-resume:hover {
          background: rgba(0,255,255,0.12);
          border-color: #00ffff;
          box-shadow: 0 0 20px rgba(0,255,255,0.2);
          transform: translateY(-2px);
        }

        .drawer-close {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          color: #999;
          width: 34px;
          height: 34px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          line-height: 1;
          transition: all 0.3s;
          flex-shrink: 0;
          border-radius: 50%;
        }
        
        .drawer-close:hover {
          border-color: #00ffff;
          color: #00ffff;
          box-shadow: 0 0 15px rgba(0,255,255,0.3);
          transform: rotate(90deg);
        }

        @media (max-width: 767px) {
          .hamburger-btn { display: flex !important; }
          .nav-desktop-links { display: none !important; }
        }

        .nav-link {
          font-family: var(--font-mono), monospace;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          padding: 4px 0;
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #00ffff, #00bcd4);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(0,255,255,0.5);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link:hover {
          text-shadow: 0 0 10px rgba(0,255,255,0.3);
          transform: translateY(-1px);
        }
      `}),l.jsxs("nav",{className:c?"nav-scrolled":"",style:{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px clamp(20px, 5vw, 60px)",borderBottom:"1px solid transparent",transition:"all 0.3s"},children:[l.jsx(en,{to:"/",className:"logo-glitch",onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),style:{fontFamily:"var(--font-mono), monospace",fontSize:"0.7rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"#00ffff",textDecoration:"none",flexShrink:0,animation:N?"neonPulse 1.5s ease-in-out infinite":"none",transition:"all 0.3s",position:"relative",textShadow:N?"0 0 10px rgba(0,255,255,0.5), 0 0 20px rgba(0,255,255,0.2)":"none"},children:l.jsxs("span",{style:{position:"relative"},children:["AK // LUMS '26",N&&l.jsx("span",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, transparent 50%, rgba(0,255,255,0.1) 50%)",backgroundSize:"100% 4px",animation:"scanLine 2s linear infinite",pointerEvents:"none"}})]})}),l.jsx("ul",{className:"nav-desktop-links",children:eo.map((b,E)=>l.jsx("li",{className:"nav-link-group",onMouseEnter:()=>y(E),onMouseLeave:()=>y(null),style:{opacity:h!==null&&h!==E?.5:1,transition:"opacity 0.3s"},children:l.jsxs(en,{to:b.href,className:"nav-link",style:{color:C(b.href)?"#e0e0e0":"#999",transform:h===E?"translateY(-1px)":"none"},children:[h===E&&l.jsx("span",{style:{position:"absolute",width:"4px",height:"4px",borderRadius:"50%",background:"#00ffff",boxShadow:"0 0 10px rgba(0,255,255,0.8)",animation:"magneticOrbit 1.5s linear infinite"}}),b.label]})},b.label))}),l.jsxs("button",{className:`hamburger-btn${f?" open":""}`,onClick:()=>p(!f),"aria-label":f?"Close menu":"Open menu","aria-expanded":f,style:{borderColor:f?"#00ffff":void 0,boxShadow:f?"0 0 15px rgba(0,255,255,0.3)":void 0},children:[l.jsx("span",{className:"hamburger-line"}),l.jsx("span",{className:"hamburger-line"}),l.jsx("span",{className:"hamburger-line"})]})]}),l.jsx("div",{className:`mobile-overlay${f?" open":""}`,onClick:()=>p(!1),"aria-hidden":"true"}),l.jsxs("div",{className:`mobile-drawer${f?" open":""}`,role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[l.jsxs("div",{className:"drawer-top",children:[l.jsx("span",{style:{fontFamily:"var(--font-mono), monospace",fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"#999"},children:"// navigation"}),l.jsx("button",{className:"drawer-close",onClick:()=>p(!1),"aria-label":"Close menu",children:"✕"})]}),l.jsx("nav",{style:{flex:1},children:eo.map((b,E)=>l.jsxs(en,{to:b.href,className:`drawer-link${C(b.href)?" active-link":""}`,style:{animationDelay:`${E*.055}s`},onClick:()=>p(!1),children:[b.label,l.jsx("span",{className:"link-arrow",children:"→"})]},b.label))}),l.jsx("a",{href:"/resume.pdf",download:!0,className:"drawer-resume",style:{animationDelay:`${eo.length*.055}s`},onClick:()=>p(!1),children:"↓ Download Resume"}),l.jsx("div",{style:{padding:"16px 24px",borderTop:"1px solid rgba(255,255,255,0.05)",fontFamily:"var(--font-mono), monospace",fontSize:"0.5rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"#999",flexShrink:0},children:"Abid Karim · CS · LUMS 2026"})]})]})}const bm=()=>l.jsxs("div",{className:"relative min-h-screen bg-black text-white overflow-hidden",children:[l.jsx("div",{className:"fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"}),l.jsx(vn,{}),l.jsx("main",{children:l.jsx($p,{})})]}),Em="/portifolio/assets/me-Tc22_3uG.jpeg",Cm=()=>l.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@300;400;500;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #080c0f;
      --bg2:       #0d1117;
      --bg3:       #0a0e12;
      --surface:   #0f1419;
      --surface2:  #141b22;
      --border:    rgba(255,255,255,0.06);
      --border2:   rgba(255,255,255,0.10);
      --text:      #e8edf2;
      --text2:     #7a8694;
      --muted:     #445060;
      --cyan:      #00d4ff;
      --cyan-dim:  rgba(0,212,255,0.06);
      --green:     #00ff88;
      --green-dim: rgba(0,255,136,0.06);
      --orange:    #ff6b35;
      --font-display: 'DM Serif Display', serif;
      --font-mono:    'JetBrains Mono', monospace;
      --font-body:    'Syne', sans-serif;
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-body);
      -webkit-font-smoothing: antialiased;
      min-height: 100vh;
      overflow-x: hidden;
    }

    .grid-bg {
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
      z-index: 0;
    }

    .orb { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; }
    .orb-1 {
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%);
      top: -200px; right: -100px;
      animation: float1 8s ease-in-out infinite;
    }
    .orb-2 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%);
      bottom: 100px; left: -100px;
      animation: float2 10s ease-in-out infinite;
    }
    @keyframes float1 {
      0%,100% { transform: translate(0,0); }
      50%      { transform: translate(-30px, 40px); }
    }
    @keyframes float2 {
      0%,100% { transform: translate(0,0); }
      50%      { transform: translate(20px, -30px); }
    }

    .scanline {
      position: absolute; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent);
      animation: scanline 6s linear infinite;
      pointer-events: none;
    }
    @keyframes scanline {
      0%   { top: -2px; }
      100% { top: 100%; }
    }

    .ticker-inner {
      display: flex;
      gap: 60px;
      animation: ticker 20s linear infinite;
      white-space: nowrap;
    }
    @keyframes ticker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }

    .status-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--green);
      animation: pulse-dot 2s ease-in-out infinite;
      flex-shrink: 0;
    }
    @keyframes pulse-dot {
      0%,100% { opacity: 1; transform: scale(1); }
      50%      { opacity: 0.5; transform: scale(0.8); }
    }

    .hero-panel { position: relative; }
    .hero-panel::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--cyan), var(--green));
    }

    .panel-label::before { content: '//'; color: var(--cyan); margin-right: 8px; }

    .hero-title::after {
      content: '';
      flex: 1;
      max-width: 200px;
      height: 1px;
      background: var(--border2);
    }

    .hero-name .last {
      display: block;
      background: linear-gradient(135deg, var(--cyan), var(--green));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .sec-title span {
      background: linear-gradient(135deg, var(--cyan), var(--green));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .anim-fade-up-0 { animation: fadeUp 0.7s 0.0s ease both; }
    .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
    .anim-fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }
    .anim-fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
    .anim-fade-up-4 { animation: fadeUp 0.7s 0.4s ease both; }
    .anim-fade-in-5 { animation: fadeIn 0.9s 0.5s ease both; }

    .pill {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      padding: 4px 9px;
      border: 1px solid var(--border2);
      color: var(--text2);
      transition: all 0.2s;
      cursor: default;
    }
    .pill:hover {
      border-color: var(--cyan);
      color: var(--cyan);
      background: var(--cyan-dim);
    }

    .nav-card { transition: background 0.3s; }
    .nav-card:hover { background: var(--surface2) !important; }
    .nav-card:hover .card-accent { transform: scaleX(1) !important; }

    .stat { transition: background 0.25s; }
    .stat:hover { background: var(--surface2) !important; }

    .btn {
      font-family: var(--font-mono);
      font-size: 0.62rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 12px 24px;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.25s;
      border: none;
      display: inline-block;
      white-space: nowrap;
    }
    .btn-primary { background: var(--cyan); color: #000; }
    .btn-primary:hover { background: #00b8dc; }
    .btn-ghost { background: transparent; color: var(--text2); border: 1px solid var(--border2); }
    .btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); }

    .side-label {
      position: fixed;
      left: 20px; top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      font-family: var(--font-mono);
      font-size: 0.5rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--muted);
      z-index: 50;
      pointer-events: none;
    }

    .sec-label {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 10px;
    }
    .sec-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 2.8rem);
      color: var(--text);
      font-weight: 400;
    }

    /* ── Photo frame ── */
    .photo-frame {
      position: relative;
      width: 100%;
      aspect-ratio: 3 / 4;
      overflow: hidden;
      border: 1px solid var(--border2);
    }
    .photo-frame::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--cyan), var(--green));
      z-index: 2;
    }
    .photo-frame::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(8,12,15,0.6) 0%, transparent 50%);
      z-index: 1;
      pointer-events: none;
    }
    .photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
      filter: grayscale(20%) contrast(1.05);
      transition: filter 0.4s ease, transform 0.4s ease;
    }
    .photo-frame:hover img {
      filter: grayscale(0%) contrast(1.1);
      transform: scale(1.03);
    }
    .photo-tag {
      position: absolute;
      bottom: 12px;
      left: 12px;
      z-index: 3;
      font-family: var(--font-mono);
      font-size: 0.52rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--cyan);
      background: rgba(8,12,15,0.75);
      padding: 4px 10px;
      border: 1px solid rgba(0,212,255,0.25);
      backdrop-filter: blur(6px);
    }

    .hero-inner {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 0;
      align-items: center;
      padding: 80px clamp(20px, 5vw, 60px);
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
      position: relative;
      z-index: 2;
    }

    /* Right column: photo on top, panel below */
    .hero-right {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .nav-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2px;
    }

    .hero-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
      .hero-inner {
        grid-template-columns: 1fr 320px;
        gap: 40px;
      }
    }

    @media (max-width: 900px) {
      .hero-inner {
        grid-template-columns: 1fr !important;
        padding: 80px 20px 40px !important;
        gap: 40px !important;
      }
      .hero-panel {
        display: block !important;
        width: 100%;
      }
      .photo-frame {
        aspect-ratio: 4 / 3;
        max-height: 280px;
      }
      .side-label { display: none !important; }
      .hero-panel-inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      .nav-cards-grid {
        grid-template-columns: 1fr !important;
      }
      .nav-cards-section {
        padding: 60px 20px !important;
      }
    }

    @media (max-width: 480px) {
      .hero-name {
        font-size: clamp(4rem, 18vw, 5.5rem) !important;
      }
      .hero-status {
        font-size: 0.52rem !important;
        padding: 5px 10px !important;
      }
      .btn {
        font-size: 0.58rem !important;
        padding: 11px 18px !important;
      }
      .hero-actions { gap: 10px; }
      .stats-grid {
        grid-template-columns: 1fr 1fr !important;
      }
      .ticker-wrapper {
        padding: 16px 20px !important;
      }
      .sec-label { font-size: 0.55rem; }
    }

    @media (max-width: 360px) {
      .hero-actions { flex-direction: column; }
      .btn { width: 100%; text-align: center; }
    }

    @media (min-width: 481px) and (max-width: 900px) {
      .nav-cards-grid {
        grid-template-columns: 1fr 1fr !important;
      }
      .nav-cards-grid .reveal:last-child {
        grid-column: 1 / -1;
      }
    }
  `}),yc=["AI Backend Engineer","LUMS CS 2026","LLM Pipeline Design","RAG Systems","Open to Work","Vector Databases","API Infrastructure","Full Stack Capable","Technical Mentor"],Rm=[{val:"3",lbl:"TA Positions"},{val:"2",lbl:"Tech Internships"},{val:"550+",lbl:"Students Impacted"},{val:"1",lbl:"Directed Research"}],zm=["RAG","LangChain","FastAPI","LLM APIs","PostgreSQL","Vector DBs","Django","Docker","CI/CD","WebSockets"],Pm=["MERN","TypeScript","Node.js","React"],Lm=[{num:"01",cat:"Professional",title:"Experience",desc:"Full-stack software engineering internship at 10Pearls and a financial data internship using SQL & Python at a startup.",color:"var(--cyan)",to:"/experience"},{num:"02",cat:"Academic",title:"Teaching",desc:"3 TA positions across CS core courses, mentoring 550+ students.",color:"var(--green)",to:"/teaching"},{num:"03",cat:"Personal & Academic",title:"Projects",desc:"AI-powered backend systems and applications built through personal and university projects.",color:"var(--orange)",to:"/projects"}];function _m(){return l.jsxs("div",{className:"hero-right anim-fade-in-5",children:[l.jsxs("div",{className:"photo-frame",children:[l.jsx("img",{src:Em,alt:"Abid Karim"}),l.jsx("span",{className:"photo-tag",children:"Abid Karim · LUMS '26"})]}),l.jsxs("div",{className:"hero-panel",style:{background:"var(--surface)",border:"1px solid var(--border2)",padding:"24px"},children:[l.jsx("div",{className:"panel-label",style:{fontFamily:"var(--font-mono)",fontSize:"0.58rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"20px",display:"flex",alignItems:"center"},children:"profile.json"}),l.jsx("div",{className:"stats-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--border)",marginBottom:"20px"},children:Rm.map(o=>l.jsxs("div",{className:"stat",style:{background:"var(--surface)",padding:"18px 14px"},children:[l.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.6rem, 3vw, 2.4rem)",letterSpacing:"0.02em",color:"var(--cyan)",lineHeight:1},children:o.val}),l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.52rem",letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--muted)",marginTop:"4px"},children:o.lbl})]},o.lbl))}),l.jsxs("div",{style:{background:"var(--bg3)",border:"1px solid var(--border)",padding:"14px"},children:[l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.56rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"10px"},children:"// ai backend stack"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:zm.map(o=>l.jsx("span",{className:"pill",children:o},o))}),l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.56rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",margin:"12px 0 10px"},children:"// also fluent in"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:Pm.map(o=>l.jsx("span",{className:"pill",style:{opacity:.6},children:o},o))})]})]})]})}function Tm(){const o=[...yc,...yc];return l.jsx("div",{className:"ticker-wrapper",style:{borderTop:"1px solid var(--border)",padding:"16px clamp(20px, 5vw, 60px)",overflow:"hidden",position:"relative",zIndex:2},children:l.jsx("div",{className:"ticker-inner",children:o.map((c,u)=>l.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.58rem",letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--muted)",display:"flex",alignItems:"center",gap:"12px",flexShrink:0},children:[c," ",l.jsx("span",{style:{color:"var(--cyan)"},children:"·"})]},u))})})}function Im(){return l.jsxs("section",{className:"nav-cards-section",style:{padding:"80px clamp(20px, 5vw, 60px)",maxWidth:1400,margin:"0 auto",position:"relative",zIndex:2},children:[l.jsxs("div",{className:"sec-head reveal",style:{marginBottom:40},children:[l.jsx("div",{className:"sec-label",children:"Navigate"}),l.jsxs("h2",{className:"sec-title",children:["Explore my ",l.jsx("span",{children:"work"})]})]}),l.jsx("div",{className:"nav-cards-grid",children:Lm.map(o=>l.jsx(en,{to:o.to,style:{textDecoration:"none"},className:"reveal",children:l.jsxs("div",{className:"nav-card",style:{background:"var(--surface)",border:"1px solid var(--border)",padding:"clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 32px)",position:"relative",overflow:"hidden",cursor:"pointer",height:"100%"},children:[l.jsx("div",{className:"card-accent",style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:o.color,transform:"scaleX(0)",transformOrigin:"left",transition:"transform 0.35s ease"}}),l.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.5rem, 5vw, 4rem)",color:"var(--border2)",lineHeight:1,marginBottom:"20px"},children:o.num}),l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:o.color,marginBottom:"10px"},children:o.cat}),l.jsx("div",{style:{fontSize:"1.2rem",fontWeight:500,color:"var(--text)",marginBottom:"12px"},children:o.title}),l.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text2)",lineHeight:1.7},children:o.desc})]})},o.num))})]})}function Mm(){const o=j.useRef(null);return j.useEffect(()=>(o.current=new IntersectionObserver(c=>{c.forEach((u,f)=>{u.isIntersecting&&(setTimeout(()=>u.target.classList.add("visible"),f*80),o.current?.unobserve(u.target))})},{threshold:.08}),document.querySelectorAll(".reveal").forEach(c=>{o.current?.observe(c)}),()=>o.current?.disconnect()),[]),l.jsxs(l.Fragment,{children:[l.jsx(Cm,{}),l.jsx("div",{className:"grid-bg"}),l.jsx(vn,{}),l.jsx("div",{className:"side-label",children:"Abid Karim · CS · 2026"}),l.jsxs("section",{id:"hero",style:{minHeight:"100vh",display:"grid",gridTemplateRows:"1fr auto",position:"relative",overflow:"hidden"},children:[l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"scanline"}),l.jsxs("div",{className:"hero-inner",children:[l.jsxs("div",{className:"hero-left",children:[l.jsxs("div",{className:"hero-status anim-fade-up-0",style:{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--green)",border:"1px solid rgba(0,255,136,0.25)",padding:"6px 14px",marginBottom:"36px",background:"var(--green-dim)"},children:[l.jsx("div",{className:"status-dot"}),"Open to full-time, Remote, & internship roles"]}),l.jsxs("h1",{className:"hero-name anim-fade-up-1",style:{fontFamily:"var(--font-display)",fontSize:"clamp(4.5rem, 11vw, 11rem)",lineHeight:.88,letterSpacing:"0.02em",color:"var(--text)",marginBottom:"8px"},children:[l.jsx("span",{className:"first",style:{display:"block"},children:"Abid"}),l.jsx("span",{className:"last",children:"Karim"})]}),l.jsx("div",{className:"hero-title anim-fade-up-2",style:{fontFamily:"var(--font-mono)",fontSize:"clamp(0.6rem, 1.5vw, 0.75rem)",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"32px",display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"},children:"AI Backend Engineer · Full Stack · CS @ LUMS"}),l.jsx("p",{className:"hero-bio anim-fade-up-3",style:{fontSize:"clamp(0.9rem, 1.5vw, 1rem)",color:"var(--text2)",lineHeight:1.9,maxWidth:"520px",marginBottom:"44px",fontWeight:300},children:"Computer Science graduate from LUMS specialising in AI backend systems — LLM pipelines, RAG architectures, and production API infrastructure. I design intelligent systems that are fast, reliable, and built to scale. Full-stack capable across the Python, Node.js & React.js with TypeScript ecosystem when the product demands it."}),l.jsxs("div",{className:"hero-actions anim-fade-up-4",children:[l.jsx(en,{to:"/contact",className:"btn btn-primary",children:"Let's Connect →"}),l.jsx(en,{to:"/projects",className:"btn btn-ghost",children:"View Projects"}),l.jsx("a",{href:"/resume.pdf",download:!0,className:"btn btn-ghost",children:"↓ Resume"})]})]}),l.jsx(_m,{})]}),l.jsx(Tm,{})]}),l.jsx(Im,{})]})}const Dm=({company:o,date:c,type:u,role:f,description:p,bullets:h,tags:y,index:N})=>{const S=j.useRef(null);return j.useEffect(()=>{const C=new IntersectionObserver(b=>{b.forEach(E=>{E.isIntersecting&&(setTimeout(()=>{E.target.classList.add("opacity-100","translate-y-0"),E.target.classList.remove("opacity-0","translate-y-8")},N*120),C.unobserve(E.target))})},{threshold:.1});return S.current&&C.observe(S.current),()=>C.disconnect()},[N]),l.jsxs("div",{ref:S,className:"timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out",style:{display:"grid",gridTemplateColumns:"280px 1fr",marginBottom:"2px"},children:[l.jsxs("div",{className:"timeline-left",children:[l.jsx("div",{className:"timeline-dot"}),l.jsx("h2",{className:"timeline-company",children:o}),l.jsx("div",{className:"timeline-date",children:c}),l.jsx("span",{className:"timeline-type",children:u})]}),l.jsxs("div",{className:"timeline-right",children:[l.jsx("div",{className:"card-accent"}),l.jsx("div",{className:"timeline-role",children:f}),p&&l.jsx("p",{className:"timeline-description",children:p}),h&&l.jsx("ul",{className:"timeline-bullets",children:h.map((C,b)=>l.jsxs("li",{className:"timeline-bullet-item",children:[l.jsx("span",{className:"bullet-arrow",children:"▸"}),l.jsx("span",{dangerouslySetInnerHTML:{__html:C}})]},b))}),l.jsx("div",{className:"timeline-tags",children:y.map((C,b)=>l.jsx("span",{className:"tag-pill",children:C},b))})]})]})},Om=()=>{const o=[{company:"10Pearls",date:"2025",type:"Internship",role:"Software Engineering Intern",description:"Worked as part of a professional product engineering team at a leading digital transformation company. Contributed to building a full-stack web application using the MERN stack with TypeScript, under the guidance of a technical mentor. Gained hands-on experience across the full Software Development Life Cycle (SDLC) in a real Agile environment, including sprint planning, code reviews, and production deployments.",tags:["MERN Stack","TypeScript","Agile","Code Review","SDLC","Production"]},{company:"Wetual PVT",date:"2025",type:"Internship",role:"Financial Data Analyst",description:"Worked at an early-stage startup focused on financial data analysis and investment operations. Analyzed financial datasets using Python and SQL to extract actionable insights, supported the drafting of SAFE agreements for fundraising rounds, and conducted outreach to over 50 startups achieving a 95% positive response rate. Gained exposure to startup finance operations and data-driven decision making.",tags:["Python","SQL","Excel","Financial Analysis","SAFE Agreements","Startup Outreach"]},{company:"LUMS Senior Year Project",date:"Full Year · 2025–2026",type:"Team Lead",role:"Software Engineer — CI/CD & AI Backend",bullets:["Led a team of 5 developers in building an AI-powered maternal motherhood application designed to help mothers care for their children more efficiently through intelligent, data-driven features.",'Owned the <strong style="color: #e8edf2; font-weight: 500;">CI/CD pipeline</strong> — designed and configured automated build, test, and deployment workflows to enforce quality gates and streamline releases.','Designed and implemented a <strong style="color: #e8edf2; font-weight: 500;">multi-tenant RAG system</strong> powering intelligent, context-aware features for the Motherhood app.','Engineered a <strong style="color: #e8edf2; font-weight: 500;">database AI agent</strong> enabling natural-language querying over relational data, integrating LLM outputs with structured databases using FastAPI. Leveraged Llama.cpp to run a local Qwen model for low-latency, privacy-preserving inference.'],tags:["Team Leadership","CI/CD","RAG","LLM","Multi-tenant","FastAPI","Llama.cpp","Qwen"]},{company:"LUMS Directed Research",date:"Research Assistantship",type:"Research",role:"Backend Engineer Assistant",description:"Contributed to a faculty-supervised research project focused on identifying common security risks in modern applications—such as XSS attacks, CSRF vulnerabilities, and insecure authentication flows—and exploring mitigation strategies. Assisted in designing and developing backend systems using FastAPI to prototype and test research findings, including implementing authentication mechanisms, building RESTful APIs, and structuring the data layer while applying strong system design principles.",tags:["FastAPI","Authentication","REST APIs","System Design","Backend","Security"]}];return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@300;400;500;700&display=swap');

        *, *::before, *::after { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }

        :root {
          --bg:        #080c0f;
          --bg2:       #0d1117;
          --bg3:       #0a0e12;
          --surface:   #0f1419;
          --surface2:  #141b22;
          --border:    rgba(255,255,255,0.06);
          --border2:   rgba(255,255,255,0.10);
          --text:      #e8edf2;
          --text2:     #7a8694;
          --muted:     #445060;
          --cyan:      #00d4ff;
          --cyan-dim:  rgba(0,212,255,0.06);
          --green:     #00ff88;
          --green-dim: rgba(0,255,136,0.06);
          --font-display: 'DM Serif Display', serif;
          --font-mono:    'JetBrains Mono', monospace;
          --font-body:    'Syne', sans-serif;
        }

        html { 
          scroll-behavior: smooth; 
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .experience-page {
          position: relative;
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          overflow: hidden;
          font-family: var(--font-body);
        }

        /* Grid background */
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* Orbs */
        .orb { 
          position: fixed; 
          border-radius: 50%; 
          filter: blur(120px); 
          pointer-events: none; 
          z-index: 0; 
        }
        
        .orb-1 {
          width: 500px; 
          height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
          top: -100px; 
          right: -50px;
          animation: float1 10s ease-in-out infinite;
        }
        
        .orb-2 {
          width: 350px; 
          height: 350px;
          background: radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%);
          bottom: 200px; 
          left: -80px;
          animation: float2 12s ease-in-out infinite;
        }
        
        .orb-3 {
          width: 400px; 
          height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%);
          top: 60%; 
          right: -100px;
          animation: float3 9s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-20px, 30px) scale(1.05); }
          66%     { transform: translate(10px, -20px) scale(0.95); }
        }

        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(30px, -25px); }
        }

        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(-25px, 20px); }
        }

        /* Scan line */
        .scanline {
          position: fixed; 
          left: 0; 
          right: 0; 
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes scanline {
          0%   { top: -2px; }
          100% { top: 100%; }
        }

        /* Side label */
        .side-label {
          position: fixed;
          left: 20px; 
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
        }

        /* Page counter */
        .page-counter {
          position: fixed;
          right: 20px; 
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
          writing-mode: vertical-rl;
        }

        /* Timeline styles */
        .timeline-item {
          display: grid;
          grid-template-columns: 280px 1fr;
          margin-bottom: 2px;
        }

        .timeline-left {
          position: relative;
          padding: 48px 32px 48px 48px;
          border-bottom: 1px solid var(--border);
          border-right: 1px solid var(--border);
          background: var(--surface);
        }

        .timeline-dot {
          position: absolute;
          right: -5px;
          top: 56px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--cyan);
          z-index: 2;
          animation: pulse-dot 3s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 8px rgba(0,212,255,0.4); }
          50%    { box-shadow: 0 0 20px rgba(0,212,255,0.7); }
        }

        .timeline-company {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          letter-spacing: 0.04em;
          color: var(--text);
          line-height: 1.2;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .timeline-date {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .timeline-type {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 1px solid rgba(0,255,136,0.3);
          color: var(--green);
          background: var(--green-dim);
        }

        .timeline-right {
          position: relative;
          padding: 48px;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-left: none;
          overflow: hidden;
          transition: background 0.3s ease;
        }

        .timeline-right:hover {
          background: var(--surface2);
        }

        .card-accent {
          position: absolute;
          top: 0; 
          left: 0; 
          right: 0;
          height: 1px;
          background: transparent;
          transition: background 0.3s ease;
          z-index: 1;
        }

        .timeline-right:hover .card-accent {
          background: linear-gradient(90deg, var(--cyan), transparent);
        }

        .timeline-role {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .timeline-description {
          font-size: clamp(0.85rem, 1.2vw, 0.93rem);
          color: var(--text2);
          line-height: 1.8;
          margin-bottom: 24px;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        .timeline-bullets {
          list-style: none;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .timeline-bullet-item {
          font-size: clamp(0.82rem, 1.1vw, 0.87rem);
          color: var(--text2);
          line-height: 1.8;
          padding-left: 20px;
          position: relative;
          margin-bottom: 12px;
          font-weight: 300;
        }

        .bullet-arrow {
          position: absolute;
          left: 0;
          color: var(--cyan);
          font-size: 0.75rem;
          top: 4px;
        }

        .timeline-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          position: relative;
          z-index: 1;
        }

        .tag-pill {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 1px solid var(--border2);
          color: var(--text2);
          transition: all 0.2s;
          cursor: default;
          white-space: nowrap;
        }

        .tag-pill:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--cyan-dim);
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .anim-fade-up-0 { animation: fadeUp 0.7s 0.0s ease both; }
        .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .anim-fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, var(--cyan), #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Hero section */
        .hero-section {
          padding-top: clamp(100px, 15vh, 140px);
          padding-left: clamp(20px, 5vw, 60px);
          padding-right: clamp(20px, 5vw, 60px);
          padding-bottom: clamp(40px, 8vh, 72px);
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 40px;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 10;
        }

        .timeline-section {
          position: relative;
          padding: clamp(40px, 8vh, 80px) clamp(20px, 5vw, 60px);
          max-width: 1400px;
          margin: 0 auto;
          z-index: 10;
        }

        /* Vertical timeline line */
        .timeline-line {
          position: absolute;
          left: 48px;
          top: 80px;
          bottom: 80px;
          width: 1px;
          background: linear-gradient(180deg, var(--cyan) 0%, var(--border) 100%);
          z-index: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .side-label { display: none; }
          .page-counter { right: 12px; font-size: 0.45rem; }
          
          .timeline-item {
            grid-template-columns: 1fr !important;
          }
          
          .timeline-left {
            border-right: none !important;
            padding: 32px 24px !important;
          }
          
          .timeline-right {
            border-left: 1px solid var(--border) !important;
            padding: 32px 24px !important;
          }
          
          .timeline-dot { display: none; }
          .timeline-line { display: none; }
        }

        @media (max-width: 768px) {
          .page-counter { display: none; }
          .hero-section {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .tag-pill {
            font-size: 0.5rem !important;
            padding: 3px 8px !important;
          }
        }
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"orb orb-3"}),l.jsx("div",{className:"scanline"}),l.jsx(vn,{}),l.jsx("div",{className:"side-label",children:"Experience · Timeline"}),l.jsx("div",{className:"page-counter",children:"01 / 05"}),l.jsxs("div",{className:"hero-section",children:[l.jsxs("div",{children:[l.jsx("div",{className:"anim-fade-up-0",style:{fontFamily:"var(--font-mono)",fontSize:"0.65rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"16px"},children:"Professional & Research"}),l.jsxs("h1",{className:"anim-fade-up-1",style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 6vw, 5rem)",letterSpacing:"0.02em",color:"var(--text)",lineHeight:1,fontWeight:400},children:["Work",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Experience"})]})]}),l.jsxs("div",{className:"anim-fade-up-2",style:{fontFamily:"var(--font-mono)",fontSize:"0.58rem",letterSpacing:"0.16em",color:"var(--text2)",textAlign:"right",lineHeight:2},children:[l.jsx("div",{children:"Internships"}),l.jsx("div",{children:"Research Roles"}),l.jsx("div",{children:"Project Leadership"})]})]}),l.jsxs("div",{className:"timeline-section",children:[l.jsx("div",{className:"timeline-line"}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:o.map((c,u)=>l.jsx(Dm,{...c,index:u},u))})]})]})},Fm=()=>{const o=j.useRef(null);return j.useEffect(()=>(o.current=new IntersectionObserver(c=>{c.forEach((u,f)=>{u.isIntersecting&&(setTimeout(()=>{u.target.classList.add("opacity-100","translate-y-0"),u.target.classList.remove("opacity-0","translate-y-8")},f*100),o.current?.unobserve(u.target))})},{threshold:.05}),document.querySelectorAll(".reveal").forEach(c=>{o.current?.observe(c)}),()=>o.current?.disconnect()),[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@300;400;500;700&display=swap');

        *, *::before, *::after { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }

        :root {
          --bg:        #080c0f;
          --bg2:       #0d1117;
          --bg3:       #0a0e12;
          --surface:   #0f1419;
          --surface2:  #141b22;
          --border:    rgba(255,255,255,0.06);
          --border2:   rgba(255,255,255,0.10);
          --text:      #e8edf2;
          --text2:     #7a8694;
          --muted:     #445060;
          --cyan:      #00d4ff;
          --cyan-dim:  rgba(0,212,255,0.06);
          --green:     #00ff88;
          --green-dim: rgba(0,255,136,0.06);
          --font-display: 'DM Serif Display', serif;
          --font-mono:    'JetBrains Mono', monospace;
          --font-body:    'Syne', sans-serif;
        }

        html { 
          scroll-behavior: smooth; 
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Grid background */
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* Orbs */
        .orb { 
          position: fixed; 
          border-radius: 50%; 
          filter: blur(120px); 
          pointer-events: none; 
          z-index: 0; 
        }
        
        .orb-1 {
          width: 500px; 
          height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
          top: -100px; 
          right: -50px;
          animation: float1 10s ease-in-out infinite;
        }
        
        .orb-2 {
          width: 350px; 
          height: 350px;
          background: radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%);
          bottom: 200px; 
          left: -80px;
          animation: float2 12s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-20px, 30px) scale(1.05); }
          66%     { transform: translate(10px, -20px) scale(0.95); }
        }

        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(30px, -25px); }
        }

        /* Scan line */
        .scanline {
          position: fixed; 
          left: 0; 
          right: 0; 
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes scanline {
          0%   { top: -2px; }
          100% { top: 100%; }
        }

        /* Side label */
        .side-label {
          position: fixed;
          left: 20px; 
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
        }

        /* Page counter */
        .page-counter {
          position: fixed;
          right: 20px; 
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
          writing-mode: vertical-rl;
        }

        /* Page hero */
        .page-hero {
          padding: clamp(100px, 15vh, 140px) clamp(20px, 5vw, 60px) clamp(40px, 8vh, 72px);
          max-width: 1400px;
          margin: 0 auto;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 10;
        }

        .sec-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 16px;
        }

        .sec-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5rem);
          color: var(--text);
          font-weight: 400;
          line-height: 1;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--cyan), #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Impact bar */
        .impact-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          margin: 60px clamp(20px, 5vw, 60px) 0;
          max-width: calc(1400px - clamp(40px, 10vw, 120px));
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 10;
        }

        .impact-cell {
          background: var(--surface);
          padding: 32px 40px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: background 0.3s;
        }

        .impact-cell:hover { 
          background: var(--surface2); 
        }

        .impact-num {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          letter-spacing: 0.02em;
          color: var(--cyan);
          line-height: 1;
          flex-shrink: 0;
        }

        .impact-label {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .impact-desc {
          font-size: 0.85rem;
          color: var(--text2);
          font-weight: 300;
        }

        /* TA section */
        .ta-section {
          padding: 80px clamp(20px, 5vw, 60px);
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .ta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        .ta-card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 48px 36px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
          cursor: default;
        }

        .ta-card::after {
          content: '';
          position: absolute;
          bottom: 0; 
          left: 0; 
          right: 0;
          height: 2px;
          background: var(--cyan);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .ta-card:hover {
          background: var(--surface2);
          transform: translateY(-4px);
        }

        .ta-card:hover::after { 
          transform: scaleX(1); 
        }

        /* Course code as massive bg number */
        .ta-bg-code {
          position: absolute;
          bottom: -20px;
          right: -10px;
          font-family: var(--font-display);
          font-size: 7rem;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.025);
          line-height: 1;
          pointer-events: none;
          transition: color 0.3s;
        }

        .ta-card:hover .ta-bg-code { 
          color: rgba(0,212,255,0.05); 
        }

        .ta-code-label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ta-code-label::before {
          content: '';
          width: 18px;
          height: 1px;
          background: var(--cyan);
          display: inline-block;
        }

        .ta-name {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .ta-lang {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          color: var(--green);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .ta-desc {
          font-size: 0.85rem;
          color: var(--text2);
          line-height: 1.8;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        /* Responsibilities list */
        .ta-responsibilities {
          margin-top: 60px;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 48px;
          position: relative;
        }

        .ta-responsibilities::before {
          content: '';
          position: absolute;
          top: 0; 
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, var(--cyan), transparent);
        }

        .resp-title {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 28px;
        }

        .resp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .resp-icon {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--cyan);
          opacity: 0.3;
          margin-bottom: 10px;
        }

        .resp-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 6px;
        }

        .resp-desc {
          font-size: 0.82rem;
          color: var(--text2);
          line-height: 1.75;
          font-weight: 300;
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-fade-up-0 { animation: fadeUp 0.7s 0.0s ease both; }
        .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }

        /* Reveal class for scroll animations */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.opacity-100 {
          opacity: 1;
        }

        .reveal.translate-y-0 {
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .impact-bar { 
            grid-template-columns: 1fr !important; 
            margin: 40px 20px 0 !important;
          }
          
          .ta-grid { 
            grid-template-columns: 1fr !important; 
          }
          
          .resp-grid { 
            grid-template-columns: 1fr !important; 
          }
          
          .ta-responsibilities { 
            padding: 32px !important; 
          }
          
          .side-label { 
            display: none; 
          }
          
          .page-counter { 
            right: 12px; 
            font-size: 0.45rem; 
          }
        }

        @media (max-width: 768px) {
          .page-counter { 
            display: none; 
          }
          
          .ta-card { 
            padding: 36px 24px !important; 
          }
          
          .ta-bg-code { 
            font-size: 5rem !important; 
          }
        }

        @media (max-width: 480px) {
          .impact-cell {
            padding: 24px !important;
          }
          
          .resp-grid {
            gap: 24px !important;
          }
        }
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"scanline"}),l.jsx(vn,{}),l.jsx("div",{className:"side-label",children:"Teaching · Assistantships"}),l.jsx("div",{className:"page-counter",children:"02 / 05"}),l.jsxs("div",{className:"page-hero",children:[l.jsx("div",{className:"sec-label anim-fade-up-0",children:"Academic · LUMS"}),l.jsxs("h1",{className:"sec-title anim-fade-up-1",children:["Teaching",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Assistantships"})]})]}),l.jsxs("div",{className:"impact-bar reveal",children:[l.jsxs("div",{className:"impact-cell",children:[l.jsx("div",{className:"impact-num",children:"3"}),l.jsxs("div",{children:[l.jsx("div",{className:"impact-label",children:"TA Positions"}),l.jsx("div",{className:"impact-desc",children:"Across core CS courses at LUMS"})]})]}),l.jsxs("div",{className:"impact-cell",children:[l.jsxs("div",{className:"impact-num",children:["550",l.jsx("span",{style:{fontSize:"1.5rem",color:"var(--text2)"},children:"+"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"impact-label",children:"Students Impacted"}),l.jsx("div",{className:"impact-desc",children:"Mentored, graded, guided"})]})]}),l.jsxs("div",{className:"impact-cell",children:[l.jsx("div",{className:"impact-num",children:"4"}),l.jsxs("div",{children:[l.jsx("div",{className:"impact-label",children:"Years at LUMS"}),l.jsx("div",{className:"impact-desc",children:"Graduated CS Class of 2026"})]})]})]}),l.jsxs("div",{className:"ta-section",children:[l.jsxs("div",{className:"ta-grid",children:[l.jsxs("div",{className:"ta-card reveal",children:[l.jsx("div",{className:"ta-bg-code",children:"100"}),l.jsx("div",{className:"ta-code-label",children:"CS-100"}),l.jsx("div",{className:"ta-name",children:"Computational Thinking & Problem Solving"}),l.jsx("div",{className:"ta-lang",children:"C++ · Logic · Algorithms"}),l.jsx("p",{className:"ta-desc",children:"Assisted students in developing algorithmic thinking and structured problem decomposition. Supported lab sessions and provided hands-on guidance through weekly programming assignments."})]}),l.jsxs("div",{className:"ta-card reveal",children:[l.jsx("div",{className:"ta-bg-code",children:"200"}),l.jsx("div",{className:"ta-code-label",children:"CS-200"}),l.jsx("div",{className:"ta-name",children:"Introduction to Programming"}),l.jsx("div",{className:"ta-lang",children:"C / C++ · OOP · Data Structures"}),l.jsx("p",{className:"ta-desc",children:"Supported students learning C and C++ with a focus on object-oriented programming and core data structures. Ran lab sessions, helped debug code, and graded programming projects."})]}),l.jsxs("div",{className:"ta-card reveal",children:[l.jsx("div",{className:"ta-bg-code",children:"360"}),l.jsx("div",{className:"ta-code-label",children:"CS-360"}),l.jsx("div",{className:"ta-name",children:"Software Engineering"}),l.jsx("div",{className:"ta-lang",children:"Java · Android SDK · Git · GitHub"}),l.jsx("p",{className:"ta-desc",children:"Guided students through SE principles and Android development in Java. Assisted labs as students built Android apps, covering version control, design patterns, and engineering best practices."})]})]}),l.jsxs("div",{className:"ta-responsibilities reveal",children:[l.jsx("div",{className:"resp-title",children:"// what i did as a TA"}),l.jsxs("div",{className:"resp-grid",children:[l.jsxs("div",{children:[l.jsx("div",{className:"resp-icon",children:"01"}),l.jsx("div",{className:"resp-label",children:"Lab Facilitation"}),l.jsx("div",{className:"resp-desc",children:"Led weekly lab sessions, walking students through programming tasks, debugging live code, and reinforcing lecture concepts with hands-on practice."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"resp-icon",children:"02"}),l.jsx("div",{className:"resp-label",children:"Assessment & Grading"}),l.jsx("div",{className:"resp-desc",children:"Graded programming assignments and projects with detailed feedback, maintaining consistency and fairness across large student cohorts."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"resp-icon",children:"03"}),l.jsx("div",{className:"resp-label",children:"Office Hours & Mentorship"}),l.jsx("div",{className:"resp-desc",children:"Held office hours to provide 1-on-1 support, helping students overcome conceptual barriers and debugging challenges in C++, Java, and data structures."})]})]})]})]})]})},Am="/portifolio/assets/nurra-BcyOzcRo.jpeg",Um="/portifolio/assets/lumspire-_aD7fLMu.jpeg",Bm="/portifolio/assets/carawan-C5DqkdLv.jpeg",Wm=()=>{const o=j.useRef(null);return j.useEffect(()=>(o.current=new IntersectionObserver(u=>{u.forEach((f,p)=>{f.isIntersecting&&(setTimeout(()=>{f.target.classList.add("opacity-100","translate-y-0"),f.target.classList.remove("opacity-0","translate-y-8")},p*120),o.current?.unobserve(f.target))})},{threshold:.05}),document.querySelectorAll(".reveal").forEach(u=>{o.current?.observe(u)}),document.querySelectorAll(".proj-block").forEach(u=>{const f=u.querySelector("video, img");f&&(u.addEventListener("mouseenter",()=>{f.style.opacity="1",f.style.transform="scale(1.03)"}),u.addEventListener("mouseleave",()=>{f.style.opacity="0.85",f.style.transform="scale(1)"}))}),()=>o.current?.disconnect()),[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@300;400;500;700&display=swap');

        *, *::before, *::after { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }

        :root {
          --bg:        #080c0f;
          --bg2:       #0d1117;
          --bg3:       #0a0e12;
          --surface:   #0f1419;
          --surface2:  #141b22;
          --border:    rgba(255,255,255,0.06);
          --border2:   rgba(255,255,255,0.10);
          --text:      #e8edf2;
          --text2:     #7a8694;
          --muted:     #445060;
          --cyan:      #00d4ff;
          --cyan-dim:  rgba(0,212,255,0.06);
          --cyan-glow: rgba(0,212,255,0.2);
          --green:     #00ff88;
          --green-dim: rgba(0,255,136,0.06);
          --orange:    #ff6b35;
          --orange-dim: rgba(255,107,53,0.06);
          --font-display: 'DM Serif Display', serif;
          --font-mono:    'JetBrains Mono', monospace;
          --font-body:    'Syne', sans-serif;
        }

        html { 
          scroll-behavior: smooth; 
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Grid background */
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* Orbs */
        .orb { 
          position: fixed; 
          border-radius: 50%; 
          filter: blur(120px); 
          pointer-events: none; 
          z-index: 0; 
        }
        
        .orb-1 {
          width: 500px; 
          height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
          top: -100px; 
          right: -50px;
          animation: float1 10s ease-in-out infinite;
        }
        
        .orb-2 {
          width: 350px; 
          height: 350px;
          background: radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%);
          bottom: 200px; 
          left: -80px;
          animation: float2 12s ease-in-out infinite;
        }

        .orb-3 {
          width: 400px; 
          height: 400px;
          background: radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%);
          top: 40%; 
          right: -100px;
          animation: float3 9s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-20px, 30px) scale(1.05); }
          66%     { transform: translate(10px, -20px) scale(0.95); }
        }

        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(30px, -25px); }
        }

        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(-25px, 20px); }
        }

        /* Scan line */
        .scanline {
          position: fixed; 
          left: 0; 
          right: 0; 
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes scanline {
          0%   { top: -2px; }
          100% { top: 100%; }
        }

        /* Side label */
        .side-label {
          position: fixed;
          left: 20px; 
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
        }

        /* Page counter */
        .page-counter {
          position: fixed;
          right: 20px; 
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
          writing-mode: vertical-rl;
        }

        /* Page hero */
        .page-hero {
          padding: clamp(100px, 15vh, 140px) clamp(20px, 5vw, 60px) clamp(40px, 8vh, 72px);
          max-width: 1400px;
          margin: 0 auto;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          gap: 40px;
          position: relative;
          z-index: 10;
        }

        .page-hero-right {
          font-size: 0.9rem;
          color: var(--text2);
          line-height: 1.9;
          font-weight: 300;
          max-width: 380px;
          margin-left: auto;
        }

        .sec-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 16px;
        }

        .sec-title {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 6vw, 5rem);
          color: var(--text);
          font-weight: 400;
          line-height: 1.05;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--cyan), #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Projects */
        .projects-wrap {
          padding: 80px clamp(20px, 5vw, 60px);
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
          position: relative;
          z-index: 10;
        }

        .proj-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--surface);
          border: 1px solid var(--border);
          min-height: 480px;
          transition: border-color 0.3s;
          overflow: hidden;
        }

        .proj-block:hover { 
          border-color: var(--border2); 
        }

        .proj-block.flip { 
          direction: rtl; 
        }

        .proj-block.flip > * { 
          direction: ltr; 
        }

        /* Media side */
        .proj-media {
          position: relative;
          background: var(--bg3);
          overflow: hidden;
        }

        /* 
          Nurra is a mobile screenshot — cover + center looks great.
          Lumspire & Carawan are desktop/wide screenshots — use contain
          so the entire UI is visible with no cropping.
        */
        .proj-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          opacity: 0.85;
          transition: opacity 0.4s, transform 0.6s;
        }

        /* Desktop screenshots: contain so full image shows, no cropping */
        .proj-media.desktop-screenshot {
          background: #080c0f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .proj-media.desktop-screenshot img {
          object-fit: contain;
          object-position: center center;
          width: 100%;
          height: 100%;
          padding: 12px;
        }

        /* Overlay on media */
        .proj-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,212,255,0.06), transparent);
          pointer-events: none;
        }

        .proj-num-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          font-family: var(--font-display);
          font-size: 6rem;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.06);
          line-height: 1;
          pointer-events: none;
        }

        /* Content side */
        .proj-content {
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .proj-num {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .proj-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 3.5vw, 3.5rem);
          letter-spacing: 0.04em;
          color: var(--text);
          line-height: 0.95;
          margin-bottom: 8px;
        }

        .proj-tagline {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          color: var(--orange);
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .proj-desc {
          font-size: 0.9rem;
          color: var(--text2);
          line-height: 1.85;
          margin-bottom: 22px;
          font-weight: 300;
        }

        .proj-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .proj-highlights li {
          font-size: 0.84rem;
          color: var(--text2);
          line-height: 1.7;
          padding-left: 18px;
          position: relative;
          font-weight: 300;
        }

        .proj-highlights li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--cyan);
          font-size: 0.7rem;
        }

        .proj-highlights strong { 
          color: var(--text); 
          font-weight: 500; 
        }

        .proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 24px;
        }

        .proj-tech-tag {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 1px solid var(--border2);
          color: var(--text2);
          transition: all 0.2s;
          cursor: default;
        }

        .proj-tech-tag:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--cyan-dim);
        }

        .proj-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .proj-link {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cyan);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid rgba(0,212,255,0.3);
          transition: all 0.25s;
        }

        .proj-link:hover {
          background: var(--cyan-dim);
          box-shadow: 0 0 12px var(--cyan-glow);
        }

        .proj-link.secondary {
          border-color: var(--border2);
          color: var(--muted);
        }

        .proj-link.secondary:hover {
          border-color: var(--orange);
          color: var(--orange);
          background: var(--orange-dim);
          box-shadow: none;
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-fade-up-0 { animation: fadeUp 0.7s 0.0s ease both; }
        .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .anim-fade-up-2 { animation: fadeUp 0.7s 0.25s ease both; }

        /* Reveal class for scroll animations */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.opacity-100 {
          opacity: 1;
        }

        .reveal.translate-y-0 {
          transform: translateY(0);
        }

        /* ── Responsive ────────────────────────────────────── */

        /* Large tablets / small desktops */
        @media (max-width: 1100px) {
          .proj-content {
            padding: 40px 36px;
          }

          .proj-highlights li {
            font-size: 0.82rem;
          }
        }

        /* Tablets (portrait + landscape) */
        @media (max-width: 900px) {
          .page-hero { 
            grid-template-columns: 1fr;
            padding: 100px 24px 40px;
          }
          
          .page-hero-right {
            max-width: 100%;
            margin-left: 0;
          }
          
          .projects-wrap { 
            padding: 60px 24px;
            gap: 16px;
          }
          
          /* Stack image on top, content below */
          .proj-block { 
            grid-template-columns: 1fr;
            min-height: auto;
          }
          
          /* Remove RTL flip on mobile — always image on top */
          .proj-block.flip { 
            direction: ltr;
          }

          /* On stacked layout, image comes first visually */
          .proj-block.flip .proj-media {
            order: -1;
          }
          
          .proj-media { 
            min-height: 260px;
          }

          .proj-content { 
            padding: 32px 28px;
          }

          .proj-title {
            font-size: clamp(2rem, 6vw, 2.8rem);
          }
          
          .side-label { 
            display: none; 
          }
          
          .page-counter { 
            right: 12px; 
            font-size: 0.45rem; 
          }

          .proj-num-overlay {
            font-size: 5rem;
          }
        }

        /* Phones (landscape) */
        @media (max-width: 768px) {
          .page-counter { 
            display: none; 
          }

          .proj-media {
            min-height: 220px;
          }

          .proj-content {
            padding: 28px 20px;
          }

          .sec-title {
            font-size: clamp(2.2rem, 8vw, 3rem);
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .page-hero {
            padding: 90px 16px 32px;
          }

          .projects-wrap {
            padding: 40px 16px;
          }

          .proj-num-overlay {
            font-size: 3.5rem;
          }
          
          .proj-links {
            flex-direction: column;
          }
          
          .proj-link {
            justify-content: center;
            text-align: center;
          }

          .proj-content {
            padding: 24px 16px;
          }

          .proj-media {
            min-height: 200px;
          }

          .proj-tech {
            gap: 4px;
          }

          .proj-tech-tag {
            font-size: 0.52rem;
            padding: 3px 8px;
          }

          .proj-highlights li {
            font-size: 0.8rem;
          }

          .proj-desc {
            font-size: 0.85rem;
          }
        }

        /* Very small phones */
        @media (max-width: 360px) {
          .sec-title {
            font-size: 2rem;
          }

          .proj-title {
            font-size: 1.8rem;
          }

          .proj-media {
            min-height: 180px;
          }
        }
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"orb orb-3"}),l.jsx("div",{className:"scanline"}),l.jsx(vn,{}),l.jsx("div",{className:"side-label",children:"Projects · Portfolio"}),l.jsx("div",{className:"page-counter",children:"03 / 05"}),l.jsxs("div",{className:"page-hero",children:[l.jsxs("div",{children:[l.jsx("div",{className:"sec-label anim-fade-up-0",children:"Built from scratch"}),l.jsxs("h1",{className:"sec-title anim-fade-up-1",children:["Personal & Academic",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Projects"})]})]}),l.jsx("p",{className:"page-hero-right anim-fade-up-2",children:"Full-stack applications engineered end-to-end — from architecture decisions to production deployments. Real problems, real users, real constraints."})]}),l.jsxs("div",{className:"projects-wrap",children:[l.jsxs("div",{className:"proj-block reveal",children:[l.jsxs("div",{className:"proj-media desktop-screenshot",children:[l.jsx("img",{src:Am,alt:"Nurra Motherhood App"}),l.jsx("div",{className:"proj-media-overlay"}),l.jsx("div",{className:"proj-num-overlay",children:"01"})]}),l.jsxs("div",{className:"proj-content",children:[l.jsx("div",{className:"proj-num",children:"Senior Year Capstone · 01"}),l.jsx("h2",{className:"proj-title",children:"Nurra"}),l.jsx("div",{className:"proj-tagline",children:"Motherhood App · AI-Powered · Team Lead"}),l.jsx("p",{className:"proj-desc",children:"Led a team of 5 developers to build a comprehensive motherhood application supporting mothers through child care with intelligent, data-driven features. Integrated cutting-edge AI capabilities for a truly assistive experience."}),l.jsxs("ul",{className:"proj-highlights",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Vaccination tracking"})," with reminders for upcoming doses"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Secure record-keeping"})," for child health data & growth tracking"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Community forum"})," for mothers to connect and share experiences"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Library of tutorials"})," and learning resources"]}),l.jsxs("li",{children:["Integrated ",l.jsx("strong",{children:"multi-tenant RAG system"})," & SQL agent AI assistant for child growth, vaccinations, and parenting queries"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Local AI inference"})," using LLaMA.cpp with Qwen2.5:4B model; Gemini for production"]})]}),l.jsxs("div",{className:"proj-tech",children:[l.jsx("span",{className:"proj-tech-tag",children:"React"}),l.jsx("span",{className:"proj-tech-tag",children:"TypeScript"}),l.jsx("span",{className:"proj-tech-tag",children:"Tailwind CSS"}),l.jsx("span",{className:"proj-tech-tag",children:"FastAPI"}),l.jsx("span",{className:"proj-tech-tag",children:"PostgreSQL"}),l.jsx("span",{className:"proj-tech-tag",children:"MongoDB"}),l.jsx("span",{className:"proj-tech-tag",children:"LLaMA.cpp"}),l.jsx("span",{className:"proj-tech-tag",children:"Qwen2.5"}),l.jsx("span",{className:"proj-tech-tag",children:"Gemini API"}),l.jsx("span",{className:"proj-tech-tag",children:"FAISS"}),l.jsx("span",{className:"proj-tech-tag",children:"ChromaDB"}),l.jsx("span",{className:"proj-tech-tag",children:"RAG"}),l.jsx("span",{className:"proj-tech-tag",children:"Multi-tenant"})]}),l.jsxs("div",{className:"proj-links",children:[l.jsxs("a",{href:"https://github.com/abidkarim74/SeniorYearProject_MotherhoodApp-FastAPI_React",target:"_blank",rel:"noopener noreferrer",className:"proj-link",children:[l.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})}),"GitHub"]}),l.jsx("a",{href:"#",className:"proj-link secondary",children:"Live Demo N/A"})]})]})]}),l.jsxs("div",{className:"proj-block flip reveal",children:[l.jsxs("div",{className:"proj-media desktop-screenshot",children:[l.jsx("img",{src:Bm,alt:"CampusCaravan Screenshot"}),l.jsx("div",{className:"proj-media-overlay"}),l.jsx("div",{className:"proj-num-overlay",children:"02"})]}),l.jsxs("div",{className:"proj-content",children:[l.jsx("div",{className:"proj-num",children:"Software Engineering Course · 02"}),l.jsx("h2",{className:"proj-title",children:"Campus Caravan"}),l.jsx("div",{className:"proj-tagline",children:"Carpooling · 150+ Users · Jan–May 2024"}),l.jsx("p",{className:"proj-desc",children:"Led a team of 5 to design and ship a full-featured carpooling platform for the LUMS community, achieving 150+ sign-ups and reducing commuting costs by an estimated 40%."}),l.jsxs("ul",{className:"proj-highlights",children:[l.jsxs("li",{children:["Built backend with ",l.jsx("strong",{children:"Node.js, TypeScript, PostgreSQL"})," — owned architecture, schema design, and query optimization."]}),l.jsxs("li",{children:["Implemented ",l.jsx("strong",{children:"real-time chat"})," via WebSockets for live driver-rider coordination."]}),l.jsxs("li",{children:["Integrated ",l.jsx("strong",{children:"Gemini API"})," for AI-powered content moderation."]}),l.jsxs("li",{children:["Secured with ",l.jsx("strong",{children:"JWT auth"})," using HTTP-only cookies."]}),l.jsxs("li",{children:["Optimized queries improving search performance by ",l.jsx("strong",{children:"30%"}),"."]})]}),l.jsxs("div",{className:"proj-tech",children:[l.jsx("span",{className:"proj-tech-tag",children:"Node.js"}),l.jsx("span",{className:"proj-tech-tag",children:"TypeScript"}),l.jsx("span",{className:"proj-tech-tag",children:"Express"}),l.jsx("span",{className:"proj-tech-tag",children:"React"}),l.jsx("span",{className:"proj-tech-tag",children:"PostgreSQL"}),l.jsx("span",{className:"proj-tech-tag",children:"WebSockets"}),l.jsx("span",{className:"proj-tech-tag",children:"Gemini API"}),l.jsx("span",{className:"proj-tech-tag",children:"JWT"})]}),l.jsx("div",{className:"proj-links",children:l.jsxs("a",{href:"https://github.com/abidkarim74/Software-Engineering-CS-360-PERN-Stack",target:"_blank",rel:"noopener noreferrer",className:"proj-link",children:[l.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})}),"GitHub"]})})]})]}),l.jsxs("div",{className:"proj-block reveal",children:[l.jsxs("div",{className:"proj-media desktop-screenshot",children:[l.jsx("img",{src:Um,alt:"Lumspire Fashion Platform"}),l.jsx("div",{className:"proj-media-overlay"}),l.jsx("div",{className:"proj-num-overlay",children:"03"})]}),l.jsxs("div",{className:"proj-content",children:[l.jsx("div",{className:"proj-num",children:"Personal Project · 03"}),l.jsx("h2",{className:"proj-title",children:"Lumspire"}),l.jsx("div",{className:"proj-tagline",children:"MERN Stack · Real-time · Visual-first"}),l.jsx("p",{className:"proj-desc",children:"A real-time fashion and visual discovery platform where users can explore, share, and organize fashion content through an intuitive, interactive interface. Focused on fluid UX, real-time updates, and visual-first content organization."}),l.jsxs("div",{className:"proj-tech",children:[l.jsx("span",{className:"proj-tech-tag",children:"MongoDB"}),l.jsx("span",{className:"proj-tech-tag",children:"Express"}),l.jsx("span",{className:"proj-tech-tag",children:"React"}),l.jsx("span",{className:"proj-tech-tag",children:"Node.js"}),l.jsx("span",{className:"proj-tech-tag",children:"REST API"}),l.jsx("span",{className:"proj-tech-tag",children:"Real-time"})]}),l.jsxs("div",{className:"proj-links",children:[l.jsxs("a",{href:"https://github.com/abidkarim74/Visual-Discovery-Fashion-Web-App---MERN-Stack-",target:"_blank",rel:"noopener noreferrer",className:"proj-link",children:[l.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})}),"GitHub"]}),l.jsx("a",{href:"#",className:"proj-link secondary",children:"Live Demo N/A"})]})]})]})]})]})},$m=()=>{const o=j.useRef(null),c=j.useRef(null);return j.useEffect(()=>{o.current=new IntersectionObserver(f=>{f.forEach((p,h)=>{p.isIntersecting&&(setTimeout(()=>{p.target.classList.add("opacity-100","translate-y-0"),p.target.classList.remove("opacity-0","translate-y-8")},h*100),o.current?.unobserve(p.target))})},{threshold:.05}),document.querySelectorAll(".reveal").forEach(f=>{o.current?.observe(f)});const u=new IntersectionObserver(f=>{f[0].isIntersecting&&(document.querySelectorAll(".prof-item").forEach((h,y)=>{const N=h,S=N.dataset.pct;setTimeout(()=>{const C=N.querySelector(".prof-fill");C&&(C.style.width=S+"%")},y*80+300)}),u.unobserve(f[0].target))},{threshold:.2});return c.current&&u.observe(c.current),()=>{o.current?.disconnect(),u.disconnect()}},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@300;400;500;700&display=swap');

        *, *::before, *::after { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }

        :root {
          --bg:        #080c0f;
          --bg2:       #0d1117;
          --bg3:       #0a0e12;
          --surface:   #0f1419;
          --surface2:  #141b22;
          --border:    rgba(255,255,255,0.06);
          --border2:   rgba(255,255,255,0.10);
          --text:      #e8edf2;
          --text2:     #7a8694;
          --muted:     #445060;
          --cyan:      #00d4ff;
          --cyan-dim:  rgba(0,212,255,0.06);
          --green:     #00ff88;
          --green-dim: rgba(0,255,136,0.06);
          --font-display: 'DM Serif Display', serif;
          --font-mono:    'JetBrains Mono', monospace;
          --font-body:    'Syne', sans-serif;
        }

        html { 
          scroll-behavior: smooth; 
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Grid background */
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* Orbs */
        .orb { 
          position: fixed; 
          border-radius: 50%; 
          filter: blur(120px); 
          pointer-events: none; 
          z-index: 0; 
        }
        
        .orb-1 {
          width: 500px; 
          height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
          top: -100px; 
          right: -50px;
          animation: float1 10s ease-in-out infinite;
        }
        
        .orb-2 {
          width: 350px; 
          height: 350px;
          background: radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%);
          bottom: 200px; 
          left: -80px;
          animation: float2 12s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-20px, 30px) scale(1.05); }
          66%     { transform: translate(10px, -20px) scale(0.95); }
        }

        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(30px, -25px); }
        }

        /* Scan line */
        .scanline {
          position: fixed; 
          left: 0; 
          right: 0; 
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes scanline {
          0%   { top: -2px; }
          100% { top: 100%; }
        }

        /* Side label */
        .side-label {
          position: fixed;
          left: 20px; 
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
        }

        /* Page counter */
        .page-counter {
          position: fixed;
          right: 20px; 
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
          writing-mode: vertical-rl;
        }

        /* Page hero */
        .page-hero {
          padding: clamp(100px, 15vh, 140px) clamp(20px, 5vw, 60px) clamp(40px, 8vh, 72px);
          max-width: 1400px;
          margin: 0 auto;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 10;
        }

        .sec-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 16px;
        }

        .sec-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5rem);
          color: var(--text);
          font-weight: 400;
          line-height: 1;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--cyan), #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Skills wrap */
        .skills-wrap {
          padding: 80px clamp(20px, 5vw, 60px);
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Category blocks */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          margin-bottom: 2px;
        }

        .skill-cat {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 44px 40px;
          transition: background 0.3s;
          position: relative;
          overflow: hidden;
        }

        .skill-cat::before {
          content: '';
          position: absolute;
          top: 0; 
          left: 0;
          width: 2px;
          height: 0;
          background: var(--cyan);
          transition: height 0.4s ease;
        }

        .skill-cat:hover { 
          background: var(--surface2); 
        }

        .skill-cat:hover::before { 
          height: 100%; 
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .cat-icon {
          width: 36px; 
          height: 36px;
          background: var(--cyan-dim);
          border: 1px solid rgba(0,212,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          flex-shrink: 0;
        }

        .cat-name {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text2);
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .skill-chip {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          padding: 7px 14px;
          background: var(--bg3);
          border: 1px solid var(--border);
          color: var(--text2);
          transition: all 0.2s;
          cursor: default;
        }

        .skill-chip:hover {
          background: var(--cyan-dim);
          border-color: rgba(0,212,255,0.4);
          color: var(--cyan);
          transform: translateY(-1px);
        }

        /* Proficiency bar section */
        .proficiency-section {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 48px;
          position: relative;
        }

        .proficiency-section::before {
          content: '';
          position: absolute;
          top: 0; 
          left: 0; 
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--cyan), transparent);
        }

        .prof-title {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 36px;
        }

        .prof-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 60px;
        }

        .prof-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }

        .prof-label {
          font-size: 0.85rem;
          color: var(--text);
          font-weight: 400;
        }

        .prof-pct {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          color: var(--muted);
        }

        .prof-bar {
          height: 2px;
          background: var(--border2);
          position: relative;
          overflow: hidden;
        }

        .prof-fill {
          position: absolute;
          left: 0; 
          top: 0; 
          bottom: 0;
          background: linear-gradient(90deg, var(--cyan), var(--green));
          width: 0;
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-fade-up-0 { animation: fadeUp 0.7s 0.0s ease both; }
        .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }

        /* Reveal class for scroll animations */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.opacity-100 {
          opacity: 1;
        }

        .reveal.translate-y-0 {
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .page-hero { 
            padding: 100px 20px 40px !important; 
          }
          
          .skills-wrap { 
            padding: 60px 20px !important; 
          }
          
          .skills-grid { 
            grid-template-columns: 1fr !important; 
          }
          
          .prof-grid { 
            grid-template-columns: 1fr !important; 
            gap: 20px !important; 
          }
          
          .proficiency-section { 
            padding: 32px !important; 
          }
          
          .side-label { 
            display: none; 
          }
          
          .page-counter { 
            right: 12px; 
            font-size: 0.45rem; 
          }
          
          .skill-cat {
            padding: 32px 24px !important;
          }
        }

        @media (max-width: 768px) {
          .page-counter { 
            display: none; 
          }
        }

        @media (max-width: 480px) {
          .cat-icon {
            width: 28px !important;
            height: 28px !important;
          }
          
          .skill-chip {
            font-size: 0.58rem !important;
            padding: 5px 10px !important;
          }
        }
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"scanline"}),l.jsx(vn,{}),l.jsx("div",{className:"side-label",children:"Skills · Expertise"}),l.jsx("div",{className:"page-counter",children:"04 / 05"}),l.jsxs("div",{className:"page-hero",children:[l.jsx("div",{className:"sec-label anim-fade-up-0",children:"Technical Toolkit"}),l.jsxs("h1",{className:"sec-title anim-fade-up-1",children:["Skills &",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Expertise"})]})]}),l.jsxs("div",{className:"skills-wrap",children:[l.jsxs("div",{className:"skills-grid",children:[l.jsxs("div",{className:"skill-cat reveal",children:[l.jsxs("div",{className:"cat-header",children:[l.jsx("div",{className:"cat-icon",children:l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("polyline",{points:"16,18 22,12 16,6"}),l.jsx("polyline",{points:"8,6 2,12 8,18"})]})}),l.jsx("div",{className:"cat-name",children:"Languages"})]}),l.jsxs("div",{className:"skill-items",children:[l.jsx("span",{className:"skill-chip",children:"Java"}),l.jsx("span",{className:"skill-chip",children:"TypeScript"}),l.jsx("span",{className:"skill-chip",children:"JavaScript"}),l.jsx("span",{className:"skill-chip",children:"Python"}),l.jsx("span",{className:"skill-chip",children:"C / C++"}),l.jsx("span",{className:"skill-chip",children:"SQL"}),l.jsx("span",{className:"skill-chip",children:"HTML / CSS"})]})]}),l.jsxs("div",{className:"skill-cat reveal",children:[l.jsxs("div",{className:"cat-header",children:[l.jsx("div",{className:"cat-icon",children:l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),l.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),l.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})}),l.jsx("div",{className:"cat-name",children:"Frameworks & Platforms"})]}),l.jsxs("div",{className:"skill-items",children:[l.jsx("span",{className:"skill-chip",children:"React.js"}),l.jsx("span",{className:"skill-chip",children:"Node.js"}),l.jsx("span",{className:"skill-chip",children:"Express.js"}),l.jsx("span",{className:"skill-chip",children:"FastAPI"}),l.jsx("span",{className:"skill-chip",children:"Django"}),l.jsx("span",{className:"skill-chip",children:"Fastify.js"})]})]}),l.jsxs("div",{className:"skill-cat reveal",children:[l.jsxs("div",{className:"cat-header",children:[l.jsx("div",{className:"cat-icon",children:l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),l.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),l.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]})}),l.jsx("div",{className:"cat-name",children:"Databases & DevOps"})]}),l.jsxs("div",{className:"skill-items",children:[l.jsx("span",{className:"skill-chip",children:"MongoDB"}),l.jsx("span",{className:"skill-chip",children:"PostgreSQL"}),l.jsx("span",{className:"skill-chip",children:"Git / GitHub"}),l.jsx("span",{className:"skill-chip",children:"CI/CD"}),l.jsx("span",{className:"skill-chip",children:"Docker"}),l.jsx("span",{className:"skill-chip",children:"Kubernetes"})]})]}),l.jsxs("div",{className:"skill-cat reveal",children:[l.jsxs("div",{className:"cat-header",children:[l.jsx("div",{className:"cat-icon",children:l.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"})})}),l.jsx("div",{className:"cat-name",children:"AI & Architecture"})]}),l.jsxs("div",{className:"skill-items",children:[l.jsx("span",{className:"skill-chip",children:"RAG Systems"}),l.jsx("span",{className:"skill-chip",children:"LLM Integration"}),l.jsx("span",{className:"skill-chip",children:"Multi-tenant Design"}),l.jsx("span",{className:"skill-chip",children:"Gemini API"}),l.jsx("span",{className:"skill-chip",children:"System Design"}),l.jsx("span",{className:"skill-chip",children:"OOP & Design Patterns"}),l.jsx("span",{className:"skill-chip",children:"Agile / Scrum"})]})]})]}),l.jsxs("div",{className:"proficiency-section reveal",ref:c,children:[l.jsx("div",{className:"prof-title",children:"// proficiency levels"}),l.jsxs("div",{className:"prof-grid",children:[l.jsxs("div",{className:"prof-item","data-pct":"90",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"Python / FastAPI"}),l.jsx("span",{className:"prof-pct",children:"90%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"85",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"Java / C++"}),l.jsx("span",{className:"prof-pct",children:"85%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"85",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"Node.js / Express"}),l.jsx("span",{className:"prof-pct",children:"85%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"80",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"JavaScript / TypeScript"}),l.jsx("span",{className:"prof-pct",children:"80%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"80",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"React.js"}),l.jsx("span",{className:"prof-pct",children:"80%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"75",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"PostgreSQL / MongoDB"}),l.jsx("span",{className:"prof-pct",children:"75%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"70",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"CI/CD & Docker"}),l.jsx("span",{className:"prof-pct",children:"70%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"70",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"AI / RAG Systems"}),l.jsx("span",{className:"prof-pct",children:"70%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]})]})]})]})]})},Hm="/portifolio/assets/resume-DQ0E6Tvi.pdf",Vm=()=>{const o=j.useRef(null);return j.useEffect(()=>(o.current=new IntersectionObserver(c=>{c.forEach((u,f)=>{u.isIntersecting&&(setTimeout(()=>{u.target.classList.add("opacity-100","translate-y-0"),u.target.classList.remove("opacity-0","translate-y-8")},f*100),o.current?.unobserve(u.target))})},{threshold:.05}),document.querySelectorAll(".reveal").forEach(c=>{o.current?.observe(c)}),()=>o.current?.disconnect()),[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@300;400;500;700&display=swap');

        *, *::before, *::after { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }

        :root {
          --bg:        #080c0f;
          --bg2:       #0d1117;
          --bg3:       #0a0e12;
          --surface:   #0f1419;
          --surface2:  #141b22;
          --border:    rgba(255,255,255,0.06);
          --border2:   rgba(255,255,255,0.10);
          --text:      #e8edf2;
          --text2:     #7a8694;
          --muted:     #445060;
          --cyan:      #00d4ff;
          --cyan-dim:  rgba(0,212,255,0.06);
          --cyan-glow: rgba(0,212,255,0.2);
          --green:     #00ff88;
          --green-dim: rgba(0,255,136,0.06);
          --font-display: 'DM Serif Display', serif;
          --font-mono:    'JetBrains Mono', monospace;
          --font-body:    'Syne', sans-serif;
        }

        html { 
          scroll-behavior: smooth; 
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Grid background */
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* Orbs */
        .orb { 
          position: fixed; 
          border-radius: 50%; 
          filter: blur(120px); 
          pointer-events: none; 
          z-index: 0; 
        }
        
        .orb-1 {
          width: 500px; 
          height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
          top: -100px; 
          right: -50px;
          animation: float1 10s ease-in-out infinite;
        }
        
        .orb-2 {
          width: 350px; 
          height: 350px;
          background: radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%);
          bottom: 200px; 
          left: -80px;
          animation: float2 12s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-20px, 30px) scale(1.05); }
          66%     { transform: translate(10px, -20px) scale(0.95); }
        }

        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(30px, -25px); }
        }

        /* Scan line */
        .scanline {
          position: fixed; 
          left: 0; 
          right: 0; 
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes scanline {
          0%   { top: -2px; }
          100% { top: 100%; }
        }

        /* Side label */
        .side-label {
          position: fixed;
          left: 20px; 
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
        }

        /* Page counter */
        .page-counter {
          position: fixed;
          right: 20px; 
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
          writing-mode: vertical-rl;
        }

        /* Contact wrap */
        .contact-wrap {
          min-height: calc(100vh - 56px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          z-index: 10;
        }

        /* Left: big text + social */
        .contact-left {
          padding: 100px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        /* Big ambient text behind */
        .contact-ambient {
          position: absolute;
          bottom: -40px;
          left: -20px;
          font-family: var(--font-display);
          font-size: 18rem;
          letter-spacing: -0.02em;
          color: rgba(255,255,255,0.018);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .contact-kicker {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: fadeUp 0.6s ease both;
        }

        .contact-kicker::before {
          content: '';
          width: 20px;
          height: 1px;
          background: var(--cyan);
          display: inline-block;
        }

        .contact-heading {
          font-family: var(--font-display);
          font-size: clamp(4rem, 7vw, 8rem);
          letter-spacing: 0.02em;
          color: var(--text);
          line-height: 0.9;
          margin-bottom: 36px;
          animation: fadeUp 0.6s 0.1s ease both;
        }

        .contact-heading .accent { 
          color: var(--cyan); 
        }

        .contact-note {
          font-size: 0.93rem;
          color: var(--text2);
          line-height: 1.85;
          max-width: 380px;
          margin-bottom: 48px;
          font-weight: 300;
          animation: fadeUp 0.6s 0.2s ease both;
        }

        /* Status badge */
        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(0,255,136,0.25);
          background: var(--green-dim);
          padding: 10px 18px;
          animation: fadeUp 0.6s 0.3s ease both;
          width: fit-content;
        }

        .avail-dot {
          width: 8px; 
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,255,136,0.4); }
          50%    { opacity: 0.6; box-shadow: 0 0 0 6px rgba(0,255,136,0); }
        }

        .avail-text {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--green);
        }

        /* Right: contact items */
        .contact-right {
          padding: 100px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 28px 28px;
          background: var(--surface);
          border: 1px solid var(--border);
          text-decoration: none;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .contact-item::before {
          content: '';
          position: absolute;
          left: 0; 
          top: 0; 
          bottom: 0;
          width: 2px;
          background: var(--cyan);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          background: var(--surface2);
          transform: translateX(6px);
          border-color: var(--border2);
        }

        .contact-item:hover::before { 
          transform: scaleY(1); 
        }

        .contact-icon {
          width: 42px; 
          height: 42px;
          background: var(--cyan-dim);
          border: 1px solid rgba(0,212,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .contact-item:hover .contact-icon {
          background: rgba(0,212,255,0.2);
          box-shadow: 0 0 16px var(--cyan-glow);
        }

        .contact-label {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .contact-value {
          font-size: 0.9rem;
          color: var(--text);
          font-weight: 400;
        }

        .contact-arrow {
          margin-left: auto;
          color: var(--muted);
          transition: all 0.3s;
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }

        .contact-item:hover .contact-arrow {
          color: var(--cyan);
          transform: translateX(4px);
        }

        /* Footer strip */
        .contact-footer {
          grid-column: 1 / -1;
          border-top: 1px solid var(--border);
          padding: 20px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-footer p {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.14em;
          color: var(--muted);
          text-transform: uppercase;
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Reveal class for scroll animations */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.opacity-100 {
          opacity: 1;
        }

        .reveal.translate-y-0 {
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .contact-wrap { 
            grid-template-columns: 1fr !important; 
          }
          
          .contact-left { 
            padding: 80px 20px 40px !important; 
            border-right: none !important; 
            border-bottom: 1px solid var(--border) !important; 
          }
          
          .contact-right { 
            padding: 40px 20px 60px !important; 
          }
          
          .contact-footer { 
            padding: 20px !important; 
            flex-direction: column !important; 
            gap: 8px !important; 
            text-align: center !important;
          }
          
          .contact-ambient { 
            display: none !important; 
          }
          
          .side-label { 
            display: none; 
          }
          
          .page-counter { 
            right: 12px; 
            font-size: 0.45rem; 
          }
        }

        @media (max-width: 768px) {
          .page-counter { 
            display: none; 
          }
          
          .contact-heading {
            font-size: clamp(3rem, 10vw, 5rem) !important;
          }
        }

        @media (max-width: 480px) {
          .contact-item {
            padding: 20px !important;
            gap: 14px !important;
          }
          
          .contact-icon {
            width: 36px !important;
            height: 36px !important;
          }
          
          .contact-value {
            font-size: 0.8rem !important;
            word-break: break-all;
          }
          
          .availability-badge {
            padding: 8px 14px !important;
          }
          
          .avail-text {
            font-size: 0.52rem !important;
          }
        }
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"scanline"}),l.jsx(vn,{}),l.jsx("div",{className:"side-label",children:"Contact · Connect"}),l.jsx("div",{className:"page-counter",children:"05 / 05"}),l.jsxs("div",{className:"contact-wrap",children:[l.jsxs("div",{className:"contact-left",children:[l.jsx("div",{className:"contact-ambient",children:"HI"}),l.jsx("div",{className:"contact-kicker",children:"Get in touch"}),l.jsxs("h1",{className:"contact-heading",children:["Let's",l.jsx("br",{}),"build",l.jsx("br",{}),l.jsx("span",{className:"accent",children:"great"}),l.jsx("br",{}),"things."]}),l.jsx("p",{className:"contact-note",children:"Fresh CS graduate from LUMS, actively seeking full-time software engineering roles. Open to backend, full-stack, and AI-adjacent positions. Based in Pakistan, open to relocation."}),l.jsxs("div",{className:"availability-badge",children:[l.jsx("div",{className:"avail-dot"}),l.jsx("span",{className:"avail-text",children:"Available for opportunities"})]})]}),l.jsxs("div",{className:"contact-right",children:[l.jsxs("a",{href:"mailto:karimabid737@gmail.com",className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:l.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"Email"}),l.jsx("div",{className:"contact-value",children:"karimabid737@gmail.com"})]}),l.jsx("span",{className:"contact-arrow",children:"→"})]}),l.jsxs("a",{href:"https://www.linkedin.com/in/abid-karim123/",target:"_blank",rel:"noopener noreferrer",className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),l.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"LinkedIn"}),l.jsx("div",{className:"contact-value",children:"linkedin.com/in/abid-karim123"})]}),l.jsx("span",{className:"contact-arrow",children:"→"})]}),l.jsxs("a",{href:"https://github.com/abidkarim74",target:"_blank",rel:"noopener noreferrer",className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:l.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"GitHub"}),l.jsx("div",{className:"contact-value",children:"github.com/abidkarim74"})]}),l.jsx("span",{className:"contact-arrow",children:"→"})]}),l.jsxs("a",{href:"https://x.com/abid_codes",target:"_blank",rel:"noopener noreferrer",className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M4 4l11.733 16h4.267l-11.733 -16z"}),l.jsx("path",{d:"M4 20l6.768 -6.768m2.46 -2.46L20 4"})]})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"X (Twitter)"}),l.jsx("div",{className:"contact-value",children:"x.com/abid_codes"})]}),l.jsx("span",{className:"contact-arrow",children:"→"})]}),l.jsxs("a",{href:Hm,download:!0,className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),l.jsx("polyline",{points:"14,2 14,8 20,8"}),l.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),l.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"Resume"}),l.jsx("div",{className:"contact-value",children:"Download PDF"})]}),l.jsx("span",{className:"contact-arrow",children:"↓"})]})]}),l.jsxs("div",{className:"contact-footer",children:[l.jsx("p",{children:"© 2026 · Abid Karim · CS @ LUMS"}),l.jsx("p",{children:"Engineered with precision."})]})]})]})};function Qm(){return l.jsx(Vp,{children:l.jsxs(Zt,{element:l.jsx(bm,{}),children:[l.jsx(Zt,{path:"/",element:l.jsx(Mm,{})}),l.jsx(Zt,{path:"/experience",element:l.jsx(Om,{})}),l.jsx(Zt,{path:"/teaching",element:l.jsx(Fm,{})}),l.jsx(Zt,{path:"/projects",element:l.jsx(Wm,{})}),l.jsx(Zt,{path:"/skills",element:l.jsx($m,{})}),l.jsx(Zt,{path:"/contact",element:l.jsx(Vm,{})})]})})}Hf.createRoot(document.getElementById("root")).render(l.jsx(j.StrictMode,{children:l.jsx(hm,{children:l.jsx(Qm,{})})}));
