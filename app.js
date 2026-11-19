var _g=Object.create;var vd=Object.defineProperty;var xg=Object.getOwnPropertyDescriptor;var yg=Object.getOwnPropertyNames;var vg=Object.getPrototypeOf,Mg=Object.prototype.hasOwnProperty;var st=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Sg=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of yg(e))!Mg.call(i,s)&&s!==t&&vd(i,s,{get:()=>e[s],enumerable:!(n=xg(e,s))||n.enumerable});return i};var bg=(i,e,t)=>(t=i!=null?_g(vg(i)):{},Sg(e||!i||!i.__esModule?vd(t,"default",{value:i,enumerable:!0}):t,i));var tm=st((RE,em)=>{em.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var ns=st(Rs=>{var Lu,jM=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Rs.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Rs.getSymbolTotalCodewords=function(e){return jM[e]};Rs.getBCHDigit=function(i){let e=0;for(;i!==0;)e++,i>>>=1;return e};Rs.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Lu=e};Rs.isKanjiModeEnabled=function(){return typeof Lu<"u"};Rs.toSJIS=function(e){return Lu(e)}});var Hc=st(Pn=>{Pn.L={bit:1};Pn.M={bit:0};Pn.Q={bit:3};Pn.H={bit:2};function QM(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return Pn.L;case"m":case"medium":return Pn.M;case"q":case"quartile":return Pn.Q;case"h":case"high":return Pn.H;default:throw new Error("Unknown EC Level: "+i)}}Pn.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4};Pn.from=function(e,t){if(Pn.isValid(e))return e;try{return QM(e)}catch{return t}}});var sm=st((PE,im)=>{function nm(){this.buffer=[],this.length=0}nm.prototype={get:function(i){let e=Math.floor(i/8);return(this.buffer[e]>>>7-i%8&1)===1},put:function(i,e){for(let t=0;t<e;t++)this.putBit((i>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(i){let e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),i&&(this.buffer[e]|=128>>>this.length%8),this.length++}};im.exports=nm});var om=st((LE,rm)=>{function No(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=new Uint8Array(i*i),this.reservedBit=new Uint8Array(i*i)}No.prototype.set=function(i,e,t,n){let s=i*this.size+e;this.data[s]=t,n&&(this.reservedBit[s]=!0)};No.prototype.get=function(i,e){return this.data[i*this.size+e]};No.prototype.xor=function(i,e,t){this.data[i*this.size+e]^=t};No.prototype.isReserved=function(i,e){return this.reservedBit[i*this.size+e]};rm.exports=No});var am=st(Gc=>{var eS=ns().getSymbolSize;Gc.getRowColCoords=function(e){if(e===1)return[];let t=Math.floor(e/7)+2,n=eS(e),s=n===145?26:Math.ceil((n-13)/(2*t-2))*2,r=[n-7];for(let o=1;o<t-1;o++)r[o]=r[o-1]-s;return r.push(6),r.reverse()};Gc.getPositions=function(e){let t=[],n=Gc.getRowColCoords(e),s=n.length;for(let r=0;r<s;r++)for(let o=0;o<s;o++)r===0&&o===0||r===0&&o===s-1||r===s-1&&o===0||t.push([n[r],n[o]]);return t}});var hm=st(lm=>{var tS=ns().getSymbolSize,cm=7;lm.getPositions=function(e){let t=tS(e);return[[0,0],[t-cm,0],[0,t-cm]]}});var um=st(ht=>{ht.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var Cs={N1:3,N2:3,N3:40,N4:10};ht.isValid=function(e){return e!=null&&e!==""&&!isNaN(e)&&e>=0&&e<=7};ht.from=function(e){return ht.isValid(e)?parseInt(e,10):void 0};ht.getPenaltyN1=function(e){let t=e.size,n=0,s=0,r=0,o=null,a=null;for(let c=0;c<t;c++){s=r=0,o=a=null;for(let l=0;l<t;l++){let h=e.get(c,l);h===o?s++:(s>=5&&(n+=Cs.N1+(s-5)),o=h,s=1),h=e.get(l,c),h===a?r++:(r>=5&&(n+=Cs.N1+(r-5)),a=h,r=1)}s>=5&&(n+=Cs.N1+(s-5)),r>=5&&(n+=Cs.N1+(r-5))}return n};ht.getPenaltyN2=function(e){let t=e.size,n=0;for(let s=0;s<t-1;s++)for(let r=0;r<t-1;r++){let o=e.get(s,r)+e.get(s,r+1)+e.get(s+1,r)+e.get(s+1,r+1);(o===4||o===0)&&n++}return n*Cs.N2};ht.getPenaltyN3=function(e){let t=e.size,n=0,s=0,r=0;for(let o=0;o<t;o++){s=r=0;for(let a=0;a<t;a++)s=s<<1&2047|e.get(o,a),a>=10&&(s===1488||s===93)&&n++,r=r<<1&2047|e.get(a,o),a>=10&&(r===1488||r===93)&&n++}return n*Cs.N3};ht.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];return Math.abs(Math.ceil(t*100/n/5)-10)*Cs.N4};function nS(i,e,t){switch(i){case ht.Patterns.PATTERN000:return(e+t)%2===0;case ht.Patterns.PATTERN001:return e%2===0;case ht.Patterns.PATTERN010:return t%3===0;case ht.Patterns.PATTERN011:return(e+t)%3===0;case ht.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(t/3))%2===0;case ht.Patterns.PATTERN101:return e*t%2+e*t%3===0;case ht.Patterns.PATTERN110:return(e*t%2+e*t%3)%2===0;case ht.Patterns.PATTERN111:return(e*t%3+(e+t)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}ht.applyMask=function(e,t){let n=t.size;for(let s=0;s<n;s++)for(let r=0;r<n;r++)t.isReserved(r,s)||t.xor(r,s,nS(e,r,s))};ht.getBestMask=function(e,t){let n=Object.keys(ht.Patterns).length,s=0,r=1/0;for(let o=0;o<n;o++){t(o),ht.applyMask(o,e);let a=ht.getPenaltyN1(e)+ht.getPenaltyN2(e)+ht.getPenaltyN3(e)+ht.getPenaltyN4(e);ht.applyMask(o,e),a<r&&(r=a,s=o)}return s}});var Du=st(Nu=>{var is=Hc(),Vc=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Wc=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Nu.getBlocksCount=function(e,t){switch(t){case is.L:return Vc[(e-1)*4+0];case is.M:return Vc[(e-1)*4+1];case is.Q:return Vc[(e-1)*4+2];case is.H:return Vc[(e-1)*4+3];default:return}};Nu.getTotalCodewordsCount=function(e,t){switch(t){case is.L:return Wc[(e-1)*4+0];case is.M:return Wc[(e-1)*4+1];case is.Q:return Wc[(e-1)*4+2];case is.H:return Wc[(e-1)*4+3];default:return}}});var dm=st(qc=>{var Do=new Uint8Array(512),Xc=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)Do[t]=e,Xc[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)Do[t]=Do[t-255]})();qc.log=function(e){if(e<1)throw new Error("log("+e+")");return Xc[e]};qc.exp=function(e){return Do[e]};qc.mul=function(e,t){return e===0||t===0?0:Do[Xc[e]+Xc[t]]}});var fm=st(Uo=>{var Uu=dm();Uo.mul=function(e,t){let n=new Uint8Array(e.length+t.length-1);for(let s=0;s<e.length;s++)for(let r=0;r<t.length;r++)n[s+r]^=Uu.mul(e[s],t[r]);return n};Uo.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){let s=n[0];for(let o=0;o<t.length;o++)n[o]^=Uu.mul(t[o],s);let r=0;for(;r<n.length&&n[r]===0;)r++;n=n.slice(r)}return n};Uo.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let n=0;n<e;n++)t=Uo.mul(t,new Uint8Array([1,Uu.exp(n)]));return t}});var gm=st((zE,mm)=>{var pm=fm();function Ou(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}Ou.prototype.initialize=function(e){this.degree=e,this.genPoly=pm.generateECPolynomial(this.degree)};Ou.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let n=pm.mod(t,this.genPoly),s=this.degree-n.length;if(s>0){let r=new Uint8Array(this.degree);return r.set(n,s),r}return n};mm.exports=Ou});var Fu=st(_m=>{_m.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}});var Bu=st(Ni=>{var xm="[0-9]+",iS="[A-Z $%*+\\-./:]+",Oo="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Oo=Oo.replace(/u/g,"\\u");var sS="(?:(?![A-Z0-9 $%*+\\-./:]|"+Oo+`)(?:.|[\r
]))+`;Ni.KANJI=new RegExp(Oo,"g");Ni.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Ni.BYTE=new RegExp(sS,"g");Ni.NUMERIC=new RegExp(xm,"g");Ni.ALPHANUMERIC=new RegExp(iS,"g");var rS=new RegExp("^"+Oo+"$"),oS=new RegExp("^"+xm+"$"),aS=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Ni.testKanji=function(e){return rS.test(e)};Ni.testNumeric=function(e){return oS.test(e)};Ni.testAlphanumeric=function(e){return aS.test(e)}});var ss=st(Ct=>{var cS=Fu(),zu=Bu();Ct.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};Ct.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};Ct.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};Ct.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};Ct.MIXED={bit:-1};Ct.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!cS.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]};Ct.getBestModeForData=function(e){return zu.testNumeric(e)?Ct.NUMERIC:zu.testAlphanumeric(e)?Ct.ALPHANUMERIC:zu.testKanji(e)?Ct.KANJI:Ct.BYTE};Ct.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")};Ct.isValid=function(e){return e&&e.bit&&e.ccBits};function lS(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return Ct.NUMERIC;case"alphanumeric":return Ct.ALPHANUMERIC;case"kanji":return Ct.KANJI;case"byte":return Ct.BYTE;default:throw new Error("Unknown mode: "+i)}}Ct.from=function(e,t){if(Ct.isValid(e))return e;try{return lS(e)}catch{return t}}});var bm=st(Is=>{var Yc=ns(),hS=Du(),ym=Hc(),rs=ss(),ku=Fu(),Mm=7973,vm=Yc.getBCHDigit(Mm);function uS(i,e,t){for(let n=1;n<=40;n++)if(e<=Is.getCapacity(n,t,i))return n}function Sm(i,e){return rs.getCharCountIndicator(i,e)+4}function dS(i,e){let t=0;return i.forEach(function(n){let s=Sm(n.mode,e);t+=s+n.getBitsLength()}),t}function fS(i,e){for(let t=1;t<=40;t++)if(dS(i,t)<=Is.getCapacity(t,e,rs.MIXED))return t}Is.from=function(e,t){return ku.isValid(e)?parseInt(e,10):t};Is.getCapacity=function(e,t,n){if(!ku.isValid(e))throw new Error("Invalid QR Code version");typeof n>"u"&&(n=rs.BYTE);let s=Yc.getSymbolTotalCodewords(e),r=hS.getTotalCodewordsCount(e,t),o=(s-r)*8;if(n===rs.MIXED)return o;let a=o-Sm(n,e);switch(n){case rs.NUMERIC:return Math.floor(a/10*3);case rs.ALPHANUMERIC:return Math.floor(a/11*2);case rs.KANJI:return Math.floor(a/13);case rs.BYTE:default:return Math.floor(a/8)}};Is.getBestVersionForData=function(e,t){let n,s=ym.from(t,ym.M);if(Array.isArray(e)){if(e.length>1)return fS(e,s);if(e.length===0)return 1;n=e[0]}else n=e;return uS(n.mode,n.getLength(),s)};Is.getEncodedBits=function(e){if(!ku.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;Yc.getBCHDigit(t)-vm>=0;)t^=Mm<<Yc.getBCHDigit(t)-vm;return e<<12|t}});var Am=st(Em=>{var Hu=ns(),wm=1335,pS=21522,Tm=Hu.getBCHDigit(wm);Em.getEncodedBits=function(e,t){let n=e.bit<<3|t,s=n<<10;for(;Hu.getBCHDigit(s)-Tm>=0;)s^=wm<<Hu.getBCHDigit(s)-Tm;return(n<<10|s)^pS}});var Cm=st((XE,Rm)=>{var mS=ss();function wr(i){this.mode=mS.NUMERIC,this.data=i.toString()}wr.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};wr.prototype.getLength=function(){return this.data.length};wr.prototype.getBitsLength=function(){return wr.getBitsLength(this.data.length)};wr.prototype.write=function(e){let t,n,s;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),s=parseInt(n,10),e.put(s,10);let r=this.data.length-t;r>0&&(n=this.data.substr(t),s=parseInt(n,10),e.put(s,r*3+1))};Rm.exports=wr});var Pm=st((qE,Im)=>{var gS=ss(),Gu=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Er(i){this.mode=gS.ALPHANUMERIC,this.data=i}Er.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Er.prototype.getLength=function(){return this.data.length};Er.prototype.getBitsLength=function(){return Er.getBitsLength(this.data.length)};Er.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=Gu.indexOf(this.data[t])*45;n+=Gu.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(Gu.indexOf(this.data[t]),6)};Im.exports=Er});var Nm=st((YE,Lm)=>{var _S=ss();function Ar(i){this.mode=_S.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}Ar.getBitsLength=function(e){return e*8};Ar.prototype.getLength=function(){return this.data.length};Ar.prototype.getBitsLength=function(){return Ar.getBitsLength(this.data.length)};Ar.prototype.write=function(i){for(let e=0,t=this.data.length;e<t;e++)i.put(this.data[e],8)};Lm.exports=Ar});var Um=st((KE,Dm)=>{var xS=ss(),yS=ns();function Rr(i){this.mode=xS.KANJI,this.data=i}Rr.getBitsLength=function(e){return e*13};Rr.prototype.getLength=function(){return this.data.length};Rr.prototype.getBitsLength=function(){return Rr.getBitsLength(this.data.length)};Rr.prototype.write=function(i){let e;for(e=0;e<this.data.length;e++){let t=yS.toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),i.put(t,13)}};Dm.exports=Rr});var Om=st((ZE,Vu)=>{"use strict";var Fo={single_source_shortest_paths:function(i,e,t){var n={},s={};s[e]=0;var r=Fo.PriorityQueue.make();r.push(e,0);for(var o,a,c,l,h,d,u,f,g;!r.empty();){o=r.pop(),a=o.value,l=o.cost,h=i[a]||{};for(c in h)h.hasOwnProperty(c)&&(d=h[c],u=l+d,f=s[c],g=typeof s[c]>"u",(g||f>u)&&(s[c]=u,r.push(c,u),n[c]=a))}if(typeof t<"u"&&typeof s[t]>"u"){var x=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(x)}return n},extract_shortest_path_from_predecessor_list:function(i,e){for(var t=[],n=e,s;n;)t.push(n),s=i[n],n=i[n];return t.reverse(),t},find_path:function(i,e,t){var n=Fo.single_source_shortest_paths(i,e,t);return Fo.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(i){var e=Fo.PriorityQueue,t={},n;i=i||{};for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t.queue=[],t.sorter=i.sorter||e.default_sorter,t},default_sorter:function(i,e){return i.cost-e.cost},push:function(i,e){var t={value:i,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof Vu<"u"&&(Vu.exports=Fo)});var Wm=st(Cr=>{var et=ss(),zm=Cm(),km=Pm(),Hm=Nm(),Gm=Um(),Bo=Bu(),Kc=ns(),vS=Om();function Fm(i){return unescape(encodeURIComponent(i)).length}function zo(i,e,t){let n=[],s;for(;(s=i.exec(t))!==null;)n.push({data:s[0],index:s.index,mode:e,length:s[0].length});return n}function Vm(i){let e=zo(Bo.NUMERIC,et.NUMERIC,i),t=zo(Bo.ALPHANUMERIC,et.ALPHANUMERIC,i),n,s;return Kc.isKanjiModeEnabled()?(n=zo(Bo.BYTE,et.BYTE,i),s=zo(Bo.KANJI,et.KANJI,i)):(n=zo(Bo.BYTE_KANJI,et.BYTE,i),s=[]),e.concat(t,n,s).sort(function(o,a){return o.index-a.index}).map(function(o){return{data:o.data,mode:o.mode,length:o.length}})}function Wu(i,e){switch(e){case et.NUMERIC:return zm.getBitsLength(i);case et.ALPHANUMERIC:return km.getBitsLength(i);case et.KANJI:return Gm.getBitsLength(i);case et.BYTE:return Hm.getBitsLength(i)}}function MS(i){return i.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function SS(i){let e=[];for(let t=0;t<i.length;t++){let n=i[t];switch(n.mode){case et.NUMERIC:e.push([n,{data:n.data,mode:et.ALPHANUMERIC,length:n.length},{data:n.data,mode:et.BYTE,length:n.length}]);break;case et.ALPHANUMERIC:e.push([n,{data:n.data,mode:et.BYTE,length:n.length}]);break;case et.KANJI:e.push([n,{data:n.data,mode:et.BYTE,length:Fm(n.data)}]);break;case et.BYTE:e.push([{data:n.data,mode:et.BYTE,length:Fm(n.data)}])}}return e}function bS(i,e){let t={},n={start:{}},s=["start"];for(let r=0;r<i.length;r++){let o=i[r],a=[];for(let c=0;c<o.length;c++){let l=o[c],h=""+r+c;a.push(h),t[h]={node:l,lastCount:0},n[h]={};for(let d=0;d<s.length;d++){let u=s[d];t[u]&&t[u].node.mode===l.mode?(n[u][h]=Wu(t[u].lastCount+l.length,l.mode)-Wu(t[u].lastCount,l.mode),t[u].lastCount+=l.length):(t[u]&&(t[u].lastCount=l.length),n[u][h]=Wu(l.length,l.mode)+4+et.getCharCountIndicator(l.mode,e))}}s=a}for(let r=0;r<s.length;r++)n[s[r]].end=0;return{map:n,table:t}}function Bm(i,e){let t,n=et.getBestModeForData(i);if(t=et.from(e,n),t!==et.BYTE&&t.bit<n.bit)throw new Error('"'+i+'" cannot be encoded with mode '+et.toString(t)+`.
 Suggested mode is: `+et.toString(n));switch(t===et.KANJI&&!Kc.isKanjiModeEnabled()&&(t=et.BYTE),t){case et.NUMERIC:return new zm(i);case et.ALPHANUMERIC:return new km(i);case et.KANJI:return new Gm(i);case et.BYTE:return new Hm(i)}}Cr.fromArray=function(e){return e.reduce(function(t,n){return typeof n=="string"?t.push(Bm(n,null)):n.data&&t.push(Bm(n.data,n.mode)),t},[])};Cr.fromString=function(e,t){let n=Vm(e,Kc.isKanjiModeEnabled()),s=SS(n),r=bS(s,t),o=vS.find_path(r.map,"start","end"),a=[];for(let c=1;c<o.length-1;c++)a.push(r.table[o[c]].node);return Cr.fromArray(MS(a))};Cr.rawSplit=function(e){return Cr.fromArray(Vm(e,Kc.isKanjiModeEnabled()))}});var qm=st(Xm=>{var Jc=ns(),Xu=Hc(),TS=sm(),wS=om(),ES=am(),AS=hm(),Ku=um(),Zu=Du(),RS=gm(),Zc=bm(),CS=Am(),IS=ss(),qu=Wm();function PS(i,e){let t=i.size,n=AS.getPositions(e);for(let s=0;s<n.length;s++){let r=n[s][0],o=n[s][1];for(let a=-1;a<=7;a++)if(!(r+a<=-1||t<=r+a))for(let c=-1;c<=7;c++)o+c<=-1||t<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?i.set(r+a,o+c,!0,!0):i.set(r+a,o+c,!1,!0))}}function LS(i){let e=i.size;for(let t=8;t<e-8;t++){let n=t%2===0;i.set(t,6,n,!0),i.set(6,t,n,!0)}}function NS(i,e){let t=ES.getPositions(e);for(let n=0;n<t.length;n++){let s=t[n][0],r=t[n][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?i.set(s+o,r+a,!0,!0):i.set(s+o,r+a,!1,!0)}}function DS(i,e){let t=i.size,n=Zc.getEncodedBits(e),s,r,o;for(let a=0;a<18;a++)s=Math.floor(a/3),r=a%3+t-8-3,o=(n>>a&1)===1,i.set(s,r,o,!0),i.set(r,s,o,!0)}function Yu(i,e,t){let n=i.size,s=CS.getEncodedBits(e,t),r,o;for(r=0;r<15;r++)o=(s>>r&1)===1,r<6?i.set(r,8,o,!0):r<8?i.set(r+1,8,o,!0):i.set(n-15+r,8,o,!0),r<8?i.set(8,n-r-1,o,!0):r<9?i.set(8,15-r-1+1,o,!0):i.set(8,15-r-1,o,!0);i.set(n-8,8,1,!0)}function US(i,e){let t=i.size,n=-1,s=t-1,r=7,o=0;for(let a=t-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!i.isReserved(s,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>r&1)===1),i.set(s,a-c,l),r--,r===-1&&(o++,r=7)}if(s+=n,s<0||t<=s){s-=n,n=-n;break}}}function OS(i,e,t){let n=new TS;t.forEach(function(c){n.put(c.mode.bit,4),n.put(c.getLength(),IS.getCharCountIndicator(c.mode,i)),c.write(n)});let s=Jc.getSymbolTotalCodewords(i),r=Zu.getTotalCodewordsCount(i,e),o=(s-r)*8;for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);let a=(o-n.getLengthInBits())/8;for(let c=0;c<a;c++)n.put(c%2?17:236,8);return FS(n,i,e)}function FS(i,e,t){let n=Jc.getSymbolTotalCodewords(e),s=Zu.getTotalCodewordsCount(e,t),r=n-s,o=Zu.getBlocksCount(e,t),a=n%o,c=o-a,l=Math.floor(n/o),h=Math.floor(r/o),d=h+1,u=l-h,f=new RS(u),g=0,x=new Array(o),p=new Array(o),m=0,S=new Uint8Array(i.buffer);for(let _=0;_<o;_++){let b=_<c?h:d;x[_]=S.slice(g,g+b),p[_]=f.encode(x[_]),g+=b,m=Math.max(m,b)}let E=new Uint8Array(n),y=0,T,w;for(T=0;T<m;T++)for(w=0;w<o;w++)T<x[w].length&&(E[y++]=x[w][T]);for(T=0;T<u;T++)for(w=0;w<o;w++)E[y++]=p[w][T];return E}function BS(i,e,t,n){let s;if(Array.isArray(i))s=qu.fromArray(i);else if(typeof i=="string"){let l=e;if(!l){let h=qu.rawSplit(i);l=Zc.getBestVersionForData(h,t)}s=qu.fromString(i,l||40)}else throw new Error("Invalid data");let r=Zc.getBestVersionForData(s,t);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=r;else if(e<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);let o=OS(e,t,s),a=Jc.getSymbolSize(e),c=new wS(a);return PS(c,e),LS(c),NS(c,e),Yu(c,t,0),e>=7&&DS(c,e),US(c,o),isNaN(n)&&(n=Ku.getBestMask(c,Yu.bind(null,c,t))),Ku.applyMask(n,c),Yu(c,t,n),{modules:c,version:e,errorCorrectionLevel:t,maskPattern:n,segments:s}}Xm.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let n=Xu.M,s,r;return typeof t<"u"&&(n=Xu.from(t.errorCorrectionLevel,Xu.M),s=Zc.from(t.version),r=Ku.from(t.maskPattern),t.toSJISFunc&&Jc.setToSJISFunction(t.toSJISFunc)),BS(e,s,n,r)}});var Ju=st(Ps=>{function Ym(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let e=i.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+i);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(n){return[n,n]}))),e.length===6&&e.push("F","F");let t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}Ps.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,s=e.scale||4;return{width:n,scale:n?4:s,margin:t,color:{dark:Ym(e.color.dark||"#000000ff"),light:Ym(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}};Ps.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale};Ps.getImageWidth=function(e,t){let n=Ps.getScale(e,t);return Math.floor((e+t.margin*2)*n)};Ps.qrToImageData=function(e,t,n){let s=t.modules.size,r=t.modules.data,o=Ps.getScale(s,n),a=Math.floor((s+n.margin*2)*o),c=n.margin*o,l=[n.color.light,n.color.dark];for(let h=0;h<a;h++)for(let d=0;d<a;d++){let u=(h*a+d)*4,f=n.color.light;if(h>=c&&d>=c&&h<a-c&&d<a-c){let g=Math.floor((h-c)/o),x=Math.floor((d-c)/o);f=l[r[g*s+x]?1:0]}e[u++]=f.r,e[u++]=f.g,e[u++]=f.b,e[u]=f.a}}});var Km=st($c=>{var $u=Ju();function zS(i,e,t){i.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=t,e.width=t,e.style.height=t+"px",e.style.width=t+"px"}function kS(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}$c.render=function(e,t,n){let s=n,r=t;typeof s>"u"&&(!t||!t.getContext)&&(s=t,t=void 0),t||(r=kS()),s=$u.getOptions(s);let o=$u.getImageWidth(e.modules.size,s),a=r.getContext("2d"),c=a.createImageData(o,o);return $u.qrToImageData(c.data,e,s),zS(a,r,o),a.putImageData(c,0,0),r};$c.renderToDataURL=function(e,t,n){let s=n;typeof s>"u"&&(!t||!t.getContext)&&(s=t,t=void 0),s||(s={});let r=$c.render(e,t,s),o=s.type||"image/png",a=s.rendererOpts||{};return r.toDataURL(o,a.quality)}});var $m=st(Jm=>{var HS=Ju();function Zm(i,e){let t=i.a/255,n=e+'="'+i.hex+'"';return t<1?n+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':n}function ju(i,e,t){let n=i+e;return typeof t<"u"&&(n+=" "+t),n}function GS(i,e,t){let n="",s=0,r=!1,o=0;for(let a=0;a<i.length;a++){let c=Math.floor(a%e),l=Math.floor(a/e);!c&&!r&&(r=!0),i[a]?(o++,a>0&&c>0&&i[a-1]||(n+=r?ju("M",c+t,.5+l+t):ju("m",s,0),s=0,r=!1),c+1<e&&i[a+1]||(n+=ju("h",o),o=0)):s++}return n}Jm.render=function(e,t,n){let s=HS.getOptions(t),r=e.modules.size,o=e.modules.data,a=r+s.margin*2,c=s.color.light.a?"<path "+Zm(s.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Zm(s.color.dark,"stroke")+' d="'+GS(o,r,s.margin)+'"/>',h='viewBox="0 0 '+a+" "+a+'"',u='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+h+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof n=="function"&&n(null,u),u}});var Qm=st(ko=>{var VS=tm(),Qu=qm(),jm=Km(),WS=$m();function ed(i,e,t,n,s){let r=[].slice.call(arguments,1),o=r.length,a=typeof r[o-1]=="function";if(!a&&!VS())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(s=t,t=e,e=n=void 0):o===3&&(e.getContext&&typeof s>"u"?(s=n,n=void 0):(s=n,n=t,t=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(t=e,e=n=void 0):o===2&&!e.getContext&&(n=t,t=e,e=void 0),new Promise(function(c,l){try{let h=Qu.create(t,n);c(i(h,e,n))}catch(h){l(h)}})}try{let c=Qu.create(t,n);s(null,i(c,e,n))}catch(c){s(c)}}ko.create=Qu.create;ko.toCanvas=ed.bind(null,jm.render);ko.toDataURL=ed.bind(null,jm.renderToDataURL);ko.toString=ed.bind(null,function(i,e,t){return WS.render(i,t)})});var Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,Gl=1,uf=2;var yo=1,Va=2,fr=3,jn=0,Yt=1,un=2,vs=0,pr=1,Vl=2,Wl=3,Xl=4,df=5;var Ms=100,ff=101,pf=102,mf=103,gf=104,_f=200,xf=201,yf=202,vf=203,ql=204,Yl=205,Mf=206,Sf=207,bf=208,Tf=209,wf=210,Ef=211,Af=212,Rf=213,Cf=214,va=0,Ma=1,Sa=2,Js=3,ba=4,Ta=5,wa=6,Ea=7,Wa=0,If=1,Pf=2,Qn=0,Kl=1,Zl=2,Jl=3,Ri=4,$l=5,jl=6,Ql=7,Cl="attached",Lf="detached",eh=300,Ss=301,mr=302,Xa=303,qa=304,Xn=1e3,an=1001,Vi=1002,vt=1003,gr=1004;var Ci=1005;var Tt=1006,Ji=1007;var dn=1008;var fn=1009,th=1010,nh=1011,_r=1012,Ya=1013,zn=1014,vn=1015,kn=1016,Ka=1017,Za=1018,bs=1020,ih=35902,sh=35899,rh=1021,oh=1022,pn=1023,gi=1026,Ii=1027,Ja=1028,$a=1029,$i=1030,ja=1031;var Qa=1033,vo=33776,Mo=33777,So=33778,bo=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37488,cc=37489,To=37490,lc=37491,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,yc=37817,vc=37818,Mc=37819,Sc=37820,bc=37821,Tc=36492,wc=36494,Ec=36495,Ac=36283,Rc=36284,wo=36285,Cc=36286;var _i=2300,xi=2301,xa=2302,Il=2303,Pl=2400,Ll=2401,Nl=2402,Nf=2500;var ah=0,Eo=1,xr=2,Df=3200;var Ao=0,Uf=1,Hn="",bt="srgb",tn="srgb-linear",Yr="linear",Qe="srgb";var ya=7680;var Of=519,Ff=512,Bf=513,zf=514,ch=515,kf=516,Hf=517,lh=518,hh=519,uh=35044;var dh="300 es",Rn=2e3,$s=2001;function Tg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){let i=js("canvas");return i.style.display="block",i}var Md={},Qs=null;function Kr(...i){let e="THREE."+i.shift();Qs?Qs("log",e,...i):console.log(e,...i)}function Vf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=Vf(i);let e="THREE."+i.shift();if(Qs)Qs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Vf(i);let e="THREE."+i.shift();if(Qs)Qs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fs(...i){let e=i.join(" ");e in Md||(Md[e]=!0,Te(...i))}function Wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xf={[va]:va,[Sa]:wa,[ba]:ba,[Js]:Ta,[Ma]:Ma,[wa]:Sa,[Ea]:Ea,[Ta]:Js},Fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=1234567,Xr=Math.PI/180,ps=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function fh(i,e){return(i%e+e)%e}function Eg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ag(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function Rg(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function Cg(i,e=1){return e-Math.abs(fh(i,e*2)-e)}function Ig(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ng(i,e){return i+Math.random()*(e-i)}function Dg(i){return i*(.5-Math.random())}function Ug(i){i!==void 0&&(Sd=i);let e=Sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Og(i){return i*Xr}function Fg(i){return i*ps}function Bg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function zg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ph(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ic(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mh(i,e){if(e.constructor===Float32Array)return i;let t=Ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function gh(i,e){if(e.constructor===Float32Array)return i;let t=Ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ti={DEG2RAD:Xr,RAD2DEG:ps,generateUUID:ei,clamp:Ve,euclideanModulo:fh,mapLinear:Eg,inverseLerp:Ag,lerp:qr,damp:Rg,pingpong:Cg,smoothstep:Ig,smootherstep:Pg,randInt:Lg,randFloat:Ng,randFloatSpread:Dg,seededRandom:Ug,degToRad:Og,radToDeg:Fg,isPowerOfTwo:Bg,ceilPowerOfTwo:zg,floorPowerOfTwo:ph,setQuaternionFromProperEuler:kg,normalize:gh,denormalize:mh},Ae=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||c!==u||l!==f||h!==g){let p=c*u+l*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let S=Math.acos(p),E=Math.sin(S);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E,c=c*m+u*a,l=l*m+f*a,h=h*m+g*a,d=d*m+x*a}else{c=c*m+u*a,l=l*m+f*a,h=h*m+g*a,d=d*m+x*a;let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new L,bd=new Gt,De=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],S=s[1],E=s[4],y=s[7],T=s[2],w=s[5],_=s[8];return r[0]=o*x+a*S+c*T,r[3]=o*p+a*E+c*w,r[6]=o*m+a*y+c*_,r[1]=l*x+h*S+d*T,r[4]=l*p+h*E+d*w,r[7]=l*m+h*y+d*_,r[2]=u*x+f*S+g*T,r[5]=u*p+f*E+g*w,r[8]=u*m+f*y+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new De,Td=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wd=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hg(){let i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qe&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:Td,fromXYZ:wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Td,fromXYZ:wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var Ge=Hg();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,er=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=js("canvas")),Us.width=e.width,Us.height=e.height;let s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gg=0,yi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?er.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var Vg=0,cl=new L,Nt=class i extends Fn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=an,s=an,r=Tt,o=dn,a=pn,c=fn,l=i.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ei(),this.name="",this.source=new yi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Vi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Vi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=eh;Nt.DEFAULT_ANISOTROPY=1;var it=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,y=(f+1)/2,T=(m+1)/2,w=(h+u)/4,_=(d+x)/4,b=(g+p)/4;return E>y&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=_/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=b/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-x)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Aa=class extends Fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Nt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new yi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Aa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zr=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ne=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,g,x,p)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;t[0]=u+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;t[0]=u-x*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wg,e,Xg)}lookAt(e,t,n){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Oi.crossVectors(n,gn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Oi.crossVectors(n,gn)),Oi.normalize(),Yo.crossVectors(gn,Oi),s[0]=Oi.x,s[4]=Yo.x,s[8]=gn.x,s[1]=Oi.y,s[5]=Yo.y,s[9]=gn.y,s[2]=Oi.z,s[6]=Yo.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],S=n[3],E=n[7],y=n[11],T=n[15],w=s[0],_=s[4],b=s[8],D=s[12],R=s[1],N=s[5],O=s[9],H=s[13],I=s[2],B=s[6],q=s[10],G=s[14],te=s[3],W=s[7],j=s[11],Q=s[15];return r[0]=o*w+a*R+c*I+l*te,r[4]=o*_+a*N+c*B+l*W,r[8]=o*b+a*O+c*q+l*j,r[12]=o*D+a*H+c*G+l*Q,r[1]=h*w+d*R+u*I+f*te,r[5]=h*_+d*N+u*B+f*W,r[9]=h*b+d*O+u*q+f*j,r[13]=h*D+d*H+u*G+f*Q,r[2]=g*w+x*R+p*I+m*te,r[6]=g*_+x*N+p*B+m*W,r[10]=g*b+x*O+p*q+m*j,r[14]=g*D+x*H+p*G+m*Q,r[3]=S*w+E*R+y*I+T*te,r[7]=S*_+E*N+y*B+T*W,r[11]=S*b+E*O+y*q+T*j,r[15]=S*D+E*H+y*G+T*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],S=c*f-l*u,E=a*f-l*d,y=a*u-c*d,T=o*f-l*h,w=o*u-c*h,_=o*d-a*h;return t*(x*S-p*E+m*y)-n*(g*S-p*T+m*w)+s*(g*E-x*T+m*_)-r*(g*y-x*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],S=t*a-n*o,E=t*c-s*o,y=t*l-r*o,T=n*c-s*a,w=n*l-r*a,_=s*l-r*c,b=h*x-d*g,D=h*p-u*g,R=h*m-f*g,N=d*p-u*x,O=d*m-f*x,H=u*m-f*p,I=S*H-E*O+y*N+T*R-w*D+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(a*H-c*O+l*N)*B,e[1]=(s*O-n*H-r*N)*B,e[2]=(x*_-p*w+m*T)*B,e[3]=(u*w-d*_-f*T)*B,e[4]=(c*R-o*H-l*D)*B,e[5]=(t*H-s*R+r*D)*B,e[6]=(p*y-g*_-m*E)*B,e[7]=(h*_-u*y+f*E)*B,e[8]=(o*O-a*R+l*b)*B,e[9]=(n*R-t*O-r*b)*B,e[10]=(g*w-x*y+m*S)*B,e[11]=(d*y-h*w-f*S)*B,e[12]=(a*D-o*N-c*b)*B,e[13]=(t*N-n*D+s*b)*B,e[14]=(x*E-g*T-p*S)*B,e[15]=(h*T-d*E+u*S)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,x=o*h,p=o*d,m=a*d,S=c*l,E=c*h,y=c*d,T=n.x,w=n.y,_=n.z;return s[0]=(1-(x+m))*T,s[1]=(f+y)*T,s[2]=(g-E)*T,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+m))*w,s[6]=(p+S)*w,s[7]=0,s[8]=(g+E)*_,s[9]=(p-S)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),c=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);let l=1/o,h=1/a,d=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Rn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Rn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===$s)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Rn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Rn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===$s)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Os=new L,Dn=new Ne,Wg=new L(0,0,0),Xg=new L(1,1,1),Oi=new L,Yo=new L,gn=new L,Ed=new Ne,Ad=new Gt,qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qg=0,Rd=new L,Fs=new Gt,li=new Ne,Ko=new L,Or=new L,Yg=new L,Kg=new Gt,Cd=new L(1,0,0),Id=new L(0,1,0),Pd=new L(0,0,1),Ld={type:"added"},Zg={type:"removed"},Bs={type:"childadded",child:null},ll={type:"childremoved",child:null},lt=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new qn,n=new Gt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new De}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Cd,e)}rotateY(e){return this.rotateOnAxis(Id,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cd,e)}translateY(e){return this.translateOnAxis(Id,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Or,Ko,this.up):li.lookAt(Ko,Or,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(li),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};lt.DEFAULT_UP=new L(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Lt=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jg={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=fh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Ge.workingToColorSpace($t.copy(this),e),Math.round(Ve($t.r*255,0,255))*65536+Math.round(Ve($t.g*255,0,255))*256+Math.round(Ve($t.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=bt){Ge.workingToColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Zo);let n=qr(Fi.h,Zo.h,t),s=qr(Fi.s,Zo.s,t),r=qr(Fi.l,Zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Re;Re.NAMES=qf;var cn=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new L,hi=new L,ul=new L,ui=new L,zs=new L,ks=new L,Nd=new L,dl=new L,fl=new L,pl=new L,ml=new it,gl=new it,_l=new it,Gi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),hi.subVectors(n,t),ul.subVectors(e,t);let o=Un.dot(Un),a=Un.dot(hi),c=Un.dot(ul),l=hi.dot(hi),h=hi.dot(ul),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ml,r.x),o.addScaledVector(gl,r.y),o.addScaledVector(_l,r.z),o}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),hi.subVectors(e,t),Un.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Un.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),ks.subVectors(r,n),dl.subVectors(e,n);let c=zs.dot(dl),l=ks.dot(dl);if(c<=0&&l<=0)return t.copy(n);fl.subVectors(e,s);let h=zs.dot(fl),d=ks.dot(fl);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(zs,o);pl.subVectors(e,r);let f=zs.dot(pl),g=ks.dot(pl);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ks,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Nd.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Nd,a);let m=1/(p+x+u);return o=x*m,a=u*m,t.copy(n).addScaledVector(zs,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},St=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),$o.subVectors(this.max,Fr),Hs.subVectors(e.a,Fr),Gs.subVectors(e.b,Fr),Vs.subVectors(e.c,Fr),Bi.subVectors(Gs,Hs),zi.subVectors(Vs,Gs),ls.subVectors(Hs,Vs);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ls.z,ls.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ls.z,0,-ls.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ls.y,ls.x,0];return!xl(t,Hs,Gs,Vs,$o)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Hs,Gs,Vs,$o))?!1:(jo.crossVectors(Bi,zi),t=[jo.x,jo.y,jo.z],xl(t,Hs,Gs,Vs,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,Jo=new St,Hs=new L,Gs=new L,Vs=new L,Bi=new L,zi=new L,ls=new L,Fr=new L,$o=new L,jo=new L,hs=new L;function xl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Rt=new L,Qo=new Ae,$g=0,ut=class extends Fn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$g++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=e!==void 0?Ic(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qo.fromBufferAttribute(this,t),Qo.applyMatrix3(e),this.setXY(t,Qo.x,Qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gh(e,this.array)}};var Jr=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $r=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ht=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},jg=new St,Br=new L,yl=new L,ln=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(yl)),this.expandByPoint(Br.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qg=0,An=new Ne,vl=new lt,Ws=new L,_n=new St,zr=new St,kt=new L,nn=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tg(e)?$r:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(_n.min,zr.min),_n.expandByPoint(kt),kt.addVectors(_n.max,zr.max),_n.expandByPoint(kt)):(_n.expandByPoint(zr.min),_n.expandByPoint(zr.max))}_n.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(e,l),kt.add(Ws)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)a[D]=new L,c[D]=new L;let h=new L,d=new L,u=new L,f=new Ae,g=new Ae,x=new Ae,p=new L,m=new L;function S(D,R,N){l[D]=l[R]=l[N]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,R),x.fromBufferAttribute(r,N),d.sub(h),u.sub(h),g.sub(f),x.sub(f);let O=1/(g.x*x.y-x.x*g.y);isFinite(O)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(O),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(O),a[D].add(p),a[R].add(p),a[N].add(p),c[D].add(m),c[R].add(m),c[N].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,R=E.length;D<R;++D){let N=E[D],O=N.start,H=N.count;for(let I=O,B=O+H;I<B;I+=3)S(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new L,T=new L,w=new L,_=new L;function b(D){w.fromBufferAttribute(s,D),_.copy(w);let R=a[D];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(_,R);let O=T.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,O)}for(let D=0,R=n.count;D<R;++D)l[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new ut(u,h,d)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Dd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Dd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Dd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ei()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var en=new L,sr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Ic(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gh(e,this.data.array)}},Ml=new L,e0=new L,t0=new De,xn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ml.subVectors(n,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||t0.getNormalMatrix(e),s=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},n0=0,sn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=pr,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fi=new L,Sl=new L,ea=new L,ta=new L,Yn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sl.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ta.copy(this.origin).sub(Sl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ea),a=ta.dot(this.direction),c=-ta.dot(ea),l=ta.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sl).addScaledVector(ea,u),f}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=n.x-o.x,S=n.y-o.y,E=n.z-o.z,y=Math.abs(c),T=Math.abs(l),w=Math.abs(h),_,b,D,R,N,O,H,I,B,q,G,te;if(y>=T&&y>=w?(D=c,O=d,B=g,te=m,c>=0?(_=l,b=h,R=u,N=f,H=x,I=p,q=S,G=E):(_=h,b=l,R=f,N=u,H=p,I=x,q=E,G=S)):T>=w?(D=l,O=u,B=x,te=S,l>=0?(_=h,b=c,R=f,N=d,H=p,I=g,q=E,G=m):(_=c,b=h,R=d,N=f,H=g,I=p,q=m,G=E)):(D=h,O=f,B=p,te=E,h>=0?(_=c,b=l,R=d,N=u,H=g,I=x,q=m,G=S):(_=l,b=c,R=u,N=d,H=x,I=g,q=S,G=m)),D===0)return null;let W=_/D,j=b/D,Q=1/D,Se=R-W*O,Oe=N-j*O,Z=H-W*B,pe=I-j*B,ye=q-W*te,Ce=G-j*te,me=ye*pe-Ce*Z,Be=Se*Ce-Oe*ye,Et=Z*Oe-pe*Se;if(s){if(me<0||Be<0||Et<0)return null}else if((me<0||Be<0||Et<0)&&(me>0||Be>0||Et>0))return null;let Pe=me+Be+Et;if(Pe===0)return null;let tt=Q*(me*O+Be*B+Et*te);return(Pe>0?tt<0:tt>0)?null:this.at(tt/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kn=class extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ud=new Ne,us=new Yn,na=new ln,Od=new L,ia=new L,sa=new L,ra=new L,bl=new L,oa=new L,Fd=new L,aa=new L,dt=class extends lt{constructor(e=new nn,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(bl.fromBufferAttribute(d,e),o?oa.addScaledVector(bl,h):oa.addScaledVector(bl.sub(t),h))}t.add(oa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(na.containsPoint(us.origin)===!1&&(us.intersectSphere(na,Od)===null||us.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Ud.copy(r).invert(),us.copy(e.ray).applyMatrix4(Ud),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,T=E;y<T;y+=3){let w=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);s=ca(this,m,e,n,l,h,d,w,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let S=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=ca(this,o,e,n,l,h,d,S,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,T=E;y<T;y+=3){let w=y,_=y+1,b=y+2;s=ca(this,m,e,n,l,h,d,w,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let S=p,E=p+1,y=p+2;s=ca(this,o,e,n,l,h,d,S,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function i0(i,e,t,n,s,r,o,a){let c;if(e.side===Yt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===jn,a),c===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(aa);return l<t.near||l>t.far?null:{distance:l,point:aa.clone(),object:i}}function ca(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ia),i.getVertexPosition(c,sa),i.getVertexPosition(l,ra);let h=i0(i,e,t,n,ia,sa,ra,Fd);if(h){let d=new L;Gi.getBarycoord(Fd,ia,sa,ra,d),s&&(h.uv=Gi.getInterpolatedAttribute(s,a,c,l,d,new Ae)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,a,c,l,d,new Ae)),o&&(h.normal=Gi.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Gi.getNormal(ia,sa,ra,u.normal),h.face=u,h.barycoord=d}return h}var kr=new it,Bd=new it,zd=new it,s0=new it,kd=new Ne,la=new L,Tl=new ln,Hd=new Ne,wl=new Yn,jr=class extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cl,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new St),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,la),this.boundingBox.expandByPoint(la)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,la),this.boundingSphere.expandByPoint(la)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(s),e.ray.intersectsSphere(Tl)!==!1&&(Hd.copy(s).invert(),wl.copy(e.ray).applyMatrix4(Hd),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Bd.fromBufferAttribute(s.attributes.skinIndex,e),zd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(kr.copy(t),t.set(0,0,0,0)):(kr.set(t.x,t.y,t.z,1),t.set(0,0,0)),kr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=zd.getComponent(r);if(o!==0){let a=Bd.getComponent(r);kd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(s0.copy(kr).applyMatrix4(kd),o)}}return t.isVector4&&(t.w=kr.w),t.applyMatrix4(this.bindMatrixInverse)}},rr=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},or=class extends Nt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=vt,h=vt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gd=new Ne,r0=new Ne,Qr=class i{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:r0;Gd.multiplyMatrices(a,t[r]),Gd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new or(t,e,e,pn,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Te("Skeleton: No bone found with UUID:",r),o=new rr),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},vi=class extends ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new Ne,Vd=new Ne,ha=[],Wd=new St,o0=new Ne,Hr=new dt,Gr=new ln,ms=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,o0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new St),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Wd.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Gr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Vd.multiplyMatrices(n,Xs),Hr.matrixWorld=Vd,Hr.raycast(e,ha);for(let o=0,a=ha.length;o<a;o++){let c=ha[o];c.instanceId=r,c.object=this,t.push(c)}ha.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(s*this.count),s,this.count,Ja,vn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ds=new ln,a0=new Ae(.5,.5),ua=new L,Wi=class{constructor(e=new xn,t=new xn,n=new xn,s=new xn,r=new xn,o=new xn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],S=r[12],E=r[13],y=r[14],T=r[15];if(s[0].setComponents(l-o,f-h,m-g,T-S).normalize(),s[1].setComponents(l+o,f+h,m+g,T+S).normalize(),s[2].setComponents(l+a,f+d,m+x,T+E).normalize(),s[3].setComponents(l-a,f-d,m-x,T-E).normalize(),n)s[4].setComponents(c,u,p,y).normalize(),s[5].setComponents(l-c,f-u,m-p,T-y).normalize();else if(s[4].setComponents(l-c,f-u,m-p,T-y).normalize(),t===Rn)s[5].setComponents(l+c,f+u,m+p,T+y).normalize();else if(t===$s)s[5].setComponents(c,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);let t=a0.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ua.x=s.normal.x>0?e.max.x:e.min.x,ua.y=s.normal.y>0?e.max.y:e.min.y,ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xd=new Ne,Ca=class i{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Xd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Wi),n[s].setFromProjectionMatrix(Xd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Wi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ar=class extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ia=new L,Pa=new L,qd=new Ne,Vr=new Yn,da=new ln,El=new L,Yd=new L,gs=class extends lt{constructor(e=new nn,t=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ia.fromBufferAttribute(t,s-1),Pa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(Pa);e.setAttribute("lineDistance",new Ht(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;qd.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=h.getX(x),S=h.getX(x+1),E=fa(this,e,Vr,c,m,S,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=fa(this,e,Vr,c,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=fa(this,e,Vr,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=fa(this,e,Vr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ia.fromBufferAttribute(a,s),Pa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ia,Pa,El,Yd)>n)return;El.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(El);if(!(l<e.near||l>e.far))return{distance:l,point:Yd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Kd=new L,Zd=new L,eo=class extends gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kd.fromBufferAttribute(t,s),Zd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kd.distanceTo(Zd);e.setAttribute("lineDistance",new Ht(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},to=class extends gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},cr=class extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jd=new Ne,Dl=new Yn,pa=new ln,ma=new L,no=class extends lt{constructor(e=new nn,t=new cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Jd.copy(s).invert(),Dl.copy(e.ray).applyMatrix4(Jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let p=l.getX(g);ma.fromBufferAttribute(d,p),$d(ma,p,c,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)ma.fromBufferAttribute(d,g),$d(ma,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $d(i,e,t,n,s,r,o){let a=Dl.distanceSqToPoint(i);if(a<t){let c=new L;Dl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xi=class extends Nt{constructor(e=[],t,n,s,r,o,a,c,l,h,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var io=class extends Nt{constructor(e=[],t=Ss,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Mi=class extends Nt{constructor(e,t,n=zn,s,r,o,a=vt,c=vt,l,h=gi,d=1){if(h!==gi&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},so=class extends Mi{constructor(e,t=zn,n=Ss,s,r,o=vt,a=vt,c,l=gi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ro=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qi=class i extends nn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(d,2));function g(x,p,m,S,E,y,T,w,_,b,D){let R=y/_,N=T/b,O=y/2,H=T/2,I=w/2,B=_+1,q=b+1,G=0,te=0,W=new L;for(let j=0;j<q;j++){let Q=j*N-H;for(let Se=0;Se<B;Se++){let Oe=Se*R-O;W[x]=Oe*S,W[p]=Q*E,W[m]=I,l.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=w>0?1:-1,h.push(W.x,W.y,W.z),d.push(Se/_),d.push(1-j/b),G+=1}}for(let j=0;j<b;j++)for(let Q=0;Q<_;Q++){let Se=u+Q+B*j,Oe=u+Q+B*(j+1),Z=u+(Q+1)+B*(j+1),pe=u+(Q+1)+B*j;c.push(Se,Oe,pe),c.push(Oe,Z,pe),te+=6}a.addGroup(f,te,D),f+=te,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},oo=class i extends nn{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=n*2+r,x=s+1,p=new L,m=new L;for(let S=0;S<=g;S++){let E=0,y=0,T=0,w=0;if(S<=n){let D=S/n,R=D*Math.PI/2;y=-h-e*Math.cos(R),T=e*Math.sin(R),w=-e*Math.cos(R),E=D*d}else if(S<=n+r){let D=(S-n)/r;y=-h+D*t,T=e,w=0,E=d+D*u}else{let D=(S-n-r)/n,R=D*Math.PI/2;y=h+e*Math.sin(R),T=e*Math.cos(R),w=e*Math.sin(R),E=d+u+D*d}let _=Math.max(0,Math.min(1,E/f)),b=0;S===0?b=.5/s:S===g&&(b=-.5/s);for(let D=0;D<=s;D++){let R=D/s,N=R*Math.PI*2,O=Math.sin(N),H=Math.cos(N);m.x=-T*H,m.y=y,m.z=T*O,a.push(m.x,m.y,m.z),p.set(-T*H,w,T*O),p.normalize(),c.push(p.x,p.y,p.z),l.push(R+b,_)}if(S>0){let D=(S-1)*x;for(let R=0;R<s;R++){let N=D+R,O=D+R+1,H=S*x+R,I=S*x+R+1;o.push(N,O,H),o.push(O,I,H)}}}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var ao=class i extends nn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let S=m*u-o;for(let E=0;E<l;E++){let y=E*d-r;g.push(y,-S,0),x.push(0,0,1),p.push(E/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){let E=S+l*m,y=S+l*(m+1),T=S+1+l*(m+1),w=S+1+l*m;f.push(E,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(jd(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(jd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=Ts(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function c0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _h(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Yf={clone:Ts,merge:jt},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new it().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},La=class extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Cn=class extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends Cn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var co=class extends sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Na=class extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Da=class extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function u0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function d0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Jn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ua=class extends Jn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ll:r=e,a=2*t-n;break;case Nl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:o=e,c=2*n-t;break;case Nl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,S=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,E=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+S*o[l+T]+E*o[c+T]+y*o[d+T];return r}},Oa=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Fa=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ba=class extends Jn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*g;return r}let u=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=f*u+g*2,S=d[m],E=d[m+1],y=e*u+g*2,T=h[y],w=h[y+1],_=p0(n,t,S,T,s);r[g]=Kf(_,x,E,w,p)}return r}};function Kf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function f0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function p0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Kf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=f0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hi(t,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hi(e.times,Array),values:Hi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wr(e.settings)&&(n.settings={inTangents:Hi(e.settings.inTangents,Array),outTangents:Hi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ba(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _i:t=this.InterpolantFactoryMethodDiscrete;break;case xi:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break;case Il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _i;case this.InterpolantFactoryMethodLinear:return xi;case this.InterpolantFactoryMethodSmooth:return xa;case this.InterpolantFactoryMethodBezier:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Wr(this.settings)&&(ef(this.settings.inTangents,e),ef(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wr(this.settings)&&(tf(this.settings.inTangents,e),tf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Le("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&wg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ef(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function tf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=xi;var Si=class extends hn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=_i;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};lo.prototype.ValueTypeName="color";var bi=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};bi.prototype.ValueTypeName="number";var za=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Gt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ti=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends hn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=_i;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Yi.prototype.ValueTypeName="vector";var ho=class{constructor(e="",t=-1,n=[],s=Nf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ei(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(g0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=u0(c);c=Qd(c,1,h),l=Qd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new bi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function m0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return lo;case"quaternion":return Ti;case"bool":case"boolean":return Si;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function g0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=m0(i.type);if(i.times===void 0){let n=[],s=[];d0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Wr(i.settings)&&(t.settings={inTangents:Hi(i.settings.inTangents,Float32Array),outTangents:Hi(i.settings.outTangents,Float32Array)}),t}var Wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(nf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!nf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ka=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zf=new ka,$n=class{constructor(e){this.manager=e!==void 0?e:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$n.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},Ul=class extends Error{constructor(e,t){super(e),this.response=t}},lr=class extends $n{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=pi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,x=0,p=new ReadableStream({start(m){S();function S(){d.read().then(({done:E,value:y})=>{if(E)m.close();else{x+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,_=h.length;w<_;w++){let b=h[w];b.onProgress&&b.onProgress(T)}m.enqueue(y),S()}},E=>{m.error(E)})}}});return new Response(p)}else throw new Ul(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Wn.add(`file:${e}`,l);let h=pi[e];delete pi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qs=new WeakMap,Ha=class extends $n{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=qs.get(o);d===void 0&&(d=[],qs.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=js("img");function c(){h(),t&&t(this);let d=qs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),Wn.remove(`image:${e}`);let u=qs.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var uo=class extends $n{constructor(e){super(e)}load(e,t,n,s){let r=new Nt,o=new Ha(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},_s=class extends lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ei=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Al=new Ne,sf=new L,rf=new L,hr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===$s||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ga=new L,_a=new Gt,Vn=new L,fo=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ga,_a,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,_a,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ga,_a,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,_a,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new L,of=new Ae,af=new Ae,yt=class extends fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,of,af),t.subVectors(af,of)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ol=class extends hr{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},po=class extends _s{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ol}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Fl=class extends hr{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0}},xs=class extends _s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ys=class extends fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends hr{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bn=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ai=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Rl=new WeakMap,mo=class extends $n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Rl.has(o)===!0?(s&&s(Rl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Rl.set(c,l),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ys=-90,Ks=1,ur=class extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yt(Ys,Ks,e,t);s.layers=this.layers,this.add(s);let r=new yt(Ys,Ks,e,t);r.layers=this.layers,this.add(r);let o=new yt(Ys,Ks,e,t);o.layers=this.layers,this.add(o);let a=new yt(Ys,Ks,e,t);a.layers=this.layers,this.add(a);let c=new yt(Ys,Ks,e,t);c.layers=this.layers,this.add(c);let l=new yt(Ys,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ga=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var xh="\\[\\]\\.:\\/",_0=new RegExp("["+xh+"]","g"),yh="[^"+xh+"]",x0="[^"+xh.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",yh),v0=/(WCOD+)?/.source.replace("WCOD",x0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),b0=new RegExp("^"+y0+v0+M0+S0+"$"),T0=["material","materials","bones","map"],zl=class{constructor(e,t,n){let s=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Je=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_0,"")}static parseTrackName(e){let t=b0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);T0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=zl;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QS=new Float32Array(1);var cf=new Ne,go=class{constructor(e,t,n=0,s=1/0){this.ray=new Yn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cf),this}intersectObject(e,t=!0,n=[]){return kl(e,this,n,t),n.sort(lf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)kl(e[s],this,n,t);return n.sort(lf),n}};function lf(i,e){return i.distance-e.distance}function kl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)kl(r[o],e,t,!0)}}var _o=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Te("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},dr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Hl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var xo=class extends Fn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function vh(i,e,t,n){let s=w0(n);switch(t){case rh:return i*e;case Ja:return i*e/s.components*s.byteLength;case $a:return i*e/s.components*s.byteLength;case $i:return i*e*2/s.components*s.byteLength;case ja:return i*e*2/s.components*s.byteLength;case oh:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Qa:return i*e*4/s.components*s.byteLength;case vo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case sc:case rc:case ac:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:case To:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tc:case wc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wo:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(i){switch(i){case fn:case th:return{byteLength:1,components:1};case _r:case nh:case kn:return{byteLength:2,components:1};case Ka:case Za:return{byteLength:2,components:4};case zn:case Ya:case vn:return{byteLength:4,components:1};case ih:case sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _p(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function E0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,J0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,$0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
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
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,x_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,T_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,w_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,C_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
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
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Z_=`#ifdef USE_NORMALMAP
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
#endif`,J_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mx=`#ifdef USE_SKINNING
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
#endif`,gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,Ux=`#define DISTANCE
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
void main() {
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
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
}`,zx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Gx=`#define LAMBERT
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
}`,Vx=`#define LAMBERT
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define NORMAL
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
}`,Yx=`#define NORMAL
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
}`,Kx=`#define PHONG
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
}`,Zx=`#define PHONG
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
}`,Jx=`#define STANDARD
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
}`,$x=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,jx=`#define TOON
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
}`,Qx=`#define TOON
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
}`,ey=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,sy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:I0,alphatest_fragment:P0,alphatest_pars_fragment:L0,aomap_fragment:N0,aomap_pars_fragment:D0,batching_pars_vertex:U0,batching_vertex:O0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:k0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:Y0,color_pars_vertex:K0,color_vertex:Z0,common:J0,defaultnormal_vertex:$0,displacementmap_pars_vertex:j0,displacementmap_vertex:Q0,emissivemap_fragment:e_,emissivemap_pars_fragment:t_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:s_,envmap_common_pars_fragment:r_,envmap_pars_fragment:o_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:x_,envmap_vertex:c_,fog_vertex:l_,fog_pars_vertex:h_,fog_fragment:u_,fog_pars_fragment:d_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:__,lights_toon_fragment:y_,lights_toon_pars_fragment:v_,lights_phong_fragment:M_,lights_phong_pars_fragment:S_,lights_physical_fragment:b_,lights_physical_pars_fragment:T_,lights_fragment_begin:w_,lights_fragment_maps:E_,lights_fragment_end:A_,lightprobes_pars_fragment:R_,logdepthbuf_fragment:C_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:L_,map_fragment:N_,map_pars_fragment:D_,map_particle_fragment:U_,map_particle_pars_fragment:O_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:B_,morphinstance_vertex:z_,morphcolor_vertex:k_,morphnormal_vertex:H_,morphtarget_pars_vertex:G_,morphtarget_vertex:V_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:q_,normal_pars_vertex:Y_,normal_vertex:K_,normalmap_pars_fragment:Z_,clearcoat_normal_fragment_begin:J_,clearcoat_normal_fragment_maps:$_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Q_,opaque_fragment:ex,packing:tx,premultiplied_alpha_fragment:nx,project_vertex:ix,dithering_fragment:sx,dithering_pars_fragment:rx,roughnessmap_fragment:ox,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:lx,shadowmap_vertex:hx,shadowmask_pars_fragment:ux,skinbase_vertex:dx,skinning_pars_vertex:fx,skinning_vertex:px,skinnormal_vertex:mx,specularmap_fragment:gx,specularmap_pars_fragment:_x,tonemapping_fragment:xx,tonemapping_pars_fragment:yx,transmission_fragment:vx,transmission_pars_fragment:Mx,uv_pars_fragment:Sx,uv_pars_vertex:bx,uv_vertex:Tx,worldpos_vertex:wx,background_vert:Ex,background_frag:Ax,backgroundCube_vert:Rx,backgroundCube_frag:Cx,cube_vert:Ix,cube_frag:Px,depth_vert:Lx,depth_frag:Nx,distance_vert:Dx,distance_frag:Ux,equirect_vert:Ox,equirect_frag:Fx,linedashed_vert:Bx,linedashed_frag:zx,meshbasic_vert:kx,meshbasic_frag:Hx,meshlambert_vert:Gx,meshlambert_frag:Vx,meshmatcap_vert:Wx,meshmatcap_frag:Xx,meshnormal_vert:qx,meshnormal_frag:Yx,meshphong_vert:Kx,meshphong_frag:Zx,meshphysical_vert:Jx,meshphysical_frag:$x,meshtoon_vert:jx,meshtoon_frag:Qx,points_vert:ey,points_frag:ty,shadow_vert:ny,shadow_frag:iy,sprite_vert:sy,sprite_frag:ry},fe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ii={basic:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:jt([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:jt([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:jt([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:jt([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:jt([fe.lights,fe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ii.physical={uniforms:jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Pc={r:0,b:0,g:0},oy=new Ne,xp=new De;xp.set(-1,0,0,0,1,0,0,0,1);function ay(i,e,t,n,s,r){let o=new Re(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let y=S.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(S){let E=!1,y=f(S);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,E){let y=f(E);y&&y.isCubeTexture?(l===void 0&&(l=new dt(new qi(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Ts(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xp),l.material.toneMapped=Ge.getTransfer(y.colorSpace)!==Qe,(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dt(new ao(2,2),new Zn({name:"BackgroundMaterial",uniforms:Ts(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(y.colorSpace)!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(Pc,_h(i)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:g,addToRenderList:x,dispose:m}}function cy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(N,O,H,I,B){let q=!1,G=d(N,I,H,O);r!==G&&(r=G,l(r.object)),q=f(N,I,H,B),q&&g(N,I,H,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(N,O,H,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,O,H,I){let B=I.wireframe===!0,q=n[O.id];q===void 0&&(q={},n[O.id]=q);let G=N.isInstancedMesh===!0?N.id:0,te=q[G];te===void 0&&(te={},q[G]=te);let W=te[H.id];W===void 0&&(W={},te[H.id]=W);let j=W[B];return j===void 0&&(j=u(c()),W[B]=j),j}function u(N){let O=[],H=[],I=[];for(let B=0;B<t;B++)O[B]=0,H[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,O,H,I){let B=r.attributes,q=O.attributes,G=0,te=H.getAttributes();for(let W in te)if(te[W].location>=0){let Q=B[W],Se=q[W];if(Se===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),Q===void 0||Q.attribute!==Se||Se&&Q.data!==Se.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function g(N,O,H,I){let B={},q=O.attributes,G=0,te=H.getAttributes();for(let W in te)if(te[W].location>=0){let Q=q[W];Q===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let Se={};Se.attribute=Q,Q&&Q.data&&(Se.data=Q.data),B[W]=Se,G++}r.attributes=B,r.attributesNum=G,r.index=I}function x(){let N=r.newAttributes;for(let O=0,H=N.length;O<H;O++)N[O]=0}function p(N){m(N,0)}function m(N,O){let H=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;H[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),B[N]!==O&&(i.vertexAttribDivisor(N,O),B[N]=O)}function S(){let N=r.newAttributes,O=r.enabledAttributes;for(let H=0,I=O.length;H<I;H++)O[H]!==N[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function E(N,O,H,I,B,q,G){G===!0?i.vertexAttribIPointer(N,O,H,B,q):i.vertexAttribPointer(N,O,H,I,B,q)}function y(N,O,H,I){x();let B=I.attributes,q=H.getAttributes(),G=O.defaultAttributeValues;for(let te in q){let W=q[te];if(W.location>=0){let j=B[te];if(j===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let Q=j.normalized,Se=j.itemSize,Oe=e.get(j);if(Oe===void 0)continue;let Z=Oe.buffer,pe=Oe.type,ye=Oe.bytesPerElement,Ce=pe===i.INT||pe===i.UNSIGNED_INT||j.gpuType===Ya;if(j.isInterleavedBufferAttribute){let me=j.data,Be=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Et=j.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Pe=0;Pe<W.locationSize;Pe++)m(W.location+Pe,me.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)p(W.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Pe=0;Pe<W.locationSize;Pe++)E(W.location+Pe,Se/W.locationSize,pe,Q,Be*ye,(Et+Se/W.locationSize*Pe)*ye,Ce)}else{if(j.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)m(W.location+me,j.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<W.locationSize;me++)p(W.location+me);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let me=0;me<W.locationSize;me++)E(W.location+me,Se/W.locationSize,pe,Q,Se*ye,Se/W.locationSize*me*ye,Ce)}}else if(G!==void 0){let Q=G[te];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(W.location,Q);break;case 3:i.vertexAttrib3fv(W.location,Q);break;case 4:i.vertexAttrib4fv(W.location,Q);break;default:i.vertexAttrib1fv(W.location,Q)}}}}S()}function T(){D();for(let N in n){let O=n[N];for(let H in O){let I=O[H];for(let B in I){let q=I[B];for(let G in q)h(q[G].object),delete q[G];delete I[B]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let H in O){let I=O[H];for(let B in I){let q=I[B];for(let G in q)h(q[G].object),delete q[G];delete I[B]}}delete n[N.id]}function _(N){for(let O in n){let H=n[O];for(let I in H){let B=H[I];if(B[N.id]===void 0)continue;let q=B[N.id];for(let G in q)h(q[G].object),delete q[G];delete B[N.id]}}}function b(N){for(let O in n){let H=n[O],I=N.isInstancedMesh===!0?N.id:0,B=H[I];if(B!==void 0){for(let q in B){let G=B[q];for(let te in G)h(G[te].object),delete G[te];delete B[q]}delete H[I],Object.keys(H).length===0&&delete n[O]}}}function D(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function ly(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function hy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==pn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==fn&&_!==vn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Te("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:w}}function uy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new xn,a=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let S=r?0:n,E=S*4,y=m.clippingState||null;c.value=y,y=h(g,u,E,f);for(let T=0;T!==E;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==x;++E,y+=4)o.copy(d[E]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var Io=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:vs});r.uniforms.tEquirect.value=t;let o=new dt(s,r),a=t.minFilter;return t.minFilter===dn&&(t.minFilter=Tt),new ur(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Jf=256,dy=3,fy=20,yp=256,vp=16,py=3,my=new L,gy=new Re,si=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ur(1,10,null),this._boxMesh=new dt(new qi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=my}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(gy));let p=new ur(n,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jf,ph(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===mr?this._setSize(e.image.length===0?Jf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=$f(e,!1,!1),n=Math.log2(e)-dy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=$f(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_y(),this._integrationMaterial=xy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/vp);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-py)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(yp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function $f(i,e,t){return new Io(i,{minFilter:dn,generateMipmaps:e,type:kn,colorSpace:tn,depthBuffer:t})}function Po(i,e,t){return new Zn({name:i,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:Yt,blending:vs,depthTest:!1,depthWrite:!1})}function _y(){return Po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xy(){return Po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yy(){return Po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function jf(){return Po("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qf(){return Po("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Xa||f===qa)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Io(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",l),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Xa||f===qa,x=f===Ss||f===mr;if(g||x){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new si(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return g&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new si(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Xa?u.mapping=Ss:f===qa&&(u.mapping=mr),u}function c(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function My(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Sy(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function d(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let S=x!==null?x.array.length:p.array.length/3-1,E=p.count>=65535?$r:Jr,y=new E(Math.ceil(S/3)*6,1),T=y.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,D=0;b<S;b+=3){let R=_[b+0],N=_[b+1],O=_[b+2];T[D++]=R,T[D++]=N,T[D++]=N,T[D++]=O,T[D++]=O,T[D++]=R}}else{m=p.version;for(let _=0,b=0;_<S;_+=3){let D=_+0,R=_+1,N=_+2;T[b++]=D,T[b++]=R,T[b++]=R,T[b++]=N,T[b++]=N,T[b++]=D}}y.version=m;let w=r.get(g);w&&e.remove(w),r.set(g,y)}function u(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function by(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ty(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Le("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wy(i,e,t){let n=new WeakMap,s=new it;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let D=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let y=a.attributes.position.count*E,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*T*4*d),_=new Zr(w,y,T,d);_.type=vn,_.needsUpdate=!0;let b=E*4;for(let R=0;R<d;R++){let N=p[R],O=m[R],H=S[R],I=y*T*4*R;for(let B=0;B<N.count;B++){let q=B*b;f===!0&&(s.fromBufferAttribute(N,B),w[I+q+0]=s.x,w[I+q+1]=s.y,w[I+q+2]=s.z,w[I+q+3]=0),g===!0&&(s.fromBufferAttribute(O,B),w[I+q+4]=s.x,w[I+q+5]=s.y,w[I+q+6]=s.z,w[I+q+7]=0),x===!0&&(s.fromBufferAttribute(H,B),w[I+q+8]=s.x,w[I+q+9]=s.y,w[I+q+10]=s.z,w[I+q+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Ae(y,T)},n.set(a,u),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ey(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Ay={[Kl]:"LINEAR_TONE_MAPPING",[Zl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[Ri]:"ACES_FILMIC_TONE_MAPPING",[jl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function Ry(i,e,t,n,s,r){let o=new yn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new nn;h.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ht([0,2,0,0,2,0],2));let d=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new dt(h,d),f=new ys(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,S=null,E=[],y=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),c!==null&&c.setSize(T,w);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(T,w)}},this.setEffects=function(T){E=T,y=E.length>0&&E[0].isRenderPass===!0;let w=o.width,_=o.height;E.length>0&&a===null&&(a=new yn(w,_,{type:kn,depthBuffer:!1,stencilBuffer:!1}),c=new yn(w,_,{type:kn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(D=>D.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new Mi(w,_),r===!0&&(l.format=Ii,l.type=bs)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let D=0;D<E.length;D++){let R=E[D];R.setSize&&R.setSize(w,_),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(T,w){if(p||T.toneMapping===Qn&&E.length===0)return!1;if(S=w,w!==null){let _=w.width,b=w.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&T.setRenderTarget(o),m=T.toneMapping,T.toneMapping=Qn,!0},this.hasRenderPass=function(){return y},this.end=function(T,w){T.toneMapping=m,p=!0;let _=o,b=a;for(let D=0;D<E.length;D++){let R=E[D];R.enabled!==!1&&(R.render(T,b,_,w),R.needsSwap!==!1&&(_=b,b=b===a?c:a))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,d.defines={},Ge.getTransfer(g)===Qe&&(d.defines.SRGB_TRANSFER="");let D=Ay[x];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(S),T.render(u,f),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Mp=new Nt,Sp=new Mi(1,1),bp=new so(1),Tp=new Zr,wp=new Ra,Ep=new io,ep=[],tp=[],np=new Float32Array(16),ip=new Float32Array(9),sp=new Float32Array(4);function vr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ep[s];if(r===void 0&&(r=new Float32Array(s),ep[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nc(i,e){let t=tp[e];t===void 0&&(t=new Int32Array(e),tp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Ny(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;sp.set(n),i.uniformMatrix2fv(this.addr,!1,sp),Ut(t,n)}}function Dy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;ip.set(n),i.uniformMatrix3fv(this.addr,!1,ip),Ut(t,n)}}function Uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;np.set(n),i.uniformMatrix4fv(this.addr,!1,np),Ut(t,n)}}function Oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Dc(i){return i.version===0&&(i.compareFunction=hh,i.needsUpdate=!0),i}function Wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Dc(Sp):r=Mp,t.setTexture2D(e||r,s)}function Xy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wp,s)}function qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Dc(bp):r=Ep,t.setTextureCube(e||r,s)}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tp,s)}function Ky(i){switch(i){case 5126:return Cy;case 35664:return Iy;case 35665:return Py;case 35666:return Ly;case 35674:return Ny;case 35675:return Dy;case 35676:return Uy;case 5124:case 35670:return Oy;case 35667:case 35671:return Fy;case 35668:case 35672:return By;case 35669:case 35673:return zy;case 5125:return ky;case 36294:return Hy;case 36295:return Gy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function Zy(i,e){i.uniform1fv(this.addr,e)}function Jy(i,e){let t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function $y(i,e){let t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function jy(i,e){let t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function Qy(i,e){let t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ev(i,e){let t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tv(i,e){let t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nv(i,e){i.uniform1iv(this.addr,e)}function iv(i,e){i.uniform2iv(this.addr,e)}function sv(i,e){i.uniform3iv(this.addr,e)}function rv(i,e){i.uniform4iv(this.addr,e)}function ov(i,e){i.uniform1uiv(this.addr,e)}function av(i,e){i.uniform2uiv(this.addr,e)}function cv(i,e){i.uniform3uiv(this.addr,e)}function lv(i,e){i.uniform4uiv(this.addr,e)}function hv(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Dc(Sp):o=Mp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function uv(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wp,r[o])}function dv(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Dc(bp):o=Ep;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function fv(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tp,r[o])}function pv(i){switch(i){case 5126:return Zy;case 35664:return Jy;case 35665:return $y;case 35666:return jy;case 35674:return Qy;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}var bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ky(t.type)}},Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function rp(i,e){i.seq.push(e),i.map[e.id]=e}function mv(i,e,t){let n=i.name,s=n.length;for(Mh.lastIndex=0;;){let r=Mh.exec(n),o=Mh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rp(t,l===void 0?new bh(a,i,e):new Th(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new wh(a),rp(t,d)),t=d}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);mv(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function op(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gv=37297,_v=0;function xv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ap=new De;function yv(i){Ge._getMatrix(ap,Ge.workingColorSpace,i);let e=`mat3( ${ap.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case Yr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xv(i.getShaderSource(e),a)}else return r}function vv(i,e){let t=yv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Mv={[Kl]:"Linear",[Zl]:"Reinhard",[Jl]:"Cineon",[Ri]:"ACESFilmic",[jl]:"AgX",[Ql]:"Neutral",[$l]:"Custom"};function Sv(i,e){let t=Mv[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new L;function bv(){Ge.getLuminanceCoefficients(Lc);let i=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function wv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ev(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Co(i){return i!==""}function lp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function hp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(i){return i.replace(Av,Rv)}function Rv(i,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Eh(t)}var Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(i){return i.replace(Cv,Iv)}function Iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dp(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Pv={[yo]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function Lv(i){return Pv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nv={[mr]:"ENVMAP_MODE_REFRACTION"};function Dv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Uv={[Wa]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Pf]:"ENVMAP_BLENDING_ADD"};function Ov(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Uv[i.combine]||"ENVMAP_BLENDING_NONE"}function Fv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Lv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dv(t),d=Ov(t),u=Tv(t),f=wv(r),g=s.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Co).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Co).join(`
`),p.length>0&&(p+=`
`)):(x=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),p=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?He.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,vv("linearToOutputTexel",t.outputColorSpace),bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=Eh(o),o=lp(o,t),o=hp(o,t),a=Eh(a),a=lp(a,t),a=hp(a,t),o=up(o),a=up(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+x+o,E=m+p+a,y=op(s,s.VERTEX_SHADER,S),T=op(s,s.FRAGMENT_SHADER,E);s.attachShader(g,y),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(y)||"",H=s.getShaderInfoLog(T)||"",I=N.trim(),B=O.trim(),q=H.trim(),G=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,T);else{let W=cp(s,y,"vertex"),j=cp(s,T,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+j)}else I!==""?Te("WebGLProgram: Program Info Log:",I):(B===""||q==="")&&(te=!1);te&&(R.diagnostics={runnable:G,programLog:I,vertexShader:{log:B,prefix:x},fragmentShader:{log:q,prefix:p}})}s.deleteShader(y),s.deleteShader(T),_=new yr(s,g),b=Ev(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,gv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}var Bv=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}};function zv(i){return i===$i||i===To||i===wo}function kv(i,e,t,n,s,r){let o=new tr,a=new Ah,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,D,R,N,O){let H=R.fog,I=N.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||B,q),te=u[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Te("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=j!==void 0?j.length:0,Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let Oe,Z,pe,ye;if(te){let de=ii[te];Oe=de.vertexShader,Z=de.fragmentShader}else{Oe=_.vertexShader,Z=_.fragmentShader;let de=a.getVertexShaderStage(_),nt=a.getFragmentShaderStage(_);a.update(_,de,nt),pe=de.id,ye=nt.id}let Ce=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Be=N.isInstancedMesh===!0,Et=N.isBatchedMesh===!0,Pe=!!_.map,tt=!!_.matcap,rt=!!G,qe=rt&&G.isPMREMTexture===!0,Xt=!!_.aoMap,It=!!_.lightMap,on=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,Gn=!!_.displacementMap,Ft=!!_.emissiveMap,bn=!!_.metalnessMap,Tn=!!_.roughnessMap,wn=_.anisotropy>0,U=_.clearcoat>0,En=_.diffuseRoughness>0,ft=_.dispersion>0,pt=_.retroreflectivity>0,ue=_.iridescence>0,Pt=_.sheen>0,Ie=_.transmission>0,Ue=wn&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,v=U&&!!_.clearcoatNormalMap,z=U&&!!_.clearcoatRoughnessMap,ee=En&&!!_.diffuseRoughnessMap,$=ue&&!!_.iridescenceMap,se=ue&&!!_.iridescenceThicknessMap,le=Pt&&!!_.sheenColorMap,Y=Pt&&!!_.sheenRoughnessMap,K=!!_.specularMap,oe=!!_.specularColorMap,C=!!_.specularIntensityMap,J=Ie&&!!_.transmissionMap,X=Ie&&!!_.thicknessMap,ae=!!_.gradientMap,ie=!!_.alphaMap,re=_.alphaTest>0,we=!!_.alphaHash,ke=!!_.extensions,ne=Qn;_.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Ee=qe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ze={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Oe,fragmentShader:Z,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Et,batchingColor:Et&&N._colorsTexture!==null,instancing:Be,instancingColor:Be&&N.instanceColor!==null,instancingMorph:Be&&N.morphTexture!==null,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:tt,envMap:rt,envMapMode:rt&&G.mapping,envMapPMREM:qe,envMapMaxLod:qe?Ee.length-1:null,envMapSize:qe?Ee[0].width:null,aoMap:Xt,lightMap:It,bumpMap:on,normalMap:_t,displacementMap:Gn,emissiveMap:Ft,normalMapObjectSpace:_t&&_.normalMapType===Uf,normalMapTangentSpace:_t&&_.normalMapType===Ao,packedNormalMap:_t&&_.normalMapType===Ao&&zv(_.normalMap.format),metalnessMap:bn,roughnessMap:Tn,anisotropy:wn,anisotropyMap:Ue,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:En,diffuseRoughnessMap:ee,dispersion:ft,retroreflection:pt,iridescence:ue,iridescenceMap:$,iridescenceThicknessMap:se,sheen:Pt,sheenColorMap:le,sheenRoughnessMap:Y,specularMap:K,specularColorMap:oe,specularIntensityMap:C,transmission:Ie,transmissionMap:J,thicknessMap:X,gradientMap:ae,opaque:_.transparent===!1&&_.blending===pr&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:we,combine:_.combine,mapUv:Pe&&f(_.map.channel),aoMapUv:Xt&&f(_.aoMap.channel),lightMapUv:It&&f(_.lightMap.channel),bumpMapUv:on&&f(_.bumpMap.channel),normalMapUv:_t&&f(_.normalMap.channel),displacementMapUv:Gn&&f(_.displacementMap.channel),emissiveMapUv:Ft&&f(_.emissiveMap.channel),metalnessMapUv:bn&&f(_.metalnessMap.channel),roughnessMapUv:Tn&&f(_.roughnessMap.channel),anisotropyMapUv:Ue&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:oe&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:ie&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_t||wn),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Pe||ie),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Se,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&Ge.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:Ft&&_.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ke&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&_.extensions.multiDraw===!0||Et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)b.push(D),b.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let b=u[_.type],D;if(b){let R=ii[b];D=Yf.clone(R.uniforms)}else D=_.uniforms;return D}function E(_,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new Fv(i,b,_,s),l.push(D),h.set(b,D)),D}function y(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:S,acquireProgram:E,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:w}}function Hv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,p,m){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=o(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=p,S.group=m),e++,S}function c(u,f,g,x,p,m,S){S.reversedDepth===!0&&(p=-p);let E=a(u,f,g,x,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(u,f,g,x,p,m){let S=a(u,f,g,x,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||Gv),n.length>1&&n.sort(f||fp),s.length>1&&s.sort(f||fp)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Vv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pp,i.set(n,[o])):s>=r.length?(o=new pp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qv=0;function Yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kv(i){let e=new Wv,t=Xv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Ne,o=new Ne;function a(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,S=0,E=0,y=0,T=0,w=0,_=0,b=0,D=0,R=0;l.sort(Yv);for(let O=0,H=l.length;O<H;O++){let I=l[O],B=I.color,q=I.intensity,G=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===$i?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*q,d+=B.g*q,u+=B.b*q;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],q);R++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=te;let Se=j.getViewportCount();for(let Oe=0;Oe<Se;Oe++)n.sunShadowMatrix[x+Oe]=j.getMatrix(Oe),n.sunShadowCascade[x+Oe]=j._cascadeData[Oe];x+=Se,g++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(q),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[S]=W;let j=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,j.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[S]=j.matrix,I.castShadow){let Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=te,_++}S++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(B).multiplyScalar(q),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=W,E++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let j=I.shadow,Q=t.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=W,m++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(q),W.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[y]=W,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==E||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=S,N.rectAreaLength=E,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=R,n.version=qv++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let S=0,E=l.length;S<E;S++){let y=l[S];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function mp(i){let e=new Kv(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Zv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new mp(i),e.set(s,[a])):r>=o.length?(a=new mp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`,jv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Qv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],gp=new Ne,Ro=new L,Sh=new L;function eM(i,e,t){let n=new Wi,s=new Ae,r=new Ae,o=new it,a=new Na,c=new Da,l={},h=t.maxTextureSize,d={[jn]:Yt,[Yt]:jn,[un]:un},u=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Jv,fragmentShader:$v}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let m=this.type;this.render=function(w,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Va&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yo);let D=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(vs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=m!==this.type;H&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){let q=w[I],G=q.shadow;if(G===void 0){Te("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let te=G.getFrameExtents();s.multiply(te),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===fr){if(q.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new yn(s.x,s.y,{format:$i,type:kn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Mi(s.x,s.y,vn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=gi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=vt,G.map.depthTexture.magFilter=vt}else q.isPointLight?(G.map=new Io(s.x),G.map.depthTexture=new so(s.x,zn)):(G.map=new yn(s.x,s.y),G.map.depthTexture=new Mi(s.x,s.y,zn)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=gi,this.type===yo?(G.map.depthTexture.compareFunction=W?lh:ch,G.map.depthTexture.minFilter=Tt,G.map.depthTexture.magFilter=Tt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=vt,G.map.depthTexture.magFilter=vt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,b);let Q=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Se=0;Se<j;Se++){let Oe=G.getCamera(Se);if(q.isPointLight){let Z=G.camera,pe=G.matrix,ye=q.distance||Z.far;ye!==Z.far&&(Z.far=ye,Z.updateProjectionMatrix()),Ro.setFromMatrixPosition(q.matrixWorld),Z.position.copy(Ro),Sh.copy(Z.position),Sh.add(jv[Se]),Z.up.copy(Qv[Se]),Z.lookAt(Sh),Z.updateMatrixWorld(),pe.makeTranslation(-Ro.x,-Ro.y,-Ro.z),gp.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(gp,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(G.map),i.clear());let Z=G.getViewport(Se);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(o)}n=G.getFrustum(Se),y(_,b,Oe,q,Q,this.type)}G.isPointLightShadow!==!0&&this.type===fr&&S(G,b),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,R,N)};function S(w,_){let b=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new yn(s.x,s.y,{format:$i,type:kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function E(w,_,b,D){let R=null,N=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)R=N;else if(R=b.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=R.uuid,H=_.uuid,I=l[O];I===void 0&&(I={},l[O]=I);let B=I[H];B===void 0&&(B=R.clone(),I[H]=B,_.addEventListener("dispose",T)),R=B}if(R.visible=_.visible,R.wireframe=_.wireframe,D===fr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=b}return R}function y(w,_,b,D,R,N){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===fr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=e.update(w),B=w.material;if(Array.isArray(B)){let q=I.groups;for(let G=0,te=q.length;G<te;G++){let W=q[G],j=B[W.materialIndex];if(j&&j.visible){let Q=E(w,j,D,N);w.onBeforeShadow(i,w,_,b,I,Q,W),i.renderBufferDirect(b,null,I,Q,w,W),w.onAfterShadow(i,w,_,b,I,Q,W)}}}else if(B.visible){let q=E(w,B,D,N);w.onBeforeShadow(i,w,_,b,I,q,null),i.renderBufferDirect(b,null,I,q,w,null),w.onAfterShadow(i,w,_,b,I,q,null)}}let H=w.children;for(let I=0,B=H.length;I<B;I++)y(H[I],_,b,D,R,N)}function T(w){w.target.removeEventListener("dispose",T);for(let b in l){let D=l[b],R=w.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function tM(i,e){function t(){let C=!1,J=new it,X=null,ae=new it(0,0,0,0);return{setMask:function(ie){X!==ie&&!C&&(i.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){C=ie},setClear:function(ie,re,we,ke,ne){ne===!0&&(ie*=ke,re*=ke,we*=ke),J.set(ie,re,we,ke),ae.equals(J)===!1&&(i.clearColor(ie,re,we,ke),ae.copy(J))},reset:function(){C=!1,X=null,ae.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,X=null,ae=null,ie=null;return{setReversed:function(re){if(J!==re){let we=e.get("EXT_clip_control");re?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),J=re;let ke=ie;ie=null,this.setClear(ke)}},getReversed:function(){return J},setTest:function(re){re?me(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(re){X!==re&&!C&&(i.depthMask(re),X=re)},setFunc:function(re){if(J&&(re=Xf[re]),ae!==re){switch(re){case va:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=re}},setLocked:function(re){C=re},setClear:function(re){ie!==re&&(ie=re,J&&(re=1-re),i.clearDepth(re))},reset:function(){C=!1,X=null,ae=null,ie=null,J=!1}}}function s(){let C=!1,J=null,X=null,ae=null,ie=null,re=null,we=null,ke=null,ne=null;return{setTest:function(Ee){C||(Ee?me(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Ee){J!==Ee&&!C&&(i.stencilMask(Ee),J=Ee)},setFunc:function(Ee,ze,de){(X!==Ee||ae!==ze||ie!==de)&&(i.stencilFunc(Ee,ze,de),X=Ee,ae=ze,ie=de)},setOp:function(Ee,ze,de){(re!==Ee||we!==ze||ke!==de)&&(i.stencilOp(Ee,ze,de),re=Ee,we=ze,ke=de)},setLocked:function(Ee){C=Ee},setClear:function(Ee){ne!==Ee&&(i.clearStencil(Ee),ne=Ee)},reset:function(){C=!1,J=null,X=null,ae=null,ie=null,re=null,we=null,ke=null,ne=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,S=null,E=null,y=null,T=null,w=null,_=null,b=new Re(0,0,0),D=0,R=!1,N=null,O=null,H=null,I=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=te>=2);let j=null,Q={},Se=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Z=new it().fromArray(Se),pe=new it().fromArray(Oe);function ye(C,J,X,ae){let ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(C,re),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<X;we++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(J+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}let Ce={};Ce[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(i.DEPTH_TEST),o.setFunc(Js),on(!1),_t(Gl),me(i.CULL_FACE),Xt(vs);function me(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Be(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Et(C,J){return u[C]!==J?(i.bindFramebuffer(C,J),u[C]=J,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Pe(C,J){let X=g,ae=!1;if(C){X=f.get(J),X===void 0&&(X=[],f.set(J,X));let ie=C.textures;if(X.length!==ie.length||X[0]!==i.COLOR_ATTACHMENT0){for(let re=0,we=ie.length;re<we;re++)X[re]=i.COLOR_ATTACHMENT0+re;X.length=ie.length,ae=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ae=!0);ae&&i.drawBuffers(X)}function tt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let rt={[Ms]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};rt[mf]=i.MIN,rt[gf]=i.MAX;let qe={[_f]:i.ZERO,[xf]:i.ONE,[yf]:i.SRC_COLOR,[ql]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[Mf]:i.DST_ALPHA,[vf]:i.ONE_MINUS_SRC_COLOR,[Yl]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[Sf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Rf]:i.CONSTANT_ALPHA,[Cf]:i.ONE_MINUS_CONSTANT_ALPHA};function Xt(C,J,X,ae,ie,re,we,ke,ne,Ee){if(C===vs){p===!0&&(Be(i.BLEND),p=!1);return}if(p===!1&&(me(i.BLEND),p=!0),C!==df){if(C!==m||Ee!==R){if((S!==Ms||T!==Ms)&&(i.blendEquation(i.FUNC_ADD),S=Ms,T=Ms),Ee)switch(C){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",C);break}else switch(C){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wl:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",C);break}E=null,y=null,w=null,_=null,b.set(0,0,0),D=0,m=C,R=Ee}return}ie=ie||J,re=re||X,we=we||ae,(J!==S||ie!==T)&&(i.blendEquationSeparate(rt[J],rt[ie]),S=J,T=ie),(X!==E||ae!==y||re!==w||we!==_)&&(i.blendFuncSeparate(qe[X],qe[ae],qe[re],qe[we]),E=X,y=ae,w=re,_=we),(ke.equals(b)===!1||ne!==D)&&(i.blendColor(ke.r,ke.g,ke.b,ne),b.copy(ke),D=ne),m=C,R=!1}function It(C,J){C.side===un?Be(i.CULL_FACE):me(i.CULL_FACE);let X=C.side===Yt;J&&(X=!X),on(X),C.blending===pr&&C.transparent===!1?Xt(vs):Xt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let ae=C.stencilWrite;a.setTest(ae),ae&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ft(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function on(C){N!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),N=C)}function _t(C){C!==hf?(me(i.CULL_FACE),C!==O&&(C===Gl?i.cullFace(i.BACK):C===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),O=C}function Gn(C){C!==H&&(G&&i.lineWidth(C),H=C)}function Ft(C,J,X){C?(me(i.POLYGON_OFFSET_FILL),(I!==J||B!==X)&&(I=J,B=X,o.getReversed()&&(J=-J,X=-X),i.polygonOffset(J,X))):Be(i.POLYGON_OFFSET_FILL)}function bn(C){C?me(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function Tn(C){C===void 0&&(C=i.TEXTURE0+q-1),j!==C&&(i.activeTexture(C),j=C)}function wn(C,J,X){X===void 0&&(j===null?X=i.TEXTURE0+q-1:X=j);let ae=Q[X];ae===void 0&&(ae={type:void 0,texture:void 0},Q[X]=ae),(ae.type!==C||ae.texture!==J)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(C,J||Ce[C]),ae.type=C,ae.texture=J)}function U(){let C=Q[j];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function En(){try{i.compressedTexImage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function ft(){try{i.compressedTexImage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function pt(){try{i.texSubImage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function ue(){try{i.texSubImage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function Pt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function Ue(){try{i.texStorage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function A(){try{i.texStorage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){Le("WebGLState:",C)}}function z(){try{i.texImage3D(...arguments)}catch(C){Le("WebGLState:",C)}}function ee(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function $(C,J){d[C]!==J&&(i.pixelStorei(C,J),d[C]=J)}function se(C){Z.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function le(C){pe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),pe.copy(C))}function Y(C,J){let X=l.get(J);X===void 0&&(X=new WeakMap,l.set(J,X));let ae=X.get(C);ae===void 0&&(ae=i.getUniformBlockIndex(J,C.name),i.uniformBlockBinding(J,ae,ae),X.set(C,ae))}function K(C,J,X){let ie=l.get(J).get(C);c[ie]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,X),c[ie]=X)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,Q={},u={},c={},f=new WeakMap,g=[],x=null,p=!1,m=null,S=null,E=null,y=null,T=null,w=null,_=null,b=new Re(0,0,0),D=0,R=!1,N=null,O=null,H=null,I=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Be,bindFramebuffer:Et,drawBuffers:Pe,useProgram:tt,setBlending:Xt,setMaterial:It,setFlipSided:on,setCullFace:_t,setLineWidth:Gn,setPolygonOffset:Ft,setScissorTest:bn,activeTexture:Tn,bindTexture:wn,unbindTexture:U,compressedTexImage2D:En,compressedTexImage3D:ft,texImage2D:v,texImage3D:z,pixelStorei:$,getParameter:ee,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Ue,texStorage3D:A,texSubImage2D:pt,texSubImage3D:ue,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ie,scissor:se,viewport:le,reset:oe}}function nM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,x=new FinalizationRegistry(A=>g.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,v){return p?new OffscreenCanvas(A,v):js("canvas")}function S(A,v,z){let ee=1,$=Ue(A);if(($.width>z||$.height>z)&&(ee=z/Math.max($.width,$.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let se=Math.floor(ee*$.width),le=Math.floor(ee*$.height);u===void 0&&(u=m(se,le));let Y=v?m(se,le):u;return Y.width=se,Y.height=le,Y.getContext("2d").drawImage(A,0,0,se,le),Te("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+le+")."),Y}else return"data"in A&&Te("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function E(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,v,z,ee,$,se=!1){if(A!==null){if(i[A]!==void 0)return i[A];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;ee&&(le=e.get("EXT_texture_norm16"),le||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8),z===i.UNSIGNED_SHORT&&le&&(Y=le.R16_EXT),z===i.SHORT&&le&&(Y=le.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),v===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8),z===i.UNSIGNED_SHORT&&le&&(Y=le.RG16_EXT),z===i.SHORT&&le&&(Y=le.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&le&&(Y=le.RGB16_EXT),z===i.SHORT&&le&&(Y=le.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){let K=se?Yr:Ge.getTransfer($);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=K===Qe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&le&&(Y=le.RGBA16_EXT),z===i.SHORT&&le&&(Y=le.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(A,v){let z;return A?v===null||v===zn||v===bs?z=i.DEPTH24_STENCIL8:v===vn?z=i.DEPTH32F_STENCIL8:v===_r&&(z=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zn||v===bs?z=i.DEPTH_COMPONENT24:v===vn?z=i.DEPTH_COMPONENT32F:v===_r&&(z=i.DEPTH_COMPONENT16),z}function b(A,v){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==vt&&A.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function D(A){let v=new WeakRef(A);n.get(A).__ref=v,g.add(v),x.register(A,v,v)}function R(A){let v=n.get(A).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function N(A){H(A.target)}function O(A){I(A.target)}function H(A){A.removeEventListener("dispose",N),R(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",O),R(A),te(A)}function B(){for(let A of g){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):H(v))}g.clear(),d.clear()}function q(A){let v=n.get(A);if(v.__webglInit===void 0)return;let z=A.source,ee=f.get(z);if(ee){let $=ee[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&G(A),Object.keys(ee).length===0&&f.delete(z)}n.remove(A)}function G(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let z=A.source,ee=f.get(z);delete ee[v.__cacheKey],o.memory.textures--}function te(A){let v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&H(z),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let se=0;se<v.__webglFramebuffer[$].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[$][se]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ee=A.textures;for(let $=0,se=ee.length;$<se;$++){let le=n.get(ee[$]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(ee[$])}n.remove(A)}let W=0;function j(){W=0}function Q(){return W}function Se(A){W=A}function Oe(){let A=W;return A>=s.maxTextures&&Te("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function Z(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function pe(A,v){let z=n.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let ee=A.image;if(ee===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{It(z,A,v);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function ye(A,v){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){It(z,A,v);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function Ce(A,v){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){It(z,A,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function me(A,v){let z=n.get(A);if(A.version>0&&z.__version!==A.version){on(z,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let Be={[Xn]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[Vi]:i.MIRRORED_REPEAT},Et={[vt]:i.NEAREST,[gr]:i.NEAREST_MIPMAP_NEAREST,[Ci]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[Ji]:i.LINEAR_MIPMAP_NEAREST,[dn]:i.LINEAR_MIPMAP_LINEAR},Pe={[Ff]:i.NEVER,[hh]:i.ALWAYS,[Bf]:i.LESS,[ch]:i.LEQUAL,[zf]:i.EQUAL,[lh]:i.GEQUAL,[kf]:i.GREATER,[Hf]:i.NOTEQUAL};function tt(A,v){if(v.type===vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tt||v.magFilter===Ji||v.magFilter===Ci||v.magFilter===dn||v.minFilter===Tt||v.minFilter===Ji||v.minFilter===Ci||v.minFilter===dn)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Be[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Be[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Be[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Et[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Et[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vt||v.minFilter!==Ci&&v.minFilter!==dn||v.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function rt(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",N),D(v));let ee=v.source,$=f.get(ee);$===void 0&&($={},f.set(ee,$));let se=Z(v);if(se!==A.__cacheKey){$[se]===void 0&&($[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[se].usedTimes++;let le=$[A.__cacheKey];le!==void 0&&($[A.__cacheKey].usedTimes--,le.usedTimes===0&&G(v)),A.__cacheKey=se,A.__webglTexture=$[se].texture}return z}function qe(A,v,z){return Math.floor(Math.floor(A/z)/v)}function Xt(A,v,z,ee){let se=A.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,ee,v.data);else{se.sort((C,J)=>C.start-J.start);let le=0;for(let C=1;C<se.length;C++){let J=se[le],X=se[C],ae=J.start+J.count,ie=qe(X.start,v.width,4),re=qe(J.start,v.width,4);X.start<=ae+1&&ie===re&&qe(X.start+X.count-1,v.width,4)===ie?J.count=Math.max(J.count,X.start+X.count-J.start):(++le,se[le]=X)}se.length=le+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let C=0,J=se.length;C<J;C++){let X=se[C],ae=Math.floor(X.start/4),ie=Math.ceil(X.count/4),re=ae%v.width,we=Math.floor(ae/v.width),ke=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,we),t.texSubImage2D(i.TEXTURE_2D,0,re,we,ke,ne,z,ee,v.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function It(A,v,z){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);let $=rt(A,v),se=v.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+z);let le=n.get(se);if(se.version!==le.__version||$===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ne=Ge.getPrimaries(Ge.workingColorSpace),Ee=v.colorSpace===Hn?null:Ge.getPrimaries(v.colorSpace),ze=v.colorSpace===Hn||ne===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=S(v.image,!1,s.maxTextureSize);K=Ie(v,K);let oe=r.convert(v.format,v.colorSpace),C=r.convert(v.type),J=w(v.internalFormat,oe,C,v.normalized,v.colorSpace,v.isVideoTexture);tt(ee,v);let X,ae=v.mipmaps,ie=v.isVideoTexture!==!0,re=le.__version===void 0||$===!0,we=se.dataReady,ke=b(v,K);if(v.isDepthTexture)J=_(v.format===Ii,v.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,oe,C,null));else if(v.isDataTexture)if(ae.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,ke,J,ae[0].width,ae[0].height);for(let ne=0,Ee=ae.length;ne<Ee;ne++)X=ae[ne],ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,oe,C,X.data):t.texImage2D(i.TEXTURE_2D,ne,J,X.width,X.height,0,oe,C,X.data);v.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,ke,J,K.width,K.height),we&&Xt(v,K,oe,C)):t.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,oe,C,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,J,ae[0].width,ae[0].height,K.depth);for(let ne=0,Ee=ae.length;ne<Ee;ne++)if(X=ae[ne],v.format!==pn)if(oe!==null)if(ie){if(we)if(v.layerUpdates.size>0){let ze=vh(X.width,X.height,v.format,v.type);for(let de of v.layerUpdates){let nt=X.data.subarray(de*ze/X.data.BYTES_PER_ELEMENT,(de+1)*ze/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,X.width,X.height,1,oe,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,oe,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,J,X.width,X.height,K.depth,0,X.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,oe,C,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,J,X.width,X.height,K.depth,0,oe,C,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,ke,J,ae[0].width,ae[0].height);for(let ne=0,Ee=ae.length;ne<Ee;ne++)X=ae[ne],v.format!==pn?oe!==null?ie?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,oe,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,J,X.width,X.height,0,X.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,oe,C,X.data):t.texImage2D(i.TEXTURE_2D,ne,J,X.width,X.height,0,oe,C,X.data)}else if(v.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,J,K.width,K.height,K.depth),we)if(v.layerUpdates.size>0){let ne=vh(K.width,K.height,v.format,v.type);for(let Ee of v.layerUpdates){let ze=K.data.subarray(Ee*ne/K.data.BYTES_PER_ELEMENT,(Ee+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,K.width,K.height,1,oe,C,ze)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,oe,C,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,oe,C,K.data);else if(v.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,ke,J,K.width,K.height,K.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,oe,C,K.data)):t.texImage3D(i.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,oe,C,K.data);else if(v.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,ke,J,K.width,K.height);else{let ne=K.width,Ee=K.height;for(let ze=0;ze<ke;ze++)t.texImage2D(i.TEXTURE_2D,ze,J,ne,Ee,0,oe,C,null),ne>>=1,Ee>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),d.add(v),ne.onpaint=Ee=>{let ze=Ee.changedElements;for(let de of d)ze.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let ze=i.RGBA,de=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,de,nt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(ie&&re){let ne=Ue(ae[0]);t.texStorage2D(i.TEXTURE_2D,ke,J,ne.width,ne.height)}for(let ne=0,Ee=ae.length;ne<Ee;ne++)X=ae[ne],ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,oe,C,X):t.texImage2D(i.TEXTURE_2D,ne,J,oe,C,X);v.generateMipmaps=!1}else if(ie){if(re){let ne=Ue(K);t.texStorage2D(i.TEXTURE_2D,ke,J,ne.width,ne.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,C,K)}else t.texImage2D(i.TEXTURE_2D,0,J,oe,C,K);E(v)&&v.mipmapsAutoUpdate===!0&&y(ee),le.__version=se.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function on(A,v,z){if(v.image.length!==6)return;let ee=rt(A,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let se=n.get($);if($.version!==se.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);let le=Ge.getPrimaries(Ge.workingColorSpace),Y=v.colorSpace===Hn?null:Ge.getPrimaries(v.colorSpace),K=v.colorSpace===Hn||le===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let oe=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,J=[];for(let de=0;de<6;de++)!oe&&!C?J[de]=S(v.image[de],!0,s.maxCubemapSize):J[de]=C?v.image[de].image:v.image[de],J[de]=Ie(v,J[de]);let X=J[0],ae=r.convert(v.format,v.colorSpace),ie=r.convert(v.type),re=w(v.internalFormat,ae,ie,v.normalized,v.colorSpace),we=v.isVideoTexture!==!0,ke=se.__version===void 0||ee===!0,ne=$.dataReady,Ee=b(v,X);tt(i.TEXTURE_CUBE_MAP,v);let ze;if(v.isDepthTexture){if(re=_(v.format===Ii,v.type),ke)if(we)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,X.width,X.height);else for(let de=0;de<6;de++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,X.width,X.height,0,ae,ie,null)}else if(oe){we&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,re,X.width,X.height);for(let de=0;de<6;de++){ze=J[de].mipmaps;for(let nt=0;nt<ze.length;nt++){let Bt=ze[nt];v.format!==pn?ae!==null?we?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,nt,0,0,Bt.width,Bt.height,ae,Bt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,nt,re,Bt.width,Bt.height,0,Bt.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,nt,0,0,Bt.width,Bt.height,ae,ie,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,nt,re,Bt.width,Bt.height,0,ae,ie,Bt.data)}}}else{if(ze=v.mipmaps,we&&ke){ze.length>0&&Ee++;let de=Ue(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,re,de.width,de.height)}for(let de=0;de<6;de++)if(C){we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,J[de].width,J[de].height,ae,ie,J[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,J[de].width,J[de].height,0,ae,ie,J[de].data);for(let nt=0;nt<ze.length;nt++){let Di=ze[nt].image[de].image;we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,nt+1,0,0,Di.width,Di.height,ae,ie,Di.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,nt+1,re,Di.width,Di.height,0,ae,ie,Di.data)}}else{we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ae,ie,J[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,ae,ie,J[de]);for(let nt=0;nt<ze.length;nt++){let Bt=ze[nt];we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,nt+1,0,0,ae,ie,Bt.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,nt+1,re,ae,ie,Bt.image[de])}}}E(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),se.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function _t(A,v,z,ee,$,se){let le=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),K=w(z.internalFormat,le,Y,z.normalized,z.colorSpace),oe=n.get(v),C=n.get(z);if(C.__renderTarget=v,!oe.__hasExternalTextures){let J=Math.max(1,v.width>>se),X=Math.max(1,v.height>>se);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,se,K,J,X,v.depth,0,le,Y,null):t.texImage2D($,se,K,J,X,0,le,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,C.__webglTexture,0,pt(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,C.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Gn(A,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let ee=v.depthTexture,$=ee&&ee.isDepthTexture?ee.type:null,se=_(v.stencilBuffer,$),le=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(v),se,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(v),se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,A)}else{let ee=v.textures;for(let $=0;$<ee.length;$++){let se=ee[$],le=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),K=w(se.internalFormat,le,Y,se.normalized,se.colorSpace);ue(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(v),K,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(A,v,z){let ee=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(v.depthTexture);$.__renderTarget=v;let se=ee?v.depthTexture.image[0]:v.depthTexture.image;(!$.__webglTexture||se.width!==v.width||se.height!==v.height)&&(se.width=v.width,se.height=v.height,v.depthTexture.needsUpdate=!0),ee?me(v.depthTexture,0):pe(v.depthTexture,0);let le=$.__webglTexture,Y=pt(v),K=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,oe=v.depthTexture.format===Ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===gi)ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,K,le,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,oe,K,le,0);else if(v.depthTexture.format===Ii)ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,K,le,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,oe,K,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bn(A){let v=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let ee=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",$)};ee.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=ee}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let ee=0;ee<6;ee++)Ft(v.__webglFramebuffer[ee],A,ee);else A.texture.mipmaps.length>0?Ft(v.__webglFramebuffer[0],A,0):Ft(v.__webglFramebuffer,A,0);else if(z){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=i.createRenderbuffer(),Gn(v.__webglDepthbuffer[ee],A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Gn(v.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Tn(A,v,z){let ee=n.get(A);v!==void 0&&_t(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&bn(A)}function wn(A){let v=A.texture,z=n.get(A),ee=n.get(v);A.addEventListener("dispose",O),D(A);let $=A.textures,se=A.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,o.memory.textures++),se){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let K=0;K<v.mipmaps.length;K++)z.__webglFramebuffer[Y][K]=i.createFramebuffer()}else z.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)z.__webglFramebuffer[Y]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(le)for(let Y=0,K=$.length;Y<K;Y++){let oe=n.get($[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ue(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){let K=$[Y];z.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let oe=r.convert(K.format,K.colorSpace),C=r.convert(K.type),J=w(K.internalFormat,oe,C,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),X=pt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Gn(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),tt(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)_t(z.__webglFramebuffer[Y][K],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else _t(z.__webglFramebuffer[Y],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(le){for(let Y=0,K=$.length;Y<K;Y++){let oe=$[Y],C=n.get(oe),J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,C.__webglTexture),tt(J,oe),_t(z.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+Y,J,0),E(oe)&&y(J)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,ee.__webglTexture),tt(Y,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)_t(z.__webglFramebuffer[K],A,v,i.COLOR_ATTACHMENT0,Y,K);else _t(z.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Y,0);E(v)?y(Y):v.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&bn(A)}function U(A){let v=A.textures;for(let z=0,ee=v.length;z<ee;z++){let $=v[z];if(E($)&&$.mipmapsAutoUpdate===!0){let se=T(A),le=n.get($).__webglTexture;t.bindTexture(se,le),y(se),t.unbindTexture()}}}let En=[];function ft(A){if(A.samples>0){if(ue(A)===!1){let v=A.textures,z=A.width,ee=A.height,$=i.COLOR_BUFFER_BIT,se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(A),Y=v.length>1;if(Y)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);let C=n.get(v[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,z,ee,0,0,z,ee,$,i.NEAREST),c===!0&&(En.length=0,En.push(i.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&En.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,En))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);let C=n.get(v[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function pt(A){return Math.min(s.maxSamples,A.samples)}function ue(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(A){let v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Ie(A,v){let z=A.colorSpace,ee=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==tn&&z!==Hn&&(Ge.getTransfer(z)===Qe?(ee!==pn||$!==fn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",z)),v}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Oe,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=Se,this.setTexture2D=pe,this.setTexture2DArray=ye,this.setTexture3D=Ce,this.setTextureCube=me,this.rebindTextures=Tn,this.setupRenderTarget=wn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=bn,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ue,this.dispose=B}function iM(i,e){function t(n,s=Hn){let r,o=Ge.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===th)return i.BYTE;if(n===nh)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===rh)return i.ALPHA;if(n===oh)return i.RGB;if(n===pn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===vo||n===Mo||n===So||n===bo)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc||n===ac||n===cc||n===To||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ac)return r.COMPRESSED_R11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===To)return r.COMPRESSED_RG11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc||n===Sc||n===bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===wc||n===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tc)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===wo||n===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
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

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ro(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zn({vertexShader:sM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new ao(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ih=class extends Fn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new Ch,m={},S=t.getContextAttributes(),E=null,y=null,T=[],w=[],_=new Ae,b=null,D=null,R=new yt;R.viewport=new it;let N=new yt;N.viewport=new it;let O=[R,N],H=new Ga,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=T[Z];return pe===void 0&&(pe=new nr,T[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=T[Z];return pe===void 0&&(pe=new nr,T[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=T[Z];return pe===void 0&&(pe=new nr,T[Z]=pe),pe.getHandSpace()};function q(Z){let pe=w.indexOf(Z.inputSource);if(pe===-1)return;let ye=T[pe];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,l||o),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<T.length;Z++){let pe=w[Z];pe!==null&&(w[Z]=null,T[Z].disconnect(pe))}I=null,B=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(E),f=null,u=null,d=null,s=null,y=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),D!==null){let Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ce=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Ii:gi,Ce=S.stencil?bs:zn);let Be={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new yn(u.textureWidth,u.textureHeight,{format:pn,type:fn,depthTexture:new Mi(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new yn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Z){for(let pe=0;pe<Z.removed.length;pe++){let ye=Z.removed[pe],Ce=w.indexOf(ye);Ce>=0&&(w[Ce]=null,T[Ce].disconnect(ye))}for(let pe=0;pe<Z.added.length;pe++){let ye=Z.added[pe],Ce=w.indexOf(ye);if(Ce===-1){for(let Be=0;Be<T.length;Be++)if(Be>=w.length){w.push(ye),Ce=Be;break}else if(w[Be]===null){w[Be]=ye,Ce=Be;break}if(Ce===-1)break}let me=T[Ce];me&&me.connect(ye)}}function W(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let pe=Z.near,ye=Z.far;p.texture!==null&&(p.depthNear>0&&(pe=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),H.near=N.near=R.near=pe,H.far=N.far=R.far=ye,(I!==H.near||B!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,B=H.far),H.layers.mask=Z.layers.mask|6,R.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Ce=Z.parent,me=H.cameras;W(H,Ce);for(let Be=0;Be<me.length;Be++)W(me[Be],Ce);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,H,Ce)};function j(Z,pe,ye){ye===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ps*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(Z){return m[Z]};let Q=null;function Se(Z,pe){if(h=pe.getViewerPose(l||o),g=pe,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ce=!1;ye.length!==H.cameras.length&&(H.cameras.length=0,Ce=!0);for(let Pe=0;Pe<ye.length;Pe++){let tt=ye[Pe],rt=null;if(f!==null)rt=f.getViewport(tt);else{let Xt=d.getViewSubImage(u,tt);rt=Xt.viewport,Pe===0&&(e.setRenderTargetTextures(y,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(y))}let qe=O[Pe];qe===void 0&&(qe=new yt,qe.layers.enable(Pe),qe.viewport=new it,O[Pe]=qe),qe.matrix.fromArray(tt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(tt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(rt.x,rt.y,rt.width,rt.height),Pe===0&&(H.matrix.copy(qe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ce===!0&&H.cameras.push(qe)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Pe=d.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&p.init(Pe,s.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<ye.length;Pe++){let tt=ye[Pe].camera;if(tt){let rt=m[tt];rt||(rt=new ro,m[tt]=rt);let qe=d.getCameraImage(tt);rt.sourceTexture=qe}}}}for(let ye=0;ye<T.length;ye++){let Ce=w[ye],me=T[ye];Ce!==null&&me!==void 0&&me.update(Ce,pe,l||o)}Q&&Q(Z,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let Oe=new _p;Oe.setAnimationLoop(Se),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}},oM=new Ne,Ap=new De;Ap.set(-1,0,0,0,1,0,0,0,1);function aM(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_h(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,S,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Yt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Yt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),E=S.envMap,y=S.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ap),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cM(i,e,t,n){let s={},r={};function o(S,E){let y=E.program;n.uniformBlockBinding(S,y,s[S.id])}function a(S,E){let y=s[S.id];y===void 0&&(g(S),y=c(S),s[S.id]=y,S.addEventListener("dispose",p));let T=E.program;n.updateUBOMapping(S,T);let w=e.render.frame;r[S.id]!==w&&(l(S),r[S.id]=w)}function c(S){let E=i.createBuffer(),y=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(S){let E=s[S.id],y=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,_=y.length;w<_;w++){let b=y[w];if(Array.isArray(b))for(let D=0,R=b.length;D<R;D++)h(b[D],w,D,T);else h(b,w,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,y,T){if(u(S,E,y,T)===!0){let w=S.__offset,_=S.value;if(Array.isArray(_)){let b=0;for(let D=0;D<_.length;D++){let R=_[D],N=x(R,!0);d(R,S.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,S.__data)}}function d(S,E,y){typeof S=="number"||typeof S=="boolean"?E[y]=S:S.isMatrix3?(E[y]=S.elements[0],E[y+1]=S.elements[1],E[y+2]=S.elements[2],E[y+3]=0,E[y+4]=S.elements[3],E[y+5]=S.elements[4],E[y+6]=S.elements[5],E[y+7]=0,E[y+8]=S.elements[6],E[y+9]=S.elements[7],E[y+10]=S.elements[8],E[y+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-y),y):S.toArray(E,y)}function u(S,E,y,T){let w=S.value,_=E+"_"+y;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let b=T[_],D=!1;for(let R=0;R<w.length;R++)f(w[R],b,R)===!0&&(D=!0);return D}return f(w,T,_)}function f(S,E,y){if(E[y]===void 0)return typeof S=="number"||typeof S=="boolean"?E[y]=S:ArrayBuffer.isView(S)?E[y]=S.slice():E[y]=S.clone(),!0;{let T=E[y];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return E[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(T.equals(S)===!1)return T.copy(S),!0}}return!1}function g(S){let E=S.uniforms,y=0,T=16;for(let _=0,b=E.length;_<b;_++){let D=Array.isArray(E[_])?E[_]:[E[_]];for(let R=0,N=D.length;R<N;R++){let O=D[R],H=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(E[_])||Array.isArray(O.value),B=y;for(let G=0,te=H.length;G<te;G++){let W=H[G],j=x(W,I),Q=y%T,Se=Q%j.boundary,Oe=Q+Se;y+=Se,Oe!==0&&T-Oe<j.storage&&(y+=T-Oe),G===0&&(B=y),y+=j.storage}let q=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new q((y-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let w=y%T;return w>0&&(y+=T-w),S.__size=y,S.__cache={},this}function x(S,E){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(S){let E=S.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:a,dispose:m}}var lM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function hM(){return ni===null&&(ni=new or(lM,16,16,$i,kn),ni.name="DFG_LUT",ni.minFilter=Tt,ni.magFilter=Tt,ni.wrapS=an,ni.wrapT=an,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var ji=class{constructor(e={}){let{canvas:t=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,p=new Set([Qa,ja,$a]),m=new Set([fn,zn,_r,bs,Ka,Za]),S=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,O=null,H=null,I=null,B=null;this._outputColorSpace=bt;let q=0,G=0,te=null,W=-1,j=null,Q=new it,Se=new it,Oe=null,Z=new Re(0),pe=0,ye=t.width,Ce=t.height,me=1,Be=null,Et=null,Pe=new it(0,0,ye,Ce),tt=new it(0,0,ye,Ce),rt=!1,qe=new Wi,Xt=new Ca,It=!1,on=!1,_t=new Ne,Gn=new L,Ft=new it,bn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tn=!1;function wn(){return te===null?me:1}let U=n;function En(M,P){return t.getContext(M,P)}let ft,pt,ue,Pt,Ie,Ue,A,v,z,ee,$,se,le,Y,K,oe,C,J,X,ae,ie,re,we;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",de,!1),U===null){let P="webgl2";if(U=En(P,M),U===null)throw En(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(M){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Le("WebGLRenderer: "+M.message),M}function ke(){ft=new My(U),ft.init(),ie=new iM(U,ft),pt=new hy(U,ft,e,ie),ue=new tM(U,ft),pt.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),H=U.createFramebuffer(),I=U.createFramebuffer(),B=U.createFramebuffer(),Pt=new Ty(U),Ie=new Hv,Ue=new nM(U,ft,ue,Ie,pt,ie,Pt),A=new vy(R),v=new E0(U),re=new cy(U,v),z=new Sy(U,v,Pt,re),ee=new Ey(U,z,v,re,Pt),J=new wy(U,pt,Ue),K=new uy(Ie),$=new kv(R,A,ft,pt,re,K),se=new aM(R,Ie),le=new Vv,Y=new Zv(ft),C=new ay(R,A,ue,ee,g,c),oe=new eM(R,ee,pt),we=new cM(U,Pt,pt,ue),X=new ly(U,ft,Pt),ae=new by(U,ft,Pt),Pt.programs=$.programs,R.capabilities=pt,R.extensions=ft,R.properties=Ie,R.renderLists=le,R.shadowMap=oe,R.state=ue,R.info=Pt}x!==fn&&(D=new Ry(x,t.width,t.height,a,s,r));let ne=new Ih(R,U);this.xr=ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=ft.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ft.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(M){M!==void 0&&(me=M,this.setSize(ye,Ce,!1))},this.getSize=function(M){return M.set(ye,Ce)},this.setSize=function(M,P,V=!0){if(ne.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=M,Ce=P,t.width=Math.floor(M*me),t.height=Math.floor(P*me),V===!0&&(t.style.width=M+"px",t.style.height=P+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(ye*me,Ce*me).floor()},this.setDrawingBufferSize=function(M,P,V){ye=M,Ce=P,me=V,t.width=Math.floor(M*V),t.height=Math.floor(P*V),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(x===fn){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,P,V,F){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,P,V,F),ue.viewport(Q.copy(Pe).multiplyScalar(wn()).round())},this.getScissor=function(M){return M.copy(tt)},this.setScissor=function(M,P,V,F){M.isVector4?tt.set(M.x,M.y,M.z,M.w):tt.set(M,P,V,F),ue.scissor(Se.copy(tt).multiplyScalar(wn()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){ue.setScissorTest(rt=M)},this.setOpaqueSort=function(M){Be=M},this.setTransparentSort=function(M){Et=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,V=!0){let F=0;if(M){let k=!1;if(te!==null){let he=te.texture.format;k=p.has(he)}if(k){let he=te.texture.type,xe=m.has(he),ce=C.getClearColor(),ge=C.getClearAlpha(),be=ce.r,Fe=ce.g,Ye=ce.b;xe?(S[0]=be,S[1]=Fe,S[2]=Ye,S[3]=ge,U.clearBufferuiv(U.COLOR,0,S)):(E[0]=be,E[1]=Fe,E[2]=Ye,E[3]=ge,U.clearBufferiv(U.COLOR,0,E))}else F|=U.COLOR_BUFFER_BIT}P&&(F|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",de,!1),C.dispose(),le.dispose(),Y.dispose(),Ue.dispose(),Ie.dispose(),A.dispose(),ee.dispose(),z.dispose(),re.dispose(),we.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",hd),ne.removeEventListener("sessionend",ud),os.stop()};function Ee(M){M.preventDefault(),Kr("WebGLRenderer: Context Lost."),N=!0}function ze(){Kr("WebGLRenderer: Context Restored."),N=!1;let M=Pt.autoReset,P=oe.enabled,V=oe.autoUpdate,F=oe.needsUpdate,k=oe.type;ke(),Pt.autoReset=M,oe.enabled=P,oe.autoUpdate=V,oe.needsUpdate=F,oe.type=k}function de(M){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nt(M){let P=M.target;P.removeEventListener("dispose",nt),Bt(P)}function Bt(M){Di(M),Ie.remove(M)}function Di(M){let P=Ie.get(M).programs;P!==void 0&&(P.forEach(function(V){$.releaseProgram(V)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,V,F,k,he){P===null&&(P=bn);let xe=k.isMesh&&k.matrixWorld.determinantAffine()<0,ce=pg(M,P,V,F,k);ue.setMaterial(F,xe);let ge=V.index,be=1;if(F.wireframe===!0){if(ge=z.getWireframeAttribute(V),ge===void 0)return;be=2}let Fe=V.drawRange,Ye=V.attributes.position,ve=Fe.start*be,Ke=(Fe.start+Fe.count)*be;he!==null&&(ve=Math.max(ve,he.start*be),Ke=Math.min(Ke,(he.start+he.count)*be)),ge!==null?(ve=Math.max(ve,0),Ke=Math.min(Ke,ge.count)):Ye!=null&&(ve=Math.max(ve,0),Ke=Math.min(Ke,Ye.count));let At=Ke-ve;if(At<0||At===1/0)return;re.setup(k,F,ce,V,ge);let ct,ot=X;if(ge!==null&&(ct=v.get(ge),ot=ae,ot.setIndex(ct)),k.isMesh)F.wireframe===!0?(ue.setLineWidth(F.wireframeLinewidth*wn()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(k.isLine){let Kt=F.linewidth;Kt===void 0&&(Kt=1),ue.setLineWidth(Kt*wn()),k.isLineSegments?ot.setMode(U.LINES):k.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else k.isPoints?ot.setMode(U.POINTS):k.isSprite&&ot.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Kt=k._multiDrawStarts,Me=k._multiDrawCounts,Qt=k._multiDrawCount,$e=ge?v.get(ge).bytesPerElement:1,as=Ie.get(F).currentProgram.getUniforms();for(let Zt=0;Zt<Qt;Zt++)as.setValue(U,"_gl_DrawID",Zt),ot.render(Kt[Zt]/$e,Me[Zt])}else if(k.isInstancedMesh)ot.renderInstances(ve,At,k.count);else if(V.isInstancedBufferGeometry){let Kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Me=Math.min(V.instanceCount,Kt);ot.renderInstances(ve,At,Me)}else ot.render(ve,At)};function ld(M,P,V,F){O!==null&&M.isNodeMaterial&&O.setObject(F,M),It===!0&&K.setState(M,V,!1),M.transparent===!0&&M.side===un&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,Ur(M,P,F),M.side=jn,M.needsUpdate=!0,Ur(M,P,F),M.side=un):Ur(M,P,F)}this.compile=function(M,P,V=null){V===null&&(V=M),O!==null&&O.renderStart(M,P,V),w=Y.get(V),w.init(P),b.push(w),V.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),M!==V&&M.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),on=this.localClippingEnabled,It=K.init(this.clippingPlanes,on),It===!0&&K.setGlobalState(this.clippingPlanes,P),O!==null&&oe.render(w.state.shadowsArray,V,P);let F=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let he=k.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){let ce=he[xe];ld(ce,V,P,k),F.add(ce)}else ld(he,V,P,k),F.add(he)}),w=b.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(M,P,V=null){let F=this.compile(M,P,V);return new Promise(k=>{function he(){if(F.forEach(function(xe){let ge=Ie.get(xe).currentProgram;(ge===void 0||ge.isReady())&&F.delete(xe)}),F.size===0){k(M);return}setTimeout(he,10)}ft.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let il=null;function dg(M){il&&il(M)}function hd(){os.stop()}function ud(){os.start()}let os=new _p;os.setAnimationLoop(dg),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(M){il=M,ne.setAnimationLoop(M),M===null?os.stop():os.start()},ne.addEventListener("sessionstart",hd),ne.addEventListener("sessionend",ud),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(M,P);let V=ne.enabled===!0&&ne.isPresenting===!0,F=D!==null&&(te===null||V)&&D.begin(R,te);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(P),P=ne.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,P,te),w=Y.get(M,b.length),w.init(P),w.state.textureUnits=Ue.getTextureUnits(),b.push(w),_t.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Xt.setFromArrayCamera(P):qe.setFromProjectionMatrix(_t,Rn,P.reversedDepth),on=this.localClippingEnabled,It=K.init(this.clippingPlanes,on),T=le.get(M,_.length),T.init(),_.push(T),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let xe=R.xr.getDepthSensingMesh();xe!==null&&sl(xe,P,-1/0,R.sortObjects)}sl(M,P,0,R.sortObjects),T.finish(),O!==null&&O.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(Be,Et),Tn=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Tn&&C.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),It===!0&&K.beginShadows();let k=w.state.shadowsArray;if(oe.render(k,M,P),It===!0&&K.endShadows(),(F&&D.hasRenderPass())===!1){let xe=T.opaque,ce=T.transmissive;if(w.setupLights(),P.isArrayCamera){let ge=P.cameras;if(ce.length>0)for(let be=0,Fe=ge.length;be<Fe;be++){let Ye=ge[be];fd(xe,ce,M,Ye)}Tn&&C.render(M);for(let be=0,Fe=ge.length;be<Fe;be++){let Ye=ge[be];dd(T,M,Ye,Ye.viewport)}}else ce.length>0&&fd(xe,ce,M,P),Tn&&C.render(M),dd(T,M,P)}te!==null&&G===0&&(Ue.updateMultisampleRenderTarget(te),Ue.updateRenderTargetMipmap(te)),F&&D.end(R),M.isScene===!0&&M.onAfterRender(R,M,P),re.resetDefaultState(),W=-1,j=null,b.pop(),b.length>0?(w=b[b.length-1],Ue.setTextureUnits(w.state.textureUnits),It===!0&&K.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,O!==null&&O.renderEnd()};function sl(M,P,V,F){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){let xe=P.isArrayCamera?Xt:qe;if(!M.frustumCulled||M.intersectsFrustum(xe)){F&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_t);let ce=ee.update(M),ge=M.material;ge.visible&&T.push(M,ce,ge,V,Ft.z,null,P)}}else if(M.isMesh||M.isLine||M.isPoints){let xe=P.isArrayCamera?Xt:qe;if(!M.frustumCulled||M.intersectsFrustum(xe)){let ce=ee.update(M),ge=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ft.copy(ce.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(_t)),Array.isArray(ge)){let be=ce.groups;for(let Fe=0,Ye=be.length;Fe<Ye;Fe++){let ve=be[Fe],Ke=ge[ve.materialIndex];Ke&&Ke.visible&&T.push(M,ce,Ke,V,Ft.z,ve,P)}}else ge.visible&&T.push(M,ce,ge,V,Ft.z,null,P)}}}let he=M.children;for(let xe=0,ce=he.length;xe<ce;xe++)sl(he[xe],P,V,F)}function dd(M,P,V,F){let{opaque:k,transmissive:he,transparent:xe}=M;w.setupLightsView(V),It===!0&&K.setGlobalState(R.clippingPlanes,V),F&&ue.viewport(Q.copy(F)),k.length>0&&Xo(k,P,V),he.length>0&&Xo(he,P,V),xe.length>0&&Xo(xe,P,V),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function fd(M,P,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let ve=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new yn(1,1,{generateMipmaps:!0,type:ve?kn:fn,minFilter:dn,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let he=w.state.transmissionRenderTarget[F.id],xe=F.viewport||Q;he.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);let ce=R.getRenderTarget(),ge=R.getActiveCubeFace(),be=R.getActiveMipmapLevel();R.setRenderTarget(he),R.getClearColor(Z),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),Tn&&C.render(V);let Fe=R.toneMapping;R.toneMapping=Qn;let Ye=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),w.setupLightsView(F),It===!0&&K.setGlobalState(R.clippingPlanes,F),Xo(M,V,F),Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ke=0,At=P.length;Ke<At;Ke++){let ct=P[Ke],{object:ot,geometry:Kt,material:Me,group:Qt}=ct;if(Me.side===un&&ot.layers.test(F.layers)){let $e=Me.side;Me.side=Yt,Me.needsUpdate=!0,pd(ot,V,F,Kt,Me,Qt),Me.side=$e,Me.needsUpdate=!0,ve=!0}}ve===!0&&(Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he))}R.setRenderTarget(ce,ge,be),R.setClearColor(Z,pe),Ye!==void 0&&(F.viewport=Ye),R.toneMapping=Fe}function Xo(M,P,V){let F=P.isScene===!0?P.overrideMaterial:null;for(let k=0,he=M.length;k<he;k++){let xe=M[k],{object:ce,geometry:ge,group:be}=xe,Fe=xe.material;Fe.allowOverride===!0&&F!==null&&(Fe=F),ce.layers.test(V.layers)&&pd(ce,P,V,ge,Fe,be)}}function pd(M,P,V,F,k,he){O!==null&&k.isNodeMaterial&&O.setObject(M,k),M.onBeforeRender(R,P,V,F,k,he),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(R,P,V,F,M,he),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Yt,k.needsUpdate=!0,R.renderBufferDirect(V,P,F,k,M,he),k.side=jn,k.needsUpdate=!0,R.renderBufferDirect(V,P,F,k,M,he),k.side=un):R.renderBufferDirect(V,P,F,k,M,he),M.onAfterRender(R,P,V,F,k,he)}function md(M){let P=0;for(let V of M)V.texture!==null&&P++;return P}function Ur(M,P,V){P.isScene!==!0&&(P=bn);let F=Ie.get(M),k=w.state.lights,he=w.state.shadowsArray,xe=k.state.version,ce=$.getParameters(M,k.state,he,P,V,w.state.lightProbeGridArray),ge=$.getProgramCacheKey(ce),be=F.programs;F.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;let Fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;F.envMap=A.get(M.envMap||F.environment,Fe),F.envMapRotation=F.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,be===void 0&&(M.addEventListener("dispose",nt),be=new Map,F.programs=be,F.programVariants=new Map);let Ye=be.get(ge);if(Ye!==void 0){if(F.currentProgram===Ye&&F.lightsStateVersion===xe)return _d(M,ce),Ye}else ce.uniforms=$.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,V,ce),M.onBeforeCompile(ce,R),Ye=$.acquireProgram(ce,ge),be.set(ge,Ye),F.uniforms=ce.uniforms;let ve=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ve.clippingPlanes=K.uniform),_d(M,ce),F.needsLights=gg(M),F.lightsStateVersion=xe,F.needsLights&&(ve.ambientLightColor.value=k.state.ambient,ve.lightProbe.value=k.state.probe,ve.sunLights.value=k.state.sun,ve.sunLightShadows.value=k.state.sunShadow,ve.directionalLights.value=k.state.directional,ve.directionalLightShadows.value=k.state.directionalShadow,ve.spotLights.value=k.state.spot,ve.spotLightShadows.value=k.state.spotShadow,ve.rectAreaLights.value=k.state.rectArea,ve.ltc_1.value=k.state.rectAreaLTC1,ve.ltc_2.value=k.state.rectAreaLTC2,ve.pointLights.value=k.state.point,ve.pointLightShadows.value=k.state.pointShadow,ve.hemisphereLights.value=k.state.hemi,ve.sunShadowMatrix.value=k.state.sunShadowMatrix,ve.sunShadowCascade.value=k.state.sunShadowCascade,ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ve.spotLightMatrix.value=k.state.spotLightMatrix,ve.spotLightMap.value=k.state.spotLightMap,ve.pointShadowMatrix.value=k.state.pointShadowMatrix),F.numLightProbeGrids=md(w.state.lightProbeGridArray),F.currentProgram=Ye,F.uniformsList=null,Ye}function fg(M,P,V,F,k){let he=Ie.get(M),xe=he.currentProgram.id+","+F+","+k,ce=he.programVariants.get(xe);return ce===void 0?(ce=Ur(M,P,V),he.programVariants.set(xe,ce)):(he.currentProgram=ce,he.uniformsList=null,he.outputColorSpace=F,he.toneMapping=k),ce}function gd(M){if(M.uniformsList===null){let P=M.currentProgram.getUniforms();M.uniformsList=yr.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function _d(M,P){let V=Ie.get(M);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function pg(M,P,V,F,k){P.isScene!==!0&&(P=bn),Ue.resetTextureUnits();let he=P.fog,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,ce=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ge.workingColorSpace,ge=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,be=A.get(F.envMap||xe,ge),Fe=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ye=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ve=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,At=!!V.morphAttributes.color,ct=Qn;F.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ct=R.toneMapping);let ot=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Kt=ot!==void 0?ot.length:0,Me=Ie.get(F),Qt=w.state.lights;if(It===!0&&(on===!0||M!==j)){let xt=M===j&&F.id===W;K.setState(F,M,xt)}let $e=!1,as=!1;F.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Qt.state.version||k.isBatchedMesh&&Me.batching===!1||!k.isBatchedMesh&&Me.batching===!0||k.isBatchedMesh&&Me.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Me.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Me.instancing===!1||!k.isInstancedMesh&&Me.instancing===!0||k.isSkinnedMesh&&Me.skinning===!1||!k.isSkinnedMesh&&Me.skinning===!0||k.isInstancedMesh&&Me.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Me.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Me.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Me.instancingMorph===!1&&k.morphTexture!==null||Me.envMap!==be||F.fog===!0&&Me.fog!==he||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==K.numPlanes||Me.numIntersection!==K.numIntersection)||Me.vertexAlphas!==Fe||Me.vertexTangents!==Ye||Me.morphTargets!==ve||Me.morphNormals!==Ke||Me.morphColors!==At||Me.morphTargetsCount!==Kt||Me.numLightProbeGrids!==md(w.state.lightProbeGridArray)?$e=!0:(Me.outputColorSpace!==ce||Me.toneMapping!==ct)&&(as=!0):($e=!0,Me.__version=F.version);let Zt=Me.currentProgram;($e===!0||as===!0)&&(Zt=as===!0?fg(F,P,k,ce,ct):Ur(F,P,k),O&&F.isNodeMaterial&&O.onUpdateProgram(F,Zt,Me));let qo=!1,Ui=!1,cs=!1,Ze=Zt.getUniforms(),qt=Me.uniforms;if(ue.useProgram(Zt.program)&&(qo=!0,Ui=!0,cs=!0),F.id!==W&&(W=F.id,Ui=!0),qo||j!==M){ue.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ze.setValue(U,"projectionMatrix",M.projectionMatrix),Ze.setValue(U,"viewMatrix",M.matrixWorldInverse);let zt=Ze.map.cameraPosition;zt!==void 0&&zt.setValue(U,Gn.setFromMatrixPosition(M.matrixWorld)),pt.logarithmicDepthBuffer&&Ze.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ze.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Ui=!0,cs=!0)}if(Me.needsLights&&(Qt.state.sunShadowMap.length>0&&Ze.setValue(U,"sunShadowMap",Qt.state.sunShadowMap,Ue),Qt.state.directionalShadowMap.length>0&&Ze.setValue(U,"directionalShadowMap",Qt.state.directionalShadowMap,Ue),Qt.state.spotShadowMap.length>0&&Ze.setValue(U,"spotShadowMap",Qt.state.spotShadowMap,Ue),Qt.state.pointShadowMap.length>0&&Ze.setValue(U,"pointShadowMap",Qt.state.pointShadowMap,Ue)),k.isSkinnedMesh){Ze.setOptional(U,k,"bindMatrix"),Ze.setOptional(U,k,"bindMatrixInverse");let xt=k.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),Ze.setValue(U,"boneTexture",xt.boneTexture,Ue))}k.isBatchedMesh&&(Ze.setOptional(U,k,"batchingTexture"),Ze.setValue(U,"batchingTexture",k._matricesTexture,Ue),Ze.setOptional(U,k,"batchingIdTexture"),Ze.setValue(U,"batchingIdTexture",k._indirectTexture,Ue),Ze.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&Ze.setValue(U,"batchingColorTexture",k._colorsTexture,Ue));let Nn=V.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&J.update(k,V,Zt),(Ui||Me.receiveShadow!==k.receiveShadow)&&(Me.receiveShadow=k.receiveShadow,Ze.setValue(U,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null&&(qt.envMapIntensity.value=P.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=hM()),Ui){if(Ze.setValue(U,"toneMappingExposure",R.toneMappingExposure),Me.needsLights&&mg(qt,cs),he&&F.fog===!0&&se.refreshFogUniforms(qt,he),se.refreshMaterialUniforms(qt,F,me,Ce,w.state.transmissionRenderTarget[M.id]),Me.needsLights&&Me.numLightProbeGrids>0){let xt=y,zt=0;for(let ci of w.state.lightProbeGridArray)ci.texture!==null&&(xt.textures[zt]=ci.texture,xt.min[zt]=ci.boundingBox.min,xt.max[zt]=ci.boundingBox.max,xt.resolution[zt]=ci.resolution,zt++);for(let ci in xt)xt[ci].length=zt;qt.probesSH.value=xt.textures,qt.probesMin.value=xt.min,qt.probesMax.value=xt.max,qt.probesResolution.value=xt.resolution}yr.upload(U,gd(Me),qt,Ue)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(yr.upload(U,gd(Me),qt,Ue),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ze.setValue(U,"center",k.center),Ze.setValue(U,"modelViewMatrix",k.modelViewMatrix),Ze.setValue(U,"normalMatrix",k.normalMatrix),Ze.setValue(U,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){let xt=F.uniformsGroups;for(let zt=0,ci=xt.length;zt<ci;zt++){let yd=xt[zt];we.update(yd,Zt),we.bind(yd,Zt)}}return Zt}function mg(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function gg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(M,P,V){let F=Ie.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Ie.get(M.texture).__webglTexture=P,Ie.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){let V=Ie.get(M);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,V=0){te=M,q=P,G=V;let F=null,k=!1,he=!1;if(M){let ce=Ie.get(M);if(ce.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(U.FRAMEBUFFER,ce.__webglFramebuffer),Q.copy(M.viewport),Se.copy(M.scissor),Oe=M.scissorTest,ue.viewport(Q),ue.scissor(Se),ue.setScissorTest(Oe),W=-1;return}else if(ce.__webglFramebuffer===void 0)Ue.setupRenderTarget(M);else if(ce.__hasExternalTextures)Ue.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Fe=M.depthTexture;if(ce.__boundDepthTexture!==Fe){if(Fe!==null&&Ie.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(M)}}let ge=M.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);let be=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(be[P])?F=be[P][V]:F=be[P],k=!0):M.samples>0&&Ue.useMultisampledRTT(M)===!1?F=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(be)?F=be[V]:F=be,Q.copy(M.viewport),Se.copy(M.scissor),Oe=M.scissorTest}else Q.copy(Pe).multiplyScalar(me).floor(),Se.copy(tt).multiplyScalar(me).floor(),Oe=rt;if(V!==0&&(F=H),ue.bindFramebuffer(U.FRAMEBUFFER,F)&&ue.drawBuffers(M,F),ue.viewport(Q),ue.scissor(Se),ue.setScissorTest(Oe),k){let ce=Ie.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,ce.__webglTexture,V)}else if(he){let ce=P;for(let ge=0;ge<M.textures.length;ge++){let be=Ie.get(M.textures[ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ge,be.__webglTexture,V,ce)}}else if(M!==null&&V!==0){let ce=Ie.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ce.__webglTexture,V)}W=-1};function xd(M){let P=Ie.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=pt.textureFormatReadable(M.format),P.__typeReadable=pt.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,V,F,k,he,xe,ce=0){if(!(M&&M.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(U.FRAMEBUFFER,ge);try{let be=M.textures[ce],Fe=be.format,Ye=be.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ce);let ve=xd(be);if(ve.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-F&&V>=0&&V<=M.height-k&&U.readPixels(P,V,F,k,ie.convert(Fe),ie.convert(Ye),he)}finally{let be=te!==null?Ie.get(te).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(M,P,V,F,k,he,xe,ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge)if(P>=0&&P<=M.width-F&&V>=0&&V<=M.height-k){ue.bindFramebuffer(U.FRAMEBUFFER,ge);let be=M.textures[ce],Fe=be.format,Ye=be.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ce);let ve=xd(be);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(P,V,F,k,ie.convert(Fe),ie.convert(Ye),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let At=te!==null?Ie.get(te).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,At);let ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Wf(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ke),U.deleteSync(ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,V=0){let F=Math.pow(2,-V),k=Math.floor(M.image.width*F),he=Math.floor(M.image.height*F),xe=P!==null?P.x:0,ce=P!==null?P.y:0;Ue.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,xe,ce,k,he),ue.unbindTexture()},this.copyTextureToTexture=function(M,P,V=null,F=null,k=0,he=0){let xe,ce,ge,be,Fe,Ye,ve,Ke,At,ct=M.isCompressedTexture?M.mipmaps[he]:M.image;if(V!==null)xe=V.max.x-V.min.x,ce=V.max.y-V.min.y,ge=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,Fe=V.min.y,Ye=V.isBox3?V.min.z:0;else{let Ze=Math.pow(2,-k);xe=Math.floor(ct.width*Ze),ce=Math.floor(ct.height*Ze),M.isDataArrayTexture?ge=ct.depth:M.isData3DTexture?ge=Math.floor(ct.depth*Ze):ge=1,be=0,Fe=0,Ye=0}F!==null?(ve=F.x,Ke=F.y,At=F.z):(ve=0,Ke=0,At=0);let ot=ie.convert(P.format),Kt=ie.convert(P.type),Me;P.isData3DTexture?(Ue.setTexture3D(P,0),Me=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ue.setTexture2DArray(P,0),Me=U.TEXTURE_2D_ARRAY):(Ue.setTexture2D(P,0),Me=U.TEXTURE_2D),ue.activeTexture(U.TEXTURE0),ue.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),ue.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),ue.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);let Qt=ue.getParameter(U.UNPACK_ROW_LENGTH),$e=ue.getParameter(U.UNPACK_IMAGE_HEIGHT),as=ue.getParameter(U.UNPACK_SKIP_PIXELS),Zt=ue.getParameter(U.UNPACK_SKIP_ROWS),qo=ue.getParameter(U.UNPACK_SKIP_IMAGES);ue.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),ue.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),ue.pixelStorei(U.UNPACK_SKIP_PIXELS,be),ue.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),ue.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);let Ui=M.isDataArrayTexture||M.isData3DTexture,cs=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){let Ze=Ie.get(M),qt=Ie.get(P),Nn=Ie.get(Ze.__renderTarget),xt=Ie.get(qt.__renderTarget);ue.bindFramebuffer(U.READ_FRAMEBUFFER,Nn.__webglFramebuffer),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let zt=0;zt<ge;zt++)Ui&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(M).__webglTexture,k,Ye+zt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(P).__webglTexture,he,At+zt)),U.blitFramebuffer(be,Fe,be+xe,Fe+ce,ve,Ke,ve+xe,Ke+ce,U.DEPTH_BUFFER_BIT,U.NEAREST);ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||Ie.has(M)){let Ze=Ie.get(M),qt=Ie.get(P);ue.bindFramebuffer(U.READ_FRAMEBUFFER,I),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Nn=0;Nn<ge;Nn++)Ui?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ze.__webglTexture,k,Ye+Nn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ze.__webglTexture,k),cs?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,he,At+Nn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,he),k!==0?U.blitFramebuffer(be,Fe,be+xe,Fe+ce,ve,Ke,ve+xe,Ke+ce,U.COLOR_BUFFER_BIT,U.NEAREST):cs?U.copyTexSubImage3D(Me,he,ve,Ke,At+Nn,be,Fe,xe,ce):U.copyTexSubImage2D(Me,he,ve,Ke,be,Fe,xe,ce);ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else cs?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Me,he,ve,Ke,At,xe,ce,ge,ot,Kt,ct.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,he,ve,Ke,At,xe,ce,ge,ot,ct.data):U.texSubImage3D(Me,he,ve,Ke,At,xe,ce,ge,ot,Kt,ct):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,ve,Ke,xe,ce,ot,Kt,ct.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,ve,Ke,ct.width,ct.height,ot,ct.data):U.texSubImage2D(U.TEXTURE_2D,he,ve,Ke,xe,ce,ot,Kt,ct);ue.pixelStorei(U.UNPACK_ROW_LENGTH,Qt),ue.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$e),ue.pixelStorei(U.UNPACK_SKIP_PIXELS,as),ue.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),ue.pixelStorei(U.UNPACK_SKIP_IMAGES,qo),he===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&U.generateMipmap(Me),ue.unbindTexture()},this.initRenderTarget=function(M){Ie.get(M).__webglFramebuffer===void 0&&Ue.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ue.setTextureCube(M,0):M.isData3DTexture?Ue.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ue.setTexture2DArray(M,0):Ue.setTexture2D(M,0),ue.unbindTexture()},this.resetState=function(){q=0,G=0,te=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};function Lh(i,e){if(e===ah)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===xr||e===Eo){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===xr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Rp(i){let e=new Map,t=new Map,n=i.clone();return Cp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Cp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Cp(i.children[n],e.children[n],t)}var Pi=class extends $n{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Oc(t,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Oc(t,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Qh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ai.extractUrlBase(e);o=Ai.resolveURL(l,this.path)}else o=Ai.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new lr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dp){try{o[We.KHR_BINARY_GLTF]=new eu(e)}catch(d){s&&s(d);return}r=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new au(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case We.KHR_MATERIALS_UNLIT:o[d]=new Fh;break;case We.KHR_DRACO_MESH_COMPRESSION:o[d]=new tu(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[d]=new nu;break;case We.KHR_MESH_QUANTIZATION:o[d]=new iu;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function uM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Mt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Oh=class{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],tn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Bn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xs(h),l.distance=d;break;case"spot":l=new po(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Fh=class{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Kn}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},Bh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},zh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(r,r)}return Promise.all(s)}},kh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Gh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,bt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Wh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],tn),Promise.all(s)}},qh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],tn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,bt)),Promise.all(s)}},Kh=class{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Zh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Jh=class{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$h=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},jh=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Oc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Qh=class{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let x=new Ne,p=new L,m=new Gt,S=new L(1,1,1),E=new ms(g.geometry,g.material,u);for(let T=0;T<u;T++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,T),c.SCALE&&S.fromBufferAttribute(c.SCALE,T),E.setMatrixAt(T,x.compose(p,m,S));let y=null;for(let T in c)if(T==="_COLOR_0"){let w=c[T];E.instanceColor=new vi(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(y===null){let _=E.geometry;y=new nn,y.name=_.name;for(let b in _.attributes)y.setAttribute(b,_.attributes[b]);for(let b in _.morphAttributes)y.morphAttributes[b]=_.morphAttributes[b];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let b of _.groups)y.addGroup(b.start,b.count,b.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),E.geometry=y}let w=c[T];y.setAttribute(T,new vi(w.array,w.itemSize,w.normalized))}lt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Dp="glTF",Lo=12,Ip={JSON:1313821514,BIN:5130562},eu=class{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Lo,r=new DataView(e,Lo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Ip.JSON){let l=new Uint8Array(e,Lo+o,a);this.content=n.decode(l)}else if(c===Ip.BIN){let l=Lo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let d=ru[h]||h.toLowerCase();a[d]=o[h]}for(let h in e.attributes){let d=ru[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Mr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}d(f)},a,l,tn,u)})})}},nu=class{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},iu=class{constructor(){this.name=We.KHR_MESH_QUANTIZATION}},Fc=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,x=g-l,p=-2*f+3*u,m=f-u,S=1-p,E=m-u+d;for(let y=0;y!==a;y++){let T=o[x+y+a],w=o[x+y+c]*h,_=o[g+y+a],b=o[g+y]*h;r[y]=S*T+E*w+p*_+m*b}return r}},dM=new Gt,su=class extends Fc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return dM.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pp={9728:vt,9729:Tt,9984:gr,9985:Ji,9986:Ci,9987:dn},Lp={33071:an,33648:Vi,10497:Xn},Nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ru={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fM={CUBICSPLINE:void 0,LINEAR:xi,STEP:_i},Dh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Cn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function gM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _M(i){let e,t=i.extensions&&i.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uh(t.attributes):e=i.indices+":"+Uh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Uh(i.targets[n]);return e}function Uh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ou(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yM=new Ne,au=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new uo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new mo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ws(r,a,s),ri(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ai.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Nh[s.type],a=Mr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new ut(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Nh[s.type],l=Mr[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(f&&f!==d){let m=Math.floor(u/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,E=t.cache.get(S);E||(x=new l(a,m*f,s.count*f/h),E=new ir(x,f/h),t.cache.add(S,E)),p=new sr(E,c,u%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,u,s.count*c),p=new ut(x,c,g);if(s.sparse!==void 0){let m=Nh.SCALAR,S=Mr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new S(o[1],E,s.sparse.count*m),w=new l(o[2],y,s.sparse.count*c);a!==null&&(p=new ut(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,b=T.length;_<b;_++){let D=T[_];if(p.setX(D,w[_*c]),c>=2&&p.setY(D,w[_*c+1]),c>=3&&p.setZ(D,w[_*c+2]),c>=4&&p.setW(D,w[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Pp[u.magFilter]||Tt,h.minFilter=Pp[u.minFilter]||dn,h.wrapS=Lp[u.wrapS]||Xn,h.wrapT=Lp[u.wrapT]||Xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==vt&&h.minFilter!==Tt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(u){return new Promise(function(f,g){t.parse(u,f,g)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(u){return new Promise(function(f,g){let x=f;t.isImageBitmapLoader===!0&&(x=function(p){let m=new Nt(p);m.needsUpdate=!0,f(m)}),t.load(Ai.resolveURL(u,r.path),x,void 0,g)})})}let d=h.then(function(u){return l===!0&&a.revokeObjectURL(c),ri(u,o),u.userData.mimeType=o.mimeType||xM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new cr,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ar,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Cn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[We.KHR_MATERIALS_UNLIT]){let d=s[We.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],tn),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,bt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=un);let h=r.alphaMode||Dh.OPAQUE;if(h===Dh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Dh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Kn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Kn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Kn){let d=r.emissiveFactor;a.emissive=new Re().setRGB(d[0],d[1],d[2],tn)}return r.emissiveTexture!==void 0&&o!==Kn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(l).then(function(){let d=new o(a);return r.name&&(d.name=r.name),ri(d,r),t.associations.set(d,{materials:e}),r.extensions&&ws(s,d,r),d})}createUniqueName(e){let t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Np(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=_M(l),d=s[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Np(new nn,l,t),l.mode===In.TRIANGLE_STRIP?u=u.then(f=>Lh(f,Eo)):l.mode===In.TRIANGLE_FAN&&(u=u.then(f=>Lh(f,xr))),s[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?pM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=o[f],m,S=l[f];if(p.mode===In.TRIANGLES||p.mode===In.TRIANGLE_STRIP||p.mode===In.TRIANGLE_FAN||p.mode===void 0){let E=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&y?new jr(x,S):new dt(x,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===In.LINES)m=new eo(x,S);else if(p.mode===In.LINE_STRIP)m=new gs(x,S);else if(p.mode===In.LINE_LOOP)m=new to(x,S);else if(p.mode===In.POINTS)m=new no(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&gM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ri(m,r),p.extensions&&ws(s,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&ws(s,d[0],r),d[0];let u=new Lt;r.extensions&&ws(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(ti.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let d=o[l];if(d){a.push(d);let u=new Ne;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qr(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],x=d[3],p=d[4],m=[];for(let E=0,y=u.length;E<y;E++){let T=u[E],w=f[E],_=g[E],b=x[E],D=p[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let R=n._createAnimationTracks(T,w,_,b,D);if(R)for(let N=0;N<R.length;N++)m.push(R[N])}let S=new ho(r,void 0,m);return ri(S,s),S})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,yM)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,g=d[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new rr:l.length>1?h=new Lt:l.length===1?h=l[0]:h=new lt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=o),ri(h,r),r.extensions&&ws(n,h,r),r.matrix!==void 0){let d=new Ne;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Lt;n.name&&(r.name=s.createUniqueName(n.name)),ri(r,n),n.extensions&&ws(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(Rp(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof sn||u instanceof Nt)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Qi[r.path]===Qi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Qi[r.path]){case Qi.weights:h=bi;break;case Qi.rotation:h=Ti;break;case Qi.translation:case Qi.scale:h=Yi;break;default:n.itemSize===1?h=bi:h=Yi;break}let d=s.interpolation!==void 0?fM[s.interpolation]:xi,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+Qi[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ou(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ti?su:Fc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vM(i,e,t){let n=e.attributes,s=new St;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=ou(Mr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let x=ou(Mr[u.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Np(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=ru[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ge.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),ri(i,e),vM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mM(i,e.targets,t):i})}var es=class extends cn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new qi;e.deleteAttribute("uv");let t=new Cn({side:Yt}),n=new Cn,s=new xs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new dt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ms(e,n,6),a=new lt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new dt(e,Sr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new dt(e,Sr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new dt(e,Sr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new dt(e,Sr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new dt(e,Sr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new dt(e,Sr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Sr(i){return new co({color:0,emissive:16777215,emissiveIntensity:i})}var cu=Object.freeze({baseCount:20,rareDenominator:4096,shareReward:20,signupReward:100,referralReward:100});function Up(i,e=globalThis.crypto){if(!Number.isInteger(i)||i<1||i>2**32)throw Error("Invalid random bound");let t=Math.floor(2**32/i)*i,n=new Uint32Array(1);do e.getRandomValues(n);while(n[0]>=t);return n[0]%i}function Op(i,e=globalThis.crypto){if(i.length!==cu.baseCount||new Set(i.map(s=>s.id)).size!==cu.baseCount||i.some(s=>!s.modelUrl||s.status==="pending"))throw Error("Exactly 20 completed, uniquely identified base models required");let t=i[Up(i.length,e)],n=Up(cu.rareDenominator,e)===0;return{baseId:t.id,variantId:t.id+(n?":rare":":base"),rarity:n?"rare":"base",modelUrl:t.modelUrl}}function br(i){let e=new Map;return i.traverse(t=>{if(!t.isMesh||!t.material)return;let n=s=>{if(e.has(s))return e.get(s);let r=s.clone();return r.color&&r.color.set("#d6b6ff"),r.metalness=Math.max(r.metalness||0,.32),r.roughness=Math.min(r.roughness??.5,.42),r.needsUpdate=!0,e.set(s,r),r};t.material=Array.isArray(t.material)?t.material.map(n):n(t.material)}),i}var Tr=new Map,Bc=new Map,Fp=Promise.resolve(),lu,Bp=new Promise(i=>{try{let e=indexedDB.open("memory-capsule-thumbnails",1);e.onupgradeneeded=()=>e.result.createObjectStore("images"),e.onsuccess=()=>i(e.result),e.onerror=()=>i(null)}catch{i(null)}});async function MM(i){let e=await Bp;return e?new Promise(t=>{try{let n=e.transaction("images").objectStore("images").get(i);n.onsuccess=()=>t(n.result),n.onerror=()=>t(null)}catch{t(null)}}):null}var Es=i=>i.id+"|"+i.modelUrl;function hu(i,e){Tr.set(Es(i),e),Bp.then(t=>{try{t?.transaction("images","readwrite").objectStore("images").put(e,Es(i))}catch{}})}function SM(){if(lu)return lu;let i=new ji({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(320,260),i.setPixelRatio(1),i.toneMapping=Ri,i.toneMappingExposure=1.15;let e=new cn,t=new yt(35,320/260,.1,100);t.position.set(3.2,1.7,5),t.lookAt(0,0,0);let n=new si(i),s=new es,r=n.fromScene(s,.04);e.environment=r.texture,s.dispose(),n.dispose(),e.add(new Ei(16775655,5006938,2));let o=new Bn(16775140,4);return o.position.set(-4,7,6),e.add(o),lu={r:i,s:e,c:t}}function bM(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[]){for(let s of Object.values(n))s?.isTexture&&e.add(s);n.dispose()}}),e.forEach(t=>{t.source?.data?.close?.(),t.dispose()})}async function TM(i){let e=await MM(Es(i));if(e)return Tr.set(Es(i),e),e;let{r:t,s:n,c:s}=SM(),r=(await new Pi().loadAsync(i.modelUrl)).scene;try{i.rarity==="rare"&&br(r);let o=new St().setFromObject(r),a=o.getSize(new L);r.position.sub(o.getCenter(new L));let c=new Lt;c.add(r),c.scale.setScalar(2.5/(Math.max(a.x,a.y,a.z)||1)),n.add(c);try{t.render(n,s);let l=t.domElement.toDataURL("image/png");return hu(i,l),l}finally{n.remove(c)}}finally{bM(r)}}function wM(i){let e=Es(i);if(Tr.has(e))return Promise.resolve(Tr.get(e));if(Bc.has(e))return Bc.get(e);let t=Fp.catch(()=>{}).then(()=>TM(i));return Fp=t,Bc.set(e,t),t.finally(()=>Bc.delete(e)).catch(()=>{}),t}function zp(i,e){let t=document.createElement("span");t.className="thumbnail-status",t.textContent="\u6A21\u578B\u7F29\u7565\u56FE\u52A0\u8F7D\u4E2D\u2026",i.append(t);let n=r=>{if(!i.isConnected)return;let o=document.createElement("img");o.alt=e.name+"\u7684\u771F\u5B9E\u6A21\u578B",o.src=r,o.className="model-thumbnail",t.replaceWith(o)};if(Tr.has(Es(e))){queueMicrotask(()=>n(Tr.get(Es(e))));return}let s=new IntersectionObserver(r=>{if(!i.isConnected){s.disconnect();return}r.some(o=>o.isIntersecting)&&(s.disconnect(),wM(e).then(n).catch(()=>{t.textContent="\u7F29\u7565\u56FE\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u67E5\u770B\u6A21\u578B"}))},{rootMargin:"150px"});s.observe(i)}var zc=class{parse(e,t={}){t=Object.assign({binary:!1},t);let n=t.binary,s=[],r=0;e.traverse(function(m){if(m.isMesh){let S=m.geometry,E=S.index,y=S.getAttribute("position");r+=E!==null?E.count/3:y.count/3,s.push({object3d:m,geometry:S})}});let o,a=80;if(n===!0){let m=r*2+r*3*4*4+80+4,S=new ArrayBuffer(m);o=new DataView(S),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;let c=new L,l=new L,h=new L,d=new L,u=new L,f=new L;for(let m=0,S=s.length;m<S;m++){let E=s[m].object3d,y=s[m].geometry,T=y.index,w=y.getAttribute("position");if(T!==null)for(let _=0;_<T.count;_+=3){let b=T.getX(_+0),D=T.getX(_+1),R=T.getX(_+2);g(b,D,R,w,E)}else for(let _=0;_<w.count;_+=3){let b=_+0,D=_+1,R=_+2;g(b,D,R,w,E)}}return n===!1&&(o+=`endsolid exported
`),o;function g(m,S,E,y,T){c.fromBufferAttribute(y,m),l.fromBufferAttribute(y,S),h.fromBufferAttribute(y,E),T.isSkinnedMesh===!0&&(T.applyBoneTransform(m,c),T.applyBoneTransform(S,l),T.applyBoneTransform(E,h)),c.applyMatrix4(T.matrixWorld),l.applyMatrix4(T.matrixWorld),h.applyMatrix4(T.matrixWorld),x(c,l,h),p(c),p(l),p(h),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function x(m,S,E){d.subVectors(E,S),u.subVectors(m,S),d.cross(u).normalize(),f.copy(d).normalize(),n===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):(o+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,o+=`		outer loop
`)}function p(m){n===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):o+="			vertex "+m.x+" "+m.y+" "+m.z+`
`}}};var kp={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},ts=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new mu(e)}),this.register(function(e){return new gu(e)}),this.register(function(e){return new vu(e)}),this.register(function(e){return new Mu(e)}),this.register(function(e){return new Su(e)}),this.register(function(e){return new bu(e)}),this.register(function(e){return new _u(e)}),this.register(function(e){return new xu(e)}),this.register(function(e){return new yu(e)}),this.register(function(e){return new Tu(e)}),this.register(function(e){return new wu(e)}),this.register(function(e){return new Eu(e)}),this.register(function(e){return new Au(e)}),this.register(function(e){return new Ru(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){let r=new pu,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},Xe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},uu="KHR_mesh_quantization",Mn={};Mn[vt]=Xe.NEAREST;Mn[gr]=Xe.NEAREST_MIPMAP_NEAREST;Mn[Ci]=Xe.NEAREST_MIPMAP_LINEAR;Mn[Tt]=Xe.LINEAR;Mn[Ji]=Xe.LINEAR_MIPMAP_NEAREST;Mn[dn]=Xe.LINEAR_MIPMAP_LINEAR;Mn[an]=Xe.CLAMP_TO_EDGE;Mn[Xn]=Xe.REPEAT;Mn[Vi]=Xe.MIRRORED_REPEAT;var Hp={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},EM=new Re,Gp=12,AM=1179937895,RM=2,Vp=8,CM=1313821514,IM=5130562;function Li(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function PM(i){return new TextEncoder().encode(i).buffer}function LM(i){return Li(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function NM(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=ti.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Wp(i){return Math.ceil(i/4)*4}function du(i,e=0){let t=Wp(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function fu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function DM(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}var pu=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r187"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map,normalMaps:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1,copyright:null},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;n=s.options;let a=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),d=Object.keys(c);if(h.length>0&&(o.extensionsUsed=h),d.length>0&&(o.extensionsRequired=d),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.copyright&&(o.asset.copyright=n.copyright),n.binary===!0){let u=new FileReader;u.readAsArrayBuffer(l),u.onloadend=function(){let f=du(u.result),g=new DataView(new ArrayBuffer(Vp));g.setUint32(0,f.byteLength,!0),g.setUint32(4,IM,!0);let x=du(PM(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Vp));p.setUint32(0,x.byteLength,!0),p.setUint32(4,CM,!0);let m=new ArrayBuffer(Gp),S=new DataView(m);S.setUint32(0,AM,!0),S.setUint32(4,RM,!0);let E=Gp+p.byteLength+x.byteLength+g.byteLength+f.byteLength;S.setUint32(8,E,!0);let y=new Blob([m,p,x,g,f],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(y),T.onloadend=function(){t(T.result)}}}else if(o.buffers&&o.buffers.length>0){let u=new FileReader;u.readAsDataURL(l),u.onloadend=function(){let f=u.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new L;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new L;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===bt?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof Xi&&(e=await this.decompressTextureAsync(e)),t instanceof Xi&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),c=fu();c.width=o,c.height=a;let l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);let h=l.getImageData(0,0,o,a);if(s){l.drawImage(s,0,0,o,a);let f=n(e),g=l.getImageData(0,0,o,a).data;for(let x=2;x<g.length;x+=4)h.data[x]=f(g[x]/256)*256}if(r){l.drawImage(r,0,0,o,a);let f=n(t),g=l.getImageData(0,0,o,a).data;for(let x=1;x<g.length;x+=4)h.data[x]=f(g[x]/256)*256}l.putImageData(h,0,0);let u=(e||t).clone();return u.source=new yi(c),u.colorSpace=Hn,u.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async buildNormalMapTextureAsync(e,t,n){e instanceof Xi&&(e=await this.decompressTextureAsync(e));let s=e.image,r=fu();r.width=s.width,r.height=s.height;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(s,0,0,r.width,r.height);let a=o.getImageData(0,0,r.width,r.height),c=a.data;for(let h=0;h<c.length;h+=4)t&&(c[h+0]=255-c[h+0]),n&&(c[h+1]=255-c[h+1]);o.putImageData(a,0,0);let l=e.clone();return l.source=new yi(r),l}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case Xe.BYTE:case Xe.UNSIGNED_BYTE:a=1;break;case Xe.SHORT:case Xe.UNSIGNED_SHORT:a=2;break;default:a=4}let c=e.itemSize*a;r===Xe.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);let l=Wp(s*c),h=new DataView(new ArrayBuffer(l)),d=0;for(let g=n;g<n+s;g++){for(let x=0;x<e.itemSize;x++){let p;e.itemSize>4?p=e.array[g*e.itemSize+x]:(x===0?p=e.getX(g):x===1?p=e.getY(g):x===2?p=e.getZ(g):x===3&&(p=e.getW(g)),e.normalized===!0&&(p=ti.normalize(p,e.array))),t===Xe.FLOAT?h.setFloat32(d,p,!0):t===Xe.INT?h.setInt32(d,p,!0):t===Xe.UNSIGNED_INT?h.setUint32(d,p,!0):t===Xe.SHORT?h.setInt16(d,p,!0):t===Xe.UNSIGNED_SHORT?h.setUint16(d,p,!0):t===Xe.BYTE?h.setInt8(d,p):t===Xe.UNSIGNED_BYTE&&h.setUint8(d,p),d+=a}d%c!==0&&(d+=c-d%c)}let u={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(u.target=r),r===Xe.ARRAY_BUFFER&&(u.byteStride=c),this.byteOffset+=l,o.bufferViews.push(u),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=du(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=Xe.FLOAT;else if(e.array.constructor===Int32Array)a=Xe.INT;else if(e.array.constructor===Uint32Array)a=Xe.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=Xe.SHORT;else if(e.array.constructor===Uint16Array)a=Xe.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=Xe.BYTE;else if(e.array.constructor===Uint8Array)a=Xe.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let c=NM(e,n,s),l;t!==void 0&&(l=e===t.index?Xe.ELEMENT_ARRAY_BUFFER:Xe.ARRAY_BUFFER);let h=this.processBufferView(e,a,n,s,l),d={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:c.max,min:c.min,type:o[e.itemSize]};return e.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,c=r.options,l=r.pending;o.images.has(e)||o.images.set(e,{});let h=o.images.get(e),d=s+":flipY/"+n.toString();if(h[d]!==void 0)return h[d];a.images||(a.images=[]);let u={mimeType:s},f=fu();f.width=Math.min(e.width,c.maxTextureSize),f.height=Math.min(e.height,c.maxTextureSize);let g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==pn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let p=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=e.data[m+0],p[m+1]=e.data[m+1],p[m+2]=e.data[m+2],p[m+3]=e.data[m+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(DM(f,s).then(p=>r.processBufferViewImage(p)).then(p=>{u.bufferView=p})):u.uri=er.getDataURL(f,s);let x=a.images.push(u)-1;return h[d]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Mn[e.magFilter],minFilter:Mn[e.minFilter],wrapS:Mn[e.wrapS],wrapT:Mn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Xi&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType,a=this.processImage(e.image,e.format,e.flipY,o),c={sampler:this.processSampler(e)};o==="image/webp"?(c.extensions=c.extensions||{},c.extensions.EXT_texture_webp={source:a},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):c.source=a,e.name&&(c.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,c)});let l=r.textures.push(c)-1;return s.textures.set(e,l),l}async processMaterialAsync(e,t){let n=this.cache,s=this.json,r=t!==void 0&&t.hasAttribute("tangent"),o=e.normalMap?e.uuid+":"+r:e.uuid;if(n.materials.has(o))return n.materials.get(o);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let a={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let c=e.color.toArray().concat([e.opacity]);if(Li(c,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=c),e.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=e.metalness,a.pbrMetallicRoughness.roughnessFactor=e.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let h=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),d={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(d,h),a.pbrMetallicRoughness.metallicRoughnessTexture=d}if(e.map){let h={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(h,e.map),a.pbrMetallicRoughness.baseColorTexture=h}if(e.emissive){let h=e.emissive;if(Math.max(h.r,h.g,h.b)>0&&(a.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let u={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(u,e.emissiveMap),a.emissiveTexture=u}}if(e.normalMap){let h=e.normalScale,d=h.x<0,u=r?h.y<0:h.y>0,f=e.normalMap;if(d||u){n.normalMaps.has(e.normalMap)===!1&&n.normalMaps.set(e.normalMap,{});let x=n.normalMaps.get(e.normalMap),p=`${d}:${u}`;x[p]===void 0&&(x[p]=await this.buildNormalMapTextureAsync(e.normalMap,d,u)),f=x[p]}let g={index:await this.processTextureAsync(f),texCoord:e.normalMap.channel};Math.abs(h.x)!==1&&(g.scale=Math.abs(h.x)),this.applyTextureTransform(g,e.normalMap),a.normalTexture=g}if(e.aoMap){let h={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(h.strength=e.aoMapIntensity),this.applyTextureTransform(h,e.aoMap),a.occlusionTexture=h}e.transparent?a.alphaMode="BLEND":e.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=e.alphaTest),e.side===un&&(a.doubleSided=!0),e.name!==""&&(a.name=e.name),this.serializeUserData(e,a),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(e,a)});let l=s.materials.push(a)-1;return n.materials.set(o,l),l}async processMeshAsync(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,T=e.material.length;y<T;y++)s.push(e.material[y].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=Xe.LINES:e.isLineLoop?a=Xe.LINE_LOOP:e.isLine?a=Xe.LINE_STRIP:e.isPoints?a=Xe.POINTS:a=e.material.wireframe?Xe.LINES:Xe.TRIANGLES;let c={},l={},h=[],d=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let y in o.attributes){if(y.slice(0,5)==="morph")continue;let T=o.attributes[y];if(y=u[y]||y.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)&&!y.startsWith("_")&&(y="_"+y),t.attributes.has(this.getUID(T))){l[y]=t.attributes.get(this.getUID(T));continue}g=null;let _=T.array;y==="JOINTS_0"&&!(_ instanceof Uint16Array)&&!(_ instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=ts.Utils.toTypedBufferAttribute(T,Uint16Array)):(_ instanceof Uint32Array||_ instanceof Int32Array)&&!y.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${y}" converted to type FLOAT.`),g=ts.Utils.toTypedBufferAttribute(T,Float32Array));let b=this.processAccessor(g||T,o);b!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,T),l[y]=b,t.attributes.set(this.getUID(T),b))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let y=[],T=[],w={};if(e.morphTargetDictionary!==void 0)for(let _ in e.morphTargetDictionary)w[e.morphTargetDictionary[_]]=_;for(let _=0;_<e.morphTargetInfluences.length;++_){let b={},D=!1;for(let R in o.morphAttributes){if(R!=="position"&&R!=="normal"){D||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),D=!0);continue}let N=o.morphAttributes[R][_],O=R.toUpperCase(),H=o.attributes[R];if(t.attributes.has(this.getUID(N,!0))){b[O]=t.attributes.get(this.getUID(N,!0));continue}let I=N.clone();if(!o.morphTargetsRelative)for(let B=0,q=N.count;B<q;B++)for(let G=0;G<N.itemSize;G++)G===0&&I.setX(B,N.getX(B)-H.getX(B)),G===1&&I.setY(B,N.getY(B)-H.getY(B)),G===2&&I.setZ(B,N.getZ(B)-H.getZ(B)),G===3&&I.setW(B,N.getW(B)-H.getW(B));b[O]=this.processAccessor(I,o),t.attributes.set(this.getUID(H,!0),b[O])}d.push(b),y.push(e.morphTargetInfluences[_]),e.morphTargetDictionary!==void 0&&T.push(w[_])}c.weights=y,T.length>0&&(c.extras={},c.extras.targetNames=T)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let p=!1;if(x&&o.index===null){let y=[];for(let T=0,w=o.attributes.position.count;T<w;T++)y[T]=T;o.setIndex(y),p=!0}let m=x?e.material:[e.material],S=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,T=S.length;y<T;y++){let w={mode:a,attributes:l};if(this.serializeUserData(o,w),d.length>0&&(w.targets=d),o.index!==null){let b=this.getUID(o.index);(S[y].start!==void 0||S[y].count!==void 0)&&(b+=":"+S[y].start+":"+S[y].count),t.attributes.has(b)?w.indices=t.attributes.get(b):(w.indices=this.processAccessor(o.index,o,S[y].start,S[y].count),t.attributes.set(b,w.indices)),w.indices===null&&delete w.indices}let _=await this.processMaterialAsync(m[S[y].materialIndex],o);_!==null&&(w.material=_),h.push(w)}p===!0&&o.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(y){y.writeMesh&&y.writeMesh(e,c)});let E=n.meshes.push(c)-1;return t.meshes.set(r,E),E}detectMeshQuantization(e,t){if(this.extensionsUsed[uu])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];kp[s]&&kp[s].includes(n)&&(this.extensionsUsed[uu]=!0,this.extensionsRequired[uu]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right,ymag:e.top,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:ti.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=ts.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let l=0;l<r.length;++l){let h=r[l],d=Je.parseTrackName(h.name),u=Je.findNode(t,d.nodeName),f=Hp[d.propertyName];if(d.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(d.objectIndex):u=void 0),!u||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let g=1,x=h.values.length/h.times.length;f===Hp.morphTargetInfluences&&(x/=u.morphTargetInfluences.length);let p;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",x/=3):h.getInterpolation()===_i?p="STEP":p="LINEAR",a.push({input:this.processAccessor(new ut(h.times,g)),output:this.processAccessor(new ut(h.values,x)),interpolation:p}),o.push({sampler:a.length-1,target:{node:s.get(u),path:f}})}let c={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,c),n.animations.push(c),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],c=new Float32Array(r.bones.length*16),l=new Ne;for(let d=0;d<r.bones.length;++d)a.push(n.get(r.bones[d])),l.copy(r.boneInverses[d]),l.multiply(e.bindMatrix).toArray(c,d*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new ut(c,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,s=this.nodeMap;if(t.nodes||(t.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let r={};if(n.trs){let a=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();Li(a,[0,0,0,1])||(r.rotation=a),Li(c,[0,0,0])||(r.translation=c),Li(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),LM(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){let a=[];for(let c=0,l=e.children.length;c<l;c++){let h=e.children[c];if(h.visible||n.onlyVisible===!1){let d=await this.processNodeAsync(h);d!==null&&a.push(d)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async _processNodeWithPivotAsync(e){let t=this.json,n=this.options,s=this.nodeMap,r=e.pivot,o={},a=e.quaternion.toArray(),c=[e.position.x+r.x,e.position.y+r.y,e.position.z+r.z],l=e.scale.toArray();Li(a,[0,0,0,1])||(o.rotation=a),Li(c,[0,0,0])||(o.translation=c),Li(l,[1,1,1])||(o.scale=l),o.extras={pivot:r.toArray()},e.name!==""&&(o.name=String(e.name)),this.serializeUserData(e,o);let h=t.nodes.push(o)-1;s.set(e,h);let d={},u=[-r.x,-r.y,-r.z];if(Li(u,[0,0,0])||(d.translation=u),e.isMesh||e.isLine||e.isPoints){let x=await this.processMeshAsync(e);x!==null&&(d.mesh=x)}else e.isCamera&&(d.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let g=[t.nodes.push(d)-1];if(e.children.length>0){let x=[];for(let p=0,m=e.children.length;p<m;p++){let S=e.children[p];if(S.visible||n.onlyVisible===!1){let E=await this.processNodeAsync(S);E!==null&&x.push(E)}}x.length>0&&(d.children=x)}return o.children=g,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(e,o)}),h}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let c=e.children[o];if(c.visible||n.onlyVisible===!1){let l=await this.processNodeAsync(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new cn;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof cn?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);if(e.length===1)for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);else for(let s=0;s<e.length;s++){let r=t.animations[s]||[];for(let o=0;o<r.length;++o)this.processAnimation(r[o],e[s])}await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},mu=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},gu=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},_u=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},xu=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},yu=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,r.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},vu=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Mu=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Su=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},bu=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(EM)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Tu=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},wu=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Eu=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Au=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Ru=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),c=new Ne,l=new L,h=new Gt,d=new L;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,h,d),l.toArray(r,f*3),h.toArray(o,f*4),d.toArray(a,f*3);let u={TRANSLATION:n.processAccessor(new ut(r,3)),ROTATION:n.processAccessor(new ut(o,4)),SCALE:n.processAccessor(new ut(a,3))};s.instanceColor&&(u._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:u},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};ts.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n)),a;if(i.times.length===0){s[0]=e;for(let c=0;c<n;c++)r[c]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){s.set(i.times.slice(0,c+1),0),s[c+1]=e,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(o.evaluate(e),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=Je.parseTrackName(o.name),c=Je.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(xi)}let l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let d;if(n[c.uuid]===void 0){d=o.clone();let f=new d.ValueBufferType(l*d.times.length);for(let g=0;g<d.times.length;g++)f[g*l+h]=d.values[g];d.name=(a.nodeName||"")+".morphTargetInfluences",d.values=f,n[c.uuid]=d,t.push(d);continue}let u=o.createInterpolant(new o.ValueBufferType(1));d=n[c.uuid];for(let f=0;f<d.times.length;f++)d.values[f*l+h]=u.evaluate(d.times[f]);for(let f=0;f<o.times.length;f++){let g=this.insertKeyframe(d,o.times[f]);d.values[g*l+h]=o.values[f]}}return i.tracks=t,i},toTypedBufferAttribute:function(i,e){let t=new ut(new e(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let n=0,s=i.count;n<s;n++)for(let r=0;r<i.itemSize;r++)t.setComponent(n,r,i.getComponent(n,r));return t}};function UM(i,e=60){if(!i)throw Error("\u8BF7\u5148\u7B49\u5F85\u6A21\u578B\u52A0\u8F7D\u5B8C\u6210");if(!Number.isFinite(e)||e<20||e>200)throw Error("\u6700\u957F\u8FB9\u8BF7\u8F93\u516520\u2013200\u6BEB\u7C73");let t=i.clone(!0);t.updateMatrixWorld(!0);let n=new St().setFromObject(t),s=n.getSize(new L),r=Math.max(s.x,s.y,s.z);if(!r)throw Error("\u6A21\u578B\u5C3A\u5BF8\u65E0\u6548");let o=new Lt;return o.add(t),o.scale.setScalar(e/r),o.updateMatrixWorld(!0),o}function OM(i,e){return new zc().parse(UM(i,e),{binary:!0})}function FM(i,e,t){let n=ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength).slice():new Uint8Array(i).slice();if(n.byteLength<84)throw Error("\u6A21\u578B\u6587\u4EF6\u4E3A\u7A7A\u6216\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u6A21\u578B");let s=new DataView(n.buffer);if(t==="stl"){let r=s.getUint32(80,!0);if(!r||n.byteLength!==84+r*50)throw Error("STL \u4E09\u89D2\u9762\u6570\u636E\u6821\u9A8C\u5931\u8D25")}else if(s.getUint32(0,!0)!==1179937895||s.getUint32(4,!0)!==2||s.getUint32(8,!0)!==n.byteLength)throw Error("GLB \u6587\u4EF6\u6821\u9A8C\u5931\u8D25");return new File([n],e,{type:"application/octet-stream"})}function Xp(i,e){let t=document.querySelector("#print-panel"),n=document.querySelector("#print-status"),s=document.querySelector("#download-stl"),r=document.querySelector("#download-glb"),o=document.createElement("div");o.className="print-output",o.hidden=!0,t.insertBefore(o,n.nextSibling);let a=0,c=!1,l=new Set;addEventListener("pagehide",u=>{if(!u.persisted){for(let f of l)URL.revokeObjectURL(f);l.clear()}});function h(u){let f=URL.createObjectURL(u);l.add(f);let g=document.createElement("a");g.href=f,g.download=u.name,g.className="file-download",g.textContent="\u4FDD\u5B58 "+u.name+"\uFF08"+(u.size/1048576).toFixed(2)+" MB\uFF09";let x=document.createElement("small");if(x.textContent="\u6587\u4EF6\u5DF2\u751F\u6210\u5E76\u6821\u9A8C\u3002\u70B9\u51FB\u4E0A\u65B9\u4FDD\u5B58\uFF1B\u82E5\u624B\u673A\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u4E0B\u8F7D\uFF0C\u8BF7\u7528\u7CFB\u7EDF\u6D4F\u89C8\u5668\u6253\u5F00\u672C\u9875\uFF0C\u6216\u4F7F\u7528\u201C\u5B58\u50A8\u5230\u6587\u4EF6\u201D\u3002",o.replaceChildren(g,x),o.hidden=!1,navigator.canShare?.({files:[u]})){let p=document.createElement("button");p.type="button",p.textContent="\u5B58\u50A8\u5230\u6587\u4EF6 / \u5206\u4EAB",p.onclick=async()=>{try{await navigator.share({files:[u],title:u.name})}catch(m){m.name!=="AbortError"&&(n.textContent="\u7CFB\u7EDF\u5206\u4EAB\u672A\u5B8C\u6210\uFF0C\u8BF7\u70B9\u51FB\u4FDD\u5B58\u94FE\u63A5\u4E0B\u8F7D\u3002")}},o.append(p)}g.focus({preventScroll:!0})}async function d(u){if(c)return;let f=i(),g=e();if(!f||!g){n.textContent="\u8BF7\u5148\u7B49\u5F85\u771F\u5B9E\u6A21\u578B\u52A0\u8F7D\u5B8C\u6210\u3002";return}let x=++a;c=!0,s.disabled=r.disabled=!0,o.hidden=!0,o.replaceChildren(),n.textContent="\u6B63\u5728\u51C6\u5907\u6587\u4EF6\uFF0C\u8BF7\u7A0D\u5019\u2026";try{if(await new Promise(y=>requestAnimationFrame(()=>requestAnimationFrame(y))),x!==a)return;let p,m,S=g.id.replace(":","-");if(u==="stl"){let y=Number(document.querySelector("#print-size").value);p=OM(f,y),m=S+"-"+y+"mm.stl"}else p=await new ts().parseAsync(f.clone(!0),{binary:!0,onlyVisible:!0}),m=S+".glb";if(x!==a)return;let E=FM(p,m,u);h(E),n.textContent=(u==="stl"?"STL \u5DF2\u6821\u9A8C\uFF0C\u65E0\u989C\u8272\uFF1B\u8BF7\u6309\u6BEB\u7C73\u5BFC\u5165\u5207\u7247\u8F6F\u4EF6\u3002":"GLB \u5DF2\u6821\u9A8C\uFF0C\u4FDD\u7559\u5F53\u524D\u6750\u8D28\u4E0E\u914D\u8272\u3002")+" \u70B9\u51FB\u4E0B\u9762\u7684\u4FDD\u5B58\u94FE\u63A5\u5B8C\u6210\u4E0B\u8F7D\u3002"}catch(p){x===a&&(n.textContent="\u6587\u4EF6\u672A\u751F\u6210\uFF1A"+p.message)}finally{x===a&&(c=!1,s.disabled=r.disabled=!1)}}return s.textContent="\u51C6\u5907 STL \u6587\u4EF6",r.textContent="\u51C6\u5907\u5F69\u8272 GLB",s.onclick=()=>d("stl"),r.onclick=()=>d("glb"),{setReady(u){a++,c=!1,o.hidden=!0,o.replaceChildren(),s.disabled=r.disabled=!u,n.textContent=u?"\u5148\u51C6\u5907\u6587\u4EF6\uFF0C\u518D\u70B9\u51FB\u4FDD\u5B58\u94FE\u63A5\u4E0B\u8F7D\uFF1B\u4E0D\u4F1A\u8FDE\u63A5\u6216\u542F\u52A8\u6253\u5370\u673A\u3002":"\u7B49\u5F85\u771F\u5B9E\u6A21\u578B\u52A0\u8F7D\u3002"},panel:t}}var qp={type:"change"},Iu={type:"start"},Kp={type:"end"},kc=new Yn,Yp=new xn,BM=Math.cos(70*ti.DEG2RAD),Ot=new L,mn=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cu=1e-6,As=class extends xo{constructor(e,t=null){super(e,t),this.state=je.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Gt,this._lastTargetPosition=new L,this._quat=new Gt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dr,this._sphericalDelta=new dr,this._scale=1,this._panOffset=new L,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new L,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kM.bind(this),this._onPointerDown=zM.bind(this),this._onPointerUp=HM.bind(this),this._onContextMenu=KM.bind(this),this._onMouseWheel=WM.bind(this),this._onKeyDown=XM.bind(this),this._onTouchStart=qM.bind(this),this._onTouchMove=YM.bind(this),this._onMouseDown=GM.bind(this),this._onMouseMove=VM.bind(this),this._interceptControlDown=ZM.bind(this),this._interceptControlUp=JM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=je.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qp),this.update(),this.state=je.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ot.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kc.origin.copy(this.object.position),kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kc.direction))<BM?this.object.lookAt(this.target):(Yp.setFromNormalAndCoplanarPoint(this.object.up,this.target),kc.intersectPlane(Yp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cu||this._lastTargetPosition.distanceToSquared(this.target)>Cu?(this.dispatchEvent(qp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function zM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function kM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function HM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kp),this.state=je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function GM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=je.DOLLY;break;case Ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}break;case Ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Iu)}function VM(i){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function WM(i){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(i.preventDefault(),this.dispatchEvent(Iu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kp))}function XM(i){this.enabled!==!1&&this._handleKeyDown(i)}function qM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1){this.state=je.NONE;break}this._handleTouchStartRotate(i),this.state=je.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1){this.state=je.NONE;break}this._handleTouchStartPan(i),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=je.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Iu)}function YM(i){switch(this._trackPointer(i),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=je.NONE}}function KM(i){this.enabled!==!1&&i.preventDefault()}function ZM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function JM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var $M=[[-1.935,1.98,.3],[-.675,1.98,.3],[.675,1.98,.3],[1.935,1.98,.3],[-1.935,.79,.3],[-.675,.79,.3],[.675,.79,.3],[1.935,.79,.3],[-1.935,-.45,.3],[-.675,-.45,.3],[.675,-.45,.3],[1.935,-.45,.3],[-1.935,-1.71,.3],[-.675,-1.71,.3],[.675,-1.71,.3],[1.935,-1.71,.3]];function Pu(i){let e=new Set;i?.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[]){for(let s of Object.values(n))s?.isTexture&&e.add(s);n.dispose()}}),e.forEach(t=>{t.source?.data?.close?.(),t.dispose()})}function Zp(i,e){let t=new St().setFromObject(i),n=t.getSize(new L),s=t.getCenter(new L);i.position.sub(s);let r=new Lt;return r.add(i),r.scale.setScalar(e/(Math.max(n.x,n.y,n.z)||1)),r}function Jp(i){let e=new Set;i.traverse(t=>{for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[])for(let s of Object.values(n)){if(!s?.isTexture||e.has(s)||!s.image)continue;e.add(s);let r=s.image,o=Math.max(r.width||0,r.height||0);if(o<=512)continue;let a=document.createElement("canvas");a.width=Math.max(1,Math.round(r.width*512/o)),a.height=Math.max(1,Math.round(r.height*512/o)),a.getContext("2d").drawImage(r,0,0,a.width,a.height),s.image=a,s.needsUpdate=!0,r.close?.()}})}function $p(i,e){let t=null,n=null,s=[],r=0,o=new AbortController,a=!1,c=!1,l=[],h=0,d=!1,u=document.createElement("p");u.className="cabinet-note",u.textContent="3D \u6536\u85CF\u67DC\u51C6\u5907\u4E2D\u3002\u8FDB\u5165\u89C6\u91CE\u540E\u4EC5\u52A0\u8F7D\u5F53\u524D\u9875\u5DF2\u6536\u85CF\u7684\u5C0F\u7269\u3002",i.after(u);let f=document.createElement("div");f.className="cabinet-canvas",i.append(f);let g=new Pi;async function x(y,T){let w=await fetch(y,{signal:T});if(!w.ok)throw Error("\u8D44\u4EA7\u8BF7\u6C42\u5931\u8D25");let _=await w.arrayBuffer();if(T.aborted)throw new DOMException("Aborted","AbortError");return(await g.parseAsync(_,new URL(".",new URL(y,location.href)).href)).scene}function p(){if(t||d)return;let y;try{y=new ji({antialias:!0,alpha:!0})}catch{u.textContent="\u6B64\u6D4F\u89C8\u5668\u4E0D\u652F\u63013D\u6536\u85CF\u67DC\uFF0C\u53EF\u7EE7\u7EED\u4F7F\u7528\u4E0B\u65B9\u6536\u85CF\u5217\u8868\u6253\u5F00\u5C0F\u7269\u3002";return}y.setPixelRatio(Math.min(devicePixelRatio,1.5)),y.toneMapping=Ri,y.toneMappingExposure=1.1,f.append(y.domElement);let T=new cn,w=new yt(36,1,.1,100);w.position.set(0,1,9);let _=new As(w,y.domElement);_.enableDamping=!0,_.enablePan=!1,_.minDistance=6,_.maxDistance=12,_.minAzimuthAngle=-.65,_.maxAzimuthAngle=.65,_.minPolarAngle=1,_.maxPolarAngle=1.7,_.target.set(0,.2,0);let b=new si(y),D=new es,R=b.fromScene(D,.04);T.environment=R.texture,D.dispose(),b.dispose(),T.add(new Ei(16777215,6582619,2));let N=new Bn(16774623,3);N.position.set(-3,6,5),T.add(N);let O=()=>{let B=f.clientWidth,q=f.clientHeight;y.setSize(B,q),w.aspect=B/q,w.updateProjectionMatrix()};new ResizeObserver(O).observe(f),O(),t={scene:T,camera:w,renderer:y,controls:_};let H=null;y.domElement.addEventListener("pointerdown",B=>H=[B.clientX,B.clientY]),y.domElement.addEventListener("pointerup",B=>{if(!H||Math.hypot(B.clientX-H[0],B.clientY-H[1])>8)return;let q=y.domElement.getBoundingClientRect(),G=new go;G.setFromCamera(new Ae((B.clientX-q.left)/q.width*2-1,-(B.clientY-q.top)/q.height*2+1),w);let W=G.intersectObjects(l,!0)[0]?.object;for(;W&&!W.userData.item;)W=W.parent;W?.userData.item&&e(W.userData.item)});let I=()=>{d||(requestAnimationFrame(I),!(!a||document.hidden||++h%2)&&(_.update(),y.render(T,w)))};I()}async function m(){if(!c){c=!0;try{if(n=await(await fetch("assets/cabinet.json")).json(),!n.modelUrl){u.textContent="Lux3D\u6536\u85CF\u67DC\u6B63\u5728\u5236\u4F5C\uFF0C\u5F53\u524D\u7EE7\u7EED\u4F7F\u7528\u4E0B\u65B9\u6536\u85CF\u5217\u8868\u3002";return}if(p(),!t)return;let T=await x(n.modelUrl,new AbortController().signal);Jp(T);let w=Zp(T,n.size||5.4);w.rotation.y=n.rotationY||0,t.scene.add(w),u.textContent="\u771F\u5B9E3D\u6536\u85CF\u67DC \xB7 \u62D6\u52A8\u8F6C\u770B\uFF0C\u70B9\u51FB\u5DF2\u6536\u85CF\u5C0F\u7269\u3002\u4EC5\u5F53\u524D\u9875\u6309\u9700\u4E0B\u8F7D\uFF1B\u6A21\u578B\u53EF\u80FD\u8F83\u5927\u3002",S()}catch{u.textContent="\u6536\u85CF\u67DC\u6682\u672A\u52A0\u8F7D\u6210\u529F\uFF0C\u4E0B\u65B9\u6536\u85CF\u5217\u8868\u4ECD\u53EF\u4F7F\u7528\u3002"}}}function S(){if(!t||!n?.modelUrl||!a)return;let y=++r;o.abort(),o=new AbortController;let T=o.signal;for(let R of l)t.scene.remove(R),Pu(R);l=[];let w=n.slots||$M,_=[];s.forEach((R,N)=>{let O=w[N];if(O)if(R.collected)_.push({row:R,pos:O});else{let H=new oo(.23,.35,4,12),I=new Cn({color:"#d0c6af",roughness:1,transparent:!0,opacity:.28}),B=new dt(H,I);B.position.set(...O),t.scene.add(B),l.push(B)}});let b=0;async function D(){for(;b<_.length&&!T.aborted;){let{row:R,pos:N}=_[b++];try{let O=await x(R.item.modelUrl,T);if(y!==r||T.aborted){Pu(O);return}Jp(O),R.item.rarity==="rare"&&br(O);let H=Zp(O,n.toySize||1.05);H.position.set(...N),H.userData.item=R.item,t.scene.add(H),l.push(H)}catch(O){O.name!=="AbortError"&&y===r&&(u.textContent="\u90E8\u5206\u5C0F\u7269\u672A\u52A0\u8F7D\u6210\u529F\uFF0C\u53EF\u5728\u4E0B\u65B9\u5217\u8868\u6253\u5F00\u91CD\u8BD5\u3002")}}}D(),D()}let E=new IntersectionObserver(y=>{a=y[0].isIntersecting,a?c?S():m():(r++,o.abort())},{rootMargin:"100px"});return E.observe(i),{setPage(y){s=y,a&&S()},dispose(){d=!0,E.disconnect(),o.abort(),l.forEach(Pu),t?.renderer.dispose()}}}function jp(i){if(!Number.isInteger(i)||i<1||i>6)return[];let e={x:80,y:232,w:920,h:872},t=24;if(i===1)return[{x:e.x,y:e.y,w:e.w,h:e.h}];let n=Math.ceil(i/2),s=(e.h-t*(n-1))/n,r=(e.w-t)/2;return Array.from({length:i},(o,a)=>({x:e.x+a%2*(r+t)+(a===i-1&&i%2?(r+t)/2:0),y:e.y+Math.floor(a/2)*(s+t),w:r,h:s}))}function Qp(i,e,t){if(!(i>0&&e>0))throw Error("Invalid image size");let n=Math.min(t.w/i,t.h/e);return{x:t.x+(t.w-i*n)/2,y:t.y+(t.h-e*n)/2,w:i*n,h:e*n}}var eg=bg(Qm(),1),XS=new URL("./",window.location.href).href,Go=new Map,mt=[],tg="#f6f1e7",Ir=null,Pr=document.createElement("dialog");Pr.id="share-dialog";Pr.innerHTML='<button class="close" aria-label="\u5173\u95ED\u5206\u4EAB\u5361">\xD7</button><h2>\u5206\u4EAB\u6536\u85CF</h2><p>\u9009\u62E9\u5C0F\u7269\u548C\u80CC\u666F\uFF0C\u8C03\u6574\u987A\u5E8F\u3002</p><label>\u80CC\u666F <select id="card-bg"><option value="#f6f1e7">\u65E7\u4FE1\u7EB8</option><option value="#dce8de">\u8584\u8377\u7EFF</option><option value="#e9dff0">\u6DE1\u7D2B\u8272</option><option value="#e2eaf2">\u6674\u7A7A\u84DD</option></select></label><div id="card-choices"></div><p id="card-empty">\u5148\u6253\u5F00\u4E00\u4EF6\u5C0F\u7269\uFF0C\u7B49\u5F85\u771F\u5B9E 3D \u6A21\u578B\u52A0\u8F7D\u6210\u529F\uFF0C\u518D\u6765\u5236\u4F5C\u3002\u4E0D\u4F1A\u7528\u793A\u610F\u6A21\u578B\u5192\u5145\u3002</p><canvas id="share-canvas" width="1080" height="1440" style="display:block;width:auto;max-width:100%;height:auto;max-height:62vh;margin:18px auto;border-radius:12px"></canvas><div class="share-actions"><button id="card-download">\u4FDD\u5B58\u56FE\u7247</button><button id="card-send">\u5206\u4EAB\u56FE\u7247</button><button id="card-copy">\u590D\u5236\u7F51\u7AD9\u94FE\u63A5</button></div><p id="card-message" role="status"></p><small>\u672C\u5730\u751F\u6210\uFF0C\u4E0D\u4E0A\u4F20\u4F60\u7684\u56DE\u5FC6\u6587\u5B57\u3002\u7F51\u7AD9\u53EF\u516C\u5F00\u8BBF\u95EE\u3002\u5206\u4EAB/\u590D\u5236\u4E0D\u4EE3\u8868\u5BF9\u65B9\u5DF2\u6253\u5F00\uFF1B\u5956\u52B1\u8D26\u6237\u5C1A\u672A\u4E0A\u7EBF\u3002</small>';document.body.append(Pr);var wt=i=>Pr.querySelector(i);wt(".close").onclick=()=>Pr.close();var td=XS;function ng(i,e){Go.set(i.id,{item:i,dataUrl:e})}function nd(){wt("#card-choices").replaceChildren(),wt("#card-empty").hidden=Go.size>0;for(let[i,{item:e}]of Go){let t=document.createElement("div");t.className="card-choice";let n=document.createElement("input");n.type="checkbox",n.checked=mt.includes(i),n.setAttribute("aria-label",e.name),n.onchange=()=>{if(n.checked){if(mt.length>=6){n.checked=!1,wt("#card-message").textContent="\u4E00\u5F20\u5361\u6700\u591A\u653E6\u4EF6\u5C0F\u7269\u3002";return}mt.push(i)}else mt=mt.filter(a=>a!==i);nd(),jc()};let s=document.createElement("span");s.textContent=e.name;let r=document.createElement("button");r.textContent="\u2191",r.setAttribute("aria-label","\u5C06"+e.name+"\u524D\u79FB"),r.disabled=mt.indexOf(i)<=0,r.onclick=()=>{let a=mt.indexOf(i);[mt[a-1],mt[a]]=[mt[a],mt[a-1]],nd(),jc()};let o=document.createElement("small");o.textContent=mt.includes(i)?"\u7B2C"+(mt.indexOf(i)+1)+"\u4F4D":"",t.append(n,s,o,r),wt("#card-choices").append(t)}}var Ho=0;function qS(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(i,0,0);let n=t.getImageData(0,0,e.width,e.height).data,s=e.width,r=e.height,o=-1,a=-1;for(let l=0;l<e.height;l+=2)for(let h=0;h<e.width;h+=2)n[(l*e.width+h)*4+3]>24&&(s=Math.min(s,h),r=Math.min(r,l),o=Math.max(o,h),a=Math.max(a,l));if(o<s)return{image:i,x:0,y:0,w:i.width,h:i.height};let c=Math.ceil(Math.max(o-s,a-r)*.04);return s=Math.max(0,s-c),r=Math.max(0,r-c),o=Math.min(e.width,o+c+2),a=Math.min(e.height,a+c+2),{image:i,x:s,y:r,w:o-s,h:a-r}}function YS(i,e,t,n,s){i.font="600 27px sans-serif",i.fillStyle="#254f43",i.textAlign="center";let r=Array.from(e),o=[],a="";for(let l of r)i.measureText(a+l).width>s&&a?(o.push(a),a=l):a+=l;a&&o.push(a);let c=o.slice(0,2);o.length>2&&(c[1]=c[1].slice(0,-1)+"\u2026"),c.forEach((l,h)=>i.fillText(l,t,n+h*34)),i.textAlign="left"}async function jc(){let i=++Ho;Ir=null,wt("#card-download").disabled=!0,wt("#card-send").disabled=!0;let e=wt("#share-canvas"),t=document.createElement("canvas");t.width=1080,t.height=1440;let n=t.getContext("2d");n.fillStyle=tg,n.fillRect(0,0,1080,1440),n.fillStyle="#254f43",n.font="500 22px sans-serif",n.fillText("MEMORY CAPSULE / \u6211\u7684\u6536\u85CF",80,74),n.font="bold 62px sans-serif",n.fillText("\u628A\u5C0F\u65F6\u5019\uFF0C\u5E26\u56DE\u5BB6\u3002",76,156);let s=jp(mt.length);mt.length||(n.font="28px sans-serif",n.textAlign="center",n.fillText("\u9009\u62E9\u5C0F\u7269\uFF0C\u5236\u4F5C\u4F60\u7684\u6536\u85CF\u5361",540,660),n.textAlign="left");for(let o=0;o<mt.length;o++){let a=Go.get(mt[o]),c=new Image;if(c.src=a.dataUrl,await c.decode(),i!==Ho)return;let l=s[o],h=qS(c);n.fillStyle="rgba(255,255,255,.48)",n.beginPath(),n.roundRect(l.x,l.y,l.w,l.h,28),n.fill();let d={x:l.x+30,y:l.y+24,w:l.w-60,h:l.h-125},u=Qp(h.w,h.h,d);n.drawImage(c,h.x,h.y,h.w,h.h,u.x,u.y,u.w,u.h),YS(n,a.item.name,l.x+l.w/2,l.y+l.h-68,l.w-46)}let r=document.createElement("canvas");await eg.default.toCanvas(r,td,{width:210,margin:4,errorCorrectionLevel:"M",color:{dark:"#153b32",light:"#ffffff"}}),i===Ho&&(n.strokeStyle="rgba(37,79,67,.2)",n.beginPath(),n.moveTo(80,1144),n.lineTo(1e3,1144),n.stroke(),n.drawImage(r,790,1180,210,210),n.fillStyle="#254f43",n.font="bold 37px sans-serif",n.fillText("\u624E\u514B\u7684\u81EA\u7559\u5730",80,1235),n.font="25px sans-serif",n.fillText("\u56DE\u5FC6\u626D\u86CB\u673A",80,1282),n.font="21px sans-serif",n.fillText("\u626B\u7801\u62BD\u53D6\u4F60\u7684\u5C0F\u7269",80,1322),n.font="18px sans-serif",n.fillStyle="#64766c",n.fillText("AI \u751F\u6210 3D \u7D20\u6750 \xB7 Aholo Lux3D",80,1362),i===Ho&&(e.getContext("2d").clearRect(0,0,1080,1440),e.getContext("2d").drawImage(t,0,0),t.toBlob(o=>{i===Ho&&(Ir=o,wt("#card-download").disabled=!o||!mt.length,wt("#card-send").disabled=!o||!mt.length)},"image/png")))}function id(i){i&&Go.has(i)&&!mt.includes(i)&&mt.length<6&&mt.push(i),nd(),Pr.showModal(),jc()}wt("#card-bg").onchange=i=>{tg=i.target.value,jc()};wt("#card-download").onclick=()=>{if(!Ir||!mt.length){wt("#card-message").textContent="\u8BF7\u9009\u62E9\u5DF2\u771F\u5B9E\u52A0\u8F7D\u7684\u5C0F\u7269\uFF0C\u5E76\u7B49\u5F85\u56FE\u7247\u751F\u6210\u3002";return}let i=URL.createObjectURL(Ir),e=document.createElement("a");e.href=i,e.download="\u56DE\u5FC6\u6536\u85CF-\u624E\u514B\u7684\u81EA\u7559\u5730.png",e.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3),wt("#card-message").textContent="\u5DF2\u53D1\u8D77\u56FE\u7247\u4E0B\u8F7D\u3002"};wt("#card-send").onclick=async()=>{if(!Ir||!mt.length)return;let i=new File([Ir],"\u56DE\u5FC6\u6536\u85CF.png",{type:"image/png"});if(!navigator.canShare?.({files:[i]})){wt("#card-message").textContent="\u6B64\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u56FE\u7247\u5206\u4EAB\uFF0C\u8BF7\u5148\u4FDD\u5B58\u56FE\u7247\u540E\u624B\u52A8\u53D1\u9001\u3002";return}try{await navigator.share({files:[i],title:"\u6211\u7684\u56DE\u5FC6\u6536\u85CF",text:"\u56DE\u5FC6\u626D\u86CB\u673A \xB7 \u624E\u514B\u7684\u81EA\u7559\u5730"}),wt("#card-message").textContent="\u7CFB\u7EDF\u5206\u4EAB\u64CD\u4F5C\u5DF2\u5B8C\u6210\uFF0C\u4E0D\u4EE3\u8868\u5BF9\u65B9\u5DF2\u6536\u5230\u6216\u6253\u5F00\u3002"}catch(e){wt("#card-message").textContent=e.name==="AbortError"?"\u5DF2\u53D6\u6D88\u5206\u4EAB\u3002":"\u5206\u4EAB\u6CA1\u6709\u5B8C\u6210\uFF0C\u8BF7\u4FDD\u5B58\u56FE\u7247\u540E\u91CD\u8BD5\u3002"}};wt("#card-copy").onclick=async()=>{try{await navigator.clipboard.writeText(td),wt("#card-message").textContent="\u5DF2\u590D\u5236\u7F51\u7AD9\u94FE\u63A5\uFF0C\u5C1A\u672A\u53D1\u9001\u7ED9\u4EFB\u4F55\u4EBA\u3002"}catch{wt("#card-message").textContent="\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236\uFF1A"+td}};var _e=i=>document.querySelector(i),el=matchMedia("(prefers-reduced-motion: reduce)").matches,sg="memory-capsule-v1",gt={};try{gt=JSON.parse(localStorage.getItem(sg)||"{}"),(!gt||typeof gt!="object"||Array.isArray(gt))&&(gt={})}catch{}var Wt=[];try{let i=await fetch("assets/models.json");if(i.ok){let e=await i.json();Array.isArray(e)&&e.length&&(Wt=e)}}catch{}var Ds=Wt,nl=Ds.length===20&&Ds.every(i=>i.modelUrl);nl&&(Wt=Ds.flatMap(i=>[{...i,id:i.id+":base",baseId:i.id,rarity:"base"},{...i,id:i.id+":rare",baseId:i.id,rarity:"rare",name:i.name+" \xB7 \u661F\u7D2B\u9650\u5B9A",color:"#e5d8f2"}]));if(nl)for(let i of Ds)gt[i.id]&&!gt[i.id+":base"]&&(gt[i.id+":base"]=gt[i.id]);var Ns=null,Nr=!1,KS=0,Sn=0,Lr=matchMedia("(max-width:640px)").matches?4:16,ad="all",rg=null,Dr=i=>{_e("#toast").textContent=i,_e("#toast").classList.add("show"),clearTimeout(Dr.timer),Dr.timer=setTimeout(()=>_e("#toast").classList.remove("show"),2600)};function ZS(){try{return localStorage.setItem(sg,JSON.stringify(gt)),!0}catch{return Dr("\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\uFF0C\u8BF7\u5BFC\u51FA\u56DE\u5FC6\u6587\u4EF6\u7559\u5B58"),!1}}function Wo(){let i=Wt.filter(n=>gt[n.id]).length;_e("#count").textContent=`${i} / ${Wt.length}`,_e("#nav-count").textContent=i,_e("#shelf").replaceChildren();let e=Wt.filter(n=>ad!=="saved"||gt[n.id]),t=Math.max(1,Math.ceil(e.length/Lr));Sn=Math.min(Sn,t-1),_e("#page-label").textContent=`${Sn+1} / ${t}`,_e("#prev-page").disabled=Sn===0,_e("#next-page").disabled=Sn>=t-1,_e("#shelf-empty").hidden=e.length>0,rg?.setPage(e.slice(Sn*Lr,(Sn+1)*Lr).map(n=>({item:n,collected:!!gt[n.id]}))),e.slice(Sn*Lr,(Sn+1)*Lr).forEach(n=>{let s=Wt.indexOf(n),r=!!gt[n.id],o=document.createElement("button");o.className="memory-card",o.setAttribute("aria-label",r?`\u67E5\u770B${n.name}`:`\u5C1A\u672A\u6536\u85CF\uFF1A\u7B2C${s+1}\u4EF6\u56DE\u5FC6`);let a=document.createElement("div");a.className="card-image",a.style.background=r?n.color:"#e9ebdf";let c=document.createElement("span");if(c.className="card-number",c.textContent=`NO. ${String(s+1).padStart(3,"0")}`,a.append(c),r)zp(a,n);else{let u=document.createElement("span");u.className="placeholder",u.textContent="?",a.append(u)}if(r){let u=document.createElement("span");u.className="card-chip",u.textContent="\u5DF2\u6536\u85CF",a.append(u)}let l=document.createElement("div");l.className="card-body";let h=document.createElement("h3");h.textContent=r?n.name:"\u7B49\u5F85\u4E00\u6BB5\u56DE\u5FC6";let d=document.createElement("p");d.textContent=r?gt[n.id].memory||"\u8FD8\u6CA1\u6709\u5199\u4E0B\u6545\u4E8B\uFF0C\u70B9\u5F00\u7559\u4E00\u53E5\u5427\u3002":"\u8F6C\u4E00\u8F6C\uFF0C\u8BA9\u5C0F\u65F6\u5019\u6765\u6572\u95E8\u3002",d.textContent.length>55&&(d.textContent=d.textContent.slice(0,55)+"\u2026"),l.append(h,d),o.append(a,l),o.onclick=()=>r?cd(n):Dr("\u5148\u53BB\u8F6C\u4E00\u8F6C\u626D\u86CB\u673A\u5427"),_e("#shelf").append(o)})}function og(i,e=!0){let t;try{t=new ji({antialias:!0,alpha:e})}catch{return i.innerHTML='<p style="padding:50px;text-align:center">\u8FD9\u4E2A\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301 3D \u9884\u89C8\uFF0C\u8BF7\u6362\u7528\u652F\u6301 WebGL \u7684\u6D4F\u89C8\u5668\u3002\u62BD\u53D6\u4E0E\u6536\u85CF\u4ECD\u53EF\u4F7F\u7528\u3002</p>',null}t.setPixelRatio(Math.min(devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Va,t.toneMapping=Ri,t.toneMappingExposure=1.15,i.append(t.domElement);let n=new cn,s=new si(t),r=new es,o=s.fromScene(r,.04);n.environment=o.texture,r.dispose(),s.dispose();let a=new yt(35,1,.1,100);n.add(new Ei(16775655,5006938,2));let c=new Bn(16775140,4);c.position.set(-4,7,6),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),n.add(c);let l=()=>{let h=i.clientWidth,d=i.clientHeight;h&&d&&(t.setSize(h,d),a.aspect=h/d,a.updateProjectionMatrix())};return new ResizeObserver(l).observe(i),l(),{renderer:t,scene:n,cam:a,resize:l}}var Vt=og(_e("#machine")),sd,rd,Qc,Ln,ag=!1;Vt&&(Vt.cam.position.set(4,2.6,7.8),Vt.cam.lookAt(0,.1,0),Vt.renderer.domElement.style.visibility="hidden");if(Vt){Ln=new As(Vt.cam,Vt.renderer.domElement),Ln.enableDamping=!0,Ln.enablePan=!1,Ln.minDistance=4,Ln.maxDistance=12,Ln.minPolarAngle=.35,Ln.maxPolarAngle=Math.PI*.66,Ln.target.set(0,.1,0),Ln.update(),Vt.renderer.domElement.style.touchAction="pan-y";let i=document.createElement("button");i.hidden=!0,i.className="machine-hotspot",i.type="button",i.textContent="\u8F6C\u52A8\u65CB\u94AE \u21BB",i.setAttribute("aria-label","\u8F6C\u52A8\u65CB\u94AE\uFF0C\u62BD\u53D6\u4E00\u6BB5\u56DE\u5FC6"),i.onclick=()=>_e("#draw").click(),_e("#machine").append(i);let e=document.createElement("p");e.id="machine-note",e.className="machine-note",e.textContent="\u6B63\u5728\u52A0\u8F7D\u771F\u5B9E\u626D\u86CB\u673A\u2026",_e("#machine").after(e);let t=document.createElement("div");t.className="model-loading machine-loading",t.textContent="\u6B63\u5728\u52A0\u8F7D\u771F\u5B9E\u626D\u86CB\u673A\u2026",_e("#machine").append(t),(async()=>{try{let n=await fetch("assets/machine.json");if(!n.ok)throw Error("\u673A\u5668\u914D\u7F6E\u4E0B\u8F7D\u5931\u8D25");let s=await n.json();if(!s.modelUrl)throw Error("\u7F3A\u5C11\u771F\u5B9E\u673A\u5668\u6A21\u578B");e.textContent="\u6B63\u5728\u52A0\u8F7D Lux3D \u626D\u86CB\u673A\u2026";let o=(await new Pi().loadAsync(s.modelUrl)).scene,a=new St().setFromObject(o),c=a.getSize(new L),l=a.getCenter(new L),h=3.6/(Math.max(c.x,c.y,c.z)||1),d=new Lt;o.position.sub(l),d.add(o),d.scale.setScalar(h),d.rotation.y=s.rotationY||0,d.position.y=.1,o.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),Qc=d,Vt.scene.add(d),ag=!0,sd=null,rd=null,Vt.cam.position.set(4,2.6,7.8),Ln.target.set(0,.1,0),Ln.update(),Vt.renderer.render(Vt.scene,Vt.cam),Vt.renderer.domElement.style.visibility="visible",t.remove(),e.textContent="\u62D6\u52A8\u65CB\u8F6C \xB7 \u70B9\u51FB\u4E0B\u65B9\u62BD\u53D6"}catch{e.textContent="\u673A\u5668\u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF0C\u53EF\u5237\u65B0\u91CD\u8BD5\uFF1B\u4ECD\u53EF\u70B9\u51FB\u62BD\u53D6\u3002",t.textContent="\u771F\u5B9E\u626D\u86CB\u673A\u6682\u672A\u52A0\u8F7D\u6210\u529F"}})()}var at=null,ig=!1,oi,ai,Ls=0,Vo=null;function cg(){ig||(ig=!0,at=og(_e("#object-view")),at&&(oi=new As(at.cam,at.renderer.domElement),oi.enableDamping=!0,oi.autoRotate=!el,oi.autoRotateSpeed=.7,oi.enablePan=!1,oi.minDistance=1.5,oi.maxDistance=9))}function JS(i){let e=new St().setFromObject(i),t=e.getCenter(new L),n=e.getSize(new L);i.position.sub(t);let s=Math.max(n.x,n.y,n.z)||1;i.scale.multiplyScalar(2.5/s),at.cam.position.set(3.2,1.7,5),oi.target.set(0,0,0),oi.update()}function lg(i){if(!i)return;let e=new Set;i.traverse(t=>{if(t.geometry?.dispose(),t.material)for(let n of Array.isArray(t.material)?t.material:[t.material]){for(let s of Object.values(n))s?.isTexture&&e.add(s);n.dispose()}}),e.forEach(t=>{t.source?.data?.close?.(),t.dispose()})}function tl(){ai&&(at?.scene.remove(ai),lg(ai),ai=null)}var od=Xp(()=>ai,()=>Ns);async function hg(i){od.setReady(!1),Vo?.abort(),cg(),_e("#share-item").hidden=!0,at||(_e("#model-note").textContent="\u6B64\u6D4F\u89C8\u5668\u65E0\u6CD5\u663E\u793A 3D \u9884\u89C8\uFF0C\u4ECD\u4F1A\u52A0\u8F7D\u771F\u5B9E\u6A21\u578B\u4EE5\u4F9B\u4E0B\u8F7D\u3002");let e=++Ls;tl();let t=_e("#object-view");t.querySelector(".model-loading")?.remove();let n=document.createElement("div");n.className="model-loading",n.setAttribute("role","status");let s=document.createElement("p");s.textContent="\u6B63\u5728\u4E0B\u8F7D\u771F\u5B9E Lux3D \u6A21\u578B\u2026",n.append(s),t.append(n),_e("#model-note").textContent="\u6B63\u5728\u52A0\u8F7D\u771F\u5B9E\u8D44\u4EA7\uFF1A"+i.name+"\u3002\u6A21\u578B\u8F83\u5927\uFF0C\u9996\u6B21\u6253\u5F00\u9700\u8981\u4E0B\u8F7D\u3002";try{if(!i.modelUrl)throw new Error("\u6B64\u6761\u76EE\u6CA1\u6709\u771F\u5B9E\u6A21\u578B\u5730\u5740");Vo=new AbortController;let r=await fetch(new URL(i.modelUrl,document.baseURI),{signal:Vo.signal,cache:"no-cache"});if(!r.ok)throw new Error("\u6A21\u578B\u4E0B\u8F7D\u5931\u8D25\uFF08HTTP "+r.status+"\uFF09");let o=r.body?.getReader(),a;if(o){let l=[],h=0;for(;;){let u=await o.read();if(u.done)break;if(l.push(u.value),h+=u.value.byteLength,e!==Ls){o.cancel();return}s.textContent="\u6B63\u5728\u4E0B\u8F7D\u771F\u5B9E\u6A21\u578B \xB7 "+(h/1048576).toFixed(1)+" MB"}a=new Uint8Array(h);let d=0;for(let u of l)a.set(u,d),d+=u.length;a=a.buffer}else a=await r.arrayBuffer();if(e!==Ls)return;if(a.byteLength<12||new DataView(a).getUint32(0,!0)!==1179937895)throw new Error("\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u4E0D\u662F GLB \u6A21\u578B\u6587\u4EF6");s.textContent="\u4E0B\u8F7D\u5B8C\u6210\uFF0C\u6B63\u5728\u89E3\u6790\u6A21\u578B\u548C\u7EB9\u7406\u2026";let c=await new Pi().parseAsync(a,new URL(".",new URL(i.modelUrl,document.baseURI)).href);if(e!==Ls){lg(c.scene);return}ai=c.scene,i.rarity==="rare"&&br(ai),ai.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),at&&(at.scene.add(ai),JS(ai)),n.remove(),_e("#model-note").textContent="Lux3D \xB7 "+(a.byteLength/1048576).toFixed(1)+" MB",od.setReady(!0),at?(at.renderer.render(at.scene,at.cam),at.renderer.domElement.style.visibility="visible"):_e("#model-note").textContent+=" \xB7 3D\u9884\u89C8\u4E0D\u53EF\u7528\uFF0C\u771F\u5B9E\u6587\u4EF6\u4ECD\u53EF\u4E0B\u8F7D\u3002";try{if(!at)return;let l=at.renderer.domElement.toDataURL("image/png");hu(i,l),ng(i,l),_e("#share-open").hidden=!1,_e("#share-item").hidden=!1}catch{}}catch(r){if(r.name==="AbortError"||e!==Ls)return;tl(),console.error("Real GLB load failed",{itemId:i.id,url:i.modelUrl,message:r.message}),s.textContent="\u771F\u5B9E\u6A21\u578B\u672A\u52A0\u8F7D\u6210\u529F\uFF0C\u672A\u4F7F\u7528\u66FF\u4EE3\u6A21\u578B\u3002",_e("#model-note").textContent=r.message;let o=document.createElement("button");o.type="button",o.textContent="\u91CD\u65B0\u52A0\u8F7D\u771F\u5B9E\u6A21\u578B",o.onclick=()=>hg(i),n.append(o)}}async function cd(i){Ls++,Vo?.abort(),tl(),at&&(at.renderer.clear(),at.renderer.domElement.style.visibility="hidden"),_e("#object-view").querySelector(".model-loading")?.remove();let e=document.createElement("div");e.className="model-loading",e.textContent="\u6B63\u5728\u52A0\u8F7D\u771F\u5B9E\u6A21\u578B\u2026",_e("#object-view").append(e),Ns=i,_e("#item-name").textContent=i.name,_e("#item-no").textContent=`MEMORY NO. ${String(Wt.indexOf(i)+1).padStart(3,"0")}`,_e("#item-desc").textContent=i.desc,_e("#memory").value=gt[i.id]?.memory||"",_e("#new-tag").textContent=i.rarity==="rare"?"\u661F\u7D2B\u7A00\u6709 \xB7 \u603B\u6982\u7387 1/4096":gt[i.id]?"\u53C8\u89C1\u9762\u4E86\uFF0C\u8001\u670B\u53CB":"\u4E00\u4EFD\u65B0\u7684\u5C0F\u60CA\u559C",_e("#save").textContent=gt[i.id]?"\u4FDD\u5B58\u56DE\u5FC6 \u2713":"\u6536\u85CF \uFF0B",_e("#saved-status").textContent="",_e("#item-dialog").showModal(),requestAnimationFrame(()=>{cg(),at?.resize(),hg(i)})}_e("#draw").onclick=async()=>{if(Nr)return;Nr=!0,_e("#draw").disabled=!0;let i=_e(".machine-hotspot");i&&(i.disabled=!0),_e("#draw-status").textContent="\u5494\u54D2\uFF0C\u56DE\u5FC6\u6B63\u5728\u8DEF\u4E0A\u2026";let e;if(nl){let t=Op(Ds);e=Wt.find(n=>n.id===t.variantId)}else{let t=Wt.filter(s=>!gt[s.id]),n=t.length?t:Wt;e=n[Math.floor(Math.random()*n.length)]}KS++,await new Promise(t=>setTimeout(t,el?200:1800)),Nr=!1,_e("#draw").disabled=!1,i&&(i.disabled=!1),_e("#draw-status").textContent="\u514D\u8D39\u62BD\u53D6",cd(e)};_e("#save").onclick=()=>{if(!Ns)return;gt[Ns.id]={memory:_e("#memory").value.trim(),collectedAt:gt[Ns.id]?.collectedAt||new Date().toISOString(),updatedAt:new Date().toISOString()};let i=ZS(),e=Wt.filter(t=>ad!=="saved"||gt[t.id]);Sn=Math.floor(Math.max(0,e.findIndex(t=>t.id===Ns.id))/Lr),Wo(),_e("#save").textContent="\u4FDD\u5B58\u56DE\u5FC6 \u2713",_e("#saved-status").textContent=i?"\u5DF2\u4FDD\u5B58\u5728\u6B64\u6D4F\u89C8\u5668":"\u6682\u5B58\u4E8E\u672C\u6B21\u9875\u9762",Dr(i?"\u6536\u597D\u4E86\uFF0C\u5C0F\u65F6\u5019\u5C31\u5728\u8FD9\u91CC\u3002":"\u6682\u5B58\u6210\u529F\uFF0C\u8BF7\u5BFC\u51FA\u56DE\u5FC6\u7559\u5B58")};for(let i of document.querySelectorAll("dialog"))i.querySelector(".close").onclick=()=>i.close(),i.addEventListener("click",e=>{if(e.target===i){let t=i.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&i.close()}});_e("#about-btn").onclick=_e("#credits").onclick=()=>_e("#about-dialog").showModal();_e("#export").onclick=()=>{let i=Wt.filter(s=>gt[s.id]);if(!i.length){Dr("\u5148\u6536\u85CF\u4E00\u4EF6\u5C0F\u7269\uFF0C\u518D\u628A\u56DE\u5FC6\u5E26\u8D70\u5427");return}let e=`\u56DE\u5FC6\u626D\u86CB\u673A \xB7 \u6211\u7684\u56DE\u5FC6\u6536\u85CF

`+i.map(s=>`${s.name}
${gt[s.id].memory||"\uFF08\u8FD8\u6CA1\u6709\u5199\u4E0B\u56DE\u5FC6\uFF09"}
`).join(`
`),t=URL.createObjectURL(new Blob([e],{type:"text/plain;charset=utf-8"})),n=document.createElement("a");n.href=t,n.download="\u6211\u7684\u56DE\u5FC6\u6536\u85CF.txt",n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)};Wt.every(i=>i.modelUrl)&&(_e("#asset-status").textContent="\u539F\u521B\u53C2\u8003\u56FE \xD7 Aholo Lux3D \xB7 \u9884\u751F\u6210 3D \u8D44\u4EA7\uFF0C\u975E\u5B9E\u65F6\u751F\u6210",_e("#about-assets").textContent="\u5C0F\u7269\u6A21\u578B\u7531 Aholo Lux3D \u6839\u636E\u539F\u521B\u53C2\u8003\u56FE\u9884\u5148\u751F\u6210\u3002\u62BD\u53D6\u53EA\u5728\u5DF2\u5236\u4F5C\u7684\u6536\u85CF\u54C1\u4E2D\u9009\u62E9\uFF0C\u4E0D\u6D89\u53CA\u4ED8\u8D39\u62BD\u5956\uFF0C\u4E5F\u4E0D\u4EE3\u8868\u771F\u5B9E\u5546\u54C1\u7684\u7CBE\u786E\u8FD8\u539F\u3002");rg=$p(_e("#cabinet-view"),cd);Wo();var $S=new _o;function ug(){if(requestAnimationFrame(ug),document.hidden)return;let i=$S.getElapsedTime();Vt&&(sd&&(sd.rotation.z=Nr?i*9:Math.PI/7),rd&&rd.children.forEach((e,t)=>{e.position.y=e.userData.base.y+(Nr?Math.sin(i*15+t)*.07:0)}),Qc&&(ag||(Qc.rotation.y=.1+(el?0:Math.sin(i*.4)*.035)),Qc.rotation.z=Nr&&!el?Math.sin(i*24)*.025:0),Ln?.update(),Vt.renderer.render(Vt.scene,Vt.cam)),at&&_e("#item-dialog").open&&(oi.update(),at.renderer.render(at.scene,at.cam))}ug();if(Wt.some(i=>i.modelUrl)&&!Wt.every(i=>i.modelUrl)){let i=Wt.filter(e=>e.modelUrl).map(e=>e.name).join("\u3001");_e("#asset-status").textContent="\u5F00\u53D1\u9884\u89C8 \xB7 "+i+"\u5DF2\u63A5\u5165 Lux3D \u751F\u6210\u6A21\u578B\uFF1B\u5176\u4F59\u4E3A\u7A0B\u5E8F\u793A\u610F\u6A21\u578B\u3002",_e("#about-assets").textContent=i+"\u7531 Aholo Lux3D \u6839\u636E\u539F\u521B\u53C2\u8003\u56FE\u9884\u5148\u751F\u6210\uFF0C\u5176\u4F59\u7269\u4EF6\u76EE\u524D\u4F7F\u7528\u7A0B\u5E8F\u793A\u610F\u6A21\u578B\uFF0C\u6B63\u5728\u5236\u4F5C\u771F\u5B9E\u7D20\u6750\u3002\u6A21\u578B\u4E0D\u662F\u5B9E\u65F6\u751F\u6210\uFF0C\u6536\u85CF\u6587\u5B57\u53EA\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002"}_e("#prev-page").onclick=()=>{Sn--,Wo()};_e("#next-page").onclick=()=>{Sn++,Wo()};_e("#shelf-filter").onchange=i=>{ad=i.target.value,Sn=0,Wo()};_e("#item-dialog").addEventListener("close",()=>{Ls++,Vo?.abort(),od.setReady(!1),tl(),at&&(at.renderer.clear(),at.renderer.domElement.style.visibility="hidden")});_e("#catalog-range").textContent="01 \u2014 "+String(Ds.length).padStart(2,"0");_e("#catalog-intro").textContent=Ds.length+"\u79CD\u5C0F\u7269\uFF0C\u4E00\u6574\u4E2A\u653E\u5B66\u540E\u7684\u4E0B\u5348\u3002";nl&&(_e("#draw-rules").textContent="20\u57FA\u7840\u6B3E \xD7 2\u914D\u8272 \xB7 \u6BCF\u62BD\u7A00\u6709\u603B\u6982\u73871/4096\uFF0C\u65E0\u4FDD\u5E95\u3002",_e("#odds-note").hidden=!1);_e("#share-open").onclick=()=>id();_e("#share-item").onclick=()=>id(Ns?.id);Wt.length||(_e("#draw").disabled=!0,_e("#draw-status").textContent="\u771F\u5B9E\u6A21\u578B\u76EE\u5F55\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\u3002");
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
