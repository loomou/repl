function Jn(s){const e=new Map;function t(o){if(e.has(o))return e.get(o);const a=gr(o,s);return e.set(o,a),a}function i(o){return t(o).map(c=>$t(c[o])).filter(Boolean)}return{getSortedPlugins:t,getSortedPluginHooks:i}}function gr(s,e){const t=[];let i=0,o=0,a=0;for(const c of e){const A=c[s];if(A){if(typeof A=="object"){if(A.order==="pre"){t.splice(i++,0,c);continue}if(A.order==="post"){t.splice(i+o+a++,0,c);continue}}t.splice(i+o++,0,c)}}return t}function $t(s){return typeof s=="object"?s.handler:s}const tn="/@id/",Gn="__x00__",pr=/[?#].*$/;function Bt(s){return s.replace(pr,"")}function mr(s){return s.startsWith(tn)?s:tn+s.replace("\0",Gn)}function Hn(s){return s[s.length-1]!=="/"?`${s}/`:s}function wr(s){return s.startsWith(tn)?s.slice(tn.length).replace(Gn,"\0"):s}var Pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Er(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qn={exports:{}},Yt={exports:{}},Yn={},rn={};rn.byteLength=Br;rn.toByteArray=vr;rn.fromByteArray=xr;var Ct=[],At=[],yr=typeof Uint8Array<"u"?Uint8Array:Array,an="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Lt=0,Cr=an.length;Lt<Cr;++Lt)Ct[Lt]=an[Lt],At[an.charCodeAt(Lt)]=Lt;At[45]=62;At[95]=63;function Wn(s){var e=s.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=s.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Br(s){var e=Wn(s),t=e[0],i=e[1];return(t+i)*3/4-i}function Qr(s,e,t){return(e+t)*3/4-t}function vr(s){var e,t=Wn(s),i=t[0],o=t[1],a=new yr(Qr(s,i,o)),c=0,A=o>0?i-4:i,h;for(h=0;h<A;h+=4)e=At[s.charCodeAt(h)]<<18|At[s.charCodeAt(h+1)]<<12|At[s.charCodeAt(h+2)]<<6|At[s.charCodeAt(h+3)],a[c++]=e>>16&255,a[c++]=e>>8&255,a[c++]=e&255;return o===2&&(e=At[s.charCodeAt(h)]<<2|At[s.charCodeAt(h+1)]>>4,a[c++]=e&255),o===1&&(e=At[s.charCodeAt(h)]<<10|At[s.charCodeAt(h+1)]<<4|At[s.charCodeAt(h+2)]>>2,a[c++]=e>>8&255,a[c++]=e&255),a}function Ir(s){return Ct[s>>18&63]+Ct[s>>12&63]+Ct[s>>6&63]+Ct[s&63]}function br(s,e,t){for(var i,o=[],a=e;a<t;a+=3)i=(s[a]<<16&16711680)+(s[a+1]<<8&65280)+(s[a+2]&255),o.push(Ir(i));return o.join("")}function xr(s){for(var e,t=s.length,i=t%3,o=[],a=16383,c=0,A=t-i;c<A;c+=a)o.push(br(s,c,c+a>A?A:c+a));return i===1?(e=s[t-1],o.push(Ct[e>>2]+Ct[e<<4&63]+"==")):i===2&&(e=(s[t-2]<<8)+s[t-1],o.push(Ct[e>>10]+Ct[e>>4&63]+Ct[e<<2&63]+"=")),o.join("")}var mn={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */mn.read=function(s,e,t,i,o){var a,c,A=o*8-i-1,h=(1<<A)-1,w=h>>1,f=-7,S=t?o-1:0,J=t?-1:1,ie=s[e+S];for(S+=J,a=ie&(1<<-f)-1,ie>>=-f,f+=A;f>0;a=a*256+s[e+S],S+=J,f-=8);for(c=a&(1<<-f)-1,a>>=-f,f+=i;f>0;c=c*256+s[e+S],S+=J,f-=8);if(a===0)a=1-w;else{if(a===h)return c?NaN:(ie?-1:1)*(1/0);c=c+Math.pow(2,i),a=a-w}return(ie?-1:1)*c*Math.pow(2,a-i)};mn.write=function(s,e,t,i,o,a){var c,A,h,w=a*8-o-1,f=(1<<w)-1,S=f>>1,J=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,ie=i?0:a-1,z=i?1:-1,ue=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(A=isNaN(e)?1:0,c=f):(c=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-c))<1&&(c--,h*=2),c+S>=1?e+=J/h:e+=J*Math.pow(2,1-S),e*h>=2&&(c++,h/=2),c+S>=f?(A=0,c=f):c+S>=1?(A=(e*h-1)*Math.pow(2,o),c=c+S):(A=e*Math.pow(2,S-1)*Math.pow(2,o),c=0));o>=8;s[t+ie]=A&255,ie+=z,A/=256,o-=8);for(c=c<<o|A,w+=o;w>0;s[t+ie]=c&255,ie+=z,c/=256,w-=8);s[t+ie-z]|=ue*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(s){const e=rn,t=mn,i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;s.Buffer=f,s.SlowBuffer=G,s.INSPECT_MAX_BYTES=50;const o=2147483647;s.kMaxLength=o;const{Uint8Array:a,ArrayBuffer:c,SharedArrayBuffer:A}=globalThis;f.TYPED_ARRAY_SUPPORT=h(),!f.TYPED_ARRAY_SUPPORT&&typeof console<"u";function h(){try{const l=new a(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,a.prototype),Object.setPrototypeOf(l,n),l.foo()===42}catch{return!1}}Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}});function w(l){if(l>o)throw new RangeError('The value "'+l+'" is invalid for option "size"');const n=new a(l);return Object.setPrototypeOf(n,f.prototype),n}function f(l,n,r){if(typeof l=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return z(l)}return S(l,n,r)}f.poolSize=8192;function S(l,n,r){if(typeof l=="string")return ue(l,n);if(c.isView(l))return P(l);if(l==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l);if(U(l,c)||l&&U(l.buffer,c)||typeof A<"u"&&(U(l,A)||l&&U(l.buffer,A)))return x(l,n,r);if(typeof l=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const u=l.valueOf&&l.valueOf();if(u!=null&&u!==l)return f.from(u,n,r);const p=_(l);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof l[Symbol.toPrimitive]=="function")return f.from(l[Symbol.toPrimitive]("string"),n,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l)}f.from=function(l,n,r){return S(l,n,r)},Object.setPrototypeOf(f.prototype,a.prototype),Object.setPrototypeOf(f,a);function J(l){if(typeof l!="number")throw new TypeError('"size" argument must be of type number');if(l<0)throw new RangeError('The value "'+l+'" is invalid for option "size"')}function ie(l,n,r){return J(l),l<=0?w(l):n!==void 0?typeof r=="string"?w(l).fill(n,r):w(l).fill(n):w(l)}f.alloc=function(l,n,r){return ie(l,n,r)};function z(l){return J(l),w(l<0?0:O(l)|0)}f.allocUnsafe=function(l){return z(l)},f.allocUnsafeSlow=function(l){return z(l)};function ue(l,n){if((typeof n!="string"||n==="")&&(n="utf8"),!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n);const r=ae(l,n)|0;let u=w(r);const p=u.write(l,n);return p!==r&&(u=u.slice(0,p)),u}function Pe(l){const n=l.length<0?0:O(l.length)|0,r=w(n);for(let u=0;u<n;u+=1)r[u]=l[u]&255;return r}function P(l){if(U(l,a)){const n=new a(l);return x(n.buffer,n.byteOffset,n.byteLength)}return Pe(l)}function x(l,n,r){if(n<0||l.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(l.byteLength<n+(r||0))throw new RangeError('"length" is outside of buffer bounds');let u;return n===void 0&&r===void 0?u=new a(l):r===void 0?u=new a(l,n):u=new a(l,n,r),Object.setPrototypeOf(u,f.prototype),u}function _(l){if(f.isBuffer(l)){const n=O(l.length)|0,r=w(n);return r.length===0||l.copy(r,0,0,n),r}if(l.length!==void 0)return typeof l.length!="number"||j(l.length)?w(0):Pe(l);if(l.type==="Buffer"&&Array.isArray(l.data))return Pe(l.data)}function O(l){if(l>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return l|0}function G(l){return+l!=l&&(l=0),f.alloc(+l)}f.isBuffer=function(n){return n!=null&&n._isBuffer===!0&&n!==f.prototype},f.compare=function(n,r){if(U(n,a)&&(n=f.from(n,n.offset,n.byteLength)),U(r,a)&&(r=f.from(r,r.offset,r.byteLength)),!f.isBuffer(n)||!f.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(n===r)return 0;let u=n.length,p=r.length;for(let C=0,b=Math.min(u,p);C<b;++C)if(n[C]!==r[C]){u=n[C],p=r[C];break}return u<p?-1:p<u?1:0},f.isEncoding=function(n){switch(String(n).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(n,r){if(!Array.isArray(n))throw new TypeError('"list" argument must be an Array of Buffers');if(n.length===0)return f.alloc(0);let u;if(r===void 0)for(r=0,u=0;u<n.length;++u)r+=n[u].length;const p=f.allocUnsafe(r);let C=0;for(u=0;u<n.length;++u){let b=n[u];if(U(b,a))C+b.length>p.length?(f.isBuffer(b)||(b=f.from(b)),b.copy(p,C)):a.prototype.set.call(p,b,C);else if(f.isBuffer(b))b.copy(p,C);else throw new TypeError('"list" argument must be an Array of Buffers');C+=b.length}return p};function ae(l,n){if(f.isBuffer(l))return l.length;if(c.isView(l)||U(l,c))return l.byteLength;if(typeof l!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof l);const r=l.length,u=arguments.length>2&&arguments[2]===!0;if(!u&&r===0)return 0;let p=!1;for(;;)switch(n){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tt(l).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return v(l).length;default:if(p)return u?-1:tt(l).length;n=(""+n).toLowerCase(),p=!0}}f.byteLength=ae;function W(l,n,r){let u=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,n>>>=0,r<=n))return"";for(l||(l="utf8");;)switch(l){case"hex":return ve(this,n,r);case"utf8":case"utf-8":return ee(this,n,r);case"ascii":return pe(this,n,r);case"latin1":case"binary":return ke(this,n,r);case"base64":return Ve(this,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,n,r);default:if(u)throw new TypeError("Unknown encoding: "+l);l=(l+"").toLowerCase(),u=!0}}f.prototype._isBuffer=!0;function Z(l,n,r){const u=l[n];l[n]=l[r],l[r]=u}f.prototype.swap16=function(){const n=this.length;if(n%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let r=0;r<n;r+=2)Z(this,r,r+1);return this},f.prototype.swap32=function(){const n=this.length;if(n%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<n;r+=4)Z(this,r,r+3),Z(this,r+1,r+2);return this},f.prototype.swap64=function(){const n=this.length;if(n%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<n;r+=8)Z(this,r,r+7),Z(this,r+1,r+6),Z(this,r+2,r+5),Z(this,r+3,r+4);return this},f.prototype.toString=function(){const n=this.length;return n===0?"":arguments.length===0?ee(this,0,n):W.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(n){if(!f.isBuffer(n))throw new TypeError("Argument must be a Buffer");return this===n?!0:f.compare(this,n)===0},f.prototype.inspect=function(){let n="";const r=s.INSPECT_MAX_BYTES;return n=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(n+=" ... "),"<Buffer "+n+">"},i&&(f.prototype[i]=f.prototype.inspect),f.prototype.compare=function(n,r,u,p,C){if(U(n,a)&&(n=f.from(n,n.offset,n.byteLength)),!f.isBuffer(n))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof n);if(r===void 0&&(r=0),u===void 0&&(u=n?n.length:0),p===void 0&&(p=0),C===void 0&&(C=this.length),r<0||u>n.length||p<0||C>this.length)throw new RangeError("out of range index");if(p>=C&&r>=u)return 0;if(p>=C)return-1;if(r>=u)return 1;if(r>>>=0,u>>>=0,p>>>=0,C>>>=0,this===n)return 0;let b=C-p,he=u-r;const Te=Math.min(b,he),Re=this.slice(p,C),Ne=n.slice(r,u);for(let je=0;je<Te;++je)if(Re[je]!==Ne[je]){b=Re[je],he=Ne[je];break}return b<he?-1:he<b?1:0};function L(l,n,r,u,p){if(l.length===0)return-1;if(typeof r=="string"?(u=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,j(r)&&(r=p?0:l.length-1),r<0&&(r=l.length+r),r>=l.length){if(p)return-1;r=l.length-1}else if(r<0)if(p)r=0;else return-1;if(typeof n=="string"&&(n=f.from(n,u)),f.isBuffer(n))return n.length===0?-1:fe(l,n,r,u,p);if(typeof n=="number")return n=n&255,typeof a.prototype.indexOf=="function"?p?a.prototype.indexOf.call(l,n,r):a.prototype.lastIndexOf.call(l,n,r):fe(l,[n],r,u,p);throw new TypeError("val must be string, number or Buffer")}function fe(l,n,r,u,p){let C=1,b=l.length,he=n.length;if(u!==void 0&&(u=String(u).toLowerCase(),u==="ucs2"||u==="ucs-2"||u==="utf16le"||u==="utf-16le")){if(l.length<2||n.length<2)return-1;C=2,b/=2,he/=2,r/=2}function Te(Ne,je){return C===1?Ne[je]:Ne.readUInt16BE(je*C)}let Re;if(p){let Ne=-1;for(Re=r;Re<b;Re++)if(Te(l,Re)===Te(n,Ne===-1?0:Re-Ne)){if(Ne===-1&&(Ne=Re),Re-Ne+1===he)return Ne*C}else Ne!==-1&&(Re-=Re-Ne),Ne=-1}else for(r+he>b&&(r=b-he),Re=r;Re>=0;Re--){let Ne=!0;for(let je=0;je<he;je++)if(Te(l,Re+je)!==Te(n,je)){Ne=!1;break}if(Ne)return Re}return-1}f.prototype.includes=function(n,r,u){return this.indexOf(n,r,u)!==-1},f.prototype.indexOf=function(n,r,u){return L(this,n,r,u,!0)},f.prototype.lastIndexOf=function(n,r,u){return L(this,n,r,u,!1)};function Qe(l,n,r,u){r=Number(r)||0;const p=l.length-r;u?(u=Number(u),u>p&&(u=p)):u=p;const C=n.length;u>C/2&&(u=C/2);let b;for(b=0;b<u;++b){const he=parseInt(n.substr(b*2,2),16);if(j(he))return b;l[r+b]=he}return b}function Oe(l,n,r,u){return D(tt(n,l.length-r),l,r,u)}function Ae(l,n,r,u){return D(Dt(n),l,r,u)}function Ke(l,n,r,u){return D(v(n),l,r,u)}function st(l,n,r,u){return D(rt(n,l.length-r),l,r,u)}f.prototype.write=function(n,r,u,p){if(r===void 0)p="utf8",u=this.length,r=0;else if(u===void 0&&typeof r=="string")p=r,u=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(u)?(u=u>>>0,p===void 0&&(p="utf8")):(p=u,u=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const C=this.length-r;if((u===void 0||u>C)&&(u=C),n.length>0&&(u<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let b=!1;for(;;)switch(p){case"hex":return Qe(this,n,r,u);case"utf8":case"utf-8":return Oe(this,n,r,u);case"ascii":case"latin1":case"binary":return Ae(this,n,r,u);case"base64":return Ke(this,n,r,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return st(this,n,r,u);default:if(b)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),b=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ve(l,n,r){return n===0&&r===l.length?e.fromByteArray(l):e.fromByteArray(l.slice(n,r))}function ee(l,n,r){r=Math.min(l.length,r);const u=[];let p=n;for(;p<r;){const C=l[p];let b=null,he=C>239?4:C>223?3:C>191?2:1;if(p+he<=r){let Te,Re,Ne,je;switch(he){case 1:C<128&&(b=C);break;case 2:Te=l[p+1],(Te&192)===128&&(je=(C&31)<<6|Te&63,je>127&&(b=je));break;case 3:Te=l[p+1],Re=l[p+2],(Te&192)===128&&(Re&192)===128&&(je=(C&15)<<12|(Te&63)<<6|Re&63,je>2047&&(je<55296||je>57343)&&(b=je));break;case 4:Te=l[p+1],Re=l[p+2],Ne=l[p+3],(Te&192)===128&&(Re&192)===128&&(Ne&192)===128&&(je=(C&15)<<18|(Te&63)<<12|(Re&63)<<6|Ne&63,je>65535&&je<1114112&&(b=je))}}b===null?(b=65533,he=1):b>65535&&(b-=65536,u.push(b>>>10&1023|55296),b=56320|b&1023),u.push(b),p+=he}return ce(u)}const V=4096;function ce(l){const n=l.length;if(n<=V)return String.fromCharCode.apply(String,l);let r="",u=0;for(;u<n;)r+=String.fromCharCode.apply(String,l.slice(u,u+=V));return r}function pe(l,n,r){let u="";r=Math.min(l.length,r);for(let p=n;p<r;++p)u+=String.fromCharCode(l[p]&127);return u}function ke(l,n,r){let u="";r=Math.min(l.length,r);for(let p=n;p<r;++p)u+=String.fromCharCode(l[p]);return u}function ve(l,n,r){const u=l.length;(!n||n<0)&&(n=0),(!r||r<0||r>u)&&(r=u);let p="";for(let C=n;C<r;++C)p+=we[l[C]];return p}function E(l,n,r){const u=l.slice(n,r);let p="";for(let C=0;C<u.length-1;C+=2)p+=String.fromCharCode(u[C]+u[C+1]*256);return p}f.prototype.slice=function(n,r){const u=this.length;n=~~n,r=r===void 0?u:~~r,n<0?(n+=u,n<0&&(n=0)):n>u&&(n=u),r<0?(r+=u,r<0&&(r=0)):r>u&&(r=u),r<n&&(r=n);const p=this.subarray(n,r);return Object.setPrototypeOf(p,f.prototype),p};function le(l,n,r){if(l%1!==0||l<0)throw new RangeError("offset is not uint");if(l+n>r)throw new RangeError("Trying to access beyond buffer length")}f.prototype.readUintLE=f.prototype.readUIntLE=function(n,r,u){n=n>>>0,r=r>>>0,u||le(n,r,this.length);let p=this[n],C=1,b=0;for(;++b<r&&(C*=256);)p+=this[n+b]*C;return p},f.prototype.readUintBE=f.prototype.readUIntBE=function(n,r,u){n=n>>>0,r=r>>>0,u||le(n,r,this.length);let p=this[n+--r],C=1;for(;r>0&&(C*=256);)p+=this[n+--r]*C;return p},f.prototype.readUint8=f.prototype.readUInt8=function(n,r){return n=n>>>0,r||le(n,1,this.length),this[n]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(n,r){return n=n>>>0,r||le(n,2,this.length),this[n]|this[n+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(n,r){return n=n>>>0,r||le(n,2,this.length),this[n]<<8|this[n+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(n,r){return n=n>>>0,r||le(n,4,this.length),(this[n]|this[n+1]<<8|this[n+2]<<16)+this[n+3]*16777216},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(n,r){return n=n>>>0,r||le(n,4,this.length),this[n]*16777216+(this[n+1]<<16|this[n+2]<<8|this[n+3])},f.prototype.readBigUInt64LE=te(function(n){n=n>>>0,lt(n,"offset");const r=this[n],u=this[n+7];(r===void 0||u===void 0)&&Xe(n,this.length-8);const p=r+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24,C=this[++n]+this[++n]*2**8+this[++n]*2**16+u*2**24;return BigInt(p)+(BigInt(C)<<BigInt(32))}),f.prototype.readBigUInt64BE=te(function(n){n=n>>>0,lt(n,"offset");const r=this[n],u=this[n+7];(r===void 0||u===void 0)&&Xe(n,this.length-8);const p=r*2**24+this[++n]*2**16+this[++n]*2**8+this[++n],C=this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+u;return(BigInt(p)<<BigInt(32))+BigInt(C)}),f.prototype.readIntLE=function(n,r,u){n=n>>>0,r=r>>>0,u||le(n,r,this.length);let p=this[n],C=1,b=0;for(;++b<r&&(C*=256);)p+=this[n+b]*C;return C*=128,p>=C&&(p-=Math.pow(2,8*r)),p},f.prototype.readIntBE=function(n,r,u){n=n>>>0,r=r>>>0,u||le(n,r,this.length);let p=r,C=1,b=this[n+--p];for(;p>0&&(C*=256);)b+=this[n+--p]*C;return C*=128,b>=C&&(b-=Math.pow(2,8*r)),b},f.prototype.readInt8=function(n,r){return n=n>>>0,r||le(n,1,this.length),this[n]&128?(255-this[n]+1)*-1:this[n]},f.prototype.readInt16LE=function(n,r){n=n>>>0,r||le(n,2,this.length);const u=this[n]|this[n+1]<<8;return u&32768?u|4294901760:u},f.prototype.readInt16BE=function(n,r){n=n>>>0,r||le(n,2,this.length);const u=this[n+1]|this[n]<<8;return u&32768?u|4294901760:u},f.prototype.readInt32LE=function(n,r){return n=n>>>0,r||le(n,4,this.length),this[n]|this[n+1]<<8|this[n+2]<<16|this[n+3]<<24},f.prototype.readInt32BE=function(n,r){return n=n>>>0,r||le(n,4,this.length),this[n]<<24|this[n+1]<<16|this[n+2]<<8|this[n+3]},f.prototype.readBigInt64LE=te(function(n){n=n>>>0,lt(n,"offset");const r=this[n],u=this[n+7];(r===void 0||u===void 0)&&Xe(n,this.length-8);const p=this[n+4]+this[n+5]*2**8+this[n+6]*2**16+(u<<24);return(BigInt(p)<<BigInt(32))+BigInt(r+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24)}),f.prototype.readBigInt64BE=te(function(n){n=n>>>0,lt(n,"offset");const r=this[n],u=this[n+7];(r===void 0||u===void 0)&&Xe(n,this.length-8);const p=(r<<24)+this[++n]*2**16+this[++n]*2**8+this[++n];return(BigInt(p)<<BigInt(32))+BigInt(this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+u)}),f.prototype.readFloatLE=function(n,r){return n=n>>>0,r||le(n,4,this.length),t.read(this,n,!0,23,4)},f.prototype.readFloatBE=function(n,r){return n=n>>>0,r||le(n,4,this.length),t.read(this,n,!1,23,4)},f.prototype.readDoubleLE=function(n,r){return n=n>>>0,r||le(n,8,this.length),t.read(this,n,!0,52,8)},f.prototype.readDoubleBE=function(n,r){return n=n>>>0,r||le(n,8,this.length),t.read(this,n,!1,52,8)};function Me(l,n,r,u,p,C){if(!f.isBuffer(l))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>p||n<C)throw new RangeError('"value" argument is out of bounds');if(r+u>l.length)throw new RangeError("Index out of range")}f.prototype.writeUintLE=f.prototype.writeUIntLE=function(n,r,u,p){if(n=+n,r=r>>>0,u=u>>>0,!p){const he=Math.pow(2,8*u)-1;Me(this,n,r,u,he,0)}let C=1,b=0;for(this[r]=n&255;++b<u&&(C*=256);)this[r+b]=n/C&255;return r+u},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(n,r,u,p){if(n=+n,r=r>>>0,u=u>>>0,!p){const he=Math.pow(2,8*u)-1;Me(this,n,r,u,he,0)}let C=u-1,b=1;for(this[r+C]=n&255;--C>=0&&(b*=256);)this[r+C]=n/b&255;return r+u},f.prototype.writeUint8=f.prototype.writeUInt8=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,1,255,0),this[r]=n&255,r+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,2,65535,0),this[r]=n&255,this[r+1]=n>>>8,r+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,2,65535,0),this[r]=n>>>8,this[r+1]=n&255,r+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,4,4294967295,0),this[r+3]=n>>>24,this[r+2]=n>>>16,this[r+1]=n>>>8,this[r]=n&255,r+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,4,4294967295,0),this[r]=n>>>24,this[r+1]=n>>>16,this[r+2]=n>>>8,this[r+3]=n&255,r+4};function pt(l,n,r,u,p){St(n,u,p,l,r,7);let C=Number(n&BigInt(4294967295));l[r++]=C,C=C>>8,l[r++]=C,C=C>>8,l[r++]=C,C=C>>8,l[r++]=C;let b=Number(n>>BigInt(32)&BigInt(4294967295));return l[r++]=b,b=b>>8,l[r++]=b,b=b>>8,l[r++]=b,b=b>>8,l[r++]=b,r}function nt(l,n,r,u,p){St(n,u,p,l,r,7);let C=Number(n&BigInt(4294967295));l[r+7]=C,C=C>>8,l[r+6]=C,C=C>>8,l[r+5]=C,C=C>>8,l[r+4]=C;let b=Number(n>>BigInt(32)&BigInt(4294967295));return l[r+3]=b,b=b>>8,l[r+2]=b,b=b>>8,l[r+1]=b,b=b>>8,l[r]=b,r+8}f.prototype.writeBigUInt64LE=te(function(n,r=0){return pt(this,n,r,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeBigUInt64BE=te(function(n,r=0){return nt(this,n,r,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeIntLE=function(n,r,u,p){if(n=+n,r=r>>>0,!p){const Te=Math.pow(2,8*u-1);Me(this,n,r,u,Te-1,-Te)}let C=0,b=1,he=0;for(this[r]=n&255;++C<u&&(b*=256);)n<0&&he===0&&this[r+C-1]!==0&&(he=1),this[r+C]=(n/b>>0)-he&255;return r+u},f.prototype.writeIntBE=function(n,r,u,p){if(n=+n,r=r>>>0,!p){const Te=Math.pow(2,8*u-1);Me(this,n,r,u,Te-1,-Te)}let C=u-1,b=1,he=0;for(this[r+C]=n&255;--C>=0&&(b*=256);)n<0&&he===0&&this[r+C+1]!==0&&(he=1),this[r+C]=(n/b>>0)-he&255;return r+u},f.prototype.writeInt8=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,1,127,-128),n<0&&(n=255+n+1),this[r]=n&255,r+1},f.prototype.writeInt16LE=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,2,32767,-32768),this[r]=n&255,this[r+1]=n>>>8,r+2},f.prototype.writeInt16BE=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,2,32767,-32768),this[r]=n>>>8,this[r+1]=n&255,r+2},f.prototype.writeInt32LE=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,4,2147483647,-2147483648),this[r]=n&255,this[r+1]=n>>>8,this[r+2]=n>>>16,this[r+3]=n>>>24,r+4},f.prototype.writeInt32BE=function(n,r,u){return n=+n,r=r>>>0,u||Me(this,n,r,4,2147483647,-2147483648),n<0&&(n=4294967295+n+1),this[r]=n>>>24,this[r+1]=n>>>16,this[r+2]=n>>>8,this[r+3]=n&255,r+4},f.prototype.writeBigInt64LE=te(function(n,r=0){return pt(this,n,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),f.prototype.writeBigInt64BE=te(function(n,r=0){return nt(this,n,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ge(l,n,r,u,p,C){if(r+u>l.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function ut(l,n,r,u,p){return n=+n,r=r>>>0,p||Ge(l,n,r,4),t.write(l,n,r,u,23,4),r+4}f.prototype.writeFloatLE=function(n,r,u){return ut(this,n,r,!0,u)},f.prototype.writeFloatBE=function(n,r,u){return ut(this,n,r,!1,u)};function ft(l,n,r,u,p){return n=+n,r=r>>>0,p||Ge(l,n,r,8),t.write(l,n,r,u,52,8),r+8}f.prototype.writeDoubleLE=function(n,r,u){return ft(this,n,r,!0,u)},f.prototype.writeDoubleBE=function(n,r,u){return ft(this,n,r,!1,u)},f.prototype.copy=function(n,r,u,p){if(!f.isBuffer(n))throw new TypeError("argument should be a Buffer");if(u||(u=0),!p&&p!==0&&(p=this.length),r>=n.length&&(r=n.length),r||(r=0),p>0&&p<u&&(p=u),p===u||n.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(u<0||u>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),n.length-r<p-u&&(p=n.length-r+u);const C=p-u;return this===n&&typeof a.prototype.copyWithin=="function"?this.copyWithin(r,u,p):a.prototype.set.call(n,this.subarray(u,p),r),C},f.prototype.fill=function(n,r,u,p){if(typeof n=="string"){if(typeof r=="string"?(p=r,r=0,u=this.length):typeof u=="string"&&(p=u,u=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!f.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(n.length===1){const b=n.charCodeAt(0);(p==="utf8"&&b<128||p==="latin1")&&(n=b)}}else typeof n=="number"?n=n&255:typeof n=="boolean"&&(n=Number(n));if(r<0||this.length<r||this.length<u)throw new RangeError("Out of range index");if(u<=r)return this;r=r>>>0,u=u===void 0?this.length:u>>>0,n||(n=0);let C;if(typeof n=="number")for(C=r;C<u;++C)this[C]=n;else{const b=f.isBuffer(n)?n:f.from(n,p),he=b.length;if(he===0)throw new TypeError('The value "'+n+'" is invalid for argument "value"');for(C=0;C<u-r;++C)this[C+r]=b[C%he]}return this};const et={};function ot(l,n,r){et[l]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:n.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${l}]`,this.stack,delete this.name}get code(){return l}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${l}]: ${this.message}`}}}ot("ERR_BUFFER_OUT_OF_BOUNDS",function(l){return l?`${l} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ot("ERR_INVALID_ARG_TYPE",function(l,n){return`The "${l}" argument must be of type number. Received type ${typeof n}`},TypeError),ot("ERR_OUT_OF_RANGE",function(l,n,r){let u=`The value of "${l}" is out of range.`,p=r;return Number.isInteger(r)&&Math.abs(r)>2**32?p=Qt(String(r)):typeof r=="bigint"&&(p=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(p=Qt(p)),p+="n"),u+=` It must be ${n}. Received ${p}`,u},RangeError);function Qt(l){let n="",r=l.length;const u=l[0]==="-"?1:0;for(;r>=u+4;r-=3)n=`_${l.slice(r-3,r)}${n}`;return`${l.slice(0,r)}${n}`}function Rt(l,n,r){lt(n,"offset"),(l[n]===void 0||l[n+r]===void 0)&&Xe(n,l.length-(r+1))}function St(l,n,r,u,p,C){if(l>r||l<n){const b=typeof n=="bigint"?"n":"";let he;throw n===0||n===BigInt(0)?he=`>= 0${b} and < 2${b} ** ${(C+1)*8}${b}`:he=`>= -(2${b} ** ${(C+1)*8-1}${b}) and < 2 ** ${(C+1)*8-1}${b}`,new et.ERR_OUT_OF_RANGE("value",he,l)}Rt(u,p,C)}function lt(l,n){if(typeof l!="number")throw new et.ERR_INVALID_ARG_TYPE(n,"number",l)}function Xe(l,n,r){throw Math.floor(l)!==l?(lt(l,r),new et.ERR_OUT_OF_RANGE("offset","an integer",l)):n<0?new et.ERR_BUFFER_OUT_OF_BOUNDS:new et.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${n}`,l)}const vt=/[^+/0-9A-Za-z-_]/g;function at(l){if(l=l.split("=")[0],l=l.trim().replace(vt,""),l.length<2)return"";for(;l.length%4!==0;)l=l+"=";return l}function tt(l,n){n=n||1/0;let r;const u=l.length;let p=null;const C=[];for(let b=0;b<u;++b){if(r=l.charCodeAt(b),r>55295&&r<57344){if(!p){if(r>56319){(n-=3)>-1&&C.push(239,191,189);continue}else if(b+1===u){(n-=3)>-1&&C.push(239,191,189);continue}p=r;continue}if(r<56320){(n-=3)>-1&&C.push(239,191,189),p=r;continue}r=(p-55296<<10|r-56320)+65536}else p&&(n-=3)>-1&&C.push(239,191,189);if(p=null,r<128){if((n-=1)<0)break;C.push(r)}else if(r<2048){if((n-=2)<0)break;C.push(r>>6|192,r&63|128)}else if(r<65536){if((n-=3)<0)break;C.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((n-=4)<0)break;C.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return C}function Dt(l){const n=[];for(let r=0;r<l.length;++r)n.push(l.charCodeAt(r)&255);return n}function rt(l,n){let r,u,p;const C=[];for(let b=0;b<l.length&&!((n-=2)<0);++b)r=l.charCodeAt(b),u=r>>8,p=r%256,C.push(p),C.push(u);return C}function v(l){return e.toByteArray(at(l))}function D(l,n,r,u){let p;for(p=0;p<u&&!(p+r>=n.length||p>=l.length);++p)n[p+r]=l[p];return p}function U(l,n){return l instanceof n||l!=null&&l.constructor!=null&&l.constructor.name!=null&&l.constructor.name===n.name}function j(l){return l!==l}const we=function(){const l="0123456789abcdef",n=new Array(256);for(let r=0;r<16;++r){const u=r*16;for(let p=0;p<16;++p)n[u+p]=l[r]+l[p]}return n}();function te(l){return typeof BigInt>"u"?_e:l}function _e(){throw new Error("BigInt not supported")}})(Yn);const xt=Yn.Buffer;var Wt={exports:{}},bn;function wn(){return bn||(bn=1,function(s,e){(function(t,i){i(e)})(Pt,function(t){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=new Uint8Array(64),A=new Uint8Array(128);for(let P=0;P<a.length;P++){const x=a.charCodeAt(P);c[P]=x,A[x]=P}const h=typeof TextDecoder<"u"?new TextDecoder:typeof xt<"u"?{decode(P){return xt.from(P.buffer,P.byteOffset,P.byteLength).toString()}}:{decode(P){let x="";for(let _=0;_<P.length;_++)x+=String.fromCharCode(P[_]);return x}};function w(P){const x=new Int32Array(5),_=[];let O=0;do{const G=f(P,O),ae=[];let W=!0,Z=0;x[0]=0;for(let L=O;L<G;L++){let fe;L=S(P,L,x,0);const Qe=x[0];Qe<Z&&(W=!1),Z=Qe,J(P,L,G)?(L=S(P,L,x,1),L=S(P,L,x,2),L=S(P,L,x,3),J(P,L,G)?(L=S(P,L,x,4),fe=[Qe,x[1],x[2],x[3],x[4]]):fe=[Qe,x[1],x[2],x[3]]):fe=[Qe],ae.push(fe)}W||ie(ae),_.push(ae),O=G+1}while(O<=P.length);return _}function f(P,x){const _=P.indexOf(";",x);return _===-1?P.length:_}function S(P,x,_,O){let G=0,ae=0,W=0;do{const L=P.charCodeAt(x++);W=A[L],G|=(W&31)<<ae,ae+=5}while(W&32);const Z=G&1;return G>>>=1,Z&&(G=-2147483648|-G),_[O]+=G,x}function J(P,x,_){return x>=_?!1:P.charCodeAt(x)!==44}function ie(P){P.sort(z)}function z(P,x){return P[0]-x[0]}function ue(P){const x=new Int32Array(5),_=1024*16,O=_-36,G=new Uint8Array(_),ae=G.subarray(0,O);let W=0,Z="";for(let L=0;L<P.length;L++){const fe=P[L];if(L>0&&(W===_&&(Z+=h.decode(G),W=0),G[W++]=59),fe.length!==0){x[0]=0;for(let Qe=0;Qe<fe.length;Qe++){const Oe=fe[Qe];W>O&&(Z+=h.decode(ae),G.copyWithin(0,O,W),W-=O),Qe>0&&(G[W++]=44),W=Pe(G,W,x,Oe,0),Oe.length!==1&&(W=Pe(G,W,x,Oe,1),W=Pe(G,W,x,Oe,2),W=Pe(G,W,x,Oe,3),Oe.length!==4&&(W=Pe(G,W,x,Oe,4)))}}}return Z+h.decode(G.subarray(0,W))}function Pe(P,x,_,O,G){const ae=O[G];let W=ae-_[G];_[G]=ae,W=W<0?-W<<1|1:W<<1;do{let Z=W&31;W>>>=5,W>0&&(Z|=32),P[x++]=c[Z]}while(W>0);return x}t.decode=w,t.encode=ue,Object.defineProperty(t,"__esModule",{value:!0})})}(Wt,Wt.exports)),Wt.exports}var cn={exports:{}},xn;function kr(){return xn||(xn=1,function(s,e){(function(t,i){s.exports=i()})(Pt,function(){const t=/^[\w+.-]+:\/\//,i=/^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,o=/^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;function a(x){return t.test(x)}function c(x){return x.startsWith("//")}function A(x){return x.startsWith("/")}function h(x){return x.startsWith("file:")}function w(x){return/^[.?#]/.test(x)}function f(x){const _=i.exec(x);return J(_[1],_[2]||"",_[3],_[4]||"",_[5]||"/",_[6]||"",_[7]||"")}function S(x){const _=o.exec(x),O=_[2];return J("file:","",_[1]||"","",A(O)?O:"/"+O,_[3]||"",_[4]||"")}function J(x,_,O,G,ae,W,Z){return{scheme:x,user:_,host:O,port:G,path:ae,query:W,hash:Z,type:7}}function ie(x){if(c(x)){const O=f("http:"+x);return O.scheme="",O.type=6,O}if(A(x)){const O=f("http://foo.com"+x);return O.scheme="",O.host="",O.type=5,O}if(h(x))return S(x);if(a(x))return f(x);const _=f("http://foo.com/"+x);return _.scheme="",_.host="",_.type=x?x.startsWith("?")?3:x.startsWith("#")?2:4:1,_}function z(x){if(x.endsWith("/.."))return x;const _=x.lastIndexOf("/");return x.slice(0,_+1)}function ue(x,_){Pe(_,_.type),x.path==="/"?x.path=_.path:x.path=z(_.path)+x.path}function Pe(x,_){const O=_<=4,G=x.path.split("/");let ae=1,W=0,Z=!1;for(let fe=1;fe<G.length;fe++){const Qe=G[fe];if(!Qe){Z=!0;continue}if(Z=!1,Qe!=="."){if(Qe===".."){W?(Z=!0,W--,ae--):O&&(G[ae++]=Qe);continue}G[ae++]=Qe,W++}}let L="";for(let fe=1;fe<ae;fe++)L+="/"+G[fe];(!L||Z&&!L.endsWith("/.."))&&(L+="/"),x.path=L}function P(x,_){if(!x&&!_)return"";const O=ie(x);let G=O.type;if(_&&G!==7){const W=ie(_),Z=W.type;switch(G){case 1:O.hash=W.hash;case 2:O.query=W.query;case 3:case 4:ue(O,W);case 5:O.user=W.user,O.host=W.host,O.port=W.port;case 6:O.scheme=W.scheme}Z>G&&(G=Z)}Pe(O,G);const ae=O.query+O.hash;switch(G){case 2:case 3:return ae;case 4:{const W=O.path.slice(1);return W?w(_||x)&&!w(W)?"./"+W+ae:W+ae:ae||"."}case 5:return O.path+ae;default:return O.scheme+"//"+O.user+O.host+O.port+O.path+ae}}return P})}(cn)),cn.exports}var kn;function Vn(){return kn||(kn=1,function(s,e){(function(t,i){i(e,wn(),kr())})(Pt,function(t,i,o){function a(v,D){return D&&!D.endsWith("/")&&(D+="/"),o(v,D)}function c(v){if(!v)return"";const D=v.lastIndexOf("/");return v.slice(0,D+1)}const A=0,h=1,w=2,f=3,S=4,J=1,ie=2;function z(v,D){const U=ue(v,0);if(U===v.length)return v;D||(v=v.slice());for(let j=U;j<v.length;j=ue(v,j+1))v[j]=P(v[j],D);return v}function ue(v,D){for(let U=D;U<v.length;U++)if(!Pe(v[U]))return U;return v.length}function Pe(v){for(let D=1;D<v.length;D++)if(v[D][A]<v[D-1][A])return!1;return!0}function P(v,D){return D||(v=v.slice()),v.sort(x)}function x(v,D){return v[A]-D[A]}let _=!1;function O(v,D,U,j){for(;U<=j;){const we=U+(j-U>>1),te=v[we][A]-D;if(te===0)return _=!0,we;te<0?U=we+1:j=we-1}return _=!1,U-1}function G(v,D,U){for(let j=U+1;j<v.length&&v[j][A]===D;U=j++);return U}function ae(v,D,U){for(let j=U-1;j>=0&&v[j][A]===D;U=j--);return U}function W(){return{lastKey:-1,lastNeedle:-1,lastIndex:-1}}function Z(v,D,U,j){const{lastKey:we,lastNeedle:te,lastIndex:_e}=U;let l=0,n=v.length-1;if(j===we){if(D===te)return _=_e!==-1&&v[_e][A]===D,_e;D>=te?l=_e===-1?0:_e:n=_e}return U.lastKey=j,U.lastNeedle=D,U.lastIndex=O(v,D,l,n)}function L(v,D){const U=D.map(Qe);for(let j=0;j<v.length;j++){const we=v[j];for(let te=0;te<we.length;te++){const _e=we[te];if(_e.length===1)continue;const l=_e[h],n=_e[w],r=_e[f],u=U[l],p=u[n]||(u[n]=[]),C=D[l];let b=G(p,r,Z(p,r,C,n));C.lastIndex=++b,fe(p,b,[r,j,_e[A]])}}return U}function fe(v,D,U){for(let j=v.length;j>D;j--)v[j]=v[j-1];v[D]=U}function Qe(){return{__proto__:null}}const Oe=function(v,D){const U=Ae(v);if(!("sections"in U))return new ve(U,D);const j=[],we=[],te=[],_e=[],l=[];Ke(U,D,j,we,te,_e,l,0,0,1/0,1/0);const n={version:3,file:U.file,names:_e,sources:we,sourcesContent:te,mappings:j,ignoreList:l};return Rt(n)};function Ae(v){return typeof v=="string"?JSON.parse(v):v}function Ke(v,D,U,j,we,te,_e,l,n,r,u){const{sections:p}=v;for(let C=0;C<p.length;C++){const{map:b,offset:he}=p[C];let Te=r,Re=u;if(C+1<p.length){const Ne=p[C+1].offset;Te=Math.min(r,l+Ne.line),Te===r?Re=Math.min(u,n+Ne.column):Te<r&&(Re=n+Ne.column)}st(b,D,U,j,we,te,_e,l+he.line,n+he.column,Te,Re)}}function st(v,D,U,j,we,te,_e,l,n,r,u){const p=Ae(v);if("sections"in p)return Ke(...arguments);const C=new ve(p,D),b=j.length,he=te.length,Te=Me(C),{resolvedSources:Re,sourcesContent:Ne,ignoreList:je}=C;if(Ve(j,Re),Ve(te,C.names),Ne)Ve(we,Ne);else for(let it=0;it<Re.length;it++)we.push(null);if(je)for(let it=0;it<je.length;it++)_e.push(je[it]+b);for(let it=0;it<Te.length;it++){const Ot=l+it;if(Ot>r)return;const g=ee(U,Ot),m=it===0?n:0,y=Te[it];for(let M=0;M<y.length;M++){const T=y[M],K=m+T[A];if(Ot===r&&K>=u)return;if(T.length===1){g.push([K]);continue}const N=b+T[h],ne=T[w],R=T[f];g.push(T.length===4?[K,N,ne,R]:[K,N,ne,R,he+T[S]])}}}function Ve(v,D){for(let U=0;U<D.length;U++)v.push(D[U])}function ee(v,D){for(let U=v.length;U<=D;U++)v[U]=[];return v[D]}const V="`line` must be greater than 0 (lines start at line 1)",ce="`column` must be greater than or equal to 0 (columns start at column 0)",pe=-1,ke=1;class ve{constructor(D,U){const j=typeof D=="string";if(!j&&D._decodedMemo)return D;const we=j?JSON.parse(D):D,{version:te,file:_e,names:l,sourceRoot:n,sources:r,sourcesContent:u}=we;this.version=te,this.file=_e,this.names=l||[],this.sourceRoot=n,this.sources=r,this.sourcesContent=u,this.ignoreList=we.ignoreList||we.x_google_ignoreList||void 0;const p=a(n||"",c(U));this.resolvedSources=r.map(b=>a(b||"",p));const{mappings:C}=we;typeof C=="string"?(this._encoded=C,this._decoded=void 0):(this._encoded=void 0,this._decoded=z(C,j)),this._decodedMemo=W(),this._bySources=void 0,this._bySourceMemos=void 0}}function E(v){return v}function le(v){var D,U;return(D=(U=v)._encoded)!==null&&D!==void 0?D:U._encoded=i.encode(v._decoded)}function Me(v){var D;return(D=v)._decoded||(D._decoded=i.decode(v._encoded))}function pt(v,D,U){const j=Me(v);if(D>=j.length)return null;const we=j[D],te=tt(we,v._decodedMemo,D,U,ke);return te===-1?null:we[te]}function nt(v,D){let{line:U,column:j,bias:we}=D;if(U--,U<0)throw new Error(V);if(j<0)throw new Error(ce);const te=Me(v);if(U>=te.length)return vt(null,null,null,null);const _e=te[U],l=tt(_e,v._decodedMemo,U,j,we||ke);if(l===-1)return vt(null,null,null,null);const n=_e[l];if(n.length===1)return vt(null,null,null,null);const{names:r,resolvedSources:u}=v;return vt(u[n[h]],n[w]+1,n[f],n.length===5?r[n[S]]:null)}function Ge(v,D){const{source:U,line:j,column:we,bias:te}=D;return rt(v,U,j,we,te||ke,!1)}function ut(v,D){const{source:U,line:j,column:we,bias:te}=D;return rt(v,U,j,we,te||pe,!0)}function ft(v,D){const U=Me(v),{names:j,resolvedSources:we}=v;for(let te=0;te<U.length;te++){const _e=U[te];for(let l=0;l<_e.length;l++){const n=_e[l],r=te+1,u=n[0];let p=null,C=null,b=null,he=null;n.length!==1&&(p=we[n[1]],C=n[2]+1,b=n[3]),n.length===5&&(he=j[n[4]]),D({generatedLine:r,generatedColumn:u,source:p,originalLine:C,originalColumn:b,name:he})}}}function et(v,D){const{sources:U,resolvedSources:j}=v;let we=U.indexOf(D);return we===-1&&(we=j.indexOf(D)),we}function ot(v,D){const{sourcesContent:U}=v;if(U==null)return null;const j=et(v,D);return j===-1?null:U[j]}function Qt(v,D){const{ignoreList:U}=v;if(U==null)return!1;const j=et(v,D);return j===-1?!1:U.includes(j)}function Rt(v,D){const U=new ve(Xe(v,[]),D);return U._decoded=v.mappings,U}function St(v){return Xe(v,Me(v))}function lt(v){return Xe(v,le(v))}function Xe(v,D){return{version:v.version,file:v.file,names:v.names,sourceRoot:v.sourceRoot,sources:v.sources,sourcesContent:v.sourcesContent,mappings:D,ignoreList:v.ignoreList||v.x_google_ignoreList}}function vt(v,D,U,j){return{source:v,line:D,column:U,name:j}}function at(v,D){return{line:v,column:D}}function tt(v,D,U,j,we){let te=Z(v,j,D,U);return _?te=(we===pe?G:ae)(v,j,te):we===pe&&te++,te===-1||te===v.length?-1:te}function Dt(v,D,U,j,we){let te=tt(v,D,U,j,ke);if(!_&&we===pe&&te++,te===-1||te===v.length)return[];const _e=_?j:v[te][A];_||(te=ae(v,_e,te));const l=G(v,_e,te),n=[];for(;te<=l;te++){const r=v[te];n.push(at(r[J]+1,r[ie]))}return n}function rt(v,D,U,j,we,te){var _e;if(U--,U<0)throw new Error(V);if(j<0)throw new Error(ce);const{sources:l,resolvedSources:n}=v;let r=l.indexOf(D);if(r===-1&&(r=n.indexOf(D)),r===-1)return te?[]:at(null,null);const p=((_e=v)._bySources||(_e._bySources=L(Me(v),v._bySourceMemos=l.map(W))))[r][U];if(p==null)return te?[]:at(null,null);const C=v._bySourceMemos[r];if(te)return Dt(p,C,U,j,we);const b=tt(p,C,U,j,we);if(b===-1)return at(null,null);const he=p[b];return at(he[J]+1,he[ie])}t.AnyMap=Oe,t.GREATEST_LOWER_BOUND=ke,t.LEAST_UPPER_BOUND=pe,t.TraceMap=ve,t.allGeneratedPositionsFor=ut,t.decodedMap=St,t.decodedMappings=Me,t.eachMapping=ft,t.encodedMap=lt,t.encodedMappings=le,t.generatedPositionFor=Ge,t.isIgnored=Qt,t.originalPositionFor=nt,t.presortedDecodedMap=Rt,t.sourceContentFor=ot,t.traceSegment=pt})}(Yt,Yt.exports)),Yt.exports}var Vt={exports:{}},zt={exports:{}},Sn;function Sr(){return Sn||(Sn=1,function(s,e){(function(t,i){i(e)})(Pt,function(t){class i{constructor(){this._indexes={__proto__:null},this.array=[]}}function o(w){return w}function a(w,f){return w._indexes[f]}function c(w,f){const S=a(w,f);if(S!==void 0)return S;const{array:J,_indexes:ie}=w,z=J.push(f);return ie[f]=z-1}function A(w){const{array:f,_indexes:S}=w;if(f.length===0)return;const J=f.pop();S[J]=void 0}function h(w,f){const S=a(w,f);if(S===void 0)return;const{array:J,_indexes:ie}=w;for(let z=S+1;z<J.length;z++){const ue=J[z];J[z-1]=ue,ie[ue]--}ie[f]=void 0,J.pop()}t.SetArray=i,t.get=a,t.pop=A,t.put=c,t.remove=h,Object.defineProperty(t,"__esModule",{value:!0})})}(zt,zt.exports)),zt.exports}var _n;function _r(){return _n||(_n=1,function(s,e){(function(t,i){i(e,Sr(),wn(),Vn())})(Pt,function(t,i,o,a){class J{constructor({file:V,sourceRoot:ce}={}){this._names=new i.SetArray,this._sources=new i.SetArray,this._sourcesContent=[],this._mappings=[],this.file=V,this.sourceRoot=ce,this._ignoreList=new i.SetArray}}function ie(ee){return ee}function z(ee,V,ce,pe,ke,ve,E,le){return Z(!1,ee,V,ce,pe,ke,ve,E,le)}function ue(ee,V){return Ve(!1,ee,V)}const Pe=(ee,V,ce,pe,ke,ve,E,le)=>Z(!0,ee,V,ce,pe,ke,ve,E,le),P=(ee,V)=>Ve(!0,ee,V);function x(ee,V,ce){const{_sources:pe,_sourcesContent:ke}=ee,ve=i.put(pe,V);ke[ve]=ce}function _(ee,V,ce=!0){const{_sources:pe,_sourcesContent:ke,_ignoreList:ve}=ee,E=i.put(pe,V);E===ke.length&&(ke[E]=null),ce?i.put(ve,E):i.remove(ve,E)}function O(ee){const{_mappings:V,_sources:ce,_sourcesContent:pe,_names:ke,_ignoreList:ve}=ee;return Oe(V),{version:3,file:ee.file||void 0,names:ke.array,sourceRoot:ee.sourceRoot||void 0,sources:ce.array,sourcesContent:pe,mappings:V,ignoreList:ve.array}}function G(ee){const V=O(ee);return Object.assign(Object.assign({},V),{mappings:o.encode(V.mappings)})}function ae(ee){const V=new a.TraceMap(ee),ce=new J({file:V.file,sourceRoot:V.sourceRoot});return Ae(ce._names,V.names),Ae(ce._sources,V.sources),ce._sourcesContent=V.sourcesContent||V.sources.map(()=>null),ce._mappings=a.decodedMappings(V),V.ignoreList&&Ae(ce._ignoreList,V.ignoreList),ce}function W(ee){const V=[],{_mappings:ce,_sources:pe,_names:ke}=ee;for(let ve=0;ve<ce.length;ve++){const E=ce[ve];for(let le=0;le<E.length;le++){const Me=E[le],pt={line:ve+1,column:Me[0]};let nt,Ge,ut;Me.length!==1&&(nt=pe.array[Me[1]],Ge={line:Me[2]+1,column:Me[3]},Me.length===5&&(ut=ke.array[Me[4]])),V.push({generated:pt,source:nt,original:Ge,name:ut})}}return V}function Z(ee,V,ce,pe,ke,ve,E,le,Me){const{_mappings:pt,_sources:nt,_sourcesContent:Ge,_names:ut}=V,ft=L(pt,ce),et=fe(ft,pe);if(!ke)return ee&&Ke(ft,et)?void 0:Qe(ft,et,[pe]);const ot=i.put(nt,ke),Qt=le?i.put(ut,le):-1;if(ot===Ge.length&&(Ge[ot]=Me??null),!(ee&&st(ft,et,ot,ve,E,Qt)))return Qe(ft,et,le?[pe,ot,ve,E,Qt]:[pe,ot,ve,E])}function L(ee,V){for(let ce=ee.length;ce<=V;ce++)ee[ce]=[];return ee[V]}function fe(ee,V){let ce=ee.length;for(let pe=ce-1;pe>=0;ce=pe--){const ke=ee[pe];if(V>=ke[0])break}return ce}function Qe(ee,V,ce){for(let pe=ee.length;pe>V;pe--)ee[pe]=ee[pe-1];ee[V]=ce}function Oe(ee){const{length:V}=ee;let ce=V;for(let pe=ce-1;pe>=0&&!(ee[pe].length>0);ce=pe,pe--);ce<V&&(ee.length=ce)}function Ae(ee,V){for(let ce=0;ce<V.length;ce++)i.put(ee,V[ce])}function Ke(ee,V){return V===0?!0:ee[V-1].length===1}function st(ee,V,ce,pe,ke,ve){if(V===0)return!1;const E=ee[V-1];return E.length===1?!1:ce===E[1]&&pe===E[2]&&ke===E[3]&&ve===(E.length===5?E[4]:-1)}function Ve(ee,V,ce){const{generated:pe,source:ke,original:ve,name:E,content:le}=ce;return ke?Z(ee,V,pe.line-1,pe.column,ke,ve.line-1,ve.column,E,le):Z(ee,V,pe.line-1,pe.column,null,null,null,null,null)}t.GenMapping=J,t.addMapping=ue,t.addSegment=z,t.allMappings=W,t.fromMap=ae,t.maybeAddMapping=P,t.maybeAddSegment=Pe,t.setIgnore=_,t.setSourceContent=x,t.toDecodedMap=O,t.toEncodedMap=G,Object.defineProperty(t,"__esModule",{value:!0})})}(Vt,Vt.exports)),Vt.exports}(function(s,e){(function(t,i){s.exports=i(Vn(),_r())})(Pt,function(t,i){const o=c("",-1,-1,"",null,!1),a=[];function c(P,x,_,O,G,ae){return{source:P,line:x,column:_,name:O,content:G,ignore:ae}}function A(P,x,_,O,G){return{map:P,sources:x,source:_,content:O,ignore:G}}function h(P,x){return A(P,x,"",null,!1)}function w(P,x,_){return A(null,a,P,x,_)}function f(P){const x=new i.GenMapping({file:P.map.file}),{sources:_,map:O}=P,G=O.names,ae=t.decodedMappings(O);for(let W=0;W<ae.length;W++){const Z=ae[W];for(let L=0;L<Z.length;L++){const fe=Z[L],Qe=fe[0];let Oe=o;if(fe.length!==1){const ce=_[fe[1]];if(Oe=S(ce,fe[2],fe[3],fe.length===5?G[fe[4]]:""),Oe==null)continue}const{column:Ae,line:Ke,name:st,content:Ve,source:ee,ignore:V}=Oe;i.maybeAddSegment(x,W,Qe,ee,Ke,Ae,st),ee&&Ve!=null&&i.setSourceContent(x,ee,Ve),V&&i.setIgnore(x,ee,!0)}}return x}function S(P,x,_,O){if(!P.map)return c(P.source,x,_,O,P.content,P.ignore);const G=t.traceSegment(P.map,x,_);return G==null?null:G.length===1?o:S(P.sources[G[1]],G[2],G[3],G.length===5?P.map.names[G[4]]:O)}function J(P){return Array.isArray(P)?P:[P]}function ie(P,x){const _=J(P).map(ae=>new t.TraceMap(ae,"")),O=_.pop();for(let ae=0;ae<_.length;ae++)if(_[ae].sources.length>1)throw new Error(`Transformation map ${ae} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);let G=z(O,x,"",0);for(let ae=_.length-1;ae>=0;ae--)G=h(_[ae],[G]);return G}function z(P,x,_,O){const{resolvedSources:G,sourcesContent:ae,ignoreList:W}=P,Z=O+1,L=G.map((fe,Qe)=>{const Oe={importer:_,depth:Z,source:fe||"",content:void 0,ignore:void 0},Ae=x(Oe.source,Oe),{source:Ke,content:st,ignore:Ve}=Oe;if(Ae)return z(new t.TraceMap(Ae,Ke),x,Ke,Z);const ee=st!==void 0?st:ae?ae[Qe]:null,V=Ve!==void 0?Ve:W?W.includes(Qe):!1;return w(Ke,ee,V)});return h(P,L)}class ue{constructor(x,_){const O=_.decodedMappings?i.toDecodedMap(x):i.toEncodedMap(x);this.version=O.version,this.file=O.file,this.mappings=O.mappings,this.names=O.names,this.ignoreList=O.ignoreList,this.sourceRoot=O.sourceRoot,this.sources=O.sources,_.excludeContent||(this.sourcesContent=O.sourcesContent)}toString(){return JSON.stringify(this)}}function Pe(P,x,_){const O=typeof _=="object"?_:{excludeContent:!!_,decodedMappings:!1},G=ie(P,x);return new ue(f(G),O)}return Pe})})(qn);var Mr=qn.exports,Mn=Er(Mr);function Rr(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zn={exports:{}},We=zn.exports={},Et,yt;function dn(){throw new Error("setTimeout has not been defined")}function An(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Et=setTimeout:Et=dn}catch{Et=dn}try{typeof clearTimeout=="function"?yt=clearTimeout:yt=An}catch{yt=An}})();function Xn(s){if(Et===setTimeout)return setTimeout(s,0);if((Et===dn||!Et)&&setTimeout)return Et=setTimeout,setTimeout(s,0);try{return Et(s,0)}catch{try{return Et.call(null,s,0)}catch{return Et.call(this,s,0)}}}function Dr(s){if(yt===clearTimeout)return clearTimeout(s);if((yt===An||!yt)&&clearTimeout)return yt=clearTimeout,clearTimeout(s);try{return yt(s)}catch{try{return yt.call(null,s)}catch{return yt.call(this,s)}}}var It=[],Nt=!1,Mt,Xt=-1;function Ur(){!Nt||!Mt||(Nt=!1,Mt.length?It=Mt.concat(It):Xt=-1,It.length&&Zn())}function Zn(){if(!Nt){var s=Xn(Ur);Nt=!0;for(var e=It.length;e;){for(Mt=It,It=[];++Xt<e;)Mt&&Mt[Xt].run();Xt=-1,e=It.length}Mt=null,Nt=!1,Dr(s)}}We.nextTick=function(s){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];It.push(new er(s,e)),It.length===1&&!Nt&&Xn(Zn)};function er(s,e){this.fun=s,this.array=e}er.prototype.run=function(){this.fun.apply(null,this.array)};We.title="browser";We.browser=!0;We.env={};We.argv=[];We.version="";We.versions={};function kt(){}We.on=kt;We.addListener=kt;We.once=kt;We.off=kt;We.removeListener=kt;We.removeAllListeners=kt;We.emit=kt;We.prependListener=kt;We.prependOnceListener=kt;We.listeners=function(s){return[]};We.binding=function(s){throw new Error("process.binding is not supported")};We.cwd=function(){return"/"};We.chdir=function(s){throw new Error("process.chdir is not supported")};We.umask=function(){return 0};var Lr=zn.exports;const Tr=Rr(Lr);function wt(s){if(typeof s!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(s))}function Rn(s,e){for(var t="",i=0,o=-1,a=0,c,A=0;A<=s.length;++A){if(A<s.length)c=s.charCodeAt(A);else{if(c===47)break;c=47}if(c===47){if(!(o===A-1||a===1))if(o!==A-1&&a===2){if(t.length<2||i!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var h=t.lastIndexOf("/");if(h!==t.length-1){h===-1?(t="",i=0):(t=t.slice(0,h),i=t.length-1-t.lastIndexOf("/")),o=A,a=0;continue}}else if(t.length===2||t.length===1){t="",i=0,o=A,a=0;continue}}e&&(t.length>0?t+="/..":t="..",i=2)}else t.length>0?t+="/"+s.slice(o+1,A):t=s.slice(o+1,A),i=A-o-1;o=A,a=0}else c===46&&a!==-1?++a:a=-1}return t}function Nr(s,e){var t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+i:t+s+i:i}var Ft={resolve:function(){for(var e="",t=!1,i,o=arguments.length-1;o>=-1&&!t;o--){var a;o>=0?a=arguments[o]:(i===void 0&&(i=Tr.cwd()),a=i),wt(a),a.length!==0&&(e=a+"/"+e,t=a.charCodeAt(0)===47)}return e=Rn(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(wt(e),e.length===0)return".";var t=e.charCodeAt(0)===47,i=e.charCodeAt(e.length-1)===47;return e=Rn(e,!t),e.length===0&&!t&&(e="."),e.length>0&&i&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return wt(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var i=arguments[t];wt(i),i.length>0&&(e===void 0?e=i:e+="/"+i)}return e===void 0?".":Ft.normalize(e)},relative:function(e,t){if(wt(e),wt(t),e===t||(e=Ft.resolve(e),t=Ft.resolve(t),e===t))return"";for(var i=1;i<e.length&&e.charCodeAt(i)===47;++i);for(var o=e.length,a=o-i,c=1;c<t.length&&t.charCodeAt(c)===47;++c);for(var A=t.length,h=A-c,w=a<h?a:h,f=-1,S=0;S<=w;++S){if(S===w){if(h>w){if(t.charCodeAt(c+S)===47)return t.slice(c+S+1);if(S===0)return t.slice(c+S)}else a>w&&(e.charCodeAt(i+S)===47?f=S:S===0&&(f=0));break}var J=e.charCodeAt(i+S),ie=t.charCodeAt(c+S);if(J!==ie)break;J===47&&(f=S)}var z="";for(S=i+f+1;S<=o;++S)(S===o||e.charCodeAt(S)===47)&&(z.length===0?z+="..":z+="/..");return z.length>0?z+t.slice(c+f):(c+=f,t.charCodeAt(c)===47&&++c,t.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(wt(e),e.length===0)return".";for(var t=e.charCodeAt(0),i=t===47,o=-1,a=!0,c=e.length-1;c>=1;--c)if(t=e.charCodeAt(c),t===47){if(!a){o=c;break}}else a=!1;return o===-1?i?"/":".":i&&o===1?"//":e.slice(0,o)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');wt(e);var i=0,o=-1,a=!0,c;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var A=t.length-1,h=-1;for(c=e.length-1;c>=0;--c){var w=e.charCodeAt(c);if(w===47){if(!a){i=c+1;break}}else h===-1&&(a=!1,h=c+1),A>=0&&(w===t.charCodeAt(A)?--A===-1&&(o=c):(A=-1,o=h))}return i===o?o=h:o===-1&&(o=e.length),e.slice(i,o)}else{for(c=e.length-1;c>=0;--c)if(e.charCodeAt(c)===47){if(!a){i=c+1;break}}else o===-1&&(a=!1,o=c+1);return o===-1?"":e.slice(i,o)}},extname:function(e){wt(e);for(var t=-1,i=0,o=-1,a=!0,c=0,A=e.length-1;A>=0;--A){var h=e.charCodeAt(A);if(h===47){if(!a){i=A+1;break}continue}o===-1&&(a=!1,o=A+1),h===46?t===-1?t=A:c!==1&&(c=1):t!==-1&&(c=-1)}return t===-1||o===-1||c===0||c===1&&t===o-1&&t===i+1?"":e.slice(t,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Nr("/",e)},parse:function(e){wt(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var i=e.charCodeAt(0),o=i===47,a;o?(t.root="/",a=1):a=0;for(var c=-1,A=0,h=-1,w=!0,f=e.length-1,S=0;f>=a;--f){if(i=e.charCodeAt(f),i===47){if(!w){A=f+1;break}continue}h===-1&&(w=!1,h=f+1),i===46?c===-1?c=f:S!==1&&(S=1):c!==-1&&(S=-1)}return c===-1||h===-1||S===0||S===1&&c===h-1&&c===A+1?h!==-1&&(A===0&&o?t.base=t.name=e.slice(1,h):t.base=t.name=e.slice(A,h)):(A===0&&o?(t.name=e.slice(1,c),t.base=e.slice(1,h)):(t.name=e.slice(A,c),t.base=e.slice(A,h)),t.ext=e.slice(c,h)),A>0?t.dir=e.slice(0,A-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};Ft.posix=Ft;var Ze=Ft;const tr=/[?&]$/,Fr=/(\?|&)import=?(?:&|$)/,Pr=/(\?|&)url(?:&|$)/;function Or(s){return s.charCodeAt(0)===65279?s.slice(1):s}function Kr(s,e){if(s===e)return"/";const t=jr(e);return s.startsWith(t)?s.slice(t.length-1):s}function jr(s){return s[s.length-1]!=="/"?`${s}/`:s}function Dn(s,e){return!s||!e?s||e||"":(s[s.length-1]==="/"&&(s=s.substring(0,s.length-1)),e[0]!=="/"&&(e="/"+e),s+e)}function $r(s){return s[0]==="/"?s.slice(1):s}function Jr(s){return Ze.posix.normalize(s)}const Gr=/\bt=\d{13}&?\b/;function bt(s){return s.replace(Gr,"").replace(tr,"")}function Zt(s){return s.replace(Fr,"$1").replace(tr,"")}const Hr=/%/g;function qr(s,e){const t=new URL(s.replace(Hr,"%25"),"file:///"),{search:i,hash:o}=t;return`${Bt(s)}?${e}${i?"&"+i.slice(1):""}${o??""}`}function Yr(s){return s!=null}const Wr=/^(https?:)?\/\//,Vr=s=>Wr.test(s),zr=/^\s*data:/i,Xr=s=>zr.test(s),Zr=/\.(?:[jt]sx?|m[jt]s|vue|marko|svelte|astro|imba|mdx)(?:$|\?)/,En=s=>(s=Bt(s),!!(Zr.test(s)||!Ze.extname(s)&&s[s.length-1]!=="/"));function Ht(s){return Object.prototype.toString.call(s)==="[object Object]"}const ei=/^[A-Z]:/,ti=/^([A-Z]):\//,ni=/^\/[^/]/;function un(s){return ei.test(s)?s.replace(ti,"/windows/$1/"):ni.test(s)?`/linux${s}`:s}const ri=/^\/windows\/([A-Z])\//;function ii(s){return s.startsWith("/linux/")?s.slice(6):s.startsWith("/windows/")?s.replace(ri,"$1:/"):s}const si={names:[],sources:[],mappings:"",version:3};function nr(s,e){if(e.length===0||e.every(c=>c.sources.length===0))return{...si};e=e.map(c=>{const A={...c};return A.sources=c.sources.map(h=>h?un(h):null),c.sourceRoot&&(A.sourceRoot=un(c.sourceRoot)),A});const t=un(s);let i,o=1;return e.slice(0,-1).find(c=>c.sources.length!==1)===void 0?i=Mn(e,()=>null):i=Mn(e[0],function(A){return A===t&&e[o]?e[o++]:null}),i.file||delete i.file,i.sources=i.sources.map(c=>c&&ii(c)),i.file=s,i}const rr=/\r?\n/g,Un=2;function Ln(s,e){if(typeof e=="number")return e;const t=s.split(rr),{line:i,column:o}=e;let a=0;for(let c=0;c<i-1&&c<t.length;c++)a+=t[c].length+1;return a+o}function oi(s,e=0,t){e=Math.max(Ln(s,e),0),t=Math.min(t!==void 0?Ln(s,t):e,s.length);const i=s.split(rr);let o=0;const a=[];for(let c=0;c<i.length;c++){if(o+=i[c].length,o>=e){for(let A=c-Un;A<=c+Un||t>o;A++){if(A<0||A>=i.length)continue;const h=A+1;a.push(`${h}${" ".repeat(Math.max(3-String(h).length,0))}|  ${i[A]}`);const w=i[A].length;if(A===c){const f=Math.max(e-(o-w),0),S=Math.max(1,t>o?w-f:t-e);a.push("   |  "+" ".repeat(f)+"^".repeat(S))}else if(A>c){if(t>o){const f=Math.max(Math.min(t-o,w),1);a.push("   |  "+"^".repeat(f))}o+=w+1}}break}o++}return a.join(`
`)}const ir="/@fs/",sn=/\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/,on=/[?&](?:worker|sharedworker|raw|url)\b/,li="/@hmr/client";async function ai(s,e){return ci(s,e)}function ci(s,e){let t;s.startsWith(Hn(e.root))?t="/"+Ze.posix.relative(e.root,s):t=Ze.join(ir,s);const i=Dn(e.origin??"",e.base);return Dn(i,$r(t))}const ui=new RegExp(`\\.module${sn.source}`),fi=/[?&]direct\b/,yn=/\?commonjs-proxy/,gt=s=>sn.test(s),hi=s=>ui.test(s),Cn=s=>sn.test(s)&&fi.test(s),Bn=new WeakMap;function di(s){let e;return{name:"dev:css",buildStart(){e=new Map,Bn.set(s,e)},buildEnd(){},async load(t){if(gt(t)&&Pr.test(t)&&hi(t))throw new Error(`?url is not supported with CSS modules. (tried to import ${JSON.stringify(t)})`)},async transform(t,i){if(!gt(i)||yn.test(i)||on.test(i))return;const{code:o,modules:a,deps:c,map:A}=await pi(i,t);return a&&e.set(i,a),{code:o,map:A}}}}function Ai(s){return{name:"dev:css-post",async transform(e,t,i){if(!gt(t)||yn.test(t)||on.test(t))return;e=Or(e);const a=Bn.get(s).get(t),c=async w=>w;if(Cn(t))return null;const A=await c(e);return{code:[`import { updateStyle as __hmr__updateStyle, removeStyle as __hmr__removeStyle } from ${JSON.stringify(li)}`,`const __hmr__id = ${JSON.stringify(t)}`,`const __hmr__css = ${JSON.stringify(A)}`,"__hmr__updateStyle(__hmr__id, __hmr__css)",`${a||"import.meta.hot.accept()"}`,"import.meta.hot.prune(() => __hmr__removeStyle(__hmr__id))"].join(`
`),map:{mappings:""}}}}}function gi(s){let e;return{name:"dev:css-analysis",configureServer(t){e=t},async transform(t,i,o){if(!gt(i)||yn.test(i)||on.test(i))return;const{moduleGraph:a}=e,c=a.getModuleById(i);if(c){const A=!Bn.get(s)?.get(i),h=this._addedImports;if(h){const w=new Set,f=s.base;for(const S of h)w.add(gt(S)?a.createFileOnlyEntry(S):await a.ensureEntryFromUrl(Kr(await ai(S,s),(s.origin??"")+f),!1));a.updateModuleInfo(c,w,null,new Set,null,A,!1)}else c.isSelfAccepting=A}}}}async function pi(s,e){const t=e.includes("@import");return s.match(sn)?.[1]==="css"&&!t?{code:e,map:null}:{code:e,map:null}}var Tn;(function(s){s[s.Static=1]="Static",s[s.Dynamic=2]="Dynamic",s[s.ImportMeta=3]="ImportMeta",s[s.StaticSourcePhase=4]="StaticSourcePhase",s[s.DynamicSourcePhase=5]="DynamicSourcePhase"})(Tn||(Tn={}));const mi=new Uint8Array(new Uint16Array([1]).buffer)[0]===1;function Qn(s,e="@"){if(!He)return vn.then(()=>Qn(s));const t=s.length+1,i=(He.__heap_base.value||He.__heap_base)+4*t-He.memory.buffer.byteLength;i>0&&He.memory.grow(Math.ceil(i/65536));const o=He.sa(t-1);if((mi?Ei:wi)(s,new Uint16Array(He.memory.buffer,o,t)),!He.parse())throw Object.assign(new Error(`Parse error ${e}:${s.slice(0,He.e()).split(`
`).length}:${He.e()-s.lastIndexOf(`
`,He.e()-1)}`),{idx:He.e()});const a=[],c=[];for(;He.ri();){const h=He.is(),w=He.ie(),f=He.it(),S=He.ai(),J=He.id(),ie=He.ss(),z=He.se();let ue;He.ip()&&(ue=A(s.slice(J===-1?h-1:h,J===-1?w+1:w))),a.push({n:ue,t:f,s:h,e:w,ss:ie,se:z,d:J,a:S})}for(;He.re();){const h=He.es(),w=He.ee(),f=He.els(),S=He.ele(),J=s.slice(h,w),ie=J[0],z=f<0?void 0:s.slice(f,S),ue=z?z[0]:"";c.push({s:h,e:w,ls:f,le:S,n:ie==='"'||ie==="'"?A(J):J,ln:ue==='"'||ue==="'"?A(z):z})}function A(h){try{return(0,eval)(h)}catch{}}return[a,c,!!He.f(),!!He.ms()]}function wi(s,e){const t=s.length;let i=0;for(;i<t;){const o=s.charCodeAt(i);e[i++]=(255&o)<<8|o>>>8}}function Ei(s,e){const t=s.length;let i=0;for(;i<t;)e[i]=s.charCodeAt(i++)}let He;const vn=WebAssembly.compile((fn="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",typeof xt<"u"?xt.from(fn,"base64"):Uint8Array.from(atob(fn),s=>s.charCodeAt(0)))).then(WebAssembly.instantiate).then(({exports:s})=>{He=s});var fn,yi=wn();class nn{constructor(e){this.bits=e instanceof nn?e.bits.slice():[]}add(e){this.bits[e>>5]|=1<<(e&31)}has(e){return!!(this.bits[e>>5]&1<<(e&31))}}class qt{constructor(e,t,i){this.start=e,this.end=t,this.original=i,this.intro="",this.outro="",this.content=i,this.storeName=!1,this.edited=!1,this.previous=null,this.next=null}appendLeft(e){this.outro+=e}appendRight(e){this.intro=this.intro+e}clone(){const e=new qt(this.start,this.end,this.original);return e.intro=this.intro,e.outro=this.outro,e.content=this.content,e.storeName=this.storeName,e.edited=this.edited,e}contains(e){return this.start<e&&e<this.end}eachNext(e){let t=this;for(;t;)e(t),t=t.next}eachPrevious(e){let t=this;for(;t;)e(t),t=t.previous}edit(e,t,i){return this.content=e,i||(this.intro="",this.outro=""),this.storeName=t,this.edited=!0,this}prependLeft(e){this.outro=e+this.outro}prependRight(e){this.intro=e+this.intro}reset(){this.intro="",this.outro="",this.edited&&(this.content=this.original,this.storeName=!1,this.edited=!1)}split(e){const t=e-this.start,i=this.original.slice(0,t),o=this.original.slice(t);this.original=i;const a=new qt(e,this.end,o);return a.outro=this.outro,this.outro="",this.end=e,this.edited?(a.edit("",!1),this.content=""):this.content=i,a.next=this.next,a.next&&(a.next.previous=a),a.previous=this,this.next=a,a}toString(){return this.intro+this.content+this.outro}trimEnd(e){if(this.outro=this.outro.replace(e,""),this.outro.length)return!0;const t=this.content.replace(e,"");if(t.length)return t!==this.content&&(this.split(this.start+t.length).edit("",void 0,!0),this.edited&&this.edit(t,this.storeName,!0)),!0;if(this.edit("",void 0,!0),this.intro=this.intro.replace(e,""),this.intro.length)return!0}trimStart(e){if(this.intro=this.intro.replace(e,""),this.intro.length)return!0;const t=this.content.replace(e,"");if(t.length){if(t!==this.content){const i=this.split(this.end-t.length);this.edited&&i.edit(t,this.storeName,!0),this.edit("",void 0,!0)}return!0}else if(this.edit("",void 0,!0),this.outro=this.outro.replace(e,""),this.outro.length)return!0}}function Ci(){return typeof globalThis<"u"&&typeof globalThis.btoa=="function"?s=>globalThis.btoa(unescape(encodeURIComponent(s))):typeof xt=="function"?s=>xt.from(s,"utf-8").toString("base64"):()=>{throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.")}}const Bi=Ci();class Qi{constructor(e){this.version=3,this.file=e.file,this.sources=e.sources,this.sourcesContent=e.sourcesContent,this.names=e.names,this.mappings=yi.encode(e.mappings),typeof e.x_google_ignoreList<"u"&&(this.x_google_ignoreList=e.x_google_ignoreList)}toString(){return JSON.stringify(this)}toUrl(){return"data:application/json;charset=utf-8;base64,"+Bi(this.toString())}}function vi(s){const e=s.split(`
`),t=e.filter(a=>/^\t+/.test(a)),i=e.filter(a=>/^ {2,}/.test(a));if(t.length===0&&i.length===0)return null;if(t.length>=i.length)return"	";const o=i.reduce((a,c)=>{const A=/^ +/.exec(c)[0].length;return Math.min(A,a)},1/0);return new Array(o+1).join(" ")}function Ii(s,e){const t=s.split(/[/\\]/),i=e.split(/[/\\]/);for(t.pop();t[0]===i[0];)t.shift(),i.shift();if(t.length){let o=t.length;for(;o--;)t[o]=".."}return t.concat(i).join("/")}const bi=Object.prototype.toString;function xi(s){return bi.call(s)==="[object Object]"}function Nn(s){const e=s.split(`
`),t=[];for(let i=0,o=0;i<e.length;i++)t.push(o),o+=e[i].length+1;return function(o){let a=0,c=t.length;for(;a<c;){const w=a+c>>1;o<t[w]?c=w:a=w+1}const A=a-1,h=o-t[A];return{line:A,column:h}}}const ki=/\w/;class Si{constructor(e){this.hires=e,this.generatedCodeLine=0,this.generatedCodeColumn=0,this.raw=[],this.rawSegments=this.raw[this.generatedCodeLine]=[],this.pending=null}addEdit(e,t,i,o){if(t.length){const a=t.length-1;let c=t.indexOf(`
`,0),A=-1;for(;c>=0&&a>c;){const w=[this.generatedCodeColumn,e,i.line,i.column];o>=0&&w.push(o),this.rawSegments.push(w),this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0,A=c,c=t.indexOf(`
`,c+1)}const h=[this.generatedCodeColumn,e,i.line,i.column];o>=0&&h.push(o),this.rawSegments.push(h),this.advance(t.slice(A+1))}else this.pending&&(this.rawSegments.push(this.pending),this.advance(t));this.pending=null}addUneditedChunk(e,t,i,o,a){let c=t.start,A=!0,h=!1;for(;c<t.end;){if(this.hires||A||a.has(c)){const w=[this.generatedCodeColumn,e,o.line,o.column];this.hires==="boundary"?ki.test(i[c])?h||(this.rawSegments.push(w),h=!0):(this.rawSegments.push(w),h=!1):this.rawSegments.push(w)}i[c]===`
`?(o.line+=1,o.column=0,this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0,A=!0):(o.column+=1,this.generatedCodeColumn+=1,A=!1),c+=1}this.pending=null}advance(e){if(!e)return;const t=e.split(`
`);if(t.length>1){for(let i=0;i<t.length-1;i++)this.generatedCodeLine++,this.raw[this.generatedCodeLine]=this.rawSegments=[];this.generatedCodeColumn=0}this.generatedCodeColumn+=t[t.length-1].length}}const jt=`
`,Tt={insertLeft:!1,insertRight:!1,storeName:!1};class ln{constructor(e,t={}){const i=new qt(0,e.length,e);Object.defineProperties(this,{original:{writable:!0,value:e},outro:{writable:!0,value:""},intro:{writable:!0,value:""},firstChunk:{writable:!0,value:i},lastChunk:{writable:!0,value:i},lastSearchedChunk:{writable:!0,value:i},byStart:{writable:!0,value:{}},byEnd:{writable:!0,value:{}},filename:{writable:!0,value:t.filename},indentExclusionRanges:{writable:!0,value:t.indentExclusionRanges},sourcemapLocations:{writable:!0,value:new nn},storedNames:{writable:!0,value:{}},indentStr:{writable:!0,value:void 0},ignoreList:{writable:!0,value:t.ignoreList}}),this.byStart[0]=i,this.byEnd[e.length]=i}addSourcemapLocation(e){this.sourcemapLocations.add(e)}append(e){if(typeof e!="string")throw new TypeError("outro content must be a string");return this.outro+=e,this}appendLeft(e,t){if(typeof t!="string")throw new TypeError("inserted content must be a string");this._split(e);const i=this.byEnd[e];return i?i.appendLeft(t):this.intro+=t,this}appendRight(e,t){if(typeof t!="string")throw new TypeError("inserted content must be a string");this._split(e);const i=this.byStart[e];return i?i.appendRight(t):this.outro+=t,this}clone(){const e=new ln(this.original,{filename:this.filename});let t=this.firstChunk,i=e.firstChunk=e.lastSearchedChunk=t.clone();for(;t;){e.byStart[i.start]=i,e.byEnd[i.end]=i;const o=t.next,a=o&&o.clone();a&&(i.next=a,a.previous=i,i=a),t=o}return e.lastChunk=i,this.indentExclusionRanges&&(e.indentExclusionRanges=this.indentExclusionRanges.slice()),e.sourcemapLocations=new nn(this.sourcemapLocations),e.intro=this.intro,e.outro=this.outro,e}generateDecodedMap(e){e=e||{};const t=0,i=Object.keys(this.storedNames),o=new Si(e.hires),a=Nn(this.original);return this.intro&&o.advance(this.intro),this.firstChunk.eachNext(c=>{const A=a(c.start);c.intro.length&&o.advance(c.intro),c.edited?o.addEdit(t,c.content,A,c.storeName?i.indexOf(c.original):-1):o.addUneditedChunk(t,c,this.original,A,this.sourcemapLocations),c.outro.length&&o.advance(c.outro)}),{file:e.file?e.file.split(/[/\\]/).pop():void 0,sources:[e.source?Ii(e.file||"",e.source):e.file||""],sourcesContent:e.includeContent?[this.original]:void 0,names:i,mappings:o.raw,x_google_ignoreList:this.ignoreList?[t]:void 0}}generateMap(e){return new Qi(this.generateDecodedMap(e))}_ensureindentStr(){this.indentStr===void 0&&(this.indentStr=vi(this.original))}_getRawIndentString(){return this._ensureindentStr(),this.indentStr}getIndentString(){return this._ensureindentStr(),this.indentStr===null?"	":this.indentStr}indent(e,t){const i=/^[^\r\n]/gm;if(xi(e)&&(t=e,e=void 0),e===void 0&&(this._ensureindentStr(),e=this.indentStr||"	"),e==="")return this;t=t||{};const o={};t.exclude&&(typeof t.exclude[0]=="number"?[t.exclude]:t.exclude).forEach(f=>{for(let S=f[0];S<f[1];S+=1)o[S]=!0});let a=t.indentStart!==!1;const c=w=>a?`${e}${w}`:(a=!0,w);this.intro=this.intro.replace(i,c);let A=0,h=this.firstChunk;for(;h;){const w=h.end;if(h.edited)o[A]||(h.content=h.content.replace(i,c),h.content.length&&(a=h.content[h.content.length-1]===`
`));else for(A=h.start;A<w;){if(!o[A]){const f=this.original[A];f===`
`?a=!0:f!=="\r"&&a&&(a=!1,A===h.start||(this._splitChunk(h,A),h=h.next),h.prependRight(e))}A+=1}A=h.end,h=h.next}return this.outro=this.outro.replace(i,c),this}insert(){throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)")}insertLeft(e,t){return Tt.insertLeft||(Tt.insertLeft=!0),this.appendLeft(e,t)}insertRight(e,t){return Tt.insertRight||(Tt.insertRight=!0),this.prependRight(e,t)}move(e,t,i){if(i>=e&&i<=t)throw new Error("Cannot move a selection inside itself");this._split(e),this._split(t),this._split(i);const o=this.byStart[e],a=this.byEnd[t],c=o.previous,A=a.next,h=this.byStart[i];if(!h&&a===this.lastChunk)return this;const w=h?h.previous:this.lastChunk;return c&&(c.next=A),A&&(A.previous=c),w&&(w.next=o),h&&(h.previous=a),o.previous||(this.firstChunk=a.next),a.next||(this.lastChunk=o.previous,this.lastChunk.next=null),o.previous=w,a.next=h||null,w||(this.firstChunk=o),h||(this.lastChunk=a),this}overwrite(e,t,i,o){return o=o||{},this.update(e,t,i,{...o,overwrite:!o.contentOnly})}update(e,t,i,o){if(typeof i!="string")throw new TypeError("replacement content must be a string");for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(t>this.original.length)throw new Error("end is out of bounds");if(e===t)throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");this._split(e),this._split(t),o===!0&&(Tt.storeName||(Tt.storeName=!0),o={storeName:!0});const a=o!==void 0?o.storeName:!1,c=o!==void 0?o.overwrite:!1;if(a){const w=this.original.slice(e,t);Object.defineProperty(this.storedNames,w,{writable:!0,value:!0,enumerable:!0})}const A=this.byStart[e],h=this.byEnd[t];if(A){let w=A;for(;w!==h;){if(w.next!==this.byStart[w.end])throw new Error("Cannot overwrite across a split point");w=w.next,w.edit("",!1)}A.edit(i,a,!c)}else{const w=new qt(e,t,"").edit(i,a);h.next=w,w.previous=h}return this}prepend(e){if(typeof e!="string")throw new TypeError("outro content must be a string");return this.intro=e+this.intro,this}prependLeft(e,t){if(typeof t!="string")throw new TypeError("inserted content must be a string");this._split(e);const i=this.byEnd[e];return i?i.prependLeft(t):this.intro=t+this.intro,this}prependRight(e,t){if(typeof t!="string")throw new TypeError("inserted content must be a string");this._split(e);const i=this.byStart[e];return i?i.prependRight(t):this.outro=t+this.outro,this}remove(e,t){for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(e===t)return this;if(e<0||t>this.original.length)throw new Error("Character is out of bounds");if(e>t)throw new Error("end must be greater than start");this._split(e),this._split(t);let i=this.byStart[e];for(;i;)i.intro="",i.outro="",i.edit(""),i=t>i.end?this.byStart[i.end]:null;return this}reset(e,t){for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(e===t)return this;if(e<0||t>this.original.length)throw new Error("Character is out of bounds");if(e>t)throw new Error("end must be greater than start");this._split(e),this._split(t);let i=this.byStart[e];for(;i;)i.reset(),i=t>i.end?this.byStart[i.end]:null;return this}lastChar(){if(this.outro.length)return this.outro[this.outro.length-1];let e=this.lastChunk;do{if(e.outro.length)return e.outro[e.outro.length-1];if(e.content.length)return e.content[e.content.length-1];if(e.intro.length)return e.intro[e.intro.length-1]}while(e=e.previous);return this.intro.length?this.intro[this.intro.length-1]:""}lastLine(){let e=this.outro.lastIndexOf(jt);if(e!==-1)return this.outro.substr(e+1);let t=this.outro,i=this.lastChunk;do{if(i.outro.length>0){if(e=i.outro.lastIndexOf(jt),e!==-1)return i.outro.substr(e+1)+t;t=i.outro+t}if(i.content.length>0){if(e=i.content.lastIndexOf(jt),e!==-1)return i.content.substr(e+1)+t;t=i.content+t}if(i.intro.length>0){if(e=i.intro.lastIndexOf(jt),e!==-1)return i.intro.substr(e+1)+t;t=i.intro+t}}while(i=i.previous);return e=this.intro.lastIndexOf(jt),e!==-1?this.intro.substr(e+1)+t:this.intro+t}slice(e=0,t=this.original.length){for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;let i="",o=this.firstChunk;for(;o&&(o.start>e||o.end<=e);){if(o.start<t&&o.end>=t)return i;o=o.next}if(o&&o.edited&&o.start!==e)throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);const a=o;for(;o;){o.intro&&(a!==o||o.start===e)&&(i+=o.intro);const c=o.start<t&&o.end>=t;if(c&&o.edited&&o.end!==t)throw new Error(`Cannot use replaced character ${t} as slice end anchor.`);const A=a===o?e-o.start:0,h=c?o.content.length+t-o.end:o.content.length;if(i+=o.content.slice(A,h),o.outro&&(!c||o.end===t)&&(i+=o.outro),c)break;o=o.next}return i}snip(e,t){const i=this.clone();return i.remove(0,e),i.remove(t,i.original.length),i}_split(e){if(this.byStart[e]||this.byEnd[e])return;let t=this.lastSearchedChunk;const i=e>t.end;for(;t;){if(t.contains(e))return this._splitChunk(t,e);t=i?this.byStart[t.end]:this.byEnd[t.start]}}_splitChunk(e,t){if(e.edited&&e.content.length){const o=Nn(this.original)(t);throw new Error(`Cannot split a chunk that has already been edited (${o.line}:${o.column} – "${e.original}")`)}const i=e.split(t);return this.byEnd[t]=e,this.byStart[t]=i,this.byEnd[i.end]=i,e===this.lastChunk&&(this.lastChunk=i),this.lastSearchedChunk=e,!0}toString(){let e=this.intro,t=this.firstChunk;for(;t;)e+=t.toString(),t=t.next;return e+this.outro}isEmpty(){let e=this.firstChunk;do if(e.intro.length&&e.intro.trim()||e.content.length&&e.content.trim()||e.outro.length&&e.outro.trim())return!1;while(e=e.next);return!0}length(){let e=this.firstChunk,t=0;do t+=e.intro.length+e.content.length+e.outro.length;while(e=e.next);return t}trimLines(){return this.trim("[\\r\\n]")}trim(e){return this.trimStart(e).trimEnd(e)}trimEndAborted(e){const t=new RegExp((e||"\\s")+"+$");if(this.outro=this.outro.replace(t,""),this.outro.length)return!0;let i=this.lastChunk;do{const o=i.end,a=i.trimEnd(t);if(i.end!==o&&(this.lastChunk===i&&(this.lastChunk=i.next),this.byEnd[i.end]=i,this.byStart[i.next.start]=i.next,this.byEnd[i.next.end]=i.next),a)return!0;i=i.previous}while(i);return!1}trimEnd(e){return this.trimEndAborted(e),this}trimStartAborted(e){const t=new RegExp("^"+(e||"\\s")+"+");if(this.intro=this.intro.replace(t,""),this.intro.length)return!0;let i=this.firstChunk;do{const o=i.end,a=i.trimStart(t);if(i.end!==o&&(i===this.lastChunk&&(this.lastChunk=i.next),this.byEnd[i.end]=i,this.byStart[i.next.start]=i.next,this.byEnd[i.next.end]=i.next),a)return!0;i=i.next}while(i);return!1}trimStart(e){return this.trimStartAborted(e),this}hasChanged(){return this.original!==this.toString()}_replaceRegexp(e,t){function i(a,c){return typeof t=="string"?t.replace(/\$(\$|&|\d+)/g,(A,h)=>h==="$"?"$":h==="&"?a[0]:+h<a.length?a[+h]:`$${h}`):t(...a,a.index,c,a.groups)}function o(a,c){let A;const h=[];for(;A=a.exec(c);)h.push(A);return h}if(e.global)o(e,this.original).forEach(c=>{if(c.index!=null){const A=i(c,this.original);A!==c[0]&&this.overwrite(c.index,c.index+c[0].length,A)}});else{const a=this.original.match(e);if(a&&a.index!=null){const c=i(a,this.original);c!==a[0]&&this.overwrite(a.index,a.index+a[0].length,c)}}return this}_replaceString(e,t){const{original:i}=this,o=i.indexOf(e);return o!==-1&&this.overwrite(o,o+e.length,t),this}replace(e,t){return typeof e=="string"?this._replaceString(e,t):this._replaceRegexp(e,t)}_replaceAllString(e,t){const{original:i}=this,o=e.length;for(let a=i.indexOf(e);a!==-1;a=i.indexOf(e,a+o))i.slice(a,a+o)!==t&&this.overwrite(a,a+o,t);return this}replaceAll(e,t){if(typeof e=="string")return this._replaceAllString(e,t);if(!e.global)throw new TypeError("MagicString.prototype.replaceAll called with a non-global RegExp argument");return this._replaceRegexp(e,t)}}const _i=/\s/;function Mi(s,e){return s.startsWith(Hn(e))?Ze.posix.relative(e,s):s}async function Ri(s,e,t){const{config:i,moduleGraph:o}=t,a=Mi(e,i.root),c=new Set(o.getModulesByFile(e));if(s==="create")for(const w of o._hasResolveFailedErrorModules)c.add(w);const A=Date.now(),h={file:e,timestamp:A,modules:[...c],server:t,read:async()=>{if(t.config.fetchCode){const{source:w}=await t.config.fetchCode(e,"READ_CODE");return w}return""}};if(s==="update")for(const w of i.getSortedPluginHooks("handleHotUpdate")){const f=await w(h);f&&(h.modules=f)}return h.modules.length?Di(a,h.modules,A,t):e.endsWith(".html")?{type:"full-reload",path:Ze.relative(i.root,e)}:void 0}function Di(s,e,t,{config:i,moduleGraph:o}){const a=[],c=new Set,A=new Set;let h=e.length===0;for(const w of e){const f=[],S=gn(w,A,f);if(o.invalidateModule(w,c,t,!0),!h){if(S){h=S;continue}a.push(...f.map(({boundary:J,acceptedVia:ie,isWithinCircularImport:z})=>({type:`${J.type}-update`,timestamp:t,path:pn(J.url),acceptedPath:pn(ie.url),explicitImportRequired:J.type==="js"?Oi(ie.url):!1,isWithinCircularImport:z})))}}if(h)return{type:"full-reload",triggeredBy:Ze.resolve(i.root,s)};if(a.length!==0)return{type:"update",updates:a}}function Ui(s,e){for(const t of s)if(!e.has(t))return!1;return!0}function gn(s,e,t,i=[s]){if(e.has(s)||(e.add(s),s.id&&s.isSelfAccepting===void 0))return!1;if(s.isSelfAccepting){t.push({boundary:s,acceptedVia:s,isWithinCircularImport:en(s,i)});for(const o of s.importers)gt(o.url)&&!i.includes(o)&&gn(o,e,t,i.concat(o));return!1}if(s.acceptedHmrExports)t.push({boundary:s,acceptedVia:s,isWithinCircularImport:en(s,i)});else if(!s.importers.size||!gt(s.url)&&[...s.importers].every(o=>gt(o.url)))return!0;for(const o of s.importers){const a=i.concat(o);if(o.acceptedHmrDeps.has(s)){t.push({boundary:o,acceptedVia:s,isWithinCircularImport:en(o,a)});continue}if(s.id&&s.acceptedHmrExports&&o.importedBindings){const c=o.importedBindings.get(s.id);if(c&&Ui(c,s.acceptedHmrExports))continue}if(!i.includes(o)&&gn(o,e,t,a))return!0}return!1}function en(s,e,t=[s],i=new Set){if(i.has(s))return!1;i.add(s);for(const o of s.importers){if(o===s||gt(o.url))continue;if(e.indexOf(o)>-1)return!0;if(!t.includes(o)){const c=en(o,e,t.concat(o),i);if(c)return c}}return!1}function Li(s){const e=Date.now();s.forEach(t=>{t.lastHMRTimestamp=e,t.lastHMRInvalidationReceived=!1})}function sr(s,e,t){let i=0,o=0,a="";function c(A){t.add({url:a,start:A-a.length-1,end:A+1}),a=""}for(let A=e;A<s.length;A++){const h=s.charAt(A);switch(i){case 0:case 4:if(h==="'")o=i,i=1;else if(h==='"')o=i,i=2;else if(h==="`")o=i,i=3;else{if(_i.test(h))continue;if(i===0)if(h==="[")i=4;else return!0;else if(i===4){if(h==="]")return!1;if(h===",")continue;Fn()}}break;case 1:if(h==="'"){if(c(A),o===0)return!1;i=o}else a+=h;break;case 2:if(h==='"'){if(c(A),o===0)return!1;i=o}else a+=h;break;case 3:if(h==="`"){if(c(A),o===0)return!1;i=o}else h==="$"&&s.charAt(A+1)==="{"?Fn():a+=h;break;default:throw new Error("unknown import.meta.hot lexer state")}}return!1}function Ti(s,e,t){const i=new Set;sr(s,e,i);for(const{url:o}of i)t.add(o);return i.size>0}function pn(s){return s[0]!=="."&&s[0]!=="/"&&(s=mr(s)),s}function Fn(s){throw new Error("import.meta.hot.accept() can only accept string literals or an Array of string literals.")}const Ni="/@hmr/client",Fi=/\.(?:map|json)(?:$|\?)/,Pi=s=>Fi.test(s)||Cn(s);function Oi(s){return!En(s)&&!gt(s)}function Ki(s){let e;return{name:"dev:import-analysis",configureServer(t){e=t},async transform(t,i){if(!e)return null;if(Pi(i))return t;await vn;let o,a;try{[o,a]=Qn(t)}catch{ji(i,t)}const{moduleGraph:c}=e,A=c.getModuleById(i);if(A||Ji(i),!o.length)return A.isSelfAccepting=!1,t;let h=!1,w=!1,f;const S=()=>f||(f=new ln(t));let J=!1;const ie=null,z=fe=>Ze.posix.resolve(Ze.posix.dirname(A.url),fe),ue=new Array(o.length),Pe=new Array(o.length),P=new Array(o.length),{filesName:x}=await s.fetchCode(`GET_FILES_NAME${Date.now()}`,"FETCH_FILES_NAME");await Promise.all(o.map(async(fe,Qe)=>{const{s:Oe,e:Ae,ss:Ke,se:st,d:Ve,a:ee}=fe;let V=fe.n;if(t.slice(Oe,Ae)==="import.meta"){if(t.slice(Ae,Ae+4)===".hot"){h=!0;const ve=Ae+4+(t[Ae+4]==="?"?1:0);if(t.slice(ve,ve+7)===".accept")if(t.slice(ve,ve+14)===".acceptExports"){const E=P[Qe]=new Set;Ti(t,t.indexOf("(",ve+14)+1,E),J=!0}else{const E=Pe[Qe]=new Set;sr(t,t.indexOf("(",ve+7)+1,E)&&(w=!0)}}return}const pe=Ve>-1;if(V!==void 0){if(Vr(V)||Xr(V))return;const ke=await L(V,s);if(ke!==V){const ve=JSON.stringify(ke),E=pe?Oe:Oe-1,le=pe?Ae:Ae+1;S().overwrite(E,le,ve,{contentOnly:!0})}ue[Qe]=ke}}));const _=ue.filter(Yr),O=new Set(_),G=new Set(_.map(fe=>bt(fe))),ae=Pn(Pe),W=Pn(P);h&&S().prepend(`import { createHotContext as __hmr__createHotContext } from "${Ni}";import.meta.hot = __hmr__createHotContext(${JSON.stringify(pn(A.url))});`);const Z=new Set;for(const{url:fe,start:Qe,end:Oe}of ae){const[Ae]=await c.resolveUrl(z(fe),!1);Z.add(Ae),S().overwrite(Qe,Oe,JSON.stringify(Ae),{contentOnly:!0})}if(!gt(i)||on.test(i)){const fe=await c.updateModuleInfo(A,O,ie,Z,J?W:null,w,!1,G);h&&fe&&Li(fe)}if(f)return{code:f.toString(),map:f.generateMap({hires:"boundary",source:i})};return t;async function L(fe,Qe){if(fe.startsWith(".")||fe.startsWith("/")){const Oe=Ze.resolve(Qe.base,fe);let Ae="";if(x.forEach(Ke=>{(Ke.includes(Oe)&&Ke.includes("index")&&!Ae||Ke.includes(Oe)&&!Ke.includes("index"))&&(Ae=Ke)}),Ae)return Ae.substring(7)}return fe}}}}function ji(s,e){const t=s.endsWith(".vue"),i=s.endsWith(".jsx")||s.endsWith(".tsx"),o=!t&&En(s),a=e.includes("�");return{message:"Failed to parse source for import analysis because the content contains invalid JS syntax. "+(t?"Install @vitejs/plugin-vue to handle .vue files.":o?i?"If you use tsconfig.json, make sure to not set jsx to preserve.":"If you are using JSX, make sure to name the file with the .jsx or .tsx extension.":`You may need to install appropriate plugins to handle the ${Ze.extname(s)} file format, or if it's an asset, add "**/*${Ze.extname(s)}" to \`assetsInclude\` in your configuration.`),showCodeFrame:!a}}const $i="ERR_OUTDATED_OPTIMIZED_DEP";function Ji(s){const e=new Error(`There is a new version of the pre-bundle for "${s}", a page reload is going to ask for it.`);throw e.code=$i,e}function Pn(s){const e=new Set;for(const t of s)if(t)for(const i of t)e.add(i);return e}function Gi(){return{name:"resolve",async resolveId(s,e){if(e)return/\https?:\/\//.test(s)?s.substring(location.origin.length):s}}}var or={exports:{}};(function(s){(e=>{var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,c=(g,m)=>{for(var y in m)t(g,y,{get:m[y],enumerable:!0})},A=(g,m,y,M)=>{if(m&&typeof m=="object"||typeof m=="function")for(let T of o(m))!a.call(g,T)&&T!==y&&t(g,T,{get:()=>m[T],enumerable:!(M=i(m,T))||M.enumerable});return g},h=g=>A(t({},"__esModule",{value:!0}),g),w=(g,m,y)=>new Promise((M,T)=>{var K=R=>{try{ne(y.next(R))}catch(oe){T(oe)}},N=R=>{try{ne(y.throw(R))}catch(oe){T(oe)}},ne=R=>R.done?M(R.value):Promise.resolve(R.value).then(K,N);ne((y=y.apply(g,m)).next())}),f={};c(f,{analyzeMetafile:()=>n,analyzeMetafileSync:()=>C,build:()=>we,buildSync:()=>r,context:()=>te,default:()=>Ot,formatMessages:()=>l,formatMessagesSync:()=>p,initialize:()=>je,stop:()=>b,transform:()=>_e,transformSync:()=>u,version:()=>j}),e.exports=h(f);function S(g){let m=M=>{if(M===null)y.write8(0);else if(typeof M=="boolean")y.write8(1),y.write8(+M);else if(typeof M=="number")y.write8(2),y.write32(M|0);else if(typeof M=="string")y.write8(3),y.write(z(M));else if(M instanceof Uint8Array)y.write8(4),y.write(M);else if(M instanceof Array){y.write8(5),y.write32(M.length);for(let T of M)m(T)}else{let T=Object.keys(M);y.write8(6),y.write32(T.length);for(let K of T)y.write(z(K)),m(M[K])}},y=new ie;return y.write32(0),y.write32(g.id<<1|+!g.isRequest),m(g.value),x(y.buf,y.len-4,0),y.buf.subarray(0,y.len)}function J(g){let m=()=>{switch(y.read8()){case 0:return null;case 1:return!!y.read8();case 2:return y.read32();case 3:return ue(y.read());case 4:return y.read();case 5:{let N=y.read32(),ne=[];for(let R=0;R<N;R++)ne.push(m());return ne}case 6:{let N=y.read32(),ne={};for(let R=0;R<N;R++)ne[ue(y.read())]=m();return ne}default:throw new Error("Invalid packet")}},y=new ie(g),M=y.read32(),T=(M&1)===0;M>>>=1;let K=m();if(y.ptr!==g.length)throw new Error("Invalid packet");return{id:M,isRequest:T,value:K}}var ie=class{constructor(g=new Uint8Array(1024)){this.buf=g,this.len=0,this.ptr=0}_write(g){if(this.len+g>this.buf.length){let m=new Uint8Array((this.len+g)*2);m.set(this.buf),this.buf=m}return this.len+=g,this.len-g}write8(g){let m=this._write(1);this.buf[m]=g}write32(g){let m=this._write(4);x(this.buf,g,m)}write(g){let m=this._write(4+g.length);x(this.buf,g.length,m),this.buf.set(g,m+4)}_read(g){if(this.ptr+g>this.buf.length)throw new Error("Invalid packet");return this.ptr+=g,this.ptr-g}read8(){return this.buf[this._read(1)]}read32(){return P(this.buf,this._read(4))}read(){let g=this.read32(),m=new Uint8Array(g),y=this._read(m.length);return m.set(this.buf.subarray(y,y+g)),m}},z,ue,Pe;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let g=new TextEncoder,m=new TextDecoder;z=y=>g.encode(y),ue=y=>m.decode(y),Pe='new TextEncoder().encode("")'}else if(typeof xt<"u")z=g=>xt.from(g),ue=g=>{let{buffer:m,byteOffset:y,byteLength:M}=g;return xt.from(m,y,M).toString()},Pe='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(z("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Pe} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function P(g,m){return g[m++]|g[m++]<<8|g[m++]<<16|g[m++]<<24}function x(g,m,y){g[y++]=m,g[y++]=m>>8,g[y++]=m>>16,g[y++]=m>>24}var _=JSON.stringify,O="warning",G="silent";function ae(g){if(Ge(g,"target"),g.indexOf(",")>=0)throw new Error(`Invalid target: ${g}`);return g}var W=()=>null,Z=g=>typeof g=="boolean"?null:"a boolean",L=g=>typeof g=="string"?null:"a string",fe=g=>g instanceof RegExp?null:"a RegExp object",Qe=g=>typeof g=="number"&&g===(g|0)?null:"an integer",Oe=g=>typeof g=="function"?null:"a function",Ae=g=>Array.isArray(g)?null:"an array",Ke=g=>typeof g=="object"&&g!==null&&!Array.isArray(g)?null:"an object",st=g=>typeof g=="object"&&g!==null?null:"an array or an object",Ve=g=>g instanceof WebAssembly.Module?null:"a WebAssembly.Module",ee=g=>typeof g=="object"&&!Array.isArray(g)?null:"an object or null",V=g=>typeof g=="string"||typeof g=="boolean"?null:"a string or a boolean",ce=g=>typeof g=="string"||typeof g=="object"&&g!==null&&!Array.isArray(g)?null:"a string or an object",pe=g=>typeof g=="string"||Array.isArray(g)?null:"a string or an array",ke=g=>typeof g=="string"||g instanceof Uint8Array?null:"a string or a Uint8Array",ve=g=>typeof g=="string"||g instanceof URL?null:"a string or a URL";function E(g,m,y,M){let T=g[y];if(m[y+""]=!0,T===void 0)return;let K=M(T);if(K!==null)throw new Error(`${_(y)} must be ${K}`);return T}function le(g,m,y){for(let M in g)if(!(M in m))throw new Error(`Invalid option ${y}: ${_(M)}`)}function Me(g){let m=Object.create(null),y=E(g,m,"wasmURL",ve),M=E(g,m,"wasmModule",Ve),T=E(g,m,"worker",Z);return le(g,m,"in initialize() call"),{wasmURL:y,wasmModule:M,worker:T}}function pt(g){let m;if(g!==void 0){m=Object.create(null);for(let y in g){let M=g[y];if(typeof M=="string"||M===!1)m[y]=M;else throw new Error(`Expected ${_(y)} in mangle cache to map to either a string or false`)}}return m}function nt(g,m,y,M,T){let K=E(m,y,"color",Z),N=E(m,y,"logLevel",L),ne=E(m,y,"logLimit",Qe);K!==void 0?g.push(`--color=${K}`):M&&g.push("--color=true"),g.push(`--log-level=${N||T}`),g.push(`--log-limit=${ne||0}`)}function Ge(g,m,y){if(typeof g!="string")throw new Error(`Expected value for ${m}${y!==void 0?" "+_(y):""} to be a string, got ${typeof g} instead`);return g}function ut(g,m,y){let M=E(m,y,"legalComments",L),T=E(m,y,"sourceRoot",L),K=E(m,y,"sourcesContent",Z),N=E(m,y,"target",pe),ne=E(m,y,"format",L),R=E(m,y,"globalName",L),oe=E(m,y,"mangleProps",fe),me=E(m,y,"reserveProps",fe),ye=E(m,y,"mangleQuoted",Z),Je=E(m,y,"minify",Z),Se=E(m,y,"minifySyntax",Z),Ie=E(m,y,"minifyWhitespace",Z),ze=E(m,y,"minifyIdentifiers",Z),H=E(m,y,"lineLimit",Qe),De=E(m,y,"drop",Ae),Ue=E(m,y,"dropLabels",Ae),q=E(m,y,"charset",L),k=E(m,y,"treeShaking",Z),Q=E(m,y,"ignoreAnnotations",Z),I=E(m,y,"jsx",L),$=E(m,y,"jsxFactory",L),Y=E(m,y,"jsxFragment",L),se=E(m,y,"jsxImportSource",L),ge=E(m,y,"jsxDev",Z),d=E(m,y,"jsxSideEffects",Z),B=E(m,y,"define",Ke),F=E(m,y,"logOverride",Ke),X=E(m,y,"supported",Ke),de=E(m,y,"pure",Ae),be=E(m,y,"keepNames",Z),Be=E(m,y,"platform",L),xe=E(m,y,"tsconfigRaw",ce);if(M&&g.push(`--legal-comments=${M}`),T!==void 0&&g.push(`--source-root=${T}`),K!==void 0&&g.push(`--sources-content=${K}`),N&&(Array.isArray(N)?g.push(`--target=${Array.from(N).map(ae).join(",")}`):g.push(`--target=${ae(N)}`)),ne&&g.push(`--format=${ne}`),R&&g.push(`--global-name=${R}`),Be&&g.push(`--platform=${Be}`),xe&&g.push(`--tsconfig-raw=${typeof xe=="string"?xe:JSON.stringify(xe)}`),Je&&g.push("--minify"),Se&&g.push("--minify-syntax"),Ie&&g.push("--minify-whitespace"),ze&&g.push("--minify-identifiers"),H&&g.push(`--line-limit=${H}`),q&&g.push(`--charset=${q}`),k!==void 0&&g.push(`--tree-shaking=${k}`),Q&&g.push("--ignore-annotations"),De)for(let Ce of De)g.push(`--drop:${Ge(Ce,"drop")}`);if(Ue&&g.push(`--drop-labels=${Array.from(Ue).map(Ce=>Ge(Ce,"dropLabels")).join(",")}`),oe&&g.push(`--mangle-props=${oe.source}`),me&&g.push(`--reserve-props=${me.source}`),ye!==void 0&&g.push(`--mangle-quoted=${ye}`),I&&g.push(`--jsx=${I}`),$&&g.push(`--jsx-factory=${$}`),Y&&g.push(`--jsx-fragment=${Y}`),se&&g.push(`--jsx-import-source=${se}`),ge&&g.push("--jsx-dev"),d&&g.push("--jsx-side-effects"),B)for(let Ce in B){if(Ce.indexOf("=")>=0)throw new Error(`Invalid define: ${Ce}`);g.push(`--define:${Ce}=${Ge(B[Ce],"define",Ce)}`)}if(F)for(let Ce in F){if(Ce.indexOf("=")>=0)throw new Error(`Invalid log override: ${Ce}`);g.push(`--log-override:${Ce}=${Ge(F[Ce],"log override",Ce)}`)}if(X)for(let Ce in X){if(Ce.indexOf("=")>=0)throw new Error(`Invalid supported: ${Ce}`);const Ee=X[Ce];if(typeof Ee!="boolean")throw new Error(`Expected value for supported ${_(Ce)} to be a boolean, got ${typeof Ee} instead`);g.push(`--supported:${Ce}=${Ee}`)}if(de)for(let Ce of de)g.push(`--pure:${Ge(Ce,"pure")}`);be&&g.push("--keep-names")}function ft(g,m,y,M,T){var K;let N=[],ne=[],R=Object.create(null),oe=null,me=null;nt(N,m,R,y,M),ut(N,m,R);let ye=E(m,R,"sourcemap",V),Je=E(m,R,"bundle",Z),Se=E(m,R,"splitting",Z),Ie=E(m,R,"preserveSymlinks",Z),ze=E(m,R,"metafile",Z),H=E(m,R,"outfile",L),De=E(m,R,"outdir",L),Ue=E(m,R,"outbase",L),q=E(m,R,"tsconfig",L),k=E(m,R,"resolveExtensions",Ae),Q=E(m,R,"nodePaths",Ae),I=E(m,R,"mainFields",Ae),$=E(m,R,"conditions",Ae),Y=E(m,R,"external",Ae),se=E(m,R,"packages",L),ge=E(m,R,"alias",Ke),d=E(m,R,"loader",Ke),B=E(m,R,"outExtension",Ke),F=E(m,R,"publicPath",L),X=E(m,R,"entryNames",L),de=E(m,R,"chunkNames",L),be=E(m,R,"assetNames",L),Be=E(m,R,"inject",Ae),xe=E(m,R,"banner",Ke),Ce=E(m,R,"footer",Ke),Ee=E(m,R,"entryPoints",st),$e=E(m,R,"absWorkingDir",L),Le=E(m,R,"stdin",Ke),Fe=(K=E(m,R,"write",Z))!=null?K:T,ht=E(m,R,"allowOverwrite",Z),Ye=E(m,R,"mangleCache",Ke);if(R.plugins=!0,le(m,R,`in ${g}() call`),ye&&N.push(`--sourcemap${ye===!0?"":`=${ye}`}`),Je&&N.push("--bundle"),ht&&N.push("--allow-overwrite"),Se&&N.push("--splitting"),Ie&&N.push("--preserve-symlinks"),ze&&N.push("--metafile"),H&&N.push(`--outfile=${H}`),De&&N.push(`--outdir=${De}`),Ue&&N.push(`--outbase=${Ue}`),q&&N.push(`--tsconfig=${q}`),se&&N.push(`--packages=${se}`),k){let re=[];for(let qe of k){if(Ge(qe,"resolve extension"),qe.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${qe}`);re.push(qe)}N.push(`--resolve-extensions=${re.join(",")}`)}if(F&&N.push(`--public-path=${F}`),X&&N.push(`--entry-names=${X}`),de&&N.push(`--chunk-names=${de}`),be&&N.push(`--asset-names=${be}`),I){let re=[];for(let qe of I){if(Ge(qe,"main field"),qe.indexOf(",")>=0)throw new Error(`Invalid main field: ${qe}`);re.push(qe)}N.push(`--main-fields=${re.join(",")}`)}if($){let re=[];for(let qe of $){if(Ge(qe,"condition"),qe.indexOf(",")>=0)throw new Error(`Invalid condition: ${qe}`);re.push(qe)}N.push(`--conditions=${re.join(",")}`)}if(Y)for(let re of Y)N.push(`--external:${Ge(re,"external")}`);if(ge)for(let re in ge){if(re.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${re}`);N.push(`--alias:${re}=${Ge(ge[re],"alias",re)}`)}if(xe)for(let re in xe){if(re.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${re}`);N.push(`--banner:${re}=${Ge(xe[re],"banner",re)}`)}if(Ce)for(let re in Ce){if(re.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${re}`);N.push(`--footer:${re}=${Ge(Ce[re],"footer",re)}`)}if(Be)for(let re of Be)N.push(`--inject:${Ge(re,"inject")}`);if(d)for(let re in d){if(re.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${re}`);N.push(`--loader:${re}=${Ge(d[re],"loader",re)}`)}if(B)for(let re in B){if(re.indexOf("=")>=0)throw new Error(`Invalid out extension: ${re}`);N.push(`--out-extension:${re}=${Ge(B[re],"out extension",re)}`)}if(Ee)if(Array.isArray(Ee))for(let re=0,qe=Ee.length;re<qe;re++){let dt=Ee[re];if(typeof dt=="object"&&dt!==null){let mt=Object.create(null),ct=E(dt,mt,"in",L),Kt=E(dt,mt,"out",L);if(le(dt,mt,"in entry point at index "+re),ct===void 0)throw new Error('Missing property "in" for entry point at index '+re);if(Kt===void 0)throw new Error('Missing property "out" for entry point at index '+re);ne.push([Kt,ct])}else ne.push(["",Ge(dt,"entry point at index "+re)])}else for(let re in Ee)ne.push([re,Ge(Ee[re],"entry point",re)]);if(Le){let re=Object.create(null),qe=E(Le,re,"contents",ke),dt=E(Le,re,"resolveDir",L),mt=E(Le,re,"sourcefile",L),ct=E(Le,re,"loader",L);le(Le,re,'in "stdin" object'),mt&&N.push(`--sourcefile=${mt}`),ct&&N.push(`--loader=${ct}`),dt&&(me=dt),typeof qe=="string"?oe=z(qe):qe instanceof Uint8Array&&(oe=qe)}let Ut=[];if(Q)for(let re of Q)re+="",Ut.push(re);return{entries:ne,flags:N,write:Fe,stdinContents:oe,stdinResolveDir:me,absWorkingDir:$e,nodePaths:Ut,mangleCache:pt(Ye)}}function et(g,m,y,M){let T=[],K=Object.create(null);nt(T,m,K,y,M),ut(T,m,K);let N=E(m,K,"sourcemap",V),ne=E(m,K,"sourcefile",L),R=E(m,K,"loader",L),oe=E(m,K,"banner",L),me=E(m,K,"footer",L),ye=E(m,K,"mangleCache",Ke);return le(m,K,`in ${g}() call`),N&&T.push(`--sourcemap=${N===!0?"external":N}`),ne&&T.push(`--sourcefile=${ne}`),R&&T.push(`--loader=${R}`),oe&&T.push(`--banner=${oe}`),me&&T.push(`--footer=${me}`),{flags:T,mangleCache:pt(ye)}}function ot(g){const m={},y={didClose:!1,reason:""};let M={},T=0,K=0,N=new Uint8Array(16*1024),ne=0,R=q=>{let k=ne+q.length;if(k>N.length){let I=new Uint8Array(k*2);I.set(N),N=I}N.set(q,ne),ne+=q.length;let Q=0;for(;Q+4<=ne;){let I=P(N,Q);if(Q+4+I>ne)break;Q+=4,Ie(N.subarray(Q,Q+I)),Q+=I}Q>0&&(N.copyWithin(0,Q,ne),ne-=Q)},oe=q=>{y.didClose=!0,q&&(y.reason=": "+(q.message||q));const k="The service was stopped"+y.reason;for(let Q in M)M[Q](k,null);M={}},me=(q,k,Q)=>{if(y.didClose)return Q("The service is no longer running"+y.reason,null);let I=T++;M[I]=($,Y)=>{try{Q($,Y)}finally{q&&q.unref()}},q&&q.ref(),g.writeToStdin(S({id:I,isRequest:!0,value:k}))},ye=(q,k)=>{if(y.didClose)throw new Error("The service is no longer running"+y.reason);g.writeToStdin(S({id:q,isRequest:!1,value:k}))},Je=(q,k)=>w(this,null,function*(){try{if(k.command==="ping"){ye(q,{});return}if(typeof k.key=="number"){const Q=m[k.key];if(!Q)return;const I=Q[k.command];if(I){yield I(q,k);return}}throw new Error("Invalid command: "+k.command)}catch(Q){const I=[Xe(Q,g,null,void 0,"")];try{ye(q,{errors:I})}catch{}}}),Se=!0,Ie=q=>{if(Se){Se=!1;let Q=String.fromCharCode(...q);if(Q!=="0.23.0")throw new Error(`Cannot start service: Host version "0.23.0" does not match binary version ${_(Q)}`);return}let k=J(q);if(k.isRequest)Je(k.id,k.value);else{let Q=M[k.id];delete M[k.id],k.value.error?Q(k.value.error,{}):Q(null,k.value)}};return{readFromStdout:R,afterClose:oe,service:{buildOrContext:({callName:q,refs:k,options:Q,isTTY:I,defaultWD:$,callback:Y})=>{let se=0;const ge=K++,d={},B={ref(){++se===1&&k&&k.ref()},unref(){--se===0&&(delete m[ge],k&&k.unref())}};m[ge]=d,B.ref(),Qt(q,ge,me,ye,B,g,d,Q,I,$,(F,X)=>{try{Y(F,X)}finally{B.unref()}})},transform:({callName:q,refs:k,input:Q,options:I,isTTY:$,fs:Y,callback:se})=>{const ge=St();let d=B=>{try{if(typeof Q!="string"&&!(Q instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:F,mangleCache:X}=et(q,I,$,G),de={command:"transform",flags:F,inputFS:B!==null,input:B!==null?z(B):typeof Q=="string"?z(Q):Q};X&&(de.mangleCache=X),me(k,de,(be,Be)=>{if(be)return se(new Error(be),null);let xe=tt(Be.errors,ge),Ce=tt(Be.warnings,ge),Ee=1,$e=()=>{if(--Ee===0){let Le={warnings:Ce,code:Be.code,map:Be.map,mangleCache:void 0,legalComments:void 0};"legalComments"in Be&&(Le.legalComments=Be?.legalComments),Be.mangleCache&&(Le.mangleCache=Be?.mangleCache),se(null,Le)}};if(xe.length>0)return se(at("Transform failed",xe,Ce),null);Be.codeFS&&(Ee++,Y.readFile(Be.code,(Le,Fe)=>{Le!==null?se(Le,null):(Be.code=Fe,$e())})),Be.mapFS&&(Ee++,Y.readFile(Be.map,(Le,Fe)=>{Le!==null?se(Le,null):(Be.map=Fe,$e())})),$e()})}catch(F){let X=[];try{nt(X,I,{},$,G)}catch{}const de=Xe(F,g,ge,void 0,"");me(k,{command:"error",flags:X,error:de},()=>{de.detail=ge.load(de.detail),se(at("Transform failed",[de],[]),null)})}};if((typeof Q=="string"||Q instanceof Uint8Array)&&Q.length>1024*1024){let B=d;d=()=>Y.writeFile(Q,B)}d(null)},formatMessages:({callName:q,refs:k,messages:Q,options:I,callback:$})=>{if(!I)throw new Error(`Missing second argument in ${q}() call`);let Y={},se=E(I,Y,"kind",L),ge=E(I,Y,"color",Z),d=E(I,Y,"terminalWidth",Qe);if(le(I,Y,`in ${q}() call`),se===void 0)throw new Error(`Missing "kind" in ${q}() call`);if(se!=="error"&&se!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${q}() call`);let B={command:"format-msgs",messages:rt(Q,"messages",null,"",d),isWarning:se==="warning"};ge!==void 0&&(B.color=ge),d!==void 0&&(B.terminalWidth=d),me(k,B,(F,X)=>{if(F)return $(new Error(F),null);$(null,X.messages)})},analyzeMetafile:({callName:q,refs:k,metafile:Q,options:I,callback:$})=>{I===void 0&&(I={});let Y={},se=E(I,Y,"color",Z),ge=E(I,Y,"verbose",Z);le(I,Y,`in ${q}() call`);let d={command:"analyze-metafile",metafile:Q};se!==void 0&&(d.color=se),ge!==void 0&&(d.verbose=ge),me(k,d,(B,F)=>{if(B)return $(new Error(B),null);$(null,F.result)})}}}}function Qt(g,m,y,M,T,K,N,ne,R,oe,me){const ye=St(),Je=g==="context",Se=(H,De)=>{const Ue=[];try{nt(Ue,ne,{},R,O)}catch{}const q=Xe(H,K,ye,void 0,De);y(T,{command:"error",flags:Ue,error:q},()=>{q.detail=ye.load(q.detail),me(at(Je?"Context failed":"Build failed",[q],[]),null)})};let Ie;if(typeof ne=="object"){const H=ne.plugins;if(H!==void 0){if(!Array.isArray(H))return Se(new Error('"plugins" must be an array'),"");Ie=H}}if(Ie&&Ie.length>0){if(K.isSync)return Se(new Error("Cannot use plugins in synchronous API calls"),"");Rt(m,y,M,T,K,N,ne,Ie,ye).then(H=>{if(!H.ok)return Se(H.error,H.pluginName);try{ze(H.requestPlugins,H.runOnEndCallbacks,H.scheduleOnDisposeCallbacks)}catch(De){Se(De,"")}},H=>Se(H,""));return}try{ze(null,(H,De)=>De([],[]),()=>{})}catch(H){Se(H,"")}function ze(H,De,Ue){const q=K.hasFS,{entries:k,flags:Q,write:I,stdinContents:$,stdinResolveDir:Y,absWorkingDir:se,nodePaths:ge,mangleCache:d}=ft(g,ne,R,O,q);if(I&&!K.hasFS)throw new Error('The "write" option is unavailable in this environment');const B={command:"build",key:m,entries:k,flags:Q,write:I,stdinContents:$,stdinResolveDir:Y,absWorkingDir:se||oe,nodePaths:ge,context:Je};H&&(B.plugins=H),d&&(B.mangleCache=d);const F=(be,Be)=>{const xe={errors:tt(be.errors,ye),warnings:tt(be.warnings,ye),outputFiles:void 0,metafile:void 0,mangleCache:void 0},Ce=xe.errors.slice(),Ee=xe.warnings.slice();be.outputFiles&&(xe.outputFiles=be.outputFiles.map(U)),be.metafile&&(xe.metafile=JSON.parse(be.metafile)),be.mangleCache&&(xe.mangleCache=be.mangleCache),be.writeToStdout,De(xe,($e,Le)=>{if(Ce.length>0||$e.length>0){const Fe=at("Build failed",Ce.concat($e),Ee.concat(Le));return Be(Fe,null,$e,Le)}Be(null,xe,$e,Le)})};let X,de;Je&&(N["on-end"]=(be,Be)=>new Promise(xe=>{F(Be,(Ce,Ee,$e,Le)=>{const Fe={errors:$e,warnings:Le};de&&de(Ce,Ee),X=void 0,de=void 0,M(be,Fe),xe()})})),y(T,B,(be,Be)=>{if(be)return me(new Error(be),null);if(!Je)return F(Be,(Ee,$e)=>(Ue(),me(Ee,$e)));if(Be.errors.length>0)return me(at("Context failed",Be.errors,Be.warnings),null);let xe=!1;const Ce={rebuild:()=>(X||(X=new Promise((Ee,$e)=>{let Le;de=(ht,Ye)=>{Le||(Le=()=>ht?$e(ht):Ee(Ye))};const Fe=()=>{y(T,{command:"rebuild",key:m},(Ye,Ut)=>{Ye?$e(new Error(Ye)):Le?Le():Fe()})};Fe()})),X),watch:(Ee={})=>new Promise(($e,Le)=>{if(!K.hasFS)throw new Error('Cannot use the "watch" API in this environment');le(Ee,{},"in watch() call"),y(T,{command:"watch",key:m},Ye=>{Ye?Le(new Error(Ye)):$e(void 0)})}),serve:(Ee={})=>new Promise(($e,Le)=>{if(!K.hasFS)throw new Error('Cannot use the "serve" API in this environment');const Fe={},ht=E(Ee,Fe,"port",Qe),Ye=E(Ee,Fe,"host",L),Ut=E(Ee,Fe,"servedir",L),re=E(Ee,Fe,"keyfile",L),qe=E(Ee,Fe,"certfile",L),dt=E(Ee,Fe,"fallback",L),mt=E(Ee,Fe,"onRequest",Oe);le(Ee,Fe,"in serve() call");const ct={command:"serve",key:m,onRequest:!!mt};ht!==void 0&&(ct.port=ht),Ye!==void 0&&(ct.host=Ye),Ut!==void 0&&(ct.servedir=Ut),re!==void 0&&(ct.keyfile=re),qe!==void 0&&(ct.certfile=qe),dt!==void 0&&(ct.fallback=dt),y(T,ct,(Kt,hr)=>{if(Kt)return Le(new Error(Kt));mt&&(N["serve-request"]=(dr,Ar)=>{mt(Ar.args),M(dr,{})}),$e(hr)})}),cancel:()=>new Promise(Ee=>{if(xe)return Ee();y(T,{command:"cancel",key:m},()=>{Ee()})}),dispose:()=>new Promise(Ee=>{if(xe)return Ee();xe=!0,y(T,{command:"dispose",key:m},()=>{Ee(),Ue(),T.unref()})})};T.ref(),me(null,Ce)})}}var Rt=(g,m,y,M,T,K,N,ne,R)=>w(void 0,null,function*(){let oe=[],me=[],ye={},Je={},Se=[],Ie=0,ze=0,H=[],De=!1;ne=[...ne];for(let k of ne){let Q={};if(typeof k!="object")throw new Error(`Plugin at index ${ze} must be an object`);const I=E(k,Q,"name",L);if(typeof I!="string"||I==="")throw new Error(`Plugin at index ${ze} is missing a name`);try{let $=E(k,Q,"setup",Oe);if(typeof $!="function")throw new Error("Plugin is missing a setup function");le(k,Q,`on plugin ${_(I)}`);let Y={name:I,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};ze++;let ge=$({initialOptions:N,resolve:(d,B={})=>{if(!De)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof d!="string")throw new Error("The path to resolve must be a string");let F=Object.create(null),X=E(B,F,"pluginName",L),de=E(B,F,"importer",L),be=E(B,F,"namespace",L),Be=E(B,F,"resolveDir",L),xe=E(B,F,"kind",L),Ce=E(B,F,"pluginData",W),Ee=E(B,F,"with",Ke);return le(B,F,"in resolve() call"),new Promise(($e,Le)=>{const Fe={command:"resolve",path:d,key:g,pluginName:I};if(X!=null&&(Fe.pluginName=X),de!=null&&(Fe.importer=de),be!=null&&(Fe.namespace=be),Be!=null&&(Fe.resolveDir=Be),xe!=null)Fe.kind=xe;else throw new Error('Must specify "kind" when calling "resolve"');Ce!=null&&(Fe.pluginData=R.store(Ce)),Ee!=null&&(Fe.with=D(Ee,"with")),m(M,Fe,(ht,Ye)=>{ht!==null?Le(new Error(ht)):$e({errors:tt(Ye.errors,R),warnings:tt(Ye.warnings,R),path:Ye.path,external:Ye.external,sideEffects:Ye.sideEffects,namespace:Ye.namespace,suffix:Ye.suffix,pluginData:R.load(Ye.pluginData)})})})},onStart(d){let B='This error came from the "onStart" callback registered here:',F=lt(new Error(B),T,"onStart");oe.push({name:I,callback:d,note:F}),Y.onStart=!0},onEnd(d){let B='This error came from the "onEnd" callback registered here:',F=lt(new Error(B),T,"onEnd");me.push({name:I,callback:d,note:F}),Y.onEnd=!0},onResolve(d,B){let F='This error came from the "onResolve" callback registered here:',X=lt(new Error(F),T,"onResolve"),de={},be=E(d,de,"filter",fe),Be=E(d,de,"namespace",L);if(le(d,de,`in onResolve() call for plugin ${_(I)}`),be==null)throw new Error("onResolve() call is missing a filter");let xe=Ie++;ye[xe]={name:I,callback:B,note:X},Y.onResolve.push({id:xe,filter:be.source,namespace:Be||""})},onLoad(d,B){let F='This error came from the "onLoad" callback registered here:',X=lt(new Error(F),T,"onLoad"),de={},be=E(d,de,"filter",fe),Be=E(d,de,"namespace",L);if(le(d,de,`in onLoad() call for plugin ${_(I)}`),be==null)throw new Error("onLoad() call is missing a filter");let xe=Ie++;Je[xe]={name:I,callback:B,note:X},Y.onLoad.push({id:xe,filter:be.source,namespace:Be||""})},onDispose(d){Se.push(d)},esbuild:T.esbuild});ge&&(yield ge),H.push(Y)}catch($){return{ok:!1,error:$,pluginName:I}}}K["on-start"]=(k,Q)=>w(void 0,null,function*(){let I={errors:[],warnings:[]};yield Promise.all(oe.map($=>w(void 0,[$],function*({name:Y,callback:se,note:ge}){try{let d=yield se();if(d!=null){if(typeof d!="object")throw new Error(`Expected onStart() callback in plugin ${_(Y)} to return an object`);let B={},F=E(d,B,"errors",Ae),X=E(d,B,"warnings",Ae);le(d,B,`from onStart() callback in plugin ${_(Y)}`),F!=null&&I.errors.push(...rt(F,"errors",R,Y,void 0)),X!=null&&I.warnings.push(...rt(X,"warnings",R,Y,void 0))}}catch(d){I.errors.push(Xe(d,T,R,ge&&ge(),Y))}}))),y(k,I)}),K["on-resolve"]=(k,Q)=>w(void 0,null,function*(){let I={},$="",Y,se;for(let ge of Q.ids)try{({name:$,callback:Y,note:se}=ye[ge]);let d=yield Y({path:Q.path,importer:Q.importer,namespace:Q.namespace,resolveDir:Q.resolveDir,kind:Q.kind,pluginData:R.load(Q.pluginData),with:Q.with});if(d!=null){if(typeof d!="object")throw new Error(`Expected onResolve() callback in plugin ${_($)} to return an object`);let B={},F=E(d,B,"pluginName",L),X=E(d,B,"path",L),de=E(d,B,"namespace",L),be=E(d,B,"suffix",L),Be=E(d,B,"external",Z),xe=E(d,B,"sideEffects",Z),Ce=E(d,B,"pluginData",W),Ee=E(d,B,"errors",Ae),$e=E(d,B,"warnings",Ae),Le=E(d,B,"watchFiles",Ae),Fe=E(d,B,"watchDirs",Ae);le(d,B,`from onResolve() callback in plugin ${_($)}`),I.id=ge,F!=null&&(I.pluginName=F),X!=null&&(I.path=X),de!=null&&(I.namespace=de),be!=null&&(I.suffix=be),Be!=null&&(I.external=Be),xe!=null&&(I.sideEffects=xe),Ce!=null&&(I.pluginData=R.store(Ce)),Ee!=null&&(I.errors=rt(Ee,"errors",R,$,void 0)),$e!=null&&(I.warnings=rt($e,"warnings",R,$,void 0)),Le!=null&&(I.watchFiles=v(Le,"watchFiles")),Fe!=null&&(I.watchDirs=v(Fe,"watchDirs"));break}}catch(d){I={id:ge,errors:[Xe(d,T,R,se&&se(),$)]};break}y(k,I)}),K["on-load"]=(k,Q)=>w(void 0,null,function*(){let I={},$="",Y,se;for(let ge of Q.ids)try{({name:$,callback:Y,note:se}=Je[ge]);let d=yield Y({path:Q.path,namespace:Q.namespace,suffix:Q.suffix,pluginData:R.load(Q.pluginData),with:Q.with});if(d!=null){if(typeof d!="object")throw new Error(`Expected onLoad() callback in plugin ${_($)} to return an object`);let B={},F=E(d,B,"pluginName",L),X=E(d,B,"contents",ke),de=E(d,B,"resolveDir",L),be=E(d,B,"pluginData",W),Be=E(d,B,"loader",L),xe=E(d,B,"errors",Ae),Ce=E(d,B,"warnings",Ae),Ee=E(d,B,"watchFiles",Ae),$e=E(d,B,"watchDirs",Ae);le(d,B,`from onLoad() callback in plugin ${_($)}`),I.id=ge,F!=null&&(I.pluginName=F),X instanceof Uint8Array?I.contents=X:X!=null&&(I.contents=z(X)),de!=null&&(I.resolveDir=de),be!=null&&(I.pluginData=R.store(be)),Be!=null&&(I.loader=Be),xe!=null&&(I.errors=rt(xe,"errors",R,$,void 0)),Ce!=null&&(I.warnings=rt(Ce,"warnings",R,$,void 0)),Ee!=null&&(I.watchFiles=v(Ee,"watchFiles")),$e!=null&&(I.watchDirs=v($e,"watchDirs"));break}}catch(d){I={id:ge,errors:[Xe(d,T,R,se&&se(),$)]};break}y(k,I)});let Ue=(k,Q)=>Q([],[]);me.length>0&&(Ue=(k,Q)=>{w(void 0,null,function*(){const I=[],$=[];for(const{name:Y,callback:se,note:ge}of me){let d,B;try{const F=yield se(k);if(F!=null){if(typeof F!="object")throw new Error(`Expected onEnd() callback in plugin ${_(Y)} to return an object`);let X={},de=E(F,X,"errors",Ae),be=E(F,X,"warnings",Ae);le(F,X,`from onEnd() callback in plugin ${_(Y)}`),de!=null&&(d=rt(de,"errors",R,Y,void 0)),be!=null&&(B=rt(be,"warnings",R,Y,void 0))}}catch(F){d=[Xe(F,T,R,ge&&ge(),Y)]}if(d){I.push(...d);try{k.errors.push(...d)}catch{}}if(B){$.push(...B);try{k.warnings.push(...B)}catch{}}}Q(I,$)})});let q=()=>{for(const k of Se)setTimeout(()=>k(),0)};return De=!0,{ok:!0,requestPlugins:H,runOnEndCallbacks:Ue,scheduleOnDisposeCallbacks:q}});function St(){const g=new Map;let m=0;return{load(y){return g.get(y)},store(y){if(y===void 0)return-1;const M=m++;return g.set(M,y),M}}}function lt(g,m,y){let M,T=!1;return()=>{if(T)return M;T=!0;try{let K=(g.stack+"").split(`
`);K.splice(1,1);let N=vt(m,K,y);if(N)return M={text:g.message,location:N},M}catch{}}}function Xe(g,m,y,M,T){let K="Internal error",N=null;try{K=(g&&g.message||g)+""}catch{}try{N=vt(m,(g.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:T,text:K,location:N,notes:M?[M]:[],detail:y?y.store(g):-1}}function vt(g,m,y){let M="    at ";if(g.readFileSync&&!m[0].startsWith(M)&&m[1].startsWith(M))for(let T=1;T<m.length;T++){let K=m[T];if(K.startsWith(M))for(K=K.slice(M.length);;){let N=/^(?:new |async )?\S+ \((.*)\)$/.exec(K);if(N){K=N[1];continue}if(N=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(K),N){K=N[1];continue}if(N=/^(\S+):(\d+):(\d+)$/.exec(K),N){let ne;try{ne=g.readFileSync(N[1],"utf8")}catch{break}let R=ne.split(/\r\n|\r|\n|\u2028|\u2029/)[+N[2]-1]||"",oe=+N[3]-1,me=R.slice(oe,oe+y.length)===y?y.length:0;return{file:N[1],namespace:"file",line:+N[2],column:z(R.slice(0,oe)).length,length:z(R.slice(oe,oe+me)).length,lineText:R+`
`+m.slice(1).join(`
`),suggestion:""}}break}}return null}function at(g,m,y){let M=5;g+=m.length<1?"":` with ${m.length} error${m.length<2?"":"s"}:`+m.slice(0,M+1).map((K,N)=>{if(N===M)return`
...`;if(!K.location)return`
error: ${K.text}`;let{file:ne,line:R,column:oe}=K.location,me=K.pluginName?`[plugin: ${K.pluginName}] `:"";return`
${ne}:${R}:${oe}: ERROR: ${me}${K.text}`}).join("");let T=new Error(g);for(const[K,N]of[["errors",m],["warnings",y]])Object.defineProperty(T,K,{configurable:!0,enumerable:!0,get:()=>N,set:ne=>Object.defineProperty(T,K,{configurable:!0,enumerable:!0,value:ne})});return T}function tt(g,m){for(const y of g)y.detail=m.load(y.detail);return g}function Dt(g,m,y){if(g==null)return null;let M={},T=E(g,M,"file",L),K=E(g,M,"namespace",L),N=E(g,M,"line",Qe),ne=E(g,M,"column",Qe),R=E(g,M,"length",Qe),oe=E(g,M,"lineText",L),me=E(g,M,"suggestion",L);if(le(g,M,m),oe){const ye=oe.slice(0,(ne&&ne>0?ne:0)+(R&&R>0?R:0)+(y&&y>0?y:80));!/[\x7F-\uFFFF]/.test(ye)&&!/\n/.test(oe)&&(oe=ye)}return{file:T||"",namespace:K||"",line:N||0,column:ne||0,length:R||0,lineText:oe||"",suggestion:me||""}}function rt(g,m,y,M,T){let K=[],N=0;for(const ne of g){let R={},oe=E(ne,R,"id",L),me=E(ne,R,"pluginName",L),ye=E(ne,R,"text",L),Je=E(ne,R,"location",ee),Se=E(ne,R,"notes",Ae),Ie=E(ne,R,"detail",W),ze=`in element ${N} of "${m}"`;le(ne,R,ze);let H=[];if(Se)for(const De of Se){let Ue={},q=E(De,Ue,"text",L),k=E(De,Ue,"location",ee);le(De,Ue,ze),H.push({text:q||"",location:Dt(k,ze,T)})}K.push({id:oe||"",pluginName:me||M,text:ye||"",location:Dt(Je,ze,T),notes:H,detail:y?y.store(Ie):-1}),N++}return K}function v(g,m){const y=[];for(const M of g){if(typeof M!="string")throw new Error(`${_(m)} must be an array of strings`);y.push(M)}return y}function D(g,m){const y=Object.create(null);for(const M in g){const T=g[M];if(typeof T!="string")throw new Error(`key ${_(M)} in object ${_(m)} must be a string`);y[M]=T}return y}function U({path:g,contents:m,hash:y}){let M=null;return{path:g,contents:m,hash:y,get text(){const T=this.contents;return(M===null||T!==m)&&(m=T,M=ue(T)),M}}}var j="0.23.0",we=g=>Ne().build(g),te=g=>Ne().context(g),_e=(g,m)=>Ne().transform(g,m),l=(g,m)=>Ne().formatMessages(g,m),n=(g,m)=>Ne().analyzeMetafile(g,m),r=()=>{throw new Error('The "buildSync" API only works in node')},u=()=>{throw new Error('The "transformSync" API only works in node')},p=()=>{throw new Error('The "formatMessagesSync" API only works in node')},C=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},b=()=>(Te&&Te(),Promise.resolve()),he,Te,Re,Ne=()=>{if(Re)return Re;throw he?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},je=g=>{g=Me(g||{});let m=g.wasmURL,y=g.wasmModule,M=g.worker!==!1;if(!m&&!y)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(he)throw new Error('Cannot call "initialize" more than once');return he=it(m||"",y,M),he.catch(()=>{he=void 0}),he},it=(g,m,y)=>w(void 0,null,function*(){let M;if(y){let oe=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const setInt32 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              _gotest: {
                add: (a, b) => a + b
              },
              gojs: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8)
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin) resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.23.0"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok) throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});M=new Worker(URL.createObjectURL(oe))}else{let oe=(ye=>{var Je=(H,De,Ue)=>new Promise((q,k)=>{var Q=Y=>{try{$(Ue.next(Y))}catch(se){k(se)}},I=Y=>{try{$(Ue.throw(Y))}catch(se){k(se)}},$=Y=>Y.done?q(Y.value):Promise.resolve(Y.value).then(Q,I);$((Ue=Ue.apply(H,De)).next())});let Se,Ie={};for(let H=self;H;H=Object.getPrototypeOf(H))for(let De of Object.getOwnPropertyNames(H))De in Ie||Object.defineProperty(Ie,De,{get:()=>self[De]});(()=>{const H=()=>{const q=new Error("not implemented");return q.code="ENOSYS",q};if(!Ie.fs){let q="";Ie.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(k,Q){q+=Ue.decode(Q);const I=q.lastIndexOf(`
`);return I!=-1&&(q=q.substring(I+1)),Q.length},write(k,Q,I,$,Y,se){if(I!==0||$!==Q.length||Y!==null){se(H());return}const ge=this.writeSync(k,Q);se(null,ge)},chmod(k,Q,I){I(H())},chown(k,Q,I,$){$(H())},close(k,Q){Q(H())},fchmod(k,Q,I){I(H())},fchown(k,Q,I,$){$(H())},fstat(k,Q){Q(H())},fsync(k,Q){Q(null)},ftruncate(k,Q,I){I(H())},lchown(k,Q,I,$){$(H())},link(k,Q,I){I(H())},lstat(k,Q){Q(H())},mkdir(k,Q,I){I(H())},open(k,Q,I,$){$(H())},read(k,Q,I,$,Y,se){se(H())},readdir(k,Q){Q(H())},readlink(k,Q){Q(H())},rename(k,Q,I){I(H())},rmdir(k,Q){Q(H())},stat(k,Q){Q(H())},symlink(k,Q,I){I(H())},truncate(k,Q,I){I(H())},unlink(k,Q){Q(H())},utimes(k,Q,I,$){$(H())}}}if(Ie.process||(Ie.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw H()},pid:-1,ppid:-1,umask(){throw H()},cwd(){throw H()},chdir(){throw H()}}),!Ie.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!Ie.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!Ie.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!Ie.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const De=new TextEncoder("utf-8"),Ue=new TextDecoder("utf-8");Ie.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=d=>{},this._exitPromise=new Promise(d=>{this._resolveExitPromise=d}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const q=(d,B)=>{this.mem.setUint32(d+0,B,!0),this.mem.setUint32(d+4,Math.floor(B/4294967296),!0)},k=d=>{const B=this.mem.getUint32(d+0,!0),F=this.mem.getInt32(d+4,!0);return B+F*4294967296},Q=d=>{const B=this.mem.getFloat64(d,!0);if(B===0)return;if(!isNaN(B))return B;const F=this.mem.getUint32(d,!0);return this._values[F]},I=(d,B)=>{if(typeof B=="number"&&B!==0){if(isNaN(B)){this.mem.setUint32(d+4,2146959360,!0),this.mem.setUint32(d,0,!0);return}this.mem.setFloat64(d,B,!0);return}if(B===void 0){this.mem.setFloat64(d,0,!0);return}let X=this._ids.get(B);X===void 0&&(X=this._idPool.pop(),X===void 0&&(X=this._values.length),this._values[X]=B,this._goRefCounts[X]=0,this._ids.set(B,X)),this._goRefCounts[X]++;let de=0;switch(typeof B){case"object":B!==null&&(de=1);break;case"string":de=2;break;case"symbol":de=3;break;case"function":de=4;break}this.mem.setUint32(d+4,2146959360|de,!0),this.mem.setUint32(d,X,!0)},$=d=>{const B=k(d+0),F=k(d+8);return new Uint8Array(this._inst.exports.mem.buffer,B,F)},Y=d=>{const B=k(d+0),F=k(d+8),X=new Array(F);for(let de=0;de<F;de++)X[de]=Q(B+de*8);return X},se=d=>{const B=k(d+0),F=k(d+8);return Ue.decode(new DataView(this._inst.exports.mem.buffer,B,F))},ge=Date.now()-performance.now();this.importObject={_gotest:{add:(d,B)=>d+B},gojs:{"runtime.wasmExit":d=>{d>>>=0;const B=this.mem.getInt32(d+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(B)},"runtime.wasmWrite":d=>{d>>>=0;const B=k(d+8),F=k(d+16),X=this.mem.getInt32(d+24,!0);Ie.fs.writeSync(B,new Uint8Array(this._inst.exports.mem.buffer,F,X))},"runtime.resetMemoryDataView":d=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":d=>{d>>>=0,q(d+8,(ge+performance.now())*1e6)},"runtime.walltime":d=>{d>>>=0;const B=new Date().getTime();q(d+8,B/1e3),this.mem.setInt32(d+16,B%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":d=>{d>>>=0;const B=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(B,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(B);)this._resume()},k(d+8))),this.mem.setInt32(d+16,B,!0)},"runtime.clearTimeoutEvent":d=>{d>>>=0;const B=this.mem.getInt32(d+8,!0);clearTimeout(this._scheduledTimeouts.get(B)),this._scheduledTimeouts.delete(B)},"runtime.getRandomData":d=>{d>>>=0,crypto.getRandomValues($(d+8))},"syscall/js.finalizeRef":d=>{d>>>=0;const B=this.mem.getUint32(d+8,!0);if(this._goRefCounts[B]--,this._goRefCounts[B]===0){const F=this._values[B];this._values[B]=null,this._ids.delete(F),this._idPool.push(B)}},"syscall/js.stringVal":d=>{d>>>=0,I(d+24,se(d+8))},"syscall/js.valueGet":d=>{d>>>=0;const B=Reflect.get(Q(d+8),se(d+16));d=this._inst.exports.getsp()>>>0,I(d+32,B)},"syscall/js.valueSet":d=>{d>>>=0,Reflect.set(Q(d+8),se(d+16),Q(d+32))},"syscall/js.valueDelete":d=>{d>>>=0,Reflect.deleteProperty(Q(d+8),se(d+16))},"syscall/js.valueIndex":d=>{d>>>=0,I(d+24,Reflect.get(Q(d+8),k(d+16)))},"syscall/js.valueSetIndex":d=>{d>>>=0,Reflect.set(Q(d+8),k(d+16),Q(d+24))},"syscall/js.valueCall":d=>{d>>>=0;try{const B=Q(d+8),F=Reflect.get(B,se(d+16)),X=Y(d+32),de=Reflect.apply(F,B,X);d=this._inst.exports.getsp()>>>0,I(d+56,de),this.mem.setUint8(d+64,1)}catch(B){d=this._inst.exports.getsp()>>>0,I(d+56,B),this.mem.setUint8(d+64,0)}},"syscall/js.valueInvoke":d=>{d>>>=0;try{const B=Q(d+8),F=Y(d+16),X=Reflect.apply(B,void 0,F);d=this._inst.exports.getsp()>>>0,I(d+40,X),this.mem.setUint8(d+48,1)}catch(B){d=this._inst.exports.getsp()>>>0,I(d+40,B),this.mem.setUint8(d+48,0)}},"syscall/js.valueNew":d=>{d>>>=0;try{const B=Q(d+8),F=Y(d+16),X=Reflect.construct(B,F);d=this._inst.exports.getsp()>>>0,I(d+40,X),this.mem.setUint8(d+48,1)}catch(B){d=this._inst.exports.getsp()>>>0,I(d+40,B),this.mem.setUint8(d+48,0)}},"syscall/js.valueLength":d=>{d>>>=0,q(d+16,parseInt(Q(d+8).length))},"syscall/js.valuePrepareString":d=>{d>>>=0;const B=De.encode(String(Q(d+8)));I(d+16,B),q(d+24,B.length)},"syscall/js.valueLoadString":d=>{d>>>=0;const B=Q(d+8);$(d+16).set(B)},"syscall/js.valueInstanceOf":d=>{d>>>=0,this.mem.setUint8(d+24,Q(d+8)instanceof Q(d+16)?1:0)},"syscall/js.copyBytesToGo":d=>{d>>>=0;const B=$(d+8),F=Q(d+32);if(!(F instanceof Uint8Array||F instanceof Uint8ClampedArray)){this.mem.setUint8(d+48,0);return}const X=F.subarray(0,B.length);B.set(X),q(d+40,X.length),this.mem.setUint8(d+48,1)},"syscall/js.copyBytesToJS":d=>{d>>>=0;const B=Q(d+8),F=$(d+16);if(!(B instanceof Uint8Array||B instanceof Uint8ClampedArray)){this.mem.setUint8(d+48,0);return}const X=F.subarray(0,B.length);B.set(X),q(d+40,X.length),this.mem.setUint8(d+48,1)},debug:d=>{}}}}run(q){return Je(this,null,function*(){if(!(q instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=q,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,Ie,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[Ie,5],[this,6]]),this._idPool=[],this.exited=!1;let k=4096;const Q=d=>{const B=k,F=De.encode(d+"\0");return new Uint8Array(this.mem.buffer,k,F.length).set(F),k+=F.length,k%8!==0&&(k+=8-k%8),B},I=this.argv.length,$=[];this.argv.forEach(d=>{$.push(Q(d))}),$.push(0),Object.keys(this.env).sort().forEach(d=>{$.push(Q(`${d}=${this.env[d]}`))}),$.push(0);const se=k;if($.forEach(d=>{this.mem.setUint32(k,d,!0),this.mem.setUint32(k+4,0,!0),k+=8}),k>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(I,se),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(q){const k=this;return function(){const Q={id:q,this:this,args:arguments};return k._pendingEvent=Q,k._resume(),Q.result}}}})(),Se=({data:H})=>{let De=new TextDecoder,Ue=Ie.fs,q="";Ue.writeSync=(Y,se)=>{if(Y===1)ye(se);else if(Y===2){q+=De.decode(se);let ge=q.split(`
`);ge.length>1,q=ge[ge.length-1]}else throw new Error("Bad write");return se.length};let k=[],Q,I=0;Se=({data:Y})=>(Y.length>0&&(k.push(Y),Q&&Q()),$),Ue.read=(Y,se,ge,d,B,F)=>{if(Y!==0||ge!==0||d!==se.length||B!==null)throw new Error("Bad read");if(k.length===0){Q=()=>Ue.read(Y,se,ge,d,B,F);return}let X=k[0],de=Math.max(0,Math.min(d,X.length-I));se.set(X.subarray(I,I+de),ge),I+=de,I===X.length&&(k.shift(),I=0),F(null,de)};let $=new Ie.Go;return $.argv=["","--service=0.23.0"],ze(H,$).then(Y=>{ye(null),$.run(Y)},Y=>{ye(Y)}),$};function ze(H,De){return Je(this,null,function*(){if(H instanceof WebAssembly.Module)return WebAssembly.instantiate(H,De.importObject);const Ue=yield fetch(H);if(!Ue.ok)throw new Error(`Failed to download ${JSON.stringify(H)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(Ue.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(Ue,De.importObject)).instance;const q=yield Ue.arrayBuffer();return(yield WebAssembly.instantiate(q,De.importObject)).instance})}return H=>Se(H)})(ye=>M.onmessage({data:ye})),me;M={onmessage:null,postMessage:ye=>setTimeout(()=>me=oe({data:ye})),terminate(){if(me)for(let ye of me._scheduledTimeouts.values())clearTimeout(ye)}}}let T,K;const N=new Promise((oe,me)=>{T=oe,K=me});M.onmessage=({data:oe})=>{M.onmessage=({data:me})=>ne(me),oe?K(oe):T()},M.postMessage(m||new URL(g,location.href).toString());let{readFromStdout:ne,service:R}=ot({writeToStdin(oe){M.postMessage(oe)},isSync:!1,hasFS:!1,esbuild:f});yield N,Te=()=>{M.terminate(),he=void 0,Te=void 0,Re=void 0},Re={build:oe=>new Promise((me,ye)=>R.buildOrContext({callName:"build",refs:null,options:oe,isTTY:!1,defaultWD:"/",callback:(Je,Se)=>Je?ye(Je):me(Se)})),context:oe=>new Promise((me,ye)=>R.buildOrContext({callName:"context",refs:null,options:oe,isTTY:!1,defaultWD:"/",callback:(Je,Se)=>Je?ye(Je):me(Se)})),transform:(oe,me)=>new Promise((ye,Je)=>R.transform({callName:"transform",refs:null,input:oe,options:me||{},isTTY:!1,fs:{readFile(Se,Ie){Ie(new Error("Internal error"),null)},writeFile(Se,Ie){Ie(null)}},callback:(Se,Ie)=>Se?Je(Se):ye(Ie)})),formatMessages:(oe,me)=>new Promise((ye,Je)=>R.formatMessages({callName:"formatMessages",refs:null,messages:oe,options:me,callback:(Se,Ie)=>Se?Je(Se):ye(Ie)})),analyzeMetafile:(oe,me)=>new Promise((ye,Je)=>R.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof oe=="string"?oe:JSON.stringify(oe),options:me,callback:(Se,Ie)=>Se?Je(Se):ye(Ie)}))}}),Ot=f})(s)})(or);var lr=or.exports;const Hi=/\.\w+$/;async function qi(s,e,t,i,o){let a=t?.loader;if(!a){const h=Ze.extname(Hi.test(e)?e:Bt(e)).slice(1);h==="cjs"||h==="mjs"?a="js":h==="cts"||h==="mts"?a="ts":a=h}let c=t?.tsconfigRaw;if(typeof c!="string"){const w={...{target:"esnext",useDefineForClassFields:!0},...c?.compilerOptions};w.useDefineForClassFields===void 0&&w.target===void 0&&(w.useDefineForClassFields=!1),t&&(t.jsx&&(w.jsx=void 0),t.jsxFactory&&(w.jsxFactory=void 0),t.jsxFragment&&(w.jsxFragmentFactory=void 0),t.jsxImportSource&&(w.jsxImportSource=void 0)),w.jsx="preserve",w.jsxImportSource="solid-js",c={...c,compilerOptions:w}}const A={sourcemap:!0,sourcefile:e,...t,loader:a,tsconfigRaw:c};delete A.include,delete A.exclude,delete A.jsxInject;try{const h=await lr.transform(s,A);let w;if(i&&A.sourcemap){const f=JSON.parse(h.map);f.sourcesContent=[],w=nr(e,[f,i])}else w=A.sourcemap&&A.sourcemap!=="inline"?JSON.parse(h.map):{mappings:""};return{...h,map:w}}catch(h){throw h.errors&&(h.frame="",h.errors.forEach(w=>{(w.text==="Experimental decorators are not currently enabled"||w.text==="Parameter decorators only work when experimental decorators are enabled")&&(w.text+='. Vite 5 now uses esbuild 0.18 and you need to enable them by adding "experimentalDecorators": true in your "tsconfig.json" file.'),h.frame+=`
`+ar(w,s)}),h.loc=h.errors[0].location),h}}function On(){const s={target:"esnext",charset:"utf8",minify:!1,minifyIdentifiers:!1,minifySyntax:!1,minifyWhitespace:!1,treeShaking:!1,keepNames:!1,supported:{"dynamic-import":!0,"import-meta":!0},jsx:"preserve",tsconfigRaw:{}};return{name:"esbuild",async buildStart(){await lr.initialize({wasmURL:"https://cdn.jsdelivr.net/npm/esbuild-wasm@0.23.0/esbuild.wasm",worker:!1})},async transform(e,t){if(/\.(m?ts|[jt]sx)$/.test(t)){const i=await qi(e,t,s);return i.warnings.length&&i.warnings.forEach(o=>{this.warn(ar(o,e))}),{code:i.code,map:i.map}}}}}function ar(s,e){let t=s.text;return s.location&&(t+=`
`+oi(e,s.location)),t+`
`}async function Yi(s){let e;return e={...s,getSortedPlugins:void 0,getSortedPluginHooks:void 0},e.plugins=[Gi(),...await Wi(e.template),di(e),Ai(e),gi(e),Ki(e)],e={...e,...Jn(e.plugins)},await Promise.all(e.getSortedPluginHooks("configResolved").map(t=>t(e))),e}async function Wi(s){switch(s){case"vue":return[On(),(await import("./index-C_JRcD-v.js")).default()];case"solid":return[On(),(await import("./index-CuXeNc-v.js")).default()];case"react":return[(await import("./index-DF44d0_h.js")).default()];default:return s}}class Kn{url;id=null;file=null;type;info;meta;importers=new Set;clientImportedModules=new Set;ssrImportedModules=new Set;acceptedHmrDeps=new Set;acceptedHmrExports=null;importedBindings=null;isSelfAccepting;transformResult=null;ssrTransformResult=null;ssrModule=null;ssrError=null;lastHMRTimestamp=0;lastHMRInvalidationReceived=!1;lastInvalidationTimestamp=0;invalidationState;ssrInvalidationState;staticImportedUrls;constructor(e,t=!0){this.url=e,this.type=Cn(e)?"css":"js",t&&(this.isSelfAccepting=!1)}get importedModules(){const e=new Set(this.clientImportedModules);for(const t of this.ssrImportedModules)e.add(t);return e}}class Vi{constructor(e){this.resolveId=e}urlToModuleMap=new Map;idToModuleMap=new Map;etagToModuleMap=new Map;fileToModulesMap=new Map;safeModulesPath=new Set;_unresolvedUrlToModuleMap=new Map;_ssrUnresolvedUrlToModuleMap=new Map;_hasResolveFailedErrorModules=new Set;async getModuleByUrl(e,t){e=Zt(bt(e));const i=this._getUnresolvedUrlToModule(e,t);if(i)return i;const[o]=await this._resolveUrl(e);return this.urlToModuleMap.get(o)}getModuleById(e){return this.idToModuleMap.get(bt(e))}getModulesByFile(e){return this.fileToModulesMap.get(e)}onFileChange(e){const t=this.getModulesByFile(e);if(t){const i=new Set;t.forEach(o=>{this.invalidateModule(o,i)})}}onFileDelete(e){const t=this.getModulesByFile(e);t&&t.forEach(i=>{i.importedModules.forEach(o=>{o.importers.delete(i)})})}invalidateModule(e,t=new Set,i=Date.now(),o=!1,a=!1){const c=e.invalidationState,A=e.ssrInvalidationState;if(a?(e.invalidationState??=e.transformResult??"HARD_INVALIDATED",e.ssrInvalidationState??=e.ssrTransformResult??"HARD_INVALIDATED"):(e.invalidationState="HARD_INVALIDATED",e.ssrInvalidationState="HARD_INVALIDATED"),t.has(e)&&c===e.invalidationState&&A===e.ssrInvalidationState)return;t.add(e),o?(e.lastHMRTimestamp=i,e.lastHMRInvalidationReceived=!1):e.lastInvalidationTimestamp=i;const h=e.transformResult?.etag;h&&this.etagToModuleMap.delete(h),e.transformResult=null,e.ssrTransformResult=null,e.ssrModule=null,e.ssrError=null,e.importers.forEach(w=>{if(!w.acceptedHmrDeps.has(e)){const f=w.staticImportedUrls?.has(e.url)||a;this.invalidateModule(w,t,i,o,f)}}),this._hasResolveFailedErrorModules.delete(e)}invalidateAll(){const e=Date.now(),t=new Set;this.idToModuleMap.forEach(i=>{this.invalidateModule(i,t,e)})}async updateModuleInfo(e,t,i,o,a,c,A,h){e.isSelfAccepting=c;const w=A?e.ssrImportedModules:e.clientImportedModules;let f,S=[],J=new Array(t.size),ie=0;for(const ue of t){const Pe=ie++;typeof ue=="string"?S.push(this.ensureEntryFromUrl(ue,A).then(P=>{P.importers.add(e),J[Pe]=P})):(ue.importers.add(e),J[Pe]=ue)}S.length&&await Promise.all(S);const z=new Set(J);A?e.ssrImportedModules=z:e.clientImportedModules=z,w.forEach(ue=>{!e.clientImportedModules.has(ue)&&!e.ssrImportedModules.has(ue)&&(ue.importers.delete(e),ue.importers.size||(f||(f=new Set)).add(ue))}),S=[],J=new Array(o.size),ie=0;for(const ue of o){const Pe=ie++;typeof ue=="string"?S.push(this.ensureEntryFromUrl(ue,A).then(P=>{J[Pe]=P})):J[Pe]=ue}return S.length&&await Promise.all(S),e.acceptedHmrDeps=new Set(J),e.staticImportedUrls=h,e.acceptedHmrExports=a,e.importedBindings=i,f}async ensureEntryFromUrl(e,t,i=!0){return this._ensureEntryFromUrl(e,t,i)}async _ensureEntryFromUrl(e,t,i=!0,o){e=Zt(bt(e));let a=this._getUnresolvedUrlToModule(e,t);if(a)return a;const c=(async()=>{const[A,h,w]=await this._resolveUrl(e,o);if(a=this.idToModuleMap.get(h),a)this.urlToModuleMap.has(A)||this.urlToModuleMap.set(A,a);else{a=new Kn(A,i),w&&(a.meta=w),this.urlToModuleMap.set(A,a),a.id=h,this.idToModuleMap.set(h,a);const f=a.file=Bt(h);let S=this.fileToModulesMap.get(f);S||(S=new Set,this.fileToModulesMap.set(f,S)),S.add(a)}return this._setUnresolvedUrlToModule(e,a,t),a})();return this._setUnresolvedUrlToModule(e,c,t),c}createFileOnlyEntry(e){e=Jr(e);let t=this.fileToModulesMap.get(e);t||(t=new Set,this.fileToModulesMap.set(e,t));const i=`${ir}${e}`;for(const a of t)if(a.url===i||a.id===e)return a;const o=new Kn(i);return o.file=e,t.add(o),o}async resolveUrl(e,t){e=Zt(bt(e));const i=await this._getUnresolvedUrlToModule(e,t);return i?.id?[i.url,i.id,i.meta]:this._resolveUrl(e)}updateModuleTransformResult(e,t,i){if(i)e.ssrTransformResult=t;else{const o=e.transformResult?.etag;o&&this.etagToModuleMap.delete(o),e.transformResult=t,t?.etag&&this.etagToModuleMap.set(t.etag,e)}}getModuleByEtag(e){return this.etagToModuleMap.get(e)}_getUnresolvedUrlToModule(e,t){return(t?this._ssrUnresolvedUrlToModuleMap:this._unresolvedUrlToModuleMap).get(e)}_setUnresolvedUrlToModule(e,t,i){(i?this._ssrUnresolvedUrlToModuleMap:this._unresolvedUrlToModuleMap).set(e,t)}async _resolveUrl(e,t){const i=t??await this.resolveId(e),o=i?.id||e;if(e!==o&&!e.includes("\0")&&!e.startsWith("virtual:")){const a=Ze.extname(Bt(o));if(a){const c=Bt(e);c.endsWith(a)||(e=c+a+e.slice(c.length))}}return[e,o,i?.meta]}}class zi{route;stack;constructor(){this.route="/",this.stack=[]}use(e,t){let i="/",o;if(typeof e=="function")o=e;else if(typeof e=="string"&&typeof t=="function")i=e,o=t;else throw new Error("Invalid arguments for use function");return i[i.length-1]==="/"&&(i=i.slice(0,-1)),this.stack.push({route:i,handle:o}),this}handle(e,t,i){let o=0,a=Zi(e.url)||"",c="",A=!1,h=this.stack;const w=i;e.originalUrl=e.originalUrl||e.url;function f(S){A&&(e.url=e.url.substring(1),A=!1),c.length!==0&&(e.url=a+c+e.url.substring(a.length),c="");let J=h[o++];if(!J){es(w,S);return}let ie=new URL(e.url).pathname||"/",z=J.route;if(ie.toLowerCase().substring(0,z.length)!==z.toLowerCase())return f(S);let ue=ie.length>z.length&&ie[z.length];if(ue&&ue!=="/"&&ue!==".")return f(S);z.length!==0&&z!=="/"&&(c=z,e.url=a+e.url.substring(a.length+c.length),!a&&e.url[0]!=="/"&&(e.url="/"+e.url,A=!0)),Xi(J.handle,S,e,t,f)}f()}}function Xi(s,e,t,i,o){const a=s.length;let c=e;const A=!!e;try{if(A&&a===4){s(e,t,i,o);return}else if(!A&&a<4){a===3?s(t,i,o):s(t,i);return}}catch(h){c=h}o(c)}function Zi(s){if(s.length===0||s[0]==="/")return;let e=s.indexOf("://");return e!==-1&&s.lastIndexOf("?",e)===-1?s.substring(0,s.indexOf("/",3+e)):void 0}function es(s,e){queueMicrotask(s.bind.apply(s,e))}const ts=Object.freeze({});async function ns(s,e){return new rs(s,e)}class rs{constructor(e,t,i=e.plugins){this.config=e,this.moduleGraph=t,this.plugins=i;const o=Jn(i);this.getSortedPlugins=o.getSortedPlugins,this.getSortedPluginHooks=o.getSortedPluginHooks}_pluginContextMap=new Map;_processesing=new Set;_closed=!1;_moduleNodeToLoadAddedImports=new WeakMap;getSortedPluginHooks;getSortedPlugins;_getPluginContext(e){const t=this._pluginContextMap;if(!t.has(e)){const i=new In(e,this);t.set(e,i)}return t.get(e)}getModuleInfo(e){const t=this.moduleGraph?.getModuleById(e);return t?(t.info||(t.info=new Proxy({id:e,meta:t.meta||ts},{get(i,o){if(o in i)return i[o];if(o!=="then")throw Error(`[vite] The "${o}" property of ModuleInfo is not supported.`)}})),t.info??null):null}_updateModuleLoadAddedImports(e,t){const i=this.moduleGraph?.getModuleById(e);i&&this._moduleNodeToLoadAddedImports.set(i,t)}handleHookPromise(e){if(!e?.then)return e;const t=e;return this._processesing.add(t),t.finally(()=>this._processesing.delete(t))}async hookParallel(e,t,i){const o=[];for(const a of this.getSortedPlugins(e)){const c=a[e];if(!c)continue;const A=$t(c);c.sequential?(await Promise.all(o),o.length=0,await A.apply(t(a),i(a))):o.push(A.apply(t(a),i(a)))}await Promise.all(o)}async buildStart(e){await this.handleHookPromise(this.hookParallel("buildStart",t=>this._getPluginContext(t),()=>[]))}async load(e,t){const i=new cr(this,t);for(const o of this.getSortedPlugins("load")){if(!o.load)continue;i._plugin=o;const a=$t(o.load),c=await this.handleHookPromise(a.call(i,e));if(c!=null)return Ht(c)&&i._updateModuleInfo(e,c),this._updateModuleLoadAddedImports(e,i._addedImports),c}return this._updateModuleLoadAddedImports(e,i._addedImports),null}async resolveId(e,t=Ze.join(this.config.root,"index.html")){const i=new is(this);let o=null,a={id:""};for(const c of this.getSortedPlugins("resolveId")){if(!c.resolveId)continue;const A=$t(c.resolveId),h=await this.handleHookPromise(A.call(i,e,t,{attributes:{},isEntry:!1}));if(h){typeof h=="string"?o=h:(o=h.id,Object.assign(a,h));break}}return o?(a.id=o,a):null}async transform(e,t,i){const o=i?.inMap,a=new ss(this,t,e,o);for(const c of this.getSortedPlugins("transform")){let A;if(!c.transform)continue;const h=$t(c.transform);try{A=await this.handleHookPromise(h.call(a,e,t))}catch(w){a.error(w)}A&&(Ht(A)?A.code!==void 0&&(e=A.code,A.map&&a.sourcemapChain.push(A.map)):e=A)}return{code:e,map:a._getCombinedSourcemap()}}async close(){this._closed||(this._closed=!0,await Promise.allSettled(Array.from(this._processesing)),await this.hookParallel("buildEnd",e=>this._getPluginContext(e),()=>[]))}}class In{constructor(e,t){this._plugin=e,this._container=t}getModuleInfo(e){return this._container.getModuleInfo(e)}_updateModuleInfo(e,{meta:t}){if(t){const i=this.getModuleInfo(e);i&&(i.meta={...i.meta,...t})}}addWatchFile(){}debug(){}emitFile(){}error(e){throw new Error(e)}getFileName(){}getModuleIds(){}info(){}parse(){}async resolve(e,t){return{id:t}}setAssetSource(){}warn(e){}}class is extends In{constructor(e){super(null,e),this._container=e}}class cr extends In{_addedImports=null;originalCode;constructor(e,t){super(null,e),this.originalCode=t}}class ss extends cr{filename;originalCode;originalSourcemap=null;sourcemapChain=[];combinedMap=null;constructor(e,t,i,o){super(e),this.filename=t,this.originalCode=i,o&&this.sourcemapChain.push(o)}_getCombinedSourcemap(){let e=this.combinedMap;if(e&&!("version"in e)&&e.mappings==="")return this.sourcemapChain.length=0,e;for(let t of this.sourcemapChain){if(typeof t=="string"&&(t=JSON.parse(t)),!("version"in t)){if(t.mappings===""){e={mappings:""};break}e=null;break}if(e)e=nr(Bt(this.filename),[t,e]);else{const i=t;i.sources.length===1&&!i.sources[0]?e={...i,sources:[this.filename],sourcesContent:[this.originalCode]}:e=i}}return e!==this.combinedMap&&(this.combinedMap=e,this.sourcemapChain.length=0),this.combinedMap}}async function os(s,e,t){const i=Ze.join(s.root,"/index.html");if(e.includes(i)){const o=Object.assign(cs[s.template],s.importMaps),{template:a}=s;return as(o,a==="vue"?"main.ts":"main.tsx",a)}}function ls(s,e){return async function(i,o,a){const c=i.url&&Bt(i.url);if(Ze.join(s,c),c?.endsWith(".html")){let A;try{return A=await e.transformIndexHtml(c,i.source),o(A)}catch(h){return a(h)}}a()}}const as=(s,e,t)=>`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script type="importmap">
  {
    "imports": ${JSON.stringify(s)}
  }
  <\/script>
  ${t==="react"?`<script type="module">
    import { injectIntoGlobalHook } from "@react-refresh";
    injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => { };
    window.$RefreshSig$ = () => (type) => type;
  <\/script>`:""}
  <script type="module" src="/@hmr/client"><\/script>
  <link href="https://cdn.jsdelivr.net/npm/modern-normalize/modern-normalize.css" rel="stylesheet">
  <script async src="https://cdn.jsdelivr.net/npm/es-module-shims/dist/es-module-shims.js"><\/script>
  ${us}
</head>

<body>
  <div id="root"></div>
  <script type="module" src="./${e}"><\/script>
</body>
</html>
`,cs={react:{react:"https://esm.sh/react?dev","react-dom/client":"https://esm.sh/react-dom/client?dev","react/jsx-dev-runtime":"https://esm.sh/react/jsx-dev-runtime.js?dev","@react-refresh":"https://esm.sh/@vitejs/plugin-react-swc@3.7.0/refresh-runtime.js?dev"},solid:{"solid-js/web":"https://esm.sh/solid-js/web?dev","solid-js":"https://esm.sh/solid-js?dev","solid-js/store":"https://esm.sh/solid-js/store?dev","solid-refresh":"https://esm.sh/solid-refresh?external=solid-js"},vue:{vue:"https://esm.sh/vue/dist/vue.runtime.esm-browser.js?dev"}},us=`<script src="https://cdn.jsdelivr.net/npm/chobitsu"><\/script>
  <script type="module">
    window.parent.postMessage('INITCOMPLETE', '*')

    const sendToDevtools = (message) => {
      window.parent.postMessage(JSON.stringify(message), '*');
    };
    let id = 0;
    const sendToChobitsu = (message) => {
      message.id = 'tmp' + ++id;
      chobitsu.sendRawMessage(JSON.stringify(message));
    };
    chobitsu.setOnMessage((message) => {
      if (message.includes('"id":"tmp')) return;
      window.parent.postMessage(message, '*');
    });
    const firstLocation = location.href
    window.addEventListener('message', ({ data }) => {
      try {
        const { event, value } = data;
        if (event === 'DEV') {
          chobitsu.sendRawMessage(data.data);
        } else if (event === 'LOADED') {
          sendToDevtools({
            method: 'Page.frameNavigated',
            params: {
              frame: {
                id: '1',
                mimeType: 'text/html',
                securityOrigin: location.origin,
                url: firstLocation,
              },
              type: 'Navigation',
            },
          });
          sendToChobitsu({ method: 'Network.enable' });
          sendToDevtools({ method: 'Runtime.executionContextsCleared' });
          sendToChobitsu({ method: 'Runtime.enable' });
          sendToChobitsu({ method: 'Debugger.enable' });
          sendToChobitsu({ method: 'DOMStorage.enable' });
          sendToChobitsu({ method: 'DOM.enable' });
          sendToChobitsu({ method: 'CSS.enable' });
          sendToChobitsu({ method: 'Overlay.enable' });
          sendToDevtools({ method: 'DOM.documentUpdated' });
        }
      } catch (e) {
        console.error(e);
      }
    });
  <\/script>`;function ur(s,e,t){const i=s,o=Date.now(),a=e._pendingRequests.get(i);if(a)return e.moduleGraph.getModuleByUrl(bt(s),!1).then(w=>!w||a.timestamp>w.lastInvalidationTimestamp?a.request:(a.abort(),ur(s,e,t)));const c=fs(s,e,o,t);let A=!1;const h=()=>{A||(e._pendingRequests.delete(i),A=!0)};return e._pendingRequests.set(i,{request:c,timestamp:o,abort:h}),c.finally(h)}async function fs(s,e,t,i){s=bt(s);const{config:o,pluginContainer:a}=e;let c=await e.moduleGraph.getModuleByUrl(s,!1);if(c){const f=await jn(s,c,e,t);if(f)return f}const A=c?void 0:await a.resolveId(s,void 0)??void 0,h=c?.id??A?.id??s;if(c??=e.moduleGraph.getModuleById(h),c){await e.moduleGraph._ensureEntryFromUrl(s,!1,void 0);const f=await jn(s,c,e,t);if(f)return f}return await hs(h,s,e,t,i,c,A)}async function jn(s,e,t,i){const o=e&&await ds(e,i,t);if(o)return o;const a=e&&e.transformResult;if(a)return a}async function hs(s,e,t,i,o,a,c){const{config:A,pluginContainer:h,moduleGraph:w}=t;Bt(s);let f=null,S=null;const J=await h.load(s,o.source);if(J===null)if(o.source)f=o.source;else throw new Error("No source provided");else Ht(J)?(f=J.code,S=J.map):J&&(f=J);if(!f)throw new Error("No source provided");a??=await w._ensureEntryFromUrl(e,!1,void 0,c);const ie=await h.transform(f,s,{inMap:S});ie==null||Ht(ie)&&ie.code==null||(f=ie.code,S=ie.map);let z;typeof S=="string"?z=JSON.parse(S):S?z=S:z=null;const ue={code:f,map:z,etag:await fr(f,{weak:!0})};return i>a.lastInvalidationTimestamp&&w.updateModuleTransformResult(a,ue,!1),ue}async function ds(s,e,t){const i=s.invalidationState;if(s.invalidationState=void 0,!i||i==="HARD_INVALIDATED")return;if(s.transformResult)throw new Error(`Internal server error: Soft-invalidated module "${s.url}" should not have existing transform result`);let o;await vn;const a=i.code,c=new ln(a),[A]=Qn(a,s.id||void 0);for(const w of A){let f=a.slice(w.s,w.e);if(f==="import.meta")continue;const S=f[0]==='"'||f[0]==="'";S&&(f=f.slice(1,-1));const J=bt(f),ie=Zt(J);for(const z of s.clientImportedModules)if(z.url===ie){if(z.lastHMRTimestamp>0){const ue=qr(J,`t=${z.lastHMRTimestamp}`),Pe=S?w.s+1:w.s,P=S?w.e-1:w.e;c.overwrite(Pe,P,ue)}break}}const h=c.toString();return o={...i,code:h,etag:await fr(h,{weak:!0})},e>s.lastInvalidationTimestamp&&t.moduleGraph.updateModuleTransformResult(s,o,!1),o}async function fr(s,e){const i=new TextEncoder().encode(s),o=await crypto.subtle.digest("SHA-1",i),c=Array.from(new Uint8Array(o)).map(A=>A.toString(16).padStart(2,"0")).join("");return`${e.weak?"W/":""}"${c}"`}function As(s){return async function(t,i,o){if(t.method!=="GET")return o();s.config;let a;try{a=decodeURIComponent(bt(t.url))}catch(c){return o(c)}Bt(a);try{if(En(a)||gt(a)){a=gs(wr(a));const c=await ur(a,s,t);if(c)return i(c)}}catch(c){return o(c)}o()}}function gs(s){return/\https?:\/\//.test(s)?s.substring(location.origin.length):s}async function ps(s){const e=await Yi(s),{root:t}=e,i=new zi,o=new Vi(w=>a.resolveId(w,void 0)),a=await ns(e,o),c={app:i,config:e,moduleGraph:o,pluginContainer:a,transformIndexHtml:os.bind(null,e),_pendingRequests:new Map},A=new Proxy(c,{get:(w,f)=>c[f],set:(w,f,S)=>(c[f]=S,!0)});i.use(As(c));const h=[];for(const w of e.getSortedPluginHooks("configureServer"))h.push(await w(A));return h.forEach(w=>w&&w()),i.use(ls(t,c)),await a.buildStart({}),c}const Gt=new Map;async function $n(s,e){let t;try{t=await new Promise((i,o)=>{const a=Gt.get(s);a?a.add({req:s,resolve:i,reject:o}):(Gt.set(s,new Set([{req:s,resolve:i,reject:o}])),self.postMessage({type:e,req:s}))})}catch(i){throw new Error(i)}return Gt.delete(s),t}function ms(s){const e=Gt.get(s.req);e&&e.forEach(t=>{t.resolve(s)})}function ws(s){const e=Gt.get(s);e&&e.forEach(t=>{t.reject(s)})}var Es=`// src/dev/shared/hmr.ts
var HMRContext = class {
  constructor(hmrClient2, ownerPath) {
    this.hmrClient = hmrClient2;
    this.ownerPath = ownerPath;
    if (!hmrClient2.dataMap.has(ownerPath)) {
      hmrClient2.dataMap.set(ownerPath, {});
    }
    const mod = hmrClient2.hotModulesMap.get(ownerPath);
    if (mod) {
      mod.callbacks = [];
    }
    const staleListeners = hmrClient2.ctxToListenersMap.get(ownerPath);
    if (staleListeners) {
      for (const [event, staleFns] of staleListeners) {
        const listeners = hmrClient2.customListenersMap.get(event);
        if (listeners) {
          hmrClient2.customListenersMap.set(
            event,
            listeners.filter((l) => !staleFns.includes(l))
          );
        }
      }
    }
    this.newListeners = /* @__PURE__ */ new Map();
    hmrClient2.ctxToListenersMap.set(ownerPath, this.newListeners);
  }
  newListeners;
  get data() {
    return this.hmrClient.dataMap.get(this.ownerPath);
  }
  accept(deps, callback) {
    if (typeof deps === "function" || !deps) {
      this.acceptDeps([this.ownerPath], ([mod]) => deps?.(mod));
    } else if (typeof deps === "string") {
      this.acceptDeps([deps], ([mod]) => callback?.(mod));
    } else if (Array.isArray(deps)) {
      this.acceptDeps(deps, callback);
    } else {
      throw new Error(\`invalid hot.accept() usage.\`);
    }
  }
  // export names (first arg) are irrelevant on the client side, they're
  // extracted in the server for propagation
  acceptExports(_, callback) {
    this.acceptDeps([this.ownerPath], ([mod]) => callback?.(mod));
  }
  dispose(cb) {
    this.hmrClient.disposeMap.set(this.ownerPath, cb);
  }
  prune(cb) {
    this.hmrClient.pruneMap.set(this.ownerPath, cb);
  }
  // Kept for backward compatibility (#11036)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  decline() {
  }
  invalidate(message) {
    this.hmrClient.notifyListeners("vite:invalidate", {
      path: this.ownerPath,
      message
    });
    this.send("vite:invalidate", { path: this.ownerPath, message });
    this.hmrClient.logger.debug(
      \`[vite] invalidate \${this.ownerPath}\${message ? \`: \${message}\` : ""}\`
    );
  }
  on(event, cb) {
    const addToMap = (map) => {
      const existing = map.get(event) || [];
      existing.push(cb);
      map.set(event, existing);
    };
    addToMap(this.hmrClient.customListenersMap);
    addToMap(this.newListeners);
  }
  off(event, cb) {
    const removeFromMap = (map) => {
      const existing = map.get(event);
      if (existing === void 0) {
        return;
      }
      const pruned = existing.filter((l) => l !== cb);
      if (pruned.length === 0) {
        map.delete(event);
        return;
      }
      map.set(event, pruned);
    };
    removeFromMap(this.hmrClient.customListenersMap);
    removeFromMap(this.newListeners);
  }
  send(event, data) {
    this.hmrClient.messenger.send(
      JSON.stringify({ type: "custom", event, data })
    );
  }
  acceptDeps(deps, callback = () => {
  }) {
    const mod = this.hmrClient.hotModulesMap.get(this.ownerPath) || {
      id: this.ownerPath,
      callbacks: []
    };
    mod.callbacks.push({
      deps,
      fn: callback
    });
    this.hmrClient.hotModulesMap.set(this.ownerPath, mod);
  }
};
var HMRMessenger = class {
  constructor(connection) {
    this.connection = connection;
  }
  queue = [];
  send(message) {
    this.queue.push(message);
    this.flush();
  }
  flush() {
    this.queue.forEach((msg) => this.connection.send(msg));
    this.queue = [];
  }
};
var HMRClient = class {
  constructor(logger, connection, importUpdatedModule2) {
    this.logger = logger;
    this.importUpdatedModule = importUpdatedModule2;
    this.messenger = new HMRMessenger(connection);
  }
  hotModulesMap = /* @__PURE__ */ new Map();
  disposeMap = /* @__PURE__ */ new Map();
  pruneMap = /* @__PURE__ */ new Map();
  dataMap = /* @__PURE__ */ new Map();
  customListenersMap = /* @__PURE__ */ new Map();
  ctxToListenersMap = /* @__PURE__ */ new Map();
  messenger;
  async notifyListeners(event, data) {
    const cbs = this.customListenersMap.get(event);
    if (cbs) {
      await Promise.allSettled(cbs.map((cb) => cb(data)));
    }
  }
  clear() {
    this.hotModulesMap.clear();
    this.disposeMap.clear();
    this.pruneMap.clear();
    this.dataMap.clear();
    this.customListenersMap.clear();
    this.ctxToListenersMap.clear();
  }
  // After an HMR update, some modules are no longer imported on the page
  // but they may have left behind side effects that need to be cleaned up
  // (.e.g style injections)
  async prunePaths(paths) {
    await Promise.all(
      paths.map((path) => {
        const disposer = this.disposeMap.get(path);
        if (disposer) return disposer(this.dataMap.get(path));
      })
    );
    paths.forEach((path) => {
      const fn = this.pruneMap.get(path);
      if (fn) {
        fn(this.dataMap.get(path));
      }
    });
  }
  warnFailedUpdate(err, path) {
    if (!err.message.includes("fetch")) {
      this.logger.error(err);
    }
    this.logger.error(
      \`[hmr] Failed to reload \${path}. This could be due to syntax errors or importing non-existent modules. (see errors above)\`
    );
  }
  updateQueue = [];
  pendingUpdateQueue = false;
  /**
   * buffer multiple hot updates triggered by the same src change
   * so that they are invoked in the same order they were sent.
   * (otherwise the order may be inconsistent because of the http request round trip)
   */
  async queueUpdate(payload) {
    this.updateQueue.push(this.fetchUpdate(payload));
    if (!this.pendingUpdateQueue) {
      this.pendingUpdateQueue = true;
      await Promise.resolve();
      this.pendingUpdateQueue = false;
      const loading = [...this.updateQueue];
      this.updateQueue = [];
      (await Promise.all(loading)).forEach((fn) => fn && fn());
    }
  }
  async fetchUpdate(update) {
    const { path, acceptedPath } = update;
    const mod = this.hotModulesMap.get(path);
    if (!mod) {
      return;
    }
    let fetchedModule;
    const isSelfUpdate = path === acceptedPath;
    const qualifiedCallbacks = mod.callbacks.filter(
      ({ deps }) => deps.includes(acceptedPath)
    );
    if (isSelfUpdate || qualifiedCallbacks.length > 0) {
      const disposer = this.disposeMap.get(acceptedPath);
      if (disposer) await disposer(this.dataMap.get(acceptedPath));
      try {
        fetchedModule = await this.importUpdatedModule(update);
      } catch (e) {
        this.warnFailedUpdate(e, acceptedPath);
      }
    }
    return () => {
      for (const { deps, fn } of qualifiedCallbacks) {
        fn(
          deps.map((dep) => dep === acceptedPath ? fetchedModule : void 0)
        );
      }
      const loggedPath = isSelfUpdate ? path : \`\${acceptedPath} via \${path}\`;
      this.logger.debug(\`[vite] hot updated: \${loggedPath}\`);
    };
  }
};

// src/dev/client/overlay.ts
var hmrConfigName = '';
var base = "/" || "/";
function h(e, attrs = {}, ...children) {
  const elem = document.createElement(e);
  for (const [k, v] of Object.entries(attrs)) {
    elem.setAttribute(k, v);
  }
  elem.append(...children);
  return elem;
}
var templateStyle = (
  /*css*/
  \`
:host {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  --monospace: 'SFMono-Regular', Consolas,
  'Liberation Mono', Menlo, Courier, monospace;
  --red: #ff5555;
  --yellow: #e2aa53;
  --purple: #cfa4ff;
  --cyan: #2dd9da;
  --dim: #c9c9c9;

  --window-background: #181818;
  --window-color: #d8d8d8;
}

.backdrop {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  background: rgba(0, 0, 0, 0.66);
}

.window {
  font-family: var(--monospace);
  line-height: 1.5;
  max-width: 80vw;
  color: var(--window-color);
  box-sizing: border-box;
  margin: 30px auto;
  padding: 2.5vh 4vw;
  position: relative;
  background: var(--window-background);
  border-radius: 6px 6px 8px 8px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  overflow: hidden;
  border-top: 8px solid var(--red);
  direction: ltr;
  text-align: left;
}

pre {
  font-family: var(--monospace);
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  overflow-x: scroll;
  scrollbar-width: none;
}

pre::-webkit-scrollbar {
  display: none;
}

pre.frame::-webkit-scrollbar {
  display: block;
  height: 5px;
}

pre.frame::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

pre.frame {
  scrollbar-width: thin;
}

.message {
  line-height: 1.3;
  font-weight: 600;
  white-space: pre-wrap;
}

.message-body {
  color: var(--red);
}

.plugin {
  color: var(--purple);
}

.file {
  color: var(--cyan);
  margin-bottom: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.frame {
  color: var(--yellow);
}

.stack {
  font-size: 13px;
  color: var(--dim);
}

.tip {
  font-size: 13px;
  color: #999;
  border-top: 1px dotted #999;
  padding-top: 13px;
  line-height: 1.8;
}

code {
  font-size: 13px;
  font-family: var(--monospace);
  color: var(--yellow);
}

.file-link {
  text-decoration: underline;
  cursor: pointer;
}

kbd {
  line-height: 1.5;
  font-family: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: rgb(38, 40, 44);
  color: rgb(166, 167, 171);
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem 0.0625rem 0.1875rem;
  border-style: solid;
  border-color: rgb(54, 57, 64);
  border-image: initial;
}
\`
);
var createTemplate = () => h(
  "div",
  { class: "backdrop", part: "backdrop" },
  h(
    "div",
    { class: "window", part: "window" },
    h(
      "pre",
      { class: "message", part: "message" },
      h("span", { class: "plugin", part: "plugin" }),
      h("span", { class: "message-body", part: "message-body" })
    ),
    h("pre", { class: "file", part: "file" }),
    h("pre", { class: "frame", part: "frame" }),
    h("pre", { class: "stack", part: "stack" }),
    h(
      "div",
      { class: "tip", part: "tip" },
      "Click outside, press ",
      h("kbd", {}, "Esc"),
      " key, or fix the code to dismiss.",
      h("br"),
      "You can also disable this overlay by setting ",
      h("code", { part: "config-option-name" }, "server.hmr.overlay"),
      " to ",
      h("code", { part: "config-option-value" }, "false"),
      " in ",
      h("code", { part: "config-file-name" }, hmrConfigName),
      "."
    )
  ),
  h("style", {}, templateStyle)
);
var fileRE = /(?:[a-zA-Z]:\\\\|\\/).*?:\\d+:\\d+/g;
var codeframeRE = /^(?:>?\\s*\\d+\\s+\\|.*|\\s+\\|\\s*\\^.*)\\r?\\n/gm;
var { HTMLElement = class {
} } = globalThis;
var ErrorOverlay = class extends HTMLElement {
  root;
  closeOnEsc;
  constructor(err, links = true) {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(createTemplate());
    codeframeRE.lastIndex = 0;
    const hasFrame = err.frame && codeframeRE.test(err.frame);
    const message = hasFrame ? err.message.replace(codeframeRE, "") : err.message;
    if (err.plugin) {
      this.text(".plugin", \`[plugin:\${err.plugin}] \`);
    }
    this.text(".message-body", message.trim());
    const [file] = (err.loc?.file || err.id || "unknown file").split(\`?\`);
    if (err.loc) {
      this.text(".file", \`\${file}:\${err.loc.line}:\${err.loc.column}\`, links);
    } else if (err.id) {
      this.text(".file", file);
    }
    if (hasFrame) {
      this.text(".frame", err.frame.trim());
    }
    this.text(".stack", err.stack, links);
    this.root.querySelector(".window").addEventListener("click", (e) => {
      e.stopPropagation();
    });
    this.addEventListener("click", () => {
      this.close();
    });
    this.closeOnEsc = (e) => {
      if (e.key === "Escape" || e.code === "Escape") {
        this.close();
      }
    };
    document.addEventListener("keydown", this.closeOnEsc);
  }
  text(selector, text, linkFiles = false) {
    const el = this.root.querySelector(selector);
    if (!linkFiles) {
      el.textContent = text;
    } else {
      let curIndex = 0;
      let match;
      fileRE.lastIndex = 0;
      while (match = fileRE.exec(text)) {
        const { 0: file, index } = match;
        if (index != null) {
          const frag = text.slice(curIndex, index);
          el.appendChild(document.createTextNode(frag));
          const link = document.createElement("a");
          link.textContent = file;
          link.className = "file-link";
          link.onclick = () => {
            fetch(
              new URL(
                \`\${base}__open-in-editor?file=\${encodeURIComponent(file)}\`,
                import.meta.url
              )
            );
          };
          el.appendChild(link);
          curIndex += frag.length + file.length;
        }
      }
    }
  }
  close() {
    this.parentNode?.removeChild(this);
    document.removeEventListener("keydown", this.closeOnEsc);
  }
};
var overlayId = "vite-error-overlay";
var { customElements } = globalThis;
if (customElements && !customElements.get(overlayId)) {
  customElements.define(overlayId, ErrorOverlay);
}

// src/dev/client/env.ts
var context = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  } else if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
var defines = {};
Object.keys(defines).forEach((key) => {
  const segments = key.split(".");
  let target = context;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (i === segments.length - 1) {
      target[segment] = defines[key];
    } else {
      target = target[segment] || (target[segment] = {});
    }
  }
});

// src/dev/client/client.ts
console.debug("[vite] connecting...");
var base2 = "/" || "/";
var channel;
function getConfig({
  data
}) {
  if (data.type === "HMR_INIT") {
    window.removeEventListener("message", getConfig);
    channel?.close();
    channel = new BroadcastChannel(\`PREVIEW_CHANNEL_\${data.channelId}\`);
    channel.addEventListener("message", async ({ data: data2 }) => {
      handleMessage(data2);
    });
  }
}
if (window.self === window.top) {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.onmessage = getConfig;
    navigator.serviceWorker.controller?.postMessage({ type: "CLIENT_LOAD" });
  }
} else {
  window.addEventListener("message", getConfig);
  window.parent.postMessage({ type: "CLIENT_LOAD" });
}
function cleanUrl(pathname) {
  const url = new URL(pathname, "http://vitejs.dev");
  url.searchParams.delete("direct");
  return url.pathname + url.search;
}
var isFirstUpdate = true;
var outdatedLinkTags = /* @__PURE__ */ new WeakSet();
var debounceReload = (time) => {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      location.reload();
    }, time);
  };
};
var pageReload = debounceReload(50);
var hmrClient = new HMRClient(
  console,
  {
    isReady: () => true,
    send: (message) => {
      channel.postMessage(message);
    }
  },
  async function importUpdatedModule({
    acceptedPath,
    timestamp,
    explicitImportRequired,
    isWithinCircularImport
  }) {
    const [acceptedPathWithoutQuery, query] = acceptedPath.split(\`?\`);
    const importPromise = import(
      /* @vite-ignore */
      base2 + acceptedPathWithoutQuery.slice(1) + \`?\${explicitImportRequired ? "import&" : ""}t=\${timestamp}\${query ? \`&\${query}\` : ""}\`
    );
    if (isWithinCircularImport) {
      importPromise.catch(() => {
        console.info(
          \`[hmr] \${acceptedPath} failed to apply HMR as it's within a circular import. Reloading page to reset the execution order. To debug and break the circular import, you can run \\\`vite --debug hmr\\\` to log the circular dependency path if a file change triggered it.\`
        );
        pageReload();
      });
    }
    return await importPromise;
  }
);
async function handleMessage(payload) {
  switch (payload.type) {
    case "update":
      notifyListeners("vite:beforeUpdate", payload);
      if (hasDocument) {
        if (isFirstUpdate && hasErrorOverlay()) {
          window.location.reload();
          return;
        } else {
          if (enableOverlay) {
            clearErrorOverlay();
          }
          isFirstUpdate = false;
        }
      }
      await Promise.all(
        payload.updates.map(async (update) => {
          if (update.type === "js-update") {
            return hmrClient.queueUpdate(update);
          }
          const { path, timestamp } = update;
          const searchUrl = cleanUrl(path);
          const el = Array.from(
            document.querySelectorAll("link")
          ).find(
            (e) => !outdatedLinkTags.has(e) && cleanUrl(e.href).includes(searchUrl)
          );
          if (!el) {
            return;
          }
          const newPath = \`\${base2}\${searchUrl.slice(1)}\${searchUrl.includes("?") ? "&" : "?"}t=\${timestamp}\`;
          return new Promise((resolve) => {
            const newLinkTag = el.cloneNode();
            newLinkTag.href = new URL(newPath, el.href).href;
            const removeOldEl = () => {
              el.remove();
              console.debug(\`[vite] css hot updated: \${searchUrl}\`);
              resolve();
            };
            newLinkTag.addEventListener("load", removeOldEl);
            newLinkTag.addEventListener("error", removeOldEl);
            outdatedLinkTags.add(el);
            el.after(newLinkTag);
          });
        })
      );
      notifyListeners("vite:afterUpdate", payload);
      break;
    case "custom": {
      notifyListeners(payload.event, payload.data);
      break;
    }
    case "full-reload":
      notifyListeners("vite:beforeFullReload", payload);
      if (hasDocument) {
        if (payload.path && payload.path.endsWith(".html")) {
          const pagePath = decodeURI(location.pathname);
          const payloadPath = base2 + payload.path.slice(1);
          if (pagePath === payloadPath || payload.path === "/index.html" || pagePath.endsWith("/") && pagePath + "index.html" === payloadPath) {
            pageReload();
          }
          return;
        } else {
          pageReload();
        }
      }
      break;
    case "prune":
      notifyListeners("vite:beforePrune", payload);
      await hmrClient.prunePaths(payload.paths);
      break;
    case "error": {
      notifyListeners("vite:error", payload);
      if (hasDocument) {
        const err = payload.err;
        if (enableOverlay) {
          createErrorOverlay(err);
        } else {
          console.error(
            \`[vite] Internal Server Error
\${err.message}
\${err.stack}\`
          );
        }
      }
      break;
    }
    default: {
      const check = payload;
      return check;
    }
  }
}
function notifyListeners(event, data) {
  hmrClient.notifyListeners(event, data);
}
var enableOverlay = true;
var hasDocument = "document" in globalThis;
function createErrorOverlay(err) {
  clearErrorOverlay();
  document.body.appendChild(new ErrorOverlay(err));
}
function clearErrorOverlay() {
  document.querySelectorAll(overlayId).forEach((n) => n.close());
}
function hasErrorOverlay() {
  return document.querySelectorAll(overlayId).length;
}
var sheetsMap = /* @__PURE__ */ new Map();
if ("document" in globalThis) {
  document.querySelectorAll("style[data-vite-dev-id]").forEach((el) => {
    sheetsMap.set(el.getAttribute("data-vite-dev-id"), el);
  });
}
var cspNonce = "document" in globalThis ? document.querySelector("meta[property=csp-nonce]")?.nonce : void 0;
var lastInsertedStyle;
function updateStyle(id, content) {
  let style = sheetsMap.get(id);
  if (!style) {
    style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.setAttribute("data-vite-dev-id", id);
    style.textContent = content;
    if (cspNonce) {
      style.setAttribute("nonce", cspNonce);
    }
    if (!lastInsertedStyle) {
      document.head.appendChild(style);
      setTimeout(() => {
        lastInsertedStyle = void 0;
      }, 0);
    } else {
      lastInsertedStyle.insertAdjacentElement("afterend", style);
    }
    lastInsertedStyle = style;
  } else {
    style.textContent = content;
  }
  sheetsMap.set(id, style);
}
function removeStyle(id) {
  const style = sheetsMap.get(id);
  if (style) {
    document.head.removeChild(style);
    sheetsMap.delete(id);
  }
}
function createHotContext(ownerPath) {
  return new HMRContext(hmrClient, ownerPath);
}
function injectQuery(url, queryToInject) {
  if (url[0] !== "." && url[0] !== "/") {
    return url;
  }
  const pathname = url.replace(/[?#].*$/, "");
  const { search, hash } = new URL(url, "http://vitejs.dev");
  return \`\${pathname}?\${queryToInject}\${search ? \`&\` + search.slice(1) : ""}\${hash || ""}\`;
}
export {
  ErrorOverlay,
  createHotContext,
  injectQuery,
  removeStyle,
  updateStyle
};
`;let _t,Jt;const ys=new TextDecoder,hn=new TextEncoder;self.onmessage=async({data:s,ports:e})=>{s.type==="COMPILER_INIT"&&(Jt=e[0],await Cs(s))};async function Cs(s){const{config:e,channelId:t}=s;_t=new BroadcastChannel(`PREVIEW_CHANNEL_${t}`),Jt&&(Jt.onmessage=async({data:h})=>{switch(h.type){case"FETCH_CODE":{if(h.req.url.includes("/@hmr/client")){const S=hn.encode(Es).buffer;Jt.postMessage({type:"GET_CODE",req:h.req,compiledCode:S},[S]);break}const w=await $n(h.req.url,"FETCH_SOURCE");let f;w.source instanceof ArrayBuffer?f=ys.decode(w.source):f=w.source,await o({...w,source:f,req:h.req});break}}},self.onmessage=async({data:h})=>{switch(h.type){case"GET_SOURCE":case"GET_FILES_NAME":case"GET_TS_FILES":{ms(h);break}case"CHANGE":{await a(h.filename);break}case"ADD":{await c(h.filename,!1);break}case"UNLINK":{await c(h.filename,!0);break}}}),_t.addEventListener("message",async({data:h})=>{switch(h.type){case"CHANNEL_CLOSE":{_t?.name===`PREVIEW_CHANNEL_${h.channelId}`&&(_t?.close(),_t=null);break}case"GET_ERROR":{ws(h.req);break}}}),e.fetchCode=$n;let i;try{i=await ps(e)}catch{}self.postMessage({type:"COMPILER_INIT_COMPLETE"});async function o(h){const{source:w,req:f}=h;i.app.handle({url:f.url,method:f.method,originalUrl:f.url,source:w},S,()=>{});function S(J){let ie;Ht(J)?ie=hn.encode(J.code).buffer:ie=hn.encode(J).buffer,Jt?.postMessage({...h,type:"GET_CODE",compiledCode:ie},[ie])}}async function a(h){i.moduleGraph.onFileChange(h),await A("update",h)}async function c(h,w){w&&(i.moduleGraph.onFileDelete(h),i.config.template==="vue"&&i.config.compiler?.invalidateTypeCache&&i.config.compiler.invalidateTypeCache(h)),await A(w?"delete":"create",h)}async function A(h,w){try{const f=await Ri(h,w,i);f&&_t?.postMessage(f)}catch(f){_t?.postMessage({type:"error",err:f})}}}export{Qn as a,_r as b,vn as c,$n as f,Er as g,gt as i,Jr as n,Ze as p,Vn as r,qi as t};
