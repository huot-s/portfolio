import{A as e}from"./UIcon.52994853.js";const u=`# Svelte

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
`;function d(t,...a){const s=Object.assign({},t);return Object.keys(s).forEach(r=>{a.includes(r)&&delete s[r]}),s}const n=t=>t,p=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Languages",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],o=t=>{const a=d(t,"category");return t.category&&(a.category=p.find(s=>s.slug===t.category)),a},c=[o({slug:"csharp",color:"blue",description:u,logo:e.Csharp,name:"C#",category:"pro-lang"}),o({slug:"sql",color:"yellow",description:"",logo:e.SQL,name:"SQL",category:"pro-lang"}),o({slug:"oracle",color:"red",description:"",logo:e.Oracle,name:"Oracle DB",category:"pro-lang"}),o({slug:"python",color:"blue",description:"",logo:e.Python,name:"Python",category:"pro-lang"}),o({slug:"java",color:"orange",description:"",logo:e.Java,name:"Java",category:"pro-lang"}),o({slug:"git",color:"orange",description:"",logo:e.Git,name:"Git",category:"devtools"}),o({slug:"tortoise-svn",color:"blue",description:"",logo:e.TortoiseSVN,name:"Tortoise SVN",category:"devtools"}),o({slug:"eclipse",color:"purple",description:"",logo:e.Eclipse,name:"Eclipse",category:"devtools"}),o({slug:"rider",color:"blue",description:"",logo:e.Rider,name:"JetBrains Rider",category:"devtools"}),o({slug:"aws",color:"orange",description:"",logo:e.AWS,name:"AWS",category:"devops"}),o({slug:"github",color:"black",description:"",logo:e.GitHub,name:"GitHub",category:"devops"}),o({slug:"octopus",color:"blue",description:"",logo:e.Octopus,name:"Octopus Deploy",category:"devops"}),o({slug:"teamcity",color:"blue",description:"",logo:e.Teamcity,name:"Teamcity",category:"devops"}),o({slug:"jenkins",color:"blue",description:"",logo:e.Jenkins,name:"Jenkins",category:"devops"}),o({slug:"sonar-qube",color:"blue",description:"",logo:e.SonarQube,name:"Sonar Qube",category:"devops"}),o({slug:"mantis-bt",color:"green",description:"",logo:e.MantisBT,name:"Mantis Bug Tracker",category:"devops"}),o({slug:"js",color:"yellow",description:"",logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"css",color:"blue",description:"",logo:e.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",description:"",logo:e.HTML,name:"HTML",category:"markup-style"})],y="Skills",h=(...t)=>c.filter(a=>t.includes(a.slug)),b=t=>{const a=[],s=[];return c.forEach(r=>{if(t.trim()&&!r.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!r.category){s.push(r);return}let i=a.find(g=>{var l;return g.category.slug===((l=r.category)==null?void 0:l.slug)});i||(i={items:[],category:r.category},a.push(i)),i.items.push(r)}),s.length!==0&&a.push({category:{name:"Others",slug:"others"},items:s}),a};export{b as a,h as g,c as i,y as t};