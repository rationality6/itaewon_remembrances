(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function ia(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var na="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||na});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function w(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function wa(){this.s=!1;this.m=null;this.i=void 0;this.h=1;this.G=this.l=0;this.D=this.j=null}
function xa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
wa.prototype.la=function(a){this.i=a};
function ya(a,b){a.j={exception:b,sd:!0};a.h=a.l||a.G}
wa.prototype.return=function(a){this.j={return:a};this.h=this.G};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.v=function(a){this.h=a};
function za(a,b,c){a.l=b;void 0!=c&&(a.G=c)}
function Aa(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.D.splice(0)[0];(b=a.j=a.j||b)?b.sd?a.h=a.l||a.G:void 0!=b.v&&a.G<b.v?(a.h=b.v,a.j=null):a.h=a.G:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.m=null,ya(a.h,g),Ga(a)}a.h.m=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.sd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m.next,b,a.h.la):(a.h.la(b),b=Ga(a));return b};
this.throw=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m["throw"],b,a.h.la):(ya(a.h,b),b=Ga(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return qa});
u("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.S(g):this.G(g)}};
b.prototype.S=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.G(g)};
b.prototype.m=function(g){this.la(2,g)};
b.prototype.G=function(g){this.la(1,g)};
b.prototype.la=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.R()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.R=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.ac(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:p}
var l,n,r=new b(function(t,p){l=t;n=p});
this.ac(k(g,l),k(h,n));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ac=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).ac(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function r(x){return function(y){t[x]=y;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).ac(r(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&la(h[0],l))for(h=0;h<n.length;h++){var r=n[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:h,entry:r}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||va});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a){for(var b in a)return!1;return!0}
function ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){if(void 0===vb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}vb=a}else vb=a}return vb}
;function xb(){}
function yb(a){return new xb(zb,a)}
var zb={};yb("");var Ab={};function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h.toString()};function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){if(a instanceof Cb&&a.constructor===Cb)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Fb(a){var b=wb();a=b?b.createScriptURL(a):a;return new Cb(a,Eb)}
;var Gb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Hb(a){this.h=a}
Hb.prototype.toString=function(){return this.h.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);var Kb,Lb=E("CLOSURE_FLAGS"),Mb=Lb&&Lb[610401301];Kb=null!=Mb?Mb:!1;function Nb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ob,Pb=C.navigator;Ob=Pb?Pb.userAgentData||null:null;function Qb(a){return Kb?Ob?Ob.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Nb().indexOf(a)}
;function Rb(){return Kb?!!Ob&&0<Ob.brands.length:!1}
function Sb(){return Rb()?!1:F("Opera")}
function Tb(){return Rb()?!1:F("Trident")||F("MSIE")}
function Ub(){return F("Firefox")||F("FxiOS")}
function Vb(){return Rb()?Qb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Rb()?0:F("Edge"))||F("Silk")}
;function Wb(a){this.h=a}
Wb.prototype.toString=function(){return this.h.toString()};function Xb(){a:{var a=C.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a))break a;a=""}return a}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function fc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ic(a,b){var c=[];for(b=b||0;b<a.length;b+=2)hc(a[b],a[b+1],c);return c.join("&")}
function jc(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function kc(a,b){var c=2==arguments.length?ic(arguments[1],0):ic(arguments,1);return fc(a,c)}
function lc(a,b){b=jc(b);return fc(a,b)}
function mc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return fc(a,b+c)}
function nc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var oc=/#|$/,pc=/[?&]($|#)/;function qc(a,b){for(var c=a.search(oc),d=0,e,f=[];0<=(e=nc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(pc,"$1")}
;function rc(a){this.gd=a}
;function sc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.rb=new Map}
m=sc.prototype;m.Td=function(a){var b=B.apply(1,arguments),c=this.Cc(b);c?c.push(new rc(a)):this.Fd(a,b)};
m.Fd=function(a){var b=this.nd(B.apply(1,arguments));this.rb.set(b,[new rc(a)])};
m.Cc=function(){var a=this.nd(B.apply(0,arguments));return this.rb.has(a)?this.rb.get(a):void 0};
m.me=function(){var a=this.Cc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.rb.clear()};
m.nd=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function tc(a,b){sc.call(this,a,3,b)}
w(tc,sc);tc.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.me(b);d&&(c=d.gd);this.Fd(c+a,b)};function uc(a,b){sc.call(this,a,2,b)}
w(uc,sc);uc.prototype.record=function(a){this.Td(a,B.apply(1,arguments))};function vc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?wc.apply(null,d):vc(d)}}
;function G(){this.la=this.la;this.G=this.G}
G.prototype.la=!1;G.prototype.Z=function(){return this.la};
G.prototype.dispose=function(){this.la||(this.la=!0,this.M())};
function xc(a,b){yc(a,Va(vc,b))}
function yc(a,b){a.la?b():(a.G||(a.G=[]),a.G.push(b))}
G.prototype.M=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function zc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
zc.prototype.stopPropagation=function(){this.j=!0};
zc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ac(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Bc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Cc[c])c=Cc[c];else{c=String(c);if(!Cc[c]){var f=/function\s+([^\(]+)/m.exec(c);Cc[c]=f?f[1]:"[Anonymous]"}c=Cc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Bc(a,b){b||(b={});b[Dc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Dc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Bc(a,b));return c}
function Dc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Cc={};var Ec=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Fc(){return Kb?!!Ob&&!!Ob.platform:!1}
function Gc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Hc(a){Hc[" "](a);return a}
Hc[" "]=function(){};var Ic=Sb(),Jc=Tb(),Kc=F("Edge"),Lc=F("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Mc=-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge");Mc&&F("Mobile");Fc()||F("Macintosh");Fc()||F("Windows");(Fc()?"Linux"===Ob.platform:F("Linux"))||Fc()||F("CrOS");var Nc=C.navigator||null;Nc&&(Nc.appVersion||"").indexOf("X11");var Oc=Fc()?"Android"===Ob.platform:F("Android");Gc();F("iPad");F("iPod");Gc()||F("iPad")||F("iPod");Nb().toLowerCase().indexOf("kaios");
function Pc(){var a=C.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Nb();if(Lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kc)return/Edge\/([\d\.]+)/.exec(a);if(Jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mc)return/WebKit\/(\S+)/.exec(a);if(Ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Jc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Vc;if(C.document&&Jc){var Wc=Pc();Vc=Wc?Wc:parseInt(Uc,10)||void 0}else Vc=void 0;var Xc=Vc;function Yc(a,b){zc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(Yc,zc);var Zc={2:"touch",3:"pen",4:"mouse"};
Yc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Lc){a:{try{Hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Zc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Yc.Aa.preventDefault.call(this)};
Yc.prototype.stopPropagation=function(){Yc.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Yc.prototype.preventDefault=function(){Yc.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $c="closure_listenable_"+(1E6*Math.random()|0);var ad=0;function bd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.fc=e;this.key=++ad;this.Ub=this.Zb=!1}
function cd(a){a.Ub=!0;a.listener=null;a.proxy=null;a.src=null;a.fc=null}
;function dd(a){this.src=a;this.listeners={};this.h=0}
dd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ed(a,b,d,e);-1<g?(b=a[g],c||(b.Zb=!1)):(b=new bd(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
dd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ed(e,b,c,d);return-1<b?(cd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function fd(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(cd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ed(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ub&&f.listener==b&&f.capture==!!c&&f.fc==d)return e}return-1}
;var gd="closure_lm_"+(1E6*Math.random()|0),hd={},id=0;function jd(a,b,c,d,e){if(d&&d.once)kd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)jd(a,b[f],c,d,e);else c=ld(c),a&&a[$c]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):md(a,b,c,!1,d,e)}
function md(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=nd(a);h||(a[gd]=h=new dd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=od();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ec||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(pd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");id++}}
function od(){function a(c){return b.call(a.src,a.listener,c)}
var b=qd;return a}
function kd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)kd(a,b[f],c,d,e);else c=ld(c),a&&a[$c]?a.h.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):md(a,b,c,!0,d,e)}
function rd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)rd(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=ld(c),a&&a[$c])?a.h.remove(String(b),c,d,e):a&&(a=nd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ed(b,c,d,e)),(c=-1<a?b[a]:null)&&sd(c))}
function sd(a){if("number"!==typeof a&&a&&!a.Ub){var b=a.src;if(b&&b[$c])fd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(pd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);id--;(c=nd(b))?(fd(c,a),0==c.h&&(c.src=null,b[gd]=null)):cd(a)}}}
function pd(a){return a in hd?hd[a]:hd[a]="on"+a}
function qd(a,b){if(a.Ub)a=!0;else{b=new Yc(b,this);var c=a.listener,d=a.fc||a.src;a.Zb&&sd(a);a=c.call(d,b)}return a}
function nd(a){a=a[gd];return a instanceof dd?a:null}
var td="__closure_events_fn_"+(1E9*Math.random()>>>0);function ld(a){if("function"===typeof a)return a;a[td]||(a[td]=function(b){return a.handleEvent(b)});
return a[td]}
;function ud(){G.call(this);this.h=new dd(this);this.Ja=this;this.ea=null}
Xa(ud,G);ud.prototype[$c]=!0;m=ud.prototype;m.addEventListener=function(a,b,c,d){jd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){rd(this,a,b,c,d)};
function vd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Ja;c=b.type||b;"string"===typeof b?b=new zc(b,a):b instanceof zc?b.target=b.target||a:(e=b,b=new zc(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=wd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=wd(g,c,!0,b)&&e,b.j||(e=wd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=wd(g,c,!1,b)&&e}
m.M=function(){ud.Aa.M.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,cd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function wd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ub&&g.capture==c){var h=g.listener,k=g.fc||g.src;g.Zb&&fd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function xd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
xd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function yd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function zd(a,b){return a+Math.random()*(b-a)}
;function Ad(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Ad.prototype;m.clone=function(){return new Ad(this.x,this.y)};
m.equals=function(a){return a instanceof Ad&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Bd(a,b){this.width=a;this.height=b}
m=Bd.prototype;m.clone=function(){return new Bd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Pb=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Cd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Dd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ed(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Fd;function Gd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Dd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ed;c.ed=null;e()}};
return function(e){d.next={ed:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Hd(a){C.setTimeout(function(){throw a;},0)}
;function Id(){this.i=this.h=null}
Id.prototype.add=function(a,b){var c=Jd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Id.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Jd=new xd(function(){return new Kd},function(a){return a.reset()});
function Kd(){this.next=this.scope=this.h=null}
Kd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Kd.prototype.reset=function(){this.next=this.scope=this.h=null};var Ld,Md=!1,Nd=new Id;function Od(a,b){Ld||Pd();Md||(Ld(),Md=!0);Nd.add(a,b)}
function Pd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Ld=function(){a.then(Qd)}}else Ld=function(){var b=Qd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Rb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Fd||(Fd=Gd()),Fd(b)):C.setImmediate(b)}}
function Qd(){for(var a;a=Nd.remove();){try{a.h.call(a.scope)}catch(b){Hd(b)}yd(Jd,a)}Md=!1}
;function Rd(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.G=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Sd(b,2,c)},function(c){Sd(b,3,c)})}catch(c){Sd(this,3,c)}}
function Td(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Td.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Ud=new xd(function(){return new Td},function(a){a.reset()});
function Vd(a,b,c){var d=Ud.get();d.i=a;d.h=b;d.context=c;return d}
function Wd(a){return new Rd(function(b,c){c(a)})}
Rd.prototype.then=function(a,b,c){return Xd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Rd.prototype.$goog_Thenable=!0;m=Rd.prototype;m.vc=function(a,b){return Xd(this,null,a,b)};
m.catch=Rd.prototype.vc;m.cancel=function(a){if(0==this.h){var b=new Yd(a);Od(function(){Zd(this,b)},this)}};
function Zd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Zd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):$d(c),ae(c,e,3,b)))}a.j=null}else Sd(a,3,b)}
function be(a,b){a.i||2!=a.h&&3!=a.h||ce(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Xd(a,b,c,d){var e=Vd(null,null,null);e.child=new Rd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Yd?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;be(a,e);return e.child}
m.hf=function(a){this.h=0;Sd(this,2,a)};
m.jf=function(a){this.h=0;Sd(this,3,a)};
function Sd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.hf,f=a.jf;if(d instanceof Rd){be(d,Vd(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if("function"===typeof k){de(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,ce(a),3!=b||c instanceof Yd||ee(a,c))}}
function de(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ce(a){a.G||(a.G=!0,Od(a.ge,a))}
function $d(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ge=function(){for(var a;a=$d(this);)ae(this,a,this.h,this.s);this.G=!1};
function ae(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,fe(b,c,d);else try{b.j?b.i.call(b.context):fe(b,c,d)}catch(e){ge.call(null,e)}yd(Ud,b)}
function fe(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ee(a,b){a.m=!0;Od(function(){a.m&&ge.call(null,b)})}
var ge=Hd;function Yd(a){Za.call(this,a)}
Xa(Yd,Za);Yd.prototype.name="cancel";function he(a,b){ud.call(this);this.j=a||1;this.i=b||C;this.l=Ua(this.ff,this);this.m=Wa()}
Xa(he,ud);m=he.prototype;m.enabled=!1;m.Fa=null;m.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
m.ff=function(){if(this.enabled){var a=Wa()-this.m;0<a&&a<.8*this.j?this.Fa=this.i.setTimeout(this.l,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),vd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.l,this.j),this.m=Wa())};
m.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
m.M=function(){he.Aa.M.call(this);this.stop();delete this.i};
function ie(a,b,c){if("function"===typeof a)c&&(a=Ua(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ua(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function je(a){G.call(this);this.D=a;this.i=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.h=new he(this.flushInterval);this.h.listen("tick",this.ob,!1,this);xc(this,this.h);this.m=!1}
w(je,G);m=je.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ke(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.ob()}
m.ob=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.rb.size});
a.length&&this.D.flush(a,this.m);le(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Yc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new tc(a,b))};
m.Zc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new uc(a,b))};
function me(a,b){return a.s.has(b)?void 0:a.i.get(b)}
m.wc=function(a){this.Rd.apply(this,[a,1].concat(ka(B.apply(1,arguments))))};
m.Rd=function(a,b){var c=B.apply(2,arguments),d=me(this,a);d&&d instanceof tc&&(d.j(b,c),ke(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=me(this,a);d&&d instanceof uc&&(d.record(b,c),ke(this))};
function le(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function ne(a){this.h=a;this.h.Yc("/client_streamz/bg/fiec",{ub:3,tb:"rk"},{ub:2,tb:"ec"},{ub:3,tb:"em"})}
function oe(a,b,c,d){a.h.wc("/client_streamz/bg/fiec",b,c,d)}
function pe(a){this.h=a;this.h.Zc("/client_streamz/bg/fil",{ub:3,tb:"rk"})}
pe.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function qe(a){this.h=a;this.h.Yc("/client_streamz/bg/fsc",{ub:3,tb:"rk"})}
function re(a){this.h=a;this.h.Zc("/client_streamz/bg/fsl",{ub:3,tb:"rk"})}
re.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var se={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function te(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ue(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ve(a,h),d+=ve(a,h+4),e+=ve(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return se.toString(e)}
function ue(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ve(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Ub();var we=Gc()||F("iPod"),xe=F("iPad");!F("Android")||Vb()||Ub()||Sb()||F("Silk");Vb();var ye=F("Safari")&&!(Vb()||(Rb()?0:F("Coast"))||Sb()||(Rb()?0:F("Edge"))||(Rb()?Qb("Microsoft Edge"):F("Edg/"))||(Rb()?Qb("Opera"):F("OPR"))||Ub()||F("Silk")||F("Android"))&&!(Gc()||F("iPad")||F("iPod"));var ze={},Ae=null;function Be(a,b){Na(a);void 0===b&&(b=0);Ce();b=ze[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function De(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ee(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ee(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ae[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ce();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ce(){if(!Ae){Ae={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ze[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Ae[f]&&(Ae[f]=e)}}}}
;var Fe="undefined"!==typeof Uint8Array,Ge=!Jc&&"function"===typeof btoa;function He(a){if(!Ge)return Be(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ie=/[-_.]/g,Je={"-":"+",_:"/",".":"="};function Ke(a){return Je[a]||""}
function Le(a){return Fe&&null!=a&&a instanceof Uint8Array}
var Me={};var Ne;function Oe(a){if(a!==Me)throw Error("illegal external caller");}
function Pe(a,b){Oe(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Pe.prototype.Pb=function(){return null==this.value_};
Pe.prototype.sizeBytes=function(){Oe(Me);var a=this.value_;if(null!=a&&!Le(a))if("string"===typeof a)if(Ge){Ie.test(a)&&(a=a.replace(Ie,Ke));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=De(a);else Ma(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Qe(a){return Array.prototype.slice.call(a)}
;var Re="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ka(Object.values({Jf:1,Hf:2,Gf:4,Mf:8,Lf:16,Kf:32,zf:64,Nf:128,Ff:256,Ef:512,If:1024})));var Se=Re?function(a,b){a[Re]|=b}:function(a,b){void 0!==a.Da?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Te(a){var b=Ue(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Qe(a)),Ve(a,b|1))}
var We=Re?function(a,b){a[Re]&=~b}:function(a,b){void 0!==a.Da&&(a.Da&=~b)},Ue=Re?function(a){return a[Re]|0}:function(a){return a.Da|0},Xe=Re?function(a){return a[Re]}:function(a){return a.Da},Ve=Re?function(a,b){a[Re]=b}:function(a,b){void 0!==a.Da?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ye(a,b){Object.isFrozen(a)&&(a=Qe(a));Ve(a,b);return a}
function Ze(a){Se(a,1);return a}
function $e(a,b){Ve(b,(a|0)&-255)}
function af(a,b){Ve(b,(a|34)&-221)}
function bf(a){a=a>>11&1023;return 0===a?536870912:a}
;var cf={};function df(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var ef;function ff(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Pe(a,Me):Ne||(Ne=new Pe(null,Me));else if(a.constructor!==Pe)if(Le(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Pe(new Uint8Array(a),Me):Ne||(Ne=new Pe(null,Me));else throw Error();return a}
var gf,hf=[];Ve(hf,39);gf=Object.freeze(hf);function jf(a){if(a&2)throw Error();}
;function kf(a){return a.displayName||a.name||"unknown type name"}
function lf(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ma(a)+": "+a);a=!!a}return a}
var mf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function nf(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)}
function of(a){if(null!=a){if("number"!==typeof a)throw Error();Number.isFinite(a)}return a}
function pf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function qf(a){if(null!=a){if(!nf(a))throw Error();var b=typeof a;("number"===b?Number.isFinite(a):"string"!==b?0:mf.test(a))||Hd(Error());a="string"===typeof a?rf(a):sf(a)}return a}
function sf(a){nf(a);return a}
function rf(a){nf(a);return a}
function tf(a){if("string"!==typeof a)throw Error();return a}
function uf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function vf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+kf(b)+" but got "+(a&&kf(a.constructor)));}
function wf(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Mc===cf)return a;if(d){var e=d=Ue(a);0===e&&(e|=c&32);e|=c&2;e!==d&&Ve(a,e);return new b(a)}}
;var xf;function yf(a,b){Ue(b);xf=b;a=new a(b);xf=void 0;return a}
function zf(a,b,c){null==a&&(a=xf);xf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=Ue(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(df(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Af(c,b,g),e=1023);d=d&-2095105|(e&1023)<<11;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Af(c,g,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}Ve(a,d);return a}
function Af(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Bf(a,b){return Cf(b)}
function Cf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Le(a))return He(a);if(a instanceof Pe){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=He(b)}}}return a}
;function Df(a,b,c){a=Qe(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ef(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Ue(a)&1?void 0:f&&Ue(a)&2?a:Ff(a,b,c,void 0!==d,e,f);else if(df(a)){var g={},h;for(h in a)g[h]=Ef(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Ff(a,b,c,d,e,f){var g=d||c?Ue(a):0;d=d?!!(g&32):void 0;a=Qe(a);for(var h=0;h<a.length;h++)a[h]=Ef(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Gf(a){return a.Mc===cf?a.toJSON():Cf(a)}
;function Hf(a,b,c){c=void 0===c?af:c;if(null!=a){if(Fe&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ue(a);return d&2?a:!b||d&68||!(d&32||0===d)?Ff(a,Hf,d&4?af:c,!0,!1,!0):(Ve(a,d|34),a)}a.Mc===cf&&(b=a.A,c=Xe(b),a=c&2?a:yf(a.constructor,If(b,c,!0)));return a}}
function If(a,b,c){var d=c||b&2?af:$e,e=!!(b&32);a=Df(a,b,function(f){return Hf(f,e,d)});
Se(a,32|(c?2:0));return a}
function Jf(a){var b=a.A,c=Xe(b);return c&2?yf(a.constructor,If(b,c,!1)):a}
;function Kf(a,b){a=a.A;return Lf(a,Xe(a),b)}
function Lf(a,b,c,d){if(-1===c)return null;if(c>=bf(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function J(a,b,c){var d=a.A,e=Xe(d);jf(e);Mf(d,e,b,c);return a}
function Mf(a,b,c,d,e){df(d);var f=bf(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Ve(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Nf(a){return void 0!==Of(a,Pf,11,!1)}
function Qf(a,b,c,d){var e=a.A,f=Xe(e);jf(f);if(null==c)return Mf(e,f,b),a;if(!(Ue(c)&4)){Object.isFrozen(c)&&(c=Qe(c));for(var g=0;g<c.length;g++)c[g]=d(c[g]);Ve(c,5)}Mf(e,f,b,c);return a}
function Rf(a,b,c,d){a=a.A;var e=Xe(a);jf(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Lf(a,e,h)&&(0!==f&&Mf(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Mf(a,e,c);Mf(a,e,b,d)}
function Of(a,b,c,d){a=a.A;var e=Xe(a),f=Lf(a,e,c,d);b=wf(f,b,e);b!==f&&null!=b&&Mf(a,e,c,b,d);return b}
function Sf(a,b,c,d){d=void 0===d?!1:d;b=Of(a,b,c,d);if(null==b)return b;a=a.A;var e=Xe(a);if(!(e&2)){var f=Jf(b);f!==b&&(b=f,Mf(a,e,c,b,d))}return b}
function Tf(a,b,c,d){null!=d?vf(d,b):d=void 0;return J(a,c,d)}
function Uf(a,b,c,d){var e=a.A,f=Xe(e);jf(f);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];vf(k,b);g=g&&!(Ue(k.A)&2)}b=Ue(d);h=b|1;h=(g?h|8:h&-9)|4;h!=b&&(d=Ye(d,h))}null==d&&(d=void 0);Mf(e,f,c,d);return a}
function Vf(a,b){a=Kf(a,b);var c;null==a?c=a:nf(a)?"number"===typeof a?c=sf(a):c=rf(a):c=void 0;return c}
function Wf(a){a=Kf(a,1);a=null==a?a:nf(a)?"string"===typeof a?rf(a):sf(a):void 0;return a}
function Xf(a){return ff(a,!1)}
function Yf(a,b,c){null!=c&&(Number.isFinite(c)||Hd(Error()));return J(a,b,c)}
;function Zf(a,b,c){this.A=zf(a,b,c)}
m=Zf.prototype;m.toJSON=function(){if(ef)var a=$f(this,this.A,!1);else a=Ff(this.A,Gf,void 0,void 0,!1,!1),a=$f(this,a,!0);return a};
m.serialize=function(){ef=!0;try{return JSON.stringify(this.toJSON(),Bf)}finally{ef=!1}};
m.clone=function(){var a=this.A,b=Xe(a);return yf(this.constructor,If(a,b,!1))};
m.Mc=cf;m.toString=function(){return $f(this,this.A,!1).toString()};
function $f(a,b,c){var d=a.constructor.Wa,e=Xe(c?a.A:b),f=bf(e);e=!1;if(d){if(!c){b=Qe(b);var g;if(b.length&&df(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=Xe(a.A);a=bf(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?gf:Ze([]):c&&n!==gf&&Te(n)}else h||(n=void 0,g.length&&df(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?gf:Ze([]):c&&n!==gf&&Te(n)}d=b.length;if(!d)return b;var r;
if(df(h=b[d-1])){a:{var t=h;g={};c=!1;for(var p in t)a=t[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(r=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!r&&!y)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);t&&b.push(t);return b}
;function ag(a){this.A=zf(a)}
w(ag,Zf);var bg=[1,2,3];function cg(a){this.A=zf(a)}
w(cg,Zf);var dg=[1,2,3];function eg(a){this.A=zf(a)}
w(eg,Zf);eg.Wa=[1];function fg(a){this.A=zf(a)}
w(fg,Zf);fg.Wa=[3,6,4];function gg(a){this.A=zf(a)}
w(gg,Zf);gg.Wa=[1];function hg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ig(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var t=g,p=0;64>p;p+=4)t[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(r<<1|r>>>31)&4294967295;r=e[0];var x=e[1],y=e[2],z=e[3],H=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var I=z^x&(y^z);var M=1518500249}else I=x^y^z,M=1859775393;else 60>p?(I=x&y|z&(x|y),M=2400959708):(I=x^y^z,M=3395469782);I=((r<<5|r>>>27)&4294967295)+I+H+M+t[p]&4294967295;H=z;z=y;y=(x<<30|x>>>2)&4294967295;x=r;r=I}e[0]=e[0]+r&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(r,t){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],x=0,y=r.length;x<y;++x)p.push(r.charCodeAt(x));r=p}t||(t=r.length);p=0;if(0==l)for(;p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<t;)if(f[l++]=r[p++],n++,64==l)for(l=0,b(f);p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var x=24;0<=x;x-=8)r[t++]=e[p]>>x&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,be:function(){for(var r=d(),t="",p=0;p<r.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return t}}}
;function jg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,kg(hg(d),a,c||null)].join(" "):null}
function kg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),lg(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=lg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function lg(a){var b=ig();b.update(a);return b.be().toLowerCase()}
;var mg={};function ng(a){this.h=a||{cookie:""}}
m=ng.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Pb())return!0;this.set("TESTCOOKIESENABLED","1",{jc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.fg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.jc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Gb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{jc:0,path:b,domain:c});return d};
m.Fc=function(){return og(this).keys};
m.Pb=function(){return!this.h.cookie};
m.clear=function(){for(var a=og(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function og(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Gb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var pg=new ng("undefined"==typeof document?null:document);function qg(a){return!!mg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function rg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;qg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new ng(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");qg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function sg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new ng(document)).get(b));return a?jg(a,c,d):null}
function tg(a,b){b=void 0===b?!1:b;var c=hg(String(C.location.href)),d=[];if(rg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new ng(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?jg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&qg(b)&&((b=sg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=sg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function ug(a){this.A=zf(a)}
w(ug,Zf);ug.Wa=[2];function vg(a){this.A=zf(a)}
w(vg,Zf);function wg(a){this.A=zf(a)}
w(wg,Zf);function xg(a){this.h=this.i=this.j=a}
xg.prototype.reset=function(){this.h=this.i=this.j};
xg.prototype.getValue=function(){return this.i};function yg(a){this.A=zf(a)}
w(yg,Zf);function zg(a){this.A=zf(a)}
w(zg,Zf);zg.Wa=[1];function Pf(a){this.A=zf(a)}
w(Pf,Zf);var Ag=["platform","platformVersion","architecture","model","uaFullVersion"];new zg;function Bg(a){this.A=zf(a)}
w(Bg,Zf);function Cg(a){this.A=zf(a)}
w(Cg,Zf);function Dg(a){this.A=zf(a,34)}
w(Dg,Zf);Dg.Wa=[3,20,27];function Eg(a){this.A=zf(a,19)}
w(Eg,Zf);Eg.Wa=[3,5];function Fg(a){this.A=zf(a,6)}
w(Fg,Zf);var Gg=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Se(b,32);b=yf(a,b)}return b}}(Fg);
Fg.Wa=[5];function Hg(a){this.A=zf(a)}
w(Hg,Zf);var Jg;Jg=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Sf;this.defaultValue=void 0}(175237375,{Wf:0},Hg);function Kg(a){G.call(this);var b=this;this.componentId="";this.i=[];this.na="";this.Ba=this.ea=-1;this.ma=!1;this.D=this.experimentIds=null;this.Y=this.da=this.s=this.l=0;this.Ja=1;this.timeoutMillis=0;this.R=!1;this.logSource=a.logSource;this.vb=a.vb||function(){};
this.j=new Lg(a.logSource,a.zb);this.network=a.network;this.Gb=a.Gb||null;this.bufferSize=1E3;this.pb=Va(zd,0,1);this.W=a.kf||null;this.sessionIndex=a.sessionIndex||null;this.Nb=a.Nb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.kd;this.zb=a.zb||!1;var c=Yf(new Bg,1,1);Mg(this.j,c);this.m=new xg(1E4);this.h=new he(this.m.getValue());xc(this,this.h);a=Ng(this,a.bd);jd(this.h,"tick",a,!1,this);this.S=new he(6E5);xc(this,this.S);jd(this.S,"tick",a,!1,this);this.Nb||this.S.start();
this.zb||(jd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.Ac()}),jd(document,"pagehide",this.Ac,!1,this))}
w(Kg,G);function Ng(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=Kg.prototype;m.M=function(){this.Ac();G.prototype.M.call(this)};
function Og(a){a.W||(a.W=.01>a.pb()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.W}
function Pg(a,b){a.m=new xg(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.Ja++;a=J(a,21,qf(b));this.componentId&&J(a,26,uf(this.componentId));if(!Wf(a)){b=a;var c=Date.now().toString();J(b,1,qf(c))}null==Vf(a,15)&&J(a,15,qf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),Tf(a,ug,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Nb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.R)Qg(this.j,3),Rg(this);else{var d=Date.now();if(this.Ba>d&&this.ea<d)b&&b("throttled");else{Qg(this.j,1);var e=Sg(this.j,this.i,this.l,this.s,this.Gb,this.da,this.Y);d={};var f=this.vb();f&&(d.Authorization=f);var g=Og(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=mc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=mc(g,"pageId",this.pageId));if(f&&this.na===f)b&&b("stale-auth-token");
else{this.i=[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.D&&this.D.isSupported(h.length)&&(k=this.D.compress(h));var l={url:g,body:h,Xd:1,Qc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(p){c.m.reset();c.h.setInterval(c.m.getValue());if(p){var x=null;try{var y=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));x=Gg(y)}catch(H){}if(x){p=Number;y="-1";y=void 0===y?"0":y;var z=Wf(x);p=p(null!=z?z:y);0<p&&(c.ea=Date.now(),
c.Ba=c.ea+p);x=Jg.ctor?Jg.i(x,Jg.ctor,Jg.h,!0):Jg.i(x,Jg.h,null,!0);if(p=null===x?void 0:x)x=-1,x=void 0===x?0:x,p=pf(Kf(p,1)),x=null!=p?p:x,-1!==x&&(c.ma||Pg(c,x))}}a&&a();c.s=0},r=function(p,x){var y=e.A,z=Xe(y),H=!!(z&2);
var I=H?1:2,M=!!(z&2);var N=z&2;var K=Lf(y,z,3);Array.isArray(K)||(K=gf);var V=Ue(K);V&1||Ze(K);N?V&2||Se(K,34):V&32&&!(V&2)&&We(K,32);N=K;if(N!==gf&&Ue(N)&4)3!==I&&(M?2===I&&(I=Ue(N),N=Qe(N),Ve(N,I),Mf(y,z,3,N)):(M=Object.isFrozen(N),1===I?M||Object.freeze(N):(I=Ue(N),K=I&-35,M&&(N=Qe(N),I=0,Mf(y,z,3,N)),I!==K&&Ve(N,K)))),y=N;else{K=N;N=!!(z&2);var Y=!!(Ue(K)&2);M=K;!N&&Y&&(K=Qe(K));V=z|(Y?2:0);Y=Y||void 0;for(var fa=0,pa=0;fa<K.length;fa++){var ma=wf(K[fa],Dg,V);void 0!==ma&&(Y=Y||Xe(ma.A)&2,K[pa++]=
ma)}pa<fa&&(K.length=pa);Y=!Y;V=Ue(K);fa=V|5;Y=Y?fa|8:fa&-9;V!=Y&&(K=Ye(K,Y));M!==K&&Mf(y,z,3,K);(N&&2!==I||1===I)&&Object.freeze(K);y=K}if(!(H||Ue(y)&8)){for(H=0;H<y.length;H++)z=y[H],I=Jf(z),z!==I&&(y[H]=I);Se(y,8)}H=Vf(e,14);z=c.m;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.m.getValue());401===p&&f&&(c.na=f);H&&(c.l+=H);void 0===x&&(x=c.isRetryable(p));x&&(c.i=y.concat(c.i),c.Nb||c.h.enabled||c.h.start());b&&b("net-send-failed",p);++c.s},
t=function(){c.network&&c.network.send(l,n,r)};
k?k.then(function(p){l.Qc["Content-Encoding"]="gzip";l.Qc["Content-Type"]="application/binary";l.body=p;l.Xd=2;t()},function(){t()}):t()}}}};
m.Ac=function(){Tg(this.j,!0);this.flush();Tg(this.j,!1)};
function Rg(a){Ug(a,function(b,c){b=mc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.R&&!d&&(a.R=!1);return d})}
function Ug(a,b){if(0!==a.i.length){var c=qc(Og(a),"format");c=kc(c,"auth",a.vb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=Sg(a.j,e,a.l,a.s,a.Gb,a.da,a.Y);if(!b(c,f)){++a.s;break}a.l=0;a.s=0;a.da=0;a.Y=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Lg(a,b){this.zb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Eg;Number.isInteger(a)&&Yf(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Mg(this,new Bg)}
function Mg(a,b){Tf(a.h,Bg,1,b);Kf(b,1)||Yf(b,1,1);if(!a.zb){b=Vg(a);var c=Kf(b,5);(null==c||"string"===typeof c)&&c||J(b,5,uf(a.locale))}a.uach&&(b=Vg(a),Sf(b,zg,9)||Tf(b,zg,9,a.uach))}
function Qg(a,b){Nf(Wg(a))&&(a=Xg(a),Yf(a,1,b))}
function Tg(a,b){Nf(Wg(a))&&(a=Xg(a),J(a,2,lf(b)))}
function Wg(a){return Sf(a.h,Bg,1)}
function Yg(a,b){var c=void 0===c?Ag:c;b(window,c).then(function(d){a.uach=d;d=Vg(a);Tf(d,zg,9,a.uach);return!0}).catch(function(){return!1})}
function Vg(a){a=Wg(a);var b=Sf(a,Pf,11);b||(b=new Pf,Tf(a,Pf,11,b));return b}
function Xg(a){a=Vg(a);var b=Sf(a,yg,10);b||(b=new yg,J(b,2,lf(!1)),Tf(a,yg,10,b));return b}
function Sg(a,b,c,d,e,f,g){c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(Nf(Wg(a))){var h=Xg(a);J(h,3,of(d))}Nf(Wg(a))&&(d=Xg(a),J(d,4,of(f)));Nf(Wg(a))&&(f=Xg(a),J(f,5,of(g)));a=a.h.clone();g=Date.now().toString();a=J(a,4,qf(g));b=Uf(a,Dg,3,b);e&&(a=new vg,e=J(a,13,of(e)),a=new wg,e=Tf(a,vg,2,e),a=new Cg,e=Tf(a,wg,1,e),e=Yf(e,2,9),Tf(b,Cg,18,e));c&&J(b,14,qf(c));return b}
;function Zg(){}
Zg.prototype.serialize=function(a){var b=[];$g(this,a,b);return b.join("")};
function $g(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),$g(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ah(d,c),c.push(":"),$g(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ah(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var bh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ch=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ah(a,b){b.push('"',a.replace(ch,function(c){var d=bh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),bh[c]=d);return d}),'"')}
;function dh(){}
dh.prototype.h=null;dh.prototype.getOptions=function(){var a;(a=this.h)||(a={},eh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var fh;function gh(){}
Xa(gh,dh);function hh(a){return(a=eh(a))?new ActiveXObject(a):new XMLHttpRequest}
function eh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
fh=new gh;function ih(a){ud.call(this);this.headers=new Map;this.S=a||null;this.i=!1;this.R=this.I=null;this.l=this.da="";this.j=this.Y=this.s=this.W=!1;this.m=0;this.D=null;this.Ba="";this.ma=this.na=!1}
Xa(ih,ud);var jh=/^https?$/i,kh=["POST","PUT"],lh=[];function mh(a,b,c,d,e,f,g){var h=new ih;lh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Zd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
m=ih.prototype;m.Zd=function(){this.dispose();ib(lh,this)};
m.send=function(a,b,c,d){if(this.I)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.I=this.S?hh(this.S):hh(fh);this.R=this.S?this.S.getOptions():fh.getOptions();this.I.onreadystatechange=Ua(this.wd,this);try{this.getStatus(),this.Y=!0,this.I.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();nh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=cb(kh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.I.setRequestHeader(d,c);this.Ba&&(this.I.responseType=this.Ba);"withCredentials"in this.I&&this.I.withCredentials!==this.na&&(this.I.withCredentials=this.na);try{oh(this),0<this.m&&(this.ma=ph(this.I),this.getStatus(),this.ma?(this.I.timeout=this.m,this.I.ontimeout=Ua(this.Kd,
this)):this.D=ie(this.Kd,this.m,this)),this.getStatus(),this.s=!0,this.I.send(a),this.s=!1}catch(g){this.getStatus(),nh(this,g)}};
function ph(a){return Jc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Kd=function(){"undefined"!=typeof La&&this.I&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),vd(this,"timeout"),this.abort(8))};
function nh(a,b){a.i=!1;a.I&&(a.j=!0,a.I.abort(),a.j=!1);a.l=b;qh(a);rh(a)}
function qh(a){a.W||(a.W=!0,vd(a,"complete"),vd(a,"error"))}
m.abort=function(){this.I&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.I.abort(),this.j=!1,vd(this,"complete"),vd(this,"abort"),rh(this))};
m.M=function(){this.I&&(this.i&&(this.i=!1,this.j=!0,this.I.abort(),this.j=!1),rh(this,!0));ih.Aa.M.call(this)};
m.wd=function(){this.Z()||(this.Y||this.s||this.j?sh(this):this.Fe())};
m.Fe=function(){sh(this)};
function sh(a){if(a.i&&"undefined"!=typeof La)if(a.R[1]&&4==th(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==th(a))ie(a.wd,0,a);else if(vd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(uh(a))vd(a,"complete"),vd(a,"success");else{try{var b=2<th(a)?a.I.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";qh(a)}}finally{rh(a)}}}
function rh(a,b){if(a.I){oh(a);var c=a.I,d=a.R[0]?function(){}:null;
a.I=null;a.R=null;b||vd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function oh(a){a.I&&a.ma&&(a.I.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.I};
m.isComplete=function(){return 4==th(this)};
function uh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=bc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!jh.test(a?a.toLowerCase():"");c=b}return c}
function th(a){return a.I?a.I.readyState:0}
m.getStatus=function(){try{return 2<th(this)?this.I.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function vh(){}
vh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
mh(a.url,function(d){d=d.target;if(uh(d)){try{var e=d.I?d.I.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Qc,a.timeoutMillis,a.withCredentials)};function wh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new vh}
w(wh,G);wh.prototype.kd=function(){this.W=!0;return this};function xh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);f?a=f:(a=new wh(a,"0"),a.componentId=b,xc(this,a),""!=c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new Kg({logSource:a.logSource,vb:a.vb?a.vb:tg,sessionIndex:a.sessionIndex,kf:a.i,zb:a.j,Nb:!1,kd:a.W,pageId:a.pageId,bd:a.bd,network:a.network?a.network:void 0}),xc(a,b),a.s&&Mg(b.j,a.s),a.h&&(c=a.h,d=Vg(b.j),J(d,7,uf(c))),a.m&&(b.D=a.m),a.componentId&&(b.componentId=a.componentId),
a.Gb&&(b.Gb=a.Gb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new ug),c=c.serialize(),J(b.experimentIds,4,uf(c))):b.experimentIds&&J(b.experimentIds,4)),a.R&&(c=a.R,b.experimentIds||(b.experimentIds=new ug),Qf(b.experimentIds,2,c,Xf)),a.D&&(c=a.D,b.ma=!0,Pg(b,c)),a.S&&Yg(b.j,a.S),a=b);this.h=a}
w(xh,G);
xh.prototype.flush=function(a){var b=a||[];if(b.length){a=new gg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new fg;g=J(g,1,uf(f.i));for(var h=f,k=[],l=0;l<h.h.length;l++)k.push(h.h[l].tb);g=Qf(g,3,k,tf);h=[];k=[];l=v(f.rb.keys());for(var n=l.next();!n.done;n=l.next())k.push(n.value.split(","));for(l=0;l<k.length;l++){n=k[l];var r=f.l;for(var t=f.Cc(n)||[],p=[],x=0;x<t.length;x++){var y=t[x],z=y&&y.gd;y=new cg;switch(r){case 3:var H=Number(z);Number.isFinite(H)&&Rf(y,1,dg,qf(H));break;case 2:H=
y;z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);Rf(H,2,dg,z)}p.push(y)}r=p;for(t=0;t<r.length;t++){p=r[t];x=new eg;p=Tf(x,cg,2,p);x=n;y=[];H=f;z=[];for(var I=0;I<H.h.length;I++)z.push(H.h[I].ub);H=z;for(z=0;z<H.length;z++){var M=H[z],N=x[z];I=new ag;switch(M){case 3:Rf(I,1,bg,uf(String(N)));break;case 2:M=Number(N);Number.isFinite(M)&&Rf(I,2,bg,of(M));break;case 1:Rf(I,3,bg,lf("true"==N))}y.push(I)}Uf(p,ag,1,y);h.push(p)}}Uf(g,
eg,4,h);c.push(g);e.clear()}Uf(a,fg,1,c);b=this.h;a instanceof Dg?b.log(a):(c=new Dg,a=a.serialize(),a=J(c,8,uf(a)),b.log(a));this.h.flush()}};function yh(a){this.s=zh();this.m=new xh(1828);this.h=new je(this.m);this.G=new pe(this.h);this.j=new qe(this.h);this.l=new re(this.h);this.i=new ne(this.h);this.Qa=te(a)}
function zh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Ah(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Bh(a){function b(p,x){Promise.resolve().then(function(){var y;null!=(y=c.va)&&y.G.record(zh()-y.s,y.Qa);g.resolve({Vd:p,bf:x})})}
var c=this;this.h=!1;var d=a.program;var e=a.oe;if(!1!==a.Le){var f;this.va=null!=(f=a.va)?f:new yh(e)}var g=new Ah;this.i=g.promise;if(!C[e]){var h;null!=(h=this.va)&&oe(h.i,h.Qa,1,"");var k;null!=(k=this.va)&&k.h.ob()}else if(!C[e].a){var l;null!=(l=this.va)&&oe(l.i,l.Qa,2,"");var n;null!=(n=this.va)&&n.h.ob()}try{this.j=v((0,C[e].a)(d,b,!0,a.mg)).next().value,this.af=g.promise.then(function(){})}catch(p){var r;
null!=(r=this.va)&&oe(r.i,r.Qa,4,p.message);var t;null!=(t=this.va)&&t.h.ob();throw p;}}
Bh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=zh(),d;null!=(d=this.va)&&d.j.h.wc("/client_streamz/bg/fsc",d.Qa);return this.i.then(function(e){var f=e.Vd;return new Promise(function(g){f(function(h){var k;null!=(k=b.va)&&k.l.record(zh()-c,k.Qa);g(h)},[a.jd,
a.cf,a.mf])})})};
Bh.prototype.Hd=function(a){if(this.h)throw Error("Already disposed");var b=zh(),c;null!=(c=this.va)&&c.j.h.wc("/client_streamz/bg/fsc",c.Qa);a=this.j([a.jd,a.cf,a.mf]);var d;null!=(d=this.va)&&d.l.record(zh()-b,d.Qa);return a};
Bh.prototype.dispose=function(){var a;null!=(a=this.va)&&a.h.ob();this.h=!0;this.i.then(function(b){(b=b.bf)&&b()})};
Bh.prototype.Z=function(){return this.h};var Ch=window;yb("csi.gstatic.com");yb("googleads.g.doubleclick.net");yb("partner.googleadservices.com");yb("pubads.g.doubleclick.net");yb("securepubads.g.doubleclick.net");yb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Dh="function"===typeof URL;function Eh(a){if(a instanceof Hb)a instanceof Hb&&a.constructor===Hb?a=a.h:(Ma(a),a="type_error:SafeUrl");else{b:if(Dh){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function Fh(a,b){b=Eh(b);void 0!==b&&(a.href=b)}
;var Gh={};function Hh(){}
function Ih(a){this.h=a}
w(Ih,Hh);Ih.prototype.toString=function(){return this.h};function Jh(a){var b="true".toString(),c=[new Ih(Kh[0].toLowerCase(),Gh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Ih)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Lh(){throw Error("unknown trace type");}
;var Mh="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Nh(a,b){if(b instanceof Cb)a.href=Db(b).toString();else{if(-1===Mh.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Eh(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function Oh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Ph(a,b){a.src=Db(b);Oh(a)}
;var Qh=ha([""]),Rh=ia(["\x00"],["\\0"]),Sh=ia(["\n"],["\\n"]),Th=ia(["\x00"],["\\u0000"]);function Uh(a){return-1===a.toString().indexOf("`")}
Uh(function(a){return a(Qh)})||Uh(function(a){return a(Rh)})||Uh(function(a){return a(Sh)})||Uh(function(a){return a(Th)});function Vh(a){this.ye=a}
function Wh(a){return new Vh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Xh=[Wh("data"),Wh("http"),Wh("https"),Wh("mailto"),Wh("ftp"),new Vh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Yh(a){var b=Zh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function $h(){var a=[];Yh(function(b){a.push(b)});
return a}
var Zh={nf:"allow-forms",pf:"allow-modals",qf:"allow-orientation-lock",rf:"allow-pointer-lock",sf:"allow-popups",tf:"allow-popups-to-escape-sandbox",uf:"allow-presentation",vf:"allow-same-origin",wf:"allow-scripts",xf:"allow-top-navigation",yf:"allow-top-navigation-by-user-activation"},ai=bb(function(){return $h()});
function bi(){var a=ci(),b={};db(ai(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ci(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function di(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ei=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var fi="undefined"!==typeof TextEncoder?new TextEncoder:null,gi=fi?function(a){return fi.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function hi(a){ud.call(this);var b=this;this.s=this.j=0;this.Ea=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(ii(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.s||ji(this)}
w(hi,ud);function ki(){var a=li;hi.h||(hi.h=new hi(a));return hi.h}
hi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Ea.qa(this.s);delete hi.h};
hi.prototype.wa=function(){return this.i};
function ji(a){a.s=a.Ea.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(ii(a),3):c.yield(ii(a),3);ji(a);c.h=0})},3E4)}
function ii(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ea.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.D=[h.j];h.l=0;h.G=0;a.m=void 0;a.j&&(a.Ea.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?vd(a,"networkstatus-online"):vd(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.v(3)}})})}
;function mi(){this.data=[];this.h=-1}
mi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
mi.prototype.get=function(a){return!!this.data[a]};
function ni(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function oi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
oi.prototype[Symbol.iterator]=function(){return this};
oi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function pi(a,b){return new oi(a,b)}
;function qi(){this.blockSize=-1}
;function ri(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(ri,qi);ri.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function si(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ri.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)si(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){si(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){si(this,e);f=0;break}}this.i=f;this.l+=b}};
ri.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;si(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function ti(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ui(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function vi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ti(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function wi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):vi(a,"inverted-hdpi")&&ui(a,Array.prototype.filter.call(a.classList?a.classList:ti(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function xi(){}
xi.prototype.next=function(){return yi};
var yi={done:!0,value:void 0};function zi(a){return{value:a,done:!1}}
xi.prototype.Ga=function(){return this};function Ai(a){if(a instanceof Bi||a instanceof Ci||a instanceof Di)return a;if("function"==typeof a.next)return new Bi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Bi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Bi(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Bi(a){this.i=a}
Bi.prototype.Ga=function(){return new Ci(this.i())};
Bi.prototype[Symbol.iterator]=function(){return new Di(this.i())};
Bi.prototype.h=function(){return new Di(this.i())};
function Ci(a){this.i=a}
w(Ci,xi);Ci.prototype.next=function(){return this.i.next()};
Ci.prototype[Symbol.iterator]=function(){return new Di(this.i)};
Ci.prototype.h=function(){return new Di(this.i)};
function Di(a){Bi.call(this,function(){return a});
this.j=a}
w(Di,Bi);Di.prototype.next=function(){return this.j.next()};function Ei(a,b){this.i={};this.h=[];this.Ya=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ei)for(c=a.Fc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Ei.prototype;m.Fc=function(){Fi(this);return this.h.concat()};
m.has=function(a){return Gi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Hi;Fi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Hi(a,b){return a===b}
m.Pb=function(){return 0==this.size};
m.clear=function(){this.i={};this.Ya=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Gi(this.i,a)?(delete this.i[a],--this.size,this.Ya++,this.h.length>2*this.size&&Fi(this),!0):!1};
function Fi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Gi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Gi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Gi(this.i,a)?this.i[a]:b};
m.set=function(a,b){Gi(this.i,a)||(this.size+=1,this.h.push(a),this.Ya++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Fc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Ei(this)};
m.keys=function(){return Ai(this.Ga(!0)).h()};
m.values=function(){return Ai(this.Ga(!1)).h()};
m.entries=function(){var a=this;return pi(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){Fi(this);var b=0,c=this.Ya,d=this,e=new xi;e.next=function(){if(c!=d.Ya)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return yi;var f=d.h[b++];return zi(a?f:d.i[f])};
return e};
function Gi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function L(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.s=!!a}
Xa(L,G);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ib(a)}return!1};
m.Ib=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.ab=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Ii(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ib(c)}}return 0!=e}return!1};
function Ii(a,b,c){Od(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ib,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.M=function(){L.Aa.M.call(this);this.clear();this.j.length=0};function Ji(a){this.h=a}
Ji.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Zg).serialize(b))};
Ji.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ji.prototype.remove=function(a){this.h.remove(a)};function Ki(a){this.h=a}
Xa(Ki,Ji);function Li(a){this.data=a}
function Mi(a){return void 0===a||a instanceof Li?a:new Li(a)}
Ki.prototype.set=function(a,b){Ki.Aa.set.call(this,a,Mi(b))};
Ki.prototype.i=function(a){a=Ki.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ki.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ni(a){this.h=a}
Xa(Ni,Ki);Ni.prototype.set=function(a,b,c){if(b=Mi(b)){if(c){if(c<Wa()){Ni.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Ni.Aa.set.call(this,a,b)};
Ni.prototype.i=function(a){var b=Ni.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Ni.prototype.remove.call(this,a);else return b}};function Oi(){}
;function Pi(){}
Xa(Pi,Oi);Pi.prototype[Symbol.iterator]=function(){return Ai(this.Ga(!0)).h()};
Pi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Qi(a){this.h=a}
Xa(Qi,Pi);m=Qi.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ga=function(a){var b=0,c=this.h,d=new xi;d.next=function(){if(b>=c.length)return yi;var e=c.key(b++);if(a)return zi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return zi(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Ri(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(Ri,Qi);function Si(a,b){this.i=a;this.h=null;var c;if(c=Jc)c=!(9<=Number(Xc));if(c){Ti||(Ti=new Ei);this.h=Ti.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ti.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(Si,Pi);var Ui={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ti=null;function Vi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ui[b]})}
m=Si.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Vi(a),b);Wi(this)};
m.get=function(a){a=this.h.getAttribute(Vi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Vi(a));Wi(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new xi;d.next=function(){if(b>=c.length)return yi;var e=c[b++];if(a)return zi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return zi(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Wi(this)};
function Wi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Xi(a,b){this.i=a;this.h=b+"::"}
Xa(Xi,Pi);Xi.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Xi.prototype.get=function(a){return this.i.get(this.h+a)};
Xi.prototype.remove=function(a){this.i.remove(this.h+a)};
Xi.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new xi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return zi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Yi="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Tc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Zi={qb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
md:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},$i={qb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
md:function(a){return[].concat.apply([],a)}};
O.Ze=function(){Yi?(O.nb=Uint8Array,O.Ia=Uint16Array,O.Qd=Int32Array,O.assign(O,Zi)):(O.nb=Array,O.Ia=Array,O.Qd=Array,O.assign(O,$i))};
O.Ze();var aj=!0;try{new Uint8Array(1)}catch(a){aj=!1}
function bj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.nb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var cj={};cj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var dj={},ej,fj=[],gj=0;256>gj;gj++){ej=gj;for(var hj=0;8>hj;hj++)ej=ej&1?3988292384^ej>>>1:ej>>>1;fj[gj]=ej}dj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^fj[(a^b[d])&255];return a^-1};var ij={};ij={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function jj(a){for(var b=a.length;0<=--b;)a[b]=0}
var kj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],lj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],mj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],oj=Array(576);jj(oj);var pj=Array(60);jj(pj);var qj=Array(512);jj(qj);var rj=Array(256);jj(rj);var sj=Array(29);jj(sj);var tj=Array(30);jj(tj);function uj(a,b,c,d,e){this.Id=a;this.je=b;this.he=c;this.ce=d;this.Ce=e;this.qd=a&&a.length}
var vj,wj,xj;function yj(a,b){this.ld=a;this.Db=0;this.Xa=b}
function zj(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function Aj(a,b,c){a.fa>16-c?(a.ka|=b<<a.fa&65535,zj(a,a.ka),a.ka=b>>16-a.fa,a.fa+=c-16):(a.ka|=b<<a.fa&65535,a.fa+=c)}
function Bj(a,b,c){Aj(a,c[2*b],c[2*b+1])}
function Cj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Dj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Cj(d[e]++,e))}
function Ej(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.ga[2*b]=0;a.ra[512]=1;a.Pa=a.Hb=0;a.ya=a.matches=0}
function Fj(a){8<a.fa?zj(a,a.ka):0<a.fa&&(a.V[a.pending++]=a.ka);a.ka=0;a.fa=0}
function Gj(a,b,c){Fj(a);zj(a,c);zj(a,~c);O.qb(a.V,a.window,b,c,a.pending);a.pending+=c}
function Hj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Ij(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.Na;){e<a.Na&&Hj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Hj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Jj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Mb+2*d]<<8|a.V[a.Mb+2*d+1];var f=a.V[a.Jc+d];d++;if(0===e)Bj(a,f,b);else{var g=rj[f];Bj(a,g+256+1,b);var h=kj[g];0!==h&&(f-=sj[g],Aj(a,f,h));e--;g=256>e?qj[e]:qj[256+(e>>>7)];Bj(a,g,c);h=lj[g];0!==h&&(e-=tj[g],Aj(a,e,h))}}while(d<a.ya)}Bj(a,256,b)}
function Kj(a,b){var c=b.ld,d=b.Xa.Id,e=b.Xa.qd,f=b.Xa.ce,g,h=-1;a.Na=0;a.xb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.Na]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Na;){var k=a.X[++a.Na]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Pa--;e&&(a.Hb-=d[2*k+1])}b.Db=h;for(g=a.Na>>1;1<=g;g--)Ij(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.Na--],Ij(a,c,1),d=a.X[1],a.X[--a.xb]=g,a.X[--a.xb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Ij(a,c,1);while(2<=a.Na);a.X[--a.xb]=
a.X[1];g=b.ld;k=b.Db;d=b.Xa.Id;e=b.Xa.qd;f=b.Xa.je;var l=b.Xa.he,n=b.Xa.Ce,r,t=0;for(r=0;15>=r;r++)a.Ka[r]=0;g[2*a.X[a.xb]+1]=0;for(b=a.xb+1;573>b;b++){var p=a.X[b];r=g[2*g[2*p+1]+1]+1;r>n&&(r=n,t++);g[2*p+1]=r;if(!(p>k)){a.Ka[r]++;var x=0;p>=l&&(x=f[p-l]);var y=g[2*p];a.Pa+=y*(r+x);e&&(a.Hb+=y*(d[2*p+1]+x))}}if(0!==t){do{for(r=n-1;0===a.Ka[r];)r--;a.Ka[r]--;a.Ka[r+1]+=2;a.Ka[n]--;t-=2}while(0<t);for(r=n;0!==r;r--)for(p=a.Ka[r];0!==p;)d=a.X[--b],d>k||(g[2*d+1]!==r&&(a.Pa+=(r-g[2*d+1])*g[2*d],g[2*
d+1]=r),p--)}Dj(c,h,a.Ka)}
function Lj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ga[2*l]+=g:0!==l?(l!==e&&a.ga[2*l]++,a.ga[32]++):10>=g?a.ga[34]++:a.ga[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Mj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Bj(a,l,a.ga);while(0!==--g)}else 0!==l?(l!==e&&(Bj(a,l,a.ga),g--),Bj(a,16,a.ga),Aj(a,g-3,2)):10>=g?(Bj(a,17,a.ga),Aj(a,g-3,3)):(Bj(a,18,a.ga),Aj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Nj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var Oj=!1;function Pj(a,b,c){a.V[a.Mb+2*a.ya]=b>>>8&255;a.V[a.Mb+2*a.ya+1]=b&255;a.V[a.Jc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(rj[c]+256+1)]++,a.eb[2*(256>b?qj[b]:qj[256+(b>>>7)])]++);return a.ya===a.Qb-1}
;function Qj(a,b){a.msg=ij[b];return b}
function Rj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Sj(a){var b=a.state,c=b.pending;c>a.K&&(c=a.K);0!==c&&(O.qb(a.output,b.V,b.Tb,c,a.Eb),a.Eb+=c,b.Tb+=c,a.Uc+=c,a.K-=c,b.pending-=c,0===b.pending&&(b.Tb=0))}
function Tj(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.H.zc&&(a.H.zc=Nj(a));Kj(a,a.ic);Kj(a,a.dc);Lj(a,a.ra,a.ic.Db);Lj(a,a.eb,a.dc.Db);Kj(a,a.cd);for(e=18;3<=e&&0===a.ga[2*nj[e]+1];e--);a.Pa+=3*(e+1)+14;var f=a.Pa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Aj(a,b?1:0,3),Gj(a,c,d);else if(4===a.strategy||g===f)Aj(a,2+(b?1:0),3),Jj(a,oj,pj);else{Aj(a,4+(b?1:0),3);c=a.ic.Db+1;d=a.dc.Db+1;e+=1;Aj(a,c-257,5);Aj(a,d-1,5);Aj(a,e-4,4);for(f=0;f<e;f++)Aj(a,a.ga[2*
nj[f]+1],3);Mj(a,a.ra,c-1);Mj(a,a.eb,d-1);Jj(a,a.ra,a.eb)}Ej(a);b&&Fj(a);a.ta=a.o;Sj(a.H)}
function P(a,b){a.V[a.pending++]=b}
function Uj(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function Vj(a,b){var c=a.td,d=a.o,e=a.xa,f=a.vd,g=a.o>a.ia-262?a.o-(a.ia-262):0,h=a.window,k=a.Za,l=a.Ha,n=a.o+258,r=h[d+e-1],t=h[d+e];a.xa>=a.pd&&(c>>=2);f>a.u&&(f=a.u);do{var p=b;if(h[p+e]===t&&h[p+e-1]===r&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<n;);p=258-(n-d);d=n-258;if(p>e){a.Cb=b;e=p;if(p>=f)break;r=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function Wj(a){var b=a.ia,c;do{var d=a.Od-a.u-a.o;if(a.o>=b+(b-262)){O.qb(a.window,a.window,b,b,0);a.Cb-=b;a.o-=b;a.ta-=b;var e=c=a.hc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.H.ja)break;e=a.H;c=a.window;f=a.o+a.u;var g=e.ja;g>d&&(g=d);0===g?c=0:(e.ja-=g,O.qb(c,e.input,e.jb,g,f),1===e.state.wrap?e.F=cj(e.F,c,g,f):2===e.state.wrap&&(e.F=dj(e.F,c,g,f)),e.jb+=g,e.mb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.J=a.window[d],
a.J=(a.J<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.J=(a.J<<a.Ma^a.window[d+3-1])&a.La,a.Ha[d&a.Za]=a.head[a.J],a.head[a.J]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.H.ja)}
function Xj(a,b){for(var c;;){if(262>a.u){Wj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ia-262&&(a.P=Vj(a,c));if(3<=a.P)if(c=Pj(a,a.o-a.Cb,a.P-3),a.u-=a.P,a.P<=a.Kc&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.Ma^a.window[a.o+1])&a.La;else c=Pj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Tj(a,!1),0===a.H.K))return 1}a.sa=2>a.o?a.o:2;return 4===b?(Tj(a,!0),0===a.H.K?3:4):a.ya&&(Tj(a,!1),0===a.H.K)?1:2}
function Yj(a,b){for(var c,d;;){if(262>a.u){Wj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);a.xa=a.P;a.yd=a.Cb;a.P=2;0!==c&&a.xa<a.Kc&&a.o-c<=a.ia-262&&(a.P=Vj(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.Cb)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=Pj(a,a.o-1-a.yd,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.xa);a.hb=0;a.P=2;a.o++;if(c&&(Tj(a,!1),0===a.H.K))return 1}else if(a.hb){if((c=Pj(a,0,a.window[a.o-1]))&&Tj(a,!1),a.o++,a.u--,0===a.H.K)return 1}else a.hb=1,a.o++,a.u--}a.hb&&(Pj(a,0,a.window[a.o-1]),a.hb=0);a.sa=2>a.o?a.o:2;return 4===b?(Tj(a,!0),0===a.H.K?3:4):a.ya&&(Tj(a,!1),0===a.H.K)?1:2}
function Zj(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Wj(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=Pj(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=Pj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Tj(a,!1),0===a.H.K))return 1}a.sa=0;return 4===b?(Tj(a,!0),0===a.H.K?3:4):
a.ya&&(Tj(a,!1),0===a.H.K)?1:2}
function ak(a,b){for(var c;;){if(0===a.u&&(Wj(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=Pj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Tj(a,!1),0===a.H.K))return 1}a.sa=0;return 4===b?(Tj(a,!0),0===a.H.K?3:4):a.ya&&(Tj(a,!1),0===a.H.K)?1:2}
function bk(a,b,c,d,e){this.pe=a;this.Be=b;this.Ee=c;this.Ae=d;this.le=e}
var ck;ck=[new bk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){Wj(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Tj(a,!1),0===a.H.K)return 1;if(a.o-a.ta>=a.ia-262&&(Tj(a,!1),0===a.H.K))return 1}a.sa=0;if(4===b)return Tj(a,!0),0===a.H.K?3:4;a.o>a.ta&&Tj(a,!1);return 1}),
new bk(4,4,8,4,Xj),new bk(4,5,16,8,Xj),new bk(4,6,32,32,Xj),new bk(4,4,16,16,Yj),new bk(8,16,32,32,Yj),new bk(8,16,128,128,Yj),new bk(8,32,128,256,Yj),new bk(32,128,258,1024,Yj),new bk(32,258,258,4096,Yj)];
function dk(){this.H=null;this.status=0;this.V=null;this.wrap=this.pending=this.Tb=this.za=0;this.B=null;this.Ca=0;this.method=8;this.Ab=-1;this.Za=this.Wc=this.ia=0;this.window=null;this.Od=0;this.head=this.Ha=null;this.vd=this.pd=this.strategy=this.level=this.Kc=this.td=this.xa=this.u=this.Cb=this.o=this.hb=this.yd=this.P=this.ta=this.Ma=this.La=this.Gc=this.hc=this.J=0;this.ra=new O.Ia(1146);this.eb=new O.Ia(122);this.ga=new O.Ia(78);Rj(this.ra);Rj(this.eb);Rj(this.ga);this.cd=this.dc=this.ic=
null;this.Ka=new O.Ia(16);this.X=new O.Ia(573);Rj(this.X);this.xb=this.Na=0;this.depth=new O.Ia(573);Rj(this.depth);this.fa=this.ka=this.sa=this.matches=this.Hb=this.Pa=this.Mb=this.ya=this.Qb=this.Jc=0}
function ek(a,b){if(!a||!a.state||5<b||0>b)return a?Qj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ja||666===c.status&&4!==b)return Qj(a,0===a.K?-5:-2);c.H=a;var d=c.Ab;c.Ab=b;if(42===c.status)if(2===c.wrap)a.F=0,P(c,31),P(c,139),P(c,8),c.B?(P(c,(c.B.text?1:0)+(c.B.Ua?2:0)+(c.B.Ta?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),P(c,c.B.time&255),P(c,c.B.time>>8&255),P(c,c.B.time>>16&255),P(c,c.B.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.B.os&255),c.B.Ta&&c.B.Ta.length&&
(P(c,c.B.Ta.length&255),P(c,c.B.Ta.length>>8&255)),c.B.Ua&&(a.F=dj(a.F,c.V,c.pending,0)),c.Ca=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Wc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Uj(c,e+(31-e%31));0!==c.o&&(Uj(c,a.F>>>16),Uj(c,a.F&65535));a.F=1}if(69===c.status)if(c.B.Ta){for(e=c.pending;c.Ca<(c.B.Ta.length&65535)&&(c.pending!==c.za||(c.B.Ua&&
c.pending>e&&(a.F=dj(a.F,c.V,c.pending-e,e)),Sj(a),e=c.pending,c.pending!==c.za));)P(c,c.B.Ta[c.Ca]&255),c.Ca++;c.B.Ua&&c.pending>e&&(a.F=dj(a.F,c.V,c.pending-e,e));c.Ca===c.B.Ta.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.za&&(c.B.Ua&&c.pending>e&&(a.F=dj(a.F,c.V,c.pending-e,e)),Sj(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.B.name.length?c.B.name.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.F=dj(a.F,
c.V,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.za&&(c.B.Ua&&c.pending>e&&(a.F=dj(a.F,c.V,c.pending-e,e)),Sj(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.B.comment.length?c.B.comment.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.F=dj(a.F,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ua?(c.pending+2>c.za&&Sj(a),c.pending+2<=c.za&&(P(c,a.F&255),P(c,a.F>>
8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(Sj(a),0===a.K)return c.Ab=-1,0}else if(0===a.ja&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Qj(a,-5);if(666===c.status&&0!==a.ja)return Qj(a,-5);if(0!==a.ja||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?ak(c,b):3===c.strategy?Zj(c,b):ck[c.level].le(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.K&&(c.Ab=-1),0;if(2===d&&(1===b?(Aj(c,2,3),Bj(c,256,oj),16===c.fa?(zj(c,c.ka),c.ka=0,c.fa=0):8<=c.fa&&(c.V[c.pending++]=
c.ka&255,c.ka>>=8,c.fa-=8)):5!==b&&(Aj(c,0,3),Gj(c,0,0),3===b&&(Rj(c.head),0===c.u&&(c.o=0,c.ta=0,c.sa=0))),Sj(a),0===a.K))return c.Ab=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.F&255),P(c,a.F>>8&255),P(c,a.F>>16&255),P(c,a.F>>24&255),P(c,a.mb&255),P(c,a.mb>>8&255),P(c,a.mb>>16&255),P(c,a.mb>>24&255)):(Uj(c,a.F>>>16),Uj(c,a.F&65535));Sj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var fk={};fk=function(){this.input=null;this.mb=this.ja=this.jb=0;this.output=null;this.Uc=this.K=this.Eb=0;this.msg="";this.state=null;this.zc=2;this.F=0};var gk=Object.prototype.toString;
function hk(a){if(!(this instanceof hk))return new hk(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.H=new fk;this.H.K=0;var b=this.H;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Qj(b,-2);else{8===e&&(e=9);var k=new dk;b.state=k;k.H=b;k.wrap=h;k.B=null;k.Wc=e;k.ia=1<<k.Wc;k.Za=k.ia-1;k.Gc=f+7;k.hc=1<<k.Gc;k.La=k.hc-1;k.Ma=~~((k.Gc+3-1)/3);k.window=new O.nb(2*k.ia);k.head=new O.Ia(k.hc);k.Ha=new O.Ia(k.ia);k.Qb=1<<f+6;k.za=4*k.Qb;k.V=new O.nb(k.za);k.Mb=1*k.Qb;k.Jc=3*k.Qb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.mb=b.Uc=0;b.zc=2;c=b.state;c.pending=0;c.Tb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.Ab=0;if(!Oj){d=Array(16);for(f=g=0;28>f;f++)for(sj[f]=g,e=0;e<1<<kj[f];e++)rj[g++]=f;rj[g-1]=f;for(f=g=0;16>f;f++)for(tj[f]=g,e=0;e<1<<lj[f];e++)qj[g++]=f;for(g>>=7;30>f;f++)for(tj[f]=g<<7,e=0;e<1<<lj[f]-7;e++)qj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)oj[2*e+1]=8,e++,d[8]++;for(;255>=e;)oj[2*e+1]=9,e++,d[9]++;for(;279>=e;)oj[2*e+1]=7,e++,d[7]++;for(;287>=e;)oj[2*e+1]=8,e++,d[8]++;Dj(oj,287,d);for(e=0;30>e;e++)pj[2*e+1]=5,pj[2*e]=Cj(e,5);vj=new uj(oj,kj,257,286,15);wj=new uj(pj,
lj,0,30,15);xj=new uj([],mj,0,19,7);Oj=!0}c.ic=new yj(c.ra,vj);c.dc=new yj(c.eb,wj);c.cd=new yj(c.ga,xj);c.ka=0;c.fa=0;Ej(c);c=0}else c=Qj(b,-2);0===c&&(b=b.state,b.Od=2*b.ia,Rj(b.head),b.Kc=ck[b.level].Be,b.pd=ck[b.level].pe,b.vd=ck[b.level].Ee,b.td=ck[b.level].Ae,b.o=0,b.ta=0,b.u=0,b.sa=0,b.P=b.xa=2,b.hb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(ij[b]);a.header&&(b=this.H)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=bj(a.dictionary):
"[object ArrayBuffer]"===gk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.H;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=cj(a.F,f,g,0));l.wrap=0;g>=l.ia&&(0===b&&(Rj(l.head),l.o=0,l.ta=0,l.sa=0),c=new O.nb(l.ia),O.qb(c,f,g-l.ia,l.ia,0),f=c,g=l.ia);c=a.ja;d=a.jb;e=a.input;a.ja=g;a.jb=0;a.input=f;for(Wj(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.Ma^l.window[f+3-1])&l.La,l.Ha[f&l.Za]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;Wj(l)}l.o+=l.u;l.ta=l.o;l.sa=l.u;l.u=0;l.P=l.xa=2;l.hb=0;a.jb=d;a.input=e;a.ja=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(ij[b]);this.Of=!0}}
hk.prototype.push=function(a,b){var c=this.H,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=bj(a):"[object ArrayBuffer]"===gk.call(a)?c.input=new Uint8Array(a):c.input=a;c.jb=0;c.ja=c.input.length;do{0===c.K&&(c.output=new O.nb(d),c.Eb=0,c.K=d);a=ek(c,e);if(1!==a&&0!==a)return ik(this,a),this.ended=!0,!1;if(0===c.K||0===c.ja&&(4===e||2===e))if("string"===this.options.to){var f=O.Tc(c.output,c.Eb);b=f;f=f.length;if(65537>f&&(b.subarray&&aj||!b.subarray))b=
String.fromCharCode.apply(null,O.Tc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Tc(c.output,c.Eb),this.chunks.push(b)}while((0<c.ja||0===c.K)&&1!==a);if(4===e)return(c=this.H)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Qj(c,-2):(c.state=null,a=113===d?Qj(c,-3):0)):a=-2,ik(this,a),this.ended=!0,0===a;2===e&&(ik(this,0),c.K=0);return!0};
function ik(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):O.md(a.chunks));a.chunks=[];a.err=b;a.msg=a.H.msg}
function jk(a,b){b=b||{};b.gzip=!0;b=new hk(b);b.push(a,!0);if(b.err)throw b.msg||ij[b.err];return b.result}
;function kk(a){return Fb(null===a?"null":void 0===a?"undefined":a)}
;function lk(a){this.name=a}
;var mk=new lk("rawColdConfigGroup");var nk=new lk("rawHotConfigGroup");function ok(a){this.A=zf(a)}
w(ok,Zf);var pk=new lk("continuationCommand");var qk=new lk("webCommandMetadata");var rk=new lk("signalServiceEndpoint");var sk={Df:"EMBEDDED_PLAYER_MODE_UNKNOWN",Af:"EMBEDDED_PLAYER_MODE_DEFAULT",Cf:"EMBEDDED_PLAYER_MODE_PFP",Bf:"EMBEDDED_PLAYER_MODE_PFL"};var tk=new lk("feedbackEndpoint");function uk(a){this.A=zf(a)}
w(uk,Zf);var vk=new lk("webPlayerShareEntityServiceEndpoint");var wk=new lk("playlistEditEndpoint");var xk=new lk("modifyChannelNotificationPreferenceEndpoint");var yk=new lk("unsubscribeEndpoint");var zk=new lk("subscribeEndpoint");function Ak(){var a=Bk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Ck(a){D("yt.ads.biscotti.lastId_",a)}
;function Dk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ek=C.window,Fk,Gk,Hk=(null==Ek?void 0:null==(Fk=Ek.yt)?void 0:Fk.config_)||(null==Ek?void 0:null==(Gk=Ek.ytcfg)?void 0:Gk.data_)||{};D("yt.config_",Hk);function Ik(){Dk(Hk,arguments)}
function R(a,b){return a in Hk?Hk[a]:b}
function Jk(a){var b=Hk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Kk=[];function Lk(a){Kk.forEach(function(b){return b(a)})}
function Mk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Nk(b)}}:a}
function Nk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ik("ERRORS",b));Lk(a)}
function Ok(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ik("ERRORS",f))}
;var Pk=/^[\w.]*$/,Qk={q:!0,search_query:!0};function Rk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Sk(f[0]||""),h=Sk(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,l=f[0],n=String(Rk);k.args=[{key:l,value:f[1],query:a,method:Tk==n?"unchanged":n}];Qk.hasOwnProperty(l)||Ok(k)}}return c}
var Tk=String(Rk);function Uk(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Vk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Rk(a,"&")}
function Wk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Vk(1<a.length?a[1]:a[0])):{}}
function Xk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Vk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
function Yk(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function Sk(a){return a&&a.match(Pk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Zk(a){var b=$k;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ei;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Fa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ch:g;try{var h=g.history.length}catch(Fa){h=0}e.u_his=h;var k;e.u_h=null==(k=Ch.screen)?void 0:k.height;var l;e.u_w=null==(l=Ch.screen)?void 0:l.width;var n;e.u_ah=null==(n=Ch.screen)?void 0:n.availHeight;var r;e.u_aw=
null==(r=Ch.screen)?void 0:r.availWidth;var t;e.u_cd=null==(t=Ch.screen)?void 0:t.colorDepth}catch(Fa){}h=b.h;try{var p=h.screenX;var x=h.screenY}catch(Fa){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Fa){}try{var H=h.innerWidth;var I=h.innerHeight}catch(Fa){}try{var M=h.screenLeft;var N=h.screenTop}catch(Fa){}try{H=h.innerWidth,I=h.innerHeight}catch(Fa){}try{var K=h.screen.availWidth;var V=h.screen.availTop}catch(Fa){}p=[M,N,p,x,K,V,y,z,H,I];try{var Y=(b.h.top||window).document,fa="CSS1Compat"==
Y.compatMode?Y.documentElement:Y.body;var pa=(new Bd(fa.clientWidth,fa.clientHeight)).round()}catch(Fa){pa=new Bd(-12245933,-12245933)}Y=pa;pa={};var ma=void 0===ma?C:ma;fa=new mi;"SVGElement"in ma&&"createElementNS"in ma.document&&fa.set(0);x=bi();x["allow-top-navigation-by-user-activation"]&&fa.set(1);x["allow-popups-to-escape-sandbox"]&&fa.set(2);ma.crypto&&ma.crypto.subtle&&fa.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&fa.set(4);ma=ni(fa);pa.bc=ma;pa.bih=Y.height;pa.biw=Y.width;pa.brdim=p.join();
b=b.i;b=(pa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,pa.wgl=!!Ch.WebGLRenderingContext,pa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var $k=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Uk(Zk(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");function S(a){a=al(a);return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=al(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function al(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
function bl(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var cl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function dl(){if(!cl)return null;var a=cl();return"open"in a?a:null}
function el(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function fl(a,b){"function"===typeof a&&(a=Mk(a));return window.setTimeout(a,b)}
;var gl="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(gl),["client_dev_set_cookie"]);var hl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},il="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(gl)),jl=!1;
function kl(a,b){b=void 0===b?{}:b;var c=Yk(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in hl){var f=R(hl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&cc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&R("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==R("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||
!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=Uk(Zk()));return b}
function ll(a){var b=window.location.search,c=cc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Yk(a)&&(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Vk(b),f={};db(il,function(g){e[g]&&(f[g]=e[g])});
return Xk(a,f||{},!1)}
function ml(a,b){var c=b.format||"JSON";a=nl(a,b);var d=ol(a,b),e=!1,f=pl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=el(k),n=null,r=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||r||t)n=ql(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};r=b.context||C;l?b.onSuccess&&b.onSuccess.call(r,k,n):b.onError&&b.onError.call(r,k,n);b.onFinish&&b.onFinish.call(r,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=fl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function nl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Xk(a,b||{},!0);return a}
function ol(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Vk(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):jc(e));f=e||f&&!nb(f);!jl&&f&&"POST"!=b.method&&(jl=!0,Nk(Error("AJAX request with postData should use POST")));return e}
function ql(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ok(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?rl(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=sl(g)})}d&&tl(e);
return e}
function tl(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=wb();d=e?e.createHTML(d):d;a[c]=new Wb(d)}else tl(a[b])}}
function rl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function sl(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ul(a,b){b.method="POST";b.postParams||(b.postParams={});return ml(a,b)}
function pl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Mk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=dl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=ll(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=kl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var vl=[{Lc:function(a){return"Cannot read property '"+a.key+"'"},
nc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Lc:function(a){return"Cannot call '"+a.key+"'"},
nc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Lc:function(a){return a.key+" is not defined"},
nc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var xl={Va:[],Sa:[{callback:wl,weight:500}]};function wl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function yl(){this.Sa=[];this.Va=[]}
var zl;function Al(){if(!zl){var a=zl=new yl;a.Va.length=0;a.Sa.length=0;xl.Va&&a.Va.push.apply(a.Va,xl.Va);xl.Sa&&a.Sa.push.apply(a.Sa,xl.Sa)}return zl}
;var Bl=new L;function Cl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Dl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Dl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Dl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Dl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function El(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Fl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Cl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Fl(e+".ve",f,g,h):0;d+=g;d+=Fl(e,a[e],b,c);if(500<d)break}}else c[b]=Gl(a),d+=c[b].length;else c[b]=Gl(a),d+=c[b].length;return d}
function Fl(a,b,c,d){c+="."+a;a=Gl(b);d[c]=a;return c.length+a.length}
function Gl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Hl(){this.df=!0}
function Il(){Hl.h||(Hl.h=new Hl);return Hl.h}
function Jl(a,b){a={};var c=tg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Hk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Hk&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var Kl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Ll(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Ml(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Nl(a,b,c,d,e){pg.set(""+a,b,{jc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Ol(a){return pg.get(""+a,void 0)}
function Pl(a,b,c){pg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Ql(){if(!pg.isEnabled())return!1;if(!pg.Pb())return!0;pg.set("TESTCOOKIESENABLED","1",{jc:60});if("1"!==pg.get("TESTCOOKIESENABLED"))return!1;pg.remove("TESTCOOKIESENABLED");return!0}
;var Rl=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Rl);function Sl(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Ol(this.h);a&&this.parse(a)}
var Tl;function Ul(){Tl||(Tl=new Sl);return Tl}
m=Sl.prototype;m.get=function(a,b){Vl(a);Wl(a);a=void 0!==Rl[a]?Rl[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){Vl(a);Wl(a);if(null==b)throw Error("ExpectedNotNull");Rl[a]=b.toString()};
function Xl(a){return!!((Yl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Vl(a);Wl(a);delete Rl[a]};
m.clear=function(){for(var a in Rl)delete Rl[a]};
function Wl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Vl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Yl(a){a=void 0!==Rl[a]?Rl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Rl[d]=c.toString())}};var Zl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},$l={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function am(){var a=C.navigator;return a?a.connection:void 0}
function bm(){var a=am();if(a){var b=Zl[a.type||"unknown"]||"CONN_UNKNOWN";a=Zl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function cm(){var a=am();if(null!=a&&a.effectiveType)return $l.hasOwnProperty(a.effectiveType)?$l[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function dm(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
w(dm,Error);function em(){try{return fm(),!0}catch(a){return!1}}
function fm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new dm("Datasync ID not set",void 0===a?"unknown":a);}
;function gm(){}
function hm(a,b){return li.bb(a,0,b)}
gm.prototype.oa=function(a,b){return this.bb(a,1,b)};
gm.prototype.Jb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var im=T("web_emulated_idle_callback_delay",300),jm=1E3/60-3,km=[8,5,4,3,2,1,0];
function lm(a){a=void 0===a?{}:a;G.call(this);this.i=[];this.j={};this.Y=this.h=0;this.W=this.m=!1;this.R=[];this.S=this.da=!1;for(var b=v(km),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.yc=a.timeout||1;this.D=jm;this.s=0;this.ma=this.Ge.bind(this);this.xc=this.gf.bind(this);this.Ba=this.Ud.bind(this);this.Ja=this.qe.bind(this);this.pb=this.Je.bind(this);this.na=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ea=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ma)}
w(lm,G);m=lm.prototype;m.Jb=function(a){var b=Wa();mm(this,a);a=Wa()-b;this.m||(this.D-=a)};
m.bb=function(a,b,c){++this.Y;if(10===b)return this.Jb(a),this.Y;var d=this.Y;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.m||(0!==this.h&&nm(this)!==this.s&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function om(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function pm(a){return!a.isHidden()&&a.ea}
function nm(a){if(a.i[8].length){if(a.S)return 4;if(pm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?pm(a)?3:2:1;return 0}
m.Rb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function mm(a,b){try{b()}catch(c){a.Rb(c)}}
function qm(a){for(var b=v(km),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.qe=function(a){var b=void 0;a&&(b=a.timeRemaining());this.da=!0;rm(this,b);this.da=!1};
m.gf=function(){rm(this)};
m.Ud=function(){sm(this)};
m.Je=function(a){this.S=!0;var b=nm(this);4===b&&b!==this.s&&(this.stop(),this.start());rm(this,void 0,a);this.S=!1};
m.Ge=function(){this.isHidden()||sm(this);this.h&&(this.stop(),this.start())};
function sm(a){a.stop();a.m=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&mm(a,e)}tm(a);a.m=!1;qm(a)&&a.start();b=Wa()-b;a.D-=b}
function tm(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function rm(a,b,c){a.S&&4===a.s&&a.h||a.stop();a.m=!0;b=Wa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Rb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&mm(a,f);d=a.da?0:1;d=a.l>d?a.l:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&mm(a,c)}while(c&&Wa()<b)}a.m=!1;tm(a);a.D=jm;qm(a)&&a.start()}
m.start=function(){this.W=!1;if(0===this.h)switch(this.s=nm(this),this.s){case 1:var a=this.Ja;this.h=this.na?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,im);break;case 2:this.h=window.setTimeout(this.xc,this.yc);break;case 3:this.h=window.requestAnimationFrame(this.pb);break;case 4:this.h=window.setTimeout(this.Ba,0)}};
m.pause=function(){this.stop();this.W=!0};
m.stop=function(){if(this.h){switch(this.s){case 1:var a=this.h;this.na?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.M=function(){om(this);this.stop();this.ea&&document.removeEventListener("visibilitychange",this.ma);G.prototype.M.call(this)};var um=E("yt.scheduler.instance.timerIdMap_")||{},wm=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),xm=0,ym=0;function zm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new lm(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Am(){Bm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(vc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Bm(){om(zm());for(var a in um)um.hasOwnProperty(a)&&delete um[Number(a)]}
function Cm(a,b,c){if(!c)return c=void 0===c,-zm().bb(a,b,c);var d=window.setTimeout(function(){var e=zm().bb(a,b);um[d]=e},c);
return d}
function Dm(a){zm().Jb(a)}
function Em(a){var b=zm();if(0>a)b.qa(-a);else{var c=um[a];c?(b.qa(c),delete um[a]):window.clearTimeout(a)}}
function Fm(){Gm()}
function Gm(){window.clearTimeout(xm);zm().start()}
function Hm(){zm().pause();window.clearTimeout(xm);xm=window.setTimeout(Fm,wm)}
function Im(){window.clearTimeout(ym);ym=window.setTimeout(function(){Jm(0)},wm)}
function Jm(a){Im();var b=zm();b.l=a;b.start()}
function Km(a){Im();var b=zm();b.l>a&&(b.l=a,b.start())}
function Lm(){window.clearTimeout(ym);var a=zm();a.l=0;a.start()}
function Mm(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Am),D("yt.scheduler.instance.addJob",Cm),D("yt.scheduler.instance.addImmediateJob",Dm),D("yt.scheduler.instance.cancelJob",Em),D("yt.scheduler.instance.cancelAllJobs",Bm),D("yt.scheduler.instance.start",Gm),D("yt.scheduler.instance.pause",Hm),D("yt.scheduler.instance.setPriorityThreshold",Jm),D("yt.scheduler.instance.enablePriorityThreshold",Km),D("yt.scheduler.instance.clearPriorityThreshold",Lm),D("yt.scheduler.initialized",
!0))}
;function Nm(){gm.apply(this,arguments)}
w(Nm,gm);function Om(){Nm.h||(Nm.h=new Nm);return Nm.h}
Nm.prototype.bb=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):fl(a,c||0)};
Nm.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Nm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Nm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var li=Om();S("web_scheduler_auto_init")&&Mm();function Pm(a){var b=new Ri;(b=b.isAvailable()?a?new Xi(b,a):b:null)||(a=new Si(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ni(a):null;this.i=document.domain||window.location.hostname}
Pm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Zg).serialize(b))}catch(f){return}else e=escape(b);Nl(a,e,c,this.i)};
Pm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ol(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Pm.prototype.remove=function(a){this.h&&this.h.remove(a);Pl(a,"/",this.i)};var Qm=function(){var a;return function(){a||(a=new Pm("ytidb"));return a}}();
function Rm(){var a;return null==(a=Qm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Sm=[],Tm,Um=!1;function Vm(){var a={};for(Tm=new Wm(void 0===a.handleError?Xm:a.handleError,void 0===a.logEvent?Ym:a.logEvent);0<Sm.length;)switch(a=Sm.shift(),a.type){case "ERROR":Tm.Rb(a.payload);break;case "EVENT":Tm.logEvent(a.eventType,a.payload)}}
function Zm(a){Um||(Tm?Tm.Rb(a):(Sm.push({type:"ERROR",payload:a}),10<Sm.length&&Sm.shift()))}
function $m(a,b){Um||(Tm?Tm.logEvent(a,b):(Sm.push({type:"EVENT",eventType:a,payload:b}),10<Sm.length&&Sm.shift()))}
;function an(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function bn(a){return a.substr(0,a.indexOf(":"))||a}
;var cn=we||xe;function dn(a){var b=Nb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var en={},fn=(en.AUTH_INVALID="No user identifier specified.",en.EXPLICIT_ABORT="Transaction was explicitly aborted.",en.IDB_NOT_SUPPORTED="IndexedDB is not supported.",en.MISSING_INDEX="Index not created.",en.MISSING_OBJECT_STORES="Object stores not created.",en.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",en.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",en.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
en.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",en.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",en.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",en.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",en),gn={},hn=(gn.AUTH_INVALID="ERROR",gn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",gn.EXPLICIT_ABORT="IGNORED",gn.IDB_NOT_SUPPORTED="ERROR",gn.MISSING_INDEX=
"WARNING",gn.MISSING_OBJECT_STORES="ERROR",gn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",gn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",gn.QUOTA_EXCEEDED="WARNING",gn.QUOTA_MAYBE_EXCEEDED="WARNING",gn.UNKNOWN_ABORT="WARNING",gn.INCOMPATIBLE_DB_VERSION="WARNING",gn),jn={},kn=(jn.AUTH_INVALID=!1,jn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,jn.EXPLICIT_ABORT=!1,jn.IDB_NOT_SUPPORTED=!1,jn.MISSING_INDEX=!1,jn.MISSING_OBJECT_STORES=!1,jn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,jn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,jn.QUOTA_EXCEEDED=!1,jn.QUOTA_MAYBE_EXCEEDED=!0,jn.UNKNOWN_ABORT=!0,jn.INCOMPATIBLE_DB_VERSION=!1,jn);function ln(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?fn[a]:c;d=void 0===d?hn[a]:d;e=void 0===e?kn[a]:e;dm.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,ln.prototype)}
w(ln,dm);function mn(a,b){ln.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},fn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,mn.prototype)}
w(mn,ln);function nn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,nn.prototype)}
w(nn,Error);var on=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function pn(a,b,c,d){b=bn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof ln)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new ln("QUOTA_EXCEEDED",a);if(ye&&"UnknownError"===e.name)return new ln("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof nn)return new ln("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&on.some(function(f){return e.message.includes(f)}))return new ln("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new ln("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",xd:e.name})];e.level="WARNING";return e}
function qn(a,b,c){var d=Rm();return new ln("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function rn(a){if(!a)throw Error();throw a;}
function sn(a){return a}
function tn(a){this.h=a}
function un(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
un.all=function(a){return new un(new tn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={yb:0};f.yb<a.length;f={yb:f.yb},++f.yb)un.resolve(a[f.yb]).then(function(g){return function(h){d[g.yb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
un.resolve=function(a){return new un(new tn(function(b,c){a instanceof un?a.then(b,c):b(a)}))};
un.reject=function(a){return new un(new tn(function(b,c){c(a)}))};
un.prototype.then=function(a,b){var c=this,d=null!=a?a:sn,e=null!=b?b:rn;return new un(new tn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){vn(c,c,d,f,g)}),c.i.push(function(){wn(c,c,e,f,g)})):"FULFILLED"===c.state.status?vn(c,c,d,f,g):"REJECTED"===c.state.status&&wn(c,c,e,f,g)}))};
un.prototype.catch=function(a){return this.then(void 0,a)};
function vn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof un?xn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof un?xn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof un?xn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function yn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function zn(a){return new Promise(function(b,c){yn(a,b,c)})}
function An(a){return new un(new tn(function(b,c){yn(a,b,c)}))}
;function Bn(a,b){return new un(new tn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Cn=window,U=Cn.ytcsi&&Cn.ytcsi.now?Cn.ytcsi.now:Cn.performance&&Cn.performance.timing&&Cn.performance.now&&Cn.performance.timing.navigationStart?function(){return Cn.performance.timing.navigationStart+Cn.performance.now()}:function(){return(new Date).getTime()};function Dn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
m=Dn.prototype;m.add=function(a,b,c){return En(this,[a],{mode:"readwrite",ha:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return En(this,[a],{mode:"readwrite",ha:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return En(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).count(b)})};
function Fn(a,b,c){a=a.h.createObjectStore(b,c);return new Gn(a)}
m.delete=function(a,b){return En(this,[a],{mode:"readwrite",ha:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return En(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).get(b)})};
function Hn(a,b,c){return En(a,[b],{mode:"readwrite",ha:!0},function(d){d=d.objectStore(b);return An(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function En(a,b,c,d){var e,f,g,h,k,l,n,r,t,p,x,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ha:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ha?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(U());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var I=new In(l);I=Jn(I,d);return H.call(z,I,7);case 7:return n=z.i,r=Math.round(U()),Kn(a,k,r,g,void 0,b.join(),e),z.return(n);case 5:t=Aa(z);p=Math.round(U());x=pn(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof ln&&!x.h)||g>=f)Kn(a,k,p,g,x,b.join(),e),h=x;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function Kn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof ln&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&$m("QUOTA_EXCEEDED",{dbName:bn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof ln&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),$m("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Ln(a,!1,d,f,b,g.tag),Zm(e)):Ln(a,!0,d,f,b,g.tag)}
function Ln(a,b,c,d,e,f){$m("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Gn(a){this.h=a}
m=Gn.prototype;m.add=function(a,b){return An(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return An(this.h.clear()).then(function(){})};
function Mn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return An(this.h.count(a))};
function Nn(a,b){return On(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Nn(this,a):An(this.h.delete(a))};
m.get=function(a){return An(this.h.get(a))};
m.index=function(a){try{return new Pn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new nn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function On(a,b,c){a=a.h.openCursor(b.query,b.direction);return Qn(a).then(function(d){return Bn(d,c)})}
function In(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=ln;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Jn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
In.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new ln("EXPLICIT_ABORT");};
In.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Gn(a),this.i.set(a,b));return b};
function Pn(a){this.h=a}
m=Pn.prototype;m.count=function(a){return An(this.h.count(a))};
m.delete=function(a){return Rn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return An(this.h.get(a))};
m.getKey=function(a){return An(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Rn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Qn(a).then(function(d){return Bn(d,c)})}
function Sn(a,b){this.request=a;this.cursor=b}
function Qn(a){return An(a).then(function(b){return b?new Sn(a,b):null})}
m=Sn.prototype;m.advance=function(a){this.cursor.advance(a);return Qn(this.request)};
m.continue=function(a){this.cursor.continue(a);return Qn(this.request)};
m.delete=function(){return An(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return An(this.cursor.update(a))};function Tn(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Dn(g.result,{closed:r}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Wd,k=c.blocking,l=c.ef,n=c.upgrade,r=c.closed,t;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&$m("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:bn(a)});var x=f(),y=new In(g.transaction);
n&&n(x,function(z){return p.oldVersion<z&&p.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){$m("IDB_UNEXPECTEDLY_CLOSED",{dbName:bn(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Un(a,b,c){c=void 0===c?{}:c;return Tn(a,b,c)}
function Vn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Wd)&&c.addEventListener("blocked",function(){e()}),g.yield(zn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Aa(g),pn(f,a,"",-1);})}
;function Wn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Wn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Un(a,b,c)};
Wn.prototype.delete=function(a){a=void 0===a?{}:a;return Vn(this.name,a)};
function Xn(a,b){return new ln("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Yn(a,b){if(!b)throw qn("openWithToken",bn(a.name));return a.open()}
Wn.prototype.open=function(){function a(){var f,g,h,k,l,n,r,t,p,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",za(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,H=[],I=v(Object.keys(z.Fb)),M=I.next();!M.done;M=I.next()){M=M.value;var N=z.Fb[M],K=void 0===N.Me?Number.MAX_VALUE:N.Me;!(h.h.version>=N.Kb)||h.h.version>=K||h.h.objectStoreNames.contains(M)||H.push(M)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Fb);n=h.objectStoreNames();
if(c.m<T("ytidb_reopen_db_retries",0))return c.m++,h.close(),Zm(new ln("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<T("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return Zm(new ln("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new mn(n,l);case 5:return y.return(h);case 2:r=Aa(y);if(r instanceof DOMException?
"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;p=t.h.version;if(void 0!==c.options.version&&p>c.options.version+1)throw t.close(),c.j=!1,Xn(c,p);return y.return(t);case 8:throw b(),r instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),pn(r,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Xn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,ef:b,upgrade:this.options.upgrade};return this.h=d=a()};var Zn=new Wn("YtIdbMeta",{Fb:{databases:{Kb:1}},upgrade:function(a,b){b(1)&&Fn(a,"databases",{keyPath:"actualName"})}});
function $n(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Yn(Zn,b),2);c=d.i;return d.return(En(c,["databases"],{ha:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return An(f.h.put(a,void 0)).then(function(){})})}))})}
function ao(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(Yn(Zn,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function bo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(Yn(Zn,b),2)):3!=e.h?(d=e.i,e.yield(En(d,["databases"],{ha:!0,mode:"readonly"},function(f){c.length=0;return On(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function co(a){return bo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function eo(a,b,c){return bo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function fo(a){var b,c;return A(function(d){if(1==d.h)return b=fm("YtIdbMeta hasAnyMeta other"),d.yield(bo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var go,ho=new function(){}(new function(){});
function io(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Rm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=cn)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Kc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield($n(d,ho),4);case 4:return e.yield(ao("yt-idb-test-do-not-use",ho),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function jo(){if(void 0!==go)return go;Um=!0;return go=io().then(function(a){Um=!1;var b;if(null!=(b=Qm())&&b.h){var c;b={hasSucceededOnce:(null==(c=Rm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Qm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function ko(){return E("ytglobal.idbToken_")||void 0}
function lo(){var a=ko();return a?Promise.resolve(a):jo().then(function(b){(b=b?ho:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var mo=0;function no(a,b){mo||(mo=li.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(lo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(eo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(Vn(f.actualName),7);case 7:return h.yield(ao(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Aa(h),Zm(g),d=!1;case 4:li.qa(mo),mo=0,d&&no(a,b),h.h=0}})}))}
function oo(){var a;return A(function(b){return 1==b.h?b.yield(lo(),2):(a=b.i)?b.return(fo(a)):b.return(!1)})}
new Ah;function po(a){if(!em())throw a=new ln("AUTH_INVALID",{dbName:a}),Zm(a),a;var b=fm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function qo(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(lo(),2);case 2:g=n.i;if(!g)throw h=qn("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Zm(h),h;an(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:po(a);za(n,3);return n.yield($n(k,g),5);case 5:return n.yield(Un(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Aa(n),za(n,7),n.yield(ao(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Aa(n);case 8:throw l;}})}
function ro(a,b,c){c=void 0===c?{}:c;return qo(a,b,!1,c)}
function so(a,b,c){c=void 0===c?{}:c;return qo(a,b,!0,c)}
function to(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(lo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();an(a);d=po(a);return e.yield(Vn(d.actualName,b),3)}return e.yield(ao(d.actualName,c),0)})}
function uo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(Vn(d.actualName,b),2):e.yield(ao(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function vo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(lo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();an("LogsDatabaseV2");return d.yield(co(b),3)}c=d.i;return d.yield(uo(c,a,b),0)})}
function wo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(lo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();an(a);return d.yield(Vn(a,b),3)}return d.yield(ao(a,c),0)})}
;function xo(a,b){Wn.call(this,a,b);this.options=b;an(a)}
w(xo,Wn);function yo(a,b){var c;return function(){c||(c=new xo(a,b));return c}}
xo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.uc?so:ro)(a,b,Object.assign({},c))};
xo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.uc?wo:to)(this.name,a)};
function zo(a,b){return yo(a,b)}
;var Ao={},Bo=zo("ytGcfConfig",{Fb:(Ao.coldConfigStore={Kb:1},Ao.hotConfigStore={Kb:1},Ao),uc:!1,upgrade:function(a,b){b(1)&&(Mn(Fn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Mn(Fn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Co(a){return Yn(Bo(),a)}
function Do(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Co(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Hn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Eo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Co(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Hn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Fo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Co(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(En(b,["coldConfigStore"],{mode:"readwrite",ha:!0},function(e){return Rn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Go(a){var b,c;return A(function(d){return 1==d.h?d.yield(Co(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(En(b,["hotConfigStore"],{mode:"readwrite",ha:!0},function(e){return Rn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Ho(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Ho,G);Ho.prototype.M=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;G.prototype.M.call(this)};function Io(){this.h=0;this.i=new Ho}
function Jo(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:null}
function Ko(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=ko();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(Go(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Do(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Lo(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!S("start_client_gcf"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=ko())?c?h.v(4):h.yield(Fo(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Eo(c,b,g,d),0)})}
function Mo(){if(!Io.h){var a=new Io;Io.h=a}a=Io.h;var b=U()-a.h;if(!(0!==a.h&&b<T("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Io.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function No(){return"INNERTUBE_API_KEY"in Hk&&"INNERTUBE_API_VERSION"in Hk}
function Oo(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),re:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),rd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),te:R("INNERTUBE_CONTEXT_HL"),se:R("INNERTUBE_CONTEXT_GL"),ue:R("INNERTUBE_HOST_OVERRIDE")||"",xe:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),we:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Po(a){var b={client:{hl:a.te,gl:a.se,clientName:a.rd,clientVersion:a.innertubeContextClientVersion,configInfo:a.re}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=bl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.rd;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Ml()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=bm())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=cm())&&
b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=Mo())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Vk(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Qo(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Pf:(a=Jl(Il()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function Ro(a,b){this.version=a;this.args=b}
Ro.prototype.serialize=function(){return{version:this.version,args:this.args}};function So(a,b){this.topic=a;this.h=b}
So.prototype.toString=function(){return this.topic};var To=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ib;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",To);var Uo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Uo);var Vo=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Vo);var Wo=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Wo);
D("ytPubsub2Pubsub2SkipSubKey",null);function Xo(a,b){var c=Yo();c&&c.publish.call(c,a.toString(),a,b)}
function Zo(a){var b=$o,c=Yo();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Uo[d])try{if(f&&b instanceof So&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ya){var l=new h;h.Ya=l.version}var n=h.Ya}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var r=n.construct;
var t=k.args,p=t.length;if(0<p){var x=Array(p);for(k=0;k<p;k++)x[k]=t[k];var y=x}else y=[];f=r.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Nk(z)}},Wo[b.toString()]?E("yt.scheduler.instance")?li.oa(g):fl(g,0):g())});
Uo[d]=!0;Vo[b.toString()]||(Vo[b.toString()]=[]);Vo[b.toString()].push(d);return d}
function ap(){var a=bp,b=Zo(function(c){a.apply(void 0,arguments);cp(b)});
return b}
function cp(a){var b=Yo();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete Uo[c]}))}
function Yo(){return E("ytPubsub2Pubsub2Instance")}
;function dp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Xo("meta_logging_csi_event",{timerName:a,lg:b})}
;var ep=T("max_body_size_to_compress",5E5),fp=T("min_body_size_to_compress",500),gp=!0,hp=0,ip=0,jp=T("compression_performance_threshold_lr",250),kp=T("slow_compressions_before_abandon_count",4);
function lp(a,b,c,d){var e=U(),f={startTime:e,ticks:{},infos:{}};if(gp)try{var g=mp(b);if(null==g||!(g>ep||g<fp)){var h=jk(gi(b)),k=U();f.ticks.gelc=k;ip++;S("disable_compression_due_to_performance_degredation")&&k-e>=jp&&(hp++,S("abandon_compression_after_N_slow_zips")?ip===T("compression_disable_point")&&hp>kp&&(gp=!1):gp=!1);np(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Ok(l),d(a,c)}else d(a,c)}
function op(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(gp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=mp(g);if(null!=h&&(h>ep||h<fp))return a;f=jk(gi(g),b?{level:1}:void 0);var k=U();e.ticks.gelc=k;if(b){ip++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=jp)if(hp++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=hp/ip;var l=kp/T("compression_disable_point");0<ip&&0===ip%T("compression_disable_point")&&b>=l&&(gp=!1)}else gp=!1;np(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Ok(n),a}}else return a}
function mp(a){try{return(new Blob(a.split(""))).size}catch(b){return Ok(b),null}}
function np(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||dp("gel_compression",a,{sampleRate:.1})}
;function pp(a){a=Object.assign({},a);delete a.Authorization;var b=tg();if(b){var c=new ri;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Be(c.digest(),3)}return a}
;var qp;function rp(){qp||(qp=new Pm("yt.innertube"));return qp}
function sp(a,b,c,d){if(d)return null;d=rp().get("nextId",!0)||1;var e=rp().get("requests",!0)||{};e[d]={method:a,request:b,authState:pp(c),requestTime:Math.round(U())};rp().set("nextId",d+1,86400,!0);rp().set("requests",e,86400,!0);return d}
function tp(a){var b=rp().get("requests",!0)||{};delete b[a];rp().set("requests",b,86400,!0)}
function up(a){var b=rp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=pp(Qo(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),vp(a,d.method,e,{}));delete b[c]}}rp().set("requests",b,86400,!0)}}
;function wp(a){this.Yb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.wb=function(){};
this.now=Date.now;this.Ob=!1;var b;this.Jd=null!=(b=a.Jd)?b:100;var c;this.Dd=null!=(c=a.Dd)?c:1;var d;this.Bd=null!=(d=a.Bd)?d:2592E6;var e;this.zd=null!=(e=a.zd)?e:12E4;var f;this.Cd=null!=(f=a.Cd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.ec=!!a.ec;var h;this.cc=null!=(h=a.cc)?h:.1;var k;this.oc=null!=(k=a.oc)?k:10;a.handleError&&(this.handleError=a.handleError);a.wb&&(this.wb=a.wb);a.Ob&&(this.Ob=a.Ob);a.Yb&&(this.Yb=a.Yb);this.U=a.U;this.Ea=a.Ea;this.ba=a.ba;this.aa=a.aa;this.Ra=a.Ra;this.Oc=
a.Oc;this.Nc=a.Nc;xp(this)&&(!this.U||this.U("networkless_logging"))&&yp(this)}
function yp(a){xp(a)&&!a.Ob&&(a.h=!0,a.ec&&Math.random()<=a.cc&&a.ba.Yd(a.T),zp(a),a.aa.wa()&&a.Wb(),a.aa.listen(a.Oc,a.Wb.bind(a)),a.aa.listen(a.Nc,a.dd.bind(a)))}
m=wp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(xp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&Ap(c,d)}).catch(function(e){Ap(c,d);
Bp(c,e)})}else this.Ra(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(xp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ba.set(e,d.T).catch(function(l){Bp(d,l)}),2);
f(g,h);k.h=0})}}this.Ra(a,b,e.skipRetry)}else this.ba.set(e,this.T).catch(function(g){d.Ra(a,b,e.skipRetry);
Bp(d,g)})}else this.Ra(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(xp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ba.sb(d.id,c.T):e=!0;c.aa.ib&&c.U&&c.U("vss_network_hint")&&c.aa.ib(!0);f(g,h)};
this.Ra(d.url,d.options);this.ba.set(d,this.T).then(function(g){d.id=g;e&&c.ba.sb(d.id,c.T)}).catch(function(g){Bp(c,g)})}else this.Ra(a,b)};
m.Wb=function(){var a=this;if(!xp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ba.od("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(Ap(a,b),3):(a.dd(),c.return());a.i&&(a.i=0,a.Wb());c.h=0})},this.Jd))};
m.dd=function(){this.Ea.qa(this.i);this.i=0};
function Ap(a,b){var c;return A(function(d){switch(d.h){case 1:if(!xp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.v(2);break}return d.yield(a.ba.ze(b.id,a.T),3);case 3:(c=d.i)||a.wb(Error("The request cannot be found in the database."));case 2:if(Cp(a,b,a.Bd)){d.v(4);break}a.wb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.v(5);break}return d.yield(a.ba.sb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=Dp(a,
b));if(!b){d.v(0);break}if(!b.skipRetry||void 0===b.id){d.v(8);break}return d.yield(a.ba.sb(b.id,a.T),8);case 8:a.Ra(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Dp(a,b){if(!xp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Ep(f);(h=Fp(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.oc)){n.v(2);break}if(!a.aa.sc){n.v(3);break}return n.yield(a.aa.sc(),3);case 3:if(a.aa.wa()){n.v(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.ba.Rc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.oc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.Dd?n.yield(a.ba.Rc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.ba.sb(b.id,a.T),8);case 12:a.Ea.oa(function(){a.aa.wa()&&a.Wb()},a.Cd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.ba.sb(b.id,a.T),2);a.aa.ib&&a.U&&a.U("vss_network_hint")&&a.aa.ib(!0);d(e,f);h.h=0})};
return b}
function Cp(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zp(a){if(!xp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ba.od("QUEUED",a.T).then(function(b){b&&!Cp(a,b,a.zd)?a.Ea.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.ba.Rc(b.id,a.T),2);zp(a);c.h=0})}):a.aa.wa()&&a.Wb()})}
function Bp(a,b){a.Pd&&!a.aa.wa()?a.Pd(b):a.handleError(b)}
function xp(a){return!!a.T||a.Yb}
function Ep(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Fp(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Gp;
function Hp(){if(Gp)return Gp();var a={};Gp=zo("LogsDatabaseV2",{Fb:(a.LogsRequestsStore={Kb:2},a),uc:!1,upgrade:function(b,c,d){c(2)&&Fn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Mn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Gp()}
;function Ip(a){return Yn(Hp(),a)}
function Jp(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Ip(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Hn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();Kp(c);return g.return(f)})}
function Lp(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(Ip(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(En(d,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(n){return Rn(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===
a&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=U();Kp(c);return l.return(k)})}
function Mp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Ip(b),2);c=d.i;return d.return(En(c,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",An(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Np(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(Ip(b),2);e=f.i;return f.return(En(e,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),An(h.h.put(k,void 0)).then(function(){return k})):un.resolve(void 0)})}))})}
function Op(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Ip(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Pp(a){var b,c;return A(function(d){if(1==d.h)return d.yield(Ip(a),2);b=d.i;c=U()-2592E6;return d.yield(En(b,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){return On(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Qp(){A(function(a){return a.yield(vo(),0)})}
function Kp(a){S("nwl_csi_killswitch")||dp("networkless_performance",a,{sampleRate:1})}
;var Rp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485};var Sp={},Tp=zo("ServiceWorkerLogsDatabase",{Fb:(Sp.SWHealthLog={Kb:1},Sp),uc:!0,upgrade:function(a,b){b(1)&&Mn(Fn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Up(a){return Yn(Tp(),a)}
function Vp(a){var b,c;A(function(d){if(1==d.h)return d.yield(Up(a),2);b=d.i;c=U()-2592E6;return d.yield(En(b,["SWHealthLog"],{mode:"readwrite",ha:!0},function(e){return On(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Wp(a){var b;return A(function(c){if(1==c.h)return c.yield(Up(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Xp={},Yp=0;function Zp(a){var b=new Image,c=""+Yp++;Xp[c]=b;b.onload=b.onerror=function(){delete Xp[c]};
b.src=a}
;function $p(){this.h=new Map;this.i=!1}
function aq(){if(!$p.h){var a=E("yt.networkRequestMonitor.instance")||new $p;D("yt.networkRequestMonitor.instance",a);$p.h=a}return $p.h}
$p.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
$p.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
$p.prototype.removeParams=function(a){return a.split("?")[0]};
$p.prototype.removeParams=$p.prototype.removeParams;$p.prototype.isEndpointCFR=$p.prototype.isEndpointCFR;$p.prototype.requestComplete=$p.prototype.requestComplete;$p.getInstance=aq;var bq;function cq(){bq||(bq=new Pm("yt.offline"));return bq}
function dq(a){if(S("offline_error_handling")){var b=cq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);cq().set("errors",b,2592E3,!0)}}
;function eq(){ud.call(this);var a=this;this.j=!1;this.i=ki();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=cq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new dm(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Nk(d)}cq().set("errors",{},2592E3,!0)}}})}
w(eq,ud);function fq(){if(!eq.h){var a=E("yt.networkStatusManager.instance")||new eq;D("yt.networkStatusManager.instance",a);eq.h=a}return eq.h}
m=eq.prototype;m.wa=function(){return this.i.wa()};
m.ib=function(a){this.i.i=a};
m.ne=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.de=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.sc=function(a){a=ii(this.i,a);a.then(function(b){S("use_cfr_monitor")&&aq().requestComplete("generate_204",b)});
return a};
eq.prototype.sendNetworkCheckRequest=eq.prototype.sc;eq.prototype.listen=eq.prototype.listen;eq.prototype.enableErrorFlushing=eq.prototype.de;eq.prototype.getWindowStatus=eq.prototype.ne;eq.prototype.networkStatusHint=eq.prototype.ib;eq.prototype.isNetworkAvailable=eq.prototype.wa;eq.getInstance=fq;function gq(a){a=void 0===a?{}:a;ud.call(this);var b=this;this.i=this.m=0;this.j=fq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.qc?(this.qc=a.qc,c("networkstatus-online",function(){hq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){hq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){vd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){vd(b,"publicytnetworkstatus-offline")})))}
w(gq,ud);gq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
gq.prototype.ib=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
gq.prototype.sc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&aq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ib((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function hq(a,b){a.qc?a.i?(li.qa(a.m),a.m=li.oa(function(){a.l!==b&&(vd(a,b),a.l=b,a.i=U())},a.qc-(U()-a.i))):(vd(a,b),a.l=b,a.i=U()):vd(a,b)}
;var iq;function jq(){var a=wp.call;iq||(iq=new gq({ag:!0,Tf:!0}));a.call(wp,this,{ba:{Yd:Pp,sb:Op,od:Lp,ze:Mp,Rc:Np,set:Jp},aa:iq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Ok(new dm(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Nk(b)},
wb:Ok,Ra:kq,now:U,Pd:dq,Ea:Om(),Oc:"publicytnetworkstatus-online",Nc:"publicytnetworkstatus-offline",ec:!0,cc:.1,oc:T("potential_esf_error_limit",10),U:S,Ob:!(em()&&lq())});this.j=new Ah;S("networkless_immediately_drop_all_requests")&&Qp();wo("LogsDatabaseV2")}
w(jq,wp);function mq(){var a=E("yt.networklessRequestController.instance");a||(a=new jq,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&lo().then(function(b){a.T=b;yp(a);a.j.resolve();a.ec&&Math.random()<=a.cc&&a.T&&Vp(a.T);S("networkless_immediately_drop_sw_health_store")&&nq(a)}));
return a}
jq.prototype.writeThenSend=function(a,b){b||(b={});em()||(this.h=!1);wp.prototype.writeThenSend.call(this,a,b)};
jq.prototype.sendThenWrite=function(a,b,c){b||(b={});em()||(this.h=!1);wp.prototype.sendThenWrite.call(this,a,b,c)};
jq.prototype.sendAndWrite=function(a,b){b||(b={});em()||(this.h=!1);wp.prototype.sendAndWrite.call(this,a,b)};
jq.prototype.awaitInitialization=function(){return this.j.promise};
function nq(a){var b;A(function(c){if(!a.T)throw b=qn("clearSWHealthLogsDb"),b;return c.return(Wp(a.T).catch(function(d){a.handleError(d)}))})}
function kq(a,b,c){b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&oq(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)pl(a,void 0,"POST",e);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))pl(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new $a({url:a});if(h.j&&h.i||h.l){var k=ac(bc(5,a)),l;if(!(l=!k||!k.endsWith("/aclk"))){var n=a.search(oc),r=nc(a,0,"ri",n);if(0>r)var t=null;else{var p=a.indexOf("&",r);if(0>p||p>n)p=n;t=decodeURIComponent(a.slice(r+3,-1!==p?p:0).replace(/\+/g," "))}l="1"!==t}var x=!l;break b}}catch(z){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(z){}y=!1}c=y?!0:!1}else c=!1;c||Zp(a)}}else b.compress?
b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),lp(a,b.postBody,b,ml)):lp(a,JSON.stringify(b.postParams),b,ul):ml(a,b)}
function oq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){aq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){aq().requestComplete(a,!0);d(e,f)}}
function lq(){return"www.youtube-nocookie.com"!==cc(document.location.toString())}
;var pq=!1,qq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:pq};D("ytNetworklessLoggingInitializationOptions",qq);function rq(){var a;A(function(b){if(1==b.h)return b.yield(lo(),2);a=b.i;if(!a||!em()&&!S("nwl_init_require_datasync_id_killswitch")||!lq())return b.v(0);pq=!0;qq.isNwlInitialized=pq;return b.yield(mq().awaitInitialization(),0)})}
;function sq(a){var b=this;this.config_=null;a?this.config_=a:No()&&(this.config_=Oo());hm(function(){up(b)},5E3)}
sq.prototype.isReady=function(){!this.config_&&No()&&(this.config_=Oo());return!!this.config_};
function vp(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=sp(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(M,N){tp(y);z(M,N)};
c.onFetchSuccess=function(M,N){tp(y);H(M,N)}}try{if(x&&d.retry&&!d.ud.bypassNetworkless)g.method="POST",d.ud.writeThenSend?mq().writeThenSend(p,g):mq().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));lp(p,I,g,ml)}else lp(p,JSON.stringify(g.postParams),g,ul);else S("web_all_payloads_via_jspb")?ml(p,g):ul(p,g)}catch(M){if("InvalidAccessError"==M.name)y&&(tp(y),y=0),Ok(Error("An extension is blocking network request."));else throw M;}y&&hm(function(){up(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ok(new dm("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new dm("innertube xhrclient not ready",b,c,d);Nk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ue)&&(h=f);var k=a.config_.xe||!1,l=Qo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},t=a.config_.we&&f;t=t&&f.startsWith("Bearer");t||(r.key=a.config_.innertubeApiKey);var p=Xk(""+h+n,r||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
qq.isNwlInitialized:pq)?jo().then(function(x){e(x)}):e(!1)}
;var tq=0,uq=Mc?"webkit":Lc?"moz":Jc?"ms":Ic?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++tq});var vq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function wq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in vq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function xq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
wq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
wq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
wq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",mb);var yq=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",yq);
function zq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Aq=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Bq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=zq(a,b,c,d);if(e)return e;e=++yq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new wq(h);if(!Ed(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new wq(h);
h.currentTarget=a;return c.call(a,h)};
g=Mk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Aq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
function Cq(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Aq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
;function Dq(a){this.D=a;this.h=null;this.l=0;this.s=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.S=Bq(window,"mousemove",Ua(this.W,this));a=Ua(this.R,this);"function"===typeof a&&(a=Mk(a));this.Y=window.setInterval(a,25)}
Xa(Dq,G);Dq.prototype.W=function(a){void 0===a.h&&xq(a);var b=a.h;void 0===a.i&&xq(a);this.h=new Ad(b,a.i)};
Dq.prototype.R=function(){if(this.h){var a=U();if(0!=this.l){var b=this.s,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.s=this.h;this.j=(this.j+1)%4}};
Dq.prototype.M=function(){window.clearInterval(this.Y);Cq(this.S)};var Eq=new Set([174,173,175]),Iq={};
function Jq(a){var b=void 0===a?{}:a;a=void 0===b.Ie?!1:b.Ie;b=void 0===b.ee?!0:b.ee;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&Kq();Bq(document,"keydown",Kq);Bq(document,"keyup",Kq);Bq(document,"mousedown",Kq);Bq(document,"mouseup",Kq);a?Bq(window,"touchmove",function(){Lq("touchmove",200)},{passive:!0}):(Bq(window,"resize",function(){Lq("resize",200)}),b&&Bq(window,"scroll",function(){Lq("scroll",
200)}));
new Dq(function(){Lq("mouse",100)});
Bq(document,"touchstart",Kq,{passive:!0});Bq(document,"touchend",Kq,{passive:!0})}}
function Lq(a,b){Iq[a]||(Iq[a]=!0,li.oa(function(){Kq();Iq[a]=!1},b))}
function Kq(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Eq.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&Jq(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Mq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Nq=C.ytPubsubPubsubInstance||new L,Oq=C.ytPubsubPubsubSubscribedKeys||{},Pq=C.ytPubsubPubsubTopicToKeys||{},Qq=C.ytPubsubPubsubIsSynchronous||{};function Rq(a,b){var c=Sq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Oq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Qq[a]?f():fl(f,0)}catch(g){Nk(g)}},void 0);
Oq[d]=!0;Pq[a]||(Pq[a]=[]);Pq[a].push(d);return d}return 0}
function Tq(a){var b=Sq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete Oq[c]}))}
function Uq(a,b){var c=Sq();c&&c.publish.apply(c,arguments)}
function Vq(a){var b=Sq();if(b)if(b.clear(a),a)Wq(a);else for(var c in Pq)Wq(c)}
function Sq(){return C.ytPubsubPubsubInstance}
function Wq(a){Pq[a]&&(a=Pq[a],db(a,function(b){Oq[b]&&delete Oq[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ib;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",Nq);D("ytPubsubPubsubTopicToKeys",Pq);D("ytPubsubPubsubIsSynchronous",Qq);D("ytPubsubPubsubSubscribedKeys",Oq);var Xq=Symbol("injectionDeps");function Yq(a){this.name=a}
Yq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Zq(a){this.key=a}
function $q(){this.h=new Map;this.i=new Map}
$q.prototype.resolve=function(a){return a instanceof Zq?ar(this,a.key,[],!0):ar(this,a,[])};
function ar(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Md)var e=d.Md;else if(d.lf)e=d[Xq]?br(a,d[Xq],c):[],e=d.lf.apply(d,ka(e));else if(d.Ld){e=d.Ld;var f=e[Xq]?br(a,e[Xq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.jg||a.i.set(b,e);return e}
function br(a,b,c){return b?b.map(function(d){return d instanceof Zq?ar(a,d.key,c,!0):ar(a,d,c)}):[]}
;var cr;function dr(){cr||(cr=new $q);return cr}
;var er=window;function fr(){var a,b;return"h5vcc"in er&&(null==(a=er.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=er.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in er&&er.performance.mark&&er.performance.measure?2:0}
function gr(a){switch(fr()){case 1:er.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:er.performance.mark(a+"-start");break;case 0:break;default:Lh()}}
function hr(a){switch(fr()){case 1:er.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";er.performance.mark(c);er.performance.measure(a,b,c);break;case 0:break;default:Lh()}}
;var ir=S("web_enable_lifecycle_monitoring")&&0!==fr(),jr=S("web_enable_lifecycle_monitoring");function kr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Om():d;this.j=c;this.scheduler=d;this.i=new Ah;this.h=a;for(a={fb:0};a.fb<this.h.length;a={Sb:a.Sb,fb:a.fb},a.fb++)a.Sb=this.h[a.fb],c=function(e){return function(){e.Sb.Ic();b.h[e.fb].pc=!0;b.h.every(function(f){return!0===f.pc})&&b.i.resolve()}}(a),d=this.getPriority(a.Sb),d=this.scheduler.bb(c,d),this.h[a.fb]=Object.assign({},a.Sb,{Ic:c,
jobId:d})}
function lr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.pc||(a.scheduler.qa(c.jobId),a.scheduler.bb(c.Ic,10))}
kr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.pc||this.scheduler.qa(b.jobId),b.pc=!0;this.i.resolve()};
kr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function mr(a){this.state=a;this.plugins=[];this.l=void 0;this.s={};ir&&gr(this.state)}
m=mr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;ir&&hr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(lr(this.j),this.j=void 0);nr(this,a,b);this.state=a;ir&&gr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(or(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function or(a,b){var c=b.filter(function(e){return 10===pr(a,e)}),d=b.filter(function(e){return 10!==pr(a,e)});
return a.s.ig?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Pe.apply(a,[c].concat(ka(e))),2);a.Gd.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Qe.apply(a,[c].concat(ka(e)));a.Gd.apply(a,[d].concat(ka(e)))}}
m.Qe=function(a){for(var b=B.apply(1,arguments),c=Om(),d=v(a),e=d.next(),f={};!e.done;f={Bb:f.Bb},e=d.next())f.Bb=e.value,c.Jb(function(g){return function(){qr(g.Bb.name);g.Bb.callback.apply(g.Bb,ka(b));rr(g.Bb.name)}}(f))};
m.Pe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=Om(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.v(0);f.gb=e.value;f.Lb=void 0;g=function(k){return function(){qr(k.gb.name);var l=k.gb.callback.apply(k.gb,ka(b));"function"===typeof(null==l?void 0:l.then)?k.Lb=l.then(function(){rr(k.gb.name)}):rr(k.gb.name)}}(f);
c.Jb(g);return f.Lb?h.yield(f.Lb,3):h.v(3)}f={gb:f.gb,Lb:f.Lb};e=d.next();return h.v(2)})};
m.Gd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ic:function(){qr(e.name);e.callback.apply(e,ka(b));rr(e.name)},
priority:pr(c,e)}});
d.length&&(this.j=new kr(d))};
function pr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function qr(a){ir&&a&&gr(a)}
function rr(a){ir&&a&&hr(a)}
function nr(a,b,c){jr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(mr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function sr(a){mr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var tr;w(sr,mr);sr.prototype.i=function(a,b){var c=this;this.h=hm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
sr.prototype.m=function(a,b){this.h&&(li.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function ur(){tr||(tr=new sr);return tr}
;function vr(){this.store={};this.h={}}
vr.prototype.storePayload=function(a,b){a=wr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
vr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=xr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
vr.prototype.extractMatchingEntries=function(a){a=xr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
vr.prototype.getSequenceCount=function(a){a=xr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function xr(a,b){var c=wr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&wr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(yr(b.auth,g[0])){var h=b.isJspb;yr(void 0===h?"undefined":h?"true":"false",g[1])&&yr(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),yr(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function yr(a,b){return void 0===a||"undefined"===a?!0:a===b}
vr.prototype.getSequenceCount=vr.prototype.getSequenceCount;vr.prototype.extractMatchingEntries=vr.prototype.extractMatchingEntries;vr.prototype.smartExtractMatchingEntries=vr.prototype.smartExtractMatchingEntries;vr.prototype.storePayload=vr.prototype.storePayload;function wr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function zr(a,b){if(a)return a[b.name]}
;var Ar=T("initial_gel_batch_timeout",2E3),Br=T("gel_queue_timeout_max_ms",6E4),Cr=Math.pow(2,16)-1,Dr=T("gel_min_batch_size",5),Er=void 0;function Fr(){this.l=this.h=this.i=0;this.j=!1}
var Gr=new Fr,Hr=new Fr,Ir=new Fr,Jr=new Fr,Kr,Lr=!0,Mr=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Mr);var Nr={};function Or(){var a=E("yt.logging.ims");a||(a=new vr,D("yt.logging.ims",a));return a}
function Pr(a,b){if("log_event"===a.endpoint){var c=Qr(a),d=Rr(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=Rp[d||""];var f,g,h,k=null==dr().resolve(new Zq(Io))?void 0:null==(f=Jo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;k=Sr(e.tier);if(400===k){Tr(a,b);return}}Nr[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Or().storePayload(e,a.payload);Ur(b,c,e,"gelDebuggingEvent"===d)}}
function Ur(a,b,c,d){function e(){Vr({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(Er=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=U(),h=Wr(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=Or().getSequenceCount(c));1E3<=d?e():d>=a?Kr||(Kr=Xr(function(){e();Kr=void 0},0)):10<=g-k&&(Yr(f,c.tier),h.l=g)}
function Tr(a,b){if("log_event"===a.endpoint){var c=Qr(a),d=new Map;d.set(c,[a.payload]);var e=Rr(a.payload)||"";b&&(Er=new b);return new Rd(function(f,g){Er&&Er.isReady()?Zr(d,Er,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function Qr(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Mr[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Vr(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Rd(function(e,f){var g=Wr(c,d),h=g.j;g.j=!1;$r(g.i);$r(g.h);g.h=0;Er&&Er.isReady()?void 0===d&&S("enable_web_tiered_gel")?as(e,f,a,b,c,300,h):as(e,f,a,b,c,d,h):(Yr(c,d),e())})}
function as(a,b,c,d,e,f,g){var h=Er;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=S("enable_web_tiered_gel")?Or().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Or().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(Nr)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Or().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Or().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Nr[l];Zr(k,h,a,b,c,!1,g)}
function Yr(a,b){function c(){Vr({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Wr(a,b),e=d===Jr||d===Ir?5E3:Br;S("web_gel_timeout_cap")&&!d.h&&(e=Xr(function(){c()},e),d.h=e);
$r(d.i);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Lr&&(e=Ar);e=Xr(function(){0<T("gel_min_batch_size")?Or().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Dr&&c():c()},e);
d.i=e}
function Zr(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(U()),k=a.size,l=(void 0===g?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={kc:g.kc,cb:g.cb,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,mc:g.mc,lc:g.lc},n=a.next()){var r=v(n.value);n=r.next().value;r=r.next().value;g.cb=sb({context:Po(b.config_||Oo())});if(!Na(r)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.cb.events=r;(r=Mr[n])&&bs(g.cb,n,r);
delete Mr[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;cs(g.cb,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.mc=function(t){S("start_client_gcf")&&li.oa(function(){return A(function(p){return p.yield(ds(t),0)})});
k--;k||c()};
g.kc=0;g.lc=function(t){return function(){t.kc++;if(e.bypassNetworkless&&1===t.kc)try{vp(b,l,t.cb,es({writeThenSend:!0},t.dangerousLogToVisitorSession,t.mc,t.lc,f)),Lr=!1}catch(p){Nk(p),d()}k--;k||c()}}(g);
try{vp(b,l,g.cb,es(e,g.dangerousLogToVisitorSession,g.mc,g.lc,f)),Lr=!1}catch(t){Nk(t),d()}}}
function es(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,ud:a,dangerousLogToVisitorSession:b,Qf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};gs()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function cs(a,b,c){gs()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Cr/2)),c++,c>Cr&&(c=1),Ik("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function bs(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function gs(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Xr(a,b){return S("transport_use_scheduler")?S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?hm(function(){if("none"===ur().currentState)a();else{var c={};ur().install((c.none={callback:a},c))}},b):hm(a,b):fl(a,b)}
function $r(a){S("transport_use_scheduler")?li.qa(a):window.clearTimeout(a)}
function ds(a){var b,c,d,e,f,g,h,k,l,n;return A(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=zr(d,nk),g=null==(f=d)?void 0:f.hotHashData,h=zr(d,mk),l=null==(k=d)?void 0:k.coldHashData,(n=dr().resolve(new Zq(Io)))?g?e?r.yield(Ko(n,g,e),2):r.yield(Ko(n,g),2):r.v(2):r.return()):l?h?r.yield(Lo(n,l,h),0):r.yield(Lo(n,l),0):r.v(0)})}
function Wr(a,b){b=void 0===b?200:b;return a?300===b?Jr:Hr:300===b?Ir:Gr}
function Rr(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Rp[b])return b}
function Sr(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var hs=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",hs);
function is(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Mq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,hs[b]=b in hs?hs[b]+1:0,a.sequence={index:hs[b],groupKey:b},d.endOfSequence&&delete hs[d.sequenceGroup]);(d.sendIsolatedPayload?Tr:Pr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Ym(a,b,c){c=void 0===c?{}:c;var d=sq;R("ytLoggingEventsDefaultDisabled",!1)&&sq===sq&&(d=null);S("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=Mq(),c.timestamp=U());is(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var js=new Set,ks=0,ls=0,ms=0,ns=[],ps=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Xm(a){qs(a)}
function rs(a){qs(a,"WARNING")}
function ss(a){a instanceof Error?qs(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new dm(a),a.name="RejectedPromiseError",rs(a))}
function qs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=ks))){d=ns;var k=Ac(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var r=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(r=El(a.args[t],"params."+t,c,r),
500<=r);t++);else if(a.hasOwnProperty("params")&&a.params){var p=a.params;if("object"===typeof a.params)for(t in p){if(p[t]){var x="params."+t,y=Gl(p[t]);c[x]=y;r+=x.length+y.length;if(500<r)break}}else c.params=Gl(p)}if(d.length)for(t=0;t<d.length&&!(r=El(d[t],"params.context."+t,c,r),500<=r);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Al();c=v(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.cg)){a=d.weight;break a}a=v(a.Sa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(vl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.nc[t.name])for(e=v(c.nc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Lc(f);break}t.params||(t.params={});a=Al();t.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Sa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));yb("sample").constructor!==xb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!js.has(t.message)){if(g&&S("web_enable_error_204"))ts(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Bl.ab("handleError",t),S("record_app_crashed_web")&&0===ms&&1===t.sampleWeight&&(ms++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),Ym("appCrashed",g)),ls++):"WARNING"===b&&Bl.ab("handleWarning",t);if(S("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(ps);for(c=a.next();!c.done;c=a.next())if(dn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Jk("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Ym("clientError",h),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&Vr(void 0,void 0,!1))}S("suppress_error_204_logging")||ts(b,t)}try{js.add(t.message)}catch(z){}ks++}}}
function ts(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}ml(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function us(){this.register=new Map}
function vs(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.eg("ABORTED")}
us.prototype.clear=function(){vs(this);this.register.clear()};
var ws=new us;var xs=Date.now().toString();
function ys(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(xs)for(a=1,b=0;b<xs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^xs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var zs,As=C.ytLoggingDocDocumentNonce_;As||(As=ys(),D("ytLoggingDocDocumentNonce_",As));zs=As;function Bs(a){this.h=a}
m=Bs.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new uk;void 0!==this.h.trackingParams?J(a,1,ff(this.h.trackingParams,!0)):(void 0!==this.h.veType&&J(a,2,of(this.h.veType)),void 0!==this.h.veCounter&&J(a,6,of(this.h.veCounter)),void 0!==this.h.elementIndex&&J(a,3,of(this.h.elementIndex)),this.h.isCounterfactual&&J(a,5,lf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();Tf(a,uk,7,b)}void 0!==this.h.youtubeData&&Tf(a,ok,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Cs(a){return R("client-screen-nonce-store",{})[void 0===a?0:a]}
function Ds(a,b){b=void 0===b?0:b;var c=R("client-screen-nonce-store");c||(c={},Ik("client-screen-nonce-store",c));c[b]=a}
function Es(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Fs(a){return R(Es(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Fs);function Gs(){var a=R("csn-to-ctt-auth-info");a||(a={},Ik("csn-to-ctt-auth-info",a));return a}
function Hs(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Is(a){a=Cs(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Is);function Js(a,b,c){var d=Gs();(c=Is(c))&&delete d[c];b&&(d[a]=b)}
function Ks(a){return Gs()[a]}
D("yt_logging_screen.getCttAuthInfo",Ks);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Cs(c)||b!==R(Es(c)))if(Js(a,d,c),Ds(a,c),Ik(Es(c),b),b=function(){setTimeout(function(){a&&Ym("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:zs,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Ls=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Ls);function Ms(a){Dk(Ls,arguments)}
;function Ns(){var a=rb(Os),b;return(new Rd(function(c,d){a.onSuccess=function(e){el(e)?c(new Ps(e)):d(new Qs("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Qs("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Qs("Request timed out","net.timeout",e))};
b=ml("//googleads.g.doubleclick.net/pagead/id",a)})).vc(function(c){c instanceof Yd&&b.abort();
return Wd(c)})}
function Qs(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Qs,Za);function Ps(a){this.xhr=a}
;function Rs(){this.h=0;this.value_=null}
Rs.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:Ss(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:Ts(a):this};
Rs.prototype.getValue=function(){return this.value_};
Rs.prototype.isRejected=function(){return 2==this.h};
Rs.prototype.$goog_Thenable=!0;function Ts(a){var b=new Rs;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function Ss(a){var b=new Rs;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function Us(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Yk(a)?"same-origin":"cors",credentials:Yk(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Vs(){return rg()||(we||xe)&&dn("applewebkit")&&!dn("version")&&(!dn("safari")||dn("gsa/"))||Oc&&dn("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Ws(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in sk)if(sk[d]==c.embeddedPlayerMode){b=sk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Xs(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ys;this.isTimeout=a instanceof Qs&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Yd}
w(Xs,Za);Xs.prototype.name="BiscottiError";function Ys(){Za.call(this,"Biscotti ID is missing from server")}
w(Ys,Za);Ys.prototype.name="BiscottiMissingError";var Os={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Zs=null;function $s(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Vs())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==pb(a))return Error("Biscotti ID is not available in private embed mode");if(Ws(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Bk(){var a=$s();if(void 0!==a)return Wd(a);Zs||(Zs=Ns().then(at).vc(function(b){return bt(2,b)}));
return Zs}
function at(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ys;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ys;a=a.id;Ck(a);Zs=Ss(a);ct(18E5,2);return a}
function bt(a,b){b=new Xs(b);Ck("");Zs=Ts(b);0<a&&ct(12E4,a-1);throw b;}
function ct(a,b){fl(function(){Ns().then(at,function(c){return bt(b,c)}).vc(ab)},a)}
function dt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Bk()}catch(b){return Wd(b)}}
;function et(a){if("1"!=pb(R("PLAYER_VARS",{}))){a&&Ak();try{dt().then(function(){},function(){}),fl(et,18E5)}catch(b){Nk(b)}}}
;function ft(){var a=Ul(),b=Xl(119),c=1<window.devicePixelRatio;if(document.body&&vi(document.body,"exp-invert-logo"))if(c&&!vi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!vi(d,"inverted-hdpi")){var e=ti(d);ui(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&vi(document.body,"inverted-hdpi")&&wi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Yl(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Rl[b]:(c=d.toString(16),Rl[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Rl)Rl.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Rl[f])));var f=d.join("&");Nl(b,f,63072E3,a.i,c)}}
;var gt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function ht(){var a=void 0===a?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=Wk(a).theme;return gt.get(b)||null}catch(c){}return null}
;function jt(){this.h={};if(this.i=Ql()){var a=Ol("CONSISTENCY");a&&kt(this,{encryptedTokenJarContents:a})}}
jt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Oa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];kt(this,a)}};
function kt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Nl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var lt=window.location.hostname.split(".").slice(-2).join(".");function mt(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=nt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var ot;function pt(){ot=E("yt.clientLocationService.instance");ot||(ot=new mt,D("yt.clientLocationService.instance",ot));return ot}
m=mt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=nt(this))&&this.h.set("yt-location-playability-token",a,15552E3):Nl("YT_CL",JSON.stringify({loctok:a}),15552E3,lt,!0))};
function nt(a){return void 0===a.h?new Pm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=nt(this))&&this.h.remove("yt-location-playability-token"):Pl("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function qt(a,b){var c,d=null==(c=zr(a,rk))?void 0:c.signal;if(d&&b.Vb&&(c=b.Vb[d]))return c();var e;if((c=null==(e=zr(a,pk))?void 0:e.request)&&b.ae&&(e=b.ae[c]))return e();for(var f in a)if(b.hd[f]&&(a=b.hd[f]))return a()}
;function rt(a){return function(){return new a}}
;var st={},tt=(st.WEB_UNPLUGGED="^unplugged/",st.WEB_UNPLUGGED_ONBOARDING="^unplugged/",st.WEB_UNPLUGGED_OPS="^unplugged/",st.WEB_UNPLUGGED_PUBLIC="^unplugged/",st.WEB_CREATOR="^creator/",st.WEB_KIDS="^kids/",st.WEB_EXPERIMENTS="^experiments/",st.WEB_MUSIC="^music/",st.WEB_REMIX="^music/",st.WEB_MUSIC_EMBEDDED_PLAYER="^music/",st.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",st);
function ut(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=tt[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(tt).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function vt(){}
vt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Kl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=sb(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Ul();var l="USER_INTERFACE_THEME_LIGHT";Xl(165)?l="USER_INTERFACE_THEME_DARK":Xl(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:ht()||l;h.userInterfaceTheme=k;if(!f){if(k=bm())h.connectionType=
k;S("web_log_effective_connection_type")&&(k=cm())&&(g.client.effectiveConnectionType=k)}var n;if(S("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var r;n=null==(r=C.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}S("web_gcf_hashes_innertube")&&(k=Mo())&&(r=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=r,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);r=Wk(C.location.href);!S("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Ll.h&&(r=Ll.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Ml(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!S("web_lr_app_quality_killswitch")&&(r=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:r}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(V){}t=void 0}t&&(h.timeZone=t)}(t=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=bl();jt.h||(jt.h=new jt);h=jt.h.h;r=[];n=0;for(var p in h)r[n++]=h[p];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:r});!S("web_prequest_context_killswitch")&&(p=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=p);t=Ul();p=Xl(58);t=t.get("gsml","");g.user=Object.assign({},g.user);p&&(g.user.enableSafetyMode=p);t&&(g.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?e&&(f=Is())&&(g.clientScreenNonce=f):
!f&&(f=Is())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;pt().setLocationOnInnerTubeContext(g);try{var x=Zk(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));for(var H=z.next();!H.done;H=z.next()){var I=v(H.value),M=I.next().value,N=I.next().value;x=M;y=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}}catch(V){qs(V)}z=g}else qs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var K;b="/youtubei/v1/"+ut(this.j());(H=null==(K=zr(a.commandMetadata,qk))?void 0:K.apiUrl)&&(b=H);K=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(K=String(b)+String(dc(K)));b={};b.key=R("INNERTUBE_API_KEY");S("json_condensed_response")&&(b.prettyPrint="false");K=Xk(K,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:K,kb:Us(K),Oa:z,config:a};a.config.Xb?a.config.Xb.identity=c:a.config.Xb={identity:c};return a}qs(new dm("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(vt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function wt(){}
w(wt,vt);wt.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",kb:Us("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
wt.prototype.j=function(){return[]};
wt.prototype.h=function(){};
wt.prototype.i=function(){};var xt={},zt=(xt.GET_DATASYNC_IDS=rt(wt),xt);var At="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Bt(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(0<=cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Fh(d,a),a=d.href)if(a=dc(a),a=ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Is()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Ct(a,b,f)}else Ct(a,b)}
function Ct(a,b,c){a=Dt(a);b=b?jc(b):"";c=c||5;Vs()&&Nl(a,b,c)}
function Dt(a){if(S("st_skip_debug_params")){for(var b=v(At),c=b.next();!c.done;c=b.next())a=qc(a,c.value);return"ST-"+Zb(a).toString(36)}return"ST-"+Zb(a).toString(36)}
;function Et(){try{return!!self.localStorage}catch(a){return!1}}
;function Ft(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Gt(a){if(Et()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ft(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Ht(){if(!Et())return!1;var a=fm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Ft(c.value),void 0!==c&&c!==a)return!0;return!1}
;function It(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return S("copy_login_info_to_st_cookie")&&("WEB"===R("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===R("INNERTUBE_CLIENT_NAME"))&&a}
function Jt(a){if(R("LOGGED_IN",!0)&&It()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);0<=cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=dc(a),(b=ec(b))?(b=Dt(b),b=(b=Ol(b)||null)?Vk(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;It()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Bt(a,b)}}
;function Kt(a){var b=B.apply(1,arguments);if(!Lt(a)||b.some(function(d){return!Lt(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Mt(a,c.value);return a}
function Mt(a,b){for(var c in b)if(Lt(b[c])){if(c in a&&!Lt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Mt(a[c],b[c])}else if(Nt(b[c])){if(c in a&&!Nt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ot(a[c],b[c])}else a[c]=b[c];return a}
function Ot(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Lt(c)?a.push(Mt({},c)):Nt(c)?a.push(Ot([],c)):a.push(c);return a}
function Lt(a){return"object"===typeof a&&!Array.isArray(a)}
function Nt(a){return"object"===typeof a&&Array.isArray(a)}
;function Pt(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Qt(){var a=Pt();a.info||(a.info={});return a.info}
function Rt(a){a=Pt(a);a.metadata||(a.metadata={});return a.metadata}
function St(a){a=Pt(a);a.tick||(a.tick={});return a.tick}
function Tt(a){a=Pt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Ut(a){a=Tt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Vt(a){var b=Pt(a).nonce;b||(b=ys(),Pt(a).nonce=b);return b}
;function Wt(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Xt(a){a=a||"";var b=E("ytcsi.reference");b||(Wt(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Wt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Yt=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",
W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]=
"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]=
"LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",
W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),X={},Zt=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.ctop=
"creatorInfo.topEntityType",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid="requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.nav_type="kabukiInfo.navigationType",X.prev_browse_id="kabukiInfo.prevBrowseId",
X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",
X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.rc="resourceInfo.resourceCache",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.aac_type="tvInfo.authAccessCredentialType",
X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),$t="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
au={},bu=(au.ccs="CANARY_STATE_",au.mver="MEASUREMENT_VERSION_",au.pis="PLAYER_INITIALIZED_STATE_",au.yt_pt="LATENCY_PLAYER_",au.pa="LATENCY_ACTION_",au.ctop="TOP_ENTITY_TYPE_",au.yt_vst="VIDEO_STREAM_TYPE_",au),cu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function du(a,b,c){c=Tt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Zt){c=Zt[a];0<=cb($t,c)&&(b=!!b);a in bu&&"string"===typeof b&&(b=bu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Kt({},d)}0<=cb(cu,a)||rs(new dm("Unknown label logged with GEL CSI",a))}
;function eu(a,b){Ro.call(this,1,arguments);this.timer=b}
w(eu,Ro);var fu=new So("aft-recorded",eu);var gu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",gu);function hu(){this.h=0}
function iu(){hu.h||(hu.h=new hu);return hu.h}
hu.prototype.tick=function(a,b,c,d){ju(this,"tick_"+a+"_"+b)||Ym("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
hu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");ju(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Ym("latencyActionInfo",a,{cttAuthInfo:c}))};
hu.prototype.jspbInfo=function(){};
hu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");ju(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Ym("latencyActionSpan",a,{cttAuthInfo:c}))};
function ju(a,b){gu[b]=gu[b]||{count:0};var c=gu[b];c.count++;c.time=U();a.h||(a.h=hm(function(){var d=U(),e;for(e in gu)gu[e]&&6E4<d-gu[e].time&&delete gu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new dm("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||rs(c)),!0):!1}
;var ku=window;function lu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function mu(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=nu(e.requestStart),e.responseEnd=nu(e.responseEnd),e.redirectStart=nu(e.redirectStart),e.redirectEnd=nu(e.redirectEnd),e.domainLookupEnd=nu(e.domainLookupEnd),e.connectStart=nu(e.connectStart),e.connectEnd=
nu(e.connectEnd),e.responseStart=nu(e.responseStart),e.secureConnectionStart=nu(e.secureConnectionStart),e.domainLookupStart=nu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function nu(a){return Math.round(ou()+a)}
function ou(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=ku.performance||ku.mozPerformance||ku.msPerformance||ku.webkitPerformance||new lu;var pu=!1,qu={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ua(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||ab,Z);function ru(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;Rt(c).loadType=d}(a=du(a,b,c))&&su(a,c)}}
function su(a,b){if(!S("web_csi_action_sampling_enabled")||!Pt(b).actionDisabled){var c=Xt(b||"");Kt(c.info,a);a.loadType&&(c=a.loadType,Rt(b).loadType=c);Kt(Ut(b),a);c=Vt(b);b=Pt(b).cttAuthInfo;iu().info(a,c,b)}}
function tu(){var a,b,c,d;return(null!=(d=null==dr().resolve(new Zq(Io))?void 0:null==(a=Jo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function uu(a,b,c){if(!S("web_csi_action_sampling_enabled")||!Pt(c).actionDisabled){var d=Vt(c),e;if(e=S("web_csi_debug_sample_enabled")&&d)if(!1===Pt(c).debugTicksExcludedLogged)e=!1;else if(0===tu().length)e=Pt(c).debugTicksExcludedLogged=!1;else{var f,g,h;e=(null==dr().resolve(new Zq(Io))?void 0:null==(f=Jo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=tu();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=
f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Pt(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,su(f,c));Pt(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=Xt(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Tt(c);e.gelTicks&&(e.gelTicks[a]=!0);f=St(c);e=b||U();S("log_repeated_ytcsi_ticks")?
a in f||(f[a]=e):f[a]=e;f=Pt(c).cttAuthInfo;"_start"===a?(a=iu(),ju(a,"baseline_"+d)||Ym("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):iu().tick(a,d,b,f);vu(c);return e}}}
function wu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=uq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function xu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=ou(),uu("rsf_"+b,c+Math.round(a.fetchStart)),uu("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function yu(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(uu("wffs",nu(b.startTime)),uu("wffe",nu(b.responseEnd)))}
function zu(a){var b=Au("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Au(b[d],a);if(e)return e}return NaN}
function Au(a,b){if(a=St(b)[a])return"number"===typeof a?a:a[a.length-1]}
function vu(a){var b=Au("_start",a),c=zu(a);b&&c&&!pu&&(Xo(fu,new eu(Math.round(c-b),a)),pu=!0)}
function Bu(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Bu(a[d],b[d]))return!1;return!0}
function Cu(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return nu(a.startTime)}a=Z.timing;
return a.De?Math.max(0,a.De):0}
;function Du(a,b){Mk(function(){Xt("").info.actionType=a;b&&Ik("TIMING_AFT_KEYS",b);Ik("TIMING_ACTION",a);var c=R("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&ru(d,c[d]);c={isNavigation:!0,actionType:Yt[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=R("PREVIOUS_ACTION"))c.previousAction=Yt[d]||"LATENCY_ACTION_UNKNOWN";if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Is())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=wu();if(1===d||-1===d)c.isVisible=
!0;Rt();Qt();c.loadType="cold";d=Qt();var e=mu(),f=ou(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(uu("srt",e.responseStart),1!==d.prerender&&uu("_start",f,void 0));d=Cu();0<d&&uu("fpt",d);d=mu();d.isPerformanceNavigationTiming&&su({performanceNavigationTiming:!0});uu("nreqs",d.requestStart,void 0);uu("nress",d.responseStart,void 0);uu("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(uu("nrs",d.redirectStart,void 0),uu("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(uu("ndnss",d.domainLookupStart,void 0),uu("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(uu("ntcps",d.connectStart,void 0),uu("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=ou()&&0<d.connectEnd-d.secureConnectionStart&&(uu("nstcps",d.secureConnectionStart,void 0),uu("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&yu();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in qu)qu.hasOwnProperty(h)&&
(e=qu[h],xu(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});su(c);c=Qt();h=Ut();if("cold"===Rt().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=St();e=Tt();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])uu(k,Au(k));else if(S("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,uu(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=du(f,c[f]))&&!Bu(Ut(),f)&&(Kt(h,f),Kt(k,f),d=!0);d&&su(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Eu()&&zu()&&vu()})()}
function Fu(a,b,c,d){Mk(ru)(a,b,c,d)}
function Gu(a,b,c){return Mk(uu)(a,b,c)}
function Eu(){return Mk(function(){return"_start"in St()})()}
function Hu(){Mk(function(){var a=Vt();requestAnimationFrame(function(){setTimeout(function(){a===Vt()&&Gu("ol",void 0,void 0)},0)})})()}
var Iu=window;Iu.ytcsi&&(Iu.ytcsi.info=Fu,Iu.ytcsi.tick=Gu);var Ju="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Ku=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Lu(a,b,c,d){this.m=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Vb||(a.Vb={});a.Vb=Object.assign({},zt,a.Vb)}
function Mu(a,b,c,d){if(void 0!==Lu.h){if(d=Lu.h,a=[a!==d.m,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new dm("InnerTubeTransportService is already initialized",a);
}else Lu.h=new Lu(a,b,c,d)}
function Nu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Kl:c;var d=qt(b,a.m);if(!d)return Wd(new dm("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Jt(e.input),new Rd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.kb)?void 0:g.mode)?"cors":void 0;if(a.l.df){var n=e.config,r;n=null==n?void 0:null==(r=n.Xb)?void 0:r.sessionIndex;r=Jl(0,{sessionIndex:n});k=Object.assign({},Ou(h),r);return l.v(2)}return l.yield(Pu(e.config,
h),3)}2!=l.h&&(k=l.i);f(Qu(a,e,k));l.h=0})})):Wd(new dm("Error: Failed to build request for command.",b))}
function Ru(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.gg)?0:d.kg)&&a.j){d=v(Ju);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Qu(a,b,c){var d,e,f,g,h,k,l,n,r,t,p,x,y,z,H,I,M,N,K,V,Y,fa,pa,ma,Fa,Ig,Fq,Gq,Hq;return A(function(ja){switch(ja.h){case 1:ja.v(2);break;case 3:if((d=ja.i)&&!d.isExpired())return ja.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Oa)?0:f.context)){ja.v(4);break}g=b.Oa.context;ja.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ja.v(4);break}l=k.value;return ja.yield(l.dg(g),8);case 8:k=h.next();ja.v(7);break;case 4:if(null==(n=a.i)||!n.hg(b.input,b.Oa)){ja.v(11);
break}return ja.yield(a.i.Zf(b.input,b.Oa),12);case 12:return r=ja.i,S("kevlar_process_local_innertube_responses_killswitch")||Ru(a,r,b),ja.return(r);case 11:return(x=null==(p=b.config)?void 0:p.Qa)&&a.h.has(x)&&S("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Oa),I=null!=(H=null==(z=b.kb)?void 0:z.headers)?H:{},b.kb=Object.assign({},b.kb,{headers:Object.assign({},I,c)}),M=Object.assign({},b.kb),"POST"===b.kb.method&&(M=Object.assign({},M,{body:y})),(null==(N=b.config)?0:N.Ne)&&
Gu(b.config.Ne),K=function(){return a.aa.fetch(b.input,M,b.config)},t=K(),x&&a.h.set(x,t)),ja.yield(t,13);
case 13:if((V=ja.i)&&"error"in V&&(null==(Y=V)?0:null==(fa=Y.error)?0:fa.details))for(pa=V.error.details,ma=v(pa),Fa=ma.next();!Fa.done;Fa=ma.next())Ig=Fa.value,(Fq=Ig["@type"])&&-1<Ku.indexOf(Fq)&&(delete Ig["@type"],V=Ig);x&&a.h.has(x)&&a.h.delete(x);(null==(Gq=b.config)?0:Gq.Oe)&&Gu(b.config.Oe);if(V||null==(Hq=a.i)||!Hq.Rf(b.input,b.Oa)){ja.v(14);break}return ja.yield(a.i.Yf(b.input,b.Oa),15);case 15:V=ja.i;case 14:return Ru(a,V,b),ja.return(V||void 0)}})}
function Pu(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Xb)?void 0:d.sessionIndex;var h=g.yield;var k=Jl(0,{sessionIndex:e});if(!(k instanceof Rd)){var l=new Rd(ab);Sd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Ou(b),f)))})}
function Ou(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Su=new Yq("INNERTUBE_TRANSPORT_TOKEN");var Tu=["share/get_web_player_share_panel"],Uu=["feedback"],Vu=["notification/modify_channel_preference"],Wu=["browse/edit_playlist"],Xu=["subscription/subscribe"],Yu=["subscription/unsubscribe"];function Zu(){}
w(Zu,vt);Zu.prototype.j=function(){return Xu};
Zu.prototype.h=function(a){return zr(a,zk)||void 0};
Zu.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Zu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function $u(){}
w($u,vt);$u.prototype.j=function(){return Yu};
$u.prototype.h=function(a){return zr(a,yk)||void 0};
$u.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties($u.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function av(){}
w(av,vt);av.prototype.j=function(){return Uu};
av.prototype.h=function(a){return zr(a,tk)||void 0};
av.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(av.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function bv(){}
w(bv,vt);bv.prototype.j=function(){return Vu};
bv.prototype.h=function(a){return zr(a,xk)||void 0};
bv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function cv(){}
w(cv,vt);cv.prototype.j=function(){return Wu};
cv.prototype.h=function(a){return zr(a,wk)||void 0};
cv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function dv(){}
w(dv,vt);dv.prototype.j=function(){return Tu};
dv.prototype.h=function(a){return zr(a,vk)};
dv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var ev=new Yq("NETWORK_SLI_TOKEN");function fv(a){this.h=a}
fv.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=ac(bc(5,qc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;S("wug_networking_gzip_request")&&(e=op(b));f=new window.Request(a,e);return S("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){rs(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){rs(h)}))})};
fv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Uf(),b=b.then(function(c){rs(new dm("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
fv[Xq]=[new Zq(ev)];var gv=new Yq("NETWORK_MANAGER_TOKEN");var hv;function iv(){var a,b,c;return A(function(d){if(1==d.h)return a=dr().resolve(Su),a?d.yield(Nu(a),2):(rs(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return rs(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Sf;return d.return(c)}rs(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var jv=C.caches,kv;function lv(a){var b=a.indexOf(":");return-1===b?{xd:a}:{xd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function mv(){return A(function(a){if(void 0!==kv)return a.return(kv);kv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(jv.open("test-only"),4);case 4:return d.yield(jv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(kv)})}
function nv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(mv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(jv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=lv(f),h=g.datasyncId,!h||a.includes(h)||b.push(jv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function ov(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(mv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=fm("cache contains other");return h.yield(jv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=lv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function pv(){iv().then(function(a){a&&(no(a),nv(a),Gt(a))})}
function qv(){var a=new gq;li.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=fm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];no(g);nv(g);Gt(g);return f.return()}c=Ht();return f.yield(ov(),3);case 3:return d=f.i,f.yield(oo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?pv():a.h.add("publicytnetworkstatus-online",pv,!0,void 0,void 0),f.h=0}})})}
;var Kh=ha(["data-"]);function rv(a){a&&(a.dataset?a.dataset[sv("loaded")]="true":Jh(a))}
function tv(a,b){return a?a.dataset?a.dataset[sv(b)]:a.getAttribute("data-"+b):null}
var uv={};function sv(a){return uv[a]||(uv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var vv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,wv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function xv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(vv,""),c=c.replace(wv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else yv(a,b,c)}
function yv(a,b,c){c=void 0===c?null:c;var d=zv(a),e=document.getElementById(d),f=e&&tv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Rq(d,b),b=""+Pa(b),Av[b]=f),g||(e=Bv(a,d,function(){if(!tv(e,"loaded")){rv(e);Uq(d);var h=Va(Vq,d);fl(h,0)}},c)))}
function Bv(a,b,c,d){d=void 0===d?null:d;var e=Dd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ph(e,kk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Cv(a){a=zv(a);var b=document.getElementById(a);b&&(Vq(a),b.parentNode.removeChild(b))}
function Dv(a,b){a&&b&&(a=""+Pa(b),(a=Av[a])&&Tq(a))}
function zv(a){var b=document.createElement("a");Fh(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var Av={};var Ev=[],Fv=!1;function Gv(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Vs()){var a=R("PLAYER_VARS",{});if("1"!=pb(a)&&!Ws(a)){var b=function(){Fv=!0;"google_ad_status"in window?Ik("DCLKSTAT",1):Ik("DCLKSTAT",2)};
try{xv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ev.push(li.oa(function(){if(!(Fv||"google_ad_status"in window)){try{Dv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Fv=!0;Ik("DCLKSTAT",3)}},5E3))}}}
function Hv(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Iv(a){mr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.la},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.G},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.G},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Iv,mr);Iv.prototype.la=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Iv.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Iv.prototype.G=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Iv.prototype.i=function(){this.h=new Map};function Jv(a){mr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.G},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.G},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.G},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Jv,mr);Jv.prototype.i=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Jv.prototype.h=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Jv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Jv.prototype.G=function(a,b){a(null==b?void 0:b.event)};function Kv(){this.l=new Iv;this.m=new Jv}
Kv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function Lv(a){Ro.call(this,1,arguments);this.csn=a}
w(Lv,Ro);var $o=new So("screen-created",Lv),Mv=[],Nv=0,Ov=new Map,Pv=new Map,Qv=new Map;
function Rv(a,b,c,d,e){e=void 0===e?!1:e;for(var f=Sv({cttAuthInfo:Ks(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(nb(k)||!k.trackingParams&&!k.veType)&&rs(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Tv(h,b);if(k.veType&&!Pv.has(l)&&!Qv.has(l)&&!e){Ov.set(l,[a,b,c,h]);return}h=Tv(c,b);Ov.has(h)?Uv(c,b):Qv.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Vv("visualElementAttached",f,c):a?is("visualElementAttached",c,a,f):Ym("visualElementAttached",c,f)}
function Vv(a,b,c){Mv.push({He:a,payload:c,Xf:void 0,options:b});Nv||(Nv=ap())}
function bp(a){if(Mv){for(var b=v(Mv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ym(c.He,c.payload,c.options));Mv.length=0}Nv=0}
function Tv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Uv(a,b){a=Tv(a,b);Ov.has(a)&&(b=Ov.get(a)||[],Rv(b[0],b[1],b[2],[b[3]],!0),Ov.delete(a))}
function Sv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Wv(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Wv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Is(void 0===c?0:c)){a=this.client;d=new Bs({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Tv(d,c);Pv.set(f,!0);Uv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Sv({cttAuthInfo:Ks(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Vv("visualElementGestured",f,d):a?is("visualElementGestured",d,a,f):Ym("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Wv.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Bs({trackingParams:a}),b,void 0===c?0:c)};
Wv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Is(d);a||(a=(a=Fs(void 0===d?0:d))?new Bs({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Sv({cttAuthInfo:Ks(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Vv("visualElementStateChanged",d,b):a?is("visualElementStateChanged",b,a,d):Ym("visualElementStateChanged",b,d))}};
function Xv(a,b){if(void 0===b)for(var c=Hs(),d=0;d<c.length;d++)void 0!==c[d]&&Xv(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Rv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Yv(){Kv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(Yv,Kv);Yv.prototype.j=function(){Ym("finalPayload",{csn:Is()})};
Yv.prototype.h=function(){vs(ws)};
Yv.prototype.i=function(){var a=Xv;Wv.h||(Wv.h=new Wv);a(Wv.h)};function Zv(){}
function $v(){var a=E("ytglobal.storage_");a||(a=new Zv,D("ytglobal.storage_",a));return a}
Zv.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(aw()):d.return()})};
function aw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Zv);function Wm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=T("ytidb_transaction_ended_event_rate_limit_session",.2)}
Wm.prototype.Rb=function(a){this.handleError(a)};
Wm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":bw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=T("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function bw(a,b){$v().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:cw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:cw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function cw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function dw(a,b,c){G.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.s=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.s)}
w(dw,G);dw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Ok(d)}}};
dw.prototype.M=function(){window.removeEventListener("message",this.s);G.prototype.M.call(this)};function ew(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new dw(!!R("WIDGET_ID_ENFORCE")),b=this.Ke.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=ew.prototype;m.Ke=function(a,b,c){"addEventListener"===a&&b?this.Hc(b[0],c):this.Xc(a,b,c)};
m.Xc=function(){};
m.Bc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Hc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.Bc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ke=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ec());this.sendMessage("onReady");db(this.i,this.Ed,this);this.i=[]};
m.Ec=function(){return null};
function fw(a,b){a.sendMessage("infoDelivery",b)}
m.Ed=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ed({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var gw={},hw=(gw["api.invalidparam"]=2,gw.auth=150,gw["drm.auth"]=150,gw["heartbeat.net"]=150,gw["heartbeat.servererror"]=150,gw["heartbeat.stop"]=150,gw["html5.unsupportedads"]=5,gw["fmt.noneavailable"]=5,gw["fmt.decode"]=5,gw["fmt.unplayable"]=5,gw["html5.missingapi"]=5,gw["html5.unsupportedlive"]=5,gw["drm.unavailable"]=5,gw["mrm.blocked"]=151,gw);var iw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function jw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function kw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(iw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function lw(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function mw(a){ew.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.We.bind(this));this.addEventListener("onVolumeChange",this.Xe.bind(this));this.addEventListener("onApiChange",this.Re.bind(this));this.addEventListener("onPlaybackQualityChange",this.Te.bind(this));this.addEventListener("onPlaybackRateChange",this.Ue.bind(this));this.addEventListener("onStateChange",this.Ve.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ye.bind(this))}
w(mw,ew);m=mw.prototype;
m.Xc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&jw(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=kw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=kw(e);break;case "loadPlaylist":case "cuePlaylist":e=lw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);jw(a)&&fw(this,this.Ec())}};
m.Hc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);ew.prototype.Hc.call(this,a,b)};
m.Bc=function(a,b){var c=this,d=ew.prototype.Bc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.ke.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?hw[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ec=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ve=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());fw(this,a)};
m.Te=function(a){fw(this,{playbackQuality:a})};
m.Ue=function(a){fw(this,{playbackRate:a})};
m.Re=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Xe=function(){fw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.We=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());fw(this,a)};
m.Ye=function(){var a={sphericalProperties:this.api.getSphericalProperties()};fw(this,a)};
m.dispose=function(){ew.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function nw(a){G.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Ad,this)}
w(nw,G);m=nw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.lb("RECEIVING"))};
m.lb=function(a,b){this.started&&!this.Z()&&this.connection.lb(a,b)};
m.Ad=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=ow(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=pw(a,c))&&this.lb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Se.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Se=function(a,b){this.started&&!this.Z()&&this.connection.lb(a,this.Dc(a,b))};
m.Dc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.M=function(){this.connection.unsubscribe("command",this.Ad,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.M.call(this)};function qw(a,b){nw.call(this,b);this.api=a;this.start()}
w(qw,nw);qw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
qw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function ow(a,b){switch(a){case "loadVideoById":return a=kw(b),[a];case "cueVideoById":return a=kw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=lw(b),[a];case "cuePlaylist":return a=lw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function pw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
qw.prototype.Dc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return nw.prototype.Dc.call(this,a,b)};
qw.prototype.M=function(){nw.prototype.M.call(this);delete this.api};function rw(a){a=void 0===a?!1:a;G.call(this);this.h=new L(a);xc(this,this.h)}
Xa(rw,G);rw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
rw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
rw.prototype.l=function(a,b){this.Z()||this.h.ab.apply(this.h,arguments)};function sw(a,b,c){rw.call(this);this.j=a;this.i=b;this.id=c}
w(sw,rw);sw.prototype.lb=function(a,b){this.Z()||this.j.lb(this.i,this.id,a,b)};
sw.prototype.M=function(){this.i=this.j=null;rw.prototype.M.call(this)};function tw(a,b,c){G.call(this);this.h=a;this.origin=c;this.i=Bq(window,"message",this.j.bind(this));this.connection=new sw(this,a,b);xc(this,this.connection)}
w(tw,G);tw.prototype.lb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
tw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
tw.prototype.M=function(){Cq(this.i);this.h=null;G.prototype.M.call(this)};function uw(){this.state=1;this.h=null}
m=uw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=wb();d=f?f.createScript(d):d;d=new Bb(d,Ab)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,yb("From proto message. b/166824318"),e=Fb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());vw(this,d,e,a.program,b,c)}else rs(Error("Cannot initialize botguard without program"))};
function vw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,xv(c,function(){window[g]?ww(a,d,g,e):(a.state=3,Cv(c),rs(new dm("Unable to load Botguard","from "+c)))},f)):b?(f=Dd("SCRIPT"),b instanceof Bb?(b instanceof Bb&&b.constructor===Bb?b=b.h:(Ma(b),b="type_error:SafeScript"),f.textContent=b,Oh(f)):f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?ww(a,d,g,e):(a.state=4,rs(new dm("Unable to load Botguard from JS")))):rs(new dm("Unable to load VM; no url or JS provided"))}
function ww(a,b,c,d){a.state=5;try{var e=new Bh({program:b,oe:c,Le:S("att_web_record_metrics")});e.af.then(function(){a.state=6;d&&d(b)});
a.Sc(e)}catch(f){a.state=7,f instanceof Error&&rs(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Vc()?this.Nd({jd:a}):null};
m.dispose=function(){this.Sc(null);this.state=8};
m.Vc=function(){return!!this.h};
m.Nd=function(a){return this.h.Hd(a)};
m.Sc=function(a){vc(this.h);this.h=a};function xw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function yw(){uw.apply(this,arguments)}
w(yw,uw);yw.prototype.Sc=function(a){var b;null==(b=xw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Hd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
yw.prototype.Vc=function(){return!!xw()};
yw.prototype.Nd=function(a){return xw().bgvmc(a)};var zw=new yw;function Aw(){return zw.Vc()}
function Bw(a){a=void 0===a?{}:a;return zw.invoke(a)}
;function Cw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||rb(b);this.assets=a.assets||{};this.attrs=a.attrs||rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Cw.prototype.clone=function(){var a=new Cw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=rb(c):a[b]=c}return a};var Dw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ew(a){a=a||"";if(window.spf){var b=a.match(Dw);spf.style.load(a,b?b[1]:"",void 0)}else Fw(a)}
function Fw(a){var b=Gw(a),c=document.getElementById(b),d=c&&tv(c,"loaded");d||c&&!d||(c=Hw(a,b,function(){if(!tv(c,"loaded")){rv(c);Uq(b);var e=Va(Vq,b);fl(e,0)}}))}
function Hw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=kk(a);Nh(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Gw(a){var b=Dd("A");Fh(b,new Hb(a,Ib));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function Iw(){G.call(this);this.h=[]}
w(Iw,G);Iw.prototype.M=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.callback,void 0)}G.prototype.M.call(this)};function Jw(){Iw.apply(this,arguments)}
w(Jw,Iw);function Kw(a,b,c,d,e){G.call(this);var f=this;this.s=b;this.webPlayerContextConfig=d;this.xc=e;this.Ba=!1;this.api={};this.ea=this.m=null;this.S=new L;this.h={};this.Y=this.ma=this.elementId=this.Ja=this.config=null;this.W=!1;this.j=this.D=null;this.na={};this.yc=["onReady"];this.lastError=null;this.pb=NaN;this.R={};this.Sd=new Jw(this);this.da=0;this.i=this.l=a;xc(this,this.S);Lw(this);Mw(this);xc(this,this.Sd);c?this.da=fl(function(){f.loadNewVideoConfig(c)},0):d&&(Nw(this),Ow(this))}
w(Kw,G);m=Kw.prototype;m.getId=function(){return this.s};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof Cw||(b=new Cw(b));this.config=b;this.setConfig(a);Ow(this);this.isReady()&&Pw(this)}};
function Nw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.s,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.s:a.config.attrs.id=a.s);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Ja=a;this.config=Qw(a);Nw(this);if(!this.ma){var b;this.ma=Rw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=di(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=di(Number(a)||a))};
function Pw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Sw(a){var b=!0,c=Tw(a);c&&a.config&&(a=Uw(a),b=tv(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function Ow(a){if(!a.Z()&&!a.W){var b=Sw(a);if(b&&"html5"===(Tw(a)?"html5":null))a.Y="html5",a.isReady()||Vw(a);else if(Ww(a),a.Y="html5",b&&a.j&&a.l)a.l.appendChild(a.j),Vw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=Xw(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Qw(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.xc);Vw(a)};
a.W=!0;b?a.D():(xv(Uw(a),a.D),(b=Yw(a))&&Ew(b),Zw(a)&&!c&&D("yt.player.Application.create",null))}}}
function Tw(a){var b=Cd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Vw(a){if(!a.Z()){var b=Tw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!Xw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}$w(a)}else a.pb=fl(function(){Vw(a)},50)}}
function $w(a){Lw(a);a.Ba=!0;var b=Tw(a);if(b){a.m=ax(a,b,"addEventListener");a.ea=ax(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=ax(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);Pw(a);a.ma&&a.ma(a.api);a.S.ab("onReady",a.api)}
function ax(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,rs(f))}}}
function Lw(a){a.Ba=!1;if(a.ea)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ea(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.m=null;a.ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ja};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ba};
function Mw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Uq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Uq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=Rw(this,b);d&&(0<=cb(this.yc,a)||this.h[a]||(b=bx(this,a),this.m&&this.m(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&fl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=Rw(this,b))&&this.S.unsubscribe(a,b)};
function Rw(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){qs(f)}};
a.na[b]=c}return c?c:null}
function bx(a,b){var c="ytPlayer"+b+a.s;a.h[b]=c;C[c]=function(d){var e=fl(function(){if(!a.Z()){try{a.S.ab(b,null!=d?d:void 0)}catch(h){rs(new dm("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.s,data:d}))}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
ob(a.R,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(Tw(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Ww(a){a.cancel();Lw(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Tw(a);b&&(Sw(a)||!Zw(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&Dv(Uw(this),this.D);window.clearTimeout(this.pb);this.W=!1};
m.M=function(){Ww(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){qs(b)}this.na=null;for(var a in this.h)this.h.hasOwnProperty(a)&&(C[this.h[a]]=null);this.Ja=this.config=this.api=null;delete this.l;delete this.i;G.prototype.M.call(this)};
function Zw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Uw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Yw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Xw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Rk(c||"","&")[b]}
function Qw(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?rb(e):e}return b}
;var cx={},dx="player_uid_"+(1E9*Math.random()>>>0);function ex(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Cd(c):c;var e=dx+"_"+Pa(c),f=cx[e];if(f&&d)return fx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Kw(c,e,a,b,void 0);cx[e]=f;Uq("player-added",f.api);yc(f,function(){delete cx[f.getId()]});
return f.api}
function fx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var gx=null,hx=null,ix=null;function jx(){kx()}
function lx(){kx()}
function kx(){var a=gx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function mx(){gx&&gx.sendAbandonmentPing&&gx.sendAbandonmentPing();R("PL_ATT")&&zw.dispose();for(var a=li,b=0,c=Ev.length;b<c;b++)a.qa(Ev[b]);Ev.length=0;Cv("//static.doubleclick.net/instream/ad_status.js");Fv=!1;Ik("DCLKSTAT",0);wc(ix,hx);gx&&(gx.removeEventListener("onVideoDataChange",jx),gx.destroy())}
;function nx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Bt(a,b);if(c)return!1;Jt(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=lc(a,e);Jt(a);f=a+f;var h=void 0===h?Xh:h;a:{h=void 0===h?Xh:h;for(a=0;a<h.length;++a)if(b=h[a],b instanceof Vh&&b.ye(f)){h=new Hb(f,Ib);break a}h=void 0}g=g.location;h=Eh(h||Jb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",Ik);D("yt.config.set",Ik);D("yt.setMsg",Ms);D("yt.msgs.set",Ms);D("yt.logging.errors.log",qs);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}et(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Du("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Wk(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Du("watch",["pbs","pbu","pbp"]);gx=ex(a,c);gx.addEventListener("onVideoDataChange",jx);gx.addEventListener("onReady",lx);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?ix=new mw(gx):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(hx=new tw(window.parent,a,b),ix=new qw(gx,hx.connection));Gv();S("ytidb_create_logger_embed_killswitch")||Vm();a={};Yv.h||(Yv.h=new Yv);
Yv.h.install((a.flush_logs={callback:function(){Vr()}},a));
rq();S("ytidb_clear_embedded_player")&&li.oa(function(){var f,g;if(!hv){var h=dr(),k={Pc:gv,Ld:fv};h.h.set(k.Pc,k);k={hd:{feedbackEndpoint:rt(av),modifyChannelNotificationPreferenceEndpoint:rt(bv),playlistEditEndpoint:rt(cv),subscribeEndpoint:rt(Zu),unsubscribeEndpoint:rt($u),webPlayerShareEntityServiceEndpoint:rt(dv)}};var l=pt(),n={};l&&(n.client_location=l);void 0===f&&(f=Il());void 0===g&&(g=h.resolve(gv));Mu(k,g,f,n);f={Pc:Su,Md:Lu.h};h.h.set(f.Pc,f);hv=h.resolve(Su)}qv()})});
var ox=Mk(function(){Hu();ft()}),px=Mk(function(a){a.persisted||(Hu(),ft())}),qx=Mk(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?mx():a.persisted||mx()}),rx=Mk(mx);
window.addEventListener?(window.addEventListener("load",ox),window.addEventListener("pageshow",px),window.addEventListener("pagehide",qx)):window.attachEvent&&(window.attachEvent("onload",ox),window.attachEvent("onunload",rx));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Jk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new dm(g),e.name="UnhandledWindowError",e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?qs(e):rs(e))};
ge=ss;window.addEventListener("unhandledrejection",function(a){ss(a.reason)});
db(R("ERRORS")||[],function(a){qs.apply(null,a)});
Ik("ERRORS",[]);S("embeds_web_enable_scheduler_to_player_binary")&&Mm();D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Aw);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Bw);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Hv);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||nx);D("yt.util.activity.init",E("yt.util.activity.init")||Jq);
D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Mq);D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Kq);}).call(this);
