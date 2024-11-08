import{A as n}from"./UIcon.6016309d.js";const u=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function m(e,...o){const s=Object.assign({},e);return Object.keys(s).forEach(r=>{o.includes(r)&&delete s[r]}),s}const t=e=>e,d=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Languages",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],a=e=>{const o=m(e,"category");return e.category&&(o.category=d.find(s=>s.slug===e.category)),o},c=[a({slug:"csharp",color:"blue",description:u,logo:n.Csharp,name:"C#",category:"pro-lang"}),a({slug:"sql",color:"yellow",description:"",logo:n.SQL,name:"SQL",category:"pro-lang"}),a({slug:"python",color:"blue",description:"",logo:n.Python,name:"Python",category:"pro-lang"}),a({slug:"git",color:"orange",description:"",logo:n.Git,name:"Git",category:"devtools"}),a({slug:"github",color:"black",description:"",logo:n.GitHub,name:"GitHub",category:"devops"}),a({slug:"octopus",color:"blue",description:"",logo:n.Octopus,name:"Octopus Deploy",category:"devops"}),a({slug:"teamcity",color:"blue",description:"",logo:n.Teamcity,name:"Teamcity",category:"devops"}),a({slug:"js",color:"yellow",description:"",logo:n.JavaScript,name:"Javascript",category:"pro-lang"}),a({slug:"css",color:"blue",description:"",logo:n.CSS,name:"CSS",category:"markup-style"}),a({slug:"html",color:"orange",description:"",logo:n.HTML,name:"HTML",category:"markup-style"})],y="Skills",h=(...e)=>c.filter(o=>e.includes(o.slug)),b=e=>{const o=[],s=[];return c.forEach(r=>{if(e.trim()&&!r.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!r.category){s.push(r);return}let i=o.find(g=>{var l;return g.category.slug===((l=r.category)==null?void 0:l.slug)});i||(i={items:[],category:r.category},o.push(i)),i.items.push(r)}),s.length!==0&&o.push({category:{name:"Others",slug:"others"},items:s}),o};export{b as a,h as g,c as i,y as t};
