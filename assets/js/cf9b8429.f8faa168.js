"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[65262],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7896),i=(n(2784),n(30876));const r={title:"\ud83d\udcd3 4.0.0.4 Using Node in the Command Line",id:"4004-using-node-in-the-command-line",slug:"4004-using-node-in-the-command-line",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0c_using_node_in_the_command_line.md"},a=void 0,s={unversionedId:"fidgetech-4-react/functional-programming-with-javascript/4004-using-node-in-the-command-line",id:"fidgetech-4-react/functional-programming-with-javascript/4004-using-node-in-the-command-line",title:"\ud83d\udcd3 4.0.0.4 Using Node in the Command Line",description:"So far, we've used JavaScript to build browser applications. When we want to try out snippets of code, we've used the console in Chrome Developer Tools or an online development environment like Codepen.",source:"@site/docs/fidgetech-4-react/functional-programming-with-javascript/0c-using-node-in-the-command-line.md",sourceDirName:"fidgetech-4-react/functional-programming-with-javascript",slug:"/fidgetech-4-react/functional-programming-with-javascript/4004-using-node-in-the-command-line",permalink:"/fidgetech-4-react/functional-programming-with-javascript/4004-using-node-in-the-command-line",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udcd3 4.0.0.4 Using Node in the Command Line",id:"4004-using-node-in-the-command-line",slug:"4004-using-node-in-the-command-line",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0c_using_node_in_the_command_line.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.0.0.3 Testing Functional Code",permalink:"/fidgetech-4-react/functional-programming-with-javascript/4003-testing-functional-code"},next:{title:"\ud83d\udcd3 4.0.0.5 Immutability",permalink:"/fidgetech-4-react/functional-programming-with-javascript/4005-immutability"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far, we've used JavaScript to build browser applications. When we want to try out snippets of code, we've used the console in Chrome Developer Tools or an online development environment like Codepen."),(0,i.kt)("p",null,'At this point, you have experience using a REPL (Read - Evaluate - Print - Loop) with C#. A REPL is a tool we can use to evaluate code in the terminal. With JavaScript, we can use Node to run our code in the terminal. Node is a runtime environment just like the browser. The difference is that the browser is a client-side environment while Node is a server-side environment. To distill this a little further, JavaScript in the browser is "front end" code while JavaScript using Node is "back end" code.'),(0,i.kt)("p",null,"Both Node and Chrome use the V8 JavaScript engine. The V8 JavaScript engine is an open-source project developed by Google and written in C++. It uses just-in-time (JIT) compiling to translate JavaScript into code our machines can understand. This makes the V8 engine extremely fast, which is part of the reason Node is a popular solution for server-side projects."),(0,i.kt)("p",null,"We will not cover Node in depth in this course. However, we can use Node both as a REPL (Read - Evaluate - Print - Loop) and as a tool to run our JavaScript programs. (If Node is not installed on your personal machine yet, see the ",(0,i.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-2-intermediate-javascript/2-0-getting-started-with-javascript/2-0-0-3-installing-node-js"},"installation instructions here"),")."),(0,i.kt)("p",null,"To use Node as a REPL, simply type ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," in the Terminal."),(0,i.kt)("p",null,"This will bring up a command line prompt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},">\n")),(0,i.kt)("p",null,"Now we can type in JavaScript code and the REPL will evaluate it. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> "Node".concat(" is server-side.");\n\'Node is server-side.\'\n')),(0,i.kt)("p",null,"We can type the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," key to get a list of Node commands. Some of these commands are JavaScript methods and data types that we've used before. Others are for using server-side Node."),(0,i.kt)("p",null,"Finally, to exit the REPL, hold down the Ctrl and c keys twice."),(0,i.kt)("p",null,"The Node REPL can be helpful for trying out code."),(0,i.kt)("p",null,"We can also run a JavaScript file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," command. Let's move the code above into a file. We will also need to need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," in order for our code to print to the command line:"),(0,i.kt)("div",{class:"filename"},"js-code.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'console.log("Node".concat(" is server-side."));\n')),(0,i.kt)("p",null,"Now we can run our script using Node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"$ node js-code.js\nNode is server-side.\n")),(0,i.kt)("p",null,"Note that the string characters won't show up in the Terminal."),(0,i.kt)("p",null,"It may seem odd to use ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," statements to print commands to the Terminal. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," happens to use a method called ",(0,i.kt)("inlineCode",{parentName:"p"},"process.stdout.write()")," under the hood. ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," is short for ",(0,i.kt)("strong",{parentName:"p"},"standard output"),". Standard input is for data streaming into a program while standard output is for data streaming out of a program. It is not specific to Node or JavaScript."),(0,i.kt)("p",null,"Alternatively, if we already have Node open, we can add a require statement to add a script. (This might be useful if we were experimenting with several scripts at once.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> require('./js-code.js')\n")),(0,i.kt)("p",null,"Note that we must include the relative path ",(0,i.kt)("inlineCode",{parentName:"p"},"./")," for this to work."),(0,i.kt)("p",null,"You may choose to use Node, the Chrome console or an online code editor like Codepen to experiment with functional code. At the very least, we recommend trying out the Node REPL."))}u.isMDXComponent=!0}}]);