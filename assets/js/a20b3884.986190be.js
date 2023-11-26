"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[30541],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7896),r=(n(2784),n(30876));const a={title:"\ud83d\udcd3 4.3.2.3 Styled Components",id:"4323-styled-components",slug:"4323-styled-components",hide_table_of_contents:!0,sidebar_position:21,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/2c_styled_components.md"},l=void 0,i={unversionedId:"fidgetech-4-react/react-with-nosql/4323-styled-components",id:"fidgetech-4-react/react-with-nosql/4323-styled-components",title:"\ud83d\udcd3 4.3.2.3 Styled Components",description:"Up to this point, we've covered only two basic approaches to styling React applications:",source:"@site/docs/fidgetech-4-react/react-with-nosql/2c-styled-components.md",sourceDirName:"fidgetech-4-react/react-with-nosql",slug:"/fidgetech-4-react/react-with-nosql/4323-styled-components",permalink:"/fidgetech-4-react/react-with-nosql/4323-styled-components",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"\ud83d\udcd3 4.3.2.3 Styled Components",id:"4323-styled-components",slug:"4323-styled-components",hide_table_of_contents:!0,sidebar_position:21,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/2c_styled_components.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.3.2.2 Firestore Queries",permalink:"/fidgetech-4-react/react-with-nosql/4322-firestore-queries"},next:{title:"\u270f\ufe0f 4.3.3.1 Choose Your Own Adventure (Longer Project)",permalink:"/fidgetech-4-react/react-with-nosql/4331-choose-your-own-adventure-longer-project"}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Up to this point, we've covered only two basic approaches to styling React applications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"External stylesheets"),(0,r.kt)("li",{parentName:"ul"},"CSS objects")),(0,r.kt)("p",null,"While we generally don't recommend using external stylesheets with React, CSS objects are a very solid approach. Another very popular approach in the React community is to use an external library called ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components"),"."),(0,r.kt)("p",null,"We can add ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," to a project with the following ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install styled-components\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," has a unique approach to styling that makes it very easy for us to scope styles to specific elements."),(0,r.kt)("p",null,"Here's an example. Let's say we want the \"Help Queue\" header in our help queue application to have special styles attached to it. We can do the following with the ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," library:"),(0,r.kt)("div",{class:"filename"},"src/components/Header.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport styled from \'styled-components\';\n\nconst HelpQueueHeader = styled.h1`\n  font-size: 24px;\n  text-align: center;\n  color: white;\n`;\n\nfunction Header(){\n  return (\n    <React.Fragment>\n        <HelpQueueHeader>\n          Help Queue\n        </HelpQueueHeader>\n        <ul>\n          <li>\n            <Link to="/">Home</Link>\n          </li>\n          <li>\n            <Link to="/signin">Sign In</Link>\n          </li>\n        </ul>\n    </React.Fragment>\n  );\n}\n\nexport default Header;\n')),(0,r.kt)("p",null,"We start by importing ",(0,r.kt)("inlineCode",{parentName:"p"},"styled from 'styled-components';"),". Next, we create a variable that will hold our styles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const HelpQueueHeader = styled.h1`\n  font-size: 24px;\n  text-align: center;\n  color: white;\n`;\n")),(0,r.kt)("p",null,"In this case, we wanted a styled ",(0,r.kt)("inlineCode",{parentName:"p"},"h1"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"styled")," will always come before the styled element - think of it as being a property on ",(0,r.kt)("inlineCode",{parentName:"p"},"styled"),"."),(0,r.kt)("p",null,"Next, we put the actual CSS rules inside of backticks (`)."),(0,r.kt)("p",null,"Finally, we wrap the element we want to stylize in tags with the same variable name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n<HelpQueueHeader>\n  Help Queue\n</HelpQueueHeader>\n...\n")),(0,r.kt)("p",null,"If we run our application in the browser, our styles will be applied! Best of all, they will be scoped only to the code contained inside our tags."),(0,r.kt)("p",null,"You may wonder why our variable is capitalized (",(0,r.kt)("inlineCode",{parentName:"p"},"HelpQueueHeader"),"). Well, it's convention to capitalize component names - and ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," is actually taking our styles and turning them into a component called ",(0,r.kt)("inlineCode",{parentName:"p"},"HelpQueueHeader")," (you may have already guessed this from the library name)."),(0,r.kt)("p",null,"Let's look at one more example. Let's say that we want to wrap all of the code in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," component in a style. We could do the following:"),(0,r.kt)("div",{class:"filename"},"Header.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nconst StyledWrapper = styled.section`\n  background-color: orange;\n`;\n\nfunction Header(){\n  return (\n    <StyledWrapper>\n      ...\n    </StyledWrapper>\n  );\n}\n\n...\n")),(0,r.kt)("p",null,"We create a ",(0,r.kt)("inlineCode",{parentName:"p"},"StyledWrapper")," that we wrap around all the JSX code in our return statement. We don't even need to use a React fragment anymore because our code is already wrapped in our new stylized component."),(0,r.kt)("p",null,"This only scratches the surface of what we can do with ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components"),". We recommend using this library for styling going forward."),(0,r.kt)("p",null,"For more information on ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components"),", check out the library's ",(0,r.kt)("a",{parentName:"p",href:"https://styled-components.com/docs"},"excellent documentation"),"."))}u.isMDXComponent=!0}}]);