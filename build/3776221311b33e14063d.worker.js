!function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="./",e(e.s=0)}([function(r,t,e){"use strict";function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function o(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(f){o=!0,u=f}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return e}}(r,t)||function(r,t){if(r){if("string"===typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(t),e.d(t,"matchPrefix",(function(){return u})),e.d(t,"matchSimilar",(function(){return i})),e.d(t,"matchDictionary",(function(){return a}));var u=function(r,t){return t.filter((function(t){return 0===t.indexOf(r)}))},i=function(r,t){var e=t.map((function(t){return[t,function(r,t){var e=r?r.length:0,n=t?t.length:0;if(0===e)return n;if(0===n)return e;for(var o=new Array(n+1),u=0;u<=n;++u){(o[u]=new Array(e+1))[0]=u}for(var i=o[0],a=1;a<=e;++a)i[a]=a;for(var f=1;f<=n;++f)for(var c=1;c<=e;++c)t.charAt(f-1)===r.charAt(c-1)?o[f][c]=o[f-1][c-1]:o[f][c]=Math.min(o[f-1][c-1],o[f][c-1],o[f-1][c])+1;return o[n][e]}(t,r)]})).filter((function(r){return r[1]<=8}));return e.sort((function(r,t){return r[1]-t[1]})),e.map((function(r){return r[0]}))},a=function(r,t){return r in t?t[r]:Object.entries(t).filter((function(t){var e=o(t,2),n=e[0];e[1];return 0===n.indexOf(r)})).flatMap((function(r){var t=o(r,2);t[0];return t[1]}))};addEventListener("message",(function(r){var e,n=r.data,o=n.type,u=n.method,i=n.id,a=n.params;"RPC"===o&&u&&((e=t[u])?Promise.resolve().then((function(){return e.apply(t,a)})):Promise.reject("No such method")).then((function(r){postMessage({type:"RPC",id:i,result:r})})).catch((function(r){var t={message:r};r.stack&&(t.message=r.message,t.stack=r.stack,t.name=r.name),postMessage({type:"RPC",id:i,error:t})}))})),postMessage({type:"RPC",method:"ready"})}]);
//# sourceMappingURL=3776221311b33e14063d.worker.js.map