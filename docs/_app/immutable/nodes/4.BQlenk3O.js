import{s as ee,e as z,m as w,t as R,Q as he,c as x,d as b,p as I,a as L,b as F,o as Q,q as v,y as W,f as d,i as U,R as ye,S as X,g as K,F as _e,n as $,C as ie,x as ve,r as Y,T as re,U as ge}from"../chunks/scheduler.Bc7S6xjr.js";import{S as te,i as le,t as j,g as fe,e as ce,a as V,c as ue,b as de,m as me,d as pe}from"../chunks/index.Da-KQJ5z.js";import{e as Z}from"../chunks/each.D6YF6ztN.js";import{g as Ee,d as be}from"../chunks/transform.BPXmZvzC.js";import{b as Ce}from"../chunks/paths.D1cufhXL.js";async function ze(l){if("clipboard"in navigator)await navigator.clipboard.writeText(l);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=l,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}const xe=(l,e)=>{async function s(){if(r)try{await ze(r),l.dispatchEvent(new CustomEvent("svelte-copy",{detail:r}))}catch(o){l.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:o}))}}let t=typeof e=="string"?["click"]:[e.events].flat(1),r=typeof e=="string"?e:e.text;return t.forEach(o=>{l.addEventListener(o,s,!0)}),{update:o=>{const C=typeof o=="string"?["click"]:[o.events].flat(1),g=typeof o=="string"?o:o.text,m=C.filter(y=>!t.includes(y)),n=t.filter(y=>!C.includes(y));m.forEach(y=>{l.addEventListener(y,s,!0)}),n.forEach(y=>{l.removeEventListener(y,s,!0)}),t=C,r=g},destroy:()=>{t.forEach(o=>{l.removeEventListener(o,s,!0)})}}};function ke(l){let e,s,t,r,o,C,g,m,n,y,a,f="CSS Snippet",p,_,H,M,B,T,S="Copy CSS to Clipboard",N,k,P,q,G;return{c(){e=z("link"),s=w(),t=z("div"),r=z("h3"),o=R(l[0]),C=w(),g=z("p"),m=R(l[1]),n=w(),y=z("details"),a=z("summary"),a.textContent=f,p=w(),_=z("code"),H=R(l[2]),M=w(),B=z("p"),T=z("button"),T.textContent=S,k=z("span"),P=R(l[3]),this.h()},l(E){const i=he("svelte-1uevrx3",document.head);e=x(i,"LINK",{rel:!0,href:!0}),i.forEach(b),s=I(E),t=x(E,"DIV",{style:!0,class:!0});var D=L(t);r=x(D,"H3",{class:!0});var c=L(r);o=F(c,l[0]),c.forEach(b),C=I(D),g=x(D,"P",{});var h=L(g);m=F(h,l[1]),h.forEach(b),n=I(D),y=x(D,"DETAILS",{class:!0});var u=L(y);a=x(u,"SUMMARY",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-1p4cxwi"&&(a.textContent=f),p=I(u),_=x(u,"CODE",{class:!0});var A=L(_);H=F(A,l[2]),A.forEach(b),u.forEach(b),M=I(D),B=x(D,"P",{});var O=L(B);T=x(O,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(T)!=="svelte-v2s51m"&&(T.textContent=S),k=x(O,"SPAN",{class:!0});var J=L(k);P=F(J,l[3]),J.forEach(b),O.forEach(b),D.forEach(b),this.h()},h(){v(e,"rel","external stylesheet"),v(e,"href",l[5]),v(r,"class","svelte-19ry7n"),W(g,"font-size",l[4]),v(a,"class","svelte-19ry7n"),v(_,"class","svelte-19ry7n"),v(y,"class","svelte-19ry7n"),v(T,"class","svelte-19ry7n"),v(k,"class","svelte-19ry7n"),W(t,"font-family","'"+l[0]+"'"),v(t,"class","svelte-19ry7n")},m(E,i){d(document.head,e),U(E,s,i),U(E,t,i),d(t,r),d(r,o),d(t,C),d(t,g),d(g,m),d(t,n),d(t,y),d(y,a),d(y,p),d(y,_),d(_,H),d(t,M),d(t,B),d(B,T),d(B,k),d(k,P),q||(G=[ye(N=xe.call(null,T,l[2])),X(T,"svelte-copy",l[6])],q=!0)},p(E,[i]){i&1&&K(o,E[0]),i&2&&K(m,E[1]),i&16&&W(g,"font-size",E[4]),i&4&&K(H,E[2]),N&&_e(N.update)&&i&4&&N.update.call(null,E[2]),i&8&&K(P,E[3]),i&1&&W(t,"font-family","'"+E[0]+"'")},i:$,o:$,d(E){E&&(b(s),b(t)),b(e),q=!1,ie(G)}}}function Te(l,e,s){let t,{id:r=""}=e,{family:o=""}=e,{size:C=16}=e,{text:g}=e,m="",n="";const y=`${Ce}/assets/demo/fonts/${r}.css`,a=()=>{s(3,n="Copied!"),setTimeout(()=>{s(3,n="")},1e3)};return ve(async()=>{const f=await fetch(y);s(2,m=await f.text())}),l.$$set=f=>{"id"in f&&s(7,r=f.id),"family"in f&&s(0,o=f.family),"size"in f&&s(8,C=f.size),"text"in f&&s(1,g=f.text)},l.$$.update=()=>{l.$$.dirty&256&&s(4,t=`${C}px`)},[o,g,m,n,t,y,a,r,C]}class Se extends te{constructor(e){super(),le(this,e,Te,ke,ee,{id:7,family:0,size:8,text:1})}}const Le=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"inconsolata",family:"Inconsolata",type:"mono"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function se(l,e,s){const t=l.slice();return t[5]=e[s][0],t[6]=e[s][1],t}function ne(l,e,s){const t=l.slice();return t[9]=e[s].family,t[10]=e[s].id,t}function oe(l){let e,s;return e=new Se({props:{id:l[10],family:l[9],size:l[0],text:l[1]}}),{c(){ue(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,r){me(e,t,r),s=!0},p(t,r){const o={};r&1&&(o.size=t[0]),r&2&&(o.text=t[1]),e.$set(o)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){pe(e,t)}}}function ae(l){let e,s=l[5]+"",t,r,o,C,g,m=Z(l[6]),n=[];for(let a=0;a<m.length;a+=1)n[a]=oe(ne(l,m,a));const y=a=>V(n[a],1,1,()=>{n[a]=null});return{c(){e=z("h2"),t=R(s),r=w(),o=z("section");for(let a=0;a<n.length;a+=1)n[a].c();C=w(),this.h()},l(a){e=x(a,"H2",{});var f=L(e);t=F(f,s),f.forEach(b),r=I(a),o=x(a,"SECTION",{class:!0});var p=L(o);for(let _=0;_<n.length;_+=1)n[_].l(p);C=I(p),p.forEach(b),this.h()},h(){v(o,"class","svelte-1lzc8ku")},m(a,f){U(a,e,f),d(e,t),U(a,r,f),U(a,o,f);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(o,null);d(o,C),g=!0},p(a,f){if(f&7){m=Z(a[6]);let p;for(p=0;p<m.length;p+=1){const _=ne(a,m,p);n[p]?(n[p].p(_,f),j(n[p],1)):(n[p]=oe(_),n[p].c(),j(n[p],1),n[p].m(o,C))}for(fe(),p=m.length;p<n.length;p+=1)y(p);ce()}},i(a){if(!g){for(let f=0;f<m.length;f+=1)j(n[f]);g=!0}},o(a){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)V(n[f]);g=!1},d(a){a&&(b(e),b(r),b(o)),re(n,a)}}}function we(l){let e,s,t="Hosted Fonts on The Pudding",r,o,C="<em>Do not use fonts hosted by The Pudding without written permission.</em>",g,m,n,y,a,f,p,_,H,M,B="text sample",T,S,N,k,P,q,G,E=Z(l[2]),i=[];for(let c=0;c<E.length;c+=1)i[c]=ae(se(l,E,c));const D=c=>V(i[c],1,1,()=>{i[c]=null});return{c(){e=z("div"),s=z("h1"),s.textContent=t,r=w(),o=z("p"),o.innerHTML=C,g=w(),m=z("form"),n=z("label"),y=R("font-size: "),a=R(l[0]),f=R("px"),p=w(),_=z("input"),H=w(),M=z("label"),M.textContent=B,T=w(),S=z("input"),N=w(),k=z("article");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=x(c,"DIV",{id:!0,class:!0});var h=L(e);s=x(h,"H1",{"data-svelte-h":!0}),Q(s)!=="svelte-1m2hcwq"&&(s.textContent=t),r=I(h),o=x(h,"P",{"data-svelte-h":!0}),Q(o)!=="svelte-895ja5"&&(o.innerHTML=C),g=I(h),m=x(h,"FORM",{});var u=L(m);n=x(u,"LABEL",{for:!0,class:!0});var A=L(n);y=F(A,"font-size: "),a=F(A,l[0]),f=F(A,"px"),A.forEach(b),p=I(u),_=x(u,"INPUT",{id:!0,type:!0,min:!0,max:!0}),H=I(u),M=x(u,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),Q(M)!=="svelte-16zo6eo"&&(M.textContent=B),T=I(u),S=x(u,"INPUT",{id:!0,type:!0,maxlength:!0}),u.forEach(b),h.forEach(b),N=I(c),k=x(c,"ARTICLE",{class:!0});var O=L(k);for(let J=0;J<i.length;J+=1)i[J].l(O);O.forEach(b),this.h()},h(){v(n,"for","size"),v(n,"class","svelte-1lzc8ku"),v(_,"id","size"),v(_,"type","range"),v(_,"min","12"),v(_,"max","48"),v(M,"for","text"),v(M,"class","svelte-1lzc8ku"),v(S,"id","text"),v(S,"type","text"),v(S,"maxlength","100"),v(e,"id","info"),v(e,"class","svelte-1lzc8ku"),v(k,"class","svelte-1lzc8ku")},m(c,h){U(c,e,h),d(e,s),d(e,r),d(e,o),d(e,g),d(e,m),d(m,n),d(n,y),d(n,a),d(n,f),d(m,p),d(m,_),Y(_,l[0]),d(m,H),d(m,M),d(m,T),d(m,S),Y(S,l[1]),U(c,N,h),U(c,k,h);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(k,null);P=!0,q||(G=[X(_,"change",l[3]),X(_,"input",l[3]),X(S,"input",l[4])],q=!0)},p(c,[h]){if((!P||h&1)&&K(a,c[0]),h&1&&Y(_,c[0]),h&2&&S.value!==c[1]&&Y(S,c[1]),h&7){E=Z(c[2]);let u;for(u=0;u<E.length;u+=1){const A=se(c,E,u);i[u]?(i[u].p(A,h),j(i[u],1)):(i[u]=ae(A),i[u].c(),j(i[u],1),i[u].m(k,null))}for(fe(),u=E.length;u<i.length;u+=1)D(u);ce()}},i(c){if(!P){for(let h=0;h<E.length;h+=1)j(i[h]);P=!0}},o(c){i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)V(i[h]);P=!1},d(c){c&&(b(e),b(N),b(k)),re(i,c),q=!1,ie(G)}}}function Ie(l,e,s){let t=18,r="The quick brown fox jumps over the lazy dog.";const o=Ee(Le,m=>m.type);o.sort((m,n)=>be(m[1].length,n[1].length));function C(){t=ge(this.value),s(0,t)}function g(){r=this.value,s(1,r)}return[t,r,o,C,g]}class Me extends te{constructor(e){super(),le(this,e,Ie,we,ee,{})}}function Pe(l){let e,s;return e=new Me({}),{c(){ue(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,r){me(e,t,r),s=!0},p:$,i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){pe(e,t)}}}class Re extends te{constructor(e){super(),le(this,e,null,Pe,ee,{})}}export{Re as component};