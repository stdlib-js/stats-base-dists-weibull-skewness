// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number.NEGATIVE_INFINITY;function u(r){return Math.abs(r)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var i=Object.prototype.toString;var f=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol.toStringTag:"";var c=o&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return i.call(r);t=r[a],o=a,n=null!=(u=r)&&f.call(u,o);try{r[a]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[a]=t:delete r[a],e}:function(r){return i.call(r)},l="function"==typeof Uint32Array;var v="function"==typeof Uint32Array?Uint32Array:null;var y,p="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(l&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var s=y,b="function"==typeof Float64Array;var w="function"==typeof Float64Array?Float64Array:null;var A,_="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w([1,3.14,-3.14,NaN]),t=n,r=(b&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var d=A,m="function"==typeof Uint8Array;var N="function"==typeof Uint8Array?Uint8Array:null;var h,U="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g=h,j="function"==typeof Uint16Array;var I="function"==typeof Uint16Array?Uint16Array:null;var O,S="function"==typeof Uint16Array?Uint16Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,65536,65537]),t=n,r=(j&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F={uint16:O,uint8:g};(E=new F.uint16(1))[0]=4660;var H=52===new F.uint8(E.buffer)[0],T=!0===H?1:0,G=new d(1),P=new s(G.buffer);function M(r){return G[0]=r,P[T]}function L(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var V=-.16666666666666632;function W(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(V+u*t):r-(u*(.5*n-e*t)-n-e*V)}var k,x,Y=!0===H?0:1,q=new d(1),C=new s(q.buffer);!0===H?(k=1,x=0):(k=0,x=1);var z={HIGH:k,LOW:x},B=new d(1),D=new s(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R=Number.POSITIVE_INFINITY;function X(r){return r===R||r===e}var Z="function"==typeof Object.defineProperty?Object.defineProperty:null;var $=Object.defineProperty,rr=Object.prototype,nr=rr.toString,tr=rr.__defineGetter__,er=rr.__defineSetter__,ur=rr.__lookupGetter__,or=rr.__lookupSetter__;var ir,fr,ar=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?$:function(r,n,t){var e,u,o,i;if("object"!=typeof r||null===r||"[object Array]"===nr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===nr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(ur.call(r,n)||or.call(r,n)?(e=r.__proto__,r.__proto__=rr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,i="set"in t,u&&(o||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&tr&&tr.call(r,n,t.get),i&&er&&er.call(r,n,t.set),r};function cr(r,n,t){ar(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===H?(ir=1,fr=0):(ir=0,fr=1);var lr={HIGH:ir,LOW:fr},vr=new d(1),yr=new s(vr.buffer),pr=lr.HIGH,sr=lr.LOW;function br(r,n,t,e){return vr[0]=r,n[e]=yr[pr],n[e+t]=yr[sr],n}function wr(r){return br(r,[0,0],1,0)}cr(wr,"assign",br);var Ar=[0,0];function _r(r,n){var t,e;return wr.assign(r,Ar,1,0),t=Ar[0],t&=2147483647,e=M(n),Q(t|=e&=2147483648,Ar[1])}function dr(n,t,e,o){return r(n)||X(n)?(t[o]=n,t[o+e]=0,t):0!==n&&u(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}cr((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var mr=[0,0],Nr=[0,0];function hr(n,t){var u,o;return 0===t||0===n||r(n)||X(n)?n:(dr(n,mr,1,0),t+=mr[1],t+=function(r){var n=M(r);return(n=(2146435072&n)>>>20)-1023|0}(n=mr[0]),t<-1074?_r(0,n):t>1023?n<0?e:R:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,wr.assign(n,Nr,1,0),u=Nr[0],u&=2148532223,o*Q(u|=t+1023<<20,Nr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ir=5.960464477539063e-8,Or=Ur(20),Sr=Ur(20),Er=Ur(20),Fr=Ur(20);function Hr(r,t,e,u,o,i,f,a,c){var l,v,y,p,s,b,w,A,_;for(p=i,_=u[e],A=e,s=0;A>0;s++)v=Ir*_|0,Fr[s]=_-16777216*v|0,_=u[A-1]+v,A-=1;if(_=hr(_,o),_-=8*n(.125*_),_-=w=0|_,y=0,o>0?(w+=s=Fr[e-1]>>24-o,Fr[e-1]-=s<<24-o,y=Fr[e-1]>>23-o):0===o?y=Fr[e-1]>>23:_>=.5&&(y=2),y>0){for(w+=1,l=0,s=0;s<e;s++)A=Fr[s],0===l?0!==A&&(l=1,Fr[s]=16777216-A):Fr[s]=16777215-A;if(o>0)switch(o){case 1:Fr[e-1]&=8388607;break;case 2:Fr[e-1]&=4194303}2===y&&(_=1-_,0!==l&&(_-=hr(1,o)))}if(0===_){for(A=0,s=e-1;s>=i;s--)A|=Fr[s];if(0===A){for(b=1;0===Fr[i-b];b++);for(s=e+1;s<=e+b;s++){for(c[a+s]=gr[f+s],v=0,A=0;A<=a;A++)v+=r[A]*c[a+(s-A)];u[s]=v}return Hr(r,t,e+=b,u,o,i,f,a,c)}}if(0===_)for(e-=1,o-=24;0===Fr[e];)e-=1,o-=24;else(_=hr(_,-o))>=16777216?(v=Ir*_|0,Fr[e]=_-16777216*v|0,o+=24,Fr[e+=1]=v):Fr[e]=0|_;for(v=hr(1,o),s=e;s>=0;s--)u[s]=v*Fr[s],v*=Ir;for(s=e;s>=0;s--){for(v=0,b=0;b<=p&&b<=e-s;b++)v+=jr[b]*u[s+b];Er[e-s]=v}for(v=0,s=e;s>=0;s--)v+=Er[s];for(t[0]=0===y?v:-v,v=Er[0]-v,s=1;s<=e;s++)v+=Er[s];return t[1]=0===y?v:-v,7&w}function Tr(r,n,t,e){var u,o,i,f,a,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(i=e-1),l=i+4,a=0;a<=l;a++)Or[a]=c<0?0:gr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Or[i+(a-c)];Sr[a]=u}return 4,Hr(r,n,4,Sr,f,4,o,i,Or)}var Gr=Math.round;function Pr(r,n,t){var e,u,o,i,f;return o=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=o-i,f-(M(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=o)-(o=u-(i=6077100506303966e-26*e))-i),t[0]=o-i,f-(M(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=o)-(o=u-(i=20222662487111665e-37*e))-i),t[0]=o-i)),t[1]=o-t[0]-i,e}var Mr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=4*Lr,kr=[0,0,0],xr=[0,0];function Yr(r,n){var t,e,u,o,i,f,a;if((u=2147483647&M(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Pr(r,u,n):u<=1073928572?r>0?(a=r-Mr,n[0]=a-Lr,n[1]=a-n[0]-Lr,1):(a=r+Mr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-1):r>0?(a=r-2*Mr,n[0]=a-Vr,n[1]=a-n[0]-Vr,2):(a=r+2*Mr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Pr(r,u,n):r>0?(a=r-3*Mr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Mr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Pr(r,u,n):r>0?(a=r-4*Mr,n[0]=a-Wr,n[1]=a-n[0]-Wr,4):(a=r+4*Mr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-4);if(u<1094263291)return Pr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,C[Y]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)kr[i]=0|a,a=16777216*(a-kr[i]);for(kr[2]=a,o=3;0===kr[o-1];)o-=1;return f=Tr(kr,xr,e,o),r<0?(n[0]=-xr[0],n[1]=-xr[1],-f):(n[0]=xr[0],n[1]=xr[1],f)}var qr=[0,0];var Cr=3.141592653589793;function zr(r){return t(r/2)}function Br(r){return zr(r>0?r-1:r+1)}var Dr=Math.sqrt,Jr=!0===H?0:1,Kr=new d(1),Qr=new s(Kr.buffer);function Rr(r,n){return Kr[0]=r,Qr[Jr]=n>>>0,Kr[0]}function Xr(r){return 0|r}var Zr=!0===H?1:0,$r=new d(1),rn=new s($r.buffer);function nn(r,n){return $r[0]=r,rn[Zr]=n>>>0,$r[0]}var tn=[1,1.5],en=[0,.5849624872207642],un=[0,1.350039202129749e-8];var on=1e300,fn=1e-300,an=[0,0],cn=[0,0];function ln(n,o){var i,f,a,c,l,v,y,p,s,b,w,A,_,d;if(r(n)||r(o))return NaN;if(wr.assign(o,an,1,0),l=an[0],0===an[1]){if(0===o)return 1;if(1===o)return n;if(-1===o)return 1/n;if(.5===o)return Dr(n);if(-.5===o)return 1/Dr(n);if(2===o)return n*n;if(3===o)return n*n*n;if(4===o)return(n*=n)*n;if(X(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(n===R)?0:R}(n,o)}if(wr.assign(n,an,1,0),c=an[0],0===an[1]){if(0===c)return function(r,n){return n===e?R:n===R?0:n>0?Br(n)?r:0:Br(n)?_r(R,r):R}(n,o);if(1===n)return 1;if(-1===n&&Br(o))return-1;if(X(n))return n===e?ln(-0,-o):o<0?0:R}if(n<0&&!1===t(o))return(n-n)/(n-n);if(a=u(n),i=2147483647&c|0,f=2147483647&l|0,y=l>>>31|0,v=(v=c>>>31|0)&&Br(o)?-1:1,f>1105199104){if(f>1139802112)return function(r,n){return(2147483647&M(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,o);if(i<1072693247)return 1===y?v*on*on:v*fn*fn;if(i>1072693248)return 0===y?v*on*on:v*fn*fn;w=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Rr(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(cn,a)}else w=function(r,n,t){var e,u,o,i,f,a,c,l,v,y,p,s,b,w,A,_,d,m,N,h,U;return m=0,t<1048576&&(m-=53,t=M(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?h=0:N<767610?h=1:(h=0,m+=1,t-=1048576),i=Rr(u=(_=(n=nn(n,t))-(c=tn[h]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=nn(0,e+=h<<18),A=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Rr(a=3+(o=i*i)+(A+=(f=d*(_-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(v=Rr(v=(_=i*a)+(d=f*a+(A-(a-3-o))*u),0))+.9617966939259756*(d-(v-_))+un[h])-((s=Rr(s=(y=.9617967009544373*v)+p+(l=en[h])+(w=m),0))-w-l-y),r[0]=s,r[1]=b,r}(cn,a,i);if(A=(b=(o-(p=Rr(o,0)))*w[0]+o*w[1])+(s=p*w[0]),wr.assign(A,an,1,0),_=Xr(an[0]),d=Xr(an[1]),_>=1083179008){if(0!=(_-1083179008|d))return v*on*on;if(b+8008566259537294e-32>A-s)return v*on*on}else if((2147483647&_)>=1083231232){if(0!=(_-3230714880|d))return v*fn*fn;if(b<=A-s)return v*fn*fn}return A=function(r,n,t){var e,u,o,i,f,a,c,l,v,y,p;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=o=nn(0,e)),r=Xr(r=M(c=1-((c=(i=.6931471824645996*(o=Rr(o=t+n,0)))+(f=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(u=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?hr(c,l):nn(c,r)}(_,s,b),v*A}var vn=Math.ceil;function yn(r){return r<0?vn(r):n(r)}function pn(n){var t;return r(n)||n===R?n:n===e?0:n>709.782712893384?R:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<3.725290298461914e-9?1+n:function(r,n,t){var e,u,o,i;return hr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(n-.6931471803691238*(t=yn(n<0?1.4426950408889634*n-.5:1.4426950408889634*n+.5)),1.9082149292705877e-10*t,t)}function sn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=pn(r),2.5066282746310007*(t=r>143.01608?(e=ln(r,.5*r-.25))*(e/t):ln(r,r-.5)/t)*n}function bn(r,n){return n/((1+.5772156649015329*r)*r)}function wn(o){var i,f,a,c;if(t(o)&&o<0||o===e||r(o))return NaN;if(0===o)return function(r){return 0===r&&1/r===e}(o)?e:R;if(o>171.61447887182297)return R;if(o<-170.5674972726612)return 0;if((f=u(o))>33)return o>=0?sn(o):(i=0==(1&(a=n(f)))?-1:1,(c=f-a)>.5&&(c=f-(a+=1)),c=f*function(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1045430272?r:W(r,0);if(n>=2146435072)return NaN;switch(3&Yr(r,qr)){case 0:return W(qr[0],qr[1]);case 1:return L(qr[0],qr[1]);case 2:return-W(qr[0],qr[1]);default:return-L(qr[0],qr[1])}}(Cr*c),i*Cr/(u(c)*sn(f)));for(c=1;o>=3;)c*=o-=1;for(;o<0;){if(o>-1e-9)return bn(o,c);c/=o,o+=1}for(;o<2;){if(o<1e-9)return bn(o,c);c/=o,o+=1}return 2===o?c:c*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(o-=2)}function An(n,t){return r(n)||r(t)||n<=0||t<=0?NaN:t*wn(1+1/n)}function _n(n,t){var e,u,o,i;return r(n)||r(t)||n<=0||t<=0?NaN:(i=An(n,t),e=function(n,t){var e;return r(n)||r(t)||n<=0||t<=0?NaN:(e=An(n,t),t*t*wn(1+2/n)-e*e)}(n,t),u=Dr(e),o=wn(1+3/n)*ln(t,3),o-=3*i*e+ln(i,3),o/=ln(u,3))}export{_n as default};
//# sourceMappingURL=mod.js.map