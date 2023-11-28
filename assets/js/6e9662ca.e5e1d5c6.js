"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[93106],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},98018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7896),a=(r(2784),r(30876));const i={title:"\ud83d\udcd3 4.2.0.1 React with Redux Objectives",id:"4201-react-with-redux-objectives",slug:"4201-react-with-redux-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0a_react_with_redux_objectives.md",paginationPrev:null},o=void 0,c={unversionedId:"fidgetech-4-react/react-with-redux/4201-react-with-redux-objectives",id:"fidgetech-4-react/react-with-redux/4201-react-with-redux-objectives",title:"\ud83d\udcd3 4.2.0.1 React with Redux Objectives",description:"In the last course section, we covered the basics of building a React application and managing state. In a smaller application like our help queue, we can manage our shared and local state without using external libraries.",source:"@site/docs/fidgetech-4-react/react-with-redux/0a-react-with-redux-objectives.md",sourceDirName:"fidgetech-4-react/react-with-redux",slug:"/fidgetech-4-react/react-with-redux/4201-react-with-redux-objectives",permalink:"/fidgetech-4-react/react-with-redux/4201-react-with-redux-objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udcd3 4.2.0.1 React with Redux Objectives",id:"4201-react-with-redux-objectives",slug:"4201-react-with-redux-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0a_react_with_redux_objectives.md",paginationPrev:null},sidebar:"fidgetech-4-react",previous:{title:"\u270f\ufe0f 4.1.5.1 React Fundamentals Independent Project",permalink:"/fidgetech-4-react/react-fundamentals/4151-react-fundamentals-independent-project"},next:{title:"\ud83d\udcd3 4.2.0.2 Introduction to Redux",permalink:"/fidgetech-4-react/react-with-redux/4202-introduction-to-redux"}},l={},u=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:3}],s={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last course section, we covered the basics of building a React application and managing state. In a smaller application like our help queue, we can manage our shared and local state without using external libraries."),(0,a.kt)("p",null,"In this course section, we will learn to use ",(0,a.kt)("strong",{parentName:"p"},"Redux"),", a library that we can use to manage shared state in React applications. We will learn about the different parts of Redux, including the Redux ",(0,a.kt)("strong",{parentName:"p"},"store")," and ",(0,a.kt)("strong",{parentName:"p"},"reducers"),". Here are the topics we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The basics of Redux, including the store and reducers"),(0,a.kt)("li",{parentName:"ul"},"Creating, combining and splitting reducers"),(0,a.kt)("li",{parentName:"ul"},"Testing reducers with Jest"),(0,a.kt)("li",{parentName:"ul"},"Combining React and Redux using React Redux"),(0,a.kt)("li",{parentName:"ul"},"Using action creators and constants"),(0,a.kt)("li",{parentName:"ul"},"Component lifecycle methods")),(0,a.kt)("h3",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You will not be expected to incorporate the concepts of this section into your independent project. Instead, your next independent project will be devoted to planning and working on your capstone project. Your code will be reviewed for the following objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Project commit history demonstrates at least 8 hours of work. For any questions about this, please contact an instructor."),(0,a.kt)("li",{parentName:"ul"},"Project includes capstone proposal."),(0,a.kt)("li",{parentName:"ul"},"README includes an overview of the project.")))}p.isMDXComponent=!0}}]);