"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=n(function(b,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),g=require('@stdlib/stats-strided-srangeabs/dist').ndarray;function m(e){var r=e[0];return g(v(r,0),d(r),q(r,0),o(r))}a.exports=m
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=t(),i,s=c(f(__dirname,"./native.js"));j(s)?i=p:i=s;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
