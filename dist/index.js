"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(N,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/stats-base-dists-weibull-variance/dist'),g=require('@stdlib/math-base-special-gamma/dist'),m=require('@stdlib/math-base-special-sqrt/dist'),p=require('@stdlib/stats-base-dists-weibull-mean/dist'),s=require('@stdlib/math-base-special-pow/dist');function f(e,r){var u,v,i,a;return t(e)||t(r)||e<=0||r<=0?NaN:(a=p(e,r),u=c(e,r),v=m(u),i=g(1+3/e)*s(r,3),i-=3*a*u+s(a,3),i/=s(v,3),i)}n.exports=f
});var w=q();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
