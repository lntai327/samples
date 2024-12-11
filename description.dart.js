(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.hm(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.du(b)
return new s(c,this)}:function(){if(s===null)s=A.du(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.du(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
dw(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d1(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dv==null){A.ha()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.dM("Return interceptor for "+A.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cO
if(o==null)o=$.cO=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hg(a)
if(p!=null)return p
if(typeof a=="function")return B.x
s=Object.getPrototypeOf(a)
if(s==null)return B.j
if(s===Object.prototype)return B.j
if(typeof q=="function"){o=$.cO
if(o==null)o=$.cO=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.e,enumerable:false,writable:true,configurable:true})
return B.e}return B.e},
dF(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
eQ(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.dF(r))break;++b}return b},
eR(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.i(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.dF(q))break}return b},
a2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ao.prototype
return J.b8.prototype}if(typeof a=="string")return J.a7.prototype
if(a==null)return J.ap.prototype
if(typeof a=="boolean")return J.b7.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.aa.prototype
if(typeof a=="bigint")return J.a8.prototype
return a}if(a instanceof A.m)return a
return J.d1(a)},
eg(a){if(typeof a=="string")return J.a7.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.aa.prototype
if(typeof a=="bigint")return J.a8.prototype
return a}if(a instanceof A.m)return a
return J.d1(a)},
eh(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.aa.prototype
if(typeof a=="bigint")return J.a8.prototype
return a}if(a instanceof A.m)return a
return J.d1(a)},
bC(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.aa.prototype
if(typeof a=="bigint")return J.a8.prototype
return a}if(a instanceof A.m)return a
return J.d1(a)},
eA(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a2(a).E(a,b)},
eB(a,b){if(typeof b==="number")if(Array.isArray(a)||A.he(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.eh(a).A(a,b)},
eC(a,b,c,d){return J.bC(a).ar(a,b,c,d)},
r(a){return J.bC(a).gn(a)},
da(a){return J.a2(a).gl(a)},
eD(a){return J.eh(a).gD(a)},
dy(a){return J.eg(a).gj(a)},
eE(a){return J.a2(a).gv(a)},
ak(a){return J.a2(a).h(a)},
an:function an(){},
b7:function b7(){},
ap:function ap(){},
H:function H(){},
e:function e(){},
bb:function bb(){},
ay:function ay(){},
L:function L(){},
a8:function a8(){},
aa:function aa(){},
z:function z(a){this.$ti=a},
c5:function c5(a){this.$ti=a},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(){},
ao:function ao(){},
b8:function b8(){},
a7:function a7(){}},A={df:function df(){},
ed(a,b,c){return a},
hf(a){var s,r
for(s=$.aS.length,r=0;r<s;++r)if(a===$.aS[r])return!0
return!1},
ab:function ab(a){this.a=a},
I:function I(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
en(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
he(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
t(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ak(a)
return s},
bc(a){var s,r=$.dH
if(r==null)r=$.dH=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cj(a){return A.eT(a)},
eT(a){var s,r,q,p
if(a instanceof A.m)return A.u(A.a3(a),null)
s=J.a2(a)
if(s===B.w||s===B.y||t.E.b(a)){r=B.f(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.a3(a),null)},
eV(a){if(typeof a=="number"||A.dq(a))return J.ak(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Y)return a.h(0)
return"Instance of '"+A.cj(a)+"'"},
eU(a){var s=a.$thrownJsError
if(s==null)return null
return A.aj(s)},
i(a,b){if(a==null)J.dy(a)
throw A.d(A.h4(a,b))},
h4(a,b){var s,r="index"
if(!A.e5(b))return new A.K(!0,b,r,null)
s=A.cY(J.dy(a))
if(b<0||b>=s)return A.c3(b,s,a,r)
return new A.at(null,null,!0,b,r,"Value not in range")},
d(a){return A.ej(new Error(),a)},
ej(a,b){var s
if(b==null)b=new A.Q()
a.dartException=b
s=A.hp
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
hp(){return J.ak(this.dartException)},
hl(a){throw A.d(a)},
d9(a,b){throw A.ej(b,a)},
ho(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.d9(A.fw(a,b,c),s)},
fw(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.r.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.az("'"+s+"': Cannot "+o+" "+l+k+n)},
d8(a){throw A.d(A.bQ(a))},
R(a){var s,r,q,p,o,n
a=A.hk(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a_([],t.S)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cz(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cA(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dL(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dg(a,b){var s=b==null,r=s?null:b.method
return new A.b9(a,r,s?null:b.receiver)},
aT(a){if(a==null)return new A.ch(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a4(a,a.dartException)
return A.fY(a)},
a4(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.aH(r,16)&8191)===10)switch(q){case 438:return A.a4(a,A.dg(A.t(s)+" (Error "+q+")",null))
case 445:case 5007:A.t(s)
return A.a4(a,new A.as())}}if(a instanceof TypeError){p=$.eq()
o=$.er()
n=$.es()
m=$.et()
l=$.ew()
k=$.ex()
j=$.ev()
$.eu()
i=$.ez()
h=$.ey()
g=p.p(s)
if(g!=null)return A.a4(a,A.dg(A.aM(s),g))
else{g=o.p(s)
if(g!=null){g.method="call"
return A.a4(a,A.dg(A.aM(s),g))}else if(n.p(s)!=null||m.p(s)!=null||l.p(s)!=null||k.p(s)!=null||j.p(s)!=null||m.p(s)!=null||i.p(s)!=null||h.p(s)!=null){A.aM(s)
return A.a4(a,new A.as())}}return A.a4(a,new A.bk(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.av()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a4(a,new A.K(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.av()
return a},
aj(a){var s
if(a==null)return new A.aG(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aG(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
hj(a){if(a==null)return J.da(a)
if(typeof a=="object")return A.bc(a)
return J.da(a)},
fE(a,b,c,d,e,f){t.Z.a(a)
switch(A.cY(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cG("Unsupported number of arguments for wrapped closure"))},
bB(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.h2(a,b)
a.$identity=s
return s},
h2(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fE)},
eM(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bh().constructor.prototype):Object.create(new A.a6(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dE(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.eI(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dE(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
eI(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eF)}throw A.d("Error in functionType of tearoff")},
eJ(a,b,c,d){var s=A.dD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dE(a,b,c,d){if(c)return A.eL(a,b,d)
return A.eJ(b.length,d,a,b)},
eK(a,b,c,d){var s=A.dD,r=A.eG
switch(b?-1:a){case 0:throw A.d(new A.bd("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
eL(a,b,c){var s,r
if($.dB==null)$.dB=A.dA("interceptor")
if($.dC==null)$.dC=A.dA("receiver")
s=b.length
r=A.eK(s,c,a,b)
return r},
du(a){return A.eM(a)},
eF(a,b){return A.cV(v.typeUniverse,A.a3(a.a),b)},
dD(a){return a.a},
eG(a){return a.b},
dA(a){var s,r,q,p=new A.a6("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.db("Field name "+a+" not found.",null))},
i2(a){throw A.d(new A.bm(a))},
h6(a){return v.getIsolateTag(a)},
i1(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hg(a){var s,r,q,p,o,n=A.aM($.ei.$1(a)),m=$.d0[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.fu($.eb.$2(a,n))
if(q!=null){m=$.d0[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.d7(s)
$.d0[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.d5[n]=s
return s}if(p==="-"){o=A.d7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.el(a,s)
if(p==="*")throw A.d(A.dM(n))
if(v.leafTags[n]===true){o=A.d7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.el(a,s)},
el(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dw(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
d7(a){return J.dw(a,!1,null,!!a.$ia9)},
hi(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.d7(s)
else return J.dw(s,c,null,null)},
ha(){if(!0===$.dv)return
$.dv=!0
A.hb()},
hb(){var s,r,q,p,o,n,m,l
$.d0=Object.create(null)
$.d5=Object.create(null)
A.h9()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.em.$1(o)
if(n!=null){m=A.hi(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
h9(){var s,r,q,p,o,n,m=B.l()
m=A.ah(B.m,A.ah(B.n,A.ah(B.h,A.ah(B.h,A.ah(B.o,A.ah(B.p,A.ah(B.q(B.f),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ei=new A.d2(p)
$.eb=new A.d3(o)
$.em=new A.d4(n)},
ah(a,b){return a(b)||b},
h3(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
eS(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(new A.c0("Illegal RegExp pattern ("+String(n)+")",a))},
hk(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cz:function cz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
as:function as(){},
b9:function b9(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a){this.a=a},
ch:function ch(a){this.a=a},
aG:function aG(a){this.a=a
this.b=null},
Y:function Y(){},
b_:function b_(){},
b0:function b0(){},
bi:function bi(){},
bh:function bh(){},
a6:function a6(a,b){this.a=a
this.b=b},
bm:function bm(a){this.a=a},
bd:function bd(a){this.a=a},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
c4:function c4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dJ(a,b){var s=b.c
return s==null?b.c=A.dn(a,b.x,!0):s},
dh(a,b){var s=b.c
return s==null?b.c=A.aJ(a,"am",[b.x]):s},
dK(a){var s=a.w
if(s===6||s===7||s===8)return A.dK(a.x)
return s===12||s===13},
eY(a){return a.as},
ef(a){return A.cU(v.typeUniverse,a,!1)},
a0(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a0(a1,s,a3,a4)
if(r===s)return a2
return A.dZ(a1,r,!0)
case 7:s=a2.x
r=A.a0(a1,s,a3,a4)
if(r===s)return a2
return A.dn(a1,r,!0)
case 8:s=a2.x
r=A.a0(a1,s,a3,a4)
if(r===s)return a2
return A.dX(a1,r,!0)
case 9:q=a2.y
p=A.ag(a1,q,a3,a4)
if(p===q)return a2
return A.aJ(a1,a2.x,p)
case 10:o=a2.x
n=A.a0(a1,o,a3,a4)
m=a2.y
l=A.ag(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dl(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.ag(a1,j,a3,a4)
if(i===j)return a2
return A.dY(a1,k,i)
case 12:h=a2.x
g=A.a0(a1,h,a3,a4)
f=a2.y
e=A.fV(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.dW(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.ag(a1,d,a3,a4)
o=a2.x
n=A.a0(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dm(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.aX("Attempted to substitute unexpected RTI kind "+a0))}},
ag(a,b,c,d){var s,r,q,p,o=b.length,n=A.cW(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a0(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
fW(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cW(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a0(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
fV(a,b,c,d){var s,r=b.a,q=A.ag(a,r,c,d),p=b.b,o=A.ag(a,p,c,d),n=b.c,m=A.fW(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bq()
s.a=q
s.b=o
s.c=m
return s},
a_(a,b){a[v.arrayRti]=b
return a},
ee(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.h8(s)
return a.$S()}return null},
hc(a,b){var s
if(A.dK(b))if(a instanceof A.Y){s=A.ee(a)
if(s!=null)return s}return A.a3(a)},
a3(a){if(a instanceof A.m)return A.J(a)
if(Array.isArray(a))return A.cX(a)
return A.dp(J.a2(a))},
cX(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
J(a){var s=a.$ti
return s!=null?s:A.dp(a)},
dp(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.fD(a,s)},
fD(a,b){var s=a instanceof A.Y?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fp(v.typeUniverse,s.name)
b.$ccache=r
return r},
h8(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cU(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
h7(a){return A.ai(A.J(a))},
fU(a){var s=a instanceof A.Y?A.ee(a):null
if(s!=null)return s
if(t.t.b(a))return J.eE(a).a
if(Array.isArray(a))return A.cX(a)
return A.a3(a)},
ai(a){var s=a.r
return s==null?a.r=A.e1(a):s},
e1(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.cT(a)
s=A.cU(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.e1(s):r},
fC(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.V(m,a,A.fJ)
if(!A.W(m))s=m===t._
else s=!0
if(s)return A.V(m,a,A.fN)
s=m.w
if(s===7)return A.V(m,a,A.fA)
if(s===1)return A.V(m,a,A.e6)
r=s===6?m.x:m
q=r.w
if(q===8)return A.V(m,a,A.fF)
if(r===t.p)p=A.e5
else if(r===t.i||r===t.q)p=A.fI
else if(r===t.N)p=A.fL
else p=r===t.y?A.dq:null
if(p!=null)return A.V(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.hd)){m.f="$i"+o
if(o==="y")return A.V(m,a,A.fH)
return A.V(m,a,A.fM)}}else if(q===11){n=A.h3(r.x,r.y)
return A.V(m,a,n==null?A.e6:n)}return A.V(m,a,A.fy)},
V(a,b,c){a.b=c
return a.b(b)},
fB(a){var s,r=this,q=A.fx
if(!A.W(r))s=r===t._
else s=!0
if(s)q=A.fv
else if(r===t.K)q=A.ft
else{s=A.aQ(r)
if(s)q=A.fz}r.a=q
return r.a(a)},
bA(a){var s=a.w,r=!0
if(!A.W(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.bA(a.x)))r=s===8&&A.bA(a.x)||a===t.P||a===t.T
return r},
fy(a){var s=this
if(a==null)return A.bA(s)
return A.ek(v.typeUniverse,A.hc(a,s),s)},
fA(a){if(a==null)return!0
return this.x.b(a)},
fM(a){var s,r=this
if(a==null)return A.bA(r)
s=r.f
if(a instanceof A.m)return!!a[s]
return!!J.a2(a)[s]},
fH(a){var s,r=this
if(a==null)return A.bA(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.m)return!!a[s]
return!!J.a2(a)[s]},
fx(a){var s=this
if(a==null){if(A.aQ(s))return a}else if(s.b(a))return a
A.e2(a,s)},
fz(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.e2(a,s)},
e2(a,b){throw A.d(A.dV(A.dP(a,A.u(b,null))))},
dt(a,b,c,d){if(A.ek(v.typeUniverse,a,b))return a
throw A.d(A.dV("The type argument '"+A.u(a,null)+"' is not a subtype of the type variable bound '"+A.u(b,null)+"' of type variable '"+c+"' in '"+d+"'."))},
dP(a,b){return A.bY(a)+": type '"+A.u(A.fU(a),null)+"' is not a subtype of type '"+b+"'"},
dV(a){return new A.aH("TypeError: "+a)},
w(a,b){return new A.aH("TypeError: "+A.dP(a,b))},
fF(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dh(v.typeUniverse,r).b(a)},
fJ(a){return a!=null},
ft(a){if(a!=null)return a
throw A.d(A.w(a,"Object"))},
fN(a){return!0},
fv(a){return a},
e6(a){return!1},
dq(a){return!0===a||!1===a},
fr(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.w(a,"bool"))},
hT(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool"))},
hS(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool?"))},
hU(a){if(typeof a=="number")return a
throw A.d(A.w(a,"double"))},
hW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double"))},
hV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double?"))},
e5(a){return typeof a=="number"&&Math.floor(a)===a},
cY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.w(a,"int"))},
hY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int"))},
hX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int?"))},
fI(a){return typeof a=="number"},
hZ(a){if(typeof a=="number")return a
throw A.d(A.w(a,"num"))},
i_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num"))},
fs(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num?"))},
fL(a){return typeof a=="string"},
aM(a){if(typeof a=="string")return a
throw A.d(A.w(a,"String"))},
i0(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String"))},
fu(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String?"))},
e9(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
fP(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.e9(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
e3(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
if(a6!=null){s=a6.length
if(a5==null)a5=A.a_([],t.S)
else a3=a5.length
r=a5.length
for(q=s;q>0;--q)B.i.k(a5,"T"+(r+q))
for(p=t.X,o=t._,n="<",m="",q=0;q<s;++q,m=a2){l=a5.length
k=l-1-q
if(!(k>=0))return A.i(a5,k)
n=n+m+a5[k]
j=a6[q]
i=j.w
if(!(i===2||i===3||i===4||i===5||j===p))l=j===o
else l=!0
if(!l)n+=" extends "+A.u(j,a5)}n+=">"}else n=""
p=a4.x
h=a4.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.u(p,a5)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.u(g[q],a5)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.u(e[q],a5)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.u(c[q+2],a5)+" "+c[q]}a0+="}"}if(a3!=null){a5.toString
a5.length=a3}return n+"("+a0+") => "+a},
u(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6)return A.u(a.x,b)
if(l===7){s=a.x
r=A.u(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(l===8)return"FutureOr<"+A.u(a.x,b)+">"
if(l===9){p=A.fX(a.x)
o=a.y
return o.length>0?p+("<"+A.e9(o,b)+">"):p}if(l===11)return A.fP(a,b)
if(l===12)return A.e3(a,b,null)
if(l===13)return A.e3(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.i(b,n)
return b[n]}return"?"},
fX(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fq(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fp(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cU(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aK(a,5,"#")
q=A.cW(s)
for(p=0;p<s;++p)q[p]=r
o=A.aJ(a,b,q)
n[b]=o
return o}else return m},
fn(a,b){return A.e_(a.tR,b)},
fm(a,b){return A.e_(a.eT,b)},
cU(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dT(A.dR(a,null,b,c))
r.set(b,s)
return s},
cV(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dT(A.dR(a,b,c,!0))
q.set(c,r)
return r},
fo(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dl(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
U(a,b){b.a=A.fB
b.b=A.fC
return b},
aK(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.C(null,null)
s.w=b
s.as=c
r=A.U(a,s)
a.eC.set(c,r)
return r},
dZ(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fk(a,b,r,c)
a.eC.set(r,s)
return s},
fk(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.W(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.C(null,null)
q.w=6
q.x=b
q.as=c
return A.U(a,q)},
dn(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fj(a,b,r,c)
a.eC.set(r,s)
return s},
fj(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.W(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aQ(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.aQ(q.x))return q
else return A.dJ(a,b)}}p=new A.C(null,null)
p.w=7
p.x=b
p.as=c
return A.U(a,p)},
dX(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fh(a,b,r,c)
a.eC.set(r,s)
return s},
fh(a,b,c,d){var s,r
if(d){s=b.w
if(A.W(b)||b===t.K||b===t._)return b
else if(s===1)return A.aJ(a,"am",[b])
else if(b===t.P||b===t.T)return t.J}r=new A.C(null,null)
r.w=8
r.x=b
r.as=c
return A.U(a,r)},
fl(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.C(null,null)
s.w=14
s.x=b
s.as=q
r=A.U(a,s)
a.eC.set(q,r)
return r},
aI(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fg(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aJ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aI(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.C(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.U(a,r)
a.eC.set(p,q)
return q},
dl(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aI(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.C(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.U(a,o)
a.eC.set(q,n)
return n},
dY(a,b,c){var s,r,q="+"+(b+"("+A.aI(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.C(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.U(a,s)
a.eC.set(q,r)
return r},
dW(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aI(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aI(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fg(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.C(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.U(a,p)
a.eC.set(r,o)
return o},
dm(a,b,c,d){var s,r=b.as+("<"+A.aI(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fi(a,b,c,r,d)
a.eC.set(r,s)
return s},
fi(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cW(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a0(a,b,r,0)
m=A.ag(a,c,r,0)
return A.dm(a,n,m,c!==m)}}l=new A.C(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.U(a,l)},
dR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dT(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fa(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dS(a,r,l,k,!1)
else if(q===46)r=A.dS(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Z(a.u,a.e,k.pop()))
break
case 94:k.push(A.fl(a.u,k.pop()))
break
case 35:k.push(A.aK(a.u,5,"#"))
break
case 64:k.push(A.aK(a.u,2,"@"))
break
case 126:k.push(A.aK(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fc(a,k)
break
case 38:A.fb(a,k)
break
case 42:p=a.u
k.push(A.dZ(p,A.Z(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dn(p,A.Z(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.dX(p,A.Z(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.f9(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dU(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fe(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.Z(a.u,a.e,m)},
fa(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dS(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.fq(s,o.x)[p]
if(n==null)A.hl('No "'+p+'" in "'+A.eY(o)+'"')
d.push(A.cV(s,o,n))}else d.push(p)
return m},
fc(a,b){var s,r=a.u,q=A.dQ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aJ(r,p,q))
else{s=A.Z(r,a.e,p)
switch(s.w){case 12:b.push(A.dm(r,s,q,a.n))
break
default:b.push(A.dl(r,s,q))
break}}},
f9(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dQ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.Z(p,a.e,o)
q=new A.bq()
q.a=s
q.b=n
q.c=m
b.push(A.dW(p,r,q))
return
case-4:b.push(A.dY(p,b.pop(),s))
return
default:throw A.d(A.aX("Unexpected state under `()`: "+A.t(o)))}},
fb(a,b){var s=b.pop()
if(0===s){b.push(A.aK(a.u,1,"0&"))
return}if(1===s){b.push(A.aK(a.u,4,"1&"))
return}throw A.d(A.aX("Unexpected extended operation "+A.t(s)))},
dQ(a,b){var s=b.splice(a.p)
A.dU(a.u,a.e,s)
a.p=b.pop()
return s},
Z(a,b,c){if(typeof c=="string")return A.aJ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fd(a,b,c)}else return c},
dU(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Z(a,b,c[s])},
fe(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Z(a,b,c[s])},
fd(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.d(A.aX("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.aX("Bad index "+c+" for "+b.h(0)))},
ek(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.l(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
l(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.W(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.W(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.l(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.l(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.l(a,b.x,c,d,e,!1)
if(r===6)return A.l(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.l(a,b.x,c,d,e,!1)
if(p===6){s=A.dJ(a,d)
return A.l(a,b,c,s,e,!1)}if(r===8){if(!A.l(a,b.x,c,d,e,!1))return!1
return A.l(a,A.dh(a,b),c,d,e,!1)}if(r===7){s=A.l(a,t.P,c,d,e,!1)
return s&&A.l(a,b.x,c,d,e,!1)}if(p===8){if(A.l(a,b,c,d.x,e,!1))return!0
return A.l(a,b,c,A.dh(a,d),e,!1)}if(p===7){s=A.l(a,b,c,t.P,e,!1)
return s||A.l(a,b,c,d.x,e,!1)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.I)return!0
if(p===13){if(b===t.L)return!0
if(r!==13)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.l(a,j,c,i,e,!1)||!A.l(a,i,e,j,c,!1))return!1}return A.e4(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.L)return!0
if(s)return!1
return A.e4(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.fG(a,b,c,d,e,!1)}if(o&&p===11)return A.fK(a,b,c,d,e,!1)
return!1},
e4(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.l(a3,a4.x,a5,a6.x,a7,!1))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.l(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.l(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.l(a3,k[h],a7,g,a5,!1))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.l(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
fG(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.cV(a,b,r[o])
return A.e0(a,p,null,c,d.y,e,!1)}return A.e0(a,b.y,null,c,d.y,e,!1)},
e0(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.l(a,b[s],d,e[s],f,!1))return!1
return!0},
fK(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.l(a,r[s],c,q[s],e,!1))return!1
return!0},
aQ(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.W(a))if(s!==7)if(!(s===6&&A.aQ(a.x)))r=s===8&&A.aQ(a.x)
return r},
hd(a){var s
if(!A.W(a))s=a===t._
else s=!0
return s},
W(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
e_(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cW(a){return a>0?new Array(a):v.typeUniverse.sEA},
C:function C(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bq:function bq(){this.c=this.b=this.a=null},
cT:function cT(a){this.a=a},
bo:function bo(){},
aH:function aH(a){this.a=a},
f2(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.h_()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bB(new A.cC(q),1)).observe(s,{childList:true})
return new A.cB(q,s,r)}else if(self.setImmediate!=null)return A.h0()
return A.h1()},
f3(a){self.scheduleImmediate(A.bB(new A.cD(t.M.a(a)),0))},
f4(a){self.setImmediate(A.bB(new A.cE(t.M.a(a)),0))},
f5(a){A.di(B.u,t.M.a(a))},
di(a,b){return A.ff(a.a/1000|0,b)},
ff(a,b){var s=new A.cR()
s.ap(a,b)
return s},
dc(a){var s
if(t.R.b(a)){s=a.gG()
if(s!=null)return s}return B.t},
eP(a,b){var s,r=!b.b(null)
if(r)throw A.d(A.bF(null,"computation","The type parameter is not nullable"))
s=new A.v($.n,b.i("v<0>"))
A.f1(a,new A.c1(null,s,b))
return s},
f7(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if(a===b){b.au(new A.K(!0,a,null,"Cannot complete a future with itself"),A.eZ())
return}s=r|b.a&1
a.a=s
if((s&24)!==0){q=b.V()
b.N(a)
A.aC(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.a8(q)}},
aC(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.e;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.cZ(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.aC(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.cZ(i.a,i.b)
return}f=$.n
if(f!==g)$.n=g
else f=null
b=b.c
if((b&15)===8)new A.cM(p,c,m).$0()
else if(n){if((b&1)!==0)new A.cL(p,i).$0()}else if((b&2)!==0)new A.cK(c,p).$0()
if(f!=null)$.n=f
b=p.c
if(b instanceof A.v){o=p.a.$ti
o=o.i("am<2>").b(b)||!o.y[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.I(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.f7(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.I(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
fQ(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.d(A.bF(a,"onError",u.c))},
fO(){var s,r
for(s=$.af;s!=null;s=$.af){$.aO=null
r=s.b
$.af=r
if(r==null)$.aN=null
s.a.$0()}},
fT(){$.dr=!0
try{A.fO()}finally{$.aO=null
$.dr=!1
if($.af!=null)$.dx().$1(A.ec())}},
ea(a){var s=new A.bl(a),r=$.aN
if(r==null){$.af=$.aN=s
if(!$.dr)$.dx().$1(A.ec())}else $.aN=r.b=s},
fS(a){var s,r,q,p=$.af
if(p==null){A.ea(a)
$.aO=$.aN
return}s=new A.bl(a)
r=$.aO
if(r==null){s.b=p
$.af=$.aO=s}else{q=r.b
s.b=q
$.aO=r.b=s
if(q==null)$.aN=s}},
f1(a,b){var s=$.n
if(s===B.a)return A.di(a,t.M.a(b))
return A.di(a,t.M.a(s.ad(b)))},
cZ(a,b){A.fS(new A.d_(a,b))},
e7(a,b,c,d,e){var s,r=$.n
if(r===c)return d.$0()
$.n=c
s=r
try{r=d.$0()
return r}finally{$.n=s}},
e8(a,b,c,d,e,f,g){var s,r=$.n
if(r===c)return d.$1(e)
$.n=c
s=r
try{r=d.$1(e)
return r}finally{$.n=s}},
fR(a,b,c,d,e,f,g,h,i){var s,r=$.n
if(r===c)return d.$2(e,f)
$.n=c
s=r
try{r=d.$2(e,f)
return r}finally{$.n=s}},
ds(a,b,c,d){t.M.a(d)
if(B.a!==c)d=c.ad(d)
A.ea(d)},
cC:function cC(a){this.a=a},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.a=a},
cE:function cE(a){this.a=a},
cR:function cR(){},
cS:function cS(a,b){this.a=a
this.b=b},
X:function X(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cH:function cH(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.a=a},
cL:function cL(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a
this.b=null},
aw:function aw(){},
cp:function cp(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=a
this.b=b},
aL:function aL(){},
d_:function d_(a,b){this.a=a
this.b=b},
bu:function bu(){},
cP:function cP(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
dG(a){return new A.aD(a.i("aD<0>"))},
dk(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
f8(a,b,c){var s=new A.ae(a,b,c.i("ae<0>"))
s.c=a.e
return s},
aD:function aD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
br:function br(a){this.a=a
this.c=this.b=null},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j:function j(){},
N:function N(){},
aF:function aF(){},
eN(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
eX(a){return new A.c4(a,A.eS(a,!1,!0,!1,!1,!1))},
f0(a,b,c){var s=J.eD(b)
if(!s.m())return a
if(c.length===0){do a+=A.t(s.gC())
while(s.m())}else{a+=A.t(s.gC())
for(;s.m();)a=a+c+A.t(s.gC())}return a},
eZ(){return A.aj(new Error())},
bY(a){if(typeof a=="number"||A.dq(a)||a==null)return J.ak(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eV(a)},
eO(a,b){A.ed(a,"error",t.K)
A.ed(b,"stackTrace",t.l)
A.eN(a,b)},
aX(a){return new A.aW(a)},
db(a,b){return new A.K(!1,null,b,a)},
bF(a,b,c){return new A.K(!0,a,b,c)},
dI(a,b,c,d,e){return new A.at(b,c,!0,a,d,"Invalid value")},
eW(a,b,c){if(0>a||a>c)throw A.d(A.dI(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.dI(b,a,c,"end",null))
return b}return c},
c3(a,b,c,d){return new A.b6(b,!0,a,d,"Index out of range")},
dj(a){return new A.az(a)},
dM(a){return new A.bj(a)},
f_(a){return new A.bg(a)},
bQ(a){return new A.b2(a)},
de(a,b,c){var s,r
if(A.hf(a))return b+"..."+c
s=new A.cr(b)
B.i.k($.aS,a)
try{r=s
r.a=A.f0(r.a,a,", ")}finally{if(0>=$.aS.length)return A.i($.aS,-1)
$.aS.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
al:function al(a){this.a=a},
h:function h(){},
aW:function aW(a){this.a=a},
Q:function Q(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b6:function b6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
az:function az(a){this.a=a},
bj:function bj(a){this.a=a},
bg:function bg(a){this.a=a},
b2:function b2(a){this.a=a},
ba:function ba(){},
av:function av(){},
cG:function cG(a){this.a=a},
c0:function c0(a,b){this.a=a
this.b=b},
E:function E(){},
m:function m(){},
bv:function bv(){},
cr:function cr(a){this.a=a},
dz(){var s=document.createElement("a")
s.toString
return s},
dO(a,b){var s,r=a.classList
r.toString
for(s=0;s<3;++s)r.add(b[s])},
f6(a,b){var s,r,q=a.classList
q.toString
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.d8)(b),++r)q.remove(A.aM(b[r]))},
ac(a,b,c,d,e){var s=A.fZ(new A.cF(c),t.B)
if(s!=null){a.toString
J.eC(a,b,t.o.a(s),!1)}return new A.bp(a,b,s,!1,e.i("bp<0>"))},
fZ(a,b){var s=$.n
if(s===B.a)return a
return s.aN(a,b)},
b:function b(){},
a5:function a5(){},
aU:function aU(){},
G:function G(){},
bV:function bV(){},
bW:function bW(){},
ad:function ad(a,b){this.a=a
this.$ti=b},
o:function o(){},
a:function a(){},
x:function x(){},
b5:function b5(){},
M:function M(){},
A:function A(){},
f:function f(){},
ar:function ar(){},
be:function be(){},
F:function F(){},
O:function O(){},
ax:function ax(){},
S:function S(){},
aE:function aE(){},
bn:function bn(a){this.a=a},
dd:function dd(a,b){this.a=a
this.$ti=b},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bp:function bp(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cF:function cF(a){this.a=a},
B:function B(){},
b4:function b4(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bs:function bs(){},
bt:function bt(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
b3:function b3(){},
bR:function bR(a){this.a=a},
bT:function bT(a){this.a=a},
bS:function bS(){},
aY:function aY(a){this.a=a},
c:function c(){},
c9:function c9(){},
b1:function b1(){},
ca:function ca(){},
bN:function bN(){},
bP:function bP(){},
bO:function bO(){},
bU:function bU(){},
ci:function ci(){},
bX:function bX(){},
bZ:function bZ(){},
c_:function c_(){},
c2:function c2(){},
c6:function c6(){},
c7:function c7(){},
c8:function c8(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
bE:function bE(){},
cg:function cg(){},
ck:function ck(){},
au:function au(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cs:function cs(){},
cu:function cu(){},
cc:function cc(){},
ct:function ct(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cb:function cb(){},
eH(a){var s,r=document,q=r.querySelector(".slider-container")
q.toString
s=t.h
A.dt(s,s,"T","querySelectorAll")
r=r.querySelectorAll(".slider-single")
r.toString
r=new A.aZ(!0,q,new A.ad(r,t.Y))
r.ao(!0)
return r},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=!1},
bG:function bG(a){this.a=a},
bM:function bM(a,b){this.a=a
this.b=b},
bK:function bK(a){this.a=a},
bL:function bL(a){this.a=a},
bH:function bH(a){this.a=a},
bI:function bI(a){this.a=a},
bJ:function bJ(a){this.a=a},
hh(){var s=t.h,r=document
r.toString
A.dt(s,s,"T","querySelectorAll")
r=r.querySelectorAll(".mdc-card__primary-action")
r.toString
r=new A.ad(r,t.Y)
r.aO(r,new A.d6())
A.eH(!0)},
d6:function d6(){},
q(a){A.d9(new A.ab("Field '"+a+"' has not been initialized."),new Error())},
hn(a){A.d9(new A.ab("Field '"+a+"' has already been initialized."),new Error())},
hm(a){A.d9(new A.ab("Field '"+a+"' has been assigned during initialization."),new Error())}},B={}
var w=[A,J,B]
var $={}
A.df.prototype={}
J.an.prototype={
E(a,b){return a===b},
gl(a){return A.bc(a)},
h(a){return"Instance of '"+A.cj(a)+"'"},
gv(a){return A.ai(A.dp(this))}}
J.b7.prototype={
h(a){return String(a)},
gl(a){return a?519018:218159},
gv(a){return A.ai(t.y)},
$iP:1,
$iaP:1}
J.ap.prototype={
E(a,b){return null==b},
h(a){return"null"},
gl(a){return 0},
$iP:1}
J.H.prototype={}
J.e.prototype={
gl(a){return 0},
h(a){return String(a)},
$iau:1}
J.bb.prototype={}
J.ay.prototype={}
J.L.prototype={
h(a){var s=a[$.ep()]
if(s==null)return this.an(a)
return"JavaScript function for "+J.ak(s)},
$ia1:1}
J.a8.prototype={
gl(a){return 0},
h(a){return String(a)}}
J.aa.prototype={
gl(a){return 0},
h(a){return String(a)}}
J.z.prototype={
k(a,b){A.cX(a).c.a(b)
a.$flags&1&&A.ho(a,29)
a.push(b)},
h(a){return A.de(a,"[","]")},
gD(a){return new J.aV(a,a.length,A.cX(a).i("aV<1>"))},
gl(a){return A.bc(a)},
gj(a){return a.length},
$ip:1,
$iy:1}
J.c5.prototype={}
J.aV.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.d8(q)
throw A.d(q)}s=r.c
if(s>=p){r.sa6(null)
return!1}r.sa6(q[s]);++r.c
return!0},
sa6(a){this.d=this.$ti.i("1?").a(a)}}
J.aq.prototype={
M(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.dj(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aa(a,b){return(a|0)===a?a/b|0:this.aI(a,b)},
aI(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.dj("Result of truncating division is "+A.t(s)+": "+A.t(a)+" ~/ "+b))},
aH(a,b){var s
if(a>0)s=this.aG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aG(a,b){return b>31?0:a>>>b},
gv(a){return A.ai(t.q)},
$iaR:1}
J.ao.prototype={
gv(a){return A.ai(t.p)},
$iP:1,
$ibD:1}
J.b8.prototype={
gv(a){return A.ai(t.i)},
$iP:1}
J.a7.prototype={
al(a,b,c){return a.substring(b,A.eW(b,c,a.length))},
aj(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.i(p,0)
if(p.charCodeAt(0)===133){s=J.eQ(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.i(p,r)
q=p.charCodeAt(r)===133?J.eR(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ak(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.r)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aR(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ak(c,s)+a},
h(a){return a},
gl(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gv(a){return A.ai(t.N)},
gj(a){return a.length},
$iP:1,
$ik:1}
A.ab.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.I.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.eg(q),o=p.gj(q)
if(r.b!==o)throw A.d(A.bQ(q))
s=r.c
if(s>=o){r.sa1(null)
return!1}r.sa1(p.K(q,s));++r.c
return!0},
sa1(a){this.d=this.$ti.i("1?").a(a)}}
A.cz.prototype={
p(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.as.prototype={
h(a){return"Null check operator used on a null value"}}
A.b9.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bk.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ch.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aG.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibf:1}
A.Y.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.en(r==null?"unknown":r)+"'"},
$ia1:1,
gaX(){return this},
$C:"$1",
$R:1,
$D:null}
A.b_.prototype={$C:"$0",$R:0}
A.b0.prototype={$C:"$2",$R:2}
A.bi.prototype={}
A.bh.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.en(s)+"'"}}
A.a6.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.hj(this.a)^A.bc(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cj(this.a)+"'")}}
A.bm.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bd.prototype={
h(a){return"RuntimeError: "+this.a}}
A.d2.prototype={
$1(a){return this.a(a)},
$S:6}
A.d3.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.d4.prototype={
$1(a){return this.a(A.aM(a))},
$S:8}
A.c4.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags}}
A.C.prototype={
i(a){return A.cV(v.typeUniverse,this,a)},
B(a){return A.fo(v.typeUniverse,this,a)}}
A.bq.prototype={}
A.cT.prototype={
h(a){return A.u(this.a,null)}}
A.bo.prototype={
h(a){return this.a}}
A.aH.prototype={$iQ:1}
A.cC.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:9}
A.cB.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:10}
A.cD.prototype={
$0(){this.a.$0()},
$S:3}
A.cE.prototype={
$0(){this.a.$0()},
$S:3}
A.cR.prototype={
ap(a,b){if(self.setTimeout!=null)self.setTimeout(A.bB(new A.cS(this,b),0),a)
else throw A.d(A.dj("`setTimeout()` not found."))}}
A.cS.prototype={
$0(){this.b.$0()},
$S:0}
A.X.prototype={
h(a){return A.t(this.a)},
$ih:1,
gG(){return this.b}}
A.c1.prototype={
$0(){this.c.a(null)
this.b.a5(null)},
$S:0}
A.aB.prototype={
aQ(a){if((this.c&15)!==6)return!0
return this.b.b.a_(t.m.a(this.d),a.a,t.y,t.K)},
aP(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.aT(q,m,a.b,o,n,t.l)
else p=l.a_(t.v.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.u.b(A.aT(s))){if((r.c&1)!==0)throw A.d(A.db("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.db("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.v.prototype={
aW(a,b,c){var s,r,q,p=this.$ti
p.B(c).i("1/(2)").a(a)
s=$.n
if(s===B.a){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.d(A.bF(b,"onError",u.c))}else{c.i("@<0/>").B(p.c).i("1(2)").a(a)
if(b!=null)b=A.fQ(b,s)}r=new A.v(s,c.i("v<0>"))
q=b==null?1:3
this.a3(new A.aB(r,q,a,b,p.i("@<1>").B(c).i("aB<1,2>")))
return r},
ai(a,b){return this.aW(a,null,b)},
aF(a){this.a=this.a&1|16
this.c=a},
N(a){this.a=a.a&30|this.a&1
this.c=a.c},
a3(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.a3(a)
return}r.N(s)}A.ds(null,null,r.b,t.M.a(new A.cH(r,a)))}},
a8(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.a8(a)
return}m.N(n)}l.a=m.I(a)
A.ds(null,null,m.b,t.M.a(new A.cJ(l,m)))}},
V(){var s=t.F.a(this.c)
this.c=null
return this.I(s)},
I(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a5(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
s=r.V()
q.c.a(a)
r.a=8
r.c=a
A.aC(r,s)},
av(a,b){var s
t.l.a(b)
s=this.V()
this.aF(new A.X(a,b))
A.aC(this,s)},
au(a,b){this.a^=2
A.ds(null,null,this.b,t.M.a(new A.cI(this,a,b)))},
$iam:1}
A.cH.prototype={
$0(){A.aC(this.a,this.b)},
$S:0}
A.cJ.prototype={
$0(){A.aC(this.b,this.a.a)},
$S:0}
A.cI.prototype={
$0(){this.a.av(this.b,this.c)},
$S:0}
A.cM.prototype={
$0(){var s,r,q,p,o,n,m,l=this,k=null
try{q=l.a.a
k=q.b.b.aS(t.x.a(q.d),t.z)}catch(p){s=A.aT(p)
r=A.aj(p)
if(l.c&&t.n.a(l.b.a.c).a===s){q=l.a
q.c=t.n.a(l.b.a.c)}else{q=s
o=r
if(o==null)o=A.dc(q)
n=l.a
n.c=new A.X(q,o)
q=n}q.b=!0
return}if(k instanceof A.v&&(k.a&24)!==0){if((k.a&16)!==0){q=l.a
q.c=t.n.a(k.c)
q.b=!0}return}if(k instanceof A.v){m=l.b.a
q=l.a
q.c=k.ai(new A.cN(m),t.z)
q.b=!1}},
$S:0}
A.cN.prototype={
$1(a){return this.a},
$S:11}
A.cL.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.a_(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aT(l)
r=A.aj(l)
q=s
p=r
if(p==null)p=A.dc(q)
o=this.a
o.c=new A.X(q,p)
o.b=!0}},
$S:0}
A.cK.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.aQ(s)&&p.a.e!=null){p.c=p.a.aP(s)
p.b=!1}}catch(o){r=A.aT(o)
q=A.aj(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dc(p)
m=l.b
m.c=new A.X(p,n)
p=m}p.b=!0}},
$S:0}
A.bl.prototype={}
A.aw.prototype={
gj(a){var s,r,q=this,p={},o=new A.v($.n,t.w)
p.a=0
s=A.J(q)
r=s.i("~(1)?").a(new A.cp(p,q))
t.bp.a(new A.cq(p,o))
A.ac(q.a,q.b,r,!1,s.c)
return o}}
A.cp.prototype={
$1(a){A.J(this.b).c.a(a);++this.a.a},
$S(){return A.J(this.b).i("~(1)")}}
A.cq.prototype={
$0(){this.b.a5(this.a.a)},
$S:0}
A.aL.prototype={$idN:1}
A.d_.prototype={
$0(){A.eO(this.a,this.b)},
$S:0}
A.bu.prototype={
aU(a){var s,r,q
t.M.a(a)
try{if(B.a===$.n){a.$0()
return}A.e7(null,null,this,a,t.H)}catch(q){s=A.aT(q)
r=A.aj(q)
A.cZ(t.K.a(s),t.l.a(r))}},
aV(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.a===$.n){a.$1(b)
return}A.e8(null,null,this,a,b,t.H,c)}catch(q){s=A.aT(q)
r=A.aj(q)
A.cZ(t.K.a(s),t.l.a(r))}},
ad(a){return new A.cP(this,t.M.a(a))},
aN(a,b){return new A.cQ(this,b.i("~(0)").a(a),b)},
aS(a,b){b.i("0()").a(a)
if($.n===B.a)return a.$0()
return A.e7(null,null,this,a,b)},
a_(a,b,c,d){c.i("@<0>").B(d).i("1(2)").a(a)
d.a(b)
if($.n===B.a)return a.$1(b)
return A.e8(null,null,this,a,b,c,d)},
aT(a,b,c,d,e,f){d.i("@<0>").B(e).B(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.n===B.a)return a.$2(b,c)
return A.fR(null,null,this,a,b,c,d,e,f)}}
A.cP.prototype={
$0(){return this.a.aU(this.b)},
$S:0}
A.cQ.prototype={
$1(a){var s=this.c
return this.a.aV(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.aD.prototype={
gD(a){var s=this,r=new A.ae(s,s.r,A.J(s).i("ae<1>"))
r.c=s.e
return r},
gj(a){return this.a},
t(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.aw(b)
return r}},
aw(a){var s=this.d
if(s==null)return!1
return this.S(s[this.O(a)],a)>=0},
k(a,b){var s,r,q=this
A.J(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.a2(s==null?q.b=A.dk():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.a2(r==null?q.c=A.dk():r,b)}else return q.aq(b)},
aq(a){var s,r,q,p=this
A.J(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.dk()
r=p.O(a)
q=s[r]
if(q==null)s[r]=[p.U(a)]
else{if(p.S(q,a)>=0)return!1
q.push(p.U(a))}return!0},
q(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.a9(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.a9(s.c,b)
else return s.aE(b)},
aE(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.O(a)
r=n[s]
q=o.S(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ab(p)
return!0},
a2(a,b){A.J(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.U(b)
return!0},
a9(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.ab(s)
delete a[b]
return!0},
T(){this.r=this.r+1&1073741823},
U(a){var s,r=this,q=new A.br(A.J(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.T()
return q},
ab(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.T()},
O(a){return J.da(a)&1073741823},
S(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.eA(a[r].a,b))return r
return-1}}
A.br.prototype={}
A.ae.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bQ(q))
else if(r==null){s.sa4(null)
return!1}else{s.sa4(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sa4(a){this.d=this.$ti.i("1?").a(a)}}
A.j.prototype={
gD(a){return new A.I(a,this.gj(a),A.a3(a).i("I<j.E>"))},
K(a,b){return this.A(a,b)},
aO(a,b){var s,r
A.a3(a).i("~(j.E)").a(b)
s=this.gj(a)
for(r=0;r<s;++r){b.$1(this.A(a,r))
if(s!==this.gj(a))throw A.d(A.bQ(a))}},
h(a){return A.de(a,"[","]")},
$ip:1,
$iy:1}
A.N.prototype={
L(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.d8)(a),++r)this.q(0,a[r])},
h(a){return A.de(this,"{","}")},
Y(a,b){var s,r,q,p,o=this.gD(this)
if(!o.m())return""
s=o.d
r=J.ak(s==null?o.$ti.c.a(s):s)
if(!o.m())return r
s=o.$ti.c
if(b.length===0){q=r
do{p=o.d
q+=A.t(p==null?s.a(p):p)}while(o.m())
s=q}else{q=r
do{p=o.d
q=q+b+A.t(p==null?s.a(p):p)}while(o.m())
s=q}return s.charCodeAt(0)==0?s:s},
$ip:1,
$iD:1}
A.aF.prototype={}
A.al.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.al&&this.a===b.a},
gl(a){return B.b.gl(this.a)},
h(a){var s,r,q,p=this.a,o=p%36e8,n=B.b.aa(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.b.aa(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.d.aR(B.b.h(o%1e6),6,"0")}}
A.h.prototype={
gG(){return A.eU(this)}}
A.aW.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bY(s)
return"Assertion failed"}}
A.Q.prototype={}
A.K.prototype={
gR(){return"Invalid argument"+(!this.a?"(s)":"")},
gP(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gR()+q+o
if(!s.a)return n
return n+s.gP()+": "+A.bY(s.gX())},
gX(){return this.b}}
A.at.prototype={
gX(){return A.fs(this.b)},
gR(){return"RangeError"},
gP(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.t(q):""
else if(q==null)s=": Not greater than or equal to "+A.t(r)
else if(q>r)s=": Not in inclusive range "+A.t(r)+".."+A.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.t(r)
return s}}
A.b6.prototype={
gX(){return A.cY(this.b)},
gR(){return"RangeError"},
gP(){if(A.cY(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.az.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bj.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bg.prototype={
h(a){return"Bad state: "+this.a}}
A.b2.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bY(s)+"."}}
A.ba.prototype={
h(a){return"Out of Memory"},
gG(){return null},
$ih:1}
A.av.prototype={
h(a){return"Stack Overflow"},
gG(){return null},
$ih:1}
A.cG.prototype={
h(a){return"Exception: "+this.a}}
A.c0.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.d.al(q,0,75)+"..."
return r+"\n"+q}}
A.E.prototype={
gl(a){return A.m.prototype.gl.call(this,0)},
h(a){return"null"}}
A.m.prototype={$im:1,
E(a,b){return this===b},
gl(a){return A.bc(this)},
h(a){return"Instance of '"+A.cj(this)+"'"},
gv(a){return A.h7(this)},
toString(){return this.h(this)}}
A.bv.prototype={
h(a){return""},
$ibf:1}
A.cr.prototype={
gj(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.b.prototype={}
A.a5.prototype={
h(a){var s=String(a)
s.toString
return s},
$ia5:1}
A.aU.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.G.prototype={
gj(a){return a.length}}
A.bV.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.bW.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.ad.prototype={
gj(a){return this.a.length},
A(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.i(s,b)
return this.$ti.c.a(s[b])}}
A.o.prototype={
gn(a){return new A.bn(a)},
h(a){var s=a.localName
s.toString
return s},
gag(a){return new A.T(a,"touchend",!1,t.s)},
gah(a){return new A.T(a,"touchstart",!1,t.s)},
$io:1}
A.a.prototype={$ia:1}
A.x.prototype={
ar(a,b,c,d){return a.addEventListener(b,A.bB(t.o.a(c),1),!1)},
$ix:1}
A.b5.prototype={
gj(a){return a.length}}
A.M.prototype={$iM:1}
A.A.prototype={$iA:1}
A.f.prototype={
h(a){var s=a.nodeValue
return s==null?this.am(a):s},
$if:1}
A.ar.prototype={
gj(a){var s=a.length
s.toString
return s},
A(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.c3(b,s,a,null))
s=a[b]
s.toString
return s},
K(a,b){if(!(b<a.length))return A.i(a,b)
return a[b]},
$ia9:1,
$ip:1,
$iy:1}
A.be.prototype={
gj(a){return a.length}}
A.F.prototype={$iF:1}
A.O.prototype={$iO:1}
A.ax.prototype={
gj(a){var s=a.length
s.toString
return s},
A(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.c3(b,s,a,null))
s=a[b]
s.toString
return s},
gaf(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.f_("No elements"))},
K(a,b){if(!(b<a.length))return A.i(a,b)
return a[b]},
$ia9:1,
$ip:1,
$iy:1}
A.S.prototype={}
A.aE.prototype={
gj(a){var s=a.length
s.toString
return s},
A(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.c3(b,s,a,null))
s=a[b]
s.toString
return s},
K(a,b){if(!(b<a.length))return A.i(a,b)
return a[b]},
$ia9:1,
$ip:1,
$iy:1}
A.bn.prototype={
u(){var s,r,q,p,o=A.dG(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=B.d.aj(s[q])
if(p.length!==0)o.k(0,p)}return o},
a0(a){this.a.className=t.C.a(a).Y(0," ")},
gj(a){var s=this.a.classList.length
s.toString
return s},
ae(a){this.a.className=""},
t(a,b){var s=this.a.classList.contains(b)
s.toString
return s},
k(a,b){var s=this.a.classList,r=s.contains(b)
r.toString
s.add(b)
return!r},
q(a,b){var s,r
if(typeof b=="string"){s=this.a.classList
r=s.contains(b)
r.toString
s.remove(b)}else r=!1
return r},
L(a){A.f6(this.a,a)}}
A.dd.prototype={}
A.aA.prototype={}
A.T.prototype={}
A.bp.prototype={}
A.cF.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:12}
A.B.prototype={
gD(a){return new A.b4(a,this.gj(a),A.a3(a).i("b4<B.E>"))}}
A.b4.prototype={
m(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sa7(J.eB(s.a,r))
s.c=r
return!0}s.sa7(null)
s.c=q
return!1},
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
sa7(a){this.d=this.$ti.i("1?").a(a)}}
A.bs.prototype={}
A.bt.prototype={}
A.bw.prototype={}
A.bx.prototype={}
A.by.prototype={}
A.bz.prototype={}
A.b3.prototype={
W(a){var s=$.eo()
if(s.b.test(a))return a
throw A.d(A.bF(a,"value","Not a valid class token"))},
h(a){return this.u().Y(0," ")},
gD(a){var s=this.u()
return A.f8(s,s.r,A.J(s).c)},
gj(a){return this.u().a},
t(a,b){this.W(b)
return this.u().t(0,b)},
k(a,b){var s
this.W(b)
s=this.Z(new A.bR(b))
return A.fr(s==null?!1:s)},
q(a,b){var s,r
if(typeof b!="string")return!1
this.W(b)
s=this.u()
r=s.q(0,b)
this.a0(s)
return r},
L(a){this.Z(new A.bT(a))},
ae(a){this.Z(new A.bS())},
Z(a){var s,r
t.G.a(a)
s=this.u()
r=a.$1(s)
this.a0(s)
return r}}
A.bR.prototype={
$1(a){return t.C.a(a).k(0,this.a)},
$S:13}
A.bT.prototype={
$1(a){return t.C.a(a).L(this.a)},
$S:4}
A.bS.prototype={
$1(a){t.C.a(a)
if(a.a>0){a.b=a.c=a.d=a.e=a.f=null
a.a=0
a.T()}return null},
$S:4}
A.aY.prototype={
u(){var s,r,q,p,o=this.a.getAttribute("class"),n=A.dG(t.N)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=B.d.aj(s[q])
if(p.length!==0)n.k(0,p)}return n},
a0(a){this.a.setAttribute("class",a.Y(0," "))}}
A.c.prototype={
gn(a){return new A.aY(a)},
gag(a){return new A.T(a,"touchend",!1,t.s)},
gah(a){return new A.T(a,"touchstart",!1,t.s)}}
A.c9.prototype={}
A.b1.prototype={}
A.ca.prototype={}
A.bN.prototype={}
A.bP.prototype={}
A.bO.prototype={}
A.bU.prototype={}
A.ci.prototype={}
A.bX.prototype={}
A.bZ.prototype={}
A.c_.prototype={}
A.c2.prototype={}
A.c6.prototype={}
A.c7.prototype={}
A.c8.prototype={}
A.cd.prototype={}
A.ce.prototype={}
A.cf.prototype={}
A.bE.prototype={}
A.cg.prototype={}
A.ck.prototype={}
A.au.prototype={}
A.cl.prototype={}
A.cm.prototype={}
A.cn.prototype={}
A.co.prototype={}
A.cs.prototype={}
A.cu.prototype={}
A.cc.prototype={}
A.ct.prototype={}
A.cv.prototype={}
A.cw.prototype={}
A.cx.prototype={}
A.cy.prototype={}
A.cb.prototype={}
A.aZ.prototype={
ao(a){var s,r=this,q=r.c,p=q.a,o=p.length
r.e!==$&&A.hn("lastSlideIndex")
s=r.e=o-1
r.d=-1
if(s===-1){J.r(r.b).ae(0)
return}if(s===0){if(0>=o)return A.i(p,0)
q=q.$ti.c.a(p[0])
r.r=q
J.r(q).k(0,"active")
return}r.aA()
r.aD()
r.aC()
q=r.b
p=J.bC(q)
o=p.gah(q)
s=o.$ti
A.ac(o.a,o.b,s.i("~(1)?").a(r.gaL()),!1,s.c)
q=p.gag(q)
p=q.$ti
A.ac(q.a,q.b,p.i("~(1)?").a(r.gaJ()),!1,p.c)
r.aB()
q=t.H
A.eP(B.v,q).ai(new A.bG(r),q)},
aA(){var s,r,q
for(s=this.c,r=s.$ti,s=new A.I(s,s.gj(0),r.i("I<j.E>")),r=r.i("j.E");s.m();){q=s.d
J.r(q==null?r.a(q):q).k(0,"next-hidden")}},
aD(){var s,r,q,p,o,n=document,m=n.createElement("div"),l=m.classList
l.contains("bullet-container").toString
l.add("bullet-container")
for(s=this.c.a,r=t.W,q=r.i("~(1)?"),r=r.c,p=0;p<s.length;++p){o=n.createElement("div")
l=o.classList
l.contains("bullet").toString
l.add("bullet")
o.id="bullet-index-"+p
A.ac(o,"click",q.a(new A.bM(this,p)),!1,r)
m.appendChild(o).toString}this.b.appendChild(m).toString},
aC(){var s,r,q,p,o,n=A.dz(),m=document,l=m.createElement("div")
l.toString
s=t.S
r=t.f
A.dO(l,r.a(A.a_(["fa","fa-chevron-left","fa-lg"],s)))
q=n.classList
q.contains("slider-left").toString
q.add("slider-left")
n.appendChild(l).toString
l=t.W
p=l.i("~(1)?")
l=l.c
A.ac(n,"click",p.a(new A.bK(this)),!1,l)
o=A.dz()
m=m.createElement("div")
m.toString
A.dO(m,r.a(A.a_(["fa","fa-chevron-right","fa-lg"],s)))
q=o.classList
q.contains("slider-right").toString
q.add("slider-right")
o.appendChild(m).toString
A.ac(o,"click",p.a(new A.bL(this)),!1,l)
l=this.b
l.appendChild(n).toString
l.appendChild(o).toString},
aM(a){var s,r=t.U.a(a).changedTouches
r.toString
r=B.k.gaf(r)
s=r.clientX
s.toString
s=B.c.M(s)
r=r.clientY
r.toString
B.c.M(r)
this.x=s
this.y=!0},
aK(a){var s,r,q,p=this,o="currentSlideIndex"
t.U.a(a)
if(p.y){s=a.changedTouches
s.toString
s=B.k.gaf(s)
r=s.clientX
r.toString
r=B.c.M(r)
s=s.clientY
s.toString
B.c.M(s)
s=p.x
s===$&&A.q("x0")
q=r-s
if(q>0){s=p.d
s===$&&A.q(o)
s=s>0}else s=!1
if(s)p.J()
else{if(q<0){s=p.d
s===$&&A.q(o)
r=p.e
r===$&&A.q("lastSlideIndex")
r=s<r
s=r}else s=!1
if(s)p.F()}p.y=!1}},
ac(){var s,r,q,p,o,n,m,l="currentSlideIndex",k="hidden",j=document,i=j.querySelector(".bullet-container")
i.toString
s=t.h
A.dt(s,s,"T","querySelectorAll")
i=i.querySelectorAll(".bullet")
for(r=0;r<i.length;++r){J.r(s.a(i[r])).q(0,"active")
q=this.d
q===$&&A.q(l)
if(r===q){if(!(r<i.length))return A.i(i,r)
J.r(s.a(i[r])).k(0,"active")}}i=t.a
p=i.a(j.querySelector(".slider-left"))
o=i.a(j.querySelector(".slider-right"))
j=this.d
j===$&&A.q(l)
i=this.c
s=i.a
q=s.length
n=q-1
if(j===n){if(0>=q)return A.i(s,0)
j=i.$ti.c
J.r(j.a(s[0])).k(0,k)
i=s.length
q=i-1
if(!(q>=0))return A.i(s,q)
J.r(j.a(s[q])).q(0,k)
m=p.classList
m.contains("hidden").toString
m.remove("hidden")
m=o.classList
m.contains("hidden").toString
m.add("hidden")}else{i=i.$ti.c
if(j===0){if(!(n>=0))return A.i(s,n)
J.r(i.a(s[n])).k(0,k)
if(0>=s.length)return A.i(s,0)
J.r(i.a(s[0])).q(0,k)
m=p.classList
m.contains("hidden").toString
m.add("hidden")
m=o.classList
m.contains("hidden").toString
m.remove("hidden")}else{if(!(n>=0))return A.i(s,n)
J.r(i.a(s[n])).q(0,k)
if(0>=s.length)return A.i(s,0)
J.r(i.a(s[0])).q(0,k)
m=p.classList
m.contains("hidden").toString
m.remove("hidden")
m=o.classList
m.contains("hidden").toString
m.remove("hidden")}}},
F(){var s,r,q,p,o,n,m=this,l="prev-hidden",k=m.d
k===$&&A.q("currentSlideIndex")
s=m.e
s===$&&A.q("lastSlideIndex")
k=k<s?m.d=k+1:m.d=0
r=m.c
q=r.$ti
p=r.a
if(k>0){o=k-1
if(!(o<p.length))return A.i(p,o)
m.f=q.c.a(p[o])}else{if(!(s>=0&&s<p.length))return A.i(p,s)
m.f=q.c.a(p[s])}q=p.length
if(!(k>=0&&k<q))return A.i(p,k)
o=r.$ti
n=o.c
m.r=n.a(p[k])
if(k<s){++k
if(!(k<q))return A.i(p,k)
m.w=n.a(p[k])}else{if(0>=q)return A.i(p,0)
m.w=n.a(p[0])}for(k=new A.I(r,r.gj(0),o.i("I<j.E>")),s=t.k,o=o.i("j.E");k.m();){r=k.d
if(r==null)r=o.a(r)
m.H(A.a_([r],s))
q=J.bC(r)
if(q.gn(r).t(0,l))q.gn(r).k(0,"next-hidden")
if(q.gn(r).t(0,"prev"))q.gn(r).k(0,l)}k=m.f
k===$&&A.q("prevSlide")
r=m.r
q=m.w
q===$&&A.q("nextSlide")
m.H(A.a_([k,r,q],s))
J.r(m.f).k(0,"prev")
J.r(m.r).k(0,"active")
J.r(m.w).k(0,"next")
m.ac()},
J(){var s,r,q,p,o,n,m=this,l="lastSlideIndex",k="next-hidden",j=m.d
j===$&&A.q("currentSlideIndex")
if(j>0)j=m.d=j-1
else{j=m.e
j===$&&A.q(l)
j=m.d=j}s=m.e
s===$&&A.q(l)
r=m.c
q=r.$ti
p=r.a
if(j<s){o=j+1
if(!(o>=0&&o<p.length))return A.i(p,o)
m.w=q.c.a(p[o])}else{if(0>=p.length)return A.i(p,0)
m.w=q.c.a(p[0])}q=p.length
if(!(j>=0&&j<q))return A.i(p,j)
o=r.$ti
n=o.c
m.r=n.a(p[j])
if(j>0)m.f=n.a(p[j-1])
else{if(!(s>=0&&s<q))return A.i(p,s)
m.f=n.a(p[s])}for(j=new A.I(r,r.gj(0),o.i("I<j.E>")),s=t.k,o=o.i("j.E");j.m();){r=j.d
if(r==null)r=o.a(r)
m.H(A.a_([r],s))
q=J.bC(r)
if(q.gn(r).t(0,"next"))q.gn(r).k(0,k)
if(q.gn(r).t(0,k))q.gn(r).k(0,"prev-hidden")}j=m.f
j===$&&A.q("prevSlide")
r=m.r
q=m.w
q===$&&A.q("nextSlide")
m.H(A.a_([j,r,q],s))
J.r(m.f).k(0,"prev")
J.r(m.r).k(0,"active")
J.r(m.w).k(0,"next")
m.ac()},
az(a){var s,r=this,q=r.d
q===$&&A.q("currentSlideIndex")
s=q<a?new A.bH(r):new A.bI(r)
for(;r.d!==a;)s.$0()},
H(a){var s,r
t.O.a(a)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.d8)(a),++r)J.r(a[r]).L(["prev-hidden","prev","active","next","next-hidden"])},
aB(){A.ac(document.body,"keyup",t.d.a(new A.bJ(this)),!1,t.j)}}
A.bG.prototype={
$1(a){return this.a.F()},
$S:14}
A.bM.prototype={
$1(a){t.V.a(a)
return this.a.az(this.b)},
$S:1}
A.bK.prototype={
$1(a){t.V.a(a)
return this.a.J()},
$S:1}
A.bL.prototype={
$1(a){t.V.a(a)
return this.a.F()},
$S:1}
A.bH.prototype={
$0(){return this.a.F()},
$S:0}
A.bI.prototype={
$0(){return this.a.J()},
$S:0}
A.bJ.prototype={
$1(a){var s,r,q=this,p="currentSlideIndex"
t.j.a(a)
s=a.keyCode
s.toString
if(s===37){s=q.a.d
s===$&&A.q(p)
s=s>0}else s=!1
if(s)q.a.J()
s=a.keyCode
s.toString
if(s===39){s=q.a
r=s.d
r===$&&A.q(p)
s=s.e
s===$&&A.q("lastSlideIndex")
s=r<s}else s=!1
if(s)q.a.F()},
$S:15}
A.d6.prototype={
$1(a){new mdc.ripple.MDCRipple(t.h.a(a))
return new A.cb()},
$S:16};(function aliases(){var s=J.an.prototype
s.am=s.h
s=J.e.prototype
s.an=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_1u
s(A,"h_","f3",2)
s(A,"h0","f4",2)
s(A,"h1","f5",2)
r(A,"ec","fT",0)
var p
q(p=A.aZ.prototype,"gaL","aM",5)
q(p,"gaJ","aK",5)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.m,null)
q(A.m,[A.df,J.an,J.aV,A.h,A.I,A.cz,A.ch,A.aG,A.Y,A.c4,A.C,A.bq,A.cT,A.cR,A.X,A.aB,A.v,A.bl,A.aw,A.aL,A.N,A.br,A.ae,A.j,A.al,A.ba,A.av,A.cG,A.c0,A.E,A.bv,A.cr,A.dd,A.bp,A.B,A.b4,A.c9,A.aZ])
q(J.an,[J.b7,J.ap,J.H,J.a8,J.aa,J.aq,J.a7])
q(J.H,[J.e,J.z,A.x,A.bV,A.bW,A.a,A.bs,A.F,A.bw,A.by])
q(J.e,[J.bb,J.ay,J.L,A.b1,A.ca,A.ci,A.cf,A.bE,A.cm,A.cc])
r(J.c5,J.z)
q(J.aq,[J.ao,J.b8])
q(A.h,[A.ab,A.Q,A.b9,A.bk,A.bm,A.bd,A.bo,A.aW,A.K,A.az,A.bj,A.bg,A.b2])
r(A.as,A.Q)
q(A.Y,[A.b_,A.b0,A.bi,A.d2,A.d4,A.cC,A.cB,A.cN,A.cp,A.cQ,A.cF,A.bR,A.bT,A.bS,A.bG,A.bM,A.bK,A.bL,A.bJ,A.d6])
q(A.bi,[A.bh,A.a6])
r(A.d3,A.b0)
r(A.aH,A.bo)
q(A.b_,[A.cD,A.cE,A.cS,A.c1,A.cH,A.cJ,A.cI,A.cM,A.cL,A.cK,A.cq,A.d_,A.cP,A.bH,A.bI])
r(A.bu,A.aL)
q(A.N,[A.aF,A.b3])
r(A.aD,A.aF)
q(A.K,[A.at,A.b6])
r(A.f,A.x)
q(A.f,[A.o,A.G])
q(A.o,[A.b,A.c])
q(A.b,[A.a5,A.aU,A.b5,A.be])
r(A.ad,A.j)
r(A.S,A.a)
q(A.S,[A.M,A.A,A.O])
r(A.bt,A.bs)
r(A.ar,A.bt)
r(A.bx,A.bw)
r(A.ax,A.bx)
r(A.bz,A.by)
r(A.aE,A.bz)
q(A.b3,[A.bn,A.aY])
r(A.aA,A.aw)
r(A.T,A.aA)
q(A.b1,[A.bN,A.bP,A.bO,A.bU,A.bX,A.bZ,A.c_,A.c2,A.c6,A.c7,A.c8,A.cd,A.ce,A.cg,A.ck,A.au,A.cl,A.cn,A.co,A.cs,A.cu,A.ct,A.cv,A.cw,A.cx,A.cy])
r(A.cb,A.c9)
s(A.bs,A.j)
s(A.bt,A.B)
s(A.bw,A.j)
s(A.bx,A.B)
s(A.by,A.j)
s(A.bz,A.B)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bD:"int",h5:"double",aR:"num",k:"String",aP:"bool",E:"Null",y:"List",m:"Object",hB:"Map"},mangledNames:{},types:["~()","~(A)","~(~())","E()","~(D<k>)","~(O)","@(@)","@(@,k)","@(k)","E(@)","E(~())","v<@>(@)","~(a)","aP(D<k>)","~(~)","~(M)","~(o)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.fn(v.typeUniverse,JSON.parse('{"bb":"e","ay":"e","L":"e","b1":"e","ca":"e","bN":"e","bP":"e","bO":"e","bU":"e","ci":"e","bX":"e","bZ":"e","c_":"e","c2":"e","c6":"e","c7":"e","c8":"e","cd":"e","ce":"e","cf":"e","bE":"e","cg":"e","ck":"e","au":"e","cl":"e","cm":"e","cn":"e","co":"e","cs":"e","cu":"e","cc":"e","ct":"e","cv":"e","cw":"e","cx":"e","cy":"e","hr":"a","hy":"a","hq":"c","hz":"c","hs":"b","hD":"b","hA":"f","hx":"f","hE":"A","hu":"S","ht":"G","hG":"G","hC":"o","b7":{"aP":[],"P":[]},"ap":{"P":[]},"e":{"au":[]},"z":{"y":["1"],"p":["1"]},"c5":{"z":["1"],"y":["1"],"p":["1"]},"aq":{"aR":[]},"ao":{"bD":[],"aR":[],"P":[]},"b8":{"aR":[],"P":[]},"a7":{"k":[],"P":[]},"ab":{"h":[]},"as":{"Q":[],"h":[]},"b9":{"h":[]},"bk":{"h":[]},"aG":{"bf":[]},"Y":{"a1":[]},"b_":{"a1":[]},"b0":{"a1":[]},"bi":{"a1":[]},"bh":{"a1":[]},"a6":{"a1":[]},"bm":{"h":[]},"bd":{"h":[]},"bo":{"h":[]},"aH":{"Q":[],"h":[]},"v":{"am":["1"]},"X":{"h":[]},"aL":{"dN":[]},"bu":{"aL":[],"dN":[]},"aD":{"N":["1"],"D":["1"],"p":["1"]},"j":{"y":["1"],"p":["1"]},"N":{"D":["1"],"p":["1"]},"aF":{"N":["1"],"D":["1"],"p":["1"]},"bD":{"aR":[]},"D":{"p":["1"]},"aW":{"h":[]},"Q":{"h":[]},"K":{"h":[]},"at":{"h":[]},"b6":{"h":[]},"az":{"h":[]},"bj":{"h":[]},"bg":{"h":[]},"b2":{"h":[]},"ba":{"h":[]},"av":{"h":[]},"bv":{"bf":[]},"o":{"f":[],"x":[]},"M":{"a":[]},"A":{"a":[]},"f":{"x":[]},"O":{"a":[]},"b":{"o":[],"f":[],"x":[]},"a5":{"o":[],"f":[],"x":[]},"aU":{"o":[],"f":[],"x":[]},"G":{"f":[],"x":[]},"ad":{"j":["1"],"y":["1"],"p":["1"],"j.E":"1"},"b5":{"o":[],"f":[],"x":[]},"ar":{"j":["f"],"B":["f"],"y":["f"],"a9":["f"],"p":["f"],"j.E":"f","B.E":"f"},"be":{"o":[],"f":[],"x":[]},"ax":{"j":["F"],"B":["F"],"y":["F"],"a9":["F"],"p":["F"],"j.E":"F","B.E":"F"},"S":{"a":[]},"aE":{"j":["f"],"B":["f"],"y":["f"],"a9":["f"],"p":["f"],"j.E":"f","B.E":"f"},"bn":{"N":["k"],"D":["k"],"p":["k"]},"aA":{"aw":["1"]},"T":{"aA":["1"],"aw":["1"]},"b3":{"N":["k"],"D":["k"],"p":["k"]},"aY":{"N":["k"],"D":["k"],"p":["k"]},"c":{"o":[],"f":[],"x":[]}}'))
A.fm(v.typeUniverse,JSON.parse('{"aF":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ef
return{a:s("a5"),n:s("X"),h:s("o"),R:s("h"),B:s("a"),Z:s("a1"),e:s("am<@>"),f:s("p<k>"),k:s("z<o>"),S:s("z<k>"),b:s("z<@>"),T:s("ap"),L:s("L"),D:s("a9<@>"),j:s("M"),O:s("y<o>"),r:s("y<@>"),V:s("A"),P:s("E"),K:s("m"),I:s("hF"),C:s("D<k>"),l:s("bf"),N:s("k"),U:s("O"),t:s("P"),u:s("Q"),E:s("ay"),W:s("T<A>"),s:s("T<O>"),Y:s("ad<o>"),c:s("v<@>"),w:s("v<bD>"),y:s("aP"),m:s("aP(m)"),i:s("h5"),z:s("@"),x:s("@()"),v:s("@(m)"),Q:s("@(m,bf)"),G:s("@(D<k>)"),p:s("bD"),A:s("0&*"),_:s("m*"),J:s("am<E>?"),X:s("m?"),F:s("aB<@,@>?"),g:s("br?"),o:s("@(a)?"),bp:s("~()?"),d:s("~(M)?"),q:s("aR"),H:s("~"),M:s("~()")}})();(function constants(){B.w=J.an.prototype
B.i=J.z.prototype
B.b=J.ao.prototype
B.c=J.aq.prototype
B.d=J.a7.prototype
B.x=J.L.prototype
B.y=J.H.prototype
B.j=J.bb.prototype
B.k=A.ax.prototype
B.e=J.ay.prototype
B.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.l=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.q=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.m=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.p=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.o=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.n=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.h=function(hooks) { return hooks; }

B.r=new A.ba()
B.a=new A.bu()
B.t=new A.bv()
B.u=new A.al(0)
B.v=new A.al(5e5)})();(function staticFields(){$.cO=null
$.aS=A.a_([],A.ef("z<m>"))
$.dH=null
$.dC=null
$.dB=null
$.ei=null
$.eb=null
$.em=null
$.d0=null
$.d5=null
$.dv=null
$.af=null
$.aN=null
$.aO=null
$.dr=!1
$.n=B.a})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hw","ep",()=>A.h6("_$dart_dartClosure"))
s($,"hH","eq",()=>A.R(A.cA({
toString:function(){return"$receiver$"}})))
s($,"hI","er",()=>A.R(A.cA({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"hJ","es",()=>A.R(A.cA(null)))
s($,"hK","et",()=>A.R(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hN","ew",()=>A.R(A.cA(void 0)))
s($,"hO","ex",()=>A.R(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hM","ev",()=>A.R(A.dL(null)))
s($,"hL","eu",()=>A.R(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"hQ","ez",()=>A.R(A.dL(void 0)))
s($,"hP","ey",()=>A.R(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"hR","dx",()=>A.f2())
s($,"hv","eo",()=>A.eX("^\\S+$"))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.H,MediaError:J.H,NavigatorUserMediaError:J.H,OverconstrainedError:J.H,PositionError:J.H,GeolocationPositionError:J.H,HTMLAudioElement:A.b,HTMLBRElement:A.b,HTMLBaseElement:A.b,HTMLBodyElement:A.b,HTMLButtonElement:A.b,HTMLCanvasElement:A.b,HTMLContentElement:A.b,HTMLDListElement:A.b,HTMLDataElement:A.b,HTMLDataListElement:A.b,HTMLDetailsElement:A.b,HTMLDialogElement:A.b,HTMLDivElement:A.b,HTMLEmbedElement:A.b,HTMLFieldSetElement:A.b,HTMLHRElement:A.b,HTMLHeadElement:A.b,HTMLHeadingElement:A.b,HTMLHtmlElement:A.b,HTMLIFrameElement:A.b,HTMLImageElement:A.b,HTMLInputElement:A.b,HTMLLIElement:A.b,HTMLLabelElement:A.b,HTMLLegendElement:A.b,HTMLLinkElement:A.b,HTMLMapElement:A.b,HTMLMediaElement:A.b,HTMLMenuElement:A.b,HTMLMetaElement:A.b,HTMLMeterElement:A.b,HTMLModElement:A.b,HTMLOListElement:A.b,HTMLObjectElement:A.b,HTMLOptGroupElement:A.b,HTMLOptionElement:A.b,HTMLOutputElement:A.b,HTMLParagraphElement:A.b,HTMLParamElement:A.b,HTMLPictureElement:A.b,HTMLPreElement:A.b,HTMLProgressElement:A.b,HTMLQuoteElement:A.b,HTMLScriptElement:A.b,HTMLShadowElement:A.b,HTMLSlotElement:A.b,HTMLSourceElement:A.b,HTMLSpanElement:A.b,HTMLStyleElement:A.b,HTMLTableCaptionElement:A.b,HTMLTableCellElement:A.b,HTMLTableDataCellElement:A.b,HTMLTableHeaderCellElement:A.b,HTMLTableColElement:A.b,HTMLTableElement:A.b,HTMLTableRowElement:A.b,HTMLTableSectionElement:A.b,HTMLTemplateElement:A.b,HTMLTextAreaElement:A.b,HTMLTimeElement:A.b,HTMLTitleElement:A.b,HTMLTrackElement:A.b,HTMLUListElement:A.b,HTMLUnknownElement:A.b,HTMLVideoElement:A.b,HTMLDirectoryElement:A.b,HTMLFontElement:A.b,HTMLFrameElement:A.b,HTMLFrameSetElement:A.b,HTMLMarqueeElement:A.b,HTMLElement:A.b,HTMLAnchorElement:A.a5,HTMLAreaElement:A.aU,CDATASection:A.G,CharacterData:A.G,Comment:A.G,ProcessingInstruction:A.G,Text:A.G,DOMException:A.bV,DOMTokenList:A.bW,MathMLElement:A.o,Element:A.o,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.x,HTMLFormElement:A.b5,KeyboardEvent:A.M,MouseEvent:A.A,DragEvent:A.A,PointerEvent:A.A,WheelEvent:A.A,Document:A.f,DocumentFragment:A.f,HTMLDocument:A.f,ShadowRoot:A.f,XMLDocument:A.f,Attr:A.f,DocumentType:A.f,Node:A.f,NodeList:A.ar,RadioNodeList:A.ar,HTMLSelectElement:A.be,Touch:A.F,TouchEvent:A.O,TouchList:A.ax,CompositionEvent:A.S,FocusEvent:A.S,TextEvent:A.S,UIEvent:A.S,NamedNodeMap:A.aE,MozNamedAttrMap:A.aE,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGScriptElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMTokenList:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.hh
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=description.dart.js.map
