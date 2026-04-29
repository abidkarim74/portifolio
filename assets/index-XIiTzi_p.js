(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))f(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function s(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function f(p){if(p.ep)return;p.ep=!0;const m=s(p);fetch(p.href,m)}})();var Ql={exports:{}},Pr={},Yl={exports:{}},Z={};var ic;function Df(){if(ic)return Z;ic=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),v=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),E=Symbol.iterator;function I(x){return x===null||typeof x!="object"?null:(x=E&&x[E]||x["@@iterator"],typeof x=="function"?x:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,O={};function T(x,z,q){this.props=x,this.context=z,this.refs=O,this.updater=q||$}T.prototype.isReactComponent={},T.prototype.setState=function(x,z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,z,"setState")},T.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Y(){}Y.prototype=T.prototype;function F(x,z,q){this.props=x,this.context=z,this.refs=O,this.updater=q||$}var J=F.prototype=new Y;J.constructor=F,X(J,T.prototype),J.isPureReactComponent=!0;var ae=Array.isArray,se=Object.prototype.hasOwnProperty,he={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function be(x,z,q){var ee,ne={},re=null,ue=null;if(z!=null)for(ee in z.ref!==void 0&&(ue=z.ref),z.key!==void 0&&(re=""+z.key),z)se.call(z,ee)&&!ye.hasOwnProperty(ee)&&(ne[ee]=z[ee]);var le=arguments.length-2;if(le===1)ne.children=q;else if(1<le){for(var pe=Array(le),Ke=0;Ke<le;Ke++)pe[Ke]=arguments[Ke+2];ne.children=pe}if(x&&x.defaultProps)for(ee in le=x.defaultProps,le)ne[ee]===void 0&&(ne[ee]=le[ee]);return{$$typeof:o,type:x,key:re,ref:ue,props:ne,_owner:he.current}}function Oe(x,z){return{$$typeof:o,type:x.type,key:z,ref:x.ref,props:x.props,_owner:x._owner}}function Fe(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function nn(x){var z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(q){return z[q]})}var gt=/\/+/g;function Ge(x,z){return typeof x=="object"&&x!==null&&x.key!=null?nn(""+x.key):z.toString(36)}function ot(x,z,q,ee,ne){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var ue=!1;if(x===null)ue=!0;else switch(re){case"string":case"number":ue=!0;break;case"object":switch(x.$$typeof){case o:case c:ue=!0}}if(ue)return ue=x,ne=ne(ue),x=ee===""?"."+Ge(ue,0):ee,ae(ne)?(q="",x!=null&&(q=x.replace(gt,"$&/")+"/"),ot(ne,z,q,"",function(Ke){return Ke})):ne!=null&&(Fe(ne)&&(ne=Oe(ne,q+(!ne.key||ue&&ue.key===ne.key?"":(""+ne.key).replace(gt,"$&/")+"/")+x)),z.push(ne)),1;if(ue=0,ee=ee===""?".":ee+":",ae(x))for(var le=0;le<x.length;le++){re=x[le];var pe=ee+Ge(re,le);ue+=ot(re,z,q,pe,ne)}else if(pe=I(x),typeof pe=="function")for(x=pe.call(x),le=0;!(re=x.next()).done;)re=re.value,pe=ee+Ge(re,le++),ue+=ot(re,z,q,pe,ne);else if(re==="object")throw z=String(x),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ue}function vt(x,z,q){if(x==null)return x;var ee=[],ne=0;return ot(x,ee,"","",function(re){return z.call(q,re,ne++)}),ee}function Be(x){if(x._status===-1){var z=x._result;z=z(),z.then(function(q){(x._status===0||x._status===-1)&&(x._status=1,x._result=q)},function(q){(x._status===0||x._status===-1)&&(x._status=2,x._result=q)}),x._status===-1&&(x._status=0,x._result=z)}if(x._status===1)return x._result.default;throw x._result}var we={current:null},M={transition:null},G={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:M,ReactCurrentOwner:he};function U(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:vt,forEach:function(x,z,q){vt(x,function(){z.apply(this,arguments)},q)},count:function(x){var z=0;return vt(x,function(){z++}),z},toArray:function(x){return vt(x,function(z){return z})||[]},only:function(x){if(!Fe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Z.Component=T,Z.Fragment=s,Z.Profiler=p,Z.PureComponent=F,Z.StrictMode=f,Z.Suspense=j,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Z.act=U,Z.cloneElement=function(x,z,q){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ee=X({},x.props),ne=x.key,re=x.ref,ue=x._owner;if(z!=null){if(z.ref!==void 0&&(re=z.ref,ue=he.current),z.key!==void 0&&(ne=""+z.key),x.type&&x.type.defaultProps)var le=x.type.defaultProps;for(pe in z)se.call(z,pe)&&!ye.hasOwnProperty(pe)&&(ee[pe]=z[pe]===void 0&&le!==void 0?le[pe]:z[pe])}var pe=arguments.length-2;if(pe===1)ee.children=q;else if(1<pe){le=Array(pe);for(var Ke=0;Ke<pe;Ke++)le[Ke]=arguments[Ke+2];ee.children=le}return{$$typeof:o,type:x.type,key:ne,ref:re,props:ee,_owner:ue}},Z.createContext=function(x){return x={$$typeof:v,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:m,_context:x},x.Consumer=x},Z.createElement=be,Z.createFactory=function(x){var z=be.bind(null,x);return z.type=x,z},Z.createRef=function(){return{current:null}},Z.forwardRef=function(x){return{$$typeof:N,render:x}},Z.isValidElement=Fe,Z.lazy=function(x){return{$$typeof:b,_payload:{_status:-1,_result:x},_init:Be}},Z.memo=function(x,z){return{$$typeof:C,type:x,compare:z===void 0?null:z}},Z.startTransition=function(x){var z=M.transition;M.transition={};try{x()}finally{M.transition=z}},Z.unstable_act=U,Z.useCallback=function(x,z){return we.current.useCallback(x,z)},Z.useContext=function(x){return we.current.useContext(x)},Z.useDebugValue=function(){},Z.useDeferredValue=function(x){return we.current.useDeferredValue(x)},Z.useEffect=function(x,z){return we.current.useEffect(x,z)},Z.useId=function(){return we.current.useId()},Z.useImperativeHandle=function(x,z,q){return we.current.useImperativeHandle(x,z,q)},Z.useInsertionEffect=function(x,z){return we.current.useInsertionEffect(x,z)},Z.useLayoutEffect=function(x,z){return we.current.useLayoutEffect(x,z)},Z.useMemo=function(x,z){return we.current.useMemo(x,z)},Z.useReducer=function(x,z,q){return we.current.useReducer(x,z,q)},Z.useRef=function(x){return we.current.useRef(x)},Z.useState=function(x){return we.current.useState(x)},Z.useSyncExternalStore=function(x,z,q){return we.current.useSyncExternalStore(x,z,q)},Z.useTransition=function(){return we.current.useTransition()},Z.version="18.3.1",Z}var ac;function ro(){return ac||(ac=1,Yl.exports=Df()),Yl.exports}var lc;function Of(){if(lc)return Pr;lc=1;var o=ro(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(N,j,C){var b,E={},I=null,$=null;C!==void 0&&(I=""+C),j.key!==void 0&&(I=""+j.key),j.ref!==void 0&&($=j.ref);for(b in j)f.call(j,b)&&!m.hasOwnProperty(b)&&(E[b]=j[b]);if(N&&N.defaultProps)for(b in j=N.defaultProps,j)E[b]===void 0&&(E[b]=j[b]);return{$$typeof:c,type:N,key:I,ref:$,props:E,_owner:p.current}}return Pr.Fragment=s,Pr.jsx=v,Pr.jsxs=v,Pr}var oc;function Ff(){return oc||(oc=1,Ql.exports=Of()),Ql.exports}var l=Ff(),S=ro(),Qi={},Gl={exports:{}},Ye={},Kl={exports:{}},Xl={};var sc;function Af(){return sc||(sc=1,(function(o){function c(M,G){var U=M.length;M.push(G);e:for(;0<U;){var x=U-1>>>1,z=M[x];if(0<p(z,G))M[x]=G,M[U]=z,U=x;else break e}}function s(M){return M.length===0?null:M[0]}function f(M){if(M.length===0)return null;var G=M[0],U=M.pop();if(U!==G){M[0]=U;e:for(var x=0,z=M.length,q=z>>>1;x<q;){var ee=2*(x+1)-1,ne=M[ee],re=ee+1,ue=M[re];if(0>p(ne,U))re<z&&0>p(ue,ne)?(M[x]=ue,M[re]=U,x=re):(M[x]=ne,M[ee]=U,x=ee);else if(re<z&&0>p(ue,U))M[x]=ue,M[re]=U,x=re;else break e}}return G}function p(M,G){var U=M.sortIndex-G.sortIndex;return U!==0?U:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var v=Date,N=v.now();o.unstable_now=function(){return v.now()-N}}var j=[],C=[],b=1,E=null,I=3,$=!1,X=!1,O=!1,T=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(M){for(var G=s(C);G!==null;){if(G.callback===null)f(C);else if(G.startTime<=M)f(C),G.sortIndex=G.expirationTime,c(j,G);else break;G=s(C)}}function ae(M){if(O=!1,J(M),!X)if(s(j)!==null)X=!0,Be(se);else{var G=s(C);G!==null&&we(ae,G.startTime-M)}}function se(M,G){X=!1,O&&(O=!1,Y(be),be=-1),$=!0;var U=I;try{for(J(G),E=s(j);E!==null&&(!(E.expirationTime>G)||M&&!nn());){var x=E.callback;if(typeof x=="function"){E.callback=null,I=E.priorityLevel;var z=x(E.expirationTime<=G);G=o.unstable_now(),typeof z=="function"?E.callback=z:E===s(j)&&f(j),J(G)}else f(j);E=s(j)}if(E!==null)var q=!0;else{var ee=s(C);ee!==null&&we(ae,ee.startTime-G),q=!1}return q}finally{E=null,I=U,$=!1}}var he=!1,ye=null,be=-1,Oe=5,Fe=-1;function nn(){return!(o.unstable_now()-Fe<Oe)}function gt(){if(ye!==null){var M=o.unstable_now();Fe=M;var G=!0;try{G=ye(!0,M)}finally{G?Ge():(he=!1,ye=null)}}else he=!1}var Ge;if(typeof F=="function")Ge=function(){F(gt)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,vt=ot.port2;ot.port1.onmessage=gt,Ge=function(){vt.postMessage(null)}}else Ge=function(){T(gt,0)};function Be(M){ye=M,he||(he=!0,Ge())}function we(M,G){be=T(function(){M(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(M){M.callback=null},o.unstable_continueExecution=function(){X||$||(X=!0,Be(se))},o.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<M?Math.floor(1e3/M):5},o.unstable_getCurrentPriorityLevel=function(){return I},o.unstable_getFirstCallbackNode=function(){return s(j)},o.unstable_next=function(M){switch(I){case 1:case 2:case 3:var G=3;break;default:G=I}var U=I;I=G;try{return M()}finally{I=U}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=I;I=M;try{return G()}finally{I=U}},o.unstable_scheduleCallback=function(M,G,U){var x=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?x+U:x):U=x,M){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=U+z,M={id:b++,callback:G,priorityLevel:M,startTime:U,expirationTime:z,sortIndex:-1},U>x?(M.sortIndex=U,c(C,M),s(j)===null&&M===s(C)&&(O?(Y(be),be=-1):O=!0,we(ae,U-x))):(M.sortIndex=z,c(j,M),X||$||(X=!0,Be(se))),M},o.unstable_shouldYield=nn,o.unstable_wrapCallback=function(M){var G=I;return function(){var U=I;I=G;try{return M.apply(this,arguments)}finally{I=U}}}})(Xl)),Xl}var uc;function Uf(){return uc||(uc=1,Kl.exports=Af()),Kl.exports}var cc;function Bf(){if(cc)return Ye;cc=1;var o=ro(),c=Uf();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function m(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},E={};function I(e){return j.call(E,e)?!0:j.call(b,e)?!1:C.test(e)?E[e]=!0:(b[e]=!0,!1)}function $(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,n,r){if(t===null||typeof t>"u"||$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,r,i,a,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y,F);T[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y,F);T[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y,F);T[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function J(e,t,n,r){var i=T.hasOwnProperty(t)?T[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,n,i,r)&&(n=null),r||i===null?I(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ae=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),he=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),nn=Symbol.for("react.context"),gt=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,x;function z(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var q=!1;function ee(e,t){if(!e||q)return"";q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var r=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){r=k}e.call(t.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var i=k.stack.split(`
`),a=r.stack.split(`
`),u=i.length-1,d=a.length-1;1<=u&&0<=d&&i[u]!==a[d];)d--;for(;1<=u&&0<=d;u--,d--)if(i[u]!==a[d]){if(u!==1||d!==1)do if(u--,d--,0>d||i[u]!==a[d]){var h=`
`+i[u].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=u&&0<=d);break}}}finally{q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function ne(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case he:return"Portal";case Oe:return"Profiler";case be:return"StrictMode";case Ge:return"Suspense";case ot:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nn:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case gt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vt:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(t);case 8:return t===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){r=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Ke(e))}function uo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zi(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function co(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fo(e,t){t=t.checked,t!=null&&J(e,"checked",t,!1)}function ea(e,t){fo(e,t);var n=le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ta(e,t.type,n):t.hasOwnProperty("defaultValue")&&ta(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function po(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ta(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Vn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function ho(e,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,xo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function yo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Uc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,t){if(t){if(Uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function oa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,wn=null,kn=null;function ko(e){if(e=hr(e)){if(typeof sa!="function")throw Error(s(280));var t=e.stateNode;t&&(t=oi(t),sa(e.stateNode,e.type,t))}}function jo(e){wn?kn?kn.push(e):kn=[e]:wn=e}function So(){if(wn){var e=wn,t=kn;if(kn=wn=null,ko(e),t)for(e=0;e<t.length;e++)ko(t[e])}}function No(e,t){return e(t)}function bo(){}var ua=!1;function Eo(e,t,n){if(ua)return e(t,n);ua=!0;try{return No(e,t,n)}finally{ua=!1,(wn!==null||kn!==null)&&(bo(),So())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ca=!1;if(N)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){ca=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{ca=!1}function Bc(e,t,n,r,i,a,u,d,h){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(P){this.onError(P)}}var Xn=!1,Ar=null,Ur=!1,da=null,Wc={onError:function(e){Xn=!0,Ar=e}};function Hc(e,t,n,r,i,a,u,d,h){Xn=!1,Ar=null,Bc.apply(Wc,arguments)}function $c(e,t,n,r,i,a,u,d,h){if(Hc.apply(this,arguments),Xn){if(Xn){var k=Ar;Xn=!1,Ar=null}else throw Error(s(198));Ur||(Ur=!0,da=k)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Co(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ro(e){if(rn(e)!==e)throw Error(s(188))}function Vc(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ro(i),e;if(a===r)return Ro(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var u=!1,d=i.child;d;){if(d===n){u=!0,n=i,r=a;break}if(d===r){u=!0,r=i,n=a;break}d=d.sibling}if(!u){for(d=a.child;d;){if(d===n){u=!0,n=a,r=i;break}if(d===r){u=!0,r=a,n=i;break}d=d.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function zo(e){return e=Vc(e),e!==null?Po(e):null}function Po(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Po(e);if(t!==null)return t;e=e.sibling}return null}var Lo=c.unstable_scheduleCallback,_o=c.unstable_cancelCallback,Qc=c.unstable_shouldYield,Yc=c.unstable_requestPaint,je=c.unstable_now,Gc=c.unstable_getCurrentPriorityLevel,fa=c.unstable_ImmediatePriority,To=c.unstable_UserBlockingPriority,Br=c.unstable_NormalPriority,Kc=c.unstable_LowPriority,Io=c.unstable_IdlePriority,Wr=null,xt=null;function Xc(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Wr,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Zc,Jc=Math.log,qc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Jc(e)/qc|0)|0}var Hr=64,$r=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,u=n&268435455;if(u!==0){var d=u&~i;d!==0?r=Jn(d):(a&=u,a!==0&&(r=Jn(a)))}else u=n&~i,u!==0?r=Jn(u):a!==0&&(r=Jn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-st(a),d=1<<u,h=i[u];h===-1?((d&n)===0||(d&r)!==0)&&(i[u]=ed(d,t)):h<=t&&(e.expiredLanes|=d),a&=~d}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mo(){var e=Hr;return Hr<<=1,(Hr&4194240)===0&&(Hr=64),e}function ma(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function nd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Do(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Oo,ga,Fo,Ao,Uo,va=!1,Qr=[],It=null,Mt=null,Dt=null,Zn=new Map,er=new Map,Ot=[],rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bo(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function tr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=hr(t),t!==null&&ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function id(e,t,n,r,i){switch(t){case"focusin":return It=tr(It,e,t,n,r,i),!0;case"dragenter":return Mt=tr(Mt,e,t,n,r,i),!0;case"mouseover":return Dt=tr(Dt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Zn.set(a,tr(Zn.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,er.set(a,tr(er.get(a)||null,e,t,n,r,i)),!0}return!1}function Wo(e){var t=an(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Co(n),t!==null){e.blockedOn=t,Uo(e.priority,function(){Fo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);la=r,n.target.dispatchEvent(r),la=null}else return t=hr(n),t!==null&&ga(t),e.blockedOn=n,!1;t.shift()}return!0}function Ho(e,t,n){Yr(e)&&n.delete(t)}function ad(){va=!1,It!==null&&Yr(It)&&(It=null),Mt!==null&&Yr(Mt)&&(Mt=null),Dt!==null&&Yr(Dt)&&(Dt=null),Zn.forEach(Ho),er.forEach(Ho)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,va||(va=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ad)))}function rr(e){function t(i){return nr(i,e)}if(0<Qr.length){nr(Qr[0],e);for(var n=1;n<Qr.length;n++){var r=Qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&nr(It,e),Mt!==null&&nr(Mt,e),Dt!==null&&nr(Dt,e),Zn.forEach(t),er.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Wo(n),n.blockedOn===null&&Ot.shift()}var jn=ae.ReactCurrentBatchConfig,Gr=!0;function ld(e,t,n,r){var i=oe,a=jn.transition;jn.transition=null;try{oe=1,xa(e,t,n,r)}finally{oe=i,jn.transition=a}}function od(e,t,n,r){var i=oe,a=jn.transition;jn.transition=null;try{oe=4,xa(e,t,n,r)}finally{oe=i,jn.transition=a}}function xa(e,t,n,r){if(Gr){var i=ya(e,t,n,r);if(i===null)Da(e,t,r,Kr,n),Bo(e,r);else if(id(i,e,t,n,r))r.stopPropagation();else if(Bo(e,r),t&4&&-1<rd.indexOf(e)){for(;i!==null;){var a=hr(i);if(a!==null&&Oo(a),a=ya(e,t,n,r),a===null&&Da(e,t,r,Kr,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Da(e,t,r,null,n)}}var Kr=null;function ya(e,t,n,r){if(Kr=null,e=oa(r),e=an(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Co(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function $o(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case fa:return 1;case To:return 4;case Br:case Kc:return 16;case Io:return 536870912;default:return 16}default:return 16}}var Ft=null,wa=null,Xr=null;function Vo(){if(Xr)return Xr;var e,t=wa,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===i[a-r];r++);return Xr=i.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function Qo(){return!1}function Xe(e){function t(n,r,i,a,u){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qr:Qo,this.isPropagationStopped=Qo,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Xe(Sn),ir=U({},Sn,{view:0,detail:0}),sd=Xe(ir),ja,Sa,ar,Zr=U({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(ja=e.screenX-ar.screenX,Sa=e.screenY-ar.screenY):Sa=ja=0,ar=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),Yo=Xe(Zr),ud=U({},Zr,{dataTransfer:0}),cd=Xe(ud),dd=U({},ir,{relatedTarget:0}),Na=Xe(dd),fd=U({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),pd=Xe(fd),md=U({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hd=Xe(md),gd=U({},Sn,{data:0}),Go=Xe(gd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function ba(){return wd}var kd=U({},ir,{key:function(e){if(e.key){var t=vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jd=Xe(kd),Sd=U({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Xe(Sd),Nd=U({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),bd=Xe(Nd),Ed=U({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=Xe(Ed),Rd=U({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=Xe(Rd),Pd=[9,13,27,32],Ea=N&&"CompositionEvent"in window,lr=null;N&&"documentMode"in document&&(lr=document.documentMode);var Ld=N&&"TextEvent"in window&&!lr,Xo=N&&(!Ea||lr&&8<lr&&11>=lr),Jo=" ",qo=!1;function Zo(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function es(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function _d(e,t){switch(e){case"compositionend":return es(t);case"keypress":return t.which!==32?null:(qo=!0,Jo);case"textInput":return e=t.data,e===Jo&&qo?null:e;default:return null}}function Td(e,t){if(Nn)return e==="compositionend"||!Ea&&Zo(e,t)?(e=Vo(),Xr=wa=Ft=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xo&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function ns(e,t,n,r){jo(r),t=ii(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function Md(e){ws(e,0)}function ei(e){var t=zn(e);if(uo(t))return e}function Dd(e,t){if(e==="change")return t}var rs=!1;if(N){var Ca;if(N){var Ra="oninput"in document;if(!Ra){var is=document.createElement("div");is.setAttribute("oninput","return;"),Ra=typeof is.oninput=="function"}Ca=Ra}else Ca=!1;rs=Ca&&(!document.documentMode||9<document.documentMode)}function as(){or&&(or.detachEvent("onpropertychange",ls),sr=or=null)}function ls(e){if(e.propertyName==="value"&&ei(sr)){var t=[];ns(t,sr,e,oa(e)),Eo(Md,t)}}function Od(e,t,n){e==="focusin"?(as(),or=t,sr=n,or.attachEvent("onpropertychange",ls)):e==="focusout"&&as()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei(sr)}function Ad(e,t){if(e==="click")return ei(t)}function Ud(e,t){if(e==="input"||e==="change")return ei(t)}function Bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Bd;function ur(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!j.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ss(e,t){var n=os(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=os(n)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cs(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=cs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&us(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ss(n,a);var u=ss(n,r);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hd=N&&"documentMode"in document&&11>=document.documentMode,bn=null,Pa=null,cr=null,La=!1;function ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;La||bn==null||bn!==Or(r)||(r=bn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&ur(cr,r)||(cr=r,r=ii(Pa,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionend:ti("Transition","TransitionEnd")},_a={},fs={};N&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function ni(e){if(_a[e])return _a[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fs)return _a[e]=t[n];return e}var ps=ni("animationend"),ms=ni("animationiteration"),hs=ni("animationstart"),gs=ni("transitionend"),vs=new Map,xs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){vs.set(e,t),m(t,[e])}for(var Ta=0;Ta<xs.length;Ta++){var Ia=xs[Ta],$d=Ia.toLowerCase(),Vd=Ia[0].toUpperCase()+Ia.slice(1);At($d,"on"+Vd)}At(ps,"onAnimationEnd"),At(ms,"onAnimationIteration"),At(hs,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(gs,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function ys(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$c(r,t,void 0,e),e.currentTarget=null}function ws(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var u=r.length-1;0<=u;u--){var d=r[u],h=d.instance,k=d.currentTarget;if(d=d.listener,h!==a&&i.isPropagationStopped())break e;ys(i,d,k),a=h}else for(u=0;u<r.length;u++){if(d=r[u],h=d.instance,k=d.currentTarget,d=d.listener,h!==a&&i.isPropagationStopped())break e;ys(i,d,k),a=h}}}if(Ur)throw e=da,Ur=!1,da=null,e}function de(e,t){var n=t[Wa];n===void 0&&(n=t[Wa]=new Set);var r=e+"__bubble";n.has(r)||(ks(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),ks(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[ri]){e[ri]=!0,f.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,Ma("selectionchange",!1,t))}}function ks(e,t,n,r){switch($o(t)){case 1:var i=ld;break;case 4:i=od;break;default:i=xa}n=i.bind(null,t,n,e),i=void 0,!ca||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Da(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(u===4)for(u=r.return;u!==null;){var h=u.tag;if((h===3||h===4)&&(h=u.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;u=u.return}for(;d!==null;){if(u=an(d),u===null)return;if(h=u.tag,h===5||h===6){r=a=u;continue e}d=d.parentNode}}r=r.return}Eo(function(){var k=a,P=oa(n),L=[];e:{var R=vs.get(e);if(R!==void 0){var D=ka,B=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":D=jd;break;case"focusin":B="focus",D=Na;break;case"focusout":B="blur",D=Na;break;case"beforeblur":case"afterblur":D=Na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=bd;break;case ps:case ms:case hs:D=pd;break;case gs:D=Cd;break;case"scroll":D=sd;break;case"wheel":D=zd;break;case"copy":case"cut":case"paste":D=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Ko}var W=(t&4)!==0,Se=!W&&e==="scroll",y=W?R!==null?R+"Capture":null:R;W=[];for(var g=k,w;g!==null;){w=g;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,y!==null&&(_=Gn(g,y),_!=null&&W.push(pr(g,_,w)))),Se)break;g=g.return}0<W.length&&(R=new D(R,B,null,n,P),L.push({event:R,listeners:W}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",R&&n!==la&&(B=n.relatedTarget||n.fromElement)&&(an(B)||B[Nt]))break e;if((D||R)&&(R=P.window===P?P:(R=P.ownerDocument)?R.defaultView||R.parentWindow:window,D?(B=n.relatedTarget||n.toElement,D=k,B=B?an(B):null,B!==null&&(Se=rn(B),B!==Se||B.tag!==5&&B.tag!==6)&&(B=null)):(D=null,B=k),D!==B)){if(W=Yo,_="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=Ko,_="onPointerLeave",y="onPointerEnter",g="pointer"),Se=D==null?R:zn(D),w=B==null?R:zn(B),R=new W(_,g+"leave",D,n,P),R.target=Se,R.relatedTarget=w,_=null,an(P)===k&&(W=new W(y,g+"enter",B,n,P),W.target=w,W.relatedTarget=Se,_=W),Se=_,D&&B)t:{for(W=D,y=B,g=0,w=W;w;w=Cn(w))g++;for(w=0,_=y;_;_=Cn(_))w++;for(;0<g-w;)W=Cn(W),g--;for(;0<w-g;)y=Cn(y),w--;for(;g--;){if(W===y||y!==null&&W===y.alternate)break t;W=Cn(W),y=Cn(y)}W=null}else W=null;D!==null&&js(L,R,D,W,!1),B!==null&&Se!==null&&js(L,Se,B,W,!0)}}e:{if(R=k?zn(k):window,D=R.nodeName&&R.nodeName.toLowerCase(),D==="select"||D==="input"&&R.type==="file")var H=Dd;else if(ts(R))if(rs)H=Ud;else{H=Fd;var V=Od}else(D=R.nodeName)&&D.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(H=Ad);if(H&&(H=H(e,k))){ns(L,H,n,P);break e}V&&V(e,R,k),e==="focusout"&&(V=R._wrapperState)&&V.controlled&&R.type==="number"&&ta(R,"number",R.value)}switch(V=k?zn(k):window,e){case"focusin":(ts(V)||V.contentEditable==="true")&&(bn=V,Pa=k,cr=null);break;case"focusout":cr=Pa=bn=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,ds(L,n,P);break;case"selectionchange":if(Hd)break;case"keydown":case"keyup":ds(L,n,P)}var Q;if(Ea)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Nn?Zo(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Xo&&n.locale!=="ko"&&(Nn||K!=="onCompositionStart"?K==="onCompositionEnd"&&Nn&&(Q=Vo()):(Ft=P,wa="value"in Ft?Ft.value:Ft.textContent,Nn=!0)),V=ii(k,K),0<V.length&&(K=new Go(K,e,null,n,P),L.push({event:K,listeners:V}),Q?K.data=Q:(Q=es(n),Q!==null&&(K.data=Q)))),(Q=Ld?_d(e,n):Td(e,n))&&(k=ii(k,"onBeforeInput"),0<k.length&&(P=new Go("onBeforeInput","beforeinput",null,n,P),L.push({event:P,listeners:k}),P.data=Q))}ws(L,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Gn(e,n),a!=null&&r.unshift(pr(e,a,i)),a=Gn(e,t),a!=null&&r.push(pr(e,a,i))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function js(e,t,n,r,i){for(var a=t._reactName,u=[];n!==null&&n!==r;){var d=n,h=d.alternate,k=d.stateNode;if(h!==null&&h===r)break;d.tag===5&&k!==null&&(d=k,i?(h=Gn(n,a),h!=null&&u.unshift(pr(n,h,d))):i||(h=Gn(n,a),h!=null&&u.push(pr(n,h,d)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Yd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function Ss(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Gd,"")}function ai(e,t,n){if(t=Ss(t),Ss(e)!==t&&n)throw Error(s(425))}function li(){}var Oa=null,Fa=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,Ns=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ns<"u"?function(e){return Ns.resolve(null).then(e).catch(Jd)}:Ua;function Jd(e){setTimeout(function(){throw e})}function Ba(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),yt="__reactFiber$"+Rn,mr="__reactProps$"+Rn,Nt="__reactContainer$"+Rn,Wa="__reactEvents$"+Rn,qd="__reactListeners$"+Rn,Zd="__reactHandles$"+Rn;function an(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bs(e);e!==null;){if(n=e[yt])return n;e=bs(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[yt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function oi(e){return e[mr]||null}var Ha=[],Pn=-1;function Bt(e){return{current:e}}function fe(e){0>Pn||(e.current=Ha[Pn],Ha[Pn]=null,Pn--)}function ce(e,t){Pn++,Ha[Pn]=e.current,e.current=t}var Wt={},Te=Bt(Wt),We=Bt(!1),ln=Wt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function si(){fe(We),fe(Te)}function Es(e,t,n){if(Te.current!==Wt)throw Error(s(168));ce(Te,t),ce(We,n)}function Cs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(s(108,ue(e)||"Unknown",i));return U({},n,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,ln=Te.current,ce(Te,e),ce(We,We.current),!0}function Rs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Cs(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,fe(We),fe(Te),ce(Te,e)):fe(We),ce(We,n)}var bt=null,ci=!1,$a=!1;function zs(e){bt===null?bt=[e]:bt.push(e)}function ef(e){ci=!0,zs(e)}function Ht(){if(!$a&&bt!==null){$a=!0;var e=0,t=oe;try{var n=bt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,ci=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),Lo(fa,Ht),i}finally{oe=t,$a=!1}}return null}var _n=[],Tn=0,di=null,fi=0,et=[],tt=0,on=null,Et=1,Ct="";function sn(e,t){_n[Tn++]=fi,_n[Tn++]=di,di=e,fi=t}function Ps(e,t,n){et[tt++]=Et,et[tt++]=Ct,et[tt++]=on,on=e;var r=Et;e=Ct;var i=32-st(r)-1;r&=~(1<<i),n+=1;var a=32-st(t)+i;if(30<a){var u=i-i%5;a=(r&(1<<u)-1).toString(32),r>>=u,i-=u,Et=1<<32-st(t)+i|n<<i|r,Ct=a+e}else Et=1<<a|n<<i|r,Ct=e}function Va(e){e.return!==null&&(sn(e,1),Ps(e,1,0))}function Qa(e){for(;e===di;)di=_n[--Tn],_n[Tn]=null,fi=_n[--Tn],_n[Tn]=null;for(;e===on;)on=et[--tt],et[tt]=null,Ct=et[--tt],et[tt]=null,Et=et[--tt],et[tt]=null}var Je=null,qe=null,me=!1,ct=null;function Ls(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,qe=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,qe=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(me){var t=qe;if(t){var n=t;if(!_s(e,t)){if(Ya(e))throw Error(s(418));t=Ut(n.nextSibling);var r=Je;t&&_s(e,t)?Ls(r,n):(e.flags=e.flags&-4097|2,me=!1,Je=e)}}else{if(Ya(e))throw Error(s(418));e.flags=e.flags&-4097|2,me=!1,Je=e}}}function Ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function pi(e){if(e!==Je)return!1;if(!me)return Ts(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=qe)){if(Ya(e))throw Is(),Error(s(418));for(;t;)Ls(e,t),t=Ut(t.nextSibling)}if(Ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Je?Ut(e.stateNode.nextSibling):null;return!0}function Is(){for(var e=qe;e;)e=Ut(e.nextSibling)}function In(){qe=Je=null,me=!1}function Ka(e){ct===null?ct=[e]:ct.push(e)}var tf=ae.ReactCurrentBatchConfig;function gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var d=i.refs;u===null?delete d[a]:d[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ms(e){var t=e._init;return t(e._payload)}function Ds(e){function t(y,g){if(e){var w=y.deletions;w===null?(y.deletions=[g],y.flags|=16):w.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=Jt(y,g),y.index=0,y.sibling=null,y}function a(y,g,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<g?(y.flags|=2,g):w):(y.flags|=2,g)):(y.flags|=1048576,g)}function u(y){return e&&y.alternate===null&&(y.flags|=2),y}function d(y,g,w,_){return g===null||g.tag!==6?(g=Ul(w,y.mode,_),g.return=y,g):(g=i(g,w),g.return=y,g)}function h(y,g,w,_){var H=w.type;return H===ye?P(y,g,w.props.children,_,w.key):g!==null&&(g.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Be&&Ms(H)===g.type)?(_=i(g,w.props),_.ref=gr(y,g,w),_.return=y,_):(_=Fi(w.type,w.key,w.props,null,y.mode,_),_.ref=gr(y,g,w),_.return=y,_)}function k(y,g,w,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Bl(w,y.mode,_),g.return=y,g):(g=i(g,w.children||[]),g.return=y,g)}function P(y,g,w,_,H){return g===null||g.tag!==7?(g=gn(w,y.mode,_,H),g.return=y,g):(g=i(g,w),g.return=y,g)}function L(y,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ul(""+g,y.mode,w),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case se:return w=Fi(g.type,g.key,g.props,null,y.mode,w),w.ref=gr(y,null,g),w.return=y,w;case he:return g=Bl(g,y.mode,w),g.return=y,g;case Be:var _=g._init;return L(y,_(g._payload),w)}if(Vn(g)||G(g))return g=gn(g,y.mode,w,null),g.return=y,g;mi(y,g)}return null}function R(y,g,w,_){var H=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return H!==null?null:d(y,g,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case se:return w.key===H?h(y,g,w,_):null;case he:return w.key===H?k(y,g,w,_):null;case Be:return H=w._init,R(y,g,H(w._payload),_)}if(Vn(w)||G(w))return H!==null?null:P(y,g,w,_,null);mi(y,w)}return null}function D(y,g,w,_,H){if(typeof _=="string"&&_!==""||typeof _=="number")return y=y.get(w)||null,d(g,y,""+_,H);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case se:return y=y.get(_.key===null?w:_.key)||null,h(g,y,_,H);case he:return y=y.get(_.key===null?w:_.key)||null,k(g,y,_,H);case Be:var V=_._init;return D(y,g,w,V(_._payload),H)}if(Vn(_)||G(_))return y=y.get(w)||null,P(g,y,_,H,null);mi(g,_)}return null}function B(y,g,w,_){for(var H=null,V=null,Q=g,K=g=0,Pe=null;Q!==null&&K<w.length;K++){Q.index>K?(Pe=Q,Q=null):Pe=Q.sibling;var ie=R(y,Q,w[K],_);if(ie===null){Q===null&&(Q=Pe);break}e&&Q&&ie.alternate===null&&t(y,Q),g=a(ie,g,K),V===null?H=ie:V.sibling=ie,V=ie,Q=Pe}if(K===w.length)return n(y,Q),me&&sn(y,K),H;if(Q===null){for(;K<w.length;K++)Q=L(y,w[K],_),Q!==null&&(g=a(Q,g,K),V===null?H=Q:V.sibling=Q,V=Q);return me&&sn(y,K),H}for(Q=r(y,Q);K<w.length;K++)Pe=D(Q,y,K,w[K],_),Pe!==null&&(e&&Pe.alternate!==null&&Q.delete(Pe.key===null?K:Pe.key),g=a(Pe,g,K),V===null?H=Pe:V.sibling=Pe,V=Pe);return e&&Q.forEach(function(qt){return t(y,qt)}),me&&sn(y,K),H}function W(y,g,w,_){var H=G(w);if(typeof H!="function")throw Error(s(150));if(w=H.call(w),w==null)throw Error(s(151));for(var V=H=null,Q=g,K=g=0,Pe=null,ie=w.next();Q!==null&&!ie.done;K++,ie=w.next()){Q.index>K?(Pe=Q,Q=null):Pe=Q.sibling;var qt=R(y,Q,ie.value,_);if(qt===null){Q===null&&(Q=Pe);break}e&&Q&&qt.alternate===null&&t(y,Q),g=a(qt,g,K),V===null?H=qt:V.sibling=qt,V=qt,Q=Pe}if(ie.done)return n(y,Q),me&&sn(y,K),H;if(Q===null){for(;!ie.done;K++,ie=w.next())ie=L(y,ie.value,_),ie!==null&&(g=a(ie,g,K),V===null?H=ie:V.sibling=ie,V=ie);return me&&sn(y,K),H}for(Q=r(y,Q);!ie.done;K++,ie=w.next())ie=D(Q,y,K,ie.value,_),ie!==null&&(e&&ie.alternate!==null&&Q.delete(ie.key===null?K:ie.key),g=a(ie,g,K),V===null?H=ie:V.sibling=ie,V=ie);return e&&Q.forEach(function(Mf){return t(y,Mf)}),me&&sn(y,K),H}function Se(y,g,w,_){if(typeof w=="object"&&w!==null&&w.type===ye&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case se:e:{for(var H=w.key,V=g;V!==null;){if(V.key===H){if(H=w.type,H===ye){if(V.tag===7){n(y,V.sibling),g=i(V,w.props.children),g.return=y,y=g;break e}}else if(V.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Be&&Ms(H)===V.type){n(y,V.sibling),g=i(V,w.props),g.ref=gr(y,V,w),g.return=y,y=g;break e}n(y,V);break}else t(y,V);V=V.sibling}w.type===ye?(g=gn(w.props.children,y.mode,_,w.key),g.return=y,y=g):(_=Fi(w.type,w.key,w.props,null,y.mode,_),_.ref=gr(y,g,w),_.return=y,y=_)}return u(y);case he:e:{for(V=w.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(y,g.sibling),g=i(g,w.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Bl(w,y.mode,_),g.return=y,y=g}return u(y);case Be:return V=w._init,Se(y,g,V(w._payload),_)}if(Vn(w))return B(y,g,w,_);if(G(w))return W(y,g,w,_);mi(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,w),g.return=y,y=g):(n(y,g),g=Ul(w,y.mode,_),g.return=y,y=g),u(y)):n(y,g)}return Se}var Mn=Ds(!0),Os=Ds(!1),hi=Bt(null),gi=null,Dn=null,Xa=null;function Ja(){Xa=Dn=gi=null}function qa(e){var t=hi.current;fe(hi),e._currentValue=t}function Za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){gi=e,Xa=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(gi===null)throw Error(s(308));Dn=e,gi.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var un=null;function el(e){un===null?un=[e]:un.push(e)}function Fs(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,el(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(te&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,el(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function Us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=u:a=a.next=u,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xi(e,t,n,r){var i=e.updateQueue;$t=!1;var a=i.firstBaseUpdate,u=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,k=h.next;h.next=null,u===null?a=k:u.next=k,u=h;var P=e.alternate;P!==null&&(P=P.updateQueue,d=P.lastBaseUpdate,d!==u&&(d===null?P.firstBaseUpdate=k:d.next=k,P.lastBaseUpdate=h))}if(a!==null){var L=i.baseState;u=0,P=k=h=null,d=a;do{var R=d.lane,D=d.eventTime;if((r&R)===R){P!==null&&(P=P.next={eventTime:D,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var B=e,W=d;switch(R=t,D=n,W.tag){case 1:if(B=W.payload,typeof B=="function"){L=B.call(D,L,R);break e}L=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=W.payload,R=typeof B=="function"?B.call(D,L,R):B,R==null)break e;L=U({},L,R);break e;case 2:$t=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,R=i.effects,R===null?i.effects=[d]:R.push(d))}else D={eventTime:D,lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},P===null?(k=P=D,h=L):P=P.next=D,u|=R;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;R=d,d=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);if(P===null&&(h=L),i.baseState=h,i.firstBaseUpdate=k,i.lastBaseUpdate=P,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);fn|=u,e.lanes=u,e.memoizedState=L}}function Bs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var vr={},wt=Bt(vr),xr=Bt(vr),yr=Bt(vr);function cn(e){if(e===vr)throw Error(s(174));return e}function nl(e,t){switch(ce(yr,t),ce(xr,e),ce(wt,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ra(t,e)}fe(wt),ce(wt,t)}function Fn(){fe(wt),fe(xr),fe(yr)}function Ws(e){cn(yr.current);var t=cn(wt.current),n=ra(t,e.type);t!==n&&(ce(xr,e),ce(wt,n))}function rl(e){xr.current===e&&(fe(wt),fe(xr))}var ge=Bt(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function al(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var wi=ae.ReactCurrentDispatcher,ll=ae.ReactCurrentBatchConfig,dn=0,ve=null,Ee=null,Re=null,ki=!1,wr=!1,kr=0,nf=0;function Ie(){throw Error(s(321))}function ol(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function sl(e,t,n,r,i,a){if(dn=a,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wi.current=e===null||e.memoizedState===null?of:sf,e=n(r,i),wr){a=0;do{if(wr=!1,kr=0,25<=a)throw Error(s(301));a+=1,Re=Ee=null,t.updateQueue=null,wi.current=uf,e=n(r,i)}while(wr)}if(wi.current=Ni,t=Ee!==null&&Ee.next!==null,dn=0,Re=Ee=ve=null,ki=!1,t)throw Error(s(300));return e}function ul(){var e=kr!==0;return kr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ve.memoizedState=Re=e:Re=Re.next=e,Re}function rt(){if(Ee===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Re===null?ve.memoizedState:Re.next;if(t!==null)Re=t,Ee=e;else{if(e===null)throw Error(s(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Re===null?ve.memoizedState=Re=e:Re=Re.next=e}return Re}function jr(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=rt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var u=i.next;i.next=a.next,a.next=u}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var d=u=null,h=null,k=a;do{var P=k.lane;if((dn&P)===P)h!==null&&(h=h.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var L={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};h===null?(d=h=L,u=r):h=h.next=L,ve.lanes|=P,fn|=P}k=k.next}while(k!==null&&k!==a);h===null?u=r:h.next=d,ut(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ve.lanes|=a,fn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=rt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do a=e(a,u.action),u=u.next;while(u!==i);ut(a,t.memoizedState)||($e=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Hs(){}function $s(e,t){var n=ve,r=rt(),i=t(),a=!ut(r.memoizedState,i);if(a&&(r.memoizedState=i,$e=!0),r=r.queue,fl(Ys.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Sr(9,Qs.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(s(349));(dn&30)!==0||Vs(n,t,i)}return i}function Vs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qs(e,t,n,r){t.value=n,t.getSnapshot=r,Gs(t)&&Ks(e)}function Ys(e,t,n){return n(function(){Gs(t)&&Ks(e)})}function Gs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Ks(e){var t=Rt(e,1);t!==null&&mt(t,e,1,-1)}function Xs(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},t.queue=e,e=e.dispatch=lf.bind(null,ve,e),[t.memoizedState,e]}function Sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Js(){return rt().memoizedState}function ji(e,t,n,r){var i=kt();ve.flags|=e,i.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}function Si(e,t,n,r){var i=rt();r=r===void 0?null:r;var a=void 0;if(Ee!==null){var u=Ee.memoizedState;if(a=u.destroy,r!==null&&ol(r,u.deps)){i.memoizedState=Sr(t,n,a,r);return}}ve.flags|=e,i.memoizedState=Sr(1|t,n,a,r)}function qs(e,t){return ji(8390656,8,e,t)}function fl(e,t){return Si(2048,8,e,t)}function Zs(e,t){return Si(4,2,e,t)}function eu(e,t){return Si(4,4,e,t)}function tu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nu(e,t,n){return n=n!=null?n.concat([e]):null,Si(4,4,tu.bind(null,t,e),n)}function pl(){}function ru(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ol(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function iu(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ol(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function au(e,t,n){return(dn&21)===0?(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n):(ut(n,t)||(n=Mo(),ve.lanes|=n,fn|=n,e.baseState=!0),t)}function rf(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{oe=n,ll.transition=r}}function lu(){return rt().memoizedState}function af(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ou(e))su(t,n);else if(n=Fs(e,t,n,r),n!==null){var i=Ue();mt(n,e,r,i),uu(n,t,r)}}function lf(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ou(e))su(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,d=a(u,n);if(i.hasEagerState=!0,i.eagerState=d,ut(d,u)){var h=t.interleaved;h===null?(i.next=i,el(t)):(i.next=h.next,h.next=i),t.interleaved=i;return}}catch{}n=Fs(e,t,i,r),n!==null&&(i=Ue(),mt(n,e,r,i),uu(n,t,r))}}function ou(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function su(e,t){wr=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var Ni={readContext:nt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},of={readContext:nt,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:qs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ji(4194308,4,tu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return ji(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=af.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Xs,useDebugValue:pl,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Xs(!1),t=e[0];return e=rf.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=kt();if(me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),ze===null)throw Error(s(349));(dn&30)!==0||Vs(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,qs(Ys.bind(null,r,a,e),[e]),r.flags|=2048,Sr(9,Qs.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=kt(),t=ze.identifierPrefix;if(me){var n=Ct,r=Et;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sf={readContext:nt,useCallback:ru,useContext:nt,useEffect:fl,useImperativeHandle:nu,useInsertionEffect:Zs,useLayoutEffect:eu,useMemo:iu,useReducer:cl,useRef:Js,useState:function(){return cl(jr)},useDebugValue:pl,useDeferredValue:function(e){var t=rt();return au(t,Ee.memoizedState,e)},useTransition:function(){var e=cl(jr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Hs,useSyncExternalStore:$s,useId:lu,unstable_isNewReconciler:!1},uf={readContext:nt,useCallback:ru,useContext:nt,useEffect:fl,useImperativeHandle:nu,useInsertionEffect:Zs,useLayoutEffect:eu,useMemo:iu,useReducer:dl,useRef:Js,useState:function(){return dl(jr)},useDebugValue:pl,useDeferredValue:function(e){var t=rt();return Ee===null?t.memoizedState=e:au(t,Ee.memoizedState,e)},useTransition:function(){var e=dl(jr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Hs,useSyncExternalStore:$s,useId:lu,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bi={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Kt(e),a=zt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Vt(e,a,i),t!==null&&(mt(t,e,i,r),vi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Kt(e),a=zt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Vt(e,a,i),t!==null&&(mt(t,e,i,r),vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Kt(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,r),t!==null&&(mt(t,e,r,n),vi(t,e,r))}};function cu(e,t,n,r,i,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,u):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(i,a):!0}function du(e,t,n){var r=!1,i=Wt,a=t.contextType;return typeof a=="object"&&a!==null?a=nt(a):(i=He(t)?ln:Te.current,r=t.contextTypes,a=(r=r!=null)?Ln(e,i):Wt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bi.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},tl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=nt(a):(a=He(t)?ln:Te.current,i.context=Ln(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ml(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bi.enqueueReplaceState(i,i.state,null),xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function An(e,t){try{var n="",r=t;do n+=ne(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function pu(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,_l=r),vl(e,t)},n}function mu(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){vl(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var df=ae.ReactCurrentOwner,$e=!1;function Ae(e,t,n,r){t.child=e===null?Os(t,null,n,r):Mn(t,e.child,n,r)}function xu(e,t,n,r,i){n=n.render;var a=t.ref;return On(t,i),r=sl(e,t,n,r,a,i),n=ul(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(me&&n&&Va(t),t.flags|=1,Ae(e,t,r,i),t.child)}function yu(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Al(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,wu(e,t,a,r,i)):(e=Fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var u=a.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(u,r)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Jt(a,r),e.ref=t.ref,e.return=t,t.child=e}function wu(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ur(a,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return xl(e,t,n,r,i)}function ku(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Bn,Ze),Ze|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Bn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ce(Bn,Ze),Ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ce(Bn,Ze),Ze|=r;return Ae(e,t,i,n),t.child}function ju(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xl(e,t,n,r,i){var a=He(n)?ln:Te.current;return a=Ln(t,a),On(t,i),n=sl(e,t,n,r,a,i),r=ul(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(me&&r&&Va(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Su(e,t,n,r,i){if(He(n)){var a=!0;ui(t)}else a=!1;if(On(t,i),t.stateNode===null)Ci(e,t),du(t,n,r),hl(t,n,r,i),r=!0;else if(e===null){var u=t.stateNode,d=t.memoizedProps;u.props=d;var h=u.context,k=n.contextType;typeof k=="object"&&k!==null?k=nt(k):(k=He(n)?ln:Te.current,k=Ln(t,k));var P=n.getDerivedStateFromProps,L=typeof P=="function"||typeof u.getSnapshotBeforeUpdate=="function";L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==r||h!==k)&&fu(t,u,r,k),$t=!1;var R=t.memoizedState;u.state=R,xi(t,r,u,i),h=t.memoizedState,d!==r||R!==h||We.current||$t?(typeof P=="function"&&(ml(t,n,P,r),h=t.memoizedState),(d=$t||cu(t,n,d,r,R,h,k))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),u.props=r,u.state=h,u.context=k,r=d):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,As(e,t),d=t.memoizedProps,k=t.type===t.elementType?d:dt(t.type,d),u.props=k,L=t.pendingProps,R=u.context,h=n.contextType,typeof h=="object"&&h!==null?h=nt(h):(h=He(n)?ln:Te.current,h=Ln(t,h));var D=n.getDerivedStateFromProps;(P=typeof D=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==L||R!==h)&&fu(t,u,r,h),$t=!1,R=t.memoizedState,u.state=R,xi(t,r,u,i);var B=t.memoizedState;d!==L||R!==B||We.current||$t?(typeof D=="function"&&(ml(t,n,D,r),B=t.memoizedState),(k=$t||cu(t,n,k,r,R,B,h)||!1)?(P||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,B,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,B,h)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),u.props=r,u.state=B,u.context=h,r=k):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),r=!1)}return yl(e,t,n,r,a,i)}function yl(e,t,n,r,i,a){ju(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return i&&Rs(t,n,!1),Pt(e,t,a);r=t.stateNode,df.current=t;var d=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=Mn(t,e.child,null,a),t.child=Mn(t,null,d,a)):Ae(e,t,d,a),t.memoizedState=r.state,i&&Rs(t,n,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?Es(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Es(e,t.context,!1),nl(e,t.containerInfo)}function bu(e,t,n,r,i){return In(),Ka(i),t.flags|=256,Ae(e,t,n,r),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eu(e,t,n){var r=t.pendingProps,i=ge.current,a=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ge,i&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,a?(r=t.mode,a=t.child,u={mode:"hidden",children:u},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=u):a=Ai(u,r,0,null),e=gn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=kl(n),t.memoizedState=wl,e):jl(t,u));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return ff(e,t,u,r,d,i,n);if(a){a=r.fallback,u=t.mode,i=e.child,d=i.sibling;var h={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=Jt(i,h),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?a=Jt(d,a):(a=gn(a,u,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,u=e.child.memoizedState,u=u===null?kl(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~n,t.memoizedState=wl,r}return a=e.child,e=a.sibling,r=Jt(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jl(e,t){return t=Ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ei(e,t,n,r){return r!==null&&Ka(r),Mn(t,e.child,null,n),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ff(e,t,n,r,i,a,u){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(s(422))),Ei(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ai({mode:"visible",children:r.children},i,0,null),a=gn(a,i,u,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Mn(t,e.child,null,u),t.child.memoizedState=kl(u),t.memoizedState=wl,a);if((t.mode&1)===0)return Ei(e,t,u,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,a=Error(s(419)),r=gl(a,r,void 0),Ei(e,t,u,r)}if(d=(u&e.childLanes)!==0,$e||d){if(r=ze,r!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|u))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Rt(e,i),mt(r,e,i,-1))}return Fl(),r=gl(Error(s(421))),Ei(e,t,u,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bf.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,qe=Ut(i.nextSibling),Je=t,me=!0,ct=null,e!==null&&(et[tt++]=Et,et[tt++]=Ct,et[tt++]=on,Et=e.id,Ct=e.overflow,on=t),t=jl(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Za(e.return,t,n)}function Sl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Ru(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ae(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,a);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ci(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pf(e,t,n){switch(t.tag){case 3:Nu(t),In();break;case 5:Ws(t);break;case 1:He(t.type)&&ui(t);break;case 4:nl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(hi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Eu(e,t,n):(ce(ge,ge.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ru(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,ku(e,t,n)}return Pt(e,t,n)}var zu,Nl,Pu,Lu;zu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Pu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cn(wt.current);var a=null;switch(n){case"input":i=Zi(e,i),r=Zi(e,r),a=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),a=[];break;case"textarea":i=na(e,i),r=na(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}ia(n,r);var u;n=null;for(k in i)if(!r.hasOwnProperty(k)&&i.hasOwnProperty(k)&&i[k]!=null)if(k==="style"){var d=i[k];for(u in d)d.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(p.hasOwnProperty(k)?a||(a=[]):(a=a||[]).push(k,null));for(k in r){var h=r[k];if(d=i?.[k],r.hasOwnProperty(k)&&h!==d&&(h!=null||d!=null))if(k==="style")if(d){for(u in d)!d.hasOwnProperty(u)||h&&h.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in h)h.hasOwnProperty(u)&&d[u]!==h[u]&&(n||(n={}),n[u]=h[u])}else n||(a||(a=[]),a.push(k,n)),n=h;else k==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,d=d?d.__html:void 0,h!=null&&d!==h&&(a=a||[]).push(k,h)):k==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(k,""+h):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(p.hasOwnProperty(k)?(h!=null&&k==="onScroll"&&de("scroll",e),a||d===h||(a=[])):(a=a||[]).push(k,h))}n&&(a=a||[]).push("style",n);var k=a;(t.updateQueue=k)&&(t.flags|=4)}},Lu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mf(e,t,n){var r=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return He(t.type)&&si(),Me(t),null;case 3:return r=t.stateNode,Fn(),fe(We),fe(Te),al(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(Ml(ct),ct=null))),Nl(e,t),Me(t),null;case 5:rl(t);var i=cn(yr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Me(t),null}if(e=cn(wt.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[yt]=t,r[mr]=a,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)de(dr[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":co(r,a),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},de("invalid",r);break;case"textarea":mo(r,a),de("invalid",r)}ia(n,a),i=null;for(var u in a)if(a.hasOwnProperty(u)){var d=a[u];u==="children"?typeof d=="string"?r.textContent!==d&&(a.suppressHydrationWarning!==!0&&ai(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&ai(r.textContent,d,e),i=["children",""+d]):p.hasOwnProperty(u)&&d!=null&&u==="onScroll"&&de("scroll",r)}switch(n){case"input":Dr(r),po(r,a,!0);break;case"textarea":Dr(r),go(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=li)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[yt]=t,e[mr]=r,zu(e,t,!1,!1),t.stateNode=e;e:{switch(u=aa(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)de(dr[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":co(e,r),i=Zi(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),de("invalid",e);break;case"textarea":mo(e,r),i=na(e,r),de("invalid",e);break;default:i=r}ia(n,i),d=i;for(a in d)if(d.hasOwnProperty(a)){var h=d[a];a==="style"?wo(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&xo(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Qn(e,h):typeof h=="number"&&Qn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?h!=null&&a==="onScroll"&&de("scroll",e):h!=null&&J(e,a,h,u))}switch(n){case"input":Dr(e),po(e,r,!1);break;case"textarea":Dr(e),go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+le(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?yn(e,!!r.multiple,a,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=cn(yr.current),cn(wt.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(a=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ai(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Me(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Is(),In(),t.flags|=98560,a=!1;else if(a=pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[yt]=t}else In(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else ct!==null&&(Ml(ct),ct=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?Ce===0&&(Ce=3):Fl())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return Fn(),Nl(e,t),e===null&&fr(t.stateNode.containerInfo),Me(t),null;case 10:return qa(t.type._context),Me(t),null;case 17:return He(t.type)&&si(),Me(t),null;case 19:if(fe(ge),a=t.memoizedState,a===null)return Me(t),null;if(r=(t.flags&128)!==0,u=a.rendering,u===null)if(r)Nr(a,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=yi(e),u!==null){for(t.flags|=128,Nr(a,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&je()>Wn&&(t.flags|=128,r=!0,Nr(a,!1),t.lanes=4194304)}else{if(!r)if(e=yi(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!me)return Me(t),null}else 2*je()-a.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,Nr(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(n=a.last,n!==null?n.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=je(),t.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function hf(e,t){switch(Qa(t),t.tag){case 1:return He(t.type)&&si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),fe(We),fe(Te),al(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return rl(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return Fn(),null;case 10:return qa(t.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var Ri=!1,De=!1,gf=typeof WeakSet=="function"?WeakSet:Set,A=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function bl(e,t,n){try{n()}catch(r){ke(e,t,r)}}var _u=!1;function vf(e,t){if(Oa=Gr,e=cs(),za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var u=0,d=-1,h=-1,k=0,P=0,L=e,R=null;t:for(;;){for(var D;L!==n||i!==0&&L.nodeType!==3||(d=u+i),L!==a||r!==0&&L.nodeType!==3||(h=u+r),L.nodeType===3&&(u+=L.nodeValue.length),(D=L.firstChild)!==null;)R=L,L=D;for(;;){if(L===e)break t;if(R===n&&++k===i&&(d=u),R===a&&++P===r&&(h=u),(D=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=D}n=d===-1||h===-1?null:{start:d,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fa={focusedElem:e,selectionRange:n},Gr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var W=B.memoizedProps,Se=B.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?W:dt(t.type,W),Se);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(_){ke(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return B=_u,_u=!1,B}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bl(t,n,a)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function El(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Tu(e){var t=e.alternate;t!==null&&(e.alternate=null,Tu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[mr],delete t[Wa],delete t[qd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iu(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var Le=null,ft=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Du(e,t,n),n=n.sibling}function Du(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Wr,n)}catch{}switch(n.tag){case 5:De||Un(n,t);case 6:var r=Le,i=ft;Le=null,Qt(e,t,n),Le=r,ft=i,Le!==null&&(ft?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(ft?(e=Le,n=n.stateNode,e.nodeType===8?Ba(e.parentNode,n):e.nodeType===1&&Ba(e,n),rr(e)):Ba(Le,n.stateNode));break;case 4:r=Le,i=ft,Le=n.stateNode.containerInfo,ft=!0,Qt(e,t,n),Le=r,ft=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,u=a.destroy;a=a.tag,u!==void 0&&((a&2)!==0||(a&4)!==0)&&bl(n,t,u),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!De&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){ke(n,t,d)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Qt(e,t,n),De=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gf),t.forEach(function(r){var i=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 5:Le=d.stateNode,ft=!1;break e;case 3:Le=d.stateNode.containerInfo,ft=!0;break e;case 4:Le=d.stateNode.containerInfo,ft=!0;break e}d=d.return}if(Le===null)throw Error(s(160));Du(a,u,i),Le=null,ft=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(k){ke(i,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fu(t,e),t=t.sibling}function Fu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),jt(e),r&4){try{br(3,e,e.return),zi(3,e)}catch(W){ke(e,e.return,W)}try{br(5,e,e.return)}catch(W){ke(e,e.return,W)}}break;case 1:pt(t,e),jt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(pt(t,e),jt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var i=e.stateNode;try{Qn(i,"")}catch(W){ke(e,e.return,W)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,u=n!==null?n.memoizedProps:a,d=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&fo(i,a),aa(d,u);var k=aa(d,a);for(u=0;u<h.length;u+=2){var P=h[u],L=h[u+1];P==="style"?wo(i,L):P==="dangerouslySetInnerHTML"?xo(i,L):P==="children"?Qn(i,L):J(i,P,L,k)}switch(d){case"input":ea(i,a);break;case"textarea":ho(i,a);break;case"select":var R=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var D=a.value;D!=null?yn(i,!!a.multiple,D,!1):R!==!!a.multiple&&(a.defaultValue!=null?yn(i,!!a.multiple,a.defaultValue,!0):yn(i,!!a.multiple,a.multiple?[]:"",!1))}i[mr]=a}catch(W){ke(e,e.return,W)}}break;case 6:if(pt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(W){ke(e,e.return,W)}}break;case 3:if(pt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(W){ke(e,e.return,W)}break;case 4:pt(t,e),jt(e);break;case 13:pt(t,e),jt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ll=je())),r&4&&Ou(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(De=(k=De)||P,pt(t,e),De=k):pt(t,e),jt(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!P&&(e.mode&1)!==0)for(A=e,P=e.child;P!==null;){for(L=A=P;A!==null;){switch(R=A,D=R.child,R.tag){case 0:case 11:case 14:case 15:br(4,R,R.return);break;case 1:Un(R,R.return);var B=R.stateNode;if(typeof B.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(W){ke(r,n,W)}}break;case 5:Un(R,R.return);break;case 22:if(R.memoizedState!==null){Bu(L);continue}}D!==null?(D.return=R,A=D):Bu(L)}P=P.sibling}e:for(P=null,L=e;;){if(L.tag===5){if(P===null){P=L;try{i=L.stateNode,k?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=L.stateNode,h=L.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null,d.style.display=yo("display",u))}catch(W){ke(e,e.return,W)}}}else if(L.tag===6){if(P===null)try{L.stateNode.nodeValue=k?"":L.memoizedProps}catch(W){ke(e,e.return,W)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;P===L&&(P=null),L=L.return}P===L&&(P=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:pt(t,e),jt(e),r&4&&Ou(e);break;case 21:break;default:pt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Iu(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qn(i,""),r.flags&=-33);var a=Mu(e);Rl(e,a,i);break;case 3:case 4:var u=r.stateNode.containerInfo,d=Mu(e);Cl(e,d,u);break;default:throw Error(s(161))}}catch(h){ke(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e,t,n){A=e,Au(e)}function Au(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,a=i.child;if(i.tag===22&&r){var u=i.memoizedState!==null||Ri;if(!u){var d=i.alternate,h=d!==null&&d.memoizedState!==null||De;d=Ri;var k=De;if(Ri=u,(De=h)&&!k)for(A=i;A!==null;)u=A,h=u.child,u.tag===22&&u.memoizedState!==null?Wu(i):h!==null?(h.return=u,A=h):Wu(i);for(;a!==null;)A=a,Au(a),a=a.sibling;A=i,Ri=d,De=k}Uu(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,A=a):Uu(e)}}function Uu(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:De||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bs(t,a,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bs(t,u,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var L=P.dehydrated;L!==null&&rr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}De||t.flags&512&&El(t)}catch(R){ke(t,t.return,R)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Bu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Wu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(h){ke(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(h){ke(t,i,h)}}var a=t.return;try{El(t)}catch(h){ke(t,a,h)}break;case 5:var u=t.return;try{El(t)}catch(h){ke(t,u,h)}}}catch(h){ke(t,t.return,h)}if(t===e){A=null;break}var d=t.sibling;if(d!==null){d.return=t.return,A=d;break}A=t.return}}var yf=Math.ceil,Pi=ae.ReactCurrentDispatcher,zl=ae.ReactCurrentOwner,it=ae.ReactCurrentBatchConfig,te=0,ze=null,Ne=null,_e=0,Ze=0,Bn=Bt(0),Ce=0,Er=null,fn=0,Li=0,Pl=0,Cr=null,Ve=null,Ll=0,Wn=1/0,Lt=null,_i=!1,_l=null,Yt=null,Ti=!1,Gt=null,Ii=0,Rr=0,Tl=null,Mi=-1,Di=0;function Ue(){return(te&6)!==0?je():Mi!==-1?Mi:Mi=je()}function Kt(e){return(e.mode&1)===0?1:(te&2)!==0&&_e!==0?_e&-_e:tf.transition!==null?(Di===0&&(Di=Mo()),Di):(e=oe,e!==0||(e=window.event,e=e===void 0?16:$o(e.type)),e)}function mt(e,t,n,r){if(50<Rr)throw Rr=0,Tl=null,Error(s(185));qn(e,n,r),((te&2)===0||e!==ze)&&(e===ze&&((te&2)===0&&(Li|=n),Ce===4&&Xt(e,_e)),Qe(e,r),n===1&&te===0&&(t.mode&1)===0&&(Wn=je()+500,ci&&Ht()))}function Qe(e,t){var n=e.callbackNode;td(e,t);var r=Vr(e,e===ze?_e:0);if(r===0)n!==null&&_o(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_o(n),t===1)e.tag===0?ef($u.bind(null,e)):zs($u.bind(null,e)),Xd(function(){(te&6)===0&&Ht()}),n=null;else{switch(Do(r)){case 1:n=fa;break;case 4:n=To;break;case 16:n=Br;break;case 536870912:n=Io;break;default:n=Br}n=qu(n,Hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hu(e,t){if(Mi=-1,Di=0,(te&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=Vr(e,e===ze?_e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Oi(e,r);else{t=r;var i=te;te|=2;var a=Qu();(ze!==e||_e!==t)&&(Lt=null,Wn=je()+500,mn(e,t));do try{jf();break}catch(d){Vu(e,d)}while(!0);Ja(),Pi.current=a,te=i,Ne!==null?t=0:(ze=null,_e=0,t=Ce)}if(t!==0){if(t===2&&(i=pa(e),i!==0&&(r=i,t=Il(e,i))),t===1)throw n=Er,mn(e,0),Xt(e,r),Qe(e,je()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!wf(i)&&(t=Oi(e,r),t===2&&(a=pa(e),a!==0&&(r=a,t=Il(e,a))),t===1))throw n=Er,mn(e,0),Xt(e,r),Qe(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:hn(e,Ve,Lt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=Ll+500-je(),10<t)){if(Vr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ua(hn.bind(null,e,Ve,Lt),t);break}hn(e,Ve,Lt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var u=31-st(r);a=1<<u,u=t[u],u>i&&(i=u),r&=~a}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=Ua(hn.bind(null,e,Ve,Lt),r);break}hn(e,Ve,Lt);break;case 5:hn(e,Ve,Lt);break;default:throw Error(s(329))}}}return Qe(e,je()),e.callbackNode===n?Hu.bind(null,e):null}function Il(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Ml(t)),e}function Ml(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function wf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!ut(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~Pl,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if((te&6)!==0)throw Error(s(327));Hn();var t=Vr(e,0);if((t&1)===0)return Qe(e,je()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=pa(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=Er,mn(e,0),Xt(e,t),Qe(e,je()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Ve,Lt),Qe(e,je()),null}function Dl(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Wn=je()+500,ci&&Ht())}}function pn(e){Gt!==null&&Gt.tag===0&&(te&6)===0&&Hn();var t=te;te|=1;var n=it.transition,r=oe;try{if(it.transition=null,oe=1,e)return e()}finally{oe=r,it.transition=n,te=t,(te&6)===0&&Ht()}}function Ol(){Ze=Bn.current,fe(Bn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&si();break;case 3:Fn(),fe(We),fe(Te),al();break;case 5:rl(r);break;case 4:Fn();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:qa(r.type._context);break;case 22:case 23:Ol()}n=n.return}if(ze=e,Ne=e=Jt(e.current,null),_e=Ze=t,Ce=0,Er=null,Pl=Li=fn=0,Ve=Cr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var u=a.next;a.next=i,r.next=u}n.pending=r}un=null}return e}function Vu(e,t){do{var n=Ne;try{if(Ja(),wi.current=Ni,ki){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ki=!1}if(dn=0,Re=Ee=ve=null,wr=!1,kr=0,zl.current=null,n===null||n.return===null){Ce=1,Er=t,Ne=null;break}e:{var a=e,u=n.return,d=n,h=t;if(t=_e,d.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var k=h,P=d,L=P.tag;if((P.mode&1)===0&&(L===0||L===11||L===15)){var R=P.alternate;R?(P.updateQueue=R.updateQueue,P.memoizedState=R.memoizedState,P.lanes=R.lanes):(P.updateQueue=null,P.memoizedState=null)}var D=gu(u);if(D!==null){D.flags&=-257,vu(D,u,d,a,t),D.mode&1&&hu(a,k,t),t=D,h=k;var B=t.updateQueue;if(B===null){var W=new Set;W.add(h),t.updateQueue=W}else B.add(h);break e}else{if((t&1)===0){hu(a,k,t),Fl();break e}h=Error(s(426))}}else if(me&&d.mode&1){var Se=gu(u);if(Se!==null){(Se.flags&65536)===0&&(Se.flags|=256),vu(Se,u,d,a,t),Ka(An(h,d));break e}}a=h=An(h,d),Ce!==4&&(Ce=2),Cr===null?Cr=[a]:Cr.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=pu(a,h,t);Us(a,y);break e;case 1:d=h;var g=a.type,w=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Yt===null||!Yt.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=mu(a,d,t);Us(a,_);break e}}a=a.return}while(a!==null)}Gu(n)}catch(H){t=H,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function Qu(){var e=Pi.current;return Pi.current=Ni,e===null?Ni:e}function Fl(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),ze===null||(fn&268435455)===0&&(Li&268435455)===0||Xt(ze,_e)}function Oi(e,t){var n=te;te|=2;var r=Qu();(ze!==e||_e!==t)&&(Lt=null,mn(e,t));do try{kf();break}catch(i){Vu(e,i)}while(!0);if(Ja(),te=n,Pi.current=r,Ne!==null)throw Error(s(261));return ze=null,_e=0,Ce}function kf(){for(;Ne!==null;)Yu(Ne)}function jf(){for(;Ne!==null&&!Qc();)Yu(Ne)}function Yu(e){var t=Ju(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Gu(e):Ne=t,zl.current=null}function Gu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=mf(n,t,Ze),n!==null){Ne=n;return}}else{if(n=hf(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Ce===0&&(Ce=5)}function hn(e,t,n){var r=oe,i=it.transition;try{it.transition=null,oe=1,Sf(e,t,n,r)}finally{it.transition=i,oe=r}return null}function Sf(e,t,n,r){do Hn();while(Gt!==null);if((te&6)!==0)throw Error(s(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(nd(e,a),e===ze&&(Ne=ze=null,_e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ti||(Ti=!0,qu(Br,function(){return Hn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=it.transition,it.transition=null;var u=oe;oe=1;var d=te;te|=4,zl.current=null,vf(e,n),Fu(n,e),Wd(Fa),Gr=!!Oa,Fa=Oa=null,e.current=n,xf(n),Yc(),te=d,oe=u,it.transition=a}else e.current=n;if(Ti&&(Ti=!1,Gt=e,Ii=i),a=e.pendingLanes,a===0&&(Yt=null),Xc(n.stateNode),Qe(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_i)throw _i=!1,e=_l,_l=null,e;return(Ii&1)!==0&&e.tag!==0&&Hn(),a=e.pendingLanes,(a&1)!==0?e===Tl?Rr++:(Rr=0,Tl=e):Rr=0,Ht(),null}function Hn(){if(Gt!==null){var e=Do(Ii),t=it.transition,n=oe;try{if(it.transition=null,oe=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Ii=0,(te&6)!==0)throw Error(s(331));var i=te;for(te|=4,A=e.current;A!==null;){var a=A,u=a.child;if((A.flags&16)!==0){var d=a.deletions;if(d!==null){for(var h=0;h<d.length;h++){var k=d[h];for(A=k;A!==null;){var P=A;switch(P.tag){case 0:case 11:case 15:br(8,P,a)}var L=P.child;if(L!==null)L.return=P,A=L;else for(;A!==null;){P=A;var R=P.sibling,D=P.return;if(Tu(P),P===k){A=null;break}if(R!==null){R.return=D,A=R;break}A=D}}}var B=a.alternate;if(B!==null){var W=B.child;if(W!==null){B.child=null;do{var Se=W.sibling;W.sibling=null,W=Se}while(W!==null)}}A=a}}if((a.subtreeFlags&2064)!==0&&u!==null)u.return=a,A=u;else e:for(;A!==null;){if(a=A,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:br(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,A=y;break e}A=a.return}}var g=e.current;for(A=g;A!==null;){u=A;var w=u.child;if((u.subtreeFlags&2064)!==0&&w!==null)w.return=u,A=w;else e:for(u=g;A!==null;){if(d=A,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:zi(9,d)}}catch(H){ke(d,d.return,H)}if(d===u){A=null;break e}var _=d.sibling;if(_!==null){_.return=d.return,A=_;break e}A=d.return}}if(te=i,Ht(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Wr,e)}catch{}r=!0}return r}finally{oe=n,it.transition=t}}return!1}function Ku(e,t,n){t=An(n,t),t=pu(e,t,1),e=Vt(e,t,1),t=Ue(),e!==null&&(qn(e,1,t),Qe(e,t))}function ke(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=An(n,e),e=mu(t,e,1),t=Vt(t,e,1),e=Ue(),t!==null&&(qn(t,1,e),Qe(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(_e&n)===n&&(Ce===4||Ce===3&&(_e&130023424)===_e&&500>je()-Ll?mn(e,0):Pl|=n),Qe(e,t)}function Xu(e,t){t===0&&((e.mode&1)===0?t=1:(t=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var n=Ue();e=Rt(e,t),e!==null&&(qn(e,t,n),Qe(e,n))}function bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),Xu(e,n)}var Ju;Ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)$e=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return $e=!1,pf(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,me&&(t.flags&1048576)!==0&&Ps(t,fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ci(e,t),e=t.pendingProps;var i=Ln(t,Te.current);On(t,n),i=sl(null,t,r,e,i,n);var a=ul();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(a=!0,ui(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tl(t),i.updater=bi,t.stateNode=i,i._reactInternals=t,hl(t,r,e,n),t=yl(null,t,r,!0,a,n)):(t.tag=0,me&&a&&Va(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ci(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rf(r),e=dt(r,e),i){case 0:t=xl(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=xu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,dt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),xl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Su(e,t,r,i,n);case 3:e:{if(Nu(t),e===null)throw Error(s(387));r=t.pendingProps,a=t.memoizedState,i=a.element,As(e,t),xi(t,r,null,n);var u=t.memoizedState;if(r=u.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=An(Error(s(423)),t),t=bu(e,t,r,n,i);break e}else if(r!==i){i=An(Error(s(424)),t),t=bu(e,t,r,n,i);break e}else for(qe=Ut(t.stateNode.containerInfo.firstChild),Je=t,me=!0,ct=null,n=Os(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),r===i){t=Pt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return Ws(t),e===null&&Ga(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,u=i.children,Aa(r,i)?u=null:a!==null&&Aa(r,a)&&(t.flags|=32),ju(e,t),Ae(e,t,u,n),t.child;case 6:return e===null&&Ga(t),null;case 13:return Eu(e,t,n);case 4:return nl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),xu(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,u=i.value,ce(hi,r._currentValue),r._currentValue=u,a!==null)if(ut(a.value,u)){if(a.children===i.children&&!We.current){t=Pt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var d=a.dependencies;if(d!==null){u=a.child;for(var h=d.firstContext;h!==null;){if(h.context===r){if(a.tag===1){h=zt(-1,n&-n),h.tag=2;var k=a.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?h.next=h:(h.next=P.next,P.next=h),k.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Za(a.return,n,t),d.lanes|=n;break}h=h.next}}else if(a.tag===10)u=a.type===t.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(s(341));u.lanes|=n,d=u.alternate,d!==null&&(d.lanes|=n),Za(u,n,t),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=nt(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),yu(e,t,r,i,n);case 15:return wu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Ci(e,t),t.tag=1,He(r)?(e=!0,ui(t)):e=!1,On(t,n),du(t,r,i),hl(t,r,i,n),yl(null,t,r,!0,e,n);case 19:return Ru(e,t,n);case 22:return ku(e,t,n)}throw Error(s(156,t.tag))};function qu(e,t){return Lo(e,t)}function Cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Cf(e,t,n,r)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return Al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gt)return 11;if(e===vt)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,r,i,a){var u=2;if(r=e,typeof e=="function")Al(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ye:return gn(n.children,i,a,t);case be:u=8,i|=8;break;case Oe:return e=at(12,n,t,i|2),e.elementType=Oe,e.lanes=a,e;case Ge:return e=at(13,n,t,i),e.elementType=Ge,e.lanes=a,e;case ot:return e=at(19,n,t,i),e.elementType=ot,e.lanes=a,e;case we:return Ai(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:u=10;break e;case nn:u=9;break e;case gt:u=11;break e;case vt:u=14;break e;case Be:u=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=at(u,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function gn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ai(e,t,n,r){return e=at(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function Ul(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wl(e,t,n,r,i,a,u,d,h){return e=new zf(e,t,n,d,h),t===1?(t=1,a===!0&&(t|=8)):t=0,a=at(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tl(a),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zu(e){if(!e)return Wt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(He(n))return Cs(e,n,t)}return t}function ec(e,t,n,r,i,a,u,d,h){return e=Wl(n,r,!0,e,i,a,u,d,h),e.context=Zu(null),n=e.current,r=Ue(),i=Kt(n),a=zt(r,i),a.callback=t??null,Vt(n,a,i),e.current.lanes=i,qn(e,i,r),Qe(e,r),e}function Ui(e,t,n,r){var i=t.current,a=Ue(),u=Kt(i);return n=Zu(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(a,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(i,t,u),e!==null&&(mt(e,i,u,a),vi(e,i,u)),u}function Bi(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hl(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}function Lf(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}Wi.prototype.render=$l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ui(e,t,null,null)},Wi.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Ui(null,e,null,null)}),t[Nt]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ao();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Wo(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rc(){}function _f(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var k=Bi(u);a.call(k)}}var u=ec(t,r,e,0,null,!1,!1,"",rc);return e._reactRootContainer=u,e[Nt]=u.current,fr(e.nodeType===8?e.parentNode:e),pn(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var k=Bi(h);d.call(k)}}var h=Wl(e,0,!1,null,null,!1,!1,"",rc);return e._reactRootContainer=h,e[Nt]=h.current,fr(e.nodeType===8?e.parentNode:e),pn(function(){Ui(t,h,n,r)}),h}function $i(e,t,n,r,i){var a=n._reactRootContainer;if(a){var u=a;if(typeof i=="function"){var d=i;i=function(){var h=Bi(u);d.call(h)}}Ui(t,u,e,i)}else u=_f(n,t,e,i,r);return Bi(u)}Oo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jn(t.pendingLanes);n!==0&&(ha(t,n|1),Qe(t,je()),(te&6)===0&&(Wn=je()+500,Ht()))}break;case 13:pn(function(){var r=Rt(e,1);if(r!==null){var i=Ue();mt(r,e,1,i)}}),Hl(e,1)}},ga=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=Ue();mt(t,e,134217728,n)}Hl(e,134217728)}},Fo=function(e){if(e.tag===13){var t=Kt(e),n=Rt(e,t);if(n!==null){var r=Ue();mt(n,e,t,r)}Hl(e,t)}},Ao=function(){return oe},Uo=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}},sa=function(e,t,n){switch(t){case"input":if(ea(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oi(r);if(!i)throw Error(s(90));uo(r),ea(r,i)}}}break;case"textarea":ho(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}},No=Dl,bo=pn;var Tf={usingClientEntryPoint:!1,Events:[hr,zn,oi,jo,So,Dl]},zr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zo(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{Wr=Vi.inject(If),xt=Vi}catch{}}return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf,Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(s(200));return Pf(e,t,null,n)},Ye.createRoot=function(e,t){if(!Vl(e))throw Error(s(299));var n=!1,r="",i=nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wl(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,fr(e.nodeType===8?e.parentNode:e),new $l(t)},Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=zo(t),e=e===null?null:e.stateNode,e},Ye.flushSync=function(e){return pn(e)},Ye.hydrate=function(e,t,n){if(!Hi(t))throw Error(s(200));return $i(null,e,t,!0,n)},Ye.hydrateRoot=function(e,t,n){if(!Vl(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",u=nc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=ec(t,null,e,1,n??null,i,!1,a,u),e[Nt]=t.current,fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wi(t)},Ye.render=function(e,t,n){if(!Hi(t))throw Error(s(200));return $i(null,e,t,!1,n)},Ye.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(s(40));return e._reactRootContainer?(pn(function(){$i(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1},Ye.unstable_batchedUpdates=Dl,Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hi(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return $i(e,t,n,!1,r)},Ye.version="18.3.1-next-f1338f8080-20240426",Ye}var dc;function Wf(){if(dc)return Gl.exports;dc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Gl.exports=Bf(),Gl.exports}var fc;function Hf(){if(fc)return Qi;fc=1;var o=Wf();return Qi.createRoot=o.createRoot,Qi.hydrateRoot=o.hydrateRoot,Qi}var $f=Hf();var pc="popstate";function Vf(o={}){function c(p,m){let{pathname:v="/",search:N="",hash:j=""}=vn(p.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),to("",{pathname:v,search:N,hash:j},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function s(p,m){let v=p.document.querySelector("base"),N="";if(v&&v.getAttribute("href")){let j=p.location.href,C=j.indexOf("#");N=C===-1?j:j.slice(0,C)}return N+"#"+(typeof m=="string"?m:_r(m))}function f(p,m){ht(p.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return Yf(c,s,f,o)}function xe(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function ht(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Qf(){return Math.random().toString(36).substring(2,10)}function mc(o,c){return{usr:o.state,key:o.key,idx:c}}function to(o,c,s=null,f){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof c=="string"?vn(c):c,state:s,key:c&&c.key||f||Qf()}}function _r({pathname:o="/",search:c="",hash:s=""}){return c&&c!=="?"&&(o+=c.charAt(0)==="?"?c:"?"+c),s&&s!=="#"&&(o+=s.charAt(0)==="#"?s:"#"+s),o}function vn(o){let c={};if(o){let s=o.indexOf("#");s>=0&&(c.hash=o.substring(s),o=o.substring(0,s));let f=o.indexOf("?");f>=0&&(c.search=o.substring(f),o=o.substring(0,f)),o&&(c.pathname=o)}return c}function Yf(o,c,s,f={}){let{window:p=document.defaultView,v5Compat:m=!1}=f,v=p.history,N="POP",j=null,C=b();C==null&&(C=0,v.replaceState({...v.state,idx:C},""));function b(){return(v.state||{idx:null}).idx}function E(){N="POP";let T=b(),Y=T==null?null:T-C;C=T,j&&j({action:N,location:O.location,delta:Y})}function I(T,Y){N="PUSH";let F=to(O.location,T,Y);s&&s(F,T),C=b()+1;let J=mc(F,C),ae=O.createHref(F);try{v.pushState(J,"",ae)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;p.location.assign(ae)}m&&j&&j({action:N,location:O.location,delta:1})}function $(T,Y){N="REPLACE";let F=to(O.location,T,Y);s&&s(F,T),C=b();let J=mc(F,C),ae=O.createHref(F);v.replaceState(J,"",ae),m&&j&&j({action:N,location:O.location,delta:0})}function X(T){return Gf(T)}let O={get action(){return N},get location(){return o(p,v)},listen(T){if(j)throw new Error("A history only accepts one active listener");return p.addEventListener(pc,E),j=T,()=>{p.removeEventListener(pc,E),j=null}},createHref(T){return c(p,T)},createURL:X,encodeLocation(T){let Y=X(T);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:I,replace:$,go(T){return v.go(T)}};return O}function Gf(o,c=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),xe(s,"No window.location.(origin|href) available to create URL");let f=typeof o=="string"?o:_r(o);return f=f.replace(/ $/,"%20"),!c&&f.startsWith("//")&&(f=s+f),new URL(f,s)}function wc(o,c,s="/"){return Kf(o,c,s,!1)}function Kf(o,c,s,f){let p=typeof c=="string"?vn(c):c,m=Tt(p.pathname||"/",s);if(m==null)return null;let v=kc(o);Xf(v);let N=null;for(let j=0;N==null&&j<v.length;++j){let C=op(m);N=ap(v[j],C,f)}return N}function kc(o,c=[],s=[],f="",p=!1){let m=(v,N,j=p,C)=>{let b={relativePath:C===void 0?v.path||"":C,caseSensitive:v.caseSensitive===!0,childrenIndex:N,route:v};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(f)&&j)return;xe(b.relativePath.startsWith(f),`Absolute route path "${b.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(f.length)}let E=_t([f,b.relativePath]),I=s.concat(b);v.children&&v.children.length>0&&(xe(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),kc(v.children,c,I,E,j)),!(v.path==null&&!v.index)&&c.push({path:E,score:rp(E,v.index),routesMeta:I})};return o.forEach((v,N)=>{if(v.path===""||!v.path?.includes("?"))m(v,N);else for(let j of jc(v.path))m(v,N,!0,j)}),c}function jc(o){let c=o.split("/");if(c.length===0)return[];let[s,...f]=c,p=s.endsWith("?"),m=s.replace(/\?$/,"");if(f.length===0)return p?[m,""]:[m];let v=jc(f.join("/")),N=[];return N.push(...v.map(j=>j===""?m:[m,j].join("/"))),p&&N.push(...v),N.map(j=>o.startsWith("/")&&j===""?"/":j)}function Xf(o){o.sort((c,s)=>c.score!==s.score?s.score-c.score:ip(c.routesMeta.map(f=>f.childrenIndex),s.routesMeta.map(f=>f.childrenIndex)))}var Jf=/^:[\w-]+$/,qf=3,Zf=2,ep=1,tp=10,np=-2,hc=o=>o==="*";function rp(o,c){let s=o.split("/"),f=s.length;return s.some(hc)&&(f+=np),c&&(f+=Zf),s.filter(p=>!hc(p)).reduce((p,m)=>p+(Jf.test(m)?qf:m===""?ep:tp),f)}function ip(o,c){return o.length===c.length&&o.slice(0,-1).every((f,p)=>f===c[p])?o[o.length-1]-c[c.length-1]:0}function ap(o,c,s=!1){let{routesMeta:f}=o,p={},m="/",v=[];for(let N=0;N<f.length;++N){let j=f[N],C=N===f.length-1,b=m==="/"?c:c.slice(m.length)||"/",E=Xi({path:j.relativePath,caseSensitive:j.caseSensitive,end:C},b),I=j.route;if(!E&&C&&s&&!f[f.length-1].route.index&&(E=Xi({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},b)),!E)return null;Object.assign(p,E.params),v.push({params:p,pathname:_t([m,E.pathname]),pathnameBase:dp(_t([m,E.pathnameBase])),route:I}),E.pathnameBase!=="/"&&(m=_t([m,E.pathnameBase]))}return v}function Xi(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,f]=lp(o.path,o.caseSensitive,o.end),p=c.match(s);if(!p)return null;let m=p[0],v=m.replace(/(.)\/+$/,"$1"),N=p.slice(1);return{params:f.reduce((C,{paramName:b,isOptional:E},I)=>{if(b==="*"){let X=N[I]||"";v=m.slice(0,m.length-X.length).replace(/(.)\/+$/,"$1")}const $=N[I];return E&&!$?C[b]=void 0:C[b]=($||"").replace(/%2F/g,"/"),C},{}),pathname:m,pathnameBase:v,pattern:o}}function lp(o,c=!1,s=!0){ht(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let f=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,N,j)=>(f.push({paramName:N,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(f.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),f]}function op(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return ht(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),o}}function Tt(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,f=o.charAt(s);return f&&f!=="/"?null:o.slice(s)||"/"}var sp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function up(o,c="/"){let{pathname:s,search:f="",hash:p=""}=typeof o=="string"?vn(o):o,m;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?m=gc(s.substring(1),"/"):m=gc(s,c)):m=c,{pathname:m,search:fp(f),hash:pp(p)}}function gc(o,c){let s=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function Jl(o,c,s,f){return`Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cp(o){return o.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function Sc(o){let c=cp(o);return c.map((s,f)=>f===c.length-1?s.pathname:s.pathnameBase)}function Nc(o,c,s,f=!1){let p;typeof o=="string"?p=vn(o):(p={...o},xe(!p.pathname||!p.pathname.includes("?"),Jl("?","pathname","search",p)),xe(!p.pathname||!p.pathname.includes("#"),Jl("#","pathname","hash",p)),xe(!p.search||!p.search.includes("#"),Jl("#","search","hash",p)));let m=o===""||p.pathname==="",v=m?"/":p.pathname,N;if(v==null)N=s;else{let E=c.length-1;if(!f&&v.startsWith("..")){let I=v.split("/");for(;I[0]==="..";)I.shift(),E-=1;p.pathname=I.join("/")}N=E>=0?c[E]:"/"}let j=up(p,N),C=v&&v!=="/"&&v.endsWith("/"),b=(m||v===".")&&s.endsWith("/");return!j.pathname.endsWith("/")&&(C||b)&&(j.pathname+="/"),j}var _t=o=>o.join("/").replace(/\/\/+/g,"/"),dp=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),fp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,pp=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,mp=class{constructor(o,c,s,f=!1){this.status=o,this.statusText=c||"",this.internal=f,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function hp(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function gp(o){return o.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var bc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ec(o,c){let s=o;if(typeof s!="string"||!sp.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let f=s,p=!1;if(bc)try{let m=new URL(window.location.href),v=s.startsWith("//")?new URL(m.protocol+s):new URL(s),N=Tt(v.pathname,c);v.origin===m.origin&&N!=null?s=N+v.search+v.hash:p=!0}catch{ht(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:f,isExternal:p,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cc=["POST","PUT","PATCH","DELETE"];new Set(Cc);var vp=["GET",...Cc];new Set(vp);var $n=S.createContext(null);$n.displayName="DataRouter";var Ji=S.createContext(null);Ji.displayName="DataRouterState";var xp=S.createContext(!1),Rc=S.createContext({isTransitioning:!1});Rc.displayName="ViewTransition";var yp=S.createContext(new Map);yp.displayName="Fetchers";var wp=S.createContext(null);wp.displayName="Await";var lt=S.createContext(null);lt.displayName="Navigation";var Tr=S.createContext(null);Tr.displayName="Location";var St=S.createContext({outlet:null,matches:[],isDataRoute:!1});St.displayName="Route";var io=S.createContext(null);io.displayName="RouteError";var zc="REACT_ROUTER_ERROR",kp="REDIRECT",jp="ROUTE_ERROR_RESPONSE";function Sp(o){if(o.startsWith(`${zc}:${kp}:{`))try{let c=JSON.parse(o.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Np(o){if(o.startsWith(`${zc}:${jp}:{`))try{let c=JSON.parse(o.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new mp(c.status,c.statusText,c.data)}catch{}}function bp(o,{relative:c}={}){xe(Ir(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:f}=S.useContext(lt),{hash:p,pathname:m,search:v}=Mr(o,{relative:c}),N=m;return s!=="/"&&(N=m==="/"?s:_t([s,m])),f.createHref({pathname:N,search:v,hash:p})}function Ir(){return S.useContext(Tr)!=null}function tn(){return xe(Ir(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Tr).location}var Pc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lc(o){S.useContext(lt).static||S.useLayoutEffect(o)}function Ep(){let{isDataRoute:o}=S.useContext(St);return o?Bp():Cp()}function Cp(){xe(Ir(),"useNavigate() may be used only in the context of a <Router> component.");let o=S.useContext($n),{basename:c,navigator:s}=S.useContext(lt),{matches:f}=S.useContext(St),{pathname:p}=tn(),m=JSON.stringify(Sc(f)),v=S.useRef(!1);return Lc(()=>{v.current=!0}),S.useCallback((j,C={})=>{if(ht(v.current,Pc),!v.current)return;if(typeof j=="number"){s.go(j);return}let b=Nc(j,JSON.parse(m),p,C.relative==="path");o==null&&c!=="/"&&(b.pathname=b.pathname==="/"?c:_t([c,b.pathname])),(C.replace?s.replace:s.push)(b,C.state,C)},[c,s,m,p,o])}var Rp=S.createContext(null);function zp(o){let c=S.useContext(St).outlet;return S.useMemo(()=>c&&S.createElement(Rp.Provider,{value:o},c),[c,o])}function Mr(o,{relative:c}={}){let{matches:s}=S.useContext(St),{pathname:f}=tn(),p=JSON.stringify(Sc(s));return S.useMemo(()=>Nc(o,JSON.parse(p),f,c==="path"),[o,p,f,c])}function Pp(o,c){return _c(o,c)}function _c(o,c,s,f,p){xe(Ir(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=S.useContext(lt),{matches:v}=S.useContext(St),N=v[v.length-1],j=N?N.params:{},C=N?N.pathname:"/",b=N?N.pathnameBase:"/",E=N&&N.route;{let F=E&&E.path||"";Ic(C,!E||F.endsWith("*")||F.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${C}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F==="/"?"*":`${F}/*`}">.`)}let I=tn(),$;if(c){let F=typeof c=="string"?vn(c):c;xe(b==="/"||F.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${F.pathname}" was given in the \`location\` prop.`),$=F}else $=I;let X=$.pathname||"/",O=X;if(b!=="/"){let F=b.replace(/^\//,"").split("/");O="/"+X.replace(/^\//,"").split("/").slice(F.length).join("/")}let T=wc(o,{pathname:O});ht(E||T!=null,`No routes matched location "${$.pathname}${$.search}${$.hash}" `),ht(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${$.pathname}${$.search}${$.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Mp(T&&T.map(F=>Object.assign({},F,{params:Object.assign({},j,F.params),pathname:_t([b,m.encodeLocation?m.encodeLocation(F.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?b:_t([b,m.encodeLocation?m.encodeLocation(F.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:F.pathnameBase])})),v,s,f,p);return c&&Y?S.createElement(Tr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...$},navigationType:"POP"}},Y):Y}function Lp(){let o=Up(),c=hp(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,f="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:f},m={padding:"2px 4px",backgroundColor:f},v=null;return console.error("Error handled by React Router default ErrorBoundary:",o),v=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:m},"ErrorBoundary")," or"," ",S.createElement("code",{style:m},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},c),s?S.createElement("pre",{style:p},s):null,v)}var _p=S.createElement(Lp,null),Tc=class extends S.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,c){return c.location!==o.location||c.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:c.error,location:c.location,revalidation:o.revalidation||c.revalidation}}componentDidCatch(o,c){this.props.onError?this.props.onError(o,c):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const s=Np(o.digest);s&&(o=s)}let c=o!==void 0?S.createElement(St.Provider,{value:this.props.routeContext},S.createElement(io.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?S.createElement(Tp,{error:o},c):c}};Tc.contextType=xp;var ql=new WeakMap;function Tp({children:o,error:c}){let{basename:s}=S.useContext(lt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let f=Sp(c.digest);if(f){let p=ql.get(c);if(p)throw p;let m=Ec(f.location,s);if(bc&&!ql.get(c))if(m.isExternal||f.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:f.replace}));throw ql.set(c,v),v}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return o}function Ip({routeContext:o,match:c,children:s}){let f=S.useContext($n);return f&&f.static&&f.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=c.route.id),S.createElement(St.Provider,{value:o},s)}function Mp(o,c=[],s=null,f=null,p=null){if(o==null){if(!s)return null;if(s.errors)o=s.matches;else if(c.length===0&&!s.initialized&&s.matches.length>0)o=s.matches;else return null}let m=o,v=s?.errors;if(v!=null){let b=m.findIndex(E=>E.route.id&&v?.[E.route.id]!==void 0);xe(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),m=m.slice(0,Math.min(m.length,b+1))}let N=!1,j=-1;if(s)for(let b=0;b<m.length;b++){let E=m[b];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(j=b),E.route.id){let{loaderData:I,errors:$}=s,X=E.route.loader&&!I.hasOwnProperty(E.route.id)&&(!$||$[E.route.id]===void 0);if(E.route.lazy||X){N=!0,j>=0?m=m.slice(0,j+1):m=[m[0]];break}}}let C=s&&f?(b,E)=>{f(b,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:gp(s.matches),errorInfo:E})}:void 0;return m.reduceRight((b,E,I)=>{let $,X=!1,O=null,T=null;s&&($=v&&E.route.id?v[E.route.id]:void 0,O=E.route.errorElement||_p,N&&(j<0&&I===0?(Ic("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,T=null):j===I&&(X=!0,T=E.route.hydrateFallbackElement||null)));let Y=c.concat(m.slice(0,I+1)),F=()=>{let J;return $?J=O:X?J=T:E.route.Component?J=S.createElement(E.route.Component,null):E.route.element?J=E.route.element:J=b,S.createElement(Ip,{match:E,routeContext:{outlet:b,matches:Y,isDataRoute:s!=null},children:J})};return s&&(E.route.ErrorBoundary||E.route.errorElement||I===0)?S.createElement(Tc,{location:s.location,revalidation:s.revalidation,component:O,error:$,children:F(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:C}):F()},null)}function ao(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dp(o){let c=S.useContext($n);return xe(c,ao(o)),c}function Op(o){let c=S.useContext(Ji);return xe(c,ao(o)),c}function Fp(o){let c=S.useContext(St);return xe(c,ao(o)),c}function lo(o){let c=Fp(o),s=c.matches[c.matches.length-1];return xe(s.route.id,`${o} can only be used on routes that contain a unique "id"`),s.route.id}function Ap(){return lo("useRouteId")}function Up(){let o=S.useContext(io),c=Op("useRouteError"),s=lo("useRouteError");return o!==void 0?o:c.errors?.[s]}function Bp(){let{router:o}=Dp("useNavigate"),c=lo("useNavigate"),s=S.useRef(!1);return Lc(()=>{s.current=!0}),S.useCallback(async(p,m={})=>{ht(s.current,Pc),s.current&&(typeof p=="number"?await o.navigate(p):await o.navigate(p,{fromRouteId:c,...m}))},[o,c])}var vc={};function Ic(o,c,s){!c&&!vc[o]&&(vc[o]=!0,ht(!1,s))}S.memo(Wp);function Wp({routes:o,future:c,state:s,onError:f}){return _c(o,void 0,s,f,c)}function Hp(o){return zp(o.context)}function Zt(o){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $p({basename:o="/",children:c=null,location:s,navigationType:f="POP",navigator:p,static:m=!1,unstable_useTransitions:v}){xe(!Ir(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=o.replace(/^\/*/,"/"),j=S.useMemo(()=>({basename:N,navigator:p,static:m,unstable_useTransitions:v,future:{}}),[N,p,m,v]);typeof s=="string"&&(s=vn(s));let{pathname:C="/",search:b="",hash:E="",state:I=null,key:$="default"}=s,X=S.useMemo(()=>{let O=Tt(C,N);return O==null?null:{location:{pathname:O,search:b,hash:E,state:I,key:$},navigationType:f}},[N,C,b,E,I,$,f]);return ht(X!=null,`<Router basename="${N}"> is not able to match the URL "${C}${b}${E}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:S.createElement(lt.Provider,{value:j},S.createElement(Tr.Provider,{children:c,value:X}))}function Vp({children:o,location:c}){return Pp(no(o),c)}function no(o,c=[]){let s=[];return S.Children.forEach(o,(f,p)=>{if(!S.isValidElement(f))return;let m=[...c,p];if(f.type===S.Fragment){s.push.apply(s,no(f.props.children,m));return}xe(f.type===Zt,`[${typeof f.type=="string"?f.type:f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!f.props.index||!f.props.children,"An index route cannot have child routes.");let v={id:f.props.id||m.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,middleware:f.props.middleware,loader:f.props.loader,action:f.props.action,hydrateFallbackElement:f.props.hydrateFallbackElement,HydrateFallback:f.props.HydrateFallback,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.hasErrorBoundary===!0||f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(v.children=no(f.props.children,m)),s.push(v)}),s}var Gi="get",Ki="application/x-www-form-urlencoded";function qi(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Qp(o){return qi(o)&&o.tagName.toLowerCase()==="button"}function Yp(o){return qi(o)&&o.tagName.toLowerCase()==="form"}function Gp(o){return qi(o)&&o.tagName.toLowerCase()==="input"}function Kp(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Xp(o,c){return o.button===0&&(!c||c==="_self")&&!Kp(o)}var Yi=null;function Jp(){if(Yi===null)try{new FormData(document.createElement("form"),0),Yi=!1}catch{Yi=!0}return Yi}var qp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zl(o){return o!=null&&!qp.has(o)?(ht(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ki}"`),null):o}function Zp(o,c){let s,f,p,m,v;if(Yp(o)){let N=o.getAttribute("action");f=N?Tt(N,c):null,s=o.getAttribute("method")||Gi,p=Zl(o.getAttribute("enctype"))||Ki,m=new FormData(o)}else if(Qp(o)||Gp(o)&&(o.type==="submit"||o.type==="image")){let N=o.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=o.getAttribute("formaction")||N.getAttribute("action");if(f=j?Tt(j,c):null,s=o.getAttribute("formmethod")||N.getAttribute("method")||Gi,p=Zl(o.getAttribute("formenctype"))||Zl(N.getAttribute("enctype"))||Ki,m=new FormData(N,o),!Jp()){let{name:C,type:b,value:E}=o;if(b==="image"){let I=C?`${C}.`:"";m.append(`${I}x`,"0"),m.append(`${I}y`,"0")}else C&&m.append(C,E)}}else{if(qi(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Gi,f=null,p=Ki,v=o}return m&&p==="text/plain"&&(v=m,m=void 0),{action:f,method:s.toLowerCase(),encType:p,formData:m,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function oo(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function em(o,c,s,f){let p=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return s?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${f}`:p.pathname=`${p.pathname}.${f}`:p.pathname==="/"?p.pathname=`_root.${f}`:c&&Tt(p.pathname,c)==="/"?p.pathname=`${c.replace(/\/$/,"")}/_root.${f}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${f}`,p}async function tm(o,c){if(o.id in c)return c[o.id];try{let s=await import(o.module);return c[o.id]=s,s}catch(s){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nm(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function rm(o,c,s){let f=await Promise.all(o.map(async p=>{let m=c.routes[p.route.id];if(m){let v=await tm(m,s);return v.links?v.links():[]}return[]}));return om(f.flat(1).filter(nm).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function xc(o,c,s,f,p,m){let v=(j,C)=>s[C]?j.route.id!==s[C].route.id:!0,N=(j,C)=>s[C].pathname!==j.pathname||s[C].route.path?.endsWith("*")&&s[C].params["*"]!==j.params["*"];return m==="assets"?c.filter((j,C)=>v(j,C)||N(j,C)):m==="data"?c.filter((j,C)=>{let b=f.routes[j.route.id];if(!b||!b.hasLoader)return!1;if(v(j,C)||N(j,C))return!0;if(j.route.shouldRevalidate){let E=j.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function im(o,c,{includeHydrateFallback:s}={}){return am(o.map(f=>{let p=c.routes[f.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),s&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function am(o){return[...new Set(o)]}function lm(o){let c={},s=Object.keys(o).sort();for(let f of s)c[f]=o[f];return c}function om(o,c){let s=new Set;return new Set(c),o.reduce((f,p)=>{let m=JSON.stringify(lm(p));return s.has(m)||(s.add(m),f.push({key:m,link:p})),f},[])}function Mc(){let o=S.useContext($n);return oo(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function sm(){let o=S.useContext(Ji);return oo(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var so=S.createContext(void 0);so.displayName="FrameworkContext";function Dc(){let o=S.useContext(so);return oo(o,"You must render this element inside a <HydratedRouter> element"),o}function um(o,c){let s=S.useContext(so),[f,p]=S.useState(!1),[m,v]=S.useState(!1),{onFocus:N,onBlur:j,onMouseEnter:C,onMouseLeave:b,onTouchStart:E}=c,I=S.useRef(null);S.useEffect(()=>{if(o==="render"&&v(!0),o==="viewport"){let O=Y=>{Y.forEach(F=>{v(F.isIntersecting)})},T=new IntersectionObserver(O,{threshold:.5});return I.current&&T.observe(I.current),()=>{T.disconnect()}}},[o]),S.useEffect(()=>{if(f){let O=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(O)}}},[f]);let $=()=>{p(!0)},X=()=>{p(!1),v(!1)};return s?o!=="intent"?[m,I,{}]:[m,I,{onFocus:Lr(N,$),onBlur:Lr(j,X),onMouseEnter:Lr(C,$),onMouseLeave:Lr(b,X),onTouchStart:Lr(E,$)}]:[!1,I,{}]}function Lr(o,c){return s=>{o&&o(s),s.defaultPrevented||c(s)}}function cm({page:o,...c}){let{router:s}=Mc(),f=S.useMemo(()=>wc(s.routes,o,s.basename),[s.routes,o,s.basename]);return f?S.createElement(fm,{page:o,matches:f,...c}):null}function dm(o){let{manifest:c,routeModules:s}=Dc(),[f,p]=S.useState([]);return S.useEffect(()=>{let m=!1;return rm(o,c,s).then(v=>{m||p(v)}),()=>{m=!0}},[o,c,s]),f}function fm({page:o,matches:c,...s}){let f=tn(),{future:p,manifest:m,routeModules:v}=Dc(),{basename:N}=Mc(),{loaderData:j,matches:C}=sm(),b=S.useMemo(()=>xc(o,c,C,m,f,"data"),[o,c,C,m,f]),E=S.useMemo(()=>xc(o,c,C,m,f,"assets"),[o,c,C,m,f]),I=S.useMemo(()=>{if(o===f.pathname+f.search+f.hash)return[];let O=new Set,T=!1;if(c.forEach(F=>{let J=m.routes[F.route.id];!J||!J.hasLoader||(!b.some(ae=>ae.route.id===F.route.id)&&F.route.id in j&&v[F.route.id]?.shouldRevalidate||J.hasClientLoader?T=!0:O.add(F.route.id))}),O.size===0)return[];let Y=em(o,N,p.unstable_trailingSlashAwareDataRequests,"data");return T&&O.size>0&&Y.searchParams.set("_routes",c.filter(F=>O.has(F.route.id)).map(F=>F.route.id).join(",")),[Y.pathname+Y.search]},[N,p.unstable_trailingSlashAwareDataRequests,j,f,m,b,c,o,v]),$=S.useMemo(()=>im(E,m),[E,m]),X=dm(E);return S.createElement(S.Fragment,null,I.map(O=>S.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...s})),$.map(O=>S.createElement("link",{key:O,rel:"modulepreload",href:O,...s})),X.map(({key:O,link:T})=>S.createElement("link",{key:O,nonce:s.nonce,...T,crossOrigin:T.crossOrigin??s.crossOrigin})))}function pm(...o){return c=>{o.forEach(s=>{typeof s=="function"?s(c):s!=null&&(s.current=c)})}}var mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mm&&(window.__reactRouterVersion="7.13.0")}catch{}function hm({basename:o,children:c,unstable_useTransitions:s,window:f}){let p=S.useRef();p.current==null&&(p.current=Vf({window:f,v5Compat:!0}));let m=p.current,[v,N]=S.useState({action:m.action,location:m.location}),j=S.useCallback(C=>{s===!1?N(C):S.startTransition(()=>N(C))},[s]);return S.useLayoutEffect(()=>m.listen(j),[m,j]),S.createElement($p,{basename:o,children:c,location:v.location,navigationType:v.action,navigator:m,unstable_useTransitions:s})}var Oc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,en=S.forwardRef(function({onClick:c,discover:s="render",prefetch:f="none",relative:p,reloadDocument:m,replace:v,state:N,target:j,to:C,preventScrollReset:b,viewTransition:E,unstable_defaultShouldRevalidate:I,...$},X){let{basename:O,unstable_useTransitions:T}=S.useContext(lt),Y=typeof C=="string"&&Oc.test(C),F=Ec(C,O);C=F.to;let J=bp(C,{relative:p}),[ae,se,he]=um(f,$),ye=ym(C,{replace:v,state:N,target:j,preventScrollReset:b,relative:p,viewTransition:E,unstable_defaultShouldRevalidate:I,unstable_useTransitions:T});function be(Fe){c&&c(Fe),Fe.defaultPrevented||ye(Fe)}let Oe=S.createElement("a",{...$,...he,href:F.absoluteURL||J,onClick:F.isExternal||m?c:be,ref:pm(X,se),target:j,"data-discover":!Y&&s==="render"?"true":void 0});return ae&&!Y?S.createElement(S.Fragment,null,Oe,S.createElement(cm,{page:J})):Oe});en.displayName="Link";var gm=S.forwardRef(function({"aria-current":c="page",caseSensitive:s=!1,className:f="",end:p=!1,style:m,to:v,viewTransition:N,children:j,...C},b){let E=Mr(v,{relative:C.relative}),I=tn(),$=S.useContext(Ji),{navigator:X,basename:O}=S.useContext(lt),T=$!=null&&Nm(E)&&N===!0,Y=X.encodeLocation?X.encodeLocation(E).pathname:E.pathname,F=I.pathname,J=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;s||(F=F.toLowerCase(),J=J?J.toLowerCase():null,Y=Y.toLowerCase()),J&&O&&(J=Tt(J,O)||J);const ae=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let se=F===Y||!p&&F.startsWith(Y)&&F.charAt(ae)==="/",he=J!=null&&(J===Y||!p&&J.startsWith(Y)&&J.charAt(Y.length)==="/"),ye={isActive:se,isPending:he,isTransitioning:T},be=se?c:void 0,Oe;typeof f=="function"?Oe=f(ye):Oe=[f,se?"active":null,he?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof m=="function"?m(ye):m;return S.createElement(en,{...C,"aria-current":be,className:Oe,ref:b,style:Fe,to:v,viewTransition:N},typeof j=="function"?j(ye):j)});gm.displayName="NavLink";var vm=S.forwardRef(({discover:o="render",fetcherKey:c,navigate:s,reloadDocument:f,replace:p,state:m,method:v=Gi,action:N,onSubmit:j,relative:C,preventScrollReset:b,viewTransition:E,unstable_defaultShouldRevalidate:I,...$},X)=>{let{unstable_useTransitions:O}=S.useContext(lt),T=jm(),Y=Sm(N,{relative:C}),F=v.toLowerCase()==="get"?"get":"post",J=typeof N=="string"&&Oc.test(N),ae=se=>{if(j&&j(se),se.defaultPrevented)return;se.preventDefault();let he=se.nativeEvent.submitter,ye=he?.getAttribute("formmethod")||v,be=()=>T(he||se.currentTarget,{fetcherKey:c,method:ye,navigate:s,replace:p,state:m,relative:C,preventScrollReset:b,viewTransition:E,unstable_defaultShouldRevalidate:I});O&&s!==!1?S.startTransition(()=>be()):be()};return S.createElement("form",{ref:X,method:F,action:Y,onSubmit:f?j:ae,...$,"data-discover":!J&&o==="render"?"true":void 0})});vm.displayName="Form";function xm(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fc(o){let c=S.useContext($n);return xe(c,xm(o)),c}function ym(o,{target:c,replace:s,state:f,preventScrollReset:p,relative:m,viewTransition:v,unstable_defaultShouldRevalidate:N,unstable_useTransitions:j}={}){let C=Ep(),b=tn(),E=Mr(o,{relative:m});return S.useCallback(I=>{if(Xp(I,c)){I.preventDefault();let $=s!==void 0?s:_r(b)===_r(E),X=()=>C(o,{replace:$,state:f,preventScrollReset:p,relative:m,viewTransition:v,unstable_defaultShouldRevalidate:N});j?S.startTransition(()=>X()):X()}},[b,C,E,s,f,c,o,p,m,v,N,j])}var wm=0,km=()=>`__${String(++wm)}__`;function jm(){let{router:o}=Fc("useSubmit"),{basename:c}=S.useContext(lt),s=Ap(),f=o.fetch,p=o.navigate;return S.useCallback(async(m,v={})=>{let{action:N,method:j,encType:C,formData:b,body:E}=Zp(m,c);if(v.navigate===!1){let I=v.fetcherKey||km();await f(I,s,v.action||N,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:b,body:E,formMethod:v.method||j,formEncType:v.encType||C,flushSync:v.flushSync})}else await p(v.action||N,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:b,body:E,formMethod:v.method||j,formEncType:v.encType||C,replace:v.replace,state:v.state,fromRouteId:s,flushSync:v.flushSync,viewTransition:v.viewTransition})},[f,p,c,s])}function Sm(o,{relative:c}={}){let{basename:s}=S.useContext(lt),f=S.useContext(St);xe(f,"useFormAction must be used inside a RouteContext");let[p]=f.matches.slice(-1),m={...Mr(o||".",{relative:c})},v=tn();if(o==null){m.search=v.search;let N=new URLSearchParams(m.search),j=N.getAll("index");if(j.some(b=>b==="")){N.delete("index"),j.filter(E=>E).forEach(E=>N.append("index",E));let b=N.toString();m.search=b?`?${b}`:""}}return(!o||o===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:_t([s,m.pathname])),_r(m)}function Nm(o,{relative:c}={}){let s=S.useContext(Rc);xe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:f}=Fc("useViewTransitionState"),p=Mr(o,{relative:c});if(!s.isTransitioning)return!1;let m=Tt(s.currentLocation.pathname,f)||s.currentLocation.pathname,v=Tt(s.nextLocation.pathname,f)||s.nextLocation.pathname;return Xi(p.pathname,v)!=null||Xi(p.pathname,m)!=null}const eo=[{label:"Home",href:"/"},{label:"Experience",href:"/experience"},{label:"Teaching",href:"/teaching"},{label:"Projects",href:"/projects"},{label:"Skills",href:"/skills"},{label:"Contact",href:"/contact"}];function xn(){const o=tn(),[c,s]=S.useState(!1),[f,p]=S.useState(!1),[m,v]=S.useState(null),[N,j]=S.useState(!1);S.useEffect(()=>{const b=()=>s(window.scrollY>10);return window.addEventListener("scroll",b,{passive:!0}),()=>window.removeEventListener("scroll",b)},[]),S.useEffect(()=>(document.body.style.overflow=f?"hidden":"",()=>{document.body.style.overflow=""}),[f]),S.useEffect(()=>{const b=()=>{window.innerWidth>=768&&p(!1)};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const C=b=>b==="/"?o.pathname==="/":o.pathname.startsWith(b);return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsxs("nav",{className:c?"nav-scrolled":"",style:{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px clamp(20px, 5vw, 60px)",borderBottom:"1px solid transparent",transition:"all 0.3s"},children:[l.jsx(en,{to:"/",className:"logo-glitch",onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),style:{fontFamily:"var(--font-mono), monospace",fontSize:"0.7rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"#00ffff",textDecoration:"none",flexShrink:0,animation:N?"neonPulse 1.5s ease-in-out infinite":"none",transition:"all 0.3s",position:"relative",textShadow:N?"0 0 10px rgba(0,255,255,0.5), 0 0 20px rgba(0,255,255,0.2)":"none"},children:l.jsxs("span",{style:{position:"relative"},children:["AK // LUMS '26",N&&l.jsx("span",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, transparent 50%, rgba(0,255,255,0.1) 50%)",backgroundSize:"100% 4px",animation:"scanLine 2s linear infinite",pointerEvents:"none"}})]})}),l.jsx("ul",{className:"nav-desktop-links",children:eo.map((b,E)=>l.jsx("li",{className:"nav-link-group",onMouseEnter:()=>v(E),onMouseLeave:()=>v(null),style:{opacity:m!==null&&m!==E?.5:1,transition:"opacity 0.3s"},children:l.jsxs(en,{to:b.href,className:"nav-link",style:{color:C(b.href)?"#e0e0e0":"#999",transform:m===E?"translateY(-1px)":"none"},children:[m===E&&l.jsx("span",{style:{position:"absolute",width:"4px",height:"4px",borderRadius:"50%",background:"#00ffff",boxShadow:"0 0 10px rgba(0,255,255,0.8)",animation:"magneticOrbit 1.5s linear infinite"}}),b.label]})},b.label))}),l.jsxs("button",{className:`hamburger-btn${f?" open":""}`,onClick:()=>p(!f),"aria-label":f?"Close menu":"Open menu","aria-expanded":f,style:{borderColor:f?"#00ffff":void 0,boxShadow:f?"0 0 15px rgba(0,255,255,0.3)":void 0},children:[l.jsx("span",{className:"hamburger-line"}),l.jsx("span",{className:"hamburger-line"}),l.jsx("span",{className:"hamburger-line"})]})]}),l.jsx("div",{className:`mobile-overlay${f?" open":""}`,onClick:()=>p(!1),"aria-hidden":"true"}),l.jsxs("div",{className:`mobile-drawer${f?" open":""}`,role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[l.jsxs("div",{className:"drawer-top",children:[l.jsx("span",{style:{fontFamily:"var(--font-mono), monospace",fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"#999"},children:"// navigation"}),l.jsx("button",{className:"drawer-close",onClick:()=>p(!1),"aria-label":"Close menu",children:"✕"})]}),l.jsx("nav",{style:{flex:1},children:eo.map((b,E)=>l.jsxs(en,{to:b.href,className:`drawer-link${C(b.href)?" active-link":""}`,style:{animationDelay:`${E*.055}s`},onClick:()=>p(!1),children:[b.label,l.jsx("span",{className:"link-arrow",children:"→"})]},b.label))}),l.jsx("a",{href:"/resume.pdf",download:!0,className:"drawer-resume",style:{animationDelay:`${eo.length*.055}s`},onClick:()=>p(!1),children:"↓ Download Resume"}),l.jsx("div",{style:{padding:"16px 24px",borderTop:"1px solid rgba(255,255,255,0.05)",fontFamily:"var(--font-mono), monospace",fontSize:"0.5rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"#999",flexShrink:0},children:"Abid Karim · CS · LUMS 2026"})]})]})}const bm=()=>l.jsxs("div",{className:"relative min-h-screen bg-black text-white overflow-hidden",children:[l.jsx("div",{className:"fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"}),l.jsx(xn,{}),l.jsx("main",{children:l.jsx(Hp,{})})]}),Em="/portifolio/assets/me-Tc22_3uG.jpeg",Cm=()=>l.jsx("style",{children:`
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
  `}),yc=["AI Backend Engineer","LUMS CS 2026","LLM Pipeline Design","RAG Systems","Open to Work","Vector Databases","API Infrastructure","Full Stack Capable","Technical Mentor"],Rm=[{val:"3",lbl:"TA Positions"},{val:"2",lbl:"Tech Internships"},{val:"550+",lbl:"Students Impacted"},{val:"1",lbl:"Directed Research"}],zm=["RAG","LangChain","FastAPI","LLM APIs","PostgreSQL","Vector DBs","Django","Docker","CI/CD","WebSockets"],Pm=["MERN","TypeScript","Node.js","React"],Lm=[{num:"01",cat:"Professional",title:"Experience",desc:"Full-stack software engineering internship at 10Pearls and a financial data internship using SQL & Python at a startup.",color:"var(--cyan)",to:"/experience"},{num:"02",cat:"Academic",title:"Teaching",desc:"3 TA positions across CS core courses, mentoring 550+ students.",color:"var(--green)",to:"/teaching"},{num:"03",cat:"Personal & Academic",title:"Projects",desc:"AI-powered backend systems and applications built through personal and university projects.",color:"var(--orange)",to:"/projects"}];function _m(){return l.jsxs("div",{className:"hero-right anim-fade-in-5",children:[l.jsxs("div",{className:"photo-frame",children:[l.jsx("img",{src:Em,alt:"Abid Karim"}),l.jsx("span",{className:"photo-tag",children:"Abid Karim · LUMS '26"})]}),l.jsxs("div",{className:"hero-panel",style:{background:"var(--surface)",border:"1px solid var(--border2)",padding:"24px"},children:[l.jsx("div",{className:"panel-label",style:{fontFamily:"var(--font-mono)",fontSize:"0.58rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"20px",display:"flex",alignItems:"center"},children:"profile.json"}),l.jsx("div",{className:"stats-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--border)",marginBottom:"20px"},children:Rm.map(o=>l.jsxs("div",{className:"stat",style:{background:"var(--surface)",padding:"18px 14px"},children:[l.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.6rem, 3vw, 2.4rem)",letterSpacing:"0.02em",color:"var(--cyan)",lineHeight:1},children:o.val}),l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.52rem",letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--muted)",marginTop:"4px"},children:o.lbl})]},o.lbl))}),l.jsxs("div",{style:{background:"var(--bg3)",border:"1px solid var(--border)",padding:"14px"},children:[l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.56rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"10px"},children:"// ai backend stack"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:zm.map(o=>l.jsx("span",{className:"pill",children:o},o))}),l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.56rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",margin:"12px 0 10px"},children:"// also fluent in"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:Pm.map(o=>l.jsx("span",{className:"pill",style:{opacity:.6},children:o},o))})]})]})]})}function Tm(){const o=[...yc,...yc];return l.jsx("div",{className:"ticker-wrapper",style:{borderTop:"1px solid var(--border)",padding:"16px clamp(20px, 5vw, 60px)",overflow:"hidden",position:"relative",zIndex:2},children:l.jsx("div",{className:"ticker-inner",children:o.map((c,s)=>l.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.58rem",letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--muted)",display:"flex",alignItems:"center",gap:"12px",flexShrink:0},children:[c," ",l.jsx("span",{style:{color:"var(--cyan)"},children:"·"})]},s))})})}function Im(){return l.jsxs("section",{className:"nav-cards-section",style:{padding:"80px clamp(20px, 5vw, 60px)",maxWidth:1400,margin:"0 auto",position:"relative",zIndex:2},children:[l.jsxs("div",{className:"sec-head reveal",style:{marginBottom:40},children:[l.jsx("div",{className:"sec-label",children:"Navigate"}),l.jsxs("h2",{className:"sec-title",children:["Explore my ",l.jsx("span",{children:"work"})]})]}),l.jsx("div",{className:"nav-cards-grid",children:Lm.map(o=>l.jsx(en,{to:o.to,style:{textDecoration:"none"},className:"reveal",children:l.jsxs("div",{className:"nav-card",style:{background:"var(--surface)",border:"1px solid var(--border)",padding:"clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 32px)",position:"relative",overflow:"hidden",cursor:"pointer",height:"100%"},children:[l.jsx("div",{className:"card-accent",style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:o.color,transform:"scaleX(0)",transformOrigin:"left",transition:"transform 0.35s ease"}}),l.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.5rem, 5vw, 4rem)",color:"var(--border2)",lineHeight:1,marginBottom:"20px"},children:o.num}),l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:o.color,marginBottom:"10px"},children:o.cat}),l.jsx("div",{style:{fontSize:"1.2rem",fontWeight:500,color:"var(--text)",marginBottom:"12px"},children:o.title}),l.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text2)",lineHeight:1.7},children:o.desc})]})},o.num))})]})}function Mm(){const o=S.useRef(null);return S.useEffect(()=>(o.current=new IntersectionObserver(c=>{c.forEach((s,f)=>{s.isIntersecting&&(setTimeout(()=>s.target.classList.add("visible"),f*80),o.current?.unobserve(s.target))})},{threshold:.08}),document.querySelectorAll(".reveal").forEach(c=>{o.current?.observe(c)}),()=>o.current?.disconnect()),[]),l.jsxs(l.Fragment,{children:[l.jsx(Cm,{}),l.jsx("div",{className:"grid-bg"}),l.jsx(xn,{}),l.jsx("div",{className:"side-label",children:"Abid Karim · CS · 2026"}),l.jsxs("section",{id:"hero",style:{minHeight:"100vh",display:"grid",gridTemplateRows:"1fr auto",position:"relative",overflow:"hidden"},children:[l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"scanline"}),l.jsxs("div",{className:"hero-inner",children:[l.jsxs("div",{className:"hero-left",children:[l.jsxs("div",{className:"hero-status anim-fade-up-0",style:{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--green)",border:"1px solid rgba(0,255,136,0.25)",padding:"6px 14px",marginBottom:"36px",background:"var(--green-dim)"},children:[l.jsx("div",{className:"status-dot"}),"Open to full-time, Remote, & internship roles"]}),l.jsxs("h1",{className:"hero-name anim-fade-up-1",style:{fontFamily:"var(--font-display)",fontSize:"clamp(4.5rem, 11vw, 11rem)",lineHeight:.88,letterSpacing:"0.02em",color:"var(--text)",marginBottom:"8px"},children:[l.jsx("span",{className:"first",style:{display:"block"},children:"Abid"}),l.jsx("span",{className:"last",children:"Karim"})]}),l.jsx("div",{className:"hero-title anim-fade-up-2",style:{fontFamily:"var(--font-mono)",fontSize:"clamp(0.6rem, 1.5vw, 0.75rem)",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"32px",display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"},children:"AI Backend Engineer · Full Stack · CS @ LUMS"}),l.jsx("p",{className:"hero-bio anim-fade-up-3",style:{fontSize:"clamp(0.9rem, 1.5vw, 1rem)",color:"var(--text2)",lineHeight:1.9,maxWidth:"520px",marginBottom:"44px",fontWeight:300},children:"Computer Science graduate from LUMS specialising in AI backend systems — LLM pipelines, RAG architectures, and production API infrastructure. I design intelligent systems that are fast, reliable, and built to scale. Full-stack capable across the Python, Node.js & React.js with TypeScript ecosystem when the product demands it."}),l.jsxs("div",{className:"hero-actions anim-fade-up-4",children:[l.jsx(en,{to:"/contact",className:"btn btn-primary",children:"Let's Connect →"}),l.jsx(en,{to:"/projects",className:"btn btn-ghost",children:"View Projects"}),l.jsx("a",{href:"/resume.pdf",download:!0,className:"btn btn-ghost",children:"↓ Resume"})]})]}),l.jsx(_m,{})]}),l.jsx(Tm,{})]}),l.jsx(Im,{})]})}const Dm=({company:o,date:c,type:s,role:f,description:p,bullets:m,tags:v,index:N})=>{const j=S.useRef(null);return S.useEffect(()=>{const C=new IntersectionObserver(b=>{b.forEach(E=>{E.isIntersecting&&(setTimeout(()=>{E.target.classList.add("opacity-100","translate-y-0"),E.target.classList.remove("opacity-0","translate-y-8")},N*120),C.unobserve(E.target))})},{threshold:.1});return j.current&&C.observe(j.current),()=>C.disconnect()},[N]),l.jsxs("div",{ref:j,className:"timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out",style:{display:"grid",gridTemplateColumns:"280px 1fr",marginBottom:"2px"},children:[l.jsxs("div",{className:"timeline-left",children:[l.jsx("div",{className:"timeline-dot"}),l.jsx("h2",{className:"timeline-company",children:o}),l.jsx("div",{className:"timeline-date",children:c}),l.jsx("span",{className:"timeline-type",children:s})]}),l.jsxs("div",{className:"timeline-right",children:[l.jsx("div",{className:"card-accent"}),l.jsx("div",{className:"timeline-role",children:f}),p&&l.jsx("p",{className:"timeline-description",children:p}),m&&l.jsx("ul",{className:"timeline-bullets",children:m.map((C,b)=>l.jsxs("li",{className:"timeline-bullet-item",children:[l.jsx("span",{className:"bullet-arrow",children:"▸"}),l.jsx("span",{dangerouslySetInnerHTML:{__html:C}})]},b))}),l.jsx("div",{className:"timeline-tags",children:v.map((C,b)=>l.jsx("span",{className:"tag-pill",children:C},b))})]})]})},Om=()=>{const o=[{company:"10Pearls",date:"2025",type:"Internship",role:"Software Engineering Intern",description:"Worked as part of a professional product engineering team at a leading digital transformation company. Contributed to building a full-stack web application using the MERN stack with TypeScript, under the guidance of a technical mentor. Gained hands-on experience across the full Software Development Life Cycle (SDLC) in a real Agile environment, including sprint planning, code reviews, and production deployments.",tags:["MERN Stack","TypeScript","Agile","Code Review","SDLC","Production"]},{company:"Wetual PVT",date:"2025",type:"Internship",role:"Financial Data Analyst",description:"Worked at an early-stage startup focused on financial data analysis and investment operations. Analyzed financial datasets using Python and SQL to extract actionable insights, supported the drafting of SAFE agreements for fundraising rounds, and conducted outreach to over 50 startups achieving a 95% positive response rate. Gained exposure to startup finance operations and data-driven decision making.",tags:["Python","SQL","Excel","Financial Analysis","SAFE Agreements","Startup Outreach"]},{company:"LUMS Senior Year Project",date:"Full Year · 2025–2026",type:"Team Lead",role:"Software Engineer — CI/CD & AI Backend",bullets:["Led a team of 5 developers in building an AI-powered maternal motherhood application designed to help mothers care for their children more efficiently through intelligent, data-driven features.",'Owned the <strong style="color: #e8edf2; font-weight: 500;">CI/CD pipeline</strong> — designed and configured automated build, test, and deployment workflows to enforce quality gates and streamline releases.','Designed and implemented a <strong style="color: #e8edf2; font-weight: 500;">multi-tenant RAG system</strong> powering intelligent, context-aware features for the Motherhood app.','Engineered a <strong style="color: #e8edf2; font-weight: 500;">database AI agent</strong> enabling natural-language querying over relational data, integrating LLM outputs with structured databases using FastAPI. Leveraged Llama.cpp to run a local Qwen model for low-latency, privacy-preserving inference.'],tags:["Team Leadership","CI/CD","RAG","LLM","Multi-tenant","FastAPI","Llama.cpp","Qwen"]},{company:"LUMS Directed Research",date:"Research Assistantship",type:"Research",role:"Backend Engineer Assistant",description:"Contributed to a faculty-supervised research project focused on identifying common security risks in modern applications—such as XSS attacks, CSRF vulnerabilities, and insecure authentication flows—and exploring mitigation strategies. Assisted in designing and developing backend systems using FastAPI to prototype and test research findings, including implementing authentication mechanisms, building RESTful APIs, and structuring the data layer while applying strong system design principles.",tags:["FastAPI","Authentication","REST APIs","System Design","Backend","Security"]}];return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"orb orb-3"}),l.jsx("div",{className:"scanline"}),l.jsx(xn,{}),l.jsx("div",{className:"side-label",children:"Experience · Timeline"}),l.jsx("div",{className:"page-counter",children:"01 / 05"}),l.jsxs("div",{className:"hero-section",children:[l.jsxs("div",{children:[l.jsx("div",{className:"anim-fade-up-0",style:{fontFamily:"var(--font-mono)",fontSize:"0.65rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"16px"},children:"Professional & Research"}),l.jsxs("h1",{className:"anim-fade-up-1",style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 6vw, 5rem)",letterSpacing:"0.02em",color:"var(--text)",lineHeight:1,fontWeight:400},children:["Work",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Experience"})]})]}),l.jsxs("div",{className:"anim-fade-up-2",style:{fontFamily:"var(--font-mono)",fontSize:"0.58rem",letterSpacing:"0.16em",color:"var(--text2)",textAlign:"right",lineHeight:2},children:[l.jsx("div",{children:"Internships"}),l.jsx("div",{children:"Research Roles"}),l.jsx("div",{children:"Project Leadership"})]})]}),l.jsxs("div",{className:"timeline-section",children:[l.jsx("div",{className:"timeline-line"}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:o.map((c,s)=>l.jsx(Dm,{...c,index:s},s))})]})]})},Fm=()=>{const o=S.useRef(null);return S.useEffect(()=>(o.current=new IntersectionObserver(c=>{c.forEach((s,f)=>{s.isIntersecting&&(setTimeout(()=>{s.target.classList.add("opacity-100","translate-y-0"),s.target.classList.remove("opacity-0","translate-y-8")},f*100),o.current?.unobserve(s.target))})},{threshold:.05}),document.querySelectorAll(".reveal").forEach(c=>{o.current?.observe(c)}),()=>o.current?.disconnect()),[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"scanline"}),l.jsx(xn,{}),l.jsx("div",{className:"side-label",children:"Teaching · Assistantships"}),l.jsx("div",{className:"page-counter",children:"02 / 05"}),l.jsxs("div",{className:"page-hero",children:[l.jsx("div",{className:"sec-label anim-fade-up-0",children:"Academic · LUMS"}),l.jsxs("h1",{className:"sec-title anim-fade-up-1",children:["Teaching",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Assistantships"})]})]}),l.jsxs("div",{className:"impact-bar reveal",children:[l.jsxs("div",{className:"impact-cell",children:[l.jsx("div",{className:"impact-num",children:"3"}),l.jsxs("div",{children:[l.jsx("div",{className:"impact-label",children:"TA Positions"}),l.jsx("div",{className:"impact-desc",children:"Across core CS courses at LUMS"})]})]}),l.jsxs("div",{className:"impact-cell",children:[l.jsxs("div",{className:"impact-num",children:["550",l.jsx("span",{style:{fontSize:"1.5rem",color:"var(--text2)"},children:"+"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"impact-label",children:"Students Impacted"}),l.jsx("div",{className:"impact-desc",children:"Mentored, graded, guided"})]})]}),l.jsxs("div",{className:"impact-cell",children:[l.jsx("div",{className:"impact-num",children:"4"}),l.jsxs("div",{children:[l.jsx("div",{className:"impact-label",children:"Years at LUMS"}),l.jsx("div",{className:"impact-desc",children:"Graduated CS Class of 2026"})]})]})]}),l.jsxs("div",{className:"ta-section",children:[l.jsxs("div",{className:"ta-grid",children:[l.jsxs("div",{className:"ta-card reveal",children:[l.jsx("div",{className:"ta-bg-code",children:"100"}),l.jsx("div",{className:"ta-code-label",children:"CS-100"}),l.jsx("div",{className:"ta-name",children:"Computational Thinking & Problem Solving"}),l.jsx("div",{className:"ta-lang",children:"C++ · Logic · Algorithms"}),l.jsx("p",{className:"ta-desc",children:"Assisted students in developing algorithmic thinking and structured problem decomposition. Supported lab sessions and provided hands-on guidance through weekly programming assignments."})]}),l.jsxs("div",{className:"ta-card reveal",children:[l.jsx("div",{className:"ta-bg-code",children:"200"}),l.jsx("div",{className:"ta-code-label",children:"CS-200"}),l.jsx("div",{className:"ta-name",children:"Introduction to Programming"}),l.jsx("div",{className:"ta-lang",children:"C / C++ · OOP · Data Structures"}),l.jsx("p",{className:"ta-desc",children:"Supported students learning C and C++ with a focus on object-oriented programming and core data structures. Ran lab sessions, helped debug code, and graded programming projects."})]}),l.jsxs("div",{className:"ta-card reveal",children:[l.jsx("div",{className:"ta-bg-code",children:"360"}),l.jsx("div",{className:"ta-code-label",children:"CS-360"}),l.jsx("div",{className:"ta-name",children:"Software Engineering"}),l.jsx("div",{className:"ta-lang",children:"Java · Android SDK · Git · GitHub"}),l.jsx("p",{className:"ta-desc",children:"Guided students through SE principles and Android development in Java. Assisted labs as students built Android apps, covering version control, design patterns, and engineering best practices."})]})]}),l.jsxs("div",{className:"ta-responsibilities reveal",children:[l.jsx("div",{className:"resp-title",children:"// what i did as a TA"}),l.jsxs("div",{className:"resp-grid",children:[l.jsxs("div",{children:[l.jsx("div",{className:"resp-icon",children:"01"}),l.jsx("div",{className:"resp-label",children:"Lab Facilitation"}),l.jsx("div",{className:"resp-desc",children:"Led weekly lab sessions, walking students through programming tasks, debugging live code, and reinforcing lecture concepts with hands-on practice."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"resp-icon",children:"02"}),l.jsx("div",{className:"resp-label",children:"Assessment & Grading"}),l.jsx("div",{className:"resp-desc",children:"Graded programming assignments and projects with detailed feedback, maintaining consistency and fairness across large student cohorts."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"resp-icon",children:"03"}),l.jsx("div",{className:"resp-label",children:"Office Hours & Mentorship"}),l.jsx("div",{className:"resp-desc",children:"Held office hours to provide 1-on-1 support, helping students overcome conceptual barriers and debugging challenges in C++, Java, and data structures."})]})]})]})]})]})},Am="/portifolio/assets/nurra-BcyOzcRo.jpeg",Um="/portifolio/assets/lumspire-_aD7fLMu.jpeg",Bm="/portifolio/assets/carawan-C5DqkdLv.jpeg",Wm=()=>{const o=S.useRef(null);return S.useEffect(()=>(o.current=new IntersectionObserver(s=>{s.forEach((f,p)=>{f.isIntersecting&&(setTimeout(()=>{f.target.classList.add("opacity-100","translate-y-0"),f.target.classList.remove("opacity-0","translate-y-8")},p*120),o.current?.unobserve(f.target))})},{threshold:.05}),document.querySelectorAll(".reveal").forEach(s=>{o.current?.observe(s)}),document.querySelectorAll(".proj-block").forEach(s=>{const f=s.querySelector("video, img");f&&(s.addEventListener("mouseenter",()=>{f.style.opacity="1",f.style.transform="scale(1.03)"}),s.addEventListener("mouseleave",()=>{f.style.opacity="0.85",f.style.transform="scale(1)"}))}),()=>o.current?.disconnect()),[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"orb orb-3"}),l.jsx("div",{className:"scanline"}),l.jsx(xn,{}),l.jsx("div",{className:"side-label",children:"Projects · Portfolio"}),l.jsx("div",{className:"page-counter",children:"03 / 05"}),l.jsxs("div",{className:"page-hero",children:[l.jsxs("div",{children:[l.jsx("div",{className:"sec-label anim-fade-up-0",children:"Built from scratch"}),l.jsxs("h1",{className:"sec-title anim-fade-up-1",children:["Personal & Academic",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Projects"})]})]}),l.jsx("p",{className:"page-hero-right anim-fade-up-2",children:"Full-stack applications engineered end-to-end — from architecture decisions to production deployments. Real problems, real users, real constraints."})]}),l.jsxs("div",{className:"projects-wrap",children:[l.jsxs("div",{className:"proj-block reveal",children:[l.jsxs("div",{className:"proj-media desktop-screenshot",children:[l.jsx("img",{src:Am,alt:"Nurra Motherhood App"}),l.jsx("div",{className:"proj-media-overlay"}),l.jsx("div",{className:"proj-num-overlay",children:"01"})]}),l.jsxs("div",{className:"proj-content",children:[l.jsx("div",{className:"proj-num",children:"Senior Year Capstone · 01"}),l.jsx("h2",{className:"proj-title",children:"Nurra"}),l.jsx("div",{className:"proj-tagline",children:"Motherhood App · AI-Powered · Team Lead"}),l.jsx("p",{className:"proj-desc",children:"Led a team of 5 developers to build a comprehensive motherhood application supporting mothers through child care with intelligent, data-driven features. Integrated cutting-edge AI capabilities for a truly assistive experience."}),l.jsxs("ul",{className:"proj-highlights",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Vaccination tracking"})," with reminders for upcoming doses"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Secure record-keeping"})," for child health data & growth tracking"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Community forum"})," for mothers to connect and share experiences"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Library of tutorials"})," and learning resources"]}),l.jsxs("li",{children:["Integrated ",l.jsx("strong",{children:"multi-tenant RAG system"})," & SQL agent AI assistant for child growth, vaccinations, and parenting queries"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Local AI inference"})," using LLaMA.cpp with Qwen2.5:4B model; Gemini for production"]})]}),l.jsxs("div",{className:"proj-tech",children:[l.jsx("span",{className:"proj-tech-tag",children:"React"}),l.jsx("span",{className:"proj-tech-tag",children:"TypeScript"}),l.jsx("span",{className:"proj-tech-tag",children:"Tailwind CSS"}),l.jsx("span",{className:"proj-tech-tag",children:"FastAPI"}),l.jsx("span",{className:"proj-tech-tag",children:"PostgreSQL"}),l.jsx("span",{className:"proj-tech-tag",children:"MongoDB"}),l.jsx("span",{className:"proj-tech-tag",children:"LLaMA.cpp"}),l.jsx("span",{className:"proj-tech-tag",children:"Qwen2.5"}),l.jsx("span",{className:"proj-tech-tag",children:"Gemini API"}),l.jsx("span",{className:"proj-tech-tag",children:"FAISS"}),l.jsx("span",{className:"proj-tech-tag",children:"ChromaDB"}),l.jsx("span",{className:"proj-tech-tag",children:"RAG"}),l.jsx("span",{className:"proj-tech-tag",children:"Multi-tenant"})]}),l.jsxs("div",{className:"proj-links",children:[l.jsxs("a",{href:"https://github.com/abidkarim74/SeniorYearProject_MotherhoodApp-FastAPI_React",target:"_blank",rel:"noopener noreferrer",className:"proj-link",children:[l.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})}),"GitHub"]}),l.jsx("a",{href:"#",className:"proj-link secondary",children:"Live Demo N/A"})]})]})]}),l.jsxs("div",{className:"proj-block flip reveal",children:[l.jsxs("div",{className:"proj-media desktop-screenshot",children:[l.jsx("img",{src:Bm,alt:"CampusCaravan Screenshot"}),l.jsx("div",{className:"proj-media-overlay"}),l.jsx("div",{className:"proj-num-overlay",children:"02"})]}),l.jsxs("div",{className:"proj-content",children:[l.jsx("div",{className:"proj-num",children:"Software Engineering Course · 02"}),l.jsx("h2",{className:"proj-title",children:"Campus Caravan"}),l.jsx("div",{className:"proj-tagline",children:"Carpooling · 150+ Users · Jan–May 2024"}),l.jsx("p",{className:"proj-desc",children:"Led a team of 5 to design and ship a full-featured carpooling platform for the LUMS community, achieving 150+ sign-ups and reducing commuting costs by an estimated 40%."}),l.jsxs("ul",{className:"proj-highlights",children:[l.jsxs("li",{children:["Built backend with ",l.jsx("strong",{children:"Node.js, TypeScript, PostgreSQL"})," — owned architecture, schema design, and query optimization."]}),l.jsxs("li",{children:["Implemented ",l.jsx("strong",{children:"real-time chat"})," via WebSockets for live driver-rider coordination."]}),l.jsxs("li",{children:["Integrated ",l.jsx("strong",{children:"Gemini API"})," for AI-powered content moderation."]}),l.jsxs("li",{children:["Secured with ",l.jsx("strong",{children:"JWT auth"})," using HTTP-only cookies."]}),l.jsxs("li",{children:["Optimized queries improving search performance by ",l.jsx("strong",{children:"30%"}),"."]})]}),l.jsxs("div",{className:"proj-tech",children:[l.jsx("span",{className:"proj-tech-tag",children:"Node.js"}),l.jsx("span",{className:"proj-tech-tag",children:"TypeScript"}),l.jsx("span",{className:"proj-tech-tag",children:"Express"}),l.jsx("span",{className:"proj-tech-tag",children:"React"}),l.jsx("span",{className:"proj-tech-tag",children:"PostgreSQL"}),l.jsx("span",{className:"proj-tech-tag",children:"WebSockets"}),l.jsx("span",{className:"proj-tech-tag",children:"Gemini API"}),l.jsx("span",{className:"proj-tech-tag",children:"JWT"})]}),l.jsx("div",{className:"proj-links",children:l.jsxs("a",{href:"https://github.com/abidkarim74/Software-Engineering-CS-360-PERN-Stack",target:"_blank",rel:"noopener noreferrer",className:"proj-link",children:[l.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})}),"GitHub"]})})]})]}),l.jsxs("div",{className:"proj-block reveal",children:[l.jsxs("div",{className:"proj-media desktop-screenshot",children:[l.jsx("img",{src:Um,alt:"Lumspire Fashion Platform"}),l.jsx("div",{className:"proj-media-overlay"}),l.jsx("div",{className:"proj-num-overlay",children:"03"})]}),l.jsxs("div",{className:"proj-content",children:[l.jsx("div",{className:"proj-num",children:"Personal Project · 03"}),l.jsx("h2",{className:"proj-title",children:"Lumspire"}),l.jsx("div",{className:"proj-tagline",children:"MERN Stack · Real-time · Visual-first"}),l.jsx("p",{className:"proj-desc",children:"A real-time fashion and visual discovery platform where users can explore, share, and organize fashion content through an intuitive, interactive interface. Focused on fluid UX, real-time updates, and visual-first content organization."}),l.jsxs("div",{className:"proj-tech",children:[l.jsx("span",{className:"proj-tech-tag",children:"MongoDB"}),l.jsx("span",{className:"proj-tech-tag",children:"Express"}),l.jsx("span",{className:"proj-tech-tag",children:"React"}),l.jsx("span",{className:"proj-tech-tag",children:"Node.js"}),l.jsx("span",{className:"proj-tech-tag",children:"REST API"}),l.jsx("span",{className:"proj-tech-tag",children:"Real-time"})]}),l.jsxs("div",{className:"proj-links",children:[l.jsxs("a",{href:"https://github.com/abidkarim74/Visual-Discovery-Fashion-Web-App---MERN-Stack-",target:"_blank",rel:"noopener noreferrer",className:"proj-link",children:[l.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})}),"GitHub"]}),l.jsx("a",{href:"#",className:"proj-link secondary",children:"Live Demo N/A"})]})]})]})]})]})},Hm=()=>{const o=S.useRef(null),c=S.useRef(null);return S.useEffect(()=>{o.current=new IntersectionObserver(f=>{f.forEach((p,m)=>{p.isIntersecting&&(setTimeout(()=>{p.target.classList.add("opacity-100","translate-y-0"),p.target.classList.remove("opacity-0","translate-y-8")},m*100),o.current?.unobserve(p.target))})},{threshold:.05}),document.querySelectorAll(".reveal").forEach(f=>{o.current?.observe(f)});const s=new IntersectionObserver(f=>{f[0].isIntersecting&&(document.querySelectorAll(".prof-item").forEach((m,v)=>{const N=m,j=N.dataset.pct;setTimeout(()=>{const C=N.querySelector(".prof-fill");C&&(C.style.width=j+"%")},v*80+300)}),s.unobserve(f[0].target))},{threshold:.2});return c.current&&s.observe(c.current),()=>{o.current?.disconnect(),s.disconnect()}},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"scanline"}),l.jsx(xn,{}),l.jsx("div",{className:"side-label",children:"Skills · Expertise"}),l.jsx("div",{className:"page-counter",children:"04 / 05"}),l.jsxs("div",{className:"page-hero",children:[l.jsx("div",{className:"sec-label anim-fade-up-0",children:"Technical Toolkit"}),l.jsxs("h1",{className:"sec-title anim-fade-up-1",children:["Skills &",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Expertise"})]})]}),l.jsxs("div",{className:"skills-wrap",children:[l.jsxs("div",{className:"skills-grid",children:[l.jsxs("div",{className:"skill-cat reveal",children:[l.jsxs("div",{className:"cat-header",children:[l.jsx("div",{className:"cat-icon",children:l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("polyline",{points:"16,18 22,12 16,6"}),l.jsx("polyline",{points:"8,6 2,12 8,18"})]})}),l.jsx("div",{className:"cat-name",children:"Languages"})]}),l.jsxs("div",{className:"skill-items",children:[l.jsx("span",{className:"skill-chip",children:"Java"}),l.jsx("span",{className:"skill-chip",children:"TypeScript"}),l.jsx("span",{className:"skill-chip",children:"JavaScript"}),l.jsx("span",{className:"skill-chip",children:"Python"}),l.jsx("span",{className:"skill-chip",children:"C / C++"}),l.jsx("span",{className:"skill-chip",children:"SQL"}),l.jsx("span",{className:"skill-chip",children:"HTML / CSS"})]})]}),l.jsxs("div",{className:"skill-cat reveal",children:[l.jsxs("div",{className:"cat-header",children:[l.jsx("div",{className:"cat-icon",children:l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),l.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),l.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})}),l.jsx("div",{className:"cat-name",children:"Frameworks & Platforms"})]}),l.jsxs("div",{className:"skill-items",children:[l.jsx("span",{className:"skill-chip",children:"React.js"}),l.jsx("span",{className:"skill-chip",children:"Node.js"}),l.jsx("span",{className:"skill-chip",children:"Express.js"}),l.jsx("span",{className:"skill-chip",children:"FastAPI"}),l.jsx("span",{className:"skill-chip",children:"Django"}),l.jsx("span",{className:"skill-chip",children:"Fastify.js"})]})]}),l.jsxs("div",{className:"skill-cat reveal",children:[l.jsxs("div",{className:"cat-header",children:[l.jsx("div",{className:"cat-icon",children:l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),l.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),l.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]})}),l.jsx("div",{className:"cat-name",children:"Databases & DevOps"})]}),l.jsxs("div",{className:"skill-items",children:[l.jsx("span",{className:"skill-chip",children:"MongoDB"}),l.jsx("span",{className:"skill-chip",children:"PostgreSQL"}),l.jsx("span",{className:"skill-chip",children:"Git / GitHub"}),l.jsx("span",{className:"skill-chip",children:"CI/CD"}),l.jsx("span",{className:"skill-chip",children:"Docker"}),l.jsx("span",{className:"skill-chip",children:"Kubernetes"})]})]}),l.jsxs("div",{className:"skill-cat reveal",children:[l.jsxs("div",{className:"cat-header",children:[l.jsx("div",{className:"cat-icon",children:l.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"})})}),l.jsx("div",{className:"cat-name",children:"AI & Architecture"})]}),l.jsxs("div",{className:"skill-items",children:[l.jsx("span",{className:"skill-chip",children:"RAG Systems"}),l.jsx("span",{className:"skill-chip",children:"LLM Integration"}),l.jsx("span",{className:"skill-chip",children:"Multi-tenant Design"}),l.jsx("span",{className:"skill-chip",children:"Gemini API"}),l.jsx("span",{className:"skill-chip",children:"System Design"}),l.jsx("span",{className:"skill-chip",children:"OOP & Design Patterns"}),l.jsx("span",{className:"skill-chip",children:"Agile / Scrum"})]})]})]}),l.jsxs("div",{className:"proficiency-section reveal",ref:c,children:[l.jsx("div",{className:"prof-title",children:"// proficiency levels"}),l.jsxs("div",{className:"prof-grid",children:[l.jsxs("div",{className:"prof-item","data-pct":"90",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"Python / FastAPI"}),l.jsx("span",{className:"prof-pct",children:"90%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"85",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"Java / C++"}),l.jsx("span",{className:"prof-pct",children:"85%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"85",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"Node.js / Express"}),l.jsx("span",{className:"prof-pct",children:"85%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"80",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"JavaScript / TypeScript"}),l.jsx("span",{className:"prof-pct",children:"80%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"80",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"React.js"}),l.jsx("span",{className:"prof-pct",children:"80%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"75",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"PostgreSQL / MongoDB"}),l.jsx("span",{className:"prof-pct",children:"75%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"70",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"CI/CD & Docker"}),l.jsx("span",{className:"prof-pct",children:"70%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]}),l.jsxs("div",{className:"prof-item","data-pct":"70",children:[l.jsxs("div",{className:"prof-top",children:[l.jsx("span",{className:"prof-label",children:"AI / RAG Systems"}),l.jsx("span",{className:"prof-pct",children:"70%"})]}),l.jsx("div",{className:"prof-bar",children:l.jsx("div",{className:"prof-fill"})})]})]})]})]})]})},$m="/portifolio/assets/resume-DQ0E6Tvi.pdf",Vm=()=>{const o=S.useRef(null);return S.useEffect(()=>(o.current=new IntersectionObserver(c=>{c.forEach((s,f)=>{s.isIntersecting&&(setTimeout(()=>{s.target.classList.add("opacity-100","translate-y-0"),s.target.classList.remove("opacity-0","translate-y-8")},f*100),o.current?.unobserve(s.target))})},{threshold:.05}),document.querySelectorAll(".reveal").forEach(c=>{o.current?.observe(c)}),()=>o.current?.disconnect()),[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"grid-bg"}),l.jsx("div",{className:"orb orb-1"}),l.jsx("div",{className:"orb orb-2"}),l.jsx("div",{className:"scanline"}),l.jsx(xn,{}),l.jsx("div",{className:"side-label",children:"Contact · Connect"}),l.jsx("div",{className:"page-counter",children:"05 / 05"}),l.jsxs("div",{className:"contact-wrap",children:[l.jsxs("div",{className:"contact-left",children:[l.jsx("div",{className:"contact-ambient",children:"HI"}),l.jsx("div",{className:"contact-kicker",children:"Get in touch"}),l.jsxs("h1",{className:"contact-heading",children:["Let's",l.jsx("br",{}),"build",l.jsx("br",{}),l.jsx("span",{className:"accent",children:"great"}),l.jsx("br",{}),"things."]}),l.jsx("p",{className:"contact-note",children:"Fresh CS graduate from LUMS, actively seeking full-time software engineering roles. Open to backend, full-stack, and AI-adjacent positions. Based in Pakistan, open to relocation."}),l.jsxs("div",{className:"availability-badge",children:[l.jsx("div",{className:"avail-dot"}),l.jsx("span",{className:"avail-text",children:"Available for opportunities"})]})]}),l.jsxs("div",{className:"contact-right",children:[l.jsxs("a",{href:"mailto:karimabid737@gmail.com",className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:l.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"Email"}),l.jsx("div",{className:"contact-value",children:"karimabid737@gmail.com"})]}),l.jsx("span",{className:"contact-arrow",children:"→"})]}),l.jsxs("a",{href:"https://www.linkedin.com/in/abid-karim123/",target:"_blank",rel:"noopener noreferrer",className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),l.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"LinkedIn"}),l.jsx("div",{className:"contact-value",children:"linkedin.com/in/abid-karim123"})]}),l.jsx("span",{className:"contact-arrow",children:"→"})]}),l.jsxs("a",{href:"https://github.com/abidkarim74",target:"_blank",rel:"noopener noreferrer",className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:l.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"GitHub"}),l.jsx("div",{className:"contact-value",children:"github.com/abidkarim74"})]}),l.jsx("span",{className:"contact-arrow",children:"→"})]}),l.jsxs("a",{href:"https://x.com/abid_codes",target:"_blank",rel:"noopener noreferrer",className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M4 4l11.733 16h4.267l-11.733 -16z"}),l.jsx("path",{d:"M4 20l6.768 -6.768m2.46 -2.46L20 4"})]})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"X (Twitter)"}),l.jsx("div",{className:"contact-value",children:"x.com/abid_codes"})]}),l.jsx("span",{className:"contact-arrow",children:"→"})]}),l.jsxs("a",{href:$m,download:!0,className:"contact-item reveal",children:[l.jsx("div",{className:"contact-icon",children:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[l.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),l.jsx("polyline",{points:"14,2 14,8 20,8"}),l.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),l.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]})}),l.jsxs("div",{children:[l.jsx("div",{className:"contact-label",children:"Resume"}),l.jsx("div",{className:"contact-value",children:"Download PDF"})]}),l.jsx("span",{className:"contact-arrow",children:"↓"})]})]}),l.jsxs("div",{className:"contact-footer",children:[l.jsx("p",{children:"© 2026 · Abid Karim · CS @ LUMS"}),l.jsx("p",{children:"Engineered with precision."})]})]})]})};function Qm(){return l.jsx(Vp,{children:l.jsxs(Zt,{element:l.jsx(bm,{}),children:[l.jsx(Zt,{path:"/",element:l.jsx(Mm,{})}),l.jsx(Zt,{path:"/experience",element:l.jsx(Om,{})}),l.jsx(Zt,{path:"/teaching",element:l.jsx(Fm,{})}),l.jsx(Zt,{path:"/projects",element:l.jsx(Wm,{})}),l.jsx(Zt,{path:"/skills",element:l.jsx(Hm,{})}),l.jsx(Zt,{path:"/contact",element:l.jsx(Vm,{})})]})})}$f.createRoot(document.getElementById("root")).render(l.jsx(S.StrictMode,{children:l.jsx(hm,{children:l.jsx(Qm,{})})}));
