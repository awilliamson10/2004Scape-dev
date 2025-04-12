"use strict";(self.webpackChunk_2004_scape_dev=self.webpackChunk_2004_scape_dev||[]).push([[3976],{7879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"intro","title":"Welcome to 2004Scape","description":"2004Scape is an open-source RuneScape 2 emulation project that aims to recreate the game as it was in May 18, 2004. This documentation will help you get started with contributing to the project.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/2004Scape-dev/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/awilliamson10/2004Scape-dev/tree/main/docs/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"Sidebar","next":{"title":"Server Overview","permalink":"/2004Scape-dev/server/overview"}}');var i=t(4848),o=t(8453);const s={sidebar_position:1},l="Welcome to 2004Scape",c={},a=[{value:"About the Project",id:"about-the-project",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting Up the Development Environment",id:"setting-up-the-development-environment",level:3},{value:"Development Workflow",id:"development-workflow",level:2},{value:"For Content Developers",id:"for-content-developers",level:3},{value:"For Engine Developers",id:"for-engine-developers",level:3},{value:"Common Issues",id:"common-issues",level:2},{value:"Contribution Guidelines",id:"contribution-guidelines",level:2},{value:"Need Help?",id:"need-help",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"welcome-to-2004scape",children:"Welcome to 2004Scape"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2004Scape"})," is an open-source RuneScape 2 emulation project that aims to recreate the game as it was in May 18, 2004. This documentation will help you get started with contributing to the project."]}),"\n",(0,i.jsx)(n.h2,{id:"about-the-project",children:"About the Project"}),"\n",(0,i.jsx)(n.p,{children:"2004Scape is a community-driven project dedicated to preserving and recreating a specific version of RuneScape's history. Our goal is to emulate the game with historical accuracy while providing a platform for learning and collaboration."}),"\n",(0,i.jsx)(n.p,{children:"The project consists of several components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Server emulation (written in TypeScript)"}),"\n",(0,i.jsx)(n.li,{children:"Game client compatibility"}),"\n",(0,i.jsx)(n.li,{children:"Content recreation"}),"\n",(0,i.jsx)(n.li,{children:"Tool development"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.p,{children:"To get started contributing to 2004Scape, follow these steps:"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," version 20 or above"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://adoptium.net/",children:"Java"})," version 17 LTS or later"]}),"\n",(0,i.jsx)(n.li,{children:"Git"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-the-development-environment",children:"Setting Up the Development Environment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clone the repository:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/2004Scape/Server.git\ncd Server\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Run the quickstart script:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# For Windows\nquickstart.bat\n\n# For Linux/macOS\n./quickstart.sh\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Follow the on-screen prompts to configure your environment."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Wait for the setup to complete and for the world to start before trying to play."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"development-workflow",children:"Development Workflow"}),"\n",(0,i.jsx)(n.h3,{id:"for-content-developers",children:"For Content Developers"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"npm start"})," to start the server. It will watch for changes to scripts and configs, then automatically repack everything."]}),"\n",(0,i.jsx)(n.h3,{id:"for-engine-developers",children:"For Engine Developers"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"npm run dev"})," for development. This does what ",(0,i.jsx)(n.code,{children:"npm start"})," does, but also completely restarts the server when engine code has changed."]}),"\n",(0,i.jsx)(n.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsx)(n.p,{children:"If you encounter any of the following issues, here's how to resolve them:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"bad option: --import"})}),": You're using an older version of Node. Reinstall and re-run."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"'java' is not recognized as an internal or external command"})}),": You do not have Java installed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Java version errors"}),": If you have multiple Java versions, set ",(0,i.jsx)(n.code,{children:"JAVA_PATH=path-to-java.exe"})," in your .env file."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"contribution-guidelines",children:"Contribution Guidelines"}),"\n",(0,i.jsx)(n.p,{children:"We welcome contributions from everyone. Here's how you can contribute:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Fork the repository"}),"\n",(0,i.jsx)(n.li,{children:"Create a branch for your feature"}),"\n",(0,i.jsx)(n.li,{children:"Make your changes"}),"\n",(0,i.jsx)(n.li,{children:"Submit a pull request"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Please read our detailed contribution guidelines in the ",(0,i.jsx)(n.a,{href:"./contributing",children:"Contributing"})," section."]}),"\n",(0,i.jsx)(n.h2,{id:"need-help",children:"Need Help?"}),"\n",(0,i.jsxs)(n.p,{children:["Join the ",(0,i.jsx)(n.a,{href:"https://discord.gg/UZXdsTmuEs",children:"Discord community"})," or visit the ",(0,i.jsx)(n.a,{href:"https://lostcity.rs/",children:"Forum"})," for assistance."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);