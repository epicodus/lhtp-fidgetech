"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71575],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={title:"\ud83d\udcd3 4.1.0.9 Props",id:"4109-props",slug:"4109-props",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0i_props.md"},i=void 0,s={unversionedId:"fidgetech-4-react/react-fundamentals/4109-props",id:"fidgetech-4-react/react-fundamentals/4109-props",title:"\ud83d\udcd3 4.1.0.9 Props",description:"In this lesson, we'll learn how to pass data between React components. For now, this data will be hard-coded, not dynamic, because we aren't quite ready to work with state yet.",source:"@site/docs/fidgetech-4-react/react-fundamentals/0i-props.md",sourceDirName:"fidgetech-4-react/react-fundamentals",slug:"/fidgetech-4-react/react-fundamentals/4109-props",permalink:"/fidgetech-4-react/react-fundamentals/4109-props",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\ud83d\udcd3 4.1.0.9 Props",id:"4109-props",slug:"4109-props",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0i_props.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.1.0.8 Building a Static Site",permalink:"/fidgetech-4-react/react-fundamentals/4108-building-a-static-site"},next:{title:"\ud83d\udcd3 4.1.0.10 Prop Types",permalink:"/fidgetech-4-react/react-fundamentals/41010-prop-types"}},p={},c=[{value:"Passing Props",id:"passing-props",level:3},{value:"Accessing Props",id:"accessing-props",level:3},{value:"Props Are Read-Only",id:"props-are-read-only",level:3},{value:"The Power of Props",id:"the-power-of-props",level:3}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll learn how to pass data between React components. For now, this data will be hard-coded, not dynamic, because we aren't quite ready to work with state yet."),(0,r.kt)("p",null,"Our Ticket component currently looks like this:"),(0,r.kt)("div",{class:"filename"},"src/components/Ticket.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nfunction Ticket(){\n  const name = "Thato";\n  const name2 = "Haley";\n  return (\n    <React.Fragment>\n      <h3>3a</h3>\n      <h3>{name} and {name2}</h3>\n      <p><em>Firebase entries not saving!</em></p>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nexport default Ticket;\n')),(0,r.kt)("p",null,"Currently, the names on this ticket are hard-coded in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket.js")," component. We are going to change this so that all ticket info is passed from ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket.js"),"'s parent (TicketList) down to ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket.js"),". This will help prepare us for working with state. Generally, we will want our state to live in one place and be the ",(0,r.kt)("em",{parentName:"p"},"single source of truth"),". Instead of each ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket.js")," storing its own data (which wouldn't be a single source of truth), we'll have a parent component store all of the ticket data - that way, our state will be stored in one place."),(0,r.kt)("p",null,"React components accept properties (known as ",(0,r.kt)("strong",{parentName:"p"},"props"),") passed down from a parent. Because React components are functions, these props are actually just a special kind of argument."),(0,r.kt)("h3",{id:"passing-props"},"Passing Props"),(0,r.kt)("p",null,"We can pass props down to a child component using JSX tags. Let's update the ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketList.js")," component so it can pass props to its child ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket.js")," component:"),(0,r.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport Ticket from "./Ticket";\n\nfunction TicketList(){\n  return (\n    <Ticket\n      location="3A"\n      names="Thato and Haley"\n      issue="Firebase will not save record!"/>\n  );\n}\n\nexport default TicketList;\n')),(0,r.kt)("p",null,"We've added three props here: ",(0,r.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"names")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"issue"),". It's common to put each prop on a separate line. While this isn't required, it makes it easier to read our code so we can see what's being passed down to child components."),(0,r.kt)("h3",{id:"accessing-props"},"Accessing Props"),(0,r.kt)("p",null,"Next, let's update our ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket")," so that it uses the props from its parent ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketList")," component."),(0,r.kt)("div",{class:"filename"},"src/components/Ticket.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nfunction Ticket(props){\n  return (\n    <React.Fragment>\n      <h3>{props.location} - {props.names}</h3>\n      <p><em>{props.issue}</em></p>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nexport default Ticket;\n')),(0,r.kt)("p",null,"Notice we've also added ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," as an argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket")," component function's method signature (",(0,r.kt)("inlineCode",{parentName:"p"},"function Ticket(props)"),") to indicate it should now accept props. Remember that our components are just functions. All we're doing now is passing an argument (",(0,r.kt)("inlineCode",{parentName:"p"},"props"),") into our ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket")," function."),(0,r.kt)("p",null,"As always, ",(0,r.kt)("strong",{parentName:"p"},"JSX JavaScript expressions must be wrapped in curly braces.")," Content inside curly braces will be evaluated instead of literally rendered. Because ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," is an object, we access its properties just like we would with any other object. For instance, we access the ticket's location with ",(0,r.kt)("inlineCode",{parentName:"p"},"props.location"),"."),(0,r.kt)("h3",{id:"props-are-read-only"},"Props Are Read-Only"),(0,r.kt)("p",null,"React components aren't just functions - they are pure functions. As we know from our functional programming course section, pure functions don't have side effects and don't alter state."),(0,r.kt)("p",null,"We need to follow these same rules when we are working with props. We will ",(0,r.kt)("strong",{parentName:"p"},"never")," alter the value of props because this would alter the state of our application and break a cardinal rule of pure functions: no side effects."),(0,r.kt)("p",null,"For that reason, it's very important to remember that ",(0,r.kt)("strong",{parentName:"p"},"props are read-only"),"."),(0,r.kt)("h3",{id:"the-power-of-props"},"The Power of Props"),(0,r.kt)("p",null,"So what is the point of doing this? We're lifting data out of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket")," component and passing it down from ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket List"),", but isn't this just an extra step? Well, let's add a second ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketList")," and see."),(0,r.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'...\nfunction TicketList(){\n  return (\n    <React.Fragment>\n      <Ticket\n        location="3A"\n        names="Thato and Haley"\n        issue="Firebase will not save record!"/>\n      <Ticket\n        location="4B"\n        names="Sleater and Kinney"\n        issue="Prop types are throwing an error."/>\n    </React.Fragment>\n  );\n}\n...\n')),(0,r.kt)("p",null,"All we've done here is add a second ticket, this time with different props. The magic of this is what we ",(0,r.kt)("em",{parentName:"p"},"didn't")," have to write: all of the code for another ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket"),". In the next lesson, we'll learn how to leverage looping to make this process even DRYer so we can create any number of ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket"),"s."))}u.isMDXComponent=!0}}]);