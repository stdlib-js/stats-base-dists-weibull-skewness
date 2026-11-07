"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=o(function(N,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/stats-base-dists-weibull-variance/dist'),g=require('@stdlib/math-base-special-gamma/dist'),m=require('@stdlib/math-base-special-sqrt/dist'),p=require('@stdlib/stats-base-dists-weibull-mean/dist'),s=require('@stdlib/math-base-special-pow/dist');function f(e,r){var i,v,u,a;return t(e)||t(r)||e<=0||r<=0?NaN:(a=p(e,r),i=c(e,r),v=m(i),u=g(1+3/e)*s(r,3),u-=3*a*i+s(a,3),u/=s(v,3),u)}n.exports=f
});var w=q();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
