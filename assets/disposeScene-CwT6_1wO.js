/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="184",Es={ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vf=0,Uc=1,yf=2,Ra=1,_h=2,lr=3,qn=0,Qe=1,Gn=2,si=0,Ts=1,Nc=2,Fc=3,Oc=4,Mf=5,Ni=100,Sf=101,bf=102,Ef=103,Tf=104,Af=200,wf=201,Rf=202,Cf=203,nl=204,il=205,Pf=206,If=207,Df=208,Lf=209,Uf=210,Nf=211,Ff=212,Of=213,Bf=214,sl=0,rl=1,al=2,Rs=3,ol=4,ll=5,cl=6,ul=7,xh=0,zf=1,kf=2,Xn=0,vh=1,yh=2,Mh=3,uc=4,Sh=5,bh=6,Eh=7,Bc="attached",Vf="detached",Th=300,Bi=301,Cs=302,hr=303,io=304,qa=306,hl=1e3,Dn=1001,fl=1002,we=1003,Hf=1004,Nr=1005,be=1006,so=1007,yi=1008,$e=1009,Na=1010,hc=1011,Ps=1012,As=1013,tn=1014,Re=1015,He=1016,fc=1017,dc=1018,gr=1020,Ah=35902,wh=35899,Rh=1021,Ch=1022,Ae=1023,oi=1026,Oi=1027,Mi=1028,Za=1029,fn=1030,vr=1031,Is=1033,Ca=33776,Pa=33777,Ia=33778,Da=33779,dl=35840,pl=35841,ml=35842,gl=35843,_l=36196,xl=37492,vl=37496,yl=37488,Ml=37489,Fa=37490,Sl=37491,bl=37808,El=37809,Tl=37810,Al=37811,wl=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Dl=37817,Ll=37818,Ul=37819,Nl=37820,Fl=37821,Ol=36492,Bl=36494,zl=36495,kl=36283,Vl=36284,Oa=36285,Hl=36286,Ba=2300,Gl=2301,ro=2302,zc=2303,kc=2400,Vc=2401,Hc=2402,Gf=2500,Wf=0,Xf=1,Gc=2,Yf=3200,Wl=0,qf=1,vi="",hn="srgb",xn="srgb-linear",za="linear",me="srgb",Yi=7680,Wc=519,Zf=512,jf=513,Kf=514,pc=515,$f=516,Jf=517,mc=518,Qf=519,Xl=35044,Yl="300 es",Wn=2e3,_r=2001;function td(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ed(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){const i=xr("canvas");return i.style.display="block",i}const Xc={};function ka(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ph(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Ph(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=Ph(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ql(...i){const t=i.join(" ");t in Xc||(Xc[t]=!0,Vt(...i))}function id(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const sd={[sl]:rl,[al]:cl,[ol]:ul,[Rs]:ll,[rl]:sl,[cl]:al,[ul]:ol,[ll]:Rs};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const fr=Math.PI/180,Ds=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function gc(i,t){return(i%t+t)%t}function rd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ad(i,t,e){return i!==t?(e-i)/(t-i):0}function dr(i,t,e){return(1-e)*i+e*t}function od(i,t,e,n){return dr(i,t,1-Math.exp(-e*n))}function ld(i,t=1){return t-Math.abs(gc(i,t*2)-t)}function cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fd(i,t){return i+Math.random()*(t-i)}function dd(i){return i*(.5-Math.random())}function pd(i){i!==void 0&&(Yc=i);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function md(i){return i*fr}function gd(i){return i*Ds}function _d(i){return(i&i-1)===0&&i!==0}function xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),u=r((t+n)/2),d=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*f,l*h,o*u);break;case"YZY":i.set(l*h,o*d,l*f,o*u);break;case"ZXZ":i.set(l*f,l*h,o*d,o*u);break;case"XZX":i.set(o*d,l*x,l*p,o*u);break;case"YXY":i.set(l*p,o*d,l*x,o*u);break;case"ZYZ":i.set(l*x,l*p,o*d,o*u);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Md={DEG2RAD:fr,RAD2DEG:Ds,generateUUID:Ln,clamp:Kt,euclideanModulo:gc,mapLinear:rd,inverseLerp:ad,lerp:dr,damp:od,pingpong:ld,smoothstep:cd,smootherstep:ud,randInt:hd,randFloat:fd,randFloatSpread:dd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:_d,ceilPowerOfTwo:xd,floorPowerOfTwo:vd,setQuaternionFromProperEuler:yd,normalize:ge,denormalize:In},Cc=class Cc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cc.prototype.isVector2=!0;let Xt=Cc;class li{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],u=n[s+1],d=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],x=r[a+2],M=r[a+3];if(f!==M||l!==h||u!==p||d!==x){let g=l*h+u*p+d*x+f*M;g<0&&(h=-h,p=-p,x=-x,M=-M,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),b=Math.sin(y);m=Math.sin(m*y)/b,o=Math.sin(o*y)/b,l=l*m+h*o,u=u*m+p*o,d=d*m+x*o,f=f*m+M*o}else{l=l*m+h*o,u=u*m+p*o,d=d*m+x*o,f=f*m+M*o;const y=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=y,u*=y,d*=y,f*=y}}t[e]=l,t[e+1]=u,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],u=n[s+2],d=n[s+3],f=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+d*f+l*p-u*h,t[e+1]=l*x+d*h+u*f-o*p,t[e+2]=u*x+d*p+o*h-l*f,t[e+3]=d*x-o*f-l*h-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*d*f+u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f-h*p*x;break;case"YXZ":this._x=h*d*f+u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f+h*p*x;break;case"ZXY":this._x=h*d*f-u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f-h*p*x;break;case"ZYX":this._x=h*d*f-u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f+h*p*x;break;case"YZX":this._x=h*d*f+u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f-h*p*x;break;case"XZY":this._x=h*d*f-u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f+h*p*x;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],u=e[2],d=e[6],f=e[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,u=e._z,d=e._w;return this._x=n*d+a*o+s*u-r*l,this._y=s*d+a*l+r*o-n*u,this._z=r*d+a*u+n*l-s*o,this._w=a*d-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,e=Math.sin(e*u)/d,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pc=class Pc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*s-o*n),d=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*u+a*f-o*d,this.y=n+l*d+o*u-r*f,this.z=s+l*f+r*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pc.prototype.isVector3=!0;let B=Pc;const ao=new B,qc=new li,Ic=class Ic{constructor(t,e,n,s,r,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,u)}set(t,e,n,s,r,a,o,l,u){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],d=n[4],f=n[7],h=n[2],p=n[5],x=n[8],M=s[0],g=s[3],m=s[6],y=s[1],b=s[4],T=s[7],C=s[2],A=s[5],P=s[8];return r[0]=a*M+o*y+l*C,r[3]=a*g+o*b+l*A,r[6]=a*m+o*T+l*P,r[1]=u*M+d*y+f*C,r[4]=u*g+d*b+f*A,r[7]=u*m+d*T+f*P,r[2]=h*M+p*y+x*C,r[5]=h*g+p*b+x*A,r[8]=h*m+p*T+x*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8];return e*a*d-e*o*u-n*r*d+n*o*l+s*r*u-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8],f=d*a-o*u,h=o*l-d*r,p=u*r-a*l,x=e*f+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=f*M,t[1]=(s*u-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-u*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-s*u,s*l,-s*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ic.prototype.isMatrix3=!0;let ee=Ic;const oo=new ee,Zc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ql("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ql("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:t,whitePoint:n,transfer:za,toXYZ:Zc,fromXYZ:jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Zc,fromXYZ:jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const ue=Sd();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class bd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=xr("canvas")),qi.width=t.width,qi.height=t.height;const s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ed=0;class _c{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let Td=0;const co=new B;class Ge extends wi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Dn,s=Dn,r=be,a=yi,o=Ae,l=$e,u=Ge.DEFAULT_ANISOTROPY,d=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ln(),this.name="",this.source=new _c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Th;Ge.DEFAULT_ANISOTROPY=1;const Dc=class Dc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],x=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+M)<.1&&Math.abs(x+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(u+1)/2,T=(p+1)/2,C=(m+1)/2,A=(d+h)/4,P=(f+M)/4,v=(x+g)/4;return b>T&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=P/n):T>C?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=v/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-x)*(g-x)+(f-M)*(f-M)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(f-M)/y,this.z=(h-d)/y,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dc.prototype.isVector4=!0;let ye=Dc;class Ad extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ge(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _c(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ih extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ya=class Ya{constructor(t,e,n,s,r,a,o,l,u,d,f,h,p,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,u,d,f,h,p,x,M,g)}set(t,e,n,s,r,a,o,l,u,d,f,h,p,x,M,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=d,m[10]=f,m[14]=h,m[3]=p,m[7]=x,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*d,p=a*f,x=o*d,M=o*f;e[0]=l*d,e[4]=-l*f,e[8]=u,e[1]=p+x*u,e[5]=h-M*u,e[9]=-o*l,e[2]=M-h*u,e[6]=x+p*u,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,p=l*f,x=u*d,M=u*f;e[0]=h+M*o,e[4]=x*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=p*o-x,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,p=l*f,x=u*d,M=u*f;e[0]=h-M*o,e[4]=-a*f,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*d,e[9]=M-h*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,p=a*f,x=o*d,M=o*f;e[0]=l*d,e[4]=x*u-p,e[8]=h*u+M,e[1]=l*f,e[5]=M*u+h,e[9]=p*u-x,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*u,x=o*l,M=o*u;e[0]=l*d,e[4]=M-h*f,e[8]=x*f+p,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-u*d,e[6]=p*f+x,e[10]=h-M*f}else if(t.order==="XZY"){const h=a*l,p=a*u,x=o*l,M=o*u;e[0]=l*d,e[4]=-f,e[8]=u*d,e[1]=h*f+M,e[5]=a*d,e[9]=p*f-x,e[2]=x*f-p,e[6]=o*d,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Cd)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ui.crossVectors(n,cn),ui.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ui.crossVectors(n,cn)),ui.normalize(),Fr.crossVectors(cn,ui),s[0]=ui.x,s[4]=Fr.x,s[8]=cn.x,s[1]=ui.y,s[5]=Fr.y,s[9]=cn.y,s[2]=ui.z,s[6]=Fr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],d=n[1],f=n[5],h=n[9],p=n[13],x=n[2],M=n[6],g=n[10],m=n[14],y=n[3],b=n[7],T=n[11],C=n[15],A=s[0],P=s[4],v=s[8],w=s[12],N=s[1],D=s[5],F=s[9],z=s[13],k=s[2],O=s[6],V=s[10],q=s[14],ot=s[3],it=s[7],_t=s[11],Rt=s[15];return r[0]=a*A+o*N+l*k+u*ot,r[4]=a*P+o*D+l*O+u*it,r[8]=a*v+o*F+l*V+u*_t,r[12]=a*w+o*z+l*q+u*Rt,r[1]=d*A+f*N+h*k+p*ot,r[5]=d*P+f*D+h*O+p*it,r[9]=d*v+f*F+h*V+p*_t,r[13]=d*w+f*z+h*q+p*Rt,r[2]=x*A+M*N+g*k+m*ot,r[6]=x*P+M*D+g*O+m*it,r[10]=x*v+M*F+g*V+m*_t,r[14]=x*w+M*z+g*q+m*Rt,r[3]=y*A+b*N+T*k+C*ot,r[7]=y*P+b*D+T*O+C*it,r[11]=y*v+b*F+T*V+C*_t,r[15]=y*w+b*z+T*q+C*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],u=t[13],d=t[2],f=t[6],h=t[10],p=t[14],x=t[3],M=t[7],g=t[11],m=t[15],y=l*p-u*h,b=o*p-u*f,T=o*h-l*f,C=a*p-u*d,A=a*h-l*d,P=a*f-o*d;return e*(M*y-g*b+m*T)-n*(x*y-g*C+m*A)+s*(x*b-M*C+m*P)-r*(x*T-M*A+g*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8],f=t[9],h=t[10],p=t[11],x=t[12],M=t[13],g=t[14],m=t[15],y=e*o-n*a,b=e*l-s*a,T=e*u-r*a,C=n*l-s*o,A=n*u-r*o,P=s*u-r*l,v=d*M-f*x,w=d*g-h*x,N=d*m-p*x,D=f*g-h*M,F=f*m-p*M,z=h*m-p*g,k=y*z-b*F+T*D+C*N-A*w+P*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return t[0]=(o*z-l*F+u*D)*O,t[1]=(s*F-n*z-r*D)*O,t[2]=(M*P-g*A+m*C)*O,t[3]=(h*A-f*P-p*C)*O,t[4]=(l*N-a*z-u*w)*O,t[5]=(e*z-s*N+r*w)*O,t[6]=(g*T-x*P-m*b)*O,t[7]=(d*P-h*T+p*b)*O,t[8]=(a*F-o*N+u*v)*O,t[9]=(n*N-e*F-r*v)*O,t[10]=(x*A-M*T+m*y)*O,t[11]=(f*T-d*A-p*y)*O,t[12]=(o*w-a*D-l*v)*O,t[13]=(e*D-n*w+s*v)*O,t[14]=(M*b-x*C-g*y)*O,t[15]=(d*C-f*b+h*y)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,u=r*a,d=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,d*o+n,d*l-s*a,0,u*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,u=r+r,d=a+a,f=o+o,h=r*u,p=r*d,x=r*f,M=a*d,g=a*f,m=o*f,y=l*u,b=l*d,T=l*f,C=n.x,A=n.y,P=n.z;return s[0]=(1-(M+m))*C,s[1]=(p+T)*C,s[2]=(x-b)*C,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(h+m))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(x+b)*P,s[9]=(g-y)*P,s[10]=(1-(h+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const u=1/a,d=1/o,f=1/l;return En.elements[0]*=u,En.elements[1]*=u,En.elements[2]*=u,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Wn,l=!1){const u=this.elements,d=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===Wn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===_r)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Wn,l=!1){const u=this.elements,d=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===Wn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===_r)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ya.prototype.isMatrix4=!0;let Jt=Ya;const Zi=new B,En=new Jt,Rd=new B(0,0,0),Cd=new B(1,1,1),ui=new B,Fr=new B,cn=new B,Kc=new Jt,$c=new li;class Ti{constructor(t=0,e=0,n=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pd=0;const Jc=new B,ji=new li,jn=new Jt,Or=new B,Xs=new B,Id=new B,Dd=new li,Qc=new B(1,0,0),tu=new B(0,1,0),eu=new B(0,0,1),nu={type:"added"},Ld={type:"removed"},Ki={type:"childadded",child:null},uo={type:"childremoved",child:null};class De extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new B,e=new Ti,n=new li,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ee}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Qc,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return Jc.copy(t).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qc,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Xs,Or,this.up):jn.lookAt(Or,Xs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ld),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new B(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Br extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ud={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),m=this._getHandJoint(u,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ud)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class oe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=gc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=fo(a,r,t+1/3),this.g=fo(a,r,t),this.b=fo(a,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ue.workingToColorSpace(qe.copy(this),t),Math.round(Kt(qe.r*255,0,255))*65536+Math.round(Kt(qe.g*255,0,255))*256+Math.round(Kt(qe.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=d,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=hn){ue.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(zr);const n=dr(hi.h,zr.h,e),s=dr(hi.s,zr.s,e),r=dr(hi.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new oe;oe.NAMES=Dh;class Nd extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Tn=new B,Kn=new B,po=new B,$n=new B,$i=new B,Ji=new B,iu=new B,mo=new B,go=new B,_o=new B,xo=new ye,vo=new ye,yo=new ye;class Ze{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Kn.subVectors(n,e),po.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(Kn),l=Tn.dot(po),u=Kn.dot(Kn),d=Kn.dot(po),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(u*l-o*d)*h,x=(a*d-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return xo.setScalar(0),vo.setScalar(0),yo.setScalar(0),xo.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,n),yo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xo,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(yo,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Kn.subVectors(t,e),Tn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Tn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;$i.subVectors(s,n),Ji.subVectors(r,n),mo.subVectors(t,n);const l=$i.dot(mo),u=Ji.dot(mo);if(l<=0&&u<=0)return e.copy(n);go.subVectors(t,s);const d=$i.dot(go),f=Ji.dot(go);if(d>=0&&f<=d)return e.copy(s);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector($i,a);_o.subVectors(t,r);const p=$i.dot(_o),x=Ji.dot(_o);if(x>=0&&p<=x)return e.copy(r);const M=p*u-l*x;if(M<=0&&u>=0&&x<=0)return o=u/(u-x),e.copy(n).addScaledVector(Ji,o);const g=d*x-p*f;if(g<=0&&f-d>=0&&p-x>=0)return iu.subVectors(r,s),o=(f-d)/(f-d+(p-x)),e.copy(s).addScaledVector(iu,o);const m=1/(g+M+h);return a=M*m,o=h*m,e.copy(n).addScaledVector($i,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Fe{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Vr.subVectors(this.max,Ys),Qi.subVectors(t.a,Ys),ts.subVectors(t.b,Ys),es.subVectors(t.c,Ys),fi.subVectors(ts,Qi),di.subVectors(es,ts),Ii.subVectors(Qi,es);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!Mo(e,Qi,ts,es,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Qi,ts,es,Vr))?!1:(Hr.crossVectors(fi,di),e=[Hr.x,Hr.y,Hr.z],Mo(e,Qi,ts,es,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new B,new B,new B,new B,new B,new B,new B,new B],An=new B,kr=new Fe,Qi=new B,ts=new B,es=new B,fi=new B,di=new B,Ii=new B,Ys=new B,Vr=new B,Hr=new B,Di=new B;function Mo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),u=e.dot(Di),d=n.dot(Di);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const ni=Fd();function Fd(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const u=l-127;u<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):u<-14?(n[l]=1024>>-u-14,n[l|256]=1024>>-u-14|32768,s[l]=-u-1,s[l|256]=-u-1):u<=15?(n[l]=u+15<<10,n[l|256]=u+15<<10|32768,s[l]=13,s[l|256]=13):u<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,d=0;for(;!(u&8388608);)u<<=1,d-=8388608;u&=-8388609,d+=947912704,r[l]=u|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Od(i){Math.abs(i)>65504&&Vt("DataUtils.toHalfFloat(): Value out of range."),i=Kt(i,-65504,65504),ni.floatView[0]=i;const t=ni.uint32View[0],e=t>>23&511;return ni.baseTable[e]+((t&8388607)>>ni.shiftTable[e])}function Bd(i){const t=i>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[t]+(i&1023)]+ni.exponentTable[t],ni.floatView[0]}class Pn{static toHalfFloat(t){return Od(t)}static fromHalfFloat(t){return Bd(t)}}const Ue=new B,Gr=new Xt;let zd=0;class We extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Re,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Lh extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uh extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class on extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}const kd=new Fe,qs=new B,So=new B;class Zn{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);const e=qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(So)),this.expandByPoint(qs.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Vd=0;const _n=new Jt,bo=new De,ns=new B,un=new Fe,Zs=new Fe,Ve=new B;class mn extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(td(t)?Uh:Lh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(un.min,Zs.min),un.expandByPoint(Ve),Ve.addVectors(un.max,Zs.max),un.expandByPoint(Ve)):(un.expandByPoint(Zs.min),un.expandByPoint(Zs.max))}un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Ve.fromBufferAttribute(o,u),l&&(ns.fromBufferAttribute(t,u),Ve.add(ns)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new B,l[v]=new B;const u=new B,d=new B,f=new B,h=new Xt,p=new Xt,x=new Xt,M=new B,g=new B;function m(v,w,N){u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,N),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,N),d.sub(u),f.sub(u),p.sub(h),x.sub(h);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),o[v].add(M),o[w].add(M),o[N].add(M),l[v].add(g),l[w].add(g),l[N].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,w=y.length;v<w;++v){const N=y[v],D=N.start,F=N.count;for(let z=D,k=D+F;z<k;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new B,T=new B,C=new B,A=new B;function P(v){C.fromBufferAttribute(s,v),A.copy(C);const w=o[v];b.copy(w),b.sub(C.multiplyScalar(C.dot(w))).normalize(),T.crossVectors(A,w);const D=T.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,D)}for(let v=0,w=y.length;v<w;++v){const N=y[v],D=N.start,F=N.count;for(let z=D,k=D+F;z<k;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,u=new B,d=new B,f=new B;if(t)for(let h=0,p=t.count;h<p;h+=3){const x=t.getX(h+0),M=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,g),o.add(d),l.add(d),u.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const u=o.array,d=o.itemSize,f=o.normalized,h=new u.constructor(l.length*d);let p=0,x=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let m=0;m<d;m++)h[x++]=u[p++]}return new We(h,d,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=t(l,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const u in s){const d=s[u];this.setAttribute(u,d.clone(e))}const r=t.morphAttributes;for(const u in r){const d=[],f=r[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,d=a.length;u<d;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new B;class Nh{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Nh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Hd=0;class ki extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Ts,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qn=new B,Eo=new B,Wr=new B,pi=new B,To=new B,Xr=new B,Ao=new B;class Ns{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eo.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=pi.dot(this.direction),l=-pi.dot(Wr),u=pi.lengthSq(),d=Math.abs(1-a*a);let f,h,p,x;if(d>0)if(f=a*l-o,h=a*o-l,x=r*d,f>=0)if(h>=-x)if(h<=x){const M=1/d;f*=M,h*=M,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+u):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Eo).addScaledVector(Wr,h),p}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(t.min.x-h.x)*u,s=(t.max.x-h.x)*u):(n=(t.max.x-h.x)*u,s=(t.min.x-h.x)*u),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){To.subVectors(e,t),Xr.subVectors(n,t),Ao.crossVectors(To,Xr);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);const l=o*this.direction.dot(Xr.crossVectors(pi,Xr));if(l<0)return null;const u=o*this.direction.dot(To.cross(pi));if(u<0||l+u>a)return null;const d=-o*pi.dot(Ao);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fh extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const su=new Jt,Li=new Ns,Yr=new Zn,ru=new B,qr=new B,Zr=new B,jr=new B,wo=new B,Kr=new B,au=new B,$r=new B;class Sn extends De{constructor(t=new mn,e=new Fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const d=o[l],f=r[l];d!==0&&(wo.fromBufferAttribute(f,t),a?Kr.addScaledVector(wo,d):Kr.addScaledVector(wo.sub(e),d))}e.add(Kr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Yr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Yr,ru)===null||Li.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),Li.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){const g=h[x],m=a[g.materialIndex],y=Math.max(g.start,p.start),b=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let T=y,C=b;T<C;T+=3){const A=o.getX(T),P=o.getX(T+1),v=o.getX(T+2);s=Jr(this,m,t,n,u,d,f,A,P,v),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=x,m=M;g<m;g+=3){const y=o.getX(g),b=o.getX(g+1),T=o.getX(g+2);s=Jr(this,a,t,n,u,d,f,y,b,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){const g=h[x],m=a[g.materialIndex],y=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let T=y,C=b;T<C;T+=3){const A=T,P=T+1,v=T+2;s=Jr(this,m,t,n,u,d,f,A,P,v),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=x,m=M;g<m;g+=3){const y=g,b=g+1,T=g+2;s=Jr(this,a,t,n,u,d,f,y,b,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Gd(i,t,e,n,s,r,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===qn,o),l===null)return null;$r.copy(o),$r.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo($r);return u<e.near||u>e.far?null:{distance:u,point:$r.clone(),object:i}}function Jr(i,t,e,n,s,r,a,o,l,u){i.getVertexPosition(o,qr),i.getVertexPosition(l,Zr),i.getVertexPosition(u,jr);const d=Gd(i,t,e,n,qr,Zr,jr,au);if(d){const f=new B;Ze.getBarycoord(au,qr,Zr,jr,f),s&&(d.uv=Ze.getInterpolatedAttribute(s,o,l,u,f,new Xt)),r&&(d.uv1=Ze.getInterpolatedAttribute(r,o,l,u,f,new Xt)),a&&(d.normal=Ze.getInterpolatedAttribute(a,o,l,u,f,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new B,materialIndex:0};Ze.getNormal(qr,Zr,jr,h.normal),d.face=h,d.barycoord=f}return d}const js=new ye,ou=new ye,lu=new ye,Wd=new ye,cu=new Jt,Qr=new B,Ro=new Zn,uu=new Jt,Co=new Ns;class Hy extends Sn{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bc,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fe),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qr),this.boundingSphere.expandByPoint(Qr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(s),t.ray.intersectsSphere(Ro)!==!1&&(uu.copy(s).invert(),Co.copy(t.ray).applyMatrix4(uu),!(this.boundingBox!==null&&Co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Co)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ye,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Bc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Vt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ou.fromBufferAttribute(s.attributes.skinIndex,t),lu.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(js.copy(e),e.set(0,0,0,0)):(js.set(...e,1),e.set(0,0,0)),js.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=lu.getComponent(r);if(a!==0){const o=ou.getComponent(r);cu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Wd.copy(js).applyMatrix4(cu),a)}}return e.isVector4&&(e.w=js.w),e.applyMatrix4(this.bindMatrixInverse)}}class Xd extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zi extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,u=we,d=we,f,h){super(null,a,o,l,u,d,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=new Jt,Yd=new Jt;class Oh{constructor(t=[],e=[]){this.uuid=Ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Vt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Yd;hu.multiplyMatrices(o,e[r]),hu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Oh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new zi(e,t,t,Ae,Re);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(Vt("Skeleton: No bone found with UUID:",r),a=new Xd),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class fu extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const is=new Jt,du=new Jt,ta=[],pu=new Fe,qd=new Jt,Ks=new Sn,$s=new Zn;class Gy extends Sn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fu(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),pu.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(pu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),$s.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),du.multiplyMatrices(n,is),Ks.matrixWorld=du,Ks.raycast(t,ta);for(let a=0,o=ta.length;a<o;a++){const l=ta[a];l.instanceId=r,l.object=this,e.push(l)}ta.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zi(new Float32Array(s*this.count),s,this.count,Mi,Re));const r=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Po=new B,Zd=new B,jd=new ee;class Vn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Po.subVectors(n,e).cross(Zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jd.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Zn,Kd=new Xt(.5,.5),ea=new B;class vc{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],u=r[3],d=r[4],f=r[5],h=r[6],p=r[7],x=r[8],M=r[9],g=r[10],m=r[11],y=r[12],b=r[13],T=r[14],C=r[15];if(s[0].setComponents(u-a,p-d,m-x,C-y).normalize(),s[1].setComponents(u+a,p+d,m+x,C+y).normalize(),s[2].setComponents(u+o,p+f,m+M,C+b).normalize(),s[3].setComponents(u-o,p-f,m-M,C-b).normalize(),n)s[4].setComponents(l,h,g,T).normalize(),s[5].setComponents(u-l,p-h,m-g,C-T).normalize();else if(s[4].setComponents(u-l,p-h,m-g,C-T).normalize(),e===Wn)s[5].setComponents(u+l,p+h,m+g,C+T).normalize();else if(e===_r)s[5].setComponents(l,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=Kd.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ea.x=s.normal.x>0?t.max.x:t.min.x,ea.y=s.normal.y>0?t.max.y:t.min.y,ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Va=new B,Ha=new B,mu=new Jt,Js=new Ns,na=new Zn,Io=new B,gu=new B;class zh extends De{constructor(t=new mn,e=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Va.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Va.distanceTo(Ha);t.setAttribute("lineDistance",new on(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;mu.copy(s).invert(),Js.copy(t.ray).applyMatrix4(mu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let M=p,g=x-1;M<g;M+=u){const m=d.getX(M),y=d.getX(M+1),b=ia(this,t,Js,l,m,y,M);b&&e.push(b)}if(this.isLineLoop){const M=d.getX(x-1),g=d.getX(p),m=ia(this,t,Js,l,M,g,x-1);m&&e.push(m)}}else{const p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let M=p,g=x-1;M<g;M+=u){const m=ia(this,t,Js,l,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){const M=ia(this,t,Js,l,x-1,p,x-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ia(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Va.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),e.distanceSqToSegment(Va,Ha,Io,gu)>n)return;Io.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Io);if(!(u<t.near||u>t.far))return{distance:u,point:gu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const _u=new B,xu=new B;class $d extends zh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_u.fromBufferAttribute(e,s),xu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_u.distanceTo(xu);t.setAttribute("lineDistance",new on(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wy extends zh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Jd extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vu=new Jt,Zl=new Ns,sa=new Zn,ra=new B;class Xy extends De{constructor(t=new mn,e=new Jd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;vu.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=h,M=p;x<M;x++){const g=u.getX(x);ra.fromBufferAttribute(f,g),yu(ra,g,l,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=h,M=p;x<M;x++)ra.fromBufferAttribute(f,x),yu(ra,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yu(i,t,e,n,s,r,a){const o=Zl.distanceSqToPoint(i);if(o<e){const l=new B;Zl.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Yy extends Ge{constructor(t,e,n,s,r,a,o,l,u,d,f,h){super(null,a,o,l,u,d,s,r,f,h),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class kh extends Ge{constructor(t=[],e=Bi,n,s,r,a,o,l,u,d){super(t,e,n,s,r,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ls extends Ge{constructor(t,e,n=tn,s,r,a,o=we,l=we,u,d=oi,f=1){if(d!==oi&&d!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _c(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qd extends Ls{constructor(t,e=tn,n=Bi,s,r,a=we,o=we,l,u=oi){const d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Vh extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yr extends mn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],d=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new on(u,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(f,2));function x(M,g,m,y,b,T,C,A,P,v,w){const N=T/P,D=C/v,F=T/2,z=C/2,k=A/2,O=P+1,V=v+1;let q=0,ot=0;const it=new B;for(let _t=0;_t<V;_t++){const Rt=_t*D-z;for(let bt=0;bt<O;bt++){const zt=bt*N-F;it[M]=zt*y,it[g]=Rt*b,it[m]=k,u.push(it.x,it.y,it.z),it[M]=0,it[g]=0,it[m]=A>0?1:-1,d.push(it.x,it.y,it.z),f.push(bt/P),f.push(1-_t/v),q+=1}}for(let _t=0;_t<v;_t++)for(let Rt=0;Rt<P;Rt++){const bt=h+Rt+O*_t,zt=h+Rt+O*(_t+1),re=h+(Rt+1)+O*(_t+1),mt=h+(Rt+1)+O*_t;l.push(bt,zt,mt),l.push(zt,re,mt),ot+=6}o.addGroup(p,ot,w),p+=ot,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hh extends mn{constructor(t=[new Xt(0,-.5),new Xt(.5,0),new Xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],u=[],d=1/e,f=new B,h=new Xt,p=new B,x=new B,M=new B;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-g,p.z=m*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-g,p.z=m*0,x.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(x)}for(let y=0;y<=e;y++){const b=n+y*d*s,T=Math.sin(b),C=Math.cos(b);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*T,f.y=t[A].y,f.z=t[A].x*C,a.push(f.x,f.y,f.z),h.x=y/e,h.y=A/(t.length-1),o.push(h.x,h.y);const P=l[3*A+0]*T,v=l[3*A+1],w=l[3*A+0]*C;u.push(P,v,w)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){const T=b+y*t.length,C=T,A=T+t.length,P=T+t.length+1,v=T+1;r.push(C,A,v),r.push(P,v,A)}this.setIndex(r),this.setAttribute("position",new on(a,3)),this.setAttribute("uv",new on(o,2)),this.setAttribute("normal",new on(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hh(t.points,t.segments,t.phiStart,t.phiLength)}}class ja extends mn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),u=o+1,d=l+1,f=t/o,h=e/l,p=[],x=[],M=[],g=[];for(let m=0;m<d;m++){const y=m*h-a;for(let b=0;b<u;b++){const T=b*f-r;x.push(T,-y,0),M.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const b=y+u*m,T=y+u*(m+1),C=y+1+u*(m+1),A=y+1+u*m;p.push(b,T,A),p.push(T,C,A)}this.setIndex(p),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(M,3)),this.setAttribute("uv",new on(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.width,t.height,t.widthSegments,t.heightSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Mu(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Mu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function Mu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const ep={clone:Us,merge:Ke};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sp extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rp extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ap extends rp{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class op extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lp extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function aa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cp(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Su(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function Wh(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}class Mr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class up extends Mr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=t,o=2*e-n;break;case Hc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:a=t,l=2*n-e;break;case Hc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}const u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-o),this._weightNext=u/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),M=x*x,g=M*x,m=-h*g+2*h*M-h*x,y=(1+h)*g+(-1.5-2*h)*M+(-.5+h)*x+1,b=(-1-p)*g+(1.5+p)*M+.5*x,T=p*g-p*M;for(let C=0;C!==o;++C)r[C]=m*a[d+C]+y*a[u+C]+b*a[l+C]+T*a[f+C];return r}}class hp extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,d=(n-e)/(s-e),f=1-d;for(let h=0;h!==o;++h)r[h]=a[u+h]*f+a[l+h]*d;return r}}class fp extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class dp extends Mr{interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,d=this.settings||this.DefaultSettings_,f=d.inTangents,h=d.outTangents;if(!f||!h){const M=(n-e)/(s-e),g=1-M;for(let m=0;m!==o;++m)r[m]=a[u+m]*g+a[l+m]*M;return r}const p=o*2,x=t-1;for(let M=0;M!==o;++M){const g=a[u+M],m=a[l+M],y=x*p+M*2,b=h[y],T=h[y+1],C=t*p+M*2,A=f[C],P=f[C+1];let v=(n-e)/(s-e),w,N,D,F,z;for(let k=0;k<8;k++){w=v*v,N=w*v,D=1-v,F=D*D,z=F*D;const V=z*e+3*F*v*b+3*D*w*A+N*s-n;if(Math.abs(V)<1e-10)break;const q=3*F*(b-e)+6*D*v*(A-b)+3*w*(s-A);if(Math.abs(q)<1e-10)break;v=v-V/q,v=Math.max(0,Math.min(1,v))}r[M]=z*g+3*F*v*T+3*D*w*P+N*m}return r}}class Fn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=aa(e,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:aa(t.times,Array),values:aa(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new up(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new dp(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Ba:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case ro:e=this.InterpolantFactoryMethodSmooth;break;case zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return ro;case this.InterpolantFactoryMethodBezier:return zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ed(s))for(let o=0,l=s.length;o!==l;++o){const u=s[o];if(isNaN(u)){qt("KeyframeTrack: Value is not a valid number.",this,o,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ro,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const u=t[o],d=t[o+1];if(u!==d&&(o!==1||u!==t[0]))if(s)l=!0;else{const f=o*n,h=f-n,p=f+n;for(let x=0;x!==n;++x){const M=e[f+x];if(M!==e[h+x]||M!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const f=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,u=0;u!==n;++u)e[l+u]=e[o+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Gl;class Fs extends Fn{constructor(t,e,n){super(t,e,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Ba;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xh extends Fn{constructor(t,e,n,s){super(t,e,n,s)}}Xh.prototype.ValueTypeName="color";class Ga extends Fn{constructor(t,e,n,s){super(t,e,n,s)}}Ga.prototype.ValueTypeName="number";class pp extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e);let u=t*o;for(let d=u+o;u!==d;u+=4)li.slerpFlat(r,0,a,u-o,a,u,l);return r}}class Ka extends Fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new pp(this.times,this.values,this.getValueSize(),t)}}Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Fn{constructor(t,e,n){super(t,e,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Ba;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Wa extends Fn{constructor(t,e,n,s){super(t,e,n,s)}}Wa.prototype.ValueTypeName="vector";class qy{constructor(t="",e=-1,n=[],s=Gf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(gp(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],u=[];l.push((o+r-1)%r,o,(o+1)%r),u.push(0,1,0);const d=cp(l);l=Su(l,1,d),u=Su(u,1,d),!s&&l[0]===0&&(l.push(r),u.push(u[0])),a.push(new Ga(".morphTargetInfluences["+e[o].name+"]",l,u).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const u=t[o],d=u.name.match(r);if(d&&d.length>1){const f=d[1];let h=s[f];h||(s[f]=h=[]),h.push(u)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(Vt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return qt("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,x,M){if(p.length!==0){const g=[],m=[];Wh(p,g,m,x),g.length!==0&&M.push(new f(h,g,m))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const u=t.hierarchy||[];for(let f=0;f<u.length;f++){const h=u[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let x;for(x=0;x<h.length;x++)if(h[x].morphTargets)for(let M=0;M<h[x].morphTargets.length;M++)p[h[x].morphTargets[M]]=-1;for(const M in p){const g=[],m=[];for(let y=0;y!==h[x].morphTargets.length;++y){const b=h[x];g.push(b.time),m.push(b.morphTarget===M?1:0)}s.push(new Ga(".morphTargetInfluence["+M+"]",g,m))}l=p.length*a}else{const p=".bones["+e[f].name+"]";n(Wa,p+".position",h,"pos",s),n(Ka,p+".quaternion",h,"rot",s),n(Wa,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function mp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ga;case"vector":case"vector2":case"vector3":case"vector4":return Wa;case"color":return Xh;case"quaternion":return Ka;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=mp(i.type);if(i.times===void 0){const e=[],n=[];Wh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const ii={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(bu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!bu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function bu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class _p{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){const f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],x=u[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xp=new _p;class Bs{constructor(t){this.manager=t!==void 0?t:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class vp extends Error{constructor(t,e){super(t),this.response=e}}class yp extends Bs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ii.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:s});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Vt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const d=ti[t],f=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=h?parseInt(h):0,x=p!==0;let M=0;const g=new ReadableStream({start(m){y();function y(){f.read().then(({done:b,value:T})=>{if(b)m.close();else{M+=T.byteLength;const C=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:p});for(let A=0,P=d.length;A<P;A++){const v=d[A];v.onProgress&&v.onProgress(C)}m.enqueue(T),y()}},b=>{m.error(b)})}}});return new Response(g)}else throw new vp(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return u.json();default:if(o==="")return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(x=>p.decode(x))}}}).then(u=>{ii.add(`file:${t}`,u);const d=ti[t];delete ti[t];for(let f=0,h=d.length;f<h;f++){const p=d[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const d=ti[t];if(d===void 0)throw this.manager.itemError(t),u;delete ti[t];for(let f=0,h=d.length;f<h;f++){const p=d[f];p.onError&&p.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ss=new WeakMap;class Mp extends Bs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=ss.get(a);f===void 0&&(f=[],ss.set(a,f)),f.push({onLoad:e,onError:s})}return a}const o=xr("img");function l(){d(),e&&e(this);const f=ss.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}ss.delete(this),r.manager.itemEnd(t)}function u(f){d(),s&&s(f),ii.remove(`image:${t}`);const h=ss.get(this)||[];for(let p=0;p<h.length;p++){const x=h[p];x.onError&&x.onError(f)}ss.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ii.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Yh extends Bs{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new zi,o=new yp(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let u;try{u=r.parse(l)}catch(d){s!==void 0?s(d):qt(d);return}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:Dn,a.wrapT=u.wrapT!==void 0?u.wrapT:Dn,a.magFilter=u.magFilter!==void 0?u.magFilter:be,a.minFilter=u.minFilter!==void 0?u.minFilter:be,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=yi),u.mipmapCount===1&&(a.minFilter=be),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,e&&e(a,u)},n,s),a}}class Zy extends Bs{constructor(t){super(t)}load(t,e,n,s){const r=new Ge,a=new Mp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Sr extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Sp extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Do=new Jt,Eu=new B,Tu=new B;class yc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eu),Tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tu),e.updateMatrixWorld(),Do.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===_r||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Do)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new B,la=new li,zn=new B;class qh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,la,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(oa,la,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mi=new B,Au=new Xt,wu=new Xt;class rn extends qh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Au,wu),e.subVectors(wu,Au)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class bp extends yc{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ds*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class jy extends Sr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new bp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Ep extends yc{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ky extends Sr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ep}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Mc extends qh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tp extends yc{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lo extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Tp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Ap extends Sr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $y{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Uo=new WeakMap;class Jy extends Bs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Vt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Vt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(u=>{Uo.has(a)===!0?(s&&s(Uo.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(u),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){ii.add(`image-bitmap:${t}`,u),e&&e(u),r.manager.itemEnd(t)}).catch(function(u){s&&s(u),Uo.set(l,u),ii.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});ii.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const rs=-90,as=1;class wp extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(rs,as,t,e);s.layers=this.layers,this.add(s);const r=new rn(rs,as,t,e);r.layers=this.layers,this.add(r);const a=new rn(rs,as,t,e);a.layers=this.layers,this.add(a);const o=new rn(rs,as,t,e);o.layers=this.layers,this.add(o);const l=new rn(rs,as,t,e);l.layers=this.layers,this.add(l);const u=new rn(rs,as,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const u of e)this.remove(u);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,d]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,h,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Rp extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Sc="\\[\\]\\.:\\/",Cp=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",Pp="[^"+Sc.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",bc),Dp=/(WCOD+)?/.source.replace("WCOD",Pp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Np=new RegExp("^"+Ip+Dp+Lp+Up+"$"),Fp=["material","materials","bones","map"];class Op{constructor(t,e,n){const s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class _e{constructor(t,e,n){this.path=e,this.parsedPath=n||_e.parseTrackName(e),this.node=_e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new _e.Composite(t,e,n):new _e(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){const e=Np.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Fp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=_e.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const a=t[s];if(a===void 0){const u=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_e.Composite=Op;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ru=new Jt;class Qy{constructor(t,e,n=0,s=1/0){this.ray=new Ns(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ru.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(t,e=!0,n=[]){return jl(t,this,n,e),n.sort(Cu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)jl(t[s],this,n,e);return n.sort(Cu),n}}function Cu(i,t){return i.distance-t.distance}function jl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)jl(r[a],t,e,!0)}}class Pu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lc=class Lc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Lc.prototype.isMatrix2=!0;let Iu=Lc;const Du=new B,ca=new B,os=new B,ls=new B,No=new B,Bp=new B,zp=new B;class ai{constructor(t=new B,e=new B){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Du.subVectors(t,this.start),ca.subVectors(this.end,this.start);const n=ca.dot(ca);if(n===0)return 0;let r=ca.dot(Du)/n;return e&&(r=Kt(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Bp,n=zp){const s=10000000000000001e-32;let r,a;const o=this.start,l=t.start,u=this.end,d=t.end;os.subVectors(u,o),ls.subVectors(d,l),No.subVectors(o,l);const f=os.dot(os),h=ls.dot(ls),p=ls.dot(No);if(f<=s&&h<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(f<=s)r=0,a=p/h,a=Kt(a,0,1);else{const x=os.dot(No);if(h<=s)a=0,r=Kt(-x/f,0,1);else{const M=os.dot(ls),g=f*h-M*M;g!==0?r=Kt((M*p-x*h)/g,0,1):r=0,a=(M*r+p)/h,a<0?(a=0,r=Kt(-x/f,0,1)):a>1&&(a=1,r=Kt((M-x)/f,0,1))}}return e.copy(o).addScaledVector(os,r),n.copy(l).addScaledVector(ls,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const ua=new Fe;class tM extends $d{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new mn;r.setIndex(new We(n,1)),r.setAttribute("position",new We(s,3)),super(r,new Bh({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ua.setFromObject(this.object),ua.isEmpty())return;const t=ua.min,e=ua.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kp extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Vt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Lu(i,t,e,n){const s=Vp(n);switch(e){case Rh:return i*t;case Mi:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case fn:return i*t*2/s.components*s.byteLength;case vr:return i*t*2/s.components*s.byteLength;case Ch:return i*t*3/s.components*s.byteLength;case Ae:return i*t*4/s.components*s.byteLength;case Is:return i*t*4/s.components*s.byteLength;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case dl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case _l:case xl:case yl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vl:case Fa:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ol:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(i){switch(i){case $e:case Na:return{byteLength:1,components:1};case Ps:case hc:case He:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case tn:case As:case Re:return{byteLength:4,components:1};case Ah:case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hp(i){const t=new WeakMap;function e(o,l){const u=o.array,d=o.usage,f=u.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,u,d),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,u){const d=l.array,f=l.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,d);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],M=f[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const M=f[p];i.bufferSubData(u,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}var Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Vm=`uniform sampler2D dfgLUT;
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
}`,Hm=`
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,a_=`#define LAMBERT
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
}`,o_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,u_=`#define NORMAL
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
}`,h_=`#define PHONG
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
}`,f_=`#define PHONG
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
}`,d_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,__=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,y_=`uniform vec3 color;
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
}`,M_=`uniform float rotation;
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
}`,S_=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Gp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:Yp,alphatest_fragment:qp,alphatest_pars_fragment:Zp,aomap_fragment:jp,aomap_pars_fragment:Kp,batching_pars_vertex:$p,batching_vertex:Jp,begin_vertex:Qp,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:um,color_vertex:hm,common:fm,cube_uv_reflection_fragment:dm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:_m,emissivemap_pars_fragment:xm,colorspace_fragment:vm,colorspace_pars_fragment:ym,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:bm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Nm,envmap_vertex:Tm,fog_vertex:Am,fog_pars_vertex:wm,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Um,lights_toon_fragment:Fm,lights_toon_pars_fragment:Om,lights_phong_fragment:Bm,lights_phong_pars_fragment:zm,lights_physical_fragment:km,lights_physical_pars_fragment:Vm,lights_fragment_begin:Hm,lights_fragment_maps:Gm,lights_fragment_end:Wm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:jm,map_fragment:Km,map_pars_fragment:$m,map_particle_fragment:Jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:tg,metalnessmap_pars_fragment:eg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:ag,normal_fragment_begin:og,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:ug,normal_vertex:hg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Ag,shadowmap_vertex:wg,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Ig,skinnormal_vertex:Dg,specularmap_fragment:Lg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:kg,uv_vertex:Vg,worldpos_vertex:Hg,background_vert:Gg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:Yg,cube_vert:qg,cube_frag:Zg,depth_vert:jg,depth_frag:Kg,distance_vert:$g,distance_frag:Jg,equirect_vert:Qg,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:u_,meshphong_vert:h_,meshphong_frag:f_,meshphysical_vert:d_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:x_,shadow_vert:v_,shadow_frag:y_,sprite_vert:M_,sprite_frag:S_},Pt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Hn={basic:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Ke([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Ke([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Ke([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Ke([Pt.points,Pt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Ke([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Ke([Pt.common,Pt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Ke([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Ke([Pt.sprite,Pt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Ke([Pt.common,Pt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Ke([Pt.lights,Pt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Hn.physical={uniforms:Ke([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const ha={r:0,b:0,g:0},b_=new Jt,jh=new ee;jh.set(-1,0,0,0,1,0,0,0,1);function E_(i,t,e,n,s,r){const a=new oe(0);let o=s===!0?0:1,l,u,d=null,f=0,h=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const T=y.backgroundBlurriness>0;b=t.get(b,T)}return b}function x(y){let b=!1;const T=p(y);T===null?g(a,o):T&&T.isColor&&(g(T,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,b){const T=p(b);T&&(T.isCubeTexture||T.mapping===qa)?(u===void 0&&(u=new Sn(new yr(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Us(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(b.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(jh),u.material.toneMapped=ue.getTransfer(T.colorSpace)!==me,(d!==T||f!==T.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,h=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Sn(new ja(2,2),new Un({name:"BackgroundMaterial",uniforms:Us(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ue.getTransfer(T.colorSpace)!==me,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=T,f=T.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(ha,Gh(i)),e.buffers.color.setClear(ha.r,ha.g,ha.b,b,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:x,addToRenderList:M,dispose:m}}function T_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,F,z,k,O){let V=!1;const q=f(D,k,z,F);r!==q&&(r=q,u(r.object)),V=p(D,k,z,O),V&&x(D,k,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,T(D,F,z,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function u(D){return i.bindVertexArray(D)}function d(D){return i.deleteVertexArray(D)}function f(D,F,z,k){const O=k.wireframe===!0;let V=n[F.id];V===void 0&&(V={},n[F.id]=V);const q=D.isInstancedMesh===!0?D.id:0;let ot=V[q];ot===void 0&&(ot={},V[q]=ot);let it=ot[z.id];it===void 0&&(it={},ot[z.id]=it);let _t=it[O];return _t===void 0&&(_t=h(l()),it[O]=_t),_t}function h(D){const F=[],z=[],k=[];for(let O=0;O<e;O++)F[O]=0,z[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:k,object:D,attributes:{},index:null}}function p(D,F,z,k){const O=r.attributes,V=F.attributes;let q=0;const ot=z.getAttributes();for(const it in ot)if(ot[it].location>=0){const Rt=O[it];let bt=V[it];if(bt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),Rt===void 0||Rt.attribute!==bt||bt&&Rt.data!==bt.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function x(D,F,z,k){const O={},V=F.attributes;let q=0;const ot=z.getAttributes();for(const it in ot)if(ot[it].location>=0){let Rt=V[it];Rt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(Rt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(Rt=D.instanceColor));const bt={};bt.attribute=Rt,Rt&&Rt.data&&(bt.data=Rt.data),O[it]=bt,q++}r.attributes=O,r.attributesNum=q,r.index=k}function M(){const D=r.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function g(D){m(D,0)}function m(D,F){const z=r.newAttributes,k=r.enabledAttributes,O=r.attributeDivisors;z[D]=1,k[D]===0&&(i.enableVertexAttribArray(D),k[D]=1),O[D]!==F&&(i.vertexAttribDivisor(D,F),O[D]=F)}function y(){const D=r.newAttributes,F=r.enabledAttributes;for(let z=0,k=F.length;z<k;z++)F[z]!==D[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function b(D,F,z,k,O,V,q){q===!0?i.vertexAttribIPointer(D,F,z,O,V):i.vertexAttribPointer(D,F,z,k,O,V)}function T(D,F,z,k){M();const O=k.attributes,V=z.getAttributes(),q=F.defaultAttributeValues;for(const ot in V){const it=V[ot];if(it.location>=0){let _t=O[ot];if(_t===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(_t=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(_t=D.instanceColor)),_t!==void 0){const Rt=_t.normalized,bt=_t.itemSize,zt=t.get(_t);if(zt===void 0)continue;const re=zt.buffer,mt=zt.type,Q=zt.bytesPerElement,rt=mt===i.INT||mt===i.UNSIGNED_INT||_t.gpuType===As;if(_t.isInterleavedBufferAttribute){const ut=_t.data,Lt=ut.stride,Et=_t.offset;if(ut.isInstancedInterleavedBuffer){for(let Nt=0;Nt<it.locationSize;Nt++)m(it.location+Nt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Nt=0;Nt<it.locationSize;Nt++)g(it.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Nt=0;Nt<it.locationSize;Nt++)b(it.location+Nt,bt/it.locationSize,mt,Rt,Lt*Q,(Et+bt/it.locationSize*Nt)*Q,rt)}else{if(_t.isInstancedBufferAttribute){for(let ut=0;ut<it.locationSize;ut++)m(it.location+ut,_t.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ut=0;ut<it.locationSize;ut++)g(it.location+ut);i.bindBuffer(i.ARRAY_BUFFER,re);for(let ut=0;ut<it.locationSize;ut++)b(it.location+ut,bt/it.locationSize,mt,Rt,bt*Q,bt/it.locationSize*ut*Q,rt)}}else if(q!==void 0){const Rt=q[ot];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(it.location,Rt);break;case 3:i.vertexAttrib3fv(it.location,Rt);break;case 4:i.vertexAttrib4fv(it.location,Rt);break;default:i.vertexAttrib1fv(it.location,Rt)}}}}y()}function C(){w();for(const D in n){const F=n[D];for(const z in F){const k=F[z];for(const O in k){const V=k[O];for(const q in V)d(V[q].object),delete V[q];delete k[O]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const z in F){const k=F[z];for(const O in k){const V=k[O];for(const q in V)d(V[q].object),delete V[q];delete k[O]}}delete n[D.id]}function P(D){for(const F in n){const z=n[F];for(const k in z){const O=z[k];if(O[D.id]===void 0)continue;const V=O[D.id];for(const q in V)d(V[q].object),delete V[q];delete O[D.id]}}}function v(D){for(const F in n){const z=n[F],k=D.isInstancedMesh===!0?D.id:0,O=z[k];if(O!==void 0){for(const V in O){const q=O[V];for(const ot in q)d(q[ot].object),delete q[ot];delete O[V]}delete z[k],Object.keys(z).length===0&&delete n[F]}}}function w(){N(),a=!0,r!==s&&(r=s,u(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:y}}function A_(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function w_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Ae&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===He&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==$e&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Re&&!v)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const d=l(u);d!==u&&(Vt("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:T,maxSamples:C,samples:A}}function R_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Vn,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=d(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?d(null):u();else{const y=r?0:n,b=y*4;let T=m.clippingState||null;l.value=T,T=d(x,h,b,p);for(let C=0;C!==b;++C)T[C]=e[C];m.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,h,p,x){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=l.value,x!==!0||g===null){const m=p+M*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,T=p;b!==M;++b,T+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const Si=4,Uu=[.125,.215,.35,.446,.526,.582],Fi=20,C_=256,Qs=new Mc,Nu=new oe;let Fo=null,Oo=0,Bo=0,zo=!1;const P_=new B;class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=P_}=r;Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=zo,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:He,format:Ae,colorSpace:xn,depthBuffer:!1},s=Fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I_(r)),this._blurMaterial=L_(r,t,e),this._ggxMaterial=D_(r,t,e)}return s}_compileMaterial(t){const e=new Sn(new mn,t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,s,r){const l=new rn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Nu),f.toneMapping=Xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new yr,new Fh({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let m=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(Nu),m=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(l.up.set(0,u[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):T===1?(l.up.set(0,0,u[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,u[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const C=this._cubeSize;cs(s,T*C,b>2?C:0,C,C),f.setRenderTarget(s),m&&f.render(M,l),f.render(t,l)}f.toneMapping=p,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Bi||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;cs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),f=Math.sqrt(u*u-d*d),h=0+u*1.25,p=f*h,{_lodMax:x}=this,M=this._sizeLods[n],g=3*M*(n>x-Si?n-x+Si:0),m=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,cs(r,g,m,3*M,2*M),s.setRenderTarget(r),s.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,cs(t,g,m,3*M,2*M),s.setRenderTarget(t),s.render(o,Qs)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),M=r/x,g=isFinite(r)?1+Math.floor(d*M):Fi;g>Fi&&Vt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const m=[];let y=0;for(let P=0;P<Fi;++P){const v=P/M,w=Math.exp(-v*v/2);m.push(w),P===0?y+=w:P<g&&(y+=2*w)}for(let P=0;P<m.length;P++)m[P]=m[P]/y;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=x,h.mipInt.value=b-n;const T=this._sizeLods[s],C=3*T*(s>b-Si?s-b+Si:0),A=4*(this._cubeSize-T);cs(e,C,A,3*T,2*T),l.setRenderTarget(e),l.render(f,Qs)}}function I_(i){const t=[],e=[],n=[];let s=i;const r=i-Si+1+Uu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Si?l=Uu[a-i+Si-1]:a===0&&(l=0),e.push(l);const u=1/(o-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,x=6,M=3,g=2,m=1,y=new Float32Array(M*x*p),b=new Float32Array(g*x*p),T=new Float32Array(m*x*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,v=A>2?0:-1,w=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];y.set(w,M*x*A),b.set(h,g*x*A);const N=[A,A,A,A,A,A];T.set(N,m*x*A)}const C=new mn;C.setAttribute("position",new We(y,M)),C.setAttribute("uv",new We(b,g)),C.setAttribute("faceIndex",new We(T,m)),n.push(new Sn(C,null)),s>Si&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Fu(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function D_(i,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function L_(i,t,e){const n=new Float32Array(Fi),s=new B(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

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
	`}class Kh extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yr(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:si});r.uniforms.tEquirect.value=e;const a=new Sn(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=be),new wp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function U_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===hr||p===io)if(t.has(h)){const x=t.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const M=new Kh(x.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",u),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,x=p===hr||p===io,M=p===Bi||p===Cs;if(x||M){let g=e.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Kl(i)),g=x?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return x&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new Kl(i)),g=x?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function o(h,p){return p===hr?h.mapping=Bi:p===io&&(h.mapping=Cs),h}function l(h){let p=0;const x=6;for(let M=0;M<x;M++)h[M]!==void 0&&p++;return p===x}function u(h){const p=h.target;p.removeEventListener("dispose",u);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function d(h){const p=h.target;p.removeEventListener("dispose",d);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function N_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ql("WebGLRenderer: "+n+" extension not supported."),s}}}function F_(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,x=f.attributes.position;let M=0;if(x===void 0)return;if(p!==null){const y=p.array;M=p.version;for(let b=0,T=y.length;b<T;b+=3){const C=y[b+0],A=y[b+1],P=y[b+2];h.push(C,A,A,P,P,C)}}else{const y=x.array;M=x.version;for(let b=0,T=y.length/3-1;b<T;b+=3){const C=b+0,A=b+1,P=b+2;h.push(C,A,A,P,P,C)}}const g=new(x.count>=65535?Uh:Lh)(h,1);g.version=M;const m=r.get(f);m&&t.remove(m),r.set(f,g)}function d(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function O_(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function u(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),e.update(h,n,p))}function d(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let M=0;for(let g=0;g<p;g++)M+=h[g];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function B_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z_(i,t,e){const n=new WeakMap,s=new ye;function r(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let w=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),x===!0&&(b=2),M===!0&&(b=3);let T=o.attributes.position.count*b,C=1;T>t.maxTextureSize&&(C=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*C*4*f),P=new Ih(A,T,C,f);P.type=Re,P.needsUpdate=!0;const v=b*4;for(let N=0;N<f;N++){const D=g[N],F=m[N],z=y[N],k=T*C*4*N;for(let O=0;O<D.count;O++){const V=O*v;p===!0&&(s.fromBufferAttribute(D,O),A[k+V+0]=s.x,A[k+V+1]=s.y,A[k+V+2]=s.z,A[k+V+3]=0),x===!0&&(s.fromBufferAttribute(F,O),A[k+V+4]=s.x,A[k+V+5]=s.y,A[k+V+6]=s.z,A[k+V+7]=0),M===!0&&(s.fromBufferAttribute(z,O),A[k+V+8]=s.x,A[k+V+9]=s.y,A[k+V+10]=s.z,A[k+V+11]=z.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Xt(T,C)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<u.length;M++)p+=u[M];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function k_(i,t,e,n,s){let r=new WeakMap;function a(u){const d=s.render.frame,f=u.geometry,h=t.get(u,f);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){const p=u.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const V_={[vh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[uc]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[Eh]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function H_(i,t,e,n,s){const r=new Yn(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Ls(t,e):void 0}),a=new Yn(t,e,{type:He,depthBuffer:!1,stencilBuffer:!1}),o=new mn;o.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new on([0,2,0,0,2,0],2));const l=new sp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Sn(o,l),d=new Mc(-1,1,1,-1,0,1);let f=null,h=null,p=!1,x,M=null,g=[],m=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let T=0;T<g.length;T++){const C=g[T];C.setSize&&C.setSize(y,b)}},this.setEffects=function(y){g=y,m=g.length>0&&g[0].isRenderPass===!0;const b=r.width,T=r.height;for(let C=0;C<g.length;C++){const A=g[C];A.setSize&&A.setSize(b,T)}},this.begin=function(y,b){if(p||y.toneMapping===Xn&&g.length===0)return!1;if(M=b,b!==null){const T=b.width,C=b.height;(r.width!==T||r.height!==C)&&this.setSize(T,C)}return m===!1&&y.setRenderTarget(r),x=y.toneMapping,y.toneMapping=Xn,!0},this.hasRenderPass=function(){return m},this.end=function(y,b){y.toneMapping=x,p=!0;let T=r,C=a;for(let A=0;A<g.length;A++){const P=g[A];if(P.enabled!==!1&&(P.render(y,C,T,b),P.needsSwap!==!1)){const v=T;T=C,C=v}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,l.defines={},ue.getTransfer(f)===me&&(l.defines.SRGB_TRANSFER="");const A=V_[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(M),y.render(u,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const $h=new Ge,$l=new Ls(1,1),Jh=new Ih,Qh=new wd,tf=new kh,zu=[],ku=[],Vu=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ja(i,t){let e=ku[t];e===void 0&&(e=new Int32Array(t),ku[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function q_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),ze(e,n)}}function Z_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),ze(e,n)}}function j_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Vu.set(n),i.uniformMatrix4fv(this.addr,!1,Vu),ze(e,n)}}function K_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function t0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function s0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=e.isReversedDepthBuffer()?mc:pc,r=$l):r=$h,e.setTexture2D(t||r,s)}function r0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function a0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function o0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jh,s)}function l0(i){switch(i){case 5126:return G_;case 35664:return W_;case 35665:return X_;case 35666:return Y_;case 35674:return q_;case 35675:return Z_;case 35676:return j_;case 5124:case 35670:return K_;case 35667:case 35671:return $_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(i,t){i.uniform1fv(this.addr,t)}function u0(i,t){const e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function h0(i,t){const e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function f0(i,t){const e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function d0(i,t){const e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p0(i,t){const e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m0(i,t){const e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g0(i,t){i.uniform1iv(this.addr,t)}function _0(i,t){i.uniform2iv(this.addr,t)}function x0(i,t){i.uniform3iv(this.addr,t)}function v0(i,t){i.uniform4iv(this.addr,t)}function y0(i,t){i.uniform1uiv(this.addr,t)}function M0(i,t){i.uniform2uiv(this.addr,t)}function S0(i,t){i.uniform3uiv(this.addr,t)}function b0(i,t){i.uniform4uiv(this.addr,t)}function E0(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$l:a=$h;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function T0(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qh,r[a])}function A0(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tf,r[a])}function w0(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jh,r[a])}function R0(i){switch(i){case 5126:return c0;case 35664:return u0;case 35665:return h0;case 35666:return f0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return x0;case 35669:case 35673:return v0;case 5125:return y0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}class C0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l0(e.type)}}class P0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}}class I0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Wu(i,t){i.seq.push(t),i.map[t.id]=t}function D0(i,t,e){const n=i.name,s=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),a=ko.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Wu(e,u===void 0?new C0(o,i,t):new P0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new I0(o),Wu(e,f)),e=f}}}class La{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);D0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Xu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const L0=37297;let U0=0;function N0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yu=new ee;function F0(i){ue._getMatrix(Yu,ue.workingColorSpace,i);const t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case za:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+N0(i.getShaderSource(t),o)}else return r}function O0(i,t){const e=F0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const B0={[vh]:"Linear",[yh]:"Reinhard",[Mh]:"Cineon",[uc]:"ACESFilmic",[bh]:"AgX",[Eh]:"Neutral",[Sh]:"Custom"};function z0(i,t){const e=B0[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fa=new B;function k0(){ue.getLuminanceCoefficients(fa);const i=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function H0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cr(i){return i!==""}function Zu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(W0,Y0)}const X0=new Map;function Y0(i,t){let e=ae[t];if(e===void 0){const n=X0.get(t);if(n!==void 0)e=ae[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}const q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(i){return i.replace(q0,Z0)}function Z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const j0={[Ra]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function K0(i){return j0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $0={[Bi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE_UV"};function J0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q0={[Cs]:"ENVMAP_MODE_REFRACTION"};function tx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Q0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ex={[xh]:"ENVMAP_BLENDING_MULTIPLY",[zf]:"ENVMAP_BLENDING_MIX",[kf]:"ENVMAP_BLENDING_ADD"};function nx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ex[i.combine]||"ENVMAP_BLENDING_NONE"}function ix(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=K0(e),u=J0(e),d=tx(e),f=nx(e),h=ix(e),p=V0(e),x=H0(r),M=s.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(g=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Xn?z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,O0("linearToOutputTexel",e.outputColorSpace),k0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),a=Jl(a),a=Zu(a,e),a=ju(a,e),o=Jl(o),o=Zu(o,e),o=ju(o,e),a=Ku(a),o=Ku(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=y+g+a,T=y+m+o,C=Xu(s,s.VERTEX_SHADER,b),A=Xu(s,s.FRAGMENT_SHADER,T);s.attachShader(M,C),s.attachShader(M,A),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(C)||"",k=s.getShaderInfoLog(A)||"",O=F.trim(),V=z.trim(),q=k.trim();let ot=!0,it=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,C,A);else{const _t=qu(s,C,"vertex"),Rt=qu(s,A,"fragment");qt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+_t+`
`+Rt)}else O!==""?Vt("WebGLProgram: Program Info Log:",O):(V===""||q==="")&&(it=!1);it&&(D.diagnostics={runnable:ot,programLog:O,vertexShader:{log:V,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(C),s.deleteShader(A),v=new La(s,M),w=G0(s,M)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,L0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=A,this}let rx=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ox(t),e.set(t,n)),n}}class ox{constructor(t){this.id=rx++,this.code=t,this.usedTimes=0}}function lx(i){return i===fn||i===Fa||i===Oa}function cx(i,t,e,n,s,r){const a=new xc,o=new ax,l=new Set,u=[],d=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,w,N,D,F,z){const k=D.fog,O=F.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ot=t.get(v.envMap||V,q),it=ot&&ot.mapping===qa?ot.image.height:null,_t=p[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const Rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,bt=Rt!==void 0?Rt.length:0;let zt=0;O.morphAttributes.position!==void 0&&(zt=1),O.morphAttributes.normal!==void 0&&(zt=2),O.morphAttributes.color!==void 0&&(zt=3);let re,mt,Q,rt;if(_t){const Qt=Hn[_t];re=Qt.vertexShader,mt=Qt.fragmentShader}else re=v.vertexShader,mt=v.fragmentShader,o.update(v),Q=o.getVertexShaderID(v),rt=o.getFragmentShaderID(v);const ut=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Et=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,ie=!!v.map,te=!!v.matcap,ne=!!ot,he=!!v.aoMap,se=!!v.lightMap,Le=!!v.bumpMap,Me=!!v.normalMap,Xe=!!v.displacementMap,X=!!v.emissiveMap,Ce=!!v.metalnessMap,le=!!v.roughnessMap,pe=v.anisotropy>0,wt=v.clearcoat>0,ve=v.dispersion>0,L=v.iridescence>0,E=v.sheen>0,K=v.transmission>0,st=pe&&!!v.anisotropyMap,pt=wt&&!!v.clearcoatMap,vt=wt&&!!v.clearcoatNormalMap,Mt=wt&&!!v.clearcoatRoughnessMap,et=L&&!!v.iridescenceMap,at=L&&!!v.iridescenceThicknessMap,It=E&&!!v.sheenColorMap,Tt=E&&!!v.sheenRoughnessMap,gt=!!v.specularMap,yt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,Ht=K&&!!v.transmissionMap,Zt=K&&!!v.thicknessMap,H=!!v.gradientMap,$=!!v.alphaMap,nt=v.alphaTest>0,Ut=!!v.alphaHash,St=!!v.extensions;let dt=Xn;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Gt={shaderID:_t,shaderType:v.type,shaderName:v.name,vertexShader:re,fragmentShader:mt,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:Et,instancingColor:Et&&F.instanceColor!==null,instancingMorph:Et&&F.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ie,matcap:te,envMap:ne,envMapMode:ne&&ot.mapping,envMapCubeUVHeight:it,aoMap:he,lightMap:se,bumpMap:Le,normalMap:Me,displacementMap:Xe,emissiveMap:X,normalMapObjectSpace:Me&&v.normalMapType===qf,normalMapTangentSpace:Me&&v.normalMapType===Wl,packedNormalMap:Me&&v.normalMapType===Wl&&lx(v.normalMap.format),metalnessMap:Ce,roughnessMap:le,anisotropy:pe,anisotropyMap:st,clearcoat:wt,clearcoatMap:pt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Mt,dispersion:ve,iridescence:L,iridescenceMap:et,iridescenceThicknessMap:at,sheen:E,sheenColorMap:It,sheenRoughnessMap:Tt,specularMap:gt,specularColorMap:yt,specularIntensityMap:Yt,transmission:K,transmissionMap:Ht,thicknessMap:Zt,gradientMap:H,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:nt,alphaHash:Ut,combine:v.combine,mapUv:ie&&x(v.map.channel),aoMapUv:he&&x(v.aoMap.channel),lightMapUv:se&&x(v.lightMap.channel),bumpMapUv:Le&&x(v.bumpMap.channel),normalMapUv:Me&&x(v.normalMap.channel),displacementMapUv:Xe&&x(v.displacementMap.channel),emissiveMapUv:X&&x(v.emissiveMap.channel),metalnessMapUv:Ce&&x(v.metalnessMap.channel),roughnessMapUv:le&&x(v.roughnessMap.channel),anisotropyMapUv:st&&x(v.anisotropyMap.channel),clearcoatMapUv:pt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:vt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(v.sheenRoughnessMap.channel),specularMapUv:gt&&x(v.specularMap.channel),specularColorMapUv:yt&&x(v.specularColorMap.channel),specularIntensityMapUv:Yt&&x(v.specularIntensityMap.channel),transmissionMapUv:Ht&&x(v.transmissionMap.channel),thicknessMapUv:Zt&&x(v.thicknessMap.channel),alphaMapUv:$&&x(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Me||pe),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(ie||$),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&Me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:zt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ie&&v.map.isVideoTexture===!0&&ue.getTransfer(v.map.colorSpace)===me,decodeVideoTextureEmissive:X&&v.emissiveMap.isVideoTexture===!0&&ue.getTransfer(v.emissiveMap.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gn,flipSided:v.side===Qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:St&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&v.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function g(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)w.push(N),w.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(m(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function b(v){const w=p[v.type];let N;if(w){const D=Hn[w];N=ep.clone(D.uniforms)}else N=v.uniforms;return N}function T(v,w){let N=d.get(w);return N!==void 0?++N.usedTimes:(N=new sx(i,w,v,s),u.push(N),d.set(w,N)),N}function C(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:b,acquireProgram:T,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:P}}function ux(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,M,g,m){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:m},i[t]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=x,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=g,y.group=m),t++,y}function l(h,p,x,M,g,m){const y=o(h,p,x,M,g,m);x.transmission>0?n.push(y):x.transparent===!0?s.push(y):e.push(y)}function u(h,p,x,M,g,m){const y=o(h,p,x,M,g,m);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):e.unshift(y)}function d(h,p){e.length>1&&e.sort(h||hx),n.length>1&&n.sort(p||Ju),s.length>1&&s.sort(p||Ju)}function f(){for(let h=t,p=i.length;h<p;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:u,finish:f,sort:d}}function fx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Qu,i.set(n,[a])):s>=r.length?(a=new Qu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function dx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new oe};break;case"SpotLight":e={position:new B,direction:new B,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function px(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let mx=0;function gx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i){const t=new dx,e=px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new B);const s=new B,r=new Jt,a=new Jt;function o(u){let d=0,f=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,x=0,M=0,g=0,m=0,y=0,b=0,T=0,C=0,A=0,P=0;u.sort(gx);for(let w=0,N=u.length;w<N;w++){const D=u[w],F=D.color,z=D.intensity,k=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===fn?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=F.r*z,f+=F.g*z,h+=F.b*z;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],z);P++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,ot=e.get(D);ot.shadowIntensity=q.intensity,ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,n.directionalShadow[p]=ot,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=D.shadow.matrix,y++}n.directional[p]=V,p++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(F).multiplyScalar(z),V.distance=k,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[M]=V;const q=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,q.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[M]=q.matrix,D.castShadow){const ot=e.get(D);ot.shadowIntensity=q.intensity,ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,n.spotShadow[M]=ot,n.spotShadowMap[M]=O,T++}M++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(F).multiplyScalar(z),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=V,g++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const q=D.shadow,ot=e.get(D);ot.shadowIntensity=q.intensity,ot.shadowBias=q.bias,ot.shadowNormalBias=q.normalBias,ot.shadowRadius=q.radius,ot.shadowMapSize=q.mapSize,ot.shadowCameraNear=q.camera.near,ot.shadowCameraFar=q.camera.far,n.pointShadow[x]=ot,n.pointShadowMap[x]=O,n.pointShadowMatrix[x]=D.shadow.matrix,b++}n.point[x]=V,x++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(z),V.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[m]=V,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==p||v.pointLength!==x||v.spotLength!==M||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==b||v.numSpotShadows!==T||v.numSpotMaps!==C||v.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=T+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,v.directionalLength=p,v.pointLength=x,v.spotLength=M,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=b,v.numSpotShadows=T,v.numSpotMaps=C,v.numLightProbes=P,n.version=mx++)}function l(u,d){let f=0,h=0,p=0,x=0,M=0;const g=d.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){const b=u[m];if(b.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(b.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:n}}function th(i){const t=new _x(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function u(){t.setup(e)}function d(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function xx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new th(i),t.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
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
}`,Mx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Sx=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],eh=new Jt,tr=new B,Vo=new B;function bx(i,t,e){let n=new vc;const s=new Xt,r=new Xt,a=new ye,o=new op,l=new lp,u={},d=e.maxTextureSize,f={[qn]:Qe,[Qe]:qn,[Gn]:Gn},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:vx,fragmentShader:yx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new mn;x.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Sn(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let m=this.type;this.render=function(A,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===_h&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ra);const w=i.getRenderTarget(),N=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(si),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=m!==this.type;z&&P.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(O=>O.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,O=A.length;k<O;k++){const V=A[k],q=V.shadow;if(q===void 0){Vt("WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ot=q.getFrameExtents();s.multiply(ot),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ot.x),s.x=r.x*ot.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ot.y),s.y=r.y*ot.y,q.mapSize.y=r.y));const it=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=it,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===lr){if(V.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Yn(s.x,s.y,{format:fn,type:He,minFilter:be,magFilter:be,generateMipmaps:!1}),q.map.texture.name=V.name+".shadowMap",q.map.depthTexture=new Ls(s.x,s.y,Re),q.map.depthTexture.name=V.name+".shadowMapDepth",q.map.depthTexture.format=oi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=we,q.map.depthTexture.magFilter=we}else V.isPointLight?(q.map=new Kh(s.x),q.map.depthTexture=new Qd(s.x,tn)):(q.map=new Yn(s.x,s.y),q.map.depthTexture=new Ls(s.x,s.y,tn)),q.map.depthTexture.name=V.name+".shadowMap",q.map.depthTexture.format=oi,this.type===Ra?(q.map.depthTexture.compareFunction=it?mc:pc,q.map.depthTexture.minFilter=be,q.map.depthTexture.magFilter=be):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=we,q.map.depthTexture.magFilter=we);q.camera.updateProjectionMatrix()}const _t=q.map.isWebGLCubeRenderTarget?6:1;for(let Rt=0;Rt<_t;Rt++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Rt),i.clear();else{Rt===0&&(i.setRenderTarget(q.map),i.clear());const bt=q.getViewport(Rt);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),F.viewport(a)}if(V.isPointLight){const bt=q.camera,zt=q.matrix,re=V.distance||bt.far;re!==bt.far&&(bt.far=re,bt.updateProjectionMatrix()),tr.setFromMatrixPosition(V.matrixWorld),bt.position.copy(tr),Vo.copy(bt.position),Vo.add(Mx[Rt]),bt.up.copy(Sx[Rt]),bt.lookAt(Vo),bt.updateMatrixWorld(),zt.makeTranslation(-tr.x,-tr.y,-tr.z),eh.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(eh,bt.coordinateSystem,bt.reversedDepth)}else q.updateMatrices(V);n=q.getFrustum(),T(P,v,q.camera,V,this.type)}q.isPointLightShadow!==!0&&this.type===lr&&y(q,v),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,N,D)};function y(A,P){const v=t.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(s.x,s.y,{format:fn,type:He})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,v,p,M,null)}function b(A,P,v,w){let N=null;const D=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)N=D;else if(N=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=N.uuid,z=P.uuid;let k=u[F];k===void 0&&(k={},u[F]=k);let O=k[z];O===void 0&&(O=N.clone(),k[z]=O,P.addEventListener("dispose",C)),N=O}if(N.visible=P.visible,N.wireframe=P.wireframe,w===lr?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:f[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const F=i.properties.get(N);F.light=v}return N}function T(A,P,v,w,N){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===lr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const z=t.update(A),k=A.material;if(Array.isArray(k)){const O=z.groups;for(let V=0,q=O.length;V<q;V++){const ot=O[V],it=k[ot.materialIndex];if(it&&it.visible){const _t=b(A,it,w,N);A.onBeforeShadow(i,A,P,v,z,_t,ot),i.renderBufferDirect(v,null,z,_t,A,ot),A.onAfterShadow(i,A,P,v,z,_t,ot)}}}else if(k.visible){const O=b(A,k,w,N);A.onBeforeShadow(i,A,P,v,z,O,null),i.renderBufferDirect(v,null,z,O,A,null),A.onAfterShadow(i,A,P,v,z,O,null)}}const F=A.children;for(let z=0,k=F.length;z<k;z++)T(F[z],P,v,w,N)}function C(A){A.target.removeEventListener("dispose",C);for(const v in u){const w=u[v],N=A.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function Ex(i,t){function e(){let H=!1;const $=new ye;let nt=null;const Ut=new ye(0,0,0,0);return{setMask:function(St){nt!==St&&!H&&(i.colorMask(St,St,St,St),nt=St)},setLocked:function(St){H=St},setClear:function(St,dt,Gt,Qt,Te){Te===!0&&(St*=Qt,dt*=Qt,Gt*=Qt),$.set(St,dt,Gt,Qt),Ut.equals($)===!1&&(i.clearColor(St,dt,Gt,Qt),Ut.copy($))},reset:function(){H=!1,nt=null,Ut.set(-1,0,0,0)}}}function n(){let H=!1,$=!1,nt=null,Ut=null,St=null;return{setReversed:function(dt){if($!==dt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),$=dt;const Qt=St;St=null,this.setClear(Qt)}},getReversed:function(){return $},setTest:function(dt){dt?ut(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(dt){nt!==dt&&!H&&(i.depthMask(dt),nt=dt)},setFunc:function(dt){if($&&(dt=sd[dt]),Ut!==dt){switch(dt){case sl:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ut=dt}},setLocked:function(dt){H=dt},setClear:function(dt){St!==dt&&(St=dt,$&&(dt=1-dt),i.clearDepth(dt))},reset:function(){H=!1,nt=null,Ut=null,St=null,$=!1}}}function s(){let H=!1,$=null,nt=null,Ut=null,St=null,dt=null,Gt=null,Qt=null,Te=null;return{setTest:function(de){H||(de?ut(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(de){$!==de&&!H&&(i.stencilMask(de),$=de)},setFunc:function(de,bn,gn){(nt!==de||Ut!==bn||St!==gn)&&(i.stencilFunc(de,bn,gn),nt=de,Ut=bn,St=gn)},setOp:function(de,bn,gn){(dt!==de||Gt!==bn||Qt!==gn)&&(i.stencilOp(de,bn,gn),dt=de,Gt=bn,Qt=gn)},setLocked:function(de){H=de},setClear:function(de){Te!==de&&(i.clearStencil(de),Te=de)},reset:function(){H=!1,$=null,nt=null,Ut=null,St=null,dt=null,Gt=null,Qt=null,Te=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,u=new WeakMap;let d={},f={},h={},p=new WeakMap,x=[],M=null,g=!1,m=null,y=null,b=null,T=null,C=null,A=null,P=null,v=new oe(0,0,0),w=0,N=!1,D=null,F=null,z=null,k=null,O=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ot=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(it)[1]),q=ot>=1):it.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),q=ot>=2);let _t=null,Rt={};const bt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),re=new ye().fromArray(bt),mt=new ye().fromArray(zt);function Q(H,$,nt,Ut){const St=new Uint8Array(4),dt=i.createTexture();i.bindTexture(H,dt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<nt;Gt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D($+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return dt}const rt={};rt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(Rs),Le(!1),Me(Uc),ut(i.CULL_FACE),he(si);function ut(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function Lt(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function Et(H,$){return h[H]!==$?(i.bindFramebuffer(H,$),h[H]=$,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=$),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Nt(H,$){let nt=x,Ut=!1;if(H){nt=p.get($),nt===void 0&&(nt=[],p.set($,nt));const St=H.textures;if(nt.length!==St.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Gt=St.length;dt<Gt;dt++)nt[dt]=i.COLOR_ATTACHMENT0+dt;nt.length=St.length,Ut=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Ut=!0);Ut&&i.drawBuffers(nt)}function ie(H){return M!==H?(i.useProgram(H),M=H,!0):!1}const te={[Ni]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};te[Ef]=i.MIN,te[Tf]=i.MAX;const ne={[Af]:i.ZERO,[wf]:i.ONE,[Rf]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[Df]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[Lf]:i.ONE_MINUS_DST_COLOR,[If]:i.ONE_MINUS_DST_ALPHA,[Nf]:i.CONSTANT_COLOR,[Ff]:i.ONE_MINUS_CONSTANT_COLOR,[Of]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function he(H,$,nt,Ut,St,dt,Gt,Qt,Te,de){if(H===si){g===!0&&(Lt(i.BLEND),g=!1);return}if(g===!1&&(ut(i.BLEND),g=!0),H!==Mf){if(H!==m||de!==N){if((y!==Ni||C!==Ni)&&(i.blendEquation(i.FUNC_ADD),y=Ni,C=Ni),de)switch(H){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",H);break}else switch(H){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",H);break}b=null,T=null,A=null,P=null,v.set(0,0,0),w=0,m=H,N=de}return}St=St||$,dt=dt||nt,Gt=Gt||Ut,($!==y||St!==C)&&(i.blendEquationSeparate(te[$],te[St]),y=$,C=St),(nt!==b||Ut!==T||dt!==A||Gt!==P)&&(i.blendFuncSeparate(ne[nt],ne[Ut],ne[dt],ne[Gt]),b=nt,T=Ut,A=dt,P=Gt),(Qt.equals(v)===!1||Te!==w)&&(i.blendColor(Qt.r,Qt.g,Qt.b,Te),v.copy(Qt),w=Te),m=H,N=!1}function se(H,$){H.side===Gn?Lt(i.CULL_FACE):ut(i.CULL_FACE);let nt=H.side===Qe;$&&(nt=!nt),Le(nt),H.blending===Ts&&H.transparent===!1?he(si):he(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const Ut=H.stencilWrite;o.setTest(Ut),Ut&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),X(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function Me(H){H!==vf?(ut(i.CULL_FACE),H!==F&&(H===Uc?i.cullFace(i.BACK):H===yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),F=H}function Xe(H){H!==z&&(q&&i.lineWidth(H),z=H)}function X(H,$,nt){H?(ut(i.POLYGON_OFFSET_FILL),(k!==$||O!==nt)&&(k=$,O=nt,a.getReversed()&&($=-$),i.polygonOffset($,nt))):Lt(i.POLYGON_OFFSET_FILL)}function Ce(H){H?ut(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function le(H){H===void 0&&(H=i.TEXTURE0+V-1),_t!==H&&(i.activeTexture(H),_t=H)}function pe(H,$,nt){nt===void 0&&(_t===null?nt=i.TEXTURE0+V-1:nt=_t);let Ut=Rt[nt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Rt[nt]=Ut),(Ut.type!==H||Ut.texture!==$)&&(_t!==nt&&(i.activeTexture(nt),_t=nt),i.bindTexture(H,$||rt[H]),Ut.type=H,Ut.texture=$)}function wt(){const H=Rt[_t];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(H){qt("WebGLState:",H)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(H){qt("WebGLState:",H)}}function E(){try{i.texSubImage2D(...arguments)}catch(H){qt("WebGLState:",H)}}function K(){try{i.texSubImage3D(...arguments)}catch(H){qt("WebGLState:",H)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(H){qt("WebGLState:",H)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(H){qt("WebGLState:",H)}}function vt(){try{i.texStorage2D(...arguments)}catch(H){qt("WebGLState:",H)}}function Mt(){try{i.texStorage3D(...arguments)}catch(H){qt("WebGLState:",H)}}function et(){try{i.texImage2D(...arguments)}catch(H){qt("WebGLState:",H)}}function at(){try{i.texImage3D(...arguments)}catch(H){qt("WebGLState:",H)}}function It(H){return f[H]!==void 0?f[H]:i.getParameter(H)}function Tt(H,$){f[H]!==$&&(i.pixelStorei(H,$),f[H]=$)}function gt(H){re.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),re.copy(H))}function yt(H){mt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),mt.copy(H))}function Yt(H,$){let nt=u.get($);nt===void 0&&(nt=new WeakMap,u.set($,nt));let Ut=nt.get(H);Ut===void 0&&(Ut=i.getUniformBlockIndex($,H.name),nt.set(H,Ut))}function Ht(H,$){const Ut=u.get($).get(H);l.get($)!==Ut&&(i.uniformBlockBinding($,Ut,H.__bindingPointIndex),l.set($,Ut))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},_t=null,Rt={},h={},p=new WeakMap,x=[],M=null,g=!1,m=null,y=null,b=null,T=null,C=null,A=null,P=null,v=new oe(0,0,0),w=0,N=!1,D=null,F=null,z=null,k=null,O=null,re.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Lt,bindFramebuffer:Et,drawBuffers:Nt,useProgram:ie,setBlending:he,setMaterial:se,setFlipSided:Le,setCullFace:Me,setLineWidth:Xe,setPolygonOffset:X,setScissorTest:Ce,activeTexture:le,bindTexture:pe,unbindTexture:wt,compressedTexImage2D:ve,compressedTexImage3D:L,texImage2D:et,texImage3D:at,pixelStorei:Tt,getParameter:It,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:vt,texStorage3D:Mt,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:st,compressedTexSubImage3D:pt,scissor:gt,viewport:yt,reset:Zt}}function Tx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xt,d=new WeakMap,f=new Set;let h;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,E){return x?new OffscreenCanvas(L,E):xr("canvas")}function g(L,E,K){let st=1;const pt=ve(L);if((pt.width>K||pt.height>K)&&(st=K/Math.max(pt.width,pt.height)),st<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const vt=Math.floor(st*pt.width),Mt=Math.floor(st*pt.height);h===void 0&&(h=M(vt,Mt));const et=E?M(vt,Mt):h;return et.width=vt,et.height=Mt,et.getContext("2d").drawImage(L,0,0,vt,Mt),Vt("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+vt+"x"+Mt+")."),et}else return"data"in L&&Vt("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),L;return L}function m(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(L,E,K,st,pt,vt=!1){if(L!==null){if(i[L]!==void 0)return i[L];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Mt;st&&(Mt=t.get("EXT_texture_norm16"),Mt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=E;if(E===i.RED&&(K===i.FLOAT&&(et=i.R32F),K===i.HALF_FLOAT&&(et=i.R16F),K===i.UNSIGNED_BYTE&&(et=i.R8),K===i.UNSIGNED_SHORT&&Mt&&(et=Mt.R16_EXT),K===i.SHORT&&Mt&&(et=Mt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(et=i.R8UI),K===i.UNSIGNED_SHORT&&(et=i.R16UI),K===i.UNSIGNED_INT&&(et=i.R32UI),K===i.BYTE&&(et=i.R8I),K===i.SHORT&&(et=i.R16I),K===i.INT&&(et=i.R32I)),E===i.RG&&(K===i.FLOAT&&(et=i.RG32F),K===i.HALF_FLOAT&&(et=i.RG16F),K===i.UNSIGNED_BYTE&&(et=i.RG8),K===i.UNSIGNED_SHORT&&Mt&&(et=Mt.RG16_EXT),K===i.SHORT&&Mt&&(et=Mt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(et=i.RG8UI),K===i.UNSIGNED_SHORT&&(et=i.RG16UI),K===i.UNSIGNED_INT&&(et=i.RG32UI),K===i.BYTE&&(et=i.RG8I),K===i.SHORT&&(et=i.RG16I),K===i.INT&&(et=i.RG32I)),E===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(et=i.RGB8UI),K===i.UNSIGNED_SHORT&&(et=i.RGB16UI),K===i.UNSIGNED_INT&&(et=i.RGB32UI),K===i.BYTE&&(et=i.RGB8I),K===i.SHORT&&(et=i.RGB16I),K===i.INT&&(et=i.RGB32I)),E===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),K===i.UNSIGNED_INT&&(et=i.RGBA32UI),K===i.BYTE&&(et=i.RGBA8I),K===i.SHORT&&(et=i.RGBA16I),K===i.INT&&(et=i.RGBA32I)),E===i.RGB&&(K===i.UNSIGNED_SHORT&&Mt&&(et=Mt.RGB16_EXT),K===i.SHORT&&Mt&&(et=Mt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),E===i.RGBA){const at=vt?za:ue.getTransfer(pt);K===i.FLOAT&&(et=i.RGBA32F),K===i.HALF_FLOAT&&(et=i.RGBA16F),K===i.UNSIGNED_BYTE&&(et=at===me?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Mt&&(et=Mt.RGBA16_EXT),K===i.SHORT&&Mt&&(et=Mt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function C(L,E){let K;return L?E===null||E===tn||E===gr?K=i.DEPTH24_STENCIL8:E===Re?K=i.DEPTH32F_STENCIL8:E===Ps&&(K=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===tn||E===gr?K=i.DEPTH_COMPONENT24:E===Re?K=i.DEPTH_COMPONENT32F:E===Ps&&(K=i.DEPTH_COMPONENT16),K}function A(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==we&&L.minFilter!==be?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function P(L){const E=L.target;E.removeEventListener("dispose",P),w(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&f.delete(E)}function v(L){const E=L.target;E.removeEventListener("dispose",v),D(E)}function w(L){const E=n.get(L);if(E.__webglInit===void 0)return;const K=L.source,st=p.get(K);if(st){const pt=st[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&N(L),Object.keys(st).length===0&&p.delete(K)}n.remove(L)}function N(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const K=L.source,st=p.get(K);delete st[E.__cacheKey],a.memory.textures--}function D(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let pt=0;pt<E.__webglFramebuffer[st].length;pt++)i.deleteFramebuffer(E.__webglFramebuffer[st][pt]);else i.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)i.deleteFramebuffer(E.__webglFramebuffer[st]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=L.textures;for(let st=0,pt=K.length;st<pt;st++){const vt=n.get(K[st]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(K[st])}n.remove(L)}let F=0;function z(){F=0}function k(){return F}function O(L){F=L}function V(){const L=F;return L>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),F+=1,L}function q(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ot(L,E){const K=n.get(L);if(L.isVideoTexture&&pe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const st=L.image;if(st===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(K,L,E);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function it(L,E){const K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Lt(K,L,E);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function _t(L,E){const K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Lt(K,L,E);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function Rt(L,E){const K=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&K.__version!==L.version){Et(K,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}const bt={[hl]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},zt={[we]:i.NEAREST,[Hf]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[be]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},re={[Zf]:i.NEVER,[Qf]:i.ALWAYS,[jf]:i.LESS,[pc]:i.LEQUAL,[Kf]:i.EQUAL,[mc]:i.GEQUAL,[$f]:i.GREATER,[Jf]:i.NOTEQUAL};function mt(L,E){if(E.type===Re&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===be||E.magFilter===so||E.magFilter===Nr||E.magFilter===yi||E.minFilter===be||E.minFilter===so||E.minFilter===Nr||E.minFilter===yi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,bt[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,bt[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,bt[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,zt[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,zt[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===we||E.minFilter!==Nr&&E.minFilter!==yi||E.type===Re&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Q(L,E){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P));const st=E.source;let pt=p.get(st);pt===void 0&&(pt={},p.set(st,pt));const vt=q(E);if(vt!==L.__cacheKey){pt[vt]===void 0&&(pt[vt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),pt[vt].usedTimes++;const Mt=pt[L.__cacheKey];Mt!==void 0&&(pt[L.__cacheKey].usedTimes--,Mt.usedTimes===0&&N(E)),L.__cacheKey=vt,L.__webglTexture=pt[vt].texture}return K}function rt(L,E,K){return Math.floor(Math.floor(L/K)/E)}function ut(L,E,K,st){const vt=L.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,K,st,E.data);else{vt.sort((Tt,gt)=>Tt.start-gt.start);let Mt=0;for(let Tt=1;Tt<vt.length;Tt++){const gt=vt[Mt],yt=vt[Tt],Yt=gt.start+gt.count,Ht=rt(yt.start,E.width,4),Zt=rt(gt.start,E.width,4);yt.start<=Yt+1&&Ht===Zt&&rt(yt.start+yt.count-1,E.width,4)===Ht?gt.count=Math.max(gt.count,yt.start+yt.count-gt.start):(++Mt,vt[Mt]=yt)}vt.length=Mt+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),It=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,gt=vt.length;Tt<gt;Tt++){const yt=vt[Tt],Yt=Math.floor(yt.start/4),Ht=Math.ceil(yt.count/4),Zt=Yt%E.width,H=Math.floor(Yt/E.width),$=Ht,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,Zt,H,$,nt,K,st,E.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function Lt(L,E,K){let st=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=i.TEXTURE_3D);const pt=Q(L,E),vt=E.source;e.bindTexture(st,L.__webglTexture,i.TEXTURE0+K);const Mt=n.get(vt);if(vt.version!==Mt.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const nt=ue.getPrimaries(ue.workingColorSpace),Ut=E.colorSpace===vi?null:ue.getPrimaries(E.colorSpace),St=E.colorSpace===vi||nt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let at=g(E.image,!1,s.maxTextureSize);at=wt(E,at);const It=r.convert(E.format,E.colorSpace),Tt=r.convert(E.type);let gt=T(E.internalFormat,It,Tt,E.normalized,E.colorSpace,E.isVideoTexture);mt(st,E);let yt;const Yt=E.mipmaps,Ht=E.isVideoTexture!==!0,Zt=Mt.__version===void 0||pt===!0,H=vt.dataReady,$=A(E,at);if(E.isDepthTexture)gt=C(E.format===Oi,E.type),Zt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,gt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,gt,at.width,at.height,0,It,Tt,null));else if(E.isDataTexture)if(Yt.length>0){Ht&&Zt&&e.texStorage2D(i.TEXTURE_2D,$,gt,Yt[0].width,Yt[0].height);for(let nt=0,Ut=Yt.length;nt<Ut;nt++)yt=Yt[nt],Ht?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,It,Tt,yt.data):e.texImage2D(i.TEXTURE_2D,nt,gt,yt.width,yt.height,0,It,Tt,yt.data);E.generateMipmaps=!1}else Ht?(Zt&&e.texStorage2D(i.TEXTURE_2D,$,gt,at.width,at.height),H&&ut(E,at,It,Tt)):e.texImage2D(i.TEXTURE_2D,0,gt,at.width,at.height,0,It,Tt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ht&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,gt,Yt[0].width,Yt[0].height,at.depth);for(let nt=0,Ut=Yt.length;nt<Ut;nt++)if(yt=Yt[nt],E.format!==Ae)if(It!==null)if(Ht){if(H)if(E.layerUpdates.size>0){const St=Lu(yt.width,yt.height,E.format,E.type);for(const dt of E.layerUpdates){const Gt=yt.data.subarray(dt*St/yt.data.BYTES_PER_ELEMENT,(dt+1)*St/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,dt,yt.width,yt.height,1,It,Gt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,at.depth,It,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,gt,yt.width,yt.height,at.depth,0,yt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,at.depth,It,Tt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,gt,yt.width,yt.height,at.depth,0,It,Tt,yt.data)}else{Ht&&Zt&&e.texStorage2D(i.TEXTURE_2D,$,gt,Yt[0].width,Yt[0].height);for(let nt=0,Ut=Yt.length;nt<Ut;nt++)yt=Yt[nt],E.format!==Ae?It!==null?Ht?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,It,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,gt,yt.width,yt.height,0,yt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,It,Tt,yt.data):e.texImage2D(i.TEXTURE_2D,nt,gt,yt.width,yt.height,0,It,Tt,yt.data)}else if(E.isDataArrayTexture)if(Ht){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,gt,at.width,at.height,at.depth),H)if(E.layerUpdates.size>0){const nt=Lu(at.width,at.height,E.format,E.type);for(const Ut of E.layerUpdates){const St=at.data.subarray(Ut*nt/at.data.BYTES_PER_ELEMENT,(Ut+1)*nt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ut,at.width,at.height,1,It,Tt,St)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,It,Tt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,at.width,at.height,at.depth,0,It,Tt,at.data);else if(E.isData3DTexture)Ht?(Zt&&e.texStorage3D(i.TEXTURE_3D,$,gt,at.width,at.height,at.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,It,Tt,at.data)):e.texImage3D(i.TEXTURE_3D,0,gt,at.width,at.height,at.depth,0,It,Tt,at.data);else if(E.isFramebufferTexture){if(Zt)if(Ht)e.texStorage2D(i.TEXTURE_2D,$,gt,at.width,at.height);else{let nt=at.width,Ut=at.height;for(let St=0;St<$;St++)e.texImage2D(i.TEXTURE_2D,St,gt,nt,Ut,0,It,Tt,null),nt>>=1,Ut>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),at.parentNode!==nt){nt.appendChild(at),f.add(E),nt.onpaint=Qt=>{const Te=Qt.changedElements;for(const de of f)Te.includes(de.image)&&(de.needsUpdate=!0)},nt.requestPaint();return}const Ut=0,St=i.RGBA,dt=i.RGBA,Gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ut,St,dt,Gt,at),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Ht&&Zt){const nt=ve(Yt[0]);e.texStorage2D(i.TEXTURE_2D,$,gt,nt.width,nt.height)}for(let nt=0,Ut=Yt.length;nt<Ut;nt++)yt=Yt[nt],Ht?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,It,Tt,yt):e.texImage2D(i.TEXTURE_2D,nt,gt,It,Tt,yt);E.generateMipmaps=!1}else if(Ht){if(Zt){const nt=ve(at);e.texStorage2D(i.TEXTURE_2D,$,gt,nt.width,nt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Tt,at)}else e.texImage2D(i.TEXTURE_2D,0,gt,It,Tt,at);m(E)&&y(st),Mt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Et(L,E,K){if(E.image.length!==6)return;const st=Q(L,E),pt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const vt=n.get(pt);if(pt.version!==vt.__version||st===!0){e.activeTexture(i.TEXTURE0+K);const Mt=ue.getPrimaries(ue.workingColorSpace),et=E.colorSpace===vi?null:ue.getPrimaries(E.colorSpace),at=E.colorSpace===vi||Mt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const It=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let dt=0;dt<6;dt++)!It&&!Tt?gt[dt]=g(E.image[dt],!0,s.maxCubemapSize):gt[dt]=Tt?E.image[dt].image:E.image[dt],gt[dt]=wt(E,gt[dt]);const yt=gt[0],Yt=r.convert(E.format,E.colorSpace),Ht=r.convert(E.type),Zt=T(E.internalFormat,Yt,Ht,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,$=vt.__version===void 0||st===!0,nt=pt.dataReady;let Ut=A(E,yt);mt(i.TEXTURE_CUBE_MAP,E);let St;if(It){H&&$&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Zt,yt.width,yt.height);for(let dt=0;dt<6;dt++){St=gt[dt].mipmaps;for(let Gt=0;Gt<St.length;Gt++){const Qt=St[Gt];E.format!==Ae?Yt!==null?H?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Qt.width,Qt.height,Yt,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,Zt,Qt.width,Qt.height,0,Qt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Qt.width,Qt.height,Yt,Ht,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,Zt,Qt.width,Qt.height,0,Yt,Ht,Qt.data)}}}else{if(St=E.mipmaps,H&&$){St.length>0&&Ut++;const dt=ve(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Zt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Tt){H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,gt[dt].width,gt[dt].height,Yt,Ht,gt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Zt,gt[dt].width,gt[dt].height,0,Yt,Ht,gt[dt].data);for(let Gt=0;Gt<St.length;Gt++){const Te=St[Gt].image[dt].image;H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,Te.width,Te.height,Yt,Ht,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,Zt,Te.width,Te.height,0,Yt,Ht,Te.data)}}else{H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Yt,Ht,gt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Zt,Yt,Ht,gt[dt]);for(let Gt=0;Gt<St.length;Gt++){const Qt=St[Gt];H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,Yt,Ht,Qt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,Zt,Yt,Ht,Qt.image[dt])}}}m(E)&&y(i.TEXTURE_CUBE_MAP),vt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Nt(L,E,K,st,pt,vt){const Mt=r.convert(K.format,K.colorSpace),et=r.convert(K.type),at=T(K.internalFormat,Mt,et,K.normalized,K.colorSpace),It=n.get(E),Tt=n.get(K);if(Tt.__renderTarget=E,!It.__hasExternalTextures){const gt=Math.max(1,E.width>>vt),yt=Math.max(1,E.height>>vt);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,vt,at,gt,yt,E.depth,0,Mt,et,null):e.texImage2D(pt,vt,at,gt,yt,0,Mt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),le(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,pt,Tt.__webglTexture,0,Ce(E)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,pt,Tt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(L,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const st=E.depthTexture,pt=st&&st.isDepthTexture?st.type:null,vt=C(E.stencilBuffer,pt),Mt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;le(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(E),vt,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(E),vt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,vt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,L)}else{const st=E.textures;for(let pt=0;pt<st.length;pt++){const vt=st[pt],Mt=r.convert(vt.format,vt.colorSpace),et=r.convert(vt.type),at=T(vt.internalFormat,Mt,et,vt.normalized,vt.colorSpace);le(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(E),at,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(E),at,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,at,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(L,E,K){const st=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=n.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),pt.__webglTexture===void 0){pt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(i.TEXTURE_CUBE_MAP,E.depthTexture);const It=r.convert(E.depthTexture.format),Tt=r.convert(E.depthTexture.type);let gt;E.depthTexture.format===oi?gt=i.DEPTH_COMPONENT24:E.depthTexture.format===Oi&&(gt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,gt,E.width,E.height,0,It,Tt,null)}}else ot(E.depthTexture,0);const vt=pt.__webglTexture,Mt=Ce(E),et=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,at=E.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===oi)le(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,et,vt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,et,vt,0);else if(E.depthTexture.format===Oi)le(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,et,vt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,et,vt,0);else throw new Error("Unknown depthTexture format")}function ne(L){const E=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const st=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",pt)};st.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=st}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let st=0;st<6;st++)te(E.__webglFramebuffer[st],L,st);else{const st=L.texture.mipmaps;st&&st.length>0?te(E.__webglFramebuffer[0],L,0):te(E.__webglFramebuffer,L,0)}else if(K){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=i.createRenderbuffer(),ie(E.__webglDepthbuffer[st],L,!1);else{const pt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,vt)}}else{const st=L.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ie(E.__webglDepthbuffer,L,!1);else{const pt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(L,E,K){const st=n.get(L);E!==void 0&&Nt(st.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ne(L)}function se(L){const E=L.texture,K=n.get(L),st=n.get(E);L.addEventListener("dispose",v);const pt=L.textures,vt=L.isWebGLCubeRenderTarget===!0,Mt=pt.length>1;if(Mt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=E.version,a.memory.textures++),vt){K.__webglFramebuffer=[];for(let et=0;et<6;et++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[et]=[];for(let at=0;at<E.mipmaps.length;at++)K.__webglFramebuffer[et][at]=i.createFramebuffer()}else K.__webglFramebuffer[et]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let et=0;et<E.mipmaps.length;et++)K.__webglFramebuffer[et]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let et=0,at=pt.length;et<at;et++){const It=n.get(pt[et]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&le(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let et=0;et<pt.length;et++){const at=pt[et];K.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[et]);const It=r.convert(at.format,at.colorSpace),Tt=r.convert(at.type),gt=T(at.internalFormat,It,Tt,at.normalized,at.colorSpace,L.isXRRenderTarget===!0),yt=Ce(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,gt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,K.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(K.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),mt(i.TEXTURE_CUBE_MAP,E);for(let et=0;et<6;et++)if(E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)Nt(K.__webglFramebuffer[et][at],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,at);else Nt(K.__webglFramebuffer[et],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(E)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let et=0,at=pt.length;et<at;et++){const It=pt[et],Tt=n.get(It);let gt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(gt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Tt.__webglTexture),mt(gt,It),Nt(K.__webglFramebuffer,L,It,i.COLOR_ATTACHMENT0+et,gt,0),m(It)&&y(gt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(et=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,st.__webglTexture),mt(et,E),E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)Nt(K.__webglFramebuffer[at],L,E,i.COLOR_ATTACHMENT0,et,at);else Nt(K.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,et,0);m(E)&&y(et),e.unbindTexture()}L.depthBuffer&&ne(L)}function Le(L){const E=L.textures;for(let K=0,st=E.length;K<st;K++){const pt=E[K];if(m(pt)){const vt=b(L),Mt=n.get(pt).__webglTexture;e.bindTexture(vt,Mt),y(vt),e.unbindTexture()}}}const Me=[],Xe=[];function X(L){if(L.samples>0){if(le(L)===!1){const E=L.textures,K=L.width,st=L.height;let pt=i.COLOR_BUFFER_BIT;const vt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(L),et=E.length>1;if(et)for(let It=0;It<E.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const at=L.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let It=0;It<E.length;It++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[It]);const Tt=n.get(E[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,K,st,0,0,K,st,pt,i.NEAREST),l===!0&&(Me.length=0,Xe.length=0,Me.push(i.COLOR_ATTACHMENT0+It),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Me.push(vt),Xe.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let It=0;It<E.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[It]);const Tt=n.get(E[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ce(L){return Math.min(s.maxSamples,L.samples)}function le(L){const E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pe(L){const E=a.render.frame;d.get(L)!==E&&(d.set(L,E),L.update())}function wt(L,E){const K=L.colorSpace,st=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==xn&&K!==vi&&(ue.getTransfer(K)===me?(st!==Ae||pt!==$e)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",K)),E}function ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.getTextureUnits=k,this.setTextureUnits=O,this.setTexture2D=ot,this.setTexture2DArray=it,this.setTexture3D=_t,this.setTextureCube=Rt,this.rebindTextures=he,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ax(i,t){function e(n,s=vi){let r;const a=ue.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Na)return i.BYTE;if(n===hc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===As)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===Re)return i.FLOAT;if(n===He)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===Ae)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===Mi)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===fn)return i.RG;if(n===vr)return i.RG_INTEGER;if(n===Is)return i.RGBA_INTEGER;if(n===Ca||n===Pa||n===Ia||n===Da)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===xl||n===vl||n===yl||n===Ml||n===Fa||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===xl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yl)return r.COMPRESSED_R11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return r.COMPRESSED_RG11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bl||n===El||n===Tl||n===Al||n===wl||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===Bl||n===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Vl||n===Oa||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`;class Cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Vh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:wx,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Px extends wi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",g=new Cx,m={},y=e.getContextAttributes();let b=null,T=null;const C=[],A=[],P=new Xt;let v=null;const w=new rn;w.viewport=new ye;const N=new rn;N.viewport=new ye;const D=[w,N],F=new Rp;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=C[Q];return rt===void 0&&(rt=new ho,C[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=C[Q];return rt===void 0&&(rt=new ho,C[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=C[Q];return rt===void 0&&(rt=new ho,C[Q]=rt),rt.getHandSpace()};function O(Q){const rt=A.indexOf(Q.inputSource);if(rt===-1)return;const ut=C[rt];ut!==void 0&&(ut.update(Q.inputSource,Q.frame,u||a),ut.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let Q=0;Q<C.length;Q++){const rt=A[Q];rt!==null&&(A[Q]=null,C[Q].disconnect(rt))}z=null,k=null,g.reset();for(const Q in m)delete m[Q];t.setRenderTarget(b),p=null,h=null,f=null,s=null,T=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Lt=null,Et=null;y.depth&&(Et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=y.stencil?Oi:oi,Lt=y.stencil?gr:tn);const Nt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Nt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new Yn(h.textureWidth,h.textureHeight,{format:Ae,type:$e,depthTexture:new Ls(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ut={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Ae,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Q){for(let rt=0;rt<Q.removed.length;rt++){const ut=Q.removed[rt],Lt=A.indexOf(ut);Lt>=0&&(A[Lt]=null,C[Lt].disconnect(ut))}for(let rt=0;rt<Q.added.length;rt++){const ut=Q.added[rt];let Lt=A.indexOf(ut);if(Lt===-1){for(let Nt=0;Nt<C.length;Nt++)if(Nt>=A.length){A.push(ut),Lt=Nt;break}else if(A[Nt]===null){A[Nt]=ut,Lt=Nt;break}if(Lt===-1)break}const Et=C[Lt];Et&&Et.connect(ut)}}const ot=new B,it=new B;function _t(Q,rt,ut){ot.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(ut.matrixWorld);const Lt=ot.distanceTo(it),Et=rt.projectionMatrix.elements,Nt=ut.projectionMatrix.elements,ie=Et[14]/(Et[10]-1),te=Et[14]/(Et[10]+1),ne=(Et[9]+1)/Et[5],he=(Et[9]-1)/Et[5],se=(Et[8]-1)/Et[0],Le=(Nt[8]+1)/Nt[0],Me=ie*se,Xe=ie*Le,X=Lt/(-se+Le),Ce=X*-se;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ce),Q.translateZ(X),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Et[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const le=ie+X,pe=te+X,wt=Me-Ce,ve=Xe+(Lt-Ce),L=ne*te/pe*le,E=he*te/pe*le;Q.projectionMatrix.makePerspective(wt,ve,L,E,le,pe),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Rt(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let rt=Q.near,ut=Q.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),F.near=N.near=w.near=rt,F.far=N.far=w.far=ut,(z!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,k=F.far),F.layers.mask=Q.layers.mask|6,w.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;const Lt=Q.parent,Et=F.cameras;Rt(F,Lt);for(let Nt=0;Nt<Et.length;Nt++)Rt(Et[Nt],Lt);Et.length===2?_t(F,w,N):F.projectionMatrix.copy(w.projectionMatrix),bt(Q,F,Lt)};function bt(Q,rt,ut){ut===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(ut.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ds*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Q){return m[Q]};let zt=null;function re(Q,rt){if(d=rt.getViewerPose(u||a),x=rt,d!==null){const ut=d.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let Lt=!1;ut.length!==F.cameras.length&&(F.cameras.length=0,Lt=!0);for(let te=0;te<ut.length;te++){const ne=ut[te];let he=null;if(p!==null)he=p.getViewport(ne);else{const Le=f.getViewSubImage(h,ne);he=Le.viewport,te===0&&(t.setRenderTargetTextures(T,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(T))}let se=D[te];se===void 0&&(se=new rn,se.layers.enable(te),se.viewport=new ye,D[te]=se),se.matrix.fromArray(ne.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ne.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(he.x,he.y,he.width,he.height),te===0&&(F.matrix.copy(se.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Lt===!0&&F.cameras.push(se)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const te=f.getDepthInformation(ut[0]);te&&te.isValid&&te.texture&&g.init(te,s.renderState)}if(Et&&Et.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let te=0;te<ut.length;te++){const ne=ut[te].camera;if(ne){let he=m[ne];he||(he=new Vh,m[ne]=he);const se=f.getCameraImage(ne);he.sourceTexture=se}}}}for(let ut=0;ut<C.length;ut++){const Lt=A[ut],Et=C[ut];Lt!==null&&Et!==void 0&&Et.update(Lt,rt,u||a)}zt&&zt(Q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),x=null}const mt=new Zh;mt.setAnimationLoop(re),this.setAnimationLoop=function(Q){zt=Q},this.dispose=function(){}}}const Ix=new Jt,ef=new ee;ef.set(-1,0,0,0,1,0,0,0,1);function Dx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Gh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,b,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&p(g,m,T)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,b):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),b=y.envMap,T=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(T)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ef),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const T=b.program;n.uniformBlockBinding(y,T)}function u(y,b){let T=s[y.id];T===void 0&&(x(y),T=d(y),s[y.id]=T,y.addEventListener("dispose",g));const C=b.program;n.updateUBOMapping(y,C);const A=t.render.frame;r[y.id]!==A&&(h(y),r[y.id]=A)}function d(y){const b=f();y.__bindingPointIndex=b;const T=i.createBuffer(),C=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=s[y.id],T=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,P=T.length;A<P;A++){const v=Array.isArray(T[A])?T[A]:[T[A]];for(let w=0,N=v.length;w<N;w++){const D=v[w];if(p(D,A,w,C)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let O=0;O<z.length;O++){const V=z[O],q=M(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+k,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):ArrayBuffer.isView(V)?D.__data.set(new V.constructor(V.buffer,V.byteOffset,D.__data.length)):(V.toArray(D.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,b,T,C){const A=y.value,P=b+"_"+T;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:ArrayBuffer.isView(A)?C[P]=A.slice():C[P]=A.clone(),!0;{const v=C[P];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return C[P]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(v.equals(A)===!1)return v.copy(A),!0}}return!1}function x(y){const b=y.uniforms;let T=0;const C=16;for(let P=0,v=b.length;P<v;P++){const w=Array.isArray(b[P])?b[P]:[b[P]];for(let N=0,D=w.length;N<D;N++){const F=w[N],z=Array.isArray(F.value)?F.value:[F.value];for(let k=0,O=z.length;k<O;k++){const V=z[k],q=M(V),ot=T%C,it=ot%q.boundary,_t=ot+it;T+=it,_t!==0&&C-_t<q.storage&&(T+=C-_t),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=q.storage}}}const A=T%C;return A>0&&(T+=C-A),y.__size=T,y.__cache={},this}function M(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),b}function g(y){const b=y.target;b.removeEventListener("dispose",g);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:u,dispose:m}}const Ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function Nx(){return kn===null&&(kn=new zi(Ux,16,16,fn,He),kn.name="DFG_LUT",kn.minFilter=be,kn.magFilter=be,kn.wrapS=Dn,kn.wrapT=Dn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class Fx{constructor(t={}){const{canvas:e=nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=$e}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const M=p,g=new Set([Is,vr,Za]),m=new Set([$e,tn,Ps,gr,fc,dc]),y=new Uint32Array(4),b=new Int32Array(4),T=new B;let C=null,A=null;const P=[],v=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let D=!1,F=null;this._outputColorSpace=hn;let z=0,k=0,O=null,V=-1,q=null;const ot=new ye,it=new ye;let _t=null;const Rt=new oe(0);let bt=0,zt=e.width,re=e.height,mt=1,Q=null,rt=null;const ut=new ye(0,0,zt,re),Lt=new ye(0,0,zt,re);let Et=!1;const Nt=new vc;let ie=!1,te=!1;const ne=new Jt,he=new B,se=new ye,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Xe(){return O===null?mt:1}let X=n;function Ce(c,_){return e.getContext(c,_)}try{const c={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),X===null){const _="webgl2";if(X=Ce(_,c),X===null)throw Ce(_)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(c){throw qt("WebGLRenderer: "+c.message),c}let le,pe,wt,ve,L,E,K,st,pt,vt,Mt,et,at,It,Tt,gt,yt,Yt,Ht,Zt,H,$,nt;function Ut(){le=new N_(X),le.init(),H=new Ax(X,le),pe=new w_(X,le,t,H),wt=new Ex(X,le),pe.reversedDepthBuffer&&h&&wt.buffers.depth.setReversed(!0),ve=new B_(X),L=new ux,E=new Tx(X,le,wt,L,pe,H,ve),K=new U_(N),st=new Hp(X),$=new T_(X,st),pt=new F_(X,st,ve,$),vt=new k_(X,pt,st,$,ve),Yt=new z_(X,pe,E),Tt=new R_(L),Mt=new cx(N,K,le,pe,$,Tt),et=new Dx(N,L),at=new fx,It=new xx(le),yt=new E_(N,K,wt,vt,x,l),gt=new bx(N,vt,pe),nt=new Lx(X,ve,pe,wt),Ht=new A_(X,le,ve),Zt=new O_(X,le,ve),ve.programs=Mt.programs,N.capabilities=pe,N.extensions=le,N.properties=L,N.renderLists=at,N.shadowMap=gt,N.state=wt,N.info=ve}Ut(),M!==$e&&(w=new H_(M,e.width,e.height,s,r));const St=new Px(N,X);this.xr=St,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const c=le.get("WEBGL_lose_context");c&&c.loseContext()},this.forceContextRestore=function(){const c=le.get("WEBGL_lose_context");c&&c.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(c){c!==void 0&&(mt=c,this.setSize(zt,re,!1))},this.getSize=function(c){return c.set(zt,re)},this.setSize=function(c,_,S=!0){if(St.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=c,re=_,e.width=Math.floor(c*mt),e.height=Math.floor(_*mt),S===!0&&(e.style.width=c+"px",e.style.height=_+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,c,_)},this.getDrawingBufferSize=function(c){return c.set(zt*mt,re*mt).floor()},this.setDrawingBufferSize=function(c,_,S){zt=c,re=_,mt=S,e.width=Math.floor(c*S),e.height=Math.floor(_*S),this.setViewport(0,0,c,_)},this.setEffects=function(c){if(M===$e){qt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(c){for(let _=0;_<c.length;_++)if(c[_].isOutputPass===!0){Vt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(c||[])},this.getCurrentViewport=function(c){return c.copy(ot)},this.getViewport=function(c){return c.copy(ut)},this.setViewport=function(c,_,S,R){c.isVector4?ut.set(c.x,c.y,c.z,c.w):ut.set(c,_,S,R),wt.viewport(ot.copy(ut).multiplyScalar(mt).round())},this.getScissor=function(c){return c.copy(Lt)},this.setScissor=function(c,_,S,R){c.isVector4?Lt.set(c.x,c.y,c.z,c.w):Lt.set(c,_,S,R),wt.scissor(it.copy(Lt).multiplyScalar(mt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(c){wt.setScissorTest(Et=c)},this.setOpaqueSort=function(c){Q=c},this.setTransparentSort=function(c){rt=c},this.getClearColor=function(c){return c.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(c=!0,_=!0,S=!0){let R=0;if(c){let I=!1;if(O!==null){const G=O.texture.format;I=g.has(G)}if(I){const G=O.texture.type,U=m.has(G),W=yt.getClearColor(),Y=yt.getClearAlpha(),Z=W.r,J=W.g,tt=W.b;U?(y[0]=Z,y[1]=J,y[2]=tt,y[3]=Y,X.clearBufferuiv(X.COLOR,0,y)):(b[0]=Z,b[1]=J,b[2]=tt,b[3]=Y,X.clearBufferiv(X.COLOR,0,b))}else R|=X.COLOR_BUFFER_BIT}_&&(R|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),S&&(R|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R!==0&&X.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(c){c.setRenderer(this),F=c},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),yt.dispose(),at.dispose(),It.dispose(),L.dispose(),K.dispose(),vt.dispose(),$.dispose(),nt.dispose(),Mt.dispose(),St.dispose(),St.removeEventListener("sessionstart",Er),St.removeEventListener("sessionend",Tr),On.stop()};function dt(c){c.preventDefault(),ka("WebGLRenderer: Context Lost."),D=!0}function Gt(){ka("WebGLRenderer: Context Restored."),D=!1;const c=ve.autoReset,_=gt.enabled,S=gt.autoUpdate,R=gt.needsUpdate,I=gt.type;Ut(),ve.autoReset=c,gt.enabled=_,gt.autoUpdate=S,gt.needsUpdate=R,gt.type=I}function Qt(c){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",c.statusMessage)}function Te(c){const _=c.target;_.removeEventListener("dispose",Te),de(_)}function de(c){bn(c),L.remove(c)}function bn(c){const _=L.get(c).programs;_!==void 0&&(_.forEach(function(S){Mt.releaseProgram(S)}),c.isShaderMaterial&&Mt.releaseShaderCache(c))}this.renderBufferDirect=function(c,_,S,R,I,G){_===null&&(_=Le);const U=I.isMesh&&I.matrixWorld.determinant()<0,W=Hi(c,_,S,R,I);wt.setMaterial(R,U);let Y=S.index,Z=1;if(R.wireframe===!0){if(Y=pt.getWireframeAttribute(S),Y===void 0)return;Z=2}const J=S.drawRange,tt=S.attributes.position;let j=J.start*Z,lt=(J.start+J.count)*Z;G!==null&&(j=Math.max(j,G.start*Z),lt=Math.min(lt,(G.start+G.count)*Z)),Y!==null?(j=Math.max(j,0),lt=Math.min(lt,Y.count)):tt!=null&&(j=Math.max(j,0),lt=Math.min(lt,tt.count));const xt=lt-j;if(xt<0||xt===1/0)return;$.setup(I,R,W,S,Y);let ht,ft=Ht;if(Y!==null&&(ht=st.get(Y),ft=Zt,ft.setIndex(ht)),I.isMesh)R.wireframe===!0?(wt.setLineWidth(R.wireframeLinewidth*Xe()),ft.setMode(X.LINES)):ft.setMode(X.TRIANGLES);else if(I.isLine){let Ct=R.linewidth;Ct===void 0&&(Ct=1),wt.setLineWidth(Ct*Xe()),I.isLineSegments?ft.setMode(X.LINES):I.isLineLoop?ft.setMode(X.LINE_LOOP):ft.setMode(X.LINE_STRIP)}else I.isPoints?ft.setMode(X.POINTS):I.isSprite&&ft.setMode(X.TRIANGLES);if(I.isBatchedMesh)if(le.get("WEBGL_multi_draw"))ft.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ct=I._multiDrawStarts,ct=I._multiDrawCounts,Wt=I._multiDrawCount,Ft=Y?st.get(Y).bytesPerElement:1,Dt=L.get(R).currentProgram.getUniforms();for(let At=0;At<Wt;At++)Dt.setValue(X,"_gl_DrawID",At),ft.render(Ct[At]/Ft,ct[At])}else if(I.isInstancedMesh)ft.renderInstances(j,xt,I.count);else if(S.isInstancedBufferGeometry){const Ct=S._maxInstanceCount!==void 0?S._maxInstanceCount:1/0,ct=Math.min(S.instanceCount,Ct);ft.renderInstances(j,xt,ct)}else ft.render(j,xt)};function gn(c,_,S){c.transparent===!0&&c.side===Gn&&c.forceSinglePass===!1?(c.side=Qe,c.needsUpdate=!0,Ci(c,_,S),c.side=qn,c.needsUpdate=!0,Ci(c,_,S),c.side=Gn):Ci(c,_,S)}this.compile=function(c,_,S=null){S===null&&(S=c),A=It.get(S),A.init(_),v.push(A),S.traverseVisible(function(I){I.isLight&&I.layers.test(_.layers)&&(A.pushLight(I),I.castShadow&&A.pushShadow(I))}),c!==S&&c.traverseVisible(function(I){I.isLight&&I.layers.test(_.layers)&&(A.pushLight(I),I.castShadow&&A.pushShadow(I))}),A.setupLights();const R=new Set;return c.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const G=I.material;if(G)if(Array.isArray(G))for(let U=0;U<G.length;U++){const W=G[U];gn(W,S,I),R.add(W)}else gn(G,S,I),R.add(G)}),A=v.pop(),R},this.compileAsync=function(c,_,S=null){const R=this.compile(c,_,S);return new Promise(I=>{function G(){if(R.forEach(function(U){L.get(U).currentProgram.isReady()&&R.delete(U)}),R.size===0){I(c);return}setTimeout(G,10)}le.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let Vs=null;function eo(c){Vs&&Vs(c)}function Er(){On.stop()}function Tr(){On.start()}const On=new Zh;On.setAnimationLoop(eo),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(c){Vs=c,St.setAnimationLoop(c),c===null?On.stop():On.start()},St.addEventListener("sessionstart",Er),St.addEventListener("sessionend",Tr),this.render=function(c,_){if(_!==void 0&&_.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(c,_);const S=St.enabled===!0&&St.isPresenting===!0,R=w!==null&&(O===null||S)&&w.begin(N,O);if(c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(_),_=St.getCamera()),c.isScene===!0&&c.onBeforeRender(N,c,_,O),A=It.get(c,v.length),A.init(_),A.state.textureUnits=E.getTextureUnits(),v.push(A),ne.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),Nt.setFromProjectionMatrix(ne,Wn,_.reversedDepth),te=this.localClippingEnabled,ie=Tt.init(this.clippingPlanes,te),C=at.get(c,P.length),C.init(),P.push(C),St.enabled===!0&&St.isPresenting===!0){const U=N.xr.getDepthSensingMesh();U!==null&&Hs(U,_,-1/0,N.sortObjects)}Hs(c,_,0,N.sortObjects),C.finish(),N.sortObjects===!0&&C.sort(Q,rt),Me=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Me&&yt.addToRenderList(C,c),this.info.render.frame++,ie===!0&&Tt.beginShadows();const I=A.state.shadowsArray;if(gt.render(I,c,_),ie===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R&&w.hasRenderPass())===!1){const U=C.opaque,W=C.transmissive;if(A.setupLights(),_.isArrayCamera){const Y=_.cameras;if(W.length>0)for(let Z=0,J=Y.length;Z<J;Z++){const tt=Y[Z];wr(U,W,c,tt)}Me&&yt.render(c);for(let Z=0,J=Y.length;Z<J;Z++){const tt=Y[Z];Ar(C,c,tt,tt.viewport)}}else W.length>0&&wr(U,W,c,_),Me&&yt.render(c),Ar(C,c,_)}O!==null&&k===0&&(E.updateMultisampleRenderTarget(O),E.updateRenderTargetMipmap(O)),R&&w.end(N),c.isScene===!0&&c.onAfterRender(N,c,_),$.resetDefaultState(),V=-1,q=null,v.pop(),v.length>0?(A=v[v.length-1],E.setTextureUnits(A.state.textureUnits),ie===!0&&Tt.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?C=P[P.length-1]:C=null,F!==null&&F.renderEnd()};function Hs(c,_,S,R){if(c.visible===!1)return;if(c.layers.test(_.layers)){if(c.isGroup)S=c.renderOrder;else if(c.isLOD)c.autoUpdate===!0&&c.update(_);else if(c.isLightProbeGrid)A.pushLightProbeGrid(c);else if(c.isLight)A.pushLight(c),c.castShadow&&A.pushShadow(c);else if(c.isSprite){if(!c.frustumCulled||Nt.intersectsSprite(c)){R&&se.setFromMatrixPosition(c.matrixWorld).applyMatrix4(ne);const U=vt.update(c),W=c.material;W.visible&&C.push(c,U,W,S,se.z,null)}}else if((c.isMesh||c.isLine||c.isPoints)&&(!c.frustumCulled||Nt.intersectsObject(c))){const U=vt.update(c),W=c.material;if(R&&(c.boundingSphere!==void 0?(c.boundingSphere===null&&c.computeBoundingSphere(),se.copy(c.boundingSphere.center)):(U.boundingSphere===null&&U.computeBoundingSphere(),se.copy(U.boundingSphere.center)),se.applyMatrix4(c.matrixWorld).applyMatrix4(ne)),Array.isArray(W)){const Y=U.groups;for(let Z=0,J=Y.length;Z<J;Z++){const tt=Y[Z],j=W[tt.materialIndex];j&&j.visible&&C.push(c,U,j,S,se.z,tt)}}else W.visible&&C.push(c,U,W,S,se.z,null)}}const G=c.children;for(let U=0,W=G.length;U<W;U++)Hs(G[U],_,S,R)}function Ar(c,_,S,R){const{opaque:I,transmissive:G,transparent:U}=c;A.setupLightsView(S),ie===!0&&Tt.setGlobalState(N.clippingPlanes,S),R&&wt.viewport(ot.copy(R)),I.length>0&&Ri(I,_,S),G.length>0&&Ri(G,_,S),U.length>0&&Ri(U,_,S),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function wr(c,_,S,R){if((S.isScene===!0?S.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[R.id]===void 0){const j=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[R.id]=new Yn(1,1,{generateMipmaps:!0,type:j?He:$e,minFilter:yi,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const G=A.state.transmissionRenderTarget[R.id],U=R.viewport||ot;G.setSize(U.z*N.transmissionResolutionScale,U.w*N.transmissionResolutionScale);const W=N.getRenderTarget(),Y=N.getActiveCubeFace(),Z=N.getActiveMipmapLevel();N.setRenderTarget(G),N.getClearColor(Rt),bt=N.getClearAlpha(),bt<1&&N.setClearColor(16777215,.5),N.clear(),Me&&yt.render(S);const J=N.toneMapping;N.toneMapping=Xn;const tt=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),A.setupLightsView(R),ie===!0&&Tt.setGlobalState(N.clippingPlanes,R),Ri(c,S,R),E.updateMultisampleRenderTarget(G),E.updateRenderTargetMipmap(G),le.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let lt=0,xt=_.length;lt<xt;lt++){const ht=_[lt],{object:ft,geometry:Ct,material:ct,group:Wt}=ht;if(ct.side===Gn&&ft.layers.test(R.layers)){const Ft=ct.side;ct.side=Qe,ct.needsUpdate=!0,Rr(ft,S,R,Ct,ct,Wt),ct.side=Ft,ct.needsUpdate=!0,j=!0}}j===!0&&(E.updateMultisampleRenderTarget(G),E.updateRenderTargetMipmap(G))}N.setRenderTarget(W,Y,Z),N.setClearColor(Rt,bt),tt!==void 0&&(R.viewport=tt),N.toneMapping=J}function Ri(c,_,S){const R=_.isScene===!0?_.overrideMaterial:null;for(let I=0,G=c.length;I<G;I++){const U=c[I],{object:W,geometry:Y,group:Z}=U;let J=U.material;J.allowOverride===!0&&R!==null&&(J=R),W.layers.test(S.layers)&&Rr(W,_,S,Y,J,Z)}}function Rr(c,_,S,R,I,G){c.onBeforeRender(N,_,S,R,I,G),c.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,c.matrixWorld),c.normalMatrix.getNormalMatrix(c.modelViewMatrix),I.onBeforeRender(N,_,S,R,c,G),I.transparent===!0&&I.side===Gn&&I.forceSinglePass===!1?(I.side=Qe,I.needsUpdate=!0,N.renderBufferDirect(S,_,R,I,c,G),I.side=qn,I.needsUpdate=!0,N.renderBufferDirect(S,_,R,I,c,G),I.side=Gn):N.renderBufferDirect(S,_,R,I,c,G),c.onAfterRender(N,_,S,R,I,G)}function Ci(c,_,S){_.isScene!==!0&&(_=Le);const R=L.get(c),I=A.state.lights,G=A.state.shadowsArray,U=I.state.version,W=Mt.getParameters(c,I.state,G,_,S,A.state.lightProbeGridArray),Y=Mt.getProgramCacheKey(W);let Z=R.programs;R.environment=c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial?_.environment:null,R.fog=_.fog;const J=c.isMeshStandardMaterial||c.isMeshLambertMaterial&&!c.envMap||c.isMeshPhongMaterial&&!c.envMap;R.envMap=K.get(c.envMap||R.environment,J),R.envMapRotation=R.environment!==null&&c.envMap===null?_.environmentRotation:c.envMapRotation,Z===void 0&&(c.addEventListener("dispose",Te),Z=new Map,R.programs=Z);let tt=Z.get(Y);if(tt!==void 0){if(R.currentProgram===tt&&R.lightsStateVersion===U)return Pr(c,W),tt}else W.uniforms=Mt.getUniforms(c),F!==null&&c.isNodeMaterial&&F.build(c,S,W),c.onBeforeCompile(W,N),tt=Mt.acquireProgram(W,Y),Z.set(Y,tt),R.uniforms=W.uniforms;const j=R.uniforms;return(!c.isShaderMaterial&&!c.isRawShaderMaterial||c.clipping===!0)&&(j.clippingPlanes=Tt.uniform),Pr(c,W),R.needsLights=Gi(c),R.lightsStateVersion=U,R.needsLights&&(j.ambientLightColor.value=I.state.ambient,j.lightProbe.value=I.state.probe,j.directionalLights.value=I.state.directional,j.directionalLightShadows.value=I.state.directionalShadow,j.spotLights.value=I.state.spot,j.spotLightShadows.value=I.state.spotShadow,j.rectAreaLights.value=I.state.rectArea,j.ltc_1.value=I.state.rectAreaLTC1,j.ltc_2.value=I.state.rectAreaLTC2,j.pointLights.value=I.state.point,j.pointLightShadows.value=I.state.pointShadow,j.hemisphereLights.value=I.state.hemi,j.directionalShadowMatrix.value=I.state.directionalShadowMatrix,j.spotLightMatrix.value=I.state.spotLightMatrix,j.spotLightMap.value=I.state.spotLightMap,j.pointShadowMatrix.value=I.state.pointShadowMatrix),R.lightProbeGrid=A.state.lightProbeGridArray.length>0,R.currentProgram=tt,R.uniformsList=null,tt}function Cr(c){if(c.uniformsList===null){const _=c.currentProgram.getUniforms();c.uniformsList=La.seqWithValue(_.seq,c.uniforms)}return c.uniformsList}function Pr(c,_){const S=L.get(c);S.outputColorSpace=_.outputColorSpace,S.batching=_.batching,S.batchingColor=_.batchingColor,S.instancing=_.instancing,S.instancingColor=_.instancingColor,S.instancingMorph=_.instancingMorph,S.skinning=_.skinning,S.morphTargets=_.morphTargets,S.morphNormals=_.morphNormals,S.morphColors=_.morphColors,S.morphTargetsCount=_.morphTargetsCount,S.numClippingPlanes=_.numClippingPlanes,S.numIntersection=_.numClipIntersection,S.vertexAlphas=_.vertexAlphas,S.vertexTangents=_.vertexTangents,S.toneMapping=_.toneMapping}function Vi(c,_){if(c.length===0)return null;if(c.length===1)return c[0].texture!==null?c[0]:null;T.setFromMatrixPosition(_.matrixWorld);for(let S=0,R=c.length;S<R;S++){const I=c[S];if(I.texture!==null&&I.boundingBox.containsPoint(T))return I}return null}function Hi(c,_,S,R,I){_.isScene!==!0&&(_=Le),E.resetTextureUnits();const G=_.fog,U=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?_.environment:null,W=O===null?N.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ue.workingColorSpace,Y=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,Z=K.get(R.envMap||U,Y),J=R.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,tt=!!S.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),j=!!S.morphAttributes.position,lt=!!S.morphAttributes.normal,xt=!!S.morphAttributes.color;let ht=Xn;R.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ht=N.toneMapping);const ft=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,Ct=ft!==void 0?ft.length:0,ct=L.get(R),Wt=A.state.lights;if(ie===!0&&(te===!0||c!==q)){const jt=c===q&&R.id===V;Tt.setState(R,c,jt)}let Ft=!1;R.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Wt.state.version||ct.outputColorSpace!==W||I.isBatchedMesh&&ct.batching===!1||!I.isBatchedMesh&&ct.batching===!0||I.isBatchedMesh&&ct.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ct.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ct.instancing===!1||!I.isInstancedMesh&&ct.instancing===!0||I.isSkinnedMesh&&ct.skinning===!1||!I.isSkinnedMesh&&ct.skinning===!0||I.isInstancedMesh&&ct.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ct.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ct.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ct.instancingMorph===!1&&I.morphTexture!==null||ct.envMap!==Z||R.fog===!0&&ct.fog!==G||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Tt.numPlanes||ct.numIntersection!==Tt.numIntersection)||ct.vertexAlphas!==J||ct.vertexTangents!==tt||ct.morphTargets!==j||ct.morphNormals!==lt||ct.morphColors!==xt||ct.toneMapping!==ht||ct.morphTargetsCount!==Ct||!!ct.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Ft=!0):(Ft=!0,ct.__version=R.version);let Dt=ct.currentProgram;Ft===!0&&(Dt=Ci(R,_,I),F&&R.isNodeMaterial&&F.onUpdateProgram(R,Dt,ct));let At=!1,Ot=!1,ce=!1;const kt=Dt.getUniforms(),Bt=ct.uniforms;if(wt.useProgram(Dt.program)&&(At=!0,Ot=!0,ce=!0),R.id!==V&&(V=R.id,Ot=!0),ct.needsLights){const jt=Vi(A.state.lightProbeGridArray,I);ct.lightProbeGrid!==jt&&(ct.lightProbeGrid=jt,Ot=!0)}if(At||q!==c){wt.buffers.depth.getReversed()&&c.reversedDepth!==!0&&(c._reversedDepth=!0,c.updateProjectionMatrix()),kt.setValue(X,"projectionMatrix",c.projectionMatrix),kt.setValue(X,"viewMatrix",c.matrixWorldInverse);const Pe=kt.map.cameraPosition;Pe!==void 0&&Pe.setValue(X,he.setFromMatrixPosition(c.matrixWorld)),pe.logarithmicDepthBuffer&&kt.setValue(X,"logDepthBufFC",2/(Math.log(c.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&kt.setValue(X,"isOrthographic",c.isOrthographicCamera===!0),q!==c&&(q=c,Ot=!0,ce=!0)}if(ct.needsLights&&(Wt.state.directionalShadowMap.length>0&&kt.setValue(X,"directionalShadowMap",Wt.state.directionalShadowMap,E),Wt.state.spotShadowMap.length>0&&kt.setValue(X,"spotShadowMap",Wt.state.spotShadowMap,E),Wt.state.pointShadowMap.length>0&&kt.setValue(X,"pointShadowMap",Wt.state.pointShadowMap,E)),I.isSkinnedMesh){kt.setOptional(X,I,"bindMatrix"),kt.setOptional(X,I,"bindMatrixInverse");const jt=I.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),kt.setValue(X,"boneTexture",jt.boneTexture,E))}I.isBatchedMesh&&(kt.setOptional(X,I,"batchingTexture"),kt.setValue(X,"batchingTexture",I._matricesTexture,E),kt.setOptional(X,I,"batchingIdTexture"),kt.setValue(X,"batchingIdTexture",I._indirectTexture,E),kt.setOptional(X,I,"batchingColorTexture"),I._colorsTexture!==null&&kt.setValue(X,"batchingColorTexture",I._colorsTexture,E));const $t=S.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&Yt.update(I,S,Dt),(Ot||ct.receiveShadow!==I.receiveShadow)&&(ct.receiveShadow=I.receiveShadow,kt.setValue(X,"receiveShadow",I.receiveShadow)),(R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial)&&R.envMap===null&&_.environment!==null&&(Bt.envMapIntensity.value=_.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Nx()),Ot){if(kt.setValue(X,"toneMappingExposure",N.toneMappingExposure),ct.needsLights&&no(Bt,ce),G&&R.fog===!0&&et.refreshFogUniforms(Bt,G),et.refreshMaterialUniforms(Bt,R,mt,re,A.state.transmissionRenderTarget[c.id]),ct.needsLights&&ct.lightProbeGrid){const jt=ct.lightProbeGrid;Bt.probesSH.value=jt.texture,Bt.probesMin.value.copy(jt.boundingBox.min),Bt.probesMax.value.copy(jt.boundingBox.max),Bt.probesResolution.value.copy(jt.resolution)}La.upload(X,Cr(ct),Bt,E)}if(R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(La.upload(X,Cr(ct),Bt,E),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&kt.setValue(X,"center",I.center),kt.setValue(X,"modelViewMatrix",I.modelViewMatrix),kt.setValue(X,"normalMatrix",I.normalMatrix),kt.setValue(X,"modelMatrix",I.matrixWorld),R.uniformsGroups!==void 0){const jt=R.uniformsGroups;for(let Pe=0,fe=jt.length;Pe<fe;Pe++){const ln=jt[Pe];nt.update(ln,Dt),nt.bind(ln,Dt)}}return Dt}function no(c,_){c.ambientLightColor.needsUpdate=_,c.lightProbe.needsUpdate=_,c.directionalLights.needsUpdate=_,c.directionalLightShadows.needsUpdate=_,c.pointLights.needsUpdate=_,c.pointLightShadows.needsUpdate=_,c.spotLights.needsUpdate=_,c.spotLightShadows.needsUpdate=_,c.rectAreaLights.needsUpdate=_,c.hemisphereLights.needsUpdate=_}function Gi(c){return c.isMeshLambertMaterial||c.isMeshToonMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isShadowMaterial||c.isShaderMaterial&&c.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(c,_,S){const R=L.get(c);R.__autoAllocateDepthBuffer=c.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),L.get(c.texture).__webglTexture=_,L.get(c.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:S,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(c,_){const S=L.get(c);S.__webglFramebuffer=_,S.__useDefaultFramebuffer=_===void 0};const Ir=X.createFramebuffer();this.setRenderTarget=function(c,_=0,S=0){O=c,z=_,k=S;let R=null,I=!1,G=!1;if(c){const W=L.get(c);if(W.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(X.FRAMEBUFFER,W.__webglFramebuffer),ot.copy(c.viewport),it.copy(c.scissor),_t=c.scissorTest,wt.viewport(ot),wt.scissor(it),wt.setScissorTest(_t),V=-1;return}else if(W.__webglFramebuffer===void 0)E.setupRenderTarget(c);else if(W.__hasExternalTextures)E.rebindTextures(c,L.get(c.texture).__webglTexture,L.get(c.depthTexture).__webglTexture);else if(c.depthBuffer){const J=c.depthTexture;if(W.__boundDepthTexture!==J){if(J!==null&&L.has(J)&&(c.width!==J.image.width||c.height!==J.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(c)}}const Y=c.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(G=!0);const Z=L.get(c).__webglFramebuffer;c.isWebGLCubeRenderTarget?(Array.isArray(Z[_])?R=Z[_][S]:R=Z[_],I=!0):c.samples>0&&E.useMultisampledRTT(c)===!1?R=L.get(c).__webglMultisampledFramebuffer:Array.isArray(Z)?R=Z[S]:R=Z,ot.copy(c.viewport),it.copy(c.scissor),_t=c.scissorTest}else ot.copy(ut).multiplyScalar(mt).floor(),it.copy(Lt).multiplyScalar(mt).floor(),_t=Et;if(S!==0&&(R=Ir),wt.bindFramebuffer(X.FRAMEBUFFER,R)&&wt.drawBuffers(c,R),wt.viewport(ot),wt.scissor(it),wt.setScissorTest(_t),I){const W=L.get(c.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+_,W.__webglTexture,S)}else if(G){const W=_;for(let Y=0;Y<c.textures.length;Y++){const Z=L.get(c.textures[Y]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Y,Z.__webglTexture,S,W)}}else if(c!==null&&S!==0){const W=L.get(c.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,W.__webglTexture,S)}V=-1},this.readRenderTargetPixels=function(c,_,S,R,I,G,U,W=0){if(!(c&&c.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=L.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&U!==void 0&&(Y=Y[U]),Y){wt.bindFramebuffer(X.FRAMEBUFFER,Y);try{const Z=c.textures[W],J=Z.format,tt=Z.type;if(c.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+W),!pe.textureFormatReadable(J)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(tt)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=c.width-R&&S>=0&&S<=c.height-I&&X.readPixels(_,S,R,I,H.convert(J),H.convert(tt),G)}finally{const Z=O!==null?L.get(O).__webglFramebuffer:null;wt.bindFramebuffer(X.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(c,_,S,R,I,G,U,W=0){if(!(c&&c.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=L.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&U!==void 0&&(Y=Y[U]),Y)if(_>=0&&_<=c.width-R&&S>=0&&S<=c.height-I){wt.bindFramebuffer(X.FRAMEBUFFER,Y);const Z=c.textures[W],J=Z.format,tt=Z.type;if(c.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+W),!pe.textureFormatReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const j=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,j),X.bufferData(X.PIXEL_PACK_BUFFER,G.byteLength,X.STREAM_READ),X.readPixels(_,S,R,I,H.convert(J),H.convert(tt),0);const lt=O!==null?L.get(O).__webglFramebuffer:null;wt.bindFramebuffer(X.FRAMEBUFFER,lt);const xt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await id(X,xt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,j),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,G),X.deleteBuffer(j),X.deleteSync(xt),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(c,_=null,S=0){const R=Math.pow(2,-S),I=Math.floor(c.image.width*R),G=Math.floor(c.image.height*R),U=_!==null?_.x:0,W=_!==null?_.y:0;E.setTexture2D(c,0),X.copyTexSubImage2D(X.TEXTURE_2D,S,0,0,U,W,I,G),wt.unbindTexture()};const ke=X.createFramebuffer(),nn=X.createFramebuffer();this.copyTextureToTexture=function(c,_,S=null,R=null,I=0,G=0){let U,W,Y,Z,J,tt,j,lt,xt;const ht=c.isCompressedTexture?c.mipmaps[G]:c.image;if(S!==null)U=S.max.x-S.min.x,W=S.max.y-S.min.y,Y=S.isBox3?S.max.z-S.min.z:1,Z=S.min.x,J=S.min.y,tt=S.isBox3?S.min.z:0;else{const Bt=Math.pow(2,-I);U=Math.floor(ht.width*Bt),W=Math.floor(ht.height*Bt),c.isDataArrayTexture?Y=ht.depth:c.isData3DTexture?Y=Math.floor(ht.depth*Bt):Y=1,Z=0,J=0,tt=0}R!==null?(j=R.x,lt=R.y,xt=R.z):(j=0,lt=0,xt=0);const ft=H.convert(_.format),Ct=H.convert(_.type);let ct;_.isData3DTexture?(E.setTexture3D(_,0),ct=X.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(E.setTexture2DArray(_,0),ct=X.TEXTURE_2D_ARRAY):(E.setTexture2D(_,0),ct=X.TEXTURE_2D),wt.activeTexture(X.TEXTURE0),wt.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,_.flipY),wt.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),wt.pixelStorei(X.UNPACK_ALIGNMENT,_.unpackAlignment);const Wt=wt.getParameter(X.UNPACK_ROW_LENGTH),Ft=wt.getParameter(X.UNPACK_IMAGE_HEIGHT),Dt=wt.getParameter(X.UNPACK_SKIP_PIXELS),At=wt.getParameter(X.UNPACK_SKIP_ROWS),Ot=wt.getParameter(X.UNPACK_SKIP_IMAGES);wt.pixelStorei(X.UNPACK_ROW_LENGTH,ht.width),wt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ht.height),wt.pixelStorei(X.UNPACK_SKIP_PIXELS,Z),wt.pixelStorei(X.UNPACK_SKIP_ROWS,J),wt.pixelStorei(X.UNPACK_SKIP_IMAGES,tt);const ce=c.isDataArrayTexture||c.isData3DTexture,kt=_.isDataArrayTexture||_.isData3DTexture;if(c.isDepthTexture){const Bt=L.get(c),$t=L.get(_),jt=L.get(Bt.__renderTarget),Pe=L.get($t.__renderTarget);wt.bindFramebuffer(X.READ_FRAMEBUFFER,jt.__webglFramebuffer),wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let fe=0;fe<Y;fe++)ce&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,L.get(c).__webglTexture,I,tt+fe),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,L.get(_).__webglTexture,G,xt+fe)),X.blitFramebuffer(Z,J,U,W,j,lt,U,W,X.DEPTH_BUFFER_BIT,X.NEAREST);wt.bindFramebuffer(X.READ_FRAMEBUFFER,null),wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(I!==0||c.isRenderTargetTexture||L.has(c)){const Bt=L.get(c),$t=L.get(_);wt.bindFramebuffer(X.READ_FRAMEBUFFER,ke),wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,nn);for(let jt=0;jt<Y;jt++)ce?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Bt.__webglTexture,I,tt+jt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Bt.__webglTexture,I),kt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$t.__webglTexture,G,xt+jt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$t.__webglTexture,G),I!==0?X.blitFramebuffer(Z,J,U,W,j,lt,U,W,X.COLOR_BUFFER_BIT,X.NEAREST):kt?X.copyTexSubImage3D(ct,G,j,lt,xt+jt,Z,J,U,W):X.copyTexSubImage2D(ct,G,j,lt,Z,J,U,W);wt.bindFramebuffer(X.READ_FRAMEBUFFER,null),wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else kt?c.isDataTexture||c.isData3DTexture?X.texSubImage3D(ct,G,j,lt,xt,U,W,Y,ft,Ct,ht.data):_.isCompressedArrayTexture?X.compressedTexSubImage3D(ct,G,j,lt,xt,U,W,Y,ft,ht.data):X.texSubImage3D(ct,G,j,lt,xt,U,W,Y,ft,Ct,ht):c.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,G,j,lt,U,W,ft,Ct,ht.data):c.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,G,j,lt,ht.width,ht.height,ft,ht.data):X.texSubImage2D(X.TEXTURE_2D,G,j,lt,U,W,ft,Ct,ht);wt.pixelStorei(X.UNPACK_ROW_LENGTH,Wt),wt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ft),wt.pixelStorei(X.UNPACK_SKIP_PIXELS,Dt),wt.pixelStorei(X.UNPACK_SKIP_ROWS,At),wt.pixelStorei(X.UNPACK_SKIP_IMAGES,Ot),G===0&&_.generateMipmaps&&X.generateMipmap(ct),wt.unbindTexture()},this.initRenderTarget=function(c){L.get(c).__webglFramebuffer===void 0&&E.setupRenderTarget(c)},this.initTexture=function(c){c.isCubeTexture?E.setTextureCube(c,0):c.isData3DTexture?E.setTexture3D(c,0):c.isDataArrayTexture||c.isCompressedArrayTexture?E.setTexture2DArray(c,0):E.setTexture2D(c,0),wt.unbindTexture()},this.resetState=function(){z=0,k=0,O=null,wt.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const nh={type:"change"},Ec={type:"start"},nf={type:"end"},da=new Ns,ih=new Vn,Ox=Math.cos(70*Md.DEG2RAD),Oe=new B,sn=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ho=1e-6;class Bx extends kp{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new li,this._lastTargetPosition=new B,this._quat=new li().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pu,this._sphericalDelta=new Pu,this._scale=1,this._panOffset=new B,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new B,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kx.bind(this),this._onPointerDown=zx.bind(this),this._onPointerUp=Vx.bind(this),this._onContextMenu=Zx.bind(this),this._onMouseWheel=Wx.bind(this),this._onKeyDown=Xx.bind(this),this._onTouchStart=Yx.bind(this),this._onTouchMove=qx.bind(this),this._onMouseDown=Hx.bind(this),this._onMouseMove=Gx.bind(this),this._interceptControlDown=jx.bind(this),this._interceptControlUp=Kx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nh),this.update(),this.state=xe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Oe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new B(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(da.origin.copy(this.object.position),da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(da.direction))<Ox?this.object.lookAt(this.target):(ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),da.intersectPlane(ih,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ho||this._lastTargetPosition.distanceToSquared(this.target)>Ho?(this.dispatchEvent(nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function kx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Vx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nf),this.state=xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xe.DOLLY;break;case Es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}break;case Es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ec)}function Gx(i){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Wx(i){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(i.preventDefault(),this.dispatchEvent(Ec),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nf))}function Xx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Yx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xe.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xe.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ec)}function qx(i){switch(this._trackPointer(i),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xe.NONE}}function Zx(i){this.enabled!==!1&&i.preventDefault()}function jx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class $x extends Yh{constructor(t){super(t),this.type=He}parse(t){const a=function(v,w){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(w||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(w||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(w||""))}},d=`
`,f=function(v,w,N){w=w||1024;let F=v.pos,z=-1,k=0,O="",V=String.fromCharCode.apply(null,new Uint16Array(v.subarray(F,F+128)));for(;0>(z=V.indexOf(d))&&k<w&&F<v.byteLength;)O+=V,k+=V.length,F+=128,V=String.fromCharCode.apply(null,new Uint16Array(v.subarray(F,F+128)));return-1<z?(v.pos+=k+z+1,O+V.slice(0,z)):!1},h=function(v){const w=/^#\?(\S+)/,N=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,k={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,V;for((v.pos>=v.byteLength||!(O=f(v)))&&a(1,"no header found"),(V=O.match(w))||a(3,"bad initial token"),k.valid|=1,k.programtype=V[1],k.string+=O+`
`;O=f(v),O!==!1;){if(k.string+=O+`
`,O.charAt(0)==="#"){k.comments+=O+`
`;continue}if((V=O.match(N))&&(k.gamma=parseFloat(V[1])),(V=O.match(D))&&(k.exposure=parseFloat(V[1])),(V=O.match(F))&&(k.valid|=2,k.format=V[1]),(V=O.match(z))&&(k.valid|=4,k.height=parseInt(V[1],10),k.width=parseInt(V[2],10)),k.valid&2&&k.valid&4)break}return k.valid&2||a(3,"missing format specifier"),k.valid&4||a(3,"missing image size specifier"),k},p=function(v,w,N){const D=w;if(D<8||D>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);D!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");const F=new Uint8Array(4*w*N);F.length||a(4,"unable to allocate buffer space");let z=0,k=0;const O=4*D,V=new Uint8Array(4),q=new Uint8Array(O);let ot=N;for(;ot>0&&k<v.byteLength;){k+4>v.byteLength&&a(1),V[0]=v[k++],V[1]=v[k++],V[2]=v[k++],V[3]=v[k++],(V[0]!=2||V[1]!=2||(V[2]<<8|V[3])!=D)&&a(3,"bad rgbe scanline format");let it=0,_t;for(;it<O&&k<v.byteLength;){_t=v[k++];const bt=_t>128;if(bt&&(_t-=128),(_t===0||it+_t>O)&&a(3,"bad scanline data"),bt){const zt=v[k++];for(let re=0;re<_t;re++)q[it++]=zt}else q.set(v.subarray(k,k+_t),it),it+=_t,k+=_t}const Rt=D;for(let bt=0;bt<Rt;bt++){let zt=0;F[z]=q[bt+zt],zt+=D,F[z+1]=q[bt+zt],zt+=D,F[z+2]=q[bt+zt],zt+=D,F[z+3]=q[bt+zt],z+=4}ot--}return F},x=function(v,w,N,D){const F=v[w+3],z=Math.pow(2,F-128)/255;N[D+0]=v[w+0]*z,N[D+1]=v[w+1]*z,N[D+2]=v[w+2]*z,N[D+3]=1},M=function(v,w,N,D){const F=v[w+3],z=Math.pow(2,F-128)/255;N[D+0]=Pn.toHalfFloat(Math.min(v[w+0]*z,65504)),N[D+1]=Pn.toHalfFloat(Math.min(v[w+1]*z,65504)),N[D+2]=Pn.toHalfFloat(Math.min(v[w+2]*z,65504)),N[D+3]=Pn.toHalfFloat(1)},g=new Uint8Array(t);g.pos=0;const m=h(g),y=m.width,b=m.height,T=p(g.subarray(g.pos),y,b);let C,A,P;switch(this.type){case Re:P=T.length/4;const v=new Float32Array(P*4);for(let N=0;N<P;N++)x(T,N*4,v,N*4);C=v,A=Re;break;case He:P=T.length/4;const w=new Uint16Array(P*4);for(let N=0;N<P;N++)M(T,N*4,w,N*4);C=w,A=He;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:b,data:C,header:m.string,gamma:m.gamma,exposure:m.exposure,type:A}}setDataType(t){return this.type=t,this}load(t,e,n,s){function r(a,o){switch(a.type){case Re:case He:a.colorSpace=xn,a.minFilter=be,a.magFilter=be,a.generateMipmaps=!1,a.flipY=!0;break}e&&e(a,o)}return super.load(t,r,n,s)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var vn=Uint8Array,Ss=Uint16Array,Jx=Int32Array,sf=new vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rf=new vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Qx=new vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),af=function(i,t){for(var e=new Ss(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new Jx(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},of=af(sf,2),lf=of.b,tv=of.r;lf[28]=258,tv[258]=28;var ev=af(rf,0),nv=ev.b,Ql=new Ss(32768);for(var Se=0;Se<32768;++Se){var gi=(Se&43690)>>1|(Se&21845)<<1;gi=(gi&52428)>>2|(gi&13107)<<2,gi=(gi&61680)>>4|(gi&3855)<<4,Ql[Se]=((gi&65280)>>8|(gi&255)<<8)>>1}var pr=function(i,t,e){for(var n=i.length,s=0,r=new Ss(t);s<n;++s)i[s]&&++r[i[s]-1];var a=new Ss(t);for(s=1;s<t;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(e){o=new Ss(1<<t);var l=15-t;for(s=0;s<n;++s)if(i[s])for(var u=s<<4|i[s],d=t-i[s],f=a[i[s]-1]++<<d,h=f|(1<<d)-1;f<=h;++f)o[Ql[f]>>l]=u}else for(o=new Ss(n),s=0;s<n;++s)i[s]&&(o[s]=Ql[a[i[s]-1]++]>>15-i[s]);return o},br=new vn(288);for(var Se=0;Se<144;++Se)br[Se]=8;for(var Se=144;Se<256;++Se)br[Se]=9;for(var Se=256;Se<280;++Se)br[Se]=7;for(var Se=280;Se<288;++Se)br[Se]=8;var cf=new vn(32);for(var Se=0;Se<32;++Se)cf[Se]=5;var iv=pr(br,9,1),sv=pr(cf,5,1),Go=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},wn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},Wo=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},rv=function(i){return(i+7)/8|0},av=function(i,t,e){return(e==null||e>i.length)&&(e=i.length),new vn(i.subarray(t,e))},ov=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Cn=function(i,t,e){var n=new Error(t||ov[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Cn),!e)throw n;return n},lv=function(i,t,e,n){var s=i.length,r=0;if(!s||t.f&&!t.l)return e||new vn(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new vn(s*3));var u=function(Nt){var ie=e.length;if(Nt>ie){var te=new vn(Math.max(ie*2,Nt));te.set(e),e=te}},d=t.f||0,f=t.p||0,h=t.b||0,p=t.l,x=t.d,M=t.m,g=t.n,m=s*8;do{if(!p){d=wn(i,f,1);var y=wn(i,f+1,3);if(f+=3,y)if(y==1)p=iv,x=sv,M=9,g=5;else if(y==2){var A=wn(i,f,31)+257,P=wn(i,f+10,15)+4,v=A+wn(i,f+5,31)+1;f+=14;for(var w=new vn(v),N=new vn(19),D=0;D<P;++D)N[Qx[D]]=wn(i,f+D*3,7);f+=P*3;for(var F=Go(N),z=(1<<F)-1,k=pr(N,F,1),D=0;D<v;){var O=k[wn(i,f,z)];f+=O&15;var b=O>>4;if(b<16)w[D++]=b;else{var V=0,q=0;for(b==16?(q=3+wn(i,f,3),f+=2,V=w[D-1]):b==17?(q=3+wn(i,f,7),f+=3):b==18&&(q=11+wn(i,f,127),f+=7);q--;)w[D++]=V}}var ot=w.subarray(0,A),it=w.subarray(A);M=Go(ot),g=Go(it),p=pr(ot,M,1),x=pr(it,g,1)}else Cn(1);else{var b=rv(f)+4,T=i[b-4]|i[b-3]<<8,C=b+T;if(C>s){l&&Cn(0);break}o&&u(h+T),e.set(i.subarray(b,C),h),t.b=h+=T,t.p=f=C*8,t.f=d;continue}if(f>m){l&&Cn(0);break}}o&&u(h+131072);for(var _t=(1<<M)-1,Rt=(1<<g)-1,bt=f;;bt=f){var V=p[Wo(i,f)&_t],zt=V>>4;if(f+=V&15,f>m){l&&Cn(0);break}if(V||Cn(2),zt<256)e[h++]=zt;else if(zt==256){bt=f,p=null;break}else{var re=zt-254;if(zt>264){var D=zt-257,mt=sf[D];re=wn(i,f,(1<<mt)-1)+lf[D],f+=mt}var Q=x[Wo(i,f)&Rt],rt=Q>>4;Q||Cn(3),f+=Q&15;var it=nv[rt];if(rt>3){var mt=rf[rt];it+=Wo(i,f)&(1<<mt)-1,f+=mt}if(f>m){l&&Cn(0);break}o&&u(h+131072);var ut=h+re;if(h<it){var Lt=r-it,Et=Math.min(it,ut);for(Lt+h<0&&Cn(3);h<Et;++h)e[h]=n[Lt+h]}for(;h<ut;++h)e[h]=e[h-it]}}t.l=p,t.p=bt,t.b=h,t.f=d,p&&(d=1,t.m=M,t.d=x,t.n=g)}while(!d);return h!=e.length&&a?av(e,0,h):e.subarray(0,h)},cv=new vn(0),uv=function(i,t){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Cn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Cn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function er(i,t){return lv(i.subarray(uv(i),-4),{i:2},t,t)}var hv=typeof TextDecoder<"u"&&new TextDecoder,fv=0;try{hv.decode(cv,{stream:!0}),fv=1}catch{}class dv extends Yh{constructor(t){super(t),this.type=He,this.outputFormat=Ae,this.part=0}parse(t){const w=Math.pow(2.7182818,2.2);let N=null;function D(c,_){let S=0;for(let I=0;I<65536;++I)(I==0||c[I>>3]&1<<(I&7))&&(_[S++]=I);const R=S-1;for(;S<65536;)_[S++]=0;return R}function F(c){for(let _=0;_<16384;_++)c[_]={},c[_].len=0,c[_].lit=0,c[_].p=null}const z={l:0,c:0,lc:0};function k(c,_,S,R,I){for(;S<c;)_=_<<8|yt(R,I),S+=8;S-=c,z.l=_>>S&(1<<c)-1,z.c=_,z.lc=S}const O=new Array(59);function V(c){for(let S=0;S<=58;++S)O[S]=0;for(let S=0;S<65537;++S)O[c[S]]+=1;let _=0;for(let S=58;S>0;--S){const R=_+O[S]>>1;O[S]=_,_=R}for(let S=0;S<65537;++S){const R=c[S];R>0&&(c[S]=R|O[R]++<<6)}}function q(c,_,S,R,I,G){const U=_;let W=0,Y=0;for(;R<=I;R++){if(U.value-_.value>S)return!1;k(6,W,Y,c,U);const Z=z.l;if(W=z.c,Y=z.lc,G[R]=Z,Z==63){if(U.value-_.value>S)throw new Error("Something wrong with hufUnpackEncTable");k(8,W,Y,c,U);let J=z.l+6;if(W=z.c,Y=z.lc,R+J>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)G[R++]=0;R--}else if(Z>=59){let J=Z-59+2;if(R+J>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)G[R++]=0;R--}}V(G)}function ot(c){return c&63}function it(c){return c>>6}function _t(c,_,S,R){for(;_<=S;_++){const I=it(c[_]),G=ot(c[_]);if(I>>G)throw new Error("Invalid table entry");if(G>14){const U=R[I>>G-14];if(U.len)throw new Error("Invalid table entry");if(U.lit++,U.p){const W=U.p;U.p=new Array(U.lit);for(let Y=0;Y<U.lit-1;++Y)U.p[Y]=W[Y]}else U.p=new Array(1);U.p[U.lit-1]=_}else if(G){let U=0;for(let W=1<<14-G;W>0;W--){const Y=R[(I<<14-G)+U];if(Y.len||Y.p)throw new Error("Invalid table entry");Y.len=G,Y.lit=_,U++}}}return!0}const Rt={c:0,lc:0};function bt(c,_,S,R){c=c<<8|yt(S,R),_+=8,Rt.c=c,Rt.lc=_}const zt={c:0,lc:0};function re(c,_,S,R,I,G,U,W,Y){if(c==_){R<8&&(bt(S,R,I,G),S=Rt.c,R=Rt.lc),R-=8;let Z=S>>R;if(Z=new Uint8Array([Z])[0],W.value+Z>Y)return!1;const J=U[W.value-1];for(;Z-- >0;)U[W.value++]=J}else if(W.value<Y)U[W.value++]=c;else return!1;zt.c=S,zt.lc=R}function mt(c){return c&65535}function Q(c){const _=mt(c);return _>32767?_-65536:_}const rt={a:0,b:0};function ut(c,_){const S=Q(c),I=Q(_),G=S+(I&1)+(I>>1),U=G,W=G-I;rt.a=U,rt.b=W}function Lt(c,_){const S=mt(c),R=mt(_),I=S-(R>>1)&65535,G=R+I-32768&65535;rt.a=G,rt.b=I}function Et(c,_,S,R,I,G,U){const W=U<16384,Y=S>I?I:S;let Z=1,J,tt;for(;Z<=Y;)Z<<=1;for(Z>>=1,J=Z,Z>>=1;Z>=1;){tt=0;const j=tt+G*(I-J),lt=G*Z,xt=G*J,ht=R*Z,ft=R*J;let Ct,ct,Wt,Ft;for(;tt<=j;tt+=xt){let Dt=tt;const At=tt+R*(S-J);for(;Dt<=At;Dt+=ft){const Ot=Dt+ht,ce=Dt+lt,kt=ce+ht;W?(ut(c[Dt+_],c[ce+_]),Ct=rt.a,Wt=rt.b,ut(c[Ot+_],c[kt+_]),ct=rt.a,Ft=rt.b,ut(Ct,ct),c[Dt+_]=rt.a,c[Ot+_]=rt.b,ut(Wt,Ft),c[ce+_]=rt.a,c[kt+_]=rt.b):(Lt(c[Dt+_],c[ce+_]),Ct=rt.a,Wt=rt.b,Lt(c[Ot+_],c[kt+_]),ct=rt.a,Ft=rt.b,Lt(Ct,ct),c[Dt+_]=rt.a,c[Ot+_]=rt.b,Lt(Wt,Ft),c[ce+_]=rt.a,c[kt+_]=rt.b)}if(S&Z){const Ot=Dt+lt;W?ut(c[Dt+_],c[Ot+_]):Lt(c[Dt+_],c[Ot+_]),Ct=rt.a,c[Ot+_]=rt.b,c[Dt+_]=Ct}}if(I&Z){let Dt=tt;const At=tt+R*(S-J);for(;Dt<=At;Dt+=ft){const Ot=Dt+ht;W?ut(c[Dt+_],c[Ot+_]):Lt(c[Dt+_],c[Ot+_]),Ct=rt.a,c[Ot+_]=rt.b,c[Dt+_]=Ct}}J=Z,Z>>=1}return tt}function Nt(c,_,S,R,I,G,U,W,Y){let Z=0,J=0;const tt=U,j=Math.trunc(R.value+(I+7)/8);for(;R.value<j;)for(bt(Z,J,S,R),Z=Rt.c,J=Rt.lc;J>=14;){const xt=Z>>J-14&16383,ht=_[xt];if(ht.len)J-=ht.len,re(ht.lit,G,Z,J,S,R,W,Y,tt),Z=zt.c,J=zt.lc;else{if(!ht.p)throw new Error("hufDecode issues");let ft;for(ft=0;ft<ht.lit;ft++){const Ct=ot(c[ht.p[ft]]);for(;J<Ct&&R.value<j;)bt(Z,J,S,R),Z=Rt.c,J=Rt.lc;if(J>=Ct&&it(c[ht.p[ft]])==(Z>>J-Ct&(1<<Ct)-1)){J-=Ct,re(ht.p[ft],G,Z,J,S,R,W,Y,tt),Z=zt.c,J=zt.lc;break}}if(ft==ht.lit)throw new Error("hufDecode issues")}}const lt=8-I&7;for(Z>>=lt,J-=lt;J>0;){const xt=_[Z<<14-J&16383];if(xt.len)J-=xt.len,re(xt.lit,G,Z,J,S,R,W,Y,tt),Z=zt.c,J=zt.lc;else throw new Error("hufDecode issues")}return!0}function ie(c,_,S,R,I,G){const U={value:0},W=S.value,Y=gt(_,S),Z=gt(_,S);S.value+=4;const J=gt(_,S);if(S.value+=4,Y<0||Y>=65537||Z<0||Z>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const tt=new Array(65537),j=new Array(16384);F(j);const lt=R-(S.value-W);if(q(c,S,lt,Y,Z,tt),J>8*(R-(S.value-W)))throw new Error("Something wrong with hufUncompress");_t(tt,Y,Z,j),Nt(tt,j,c,S,J,Z,G,I,U)}function te(c,_,S){for(let R=0;R<S;++R)_[R]=c[_[R]]}function ne(c){for(let _=1;_<c.length;_++){const S=c[_-1]+c[_]-128;c[_]=S}}function he(c,_){let S=0,R=Math.floor((c.length+1)/2),I=0;const G=c.length-1;for(;!(I>G||(_[I++]=c[S++],I>G));)_[I++]=c[R++]}function se(c){let _=c.byteLength;const S=new Array;let R=0;const I=new DataView(c);for(;_>0;){const G=I.getInt8(R++);if(G<0){const U=-G;_-=U+1;for(let W=0;W<U;W++)S.push(I.getUint8(R++))}else{const U=G;_-=2;const W=I.getUint8(R++);for(let Y=0;Y<U+1;Y++)S.push(W)}}return S}function Le(c,_,S,R,I,G){let U=new DataView(G.buffer);const W=S[c.idx[0]].width,Y=S[c.idx[0]].height,Z=3,J=Math.floor(W/8),tt=Math.ceil(W/8),j=Math.ceil(Y/8),lt=W-(tt-1)*8,xt=Y-(j-1)*8,ht={value:0},ft=new Array(Z),Ct=new Array(Z),ct=new Array(Z),Wt=new Array(Z),Ft=new Array(Z);for(let At=0;At<Z;++At)Ft[At]=_[c.idx[At]],ft[At]=At<1?0:ft[At-1]+tt*j,Ct[At]=new Float32Array(64),ct[At]=new Uint16Array(64),Wt[At]=new Uint16Array(tt*64);for(let At=0;At<j;++At){let Ot=8;At==j-1&&(Ot=xt);let ce=8;for(let Bt=0;Bt<tt;++Bt){Bt==tt-1&&(ce=lt);for(let $t=0;$t<Z;++$t)ct[$t].fill(0),ct[$t][0]=I[ft[$t]++],Xe(ht,R,ct[$t]),X(ct[$t],Ct[$t]),Ce(Ct[$t]);le(Ct);for(let $t=0;$t<Z;++$t)pe(Ct[$t],Wt[$t],Bt*64)}let kt=0;for(let Bt=0;Bt<Z;++Bt){const $t=S[c.idx[Bt]].type;for(let jt=8*At;jt<8*At+Ot;++jt){kt=Ft[Bt][jt];for(let Pe=0;Pe<J;++Pe){const fe=Pe*64+(jt&7)*8;U.setUint16(kt+0*2*$t,Wt[Bt][fe+0],!0),U.setUint16(kt+1*2*$t,Wt[Bt][fe+1],!0),U.setUint16(kt+2*2*$t,Wt[Bt][fe+2],!0),U.setUint16(kt+3*2*$t,Wt[Bt][fe+3],!0),U.setUint16(kt+4*2*$t,Wt[Bt][fe+4],!0),U.setUint16(kt+5*2*$t,Wt[Bt][fe+5],!0),U.setUint16(kt+6*2*$t,Wt[Bt][fe+6],!0),U.setUint16(kt+7*2*$t,Wt[Bt][fe+7],!0),kt+=8*2*$t}}if(J!=tt)for(let jt=8*At;jt<8*At+Ot;++jt){const Pe=Ft[Bt][jt]+8*J*2*$t,fe=J*64+(jt&7)*8;for(let ln=0;ln<ce;++ln)U.setUint16(Pe+ln*2*$t,Wt[Bt][fe+ln],!0)}}}const Dt=new Uint16Array(W);U=new DataView(G.buffer);for(let At=0;At<Z;++At){S[c.idx[At]].decoded=!0;const Ot=S[c.idx[At]].type;if(S[At].type==2)for(let ce=0;ce<Y;++ce){const kt=Ft[At][ce];for(let Bt=0;Bt<W;++Bt)Dt[Bt]=U.getUint16(kt+Bt*2*Ot,!0);for(let Bt=0;Bt<W;++Bt)U.setFloat32(kt+Bt*2*Ot,$(Dt[Bt]),!0)}}}function Me(c,_,S,R,I,G){const U=new DataView(G.buffer),W=S[c],Y=W.width,Z=W.height,J=Math.ceil(Y/8),tt=Math.ceil(Z/8),j=Math.floor(Y/8),lt=Y-(J-1)*8,xt=Z-(tt-1)*8,ht={value:0};let ft=0;const Ct=new Float32Array(64),ct=new Uint16Array(64),Wt=new Uint16Array(J*64);for(let Ft=0;Ft<tt;++Ft){let Dt=8;Ft==tt-1&&(Dt=xt);for(let At=0;At<J;++At)ct.fill(0),ct[0]=I[ft++],Xe(ht,R,ct),X(ct,Ct),Ce(Ct),pe(Ct,Wt,At*64);for(let At=8*Ft;At<8*Ft+Dt;++At){let Ot=_[c][At];for(let ce=0;ce<j;++ce){const kt=ce*64+(At&7)*8;for(let Bt=0;Bt<8;++Bt)U.setUint16(Ot+Bt*2*W.type,Wt[kt+Bt],!0);Ot+=8*2*W.type}if(J!=j){const ce=j*64+(At&7)*8;for(let kt=0;kt<lt;++kt)U.setUint16(Ot+kt*2*W.type,Wt[ce+kt],!0)}}}W.decoded=!0}function Xe(c,_,S){let R,I=1;for(;I<64;)R=_[c.value],R==65280?I=64:R>>8==255?I+=R&255:(S[I]=R,I++),c.value++}function X(c,_){_[0]=$(c[0]),_[1]=$(c[1]),_[2]=$(c[5]),_[3]=$(c[6]),_[4]=$(c[14]),_[5]=$(c[15]),_[6]=$(c[27]),_[7]=$(c[28]),_[8]=$(c[2]),_[9]=$(c[4]),_[10]=$(c[7]),_[11]=$(c[13]),_[12]=$(c[16]),_[13]=$(c[26]),_[14]=$(c[29]),_[15]=$(c[42]),_[16]=$(c[3]),_[17]=$(c[8]),_[18]=$(c[12]),_[19]=$(c[17]),_[20]=$(c[25]),_[21]=$(c[30]),_[22]=$(c[41]),_[23]=$(c[43]),_[24]=$(c[9]),_[25]=$(c[11]),_[26]=$(c[18]),_[27]=$(c[24]),_[28]=$(c[31]),_[29]=$(c[40]),_[30]=$(c[44]),_[31]=$(c[53]),_[32]=$(c[10]),_[33]=$(c[19]),_[34]=$(c[23]),_[35]=$(c[32]),_[36]=$(c[39]),_[37]=$(c[45]),_[38]=$(c[52]),_[39]=$(c[54]),_[40]=$(c[20]),_[41]=$(c[22]),_[42]=$(c[33]),_[43]=$(c[38]),_[44]=$(c[46]),_[45]=$(c[51]),_[46]=$(c[55]),_[47]=$(c[60]),_[48]=$(c[21]),_[49]=$(c[34]),_[50]=$(c[37]),_[51]=$(c[47]),_[52]=$(c[50]),_[53]=$(c[56]),_[54]=$(c[59]),_[55]=$(c[61]),_[56]=$(c[35]),_[57]=$(c[36]),_[58]=$(c[48]),_[59]=$(c[49]),_[60]=$(c[57]),_[61]=$(c[58]),_[62]=$(c[62]),_[63]=$(c[63])}function Ce(c){const _=.5*Math.cos(.7853975),S=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),G=.5*Math.cos(5*3.14159/16),U=.5*Math.cos(3*3.14159/8),W=.5*Math.cos(7*3.14159/16),Y=new Array(4),Z=new Array(4),J=new Array(4),tt=new Array(4);for(let j=0;j<8;++j){const lt=j*8;Y[0]=R*c[lt+2],Y[1]=U*c[lt+2],Y[2]=R*c[lt+6],Y[3]=U*c[lt+6],Z[0]=S*c[lt+1]+I*c[lt+3]+G*c[lt+5]+W*c[lt+7],Z[1]=I*c[lt+1]-W*c[lt+3]-S*c[lt+5]-G*c[lt+7],Z[2]=G*c[lt+1]-S*c[lt+3]+W*c[lt+5]+I*c[lt+7],Z[3]=W*c[lt+1]-G*c[lt+3]+I*c[lt+5]-S*c[lt+7],J[0]=_*(c[lt+0]+c[lt+4]),J[3]=_*(c[lt+0]-c[lt+4]),J[1]=Y[0]+Y[3],J[2]=Y[1]-Y[2],tt[0]=J[0]+J[1],tt[1]=J[3]+J[2],tt[2]=J[3]-J[2],tt[3]=J[0]-J[1],c[lt+0]=tt[0]+Z[0],c[lt+1]=tt[1]+Z[1],c[lt+2]=tt[2]+Z[2],c[lt+3]=tt[3]+Z[3],c[lt+4]=tt[3]-Z[3],c[lt+5]=tt[2]-Z[2],c[lt+6]=tt[1]-Z[1],c[lt+7]=tt[0]-Z[0]}for(let j=0;j<8;++j)Y[0]=R*c[16+j],Y[1]=U*c[16+j],Y[2]=R*c[48+j],Y[3]=U*c[48+j],Z[0]=S*c[8+j]+I*c[24+j]+G*c[40+j]+W*c[56+j],Z[1]=I*c[8+j]-W*c[24+j]-S*c[40+j]-G*c[56+j],Z[2]=G*c[8+j]-S*c[24+j]+W*c[40+j]+I*c[56+j],Z[3]=W*c[8+j]-G*c[24+j]+I*c[40+j]-S*c[56+j],J[0]=_*(c[j]+c[32+j]),J[3]=_*(c[j]-c[32+j]),J[1]=Y[0]+Y[3],J[2]=Y[1]-Y[2],tt[0]=J[0]+J[1],tt[1]=J[3]+J[2],tt[2]=J[3]-J[2],tt[3]=J[0]-J[1],c[0+j]=tt[0]+Z[0],c[8+j]=tt[1]+Z[1],c[16+j]=tt[2]+Z[2],c[24+j]=tt[3]+Z[3],c[32+j]=tt[3]-Z[3],c[40+j]=tt[2]-Z[2],c[48+j]=tt[1]-Z[1],c[56+j]=tt[0]-Z[0]}function le(c){for(let _=0;_<64;++_){const S=c[0][_],R=c[1][_],I=c[2][_];c[0][_]=S+1.5747*I,c[1][_]=S-.1873*R-.4682*I,c[2][_]=S+1.8556*R}}function pe(c,_,S){for(let R=0;R<64;++R)_[S+R]=Pn.toHalfFloat(wt(c[R]))}function wt(c){return c<=1?Math.sign(c)*Math.pow(Math.abs(c),2.2):Math.sign(c)*Math.pow(w,Math.abs(c)-1)}function ve(c){return new DataView(c.array.buffer,c.offset.value,c.size)}function L(c){const _=c.viewer.buffer.slice(c.offset.value,c.offset.value+c.size),S=new Uint8Array(se(_)),R=new Uint8Array(S.length);return ne(S),he(S,R),new DataView(R.buffer)}function E(c){const _=c.array.slice(c.offset.value,c.offset.value+c.size),S=er(_),R=new Uint8Array(S.length);return ne(S),he(S,R),new DataView(R.buffer)}function K(c){const _=c.viewer,S={value:c.offset.value},R=new Uint16Array(c.columns*c.lines*(c.inputChannels.length*c.type)),I=new Uint8Array(8192);let G=0;const U=new Array(c.inputChannels.length);for(let xt=0,ht=c.inputChannels.length;xt<ht;xt++)U[xt]={},U[xt].start=G,U[xt].end=U[xt].start,U[xt].nx=c.columns,U[xt].ny=c.lines,U[xt].size=c.type,G+=U[xt].nx*U[xt].ny*U[xt].size;const W=nt(_,S),Y=nt(_,S);if(Y>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(W<=Y)for(let xt=0;xt<Y-W+1;xt++)I[xt+W]=Yt(_,S);const Z=new Uint16Array(65536),J=D(I,Z),tt=gt(_,S);ie(c.array,_,S,tt,R,G);for(let xt=0;xt<c.inputChannels.length;++xt){const ht=U[xt];for(let ft=0;ft<U[xt].size;++ft)Et(R,ht.start+ft,ht.nx,ht.size,ht.ny,ht.nx*ht.size,J)}te(Z,R,G);let j=0;const lt=new Uint8Array(R.buffer.byteLength);for(let xt=0;xt<c.lines;xt++)for(let ht=0;ht<c.inputChannels.length;ht++){const ft=U[ht],Ct=ft.nx*ft.size,ct=new Uint8Array(R.buffer,ft.end*2,Ct*2);lt.set(ct,j),j+=Ct*2,ft.end+=Ct}return new DataView(lt.buffer)}function st(c){const _=c.array.slice(c.offset.value,c.offset.value+c.size),S=er(_),R=c.inputChannels.length*c.lines*c.columns*c.totalBytes,I=new ArrayBuffer(R),G=new DataView(I);let U=0,W=0;const Y=new Array(4);for(let Z=0;Z<c.lines;Z++)for(let J=0;J<c.inputChannels.length;J++){let tt=0;switch(c.inputChannels[J].pixelType){case 1:Y[0]=U,Y[1]=Y[0]+c.columns,U=Y[1]+c.columns;for(let lt=0;lt<c.columns;++lt){const xt=S[Y[0]++]<<8|S[Y[1]++];tt+=xt,G.setUint16(W,tt,!0),W+=2}break;case 2:Y[0]=U,Y[1]=Y[0]+c.columns,Y[2]=Y[1]+c.columns,U=Y[2]+c.columns;for(let lt=0;lt<c.columns;++lt){const xt=S[Y[0]++]<<24|S[Y[1]++]<<16|S[Y[2]++]<<8;tt+=xt,G.setUint32(W,tt,!0),W+=4}break}}return G}function pt(c){const _=c.array;let S=c.offset.value;const R=c.columns,I=c.lines,G=c.inputChannels,U=c.totalBytes,W=ke.compression==="B44A_COMPRESSION",Y=new Uint8Array(I*R*U),Z=new Uint16Array(16);let J=0;for(let tt=0;tt<G.length;tt++){const j=G[tt],lt=j.pixelType*2,xt=Math.ceil(R/j.xSampling),ht=Math.ceil(I/j.ySampling),ft=j.xSampling===1&&j.ySampling===1;if(j.pixelType!==1){for(let Wt=0;Wt<ht;Wt++)if(ft){const Ft=Wt*R*U+J*R;for(let Dt=0;Dt<xt*lt;Dt++)Y[Ft+Dt]=_[S++]}else S+=xt*lt;J+=lt;continue}const Ct=Math.ceil(xt/4),ct=Math.ceil(ht/4);for(let Wt=0;Wt<ct;Wt++)for(let Ft=0;Ft<Ct;Ft++){if(W&&_[S+2]>=52){const Dt=_[S]<<8|_[S+1],At=Dt&32768?Dt&32767:~Dt&65535;Z.fill(At),S+=3}else{const Dt=_[S]<<8|_[S+1],At=_[S+2]>>2,Ot=32<<At,ce=Dt+((_[S+2]<<4|_[S+3]>>4)&63)*(1<<At)-Ot&65535,kt=ce+((_[S+3]<<2|_[S+4]>>6)&63)*(1<<At)-Ot&65535,Bt=kt+(_[S+4]&63)*(1<<At)-Ot&65535,$t=Dt+(_[S+5]>>2&63)*(1<<At)-Ot&65535,jt=ce+((_[S+5]<<4|_[S+6]>>4)&63)*(1<<At)-Ot&65535,Pe=kt+((_[S+6]<<2|_[S+7]>>6)&63)*(1<<At)-Ot&65535,fe=Bt+(_[S+7]&63)*(1<<At)-Ot&65535,ln=$t+(_[S+8]>>2&63)*(1<<At)-Ot&65535,Wi=jt+((_[S+8]<<4|_[S+9]>>4)&63)*(1<<At)-Ot&65535,Gs=Pe+((_[S+9]<<2|_[S+10]>>6)&63)*(1<<At)-Ot&65535,Bn=fe+(_[S+10]&63)*(1<<At)-Ot&65535,Pi=ln+(_[S+11]>>2&63)*(1<<At)-Ot&65535,Dr=Wi+((_[S+11]<<4|_[S+12]>>4)&63)*(1<<At)-Ot&65535,Lr=Gs+((_[S+12]<<2|_[S+13]>>6)&63)*(1<<At)-Ot&65535,Ur=Bn+(_[S+13]&63)*(1<<At)-Ot&65535,Ws=[Dt,$t,ln,Pi,ce,jt,Wi,Dr,kt,Pe,Gs,Lr,Bt,fe,Bn,Ur];for(let Xi=0;Xi<16;Xi++)Z[Xi]=Ws[Xi]&32768?Ws[Xi]&32767:~Ws[Xi]&65535;S+=14}if(j.pLinear){if(N===null){N=new Uint16Array(65536);for(let Dt=0;Dt<65536;Dt++)if((Dt&31744)===31744||Dt>32768)N[Dt]=0;else{const At=$(Dt);N[Dt]=At<=0?0:Pn.toHalfFloat(8*Math.log(At))}}for(let Dt=0;Dt<16;Dt++)Z[Dt]=N[Z[Dt]]}for(let Dt=0;Dt<4;Dt++){const At=Wt*4+Dt;if(!(At>=ht))for(let Ot=0;Ot<4;Ot++){const ce=Ft*4+Ot;if(ce>=xt)continue;const kt=Z[Dt*4+Ot];for(let Bt=0;Bt<j.ySampling;Bt++){const $t=At*j.ySampling+Bt;if(!($t>=I))for(let jt=0;jt<j.xSampling;jt++){const Pe=ce*j.xSampling+jt;if(Pe>=R)continue;const fe=$t*R*U+J*R+Pe*2;Y[fe]=kt&255,Y[fe+1]=kt>>8&255}}}}}J+=2}return new DataView(Y.buffer)}function vt(c){const _=c.viewer,S={value:c.offset.value},R=new Uint8Array(c.columns*c.lines*(c.inputChannels.length*c.type*2)),I={version:Ht(_,S),unknownUncompressedSize:Ht(_,S),unknownCompressedSize:Ht(_,S),acCompressedSize:Ht(_,S),dcCompressedSize:Ht(_,S),rleCompressedSize:Ht(_,S),rleUncompressedSize:Ht(_,S),rleRawSize:Ht(_,S),totalAcUncompressedCount:Ht(_,S),totalDcUncompressedCount:Ht(_,S),acCompression:Ht(_,S)};if(I.version<2)throw new Error("EXRLoader.parse: "+ke.compression+" version "+I.version+" is unsupported");const G=new Array;let U=nt(_,S)-2;for(;U>0;){const ht=Mt(_.buffer,S),ft=Yt(_,S),Ct=ft>>2&3,ct=(ft>>4)-1,Wt=new Int8Array([ct])[0],Ft=Yt(_,S);G.push({name:ht,index:Wt,type:Ft,compression:Ct}),U-=ht.length+3}const W=ke.channels,Y=new Array(c.inputChannels.length);for(let ht=0;ht<c.inputChannels.length;++ht){const ft=Y[ht]={},Ct=W[ht];ft.name=Ct.name,ft.compression=0,ft.decoded=!1,ft.type=Ct.pixelType,ft.pLinear=Ct.pLinear,ft.width=c.columns,ft.height=c.lines}const Z={idx:new Array(3)};for(let ht=0;ht<c.inputChannels.length;++ht){const ft=Y[ht],Ct=ft.name.lastIndexOf("."),ct=Ct>=0?ft.name.substring(Ct+1):ft.name;for(let Wt=0;Wt<G.length;++Wt){const Ft=G[Wt];ct===Ft.name&&ft.type===Ft.type&&(ft.compression=Ft.compression,Ft.index>=0&&(Z.idx[Ft.index]=ht),ft.offset=ht)}}let J,tt,j;if(I.acCompressedSize>0)switch(I.acCompression){case 0:J=new Uint16Array(I.totalAcUncompressedCount),ie(c.array,_,S,I.acCompressedSize,J,I.totalAcUncompressedCount);break;case 1:const ht=c.array.slice(S.value,S.value+I.totalAcUncompressedCount),ft=er(ht);J=new Uint16Array(ft.buffer),S.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const ht={array:c.array,offset:S,size:I.dcCompressedSize};tt=new Uint16Array(E(ht).buffer),S.value+=I.dcCompressedSize}if(I.rleRawSize>0){const ht=c.array.slice(S.value,S.value+I.rleCompressedSize),ft=er(ht);j=se(ft.buffer),S.value+=I.rleCompressedSize}let lt=0;const xt=new Array(Y.length);for(let ht=0;ht<xt.length;++ht)xt[ht]=new Array;for(let ht=0;ht<c.lines;++ht)for(let ft=0;ft<Y.length;++ft)xt[ft].push(lt),lt+=Y[ft].width*c.type*2;Z.idx[0]!==void 0&&Y[Z.idx[0]]&&Le(Z,xt,Y,J,tt,R);for(let ht=0;ht<Y.length;++ht){const ft=Y[ht];if(!ft.decoded)switch(ft.compression){case 2:let Ct=0,ct=0;for(let Wt=0;Wt<c.lines;++Wt){let Ft=xt[ht][Ct];for(let Dt=0;Dt<ft.width;++Dt){for(let At=0;At<2*ft.type;++At)R[Ft++]=j[ct+At*ft.width*ft.height];ct++}Ct++}break;case 1:Me(ht,xt,Y,J,tt,R);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function Mt(c,_){const S=new Uint8Array(c);let R=0;for(;S[_.value+R]!=0;)R+=1;const I=new TextDecoder().decode(S.slice(_.value,_.value+R));return _.value=_.value+R+1,I}function et(c,_,S){const R=new TextDecoder().decode(new Uint8Array(c).slice(_.value,_.value+S));return _.value=_.value+S,R}function at(c,_){const S=Tt(c,_),R=gt(c,_);return[S,R]}function It(c,_){const S=gt(c,_),R=gt(c,_);return[S,R]}function Tt(c,_){const S=c.getInt32(_.value,!0);return _.value=_.value+4,S}function gt(c,_){const S=c.getUint32(_.value,!0);return _.value=_.value+4,S}function yt(c,_){const S=c[_.value];return _.value=_.value+1,S}function Yt(c,_){const S=c.getUint8(_.value);return _.value=_.value+1,S}const Ht=function(c,_){const S=Number(c.getBigInt64(_.value,!0));return _.value+=8,S};function Zt(c,_){const S=c.getFloat32(_.value,!0);return _.value+=4,S}function H(c,_){return Pn.toHalfFloat(Zt(c,_))}function $(c){const _=(c&31744)>>10,S=c&1023;return(c>>15?-1:1)*(_?_===31?S?NaN:1/0:Math.pow(2,_-15)*(1+S/1024):6103515625e-14*(S/1024))}function nt(c,_){const S=c.getUint16(_.value,!0);return _.value+=2,S}function Ut(c,_){return $(nt(c,_))}function St(c,_,S,R){const I=S.value,G=[];for(;S.value<I+R-1;){const U=Mt(_,S),W=Tt(c,S),Y=Yt(c,S);S.value+=3;const Z=Tt(c,S),J=Tt(c,S);G.push({name:U,pixelType:W,pLinear:Y,xSampling:Z,ySampling:J})}return S.value+=1,G}function dt(c,_){const S=Zt(c,_),R=Zt(c,_),I=Zt(c,_),G=Zt(c,_),U=Zt(c,_),W=Zt(c,_),Y=Zt(c,_),Z=Zt(c,_);return{redX:S,redY:R,greenX:I,greenY:G,blueX:U,blueY:W,whiteX:Y,whiteY:Z}}function Gt(c,_){const S=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=Yt(c,_);return S[R]}function Qt(c,_){const S=Tt(c,_),R=Tt(c,_),I=Tt(c,_),G=Tt(c,_);return{xMin:S,yMin:R,xMax:I,yMax:G}}function Te(c,_){const S=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=Yt(c,_);return S[R]}function de(c,_){const S=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=Yt(c,_);return S[R]}function bn(c,_){const S=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],I=gt(c,_),G=gt(c,_),U=Yt(c,_);return{xSize:I,ySize:G,levelMode:S[U&15],roundingMode:R[U>>4]}}function gn(c,_){const S=Zt(c,_),R=Zt(c,_);return[S,R]}function Vs(c,_){const S=Zt(c,_),R=Zt(c,_),I=Zt(c,_);return[S,R,I]}function eo(c,_,S,R,I){if(R==="string"||R==="stringvector"||R==="iccProfile")return et(_,S,I);if(R==="chlist")return St(c,_,S,I);if(R==="chromaticities")return dt(c,S);if(R==="compression")return Gt(c,S);if(R==="box2i")return Qt(c,S);if(R==="envmap")return de(c,S);if(R==="tiledesc")return bn(c,S);if(R==="lineOrder")return Te(c,S);if(R==="float")return Zt(c,S);if(R==="v2f")return gn(c,S);if(R==="v3f")return Vs(c,S);if(R==="int")return Tt(c,S);if(R==="rational")return at(c,S);if(R==="timecode")return It(c,S);if(R==="preview"||R==="deepImageState"||R==="idmanifest")return S.value+=I,"skipped";S.value+=I}function Er(c,_){const S=Math.log2(c);return _=="ROUND_DOWN"?Math.floor(S):Math.ceil(S)}function Tr(c,_,S){let R=0;switch(c.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=Er(Math.max(_,S),c.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function On(c,_,S,R){const I=new Array(c);for(let G=0;G<c;G++){const U=1<<G;let W=_/U|0;R=="ROUND_UP"&&W*U<_&&(W+=1);const Y=Math.max(W,1);I[G]=(Y+S-1)/S|0}return I}function Hs(){const c=this,_=c.offset,S={value:0};for(let R=0;R<c.tileCount;R++){const I=Tt(c.viewer,_),G=Tt(c.viewer,_);_.value+=8,c.size=gt(c.viewer,_);const U=I*c.blockWidth,W=G*c.blockHeight;c.columns=U+c.blockWidth>c.width?c.width-U:c.blockWidth,c.lines=W+c.blockHeight>c.height?c.height-W:c.blockHeight;const Y=c.columns*c.totalBytes,J=c.size<c.lines*Y?c.uncompress(c):ve(c);_.value+=c.size;for(let tt=0;tt<c.lines;tt++){const j=tt*c.columns*c.totalBytes;for(let lt=0;lt<c.inputChannels.length;lt++){const xt=ke.channels[lt].name,ht=c.channelByteOffsets[xt]*c.columns,ft=c.decodeChannels[xt];if(ft===void 0)continue;S.value=j+ht;const Ct=(c.height-(1+W+tt))*c.outLineWidth;for(let ct=0;ct<c.columns;ct++){const Wt=Ct+(ct+U)*c.outputChannels+ft;c.byteArray[Wt]=c.getter(J,S)}}}}}function Ar(){const c=this,_=c.offset,S={value:0};for(let R=0;R<c.height/c.blockHeight;R++){const I=Tt(c.viewer,_)-ke.dataWindow.yMin;c.size=gt(c.viewer,_),c.lines=I+c.blockHeight>c.height?c.height-I:c.blockHeight;const G=c.columns*c.totalBytes,W=c.size<c.lines*G?c.uncompress(c):ve(c);_.value+=c.size;for(let Y=0;Y<c.blockHeight;Y++){const Z=R*c.blockHeight,J=Y+c.scanOrder(Z);if(J>=c.height)continue;const tt=Y*G,j=(c.height-1-J)*c.outLineWidth;for(let lt=0;lt<c.inputChannels.length;lt++){const xt=ke.channels[lt].name,ht=c.channelByteOffsets[xt]*c.columns,ft=c.decodeChannels[xt];if(ft!==void 0){S.value=tt+ht;for(let Ct=0;Ct<c.columns;Ct++){const ct=j+Ct*c.outputChannels+ft;c.byteArray[ct]=c.getter(W,S)}}}}}}function wr(){const c=this,_=c.chunkOffsets,S={value:0};for(let R=0;R<_.length;R++){const I={value:_[R]};I.value+=4;const G=Tt(c.viewer,I)-ke.dataWindow.yMin;c.size=gt(c.viewer,I),c.lines=G+c.blockHeight>c.height?c.height-G:c.blockHeight;const U=c.columns*c.totalBytes,W=c.size<c.lines*U,Y=c.offset;c.offset=I;const Z=W?c.uncompress(c):ve(c);c.offset=Y;for(let J=0;J<c.blockHeight;J++){const tt=J+G;if(tt>=c.height)continue;const j=J*U,lt=(c.height-1-tt)*c.outLineWidth;for(let xt=0;xt<c.inputChannels.length;xt++){const ht=ke.channels[xt].name,ft=c.channelByteOffsets[ht]*c.columns,Ct=c.decodeChannels[ht];if(Ct!==void 0){S.value=j+ft;for(let ct=0;ct<c.columns;ct++){const Wt=lt+ct*c.outputChannels+Ct;c.byteArray[Wt]=c.getter(Z,S)}}}}}}function Ri(c,_,S,R){if(S===0)return null;const I=c.slice(_,_+S);switch(R){case"NO_COMPRESSION":return new DataView(I.buffer,I.byteOffset,I.byteLength);case"RLE_COMPRESSION":{const G=new Uint8Array(se(I.buffer.slice(I.byteOffset,I.byteOffset+I.byteLength))),U=new Uint8Array(G.length);return ne(G),he(G,U),new DataView(U.buffer)}case"ZIPS_COMPRESSION":{const G=er(I),U=new Uint8Array(G.length);return ne(G),he(G,U),new DataView(U.buffer)}default:throw new Error("EXRLoader.parse: "+R+" is unsupported for deep data")}}function Rr(){const c=this,_=c.chunkOffsets,S=c.width,R=c.height,I=c.deepChannels,G=ke.compression,U=c.multiPart,W=c.decodeChannels,Y=c.outputChannels,Z=c.byteArray instanceof Uint16Array;let J=-1;for(let tt=0;tt<I.length;tt++)if(I[tt].name==="A"){J=tt;break}for(let tt=0;tt<_.length;tt++){const j={value:_[tt]};U&&(j.value+=4);const lt=Tt(c.viewer,j)-ke.dataWindow.yMin,xt=Ht(c.viewer,j),ht=Ht(c.viewer,j);Ht(c.viewer,j);const ft=Ri(c.array,j.value,xt,G);if(j.value+=xt,ft===null)continue;const Ct=new Uint32Array(S);for(let Ot=0;Ot<S;Ot++)Ct[Ot]=ft.getUint32(Ot*4,!0);const ct=Ct[S-1];if(ct===0){j.value+=ht;continue}const Wt=Ri(c.array,j.value,ht,G),Ft=[];let Dt=0;for(let Ot=0;Ot<I.length;Ot++)Ft.push(Dt),Dt+=ct*I[Ot].bytesPerSample;const At=(R-1-lt)*c.outLineWidth;for(let Ot=0;Ot<S;Ot++){const ce=Ot===0?0:Ct[Ot-1],Bt=Ct[Ot]-ce;if(Bt===0)continue;const $t=new Float32Array(Y);let jt=0;for(let fe=0;fe<Bt;fe++){const ln=ce+fe,Wi=1-jt;if(Wi<=0)break;let Gs=1;if(J>=0){const Bn=I[J].bytesPerSample,Pi=Ft[J]+ln*Bn;Gs=Bn===2?$(Wt.getUint16(Pi,!0)):Wt.getFloat32(Pi,!0)}for(let Bn=0;Bn<I.length;Bn++){const Pi=I[Bn],Dr=W[Pi.name];if(Dr===void 0)continue;const Lr=Pi.bytesPerSample,Ur=Ft[Bn]+ln*Lr,Ws=Lr===2?$(Wt.getUint16(Ur,!0)):Wt.getFloat32(Ur,!0);$t[Dr]+=Ws*Wi}jt+=Gs*Wi}W.A!==void 0&&($t[W.A]=jt);const Pe=At+Ot*Y;for(let fe=0;fe<Y;fe++)c.byteArray[Pe+fe]=Z?Pn.toHalfFloat($t[fe]):$t[fe]}}}function Ci(c,_,S){const R={};let I=!1;for(;;){const G=Mt(_,S);if(G==="")break;I=!0;const U=Mt(_,S),W=gt(c,S),Y=eo(c,_,S,U,W);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):R[G]=Y}return I?R:null}function Cr(c,_,S){if(c.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const R=c.getUint8(4),I=c.getUint8(5),G={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)};S.value=8;const U=[];if(G.multiPart){for(;;){const W=Ci(c,_,S);if(W===null)break;W.version=R,W.spec=G,U.push(W)}if(U.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const W=Ci(c,_,S);W.version=R,W.spec=G,U.push(W)}return U}function Pr(c,_,S,R,I,G){const U={size:0,viewer:_,array:S,offset:R,width:c.dataWindow.xMax-c.dataWindow.xMin+1,height:c.dataWindow.yMax-c.dataWindow.yMin+1,inputChannels:c.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:xn};switch(c.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=ve;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=L;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=E;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=E;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=K;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=st;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":U.blockHeight=32,U.uncompress=pt;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=vt;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=vt;break;default:throw new Error("EXRLoader.parse: "+c.compression+" is unsupported")}const W={};for(const j of c.channels)switch(j.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":W[j.name]=!0,U.type=j.pixelType}let Y=!1,Z=!1;if(W.Y&&W.RY&&W.BY)U.outputChannels=4,U.yCbCr=!0;else if(W.R&&W.G&&W.B)U.outputChannels=4;else if(W.Y)U.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(U.outputChannels){case 4:G==Ae?(Y=!W.A,U.format=Ae,U.colorSpace=xn,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3}):G==fn?(U.format=fn,U.colorSpace=xn,U.outputChannels=2,U.decodeChannels={R:0,G:1}):G==Mi?(U.format=Mi,U.colorSpace=xn,U.outputChannels=1,U.decodeChannels={R:0}):Z=!0;break;case 1:G==Ae?(Y=!0,U.format=Ae,U.colorSpace=xn,U.outputChannels=4,U.shouldExpand=!0,U.decodeChannels={Y:0}):G==fn?(U.format=fn,U.colorSpace=xn,U.outputChannels=2,U.shouldExpand=!0,U.decodeChannels={Y:0}):G==Mi?(U.format=Mi,U.colorSpace=xn,U.outputChannels=1,U.decodeChannels={Y:0}):Z=!0;break;default:Z=!0}if(Z)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(U.yCbCr&&(U.format=Ae,U.outputChannels=4,U.decodeChannels={Y:0,RY:1,BY:2},Y=!0),U.type==1)switch(I){case Re:U.getter=Ut;break;case He:U.getter=nt;break}else if(U.type==2)switch(I){case Re:U.getter=Zt;break;case He:U.getter=H}else throw new Error("EXRLoader.parse: unsupported pixelType "+U.type+" for "+c.compression+".");U.columns=U.width;const J=U.width*U.height*U.outputChannels;switch(I){case Re:U.byteArray=new Float32Array(J),Y&&U.byteArray.fill(1,0,J);break;case He:U.byteArray=new Uint16Array(J),Y&&U.byteArray.fill(15360,0,J);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let tt=0;for(const j of c.channels)U.decodeChannels[j.name]!==void 0&&(U.channelByteOffsets[j.name]=tt),tt+=j.pixelType*2;if(U.totalBytes=tt,U.outLineWidth=U.width*U.outputChannels,c.lineOrder==="INCREASING_Y"?U.scanOrder=j=>j:U.scanOrder=j=>U.height-1-j,c.spec.deepFormat){U.deepChannels=[];let j=0;for(const lt of c.channels){const xt=lt.pixelType===0?4:lt.pixelType*2;U.deepChannels.push({name:lt.name,pixelType:lt.pixelType,bytesPerSample:xt}),j+=xt}U.deepBytesPerSample=j,U.chunkOffsets=c._chunkOffsets,U.multiPart=c.spec.multiPart,U.decode=Rr.bind(U)}else if(c.spec.singleTile){U.blockHeight=c.tiles.ySize,U.blockWidth=c.tiles.xSize;const j=Tr(c.tiles,U.width,U.height),lt=On(j,U.width,c.tiles.xSize,c.tiles.roundingMode),xt=On(j,U.height,c.tiles.ySize,c.tiles.roundingMode);U.tileCount=lt[0]*xt[0];for(let ht=0;ht<j;ht++)for(let ft=0;ft<xt[ht];ft++)for(let Ct=0;Ct<lt[ht];Ct++)Ht(_,R);U.decode=Hs.bind(U)}else if(c.spec.multiPart)U.blockWidth=U.width,U.chunkOffsets=c._chunkOffsets,U.decode=wr.bind(U);else{U.blockWidth=U.width;const j=Math.ceil(U.height/U.blockHeight);for(let lt=0;lt<j;lt++)Ht(_,R);U.decode=Ar.bind(U)}return U}const Vi={value:0},Hi=new DataView(t),no=new Uint8Array(t),Gi=Cr(Hi,t,Vi),Ir=Math.max(0,Math.min(this.part,Gi.length-1)),ke=Gi[Ir];if(ke.spec.multiPart||ke.spec.deepFormat)for(let c=0;c<Gi.length;c++){const _=Gi[c].chunkCount;if(c===Ir){ke._chunkOffsets=[];for(let S=0;S<_;S++)ke._chunkOffsets.push(Ht(Hi,Vi))}else for(let S=0;S<_;S++)Ht(Hi,Vi)}const nn=Pr(ke,Hi,no,Vi,this.type,this.outputFormat);if(nn.decode(),nn.shouldExpand){const c=nn.byteArray;if(this.outputFormat==Ae)for(let _=0;_<c.length;_+=4)c[_+2]=c[_+1]=c[_];else if(this.outputFormat==fn)for(let _=0;_<c.length;_+=2)c[_+1]=c[_]}if(nn.yCbCr){const c=nn.byteArray,_=nn.width*nn.height;if(this.type===He)for(let S=0;S<_;S++){const R=S*4,I=$(c[R]),G=$(c[R+1]),U=$(c[R+2]),W=(1+G)*I,Y=(1+U)*I,Z=(I-W*.2126-Y*.0722)/.7152;c[R]=Pn.toHalfFloat(Math.max(0,W)),c[R+1]=Pn.toHalfFloat(Math.max(0,Z)),c[R+2]=Pn.toHalfFloat(Math.max(0,Y))}else for(let S=0;S<_;S++){const R=S*4,I=c[R],G=c[R+1],U=c[R+2],W=(1+G)*I,Y=(1+U)*I;c[R]=Math.max(0,W),c[R+1]=Math.max(0,(I-W*.2126-Y*.0722)/.7152),c[R+2]=Math.max(0,Y)}}return{header:ke,width:nn.width,height:nn.height,data:nn.byteArray,format:nn.format,colorSpace:nn.colorSpace,type:this.type}}setDataType(t){return this.type=t,this}setOutputFormat(t){return this.outputFormat=t,this}setPart(t){return this.part=t,this}load(t,e,n,s){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=be,a.magFilter=be,a.generateMipmaps=!1,a.flipY=!1,e&&e(a,o)}return super.load(t,r,n,s)}}function pv(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},u={},d=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let y=0,b=o.length;y<b;y++){const T=o[y],C=i.attributes[T];l[T]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const A=i.morphAttributes[T];A&&(u[T]||(u[T]=[]),A.forEach((P,v)=>{const w=new P.array.constructor(P.count*P.itemSize);u[T][v]=new P.constructor(w,P.itemSize,P.normalized)}))}const p=t*.5,x=Math.log10(1/t),M=Math.pow(10,x),g=p*M;for(let y=0;y<r;y++){const b=n?n.getX(y):y;let T="";for(let C=0,A=o.length;C<A;C++){const P=o[C],v=i.getAttribute(P),w=v.itemSize;for(let N=0;N<w;N++)T+=`${~~(v[f[N]](b)*M+g)},`}if(T in e)d.push(e[T]);else{for(let C=0,A=o.length;C<A;C++){const P=o[C],v=i.getAttribute(P),w=i.morphAttributes[P],N=v.itemSize,D=l[P],F=u[P];for(let z=0;z<N;z++){const k=f[z],O=h[z];if(D[O](a,v[k](b)),w)for(let V=0,q=w.length;V<q;V++)F[V][O](a,w[V][k](b))}}e[T]=a,d.push(a),a++}}const m=i.clone();for(const y in i.attributes){const b=l[y];if(m.setAttribute(y,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),y in u)for(let T=0;T<u[y].length;T++){const C=u[y][T];m.morphAttributes[y][T]=new C.constructor(C.array.slice(0,a*C.itemSize),C.itemSize,C.normalized)}}return m.setIndex(d),m}function eM(i,t){if(t===Wf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Gc||t===Xf){let e=i.getIndex();if(e===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===Gc)for(let a=1;a<=n;a++)s.push(e.getX(0)),s.push(e.getX(a)),s.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(e.getX(a)),s.push(e.getX(a+1)),s.push(e.getX(a+2))):(s.push(e.getX(a+2)),s.push(e.getX(a+1)),s.push(e.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}const uf=0,mv=1,gv=2,sh=2,Xo=1.25,rh=1,Ei=6*4+4+4,Qa=65535,_v=Math.pow(2,-24),Yo=Symbol("SKIP_GENERATION");function hf(i){return i.index?i.index.count:i.attributes.position.count}function ks(i){return hf(i)/3}function ff(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function xv(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=ff(e,n);i.setIndex(new We(s,1));for(let r=0;r<e;r++)s[r]=r}}function df(i,t){const e=ks(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(e,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function pf(i,t){if(!i.groups||!i.groups.length)return df(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const l of i.groups){const u=l.start/3,d=(l.start+l.count)/3;n.add(Math.max(r,u)),n.add(Math.min(a,d))}const o=Array.from(n.values()).sort((l,u)=>l-u);for(let l=0;l<o.length-1;l++){const u=o[l],d=o[l+1];e.push({offset:Math.floor(u),count:Math.floor(d-u)})}return e}function vv(i,t){const e=ks(i),n=pf(i,t).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),e!==r}function qo(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,u=-1/0,d=-1/0,f=1/0,h=1/0,p=1/0,x=-1/0,M=-1/0,g=-1/0;for(let m=t*6,y=(t+e)*6;m<y;m+=6){const b=i[m+0],T=i[m+1],C=b-T,A=b+T;C<r&&(r=C),A>l&&(l=A),b<f&&(f=b),b>x&&(x=b);const P=i[m+2],v=i[m+3],w=P-v,N=P+v;w<a&&(a=w),N>u&&(u=N),P<h&&(h=P),P>M&&(M=P);const D=i[m+4],F=i[m+5],z=D-F,k=D+F;z<o&&(o=z),k>d&&(d=k),D<p&&(p=D),D>g&&(g=D)}n[0]=r,n[1]=a,n[2]=o,n[3]=l,n[4]=u,n[5]=d,s[0]=f,s[1]=h,s[2]=p,s[3]=x,s[4]=M,s[5]=g}function yv(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=ks(i),o=s.normalized;let l;t===null?(l=new Float32Array(a*6*4),e=0,n=a):(l=t,e=e||0,n=n||a);const u=s.array,d=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let p=e;p<e+n;p++){const x=p*3,M=p*6;let g=x+0,m=x+1,y=x+2;r&&(g=r[g],m=r[m],y=r[y]),o||(g=g*f+d,m=m*f+d,y=y*f+d);for(let b=0;b<3;b++){let T,C,A;o?(T=s[h[b]](g),C=s[h[b]](m),A=s[h[b]](y)):(T=u[g+b],C=u[m+b],A=u[y+b]);let P=T;C<P&&(P=C),A<P&&(P=A);let v=T;C>v&&(v=C),A>v&&(v=A);const w=(v-P)/2,N=b*2;l[M+N+0]=P+w,l[M+N+1]=w+(Math.abs(P)+w)*_v}}return l}function Ie(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function ah(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function oh(i,t){t.set(i)}function lh(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function pa(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function nr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const ei=32,Mv=(i,t)=>i.candidate-t.candidate,_i=new Array(ei).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ma=new Float32Array(6);function Sv(i,t,e,n,s,r){let a=-1,o=0;if(r===uf)a=ah(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===mv)a=ah(i),a!==-1&&(o=bv(e,n,s,a));else if(r===gv){const l=nr(i);let u=Xo*s;const d=n*6,f=(n+s)*6;for(let h=0;h<3;h++){const p=t[h],g=(t[h+3]-p)/ei;if(s<ei/4){const m=[..._i];m.length=s;let y=0;for(let T=d;T<f;T+=6,y++){const C=m[y];C.candidate=e[T+2*h],C.count=0;const{bounds:A,leftCacheBounds:P,rightCacheBounds:v}=C;for(let w=0;w<3;w++)v[w]=1/0,v[w+3]=-1/0,P[w]=1/0,P[w+3]=-1/0,A[w]=1/0,A[w+3]=-1/0;pa(T,e,A)}m.sort(Mv);let b=s;for(let T=0;T<b;T++){const C=m[T];for(;T+1<b&&m[T+1].candidate===C.candidate;)m.splice(T+1,1),b--}for(let T=d;T<f;T+=6){const C=e[T+2*h];for(let A=0;A<b;A++){const P=m[A];C>=P.candidate?pa(T,e,P.rightCacheBounds):(pa(T,e,P.leftCacheBounds),P.count++)}}for(let T=0;T<b;T++){const C=m[T],A=C.count,P=s-C.count,v=C.leftCacheBounds,w=C.rightCacheBounds;let N=0;A!==0&&(N=nr(v)/l);let D=0;P!==0&&(D=nr(w)/l);const F=rh+Xo*(N*A+D*P);F<u&&(a=h,u=F,o=C.candidate)}}else{for(let b=0;b<ei;b++){const T=_i[b];T.count=0,T.candidate=p+g+b*g;const C=T.bounds;for(let A=0;A<3;A++)C[A]=1/0,C[A+3]=-1/0}for(let b=d;b<f;b+=6){let A=~~((e[b+2*h]-p)/g);A>=ei&&(A=ei-1);const P=_i[A];P.count++,pa(b,e,P.bounds)}const m=_i[ei-1];oh(m.bounds,m.rightCacheBounds);for(let b=ei-2;b>=0;b--){const T=_i[b],C=_i[b+1];lh(T.bounds,C.rightCacheBounds,T.rightCacheBounds)}let y=0;for(let b=0;b<ei-1;b++){const T=_i[b],C=T.count,A=T.bounds,v=_i[b+1].rightCacheBounds;C!==0&&(y===0?oh(A,ma):lh(A,ma,ma)),y+=C;let w=0,N=0;y!==0&&(w=nr(ma)/l);const D=s-y;D!==0&&(N=nr(v)/l);const F=rh+Xo*(w*y+N*D);F<u&&(a=h,u=F,o=T.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function bv(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}class Zo{constructor(){this.boundingData=new Float32Array(6)}}function Ev(i,t,e,n,s,r){let a=n,o=n+s-1;const l=r.pos,u=r.axis*2;for(;;){for(;a<=o&&e[a*6+u]<l;)a++;for(;a<=o&&e[o*6+u]>=l;)o--;if(a<o){for(let d=0;d<3;d++){let f=t[a*3+d];t[a*3+d]=t[o*3+d],t[o*3+d]=f}for(let d=0;d<6;d++){let f=e[a*6+d];e[a*6+d]=e[o*6+d],e[o*6+d]=f}a++,o--}else return a}}function Tv(i,t,e,n,s,r){let a=n,o=n+s-1;const l=r.pos,u=r.axis*2;for(;;){for(;a<=o&&e[a*6+u]<l;)a++;for(;a<=o&&e[o*6+u]>=l;)o--;if(a<o){let d=i[a];i[a]=i[o],i[o]=d;for(let f=0;f<6;f++){let h=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=h}a++,o--}else return a}}function Je(i,t){return t[i+15]===65535}function an(i,t){return t[i+6]}function dn(i,t){return t[i+14]}function yn(i){return i+8}function pn(i,t){return t[i+6]}function Tc(i,t){return t[i+7]}let mf,ur,Ua,gf;const Av=Math.pow(2,32);function tc(i){return"count"in i?1:1+tc(i.left)+tc(i.right)}function wv(i,t,e){return mf=new Float32Array(e),ur=new Uint32Array(e),Ua=new Uint16Array(e),gf=new Uint8Array(e),ec(i,t)}function ec(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)mf[e+a]=r[a];if(s)if(t.buffer){const a=t.buffer;gf.set(new Uint8Array(a),i);for(let o=i,l=i+a.byteLength;o<l;o+=Ei){const u=o/2;Je(u,Ua)||(ur[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return ur[e+6]=a,Ua[n+14]=o,Ua[n+15]=Qa,i+Ei}else{const a=t.left,o=t.right,l=t.splitAxis;let u;if(u=ec(i+Ei,a),u/4>Av)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ur[e+6]=u/4,u=ec(u,o),ur[e+7]=l,u}}function Rv(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,l=a.length;o<l;o++)a[o]=o;return a}function Cv(i,t,e,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:l,onProgress:u,indirect:d}=s,f=i._indirectBuffer,h=i.geometry,p=h.index?h.index.array:null,x=d?Tv:Ev,M=ks(h),g=new Float32Array(6);let m=!1;const y=new Zo;return qo(t,e,n,y.boundingData,g),T(y,e,n,g),y;function b(C){u&&u(C/M)}function T(C,A,P,v=null,w=0){if(!m&&w>=r&&(m=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),P<=o||w>=r)return b(A+P),C.offset=A,C.count=P,C;const N=Sv(C.boundingData,v,t,A,P,l);if(N.axis===-1)return b(A+P),C.offset=A,C.count=P,C;const D=x(f,p,t,A,P,N);if(D===A||D===A+P)b(A+P),C.offset=A,C.count=P;else{C.splitAxis=N.axis;const F=new Zo,z=A,k=D-A;C.left=F,qo(t,z,k,F.boundingData,g),T(F,z,k,g,w+1);const O=new Zo,V=D,q=P-k;C.right=O,qo(t,V,q,O.boundingData,g),T(O,V,q,g,w+1)}return C}}function Pv(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=Rv(e,t.useSharedArrayBuffer),vv(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||xv(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=yv(e),r=t.indirect?df(e,t.range):pf(e,t.range);i._roots=r.map(a=>{const o=Cv(i,s,a.offset,a.count,t),l=tc(o),u=new n(Ei*l);return wv(0,o,u),u})}class ci{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],l=t.dot(o);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}ci.prototype.setFromBox=function(){const i=new B;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){i.x=s.x*l+r.x*(1-l),i.y=s.y*u+r.y*(1-u),i.z=s.z*d+r.z*(1-d);const f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();const Iv=function(){const i=new B,t=new B,e=new B;return function(s,r,a){const o=s.start,l=i,u=r.start,d=t;e.subVectors(o,u),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(d),h=d.dot(l),p=d.dot(d),x=e.dot(l),g=l.dot(l)*p-h*h;let m,y;g!==0?m=(f*h-x*p)/g:m=0,y=(f+m*h)/p,a.x=m,a.y=y}}(),Ac=function(){const i=new Xt,t=new B,e=new B;return function(s,r,a,o){Iv(s,r,i);let l=i.x,u=i.y;if(l>=0&&l<=1&&u>=0&&u<=1){s.at(l,a),r.at(u,o);return}else if(l>=0&&l<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(u>=0&&u<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let d;l<0?d=s.start:d=s.end;let f;u<0?f=r.start:f=r.end;const h=t,p=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(d,!0,e),h.distanceToSquared(f)<=p.distanceToSquared(d)){a.copy(h),o.copy(f);return}else{a.copy(d),o.copy(p);return}}}}(),Dv=function(){const i=new B,t=new B,e=new Vn,n=new ai;return function(r,a){const{radius:o,center:l}=r,{a:u,b:d,c:f}=a;if(n.start=u,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=d,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const M=a.getPlane(e);if(Math.abs(M.distanceToPoint(l))<=o){const m=M.projectPoint(l,t);if(a.containsPoint(m))return!0}return!1}}(),Lv=1e-15;function jo(i){return Math.abs(i)<Lv}class Nn extends Ze{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new B),this.satBounds=new Array(4).fill().map(()=>new ci),this.points=[this.a,this.b,this.c],this.sphere=new Zn,this.plane=new Vn,this.needsUpdate=!0}intersectsSphere(t){return Dv(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],l=a[0];this.getNormal(o),l.setFromPoints(o,s);const u=r[1],d=a[1];u.subVectors(t,e),d.setFromPoints(u,s);const f=r[2],h=a[2];f.subVectors(e,n),h.setFromPoints(f,s);const p=r[3],x=a[3];p.subVectors(n,t),x.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}Nn.prototype.closestPointToSegment=function(){const i=new B,t=new B,e=new ai;return function(s,r=null,a=null){const{start:o,end:l}=s,u=this.points;let d,f=1/0;for(let h=0;h<3;h++){const p=(h+1)%3;e.start.copy(u[h]),e.end.copy(u[p]),Ac(e,s,i,t),d=i.distanceToSquared(t),d<f&&(f=d,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),d=o.distanceToSquared(i),d<f&&(f=d,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),d=l.distanceToSquared(i),d<f&&(f=d,r&&r.copy(i),a&&a.copy(l)),Math.sqrt(f)}}();Nn.prototype.intersectsTriangle=function(){const i=new Nn,t=new Array(3),e=new Array(3),n=new ci,s=new ci,r=new B,a=new B,o=new B,l=new B,u=new B,d=new ai,f=new ai,h=new ai,p=new B;function x(M,g,m){const y=M.points;let b=0,T=-1;for(let C=0;C<3;C++){const{start:A,end:P}=d;A.copy(y[C]),P.copy(y[(C+1)%3]),d.delta(a);const v=jo(g.distanceToPoint(A));if(jo(g.normal.dot(a))&&v){m.copy(d),b=2;break}const w=g.intersectLine(d,p);if(!w&&v&&p.copy(A),(w||v)&&!jo(p.distanceTo(P))){if(b<=1)(b===1?m.start:m.end).copy(p),v&&(T=b);else if(b>=2){(T===1?m.start:m.end).copy(p),b=2;break}if(b++,b===2&&T===-1)break}}return b}return function(g,m=null,y=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(i.copy(g),i.update(),g=i);const b=this.plane,T=g.plane;if(Math.abs(b.normal.dot(T.normal))>1-1e-10){const C=this.satBounds,A=this.satAxes;e[0]=g.a,e[1]=g.b,e[2]=g.c;for(let w=0;w<4;w++){const N=C[w],D=A[w];if(n.setFromPoints(D,e),N.isSeparated(n))return!1}const P=g.satBounds,v=g.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let w=0;w<4;w++){const N=P[w],D=v[w];if(n.setFromPoints(D,t),N.isSeparated(n))return!1}for(let w=0;w<4;w++){const N=A[w];for(let D=0;D<4;D++){const F=v[D];if(r.crossVectors(N,F),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return m&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const C=x(this,T,f);if(C===1&&g.containsPoint(f.end))return m&&(m.start.copy(f.end),m.end.copy(f.end)),!0;if(C!==2)return!1;const A=x(g,b,h);if(A===1&&this.containsPoint(h.end))return m&&(m.start.copy(h.end),m.end.copy(h.end)),!0;if(A!==2)return!1;if(f.delta(o),h.delta(l),o.dot(l)<0){let z=h.start;h.start=h.end,h.end=z}const P=f.start.dot(o),v=f.end.dot(o),w=h.start.dot(o),N=h.end.dot(o),D=v<w,F=P<N;return P!==N&&w!==v&&D===F?!1:(m&&(u.subVectors(f.start,h.start),u.dot(o)>0?m.start.copy(f.start):m.start.copy(h.start),u.subVectors(f.end,h.end),u.dot(o)<0?m.end.copy(f.end):m.end.copy(h.end)),!0)}}}();Nn.prototype.distanceToPoint=function(){const i=new B;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Nn.prototype.distanceToTriangle=function(){const i=new B,t=new B,e=["a","b","c"],n=new ai,s=new ai;return function(a,o=null,l=null){const u=o||l?n:null;if(this.intersectsTriangle(a,u))return(o||l)&&(o&&u.getCenter(o),l&&u.getCenter(l)),0;let d=1/0;for(let f=0;f<3;f++){let h;const p=e[f],x=a[p];this.closestPointToPoint(x,i),h=x.distanceToSquared(i),h<d&&(d=h,o&&o.copy(i),l&&l.copy(x));const M=this[p];a.closestPointToPoint(M,i),h=M.distanceToSquared(i),h<d&&(d=h,o&&o.copy(M),l&&l.copy(i))}for(let f=0;f<3;f++){const h=e[f],p=e[(f+1)%3];n.set(this[h],this[p]);for(let x=0;x<3;x++){const M=e[x],g=e[(x+1)%3];s.set(a[M],a[g]),Ac(n,s,i,t);const m=i.distanceToSquared(t);m<d&&(d=m,o&&o.copy(i),l&&l.copy(t))}}return Math.sqrt(d)}}();class en{constructor(t,e,n){this.isOrientedBox=!0,this.min=new B,this.max=new B,this.matrix=new Jt,this.invMatrix=new Jt,this.points=new Array(8).fill().map(()=>new B),this.satAxes=new Array(3).fill().map(()=>new B),this.satBounds=new Array(3).fill().map(()=>new ci),this.alignedSatBounds=new Array(3).fill().map(()=>new ci),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}en.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++){const h=1*u|2*d|4*f,p=s[h];p.x=u?n.x:e.x,p.y=d?n.y:e.y,p.z=f?n.z:e.z,p.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let u=0;u<3;u++){const d=a[u],f=r[u],h=1<<u,p=s[h];d.subVectors(o,p),f.setFromPoints(d,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();en.prototype.intersectsBox=function(){const i=new ci;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const u=a[l],d=r[l];if(i.setFromBox(u,e),d.isSeparated(i))return!1}return!0}}();en.prototype.intersectsTriangle=function(){const i=new Nn,t=new Array(3),e=new ci,n=new ci,s=new B;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let h=0;h<3;h++){const p=o[h],x=l[h];if(e.setFromPoints(x,t),p.isSeparated(e))return!1}const u=a.satBounds,d=a.satAxes,f=this.points;for(let h=0;h<3;h++){const p=u[h],x=d[h];if(e.setFromPoints(x,f),p.isSeparated(e))return!1}for(let h=0;h<3;h++){const p=l[h];for(let x=0;x<4;x++){const M=d[x];if(s.crossVectors(p,M),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();en.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();en.prototype.distanceToPoint=function(){const i=new B;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();en.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new ai),e=new Array(12).fill().map(()=>new ai),n=new B,s=new B;return function(a,o=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||u)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),l&&l.copy(n),u&&u.copy(s)),0;const d=o*o,f=a.min,h=a.max,p=this.points;let x=1/0;for(let g=0;g<8;g++){const m=p[g];s.copy(m).clamp(f,h);const y=m.distanceToSquared(s);if(y<x&&(x=y,l&&l.copy(m),u&&u.copy(s),y<d))return Math.sqrt(y)}let M=0;for(let g=0;g<3;g++)for(let m=0;m<=1;m++)for(let y=0;y<=1;y++){const b=(g+1)%3,T=(g+2)%3,C=m<<b|y<<T,A=1<<g|m<<b|y<<T,P=p[C],v=p[A];t[M].set(P,v);const N=i[g],D=i[b],F=i[T],z=e[M],k=z.start,O=z.end;k[N]=f[N],k[D]=m?f[D]:h[D],k[F]=y?f[F]:h[D],O[N]=h[N],O[D]=m?f[D]:h[D],O[F]=y?f[F]:h[D],M++}for(let g=0;g<=1;g++)for(let m=0;m<=1;m++)for(let y=0;y<=1;y++){s.x=g?h.x:f.x,s.y=m?h.y:f.y,s.z=y?h.z:f.z,this.closestPointToPoint(s,n);const b=s.distanceToSquared(n);if(b<x&&(x=b,l&&l.copy(n),u&&u.copy(s),b<d))return Math.sqrt(b)}for(let g=0;g<12;g++){const m=t[g];for(let y=0;y<12;y++){const b=e[y];Ac(m,b,n,s);const T=n.distanceToSquared(s);if(T<x&&(x=T,l&&l.copy(n),u&&u.copy(s),T<d))return Math.sqrt(T)}}return Math.sqrt(x)}}();class wc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Uv extends wc{constructor(){super(()=>new Nn)}}const Mn=new Uv;class Nv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const Ee=new Nv;let bi,bs;const us=[],ga=new wc(()=>new Fe);function Fv(i,t,e,n,s,r){bi=ga.getPrimitive(),bs=ga.getPrimitive(),us.push(bi,bs),Ee.setBuffer(i._roots[t]);const a=nc(0,i.geometry,e,n,s,r);Ee.clearBuffer(),ga.releasePrimitive(bi),ga.releasePrimitive(bs),us.pop(),us.pop();const o=us.length;return o>0&&(bs=us[o-1],bi=us[o-2]),a}function nc(i,t,e,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:u}=Ee;let d=i*2;if(Je(d,l)){const h=an(i,u),p=dn(d,l);return Ie(i,o,bi),n(h,p,!1,a,r+i,bi)}else{let N=function(F){const{uint16Array:z,uint32Array:k}=Ee;let O=F*2;for(;!Je(O,z);)F=yn(F),O=F*2;return an(F,k)},D=function(F){const{uint16Array:z,uint32Array:k}=Ee;let O=F*2;for(;!Je(O,z);)F=pn(F,k),O=F*2;return an(F,k)+dn(O,z)};const h=yn(i),p=pn(i,u);let x=h,M=p,g,m,y,b;if(s&&(y=bi,b=bs,Ie(x,o,y),Ie(M,o,b),g=s(y),m=s(b),m<g)){x=p,M=h;const F=g;g=m,m=F,y=b}y||(y=bi,Ie(x,o,y));const T=Je(x*2,l),C=e(y,T,g,a+1,r+x);let A;if(C===sh){const F=N(x),k=D(x)-F;A=n(F,k,!0,a+1,r+x,y)}else A=C&&nc(x,t,e,n,s,r,a+1);if(A)return!0;b=bs,Ie(M,o,b);const P=Je(M*2,l),v=e(b,P,m,a+1,r+M);let w;if(v===sh){const F=N(M),k=D(M)-F;w=n(F,k,!0,a+1,r+M,b)}else w=v&&nc(M,t,e,n,s,r,a+1);return!!w}}const ir=new B,Ko=new B;function Ov(i,t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,l=null;if(i.shapecast({boundsTraverseOrder:d=>(ir.copy(t).clamp(d.min,d.max),ir.distanceToSquared(t)),intersectsBounds:(d,f,h)=>h<o&&h<a,intersectsTriangle:(d,f)=>{d.closestPointToPoint(t,ir);const h=t.distanceToSquared(ir);return h<o&&(Ko.copy(ir),o=h,l=f),h<r}}),o===1/0)return null;const u=Math.sqrt(o);return e.point?e.point.copy(Ko):e.point=Ko.clone(),e.distance=u,e.faceIndex=l,e}const hs=new B,fs=new B,ds=new B,_a=new Xt,xa=new Xt,va=new Xt,ch=new B,uh=new B,hh=new B,ya=new B;function Bv(i,t,e,n,s,r,a,o){let l;if(r===Qe?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==Gn,s),l===null)return null;const u=i.origin.distanceTo(s);return u<a||u>o?null:{distance:u,point:s.clone()}}function zv(i,t,e,n,s,r,a,o,l,u,d){hs.fromBufferAttribute(t,r),fs.fromBufferAttribute(t,a),ds.fromBufferAttribute(t,o);const f=Bv(i,hs,fs,ds,ya,l,u,d);if(f){n&&(_a.fromBufferAttribute(n,r),xa.fromBufferAttribute(n,a),va.fromBufferAttribute(n,o),f.uv=Ze.getInterpolation(ya,hs,fs,ds,_a,xa,va,new Xt)),s&&(_a.fromBufferAttribute(s,r),xa.fromBufferAttribute(s,a),va.fromBufferAttribute(s,o),f.uv1=Ze.getInterpolation(ya,hs,fs,ds,_a,xa,va,new Xt)),e&&(ch.fromBufferAttribute(e,r),uh.fromBufferAttribute(e,a),hh.fromBufferAttribute(e,o),f.normal=Ze.getInterpolation(ya,hs,fs,ds,ch,uh,hh,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:r,b:a,c:o,normal:new B,materialIndex:0};Ze.getNormal(hs,fs,ds,h.normal),f.face=h,f.faceIndex=r}return f}function to(i,t,e,n,s,r,a){const o=n*3;let l=o+0,u=o+1,d=o+2;const f=i.index;i.index&&(l=f.getX(l),u=f.getX(u),d=f.getX(d));const{position:h,normal:p,uv:x,uv1:M}=i.attributes,g=zv(e,h,p,x,M,l,u,d,t,r,a);return g?(g.faceIndex=n,s&&s.push(g),g):null}function Ne(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,l=t+1,u=t+2;e&&(o=e.getX(o),l=e.getX(l),u=e.getX(u)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),a.x=n.getX(u),a.y=n.getY(u),a.z=n.getZ(u)}function kv(i,t,e,n,s,r,a,o){const{geometry:l,_indirectBuffer:u}=i;for(let d=n,f=n+s;d<f;d++)to(l,t,e,d,r,a,o)}function Vv(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,d=null;for(let f=n,h=n+s;f<h;f++){let p;p=to(o,t,e,f,null,r,a),p&&p.distance<u&&(d=p,u=p.distance)}return d}function Hv(i,t,e,n,s,r,a){const{geometry:o}=e,{index:l}=o,u=o.attributes.position;for(let d=i,f=t+i;d<f;d++){let h;if(h=d,Ne(a,h*3,l,u),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function Gv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,l,u=0;const d=i._roots;for(let h=0,p=d.length;h<p;h++)r=d[h],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),f(0,u),u+=r.byteLength;function f(h,p,x=!1){const M=h*2;if(o[M+15]===Qa){const m=a[h+6],y=o[M+14];let b=1/0,T=1/0,C=1/0,A=-1/0,P=-1/0,v=-1/0;for(let w=3*m,N=3*(m+y);w<N;w++){let D=n[w];const F=s.getX(D),z=s.getY(D),k=s.getZ(D);F<b&&(b=F),F>A&&(A=F),z<T&&(T=z),z>P&&(P=z),k<C&&(C=k),k>v&&(v=k)}return l[h+0]!==b||l[h+1]!==T||l[h+2]!==C||l[h+3]!==A||l[h+4]!==P||l[h+5]!==v?(l[h+0]=b,l[h+1]=T,l[h+2]=C,l[h+3]=A,l[h+4]=P,l[h+5]=v,!0):!1}else{const m=h+8,y=a[h+6],b=m+p,T=y+p;let C=x,A=!1,P=!1;t?C||(A=t.has(b),P=t.has(T),C=!A&&!P):(A=!0,P=!0);const v=C||A,w=C||P;let N=!1;v&&(N=f(m,p,C));let D=!1;w&&(D=f(y,p,C));const F=N||D;if(F)for(let z=0;z<3;z++){const k=m+z,O=y+z,V=l[k],q=l[k+3],ot=l[O],it=l[O+3];l[h+z]=V<ot?V:ot,l[h+z+3]=q>it?q:it}return F}}}function Ai(i,t,e,n,s){let r,a,o,l,u,d;const f=1/e.direction.x,h=1/e.direction.y,p=1/e.direction.z,x=e.origin.x,M=e.origin.y,g=e.origin.z;let m=t[i],y=t[i+3],b=t[i+1],T=t[i+3+1],C=t[i+2],A=t[i+3+2];return f>=0?(r=(m-x)*f,a=(y-x)*f):(r=(y-x)*f,a=(m-x)*f),h>=0?(o=(b-M)*h,l=(T-M)*h):(o=(T-M)*h,l=(b-M)*h),r>l||o>a||((o>r||isNaN(r))&&(r=o),(l<a||isNaN(a))&&(a=l),p>=0?(u=(C-g)*p,d=(A-g)*p):(u=(A-g)*p,d=(C-g)*p),r>d||u>a)?!1:((u>r||r!==r)&&(r=u),(d<a||a!==a)&&(a=d),r<=s&&a>=n)}function Wv(i,t,e,n,s,r,a,o){const{geometry:l,_indirectBuffer:u}=i;for(let d=n,f=n+s;d<f;d++){let h=u?u[d]:d;to(l,t,e,h,r,a,o)}}function Xv(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,d=null;for(let f=n,h=n+s;f<h;f++){let p;p=to(o,t,e,l?l[f]:f,null,r,a),p&&p.distance<u&&(d=p,u=p.distance)}return d}function Yv(i,t,e,n,s,r,a){const{geometry:o}=e,{index:l}=o,u=o.attributes.position;for(let d=i,f=t+i;d<f;d++){let h;if(h=e.resolveTriangleIndex(d),Ne(a,h*3,l,u),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function qv(i,t,e,n,s,r,a){Ee.setBuffer(i._roots[t]),ic(0,i,e,n,s,r,a),Ee.clearBuffer()}function ic(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:u}=Ee,d=i*2;if(Je(d,l)){const h=an(i,u),p=dn(d,l);kv(t,e,n,h,p,s,r,a)}else{const h=yn(i);Ai(h,o,n,r,a)&&ic(h,t,e,n,s,r,a);const p=pn(i,u);Ai(p,o,n,r,a)&&ic(p,t,e,n,s,r,a)}}const Zv=["x","y","z"];function jv(i,t,e,n,s,r){Ee.setBuffer(i._roots[t]);const a=sc(0,i,e,n,s,r);return Ee.clearBuffer(),a}function sc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=Ee;let u=i*2;if(Je(u,o)){const f=an(i,l),h=dn(u,o);return Vv(t,e,n,f,h,s,r)}else{const f=Tc(i,l),h=Zv[f],x=n.direction[h]>=0;let M,g;x?(M=yn(i),g=pn(i,l)):(M=pn(i,l),g=yn(i));const y=Ai(M,a,n,s,r)?sc(M,t,e,n,s,r):null;if(y){const C=y.point[h];if(x?C<=a[g+f]:C>=a[g+f+3])return y}const T=Ai(g,a,n,s,r)?sc(g,t,e,n,s,r):null;return y&&T?y.distance<=T.distance?y:T:y||T||null}}const Ma=new Fe,ps=new Nn,ms=new Nn,sr=new Jt,fh=new en,Sa=new en;function Kv(i,t,e,n){Ee.setBuffer(i._roots[t]);const s=rc(0,i,e,n);return Ee.clearBuffer(),s}function rc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=Ee;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),fh.set(e.boundingBox.min,e.boundingBox.max,n),s=fh),Je(l,a)){const d=t.geometry,f=d.index,h=d.attributes.position,p=e.index,x=e.attributes.position,M=an(i,o),g=dn(l,a);if(sr.copy(n).invert(),e.boundsTree)return Ie(i,r,Sa),Sa.matrix.copy(sr),Sa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Sa.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let b=M*3,T=(g+M)*3;b<T;b+=3)if(Ne(ms,b,f,h),ms.needsUpdate=!0,y.intersectsTriangle(ms))return!0;return!1}});for(let m=M*3,y=(g+M)*3;m<y;m+=3){Ne(ps,m,f,h),ps.a.applyMatrix4(sr),ps.b.applyMatrix4(sr),ps.c.applyMatrix4(sr),ps.needsUpdate=!0;for(let b=0,T=p.count;b<T;b+=3)if(Ne(ms,b,p,x),ms.needsUpdate=!0,ps.intersectsTriangle(ms))return!0}}else{const d=i+8,f=o[i+6];return Ie(d,r,Ma),!!(s.intersectsBox(Ma)&&rc(d,t,e,n,s)||(Ie(f,r,Ma),s.intersectsBox(Ma)&&rc(f,t,e,n,s)))}}const ba=new Jt,$o=new en,rr=new en,$v=new B,Jv=new B,Qv=new B,ty=new B;function ey(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),$o.set(t.boundingBox.min,t.boundingBox.max,e),$o.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,u=o.index,d=t.attributes.position,f=t.index,h=Mn.getPrimitive(),p=Mn.getPrimitive();let x=$v,M=Jv,g=null,m=null;s&&(g=Qv,m=ty);let y=1/0,b=null,T=null;return ba.copy(e).invert(),rr.matrix.copy(ba),i.shapecast({boundsTraverseOrder:C=>$o.distanceToBox(C),intersectsBounds:(C,A,P)=>P<y&&P<a?(A&&(rr.min.copy(C.min),rr.max.copy(C.max),rr.needsUpdate=!0),!0):!1,intersectsRange:(C,A)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:v=>rr.distanceToBox(v),intersectsBounds:(v,w,N)=>N<y&&N<a,intersectsRange:(v,w)=>{for(let N=v,D=v+w;N<D;N++){Ne(p,3*N,f,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let F=C,z=C+A;F<z;F++){Ne(h,3*F,u,l),h.needsUpdate=!0;const k=h.distanceToTriangle(p,x,g);if(k<y&&(M.copy(x),m&&m.copy(g),y=k,b=F,T=N),k<r)return!0}}}});{const P=ks(t);for(let v=0,w=P;v<w;v++){Ne(p,3*v,f,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let N=C,D=C+A;N<D;N++){Ne(h,3*N,u,l),h.needsUpdate=!0;const F=h.distanceToTriangle(p,x,g);if(F<y&&(M.copy(x),m&&m.copy(g),y=F,b=N,T=v),F<r)return!0}}}}}),Mn.releasePrimitive(h),Mn.releasePrimitive(p),y===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=y,n.faceIndex=b,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(ba),M.applyMatrix4(ba),s.distance=M.sub(s.point).length(),s.faceIndex=T),n)}function ny(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,l,u=0;const d=i._roots;for(let h=0,p=d.length;h<p;h++)r=d[h],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),f(0,u),u+=r.byteLength;function f(h,p,x=!1){const M=h*2;if(o[M+15]===Qa){const m=a[h+6],y=o[M+14];let b=1/0,T=1/0,C=1/0,A=-1/0,P=-1/0,v=-1/0;for(let w=m,N=m+y;w<N;w++){const D=3*i.resolveTriangleIndex(w);for(let F=0;F<3;F++){let z=D+F;z=n?n[z]:z;const k=s.getX(z),O=s.getY(z),V=s.getZ(z);k<b&&(b=k),k>A&&(A=k),O<T&&(T=O),O>P&&(P=O),V<C&&(C=V),V>v&&(v=V)}}return l[h+0]!==b||l[h+1]!==T||l[h+2]!==C||l[h+3]!==A||l[h+4]!==P||l[h+5]!==v?(l[h+0]=b,l[h+1]=T,l[h+2]=C,l[h+3]=A,l[h+4]=P,l[h+5]=v,!0):!1}else{const m=h+8,y=a[h+6],b=m+p,T=y+p;let C=x,A=!1,P=!1;t?C||(A=t.has(b),P=t.has(T),C=!A&&!P):(A=!0,P=!0);const v=C||A,w=C||P;let N=!1;v&&(N=f(m,p,C));let D=!1;w&&(D=f(y,p,C));const F=N||D;if(F)for(let z=0;z<3;z++){const k=m+z,O=y+z,V=l[k],q=l[k+3],ot=l[O],it=l[O+3];l[h+z]=V<ot?V:ot,l[h+z+3]=q>it?q:it}return F}}}function iy(i,t,e,n,s,r,a){Ee.setBuffer(i._roots[t]),ac(0,i,e,n,s,r,a),Ee.clearBuffer()}function ac(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:u}=Ee,d=i*2;if(Je(d,l)){const h=an(i,u),p=dn(d,l);Wv(t,e,n,h,p,s,r,a)}else{const h=yn(i);Ai(h,o,n,r,a)&&ac(h,t,e,n,s,r,a);const p=pn(i,u);Ai(p,o,n,r,a)&&ac(p,t,e,n,s,r,a)}}const sy=["x","y","z"];function ry(i,t,e,n,s,r){Ee.setBuffer(i._roots[t]);const a=oc(0,i,e,n,s,r);return Ee.clearBuffer(),a}function oc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=Ee;let u=i*2;if(Je(u,o)){const f=an(i,l),h=dn(u,o);return Xv(t,e,n,f,h,s,r)}else{const f=Tc(i,l),h=sy[f],x=n.direction[h]>=0;let M,g;x?(M=yn(i),g=pn(i,l)):(M=pn(i,l),g=yn(i));const y=Ai(M,a,n,s,r)?oc(M,t,e,n,s,r):null;if(y){const C=y.point[h];if(x?C<=a[g+f]:C>=a[g+f+3])return y}const T=Ai(g,a,n,s,r)?oc(g,t,e,n,s,r):null;return y&&T?y.distance<=T.distance?y:T:y||T||null}}const Ea=new Fe,gs=new Nn,_s=new Nn,ar=new Jt,dh=new en,Ta=new en;function ay(i,t,e,n){Ee.setBuffer(i._roots[t]);const s=lc(0,i,e,n);return Ee.clearBuffer(),s}function lc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=Ee;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),dh.set(e.boundingBox.min,e.boundingBox.max,n),s=dh),Je(l,a)){const d=t.geometry,f=d.index,h=d.attributes.position,p=e.index,x=e.attributes.position,M=an(i,o),g=dn(l,a);if(ar.copy(n).invert(),e.boundsTree)return Ie(i,r,Ta),Ta.matrix.copy(ar),Ta.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Ta.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let b=M,T=g+M;b<T;b++)if(Ne(_s,3*t.resolveTriangleIndex(b),f,h),_s.needsUpdate=!0,y.intersectsTriangle(_s))return!0;return!1}});for(let m=M,y=g+M;m<y;m++){const b=t.resolveTriangleIndex(m);Ne(gs,3*b,f,h),gs.a.applyMatrix4(ar),gs.b.applyMatrix4(ar),gs.c.applyMatrix4(ar),gs.needsUpdate=!0;for(let T=0,C=p.count;T<C;T+=3)if(Ne(_s,T,p,x),_s.needsUpdate=!0,gs.intersectsTriangle(_s))return!0}}else{const d=i+8,f=o[i+6];return Ie(d,r,Ea),!!(s.intersectsBox(Ea)&&lc(d,t,e,n,s)||(Ie(f,r,Ea),s.intersectsBox(Ea)&&lc(f,t,e,n,s)))}}const Aa=new Jt,Jo=new en,or=new en,oy=new B,ly=new B,cy=new B,uy=new B;function hy(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Jo.set(t.boundingBox.min,t.boundingBox.max,e),Jo.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,u=o.index,d=t.attributes.position,f=t.index,h=Mn.getPrimitive(),p=Mn.getPrimitive();let x=oy,M=ly,g=null,m=null;s&&(g=cy,m=uy);let y=1/0,b=null,T=null;return Aa.copy(e).invert(),or.matrix.copy(Aa),i.shapecast({boundsTraverseOrder:C=>Jo.distanceToBox(C),intersectsBounds:(C,A,P)=>P<y&&P<a?(A&&(or.min.copy(C.min),or.max.copy(C.max),or.needsUpdate=!0),!0):!1,intersectsRange:(C,A)=>{if(t.boundsTree){const P=t.boundsTree;return P.shapecast({boundsTraverseOrder:v=>or.distanceToBox(v),intersectsBounds:(v,w,N)=>N<y&&N<a,intersectsRange:(v,w)=>{for(let N=v,D=v+w;N<D;N++){const F=P.resolveTriangleIndex(N);Ne(p,3*F,f,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let z=C,k=C+A;z<k;z++){const O=i.resolveTriangleIndex(z);Ne(h,3*O,u,l),h.needsUpdate=!0;const V=h.distanceToTriangle(p,x,g);if(V<y&&(M.copy(x),m&&m.copy(g),y=V,b=z,T=N),V<r)return!0}}}})}else{const P=ks(t);for(let v=0,w=P;v<w;v++){Ne(p,3*v,f,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let N=C,D=C+A;N<D;N++){const F=i.resolveTriangleIndex(N);Ne(h,3*F,u,l),h.needsUpdate=!0;const z=h.distanceToTriangle(p,x,g);if(z<y&&(M.copy(x),m&&m.copy(g),y=z,b=N,T=v),z<r)return!0}}}}}),Mn.releasePrimitive(h),Mn.releasePrimitive(p),y===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=y,n.faceIndex=b,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(Aa),M.applyMatrix4(Aa),s.distance=M.sub(s.point).length(),s.faceIndex=T),n)}function fy(){return typeof SharedArrayBuffer<"u"}const mr=new Ee.constructor,Xa=new Ee.constructor,xi=new wc(()=>new Fe),xs=new Fe,vs=new Fe,Qo=new Fe,tl=new Fe;let el=!1;function dy(i,t,e,n){if(el)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");el=!0;const s=i._roots,r=t._roots;let a,o=0,l=0;const u=new Jt().copy(e).invert();for(let d=0,f=s.length;d<f;d++){mr.setBuffer(s[d]),l=0;const h=xi.getPrimitive();Ie(0,mr.float32Array,h),h.applyMatrix4(u);for(let p=0,x=r.length;p<x&&(Xa.setBuffer(r[p]),a=Rn(0,0,e,u,n,o,l,0,0,h),Xa.clearBuffer(),l+=r[p].length,!a);p++);if(xi.releasePrimitive(h),mr.clearBuffer(),o+=s[d].length,a)break}return el=!1,a}function Rn(i,t,e,n,s,r=0,a=0,o=0,l=0,u=null,d=!1){let f,h;d?(f=Xa,h=mr):(f=mr,h=Xa);const p=f.float32Array,x=f.uint32Array,M=f.uint16Array,g=h.float32Array,m=h.uint32Array,y=h.uint16Array,b=i*2,T=t*2,C=Je(b,M),A=Je(T,y);let P=!1;if(A&&C)d?P=s(an(t,m),dn(t*2,y),an(i,x),dn(i*2,M),l,a+t,o,r+i):P=s(an(i,x),dn(i*2,M),an(t,m),dn(t*2,y),o,r+i,l,a+t);else if(A){const v=xi.getPrimitive();Ie(t,g,v),v.applyMatrix4(e);const w=yn(i),N=pn(i,x);Ie(w,p,xs),Ie(N,p,vs);const D=v.intersectsBox(xs),F=v.intersectsBox(vs);P=D&&Rn(t,w,n,e,s,a,r,l,o+1,v,!d)||F&&Rn(t,N,n,e,s,a,r,l,o+1,v,!d),xi.releasePrimitive(v)}else{const v=yn(t),w=pn(t,m);Ie(v,g,Qo),Ie(w,g,tl);const N=u.intersectsBox(Qo),D=u.intersectsBox(tl);if(N&&D)P=Rn(i,v,e,n,s,r,a,o,l+1,u,d)||Rn(i,w,e,n,s,r,a,o,l+1,u,d);else if(N)if(C)P=Rn(i,v,e,n,s,r,a,o,l+1,u,d);else{const F=xi.getPrimitive();F.copy(Qo).applyMatrix4(e);const z=yn(i),k=pn(i,x);Ie(z,p,xs),Ie(k,p,vs);const O=F.intersectsBox(xs),V=F.intersectsBox(vs);P=O&&Rn(v,z,n,e,s,a,r,l,o+1,F,!d)||V&&Rn(v,k,n,e,s,a,r,l,o+1,F,!d),xi.releasePrimitive(F)}else if(D)if(C)P=Rn(i,w,e,n,s,r,a,o,l+1,u,d);else{const F=xi.getPrimitive();F.copy(tl).applyMatrix4(e);const z=yn(i),k=pn(i,x);Ie(z,p,xs),Ie(k,p,vs);const O=F.intersectsBox(xs),V=F.intersectsBox(vs);P=O&&Rn(w,z,n,e,s,a,r,l,o+1,F,!d)||V&&Rn(w,k,n,e,s,a,r,l,o+1,F,!d),xi.releasePrimitive(F)}}return P}const wa=new en,ph=new Fe,py={strategy:uf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Rc{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:s.map(l=>l.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=t,o=new Rc(e,{...n,[Yo]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const l=e.getIndex();if(l===null){const u=new We(t.index,1,!1);e.setIndex(u)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...py,[Yo]:!1},e),e.useSharedArrayBuffer&&!fy())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Yo]||(Pv(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Fe))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?ny:Gv)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,l=0){const u=o*2,d=r[u+15]===Qa;if(d){const f=s[o+6],h=r[u+14];t(l,d,new Float32Array(n,o*4,6),f,h)}else{const f=o+Ei/4,h=s[o+6],p=s[o+7];t(l,d,new Float32Array(n,o*4,6),p)||(a(f,l+1),a(h,l+1))}}}raycast(t,e=qn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],l=e.isMaterial,u=Array.isArray(e),d=a.groups,f=l?e.side:e,h=this.indirect?iy:qv;for(let p=0,x=r.length;p<x;p++){const M=u?e[d[p].materialIndex].side:f,g=o.length;if(h(this,p,M,t,o,n,s),u){const m=d[p].materialIndex;for(let y=g,b=o.length;y<b;y++)o[y].face.materialIndex=m}}return o}raycastFirst(t,e=qn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=e.isMaterial,l=Array.isArray(e);let u=null;const d=a.groups,f=o?e.side:e,h=this.indirect?ry:jv;for(let p=0,x=r.length;p<x;p++){const M=l?e[d[p].materialIndex].side:f,g=h(this,p,M,t,n,s);g!=null&&(u==null||g.distance<u.distance)&&(u=g,l&&(g.face.materialIndex=d[p].materialIndex))}return u}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?ay:Kv;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){const e=Mn.getPrimitive(),n=this.indirect?Yv:Hv;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const f=a;a=(h,p,x,M,g)=>f(h,p,x,M,g)?!0:n(h,p,this,o,x,M,e)}else a||(o?a=(f,h,p,x)=>n(f,h,this,o,p,x,e):a=(f,h,p)=>p);let l=!1,u=0;const d=this._roots;for(let f=0,h=d.length;f<h;f++){const p=d[f];if(l=Fv(this,f,r,a,s,u),l)break;u+=p.byteLength}return Mn.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=Mn.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?x=>{const M=this.resolveTriangleIndex(x);Ne(a,M*3,o,l)}:x=>{Ne(a,x*3,o,l)},d=Mn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,p=t.indirect?x=>{const M=t.resolveTriangleIndex(x);Ne(d,M*3,f,h)}:x=>{Ne(d,x*3,f,h)};if(r){const x=(M,g,m,y,b,T,C,A)=>{for(let P=m,v=m+y;P<v;P++){p(P),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let w=M,N=M+g;w<N;w++)if(u(w),a.needsUpdate=!0,r(a,d,w,P,b,T,C,A))return!0}return!1};if(s){const M=s;s=function(g,m,y,b,T,C,A,P){return M(g,m,y,b,T,C,A,P)?!0:x(g,m,y,b,T,C,A,P)}}else s=x}return dy(this,t,e,s)}intersectsBox(t,e){return wa.set(t.min,t.max,e),wa.needsUpdate=!0,this.shapecast({intersectsBounds:n=>wa.intersectsBox(n),intersectsTriangle:n=>wa.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?hy:ey)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return Ov(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Ie(0,new Float32Array(n),ph),t.union(ph)}),t}}function my(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function gy(i){switch(i){case 1:return Mi;case 2:return fn;case 3:return Ae;case 4:return Ae}}function mh(i){switch(i){case 1:return Za;case 2:return vr;case 3:return Is;case 4:return Is}}class _f extends zi{constructor(){super(),this.minFilter=we,this.magFilter=we,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){const e=this.overrideItemSize,n=t.itemSize,s=t.count;if(e!==null){if(n*s%e!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");t.itemSize=e,t.count=s*n/e}const r=t.itemSize,a=t.count,o=t.normalized,l=t.array.constructor,u=l.BYTES_PER_ELEMENT;let d=this._forcedType,f=r;if(d===null)switch(l){case Float32Array:d=Re;break;case Uint8Array:case Uint16Array:case Uint32Array:d=tn;break;case Int8Array:case Int16Array:case Int32Array:d=As;break}let h,p,x,M,g=my(r);switch(d){case Re:x=1,p=gy(r),o&&u===1?(M=l,g+="8",l===Uint8Array?h=$e:(h=Na,g+="_SNORM")):(M=Float32Array,g+="32F",h=Re);break;case As:g+=u*8+"I",x=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=mh(r),u===1?(M=Int8Array,h=Na):u===2?(M=Int16Array,h=hc):(M=Int32Array,h=As);break;case tn:g+=u*8+"UI",x=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=mh(r),u===1?(M=Uint8Array,h=$e):u===2?(M=Uint16Array,h=Ps):(M=Uint32Array,h=tn);break}f===3&&(p===Ae||p===Is)&&(f=4);const m=Math.ceil(Math.sqrt(a))||1,y=f*m*m,b=new M(y),T=t.normalized;t.normalized=!1;for(let C=0;C<a;C++){const A=f*C;b[A]=t.getX(C)/x,r>=2&&(b[A+1]=t.getY(C)/x),r>=3&&(b[A+2]=t.getZ(C)/x,f===4&&(b[A+3]=1)),r>=4&&(b[A+3]=t.getW(C)/x)}t.normalized=T,this.internalFormat=g,this.format=p,this.type=h,this.image.width=m,this.image.height=m,this.image.data=b,this.needsUpdate=!0,this.dispose(),t.itemSize=n,t.count=s}}class _y extends _f{constructor(){super(),this._forcedType=tn}}class xy extends _f{constructor(){super(),this._forcedType=Re}}class vy{constructor(){this.index=new _y,this.position=new xy,this.bvhBounds=new zi,this.bvhContents=new zi,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(t){const{geometry:e}=t;if(My(t,this.bvhBounds,this.bvhContents),this.position.updateFrom(e.attributes.position),t.indirect){const n=t._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(e.index)this._cachedIndexAttr=e.index.clone();else{const s=ff(hf(e));this._cachedIndexAttr=new We(s,1,!1)}yy(e,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(e.index)}dispose(){const{index:t,position:e,bvhBounds:n,bvhContents:s}=this;t&&t.dispose(),e&&e.dispose(),n&&n.dispose(),s&&s.dispose()}}function yy(i,t,e){const n=e.array,s=i.index?i.index.array:null;for(let r=0,a=t.length;r<a;r++){const o=3*r,l=3*t[r];for(let u=0;u<3;u++)n[o+u]=s?s[l+u]:l+u}}function My(i,t,e){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const s=n[0],r=new Uint16Array(s),a=new Uint32Array(s),o=new Float32Array(s),l=s.byteLength/Ei,u=2*Math.ceil(Math.sqrt(l/2)),d=new Float32Array(4*u*u),f=Math.ceil(Math.sqrt(l)),h=new Uint32Array(2*f*f);for(let p=0;p<l;p++){const x=p*Ei/4,M=x*2,g=x;for(let m=0;m<3;m++)d[8*p+0+m]=o[g+0+m],d[8*p+4+m]=o[g+3+m];if(Je(M,r)){const m=dn(M,r),y=an(x,a),b=4294901760|m;h[p*2+0]=b,h[p*2+1]=y}else{const m=4*pn(x,a)/Ei,y=Tc(x,a);h[p*2+0]=y,h[p*2+1]=m}}t.image.data=d,t.image.width=u,t.image.height=u,t.format=Ae,t.type=Re,t.internalFormat="RGBA32F",t.minFilter=we,t.magFilter=we,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),e.image.data=h,e.image.width=f,e.image.height=f,e.format=vr,e.type=tn,e.internalFormat="RG32UI",e.minFilter=we,e.magFilter=we,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose()}const Sy=`

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
`,by=`

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
`,Ey=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Ty=Ey,Ay=`
	${Sy}
	${by}
`;function wy(i){if(!i)return null;try{const t=i.index?i:pv(i);return new Rc(t)}catch(t){return console.warn("[diamond] failed to build BVH from geometry",t),null}}const Ry=`
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
`,Cy=`
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
${Ty}
${Ay}
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
`;function Py(i={}){const t=i.bvh??wy(i.geometry);if(!t)return console.warn("[diamond] no BVH available; cannot create BVH ray-traced material"),null;const e=new vy;e.updateFrom(t);const n={envMap:{value:i.envMap??null},bvh:{value:e},bounces:{value:typeof i.bounces=="number"?i.bounces:3},ior:{value:typeof i.ior=="number"?i.ior:2.6},aberrationStrength:{value:typeof i.dispersion=="number"?i.dispersion:.01},fresnel:{value:typeof i.fresnel=="number"?i.fresnel:.5},tintColor:{value:new oe(i.color??16777215)},opacity:{value:1},envMapIntensity:{value:typeof i.envMapIntensity=="number"?i.envMapIntensity:1.3},resolution:{value:new Xt(1,1)},viewMatrixInverse:{value:new Jt},projectionMatrixInverse:{value:new Jt}},s=new Un({name:i.name||"DiamondShaderMaterial",uniforms:n,vertexShader:Ry,fragmentShader:Cy,glslVersion:Yl,transparent:!1,depthWrite:!0,depthTest:!0});s.userData.isDiamondShaderMaterial=!0,s.userData.bvh=t;const r=new oe(i.color??16777215);return n.tintColor.value.copy(r),Object.defineProperties(s,{color:{enumerable:!0,configurable:!0,get(){return r},set(a){a&&typeof a.getHex=="function"?r.copy(a):r.set(a),n.tintColor.value.copy(r)}},envMap:{enumerable:!0,configurable:!0,get(){return n.envMap.value},set(a){if(a==null){n.envMap.value=null;return}a.mapping===hr&&(n.envMap.value=a)}},ior:{enumerable:!0,configurable:!0,get(){return n.ior.value},set(a){typeof a=="number"&&(n.ior.value=a)}},dispersion:{enumerable:!0,configurable:!0,get(){return n.aberrationStrength.value},set(a){typeof a=="number"&&(n.aberrationStrength.value=a)}},bounces:{enumerable:!0,configurable:!0,get(){return n.bounces.value},set(a){typeof a=="number"&&(n.bounces.value=a)}},envMapIntensity:{enumerable:!0,configurable:!0,get(){return n.envMapIntensity.value},set(a){typeof a=="number"&&(n.envMapIntensity.value=a)}},reflectivity:{enumerable:!0,configurable:!0,get(){return n.fresnel.value},set(a){typeof a=="number"&&(n.fresnel.value=a)}},metalness:ys(0),roughness:ys(0),transmission:ys(1),thickness:ys(.3),clearcoat:ys(0),clearcoatRoughness:ys(0)}),s.onBeforeRender=function(a,o,l){a.getSize(n.resolution.value),n.viewMatrixInverse.value.copy(l.matrixWorld),n.projectionMatrixInverse.value.copy(l.projectionMatrixInverse)},s}function ys(i){let t=i;return{enumerable:!0,configurable:!0,get(){return t},set(e){typeof e=="number"&&(t=e)}}}function Iy(i,t=null,e=null){if(!i)return!1;if(i.userData?.isDiamondShaderMaterial||t?.shader==="diamond")return!0;if(t?.shader&&t.shader!=="diamond")return!1;const n=(i.name||"").toLowerCase(),s=(e?.name||"").toLowerCase();if(/diamond|moissanite/.test(n)||/diamond|moissanite/.test(s))return!0;const a=(typeof t?.ior=="number"?t.ior:null)??(typeof i.ior=="number"?i.ior:0),o=typeof i.transmission=="number"?i.transmission:0,l=typeof i.metalness=="number"?i.metalness:0;return a>=2&&o>.5&&l<.3}const Dy=["metalness","roughness","transmission","thickness","ior","dispersion","bounces","reflectivity","clearcoat","clearcoatRoughness","sheen","envMapIntensity","opacity","attenuationDistance"],xf=new Set(["thickness","attenuationDistance"]);function nM(i){return xf.has(i)}const Ly=["color","attenuationColor","sheenColor","emissive"];function Uy(i,t,e=null,n=1){if(!i||!t)return;const s=typeof n=="number"?n:Number.isFinite(n?.scale)?n.scale:1;e&&typeof t.envMap=="string"&&(t.envMap==="metal"&&e.metal?i.envMap=e.metal:t.envMap==="gem"&&e.gem?i.envMap=e.gem:t.envMap==="none"&&(i.envMap=null));for(const r of Dy){const a=t[r];typeof a=="number"&&typeof i[r]=="number"&&(i[r]=xf.has(r)?a*s:a)}for(const r of Ly){const a=t[r];if(typeof a!="string")continue;const o=i[r];o&&typeof o.set=="function"&&o.set(a)}i.needsUpdate=!0}function Ny(i,t){return!i||!t?null:i.metals&&i.metals[t]?i.metals[t]:i.gems&&i.gems[t]?i.gems[t]:null}function iM(i){const t=[];if(i?.metals)for(const[e,n]of Object.entries(i.metals))t.push({id:e,group:"metals",label:n.label||e,preset:n});if(i?.gems)for(const[e,n]of Object.entries(i.gems))t.push({id:e,group:"gems",label:n.label||e,preset:n});return t}const Fy={"yellow-gold":{label:"Yellow Gold",color:"#d6af80",metalness:1,roughness:0,envMap:"metal",envMapIntensity:2.5},"white-gold":{label:"White Gold",color:"#e8e8e8",metalness:1,roughness:0,envMap:"metal",envMapIntensity:1},"rose-gold":{label:"Rose Gold",color:"#b48273",metalness:1,roughness:0,envMap:"metal",envMapIntensity:2.5},platinum:{label:"Platinum",color:"#d9d9d9",metalness:1,roughness:.12,envMap:"metal",envMapIntensity:1.1},silver:{label:"Sterling Silver",color:"#f0f0f0",metalness:1,roughness:.1,envMap:"metal",envMapIntensity:1.1}},Oy={diamond:{label:"Diamond",shader:"diamond",color:"#ffffff",ior:2.422,dispersion:.003,bounces:3,reflectivity:.5,envMap:"gem",envMapIntensity:4},moissanite:{label:"Moissanite",shader:"diamond",color:"#ffffff",ior:2.7,dispersion:.04,bounces:5,reflectivity:.5,envMap:"gem",envMapIntensity:1.4},"sapphire-blue":{label:"Blue Sapphire",color:"#0f52ba",metalness:0,roughness:0,transmission:1,ior:1.77,dispersion:.15,thickness:.3,attenuationColor:"#0a3a99",attenuationDistance:1,envMap:"gem",envMapIntensity:1.4},"sapphire-pink":{label:"Pink Sapphire",color:"#f49ac1",metalness:0,roughness:0,transmission:1,ior:1.77,dispersion:.15,thickness:.3,attenuationColor:"#d96a98",attenuationDistance:1,envMap:"gem",envMapIntensity:1.4},ruby:{label:"Ruby",color:"#9b111e",metalness:0,roughness:0,transmission:1,ior:1.77,dispersion:.15,thickness:.3,attenuationColor:"#7a0d18",attenuationDistance:1,envMap:"gem",envMapIntensity:1.4},emerald:{label:"Emerald",color:"#1f7a4d",metalness:0,roughness:.02,transmission:1,ior:1.58,dispersion:.1,thickness:.3,attenuationColor:"#155a37",attenuationDistance:1.2,envMap:"gem",envMapIntensity:1.3},amethyst:{label:"Amethyst",color:"#7d3cff",metalness:0,roughness:0,transmission:1,ior:1.55,dispersion:.1,thickness:.3,envMap:"gem",envMapIntensity:1.3},"topaz-blue":{label:"Blue Topaz",color:"#9bd1ff",metalness:0,roughness:0,transmission:1,ior:1.62,dispersion:.12,thickness:.3,envMap:"gem",envMapIntensity:1.3},citrine:{label:"Citrine",color:"#e4a73a",metalness:0,roughness:0,transmission:1,ior:1.55,dispersion:.1,thickness:.3,envMap:"gem",envMapIntensity:1.3}},By={metals:Fy,gems:Oy};function zy(){if(typeof navigator>"u")return!1;const i=navigator.userAgent||"";return!!(/iPhone|iPod|Android|Mobile/i.test(i)||/iPad/.test(i)||navigator.platform==="MacIntel"&&typeof navigator.maxTouchPoints=="number"&&navigator.maxTouchPoints>1)}function sM(i,{canvasClass:t="viewer-canvas"}={}){const e=zy(),n={backgroundColor:"#f4f4f5"},s={fov:10,initialPosition:[0,0,3],nearPlane:.01,farPlane:100},r={toneMappingExposure:.4,pixelRatioCap:e?1.5:2,transmissionResolutionScale:e?.5:1},a=1,o={ambientIntensity:.4,hemisphereIntensity:.4,keyLightIntensity:3,fillLightIntensity:1.5,rimLightIntensity:1.5},l={keyLight:[2.5,3,2],fillLight:[-3,1.5,1.5],rimLight:[0,2,-3]},u={dampingFactor:.08,rotateSpeed:.7,zoomSpeed:.8,panSpeed:.6,minDistance:.05,maxDistance:50,autoRotateSpeed:.8},d=typeof import.meta<"u"&&"/TestViewer/"||"/",f={metal:{path:`${d}env_metal_014.hdr`,intensity:2.5},gem:{path:`${d}env_gem_001.exr`,intensity:2.6}},h=new Nd;h.background=new oe(n.backgroundColor),h.environmentIntensity=a;const p=new rn(s.fov,1,s.nearPlane,s.farPlane);p.position.set(...s.initialPosition);const x=new Fx({antialias:!0,alpha:!1,powerPreference:"high-performance"});x.setPixelRatio(Math.min(window.devicePixelRatio,r.pixelRatioCap)),x.outputColorSpace=hn,x.toneMapping=uc,x.toneMappingExposure=r.toneMappingExposure,x.shadowMap.enabled=!0,x.shadowMap.type=_h,"transmissionResolutionScale"in x&&(x.transmissionResolutionScale=r.transmissionResolutionScale);const M=x.domElement;M.classList.add(t),i.appendChild(M);const g=new Ap(16777215,o.ambientIntensity);h.add(g);const m=new Sp(16777215,1710623,o.hemisphereIntensity);h.add(m);const y=new Lo(16777215,o.keyLightIntensity);y.position.set(...l.keyLight),h.add(y);const b=new Lo(16777215,o.fillLightIntensity);b.position.set(...l.fillLight),h.add(b);const T=new Lo(16773852,o.rimLightIntensity);T.position.set(...l.rimLight),h.add(T);const C={ambient:g,hemi:m,key:y,fill:b,rim:T},A={metal:null,gem:null},P={metal:null,gem:null};let v;{const mt=new Kl(x);mt.compileEquirectangularShader();const Q=new $x,rt=new dv,ut=Et=>Et.split(".").pop().toLowerCase()==="exr"?rt:Q,Lt=(Et,{keepEquirect:Nt=!1}={})=>new Promise((ie,te)=>{ut(Et).load(Et,ne=>{ne.mapping=hr;const he=mt.fromEquirectangular(ne).texture;Nt?(ne.minFilter=be,ne.magFilter=be,ne.generateMipmaps=!1,ne.needsUpdate=!0,ie({prefiltered:he,equirect:ne})):(ne.dispose(),ie({prefiltered:he,equirect:null}))},void 0,te)});v=Promise.all([Lt(f.metal.path),Lt(f.gem.path,{keepEquirect:!0})]).then(([Et,Nt])=>{A.metal=Et.prefiltered,A.gem=Nt.prefiltered,P.gem=Nt.equirect,h.environment=Et.prefiltered,mt.dispose(),bt()}).catch(Et=>{console.error("[viewer] failed to load HDR environments",Et),mt.dispose()})}function w(mt){if(!mt)return!1;if(typeof mt.transmission=="number"&&mt.transmission>0||typeof mt.ior=="number"&&mt.ior>=1.4&&(mt.metalness??0)<.3)return!0;const Q=(mt.name||"").toLowerCase();return/diamond|gem|stone|sapphire|ruby|emerald|crystal|cz|topaz|amethyst/.test(Q)}function N(mt,Q,rt=1){Q&&Uy(mt,Q,A,rt)}function D(mt,Q,rt){const ut=(mt?.name||"").toLowerCase(),Lt=(rt?.name||"").toLowerCase();return/moissanite/.test(ut)||/moissanite/.test(Lt)?"moissanite":"diamond"}function F(mt,Q,rt){const ut=x.capabilities?.isWebGL2===!0,Lt=D(Q,null,mt),Et=Ny(By,Lt)||{},Nt=ut?Py({name:Q.name||"Diamond",color:typeof Et.color=="string"?Et.color:16777215,ior:Et.ior,dispersion:Et.dispersion,bounces:Et.bounces,fresnel:Et.reflectivity,envMap:P.gem,envMapIntensity:typeof Et.envMapIntensity=="number"?Et.envMapIntensity:f.gem.intensity,geometry:mt.geometry}):null;let ie;return Nt?(ie=Nt,console.log(`[viewer] swapped "${Q.name||mt.name}" to diamond shader (BVH ray tracer)`)):(ie=z(Q),console.warn(`[viewer] swapped "${Q.name||mt.name}" to MeshPhysicalMaterial fallback`,ut?"(BVH build failed)":"(WebGL1 — BVH ray tracer needs WebGL2)")),Array.isArray(mt.material)?mt.material[rt]=ie:mt.material=ie,Q.dispose?.(),ie}function z(mt){return new ap({name:mt.name||"Diamond",color:mt.color?mt.color.getHex():16777215,metalness:0,roughness:0,transmission:1,ior:2.417,dispersion:.5,thickness:.5,envMap:A.gem,envMapIntensity:f.gem.intensity})}async function k(mt,Q=null,rt=1){await v,!(!A.metal||!A.gem)&&(mt.traverse(ut=>{ut.isMesh&&O(ut,Q,rt)}),bt())}function O(mt,Q,rt){const ut=Array.isArray(mt.material)?mt.material:[mt.material];for(let Lt=0;Lt<ut.length;Lt++){let Et=ut[Lt];if(!Et)continue;const Nt=Q&&Et.name&&Q[Et.name]||Q&&mt.name&&Q[mt.name]||null;if(P.gem&&Iy(Et,Nt,mt)){if(Et.userData?.isDiamondShaderMaterial){Nt&&N(Et,Nt,rt);continue}Et=F(mt,Et,Lt),Array.isArray(mt.material)?mt.material[Lt]=Et:mt.material=Et,Nt&&N(Et,Nt,rt);continue}const ie=w(Et);Et.envMap=ie?A.gem:A.metal,Et.envMapIntensity=ie?f.gem.intensity:f.metal.intensity,Et.needsUpdate=!0,Nt&&N(Et,Nt,rt)}}async function V(mt,Q,rt=1){await v,!(!A.metal||!A.gem)&&(O(mt,Q,rt),bt())}const q=new Bx(p,M);q.enableDamping=!0,q.dampingFactor=u.dampingFactor,q.rotateSpeed=u.rotateSpeed,q.zoomSpeed=u.zoomSpeed,q.panSpeed=u.panSpeed,q.enablePan=!0,q.minDistance=u.minDistance,q.maxDistance=u.maxDistance,q.autoRotateSpeed=u.autoRotateSpeed;function ot(mt,Q){x.setSize(mt,Q,!1),p.aspect=mt/Math.max(Q,1),p.updateProjectionMatrix(),bt()}let it=!1,_t=!1;function Rt(){if(it=!1,!_t)return;const mt=q.update();x.render(h,p),(mt||q.autoRotate)&&bt()}function bt(){!_t||it||(it=!0,requestAnimationFrame(Rt))}q.addEventListener("change",bt);function zt(){_t||(_t=!0,bt())}function re(){_t&&(_t=!1,it=!1)}return{renderer:x,scene:h,camera:p,controls:q,canvas:M,setSize:ot,start:zt,stop:re,requestRender:bt,applyMaterialEnvironments:k,reapplyMeshMaterial:V,environments:A,equirectEnvironments:P,envMapsReady:v,lights:C,isMobile:e}}function rM(i){const t=new Fe().setFromObject(i),e=new B,n=new B;t.getSize(e),t.getCenter(n),i.position.sub(n);const s=Math.max(e.x,e.y,e.z)*.5;return{center:new B(0,0,0),size:e,radius:s||.05}}function aM(i,t,e,n=1.4){const s=i.fov*Math.PI/180,r=i.aspect||1,a=e.radius/Math.sin(s/2),o=e.radius/Math.sin(Math.atan(Math.tan(s/2)*r)),l=Math.max(a,o)*n,u=new B(1,.7,1).normalize();return i.position.copy(e.center).addScaledVector(u,l),i.near=Math.max(l/1e3,.001),i.far=l*100,i.updateProjectionMatrix(),t.target.copy(e.center),t.minDistance=l*.2,t.maxDistance=l*6,t.update(),l}function ky(i){i.traverse(t=>{t.isMesh&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(gh):t.material&&gh(t.material))})}function gh(i){for(const t of Object.keys(i)){const e=i[t];e&&e.isTexture&&e.dispose()}i.dispose()}function oM(i){i.stop(),ky(i.scene),i.environments?.metal?.dispose(),i.environments?.gem?.dispose(),i.equirectEnvironments?.metal?.dispose(),i.equirectEnvironments?.gem?.dispose(),i.controls.dispose(),i.renderer.dispose(),i.canvas.parentElement&&i.canvas.parentElement.removeChild(i.canvas)}export{Bh as $,Gl as A,mn as B,oe as C,Gn as D,Fe as E,yp as F,$y as G,ap as H,Vy as I,jy as J,Ky as K,Bs as L,Jt as M,vi as N,Lo as O,_e as P,li as Q,Qy as R,hn as S,Gy as T,fu as U,B as V,De as W,Zy as X,Jy as Y,Jd as Z,ki as _,xn as a,rp as a0,Fh as a1,Hy as a2,Sn as a3,eM as a4,$d as a5,zh as a6,Wy as a7,Xy as a8,Br as a9,Uy as aA,nM as aB,rn as aa,Mc as ab,Oh as ac,qy as ad,Xd as ae,Ge as af,Wa as ag,Ga as ah,Ka as ai,qn as aj,Mr as ak,Zn as al,Xf as am,Gc as an,Hh as ao,iM as ap,Eh as aq,bh as ar,uc as as,Mh as at,yh as au,vh as av,Xn as aw,By as ax,tM as ay,Ny as az,We as b,ue as c,Nh as d,Xt as e,sM as f,rM as g,aM as h,oM as i,cc as j,Yy as k,_c as l,Md as m,Ae as n,bd as o,Ba as p,Nd as q,we as r,Hf as s,Nr as t,be as u,so as v,yi as w,Dn as x,hl as y,fl as z};
