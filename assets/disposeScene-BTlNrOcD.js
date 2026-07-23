/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="184",Es={ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yf=0,Uc=1,Mf=2,Ra=1,_h=2,lr=3,qn=0,tn=1,Gn=2,si=0,Ts=1,Nc=2,Fc=3,Oc=4,Sf=5,Ni=100,bf=101,Ef=102,Tf=103,Af=104,wf=200,Rf=201,Cf=202,Pf=203,nl=204,il=205,If=206,Df=207,Lf=208,Uf=209,Nf=210,Ff=211,Of=212,Bf=213,zf=214,sl=0,rl=1,al=2,Rs=3,ol=4,ll=5,cl=6,ul=7,xh=0,kf=1,Vf=2,Xn=0,vh=1,yh=2,Mh=3,uc=4,Sh=5,bh=6,Eh=7,Bc="attached",Hf="detached",Th=300,Bi=301,Cs=302,hr=303,io=304,qa=306,hl=1e3,Dn=1001,fl=1002,we=1003,Gf=1004,Nr=1005,be=1006,so=1007,yi=1008,Je=1009,Na=1010,hc=1011,Ps=1012,As=1013,en=1014,Re=1015,He=1016,fc=1017,dc=1018,gr=1020,Ah=35902,wh=35899,Rh=1021,Ch=1022,Ae=1023,oi=1026,Oi=1027,Mi=1028,Za=1029,dn=1030,vr=1031,Is=1033,Ca=33776,Pa=33777,Ia=33778,Da=33779,dl=35840,pl=35841,ml=35842,gl=35843,_l=36196,xl=37492,vl=37496,yl=37488,Ml=37489,Fa=37490,Sl=37491,bl=37808,El=37809,Tl=37810,Al=37811,wl=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Dl=37817,Ll=37818,Ul=37819,Nl=37820,Fl=37821,Ol=36492,Bl=36494,zl=36495,kl=36283,Vl=36284,Oa=36285,Hl=36286,Ba=2300,Gl=2301,ro=2302,zc=2303,kc=2400,Vc=2401,Hc=2402,Wf=2500,Xf=0,Yf=1,Gc=2,qf=3200,Wl=0,Zf=1,vi="",fn="srgb",xn="srgb-linear",za="linear",me="srgb",Yi=7680,Wc=519,jf=512,Kf=513,$f=514,pc=515,Jf=516,Qf=517,mc=518,td=519,Xl=35044,Yl="300 es",Wn=2e3,_r=2001;function ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){const i=xr("canvas");return i.style.display="block",i}const Xc={};function ka(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ph(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Ph(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=Ph(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ql(...i){const t=i.join(" ");t in Xc||(Xc[t]=!0,zt(...i))}function sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const rd={[sl]:rl,[al]:cl,[ol]:ul,[Rs]:ll,[rl]:sl,[cl]:al,[ul]:ol,[ll]:Rs};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const fr=Math.PI/180,Ds=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function gc(i,t){return(i%t+t)%t}function ad(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function od(i,t,e){return i!==t?(e-i)/(t-i):0}function dr(i,t,e){return(1-e)*i+e*t}function ld(i,t,e,n){return dr(i,t,1-Math.exp(-e*n))}function cd(i,t=1){return t-Math.abs(gc(i,t*2)-t)}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dd(i,t){return i+Math.random()*(t-i)}function pd(i){return i*(.5-Math.random())}function md(i){i!==void 0&&(Yc=i);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gd(i){return i*fr}function _d(i){return i*Ds}function xd(i){return(i&i-1)===0&&i!==0}function vd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Md(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),u=r((t+n)/2),d=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*f,l*h,o*u);break;case"YZY":i.set(l*h,o*d,l*f,o*u);break;case"ZXZ":i.set(l*f,l*h,o*d,o*u);break;case"XZX":i.set(o*d,l*x,l*p,o*u);break;case"YXY":i.set(l*p,o*d,l*x,o*u);break;case"ZYZ":i.set(l*x,l*p,o*d,o*u);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sd={DEG2RAD:fr,RAD2DEG:Ds,generateUUID:Ln,clamp:$t,euclideanModulo:gc,mapLinear:ad,inverseLerp:od,lerp:dr,damp:ld,pingpong:cd,smoothstep:ud,smootherstep:hd,randInt:fd,randFloat:dd,randFloatSpread:pd,seededRandom:md,degToRad:gd,radToDeg:_d,isPowerOfTwo:xd,ceilPowerOfTwo:vd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Md,normalize:ge,denormalize:In},Cc=class Cc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cc.prototype.isVector2=!0;let Wt=Cc;class li{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],u=n[s+1],d=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],x=r[a+2],M=r[a+3];if(f!==M||l!==h||u!==p||d!==x){let g=l*h+u*p+d*x+f*M;g<0&&(h=-h,p=-p,x=-x,M=-M,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),b=Math.sin(y);m=Math.sin(m*y)/b,o=Math.sin(o*y)/b,l=l*m+h*o,u=u*m+p*o,d=d*m+x*o,f=f*m+M*o}else{l=l*m+h*o,u=u*m+p*o,d=d*m+x*o,f=f*m+M*o;const y=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=y,u*=y,d*=y,f*=y}}t[e]=l,t[e+1]=u,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],u=n[s+2],d=n[s+3],f=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+d*f+l*p-u*h,t[e+1]=l*x+d*h+u*f-o*p,t[e+2]=u*x+d*p+o*h-l*f,t[e+3]=d*x-o*f-l*h-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*d*f+u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f-h*p*x;break;case"YXZ":this._x=h*d*f+u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f+h*p*x;break;case"ZXY":this._x=h*d*f-u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f-h*p*x;break;case"ZYX":this._x=h*d*f-u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f+h*p*x;break;case"YZX":this._x=h*d*f+u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f-h*p*x;break;case"XZY":this._x=h*d*f-u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f+h*p*x;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],u=e[2],d=e[6],f=e[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,u=e._z,d=e._w;return this._x=n*d+a*o+s*u-r*l,this._y=s*d+a*l+r*o-n*u,this._z=r*d+a*u+n*l-s*o,this._w=a*d-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,e=Math.sin(e*u)/d,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pc=class Pc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*s-o*n),d=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*u+a*f-o*d,this.y=n+l*d+o*u-r*f,this.z=s+l*f+r*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pc.prototype.isVector3=!0;let B=Pc;const ao=new B,qc=new li,Ic=class Ic{constructor(t,e,n,s,r,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,u)}set(t,e,n,s,r,a,o,l,u){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],d=n[4],f=n[7],h=n[2],p=n[5],x=n[8],M=s[0],g=s[3],m=s[6],y=s[1],b=s[4],E=s[7],R=s[2],T=s[5],P=s[8];return r[0]=a*M+o*y+l*R,r[3]=a*g+o*b+l*T,r[6]=a*m+o*E+l*P,r[1]=u*M+d*y+f*R,r[4]=u*g+d*b+f*T,r[7]=u*m+d*E+f*P,r[2]=h*M+p*y+x*R,r[5]=h*g+p*b+x*T,r[8]=h*m+p*E+x*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8];return e*a*d-e*o*u-n*r*d+n*o*l+s*r*u-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8],f=d*a-o*u,h=o*l-d*r,p=u*r-a*l,x=e*f+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=f*M,t[1]=(s*u-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-u*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-s*u,s*l,-s*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ic.prototype.isMatrix3=!0;let ie=Ic;const oo=new ie,Zc=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bd(){const i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ql("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ql("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:t,whitePoint:n,transfer:za,toXYZ:Zc,fromXYZ:jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Zc,fromXYZ:jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const he=bd();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class Ed{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=xr("canvas")),qi.width=t.width,qi.height=t.height;const s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Td=0;class _c{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let Ad=0;const co=new B;class Ge extends wi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Dn,s=Dn,r=be,a=yi,o=Ae,l=Je,u=Ge.DEFAULT_ANISOTROPY,d=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ln(),this.name="",this.source=new _c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Th;Ge.DEFAULT_ANISOTROPY=1;const Dc=class Dc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],x=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+M)<.1&&Math.abs(x+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(u+1)/2,E=(p+1)/2,R=(m+1)/2,T=(d+h)/4,P=(f+M)/4,v=(x+g)/4;return b>E&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=P/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=v/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-x)*(g-x)+(f-M)*(f-M)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(f-M)/y,this.z=(h-d)/y,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dc.prototype.isVector4=!0;let ye=Dc;class wd extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ge(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _c(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends wd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ih extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rd extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ya=class Ya{constructor(t,e,n,s,r,a,o,l,u,d,f,h,p,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,u,d,f,h,p,x,M,g)}set(t,e,n,s,r,a,o,l,u,d,f,h,p,x,M,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=d,m[10]=f,m[14]=h,m[3]=p,m[7]=x,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*d,p=a*f,x=o*d,M=o*f;e[0]=l*d,e[4]=-l*f,e[8]=u,e[1]=p+x*u,e[5]=h-M*u,e[9]=-o*l,e[2]=M-h*u,e[6]=x+p*u,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,p=l*f,x=u*d,M=u*f;e[0]=h+M*o,e[4]=x*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=p*o-x,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,p=l*f,x=u*d,M=u*f;e[0]=h-M*o,e[4]=-a*f,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*d,e[9]=M-h*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,p=a*f,x=o*d,M=o*f;e[0]=l*d,e[4]=x*u-p,e[8]=h*u+M,e[1]=l*f,e[5]=M*u+h,e[9]=p*u-x,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*u,x=o*l,M=o*u;e[0]=l*d,e[4]=M-h*f,e[8]=x*f+p,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-u*d,e[6]=p*f+x,e[10]=h-M*f}else if(t.order==="XZY"){const h=a*l,p=a*u,x=o*l,M=o*u;e[0]=l*d,e[4]=-f,e[8]=u*d,e[1]=h*f+M,e[5]=a*d,e[9]=p*f-x,e[2]=x*f-p,e[6]=o*d,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cd,t,Pd)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ui.crossVectors(n,un),ui.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ui.crossVectors(n,un)),ui.normalize(),Fr.crossVectors(un,ui),s[0]=ui.x,s[4]=Fr.x,s[8]=un.x,s[1]=ui.y,s[5]=Fr.y,s[9]=un.y,s[2]=ui.z,s[6]=Fr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],d=n[1],f=n[5],h=n[9],p=n[13],x=n[2],M=n[6],g=n[10],m=n[14],y=n[3],b=n[7],E=n[11],R=n[15],T=s[0],P=s[4],v=s[8],w=s[12],L=s[1],I=s[5],F=s[9],z=s[13],k=s[2],O=s[6],V=s[10],q=s[14],ot=s[3],st=s[7],gt=s[11],wt=s[15];return r[0]=a*T+o*L+l*k+u*ot,r[4]=a*P+o*I+l*O+u*st,r[8]=a*v+o*F+l*V+u*gt,r[12]=a*w+o*z+l*q+u*wt,r[1]=d*T+f*L+h*k+p*ot,r[5]=d*P+f*I+h*O+p*st,r[9]=d*v+f*F+h*V+p*gt,r[13]=d*w+f*z+h*q+p*wt,r[2]=x*T+M*L+g*k+m*ot,r[6]=x*P+M*I+g*O+m*st,r[10]=x*v+M*F+g*V+m*gt,r[14]=x*w+M*z+g*q+m*wt,r[3]=y*T+b*L+E*k+R*ot,r[7]=y*P+b*I+E*O+R*st,r[11]=y*v+b*F+E*V+R*gt,r[15]=y*w+b*z+E*q+R*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],u=t[13],d=t[2],f=t[6],h=t[10],p=t[14],x=t[3],M=t[7],g=t[11],m=t[15],y=l*p-u*h,b=o*p-u*f,E=o*h-l*f,R=a*p-u*d,T=a*h-l*d,P=a*f-o*d;return e*(M*y-g*b+m*E)-n*(x*y-g*R+m*T)+s*(x*b-M*R+m*P)-r*(x*E-M*T+g*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8],f=t[9],h=t[10],p=t[11],x=t[12],M=t[13],g=t[14],m=t[15],y=e*o-n*a,b=e*l-s*a,E=e*u-r*a,R=n*l-s*o,T=n*u-r*o,P=s*u-r*l,v=d*M-f*x,w=d*g-h*x,L=d*m-p*x,I=f*g-h*M,F=f*m-p*M,z=h*m-p*g,k=y*z-b*F+E*I+R*L-T*w+P*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return t[0]=(o*z-l*F+u*I)*O,t[1]=(s*F-n*z-r*I)*O,t[2]=(M*P-g*T+m*R)*O,t[3]=(h*T-f*P-p*R)*O,t[4]=(l*L-a*z-u*w)*O,t[5]=(e*z-s*L+r*w)*O,t[6]=(g*E-x*P-m*b)*O,t[7]=(d*P-h*E+p*b)*O,t[8]=(a*F-o*L+u*v)*O,t[9]=(n*L-e*F-r*v)*O,t[10]=(x*T-M*E+m*y)*O,t[11]=(f*E-d*T-p*y)*O,t[12]=(o*w-a*I-l*v)*O,t[13]=(e*I-n*w+s*v)*O,t[14]=(M*b-x*R-g*y)*O,t[15]=(d*R-f*b+h*y)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,u=r*a,d=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,d*o+n,d*l-s*a,0,u*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,u=r+r,d=a+a,f=o+o,h=r*u,p=r*d,x=r*f,M=a*d,g=a*f,m=o*f,y=l*u,b=l*d,E=l*f,R=n.x,T=n.y,P=n.z;return s[0]=(1-(M+m))*R,s[1]=(p+E)*R,s[2]=(x-b)*R,s[3]=0,s[4]=(p-E)*T,s[5]=(1-(h+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(x+b)*P,s[9]=(g-y)*P,s[10]=(1-(h+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const u=1/a,d=1/o,f=1/l;return En.elements[0]*=u,En.elements[1]*=u,En.elements[2]*=u,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Wn,l=!1){const u=this.elements,d=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===Wn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===_r)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Wn,l=!1){const u=this.elements,d=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===Wn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===_r)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ya.prototype.isMatrix4=!0;let te=Ya;const Zi=new B,En=new te,Cd=new B(0,0,0),Pd=new B(1,1,1),ui=new B,Fr=new B,un=new B,Kc=new te,$c=new li;class Ti{constructor(t=0,e=0,n=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Id=0;const Jc=new B,ji=new li,jn=new te,Or=new B,Xs=new B,Dd=new B,Ld=new li,Qc=new B(1,0,0),tu=new B(0,1,0),eu=new B(0,0,1),nu={type:"added"},Ud={type:"removed"},Ki={type:"childadded",child:null},uo={type:"childremoved",child:null};class De extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new B,e=new Ti,n=new li,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new ie}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Qc,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return Jc.copy(t).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qc,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Xs,Or,this.up):jn.lookAt(Or,Xs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ud),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new B(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Br extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nd={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),m=this._getHandJoint(u,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=gc(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=fo(a,r,t+1/3),this.g=fo(a,r,t),this.b=fo(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return he.workingToColorSpace(Ze.copy(this),t),Math.round($t(Ze.r*255,0,255))*65536+Math.round($t(Ze.g*255,0,255))*256+Math.round($t(Ze.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=d,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=fn){he.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,s=Ze.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(zr);const n=dr(hi.h,zr.h,e),s=dr(hi.s,zr.s,e),r=dr(hi.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new se;se.NAMES=Dh;class Fd extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Tn=new B,Kn=new B,po=new B,$n=new B,$i=new B,Ji=new B,iu=new B,mo=new B,go=new B,_o=new B,xo=new ye,vo=new ye,yo=new ye;class je{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Kn.subVectors(n,e),po.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(Kn),l=Tn.dot(po),u=Kn.dot(Kn),d=Kn.dot(po),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(u*l-o*d)*h,x=(a*d-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return xo.setScalar(0),vo.setScalar(0),yo.setScalar(0),xo.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,n),yo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xo,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(yo,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Kn.subVectors(t,e),Tn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Tn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;$i.subVectors(s,n),Ji.subVectors(r,n),mo.subVectors(t,n);const l=$i.dot(mo),u=Ji.dot(mo);if(l<=0&&u<=0)return e.copy(n);go.subVectors(t,s);const d=$i.dot(go),f=Ji.dot(go);if(d>=0&&f<=d)return e.copy(s);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector($i,a);_o.subVectors(t,r);const p=$i.dot(_o),x=Ji.dot(_o);if(x>=0&&p<=x)return e.copy(r);const M=p*u-l*x;if(M<=0&&u>=0&&x<=0)return o=u/(u-x),e.copy(n).addScaledVector(Ji,o);const g=d*x-p*f;if(g<=0&&f-d>=0&&p-x>=0)return iu.subVectors(r,s),o=(f-d)/(f-d+(p-x)),e.copy(s).addScaledVector(iu,o);const m=1/(g+M+h);return a=M*m,o=h*m,e.copy(n).addScaledVector($i,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Fe{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Vr.subVectors(this.max,Ys),Qi.subVectors(t.a,Ys),ts.subVectors(t.b,Ys),es.subVectors(t.c,Ys),fi.subVectors(ts,Qi),di.subVectors(es,ts),Ii.subVectors(Qi,es);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!Mo(e,Qi,ts,es,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Qi,ts,es,Vr))?!1:(Hr.crossVectors(fi,di),e=[Hr.x,Hr.y,Hr.z],Mo(e,Qi,ts,es,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new B,new B,new B,new B,new B,new B,new B,new B],An=new B,kr=new Fe,Qi=new B,ts=new B,es=new B,fi=new B,di=new B,Ii=new B,Ys=new B,Vr=new B,Hr=new B,Di=new B;function Mo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),u=e.dot(Di),d=n.dot(Di);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const ni=Od();function Od(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const u=l-127;u<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):u<-14?(n[l]=1024>>-u-14,n[l|256]=1024>>-u-14|32768,s[l]=-u-1,s[l|256]=-u-1):u<=15?(n[l]=u+15<<10,n[l|256]=u+15<<10|32768,s[l]=13,s[l|256]=13):u<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,d=0;for(;!(u&8388608);)u<<=1,d-=8388608;u&=-8388609,d+=947912704,r[l]=u|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Bd(i){Math.abs(i)>65504&&zt("DataUtils.toHalfFloat(): Value out of range."),i=$t(i,-65504,65504),ni.floatView[0]=i;const t=ni.uint32View[0],e=t>>23&511;return ni.baseTable[e]+((t&8388607)>>ni.shiftTable[e])}function zd(i){const t=i>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[t]+(i&1023)]+ni.exponentTable[t],ni.floatView[0]}class Pn{static toHalfFloat(t){return Bd(t)}static fromHalfFloat(t){return zd(t)}}const Ue=new B,Gr=new Wt;let kd=0;class We extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Re,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Lh extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uh extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xe extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Vd=new Fe,qs=new B,So=new B;class Zn{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);const e=qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(So)),this.expandByPoint(qs.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Hd=0;const _n=new te,bo=new De,ns=new B,hn=new Fe,Zs=new Fe,Ve=new B;class ln extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ed(t)?Uh:Lh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(hn.min,Zs.min),hn.expandByPoint(Ve),Ve.addVectors(hn.max,Zs.max),hn.expandByPoint(Ve)):(hn.expandByPoint(Zs.min),hn.expandByPoint(Zs.max))}hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Ve.fromBufferAttribute(o,u),l&&(ns.fromBufferAttribute(t,u),Ve.add(ns)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new B,l[v]=new B;const u=new B,d=new B,f=new B,h=new Wt,p=new Wt,x=new Wt,M=new B,g=new B;function m(v,w,L){u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,L),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,L),d.sub(u),f.sub(u),p.sub(h),x.sub(h);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(I),o[v].add(M),o[w].add(M),o[L].add(M),l[v].add(g),l[w].add(g),l[L].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,w=y.length;v<w;++v){const L=y[v],I=L.start,F=L.count;for(let z=I,k=I+F;z<k;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new B,E=new B,R=new B,T=new B;function P(v){R.fromBufferAttribute(s,v),T.copy(R);const w=o[v];b.copy(w),b.sub(R.multiplyScalar(R.dot(w))).normalize(),E.crossVectors(T,w);const I=E.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,I)}for(let v=0,w=y.length;v<w;++v){const L=y[v],I=L.start,F=L.count;for(let z=I,k=I+F;z<k;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,u=new B,d=new B,f=new B;if(t)for(let h=0,p=t.count;h<p;h+=3){const x=t.getX(h+0),M=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,g),o.add(d),l.add(d),u.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const u=o.array,d=o.itemSize,f=o.normalized,h=new u.constructor(l.length*d);let p=0,x=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let m=0;m<d;m++)h[x++]=u[p++]}return new We(h,d,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=t(l,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const u in s){const d=s[u];this.setAttribute(u,d.clone(e))}const r=t.morphAttributes;for(const u in r){const d=[],f=r[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,d=a.length;u<d;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new B;class Nh{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Nh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Gd=0;class ki extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Ts,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qn=new B,Eo=new B,Wr=new B,pi=new B,To=new B,Xr=new B,Ao=new B;class Ns{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eo.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=pi.dot(this.direction),l=-pi.dot(Wr),u=pi.lengthSq(),d=Math.abs(1-a*a);let f,h,p,x;if(d>0)if(f=a*l-o,h=a*o-l,x=r*d,f>=0)if(h>=-x)if(h<=x){const M=1/d;f*=M,h*=M,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+u):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Eo).addScaledVector(Wr,h),p}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(t.min.x-h.x)*u,s=(t.max.x-h.x)*u):(n=(t.max.x-h.x)*u,s=(t.min.x-h.x)*u),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){To.subVectors(e,t),Xr.subVectors(n,t),Ao.crossVectors(To,Xr);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);const l=o*this.direction.dot(Xr.crossVectors(pi,Xr));if(l<0)return null;const u=o*this.direction.dot(To.cross(pi));if(u<0||l+u>a)return null;const d=-o*pi.dot(Ao);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fh extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const su=new te,Li=new Ns,Yr=new Zn,ru=new B,qr=new B,Zr=new B,jr=new B,wo=new B,Kr=new B,au=new B,$r=new B;class Sn extends De{constructor(t=new ln,e=new Fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const d=o[l],f=r[l];d!==0&&(wo.fromBufferAttribute(f,t),a?Kr.addScaledVector(wo,d):Kr.addScaledVector(wo.sub(e),d))}e.add(Kr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Yr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Yr,ru)===null||Li.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),Li.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){const g=h[x],m=a[g.materialIndex],y=Math.max(g.start,p.start),b=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=y,R=b;E<R;E+=3){const T=o.getX(E),P=o.getX(E+1),v=o.getX(E+2);s=Jr(this,m,t,n,u,d,f,T,P,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=x,m=M;g<m;g+=3){const y=o.getX(g),b=o.getX(g+1),E=o.getX(g+2);s=Jr(this,a,t,n,u,d,f,y,b,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){const g=h[x],m=a[g.materialIndex],y=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=y,R=b;E<R;E+=3){const T=E,P=E+1,v=E+2;s=Jr(this,m,t,n,u,d,f,T,P,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=x,m=M;g<m;g+=3){const y=g,b=g+1,E=g+2;s=Jr(this,a,t,n,u,d,f,y,b,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Wd(i,t,e,n,s,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===qn,o),l===null)return null;$r.copy(o),$r.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo($r);return u<e.near||u>e.far?null:{distance:u,point:$r.clone(),object:i}}function Jr(i,t,e,n,s,r,a,o,l,u){i.getVertexPosition(o,qr),i.getVertexPosition(l,Zr),i.getVertexPosition(u,jr);const d=Wd(i,t,e,n,qr,Zr,jr,au);if(d){const f=new B;je.getBarycoord(au,qr,Zr,jr,f),s&&(d.uv=je.getInterpolatedAttribute(s,o,l,u,f,new Wt)),r&&(d.uv1=je.getInterpolatedAttribute(r,o,l,u,f,new Wt)),a&&(d.normal=je.getInterpolatedAttribute(a,o,l,u,f,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new B,materialIndex:0};je.getNormal(qr,Zr,jr,h.normal),d.face=h,d.barycoord=f}return d}const js=new ye,ou=new ye,lu=new ye,Xd=new ye,cu=new te,Qr=new B,Ro=new Zn,uu=new te,Co=new Ns;class Gy extends Sn{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bc,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fe),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qr),this.boundingSphere.expandByPoint(Qr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(s),t.ray.intersectsSphere(Ro)!==!1&&(uu.copy(s).invert(),Co.copy(t.ray).applyMatrix4(uu),!(this.boundingBox!==null&&Co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Co)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ye,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Bc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():zt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ou.fromBufferAttribute(s.attributes.skinIndex,t),lu.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(js.copy(e),e.set(0,0,0,0)):(js.set(...e,1),e.set(0,0,0)),js.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=lu.getComponent(r);if(a!==0){const o=ou.getComponent(r);cu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Xd.copy(js).applyMatrix4(cu),a)}}return e.isVector4&&(e.w=js.w),e.applyMatrix4(this.bindMatrixInverse)}}class Yd extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zi extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,u=we,d=we,f,h){super(null,a,o,l,u,d,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=new te,qd=new te;class Oh{constructor(t=[],e=[]){this.uuid=Ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){zt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:qd;hu.multiplyMatrices(o,e[r]),hu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Oh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new zi(e,t,t,Ae,Re);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(zt("Skeleton: No bone found with UUID:",r),a=new Yd),this.bones.push(a),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class fu extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const is=new te,du=new te,ta=[],pu=new Fe,Zd=new te,Ks=new Sn,$s=new Zn;class Wy extends Sn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fu(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),pu.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(pu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),$s.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),du.multiplyMatrices(n,is),Ks.matrixWorld=du,Ks.raycast(t,ta);for(let a=0,o=ta.length;a<o;a++){const l=ta[a];l.instanceId=r,l.object=this,e.push(l)}ta.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zi(new Float32Array(s*this.count),s,this.count,Mi,Re));const r=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Po=new B,jd=new B,Kd=new ie;class Vn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Po.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kd.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Zn,$d=new Wt(.5,.5),ea=new B;class vc{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],u=r[3],d=r[4],f=r[5],h=r[6],p=r[7],x=r[8],M=r[9],g=r[10],m=r[11],y=r[12],b=r[13],E=r[14],R=r[15];if(s[0].setComponents(u-a,p-d,m-x,R-y).normalize(),s[1].setComponents(u+a,p+d,m+x,R+y).normalize(),s[2].setComponents(u+o,p+f,m+M,R+b).normalize(),s[3].setComponents(u-o,p-f,m-M,R-b).normalize(),n)s[4].setComponents(l,h,g,E).normalize(),s[5].setComponents(u-l,p-h,m-g,R-E).normalize();else if(s[4].setComponents(u-l,p-h,m-g,R-E).normalize(),e===Wn)s[5].setComponents(u+l,p+h,m+g,R+E).normalize();else if(e===_r)s[5].setComponents(l,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=$d.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ea.x=s.normal.x>0?t.max.x:t.min.x,ea.y=s.normal.y>0?t.max.y:t.min.y,ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Va=new B,Ha=new B,mu=new te,Js=new Ns,na=new Zn,Io=new B,gu=new B;class zh extends De{constructor(t=new ln,e=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Va.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Va.distanceTo(Ha);t.setAttribute("lineDistance",new Xe(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;mu.copy(s).invert(),Js.copy(t.ray).applyMatrix4(mu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let M=p,g=x-1;M<g;M+=u){const m=d.getX(M),y=d.getX(M+1),b=ia(this,t,Js,l,m,y,M);b&&e.push(b)}if(this.isLineLoop){const M=d.getX(x-1),g=d.getX(p),m=ia(this,t,Js,l,M,g,x-1);m&&e.push(m)}}else{const p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let M=p,g=x-1;M<g;M+=u){const m=ia(this,t,Js,l,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){const M=ia(this,t,Js,l,x-1,p,x-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ia(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Va.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),e.distanceSqToSegment(Va,Ha,Io,gu)>n)return;Io.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Io);if(!(u<t.near||u>t.far))return{distance:u,point:gu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const _u=new B,xu=new B;class Jd extends zh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_u.fromBufferAttribute(e,s),xu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_u.distanceTo(xu);t.setAttribute("lineDistance",new Xe(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xy extends zh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Qd extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vu=new te,Zl=new Ns,sa=new Zn,ra=new B;class Yy extends De{constructor(t=new ln,e=new Qd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;vu.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=h,M=p;x<M;x++){const g=u.getX(x);ra.fromBufferAttribute(f,g),yu(ra,g,l,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=h,M=p;x<M;x++)ra.fromBufferAttribute(f,x),yu(ra,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yu(i,t,e,n,s,r,a){const o=Zl.distanceSqToPoint(i);if(o<e){const l=new B;Zl.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class qy extends Ge{constructor(t,e,n,s,r,a,o,l,u,d,f,h){super(null,a,o,l,u,d,s,r,f,h),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class kh extends Ge{constructor(t=[],e=Bi,n,s,r,a,o,l,u,d){super(t,e,n,s,r,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ls extends Ge{constructor(t,e,n=en,s,r,a,o=we,l=we,u,d=oi,f=1){if(d!==oi&&d!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _c(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class tp extends Ls{constructor(t,e=en,n=Bi,s,r,a=we,o=we,l,u=oi){const d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Vh extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yr extends ln{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],d=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function x(M,g,m,y,b,E,R,T,P,v,w){const L=E/P,I=R/v,F=E/2,z=R/2,k=T/2,O=P+1,V=v+1;let q=0,ot=0;const st=new B;for(let gt=0;gt<V;gt++){const wt=gt*I-z;for(let St=0;St<O;St++){const Ot=St*L-F;st[M]=Ot*y,st[g]=wt*b,st[m]=k,u.push(st.x,st.y,st.z),st[M]=0,st[g]=0,st[m]=T>0?1:-1,d.push(st.x,st.y,st.z),f.push(St/P),f.push(1-gt/v),q+=1}}for(let gt=0;gt<v;gt++)for(let wt=0;wt<P;wt++){const St=h+wt+O*gt,Ot=h+wt+O*(gt+1),re=h+(wt+1)+O*(gt+1),Xt=h+(wt+1)+O*gt;l.push(St,Ot,Xt),l.push(Ot,re,Xt),ot+=6}o.addGroup(p,ot,w),p+=ot,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hh extends ln{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],h=[],p=[];let x=0;const M=[],g=n/2;let m=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(p,2));function y(){const E=new B,R=new B;let T=0;const P=(e-t)/n;for(let v=0;v<=r;v++){const w=[],L=v/r,I=L*(e-t)+t;for(let F=0;F<=s;F++){const z=F/s,k=z*l+o,O=Math.sin(k),V=Math.cos(k);R.x=I*O,R.y=-L*n+g,R.z=I*V,f.push(R.x,R.y,R.z),E.set(O,P,V).normalize(),h.push(E.x,E.y,E.z),p.push(z,1-L),w.push(x++)}M.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){const L=M[w][v],I=M[w+1][v],F=M[w+1][v+1],z=M[w][v+1];(t>0||w!==0)&&(d.push(L,I,z),T+=3),(e>0||w!==r-1)&&(d.push(I,F,z),T+=3)}u.addGroup(m,T,0),m+=T}function b(E){const R=x,T=new Wt,P=new B;let v=0;const w=E===!0?t:e,L=E===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,g*L,0),h.push(0,L,0),p.push(.5,.5),x++;const I=x;for(let F=0;F<=s;F++){const k=F/s*l+o,O=Math.cos(k),V=Math.sin(k);P.x=w*V,P.y=g*L,P.z=w*O,f.push(P.x,P.y,P.z),h.push(0,L,0),T.x=O*.5+.5,T.y=V*.5*L+.5,p.push(T.x,T.y),x++}for(let F=0;F<s;F++){const z=R+F,k=I+F;E===!0?d.push(k,k+1,z):d.push(k+1,k,z),v+=3}u.addGroup(m,v,E===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gh extends ln{constructor(t=[new Wt(0,-.5),new Wt(.5,0),new Wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$t(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],u=[],d=1/e,f=new B,h=new Wt,p=new B,x=new B,M=new B;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-g,p.z=m*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-g,p.z=m*0,x.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(x)}for(let y=0;y<=e;y++){const b=n+y*d*s,E=Math.sin(b),R=Math.cos(b);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*E,f.y=t[T].y,f.z=t[T].x*R,a.push(f.x,f.y,f.z),h.x=y/e,h.y=T/(t.length-1),o.push(h.x,h.y);const P=l[3*T+0]*E,v=l[3*T+1],w=l[3*T+0]*R;u.push(P,v,w)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){const E=b+y*t.length,R=E,T=E+t.length,P=E+t.length+1,v=E+1;r.push(R,T,v),r.push(P,v,T)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gh(t.points,t.segments,t.phiStart,t.phiLength)}}class ja extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),u=o+1,d=l+1,f=t/o,h=e/l,p=[],x=[],M=[],g=[];for(let m=0;m<d;m++){const y=m*h-a;for(let b=0;b<u;b++){const E=b*f-r;x.push(E,-y,0),M.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const b=y+u*m,E=y+u*(m+1),R=y+1+u*(m+1),T=y+1+u*m;p.push(b,E,T),p.push(E,R,T)}this.setIndex(p),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(M,3)),this.setAttribute("uv",new Xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.width,t.height,t.widthSegments,t.heightSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Mu(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Mu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function Mu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ep(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const np={clone:Us,merge:$e};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rp extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ap extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class op extends ap{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class lp extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cp extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function aa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function up(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Su(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function Xh(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}class Mr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hp extends Mr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=t,o=2*e-n;break;case Hc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:a=t,l=2*n-e;break;case Hc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}const u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-o),this._weightNext=u/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),M=x*x,g=M*x,m=-h*g+2*h*M-h*x,y=(1+h)*g+(-1.5-2*h)*M+(-.5+h)*x+1,b=(-1-p)*g+(1.5+p)*M+.5*x,E=p*g-p*M;for(let R=0;R!==o;++R)r[R]=m*a[d+R]+y*a[u+R]+b*a[l+R]+E*a[f+R];return r}}class fp extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,d=(n-e)/(s-e),f=1-d;for(let h=0;h!==o;++h)r[h]=a[u+h]*f+a[l+h]*d;return r}}class dp extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class pp extends Mr{interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,d=this.settings||this.DefaultSettings_,f=d.inTangents,h=d.outTangents;if(!f||!h){const M=(n-e)/(s-e),g=1-M;for(let m=0;m!==o;++m)r[m]=a[u+m]*g+a[l+m]*M;return r}const p=o*2,x=t-1;for(let M=0;M!==o;++M){const g=a[u+M],m=a[l+M],y=x*p+M*2,b=h[y],E=h[y+1],R=t*p+M*2,T=f[R],P=f[R+1];let v=(n-e)/(s-e),w,L,I,F,z;for(let k=0;k<8;k++){w=v*v,L=w*v,I=1-v,F=I*I,z=F*I;const V=z*e+3*F*v*b+3*I*w*T+L*s-n;if(Math.abs(V)<1e-10)break;const q=3*F*(b-e)+6*I*v*(T-b)+3*w*(s-T);if(Math.abs(q)<1e-10)break;v=v-V/q,v=Math.max(0,Math.min(1,v))}r[M]=z*g+3*F*v*E+3*I*w*P+L*m}return r}}class Fn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=aa(e,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:aa(t.times,Array),values:aa(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new pp(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Ba:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case ro:e=this.InterpolantFactoryMethodSmooth;break;case zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return ro;case this.InterpolantFactoryMethodBezier:return zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&nd(s))for(let o=0,l=s.length;o!==l;++o){const u=s[o];if(isNaN(u)){Zt("KeyframeTrack: Value is not a valid number.",this,o,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ro,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const u=t[o],d=t[o+1];if(u!==d&&(o!==1||u!==t[0]))if(s)l=!0;else{const f=o*n,h=f-n,p=f+n;for(let x=0;x!==n;++x){const M=e[f+x];if(M!==e[h+x]||M!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const f=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,u=0;u!==n;++u)e[l+u]=e[o+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Gl;class Fs extends Fn{constructor(t,e,n){super(t,e,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Ba;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Yh extends Fn{constructor(t,e,n,s){super(t,e,n,s)}}Yh.prototype.ValueTypeName="color";class Ga extends Fn{constructor(t,e,n,s){super(t,e,n,s)}}Ga.prototype.ValueTypeName="number";class mp extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e);let u=t*o;for(let d=u+o;u!==d;u+=4)li.slerpFlat(r,0,a,u-o,a,u,l);return r}}class Ka extends Fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new mp(this.times,this.values,this.getValueSize(),t)}}Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Fn{constructor(t,e,n){super(t,e,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Ba;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Wa extends Fn{constructor(t,e,n,s){super(t,e,n,s)}}Wa.prototype.ValueTypeName="vector";class Zy{constructor(t="",e=-1,n=[],s=Wf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(_p(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],u=[];l.push((o+r-1)%r,o,(o+1)%r),u.push(0,1,0);const d=up(l);l=Su(l,1,d),u=Su(u,1,d),!s&&l[0]===0&&(l.push(r),u.push(u[0])),a.push(new Ga(".morphTargetInfluences["+e[o].name+"]",l,u).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const u=t[o],d=u.name.match(r);if(d&&d.length>1){const f=d[1];let h=s[f];h||(s[f]=h=[]),h.push(u)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(zt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Zt("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,x,M){if(p.length!==0){const g=[],m=[];Xh(p,g,m,x),g.length!==0&&M.push(new f(h,g,m))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const u=t.hierarchy||[];for(let f=0;f<u.length;f++){const h=u[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let x;for(x=0;x<h.length;x++)if(h[x].morphTargets)for(let M=0;M<h[x].morphTargets.length;M++)p[h[x].morphTargets[M]]=-1;for(const M in p){const g=[],m=[];for(let y=0;y!==h[x].morphTargets.length;++y){const b=h[x];g.push(b.time),m.push(b.morphTarget===M?1:0)}s.push(new Ga(".morphTargetInfluence["+M+"]",g,m))}l=p.length*a}else{const p=".bones["+e[f].name+"]";n(Wa,p+".position",h,"pos",s),n(Ka,p+".quaternion",h,"rot",s),n(Wa,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function gp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ga;case"vector":case"vector2":case"vector3":case"vector4":return Wa;case"color":return Yh;case"quaternion":return Ka;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _p(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=gp(i.type);if(i.times===void 0){const e=[],n=[];Xh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const ii={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(bu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!bu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function bu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class xp{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){const f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],x=u[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vp=new xp;class Bs{constructor(t){this.manager=t!==void 0?t:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class yp extends Error{constructor(t,e){super(t),this.response=e}}class Mp extends Bs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ii.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:s});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const d=ti[t],f=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=h?parseInt(h):0,x=p!==0;let M=0;const g=new ReadableStream({start(m){y();function y(){f.read().then(({done:b,value:E})=>{if(b)m.close();else{M+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:p});for(let T=0,P=d.length;T<P;T++){const v=d[T];v.onProgress&&v.onProgress(R)}m.enqueue(E),y()}},b=>{m.error(b)})}}});return new Response(g)}else throw new yp(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return u.json();default:if(o==="")return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(x=>p.decode(x))}}}).then(u=>{ii.add(`file:${t}`,u);const d=ti[t];delete ti[t];for(let f=0,h=d.length;f<h;f++){const p=d[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const d=ti[t];if(d===void 0)throw this.manager.itemError(t),u;delete ti[t];for(let f=0,h=d.length;f<h;f++){const p=d[f];p.onError&&p.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ss=new WeakMap;class Sp extends Bs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=ss.get(a);f===void 0&&(f=[],ss.set(a,f)),f.push({onLoad:e,onError:s})}return a}const o=xr("img");function l(){d(),e&&e(this);const f=ss.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}ss.delete(this),r.manager.itemEnd(t)}function u(f){d(),s&&s(f),ii.remove(`image:${t}`);const h=ss.get(this)||[];for(let p=0;p<h.length;p++){const x=h[p];x.onError&&x.onError(f)}ss.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ii.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class qh extends Bs{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new zi,o=new Mp(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let u;try{u=r.parse(l)}catch(d){s!==void 0?s(d):Zt(d);return}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:Dn,a.wrapT=u.wrapT!==void 0?u.wrapT:Dn,a.magFilter=u.magFilter!==void 0?u.magFilter:be,a.minFilter=u.minFilter!==void 0?u.minFilter:be,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=yi),u.mipmapCount===1&&(a.minFilter=be),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,e&&e(a,u)},n,s),a}}class jy extends Bs{constructor(t){super(t)}load(t,e,n,s){const r=new Ge,a=new Sp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Sr extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class bp extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Do=new te,Eu=new B,Tu=new B;class yc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eu),Tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tu),e.updateMatrixWorld(),Do.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===_r||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Do)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new B,la=new li,zn=new B;class Zh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,la,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(oa,la,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mi=new B,Au=new Wt,wu=new Wt;class an extends Zh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Au,wu),e.subVectors(wu,Au)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ep extends yc{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ds*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ky extends Sr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ep}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Tp extends yc{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}}class $y extends Sr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Mc extends Zh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ap extends yc{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lo extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Ap}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class wp extends Sr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jy{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Uo=new WeakMap;class Qy extends Bs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&zt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&zt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(u=>{Uo.has(a)===!0?(s&&s(Uo.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(u),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){ii.add(`image-bitmap:${t}`,u),e&&e(u),r.manager.itemEnd(t)}).catch(function(u){s&&s(u),Uo.set(l,u),ii.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});ii.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const rs=-90,as=1;class Rp extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(rs,as,t,e);s.layers=this.layers,this.add(s);const r=new an(rs,as,t,e);r.layers=this.layers,this.add(r);const a=new an(rs,as,t,e);a.layers=this.layers,this.add(a);const o=new an(rs,as,t,e);o.layers=this.layers,this.add(o);const l=new an(rs,as,t,e);l.layers=this.layers,this.add(l);const u=new an(rs,as,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const u of e)this.remove(u);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,d]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,h,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Cp extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Sc="\\[\\]\\.:\\/",Pp=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",Ip="[^"+Sc.replace("\\.","")+"]",Dp=/((?:WC+[\/:])*)/.source.replace("WC",bc),Lp=/(WCOD+)?/.source.replace("WCOD",Ip),Up=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Fp=new RegExp("^"+Dp+Lp+Up+Np+"$"),Op=["material","materials","bones","map"];class Bp{constructor(t,e,n){const s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class _e{constructor(t,e,n){this.path=e,this.parsedPath=n||_e.parseTrackName(e),this.node=_e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new _e.Composite(t,e,n):new _e(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pp,"")}static parseTrackName(t){const e=Fp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Op.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=_e.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const a=t[s];if(a===void 0){const u=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_e.Composite=Bp;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ru=new te;class tM{constructor(t,e,n=0,s=1/0){this.ray=new Ns(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ru.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(t,e=!0,n=[]){return jl(t,this,n,e),n.sort(Cu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)jl(t[s],this,n,e);return n.sort(Cu),n}}function Cu(i,t){return i.distance-t.distance}function jl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)jl(r[a],t,e,!0)}}class Pu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lc=class Lc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Lc.prototype.isMatrix2=!0;let Iu=Lc;const Du=new B,ca=new B,os=new B,ls=new B,No=new B,zp=new B,kp=new B;class ai{constructor(t=new B,e=new B){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Du.subVectors(t,this.start),ca.subVectors(this.end,this.start);const n=ca.dot(ca);if(n===0)return 0;let r=ca.dot(Du)/n;return e&&(r=$t(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=zp,n=kp){const s=10000000000000001e-32;let r,a;const o=this.start,l=t.start,u=this.end,d=t.end;os.subVectors(u,o),ls.subVectors(d,l),No.subVectors(o,l);const f=os.dot(os),h=ls.dot(ls),p=ls.dot(No);if(f<=s&&h<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(f<=s)r=0,a=p/h,a=$t(a,0,1);else{const x=os.dot(No);if(h<=s)a=0,r=$t(-x/f,0,1);else{const M=os.dot(ls),g=f*h-M*M;g!==0?r=$t((M*p-x*h)/g,0,1):r=0,a=(M*r+p)/h,a<0?(a=0,r=$t(-x/f,0,1)):a>1&&(a=1,r=$t((M-x)/f,0,1))}}return e.copy(o).addScaledVector(os,r),n.copy(l).addScaledVector(ls,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const ua=new Fe;class eM extends Jd{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new ln;r.setIndex(new We(n,1)),r.setAttribute("position",new We(s,3)),super(r,new Bh({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ua.setFromObject(this.object),ua.isEmpty())return;const t=ua.min,e=ua.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vp extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){zt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Lu(i,t,e,n){const s=Hp(n);switch(e){case Rh:return i*t;case Mi:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case dn:return i*t*2/s.components*s.byteLength;case vr:return i*t*2/s.components*s.byteLength;case Ch:return i*t*3/s.components*s.byteLength;case Ae:return i*t*4/s.components*s.byteLength;case Is:return i*t*4/s.components*s.byteLength;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case dl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case _l:case xl:case yl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vl:case Fa:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ol:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hp(i){switch(i){case Je:case Na:return{byteLength:1,components:1};case Ps:case hc:case He:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case en:case As:case Re:return{byteLength:4,components:1};case Ah:case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gp(i){const t=new WeakMap;function e(o,l){const u=o.array,d=o.usage,f=u.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,u,d),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,u){const d=l.array,f=l.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,d);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],M=f[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const M=f[p];i.bufferSubData(u,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,im=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:Yp,alphamap_pars_fragment:qp,alphatest_fragment:Zp,alphatest_pars_fragment:jp,aomap_fragment:Kp,aomap_pars_fragment:$p,batching_pars_vertex:Jp,batching_vertex:Qp,begin_vertex:tm,beginnormal_vertex:em,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:um,color_pars_vertex:hm,color_vertex:fm,common:dm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:_m,emissivemap_fragment:xm,emissivemap_pars_fragment:vm,colorspace_fragment:ym,colorspace_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Em,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:Am,fog_vertex:wm,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Dm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Gm,lights_fragment_maps:Wm,lights_fragment_end:Xm,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Km,map_fragment:$m,map_pars_fragment:Jm,map_particle_fragment:Qm,map_particle_pars_fragment:tg,metalnessmap_fragment:eg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:ag,morphtarget_vertex:og,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:ug,normal_pars_vertex:hg,normal_vertex:fg,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:_g,opaque_fragment:xg,packing:vg,premultiplied_alpha_fragment:yg,project_vertex:Mg,dithering_fragment:Sg,dithering_pars_fragment:bg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:wg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Cg,skinbase_vertex:Pg,skinning_pars_vertex:Ig,skinning_vertex:Dg,skinnormal_vertex:Lg,specularmap_fragment:Ug,specularmap_pars_fragment:Ng,tonemapping_fragment:Fg,tonemapping_pars_fragment:Og,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:kg,uv_pars_vertex:Vg,uv_vertex:Hg,worldpos_vertex:Gg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:Yg,backgroundCube_frag:qg,cube_vert:Zg,cube_frag:jg,depth_vert:Kg,depth_frag:$g,distance_vert:Jg,distance_frag:Qg,equirect_vert:t_,equirect_frag:e_,linedashed_vert:n_,linedashed_frag:i_,meshbasic_vert:s_,meshbasic_frag:r_,meshlambert_vert:a_,meshlambert_frag:o_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:u_,meshnormal_frag:h_,meshphong_vert:f_,meshphong_frag:d_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:__,points_vert:x_,points_frag:v_,shadow_vert:y_,shadow_frag:M_,sprite_vert:S_,sprite_frag:b_},Ct={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Hn={basic:{uniforms:$e([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:$e([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:$e([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:$e([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:$e([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:$e([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:$e([Ct.points,Ct.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:$e([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:$e([Ct.common,Ct.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:$e([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:$e([Ct.sprite,Ct.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:$e([Ct.common,Ct.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:$e([Ct.lights,Ct.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Hn.physical={uniforms:$e([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const ha={r:0,b:0,g:0},E_=new te,Kh=new ie;Kh.set(-1,0,0,0,1,0,0,0,1);function T_(i,t,e,n,s,r){const a=new se(0);let o=s===!0?0:1,l,u,d=null,f=0,h=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const E=y.backgroundBlurriness>0;b=t.get(b,E)}return b}function x(y){let b=!1;const E=p(y);E===null?g(a,o):E&&E.isColor&&(g(E,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,b){const E=p(b);E&&(E.isCubeTexture||E.mapping===qa)?(u===void 0&&(u=new Sn(new yr(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Us(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(b.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Kh),u.material.toneMapped=he.getTransfer(E.colorSpace)!==me,(d!==E||f!==E.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,h=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Sn(new ja(2,2),new Un({name:"BackgroundMaterial",uniforms:Us(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=he.getTransfer(E.colorSpace)!==me,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,f=E.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(ha,Wh(i)),e.buffers.color.setClear(ha.r,ha.g,ha.b,b,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:x,addToRenderList:M,dispose:m}}function A_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(I,F,z,k,O){let V=!1;const q=f(I,k,z,F);r!==q&&(r=q,u(r.object)),V=p(I,k,z,O),V&&x(I,k,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(I,F,z,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function u(I){return i.bindVertexArray(I)}function d(I){return i.deleteVertexArray(I)}function f(I,F,z,k){const O=k.wireframe===!0;let V=n[F.id];V===void 0&&(V={},n[F.id]=V);const q=I.isInstancedMesh===!0?I.id:0;let ot=V[q];ot===void 0&&(ot={},V[q]=ot);let st=ot[z.id];st===void 0&&(st={},ot[z.id]=st);let gt=st[O];return gt===void 0&&(gt=h(l()),st[O]=gt),gt}function h(I){const F=[],z=[],k=[];for(let O=0;O<e;O++)F[O]=0,z[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:k,object:I,attributes:{},index:null}}function p(I,F,z,k){const O=r.attributes,V=F.attributes;let q=0;const ot=z.getAttributes();for(const st in ot)if(ot[st].location>=0){const wt=O[st];let St=V[st];if(St===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(St=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(St=I.instanceColor)),wt===void 0||wt.attribute!==St||St&&wt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function x(I,F,z,k){const O={},V=F.attributes;let q=0;const ot=z.getAttributes();for(const st in ot)if(ot[st].location>=0){let wt=V[st];wt===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(wt=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(wt=I.instanceColor));const St={};St.attribute=wt,wt&&wt.data&&(St.data=wt.data),O[st]=St,q++}r.attributes=O,r.attributesNum=q,r.index=k}function M(){const I=r.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function g(I){m(I,0)}function m(I,F){const z=r.newAttributes,k=r.enabledAttributes,O=r.attributeDivisors;z[I]=1,k[I]===0&&(i.enableVertexAttribArray(I),k[I]=1),O[I]!==F&&(i.vertexAttribDivisor(I,F),O[I]=F)}function y(){const I=r.newAttributes,F=r.enabledAttributes;for(let z=0,k=F.length;z<k;z++)F[z]!==I[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function b(I,F,z,k,O,V,q){q===!0?i.vertexAttribIPointer(I,F,z,O,V):i.vertexAttribPointer(I,F,z,k,O,V)}function E(I,F,z,k){M();const O=k.attributes,V=z.getAttributes(),q=F.defaultAttributeValues;for(const ot in V){const st=V[ot];if(st.location>=0){let gt=O[ot];if(gt===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(gt=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(gt=I.instanceColor)),gt!==void 0){const wt=gt.normalized,St=gt.itemSize,Ot=t.get(gt);if(Ot===void 0)continue;const re=Ot.buffer,Xt=Ot.type,K=Ot.bytesPerElement,et=Xt===i.INT||Xt===i.UNSIGNED_INT||gt.gpuType===As;if(gt.isInterleavedBufferAttribute){const ct=gt.data,Dt=ct.stride,kt=gt.offset;if(ct.isInstancedInterleavedBuffer){for(let xt=0;xt<st.locationSize;xt++)m(st.location+xt,ct.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let xt=0;xt<st.locationSize;xt++)g(st.location+xt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let xt=0;xt<st.locationSize;xt++)b(st.location+xt,St/st.locationSize,Xt,wt,Dt*K,(kt+St/st.locationSize*xt)*K,et)}else{if(gt.isInstancedBufferAttribute){for(let ct=0;ct<st.locationSize;ct++)m(st.location+ct,gt.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ct=0;ct<st.locationSize;ct++)g(st.location+ct);i.bindBuffer(i.ARRAY_BUFFER,re);for(let ct=0;ct<st.locationSize;ct++)b(st.location+ct,St/st.locationSize,Xt,wt,St*K,St/st.locationSize*ct*K,et)}}else if(q!==void 0){const wt=q[ot];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(st.location,wt);break;case 3:i.vertexAttrib3fv(st.location,wt);break;case 4:i.vertexAttrib4fv(st.location,wt);break;default:i.vertexAttrib1fv(st.location,wt)}}}}y()}function R(){w();for(const I in n){const F=n[I];for(const z in F){const k=F[z];for(const O in k){const V=k[O];for(const q in V)d(V[q].object),delete V[q];delete k[O]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const z in F){const k=F[z];for(const O in k){const V=k[O];for(const q in V)d(V[q].object),delete V[q];delete k[O]}}delete n[I.id]}function P(I){for(const F in n){const z=n[F];for(const k in z){const O=z[k];if(O[I.id]===void 0)continue;const V=O[I.id];for(const q in V)d(V[q].object),delete V[q];delete O[I.id]}}}function v(I){for(const F in n){const z=n[F],k=I.isInstancedMesh===!0?I.id:0,O=z[k];if(O!==void 0){for(const V in O){const q=O[V];for(const ot in q)d(q[ot].object),delete q[ot];delete O[V]}delete z[k],Object.keys(z).length===0&&delete n[F]}}}function w(){L(),a=!0,r!==s&&(r=s,u(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:y}}function w_(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function R_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Ae&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===He&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Je&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Re&&!v)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const d=l(u);d!==u&&(zt("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:E,maxSamples:R,samples:T}}function C_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Vn,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=d(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?d(null):u();else{const y=r?0:n,b=y*4;let E=m.clippingState||null;l.value=E,E=d(x,h,b,p);for(let R=0;R!==b;++R)E[R]=e[R];m.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,h,p,x){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=l.value,x!==!0||g===null){const m=p+M*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,E=p;b!==M;++b,E+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const Si=4,Uu=[.125,.215,.35,.446,.526,.582],Fi=20,P_=256,Qs=new Mc,Nu=new se;let Fo=null,Oo=0,Bo=0,zo=!1;const I_=new B;class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=I_}=r;Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=zo,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:He,format:Ae,colorSpace:xn,depthBuffer:!1},s=Fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=D_(r)),this._blurMaterial=U_(r,t,e),this._ggxMaterial=L_(r,t,e)}return s}_compileMaterial(t){const e=new Sn(new ln,t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,s,r){const l=new an(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Nu),f.toneMapping=Xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new yr,new Fh({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let m=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(Nu),m=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,u[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):E===1?(l.up.set(0,0,u[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,u[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const R=this._cubeSize;cs(s,E*R,b>2?R:0,R,R),f.setRenderTarget(s),m&&f.render(M,l),f.render(t,l)}f.toneMapping=p,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Bi||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;cs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),f=Math.sqrt(u*u-d*d),h=0+u*1.25,p=f*h,{_lodMax:x}=this,M=this._sizeLods[n],g=3*M*(n>x-Si?n-x+Si:0),m=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,cs(r,g,m,3*M,2*M),s.setRenderTarget(r),s.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,cs(t,g,m,3*M,2*M),s.setRenderTarget(t),s.render(o,Qs)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Zt("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),M=r/x,g=isFinite(r)?1+Math.floor(d*M):Fi;g>Fi&&zt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const m=[];let y=0;for(let P=0;P<Fi;++P){const v=P/M,w=Math.exp(-v*v/2);m.push(w),P===0?y+=w:P<g&&(y+=2*w)}for(let P=0;P<m.length;P++)m[P]=m[P]/y;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=x,h.mipInt.value=b-n;const E=this._sizeLods[s],R=3*E*(s>b-Si?s-b+Si:0),T=4*(this._cubeSize-E);cs(e,R,T,3*E,2*E),l.setRenderTarget(e),l.render(f,Qs)}}function D_(i){const t=[],e=[],n=[];let s=i;const r=i-Si+1+Uu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Si?l=Uu[a-i+Si-1]:a===0&&(l=0),e.push(l);const u=1/(o-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,x=6,M=3,g=2,m=1,y=new Float32Array(M*x*p),b=new Float32Array(g*x*p),E=new Float32Array(m*x*p);for(let T=0;T<p;T++){const P=T%3*2/3-1,v=T>2?0:-1,w=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];y.set(w,M*x*T),b.set(h,g*x*T);const L=[T,T,T,T,T,T];E.set(L,m*x*T)}const R=new ln;R.setAttribute("position",new We(y,M)),R.setAttribute("uv",new We(b,g)),R.setAttribute("faceIndex",new We(E,m)),n.push(new Sn(R,null)),s>Si&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Fu(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function L_(i,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function U_(i,t,e){const n=new Float32Array(Fi),s=new B(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ou(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Bu(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $h extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yr(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:si});r.uniforms.tEquirect.value=e;const a=new Sn(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=be),new Rp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function N_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===hr||p===io)if(t.has(h)){const x=t.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const M=new $h(x.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",u),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,x=p===hr||p===io,M=p===Bi||p===Cs;if(x||M){let g=e.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Kl(i)),g=x?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return x&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new Kl(i)),g=x?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function o(h,p){return p===hr?h.mapping=Bi:p===io&&(h.mapping=Cs),h}function l(h){let p=0;const x=6;for(let M=0;M<x;M++)h[M]!==void 0&&p++;return p===x}function u(h){const p=h.target;p.removeEventListener("dispose",u);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function d(h){const p=h.target;p.removeEventListener("dispose",d);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function F_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ql("WebGLRenderer: "+n+" extension not supported."),s}}}function O_(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,x=f.attributes.position;let M=0;if(x===void 0)return;if(p!==null){const y=p.array;M=p.version;for(let b=0,E=y.length;b<E;b+=3){const R=y[b+0],T=y[b+1],P=y[b+2];h.push(R,T,T,P,P,R)}}else{const y=x.array;M=x.version;for(let b=0,E=y.length/3-1;b<E;b+=3){const R=b+0,T=b+1,P=b+2;h.push(R,T,T,P,P,R)}}const g=new(x.count>=65535?Uh:Lh)(h,1);g.version=M;const m=r.get(f);m&&t.remove(m),r.set(f,g)}function d(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function B_(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function u(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),e.update(h,n,p))}function d(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let M=0;for(let g=0;g<p;g++)M+=h[g];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function z_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function k_(i,t,e){const n=new WeakMap,s=new ye;function r(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let w=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),x===!0&&(b=2),M===!0&&(b=3);let E=o.attributes.position.count*b,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const T=new Float32Array(E*R*4*f),P=new Ih(T,E,R,f);P.type=Re,P.needsUpdate=!0;const v=b*4;for(let L=0;L<f;L++){const I=g[L],F=m[L],z=y[L],k=E*R*4*L;for(let O=0;O<I.count;O++){const V=O*v;p===!0&&(s.fromBufferAttribute(I,O),T[k+V+0]=s.x,T[k+V+1]=s.y,T[k+V+2]=s.z,T[k+V+3]=0),x===!0&&(s.fromBufferAttribute(F,O),T[k+V+4]=s.x,T[k+V+5]=s.y,T[k+V+6]=s.z,T[k+V+7]=0),M===!0&&(s.fromBufferAttribute(z,O),T[k+V+8]=s.x,T[k+V+9]=s.y,T[k+V+10]=s.z,T[k+V+11]=z.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Wt(E,R)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<u.length;M++)p+=u[M];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function V_(i,t,e,n,s){let r=new WeakMap;function a(u){const d=s.render.frame,f=u.geometry,h=t.get(u,f);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){const p=u.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const H_={[vh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[uc]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[Eh]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function G_(i,t,e,n,s){const r=new Yn(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Ls(t,e):void 0}),a=new Yn(t,e,{type:He,depthBuffer:!1,stencilBuffer:!1}),o=new ln;o.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xe([0,2,0,0,2,0],2));const l=new rp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Sn(o,l),d=new Mc(-1,1,1,-1,0,1);let f=null,h=null,p=!1,x,M=null,g=[],m=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let E=0;E<g.length;E++){const R=g[E];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){g=y,m=g.length>0&&g[0].isRenderPass===!0;const b=r.width,E=r.height;for(let R=0;R<g.length;R++){const T=g[R];T.setSize&&T.setSize(b,E)}},this.begin=function(y,b){if(p||y.toneMapping===Xn&&g.length===0)return!1;if(M=b,b!==null){const E=b.width,R=b.height;(r.width!==E||r.height!==R)&&this.setSize(E,R)}return m===!1&&y.setRenderTarget(r),x=y.toneMapping,y.toneMapping=Xn,!0},this.hasRenderPass=function(){return m},this.end=function(y,b){y.toneMapping=x,p=!0;let E=r,R=a;for(let T=0;T<g.length;T++){const P=g[T];if(P.enabled!==!1&&(P.render(y,R,E,b),P.needsSwap!==!1)){const v=E;E=R,R=v}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,l.defines={},he.getTransfer(f)===me&&(l.defines.SRGB_TRANSFER="");const T=H_[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(M),y.render(u,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Jh=new Ge,$l=new Ls(1,1),Qh=new Ih,tf=new Rd,ef=new kh,zu=[],ku=[],Vu=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ja(i,t){let e=ku[t];e===void 0&&(e=new Int32Array(t),ku[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function W_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Z_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),ze(e,n)}}function j_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),ze(e,n)}}function K_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Vu.set(n),i.uniformMatrix4fv(this.addr,!1,Vu),ze(e,n)}}function $_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function r0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=e.isReversedDepthBuffer()?mc:pc,r=$l):r=Jh,e.setTexture2D(t||r,s)}function a0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tf,s)}function o0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ef,s)}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qh,s)}function c0(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return Y_;case 35666:return q_;case 35674:return Z_;case 35675:return j_;case 35676:return K_;case 5124:case 35670:return $_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}function u0(i,t){i.uniform1fv(this.addr,t)}function h0(i,t){const e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function f0(i,t){const e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function d0(i,t){const e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function p0(i,t){const e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m0(i,t){const e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function g0(i,t){const e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _0(i,t){i.uniform1iv(this.addr,t)}function x0(i,t){i.uniform2iv(this.addr,t)}function v0(i,t){i.uniform3iv(this.addr,t)}function y0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function S0(i,t){i.uniform2uiv(this.addr,t)}function b0(i,t){i.uniform3uiv(this.addr,t)}function E0(i,t){i.uniform4uiv(this.addr,t)}function T0(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$l:a=Jh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function A0(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||tf,r[a])}function w0(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ef,r[a])}function R0(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qh,r[a])}function C0(i){switch(i){case 5126:return u0;case 35664:return h0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return S0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return R0}}class P0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}}class I0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}}class D0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Wu(i,t){i.seq.push(t),i.map[t.id]=t}function L0(i,t,e){const n=i.name,s=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),a=ko.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Wu(e,u===void 0?new P0(o,i,t):new I0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new D0(o),Wu(e,f)),e=f}}}class La{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);L0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Xu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const U0=37297;let N0=0;function F0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yu=new ie;function O0(i){he._getMatrix(Yu,he.workingColorSpace,i);const t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case za:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+F0(i.getShaderSource(t),o)}else return r}function B0(i,t){const e=O0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const z0={[vh]:"Linear",[yh]:"Reinhard",[Mh]:"Cineon",[uc]:"ACESFilmic",[bh]:"AgX",[Eh]:"Neutral",[Sh]:"Custom"};function k0(i,t){const e=z0[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fa=new B;function V0(){he.getLuminanceCoefficients(fa);const i=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function G0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cr(i){return i!==""}function Zu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(X0,q0)}const Y0=new Map;function q0(i,t){let e=ae[t];if(e===void 0){const n=Y0.get(t);if(n!==void 0)e=ae[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(i){return i.replace(Z0,j0)}function j0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const K0={[Ra]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function $0(i){return K0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J0={[Bi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE_UV"};function Q0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const tx={[Cs]:"ENVMAP_MODE_REFRACTION"};function ex(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nx={[xh]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function ix(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nx[i.combine]||"ENVMAP_BLENDING_NONE"}function sx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=$0(e),u=Q0(e),d=ex(e),f=ix(e),h=sx(e),p=H0(e),x=G0(r),M=s.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(g=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Xn?k0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,B0("linearToOutputTexel",e.outputColorSpace),V0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),a=Jl(a),a=Zu(a,e),a=ju(a,e),o=Jl(o),o=Zu(o,e),o=ju(o,e),a=Ku(a),o=Ku(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=y+g+a,E=y+m+o,R=Xu(s,s.VERTEX_SHADER,b),T=Xu(s,s.FRAGMENT_SHADER,E);s.attachShader(M,R),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(I){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(R)||"",k=s.getShaderInfoLog(T)||"",O=F.trim(),V=z.trim(),q=k.trim();let ot=!0,st=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,R,T);else{const gt=qu(s,R,"vertex"),wt=qu(s,T,"fragment");Zt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+gt+`
`+wt)}else O!==""?zt("WebGLProgram: Program Info Log:",O):(V===""||q==="")&&(st=!1);st&&(I.diagnostics={runnable:ot,programLog:O,vertexShader:{log:V,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(R),s.deleteShader(T),v=new La(s,M),w=W0(s,M)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,U0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=T,this}let ax=0;class ox{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lx(t),e.set(t,n)),n}}class lx{constructor(t){this.id=ax++,this.code=t,this.usedTimes=0}}function cx(i){return i===dn||i===Fa||i===Oa}function ux(i,t,e,n,s,r){const a=new xc,o=new ox,l=new Set,u=[],d=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,w,L,I,F,z){const k=I.fog,O=F.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ot=t.get(v.envMap||V,q),st=ot&&ot.mapping===qa?ot.image.height:null,gt=p[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&zt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const wt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,St=wt!==void 0?wt.length:0;let Ot=0;O.morphAttributes.position!==void 0&&(Ot=1),O.morphAttributes.normal!==void 0&&(Ot=2),O.morphAttributes.color!==void 0&&(Ot=3);let re,Xt,K,et;if(gt){const ne=Hn[gt];re=ne.vertexShader,Xt=ne.fragmentShader}else re=v.vertexShader,Xt=v.fragmentShader,o.update(v),K=o.getVertexShaderID(v),et=o.getFragmentShaderID(v);const ct=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),kt=F.isInstancedMesh===!0,xt=F.isBatchedMesh===!0,Jt=!!v.map,Yt=!!v.matcap,ce=!!ot,oe=!!v.aoMap,ee=!!v.lightMap,Le=!!v.bumpMap,Me=!!v.normalMap,Ye=!!v.displacementMap,X=!!v.emissiveMap,Ce=!!v.metalnessMap,le=!!v.roughnessMap,pe=v.anisotropy>0,At=v.clearcoat>0,ve=v.dispersion>0,U=v.iridescence>0,A=v.sheen>0,$=v.transmission>0,rt=pe&&!!v.anisotropyMap,pt=At&&!!v.clearcoatMap,vt=At&&!!v.clearcoatNormalMap,Mt=At&&!!v.clearcoatRoughnessMap,nt=U&&!!v.iridescenceMap,at=U&&!!v.iridescenceThicknessMap,Pt=A&&!!v.sheenColorMap,Et=A&&!!v.sheenRoughnessMap,mt=!!v.specularMap,yt=!!v.specularColorMap,qt=!!v.specularIntensityMap,Vt=$&&!!v.transmissionMap,jt=$&&!!v.thicknessMap,H=!!v.gradientMap,J=!!v.alphaMap,it=v.alphaTest>0,Lt=!!v.alphaHash,bt=!!v.extensions;let dt=Xn;v.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Ht={shaderID:gt,shaderType:v.type,shaderName:v.name,vertexShader:re,fragmentShader:Xt,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:xt,batchingColor:xt&&F._colorsTexture!==null,instancing:kt,instancingColor:kt&&F.instanceColor!==null,instancingMorph:kt&&F.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Jt,matcap:Yt,envMap:ce,envMapMode:ce&&ot.mapping,envMapCubeUVHeight:st,aoMap:oe,lightMap:ee,bumpMap:Le,normalMap:Me,displacementMap:Ye,emissiveMap:X,normalMapObjectSpace:Me&&v.normalMapType===Zf,normalMapTangentSpace:Me&&v.normalMapType===Wl,packedNormalMap:Me&&v.normalMapType===Wl&&cx(v.normalMap.format),metalnessMap:Ce,roughnessMap:le,anisotropy:pe,anisotropyMap:rt,clearcoat:At,clearcoatMap:pt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Mt,dispersion:ve,iridescence:U,iridescenceMap:nt,iridescenceThicknessMap:at,sheen:A,sheenColorMap:Pt,sheenRoughnessMap:Et,specularMap:mt,specularColorMap:yt,specularIntensityMap:qt,transmission:$,transmissionMap:Vt,thicknessMap:jt,gradientMap:H,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:it,alphaHash:Lt,combine:v.combine,mapUv:Jt&&x(v.map.channel),aoMapUv:oe&&x(v.aoMap.channel),lightMapUv:ee&&x(v.lightMap.channel),bumpMapUv:Le&&x(v.bumpMap.channel),normalMapUv:Me&&x(v.normalMap.channel),displacementMapUv:Ye&&x(v.displacementMap.channel),emissiveMapUv:X&&x(v.emissiveMap.channel),metalnessMapUv:Ce&&x(v.metalnessMap.channel),roughnessMapUv:le&&x(v.roughnessMap.channel),anisotropyMapUv:rt&&x(v.anisotropyMap.channel),clearcoatMapUv:pt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:vt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(v.sheenRoughnessMap.channel),specularMapUv:mt&&x(v.specularMap.channel),specularColorMapUv:yt&&x(v.specularColorMap.channel),specularIntensityMapUv:qt&&x(v.specularIntensityMap.channel),transmissionMapUv:Vt&&x(v.transmissionMap.channel),thicknessMapUv:jt&&x(v.thicknessMap.channel),alphaMapUv:J&&x(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Me||pe),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Jt||J),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&Me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Dt,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:Jt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===me,decodeVideoTextureEmissive:X&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gn,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:bt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&v.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function g(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(m(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function b(v){const w=p[v.type];let L;if(w){const I=Hn[w];L=np.clone(I.uniforms)}else L=v.uniforms;return L}function E(v,w){let L=d.get(w);return L!==void 0?++L.usedTimes:(L=new rx(i,w,v,s),u.push(L),d.set(w,L)),L}function R(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:b,acquireProgram:E,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:P}}function hx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,M,g,m){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:m},i[t]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=x,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=g,y.group=m),t++,y}function l(h,p,x,M,g,m){const y=o(h,p,x,M,g,m);x.transmission>0?n.push(y):x.transparent===!0?s.push(y):e.push(y)}function u(h,p,x,M,g,m){const y=o(h,p,x,M,g,m);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):e.unshift(y)}function d(h,p){e.length>1&&e.sort(h||fx),n.length>1&&n.sort(p||Ju),s.length>1&&s.sort(p||Ju)}function f(){for(let h=t,p=i.length;h<p;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:u,finish:f,sort:d}}function dx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Qu,i.set(n,[a])):s>=r.length?(a=new Qu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function px(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new se};break;case"SpotLight":e={position:new B,direction:new B,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function mx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gx=0;function _x(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xx(i){const t=new px,e=mx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new B);const s=new B,r=new te,a=new te;function o(u){let d=0,f=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,x=0,M=0,g=0,m=0,y=0,b=0,E=0,R=0,T=0,P=0;u.sort(_x);for(let w=0,L=u.length;w<L;w++){const I=u[w],F=I.color,z=I.intensity,k=I.distance;let O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===dn?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=F.r*z,f+=F.g*z,h+=F.b*z;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],z);P++}else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,ot=e.get(I);ot.shadowIntensity=q.intensity,ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,n.directionalShadow[p]=ot,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=V,p++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(F).multiplyScalar(z),V.distance=k,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[M]=V;const q=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,q.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[M]=q.matrix,I.castShadow){const ot=e.get(I);ot.shadowIntensity=q.intensity,ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,n.spotShadow[M]=ot,n.spotShadowMap[M]=O,E++}M++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(F).multiplyScalar(z),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=V,g++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const q=I.shadow,ot=e.get(I);ot.shadowIntensity=q.intensity,ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,ot.shadowCameraNear=q.camera.near,ot.shadowCameraFar=q.camera.far,n.pointShadow[x]=ot,n.pointShadowMap[x]=O,n.pointShadowMatrix[x]=I.shadow.matrix,b++}n.point[x]=V,x++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(z),V.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=V,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==p||v.pointLength!==x||v.spotLength!==M||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==b||v.numSpotShadows!==E||v.numSpotMaps!==R||v.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,v.directionalLength=p,v.pointLength=x,v.spotLength=M,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=b,v.numSpotShadows=E,v.numSpotMaps=R,v.numLightProbes=P,n.version=gx++)}function l(u,d){let f=0,h=0,p=0,x=0,M=0;const g=d.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){const b=u[m];if(b.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(b.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const E=n.hemi[M];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:n}}function th(i){const t=new xx(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function u(){t.setup(e)}function d(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new th(i),t.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],bx=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],eh=new te,tr=new B,Vo=new B;function Ex(i,t,e){let n=new vc;const s=new Wt,r=new Wt,a=new ye,o=new lp,l=new cp,u={},d=e.maxTextureSize,f={[qn]:tn,[tn]:qn,[Gn]:Gn},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:yx,fragmentShader:Mx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new ln;x.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Sn(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let m=this.type;this.render=function(T,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===_h&&(zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ra);const w=i.getRenderTarget(),L=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(si),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=m!==this.type;z&&P.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(O=>O.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,O=T.length;k<O;k++){const V=T[k],q=V.shadow;if(q===void 0){zt("WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ot=q.getFrameExtents();s.multiply(ot),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ot.x),s.x=r.x*ot.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ot.y),s.y=r.y*ot.y,q.mapSize.y=r.y));const st=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=st,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===lr){if(V.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Yn(s.x,s.y,{format:dn,type:He,minFilter:be,magFilter:be,generateMipmaps:!1}),q.map.texture.name=V.name+".shadowMap",q.map.depthTexture=new Ls(s.x,s.y,Re),q.map.depthTexture.name=V.name+".shadowMapDepth",q.map.depthTexture.format=oi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=we,q.map.depthTexture.magFilter=we}else V.isPointLight?(q.map=new $h(s.x),q.map.depthTexture=new tp(s.x,en)):(q.map=new Yn(s.x,s.y),q.map.depthTexture=new Ls(s.x,s.y,en)),q.map.depthTexture.name=V.name+".shadowMap",q.map.depthTexture.format=oi,this.type===Ra?(q.map.depthTexture.compareFunction=st?mc:pc,q.map.depthTexture.minFilter=be,q.map.depthTexture.magFilter=be):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=we,q.map.depthTexture.magFilter=we);q.camera.updateProjectionMatrix()}const gt=q.map.isWebGLCubeRenderTarget?6:1;for(let wt=0;wt<gt;wt++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,wt),i.clear();else{wt===0&&(i.setRenderTarget(q.map),i.clear());const St=q.getViewport(wt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),F.viewport(a)}if(V.isPointLight){const St=q.camera,Ot=q.matrix,re=V.distance||St.far;re!==St.far&&(St.far=re,St.updateProjectionMatrix()),tr.setFromMatrixPosition(V.matrixWorld),St.position.copy(tr),Vo.copy(St.position),Vo.add(Sx[wt]),St.up.copy(bx[wt]),St.lookAt(Vo),St.updateMatrixWorld(),Ot.makeTranslation(-tr.x,-tr.y,-tr.z),eh.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),q._frustum.setFromProjectionMatrix(eh,St.coordinateSystem,St.reversedDepth)}else q.updateMatrices(V);n=q.getFrustum(),E(P,v,q.camera,V,this.type)}q.isPointLightShadow!==!0&&this.type===lr&&y(q,v),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,L,I)};function y(T,P){const v=t.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yn(s.x,s.y,{format:dn,type:He})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,v,p,M,null)}function b(T,P,v,w){let L=null;const I=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)L=I;else if(L=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=L.uuid,z=P.uuid;let k=u[F];k===void 0&&(k={},u[F]=k);let O=k[z];O===void 0&&(O=L.clone(),k[z]=O,P.addEventListener("dispose",R)),L=O}if(L.visible=P.visible,L.wireframe=P.wireframe,w===lr?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:f[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=i.properties.get(L);F.light=v}return L}function E(T,P,v,w,L){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===lr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const z=t.update(T),k=T.material;if(Array.isArray(k)){const O=z.groups;for(let V=0,q=O.length;V<q;V++){const ot=O[V],st=k[ot.materialIndex];if(st&&st.visible){const gt=b(T,st,w,L);T.onBeforeShadow(i,T,P,v,z,gt,ot),i.renderBufferDirect(v,null,z,gt,T,ot),T.onAfterShadow(i,T,P,v,z,gt,ot)}}}else if(k.visible){const O=b(T,k,w,L);T.onBeforeShadow(i,T,P,v,z,O,null),i.renderBufferDirect(v,null,z,O,T,null),T.onAfterShadow(i,T,P,v,z,O,null)}}const F=T.children;for(let z=0,k=F.length;z<k;z++)E(F[z],P,v,w,L)}function R(T){T.target.removeEventListener("dispose",R);for(const v in u){const w=u[v],L=T.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function Tx(i,t){function e(){let H=!1;const J=new ye;let it=null;const Lt=new ye(0,0,0,0);return{setMask:function(bt){it!==bt&&!H&&(i.colorMask(bt,bt,bt,bt),it=bt)},setLocked:function(bt){H=bt},setClear:function(bt,dt,Ht,ne,Te){Te===!0&&(bt*=ne,dt*=ne,Ht*=ne),J.set(bt,dt,Ht,ne),Lt.equals(J)===!1&&(i.clearColor(bt,dt,Ht,ne),Lt.copy(J))},reset:function(){H=!1,it=null,Lt.set(-1,0,0,0)}}}function n(){let H=!1,J=!1,it=null,Lt=null,bt=null;return{setReversed:function(dt){if(J!==dt){const Ht=t.get("EXT_clip_control");dt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),J=dt;const ne=bt;bt=null,this.setClear(ne)}},getReversed:function(){return J},setTest:function(dt){dt?ct(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(dt){it!==dt&&!H&&(i.depthMask(dt),it=dt)},setFunc:function(dt){if(J&&(dt=rd[dt]),Lt!==dt){switch(dt){case sl:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=dt}},setLocked:function(dt){H=dt},setClear:function(dt){bt!==dt&&(bt=dt,J&&(dt=1-dt),i.clearDepth(dt))},reset:function(){H=!1,it=null,Lt=null,bt=null,J=!1}}}function s(){let H=!1,J=null,it=null,Lt=null,bt=null,dt=null,Ht=null,ne=null,Te=null;return{setTest:function(de){H||(de?ct(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(de){J!==de&&!H&&(i.stencilMask(de),J=de)},setFunc:function(de,bn,gn){(it!==de||Lt!==bn||bt!==gn)&&(i.stencilFunc(de,bn,gn),it=de,Lt=bn,bt=gn)},setOp:function(de,bn,gn){(dt!==de||Ht!==bn||ne!==gn)&&(i.stencilOp(de,bn,gn),dt=de,Ht=bn,ne=gn)},setLocked:function(de){H=de},setClear:function(de){Te!==de&&(i.clearStencil(de),Te=de)},reset:function(){H=!1,J=null,it=null,Lt=null,bt=null,dt=null,Ht=null,ne=null,Te=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,u=new WeakMap;let d={},f={},h={},p=new WeakMap,x=[],M=null,g=!1,m=null,y=null,b=null,E=null,R=null,T=null,P=null,v=new se(0,0,0),w=0,L=!1,I=null,F=null,z=null,k=null,O=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ot=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(st)[1]),q=ot>=1):st.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),q=ot>=2);let gt=null,wt={};const St=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),re=new ye().fromArray(St),Xt=new ye().fromArray(Ot);function K(H,J,it,Lt){const bt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(H,dt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<it;Ht++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(J+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return dt}const et={};et[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(Rs),Le(!1),Me(Uc),ct(i.CULL_FACE),oe(si);function ct(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function Dt(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function kt(H,J){return h[H]!==J?(i.bindFramebuffer(H,J),h[H]=J,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=J),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=J),!0):!1}function xt(H,J){let it=x,Lt=!1;if(H){it=p.get(J),it===void 0&&(it=[],p.set(J,it));const bt=H.textures;if(it.length!==bt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ht=bt.length;dt<Ht;dt++)it[dt]=i.COLOR_ATTACHMENT0+dt;it.length=bt.length,Lt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(it)}function Jt(H){return M!==H?(i.useProgram(H),M=H,!0):!1}const Yt={[Ni]:i.FUNC_ADD,[bf]:i.FUNC_SUBTRACT,[Ef]:i.FUNC_REVERSE_SUBTRACT};Yt[Tf]=i.MIN,Yt[Af]=i.MAX;const ce={[wf]:i.ZERO,[Rf]:i.ONE,[Cf]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[Nf]:i.SRC_ALPHA_SATURATE,[Lf]:i.DST_COLOR,[If]:i.DST_ALPHA,[Pf]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[Uf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Bf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(H,J,it,Lt,bt,dt,Ht,ne,Te,de){if(H===si){g===!0&&(Dt(i.BLEND),g=!1);return}if(g===!1&&(ct(i.BLEND),g=!0),H!==Sf){if(H!==m||de!==L){if((y!==Ni||R!==Ni)&&(i.blendEquation(i.FUNC_ADD),y=Ni,R=Ni),de)switch(H){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",H);break}else switch(H){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fc:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",H);break}b=null,E=null,T=null,P=null,v.set(0,0,0),w=0,m=H,L=de}return}bt=bt||J,dt=dt||it,Ht=Ht||Lt,(J!==y||bt!==R)&&(i.blendEquationSeparate(Yt[J],Yt[bt]),y=J,R=bt),(it!==b||Lt!==E||dt!==T||Ht!==P)&&(i.blendFuncSeparate(ce[it],ce[Lt],ce[dt],ce[Ht]),b=it,E=Lt,T=dt,P=Ht),(ne.equals(v)===!1||Te!==w)&&(i.blendColor(ne.r,ne.g,ne.b,Te),v.copy(ne),w=Te),m=H,L=!1}function ee(H,J){H.side===Gn?Dt(i.CULL_FACE):ct(i.CULL_FACE);let it=H.side===tn;J&&(it=!it),Le(it),H.blending===Ts&&H.transparent===!1?oe(si):oe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const Lt=H.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),X(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(H){I!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),I=H)}function Me(H){H!==yf?(ct(i.CULL_FACE),H!==F&&(H===Uc?i.cullFace(i.BACK):H===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),F=H}function Ye(H){H!==z&&(q&&i.lineWidth(H),z=H)}function X(H,J,it){H?(ct(i.POLYGON_OFFSET_FILL),(k!==J||O!==it)&&(k=J,O=it,a.getReversed()&&(J=-J),i.polygonOffset(J,it))):Dt(i.POLYGON_OFFSET_FILL)}function Ce(H){H?ct(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function le(H){H===void 0&&(H=i.TEXTURE0+V-1),gt!==H&&(i.activeTexture(H),gt=H)}function pe(H,J,it){it===void 0&&(gt===null?it=i.TEXTURE0+V-1:it=gt);let Lt=wt[it];Lt===void 0&&(Lt={type:void 0,texture:void 0},wt[it]=Lt),(Lt.type!==H||Lt.texture!==J)&&(gt!==it&&(i.activeTexture(it),gt=it),i.bindTexture(H,J||et[H]),Lt.type=H,Lt.texture=J)}function At(){const H=wt[gt];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function A(){try{i.texSubImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function $(){try{i.texSubImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function vt(){try{i.texStorage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function Mt(){try{i.texStorage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function nt(){try{i.texImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function at(){try{i.texImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function Pt(H){return f[H]!==void 0?f[H]:i.getParameter(H)}function Et(H,J){f[H]!==J&&(i.pixelStorei(H,J),f[H]=J)}function mt(H){re.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),re.copy(H))}function yt(H){Xt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Xt.copy(H))}function qt(H,J){let it=u.get(J);it===void 0&&(it=new WeakMap,u.set(J,it));let Lt=it.get(H);Lt===void 0&&(Lt=i.getUniformBlockIndex(J,H.name),it.set(H,Lt))}function Vt(H,J){const Lt=u.get(J).get(H);l.get(J)!==Lt&&(i.uniformBlockBinding(J,Lt,H.__bindingPointIndex),l.set(J,Lt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},gt=null,wt={},h={},p=new WeakMap,x=[],M=null,g=!1,m=null,y=null,b=null,E=null,R=null,T=null,P=null,v=new se(0,0,0),w=0,L=!1,I=null,F=null,z=null,k=null,O=null,re.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Dt,bindFramebuffer:kt,drawBuffers:xt,useProgram:Jt,setBlending:oe,setMaterial:ee,setFlipSided:Le,setCullFace:Me,setLineWidth:Ye,setPolygonOffset:X,setScissorTest:Ce,activeTexture:le,bindTexture:pe,unbindTexture:At,compressedTexImage2D:ve,compressedTexImage3D:U,texImage2D:nt,texImage3D:at,pixelStorei:Et,getParameter:Pt,updateUBOMapping:qt,uniformBlockBinding:Vt,texStorage2D:vt,texStorage3D:Mt,texSubImage2D:A,texSubImage3D:$,compressedTexSubImage2D:rt,compressedTexSubImage3D:pt,scissor:mt,viewport:yt,reset:jt}}function Ax(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Wt,d=new WeakMap,f=new Set;let h;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,A){return x?new OffscreenCanvas(U,A):xr("canvas")}function g(U,A,$){let rt=1;const pt=ve(U);if((pt.width>$||pt.height>$)&&(rt=$/Math.max(pt.width,pt.height)),rt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const vt=Math.floor(rt*pt.width),Mt=Math.floor(rt*pt.height);h===void 0&&(h=M(vt,Mt));const nt=A?M(vt,Mt):h;return nt.width=vt,nt.height=Mt,nt.getContext("2d").drawImage(U,0,0,vt,Mt),zt("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+vt+"x"+Mt+")."),nt}else return"data"in U&&zt("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),U;return U}function m(U){return U.generateMipmaps}function y(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(U,A,$,rt,pt,vt=!1){if(U!==null){if(i[U]!==void 0)return i[U];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Mt;rt&&(Mt=t.get("EXT_texture_norm16"),Mt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=A;if(A===i.RED&&($===i.FLOAT&&(nt=i.R32F),$===i.HALF_FLOAT&&(nt=i.R16F),$===i.UNSIGNED_BYTE&&(nt=i.R8),$===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.R16_EXT),$===i.SHORT&&Mt&&(nt=Mt.R16_SNORM_EXT)),A===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.R8UI),$===i.UNSIGNED_SHORT&&(nt=i.R16UI),$===i.UNSIGNED_INT&&(nt=i.R32UI),$===i.BYTE&&(nt=i.R8I),$===i.SHORT&&(nt=i.R16I),$===i.INT&&(nt=i.R32I)),A===i.RG&&($===i.FLOAT&&(nt=i.RG32F),$===i.HALF_FLOAT&&(nt=i.RG16F),$===i.UNSIGNED_BYTE&&(nt=i.RG8),$===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RG16_EXT),$===i.SHORT&&Mt&&(nt=Mt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.RG8UI),$===i.UNSIGNED_SHORT&&(nt=i.RG16UI),$===i.UNSIGNED_INT&&(nt=i.RG32UI),$===i.BYTE&&(nt=i.RG8I),$===i.SHORT&&(nt=i.RG16I),$===i.INT&&(nt=i.RG32I)),A===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),$===i.UNSIGNED_INT&&(nt=i.RGB32UI),$===i.BYTE&&(nt=i.RGB8I),$===i.SHORT&&(nt=i.RGB16I),$===i.INT&&(nt=i.RGB32I)),A===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),$===i.UNSIGNED_INT&&(nt=i.RGBA32UI),$===i.BYTE&&(nt=i.RGBA8I),$===i.SHORT&&(nt=i.RGBA16I),$===i.INT&&(nt=i.RGBA32I)),A===i.RGB&&($===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RGB16_EXT),$===i.SHORT&&Mt&&(nt=Mt.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),A===i.RGBA){const at=vt?za:he.getTransfer(pt);$===i.FLOAT&&(nt=i.RGBA32F),$===i.HALF_FLOAT&&(nt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(nt=at===me?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RGBA16_EXT),$===i.SHORT&&Mt&&(nt=Mt.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function R(U,A){let $;return U?A===null||A===en||A===gr?$=i.DEPTH24_STENCIL8:A===Re?$=i.DEPTH32F_STENCIL8:A===Ps&&($=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===en||A===gr?$=i.DEPTH_COMPONENT24:A===Re?$=i.DEPTH_COMPONENT32F:A===Ps&&($=i.DEPTH_COMPONENT16),$}function T(U,A){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==we&&U.minFilter!==be?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function P(U){const A=U.target;A.removeEventListener("dispose",P),w(A),A.isVideoTexture&&d.delete(A),A.isHTMLTexture&&f.delete(A)}function v(U){const A=U.target;A.removeEventListener("dispose",v),I(A)}function w(U){const A=n.get(U);if(A.__webglInit===void 0)return;const $=U.source,rt=p.get($);if(rt){const pt=rt[A.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&L(U),Object.keys(rt).length===0&&p.delete($)}n.remove(U)}function L(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const $=U.source,rt=p.get($);delete rt[A.__cacheKey],a.memory.textures--}function I(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(A.__webglFramebuffer[rt]))for(let pt=0;pt<A.__webglFramebuffer[rt].length;pt++)i.deleteFramebuffer(A.__webglFramebuffer[rt][pt]);else i.deleteFramebuffer(A.__webglFramebuffer[rt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[rt])}else{if(Array.isArray(A.__webglFramebuffer))for(let rt=0;rt<A.__webglFramebuffer.length;rt++)i.deleteFramebuffer(A.__webglFramebuffer[rt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let rt=0;rt<A.__webglColorRenderbuffer.length;rt++)A.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[rt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=U.textures;for(let rt=0,pt=$.length;rt<pt;rt++){const vt=n.get($[rt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove($[rt])}n.remove(U)}let F=0;function z(){F=0}function k(){return F}function O(U){F=U}function V(){const U=F;return U>=s.maxTextures&&zt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),F+=1,U}function q(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function ot(U,A){const $=n.get(U);if(U.isVideoTexture&&pe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const rt=U.image;if(rt===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt($,U,A);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+A)}function st(U,A){const $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){Dt($,U,A);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+A)}function gt(U,A){const $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){Dt($,U,A);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+A)}function wt(U,A){const $=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){kt($,U,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+A)}const St={[hl]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},Ot={[we]:i.NEAREST,[Gf]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[be]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},re={[jf]:i.NEVER,[td]:i.ALWAYS,[Kf]:i.LESS,[pc]:i.LEQUAL,[$f]:i.EQUAL,[mc]:i.GEQUAL,[Jf]:i.GREATER,[Qf]:i.NOTEQUAL};function Xt(U,A){if(A.type===Re&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===be||A.magFilter===so||A.magFilter===Nr||A.magFilter===yi||A.minFilter===be||A.minFilter===so||A.minFilter===Nr||A.minFilter===yi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,St[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,St[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,St[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Ot[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Ot[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,re[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===we||A.minFilter!==Nr&&A.minFilter!==yi||A.type===Re&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function K(U,A){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",P));const rt=A.source;let pt=p.get(rt);pt===void 0&&(pt={},p.set(rt,pt));const vt=q(A);if(vt!==U.__cacheKey){pt[vt]===void 0&&(pt[vt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),pt[vt].usedTimes++;const Mt=pt[U.__cacheKey];Mt!==void 0&&(pt[U.__cacheKey].usedTimes--,Mt.usedTimes===0&&L(A)),U.__cacheKey=vt,U.__webglTexture=pt[vt].texture}return $}function et(U,A,$){return Math.floor(Math.floor(U/$)/A)}function ct(U,A,$,rt){const vt=U.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,$,rt,A.data);else{vt.sort((Et,mt)=>Et.start-mt.start);let Mt=0;for(let Et=1;Et<vt.length;Et++){const mt=vt[Mt],yt=vt[Et],qt=mt.start+mt.count,Vt=et(yt.start,A.width,4),jt=et(mt.start,A.width,4);yt.start<=qt+1&&Vt===jt&&et(yt.start+yt.count-1,A.width,4)===Vt?mt.count=Math.max(mt.count,yt.start+yt.count-mt.start):(++Mt,vt[Mt]=yt)}vt.length=Mt+1;const nt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Et=0,mt=vt.length;Et<mt;Et++){const yt=vt[Et],qt=Math.floor(yt.start/4),Vt=Math.ceil(yt.count/4),jt=qt%A.width,H=Math.floor(qt/A.width),J=Vt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,jt,H,J,it,$,rt,A.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Dt(U,A,$){let rt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(rt=i.TEXTURE_3D);const pt=K(U,A),vt=A.source;e.bindTexture(rt,U.__webglTexture,i.TEXTURE0+$);const Mt=n.get(vt);if(vt.version!==Mt.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const it=he.getPrimaries(he.workingColorSpace),Lt=A.colorSpace===vi?null:he.getPrimaries(A.colorSpace),bt=A.colorSpace===vi||it===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=g(A.image,!1,s.maxTextureSize);at=At(A,at);const Pt=r.convert(A.format,A.colorSpace),Et=r.convert(A.type);let mt=E(A.internalFormat,Pt,Et,A.normalized,A.colorSpace,A.isVideoTexture);Xt(rt,A);let yt;const qt=A.mipmaps,Vt=A.isVideoTexture!==!0,jt=Mt.__version===void 0||pt===!0,H=vt.dataReady,J=T(A,at);if(A.isDepthTexture)mt=R(A.format===Oi,A.type),jt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,mt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,mt,at.width,at.height,0,Pt,Et,null));else if(A.isDataTexture)if(qt.length>0){Vt&&jt&&e.texStorage2D(i.TEXTURE_2D,J,mt,qt[0].width,qt[0].height);for(let it=0,Lt=qt.length;it<Lt;it++)yt=qt[it],Vt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,yt.width,yt.height,Pt,Et,yt.data):e.texImage2D(i.TEXTURE_2D,it,mt,yt.width,yt.height,0,Pt,Et,yt.data);A.generateMipmaps=!1}else Vt?(jt&&e.texStorage2D(i.TEXTURE_2D,J,mt,at.width,at.height),H&&ct(A,at,Pt,Et)):e.texImage2D(i.TEXTURE_2D,0,mt,at.width,at.height,0,Pt,Et,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Vt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,mt,qt[0].width,qt[0].height,at.depth);for(let it=0,Lt=qt.length;it<Lt;it++)if(yt=qt[it],A.format!==Ae)if(Pt!==null)if(Vt){if(H)if(A.layerUpdates.size>0){const bt=Lu(yt.width,yt.height,A.format,A.type);for(const dt of A.layerUpdates){const Ht=yt.data.subarray(dt*bt/yt.data.BYTES_PER_ELEMENT,(dt+1)*bt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,dt,yt.width,yt.height,1,Pt,Ht)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,yt.width,yt.height,at.depth,Pt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,mt,yt.width,yt.height,at.depth,0,yt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,yt.width,yt.height,at.depth,Pt,Et,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,mt,yt.width,yt.height,at.depth,0,Pt,Et,yt.data)}else{Vt&&jt&&e.texStorage2D(i.TEXTURE_2D,J,mt,qt[0].width,qt[0].height);for(let it=0,Lt=qt.length;it<Lt;it++)yt=qt[it],A.format!==Ae?Pt!==null?Vt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,yt.width,yt.height,Pt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,mt,yt.width,yt.height,0,yt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,yt.width,yt.height,Pt,Et,yt.data):e.texImage2D(i.TEXTURE_2D,it,mt,yt.width,yt.height,0,Pt,Et,yt.data)}else if(A.isDataArrayTexture)if(Vt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,mt,at.width,at.height,at.depth),H)if(A.layerUpdates.size>0){const it=Lu(at.width,at.height,A.format,A.type);for(const Lt of A.layerUpdates){const bt=at.data.subarray(Lt*it/at.data.BYTES_PER_ELEMENT,(Lt+1)*it/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,at.width,at.height,1,Pt,Et,bt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Pt,Et,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,at.width,at.height,at.depth,0,Pt,Et,at.data);else if(A.isData3DTexture)Vt?(jt&&e.texStorage3D(i.TEXTURE_3D,J,mt,at.width,at.height,at.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Pt,Et,at.data)):e.texImage3D(i.TEXTURE_3D,0,mt,at.width,at.height,at.depth,0,Pt,Et,at.data);else if(A.isFramebufferTexture){if(jt)if(Vt)e.texStorage2D(i.TEXTURE_2D,J,mt,at.width,at.height);else{let it=at.width,Lt=at.height;for(let bt=0;bt<J;bt++)e.texImage2D(i.TEXTURE_2D,bt,mt,it,Lt,0,Pt,Et,null),it>>=1,Lt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),at.parentNode!==it){it.appendChild(at),f.add(A),it.onpaint=ne=>{const Te=ne.changedElements;for(const de of f)Te.includes(de.image)&&(de.needsUpdate=!0)},it.requestPaint();return}const Lt=0,bt=i.RGBA,dt=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Lt,bt,dt,Ht,at),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Vt&&jt){const it=ve(qt[0]);e.texStorage2D(i.TEXTURE_2D,J,mt,it.width,it.height)}for(let it=0,Lt=qt.length;it<Lt;it++)yt=qt[it],Vt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Pt,Et,yt):e.texImage2D(i.TEXTURE_2D,it,mt,Pt,Et,yt);A.generateMipmaps=!1}else if(Vt){if(jt){const it=ve(at);e.texStorage2D(i.TEXTURE_2D,J,mt,it.width,it.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Et,at)}else e.texImage2D(i.TEXTURE_2D,0,mt,Pt,Et,at);m(A)&&y(rt),Mt.__version=vt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function kt(U,A,$){if(A.image.length!==6)return;const rt=K(U,A),pt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);const vt=n.get(pt);if(pt.version!==vt.__version||rt===!0){e.activeTexture(i.TEXTURE0+$);const Mt=he.getPrimaries(he.workingColorSpace),nt=A.colorSpace===vi?null:he.getPrimaries(A.colorSpace),at=A.colorSpace===vi||Mt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Pt=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,mt=[];for(let dt=0;dt<6;dt++)!Pt&&!Et?mt[dt]=g(A.image[dt],!0,s.maxCubemapSize):mt[dt]=Et?A.image[dt].image:A.image[dt],mt[dt]=At(A,mt[dt]);const yt=mt[0],qt=r.convert(A.format,A.colorSpace),Vt=r.convert(A.type),jt=E(A.internalFormat,qt,Vt,A.normalized,A.colorSpace),H=A.isVideoTexture!==!0,J=vt.__version===void 0||rt===!0,it=pt.dataReady;let Lt=T(A,yt);Xt(i.TEXTURE_CUBE_MAP,A);let bt;if(Pt){H&&J&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,jt,yt.width,yt.height);for(let dt=0;dt<6;dt++){bt=mt[dt].mipmaps;for(let Ht=0;Ht<bt.length;Ht++){const ne=bt[Ht];A.format!==Ae?qt!==null?H?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,0,0,ne.width,ne.height,qt,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,jt,ne.width,ne.height,0,ne.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,0,0,ne.width,ne.height,qt,Vt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,jt,ne.width,ne.height,0,qt,Vt,ne.data)}}}else{if(bt=A.mipmaps,H&&J){bt.length>0&&Lt++;const dt=ve(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,jt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Et){H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,mt[dt].width,mt[dt].height,qt,Vt,mt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,jt,mt[dt].width,mt[dt].height,0,qt,Vt,mt[dt].data);for(let Ht=0;Ht<bt.length;Ht++){const Te=bt[Ht].image[dt].image;H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,0,0,Te.width,Te.height,qt,Vt,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,jt,Te.width,Te.height,0,qt,Vt,Te.data)}}else{H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,qt,Vt,mt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,jt,qt,Vt,mt[dt]);for(let Ht=0;Ht<bt.length;Ht++){const ne=bt[Ht];H?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,0,0,qt,Vt,ne.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,jt,qt,Vt,ne.image[dt])}}}m(A)&&y(i.TEXTURE_CUBE_MAP),vt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function xt(U,A,$,rt,pt,vt){const Mt=r.convert($.format,$.colorSpace),nt=r.convert($.type),at=E($.internalFormat,Mt,nt,$.normalized,$.colorSpace),Pt=n.get(A),Et=n.get($);if(Et.__renderTarget=A,!Pt.__hasExternalTextures){const mt=Math.max(1,A.width>>vt),yt=Math.max(1,A.height>>vt);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,vt,at,mt,yt,A.depth,0,Mt,nt,null):e.texImage2D(pt,vt,at,mt,yt,0,Mt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),le(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,pt,Et.__webglTexture,0,Ce(A)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,pt,Et.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(U,A,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const rt=A.depthTexture,pt=rt&&rt.isDepthTexture?rt.type:null,vt=R(A.stencilBuffer,pt),Mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;le(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(A),vt,A.width,A.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(A),vt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,U)}else{const rt=A.textures;for(let pt=0;pt<rt.length;pt++){const vt=rt[pt],Mt=r.convert(vt.format,vt.colorSpace),nt=r.convert(vt.type),at=E(vt.internalFormat,Mt,nt,vt.normalized,vt.colorSpace);le(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(A),at,A.width,A.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Yt(U,A,$){const rt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=n.get(A.depthTexture);if(pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),rt){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),pt.__webglTexture===void 0){pt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,A.depthTexture);const Pt=r.convert(A.depthTexture.format),Et=r.convert(A.depthTexture.type);let mt;A.depthTexture.format===oi?mt=i.DEPTH_COMPONENT24:A.depthTexture.format===Oi&&(mt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,mt,A.width,A.height,0,Pt,Et,null)}}else ot(A.depthTexture,0);const vt=pt.__webglTexture,Mt=Ce(A),nt=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,at=A.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===oi)le(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,nt,vt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,nt,vt,0);else if(A.depthTexture.format===Oi)le(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,nt,vt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,nt,vt,0);else throw new Error("Unknown depthTexture format")}function ce(U){const A=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const rt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),rt){const pt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,rt.removeEventListener("dispose",pt)};rt.addEventListener("dispose",pt),A.__depthDisposeCallback=pt}A.__boundDepthTexture=rt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if($)for(let rt=0;rt<6;rt++)Yt(A.__webglFramebuffer[rt],U,rt);else{const rt=U.texture.mipmaps;rt&&rt.length>0?Yt(A.__webglFramebuffer[0],U,0):Yt(A.__webglFramebuffer,U,0)}else if($){A.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[rt]),A.__webglDepthbuffer[rt]===void 0)A.__webglDepthbuffer[rt]=i.createRenderbuffer(),Jt(A.__webglDepthbuffer[rt],U,!1);else{const pt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,vt)}}else{const rt=U.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Jt(A.__webglDepthbuffer,U,!1);else{const pt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(U,A,$){const rt=n.get(U);A!==void 0&&xt(rt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&ce(U)}function ee(U){const A=U.texture,$=n.get(U),rt=n.get(A);U.addEventListener("dispose",v);const pt=U.textures,vt=U.isWebGLCubeRenderTarget===!0,Mt=pt.length>1;if(Mt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=A.version,a.memory.textures++),vt){$.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[nt]=[];for(let at=0;at<A.mipmaps.length;at++)$.__webglFramebuffer[nt][at]=i.createFramebuffer()}else $.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let nt=0;nt<A.mipmaps.length;nt++)$.__webglFramebuffer[nt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let nt=0,at=pt.length;nt<at;nt++){const Pt=n.get(pt[nt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&le(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let nt=0;nt<pt.length;nt++){const at=pt[nt];$.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[nt]);const Pt=r.convert(at.format,at.colorSpace),Et=r.convert(at.type),mt=E(at.internalFormat,Pt,Et,at.normalized,at.colorSpace,U.isXRRenderTarget===!0),yt=Ce(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,mt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,$.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,A);for(let nt=0;nt<6;nt++)if(A.mipmaps&&A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)xt($.__webglFramebuffer[nt][at],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,at);else xt($.__webglFramebuffer[nt],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(A)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let nt=0,at=pt.length;nt<at;nt++){const Pt=pt[nt],Et=n.get(Pt);let mt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(mt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Et.__webglTexture),Xt(mt,Pt),xt($.__webglFramebuffer,U,Pt,i.COLOR_ATTACHMENT0+nt,mt,0),m(Pt)&&y(mt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(nt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,rt.__webglTexture),Xt(nt,A),A.mipmaps&&A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)xt($.__webglFramebuffer[at],U,A,i.COLOR_ATTACHMENT0,nt,at);else xt($.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,nt,0);m(A)&&y(nt),e.unbindTexture()}U.depthBuffer&&ce(U)}function Le(U){const A=U.textures;for(let $=0,rt=A.length;$<rt;$++){const pt=A[$];if(m(pt)){const vt=b(U),Mt=n.get(pt).__webglTexture;e.bindTexture(vt,Mt),y(vt),e.unbindTexture()}}}const Me=[],Ye=[];function X(U){if(U.samples>0){if(le(U)===!1){const A=U.textures,$=U.width,rt=U.height;let pt=i.COLOR_BUFFER_BIT;const vt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(U),nt=A.length>1;if(nt)for(let Pt=0;Pt<A.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const at=U.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Pt=0;Pt<A.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Pt]);const Et=n.get(A[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,$,rt,0,0,$,rt,pt,i.NEAREST),l===!0&&(Me.length=0,Ye.length=0,Me.push(i.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Me.push(vt),Ye.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Pt=0;Pt<A.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Pt]);const Et=n.get(A[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ce(U){return Math.min(s.maxSamples,U.samples)}function le(U){const A=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function pe(U){const A=a.render.frame;d.get(U)!==A&&(d.set(U,A),U.update())}function At(U,A){const $=U.colorSpace,rt=U.format,pt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==xn&&$!==vi&&(he.getTransfer($)===me?(rt!==Ae||pt!==Je)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",$)),A}function ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.getTextureUnits=k,this.setTextureUnits=O,this.setTexture2D=ot,this.setTexture2DArray=st,this.setTexture3D=gt,this.setTextureCube=wt,this.rebindTextures=oe,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wx(i,t){function e(n,s=vi){let r;const a=he.getTransfer(s);if(n===Je)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Na)return i.BYTE;if(n===hc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===As)return i.INT;if(n===en)return i.UNSIGNED_INT;if(n===Re)return i.FLOAT;if(n===He)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===Ae)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===Mi)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===dn)return i.RG;if(n===vr)return i.RG_INTEGER;if(n===Is)return i.RGBA_INTEGER;if(n===Ca||n===Pa||n===Ia||n===Da)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===xl||n===vl||n===yl||n===Ml||n===Fa||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===xl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yl)return r.COMPRESSED_R11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return r.COMPRESSED_RG11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bl||n===El||n===Tl||n===Al||n===wl||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===Bl||n===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Vl||n===Oa||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Vh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:Rx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ix extends wi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",g=new Px,m={},y=e.getContextAttributes();let b=null,E=null;const R=[],T=[],P=new Wt;let v=null;const w=new an;w.viewport=new ye;const L=new an;L.viewport=new ye;const I=[w,L],F=new Cp;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=R[K];return et===void 0&&(et=new ho,R[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=R[K];return et===void 0&&(et=new ho,R[K]=et),et.getGripSpace()},this.getHand=function(K){let et=R[K];return et===void 0&&(et=new ho,R[K]=et),et.getHandSpace()};function O(K){const et=T.indexOf(K.inputSource);if(et===-1)return;const ct=R[et];ct!==void 0&&(ct.update(K.inputSource,K.frame,u||a),ct.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let K=0;K<R.length;K++){const et=T[K];et!==null&&(T[K]=null,R[K].disconnect(et))}z=null,k=null,g.reset();for(const K in m)delete m[K];t.setRenderTarget(b),p=null,h=null,f=null,s=null,E=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Dt=null,kt=null;y.depth&&(kt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=y.stencil?Oi:oi,Dt=y.stencil?gr:en);const xt={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(xt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new Yn(h.textureWidth,h.textureHeight,{format:Ae,type:Je,depthTexture:new Ls(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Ae,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(K){for(let et=0;et<K.removed.length;et++){const ct=K.removed[et],Dt=T.indexOf(ct);Dt>=0&&(T[Dt]=null,R[Dt].disconnect(ct))}for(let et=0;et<K.added.length;et++){const ct=K.added[et];let Dt=T.indexOf(ct);if(Dt===-1){for(let xt=0;xt<R.length;xt++)if(xt>=T.length){T.push(ct),Dt=xt;break}else if(T[xt]===null){T[xt]=ct,Dt=xt;break}if(Dt===-1)break}const kt=R[Dt];kt&&kt.connect(ct)}}const ot=new B,st=new B;function gt(K,et,ct){ot.setFromMatrixPosition(et.matrixWorld),st.setFromMatrixPosition(ct.matrixWorld);const Dt=ot.distanceTo(st),kt=et.projectionMatrix.elements,xt=ct.projectionMatrix.elements,Jt=kt[14]/(kt[10]-1),Yt=kt[14]/(kt[10]+1),ce=(kt[9]+1)/kt[5],oe=(kt[9]-1)/kt[5],ee=(kt[8]-1)/kt[0],Le=(xt[8]+1)/xt[0],Me=Jt*ee,Ye=Jt*Le,X=Dt/(-ee+Le),Ce=X*-ee;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ce),K.translateZ(X),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),kt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const le=Jt+X,pe=Yt+X,At=Me-Ce,ve=Ye+(Dt-Ce),U=ce*Yt/pe*le,A=oe*Yt/pe*le;K.projectionMatrix.makePerspective(At,ve,U,A,le,pe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function wt(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,ct=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),F.near=L.near=w.near=et,F.far=L.far=w.far=ct,(z!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,k=F.far),F.layers.mask=K.layers.mask|6,w.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Dt=K.parent,kt=F.cameras;wt(F,Dt);for(let xt=0;xt<kt.length;xt++)wt(kt[xt],Dt);kt.length===2?gt(F,w,L):F.projectionMatrix.copy(w.projectionMatrix),St(K,F,Dt)};function St(K,et,ct){ct===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(ct.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ds*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(K){return m[K]};let Ot=null;function re(K,et){if(d=et.getViewerPose(u||a),x=et,d!==null){const ct=d.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Dt=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,Dt=!0);for(let Yt=0;Yt<ct.length;Yt++){const ce=ct[Yt];let oe=null;if(p!==null)oe=p.getViewport(ce);else{const Le=f.getViewSubImage(h,ce);oe=Le.viewport,Yt===0&&(t.setRenderTargetTextures(E,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(E))}let ee=I[Yt];ee===void 0&&(ee=new an,ee.layers.enable(Yt),ee.viewport=new ye,I[Yt]=ee),ee.matrix.fromArray(ce.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(oe.x,oe.y,oe.width,oe.height),Yt===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Dt===!0&&F.cameras.push(ee)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const Yt=f.getDepthInformation(ct[0]);Yt&&Yt.isValid&&Yt.texture&&g.init(Yt,s.renderState)}if(kt&&kt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let Yt=0;Yt<ct.length;Yt++){const ce=ct[Yt].camera;if(ce){let oe=m[ce];oe||(oe=new Vh,m[ce]=oe);const ee=f.getCameraImage(ce);oe.sourceTexture=ee}}}}for(let ct=0;ct<R.length;ct++){const Dt=T[ct],kt=R[ct];Dt!==null&&kt!==void 0&&kt.update(Dt,et,u||a)}Ot&&Ot(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}const Xt=new jh;Xt.setAnimationLoop(re),this.setAnimationLoop=function(K){Ot=K},this.dispose=function(){}}}const Dx=new te,nf=new ie;nf.set(-1,0,0,0,1,0,0,0,1);function Lx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Wh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,b,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&p(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,b):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===tn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===tn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),b=y.envMap,E=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(E)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const E=b.program;n.uniformBlockBinding(y,E)}function u(y,b){let E=s[y.id];E===void 0&&(x(y),E=d(y),s[y.id]=E,y.addEventListener("dispose",g));const R=b.program;n.updateUBOMapping(y,R);const T=t.render.frame;r[y.id]!==T&&(h(y),r[y.id]=T)}function d(y){const b=f();y.__bindingPointIndex=b;const E=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=s[y.id],E=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,P=E.length;T<P;T++){const v=Array.isArray(E[T])?E[T]:[E[T]];for(let w=0,L=v.length;w<L;w++){const I=v[w];if(p(I,T,w,R)===!0){const F=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let O=0;O<z.length;O++){const V=z[O],q=M(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+k,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):ArrayBuffer.isView(V)?I.__data.set(new V.constructor(V.buffer,V.byteOffset,I.__data.length)):(V.toArray(I.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,b,E,R){const T=y.value,P=b+"_"+E;if(R[P]===void 0)return typeof T=="number"||typeof T=="boolean"?R[P]=T:ArrayBuffer.isView(T)?R[P]=T.slice():R[P]=T.clone(),!0;{const v=R[P];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return R[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function x(y){const b=y.uniforms;let E=0;const R=16;for(let P=0,v=b.length;P<v;P++){const w=Array.isArray(b[P])?b[P]:[b[P]];for(let L=0,I=w.length;L<I;L++){const F=w[L],z=Array.isArray(F.value)?F.value:[F.value];for(let k=0,O=z.length;k<O;k++){const V=z[k],q=M(V),ot=E%R,st=ot%q.boundary,gt=ot+st;E+=st,gt!==0&&R-gt<q.storage&&(E+=R-gt),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=q.storage}}}const T=E%R;return T>0&&(E+=R-T),y.__size=E,y.__cache={},this}function M(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",y),b}function g(y){const b=y.target;b.removeEventListener("dispose",g);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:u,dispose:m}}const Nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function Fx(){return kn===null&&(kn=new zi(Nx,16,16,dn,He),kn.name="DFG_LUT",kn.minFilter=be,kn.magFilter=be,kn.wrapS=Dn,kn.wrapT=Dn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class Ox{constructor(t={}){const{canvas:e=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Je}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const M=p,g=new Set([Is,vr,Za]),m=new Set([Je,en,Ps,gr,fc,dc]),y=new Uint32Array(4),b=new Int32Array(4),E=new B;let R=null,T=null;const P=[],v=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1,F=null;this._outputColorSpace=fn;let z=0,k=0,O=null,V=-1,q=null;const ot=new ye,st=new ye;let gt=null;const wt=new se(0);let St=0,Ot=e.width,re=e.height,Xt=1,K=null,et=null;const ct=new ye(0,0,Ot,re),Dt=new ye(0,0,Ot,re);let kt=!1;const xt=new vc;let Jt=!1,Yt=!1;const ce=new te,oe=new B,ee=new ye,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Ye(){return O===null?Xt:1}let X=n;function Ce(c,_){return e.getContext(c,_)}try{const c={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",ne,!1),X===null){const _="webgl2";if(X=Ce(_,c),X===null)throw Ce(_)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(c){throw Zt("WebGLRenderer: "+c.message),c}let le,pe,At,ve,U,A,$,rt,pt,vt,Mt,nt,at,Pt,Et,mt,yt,qt,Vt,jt,H,J,it;function Lt(){le=new F_(X),le.init(),H=new wx(X,le),pe=new R_(X,le,t,H),At=new Tx(X,le),pe.reversedDepthBuffer&&h&&At.buffers.depth.setReversed(!0),ve=new z_(X),U=new hx,A=new Ax(X,le,At,U,pe,H,ve),$=new N_(L),rt=new Gp(X),J=new A_(X,rt),pt=new O_(X,rt,ve,J),vt=new V_(X,pt,rt,J,ve),qt=new k_(X,pe,A),Et=new C_(U),Mt=new ux(L,$,le,pe,J,Et),nt=new Lx(L,U),at=new dx,Pt=new vx(le),yt=new T_(L,$,At,vt,x,l),mt=new Ex(L,vt,pe),it=new Ux(X,ve,pe,At),Vt=new w_(X,le,ve),jt=new B_(X,le,ve),ve.programs=Mt.programs,L.capabilities=pe,L.extensions=le,L.properties=U,L.renderLists=at,L.shadowMap=mt,L.state=At,L.info=ve}Lt(),M!==Je&&(w=new G_(M,e.width,e.height,s,r));const bt=new Ix(L,X);this.xr=bt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const c=le.get("WEBGL_lose_context");c&&c.loseContext()},this.forceContextRestore=function(){const c=le.get("WEBGL_lose_context");c&&c.restoreContext()},this.getPixelRatio=function(){return Xt},this.setPixelRatio=function(c){c!==void 0&&(Xt=c,this.setSize(Ot,re,!1))},this.getSize=function(c){return c.set(Ot,re)},this.setSize=function(c,_,S=!0){if(bt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=c,re=_,e.width=Math.floor(c*Xt),e.height=Math.floor(_*Xt),S===!0&&(e.style.width=c+"px",e.style.height=_+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,c,_)},this.getDrawingBufferSize=function(c){return c.set(Ot*Xt,re*Xt).floor()},this.setDrawingBufferSize=function(c,_,S){Ot=c,re=_,Xt=S,e.width=Math.floor(c*S),e.height=Math.floor(_*S),this.setViewport(0,0,c,_)},this.setEffects=function(c){if(M===Je){Zt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(c){for(let _=0;_<c.length;_++)if(c[_].isOutputPass===!0){zt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(c||[])},this.getCurrentViewport=function(c){return c.copy(ot)},this.getViewport=function(c){return c.copy(ct)},this.setViewport=function(c,_,S,C){c.isVector4?ct.set(c.x,c.y,c.z,c.w):ct.set(c,_,S,C),At.viewport(ot.copy(ct).multiplyScalar(Xt).round())},this.getScissor=function(c){return c.copy(Dt)},this.setScissor=function(c,_,S,C){c.isVector4?Dt.set(c.x,c.y,c.z,c.w):Dt.set(c,_,S,C),At.scissor(st.copy(Dt).multiplyScalar(Xt).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(c){At.setScissorTest(kt=c)},this.setOpaqueSort=function(c){K=c},this.setTransparentSort=function(c){et=c},this.getClearColor=function(c){return c.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(c=!0,_=!0,S=!0){let C=0;if(c){let D=!1;if(O!==null){const G=O.texture.format;D=g.has(G)}if(D){const G=O.texture.type,N=m.has(G),W=yt.getClearColor(),Y=yt.getClearAlpha(),Z=W.r,Q=W.g,tt=W.b;N?(y[0]=Z,y[1]=Q,y[2]=tt,y[3]=Y,X.clearBufferuiv(X.COLOR,0,y)):(b[0]=Z,b[1]=Q,b[2]=tt,b[3]=Y,X.clearBufferiv(X.COLOR,0,b))}else C|=X.COLOR_BUFFER_BIT}_&&(C|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),S&&(C|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C!==0&&X.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(c){c.setRenderer(this),F=c},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),yt.dispose(),at.dispose(),Pt.dispose(),U.dispose(),$.dispose(),vt.dispose(),J.dispose(),it.dispose(),Mt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Er),bt.removeEventListener("sessionend",Tr),On.stop()};function dt(c){c.preventDefault(),ka("WebGLRenderer: Context Lost."),I=!0}function Ht(){ka("WebGLRenderer: Context Restored."),I=!1;const c=ve.autoReset,_=mt.enabled,S=mt.autoUpdate,C=mt.needsUpdate,D=mt.type;Lt(),ve.autoReset=c,mt.enabled=_,mt.autoUpdate=S,mt.needsUpdate=C,mt.type=D}function ne(c){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",c.statusMessage)}function Te(c){const _=c.target;_.removeEventListener("dispose",Te),de(_)}function de(c){bn(c),U.remove(c)}function bn(c){const _=U.get(c).programs;_!==void 0&&(_.forEach(function(S){Mt.releaseProgram(S)}),c.isShaderMaterial&&Mt.releaseShaderCache(c))}this.renderBufferDirect=function(c,_,S,C,D,G){_===null&&(_=Le);const N=D.isMesh&&D.matrixWorld.determinant()<0,W=Hi(c,_,S,C,D);At.setMaterial(C,N);let Y=S.index,Z=1;if(C.wireframe===!0){if(Y=pt.getWireframeAttribute(S),Y===void 0)return;Z=2}const Q=S.drawRange,tt=S.attributes.position;let j=Q.start*Z,lt=(Q.start+Q.count)*Z;G!==null&&(j=Math.max(j,G.start*Z),lt=Math.min(lt,(G.start+G.count)*Z)),Y!==null?(j=Math.max(j,0),lt=Math.min(lt,Y.count)):tt!=null&&(j=Math.max(j,0),lt=Math.min(lt,tt.count));const _t=lt-j;if(_t<0||_t===1/0)return;J.setup(D,C,W,S,Y);let ht,ft=Vt;if(Y!==null&&(ht=rt.get(Y),ft=jt,ft.setIndex(ht)),D.isMesh)C.wireframe===!0?(At.setLineWidth(C.wireframeLinewidth*Ye()),ft.setMode(X.LINES)):ft.setMode(X.TRIANGLES);else if(D.isLine){let Rt=C.linewidth;Rt===void 0&&(Rt=1),At.setLineWidth(Rt*Ye()),D.isLineSegments?ft.setMode(X.LINES):D.isLineLoop?ft.setMode(X.LINE_LOOP):ft.setMode(X.LINE_STRIP)}else D.isPoints?ft.setMode(X.POINTS):D.isSprite&&ft.setMode(X.TRIANGLES);if(D.isBatchedMesh)if(le.get("WEBGL_multi_draw"))ft.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Rt=D._multiDrawStarts,ut=D._multiDrawCounts,Gt=D._multiDrawCount,Ut=Y?rt.get(Y).bytesPerElement:1,It=U.get(C).currentProgram.getUniforms();for(let Tt=0;Tt<Gt;Tt++)It.setValue(X,"_gl_DrawID",Tt),ft.render(Rt[Tt]/Ut,ut[Tt])}else if(D.isInstancedMesh)ft.renderInstances(j,_t,D.count);else if(S.isInstancedBufferGeometry){const Rt=S._maxInstanceCount!==void 0?S._maxInstanceCount:1/0,ut=Math.min(S.instanceCount,Rt);ft.renderInstances(j,_t,ut)}else ft.render(j,_t)};function gn(c,_,S){c.transparent===!0&&c.side===Gn&&c.forceSinglePass===!1?(c.side=tn,c.needsUpdate=!0,Ci(c,_,S),c.side=qn,c.needsUpdate=!0,Ci(c,_,S),c.side=Gn):Ci(c,_,S)}this.compile=function(c,_,S=null){S===null&&(S=c),T=Pt.get(S),T.init(_),v.push(T),S.traverseVisible(function(D){D.isLight&&D.layers.test(_.layers)&&(T.pushLight(D),D.castShadow&&T.pushShadow(D))}),c!==S&&c.traverseVisible(function(D){D.isLight&&D.layers.test(_.layers)&&(T.pushLight(D),D.castShadow&&T.pushShadow(D))}),T.setupLights();const C=new Set;return c.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const G=D.material;if(G)if(Array.isArray(G))for(let N=0;N<G.length;N++){const W=G[N];gn(W,S,D),C.add(W)}else gn(G,S,D),C.add(G)}),T=v.pop(),C},this.compileAsync=function(c,_,S=null){const C=this.compile(c,_,S);return new Promise(D=>{function G(){if(C.forEach(function(N){U.get(N).currentProgram.isReady()&&C.delete(N)}),C.size===0){D(c);return}setTimeout(G,10)}le.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let Vs=null;function eo(c){Vs&&Vs(c)}function Er(){On.stop()}function Tr(){On.start()}const On=new jh;On.setAnimationLoop(eo),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(c){Vs=c,bt.setAnimationLoop(c),c===null?On.stop():On.start()},bt.addEventListener("sessionstart",Er),bt.addEventListener("sessionend",Tr),this.render=function(c,_){if(_!==void 0&&_.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(c,_);const S=bt.enabled===!0&&bt.isPresenting===!0,C=w!==null&&(O===null||S)&&w.begin(L,O);if(c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(_),_=bt.getCamera()),c.isScene===!0&&c.onBeforeRender(L,c,_,O),T=Pt.get(c,v.length),T.init(_),T.state.textureUnits=A.getTextureUnits(),v.push(T),ce.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),xt.setFromProjectionMatrix(ce,Wn,_.reversedDepth),Yt=this.localClippingEnabled,Jt=Et.init(this.clippingPlanes,Yt),R=at.get(c,P.length),R.init(),P.push(R),bt.enabled===!0&&bt.isPresenting===!0){const N=L.xr.getDepthSensingMesh();N!==null&&Hs(N,_,-1/0,L.sortObjects)}Hs(c,_,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(K,et),Me=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Me&&yt.addToRenderList(R,c),this.info.render.frame++,Jt===!0&&Et.beginShadows();const D=T.state.shadowsArray;if(mt.render(D,c,_),Jt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(C&&w.hasRenderPass())===!1){const N=R.opaque,W=R.transmissive;if(T.setupLights(),_.isArrayCamera){const Y=_.cameras;if(W.length>0)for(let Z=0,Q=Y.length;Z<Q;Z++){const tt=Y[Z];wr(N,W,c,tt)}Me&&yt.render(c);for(let Z=0,Q=Y.length;Z<Q;Z++){const tt=Y[Z];Ar(R,c,tt,tt.viewport)}}else W.length>0&&wr(N,W,c,_),Me&&yt.render(c),Ar(R,c,_)}O!==null&&k===0&&(A.updateMultisampleRenderTarget(O),A.updateRenderTargetMipmap(O)),C&&w.end(L),c.isScene===!0&&c.onAfterRender(L,c,_),J.resetDefaultState(),V=-1,q=null,v.pop(),v.length>0?(T=v[v.length-1],A.setTextureUnits(T.state.textureUnits),Jt===!0&&Et.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,F!==null&&F.renderEnd()};function Hs(c,_,S,C){if(c.visible===!1)return;if(c.layers.test(_.layers)){if(c.isGroup)S=c.renderOrder;else if(c.isLOD)c.autoUpdate===!0&&c.update(_);else if(c.isLightProbeGrid)T.pushLightProbeGrid(c);else if(c.isLight)T.pushLight(c),c.castShadow&&T.pushShadow(c);else if(c.isSprite){if(!c.frustumCulled||xt.intersectsSprite(c)){C&&ee.setFromMatrixPosition(c.matrixWorld).applyMatrix4(ce);const N=vt.update(c),W=c.material;W.visible&&R.push(c,N,W,S,ee.z,null)}}else if((c.isMesh||c.isLine||c.isPoints)&&(!c.frustumCulled||xt.intersectsObject(c))){const N=vt.update(c),W=c.material;if(C&&(c.boundingSphere!==void 0?(c.boundingSphere===null&&c.computeBoundingSphere(),ee.copy(c.boundingSphere.center)):(N.boundingSphere===null&&N.computeBoundingSphere(),ee.copy(N.boundingSphere.center)),ee.applyMatrix4(c.matrixWorld).applyMatrix4(ce)),Array.isArray(W)){const Y=N.groups;for(let Z=0,Q=Y.length;Z<Q;Z++){const tt=Y[Z],j=W[tt.materialIndex];j&&j.visible&&R.push(c,N,j,S,ee.z,tt)}}else W.visible&&R.push(c,N,W,S,ee.z,null)}}const G=c.children;for(let N=0,W=G.length;N<W;N++)Hs(G[N],_,S,C)}function Ar(c,_,S,C){const{opaque:D,transmissive:G,transparent:N}=c;T.setupLightsView(S),Jt===!0&&Et.setGlobalState(L.clippingPlanes,S),C&&At.viewport(ot.copy(C)),D.length>0&&Ri(D,_,S),G.length>0&&Ri(G,_,S),N.length>0&&Ri(N,_,S),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function wr(c,_,S,C){if((S.isScene===!0?S.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[C.id]===void 0){const j=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[C.id]=new Yn(1,1,{generateMipmaps:!0,type:j?He:Je,minFilter:yi,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}const G=T.state.transmissionRenderTarget[C.id],N=C.viewport||ot;G.setSize(N.z*L.transmissionResolutionScale,N.w*L.transmissionResolutionScale);const W=L.getRenderTarget(),Y=L.getActiveCubeFace(),Z=L.getActiveMipmapLevel();L.setRenderTarget(G),L.getClearColor(wt),St=L.getClearAlpha(),St<1&&L.setClearColor(16777215,.5),L.clear(),Me&&yt.render(S);const Q=L.toneMapping;L.toneMapping=Xn;const tt=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),T.setupLightsView(C),Jt===!0&&Et.setGlobalState(L.clippingPlanes,C),Ri(c,S,C),A.updateMultisampleRenderTarget(G),A.updateRenderTargetMipmap(G),le.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let lt=0,_t=_.length;lt<_t;lt++){const ht=_[lt],{object:ft,geometry:Rt,material:ut,group:Gt}=ht;if(ut.side===Gn&&ft.layers.test(C.layers)){const Ut=ut.side;ut.side=tn,ut.needsUpdate=!0,Rr(ft,S,C,Rt,ut,Gt),ut.side=Ut,ut.needsUpdate=!0,j=!0}}j===!0&&(A.updateMultisampleRenderTarget(G),A.updateRenderTargetMipmap(G))}L.setRenderTarget(W,Y,Z),L.setClearColor(wt,St),tt!==void 0&&(C.viewport=tt),L.toneMapping=Q}function Ri(c,_,S){const C=_.isScene===!0?_.overrideMaterial:null;for(let D=0,G=c.length;D<G;D++){const N=c[D],{object:W,geometry:Y,group:Z}=N;let Q=N.material;Q.allowOverride===!0&&C!==null&&(Q=C),W.layers.test(S.layers)&&Rr(W,_,S,Y,Q,Z)}}function Rr(c,_,S,C,D,G){c.onBeforeRender(L,_,S,C,D,G),c.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,c.matrixWorld),c.normalMatrix.getNormalMatrix(c.modelViewMatrix),D.onBeforeRender(L,_,S,C,c,G),D.transparent===!0&&D.side===Gn&&D.forceSinglePass===!1?(D.side=tn,D.needsUpdate=!0,L.renderBufferDirect(S,_,C,D,c,G),D.side=qn,D.needsUpdate=!0,L.renderBufferDirect(S,_,C,D,c,G),D.side=Gn):L.renderBufferDirect(S,_,C,D,c,G),c.onAfterRender(L,_,S,C,D,G)}function Ci(c,_,S){_.isScene!==!0&&(_=Le);const C=U.get(c),D=T.state.lights,G=T.state.shadowsArray,N=D.state.version,W=Mt.getParameters(c,D.state,G,_,S,T.state.lightProbeGridArray),Y=Mt.getProgramCacheKey(W);let Z=C.programs;C.environment=c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial?_.environment:null,C.fog=_.fog;const Q=c.isMeshStandardMaterial||c.isMeshLambertMaterial&&!c.envMap||c.isMeshPhongMaterial&&!c.envMap;C.envMap=$.get(c.envMap||C.environment,Q),C.envMapRotation=C.environment!==null&&c.envMap===null?_.environmentRotation:c.envMapRotation,Z===void 0&&(c.addEventListener("dispose",Te),Z=new Map,C.programs=Z);let tt=Z.get(Y);if(tt!==void 0){if(C.currentProgram===tt&&C.lightsStateVersion===N)return Pr(c,W),tt}else W.uniforms=Mt.getUniforms(c),F!==null&&c.isNodeMaterial&&F.build(c,S,W),c.onBeforeCompile(W,L),tt=Mt.acquireProgram(W,Y),Z.set(Y,tt),C.uniforms=W.uniforms;const j=C.uniforms;return(!c.isShaderMaterial&&!c.isRawShaderMaterial||c.clipping===!0)&&(j.clippingPlanes=Et.uniform),Pr(c,W),C.needsLights=Gi(c),C.lightsStateVersion=N,C.needsLights&&(j.ambientLightColor.value=D.state.ambient,j.lightProbe.value=D.state.probe,j.directionalLights.value=D.state.directional,j.directionalLightShadows.value=D.state.directionalShadow,j.spotLights.value=D.state.spot,j.spotLightShadows.value=D.state.spotShadow,j.rectAreaLights.value=D.state.rectArea,j.ltc_1.value=D.state.rectAreaLTC1,j.ltc_2.value=D.state.rectAreaLTC2,j.pointLights.value=D.state.point,j.pointLightShadows.value=D.state.pointShadow,j.hemisphereLights.value=D.state.hemi,j.directionalShadowMatrix.value=D.state.directionalShadowMatrix,j.spotLightMatrix.value=D.state.spotLightMatrix,j.spotLightMap.value=D.state.spotLightMap,j.pointShadowMatrix.value=D.state.pointShadowMatrix),C.lightProbeGrid=T.state.lightProbeGridArray.length>0,C.currentProgram=tt,C.uniformsList=null,tt}function Cr(c){if(c.uniformsList===null){const _=c.currentProgram.getUniforms();c.uniformsList=La.seqWithValue(_.seq,c.uniforms)}return c.uniformsList}function Pr(c,_){const S=U.get(c);S.outputColorSpace=_.outputColorSpace,S.batching=_.batching,S.batchingColor=_.batchingColor,S.instancing=_.instancing,S.instancingColor=_.instancingColor,S.instancingMorph=_.instancingMorph,S.skinning=_.skinning,S.morphTargets=_.morphTargets,S.morphNormals=_.morphNormals,S.morphColors=_.morphColors,S.morphTargetsCount=_.morphTargetsCount,S.numClippingPlanes=_.numClippingPlanes,S.numIntersection=_.numClipIntersection,S.vertexAlphas=_.vertexAlphas,S.vertexTangents=_.vertexTangents,S.toneMapping=_.toneMapping}function Vi(c,_){if(c.length===0)return null;if(c.length===1)return c[0].texture!==null?c[0]:null;E.setFromMatrixPosition(_.matrixWorld);for(let S=0,C=c.length;S<C;S++){const D=c[S];if(D.texture!==null&&D.boundingBox.containsPoint(E))return D}return null}function Hi(c,_,S,C,D){_.isScene!==!0&&(_=Le),A.resetTextureUnits();const G=_.fog,N=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?_.environment:null,W=O===null?L.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:he.workingColorSpace,Y=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,Z=$.get(C.envMap||N,Y),Q=C.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,tt=!!S.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),j=!!S.morphAttributes.position,lt=!!S.morphAttributes.normal,_t=!!S.morphAttributes.color;let ht=Xn;C.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ht=L.toneMapping);const ft=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,Rt=ft!==void 0?ft.length:0,ut=U.get(C),Gt=T.state.lights;if(Jt===!0&&(Yt===!0||c!==q)){const Kt=c===q&&C.id===V;Et.setState(C,c,Kt)}let Ut=!1;C.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Gt.state.version||ut.outputColorSpace!==W||D.isBatchedMesh&&ut.batching===!1||!D.isBatchedMesh&&ut.batching===!0||D.isBatchedMesh&&ut.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ut.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ut.instancing===!1||!D.isInstancedMesh&&ut.instancing===!0||D.isSkinnedMesh&&ut.skinning===!1||!D.isSkinnedMesh&&ut.skinning===!0||D.isInstancedMesh&&ut.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ut.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ut.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ut.instancingMorph===!1&&D.morphTexture!==null||ut.envMap!==Z||C.fog===!0&&ut.fog!==G||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==Et.numPlanes||ut.numIntersection!==Et.numIntersection)||ut.vertexAlphas!==Q||ut.vertexTangents!==tt||ut.morphTargets!==j||ut.morphNormals!==lt||ut.morphColors!==_t||ut.toneMapping!==ht||ut.morphTargetsCount!==Rt||!!ut.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ut=!0):(Ut=!0,ut.__version=C.version);let It=ut.currentProgram;Ut===!0&&(It=Ci(C,_,D),F&&C.isNodeMaterial&&F.onUpdateProgram(C,It,ut));let Tt=!1,Nt=!1,ue=!1;const Bt=It.getUniforms(),Ft=ut.uniforms;if(At.useProgram(It.program)&&(Tt=!0,Nt=!0,ue=!0),C.id!==V&&(V=C.id,Nt=!0),ut.needsLights){const Kt=Vi(T.state.lightProbeGridArray,D);ut.lightProbeGrid!==Kt&&(ut.lightProbeGrid=Kt,Nt=!0)}if(Tt||q!==c){At.buffers.depth.getReversed()&&c.reversedDepth!==!0&&(c._reversedDepth=!0,c.updateProjectionMatrix()),Bt.setValue(X,"projectionMatrix",c.projectionMatrix),Bt.setValue(X,"viewMatrix",c.matrixWorldInverse);const Pe=Bt.map.cameraPosition;Pe!==void 0&&Pe.setValue(X,oe.setFromMatrixPosition(c.matrixWorld)),pe.logarithmicDepthBuffer&&Bt.setValue(X,"logDepthBufFC",2/(Math.log(c.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&Bt.setValue(X,"isOrthographic",c.isOrthographicCamera===!0),q!==c&&(q=c,Nt=!0,ue=!0)}if(ut.needsLights&&(Gt.state.directionalShadowMap.length>0&&Bt.setValue(X,"directionalShadowMap",Gt.state.directionalShadowMap,A),Gt.state.spotShadowMap.length>0&&Bt.setValue(X,"spotShadowMap",Gt.state.spotShadowMap,A),Gt.state.pointShadowMap.length>0&&Bt.setValue(X,"pointShadowMap",Gt.state.pointShadowMap,A)),D.isSkinnedMesh){Bt.setOptional(X,D,"bindMatrix"),Bt.setOptional(X,D,"bindMatrixInverse");const Kt=D.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Bt.setValue(X,"boneTexture",Kt.boneTexture,A))}D.isBatchedMesh&&(Bt.setOptional(X,D,"batchingTexture"),Bt.setValue(X,"batchingTexture",D._matricesTexture,A),Bt.setOptional(X,D,"batchingIdTexture"),Bt.setValue(X,"batchingIdTexture",D._indirectTexture,A),Bt.setOptional(X,D,"batchingColorTexture"),D._colorsTexture!==null&&Bt.setValue(X,"batchingColorTexture",D._colorsTexture,A));const Qt=S.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&qt.update(D,S,It),(Nt||ut.receiveShadow!==D.receiveShadow)&&(ut.receiveShadow=D.receiveShadow,Bt.setValue(X,"receiveShadow",D.receiveShadow)),(C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial)&&C.envMap===null&&_.environment!==null&&(Ft.envMapIntensity.value=_.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=Fx()),Nt){if(Bt.setValue(X,"toneMappingExposure",L.toneMappingExposure),ut.needsLights&&no(Ft,ue),G&&C.fog===!0&&nt.refreshFogUniforms(Ft,G),nt.refreshMaterialUniforms(Ft,C,Xt,re,T.state.transmissionRenderTarget[c.id]),ut.needsLights&&ut.lightProbeGrid){const Kt=ut.lightProbeGrid;Ft.probesSH.value=Kt.texture,Ft.probesMin.value.copy(Kt.boundingBox.min),Ft.probesMax.value.copy(Kt.boundingBox.max),Ft.probesResolution.value.copy(Kt.resolution)}La.upload(X,Cr(ut),Ft,A)}if(C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(La.upload(X,Cr(ut),Ft,A),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&Bt.setValue(X,"center",D.center),Bt.setValue(X,"modelViewMatrix",D.modelViewMatrix),Bt.setValue(X,"normalMatrix",D.normalMatrix),Bt.setValue(X,"modelMatrix",D.matrixWorld),C.uniformsGroups!==void 0){const Kt=C.uniformsGroups;for(let Pe=0,fe=Kt.length;Pe<fe;Pe++){const cn=Kt[Pe];it.update(cn,It),it.bind(cn,It)}}return It}function no(c,_){c.ambientLightColor.needsUpdate=_,c.lightProbe.needsUpdate=_,c.directionalLights.needsUpdate=_,c.directionalLightShadows.needsUpdate=_,c.pointLights.needsUpdate=_,c.pointLightShadows.needsUpdate=_,c.spotLights.needsUpdate=_,c.spotLightShadows.needsUpdate=_,c.rectAreaLights.needsUpdate=_,c.hemisphereLights.needsUpdate=_}function Gi(c){return c.isMeshLambertMaterial||c.isMeshToonMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isShadowMaterial||c.isShaderMaterial&&c.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(c,_,S){const C=U.get(c);C.__autoAllocateDepthBuffer=c.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),U.get(c.texture).__webglTexture=_,U.get(c.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:S,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(c,_){const S=U.get(c);S.__webglFramebuffer=_,S.__useDefaultFramebuffer=_===void 0};const Ir=X.createFramebuffer();this.setRenderTarget=function(c,_=0,S=0){O=c,z=_,k=S;let C=null,D=!1,G=!1;if(c){const W=U.get(c);if(W.__useDefaultFramebuffer!==void 0){At.bindFramebuffer(X.FRAMEBUFFER,W.__webglFramebuffer),ot.copy(c.viewport),st.copy(c.scissor),gt=c.scissorTest,At.viewport(ot),At.scissor(st),At.setScissorTest(gt),V=-1;return}else if(W.__webglFramebuffer===void 0)A.setupRenderTarget(c);else if(W.__hasExternalTextures)A.rebindTextures(c,U.get(c.texture).__webglTexture,U.get(c.depthTexture).__webglTexture);else if(c.depthBuffer){const Q=c.depthTexture;if(W.__boundDepthTexture!==Q){if(Q!==null&&U.has(Q)&&(c.width!==Q.image.width||c.height!==Q.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(c)}}const Y=c.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(G=!0);const Z=U.get(c).__webglFramebuffer;c.isWebGLCubeRenderTarget?(Array.isArray(Z[_])?C=Z[_][S]:C=Z[_],D=!0):c.samples>0&&A.useMultisampledRTT(c)===!1?C=U.get(c).__webglMultisampledFramebuffer:Array.isArray(Z)?C=Z[S]:C=Z,ot.copy(c.viewport),st.copy(c.scissor),gt=c.scissorTest}else ot.copy(ct).multiplyScalar(Xt).floor(),st.copy(Dt).multiplyScalar(Xt).floor(),gt=kt;if(S!==0&&(C=Ir),At.bindFramebuffer(X.FRAMEBUFFER,C)&&At.drawBuffers(c,C),At.viewport(ot),At.scissor(st),At.setScissorTest(gt),D){const W=U.get(c.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+_,W.__webglTexture,S)}else if(G){const W=_;for(let Y=0;Y<c.textures.length;Y++){const Z=U.get(c.textures[Y]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Y,Z.__webglTexture,S,W)}}else if(c!==null&&S!==0){const W=U.get(c.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,W.__webglTexture,S)}V=-1},this.readRenderTargetPixels=function(c,_,S,C,D,G,N,W=0){if(!(c&&c.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=U.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&N!==void 0&&(Y=Y[N]),Y){At.bindFramebuffer(X.FRAMEBUFFER,Y);try{const Z=c.textures[W],Q=Z.format,tt=Z.type;if(c.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+W),!pe.textureFormatReadable(Q)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(tt)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=c.width-C&&S>=0&&S<=c.height-D&&X.readPixels(_,S,C,D,H.convert(Q),H.convert(tt),G)}finally{const Z=O!==null?U.get(O).__webglFramebuffer:null;At.bindFramebuffer(X.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(c,_,S,C,D,G,N,W=0){if(!(c&&c.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=U.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&N!==void 0&&(Y=Y[N]),Y)if(_>=0&&_<=c.width-C&&S>=0&&S<=c.height-D){At.bindFramebuffer(X.FRAMEBUFFER,Y);const Z=c.textures[W],Q=Z.format,tt=Z.type;if(c.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+W),!pe.textureFormatReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const j=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,j),X.bufferData(X.PIXEL_PACK_BUFFER,G.byteLength,X.STREAM_READ),X.readPixels(_,S,C,D,H.convert(Q),H.convert(tt),0);const lt=O!==null?U.get(O).__webglFramebuffer:null;At.bindFramebuffer(X.FRAMEBUFFER,lt);const _t=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await sd(X,_t,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,j),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,G),X.deleteBuffer(j),X.deleteSync(_t),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(c,_=null,S=0){const C=Math.pow(2,-S),D=Math.floor(c.image.width*C),G=Math.floor(c.image.height*C),N=_!==null?_.x:0,W=_!==null?_.y:0;A.setTexture2D(c,0),X.copyTexSubImage2D(X.TEXTURE_2D,S,0,0,N,W,D,G),At.unbindTexture()};const ke=X.createFramebuffer(),sn=X.createFramebuffer();this.copyTextureToTexture=function(c,_,S=null,C=null,D=0,G=0){let N,W,Y,Z,Q,tt,j,lt,_t;const ht=c.isCompressedTexture?c.mipmaps[G]:c.image;if(S!==null)N=S.max.x-S.min.x,W=S.max.y-S.min.y,Y=S.isBox3?S.max.z-S.min.z:1,Z=S.min.x,Q=S.min.y,tt=S.isBox3?S.min.z:0;else{const Ft=Math.pow(2,-D);N=Math.floor(ht.width*Ft),W=Math.floor(ht.height*Ft),c.isDataArrayTexture?Y=ht.depth:c.isData3DTexture?Y=Math.floor(ht.depth*Ft):Y=1,Z=0,Q=0,tt=0}C!==null?(j=C.x,lt=C.y,_t=C.z):(j=0,lt=0,_t=0);const ft=H.convert(_.format),Rt=H.convert(_.type);let ut;_.isData3DTexture?(A.setTexture3D(_,0),ut=X.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(A.setTexture2DArray(_,0),ut=X.TEXTURE_2D_ARRAY):(A.setTexture2D(_,0),ut=X.TEXTURE_2D),At.activeTexture(X.TEXTURE0),At.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,_.flipY),At.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),At.pixelStorei(X.UNPACK_ALIGNMENT,_.unpackAlignment);const Gt=At.getParameter(X.UNPACK_ROW_LENGTH),Ut=At.getParameter(X.UNPACK_IMAGE_HEIGHT),It=At.getParameter(X.UNPACK_SKIP_PIXELS),Tt=At.getParameter(X.UNPACK_SKIP_ROWS),Nt=At.getParameter(X.UNPACK_SKIP_IMAGES);At.pixelStorei(X.UNPACK_ROW_LENGTH,ht.width),At.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ht.height),At.pixelStorei(X.UNPACK_SKIP_PIXELS,Z),At.pixelStorei(X.UNPACK_SKIP_ROWS,Q),At.pixelStorei(X.UNPACK_SKIP_IMAGES,tt);const ue=c.isDataArrayTexture||c.isData3DTexture,Bt=_.isDataArrayTexture||_.isData3DTexture;if(c.isDepthTexture){const Ft=U.get(c),Qt=U.get(_),Kt=U.get(Ft.__renderTarget),Pe=U.get(Qt.__renderTarget);At.bindFramebuffer(X.READ_FRAMEBUFFER,Kt.__webglFramebuffer),At.bindFramebuffer(X.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let fe=0;fe<Y;fe++)ue&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,U.get(c).__webglTexture,D,tt+fe),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,U.get(_).__webglTexture,G,_t+fe)),X.blitFramebuffer(Z,Q,N,W,j,lt,N,W,X.DEPTH_BUFFER_BIT,X.NEAREST);At.bindFramebuffer(X.READ_FRAMEBUFFER,null),At.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(D!==0||c.isRenderTargetTexture||U.has(c)){const Ft=U.get(c),Qt=U.get(_);At.bindFramebuffer(X.READ_FRAMEBUFFER,ke),At.bindFramebuffer(X.DRAW_FRAMEBUFFER,sn);for(let Kt=0;Kt<Y;Kt++)ue?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ft.__webglTexture,D,tt+Kt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ft.__webglTexture,D),Bt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qt.__webglTexture,G,_t+Kt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Qt.__webglTexture,G),D!==0?X.blitFramebuffer(Z,Q,N,W,j,lt,N,W,X.COLOR_BUFFER_BIT,X.NEAREST):Bt?X.copyTexSubImage3D(ut,G,j,lt,_t+Kt,Z,Q,N,W):X.copyTexSubImage2D(ut,G,j,lt,Z,Q,N,W);At.bindFramebuffer(X.READ_FRAMEBUFFER,null),At.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Bt?c.isDataTexture||c.isData3DTexture?X.texSubImage3D(ut,G,j,lt,_t,N,W,Y,ft,Rt,ht.data):_.isCompressedArrayTexture?X.compressedTexSubImage3D(ut,G,j,lt,_t,N,W,Y,ft,ht.data):X.texSubImage3D(ut,G,j,lt,_t,N,W,Y,ft,Rt,ht):c.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,G,j,lt,N,W,ft,Rt,ht.data):c.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,G,j,lt,ht.width,ht.height,ft,ht.data):X.texSubImage2D(X.TEXTURE_2D,G,j,lt,N,W,ft,Rt,ht);At.pixelStorei(X.UNPACK_ROW_LENGTH,Gt),At.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ut),At.pixelStorei(X.UNPACK_SKIP_PIXELS,It),At.pixelStorei(X.UNPACK_SKIP_ROWS,Tt),At.pixelStorei(X.UNPACK_SKIP_IMAGES,Nt),G===0&&_.generateMipmaps&&X.generateMipmap(ut),At.unbindTexture()},this.initRenderTarget=function(c){U.get(c).__webglFramebuffer===void 0&&A.setupRenderTarget(c)},this.initTexture=function(c){c.isCubeTexture?A.setTextureCube(c,0):c.isData3DTexture?A.setTexture3D(c,0):c.isDataArrayTexture||c.isCompressedArrayTexture?A.setTexture2DArray(c,0):A.setTexture2D(c,0),At.unbindTexture()},this.resetState=function(){z=0,k=0,O=null,At.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const nh={type:"change"},Ec={type:"start"},sf={type:"end"},da=new Ns,ih=new Vn,Bx=Math.cos(70*Sd.DEG2RAD),Oe=new B,rn=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ho=1e-6;class zx extends Vp{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new li,this._lastTargetPosition=new B,this._quat=new li().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pu,this._sphericalDelta=new Pu,this._scale=1,this._panOffset=new B,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new B,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vx.bind(this),this._onPointerDown=kx.bind(this),this._onPointerUp=Hx.bind(this),this._onContextMenu=jx.bind(this),this._onMouseWheel=Xx.bind(this),this._onKeyDown=Yx.bind(this),this._onTouchStart=qx.bind(this),this._onTouchMove=Zx.bind(this),this._onMouseDown=Gx.bind(this),this._onMouseMove=Wx.bind(this),this._interceptControlDown=Kx.bind(this),this._interceptControlUp=$x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nh),this.update(),this.state=xe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Oe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new B(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(da.origin.copy(this.object.position),da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(da.direction))<Bx?this.object.lookAt(this.target):(ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),da.intersectPlane(ih,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ho||this._lastTargetPosition.distanceToSquared(this.target)>Ho?(this.dispatchEvent(nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Vx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Gx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xe.DOLLY;break;case Es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}break;case Es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ec)}function Wx(i){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xx(i){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(i.preventDefault(),this.dispatchEvent(Ec),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sf))}function Yx(i){this.enabled!==!1&&this._handleKeyDown(i)}function qx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xe.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xe.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ec)}function Zx(i){switch(this._trackPointer(i),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xe.NONE}}function jx(i){this.enabled!==!1&&i.preventDefault()}function Kx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $x(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Jx extends qh{constructor(t){super(t),this.type=He}parse(t){const a=function(v,w){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(w||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(w||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(w||""))}},d=`
`,f=function(v,w,L){w=w||1024;let F=v.pos,z=-1,k=0,O="",V=String.fromCharCode.apply(null,new Uint16Array(v.subarray(F,F+128)));for(;0>(z=V.indexOf(d))&&k<w&&F<v.byteLength;)O+=V,k+=V.length,F+=128,V=String.fromCharCode.apply(null,new Uint16Array(v.subarray(F,F+128)));return-1<z?(v.pos+=k+z+1,O+V.slice(0,z)):!1},h=function(v){const w=/^#\?(\S+)/,L=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,k={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,V;for((v.pos>=v.byteLength||!(O=f(v)))&&a(1,"no header found"),(V=O.match(w))||a(3,"bad initial token"),k.valid|=1,k.programtype=V[1],k.string+=O+`
`;O=f(v),O!==!1;){if(k.string+=O+`
`,O.charAt(0)==="#"){k.comments+=O+`
`;continue}if((V=O.match(L))&&(k.gamma=parseFloat(V[1])),(V=O.match(I))&&(k.exposure=parseFloat(V[1])),(V=O.match(F))&&(k.valid|=2,k.format=V[1]),(V=O.match(z))&&(k.valid|=4,k.height=parseInt(V[1],10),k.width=parseInt(V[2],10)),k.valid&2&&k.valid&4)break}return k.valid&2||a(3,"missing format specifier"),k.valid&4||a(3,"missing image size specifier"),k},p=function(v,w,L){const I=w;if(I<8||I>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);I!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");const F=new Uint8Array(4*w*L);F.length||a(4,"unable to allocate buffer space");let z=0,k=0;const O=4*I,V=new Uint8Array(4),q=new Uint8Array(O);let ot=L;for(;ot>0&&k<v.byteLength;){k+4>v.byteLength&&a(1),V[0]=v[k++],V[1]=v[k++],V[2]=v[k++],V[3]=v[k++],(V[0]!=2||V[1]!=2||(V[2]<<8|V[3])!=I)&&a(3,"bad rgbe scanline format");let st=0,gt;for(;st<O&&k<v.byteLength;){gt=v[k++];const St=gt>128;if(St&&(gt-=128),(gt===0||st+gt>O)&&a(3,"bad scanline data"),St){const Ot=v[k++];for(let re=0;re<gt;re++)q[st++]=Ot}else q.set(v.subarray(k,k+gt),st),st+=gt,k+=gt}const wt=I;for(let St=0;St<wt;St++){let Ot=0;F[z]=q[St+Ot],Ot+=I,F[z+1]=q[St+Ot],Ot+=I,F[z+2]=q[St+Ot],Ot+=I,F[z+3]=q[St+Ot],z+=4}ot--}return F},x=function(v,w,L,I){const F=v[w+3],z=Math.pow(2,F-128)/255;L[I+0]=v[w+0]*z,L[I+1]=v[w+1]*z,L[I+2]=v[w+2]*z,L[I+3]=1},M=function(v,w,L,I){const F=v[w+3],z=Math.pow(2,F-128)/255;L[I+0]=Pn.toHalfFloat(Math.min(v[w+0]*z,65504)),L[I+1]=Pn.toHalfFloat(Math.min(v[w+1]*z,65504)),L[I+2]=Pn.toHalfFloat(Math.min(v[w+2]*z,65504)),L[I+3]=Pn.toHalfFloat(1)},g=new Uint8Array(t);g.pos=0;const m=h(g),y=m.width,b=m.height,E=p(g.subarray(g.pos),y,b);let R,T,P;switch(this.type){case Re:P=E.length/4;const v=new Float32Array(P*4);for(let L=0;L<P;L++)x(E,L*4,v,L*4);R=v,T=Re;break;case He:P=E.length/4;const w=new Uint16Array(P*4);for(let L=0;L<P;L++)M(E,L*4,w,L*4);R=w,T=He;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:b,data:R,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T}}setDataType(t){return this.type=t,this}load(t,e,n,s){function r(a,o){switch(a.type){case Re:case He:a.colorSpace=xn,a.minFilter=be,a.magFilter=be,a.generateMipmaps=!1,a.flipY=!0;break}e&&e(a,o)}return super.load(t,r,n,s)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var vn=Uint8Array,Ss=Uint16Array,Qx=Int32Array,rf=new vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),af=new vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tv=new vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),of=function(i,t){for(var e=new Ss(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new Qx(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},lf=of(rf,2),cf=lf.b,ev=lf.r;cf[28]=258,ev[258]=28;var nv=of(af,0),iv=nv.b,Ql=new Ss(32768);for(var Se=0;Se<32768;++Se){var gi=(Se&43690)>>1|(Se&21845)<<1;gi=(gi&52428)>>2|(gi&13107)<<2,gi=(gi&61680)>>4|(gi&3855)<<4,Ql[Se]=((gi&65280)>>8|(gi&255)<<8)>>1}var pr=function(i,t,e){for(var n=i.length,s=0,r=new Ss(t);s<n;++s)i[s]&&++r[i[s]-1];var a=new Ss(t);for(s=1;s<t;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(e){o=new Ss(1<<t);var l=15-t;for(s=0;s<n;++s)if(i[s])for(var u=s<<4|i[s],d=t-i[s],f=a[i[s]-1]++<<d,h=f|(1<<d)-1;f<=h;++f)o[Ql[f]>>l]=u}else for(o=new Ss(n),s=0;s<n;++s)i[s]&&(o[s]=Ql[a[i[s]-1]++]>>15-i[s]);return o},br=new vn(288);for(var Se=0;Se<144;++Se)br[Se]=8;for(var Se=144;Se<256;++Se)br[Se]=9;for(var Se=256;Se<280;++Se)br[Se]=7;for(var Se=280;Se<288;++Se)br[Se]=8;var uf=new vn(32);for(var Se=0;Se<32;++Se)uf[Se]=5;var sv=pr(br,9,1),rv=pr(uf,5,1),Go=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},wn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},Wo=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},av=function(i){return(i+7)/8|0},ov=function(i,t,e){return(e==null||e>i.length)&&(e=i.length),new vn(i.subarray(t,e))},lv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Cn=function(i,t,e){var n=new Error(t||lv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Cn),!e)throw n;return n},cv=function(i,t,e,n){var s=i.length,r=0;if(!s||t.f&&!t.l)return e||new vn(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new vn(s*3));var u=function(xt){var Jt=e.length;if(xt>Jt){var Yt=new vn(Math.max(Jt*2,xt));Yt.set(e),e=Yt}},d=t.f||0,f=t.p||0,h=t.b||0,p=t.l,x=t.d,M=t.m,g=t.n,m=s*8;do{if(!p){d=wn(i,f,1);var y=wn(i,f+1,3);if(f+=3,y)if(y==1)p=sv,x=rv,M=9,g=5;else if(y==2){var T=wn(i,f,31)+257,P=wn(i,f+10,15)+4,v=T+wn(i,f+5,31)+1;f+=14;for(var w=new vn(v),L=new vn(19),I=0;I<P;++I)L[tv[I]]=wn(i,f+I*3,7);f+=P*3;for(var F=Go(L),z=(1<<F)-1,k=pr(L,F,1),I=0;I<v;){var O=k[wn(i,f,z)];f+=O&15;var b=O>>4;if(b<16)w[I++]=b;else{var V=0,q=0;for(b==16?(q=3+wn(i,f,3),f+=2,V=w[I-1]):b==17?(q=3+wn(i,f,7),f+=3):b==18&&(q=11+wn(i,f,127),f+=7);q--;)w[I++]=V}}var ot=w.subarray(0,T),st=w.subarray(T);M=Go(ot),g=Go(st),p=pr(ot,M,1),x=pr(st,g,1)}else Cn(1);else{var b=av(f)+4,E=i[b-4]|i[b-3]<<8,R=b+E;if(R>s){l&&Cn(0);break}o&&u(h+E),e.set(i.subarray(b,R),h),t.b=h+=E,t.p=f=R*8,t.f=d;continue}if(f>m){l&&Cn(0);break}}o&&u(h+131072);for(var gt=(1<<M)-1,wt=(1<<g)-1,St=f;;St=f){var V=p[Wo(i,f)&gt],Ot=V>>4;if(f+=V&15,f>m){l&&Cn(0);break}if(V||Cn(2),Ot<256)e[h++]=Ot;else if(Ot==256){St=f,p=null;break}else{var re=Ot-254;if(Ot>264){var I=Ot-257,Xt=rf[I];re=wn(i,f,(1<<Xt)-1)+cf[I],f+=Xt}var K=x[Wo(i,f)&wt],et=K>>4;K||Cn(3),f+=K&15;var st=iv[et];if(et>3){var Xt=af[et];st+=Wo(i,f)&(1<<Xt)-1,f+=Xt}if(f>m){l&&Cn(0);break}o&&u(h+131072);var ct=h+re;if(h<st){var Dt=r-st,kt=Math.min(st,ct);for(Dt+h<0&&Cn(3);h<kt;++h)e[h]=n[Dt+h]}for(;h<ct;++h)e[h]=e[h-st]}}t.l=p,t.p=St,t.b=h,t.f=d,p&&(d=1,t.m=M,t.d=x,t.n=g)}while(!d);return h!=e.length&&a?ov(e,0,h):e.subarray(0,h)},uv=new vn(0),hv=function(i,t){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Cn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Cn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function er(i,t){return cv(i.subarray(hv(i),-4),{i:2},t,t)}var fv=typeof TextDecoder<"u"&&new TextDecoder,dv=0;try{fv.decode(uv,{stream:!0}),dv=1}catch{}class pv extends qh{constructor(t){super(t),this.type=He,this.outputFormat=Ae,this.part=0}parse(t){const w=Math.pow(2.7182818,2.2);let L=null;function I(c,_){let S=0;for(let D=0;D<65536;++D)(D==0||c[D>>3]&1<<(D&7))&&(_[S++]=D);const C=S-1;for(;S<65536;)_[S++]=0;return C}function F(c){for(let _=0;_<16384;_++)c[_]={},c[_].len=0,c[_].lit=0,c[_].p=null}const z={l:0,c:0,lc:0};function k(c,_,S,C,D){for(;S<c;)_=_<<8|yt(C,D),S+=8;S-=c,z.l=_>>S&(1<<c)-1,z.c=_,z.lc=S}const O=new Array(59);function V(c){for(let S=0;S<=58;++S)O[S]=0;for(let S=0;S<65537;++S)O[c[S]]+=1;let _=0;for(let S=58;S>0;--S){const C=_+O[S]>>1;O[S]=_,_=C}for(let S=0;S<65537;++S){const C=c[S];C>0&&(c[S]=C|O[C]++<<6)}}function q(c,_,S,C,D,G){const N=_;let W=0,Y=0;for(;C<=D;C++){if(N.value-_.value>S)return!1;k(6,W,Y,c,N);const Z=z.l;if(W=z.c,Y=z.lc,G[C]=Z,Z==63){if(N.value-_.value>S)throw new Error("Something wrong with hufUnpackEncTable");k(8,W,Y,c,N);let Q=z.l+6;if(W=z.c,Y=z.lc,C+Q>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)G[C++]=0;C--}else if(Z>=59){let Q=Z-59+2;if(C+Q>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)G[C++]=0;C--}}V(G)}function ot(c){return c&63}function st(c){return c>>6}function gt(c,_,S,C){for(;_<=S;_++){const D=st(c[_]),G=ot(c[_]);if(D>>G)throw new Error("Invalid table entry");if(G>14){const N=C[D>>G-14];if(N.len)throw new Error("Invalid table entry");if(N.lit++,N.p){const W=N.p;N.p=new Array(N.lit);for(let Y=0;Y<N.lit-1;++Y)N.p[Y]=W[Y]}else N.p=new Array(1);N.p[N.lit-1]=_}else if(G){let N=0;for(let W=1<<14-G;W>0;W--){const Y=C[(D<<14-G)+N];if(Y.len||Y.p)throw new Error("Invalid table entry");Y.len=G,Y.lit=_,N++}}}return!0}const wt={c:0,lc:0};function St(c,_,S,C){c=c<<8|yt(S,C),_+=8,wt.c=c,wt.lc=_}const Ot={c:0,lc:0};function re(c,_,S,C,D,G,N,W,Y){if(c==_){C<8&&(St(S,C,D,G),S=wt.c,C=wt.lc),C-=8;let Z=S>>C;if(Z=new Uint8Array([Z])[0],W.value+Z>Y)return!1;const Q=N[W.value-1];for(;Z-- >0;)N[W.value++]=Q}else if(W.value<Y)N[W.value++]=c;else return!1;Ot.c=S,Ot.lc=C}function Xt(c){return c&65535}function K(c){const _=Xt(c);return _>32767?_-65536:_}const et={a:0,b:0};function ct(c,_){const S=K(c),D=K(_),G=S+(D&1)+(D>>1),N=G,W=G-D;et.a=N,et.b=W}function Dt(c,_){const S=Xt(c),C=Xt(_),D=S-(C>>1)&65535,G=C+D-32768&65535;et.a=G,et.b=D}function kt(c,_,S,C,D,G,N){const W=N<16384,Y=S>D?D:S;let Z=1,Q,tt;for(;Z<=Y;)Z<<=1;for(Z>>=1,Q=Z,Z>>=1;Z>=1;){tt=0;const j=tt+G*(D-Q),lt=G*Z,_t=G*Q,ht=C*Z,ft=C*Q;let Rt,ut,Gt,Ut;for(;tt<=j;tt+=_t){let It=tt;const Tt=tt+C*(S-Q);for(;It<=Tt;It+=ft){const Nt=It+ht,ue=It+lt,Bt=ue+ht;W?(ct(c[It+_],c[ue+_]),Rt=et.a,Gt=et.b,ct(c[Nt+_],c[Bt+_]),ut=et.a,Ut=et.b,ct(Rt,ut),c[It+_]=et.a,c[Nt+_]=et.b,ct(Gt,Ut),c[ue+_]=et.a,c[Bt+_]=et.b):(Dt(c[It+_],c[ue+_]),Rt=et.a,Gt=et.b,Dt(c[Nt+_],c[Bt+_]),ut=et.a,Ut=et.b,Dt(Rt,ut),c[It+_]=et.a,c[Nt+_]=et.b,Dt(Gt,Ut),c[ue+_]=et.a,c[Bt+_]=et.b)}if(S&Z){const Nt=It+lt;W?ct(c[It+_],c[Nt+_]):Dt(c[It+_],c[Nt+_]),Rt=et.a,c[Nt+_]=et.b,c[It+_]=Rt}}if(D&Z){let It=tt;const Tt=tt+C*(S-Q);for(;It<=Tt;It+=ft){const Nt=It+ht;W?ct(c[It+_],c[Nt+_]):Dt(c[It+_],c[Nt+_]),Rt=et.a,c[Nt+_]=et.b,c[It+_]=Rt}}Q=Z,Z>>=1}return tt}function xt(c,_,S,C,D,G,N,W,Y){let Z=0,Q=0;const tt=N,j=Math.trunc(C.value+(D+7)/8);for(;C.value<j;)for(St(Z,Q,S,C),Z=wt.c,Q=wt.lc;Q>=14;){const _t=Z>>Q-14&16383,ht=_[_t];if(ht.len)Q-=ht.len,re(ht.lit,G,Z,Q,S,C,W,Y,tt),Z=Ot.c,Q=Ot.lc;else{if(!ht.p)throw new Error("hufDecode issues");let ft;for(ft=0;ft<ht.lit;ft++){const Rt=ot(c[ht.p[ft]]);for(;Q<Rt&&C.value<j;)St(Z,Q,S,C),Z=wt.c,Q=wt.lc;if(Q>=Rt&&st(c[ht.p[ft]])==(Z>>Q-Rt&(1<<Rt)-1)){Q-=Rt,re(ht.p[ft],G,Z,Q,S,C,W,Y,tt),Z=Ot.c,Q=Ot.lc;break}}if(ft==ht.lit)throw new Error("hufDecode issues")}}const lt=8-D&7;for(Z>>=lt,Q-=lt;Q>0;){const _t=_[Z<<14-Q&16383];if(_t.len)Q-=_t.len,re(_t.lit,G,Z,Q,S,C,W,Y,tt),Z=Ot.c,Q=Ot.lc;else throw new Error("hufDecode issues")}return!0}function Jt(c,_,S,C,D,G){const N={value:0},W=S.value,Y=mt(_,S),Z=mt(_,S);S.value+=4;const Q=mt(_,S);if(S.value+=4,Y<0||Y>=65537||Z<0||Z>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const tt=new Array(65537),j=new Array(16384);F(j);const lt=C-(S.value-W);if(q(c,S,lt,Y,Z,tt),Q>8*(C-(S.value-W)))throw new Error("Something wrong with hufUncompress");gt(tt,Y,Z,j),xt(tt,j,c,S,Q,Z,G,D,N)}function Yt(c,_,S){for(let C=0;C<S;++C)_[C]=c[_[C]]}function ce(c){for(let _=1;_<c.length;_++){const S=c[_-1]+c[_]-128;c[_]=S}}function oe(c,_){let S=0,C=Math.floor((c.length+1)/2),D=0;const G=c.length-1;for(;!(D>G||(_[D++]=c[S++],D>G));)_[D++]=c[C++]}function ee(c){let _=c.byteLength;const S=new Array;let C=0;const D=new DataView(c);for(;_>0;){const G=D.getInt8(C++);if(G<0){const N=-G;_-=N+1;for(let W=0;W<N;W++)S.push(D.getUint8(C++))}else{const N=G;_-=2;const W=D.getUint8(C++);for(let Y=0;Y<N+1;Y++)S.push(W)}}return S}function Le(c,_,S,C,D,G){let N=new DataView(G.buffer);const W=S[c.idx[0]].width,Y=S[c.idx[0]].height,Z=3,Q=Math.floor(W/8),tt=Math.ceil(W/8),j=Math.ceil(Y/8),lt=W-(tt-1)*8,_t=Y-(j-1)*8,ht={value:0},ft=new Array(Z),Rt=new Array(Z),ut=new Array(Z),Gt=new Array(Z),Ut=new Array(Z);for(let Tt=0;Tt<Z;++Tt)Ut[Tt]=_[c.idx[Tt]],ft[Tt]=Tt<1?0:ft[Tt-1]+tt*j,Rt[Tt]=new Float32Array(64),ut[Tt]=new Uint16Array(64),Gt[Tt]=new Uint16Array(tt*64);for(let Tt=0;Tt<j;++Tt){let Nt=8;Tt==j-1&&(Nt=_t);let ue=8;for(let Ft=0;Ft<tt;++Ft){Ft==tt-1&&(ue=lt);for(let Qt=0;Qt<Z;++Qt)ut[Qt].fill(0),ut[Qt][0]=D[ft[Qt]++],Ye(ht,C,ut[Qt]),X(ut[Qt],Rt[Qt]),Ce(Rt[Qt]);le(Rt);for(let Qt=0;Qt<Z;++Qt)pe(Rt[Qt],Gt[Qt],Ft*64)}let Bt=0;for(let Ft=0;Ft<Z;++Ft){const Qt=S[c.idx[Ft]].type;for(let Kt=8*Tt;Kt<8*Tt+Nt;++Kt){Bt=Ut[Ft][Kt];for(let Pe=0;Pe<Q;++Pe){const fe=Pe*64+(Kt&7)*8;N.setUint16(Bt+0*2*Qt,Gt[Ft][fe+0],!0),N.setUint16(Bt+1*2*Qt,Gt[Ft][fe+1],!0),N.setUint16(Bt+2*2*Qt,Gt[Ft][fe+2],!0),N.setUint16(Bt+3*2*Qt,Gt[Ft][fe+3],!0),N.setUint16(Bt+4*2*Qt,Gt[Ft][fe+4],!0),N.setUint16(Bt+5*2*Qt,Gt[Ft][fe+5],!0),N.setUint16(Bt+6*2*Qt,Gt[Ft][fe+6],!0),N.setUint16(Bt+7*2*Qt,Gt[Ft][fe+7],!0),Bt+=8*2*Qt}}if(Q!=tt)for(let Kt=8*Tt;Kt<8*Tt+Nt;++Kt){const Pe=Ut[Ft][Kt]+8*Q*2*Qt,fe=Q*64+(Kt&7)*8;for(let cn=0;cn<ue;++cn)N.setUint16(Pe+cn*2*Qt,Gt[Ft][fe+cn],!0)}}}const It=new Uint16Array(W);N=new DataView(G.buffer);for(let Tt=0;Tt<Z;++Tt){S[c.idx[Tt]].decoded=!0;const Nt=S[c.idx[Tt]].type;if(S[Tt].type==2)for(let ue=0;ue<Y;++ue){const Bt=Ut[Tt][ue];for(let Ft=0;Ft<W;++Ft)It[Ft]=N.getUint16(Bt+Ft*2*Nt,!0);for(let Ft=0;Ft<W;++Ft)N.setFloat32(Bt+Ft*2*Nt,J(It[Ft]),!0)}}}function Me(c,_,S,C,D,G){const N=new DataView(G.buffer),W=S[c],Y=W.width,Z=W.height,Q=Math.ceil(Y/8),tt=Math.ceil(Z/8),j=Math.floor(Y/8),lt=Y-(Q-1)*8,_t=Z-(tt-1)*8,ht={value:0};let ft=0;const Rt=new Float32Array(64),ut=new Uint16Array(64),Gt=new Uint16Array(Q*64);for(let Ut=0;Ut<tt;++Ut){let It=8;Ut==tt-1&&(It=_t);for(let Tt=0;Tt<Q;++Tt)ut.fill(0),ut[0]=D[ft++],Ye(ht,C,ut),X(ut,Rt),Ce(Rt),pe(Rt,Gt,Tt*64);for(let Tt=8*Ut;Tt<8*Ut+It;++Tt){let Nt=_[c][Tt];for(let ue=0;ue<j;++ue){const Bt=ue*64+(Tt&7)*8;for(let Ft=0;Ft<8;++Ft)N.setUint16(Nt+Ft*2*W.type,Gt[Bt+Ft],!0);Nt+=8*2*W.type}if(Q!=j){const ue=j*64+(Tt&7)*8;for(let Bt=0;Bt<lt;++Bt)N.setUint16(Nt+Bt*2*W.type,Gt[ue+Bt],!0)}}}W.decoded=!0}function Ye(c,_,S){let C,D=1;for(;D<64;)C=_[c.value],C==65280?D=64:C>>8==255?D+=C&255:(S[D]=C,D++),c.value++}function X(c,_){_[0]=J(c[0]),_[1]=J(c[1]),_[2]=J(c[5]),_[3]=J(c[6]),_[4]=J(c[14]),_[5]=J(c[15]),_[6]=J(c[27]),_[7]=J(c[28]),_[8]=J(c[2]),_[9]=J(c[4]),_[10]=J(c[7]),_[11]=J(c[13]),_[12]=J(c[16]),_[13]=J(c[26]),_[14]=J(c[29]),_[15]=J(c[42]),_[16]=J(c[3]),_[17]=J(c[8]),_[18]=J(c[12]),_[19]=J(c[17]),_[20]=J(c[25]),_[21]=J(c[30]),_[22]=J(c[41]),_[23]=J(c[43]),_[24]=J(c[9]),_[25]=J(c[11]),_[26]=J(c[18]),_[27]=J(c[24]),_[28]=J(c[31]),_[29]=J(c[40]),_[30]=J(c[44]),_[31]=J(c[53]),_[32]=J(c[10]),_[33]=J(c[19]),_[34]=J(c[23]),_[35]=J(c[32]),_[36]=J(c[39]),_[37]=J(c[45]),_[38]=J(c[52]),_[39]=J(c[54]),_[40]=J(c[20]),_[41]=J(c[22]),_[42]=J(c[33]),_[43]=J(c[38]),_[44]=J(c[46]),_[45]=J(c[51]),_[46]=J(c[55]),_[47]=J(c[60]),_[48]=J(c[21]),_[49]=J(c[34]),_[50]=J(c[37]),_[51]=J(c[47]),_[52]=J(c[50]),_[53]=J(c[56]),_[54]=J(c[59]),_[55]=J(c[61]),_[56]=J(c[35]),_[57]=J(c[36]),_[58]=J(c[48]),_[59]=J(c[49]),_[60]=J(c[57]),_[61]=J(c[58]),_[62]=J(c[62]),_[63]=J(c[63])}function Ce(c){const _=.5*Math.cos(.7853975),S=.5*Math.cos(3.14159/16),C=.5*Math.cos(3.14159/8),D=.5*Math.cos(3*3.14159/16),G=.5*Math.cos(5*3.14159/16),N=.5*Math.cos(3*3.14159/8),W=.5*Math.cos(7*3.14159/16),Y=new Array(4),Z=new Array(4),Q=new Array(4),tt=new Array(4);for(let j=0;j<8;++j){const lt=j*8;Y[0]=C*c[lt+2],Y[1]=N*c[lt+2],Y[2]=C*c[lt+6],Y[3]=N*c[lt+6],Z[0]=S*c[lt+1]+D*c[lt+3]+G*c[lt+5]+W*c[lt+7],Z[1]=D*c[lt+1]-W*c[lt+3]-S*c[lt+5]-G*c[lt+7],Z[2]=G*c[lt+1]-S*c[lt+3]+W*c[lt+5]+D*c[lt+7],Z[3]=W*c[lt+1]-G*c[lt+3]+D*c[lt+5]-S*c[lt+7],Q[0]=_*(c[lt+0]+c[lt+4]),Q[3]=_*(c[lt+0]-c[lt+4]),Q[1]=Y[0]+Y[3],Q[2]=Y[1]-Y[2],tt[0]=Q[0]+Q[1],tt[1]=Q[3]+Q[2],tt[2]=Q[3]-Q[2],tt[3]=Q[0]-Q[1],c[lt+0]=tt[0]+Z[0],c[lt+1]=tt[1]+Z[1],c[lt+2]=tt[2]+Z[2],c[lt+3]=tt[3]+Z[3],c[lt+4]=tt[3]-Z[3],c[lt+5]=tt[2]-Z[2],c[lt+6]=tt[1]-Z[1],c[lt+7]=tt[0]-Z[0]}for(let j=0;j<8;++j)Y[0]=C*c[16+j],Y[1]=N*c[16+j],Y[2]=C*c[48+j],Y[3]=N*c[48+j],Z[0]=S*c[8+j]+D*c[24+j]+G*c[40+j]+W*c[56+j],Z[1]=D*c[8+j]-W*c[24+j]-S*c[40+j]-G*c[56+j],Z[2]=G*c[8+j]-S*c[24+j]+W*c[40+j]+D*c[56+j],Z[3]=W*c[8+j]-G*c[24+j]+D*c[40+j]-S*c[56+j],Q[0]=_*(c[j]+c[32+j]),Q[3]=_*(c[j]-c[32+j]),Q[1]=Y[0]+Y[3],Q[2]=Y[1]-Y[2],tt[0]=Q[0]+Q[1],tt[1]=Q[3]+Q[2],tt[2]=Q[3]-Q[2],tt[3]=Q[0]-Q[1],c[0+j]=tt[0]+Z[0],c[8+j]=tt[1]+Z[1],c[16+j]=tt[2]+Z[2],c[24+j]=tt[3]+Z[3],c[32+j]=tt[3]-Z[3],c[40+j]=tt[2]-Z[2],c[48+j]=tt[1]-Z[1],c[56+j]=tt[0]-Z[0]}function le(c){for(let _=0;_<64;++_){const S=c[0][_],C=c[1][_],D=c[2][_];c[0][_]=S+1.5747*D,c[1][_]=S-.1873*C-.4682*D,c[2][_]=S+1.8556*C}}function pe(c,_,S){for(let C=0;C<64;++C)_[S+C]=Pn.toHalfFloat(At(c[C]))}function At(c){return c<=1?Math.sign(c)*Math.pow(Math.abs(c),2.2):Math.sign(c)*Math.pow(w,Math.abs(c)-1)}function ve(c){return new DataView(c.array.buffer,c.offset.value,c.size)}function U(c){const _=c.viewer.buffer.slice(c.offset.value,c.offset.value+c.size),S=new Uint8Array(ee(_)),C=new Uint8Array(S.length);return ce(S),oe(S,C),new DataView(C.buffer)}function A(c){const _=c.array.slice(c.offset.value,c.offset.value+c.size),S=er(_),C=new Uint8Array(S.length);return ce(S),oe(S,C),new DataView(C.buffer)}function $(c){const _=c.viewer,S={value:c.offset.value},C=new Uint16Array(c.columns*c.lines*(c.inputChannels.length*c.type)),D=new Uint8Array(8192);let G=0;const N=new Array(c.inputChannels.length);for(let _t=0,ht=c.inputChannels.length;_t<ht;_t++)N[_t]={},N[_t].start=G,N[_t].end=N[_t].start,N[_t].nx=c.columns,N[_t].ny=c.lines,N[_t].size=c.type,G+=N[_t].nx*N[_t].ny*N[_t].size;const W=it(_,S),Y=it(_,S);if(Y>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(W<=Y)for(let _t=0;_t<Y-W+1;_t++)D[_t+W]=qt(_,S);const Z=new Uint16Array(65536),Q=I(D,Z),tt=mt(_,S);Jt(c.array,_,S,tt,C,G);for(let _t=0;_t<c.inputChannels.length;++_t){const ht=N[_t];for(let ft=0;ft<N[_t].size;++ft)kt(C,ht.start+ft,ht.nx,ht.size,ht.ny,ht.nx*ht.size,Q)}Yt(Z,C,G);let j=0;const lt=new Uint8Array(C.buffer.byteLength);for(let _t=0;_t<c.lines;_t++)for(let ht=0;ht<c.inputChannels.length;ht++){const ft=N[ht],Rt=ft.nx*ft.size,ut=new Uint8Array(C.buffer,ft.end*2,Rt*2);lt.set(ut,j),j+=Rt*2,ft.end+=Rt}return new DataView(lt.buffer)}function rt(c){const _=c.array.slice(c.offset.value,c.offset.value+c.size),S=er(_),C=c.inputChannels.length*c.lines*c.columns*c.totalBytes,D=new ArrayBuffer(C),G=new DataView(D);let N=0,W=0;const Y=new Array(4);for(let Z=0;Z<c.lines;Z++)for(let Q=0;Q<c.inputChannels.length;Q++){let tt=0;switch(c.inputChannels[Q].pixelType){case 1:Y[0]=N,Y[1]=Y[0]+c.columns,N=Y[1]+c.columns;for(let lt=0;lt<c.columns;++lt){const _t=S[Y[0]++]<<8|S[Y[1]++];tt+=_t,G.setUint16(W,tt,!0),W+=2}break;case 2:Y[0]=N,Y[1]=Y[0]+c.columns,Y[2]=Y[1]+c.columns,N=Y[2]+c.columns;for(let lt=0;lt<c.columns;++lt){const _t=S[Y[0]++]<<24|S[Y[1]++]<<16|S[Y[2]++]<<8;tt+=_t,G.setUint32(W,tt,!0),W+=4}break}}return G}function pt(c){const _=c.array;let S=c.offset.value;const C=c.columns,D=c.lines,G=c.inputChannels,N=c.totalBytes,W=ke.compression==="B44A_COMPRESSION",Y=new Uint8Array(D*C*N),Z=new Uint16Array(16);let Q=0;for(let tt=0;tt<G.length;tt++){const j=G[tt],lt=j.pixelType*2,_t=Math.ceil(C/j.xSampling),ht=Math.ceil(D/j.ySampling),ft=j.xSampling===1&&j.ySampling===1;if(j.pixelType!==1){for(let Gt=0;Gt<ht;Gt++)if(ft){const Ut=Gt*C*N+Q*C;for(let It=0;It<_t*lt;It++)Y[Ut+It]=_[S++]}else S+=_t*lt;Q+=lt;continue}const Rt=Math.ceil(_t/4),ut=Math.ceil(ht/4);for(let Gt=0;Gt<ut;Gt++)for(let Ut=0;Ut<Rt;Ut++){if(W&&_[S+2]>=52){const It=_[S]<<8|_[S+1],Tt=It&32768?It&32767:~It&65535;Z.fill(Tt),S+=3}else{const It=_[S]<<8|_[S+1],Tt=_[S+2]>>2,Nt=32<<Tt,ue=It+((_[S+2]<<4|_[S+3]>>4)&63)*(1<<Tt)-Nt&65535,Bt=ue+((_[S+3]<<2|_[S+4]>>6)&63)*(1<<Tt)-Nt&65535,Ft=Bt+(_[S+4]&63)*(1<<Tt)-Nt&65535,Qt=It+(_[S+5]>>2&63)*(1<<Tt)-Nt&65535,Kt=ue+((_[S+5]<<4|_[S+6]>>4)&63)*(1<<Tt)-Nt&65535,Pe=Bt+((_[S+6]<<2|_[S+7]>>6)&63)*(1<<Tt)-Nt&65535,fe=Ft+(_[S+7]&63)*(1<<Tt)-Nt&65535,cn=Qt+(_[S+8]>>2&63)*(1<<Tt)-Nt&65535,Wi=Kt+((_[S+8]<<4|_[S+9]>>4)&63)*(1<<Tt)-Nt&65535,Gs=Pe+((_[S+9]<<2|_[S+10]>>6)&63)*(1<<Tt)-Nt&65535,Bn=fe+(_[S+10]&63)*(1<<Tt)-Nt&65535,Pi=cn+(_[S+11]>>2&63)*(1<<Tt)-Nt&65535,Dr=Wi+((_[S+11]<<4|_[S+12]>>4)&63)*(1<<Tt)-Nt&65535,Lr=Gs+((_[S+12]<<2|_[S+13]>>6)&63)*(1<<Tt)-Nt&65535,Ur=Bn+(_[S+13]&63)*(1<<Tt)-Nt&65535,Ws=[It,Qt,cn,Pi,ue,Kt,Wi,Dr,Bt,Pe,Gs,Lr,Ft,fe,Bn,Ur];for(let Xi=0;Xi<16;Xi++)Z[Xi]=Ws[Xi]&32768?Ws[Xi]&32767:~Ws[Xi]&65535;S+=14}if(j.pLinear){if(L===null){L=new Uint16Array(65536);for(let It=0;It<65536;It++)if((It&31744)===31744||It>32768)L[It]=0;else{const Tt=J(It);L[It]=Tt<=0?0:Pn.toHalfFloat(8*Math.log(Tt))}}for(let It=0;It<16;It++)Z[It]=L[Z[It]]}for(let It=0;It<4;It++){const Tt=Gt*4+It;if(!(Tt>=ht))for(let Nt=0;Nt<4;Nt++){const ue=Ut*4+Nt;if(ue>=_t)continue;const Bt=Z[It*4+Nt];for(let Ft=0;Ft<j.ySampling;Ft++){const Qt=Tt*j.ySampling+Ft;if(!(Qt>=D))for(let Kt=0;Kt<j.xSampling;Kt++){const Pe=ue*j.xSampling+Kt;if(Pe>=C)continue;const fe=Qt*C*N+Q*C+Pe*2;Y[fe]=Bt&255,Y[fe+1]=Bt>>8&255}}}}}Q+=2}return new DataView(Y.buffer)}function vt(c){const _=c.viewer,S={value:c.offset.value},C=new Uint8Array(c.columns*c.lines*(c.inputChannels.length*c.type*2)),D={version:Vt(_,S),unknownUncompressedSize:Vt(_,S),unknownCompressedSize:Vt(_,S),acCompressedSize:Vt(_,S),dcCompressedSize:Vt(_,S),rleCompressedSize:Vt(_,S),rleUncompressedSize:Vt(_,S),rleRawSize:Vt(_,S),totalAcUncompressedCount:Vt(_,S),totalDcUncompressedCount:Vt(_,S),acCompression:Vt(_,S)};if(D.version<2)throw new Error("EXRLoader.parse: "+ke.compression+" version "+D.version+" is unsupported");const G=new Array;let N=it(_,S)-2;for(;N>0;){const ht=Mt(_.buffer,S),ft=qt(_,S),Rt=ft>>2&3,ut=(ft>>4)-1,Gt=new Int8Array([ut])[0],Ut=qt(_,S);G.push({name:ht,index:Gt,type:Ut,compression:Rt}),N-=ht.length+3}const W=ke.channels,Y=new Array(c.inputChannels.length);for(let ht=0;ht<c.inputChannels.length;++ht){const ft=Y[ht]={},Rt=W[ht];ft.name=Rt.name,ft.compression=0,ft.decoded=!1,ft.type=Rt.pixelType,ft.pLinear=Rt.pLinear,ft.width=c.columns,ft.height=c.lines}const Z={idx:new Array(3)};for(let ht=0;ht<c.inputChannels.length;++ht){const ft=Y[ht],Rt=ft.name.lastIndexOf("."),ut=Rt>=0?ft.name.substring(Rt+1):ft.name;for(let Gt=0;Gt<G.length;++Gt){const Ut=G[Gt];ut===Ut.name&&ft.type===Ut.type&&(ft.compression=Ut.compression,Ut.index>=0&&(Z.idx[Ut.index]=ht),ft.offset=ht)}}let Q,tt,j;if(D.acCompressedSize>0)switch(D.acCompression){case 0:Q=new Uint16Array(D.totalAcUncompressedCount),Jt(c.array,_,S,D.acCompressedSize,Q,D.totalAcUncompressedCount);break;case 1:const ht=c.array.slice(S.value,S.value+D.totalAcUncompressedCount),ft=er(ht);Q=new Uint16Array(ft.buffer),S.value+=D.totalAcUncompressedCount;break}if(D.dcCompressedSize>0){const ht={array:c.array,offset:S,size:D.dcCompressedSize};tt=new Uint16Array(A(ht).buffer),S.value+=D.dcCompressedSize}if(D.rleRawSize>0){const ht=c.array.slice(S.value,S.value+D.rleCompressedSize),ft=er(ht);j=ee(ft.buffer),S.value+=D.rleCompressedSize}let lt=0;const _t=new Array(Y.length);for(let ht=0;ht<_t.length;++ht)_t[ht]=new Array;for(let ht=0;ht<c.lines;++ht)for(let ft=0;ft<Y.length;++ft)_t[ft].push(lt),lt+=Y[ft].width*c.type*2;Z.idx[0]!==void 0&&Y[Z.idx[0]]&&Le(Z,_t,Y,Q,tt,C);for(let ht=0;ht<Y.length;++ht){const ft=Y[ht];if(!ft.decoded)switch(ft.compression){case 2:let Rt=0,ut=0;for(let Gt=0;Gt<c.lines;++Gt){let Ut=_t[ht][Rt];for(let It=0;It<ft.width;++It){for(let Tt=0;Tt<2*ft.type;++Tt)C[Ut++]=j[ut+Tt*ft.width*ft.height];ut++}Rt++}break;case 1:Me(ht,_t,Y,Q,tt,C);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(C.buffer)}function Mt(c,_){const S=new Uint8Array(c);let C=0;for(;S[_.value+C]!=0;)C+=1;const D=new TextDecoder().decode(S.slice(_.value,_.value+C));return _.value=_.value+C+1,D}function nt(c,_,S){const C=new TextDecoder().decode(new Uint8Array(c).slice(_.value,_.value+S));return _.value=_.value+S,C}function at(c,_){const S=Et(c,_),C=mt(c,_);return[S,C]}function Pt(c,_){const S=mt(c,_),C=mt(c,_);return[S,C]}function Et(c,_){const S=c.getInt32(_.value,!0);return _.value=_.value+4,S}function mt(c,_){const S=c.getUint32(_.value,!0);return _.value=_.value+4,S}function yt(c,_){const S=c[_.value];return _.value=_.value+1,S}function qt(c,_){const S=c.getUint8(_.value);return _.value=_.value+1,S}const Vt=function(c,_){const S=Number(c.getBigInt64(_.value,!0));return _.value+=8,S};function jt(c,_){const S=c.getFloat32(_.value,!0);return _.value+=4,S}function H(c,_){return Pn.toHalfFloat(jt(c,_))}function J(c){const _=(c&31744)>>10,S=c&1023;return(c>>15?-1:1)*(_?_===31?S?NaN:1/0:Math.pow(2,_-15)*(1+S/1024):6103515625e-14*(S/1024))}function it(c,_){const S=c.getUint16(_.value,!0);return _.value+=2,S}function Lt(c,_){return J(it(c,_))}function bt(c,_,S,C){const D=S.value,G=[];for(;S.value<D+C-1;){const N=Mt(_,S),W=Et(c,S),Y=qt(c,S);S.value+=3;const Z=Et(c,S),Q=Et(c,S);G.push({name:N,pixelType:W,pLinear:Y,xSampling:Z,ySampling:Q})}return S.value+=1,G}function dt(c,_){const S=jt(c,_),C=jt(c,_),D=jt(c,_),G=jt(c,_),N=jt(c,_),W=jt(c,_),Y=jt(c,_),Z=jt(c,_);return{redX:S,redY:C,greenX:D,greenY:G,blueX:N,blueY:W,whiteX:Y,whiteY:Z}}function Ht(c,_){const S=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],C=qt(c,_);return S[C]}function ne(c,_){const S=Et(c,_),C=Et(c,_),D=Et(c,_),G=Et(c,_);return{xMin:S,yMin:C,xMax:D,yMax:G}}function Te(c,_){const S=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],C=qt(c,_);return S[C]}function de(c,_){const S=["ENVMAP_LATLONG","ENVMAP_CUBE"],C=qt(c,_);return S[C]}function bn(c,_){const S=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],C=["ROUND_DOWN","ROUND_UP"],D=mt(c,_),G=mt(c,_),N=qt(c,_);return{xSize:D,ySize:G,levelMode:S[N&15],roundingMode:C[N>>4]}}function gn(c,_){const S=jt(c,_),C=jt(c,_);return[S,C]}function Vs(c,_){const S=jt(c,_),C=jt(c,_),D=jt(c,_);return[S,C,D]}function eo(c,_,S,C,D){if(C==="string"||C==="stringvector"||C==="iccProfile")return nt(_,S,D);if(C==="chlist")return bt(c,_,S,D);if(C==="chromaticities")return dt(c,S);if(C==="compression")return Ht(c,S);if(C==="box2i")return ne(c,S);if(C==="envmap")return de(c,S);if(C==="tiledesc")return bn(c,S);if(C==="lineOrder")return Te(c,S);if(C==="float")return jt(c,S);if(C==="v2f")return gn(c,S);if(C==="v3f")return Vs(c,S);if(C==="int")return Et(c,S);if(C==="rational")return at(c,S);if(C==="timecode")return Pt(c,S);if(C==="preview"||C==="deepImageState"||C==="idmanifest")return S.value+=D,"skipped";S.value+=D}function Er(c,_){const S=Math.log2(c);return _=="ROUND_DOWN"?Math.floor(S):Math.ceil(S)}function Tr(c,_,S){let C=0;switch(c.levelMode){case"ONE_LEVEL":C=1;break;case"MIPMAP_LEVELS":C=Er(Math.max(_,S),c.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return C}function On(c,_,S,C){const D=new Array(c);for(let G=0;G<c;G++){const N=1<<G;let W=_/N|0;C=="ROUND_UP"&&W*N<_&&(W+=1);const Y=Math.max(W,1);D[G]=(Y+S-1)/S|0}return D}function Hs(){const c=this,_=c.offset,S={value:0};for(let C=0;C<c.tileCount;C++){const D=Et(c.viewer,_),G=Et(c.viewer,_);_.value+=8,c.size=mt(c.viewer,_);const N=D*c.blockWidth,W=G*c.blockHeight;c.columns=N+c.blockWidth>c.width?c.width-N:c.blockWidth,c.lines=W+c.blockHeight>c.height?c.height-W:c.blockHeight;const Y=c.columns*c.totalBytes,Q=c.size<c.lines*Y?c.uncompress(c):ve(c);_.value+=c.size;for(let tt=0;tt<c.lines;tt++){const j=tt*c.columns*c.totalBytes;for(let lt=0;lt<c.inputChannels.length;lt++){const _t=ke.channels[lt].name,ht=c.channelByteOffsets[_t]*c.columns,ft=c.decodeChannels[_t];if(ft===void 0)continue;S.value=j+ht;const Rt=(c.height-(1+W+tt))*c.outLineWidth;for(let ut=0;ut<c.columns;ut++){const Gt=Rt+(ut+N)*c.outputChannels+ft;c.byteArray[Gt]=c.getter(Q,S)}}}}}function Ar(){const c=this,_=c.offset,S={value:0};for(let C=0;C<c.height/c.blockHeight;C++){const D=Et(c.viewer,_)-ke.dataWindow.yMin;c.size=mt(c.viewer,_),c.lines=D+c.blockHeight>c.height?c.height-D:c.blockHeight;const G=c.columns*c.totalBytes,W=c.size<c.lines*G?c.uncompress(c):ve(c);_.value+=c.size;for(let Y=0;Y<c.blockHeight;Y++){const Z=C*c.blockHeight,Q=Y+c.scanOrder(Z);if(Q>=c.height)continue;const tt=Y*G,j=(c.height-1-Q)*c.outLineWidth;for(let lt=0;lt<c.inputChannels.length;lt++){const _t=ke.channels[lt].name,ht=c.channelByteOffsets[_t]*c.columns,ft=c.decodeChannels[_t];if(ft!==void 0){S.value=tt+ht;for(let Rt=0;Rt<c.columns;Rt++){const ut=j+Rt*c.outputChannels+ft;c.byteArray[ut]=c.getter(W,S)}}}}}}function wr(){const c=this,_=c.chunkOffsets,S={value:0};for(let C=0;C<_.length;C++){const D={value:_[C]};D.value+=4;const G=Et(c.viewer,D)-ke.dataWindow.yMin;c.size=mt(c.viewer,D),c.lines=G+c.blockHeight>c.height?c.height-G:c.blockHeight;const N=c.columns*c.totalBytes,W=c.size<c.lines*N,Y=c.offset;c.offset=D;const Z=W?c.uncompress(c):ve(c);c.offset=Y;for(let Q=0;Q<c.blockHeight;Q++){const tt=Q+G;if(tt>=c.height)continue;const j=Q*N,lt=(c.height-1-tt)*c.outLineWidth;for(let _t=0;_t<c.inputChannels.length;_t++){const ht=ke.channels[_t].name,ft=c.channelByteOffsets[ht]*c.columns,Rt=c.decodeChannels[ht];if(Rt!==void 0){S.value=j+ft;for(let ut=0;ut<c.columns;ut++){const Gt=lt+ut*c.outputChannels+Rt;c.byteArray[Gt]=c.getter(Z,S)}}}}}}function Ri(c,_,S,C){if(S===0)return null;const D=c.slice(_,_+S);switch(C){case"NO_COMPRESSION":return new DataView(D.buffer,D.byteOffset,D.byteLength);case"RLE_COMPRESSION":{const G=new Uint8Array(ee(D.buffer.slice(D.byteOffset,D.byteOffset+D.byteLength))),N=new Uint8Array(G.length);return ce(G),oe(G,N),new DataView(N.buffer)}case"ZIPS_COMPRESSION":{const G=er(D),N=new Uint8Array(G.length);return ce(G),oe(G,N),new DataView(N.buffer)}default:throw new Error("EXRLoader.parse: "+C+" is unsupported for deep data")}}function Rr(){const c=this,_=c.chunkOffsets,S=c.width,C=c.height,D=c.deepChannels,G=ke.compression,N=c.multiPart,W=c.decodeChannels,Y=c.outputChannels,Z=c.byteArray instanceof Uint16Array;let Q=-1;for(let tt=0;tt<D.length;tt++)if(D[tt].name==="A"){Q=tt;break}for(let tt=0;tt<_.length;tt++){const j={value:_[tt]};N&&(j.value+=4);const lt=Et(c.viewer,j)-ke.dataWindow.yMin,_t=Vt(c.viewer,j),ht=Vt(c.viewer,j);Vt(c.viewer,j);const ft=Ri(c.array,j.value,_t,G);if(j.value+=_t,ft===null)continue;const Rt=new Uint32Array(S);for(let Nt=0;Nt<S;Nt++)Rt[Nt]=ft.getUint32(Nt*4,!0);const ut=Rt[S-1];if(ut===0){j.value+=ht;continue}const Gt=Ri(c.array,j.value,ht,G),Ut=[];let It=0;for(let Nt=0;Nt<D.length;Nt++)Ut.push(It),It+=ut*D[Nt].bytesPerSample;const Tt=(C-1-lt)*c.outLineWidth;for(let Nt=0;Nt<S;Nt++){const ue=Nt===0?0:Rt[Nt-1],Ft=Rt[Nt]-ue;if(Ft===0)continue;const Qt=new Float32Array(Y);let Kt=0;for(let fe=0;fe<Ft;fe++){const cn=ue+fe,Wi=1-Kt;if(Wi<=0)break;let Gs=1;if(Q>=0){const Bn=D[Q].bytesPerSample,Pi=Ut[Q]+cn*Bn;Gs=Bn===2?J(Gt.getUint16(Pi,!0)):Gt.getFloat32(Pi,!0)}for(let Bn=0;Bn<D.length;Bn++){const Pi=D[Bn],Dr=W[Pi.name];if(Dr===void 0)continue;const Lr=Pi.bytesPerSample,Ur=Ut[Bn]+cn*Lr,Ws=Lr===2?J(Gt.getUint16(Ur,!0)):Gt.getFloat32(Ur,!0);Qt[Dr]+=Ws*Wi}Kt+=Gs*Wi}W.A!==void 0&&(Qt[W.A]=Kt);const Pe=Tt+Nt*Y;for(let fe=0;fe<Y;fe++)c.byteArray[Pe+fe]=Z?Pn.toHalfFloat(Qt[fe]):Qt[fe]}}}function Ci(c,_,S){const C={};let D=!1;for(;;){const G=Mt(_,S);if(G==="")break;D=!0;const N=Mt(_,S),W=mt(c,S),Y=eo(c,_,S,N,W);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${N}'.`):C[G]=Y}return D?C:null}function Cr(c,_,S){if(c.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const C=c.getUint8(4),D=c.getUint8(5),G={singleTile:!!(D&2),longName:!!(D&4),deepFormat:!!(D&8),multiPart:!!(D&16)};S.value=8;const N=[];if(G.multiPart){for(;;){const W=Ci(c,_,S);if(W===null)break;W.version=C,W.spec=G,N.push(W)}if(N.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const W=Ci(c,_,S);W.version=C,W.spec=G,N.push(W)}return N}function Pr(c,_,S,C,D,G){const N={size:0,viewer:_,array:S,offset:C,width:c.dataWindow.xMax-c.dataWindow.xMin+1,height:c.dataWindow.yMax-c.dataWindow.yMin+1,inputChannels:c.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:xn};switch(c.compression){case"NO_COMPRESSION":N.blockHeight=1,N.uncompress=ve;break;case"RLE_COMPRESSION":N.blockHeight=1,N.uncompress=U;break;case"ZIPS_COMPRESSION":N.blockHeight=1,N.uncompress=A;break;case"ZIP_COMPRESSION":N.blockHeight=16,N.uncompress=A;break;case"PIZ_COMPRESSION":N.blockHeight=32,N.uncompress=$;break;case"PXR24_COMPRESSION":N.blockHeight=16,N.uncompress=rt;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":N.blockHeight=32,N.uncompress=pt;break;case"DWAA_COMPRESSION":N.blockHeight=32,N.uncompress=vt;break;case"DWAB_COMPRESSION":N.blockHeight=256,N.uncompress=vt;break;default:throw new Error("EXRLoader.parse: "+c.compression+" is unsupported")}const W={};for(const j of c.channels)switch(j.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":W[j.name]=!0,N.type=j.pixelType}let Y=!1,Z=!1;if(W.Y&&W.RY&&W.BY)N.outputChannels=4,N.yCbCr=!0;else if(W.R&&W.G&&W.B)N.outputChannels=4;else if(W.Y)N.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(N.outputChannels){case 4:G==Ae?(Y=!W.A,N.format=Ae,N.colorSpace=xn,N.outputChannels=4,N.decodeChannels={R:0,G:1,B:2,A:3}):G==dn?(N.format=dn,N.colorSpace=xn,N.outputChannels=2,N.decodeChannels={R:0,G:1}):G==Mi?(N.format=Mi,N.colorSpace=xn,N.outputChannels=1,N.decodeChannels={R:0}):Z=!0;break;case 1:G==Ae?(Y=!0,N.format=Ae,N.colorSpace=xn,N.outputChannels=4,N.shouldExpand=!0,N.decodeChannels={Y:0}):G==dn?(N.format=dn,N.colorSpace=xn,N.outputChannels=2,N.shouldExpand=!0,N.decodeChannels={Y:0}):G==Mi?(N.format=Mi,N.colorSpace=xn,N.outputChannels=1,N.decodeChannels={Y:0}):Z=!0;break;default:Z=!0}if(Z)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(N.yCbCr&&(N.format=Ae,N.outputChannels=4,N.decodeChannels={Y:0,RY:1,BY:2},Y=!0),N.type==1)switch(D){case Re:N.getter=Lt;break;case He:N.getter=it;break}else if(N.type==2)switch(D){case Re:N.getter=jt;break;case He:N.getter=H}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+c.compression+".");N.columns=N.width;const Q=N.width*N.height*N.outputChannels;switch(D){case Re:N.byteArray=new Float32Array(Q),Y&&N.byteArray.fill(1,0,Q);break;case He:N.byteArray=new Uint16Array(Q),Y&&N.byteArray.fill(15360,0,Q);break;default:console.error("THREE.EXRLoader: unsupported type: ",D);break}let tt=0;for(const j of c.channels)N.decodeChannels[j.name]!==void 0&&(N.channelByteOffsets[j.name]=tt),tt+=j.pixelType*2;if(N.totalBytes=tt,N.outLineWidth=N.width*N.outputChannels,c.lineOrder==="INCREASING_Y"?N.scanOrder=j=>j:N.scanOrder=j=>N.height-1-j,c.spec.deepFormat){N.deepChannels=[];let j=0;for(const lt of c.channels){const _t=lt.pixelType===0?4:lt.pixelType*2;N.deepChannels.push({name:lt.name,pixelType:lt.pixelType,bytesPerSample:_t}),j+=_t}N.deepBytesPerSample=j,N.chunkOffsets=c._chunkOffsets,N.multiPart=c.spec.multiPart,N.decode=Rr.bind(N)}else if(c.spec.singleTile){N.blockHeight=c.tiles.ySize,N.blockWidth=c.tiles.xSize;const j=Tr(c.tiles,N.width,N.height),lt=On(j,N.width,c.tiles.xSize,c.tiles.roundingMode),_t=On(j,N.height,c.tiles.ySize,c.tiles.roundingMode);N.tileCount=lt[0]*_t[0];for(let ht=0;ht<j;ht++)for(let ft=0;ft<_t[ht];ft++)for(let Rt=0;Rt<lt[ht];Rt++)Vt(_,C);N.decode=Hs.bind(N)}else if(c.spec.multiPart)N.blockWidth=N.width,N.chunkOffsets=c._chunkOffsets,N.decode=wr.bind(N);else{N.blockWidth=N.width;const j=Math.ceil(N.height/N.blockHeight);for(let lt=0;lt<j;lt++)Vt(_,C);N.decode=Ar.bind(N)}return N}const Vi={value:0},Hi=new DataView(t),no=new Uint8Array(t),Gi=Cr(Hi,t,Vi),Ir=Math.max(0,Math.min(this.part,Gi.length-1)),ke=Gi[Ir];if(ke.spec.multiPart||ke.spec.deepFormat)for(let c=0;c<Gi.length;c++){const _=Gi[c].chunkCount;if(c===Ir){ke._chunkOffsets=[];for(let S=0;S<_;S++)ke._chunkOffsets.push(Vt(Hi,Vi))}else for(let S=0;S<_;S++)Vt(Hi,Vi)}const sn=Pr(ke,Hi,no,Vi,this.type,this.outputFormat);if(sn.decode(),sn.shouldExpand){const c=sn.byteArray;if(this.outputFormat==Ae)for(let _=0;_<c.length;_+=4)c[_+2]=c[_+1]=c[_];else if(this.outputFormat==dn)for(let _=0;_<c.length;_+=2)c[_+1]=c[_]}if(sn.yCbCr){const c=sn.byteArray,_=sn.width*sn.height;if(this.type===He)for(let S=0;S<_;S++){const C=S*4,D=J(c[C]),G=J(c[C+1]),N=J(c[C+2]),W=(1+G)*D,Y=(1+N)*D,Z=(D-W*.2126-Y*.0722)/.7152;c[C]=Pn.toHalfFloat(Math.max(0,W)),c[C+1]=Pn.toHalfFloat(Math.max(0,Z)),c[C+2]=Pn.toHalfFloat(Math.max(0,Y))}else for(let S=0;S<_;S++){const C=S*4,D=c[C],G=c[C+1],N=c[C+2],W=(1+G)*D,Y=(1+N)*D;c[C]=Math.max(0,W),c[C+1]=Math.max(0,(D-W*.2126-Y*.0722)/.7152),c[C+2]=Math.max(0,Y)}}return{header:ke,width:sn.width,height:sn.height,data:sn.byteArray,format:sn.format,colorSpace:sn.colorSpace,type:this.type}}setDataType(t){return this.type=t,this}setOutputFormat(t){return this.outputFormat=t,this}setPart(t){return this.part=t,this}load(t,e,n,s){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=be,a.magFilter=be,a.generateMipmaps=!1,a.flipY=!1,e&&e(a,o)}return super.load(t,r,n,s)}}function mv(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},u={},d=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let y=0,b=o.length;y<b;y++){const E=o[y],R=i.attributes[E];l[E]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const T=i.morphAttributes[E];T&&(u[E]||(u[E]=[]),T.forEach((P,v)=>{const w=new P.array.constructor(P.count*P.itemSize);u[E][v]=new P.constructor(w,P.itemSize,P.normalized)}))}const p=t*.5,x=Math.log10(1/t),M=Math.pow(10,x),g=p*M;for(let y=0;y<r;y++){const b=n?n.getX(y):y;let E="";for(let R=0,T=o.length;R<T;R++){const P=o[R],v=i.getAttribute(P),w=v.itemSize;for(let L=0;L<w;L++)E+=`${~~(v[f[L]](b)*M+g)},`}if(E in e)d.push(e[E]);else{for(let R=0,T=o.length;R<T;R++){const P=o[R],v=i.getAttribute(P),w=i.morphAttributes[P],L=v.itemSize,I=l[P],F=u[P];for(let z=0;z<L;z++){const k=f[z],O=h[z];if(I[O](a,v[k](b)),w)for(let V=0,q=w.length;V<q;V++)F[V][O](a,w[V][k](b))}}e[E]=a,d.push(a),a++}}const m=i.clone();for(const y in i.attributes){const b=l[y];if(m.setAttribute(y,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),y in u)for(let E=0;E<u[y].length;E++){const R=u[y][E];m.morphAttributes[y][E]=new R.constructor(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return m.setIndex(d),m}function nM(i,t){if(t===Xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Gc||t===Yf){let e=i.getIndex();if(e===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===Gc)for(let a=1;a<=n;a++)s.push(e.getX(0)),s.push(e.getX(a)),s.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(e.getX(a)),s.push(e.getX(a+1)),s.push(e.getX(a+2))):(s.push(e.getX(a+2)),s.push(e.getX(a+1)),s.push(e.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}const hf=0,gv=1,_v=2,sh=2,Xo=1.25,rh=1,Ei=6*4+4+4,Qa=65535,xv=Math.pow(2,-24),Yo=Symbol("SKIP_GENERATION");function ff(i){return i.index?i.index.count:i.attributes.position.count}function ks(i){return ff(i)/3}function df(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function vv(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=df(e,n);i.setIndex(new We(s,1));for(let r=0;r<e;r++)s[r]=r}}function pf(i,t){const e=ks(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(e,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function mf(i,t){if(!i.groups||!i.groups.length)return pf(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const l of i.groups){const u=l.start/3,d=(l.start+l.count)/3;n.add(Math.max(r,u)),n.add(Math.min(a,d))}const o=Array.from(n.values()).sort((l,u)=>l-u);for(let l=0;l<o.length-1;l++){const u=o[l],d=o[l+1];e.push({offset:Math.floor(u),count:Math.floor(d-u)})}return e}function yv(i,t){const e=ks(i),n=mf(i,t).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),e!==r}function qo(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,u=-1/0,d=-1/0,f=1/0,h=1/0,p=1/0,x=-1/0,M=-1/0,g=-1/0;for(let m=t*6,y=(t+e)*6;m<y;m+=6){const b=i[m+0],E=i[m+1],R=b-E,T=b+E;R<r&&(r=R),T>l&&(l=T),b<f&&(f=b),b>x&&(x=b);const P=i[m+2],v=i[m+3],w=P-v,L=P+v;w<a&&(a=w),L>u&&(u=L),P<h&&(h=P),P>M&&(M=P);const I=i[m+4],F=i[m+5],z=I-F,k=I+F;z<o&&(o=z),k>d&&(d=k),I<p&&(p=I),I>g&&(g=I)}n[0]=r,n[1]=a,n[2]=o,n[3]=l,n[4]=u,n[5]=d,s[0]=f,s[1]=h,s[2]=p,s[3]=x,s[4]=M,s[5]=g}function Mv(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=ks(i),o=s.normalized;let l;t===null?(l=new Float32Array(a*6*4),e=0,n=a):(l=t,e=e||0,n=n||a);const u=s.array,d=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let p=e;p<e+n;p++){const x=p*3,M=p*6;let g=x+0,m=x+1,y=x+2;r&&(g=r[g],m=r[m],y=r[y]),o||(g=g*f+d,m=m*f+d,y=y*f+d);for(let b=0;b<3;b++){let E,R,T;o?(E=s[h[b]](g),R=s[h[b]](m),T=s[h[b]](y)):(E=u[g+b],R=u[m+b],T=u[y+b]);let P=E;R<P&&(P=R),T<P&&(P=T);let v=E;R>v&&(v=R),T>v&&(v=T);const w=(v-P)/2,L=b*2;l[M+L+0]=P+w,l[M+L+1]=w+(Math.abs(P)+w)*xv}}return l}function Ie(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function ah(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function oh(i,t){t.set(i)}function lh(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function pa(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function nr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const ei=32,Sv=(i,t)=>i.candidate-t.candidate,_i=new Array(ei).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ma=new Float32Array(6);function bv(i,t,e,n,s,r){let a=-1,o=0;if(r===hf)a=ah(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===gv)a=ah(i),a!==-1&&(o=Ev(e,n,s,a));else if(r===_v){const l=nr(i);let u=Xo*s;const d=n*6,f=(n+s)*6;for(let h=0;h<3;h++){const p=t[h],g=(t[h+3]-p)/ei;if(s<ei/4){const m=[..._i];m.length=s;let y=0;for(let E=d;E<f;E+=6,y++){const R=m[y];R.candidate=e[E+2*h],R.count=0;const{bounds:T,leftCacheBounds:P,rightCacheBounds:v}=R;for(let w=0;w<3;w++)v[w]=1/0,v[w+3]=-1/0,P[w]=1/0,P[w+3]=-1/0,T[w]=1/0,T[w+3]=-1/0;pa(E,e,T)}m.sort(Sv);let b=s;for(let E=0;E<b;E++){const R=m[E];for(;E+1<b&&m[E+1].candidate===R.candidate;)m.splice(E+1,1),b--}for(let E=d;E<f;E+=6){const R=e[E+2*h];for(let T=0;T<b;T++){const P=m[T];R>=P.candidate?pa(E,e,P.rightCacheBounds):(pa(E,e,P.leftCacheBounds),P.count++)}}for(let E=0;E<b;E++){const R=m[E],T=R.count,P=s-R.count,v=R.leftCacheBounds,w=R.rightCacheBounds;let L=0;T!==0&&(L=nr(v)/l);let I=0;P!==0&&(I=nr(w)/l);const F=rh+Xo*(L*T+I*P);F<u&&(a=h,u=F,o=R.candidate)}}else{for(let b=0;b<ei;b++){const E=_i[b];E.count=0,E.candidate=p+g+b*g;const R=E.bounds;for(let T=0;T<3;T++)R[T]=1/0,R[T+3]=-1/0}for(let b=d;b<f;b+=6){let T=~~((e[b+2*h]-p)/g);T>=ei&&(T=ei-1);const P=_i[T];P.count++,pa(b,e,P.bounds)}const m=_i[ei-1];oh(m.bounds,m.rightCacheBounds);for(let b=ei-2;b>=0;b--){const E=_i[b],R=_i[b+1];lh(E.bounds,R.rightCacheBounds,E.rightCacheBounds)}let y=0;for(let b=0;b<ei-1;b++){const E=_i[b],R=E.count,T=E.bounds,v=_i[b+1].rightCacheBounds;R!==0&&(y===0?oh(T,ma):lh(T,ma,ma)),y+=R;let w=0,L=0;y!==0&&(w=nr(ma)/l);const I=s-y;I!==0&&(L=nr(v)/l);const F=rh+Xo*(w*y+L*I);F<u&&(a=h,u=F,o=E.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function Ev(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}class Zo{constructor(){this.boundingData=new Float32Array(6)}}function Tv(i,t,e,n,s,r){let a=n,o=n+s-1;const l=r.pos,u=r.axis*2;for(;;){for(;a<=o&&e[a*6+u]<l;)a++;for(;a<=o&&e[o*6+u]>=l;)o--;if(a<o){for(let d=0;d<3;d++){let f=t[a*3+d];t[a*3+d]=t[o*3+d],t[o*3+d]=f}for(let d=0;d<6;d++){let f=e[a*6+d];e[a*6+d]=e[o*6+d],e[o*6+d]=f}a++,o--}else return a}}function Av(i,t,e,n,s,r){let a=n,o=n+s-1;const l=r.pos,u=r.axis*2;for(;;){for(;a<=o&&e[a*6+u]<l;)a++;for(;a<=o&&e[o*6+u]>=l;)o--;if(a<o){let d=i[a];i[a]=i[o],i[o]=d;for(let f=0;f<6;f++){let h=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=h}a++,o--}else return a}}function Qe(i,t){return t[i+15]===65535}function on(i,t){return t[i+6]}function pn(i,t){return t[i+14]}function yn(i){return i+8}function mn(i,t){return t[i+6]}function Tc(i,t){return t[i+7]}let gf,ur,Ua,_f;const wv=Math.pow(2,32);function tc(i){return"count"in i?1:1+tc(i.left)+tc(i.right)}function Rv(i,t,e){return gf=new Float32Array(e),ur=new Uint32Array(e),Ua=new Uint16Array(e),_f=new Uint8Array(e),ec(i,t)}function ec(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)gf[e+a]=r[a];if(s)if(t.buffer){const a=t.buffer;_f.set(new Uint8Array(a),i);for(let o=i,l=i+a.byteLength;o<l;o+=Ei){const u=o/2;Qe(u,Ua)||(ur[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return ur[e+6]=a,Ua[n+14]=o,Ua[n+15]=Qa,i+Ei}else{const a=t.left,o=t.right,l=t.splitAxis;let u;if(u=ec(i+Ei,a),u/4>wv)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ur[e+6]=u/4,u=ec(u,o),ur[e+7]=l,u}}function Cv(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,l=a.length;o<l;o++)a[o]=o;return a}function Pv(i,t,e,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:l,onProgress:u,indirect:d}=s,f=i._indirectBuffer,h=i.geometry,p=h.index?h.index.array:null,x=d?Av:Tv,M=ks(h),g=new Float32Array(6);let m=!1;const y=new Zo;return qo(t,e,n,y.boundingData,g),E(y,e,n,g),y;function b(R){u&&u(R/M)}function E(R,T,P,v=null,w=0){if(!m&&w>=r&&(m=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),P<=o||w>=r)return b(T+P),R.offset=T,R.count=P,R;const L=bv(R.boundingData,v,t,T,P,l);if(L.axis===-1)return b(T+P),R.offset=T,R.count=P,R;const I=x(f,p,t,T,P,L);if(I===T||I===T+P)b(T+P),R.offset=T,R.count=P;else{R.splitAxis=L.axis;const F=new Zo,z=T,k=I-T;R.left=F,qo(t,z,k,F.boundingData,g),E(F,z,k,g,w+1);const O=new Zo,V=I,q=P-k;R.right=O,qo(t,V,q,O.boundingData,g),E(O,V,q,g,w+1)}return R}}function Iv(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=Cv(e,t.useSharedArrayBuffer),yv(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||vv(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Mv(e),r=t.indirect?pf(e,t.range):mf(e,t.range);i._roots=r.map(a=>{const o=Pv(i,s,a.offset,a.count,t),l=tc(o),u=new n(Ei*l);return Rv(0,o,u),u})}class ci{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],l=t.dot(o);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}ci.prototype.setFromBox=function(){const i=new B;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){i.x=s.x*l+r.x*(1-l),i.y=s.y*u+r.y*(1-u),i.z=s.z*d+r.z*(1-d);const f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();const Dv=function(){const i=new B,t=new B,e=new B;return function(s,r,a){const o=s.start,l=i,u=r.start,d=t;e.subVectors(o,u),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(d),h=d.dot(l),p=d.dot(d),x=e.dot(l),g=l.dot(l)*p-h*h;let m,y;g!==0?m=(f*h-x*p)/g:m=0,y=(f+m*h)/p,a.x=m,a.y=y}}(),Ac=function(){const i=new Wt,t=new B,e=new B;return function(s,r,a,o){Dv(s,r,i);let l=i.x,u=i.y;if(l>=0&&l<=1&&u>=0&&u<=1){s.at(l,a),r.at(u,o);return}else if(l>=0&&l<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(u>=0&&u<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let d;l<0?d=s.start:d=s.end;let f;u<0?f=r.start:f=r.end;const h=t,p=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(d,!0,e),h.distanceToSquared(f)<=p.distanceToSquared(d)){a.copy(h),o.copy(f);return}else{a.copy(d),o.copy(p);return}}}}(),Lv=function(){const i=new B,t=new B,e=new Vn,n=new ai;return function(r,a){const{radius:o,center:l}=r,{a:u,b:d,c:f}=a;if(n.start=u,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=d,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const M=a.getPlane(e);if(Math.abs(M.distanceToPoint(l))<=o){const m=M.projectPoint(l,t);if(a.containsPoint(m))return!0}return!1}}(),Uv=1e-15;function jo(i){return Math.abs(i)<Uv}class Nn extends je{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new B),this.satBounds=new Array(4).fill().map(()=>new ci),this.points=[this.a,this.b,this.c],this.sphere=new Zn,this.plane=new Vn,this.needsUpdate=!0}intersectsSphere(t){return Lv(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],l=a[0];this.getNormal(o),l.setFromPoints(o,s);const u=r[1],d=a[1];u.subVectors(t,e),d.setFromPoints(u,s);const f=r[2],h=a[2];f.subVectors(e,n),h.setFromPoints(f,s);const p=r[3],x=a[3];p.subVectors(n,t),x.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}Nn.prototype.closestPointToSegment=function(){const i=new B,t=new B,e=new ai;return function(s,r=null,a=null){const{start:o,end:l}=s,u=this.points;let d,f=1/0;for(let h=0;h<3;h++){const p=(h+1)%3;e.start.copy(u[h]),e.end.copy(u[p]),Ac(e,s,i,t),d=i.distanceToSquared(t),d<f&&(f=d,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),d=o.distanceToSquared(i),d<f&&(f=d,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),d=l.distanceToSquared(i),d<f&&(f=d,r&&r.copy(i),a&&a.copy(l)),Math.sqrt(f)}}();Nn.prototype.intersectsTriangle=function(){const i=new Nn,t=new Array(3),e=new Array(3),n=new ci,s=new ci,r=new B,a=new B,o=new B,l=new B,u=new B,d=new ai,f=new ai,h=new ai,p=new B;function x(M,g,m){const y=M.points;let b=0,E=-1;for(let R=0;R<3;R++){const{start:T,end:P}=d;T.copy(y[R]),P.copy(y[(R+1)%3]),d.delta(a);const v=jo(g.distanceToPoint(T));if(jo(g.normal.dot(a))&&v){m.copy(d),b=2;break}const w=g.intersectLine(d,p);if(!w&&v&&p.copy(T),(w||v)&&!jo(p.distanceTo(P))){if(b<=1)(b===1?m.start:m.end).copy(p),v&&(E=b);else if(b>=2){(E===1?m.start:m.end).copy(p),b=2;break}if(b++,b===2&&E===-1)break}}return b}return function(g,m=null,y=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(i.copy(g),i.update(),g=i);const b=this.plane,E=g.plane;if(Math.abs(b.normal.dot(E.normal))>1-1e-10){const R=this.satBounds,T=this.satAxes;e[0]=g.a,e[1]=g.b,e[2]=g.c;for(let w=0;w<4;w++){const L=R[w],I=T[w];if(n.setFromPoints(I,e),L.isSeparated(n))return!1}const P=g.satBounds,v=g.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let w=0;w<4;w++){const L=P[w],I=v[w];if(n.setFromPoints(I,t),L.isSeparated(n))return!1}for(let w=0;w<4;w++){const L=T[w];for(let I=0;I<4;I++){const F=v[I];if(r.crossVectors(L,F),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return m&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const R=x(this,E,f);if(R===1&&g.containsPoint(f.end))return m&&(m.start.copy(f.end),m.end.copy(f.end)),!0;if(R!==2)return!1;const T=x(g,b,h);if(T===1&&this.containsPoint(h.end))return m&&(m.start.copy(h.end),m.end.copy(h.end)),!0;if(T!==2)return!1;if(f.delta(o),h.delta(l),o.dot(l)<0){let z=h.start;h.start=h.end,h.end=z}const P=f.start.dot(o),v=f.end.dot(o),w=h.start.dot(o),L=h.end.dot(o),I=v<w,F=P<L;return P!==L&&w!==v&&I===F?!1:(m&&(u.subVectors(f.start,h.start),u.dot(o)>0?m.start.copy(f.start):m.start.copy(h.start),u.subVectors(f.end,h.end),u.dot(o)<0?m.end.copy(f.end):m.end.copy(h.end)),!0)}}}();Nn.prototype.distanceToPoint=function(){const i=new B;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Nn.prototype.distanceToTriangle=function(){const i=new B,t=new B,e=["a","b","c"],n=new ai,s=new ai;return function(a,o=null,l=null){const u=o||l?n:null;if(this.intersectsTriangle(a,u))return(o||l)&&(o&&u.getCenter(o),l&&u.getCenter(l)),0;let d=1/0;for(let f=0;f<3;f++){let h;const p=e[f],x=a[p];this.closestPointToPoint(x,i),h=x.distanceToSquared(i),h<d&&(d=h,o&&o.copy(i),l&&l.copy(x));const M=this[p];a.closestPointToPoint(M,i),h=M.distanceToSquared(i),h<d&&(d=h,o&&o.copy(M),l&&l.copy(i))}for(let f=0;f<3;f++){const h=e[f],p=e[(f+1)%3];n.set(this[h],this[p]);for(let x=0;x<3;x++){const M=e[x],g=e[(x+1)%3];s.set(a[M],a[g]),Ac(n,s,i,t);const m=i.distanceToSquared(t);m<d&&(d=m,o&&o.copy(i),l&&l.copy(t))}}return Math.sqrt(d)}}();class nn{constructor(t,e,n){this.isOrientedBox=!0,this.min=new B,this.max=new B,this.matrix=new te,this.invMatrix=new te,this.points=new Array(8).fill().map(()=>new B),this.satAxes=new Array(3).fill().map(()=>new B),this.satBounds=new Array(3).fill().map(()=>new ci),this.alignedSatBounds=new Array(3).fill().map(()=>new ci),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}nn.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++){const h=1*u|2*d|4*f,p=s[h];p.x=u?n.x:e.x,p.y=d?n.y:e.y,p.z=f?n.z:e.z,p.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let u=0;u<3;u++){const d=a[u],f=r[u],h=1<<u,p=s[h];d.subVectors(o,p),f.setFromPoints(d,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();nn.prototype.intersectsBox=function(){const i=new ci;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const u=a[l],d=r[l];if(i.setFromBox(u,e),d.isSeparated(i))return!1}return!0}}();nn.prototype.intersectsTriangle=function(){const i=new Nn,t=new Array(3),e=new ci,n=new ci,s=new B;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let h=0;h<3;h++){const p=o[h],x=l[h];if(e.setFromPoints(x,t),p.isSeparated(e))return!1}const u=a.satBounds,d=a.satAxes,f=this.points;for(let h=0;h<3;h++){const p=u[h],x=d[h];if(e.setFromPoints(x,f),p.isSeparated(e))return!1}for(let h=0;h<3;h++){const p=l[h];for(let x=0;x<4;x++){const M=d[x];if(s.crossVectors(p,M),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();nn.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();nn.prototype.distanceToPoint=function(){const i=new B;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();nn.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new ai),e=new Array(12).fill().map(()=>new ai),n=new B,s=new B;return function(a,o=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||u)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),l&&l.copy(n),u&&u.copy(s)),0;const d=o*o,f=a.min,h=a.max,p=this.points;let x=1/0;for(let g=0;g<8;g++){const m=p[g];s.copy(m).clamp(f,h);const y=m.distanceToSquared(s);if(y<x&&(x=y,l&&l.copy(m),u&&u.copy(s),y<d))return Math.sqrt(y)}let M=0;for(let g=0;g<3;g++)for(let m=0;m<=1;m++)for(let y=0;y<=1;y++){const b=(g+1)%3,E=(g+2)%3,R=m<<b|y<<E,T=1<<g|m<<b|y<<E,P=p[R],v=p[T];t[M].set(P,v);const L=i[g],I=i[b],F=i[E],z=e[M],k=z.start,O=z.end;k[L]=f[L],k[I]=m?f[I]:h[I],k[F]=y?f[F]:h[I],O[L]=h[L],O[I]=m?f[I]:h[I],O[F]=y?f[F]:h[I],M++}for(let g=0;g<=1;g++)for(let m=0;m<=1;m++)for(let y=0;y<=1;y++){s.x=g?h.x:f.x,s.y=m?h.y:f.y,s.z=y?h.z:f.z,this.closestPointToPoint(s,n);const b=s.distanceToSquared(n);if(b<x&&(x=b,l&&l.copy(n),u&&u.copy(s),b<d))return Math.sqrt(b)}for(let g=0;g<12;g++){const m=t[g];for(let y=0;y<12;y++){const b=e[y];Ac(m,b,n,s);const E=n.distanceToSquared(s);if(E<x&&(x=E,l&&l.copy(n),u&&u.copy(s),E<d))return Math.sqrt(E)}}return Math.sqrt(x)}}();class wc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Nv extends wc{constructor(){super(()=>new Nn)}}const Mn=new Nv;class Fv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const Ee=new Fv;let bi,bs;const us=[],ga=new wc(()=>new Fe);function Ov(i,t,e,n,s,r){bi=ga.getPrimitive(),bs=ga.getPrimitive(),us.push(bi,bs),Ee.setBuffer(i._roots[t]);const a=nc(0,i.geometry,e,n,s,r);Ee.clearBuffer(),ga.releasePrimitive(bi),ga.releasePrimitive(bs),us.pop(),us.pop();const o=us.length;return o>0&&(bs=us[o-1],bi=us[o-2]),a}function nc(i,t,e,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:u}=Ee;let d=i*2;if(Qe(d,l)){const h=on(i,u),p=pn(d,l);return Ie(i,o,bi),n(h,p,!1,a,r+i,bi)}else{let L=function(F){const{uint16Array:z,uint32Array:k}=Ee;let O=F*2;for(;!Qe(O,z);)F=yn(F),O=F*2;return on(F,k)},I=function(F){const{uint16Array:z,uint32Array:k}=Ee;let O=F*2;for(;!Qe(O,z);)F=mn(F,k),O=F*2;return on(F,k)+pn(O,z)};const h=yn(i),p=mn(i,u);let x=h,M=p,g,m,y,b;if(s&&(y=bi,b=bs,Ie(x,o,y),Ie(M,o,b),g=s(y),m=s(b),m<g)){x=p,M=h;const F=g;g=m,m=F,y=b}y||(y=bi,Ie(x,o,y));const E=Qe(x*2,l),R=e(y,E,g,a+1,r+x);let T;if(R===sh){const F=L(x),k=I(x)-F;T=n(F,k,!0,a+1,r+x,y)}else T=R&&nc(x,t,e,n,s,r,a+1);if(T)return!0;b=bs,Ie(M,o,b);const P=Qe(M*2,l),v=e(b,P,m,a+1,r+M);let w;if(v===sh){const F=L(M),k=I(M)-F;w=n(F,k,!0,a+1,r+M,b)}else w=v&&nc(M,t,e,n,s,r,a+1);return!!w}}const ir=new B,Ko=new B;function Bv(i,t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,l=null;if(i.shapecast({boundsTraverseOrder:d=>(ir.copy(t).clamp(d.min,d.max),ir.distanceToSquared(t)),intersectsBounds:(d,f,h)=>h<o&&h<a,intersectsTriangle:(d,f)=>{d.closestPointToPoint(t,ir);const h=t.distanceToSquared(ir);return h<o&&(Ko.copy(ir),o=h,l=f),h<r}}),o===1/0)return null;const u=Math.sqrt(o);return e.point?e.point.copy(Ko):e.point=Ko.clone(),e.distance=u,e.faceIndex=l,e}const hs=new B,fs=new B,ds=new B,_a=new Wt,xa=new Wt,va=new Wt,ch=new B,uh=new B,hh=new B,ya=new B;function zv(i,t,e,n,s,r,a,o){let l;if(r===tn?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==Gn,s),l===null)return null;const u=i.origin.distanceTo(s);return u<a||u>o?null:{distance:u,point:s.clone()}}function kv(i,t,e,n,s,r,a,o,l,u,d){hs.fromBufferAttribute(t,r),fs.fromBufferAttribute(t,a),ds.fromBufferAttribute(t,o);const f=zv(i,hs,fs,ds,ya,l,u,d);if(f){n&&(_a.fromBufferAttribute(n,r),xa.fromBufferAttribute(n,a),va.fromBufferAttribute(n,o),f.uv=je.getInterpolation(ya,hs,fs,ds,_a,xa,va,new Wt)),s&&(_a.fromBufferAttribute(s,r),xa.fromBufferAttribute(s,a),va.fromBufferAttribute(s,o),f.uv1=je.getInterpolation(ya,hs,fs,ds,_a,xa,va,new Wt)),e&&(ch.fromBufferAttribute(e,r),uh.fromBufferAttribute(e,a),hh.fromBufferAttribute(e,o),f.normal=je.getInterpolation(ya,hs,fs,ds,ch,uh,hh,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:r,b:a,c:o,normal:new B,materialIndex:0};je.getNormal(hs,fs,ds,h.normal),f.face=h,f.faceIndex=r}return f}function to(i,t,e,n,s,r,a){const o=n*3;let l=o+0,u=o+1,d=o+2;const f=i.index;i.index&&(l=f.getX(l),u=f.getX(u),d=f.getX(d));const{position:h,normal:p,uv:x,uv1:M}=i.attributes,g=kv(e,h,p,x,M,l,u,d,t,r,a);return g?(g.faceIndex=n,s&&s.push(g),g):null}function Ne(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,l=t+1,u=t+2;e&&(o=e.getX(o),l=e.getX(l),u=e.getX(u)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),a.x=n.getX(u),a.y=n.getY(u),a.z=n.getZ(u)}function Vv(i,t,e,n,s,r,a,o){const{geometry:l,_indirectBuffer:u}=i;for(let d=n,f=n+s;d<f;d++)to(l,t,e,d,r,a,o)}function Hv(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,d=null;for(let f=n,h=n+s;f<h;f++){let p;p=to(o,t,e,f,null,r,a),p&&p.distance<u&&(d=p,u=p.distance)}return d}function Gv(i,t,e,n,s,r,a){const{geometry:o}=e,{index:l}=o,u=o.attributes.position;for(let d=i,f=t+i;d<f;d++){let h;if(h=d,Ne(a,h*3,l,u),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function Wv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,l,u=0;const d=i._roots;for(let h=0,p=d.length;h<p;h++)r=d[h],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),f(0,u),u+=r.byteLength;function f(h,p,x=!1){const M=h*2;if(o[M+15]===Qa){const m=a[h+6],y=o[M+14];let b=1/0,E=1/0,R=1/0,T=-1/0,P=-1/0,v=-1/0;for(let w=3*m,L=3*(m+y);w<L;w++){let I=n[w];const F=s.getX(I),z=s.getY(I),k=s.getZ(I);F<b&&(b=F),F>T&&(T=F),z<E&&(E=z),z>P&&(P=z),k<R&&(R=k),k>v&&(v=k)}return l[h+0]!==b||l[h+1]!==E||l[h+2]!==R||l[h+3]!==T||l[h+4]!==P||l[h+5]!==v?(l[h+0]=b,l[h+1]=E,l[h+2]=R,l[h+3]=T,l[h+4]=P,l[h+5]=v,!0):!1}else{const m=h+8,y=a[h+6],b=m+p,E=y+p;let R=x,T=!1,P=!1;t?R||(T=t.has(b),P=t.has(E),R=!T&&!P):(T=!0,P=!0);const v=R||T,w=R||P;let L=!1;v&&(L=f(m,p,R));let I=!1;w&&(I=f(y,p,R));const F=L||I;if(F)for(let z=0;z<3;z++){const k=m+z,O=y+z,V=l[k],q=l[k+3],ot=l[O],st=l[O+3];l[h+z]=V<ot?V:ot,l[h+z+3]=q>st?q:st}return F}}}function Ai(i,t,e,n,s){let r,a,o,l,u,d;const f=1/e.direction.x,h=1/e.direction.y,p=1/e.direction.z,x=e.origin.x,M=e.origin.y,g=e.origin.z;let m=t[i],y=t[i+3],b=t[i+1],E=t[i+3+1],R=t[i+2],T=t[i+3+2];return f>=0?(r=(m-x)*f,a=(y-x)*f):(r=(y-x)*f,a=(m-x)*f),h>=0?(o=(b-M)*h,l=(E-M)*h):(o=(E-M)*h,l=(b-M)*h),r>l||o>a||((o>r||isNaN(r))&&(r=o),(l<a||isNaN(a))&&(a=l),p>=0?(u=(R-g)*p,d=(T-g)*p):(u=(T-g)*p,d=(R-g)*p),r>d||u>a)?!1:((u>r||r!==r)&&(r=u),(d<a||a!==a)&&(a=d),r<=s&&a>=n)}function Xv(i,t,e,n,s,r,a,o){const{geometry:l,_indirectBuffer:u}=i;for(let d=n,f=n+s;d<f;d++){let h=u?u[d]:d;to(l,t,e,h,r,a,o)}}function Yv(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,d=null;for(let f=n,h=n+s;f<h;f++){let p;p=to(o,t,e,l?l[f]:f,null,r,a),p&&p.distance<u&&(d=p,u=p.distance)}return d}function qv(i,t,e,n,s,r,a){const{geometry:o}=e,{index:l}=o,u=o.attributes.position;for(let d=i,f=t+i;d<f;d++){let h;if(h=e.resolveTriangleIndex(d),Ne(a,h*3,l,u),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function Zv(i,t,e,n,s,r,a){Ee.setBuffer(i._roots[t]),ic(0,i,e,n,s,r,a),Ee.clearBuffer()}function ic(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:u}=Ee,d=i*2;if(Qe(d,l)){const h=on(i,u),p=pn(d,l);Vv(t,e,n,h,p,s,r,a)}else{const h=yn(i);Ai(h,o,n,r,a)&&ic(h,t,e,n,s,r,a);const p=mn(i,u);Ai(p,o,n,r,a)&&ic(p,t,e,n,s,r,a)}}const jv=["x","y","z"];function Kv(i,t,e,n,s,r){Ee.setBuffer(i._roots[t]);const a=sc(0,i,e,n,s,r);return Ee.clearBuffer(),a}function sc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=Ee;let u=i*2;if(Qe(u,o)){const f=on(i,l),h=pn(u,o);return Hv(t,e,n,f,h,s,r)}else{const f=Tc(i,l),h=jv[f],x=n.direction[h]>=0;let M,g;x?(M=yn(i),g=mn(i,l)):(M=mn(i,l),g=yn(i));const y=Ai(M,a,n,s,r)?sc(M,t,e,n,s,r):null;if(y){const R=y.point[h];if(x?R<=a[g+f]:R>=a[g+f+3])return y}const E=Ai(g,a,n,s,r)?sc(g,t,e,n,s,r):null;return y&&E?y.distance<=E.distance?y:E:y||E||null}}const Ma=new Fe,ps=new Nn,ms=new Nn,sr=new te,fh=new nn,Sa=new nn;function $v(i,t,e,n){Ee.setBuffer(i._roots[t]);const s=rc(0,i,e,n);return Ee.clearBuffer(),s}function rc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=Ee;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),fh.set(e.boundingBox.min,e.boundingBox.max,n),s=fh),Qe(l,a)){const d=t.geometry,f=d.index,h=d.attributes.position,p=e.index,x=e.attributes.position,M=on(i,o),g=pn(l,a);if(sr.copy(n).invert(),e.boundsTree)return Ie(i,r,Sa),Sa.matrix.copy(sr),Sa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Sa.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let b=M*3,E=(g+M)*3;b<E;b+=3)if(Ne(ms,b,f,h),ms.needsUpdate=!0,y.intersectsTriangle(ms))return!0;return!1}});for(let m=M*3,y=(g+M)*3;m<y;m+=3){Ne(ps,m,f,h),ps.a.applyMatrix4(sr),ps.b.applyMatrix4(sr),ps.c.applyMatrix4(sr),ps.needsUpdate=!0;for(let b=0,E=p.count;b<E;b+=3)if(Ne(ms,b,p,x),ms.needsUpdate=!0,ps.intersectsTriangle(ms))return!0}}else{const d=i+8,f=o[i+6];return Ie(d,r,Ma),!!(s.intersectsBox(Ma)&&rc(d,t,e,n,s)||(Ie(f,r,Ma),s.intersectsBox(Ma)&&rc(f,t,e,n,s)))}}const ba=new te,$o=new nn,rr=new nn,Jv=new B,Qv=new B,ty=new B,ey=new B;function ny(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),$o.set(t.boundingBox.min,t.boundingBox.max,e),$o.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,u=o.index,d=t.attributes.position,f=t.index,h=Mn.getPrimitive(),p=Mn.getPrimitive();let x=Jv,M=Qv,g=null,m=null;s&&(g=ty,m=ey);let y=1/0,b=null,E=null;return ba.copy(e).invert(),rr.matrix.copy(ba),i.shapecast({boundsTraverseOrder:R=>$o.distanceToBox(R),intersectsBounds:(R,T,P)=>P<y&&P<a?(T&&(rr.min.copy(R.min),rr.max.copy(R.max),rr.needsUpdate=!0),!0):!1,intersectsRange:(R,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:v=>rr.distanceToBox(v),intersectsBounds:(v,w,L)=>L<y&&L<a,intersectsRange:(v,w)=>{for(let L=v,I=v+w;L<I;L++){Ne(p,3*L,f,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let F=R,z=R+T;F<z;F++){Ne(h,3*F,u,l),h.needsUpdate=!0;const k=h.distanceToTriangle(p,x,g);if(k<y&&(M.copy(x),m&&m.copy(g),y=k,b=F,E=L),k<r)return!0}}}});{const P=ks(t);for(let v=0,w=P;v<w;v++){Ne(p,3*v,f,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let L=R,I=R+T;L<I;L++){Ne(h,3*L,u,l),h.needsUpdate=!0;const F=h.distanceToTriangle(p,x,g);if(F<y&&(M.copy(x),m&&m.copy(g),y=F,b=L,E=v),F<r)return!0}}}}}),Mn.releasePrimitive(h),Mn.releasePrimitive(p),y===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=y,n.faceIndex=b,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(ba),M.applyMatrix4(ba),s.distance=M.sub(s.point).length(),s.faceIndex=E),n)}function iy(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,l,u=0;const d=i._roots;for(let h=0,p=d.length;h<p;h++)r=d[h],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),f(0,u),u+=r.byteLength;function f(h,p,x=!1){const M=h*2;if(o[M+15]===Qa){const m=a[h+6],y=o[M+14];let b=1/0,E=1/0,R=1/0,T=-1/0,P=-1/0,v=-1/0;for(let w=m,L=m+y;w<L;w++){const I=3*i.resolveTriangleIndex(w);for(let F=0;F<3;F++){let z=I+F;z=n?n[z]:z;const k=s.getX(z),O=s.getY(z),V=s.getZ(z);k<b&&(b=k),k>T&&(T=k),O<E&&(E=O),O>P&&(P=O),V<R&&(R=V),V>v&&(v=V)}}return l[h+0]!==b||l[h+1]!==E||l[h+2]!==R||l[h+3]!==T||l[h+4]!==P||l[h+5]!==v?(l[h+0]=b,l[h+1]=E,l[h+2]=R,l[h+3]=T,l[h+4]=P,l[h+5]=v,!0):!1}else{const m=h+8,y=a[h+6],b=m+p,E=y+p;let R=x,T=!1,P=!1;t?R||(T=t.has(b),P=t.has(E),R=!T&&!P):(T=!0,P=!0);const v=R||T,w=R||P;let L=!1;v&&(L=f(m,p,R));let I=!1;w&&(I=f(y,p,R));const F=L||I;if(F)for(let z=0;z<3;z++){const k=m+z,O=y+z,V=l[k],q=l[k+3],ot=l[O],st=l[O+3];l[h+z]=V<ot?V:ot,l[h+z+3]=q>st?q:st}return F}}}function sy(i,t,e,n,s,r,a){Ee.setBuffer(i._roots[t]),ac(0,i,e,n,s,r,a),Ee.clearBuffer()}function ac(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:u}=Ee,d=i*2;if(Qe(d,l)){const h=on(i,u),p=pn(d,l);Xv(t,e,n,h,p,s,r,a)}else{const h=yn(i);Ai(h,o,n,r,a)&&ac(h,t,e,n,s,r,a);const p=mn(i,u);Ai(p,o,n,r,a)&&ac(p,t,e,n,s,r,a)}}const ry=["x","y","z"];function ay(i,t,e,n,s,r){Ee.setBuffer(i._roots[t]);const a=oc(0,i,e,n,s,r);return Ee.clearBuffer(),a}function oc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=Ee;let u=i*2;if(Qe(u,o)){const f=on(i,l),h=pn(u,o);return Yv(t,e,n,f,h,s,r)}else{const f=Tc(i,l),h=ry[f],x=n.direction[h]>=0;let M,g;x?(M=yn(i),g=mn(i,l)):(M=mn(i,l),g=yn(i));const y=Ai(M,a,n,s,r)?oc(M,t,e,n,s,r):null;if(y){const R=y.point[h];if(x?R<=a[g+f]:R>=a[g+f+3])return y}const E=Ai(g,a,n,s,r)?oc(g,t,e,n,s,r):null;return y&&E?y.distance<=E.distance?y:E:y||E||null}}const Ea=new Fe,gs=new Nn,_s=new Nn,ar=new te,dh=new nn,Ta=new nn;function oy(i,t,e,n){Ee.setBuffer(i._roots[t]);const s=lc(0,i,e,n);return Ee.clearBuffer(),s}function lc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=Ee;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),dh.set(e.boundingBox.min,e.boundingBox.max,n),s=dh),Qe(l,a)){const d=t.geometry,f=d.index,h=d.attributes.position,p=e.index,x=e.attributes.position,M=on(i,o),g=pn(l,a);if(ar.copy(n).invert(),e.boundsTree)return Ie(i,r,Ta),Ta.matrix.copy(ar),Ta.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Ta.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let b=M,E=g+M;b<E;b++)if(Ne(_s,3*t.resolveTriangleIndex(b),f,h),_s.needsUpdate=!0,y.intersectsTriangle(_s))return!0;return!1}});for(let m=M,y=g+M;m<y;m++){const b=t.resolveTriangleIndex(m);Ne(gs,3*b,f,h),gs.a.applyMatrix4(ar),gs.b.applyMatrix4(ar),gs.c.applyMatrix4(ar),gs.needsUpdate=!0;for(let E=0,R=p.count;E<R;E+=3)if(Ne(_s,E,p,x),_s.needsUpdate=!0,gs.intersectsTriangle(_s))return!0}}else{const d=i+8,f=o[i+6];return Ie(d,r,Ea),!!(s.intersectsBox(Ea)&&lc(d,t,e,n,s)||(Ie(f,r,Ea),s.intersectsBox(Ea)&&lc(f,t,e,n,s)))}}const Aa=new te,Jo=new nn,or=new nn,ly=new B,cy=new B,uy=new B,hy=new B;function fy(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Jo.set(t.boundingBox.min,t.boundingBox.max,e),Jo.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,u=o.index,d=t.attributes.position,f=t.index,h=Mn.getPrimitive(),p=Mn.getPrimitive();let x=ly,M=cy,g=null,m=null;s&&(g=uy,m=hy);let y=1/0,b=null,E=null;return Aa.copy(e).invert(),or.matrix.copy(Aa),i.shapecast({boundsTraverseOrder:R=>Jo.distanceToBox(R),intersectsBounds:(R,T,P)=>P<y&&P<a?(T&&(or.min.copy(R.min),or.max.copy(R.max),or.needsUpdate=!0),!0):!1,intersectsRange:(R,T)=>{if(t.boundsTree){const P=t.boundsTree;return P.shapecast({boundsTraverseOrder:v=>or.distanceToBox(v),intersectsBounds:(v,w,L)=>L<y&&L<a,intersectsRange:(v,w)=>{for(let L=v,I=v+w;L<I;L++){const F=P.resolveTriangleIndex(L);Ne(p,3*F,f,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let z=R,k=R+T;z<k;z++){const O=i.resolveTriangleIndex(z);Ne(h,3*O,u,l),h.needsUpdate=!0;const V=h.distanceToTriangle(p,x,g);if(V<y&&(M.copy(x),m&&m.copy(g),y=V,b=z,E=L),V<r)return!0}}}})}else{const P=ks(t);for(let v=0,w=P;v<w;v++){Ne(p,3*v,f,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let L=R,I=R+T;L<I;L++){const F=i.resolveTriangleIndex(L);Ne(h,3*F,u,l),h.needsUpdate=!0;const z=h.distanceToTriangle(p,x,g);if(z<y&&(M.copy(x),m&&m.copy(g),y=z,b=L,E=v),z<r)return!0}}}}}),Mn.releasePrimitive(h),Mn.releasePrimitive(p),y===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=y,n.faceIndex=b,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(Aa),M.applyMatrix4(Aa),s.distance=M.sub(s.point).length(),s.faceIndex=E),n)}function dy(){return typeof SharedArrayBuffer<"u"}const mr=new Ee.constructor,Xa=new Ee.constructor,xi=new wc(()=>new Fe),xs=new Fe,vs=new Fe,Qo=new Fe,tl=new Fe;let el=!1;function py(i,t,e,n){if(el)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");el=!0;const s=i._roots,r=t._roots;let a,o=0,l=0;const u=new te().copy(e).invert();for(let d=0,f=s.length;d<f;d++){mr.setBuffer(s[d]),l=0;const h=xi.getPrimitive();Ie(0,mr.float32Array,h),h.applyMatrix4(u);for(let p=0,x=r.length;p<x&&(Xa.setBuffer(r[p]),a=Rn(0,0,e,u,n,o,l,0,0,h),Xa.clearBuffer(),l+=r[p].length,!a);p++);if(xi.releasePrimitive(h),mr.clearBuffer(),o+=s[d].length,a)break}return el=!1,a}function Rn(i,t,e,n,s,r=0,a=0,o=0,l=0,u=null,d=!1){let f,h;d?(f=Xa,h=mr):(f=mr,h=Xa);const p=f.float32Array,x=f.uint32Array,M=f.uint16Array,g=h.float32Array,m=h.uint32Array,y=h.uint16Array,b=i*2,E=t*2,R=Qe(b,M),T=Qe(E,y);let P=!1;if(T&&R)d?P=s(on(t,m),pn(t*2,y),on(i,x),pn(i*2,M),l,a+t,o,r+i):P=s(on(i,x),pn(i*2,M),on(t,m),pn(t*2,y),o,r+i,l,a+t);else if(T){const v=xi.getPrimitive();Ie(t,g,v),v.applyMatrix4(e);const w=yn(i),L=mn(i,x);Ie(w,p,xs),Ie(L,p,vs);const I=v.intersectsBox(xs),F=v.intersectsBox(vs);P=I&&Rn(t,w,n,e,s,a,r,l,o+1,v,!d)||F&&Rn(t,L,n,e,s,a,r,l,o+1,v,!d),xi.releasePrimitive(v)}else{const v=yn(t),w=mn(t,m);Ie(v,g,Qo),Ie(w,g,tl);const L=u.intersectsBox(Qo),I=u.intersectsBox(tl);if(L&&I)P=Rn(i,v,e,n,s,r,a,o,l+1,u,d)||Rn(i,w,e,n,s,r,a,o,l+1,u,d);else if(L)if(R)P=Rn(i,v,e,n,s,r,a,o,l+1,u,d);else{const F=xi.getPrimitive();F.copy(Qo).applyMatrix4(e);const z=yn(i),k=mn(i,x);Ie(z,p,xs),Ie(k,p,vs);const O=F.intersectsBox(xs),V=F.intersectsBox(vs);P=O&&Rn(v,z,n,e,s,a,r,l,o+1,F,!d)||V&&Rn(v,k,n,e,s,a,r,l,o+1,F,!d),xi.releasePrimitive(F)}else if(I)if(R)P=Rn(i,w,e,n,s,r,a,o,l+1,u,d);else{const F=xi.getPrimitive();F.copy(tl).applyMatrix4(e);const z=yn(i),k=mn(i,x);Ie(z,p,xs),Ie(k,p,vs);const O=F.intersectsBox(xs),V=F.intersectsBox(vs);P=O&&Rn(w,z,n,e,s,a,r,l,o+1,F,!d)||V&&Rn(w,k,n,e,s,a,r,l,o+1,F,!d),xi.releasePrimitive(F)}}return P}const wa=new nn,ph=new Fe,my={strategy:hf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Rc{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:s.map(l=>l.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=t,o=new Rc(e,{...n,[Yo]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const l=e.getIndex();if(l===null){const u=new We(t.index,1,!1);e.setIndex(u)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...my,[Yo]:!1},e),e.useSharedArrayBuffer&&!dy())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Yo]||(Iv(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Fe))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?iy:Wv)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,l=0){const u=o*2,d=r[u+15]===Qa;if(d){const f=s[o+6],h=r[u+14];t(l,d,new Float32Array(n,o*4,6),f,h)}else{const f=o+Ei/4,h=s[o+6],p=s[o+7];t(l,d,new Float32Array(n,o*4,6),p)||(a(f,l+1),a(h,l+1))}}}raycast(t,e=qn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],l=e.isMaterial,u=Array.isArray(e),d=a.groups,f=l?e.side:e,h=this.indirect?sy:Zv;for(let p=0,x=r.length;p<x;p++){const M=u?e[d[p].materialIndex].side:f,g=o.length;if(h(this,p,M,t,o,n,s),u){const m=d[p].materialIndex;for(let y=g,b=o.length;y<b;y++)o[y].face.materialIndex=m}}return o}raycastFirst(t,e=qn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=e.isMaterial,l=Array.isArray(e);let u=null;const d=a.groups,f=o?e.side:e,h=this.indirect?ay:Kv;for(let p=0,x=r.length;p<x;p++){const M=l?e[d[p].materialIndex].side:f,g=h(this,p,M,t,n,s);g!=null&&(u==null||g.distance<u.distance)&&(u=g,l&&(g.face.materialIndex=d[p].materialIndex))}return u}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?oy:$v;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){const e=Mn.getPrimitive(),n=this.indirect?qv:Gv;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const f=a;a=(h,p,x,M,g)=>f(h,p,x,M,g)?!0:n(h,p,this,o,x,M,e)}else a||(o?a=(f,h,p,x)=>n(f,h,this,o,p,x,e):a=(f,h,p)=>p);let l=!1,u=0;const d=this._roots;for(let f=0,h=d.length;f<h;f++){const p=d[f];if(l=Ov(this,f,r,a,s,u),l)break;u+=p.byteLength}return Mn.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=Mn.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?x=>{const M=this.resolveTriangleIndex(x);Ne(a,M*3,o,l)}:x=>{Ne(a,x*3,o,l)},d=Mn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,p=t.indirect?x=>{const M=t.resolveTriangleIndex(x);Ne(d,M*3,f,h)}:x=>{Ne(d,x*3,f,h)};if(r){const x=(M,g,m,y,b,E,R,T)=>{for(let P=m,v=m+y;P<v;P++){p(P),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let w=M,L=M+g;w<L;w++)if(u(w),a.needsUpdate=!0,r(a,d,w,P,b,E,R,T))return!0}return!1};if(s){const M=s;s=function(g,m,y,b,E,R,T,P){return M(g,m,y,b,E,R,T,P)?!0:x(g,m,y,b,E,R,T,P)}}else s=x}return py(this,t,e,s)}intersectsBox(t,e){return wa.set(t.min,t.max,e),wa.needsUpdate=!0,this.shapecast({intersectsBounds:n=>wa.intersectsBox(n),intersectsTriangle:n=>wa.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?fy:ny)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return Bv(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Ie(0,new Float32Array(n),ph),t.union(ph)}),t}}function gy(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function _y(i){switch(i){case 1:return Mi;case 2:return dn;case 3:return Ae;case 4:return Ae}}function mh(i){switch(i){case 1:return Za;case 2:return vr;case 3:return Is;case 4:return Is}}class xf extends zi{constructor(){super(),this.minFilter=we,this.magFilter=we,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){const e=this.overrideItemSize,n=t.itemSize,s=t.count;if(e!==null){if(n*s%e!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");t.itemSize=e,t.count=s*n/e}const r=t.itemSize,a=t.count,o=t.normalized,l=t.array.constructor,u=l.BYTES_PER_ELEMENT;let d=this._forcedType,f=r;if(d===null)switch(l){case Float32Array:d=Re;break;case Uint8Array:case Uint16Array:case Uint32Array:d=en;break;case Int8Array:case Int16Array:case Int32Array:d=As;break}let h,p,x,M,g=gy(r);switch(d){case Re:x=1,p=_y(r),o&&u===1?(M=l,g+="8",l===Uint8Array?h=Je:(h=Na,g+="_SNORM")):(M=Float32Array,g+="32F",h=Re);break;case As:g+=u*8+"I",x=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=mh(r),u===1?(M=Int8Array,h=Na):u===2?(M=Int16Array,h=hc):(M=Int32Array,h=As);break;case en:g+=u*8+"UI",x=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=mh(r),u===1?(M=Uint8Array,h=Je):u===2?(M=Uint16Array,h=Ps):(M=Uint32Array,h=en);break}f===3&&(p===Ae||p===Is)&&(f=4);const m=Math.ceil(Math.sqrt(a))||1,y=f*m*m,b=new M(y),E=t.normalized;t.normalized=!1;for(let R=0;R<a;R++){const T=f*R;b[T]=t.getX(R)/x,r>=2&&(b[T+1]=t.getY(R)/x),r>=3&&(b[T+2]=t.getZ(R)/x,f===4&&(b[T+3]=1)),r>=4&&(b[T+3]=t.getW(R)/x)}t.normalized=E,this.internalFormat=g,this.format=p,this.type=h,this.image.width=m,this.image.height=m,this.image.data=b,this.needsUpdate=!0,this.dispose(),t.itemSize=n,t.count=s}}class xy extends xf{constructor(){super(),this._forcedType=en}}class vy extends xf{constructor(){super(),this._forcedType=Re}}class yy{constructor(){this.index=new xy,this.position=new vy,this.bvhBounds=new zi,this.bvhContents=new zi,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(t){const{geometry:e}=t;if(Sy(t,this.bvhBounds,this.bvhContents),this.position.updateFrom(e.attributes.position),t.indirect){const n=t._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(e.index)this._cachedIndexAttr=e.index.clone();else{const s=df(ff(e));this._cachedIndexAttr=new We(s,1,!1)}My(e,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(e.index)}dispose(){const{index:t,position:e,bvhBounds:n,bvhContents:s}=this;t&&t.dispose(),e&&e.dispose(),n&&n.dispose(),s&&s.dispose()}}function My(i,t,e){const n=e.array,s=i.index?i.index.array:null;for(let r=0,a=t.length;r<a;r++){const o=3*r,l=3*t[r];for(let u=0;u<3;u++)n[o+u]=s?s[l+u]:l+u}}function Sy(i,t,e){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const s=n[0],r=new Uint16Array(s),a=new Uint32Array(s),o=new Float32Array(s),l=s.byteLength/Ei,u=2*Math.ceil(Math.sqrt(l/2)),d=new Float32Array(4*u*u),f=Math.ceil(Math.sqrt(l)),h=new Uint32Array(2*f*f);for(let p=0;p<l;p++){const x=p*Ei/4,M=x*2,g=x;for(let m=0;m<3;m++)d[8*p+0+m]=o[g+0+m],d[8*p+4+m]=o[g+3+m];if(Qe(M,r)){const m=pn(M,r),y=on(x,a),b=4294901760|m;h[p*2+0]=b,h[p*2+1]=y}else{const m=4*mn(x,a)/Ei,y=Tc(x,a);h[p*2+0]=y,h[p*2+1]=m}}t.image.data=d,t.image.width=u,t.image.height=u,t.format=Ae,t.type=Re,t.internalFormat="RGBA32F",t.minFilter=we,t.magFilter=we,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),e.image.data=h,e.image.width=f,e.image.height=f,e.format=vr,e.type=en,e.internalFormat="RG32UI",e.minFilter=we,e.magFilter=we,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose()}const by=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Ey=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Ty=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Ay=Ty,wy=`
	${by}
	${Ey}
`;function Ry(i){if(!i)return null;try{const t=i.index?i:mv(i);return new Rc(t)}catch(t){return console.warn("[diamond] failed to build BVH from geometry",t),null}}const Cy=`
uniform mat4 viewMatrixInverse;

varying vec3 vWorldPosition;
varying vec3 vNormal;
varying mat4 vModelMatrixInverse;

void main() {
  vModelMatrixInverse = inverse(modelMatrix);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  vNormal = normalize((viewMatrixInverse * vec4(normalMatrix * normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,Py=`
precision highp isampler2D;
precision highp usampler2D;

// Under glslVersion: GLSL3, three.js does NOT auto-inject the gl_FragColor →
// pc_fragColor compat shim it uses for GLSL ES 1.00 ShaderMaterials (see
// three's WebGLProgram.js, where the layout(location=0) out + #define are
// gated on glslVersion !== GLSL3). Three's auto-injected
// <tonemapping_fragment> / <colorspace_fragment> application chunks still
// emit "gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );" etc., so we
// declare the out var ourselves and re-establish the macro so both the
// chunks and our own gl_FragColor writes resolve to the same target.
out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor

varying vec3 vWorldPosition;
varying vec3 vNormal;
varying mat4 vModelMatrixInverse;

uniform sampler2D envMap;
uniform float bounces;
${Ay}
${wy}
uniform BVH bvh;
uniform float ior;
uniform vec2 resolution;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrixInverse;
uniform mat4 viewMatrixInverse;
uniform float aberrationStrength;
uniform float fresnel;
uniform vec3 tintColor;
uniform float opacity;
uniform float envMapIntensity;

// Do NOT #include <tonemapping_pars_fragment> or <colorspace_pars_fragment>
// here. three.js's WebGLProgram already injects both into the fragment
// prefix for non-raw ShaderMaterials (see three.module.js where
// ShaderChunk[ 'tonemapping_pars_fragment' ] and
// ShaderChunk[ 'colorspace_pars_fragment' ] are pushed into prefixFragment).
// Re-including them redeclares toneMappingExposure and the helper functions,
// which fails to compile under GLSL ES 3.00.
#include <common>

// equirectUv(vec3) is provided by <common> (and PI / PI2 / RECIPROCAL_PI /
// RECIPROCAL_PI2). Don't redeclare it here — that's a hard "function already
// has a body" compile error under GLSL ES 3.00. The built-in expects a
// normalized direction; our callers pass normalized vectors, so this is a
// drop-in replacement.

float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
  return pow(1.0 + dot(viewDirection, worldNormal), 10.0);
}

// Trace a ray through the diamond, refracting through the front facet
// and then bouncing inside the mesh up to (bounces) uniform times.
// Returns the final exit direction in world space.
vec3 totalInternalReflection(vec3 ro, vec3 rd, vec3 normal, float etaIor, mat4 modelMatrixInverse) {
  vec3 rayOrigin = ro;
  vec3 rayDirection = rd;
  rayDirection = refract(rayDirection, normal, 1.0 / etaIor);
  rayOrigin = vWorldPosition + rayDirection * 0.001;
  // Move into local space — the BVH was built from the geometry's local
  // positions, so rays must traverse it in the same frame.
  rayOrigin = (modelMatrixInverse * vec4(rayOrigin, 1.0)).xyz;
  rayDirection = normalize((modelMatrixInverse * vec4(rayDirection, 0.0)).xyz);
  for (float i = 0.0; i < bounces; i++) {
    uvec4 faceIndices = uvec4(0u);
    vec3 faceNormal = vec3(0.0, 0.0, 1.0);
    vec3 barycoord = vec3(0.0);
    float side = 1.0;
    float dist = 0.0;
    bvhIntersectFirstHit(bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist);
    vec3 hitPos = rayOrigin + rayDirection * max(dist - 0.001, 0.0);
    vec3 tempDir = refract(rayDirection, faceNormal, etaIor);
    if (length(tempDir) != 0.0) {
      // Successful refraction out of the diamond — stop bouncing.
      rayDirection = tempDir;
      break;
    }
    // Total internal reflection — bounce off the back facet and continue.
    rayDirection = reflect(rayDirection, faceNormal);
    rayOrigin = hitPos + rayDirection * 0.01;
  }
  // Back to world space for the env-map sample.
  rayDirection = normalize((modelMatrix * vec4(rayDirection, 0.0)).xyz);
  return rayDirection;
}

// Sample the equirect env map with derivatives taken from a smooth
// screen-space direction (correctMips trick) so that adjacent fragments,
// whose chaotic ray directions differ wildly, don't bias the mipmap
// selection toward the highest blur level.
vec4 sampleEnvSmooth(vec3 dir, vec3 smoothDir) {
  vec2 uvCoord = equirectUv(dir);
  vec2 smoothUv = equirectUv(smoothDir);
  return textureGrad(envMap, uvCoord, dFdx(smoothUv), dFdy(smoothUv));
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  vec3 directionCamPerfect = (projectionMatrixInverse * vec4(uv * 2.0 - 1.0, 0.0, 1.0)).xyz;
  directionCamPerfect = (viewMatrixInverse * vec4(directionCamPerfect, 0.0)).xyz;
  directionCamPerfect = normalize(directionCamPerfect);
  vec3 normal = vNormal;
  vec3 rayOrigin = cameraPosition;
  vec3 rayDirection = normalize(vWorldPosition - cameraPosition);

  vec4 diffuseColor = vec4(tintColor, opacity);

  // Three full ray paths, one per RGB channel, at slightly different IORs.
  // This is more expensive than fast-chroma (offset only the final dir)
  // but produces correct dispersion at every internal facet hit.
  vec3 rayDirectionG = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior, 1.0), vModelMatrixInverse);
  vec3 rayDirectionR = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior * (1.0 - aberrationStrength), 1.0), vModelMatrixInverse);
  vec3 rayDirectionB = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior * (1.0 + aberrationStrength), 1.0), vModelMatrixInverse);

  float finalColorR = sampleEnvSmooth(rayDirectionR, directionCamPerfect).r;
  float finalColorG = sampleEnvSmooth(rayDirectionG, directionCamPerfect).g;
  float finalColorB = sampleEnvSmooth(rayDirectionB, directionCamPerfect).b;
  diffuseColor.rgb *= vec3(finalColorR, finalColorG, finalColorB) * envMapIntensity;

  // Soft fresnel rim — pulls highlights toward white at grazing angles.
  vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
  float nFresnel = fresnelFunc(viewDirection, normal) * fresnel;

  // gl_FragColor must be written BEFORE the chunks below — they read it
  // (tonemapping_fragment runs gl_FragColor.rgb = toneMapping(...) and
  // colorspace_fragment runs gl_FragColor = linearToOutputTexel(...)).
  // If we set gl_FragColor after them, the chunks no-op on undefined memory
  // and the final colour skips both the tone-mapping AND sRGB conversion,
  // which on a Windows + ANGLE pipeline can render the surface as effectively
  // invisible (linear values ≪ 1 are clipped by the sRGB framebuffer).
  gl_FragColor = vec4(mix(diffuseColor.rgb, vec3(1.0), nFresnel), diffuseColor.a);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Iy(i={}){const t=i.bvh??Ry(i.geometry);if(!t)return console.warn("[diamond] no BVH available; cannot create BVH ray-traced material"),null;const e=new yy;e.updateFrom(t);const n={envMap:{value:i.envMap??null},bvh:{value:e},bounces:{value:typeof i.bounces=="number"?i.bounces:3},ior:{value:typeof i.ior=="number"?i.ior:2.6},aberrationStrength:{value:typeof i.dispersion=="number"?i.dispersion:.01},fresnel:{value:typeof i.fresnel=="number"?i.fresnel:.5},tintColor:{value:new se(i.color??16777215)},opacity:{value:1},envMapIntensity:{value:typeof i.envMapIntensity=="number"?i.envMapIntensity:1.3},resolution:{value:new Wt(1,1)},viewMatrixInverse:{value:new te},projectionMatrixInverse:{value:new te}},s=new Un({name:i.name||"DiamondShaderMaterial",uniforms:n,vertexShader:Cy,fragmentShader:Py,glslVersion:Yl,transparent:!1,depthWrite:!0,depthTest:!0});s.userData.isDiamondShaderMaterial=!0,s.userData.bvh=t;const r=new se(i.color??16777215);return n.tintColor.value.copy(r),Object.defineProperties(s,{color:{enumerable:!0,configurable:!0,get(){return r},set(a){a&&typeof a.getHex=="function"?r.copy(a):r.set(a),n.tintColor.value.copy(r)}},envMap:{enumerable:!0,configurable:!0,get(){return n.envMap.value},set(a){if(a==null){n.envMap.value=null;return}a.mapping===hr&&(n.envMap.value=a)}},ior:{enumerable:!0,configurable:!0,get(){return n.ior.value},set(a){typeof a=="number"&&(n.ior.value=a)}},dispersion:{enumerable:!0,configurable:!0,get(){return n.aberrationStrength.value},set(a){typeof a=="number"&&(n.aberrationStrength.value=a)}},bounces:{enumerable:!0,configurable:!0,get(){return n.bounces.value},set(a){typeof a=="number"&&(n.bounces.value=a)}},envMapIntensity:{enumerable:!0,configurable:!0,get(){return n.envMapIntensity.value},set(a){typeof a=="number"&&(n.envMapIntensity.value=a)}},reflectivity:{enumerable:!0,configurable:!0,get(){return n.fresnel.value},set(a){typeof a=="number"&&(n.fresnel.value=a)}},metalness:ys(0),roughness:ys(0),transmission:ys(1),thickness:ys(.3),clearcoat:ys(0),clearcoatRoughness:ys(0)}),s.onBeforeRender=function(a,o,l){a.getSize(n.resolution.value),n.viewMatrixInverse.value.copy(l.matrixWorld),n.projectionMatrixInverse.value.copy(l.projectionMatrixInverse)},s}function ys(i){let t=i;return{enumerable:!0,configurable:!0,get(){return t},set(e){typeof e=="number"&&(t=e)}}}function Dy(i,t=null,e=null){if(!i)return!1;if(i.userData?.isDiamondShaderMaterial||t?.shader==="diamond")return!0;if(t?.shader&&t.shader!=="diamond")return!1;const n=(i.name||"").toLowerCase(),s=(e?.name||"").toLowerCase();if(/diamond|moissanite/.test(n)||/diamond|moissanite/.test(s))return!0;const a=(typeof t?.ior=="number"?t.ior:null)??(typeof i.ior=="number"?i.ior:0),o=typeof i.transmission=="number"?i.transmission:0,l=typeof i.metalness=="number"?i.metalness:0;return a>=2&&o>.5&&l<.3}const Ly=["metalness","roughness","transmission","thickness","ior","dispersion","bounces","reflectivity","clearcoat","clearcoatRoughness","sheen","envMapIntensity","opacity","attenuationDistance"],vf=new Set(["thickness","attenuationDistance"]);function iM(i){return vf.has(i)}const Uy=["color","attenuationColor","sheenColor","emissive"];function Ny(i,t,e=null,n=1){if(!i||!t)return;const s=typeof n=="number"?n:Number.isFinite(n?.scale)?n.scale:1;e&&typeof t.envMap=="string"&&(t.envMap==="metal"&&e.metal?i.envMap=e.metal:t.envMap==="gem"&&e.gem?i.envMap=e.gem:t.envMap==="none"&&(i.envMap=null));for(const r of Ly){const a=t[r];typeof a=="number"&&typeof i[r]=="number"&&(i[r]=vf.has(r)?a*s:a)}for(const r of Uy){const a=t[r];if(typeof a!="string")continue;const o=i[r];o&&typeof o.set=="function"&&o.set(a)}i.needsUpdate=!0}function Fy(i,t){return!i||!t?null:i.metals&&i.metals[t]?i.metals[t]:i.gems&&i.gems[t]?i.gems[t]:null}function sM(i){const t=[];if(i?.metals)for(const[e,n]of Object.entries(i.metals))t.push({id:e,group:"metals",label:n.label||e,preset:n});if(i?.gems)for(const[e,n]of Object.entries(i.gems))t.push({id:e,group:"gems",label:n.label||e,preset:n});return t}const Oy={"yellow-gold":{label:"Yellow Gold",color:"#d6af80",metalness:1,roughness:0,envMap:"metal",envMapIntensity:2.5},"white-gold":{label:"White Gold",color:"#e8e8e8",metalness:1,roughness:0,envMap:"metal",envMapIntensity:1},"rose-gold":{label:"Rose Gold",color:"#b48273",metalness:1,roughness:0,envMap:"metal",envMapIntensity:2.5},platinum:{label:"Platinum",color:"#d9d9d9",metalness:1,roughness:.12,envMap:"metal",envMapIntensity:1.1},silver:{label:"Sterling Silver",color:"#f0f0f0",metalness:1,roughness:.1,envMap:"metal",envMapIntensity:1.1}},By={diamond:{label:"Diamond",shader:"diamond",color:"#ffffff",ior:2.422,dispersion:.003,bounces:3,reflectivity:.5,envMap:"gem",envMapIntensity:4},moissanite:{label:"Moissanite",shader:"diamond",color:"#ffffff",ior:2.7,dispersion:.04,bounces:5,reflectivity:.5,envMap:"gem",envMapIntensity:1.4},"sapphire-blue":{label:"Blue Sapphire",color:"#0f52ba",metalness:0,roughness:0,transmission:1,ior:1.77,dispersion:.15,thickness:.3,attenuationColor:"#0a3a99",attenuationDistance:1,envMap:"gem",envMapIntensity:1.4},"sapphire-pink":{label:"Pink Sapphire",color:"#f49ac1",metalness:0,roughness:0,transmission:1,ior:1.77,dispersion:.15,thickness:.3,attenuationColor:"#d96a98",attenuationDistance:1,envMap:"gem",envMapIntensity:1.4},ruby:{label:"Ruby",color:"#9b111e",metalness:0,roughness:0,transmission:1,ior:1.77,dispersion:.15,thickness:.3,attenuationColor:"#7a0d18",attenuationDistance:1,envMap:"gem",envMapIntensity:1.4},emerald:{label:"Emerald",color:"#1f7a4d",metalness:0,roughness:.02,transmission:1,ior:1.58,dispersion:.1,thickness:.3,attenuationColor:"#155a37",attenuationDistance:1.2,envMap:"gem",envMapIntensity:1.3},amethyst:{label:"Amethyst",color:"#7d3cff",metalness:0,roughness:0,transmission:1,ior:1.55,dispersion:.1,thickness:.3,envMap:"gem",envMapIntensity:1.3},"topaz-blue":{label:"Blue Topaz",color:"#9bd1ff",metalness:0,roughness:0,transmission:1,ior:1.62,dispersion:.12,thickness:.3,envMap:"gem",envMapIntensity:1.3},citrine:{label:"Citrine",color:"#e4a73a",metalness:0,roughness:0,transmission:1,ior:1.55,dispersion:.1,thickness:.3,envMap:"gem",envMapIntensity:1.3}},zy={metals:Oy,gems:By};function ky(){if(typeof navigator>"u")return!1;const i=navigator.userAgent||"";return!!(/iPhone|iPod|Android|Mobile/i.test(i)||/iPad/.test(i)||navigator.platform==="MacIntel"&&typeof navigator.maxTouchPoints=="number"&&navigator.maxTouchPoints>1)}function rM(i,{canvasClass:t="viewer-canvas"}={}){const e=ky(),n={backgroundColor:"#f4f4f5"},s={fov:10,initialPosition:[0,0,3],nearPlane:.01,farPlane:100},r={toneMappingExposure:.4,pixelRatioCap:e?1.5:2,transmissionResolutionScale:e?.5:1},a=1,o={ambientIntensity:.4,hemisphereIntensity:.4,keyLightIntensity:3,fillLightIntensity:1.5,rimLightIntensity:1.5},l={keyLight:[2.5,3,2],fillLight:[-3,1.5,1.5],rimLight:[0,2,-3]},u={dampingFactor:.08,rotateSpeed:.7,zoomSpeed:.8,panSpeed:.6,minDistance:.05,maxDistance:50,autoRotateSpeed:.8},d=typeof import.meta<"u"&&"/TestViewer/"||"/",f={metal:{path:`${d}env_metal_014.hdr`,intensity:2.5},gem:{path:`${d}env_gem_001.exr`,intensity:2.6}},h=new Fd;h.background=new se(n.backgroundColor),h.environmentIntensity=a;const p=new an(s.fov,1,s.nearPlane,s.farPlane);p.position.set(...s.initialPosition);const x=new Ox({antialias:!0,alpha:!0,powerPreference:"high-performance"});x.setPixelRatio(Math.min(window.devicePixelRatio,r.pixelRatioCap)),x.outputColorSpace=fn,x.toneMapping=uc,x.toneMappingExposure=r.toneMappingExposure,x.shadowMap.enabled=!0,x.shadowMap.type=_h,"transmissionResolutionScale"in x&&(x.transmissionResolutionScale=r.transmissionResolutionScale);const M=x.domElement;M.classList.add(t),i.appendChild(M);const g=new wp(16777215,o.ambientIntensity);h.add(g);const m=new bp(16777215,1710623,o.hemisphereIntensity);h.add(m);const y=new Lo(16777215,o.keyLightIntensity);y.position.set(...l.keyLight),h.add(y);const b=new Lo(16777215,o.fillLightIntensity);b.position.set(...l.fillLight),h.add(b);const E=new Lo(16773852,o.rimLightIntensity);E.position.set(...l.rimLight),h.add(E);const R={ambient:g,hemi:m,key:y,fill:b,rim:E},T={metal:null,gem:null},P={metal:null,gem:null};let v;{const K=new Kl(x);K.compileEquirectangularShader();const et=new Jx,ct=new pv,Dt=xt=>xt.split(".").pop().toLowerCase()==="exr"?ct:et,kt=(xt,{keepEquirect:Jt=!1}={})=>new Promise((Yt,ce)=>{Dt(xt).load(xt,oe=>{oe.mapping=hr;const ee=K.fromEquirectangular(oe).texture;Jt?(oe.minFilter=be,oe.magFilter=be,oe.generateMipmaps=!1,oe.needsUpdate=!0,Yt({prefiltered:ee,equirect:oe})):(oe.dispose(),Yt({prefiltered:ee,equirect:null}))},void 0,ce)});v=Promise.all([kt(f.metal.path),kt(f.gem.path,{keepEquirect:!0})]).then(([xt,Jt])=>{T.metal=xt.prefiltered,T.gem=Jt.prefiltered,P.gem=Jt.equirect,h.environment=xt.prefiltered,K.dispose(),St()}).catch(xt=>{console.error("[viewer] failed to load HDR environments",xt),K.dispose()})}function w(K){if(!K)return!1;if(typeof K.transmission=="number"&&K.transmission>0||typeof K.ior=="number"&&K.ior>=1.4&&(K.metalness??0)<.3)return!0;const et=(K.name||"").toLowerCase();return/diamond|gem|stone|sapphire|ruby|emerald|crystal|cz|topaz|amethyst/.test(et)}function L(K,et,ct=1){et&&Ny(K,et,T,ct)}function I(K,et,ct){const Dt=(K?.name||"").toLowerCase(),kt=(ct?.name||"").toLowerCase();return/moissanite/.test(Dt)||/moissanite/.test(kt)?"moissanite":"diamond"}function F(K,et,ct){const Dt=x.capabilities?.isWebGL2===!0,kt=I(et,null,K),xt=Fy(zy,kt)||{},Jt=Dt?Iy({name:et.name||"Diamond",color:typeof xt.color=="string"?xt.color:16777215,ior:xt.ior,dispersion:xt.dispersion,bounces:xt.bounces,fresnel:xt.reflectivity,envMap:P.gem,envMapIntensity:typeof xt.envMapIntensity=="number"?xt.envMapIntensity:f.gem.intensity,geometry:K.geometry}):null;let Yt;return Jt?(Yt=Jt,console.log(`[viewer] swapped "${et.name||K.name}" to diamond shader (BVH ray tracer)`)):(Yt=z(et),console.warn(`[viewer] swapped "${et.name||K.name}" to MeshPhysicalMaterial fallback`,Dt?"(BVH build failed)":"(WebGL1 — BVH ray tracer needs WebGL2)")),Array.isArray(K.material)?K.material[ct]=Yt:K.material=Yt,et.dispose?.(),Yt}function z(K){return new op({name:K.name||"Diamond",color:K.color?K.color.getHex():16777215,metalness:0,roughness:0,transmission:1,ior:2.417,dispersion:.5,thickness:.5,envMap:T.gem,envMapIntensity:f.gem.intensity})}async function k(K,et=null,ct=1){await v,!(!T.metal||!T.gem)&&(K.traverse(Dt=>{Dt.isMesh&&O(Dt,et,ct)}),St())}function O(K,et,ct){const Dt=Array.isArray(K.material)?K.material:[K.material];for(let kt=0;kt<Dt.length;kt++){let xt=Dt[kt];if(!xt)continue;const Jt=et&&xt.name&&et[xt.name]||et&&K.name&&et[K.name]||null;if(P.gem&&Dy(xt,Jt,K)){if(xt.userData?.isDiamondShaderMaterial){Jt&&L(xt,Jt,ct);continue}xt=F(K,xt,kt),Array.isArray(K.material)?K.material[kt]=xt:K.material=xt,Jt&&L(xt,Jt,ct);continue}const Yt=w(xt);xt.envMap=Yt?T.gem:T.metal,xt.envMapIntensity=Yt?f.gem.intensity:f.metal.intensity,xt.needsUpdate=!0,Jt&&L(xt,Jt,ct)}}async function V(K,et,ct=1){await v,!(!T.metal||!T.gem)&&(O(K,et,ct),St())}const q=new zx(p,M);q.enableDamping=!0,q.dampingFactor=u.dampingFactor,q.rotateSpeed=u.rotateSpeed,q.zoomSpeed=u.zoomSpeed,q.panSpeed=u.panSpeed,q.enablePan=!0,q.minDistance=u.minDistance,q.maxDistance=u.maxDistance,q.autoRotateSpeed=u.autoRotateSpeed;function ot(K,et){x.setSize(K,et,!1),p.aspect=K/Math.max(et,1),p.updateProjectionMatrix(),St()}let st=!1,gt=!1;function wt(){if(st=!1,!gt)return;const K=q.update();x.render(h,p),(K||q.autoRotate)&&St()}function St(){!gt||st||(st=!0,requestAnimationFrame(wt))}q.addEventListener("change",St);function Ot(K){K?(h.background=null,x.setClearAlpha(0)):(h.background=new se(n.backgroundColor),x.setClearAlpha(1)),St()}function re(){gt||(gt=!0,St())}function Xt(){gt&&(gt=!1,st=!1)}return{renderer:x,scene:h,camera:p,controls:q,canvas:M,setSize:ot,start:re,stop:Xt,requestRender:St,setTransparentBackground:Ot,applyMaterialEnvironments:k,reapplyMeshMaterial:V,environments:T,equirectEnvironments:P,envMapsReady:v,lights:R,isMobile:e}}function aM(i){const t=new Fe().setFromObject(i),e=new B,n=new B;t.getSize(e),t.getCenter(n),i.position.sub(n);const s=Math.max(e.x,e.y,e.z)*.5;return{center:new B(0,0,0),size:e,radius:s||.05}}function oM(i,t,e,n=1.4){const s=i.fov*Math.PI/180,r=i.aspect||1,a=e.radius/Math.sin(s/2),o=e.radius/Math.sin(Math.atan(Math.tan(s/2)*r)),l=Math.max(a,o)*n,u=new B(1,.7,1).normalize();return i.position.copy(e.center).addScaledVector(u,l),i.near=Math.max(l/1e3,.001),i.far=l*100,i.updateProjectionMatrix(),t.target.copy(e.center),t.minDistance=l*.2,t.maxDistance=l*6,t.update(),l}function Vy(i){i.traverse(t=>{t.isMesh&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(gh):t.material&&gh(t.material))})}function gh(i){for(const t of Object.keys(i)){const e=i[t];e&&e.isTexture&&e.dispose()}i.dispose()}function lM(i){i.stop(),Vy(i.scene),i.environments?.metal?.dispose(),i.environments?.gem?.dispose(),i.equirectEnvironments?.metal?.dispose(),i.equirectEnvironments?.gem?.dispose(),i.controls.dispose(),i.renderer.dispose(),i.canvas.parentElement&&i.canvas.parentElement.removeChild(i.canvas)}export{De as $,yi as A,ln as B,se as C,Gn as D,Dn as E,Mp as F,Br as G,hl as H,Hy as I,fl as J,Gl as K,Bs as L,te as M,vi as N,Fe as O,an as P,li as Q,tM as R,fn as S,Jy as T,op as U,B as V,Ky as W,$y as X,Lo as Y,Wy as Z,fu as _,xn as a,jy as a0,Qy as a1,Qd as a2,ki as a3,Bh as a4,ap as a5,Gy as a6,nM as a7,Jd as a8,zh as a9,Fy as aA,Ny as aB,iM as aC,Xy as aa,Yy as ab,Mc as ac,Oh as ad,Zy as ae,Yd as af,Ge as ag,Wa as ah,Ga as ai,Ka as aj,qn as ak,Mr as al,Zn as am,Yf as an,Gc as ao,Gh as ap,sM as aq,Eh as ar,bh as as,uc as at,Mh as au,yh as av,vh as aw,Xn as ax,zy as ay,eM as az,We as b,he as c,Nh as d,Wt as e,Sn as f,Hh as g,Fh as h,rM as i,aM as j,oM as k,lM as l,cc as m,qy as n,_c as o,Sd as p,Ae as q,Ed as r,_e as s,Ba as t,Fd as u,we as v,Gf as w,Nr as x,be as y,so as z};
