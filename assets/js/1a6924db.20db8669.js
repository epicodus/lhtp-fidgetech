"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45029],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,h=s["".concat(l,".").concat(m)]||s[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(7896),i=(n(2784),n(30876));const r={title:"\u270f\ufe0f Communicating With An API Part 2 (day 2)",id:"communicating-with-an-api-part-2-day-2",slug:"communicating-with-an-api-part-2-day-2",hide_table_of_contents:!0,sidebar_position:21,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/3a_classwork_communicating_with_an_api.md"},o=void 0,c={unversionedId:"fidgetech-3-c-and-net/building-an-api/communicating-with-an-api-part-2-day-2",id:"fidgetech-3-c-and-net/building-an-api/communicating-with-an-api-part-2-day-2",title:"\u270f\ufe0f Communicating With An API Part 2 (day 2)",description:"Goals: Create an application that consumes an API.",source:"@site/docs/fidgetech-3-c-and-net/building-an-api/3a-classwork-communicating-with-an-api-day-2.md",sourceDirName:"fidgetech-3-c-and-net/building-an-api",slug:"/fidgetech-3-c-and-net/building-an-api/communicating-with-an-api-part-2-day-2",permalink:"/fidgetech-3-c-and-net/building-an-api/communicating-with-an-api-part-2-day-2",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"\u270f\ufe0f Communicating With An API Part 2 (day 2)",id:"communicating-with-an-api-part-2-day-2",slug:"communicating-with-an-api-part-2-day-2",hide_table_of_contents:!0,sidebar_position:21,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/3a_classwork_communicating_with_an_api.md"},sidebar:"fidgetech-3-c-and-net",previous:{title:"\u270f\ufe0f 3.6.3.1 Communicating With An API - Part 1",permalink:"/fidgetech-3-c-and-net/building-an-api/3631-communicating-with-an-api---part-1"},next:{title:"\ud83d\udcd3 3.6.4.1 Weekly Technical Interview Prep",permalink:"/fidgetech-3-c-and-net/building-an-api/3641-weekly-technical-interview-prep"}},l={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"API-Consuming Application",id:"api-consuming-application",level:3},{value:"Peer/Instructor Code Review",id:"peerinstructor-code-review",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goals"),": Create an application that consumes an API."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Over the next two class sessions,  work through this list of common interview questions before you start coding for the day."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Non-Technical")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What about coding interests you? What are your favorite parts?"),(0,i.kt)("li",{parentName:"ul"},"What's your workflow like when you sit down to create an application?"),(0,i.kt)("li",{parentName:"ul"},"What made you decide to attend a coding bootcamp?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"General Coding")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What are the advantages to testing your code. What about disadvantages?"),(0,i.kt)("li",{parentName:"ul"},"How do you integrate testing into your general workflow when creating an application?"),(0,i.kt)("li",{parentName:"ul"},"Describe an HTTP GET request.")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"api-consuming-application"},"API-Consuming Application"),(0,i.kt)("p",null,"For the second half of this section, you and your pair will build an application that interacts with an API that you (or your classmates) built at the start of the section. If you're using a classmate's API, make sure you clone or fork the project and push changes to your own repo. Your goal is twofold: continue improving the API itself and make an application for users to interact with!"),(0,i.kt)("p",null,"You can choose to continue working with your pair that you worked with to build the API or you can choose to work with another pair."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"On short weeks"),", you'll have less time to build an API-consuming application. Remember that you'll be expected to build an API and put your best effort into implementing at least one of the five objectives from the ",(0,i.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-3-c-and-net/3-6-building-an-api/3-6-1-2-further-exploration-with-apis"},"Further Exploration")," lesson for this section's independent project, so if you don't feel comfortable with any of these objectives yet, take the time to practice further."),(0,i.kt)("h2",{id:"peerinstructor-code-review"},"Peer/Instructor Code Review"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application successfully returns responses for each API call."),(0,i.kt)("li",{parentName:"ul"},"Host application successfully consumes API."),(0,i.kt)("li",{parentName:"ul"},"README thoroughly describes all endpoints along with parameters that can be used."),(0,i.kt)("li",{parentName:"ul"},"Application works as expected.")))}d.isMDXComponent=!0}}]);