import{s as K,e as I,c as j,a as z,d as _,q as g,i as E,n as V,T as se,t as ne,m as P,b as ie,p as G,$ as U,f as H,g as Ve,v as re,h as F,x as je,B as Fe,j as ze,H as Le,a1 as We,u as Oe,k as Ce,l as De,a2 as Re,z as le,y as ee,R as Be,F as Pe,a3 as Ge,a4 as Ue,a5 as Ke,a6 as Xe,a7 as Je}from"../chunks/scheduler.1uu1TiMB.js";import{S as X,i as J,t as O,a as q,f as Qe,c as L,b as W,m as R,d as B,g as Ye,e as Ze}from"../chunks/index.BcnNT8Xd.js";import{e as M}from"../chunks/each.D6YF6ztN.js";import{r as $e,w as Y}from"../chunks/index.CoVZbpgy.js";import{T as et}from"../chunks/Tap.DC6qrQ0l.js";function pe(t,e,i){const n=t.slice();n[3]=e[i].title,n[4]=e[i].slides,n[7]=i;const r=n[2][n[0]].section===n[7];return n[5]=r,n}function be(t,e,i){const n=t.slice();n[8]=e[i];const r=n[8].i===n[0];return n[9]=r,n}function tt(t){let e;return{c(){e=I("div"),this.h()},l(i){e=j(i,"DIV",{class:!0}),z(e).forEach(_),this.h()},h(){g(e,"class","block svelte-s3rw5i")},m(i,n){E(i,e,n)},p:V,d(i){i&&_(e)}}}function nt(t){let e,i=M(t[4]),n=[];for(let r=0;r<i.length;r+=1)n[r]=ye(be(t,i,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=re()},l(r){for(let s=0;s<n.length;s+=1)n[s].l(r);e=re()},m(r,s){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(r,s);E(r,e,s)},p(r,s){if(s&3){i=M(r[4]);let l;for(l=0;l<i.length;l+=1){const o=be(r,i,l);n[l]?n[l].p(o,s):(n[l]=ye(o),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=i.length}},d(r){r&&_(e),se(n,r)}}}function ye(t){let e;return{c(){e=I("div"),this.h()},l(i){e=j(i,"DIV",{class:!0}),z(e).forEach(_),this.h()},h(){g(e,"class","block svelte-s3rw5i"),U(e,"active",t[9])},m(i,n){E(i,e,n)},p(i,n){n&3&&U(e,"active",i[9])},d(i){i&&_(e)}}}function ve(t){let e,i,n=t[7]+1+"",r,s,l,o=t[3]+"",c,u,a;function h(d,p){return d[5]?nt:tt}let w=h(t),f=w(t);return{c(){e=I("div"),i=I("span"),r=ne(n),s=I("span"),l=ne("— "),c=ne(o),u=P(),f.c(),a=P(),this.h()},l(d){e=j(d,"DIV",{class:!0});var p=z(e);i=j(p,"SPAN",{class:!0});var b=z(i);r=ie(b,n),s=j(b,"SPAN",{class:!0});var S=z(s);l=ie(S,"— "),c=ie(S,o),S.forEach(_),b.forEach(_),u=G(p),f.l(p),a=G(p),p.forEach(_),this.h()},h(){g(s,"class","title svelte-s3rw5i"),g(i,"class","text svelte-s3rw5i"),g(e,"class","chapter svelte-s3rw5i"),U(e,"active",t[5])},m(d,p){E(d,e,p),H(e,i),H(i,r),H(i,s),H(s,l),H(s,c),H(e,u),f.m(e,null),H(e,a)},p(d,p){p&2&&o!==(o=d[3]+"")&&Ve(c,o),w===(w=h(d))&&f?f.p(d,p):(f.d(1),f=w(d),f&&(f.c(),f.m(e,a))),p&5&&U(e,"active",d[5])},d(d){d&&_(e),f.d()}}}function it(t){let e,i=M(t[1]),n=[];for(let r=0;r<i.length;r+=1)n[r]=ve(pe(t,i,r));return{c(){e=I("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=j(r,"DIV",{class:!0});var s=z(e);for(let l=0;l<n.length;l+=1)n[l].l(s);s.forEach(_),this.h()},h(){g(e,"class","chapters svelte-s3rw5i")},m(r,s){E(r,e,s);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null)},p(r,[s]){if(s&7){i=M(r[1]);let l;for(l=0;l<i.length;l+=1){const o=pe(r,i,l);n[l]?n[l].p(o,s):(n[l]=ve(o),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=i.length}},i:V,o:V,d(r){r&&_(e),se(n,r)}}}function rt(t,e,i){let{activeSlide:n}=e,{sections:r}=e,{allSlides:s}=e;return t.$$set=l=>{"activeSlide"in l&&i(0,n=l.activeSlide),"sections"in l&&i(1,r=l.sections),"allSlides"in l&&i(2,s=l.allSlides)},[n,r,s]}class lt extends X{constructor(e){super(),J(this,e,rt,it,K,{activeSlide:0,sections:1,allSlides:2})}}var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function st(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ot="Expected a function",we=NaN,ct="[object Symbol]",at=/^\s+|\s+$/g,ft=/^[-+]0x[0-9a-f]+$/i,ut=/^0b[01]+$/i,dt=/^0o[0-7]+$/i,ht=parseInt,_t=typeof te=="object"&&te&&te.Object===Object&&te,mt=typeof self=="object"&&self&&self.Object===Object&&self,gt=_t||mt||Function("return this")(),pt=Object.prototype,bt=pt.toString,yt=Math.max,vt=Math.min,ce=function(){return gt.Date.now()};function wt(t,e,i){var n,r,s,l,o,c,u=0,a=!1,h=!1,w=!0;if(typeof t!="function")throw new TypeError(ot);e=Se(e)||0,ae(i)&&(a=!!i.leading,h="maxWait"in i,s=h?yt(Se(i.maxWait)||0,e):s,w="trailing"in i?!!i.trailing:w);function f(v){var D=n,T=r;return n=r=void 0,u=v,l=t.apply(T,D),l}function d(v){return u=v,o=setTimeout(S,e),a?f(v):l}function p(v){var D=v-c,T=v-u,A=e-D;return h?vt(A,s-T):A}function b(v){var D=v-c,T=v-u;return c===void 0||D>=e||D<0||h&&T>=s}function S(){var v=ce();if(b(v))return k(v);o=setTimeout(S,p(v))}function k(v){return o=void 0,w&&n?f(v):(n=r=void 0,l)}function C(){o!==void 0&&clearTimeout(o),u=0,n=c=r=o=void 0}function y(){return o===void 0?l:k(ce())}function Q(){var v=ce(),D=b(v);if(n=arguments,r=this,c=v,D){if(o===void 0)return d(c);if(h)return o=setTimeout(S,e),f(c)}return o===void 0&&(o=setTimeout(S,e)),l}return Q.cancel=C,Q.flush=y,Q}function ae(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function St(t){return!!t&&typeof t=="object"}function Et(t){return typeof t=="symbol"||St(t)&&bt.call(t)==ct}function Se(t){if(typeof t=="number")return t;if(Et(t))return we;if(ae(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ae(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(at,"");var i=ut.test(t);return i||dt.test(t)?ht(t.slice(2),i?2:8):ft.test(t)?we:+t}var kt=wt;const Tt=st(kt),It=()=>{var t;return((t=window==null?void 0:window.visualViewport)==null?void 0:t.width)||document.documentElement.clientWidth},jt=()=>{var t;return((t=window==null?void 0:window.visualViewport)==null?void 0:t.height)||document.documentElement.clientHeight},zt=$e({width:0,height:0},t=>{const e=()=>t({width:It(),height:jt()});return e(),window.addEventListener("resize",Tt(e,250)),()=>{window.removeEventListener("resize",e)}});function Ot(t){let e,i,n;return{c(){e=I("figure"),i=ne("visual goes here"),this.h()},l(r){e=j(r,"FIGURE",{style:!0,class:!0});var s=z(e);i=ie(s,"visual goes here"),s.forEach(_),this.h()},h(){g(e,"style",n=`--offset: ${t[0]}px; --buffer: 2rem`),g(e,"class","svelte-4vfsg0")},m(r,s){E(r,e,s),H(e,i)},p(r,[s]){s&1&&n!==(n=`--offset: ${r[0]}px; --buffer: 2rem`)&&g(e,"style",n)},i:V,o:V,d(r){r&&_(e)}}}function Ct(t,e,i){let n,r,s;F(t,zt,a=>i(3,s=a));let{activeSlide:l}=e,o,c=!1;const u=async()=>{if(c){await Fe();const a=document.getElementById(`slide-${l}`);i(0,o=a.clientHeight+r)}};return je(()=>{c=!0,u()}),t.$$set=a=>{"activeSlide"in a&&i(1,l=a.activeSlide)},t.$$.update=()=>{t.$$.dirty&8&&i(2,n=s.width<600),t.$$.dirty&4&&(r=n?10:100),t.$$.dirty&10&&(s.width,u())},[o,l,n,s]}class Dt extends X{constructor(e){super(),J(this,e,Ct,Ot,K,{activeSlide:1})}}function qt(t){let e,i,n,r,s;const l=t[26].default,o=ze(l,t,t[25],null);return{c(){e=I("section"),i=I("div"),o&&o.c(),this.h()},l(c){e=j(c,"SECTION",{"aria-label":!0,class:!0});var u=z(e);i=j(u,"DIV",{class:!0,style:!0});var a=z(i);o&&o.l(a),a.forEach(_),u.forEach(_),this.h()},h(){g(i,"class","slides svelte-1ceqw5z"),g(i,"style",t[5]),g(e,"aria-label","carousel"),g(e,"class",n="slider "+t[0]+" svelte-1ceqw5z"),Le(()=>t[29].call(e))},m(c,u){E(c,e,u),H(e,i),o&&o.m(i,null),t[27](i),t[28](e),r=We(e,t[29].bind(e)),s=!0},p(c,u){o&&o.p&&(!s||u[0]&33554432)&&Oe(o,l,c,c[25],s?De(l,c[25],u,null):Ce(c[25]),null),(!s||u[0]&32)&&g(i,"style",c[5]),(!s||u[0]&1&&n!==(n="slider "+c[0]+" svelte-1ceqw5z"))&&g(e,"class",n)},i(c){s||(O(o,c),s=!0)},o(c){q(o,c),s=!1},d(c){c&&_(e),o&&o.d(c),t[27](null),t[28](null),r()}}}function At(t,e,i){let n,r,s,l,o,c,u,a,h,w,f,{$$slots:d={},$$scope:p}=e,{direction:b="horizontal"}=e,{duration:S="500ms"}=e,{timing:k="ease"}=e,{count:C=0}=e,{current:y=0}=e;const Q=()=>oe(1),v=()=>oe(-1),D=m=>oe(m,!0);let T=0,A=0,N,x,fe=!1,Z,$,ue,de=Y(),he=Y(),_e=Y(),me=Y(),ge=Y();const oe=(m,Ne)=>{if(!fe)return!1;const xe=Ne?m:A+m;i(14,A=Math.max(0,Math.min(T-1,xe))),i(6,y=A)},qe=m=>{fe=m[0].isIntersecting};je(()=>{i(13,T=$.children.length),i(7,C=T),ge.set(C),ue=new IntersectionObserver(qe,{root:null,rootMargin:"-1px"}),ue.observe(Z),i(2,x),i(1,N)});function Ae(m){le[m?"unshift":"push"](()=>{$=m,i(4,$)})}function He(m){le[m?"unshift":"push"](()=>{Z=m,i(3,Z)})}function Me(){N=this.clientWidth,x=this.clientHeight,i(1,N),i(2,x)}return t.$$set=m=>{"direction"in m&&i(0,b=m.direction),"duration"in m&&i(8,S=m.duration),"timing"in m&&i(9,k=m.timing),"count"in m&&i(7,C=m.count),"current"in m&&i(6,y=m.current),"$$scope"in m&&i(25,p=m.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&8195&&i(24,n=b==="horizontal"?`${T*N}px`:"100%"),t.$$.dirty[0]&8197&&i(23,r=b==="vertical"?`${T*x}px`:"100%"),t.$$.dirty[0]&16387&&i(22,s=b==="horizontal"?`${A*N*-1}px`:0),t.$$.dirty[0]&16389&&i(21,l=b==="vertical"?`${A*x*-1}px`:0),t.$$.dirty[0]&16777216&&i(20,o=`width: ${n};`),t.$$.dirty[0]&8388608&&i(19,c=`height: ${r};`),t.$$.dirty[0]&6291456&&i(18,u=`transform: translate3d(${s}, ${l}, 0);`),t.$$.dirty[0]&256&&i(17,a=`transition-duration: ${S};`),t.$$.dirty[0]&512&&i(16,h=`transition-timing-function: ${k};`),t.$$.dirty[0]&2031616&&i(5,w=`${o} ${c} ${u} ${a} ${h}`),t.$$.dirty[0]&1&&de.set(b),t.$$.dirty[0]&2&&he.set(N),t.$$.dirty[0]&4&&_e.set(x),t.$$.dirty[0]&64&&me.set(y),t.$$.dirty[0]&32768&&Re("Slider",f)},i(15,f={dir:de,cur:me,w:he,h:_e,count:ge}),[b,N,x,Z,$,w,y,C,S,k,Q,v,D,T,A,f,h,a,u,c,o,l,s,r,n,p,d,Ae,He,Me]}class Ht extends X{constructor(e){super(),J(this,e,At,qt,K,{direction:0,duration:8,timing:9,count:7,current:6,next:10,prev:11,jump:12},null,[-1,-1])}get next(){return this.$$.ctx[10]}get prev(){return this.$$.ctx[11]}get jump(){return this.$$.ctx[12]}}function Mt(t,e){const i=["a","button","input","textarea","select","details","[tabindex]:not([tabindex='-1'])"],n=l=>{s.forEach(o=>{l&&l.disable?o.setAttribute("tabindex",-1):o.removeAttribute("tabindex")})},r=i.join(", "),s=[...t.querySelectorAll(r)];return n(e),{update(l){n(l)},destroy(){s.forEach(l=>l.removeAttribute("tabindex"))}}}function Nt(t){let e,i,n,r,s,l,o;const c=t[16].default,u=ze(c,t,t[15],null);return{c(){e=I("div"),u&&u.c(),this.h()},l(a){e=j(a,"DIV",{id:!0,class:!0,role:!0,"aria-label":!0,"aria-current":!0});var h=z(e);u&&u.l(h),h.forEach(_),this.h()},h(){g(e,"id",i="slide-"+t[0]),g(e,"class","slide svelte-1h814z3"),g(e,"role","group"),g(e,"aria-label",n="slide "+(t[0]+1)+" of "+t[5]),g(e,"aria-current",t[1]),U(e,"visible",t[1]),ee(e,"width",t[4]),ee(e,"height",t[3])},m(a,h){E(a,e,h),u&&u.m(e,null),s=!0,l||(o=Be(r=Mt.call(null,e,{disable:t[2]})),l=!0)},p(a,[h]){u&&u.p&&(!s||h&32768)&&Oe(u,c,a,a[15],s?De(c,a[15],h,null):Ce(a[15]),null),(!s||h&1&&i!==(i="slide-"+a[0]))&&g(e,"id",i),(!s||h&33&&n!==(n="slide "+(a[0]+1)+" of "+a[5]))&&g(e,"aria-label",n),(!s||h&2)&&g(e,"aria-current",a[1]),r&&Pe(r.update)&&h&4&&r.update.call(null,{disable:a[2]}),(!s||h&2)&&U(e,"visible",a[1]),h&16&&ee(e,"width",a[4]),h&8&&ee(e,"height",a[3])},i(a){s||(O(u,a),s=!0)},o(a){q(u,a),s=!1},d(a){a&&_(e),u&&u.d(a),l=!1,o()}}}function xt(t,e,i){let n,r,s,l,o,c,u,a,h,{$$slots:w={},$$scope:f}=e;const{dir:d,cur:p,w:b,h:S,count:k}=Ge("Slider");F(t,d,y=>i(13,u=y)),F(t,p,y=>i(11,o=y)),F(t,b,y=>i(14,a=y)),F(t,S,y=>i(12,c=y)),F(t,k,y=>i(5,h=y));let{index:C}=e;return t.$$set=y=>{"index"in y&&i(0,C=y.index),"$$scope"in y&&i(15,f=y.$$scope)},t.$$.update=()=>{t.$$.dirty&24576&&i(4,n=u==="horizontal"?`${a}px`:"100%"),t.$$.dirty&12288&&i(3,r=u==="vertical"?`${c}px`:"100%"),t.$$.dirty&2049&&i(1,s=C===o),t.$$.dirty&2&&i(2,l=!s)},[C,s,l,r,n,h,d,p,b,S,k,o,c,u,a,f,w]}class Vt extends X{constructor(e){super(),J(this,e,xt,Nt,K,{index:0})}}function Ee(t,e,i){const n=t.slice();return n[8]=e[i],n[10]=i,n}function ke(t,e,i){const n=t.slice();return n[11]=e[i].type,n[12]=e[i].text,n}function Ft(t){let e,i,n=t[12]+"";return{c(){e=I(t[11]),i=new Ke(!1),this.h()},l(r){e=j(r,(t[11]||"null").toUpperCase(),{class:!0});var s=z(e);i=Xe(s,!1),s.forEach(_),this.h()},h(){i.a=null,Je(t[11])(e,{class:"slide-content svelte-1myyodm"})},m(r,s){E(r,e,s),i.m(n,e)},p:V,d(r){r&&_(e)}}}function Te(t){let e=t[11]&&Ft(t);return{c(){e&&e.c()},l(i){e&&e.l(i)},m(i,n){e&&e.m(i,n)},p(i,n){i[11]&&e.p(i,n)},d(i){e&&e.d(i)}}}function Lt(t){let e,i=M(t[8].text),n=[];for(let r=0;r<i.length;r+=1)n[r]=Te(ke(t,i,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=P()},l(r){for(let s=0;s<n.length;s+=1)n[s].l(r);e=G(r)},m(r,s){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(r,s);E(r,e,s)},p(r,s){if(s&8){i=M(r[8].text);let l;for(l=0;l<i.length;l+=1){const o=ke(r,i,l);n[l]?n[l].p(o,s):(n[l]=Te(o),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=i.length}},d(r){r&&_(e),se(n,r)}}}function Ie(t){let e,i;return e=new Vt({props:{index:t[10],$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){R(e,n,r),i=!0},p(n,r){const s={};r&32768&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){i||(O(e.$$.fragment,n),i=!0)},o(n){q(e.$$.fragment,n),i=!1},d(n){B(e,n)}}}function Wt(t){let e,i,n=M(t[3]),r=[];for(let l=0;l<n.length;l+=1)r[l]=Ie(Ee(t,n,l));const s=l=>q(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=re()},l(l){for(let o=0;o<r.length;o+=1)r[o].l(l);e=re()},m(l,o){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(l,o);E(l,e,o),i=!0},p(l,o){if(o&8){n=M(l[3]);let c;for(c=0;c<n.length;c+=1){const u=Ee(l,n,c);r[c]?(r[c].p(u,o),O(r[c],1)):(r[c]=Ie(u),r[c].c(),O(r[c],1),r[c].m(e.parentNode,e))}for(Ye(),c=n.length;c<r.length;c+=1)s(c);Ze()}},i(l){if(!i){for(let o=0;o<n.length;o+=1)O(r[o]);i=!0}},o(l){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)q(r[o]);i=!1},d(l){l&&_(e),se(r,l)}}}function Rt(t){let e,i,n,r,s,l,o,c,u,a;e=new lt({props:{activeSlide:t[1],sections:t[2],allSlides:t[3]}});function h(f){t[6](f)}let w={duration:"0",$$slots:{default:[Wt]},$$scope:{ctx:t}};return t[1]!==void 0&&(w.current=t[1]),r=new Ht({props:w}),t[5](r),le.push(()=>Qe(r,"current",h)),o=new Dt({props:{activeSlide:t[1]}}),u=new et({props:{debug:!1,full:!0,directions:t[1]===0?["right"]:["left","right"],size:t[1]===0?"100%":["33%","67%"],enableKeyboard:!0,marginTop:0}}),u.$on("tap",t[4]),{c(){L(e.$$.fragment),i=P(),n=I("article"),L(r.$$.fragment),l=P(),L(o.$$.fragment),c=P(),L(u.$$.fragment),this.h()},l(f){W(e.$$.fragment,f),i=G(f),n=j(f,"ARTICLE",{class:!0});var d=z(n);W(r.$$.fragment,d),d.forEach(_),l=G(f),W(o.$$.fragment,f),c=G(f),W(u.$$.fragment,f),this.h()},h(){g(n,"class","svelte-1myyodm")},m(f,d){R(e,f,d),E(f,i,d),E(f,n,d),R(r,n,null),E(f,l,d),R(o,f,d),E(f,c,d),R(u,f,d),a=!0},p(f,[d]){const p={};d&2&&(p.activeSlide=f[1]),e.$set(p);const b={};d&32768&&(b.$$scope={dirty:d,ctx:f}),!s&&d&2&&(s=!0,b.current=f[1],Ue(()=>s=!1)),r.$set(b);const S={};d&2&&(S.activeSlide=f[1]),o.$set(S);const k={};d&2&&(k.directions=f[1]===0?["right"]:["left","right"]),d&2&&(k.size=f[1]===0?"100%":["33%","67%"]),u.$set(k)},i(f){a||(O(e.$$.fragment,f),O(r.$$.fragment,f),O(o.$$.fragment,f),O(u.$$.fragment,f),a=!0)},o(f){q(e.$$.fragment,f),q(r.$$.fragment,f),q(o.$$.fragment,f),q(u.$$.fragment,f),a=!1},d(f){f&&(_(i),_(n),_(l),_(c)),B(e,f),t[5](null),B(r),B(o,f),B(u,f)}}}function Bt(t,e,i){let n,r=0;const s=[{title:"Intro",slides:[{i:0,text:[{type:"h1",text:"title"},{type:"p",text:"welcome"}]}]},{title:"Middle",slides:[{i:1,text:[{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"}]},{i:2,text:[{type:"p",text:"fox jumps over"},{type:"p",text:"fox jumps over"}]},{i:3,text:[{type:"p",text:"the lazy dog"}]}]},{title:"Outro",slides:[{i:4,text:[{type:"h2",text:"the end."}]}]}],l=s.map((a,h)=>a.slides.map(w=>({...w,section:h}))).flat(),o=({detail:a})=>{a==="right"?n.next():n.prev(),window.scrollTo(0,0)};function c(a){le[a?"unshift":"push"](()=>{n=a,i(0,n)})}function u(a){r=a,i(1,r)}return[n,r,s,l,o,c,u]}class Pt extends X{constructor(e){super(),J(this,e,Bt,Rt,K,{})}}function Gt(t){let e,i;return e=new Pt({}),{c(){L(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){R(e,n,r),i=!0},p:V,i(n){i||(O(e.$$.fragment,n),i=!0)},o(n){q(e.$$.fragment,n),i=!1},d(n){B(e,n)}}}class Yt extends X{constructor(e){super(),J(this,e,null,Gt,K,{})}}export{Yt as component};
