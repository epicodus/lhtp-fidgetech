"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[79030],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7896),r=(n(2784),n(30876));const i={title:"\ud83d\udcd3 2.2.0.19 Adding A Production Dependency: Bootstrap",id:"22019-adding-a-production-dependency-bootstrap",slug:"22019-adding-a-production-dependency-bootstrap",hide_table_of_contents:!0,sidebar_position:19,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/0s_adding_a_production_dependency.md"},a=void 0,s={unversionedId:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22019-adding-a-production-dependency-bootstrap",id:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22019-adding-a-production-dependency-bootstrap",title:"\ud83d\udcd3 2.2.0.19 Adding A Production Dependency: Bootstrap",description:"We're almost done setting up our environment. Let's finish up by adding a dependency for our production code: Bootstrap!",source:"@site/docs/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/0s-adding-a-production-dependency.md",sourceDirName:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript",slug:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22019-adding-a-production-dependency-bootstrap",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22019-adding-a-production-dependency-bootstrap",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"\ud83d\udcd3 2.2.0.19 Adding A Production Dependency: Bootstrap",id:"22019-adding-a-production-dependency-bootstrap",slug:"22019-adding-a-production-dependency-bootstrap",hide_table_of_contents:!0,sidebar_position:19,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/0s_adding_a_production_dependency.md"},sidebar:"fidgetech-2-intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.0.18 Improving Development by Linting Code",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22018-improving-development-by-linting-code"},next:{title:"\ud83d\udcd3 2.2.0.20 Configuration Reference, Suggested Workflows, and Optional Review",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22020-configuration-reference-suggested-workflows-and-optional-review"}},p={},d=[{value:"Bootstrap",id:"bootstrap",level:2},{value:"Installation",id:"installation",level:3}],l={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're almost done setting up our environment. Let's finish up by adding a dependency for our production code: Bootstrap! "),(0,r.kt)("p",null,"The following instructions should inform you on the general process for adding any other JavaScript or style library that's required for your project to function in production. There's ",(0,r.kt)("em",{parentName:"p"},"a lot")," to explore out there! While other libraries may require slightly different configurations, the process of installing a package and importing the code into ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," should remain the same."),(0,r.kt)("p",null,"By the end of this lesson, we'll have Bootstrap installed and configured in our project."),(0,r.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Since the full capabilities of Bootstrap requires both JS and CSS files, we'll need to be sure to include both files in our project to use Bootstrap's styles AND interactive components. "),(0,r.kt)("p",null,"Bootstrap relies on one dependency, Popper.js \u2014 but it is downloaded when installing Bootstrap ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/twbs/bootstrap/tree/v5.2.3"},"via its npm package"),". ",(0,r.kt)("a",{parentName:"p",href:"https://popper.js.org/"},"Popper.js")," is a tool that calculates the position of an element on the page, including pop ups and notifications. Bootstrap uses Popper.js for only some of its functionality, for example, dropdowns."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install Bootstrap, we're going to follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Bootstrap as a dependency, but not a dev dependency, because we'll use Bootstrap in production."),(0,r.kt)("li",{parentName:"ol"},"Import Bootstrap into the JS files you would like to use it in.")),(0,r.kt)("p",null,"The version of Bootstrap that we'll use in our project is Bootstrap version 5.2.3. If you prefer, you can explore Bootstrap's most recent version instead of using the pinned version below."),(0,r.kt)("p",null,"In the root of the Shape Tracker directory, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm install bootstrap@5.2.3\n")),(0,r.kt)("p",null,"If we open up ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," we can see that Bootstrap have been added to our list of dependencies:"),(0,r.kt)("div",{class:"filename"},"package.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "dependencies": {\n    "bootstrap": "^5.2.3",\n  }\n  ...\n}\n')),(0,r.kt)("p",null,"Now all we need to do is import Bootstrap into ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," so that it will be included in our bundle:"),(0,r.kt)("div",{class:"filename"},"src/index.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\n")),(0,r.kt)("p",null,"That takes care of adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," files for Bootstrap. Now we need to import the CSS files. We are going to work with the minified CSS for Bootstrap. To do that we simply add another import statement to ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,r.kt)("div",{class:"filename"},"src/index.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In order for both your Bootstrap styles ",(0,r.kt)("em",{parentName:"p"},"and")," your custom styles to render properly, make sure to place the ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.css")," import ",(0,r.kt)("em",{parentName:"p"},"after")," the bootstrap import statements. This enables our custom styles to override Bootstrap styles where necessary. This is exactly what we did previously with our scripts prior to using webpack and npm. "),(0,r.kt)("p",null,"With these configurations in place, we can now use Bootstrap in our projects!"))}u.isMDXComponent=!0}}]);