"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[95948],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const i={title:"\u270f\ufe0f 2.2.2.1 Test It Out, Sudoku Checker, Project Euler",id:"2221-test-it-out-sudoku-checker-project-euler",slug:"2221-test-it-out-sudoku-checker-project-euler",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/2a_classwork_test_it_out_sudoku_checker_project_euler.md"},a=void 0,l={unversionedId:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2221-test-it-out-sudoku-checker-project-euler",id:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2221-test-it-out-sudoku-checker-project-euler",title:"\u270f\ufe0f 2.2.2.1 Test It Out, Sudoku Checker, Project Euler",description:"Goal: Use test-driven development to write your business logic. Practice using Jest to run your unit tests. Aim for 100% coverage of your code. Continue using webpack.",source:"@site/docs/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2a-classwork-test-it-out-sudoku-checker-project-euler.md",sourceDirName:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript",slug:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2221-test-it-out-sudoku-checker-project-euler",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2221-test-it-out-sudoku-checker-project-euler",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"\u270f\ufe0f 2.2.2.1 Test It Out, Sudoku Checker, Project Euler",id:"2221-test-it-out-sudoku-checker-project-euler",slug:"2221-test-it-out-sudoku-checker-project-euler",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/2a_classwork_test_it_out_sudoku_checker_project_euler.md"},sidebar:"fidgetech-2-intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.1.11 Asking and Listening",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22111-asking-and-listening"},next:{title:"\ud83d\udcd3 2.2.2.2 Introduction to ES6",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/2222-introduction-to-es6"}},s={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Test It Out",id:"test-it-out",level:3},{value:"Challenging: Sudoku Checker",id:"challenging-sudoku-checker",level:3},{value:"Testing and Solving Project Euler Problems",id:"testing-and-solving-project-euler-problems",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal"),": Use test-driven development to write your business logic. Practice using Jest to run your unit tests. Aim for 100% coverage of your code. Continue using webpack."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Describe the Red-Green-Refactor workflow. How can this workflow help us write good code?"),(0,o.kt)("li",{parentName:"ul"},"What is Jest? Why is unit testing important?"),(0,o.kt)("li",{parentName:"ul"},"How can Jest's ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeEach()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"afterEach()")," functions improve our tests?")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Pick one of the following projects to complete. Once you finish it, move onto another project. "),(0,o.kt)("h3",{id:"test-it-out"},"Test It Out"),(0,o.kt)("p",null,"Choose an application you built in Intro (such as Roman Numeral, Pig Dice, or Triangle Tracker) and refactor the application to include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use of npm to manage packages, webpack to bundle code, and ESLint to lint code. If you are installing and configuring these dependencies from scratch, make sure to create your ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," first!"),(0,o.kt)("li",{parentName:"ul"},"Complete unit tests for all business logic using TDD and Jest. Aim for 100% test coverage."),(0,o.kt)("li",{parentName:"ul"},"Complete separation of logic (UI logic in one file, business logic in another). You may even need to refactor some of your logic to make it more testable! If you aren't able to test UI logic, consider ways that logic could be refactored and moved into your business logic file.")),(0,o.kt)("p",null,"Practice with Jest and testing is your top priority!"),(0,o.kt)("h3",{id:"challenging-sudoku-checker"},"Challenging: Sudoku Checker"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://simple.wikipedia.org/wiki/Sudoku"},"Sudoku")," is a game where players must fill in a 9 x 9 board with the numbers 1 through 9. The Sudoku board looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/javascript-new/sudoku-board-example.png",alt:"sudoku-board-example"})),(0,o.kt)("p",null,"Create an application that checks if a completed Sudoku puzzle is \u201clegal.\u201d In other words, it should ensure the following rules are met:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each row contains all numbers from 1 to 9 with no repeats."),(0,o.kt)("li",{parentName:"ul"},"Each column contains all numbers from 1 to 9 with no repeats."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Further Exploration:")," Each of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats.")),(0,o.kt)("p",null,"Your application should include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use of npm to manage packages, webpack to bundle code, and ESLint to lint code. If you are installing and configuring these dependencies from scratch, make sure to create your ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," first!"),(0,o.kt)("li",{parentName:"ul"},"Complete unit tests for all business logic using TDD and Jest. Aim for 100% test coverage."),(0,o.kt)("li",{parentName:"ul"},"Complete separation of logic (UI logic in one file, business logic in another).")),(0,o.kt)("p",null,"You should focus on creating the business logic using TDD and Jest ",(0,o.kt)("strong",{parentName:"p"},"before")," implementing any user interface logic. "),(0,o.kt)("h3",{id:"testing-and-solving-project-euler-problems"},"Testing and Solving Project Euler Problems"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://projecteuler.net/archives"},"Project Euler")," is an archive of math problems that can be solved using programming languages such as JavaScript. The difficulty of these problems ranges from fairly simple to extremely challenging. Try solving a few Project Euler problems, taking care to fully test your code. You do ",(0,o.kt)("strong",{parentName:"p"},"not")," need to implement user interface logic to solve these problems; instead, focus on business logic and unit testing. Once your business logic is complete, you may work on your user interface logic."),(0,o.kt)("p",null,"Your application should include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use of npm to manage packages, webpack to bundle code, and ESLint to lint code. If you are installing and configuring these dependencies from scratch, make sure to create your ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," first!"),(0,o.kt)("li",{parentName:"ul"},"Complete unit tests for all business logic using TDD and Jest. Aim for 100% test coverage."),(0,o.kt)("li",{parentName:"ul"},"Complete separation of logic (UI logic in one file, business logic in another). ")),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tests were committed before code."),(0,o.kt)("li",{parentName:"ul"},"Business logic has 100% line coverage with Jest."),(0,o.kt)("li",{parentName:"ul"},"Dependencies are managed with npm."),(0,o.kt)("li",{parentName:"ul"},"webpack is used to lint, bundle, and process code.")))}d.isMDXComponent=!0}}]);