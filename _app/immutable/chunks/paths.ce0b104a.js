import{n as c,s as _}from"./scheduler.f368f94a.js";const e=[];function d(i,l=c){let n;const o=new Set;function r(t){if(_(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function h(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,f)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:h}}var u;const p=((u=globalThis.__sveltekit_1h73hni)==null?void 0:u.base)??"/portfolio";var a;const q=((a=globalThis.__sveltekit_1h73hni)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
