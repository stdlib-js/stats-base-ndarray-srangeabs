"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(x,a){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/stats-strided-srangeabs/dist').ndarray;function g(e){var r=e[0];return d(n(r,0),o(r),v(r,0),q(r))}a.exports=g
});var m=require("path").join,f=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),j=t(),i,s=f(m(__dirname,"./native.js"));c(s)?i=j:i=s;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
