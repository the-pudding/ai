import{s as q,e as N,c as j,a as T,d as g,q as w,i as z,n as $,T as te,t as ue,m as Q,b as ce,p as x,V as O,f as P,g as rt,v as G,h as J,x as Xe,B as st,j as le,W as F,X as Ye,Y as Ze,Z as he,u as ie,k as re,l as se,_ as We,$ as ee,H as Je,y as D,S as ke,F as ye,C as ot,a0 as ft,a1 as at,a2 as ut,z as de,R as ct,a3 as ht,a4 as dt,a5 as _t,a6 as mt,a7 as gt}from"../chunks/scheduler.D9_Rfnpa.js";import{S as R,i as K,t as k,a as E,c as B,b as M,m as V,d as L,g as _e,e as me,f as bt}from"../chunks/index.BRfB_Kvj.js";import{e as H}from"../chunks/each.D6YF6ztN.js";import{r as wt,w as ne}from"../chunks/index.BVrpR5nE.js";import{s as vt}from"../chunks/misc.DE70vUaS.js";function ge(n,e){const l={},t={},i={$$scope:1};let s=n.length;for(;s--;){const r=n[s],o=e[s];if(o){for(const f in r)f in o||(t[f]=1);for(const f in o)i[f]||(l[f]=o[f],i[f]=1);n[s]=o}else for(const f in r)i[f]=1}for(const r in t)r in l||(l[r]=void 0);return l}function Qe(n){return typeof n=="object"&&n!==null?n:{}}function Ce(n,e,l){const t=n.slice();t[3]=e[l].title,t[4]=e[l].slides,t[7]=l;const i=t[2][t[0]].section===t[7];return t[5]=i,t}function Ae(n,e,l){const t=n.slice();t[8]=e[l];const i=t[8].i===t[0];return t[9]=i,t}function kt(n){let e;return{c(){e=N("div"),this.h()},l(l){e=j(l,"DIV",{class:!0}),T(e).forEach(g),this.h()},h(){w(e,"class","block svelte-s3rw5i")},m(l,t){z(l,e,t)},p:$,d(l){l&&g(e)}}}function pt(n){let e,l=H(n[4]),t=[];for(let i=0;i<l.length;i+=1)t[i]=Oe(Ae(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=G()},l(i){for(let s=0;s<t.length;s+=1)t[s].l(i);e=G()},m(i,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,s);z(i,e,s)},p(i,s){if(s&3){l=H(i[4]);let r;for(r=0;r<l.length;r+=1){const o=Ae(i,l,r);t[r]?t[r].p(o,s):(t[r]=Oe(o),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&g(e),te(t,i)}}}function Oe(n){let e;return{c(){e=N("div"),this.h()},l(l){e=j(l,"DIV",{class:!0}),T(e).forEach(g),this.h()},h(){w(e,"class","block svelte-s3rw5i"),O(e,"active",n[9])},m(l,t){z(l,e,t)},p(l,t){t&3&&O(e,"active",l[9])},d(l){l&&g(e)}}}function De(n){let e,l,t=n[7]+1+"",i,s,r,o=n[3]+"",f,u,a;function _(h,b){return h[5]?pt:kt}let d=_(n),c=d(n);return{c(){e=N("div"),l=N("span"),i=ue(t),s=N("span"),r=ue("— "),f=ue(o),u=Q(),c.c(),a=Q(),this.h()},l(h){e=j(h,"DIV",{class:!0});var b=T(e);l=j(b,"SPAN",{class:!0});var v=T(l);i=ce(v,t),s=j(v,"SPAN",{class:!0});var S=T(s);r=ce(S,"— "),f=ce(S,o),S.forEach(g),v.forEach(g),u=x(b),c.l(b),a=x(b),b.forEach(g),this.h()},h(){w(s,"class","title svelte-s3rw5i"),w(l,"class","text svelte-s3rw5i"),w(e,"class","chapter svelte-s3rw5i"),O(e,"active",n[5])},m(h,b){z(h,e,b),P(e,l),P(l,i),P(l,s),P(s,r),P(s,f),P(e,u),c.m(e,null),P(e,a)},p(h,b){b&2&&o!==(o=h[3]+"")&&rt(f,o),d===(d=_(h))&&c?c.p(h,b):(c.d(1),c=d(h),c&&(c.c(),c.m(e,a))),b&5&&O(e,"active",h[5])},d(h){h&&g(e),c.d()}}}function yt(n){let e,l=H(n[1]),t=[];for(let i=0;i<l.length;i+=1)t[i]=De(Ce(n,l,i));return{c(){e=N("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=j(i,"DIV",{class:!0});var s=T(e);for(let r=0;r<t.length;r+=1)t[r].l(s);s.forEach(g),this.h()},h(){w(e,"class","chapters svelte-s3rw5i")},m(i,s){z(i,e,s);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(i,[s]){if(s&7){l=H(i[1]);let r;for(r=0;r<l.length;r+=1){const o=Ce(i,l,r);t[r]?t[r].p(o,s):(t[r]=De(o),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},i:$,o:$,d(i){i&&g(e),te(t,i)}}}function St(n,e,l){let{activeSlide:t}=e,{sections:i}=e,{allSlides:s}=e;return n.$$set=r=>{"activeSlide"in r&&l(0,t=r.activeSlide),"sections"in r&&l(1,i=r.sections),"allSlides"in r&&l(2,s=r.allSlides)},[t,i,s]}class Et extends R{constructor(e){super(),K(this,e,St,yt,q,{activeSlide:0,sections:1,allSlides:2})}}var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Tt="Expected a function",He=NaN,It="[object Symbol]",Nt=/^\s+|\s+$/g,jt=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Ct=/^0o[0-7]+$/i,At=parseInt,Ot=typeof ae=="object"&&ae&&ae.Object===Object&&ae,Dt=typeof self=="object"&&self&&self.Object===Object&&self,Ht=Ot||Dt||Function("return this")(),Pt=Object.prototype,qt=Pt.toString,Bt=Math.max,Mt=Math.min,we=function(){return Ht.Date.now()};function Vt(n,e,l){var t,i,s,r,o,f,u=0,a=!1,_=!1,d=!0;if(typeof n!="function")throw new TypeError(Tt);e=Pe(e)||0,pe(l)&&(a=!!l.leading,_="maxWait"in l,s=_?Bt(Pe(l.maxWait)||0,e):s,d="trailing"in l?!!l.trailing:d);function c(m){var A=t,W=i;return t=i=void 0,u=m,r=n.apply(W,A),r}function h(m){return u=m,o=setTimeout(S,e),a?c(m):r}function b(m){var A=m-f,W=m-u,U=e-A;return _?Mt(U,s-W):U}function v(m){var A=m-f,W=m-u;return f===void 0||A>=e||A<0||_&&W>=s}function S(){var m=we();if(v(m))return I(m);o=setTimeout(S,b(m))}function I(m){return o=void 0,d&&t?c(m):(t=i=void 0,r)}function C(){o!==void 0&&clearTimeout(o),u=0,t=f=i=o=void 0}function y(){return o===void 0?r:I(we())}function X(){var m=we(),A=v(m);if(t=arguments,i=this,f=m,A){if(o===void 0)return h(f);if(_)return o=setTimeout(S,e),c(f)}return o===void 0&&(o=setTimeout(S,e)),r}return X.cancel=C,X.flush=y,X}function pe(n){var e=typeof n;return!!n&&(e=="object"||e=="function")}function Lt(n){return!!n&&typeof n=="object"}function Ft(n){return typeof n=="symbol"||Lt(n)&&qt.call(n)==It}function Pe(n){if(typeof n=="number")return n;if(Ft(n))return He;if(pe(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=pe(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(Nt,"");var l=Wt.test(n);return l||Ct.test(n)?At(n.slice(2),l?2:8):jt.test(n)?He:+n}var Rt=Vt;const Kt=zt(Rt),Ut=()=>{var n;return((n=window==null?void 0:window.visualViewport)==null?void 0:n.width)||document.documentElement.clientWidth},Gt=()=>{var n;return((n=window==null?void 0:window.visualViewport)==null?void 0:n.height)||document.documentElement.clientHeight},Xt=wt({width:0,height:0},n=>{const e=()=>n({width:Ut(),height:Gt()});return e(),window.addEventListener("resize",Kt(e,250)),()=>{window.removeEventListener("resize",e)}});function Yt(n){let e,l,t;return{c(){e=N("figure"),l=ue("visual goes here"),this.h()},l(i){e=j(i,"FIGURE",{style:!0,class:!0});var s=T(e);l=ce(s,"visual goes here"),s.forEach(g),this.h()},h(){w(e,"style",t=`--offset: ${n[0]}px; --buffer: 2rem`),w(e,"class","svelte-4vfsg0")},m(i,s){z(i,e,s),P(e,l)},p(i,[s]){s&1&&t!==(t=`--offset: ${i[0]}px; --buffer: 2rem`)&&w(e,"style",t)},i:$,o:$,d(i){i&&g(e)}}}function Zt(n,e,l){let t,i,s;J(n,Xt,a=>l(3,s=a));let{activeSlide:r}=e,o,f=!1;const u=async()=>{if(f){await st();const a=document.getElementById(`slide-${r}`);l(0,o=a.clientHeight+i)}};return Xe(()=>{f=!0,u()}),n.$$set=a=>{"activeSlide"in a&&l(1,r=a.activeSlide)},n.$$.update=()=>{n.$$.dirty&8&&l(2,t=s.width<600),n.$$.dirty&4&&(i=t?10:100),n.$$.dirty&10&&(s.width,u())},[o,r,t,s]}class Jt extends R{constructor(e){super(),K(this,e,Zt,Yt,q,{activeSlide:1})}}/**
 * @license lucide-svelte v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Be(n,e,l){const t=n.slice();return t[11]=e[l][0],t[12]=e[l][1],t}function ve(n){let e,l=[n[12]],t={};for(let i=0;i<l.length;i+=1)t=F(t,l[i]);return{c(){e=Ye(n[11]),this.h()},l(i){e=Ze(i,n[11],{}),T(e).forEach(g),this.h()},h(){he(e,t)},m(i,s){z(i,e,s)},p(i,s){he(e,t=ge(l,[s&32&&i[12]]))},d(i){i&&g(e)}}}function Me(n){let e=n[11],l,t=n[11]&&ve(n);return{c(){t&&t.c(),l=G()},l(i){t&&t.l(i),l=G()},m(i,s){t&&t.m(i,s),z(i,l,s)},p(i,s){i[11]?e?q(e,i[11])?(t.d(1),t=ve(i),e=i[11],t.c(),t.m(l.parentNode,l)):t.p(i,s):(t=ve(i),e=i[11],t.c(),t.m(l.parentNode,l)):e&&(t.d(1),t=null,e=i[11])},d(i){i&&g(l),t&&t.d(i)}}}function Qt(n){let e,l,t,i,s,r=H(n[5]),o=[];for(let d=0;d<r.length;d+=1)o[d]=Me(Be(n,r,d));const f=n[10].default,u=le(f,n,n[9],null);let a=[qe,n[7],{width:n[2]},{height:n[2]},{stroke:n[1]},{"stroke-width":t=n[4]?Number(n[3])*24/Number(n[2]):n[3]},{class:i=n[6]("lucide-icon","lucide",n[0]?`lucide-${n[0]}`:"",n[8].class)}],_={};for(let d=0;d<a.length;d+=1)_=F(_,a[d]);return{c(){e=Ye("svg");for(let d=0;d<o.length;d+=1)o[d].c();l=G(),u&&u.c(),this.h()},l(d){e=Ze(d,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var c=T(e);for(let h=0;h<o.length;h+=1)o[h].l(c);l=G(),u&&u.l(c),c.forEach(g),this.h()},h(){he(e,_)},m(d,c){z(d,e,c);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(e,null);P(e,l),u&&u.m(e,null),s=!0},p(d,[c]){if(c&32){r=H(d[5]);let h;for(h=0;h<r.length;h+=1){const b=Be(d,r,h);o[h]?o[h].p(b,c):(o[h]=Me(b),o[h].c(),o[h].m(e,l))}for(;h<o.length;h+=1)o[h].d(1);o.length=r.length}u&&u.p&&(!s||c&512)&&ie(u,f,d,d[9],s?se(f,d[9],c,null):re(d[9]),null),he(e,_=ge(a,[qe,c&128&&d[7],(!s||c&4)&&{width:d[2]},(!s||c&4)&&{height:d[2]},(!s||c&2)&&{stroke:d[1]},(!s||c&28&&t!==(t=d[4]?Number(d[3])*24/Number(d[2]):d[3]))&&{"stroke-width":t},(!s||c&257&&i!==(i=d[6]("lucide-icon","lucide",d[0]?`lucide-${d[0]}`:"",d[8].class)))&&{class:i}]))},i(d){s||(k(u,d),s=!0)},o(d){E(u,d),s=!1},d(d){d&&g(e),te(o,d),u&&u.d(d)}}}function xt(n,e,l){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","mergeClasses"];let i=We(e,t),{$$slots:s={},$$scope:r}=e,{name:o=void 0}=e,{color:f="currentColor"}=e,{size:u=24}=e,{strokeWidth:a=2}=e,{absoluteStrokeWidth:_=!1}=e,{iconNode:d}=e;const c=(...h)=>h.filter((b,v,S)=>!!b&&S.indexOf(b)===v).join(" ");return n.$$set=h=>{l(8,e=F(F({},e),ee(h))),l(7,i=We(e,t)),"name"in h&&l(0,o=h.name),"color"in h&&l(1,f=h.color),"size"in h&&l(2,u=h.size),"strokeWidth"in h&&l(3,a=h.strokeWidth),"absoluteStrokeWidth"in h&&l(4,_=h.absoluteStrokeWidth),"iconNode"in h&&l(5,d=h.iconNode),"$$scope"in h&&l(9,r=h.$$scope)},e=ee(e),[o,f,u,a,_,d,c,i,e,r,s]}class xe extends R{constructor(e){super(),K(this,e,xt,Qt,q,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5,mergeClasses:6})}get mergeClasses(){return this.$$.ctx[6]}}function $t(n){let e;const l=n[2].default,t=le(l,n,n[3],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,s){t&&t.m(i,s),e=!0},p(i,s){t&&t.p&&(!e||s&8)&&ie(t,l,i,i[3],e?se(l,i[3],s,null):re(i[3]),null)},i(i){e||(k(t,i),e=!0)},o(i){E(t,i),e=!1},d(i){t&&t.d(i)}}}function en(n){let e,l;const t=[{name:"chevron-left"},n[1],{iconNode:n[0]}];let i={$$slots:{default:[$t]},$$scope:{ctx:n}};for(let s=0;s<t.length;s+=1)i=F(i,t[s]);return e=new xe({props:i}),{c(){B(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,r){V(e,s,r),l=!0},p(s,[r]){const o=r&3?ge(t,[t[0],r&2&&Qe(s[1]),r&1&&{iconNode:s[0]}]):{};r&8&&(o.$$scope={dirty:r,ctx:s}),e.$set(o)},i(s){l||(k(e.$$.fragment,s),l=!0)},o(s){E(e.$$.fragment,s),l=!1},d(s){L(e,s)}}}function tn(n,e,l){let{$$slots:t={},$$scope:i}=e;const s=[["path",{d:"m15 18-6-6 6-6"}]];return n.$$set=r=>{l(1,e=F(F({},e),ee(r))),"$$scope"in r&&l(3,i=r.$$scope)},e=ee(e),[s,e,t,i]}class nn extends R{constructor(e){super(),K(this,e,tn,en,q,{})}}function ln(n){let e;const l=n[2].default,t=le(l,n,n[3],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,s){t&&t.m(i,s),e=!0},p(i,s){t&&t.p&&(!e||s&8)&&ie(t,l,i,i[3],e?se(l,i[3],s,null):re(i[3]),null)},i(i){e||(k(t,i),e=!0)},o(i){E(t,i),e=!1},d(i){t&&t.d(i)}}}function rn(n){let e,l;const t=[{name:"chevron-right"},n[1],{iconNode:n[0]}];let i={$$slots:{default:[ln]},$$scope:{ctx:n}};for(let s=0;s<t.length;s+=1)i=F(i,t[s]);return e=new xe({props:i}),{c(){B(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,r){V(e,s,r),l=!0},p(s,[r]){const o=r&3?ge(t,[t[0],r&2&&Qe(s[1]),r&1&&{iconNode:s[0]}]):{};r&8&&(o.$$scope={dirty:r,ctx:s}),e.$set(o)},i(s){l||(k(e.$$.fragment,s),l=!0)},o(s){E(e.$$.fragment,s),l=!1},d(s){L(e,s)}}}function sn(n,e,l){let{$$slots:t={},$$scope:i}=e;const s=[["path",{d:"m9 18 6-6-6-6"}]];return n.$$set=r=>{l(1,e=F(F({},e),ee(r))),"$$scope"in r&&l(3,i=r.$$scope)},e=ee(e),[s,e,t,i]}class on extends R{constructor(e){super(),K(this,e,sn,rn,q,{})}}function Ve(n,e,l){const t=n.slice();return t[19]=e[l],t}function Le(n){let e,l,t,i;const s=[an,fn],r=[];function o(f,u){return f[19]==="left"?0:f[19]==="right"?1:-1}return~(l=o(n))&&(t=r[l]=s[l](n)),{c(){e=N("span"),t&&t.c(),this.h()},l(f){e=j(f,"SPAN",{style:!0,class:!0});var u=T(e);t&&t.l(u),u.forEach(g),this.h()},h(){D(e,"font-size",n[4]),w(e,"class","svelte-1n0sxk")},m(f,u){z(f,e,u),~l&&r[l].m(e,null),i=!0},p(f,u){let a=l;l=o(f),l===a?~l&&r[l].p(f,u):(t&&(_e(),E(r[a],1,1,()=>{r[a]=null}),me()),~l?(t=r[l],t?t.p(f,u):(t=r[l]=s[l](f),t.c()),k(t,1),t.m(e,null)):t=null),(!i||u&16)&&D(e,"font-size",f[4])},i(f){i||(k(t),i=!0)},o(f){E(t),i=!1},d(f){f&&g(e),~l&&r[l].d()}}}function fn(n){let e,l;return e=new on({props:{color:n[5],strokeWidth:n[6]}}),{c(){B(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,i){V(e,t,i),l=!0},p(t,i){const s={};i&32&&(s.color=t[5]),i&64&&(s.strokeWidth=t[6]),e.$set(s)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function an(n){let e,l;return e=new nn({props:{color:n[5],strokeWidth:n[6]}}),{c(){B(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,i){V(e,t,i),l=!0},p(t,i){const s={};i&32&&(s.color=t[5]),i&64&&(s.strokeWidth=t[6]),e.$set(s)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Fe(n){let e,l=n[9].includes(n[19]),t,i,s,r,o,f,u,a=l&&Le(n);return{c(){e=N("button"),a&&a.c(),t=Q(),this.h()},l(_){e=j(_,"BUTTON",{style:!0,"aria-label":!0,class:!0});var d=T(e);a&&a.l(d),t=x(d),d.forEach(g),this.h()},h(){D(e,"width",n[12](n[19])),D(e,"height",n[11](n[19])),w(e,"aria-label",i=n[19]),w(e,"class",s=n[19]+" "+n[7]+" svelte-1n0sxk"),e.disabled=r=n[2].includes(n[19]),O(e,"active",n[19]===n[13]),O(e,"full",n[1])},m(_,d){z(_,e,d),a&&a.m(e,null),P(e,t),o=!0,f||(u=ke(e,"click",function(){ye(n[14]("tap",n[19]))&&n[14]("tap",n[19]).apply(this,arguments)}),f=!0)},p(_,d){n=_,d&520&&(l=n[9].includes(n[19])),l?a?(a.p(n,d),d&520&&k(a,1)):(a=Le(n),a.c(),k(a,1),a.m(e,t)):a&&(_e(),E(a,1,1,()=>{a=null}),me()),(!o||d&4104)&&D(e,"width",n[12](n[19])),(!o||d&2056)&&D(e,"height",n[11](n[19])),(!o||d&8&&i!==(i=n[19]))&&w(e,"aria-label",i),(!o||d&136&&s!==(s=n[19]+" "+n[7]+" svelte-1n0sxk"))&&w(e,"class",s),(!o||d&12&&r!==(r=n[2].includes(n[19])))&&(e.disabled=r),(!o||d&8328)&&O(e,"active",n[19]===n[13]),(!o||d&138)&&O(e,"full",n[1])},i(_){o||(k(a),o=!0)},o(_){E(a),o=!1},d(_){_&&g(e),a&&a.d(),f=!1,u()}}}function un(n){let e,l,t,i;Je(n[18]);let s=H(n[3]),r=[];for(let f=0;f<s.length;f+=1)r[f]=Fe(Ve(n,s,f));const o=f=>E(r[f],1,1,()=>{r[f]=null});return{c(){e=N("section");for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){e=j(f,"SECTION",{style:!0,class:!0});var u=T(e);for(let a=0;a<r.length;a+=1)r[a].l(u);u.forEach(g),this.h()},h(){D(e,"height",n[8]+"px"),w(e,"class","svelte-1n0sxk"),O(e,"debug",n[0])},m(f,u){z(f,e,u);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);l=!0,t||(i=[ke(window,"keydown",function(){ye(n[10])&&n[10].apply(this,arguments)}),ke(window,"resize",n[18])],t=!0)},p(f,[u]){if(n=f,u&31486){s=H(n[3]);let a;for(a=0;a<s.length;a+=1){const _=Ve(n,s,a);r[a]?(r[a].p(_,u),k(r[a],1)):(r[a]=Fe(_),r[a].c(),k(r[a],1),r[a].m(e,null))}for(_e(),a=s.length;a<r.length;a+=1)o(a);me()}(!l||u&256)&&D(e,"height",n[8]+"px"),(!l||u&1)&&O(e,"debug",n[0])},i(f){if(!l){for(let u=0;u<s.length;u+=1)k(r[u]);l=!0}},o(f){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)E(r[u]);l=!1},d(f){f&&g(e),te(r,f),t=!1,ot(i)}}}function cn(n,e,l){let t,i,s,r,o;J(n,vt,m=>l(13,o=m));let{debug:f=!1}=e,{enableKeyboard:u=!1}=e,{full:a=!1}=e,{showArrows:_=!1}=e,{disable:d=[]}=e,{directions:c=["left","right"]}=e,{size:h="64px"}=e,{arrowSize:b="48px"}=e,{arrowStroke:v="#000"}=e,{arrowStrokeWidth:S="2"}=e,{arrowPosition:I="center"}=e;const C=ft();let y;function X(){l(8,y=window.innerHeight)}return n.$$set=m=>{"debug"in m&&l(0,f=m.debug),"enableKeyboard"in m&&l(15,u=m.enableKeyboard),"full"in m&&l(1,a=m.full),"showArrows"in m&&l(16,_=m.showArrows),"disable"in m&&l(2,d=m.disable),"directions"in m&&l(3,c=m.directions),"size"in m&&l(17,h=m.size),"arrowSize"in m&&l(4,b=m.arrowSize),"arrowStroke"in m&&l(5,v=m.arrowStroke),"arrowStrokeWidth"in m&&l(6,S=m.arrowStrokeWidth),"arrowPosition"in m&&l(7,I=m.arrowPosition)},n.$$.update=()=>{n.$$.dirty&131082&&l(12,t=m=>Array.isArray(h)?h[c.indexOf(m)]:a?"100%":h),n.$$.dirty&131074&&l(11,i=m=>["up","down"].includes(m)?h:a?"100%":h),n.$$.dirty&32776&&l(10,s=m=>{const A=m.key.replace("Arrow","").toLowerCase(),W=c.includes(A);u&&W&&(m.preventDefault(),C("tap",A))}),n.$$.dirty&65544&&l(9,r=c.filter(m=>typeof _=="boolean"?_:_.includes(m)))},[f,a,d,c,b,v,S,I,y,r,s,i,t,o,C,u,_,h,X]}class hn extends R{constructor(e){super(),K(this,e,cn,un,q,{debug:0,enableKeyboard:15,full:1,showArrows:16,disable:2,directions:3,size:17,arrowSize:4,arrowStroke:5,arrowStrokeWidth:6,arrowPosition:7})}}function dn(n){let e,l,t,i,s;const r=n[26].default,o=le(r,n,n[25],null);return{c(){e=N("section"),l=N("div"),o&&o.c(),this.h()},l(f){e=j(f,"SECTION",{"aria-label":!0,class:!0});var u=T(e);l=j(u,"DIV",{class:!0,style:!0});var a=T(l);o&&o.l(a),a.forEach(g),u.forEach(g),this.h()},h(){w(l,"class","slides svelte-1ceqw5z"),w(l,"style",n[5]),w(e,"aria-label","carousel"),w(e,"class",t="slider "+n[0]+" svelte-1ceqw5z"),Je(()=>n[29].call(e))},m(f,u){z(f,e,u),P(e,l),o&&o.m(l,null),n[27](l),n[28](e),i=at(e,n[29].bind(e)),s=!0},p(f,u){o&&o.p&&(!s||u[0]&33554432)&&ie(o,r,f,f[25],s?se(r,f[25],u,null):re(f[25]),null),(!s||u[0]&32)&&w(l,"style",f[5]),(!s||u[0]&1&&t!==(t="slider "+f[0]+" svelte-1ceqw5z"))&&w(e,"class",t)},i(f){s||(k(o,f),s=!0)},o(f){E(o,f),s=!1},d(f){f&&g(e),o&&o.d(f),n[27](null),n[28](null),i()}}}function _n(n,e,l){let t,i,s,r,o,f,u,a,_,d,c,{$$slots:h={},$$scope:b}=e,{direction:v="horizontal"}=e,{duration:S="500ms"}=e,{timing:I="ease"}=e,{count:C=0}=e,{current:y=0}=e;const X=()=>be(1),m=()=>be(-1),A=p=>be(p,!0);let W=0,U=0,Y,Z,Se=!1,oe,fe,Ee,ze=ne(),Te=ne(),Ie=ne(),Ne=ne(),je=ne();const be=(p,lt)=>{if(!Se)return!1;const it=lt?p:U+p;l(14,U=Math.max(0,Math.min(W-1,it))),l(6,y=U)},$e=p=>{Se=p[0].isIntersecting};Xe(()=>{l(13,W=fe.children.length),l(7,C=W),je.set(C),Ee=new IntersectionObserver($e,{root:null,rootMargin:"-1px"}),Ee.observe(oe),l(2,Z),l(1,Y)});function et(p){de[p?"unshift":"push"](()=>{fe=p,l(4,fe)})}function tt(p){de[p?"unshift":"push"](()=>{oe=p,l(3,oe)})}function nt(){Y=this.clientWidth,Z=this.clientHeight,l(1,Y),l(2,Z)}return n.$$set=p=>{"direction"in p&&l(0,v=p.direction),"duration"in p&&l(8,S=p.duration),"timing"in p&&l(9,I=p.timing),"count"in p&&l(7,C=p.count),"current"in p&&l(6,y=p.current),"$$scope"in p&&l(25,b=p.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&8195&&l(24,t=v==="horizontal"?`${W*Y}px`:"100%"),n.$$.dirty[0]&8197&&l(23,i=v==="vertical"?`${W*Z}px`:"100%"),n.$$.dirty[0]&16387&&l(22,s=v==="horizontal"?`${U*Y*-1}px`:0),n.$$.dirty[0]&16389&&l(21,r=v==="vertical"?`${U*Z*-1}px`:0),n.$$.dirty[0]&16777216&&l(20,o=`width: ${t};`),n.$$.dirty[0]&8388608&&l(19,f=`height: ${i};`),n.$$.dirty[0]&6291456&&l(18,u=`transform: translate3d(${s}, ${r}, 0);`),n.$$.dirty[0]&256&&l(17,a=`transition-duration: ${S};`),n.$$.dirty[0]&512&&l(16,_=`transition-timing-function: ${I};`),n.$$.dirty[0]&2031616&&l(5,d=`${o} ${f} ${u} ${a} ${_}`),n.$$.dirty[0]&1&&ze.set(v),n.$$.dirty[0]&2&&Te.set(Y),n.$$.dirty[0]&4&&Ie.set(Z),n.$$.dirty[0]&64&&Ne.set(y),n.$$.dirty[0]&32768&&ut("Slider",c)},l(15,c={dir:ze,cur:Ne,w:Te,h:Ie,count:je}),[v,Y,Z,oe,fe,d,y,C,S,I,X,m,A,W,U,c,_,a,u,f,o,r,s,i,t,b,h,et,tt,nt]}class mn extends R{constructor(e){super(),K(this,e,_n,dn,q,{direction:0,duration:8,timing:9,count:7,current:6,next:10,prev:11,jump:12},null,[-1,-1])}get next(){return this.$$.ctx[10]}get prev(){return this.$$.ctx[11]}get jump(){return this.$$.ctx[12]}}function gn(n,e){const l=["a","button","input","textarea","select","details","[tabindex]:not([tabindex='-1'])"],t=r=>{s.forEach(o=>{r&&r.disable?o.setAttribute("tabindex",-1):o.removeAttribute("tabindex")})},i=l.join(", "),s=[...n.querySelectorAll(i)];return t(e),{update(r){t(r)},destroy(){s.forEach(r=>r.removeAttribute("tabindex"))}}}function bn(n){let e,l,t,i,s,r,o;const f=n[16].default,u=le(f,n,n[15],null);return{c(){e=N("div"),u&&u.c(),this.h()},l(a){e=j(a,"DIV",{id:!0,class:!0,role:!0,"aria-label":!0,"aria-current":!0});var _=T(e);u&&u.l(_),_.forEach(g),this.h()},h(){w(e,"id",l="slide-"+n[0]),w(e,"class","slide svelte-1h814z3"),w(e,"role","group"),w(e,"aria-label",t="slide "+(n[0]+1)+" of "+n[5]),w(e,"aria-current",n[1]),O(e,"visible",n[1]),D(e,"width",n[4]),D(e,"height",n[3])},m(a,_){z(a,e,_),u&&u.m(e,null),s=!0,r||(o=ct(i=gn.call(null,e,{disable:n[2]})),r=!0)},p(a,[_]){u&&u.p&&(!s||_&32768)&&ie(u,f,a,a[15],s?se(f,a[15],_,null):re(a[15]),null),(!s||_&1&&l!==(l="slide-"+a[0]))&&w(e,"id",l),(!s||_&33&&t!==(t="slide "+(a[0]+1)+" of "+a[5]))&&w(e,"aria-label",t),(!s||_&2)&&w(e,"aria-current",a[1]),i&&ye(i.update)&&_&4&&i.update.call(null,{disable:a[2]}),(!s||_&2)&&O(e,"visible",a[1]),_&16&&D(e,"width",a[4]),_&8&&D(e,"height",a[3])},i(a){s||(k(u,a),s=!0)},o(a){E(u,a),s=!1},d(a){a&&g(e),u&&u.d(a),r=!1,o()}}}function wn(n,e,l){let t,i,s,r,o,f,u,a,_,{$$slots:d={},$$scope:c}=e;const{dir:h,cur:b,w:v,h:S,count:I}=ht("Slider");J(n,h,y=>l(13,u=y)),J(n,b,y=>l(11,o=y)),J(n,v,y=>l(14,a=y)),J(n,S,y=>l(12,f=y)),J(n,I,y=>l(5,_=y));let{index:C}=e;return n.$$set=y=>{"index"in y&&l(0,C=y.index),"$$scope"in y&&l(15,c=y.$$scope)},n.$$.update=()=>{n.$$.dirty&24576&&l(4,t=u==="horizontal"?`${a}px`:"100%"),n.$$.dirty&12288&&l(3,i=u==="vertical"?`${f}px`:"100%"),n.$$.dirty&2049&&l(1,s=C===o),n.$$.dirty&2&&l(2,r=!s)},[C,s,r,i,t,_,h,b,v,S,I,o,f,u,a,c,d]}class vn extends R{constructor(e){super(),K(this,e,wn,bn,q,{index:0})}}function Re(n,e,l){const t=n.slice();return t[8]=e[l],t[10]=l,t}function Ke(n,e,l){const t=n.slice();return t[11]=e[l].type,t[12]=e[l].text,t}function kn(n){let e,l,t=n[12]+"";return{c(){e=N(n[11]),l=new _t(!1),this.h()},l(i){e=j(i,(n[11]||"null").toUpperCase(),{class:!0});var s=T(e);l=mt(s,!1),s.forEach(g),this.h()},h(){l.a=null,gt(n[11])(e,{class:"slide-content svelte-1myyodm"})},m(i,s){z(i,e,s),l.m(t,e)},p:$,d(i){i&&g(e)}}}function Ue(n){let e=n[11]&&kn(n);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,t){e&&e.m(l,t)},p(l,t){l[11]&&e.p(l,t)},d(l){e&&e.d(l)}}}function pn(n){let e,l=H(n[8].text),t=[];for(let i=0;i<l.length;i+=1)t[i]=Ue(Ke(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=Q()},l(i){for(let s=0;s<t.length;s+=1)t[s].l(i);e=x(i)},m(i,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,s);z(i,e,s)},p(i,s){if(s&8){l=H(i[8].text);let r;for(r=0;r<l.length;r+=1){const o=Ke(i,l,r);t[r]?t[r].p(o,s):(t[r]=Ue(o),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&g(e),te(t,i)}}}function Ge(n){let e,l;return e=new vn({props:{index:n[10],$$slots:{default:[pn]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,i){V(e,t,i),l=!0},p(t,i){const s={};i&32768&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function yn(n){let e,l,t=H(n[3]),i=[];for(let r=0;r<t.length;r+=1)i[r]=Ge(Re(n,t,r));const s=r=>E(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=G()},l(r){for(let o=0;o<i.length;o+=1)i[o].l(r);e=G()},m(r,o){for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(r,o);z(r,e,o),l=!0},p(r,o){if(o&8){t=H(r[3]);let f;for(f=0;f<t.length;f+=1){const u=Re(r,t,f);i[f]?(i[f].p(u,o),k(i[f],1)):(i[f]=Ge(u),i[f].c(),k(i[f],1),i[f].m(e.parentNode,e))}for(_e(),f=t.length;f<i.length;f+=1)s(f);me()}},i(r){if(!l){for(let o=0;o<t.length;o+=1)k(i[o]);l=!0}},o(r){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)E(i[o]);l=!1},d(r){r&&g(e),te(i,r)}}}function Sn(n){let e,l,t,i,s,r,o,f,u,a;e=new Et({props:{activeSlide:n[1],sections:n[2],allSlides:n[3]}});function _(c){n[6](c)}let d={duration:"0",$$slots:{default:[yn]},$$scope:{ctx:n}};return n[1]!==void 0&&(d.current=n[1]),i=new mn({props:d}),n[5](i),de.push(()=>bt(i,"current",_)),o=new Jt({props:{activeSlide:n[1]}}),u=new hn({props:{debug:!1,full:!0,directions:n[1]===0?["right"]:["left","right"],size:n[1]===0?"100%":["33%","67%"],enableKeyboard:!0,marginTop:0}}),u.$on("tap",n[4]),{c(){B(e.$$.fragment),l=Q(),t=N("article"),B(i.$$.fragment),r=Q(),B(o.$$.fragment),f=Q(),B(u.$$.fragment),this.h()},l(c){M(e.$$.fragment,c),l=x(c),t=j(c,"ARTICLE",{class:!0});var h=T(t);M(i.$$.fragment,h),h.forEach(g),r=x(c),M(o.$$.fragment,c),f=x(c),M(u.$$.fragment,c),this.h()},h(){w(t,"class","svelte-1myyodm")},m(c,h){V(e,c,h),z(c,l,h),z(c,t,h),V(i,t,null),z(c,r,h),V(o,c,h),z(c,f,h),V(u,c,h),a=!0},p(c,[h]){const b={};h&2&&(b.activeSlide=c[1]),e.$set(b);const v={};h&32768&&(v.$$scope={dirty:h,ctx:c}),!s&&h&2&&(s=!0,v.current=c[1],dt(()=>s=!1)),i.$set(v);const S={};h&2&&(S.activeSlide=c[1]),o.$set(S);const I={};h&2&&(I.directions=c[1]===0?["right"]:["left","right"]),h&2&&(I.size=c[1]===0?"100%":["33%","67%"]),u.$set(I)},i(c){a||(k(e.$$.fragment,c),k(i.$$.fragment,c),k(o.$$.fragment,c),k(u.$$.fragment,c),a=!0)},o(c){E(e.$$.fragment,c),E(i.$$.fragment,c),E(o.$$.fragment,c),E(u.$$.fragment,c),a=!1},d(c){c&&(g(l),g(t),g(r),g(f)),L(e,c),n[5](null),L(i),L(o,c),L(u,c)}}}function En(n,e,l){let t,i=0;const s=[{title:"Intro",slides:[{i:0,text:[{type:"h1",text:"title"},{type:"p",text:"welcome"}]}]},{title:"Middle",slides:[{i:1,text:[{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"}]},{i:2,text:[{type:"p",text:"fox jumps over"},{type:"p",text:"fox jumps over"}]},{i:3,text:[{type:"p",text:"the lazy dog"}]}]},{title:"Outro",slides:[{i:4,text:[{type:"h2",text:"the end."}]}]}],r=s.map((a,_)=>a.slides.map(d=>({...d,section:_}))).flat(),o=({detail:a})=>{a==="right"?t.next():t.prev(),window.scrollTo(0,0)};function f(a){de[a?"unshift":"push"](()=>{t=a,l(0,t)})}function u(a){i=a,l(1,i)}return[t,i,s,r,o,f,u]}class zn extends R{constructor(e){super(),K(this,e,En,Sn,q,{})}}function Tn(n){let e,l;return e=new zn({}),{c(){B(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,i){V(e,t,i),l=!0},p:$,i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}class An extends R{constructor(e){super(),K(this,e,null,Tn,q,{})}}export{An as component};
