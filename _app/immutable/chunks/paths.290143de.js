import{n as b,s as p}from"./scheduler.f368f94a.js";const e=[];function g(o,l=b){let i;const n=new Set;function c(t){if(p(o,t)&&(o=t,i)){const r=!e.length;for(const s of n)s[1](),e.push(s,o);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){c(t(o))}function _(t,r=b){const s=[t,r];return n.add(s),n.size===1&&(i=l(c,u)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:c,update:u,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1eucdtc)==null?void 0:f.base)??"/portfolio";var a;const q=((a=globalThis.__sveltekit_1eucdtc)==null?void 0:a.assets)??d;export{q as a,d as b,g as w};