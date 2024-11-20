import{A as o}from"./assets.06c92f4a.js";import"./index.ce35b519.js";const u="";function p(r,...t){const a=Object.assign({},r);return Object.keys(a).forEach(s=>{t.includes(s)&&delete a[s]}),a}const l=r=>r,d=[l({name:"Programming Languages",slug:"pro-lang"}),l({name:"Languages",slug:"lang"}),l({name:"Databases",slug:"db"}),l({name:"DevOps",slug:"devops"}),l({name:"Dev Tools",slug:"devtools"}),l({name:"Soft Skills",slug:"soft"})],e=r=>{const t=p(r,"category");return r.category&&(t.category=d.find(a=>a.slug===r.category)),t},c=[e({slug:"csharp",color:"blue",description:u,logo:o.Csharp,name:"C#",category:"pro-lang"}),e({slug:"sql",color:"yellow",description:"",logo:o.SQL,name:"SQL",category:"pro-lang"}),e({slug:"oracle",color:"red",description:"",logo:o.Oracle,name:"Oracle DB",category:"pro-lang"}),e({slug:"python",color:"blue",description:"",logo:o.Python,name:"Python",category:"pro-lang"}),e({slug:"java",color:"orange",description:"",logo:o.Java,name:"Java",category:"pro-lang"}),e({slug:"cpp",color:"blue",description:"",logo:o.Cpp,name:"C++",category:"pro-lang"}),e({slug:"git",color:"orange",description:"",logo:o.Git,name:"Git",category:"devtools"}),e({slug:"tortoise-svn",color:"blue",description:"",logo:o.TortoiseSVN,name:"Tortoise SVN",category:"devtools"}),e({slug:"eclipse",color:"purple",description:"",logo:o.Eclipse,name:"Eclipse",category:"devtools"}),e({slug:"rider",color:"blue",description:"",logo:o.Rider,name:"JetBrains Rider",category:"devtools"}),e({slug:"powerbi",color:"yellow",description:"",logo:o.PowerBI,name:"Power BI",category:"devtools"}),e({slug:"dataiku",color:"cyan",description:"",logo:o.Dataiku,name:"Dataiku",category:"devtools"}),e({slug:"qualys",color:"red",description:"",logo:o.Qualys,name:"Qualys",category:"devtools"}),e({slug:"zap",color:"blue",description:"",logo:o.Zap,name:"ZAP",category:"devtools"}),e({slug:"checkmarx",color:"green",description:"",logo:o.Checkmarx,name:"Checkmarx",category:"devtools"}),e({slug:"aws",color:"orange",description:"",logo:o.AWS,name:"AWS",category:"devops"}),e({slug:"github",color:"black",description:"",logo:o.GitHub,name:"GitHub",category:"devops"}),e({slug:"octopus",color:"blue",description:"",logo:o.Octopus,name:"Octopus Deploy",category:"devops"}),e({slug:"teamcity",color:"blue",description:"",logo:o.Teamcity,name:"Teamcity",category:"devops"}),e({slug:"jenkins",color:"blue",description:"",logo:o.Jenkins,name:"Jenkins",category:"devops"}),e({slug:"sonar-qube",color:"blue",description:"",logo:o.SonarQube,name:"Sonar Qube",category:"devops"}),e({slug:"mantis-bt",color:"green",description:"",logo:o.MantisBT,name:"Mantis Bug Tracker",category:"devops"}),e({slug:"js",color:"yellow",description:"",logo:o.JavaScript,name:"Javascript",category:"pro-lang"}),e({slug:"project_management",color:"lemonchiffon",description:"",logo:o.ProjectManagement,name:"Project Management",category:"soft"}),e({slug:"rfp",color:"lightblue",description:"",logo:o.Rfp,name:"Request For Proposal",category:"soft"}),e({slug:"client_facing",color:"lightcoral",description:"",logo:o.ClientFacing,name:"Client Facing",category:"soft"}),e({slug:"management",color:"lightcyan",description:"",logo:o.Management,name:"Team Management",category:"soft"}),e({slug:"entrepreneurship",color:"lightgray",description:"",logo:o.Entrepreneurship,name:"Entrepreneurship",category:"soft"})],h="Skills",f=(...r)=>c.filter(t=>r.includes(t.slug)),v=r=>{const t=[],a=[];return c.forEach(s=>{if(r.trim()&&!s.name.toLowerCase().includes(r.trim().toLowerCase()))return;if(!s.category){a.push(s);return}let n=t.find(i=>{var g;return i.category.slug===((g=s.category)==null?void 0:g.slug)});n||(n={items:[],category:s.category},t.push(n)),n.items.push(s)}),a.length!==0&&t.push({category:{name:"Others",slug:"others"},items:a}),t};export{v as a,f as g,c as i,h as t};
