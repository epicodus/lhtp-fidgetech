"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[90560],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(7896),i=(r(2784),r(30876));const a={title:"\ud83d\udcd3 2.2.1.2 TDD Review",id:"2212-tdd-review",slug:"2212-tdd-review",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/1b_tdd_review.md"},o=void 0,s={unversionedId:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2212-tdd-review",id:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2212-tdd-review",title:"\ud83d\udcd3 2.2.1.2 TDD Review",description:"We learned about the basics of Test-Driven Development in Introduction to Programming. So far, we have used the basic principles of TDD to help organize and plan our code \u2014 but we aren't actually executing any tests yet. Well, we're about to start doing that!",source:"@site/docs/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/1b-tdd-review.md",sourceDirName:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript",slug:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2212-tdd-review",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2212-tdd-review",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"\ud83d\udcd3 2.2.1.2 TDD Review",id:"2212-tdd-review",slug:"2212-tdd-review",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/1b_tdd_review.md"},sidebar:"fidgetech-2-intermediate-javascript",previous:{title:"\u270f\ufe0f 2.2.1.1 webpack and npm Practice",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2211-webpack-and-npm-practice"},next:{title:"\ud83d\udcd3 2.2.1.3 Red Green Refactor Workflow",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2213-red-green-refactor-workflow"}},l={},d=[{value:"The Benefits of Test-Driven Development",id:"the-benefits-of-test-driven-development",level:2},{value:"TDD Helps Us Create a Plan",id:"tdd-helps-us-create-a-plan",level:3},{value:"It&#39;s Easier to Tackle Complex Problems",id:"its-easier-to-tackle-complex-problems",level:3},{value:"It Prevents Errors and Makes Bugs Easier to Locate",id:"it-prevents-errors-and-makes-bugs-easier-to-locate",level:3},{value:"It Allows Us to Create Projects Faster",id:"it-allows-us-to-create-projects-faster",level:3},{value:"New Features Are Built Upon Reliable Code",id:"new-features-are-built-upon-reliable-code",level:3},{value:"It Keeps Code DRY",id:"it-keeps-code-dry",level:3},{value:"It&#39;s Employable",id:"its-employable",level:3},{value:"Writing Coded Tests",id:"writing-coded-tests",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We learned about the basics of ",(0,i.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/lessons/overview-of-test-driven-development-tdd-with-text-analyzer"},"Test-Driven Development")," in Introduction to Programming. So far, we have used the basic principles of TDD to help organize and plan our code \u2014 but we aren't actually executing any tests yet. Well, we're about to start doing that!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"At this point, you will no longer need to add pseudocode tests in your READMEs.")," That was practice for writing actual tests which we can run with software, and that's exactly what we're about to start doing with Jest!"),(0,i.kt)("h2",{id:"the-benefits-of-test-driven-development"},"The Benefits of Test-Driven Development"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before we move on to learning more about the testing workflow and using Jest, let's look at all the advantages of TDD and why it's so helpful to the development process."),(0,i.kt)("h3",{id:"tdd-helps-us-create-a-plan"},"TDD Helps Us Create a Plan"),(0,i.kt)("p",null,"By taking time to think through a program, identify behaviors, and tackle the simplest first, we're creating a game plan. We are laying out each step we need to take in detail, which leads to the next benefit."),(0,i.kt)("h3",{id:"its-easier-to-tackle-complex-problems"},"It's Easier to Tackle Complex Problems"),(0,i.kt)("p",null,"Even the most experienced coders can struggle with approaching complex issues. By identifying and testing the smallest possible behavior at a time, we can take baby steps towards solving bigger problems."),(0,i.kt)("h3",{id:"it-prevents-errors-and-makes-bugs-easier-to-locate"},"It Prevents Errors and Makes Bugs Easier to Locate"),(0,i.kt)("p",null,"When we implement and test a single behavior at a time, we're preventing errors. Testing each behavior before moving on allows us to spot bugs as soon as they're introduced."),(0,i.kt)("p",null,"Without TDD, we might not spot some of these bugs until they break our application. To make matters worse, if we add more code after introducing a bug, other parts of our application will likely be reliant on our buggy code. To resolve this issue, we'd need to locate the bug, resolve it, and potentially alter all the code that depends on the buggy code. That's a lot of work."),(0,i.kt)("h3",{id:"it-allows-us-to-create-projects-faster"},"It Allows Us to Create Projects Faster"),(0,i.kt)("p",null,"Starting a complex project can be daunting. Even if we aren't sure how to code the more difficult features of our application, we can hit the ground running by implementing smaller, identifiable functionality. As we work, the bigger picture will come into focus."),(0,i.kt)("h3",{id:"new-features-are-built-upon-reliable-code"},"New Features Are Built Upon Reliable Code"),(0,i.kt)("p",null,"By testing functionality as it's implemented and ensuring previous tests still pass when new functionality is introduced, new features are always built on a foundation of reliable, tested code."),(0,i.kt)("h3",{id:"it-keeps-code-dry"},"It Keeps Code DRY"),(0,i.kt)("p",null,"By implementing the least amount of code to pass each test, we keep our code DRY. By approaching each piece of our project's functionality individually, we are likely to write more modular code. Modular code is easier to maintain, update, and debug."),(0,i.kt)("h3",{id:"its-employable"},"It's Employable"),(0,i.kt)("p",null,"Testing is an important part of the tech industry and many tech careers rely on it \u2014 ranging from developers and QA testers to devops specialists and site reliability engineers."),(0,i.kt)("h2",{id:"writing-coded-tests"},"Writing Coded Tests"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Up to this point, we've written pseudocode tests and then manually checked to see if our code works. This is a time-consuming and unrealistic way to test our code \u2014 and it's not what professionals do. "),(0,i.kt)("p",null,"Now we're ready to level up our TDD skills by writing automated tests for each behavior. While writing coded tests may take longer at first, we'll be able to test all of our program's behaviors with a single command."))}u.isMDXComponent=!0}}]);