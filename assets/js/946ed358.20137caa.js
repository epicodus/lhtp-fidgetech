"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[99733],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=n(7896),o=n(2784),a=n(30876);const r={title:"\ud83d\udcd3 4.1.0.11 Looping in JSX",id:"41011-looping-in-jsx",slug:"41011-looping-in-jsx",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0k_looping_in_jsx.md"},l=void 0,c={unversionedId:"fidgetech-4-react/react-fundamentals/41011-looping-in-jsx",id:"fidgetech-4-react/react-fundamentals/41011-looping-in-jsx",title:"\ud83d\udcd3 4.1.0.11 Looping in JSX",description:"Currently, our application only has two hard-coded tickets. However, this isn't how our help queue should actually work. A functioning, production-ready application should contain a dynamic list of tickets. In this lesson, we'll cover looping through content in JSX.",source:"@site/docs/fidgetech-4-react/react-fundamentals/0k-looping-in-jsx.md",sourceDirName:"fidgetech-4-react/react-fundamentals",slug:"/fidgetech-4-react/react-fundamentals/41011-looping-in-jsx",permalink:"/fidgetech-4-react/react-fundamentals/41011-looping-in-jsx",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\ud83d\udcd3 4.1.0.11 Looping in JSX",id:"41011-looping-in-jsx",slug:"41011-looping-in-jsx",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0k_looping_in_jsx.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.1.0.10 Prop Types",permalink:"/fidgetech-4-react/react-fundamentals/41010-prop-types"},next:{title:"\ud83d\udcd3 4.1.0.12 Using External Stylesheets with React",permalink:"/fidgetech-4-react/react-fundamentals/41012-using-external-stylesheets-with-react"}},s={},p=[{value:"Looping in JSX",id:"looping-in-jsx",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],u=(d="Ticket",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:p},h="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Currently, our application only has two hard-coded tickets. However, this isn't how our help queue should actually work. A functioning, production-ready application should contain a dynamic list of tickets. In this lesson, we'll cover looping through content in JSX."),(0,a.kt)("h2",{id:"looping-in-jsx"},"Looping in JSX"),(0,a.kt)("p",null,"First, let's create an array of tickets in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList.js"),":"),(0,a.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport Ticket from './Ticket';\n\nconst mainTicketList = [\n  {\n    names: 'Thato and Haley',\n    location: '3A',\n    issue: 'Firebase won\\'t save record. Halp.'\n  },\n  {\n    names: 'Sleater and Kinney',\n    location: '4B',\n    issue: 'Prop types are throwing an error.'\n  },\n  {\n    names: 'Imani & Jacob',\n    location: '9F',\n    issue: 'Child component isn\\'t rendering.'\n  }\n];\n\nfunction TicketList(){\n  ...\n...\n")),(0,a.kt)("p",null,"In the future, this list will come from a database or a Redux store. (We'll be exploring both approaches in the next two course sections.) For now, we'll store hard-coded tickets inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component. Note that we use ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),". Remember that props are read-only and that we can't change them."),(0,a.kt)("p",null,"Next, we'll add a loop to render a Ticket component for each entry in ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList"),". In JSX, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"map()")," function for loops."),(0,a.kt)("div",{class:"filename"},"TicketList.js"),"```js ... return (",(0,a.kt)(o.Fragment,null,(0,a.kt)("hr",null),mainTicketList.map(((e,t)=>(0,a.kt)(u,{names:e.names,location:e.location,issue:e.issue,key:t,mdxType:"Ticket"})))),"); ... ```",(0,a.kt)("p",null,"As we can see here, ",(0,a.kt)("inlineCode",{parentName:"p"},"map()")," loops through our ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList"),". On each iteration, it creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," with props corresponding to one of the tickets in ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList"),"."),(0,a.kt)("p",null,"There are a few other important things to note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We add ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," as an argument to our ",(0,a.kt)("inlineCode",{parentName:"li"},"map()")," function. ",(0,a.kt)("inlineCode",{parentName:"li"},"map()")," can take an optional ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," argument if we need access to how many times our loop has iterated."),(0,a.kt)("li",{parentName:"ul"},"We add a ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," value to each ticket which corresponds to the current ",(0,a.kt)("inlineCode",{parentName:"li"},"index"),".")),(0,a.kt)("p",null,"Why bother to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," and create a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," value? If we don't, our code will run correctly but we'll get the following error in the console: ",(0,a.kt)("em",{parentName:"p"},'Warning: Each child in an array or iterator should have a unique "key" prop.'),' This error is pretty clear. Each ticket should have a unique "key" prop.'),(0,a.kt)("p",null,"Having unique keys makes our application more efficient because it helps React differentiate between similar components so it can identify which have been updated, added, or removed from the list during its virtual DOM reconciliation."),(0,a.kt)("p",null,"Our tickets don't have a unique ID value (at least not yet), which is why we are using the item's array index for now. If our tickets already had unique IDs, we wouldn't need to pass in ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," as an argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"map()")," - we'd just use the unique IDs as keys. The keys just need to be unique so React can manage reconciliation effectively."),(0,a.kt)("p",null,"Now we can run our application and see that all our tickets are correctly populating!"),(0,a.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("p",null,"If you'd like a more technical explanation about how React uses these unique ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," props, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children"},'"Recursing on Children" section of the React Reconciliation Documentation'),"."))}k.isMDXComponent=!0}}]);