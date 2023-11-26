"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[84204],{30876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var r=o(2784);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return o?r.createElement(g,a(a({ref:t},p),{},{components:o})):r.createElement(g,a({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},46026:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7896),n=(o(2784),o(30876));const i={title:"\ud83d\udcd3 1.2.0.5 Using the DevTools Console for Practice and Pair Programming",id:"1205-using-the-devtools-console-for-practice-and-pair-programming",slug:"1205-using-the-devtools-console-for-practice-and-pair-programming",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/0e_using_devtools_for_practice_and_pair_programming.md"},a=void 0,s={unversionedId:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1205-using-the-devtools-console-for-practice-and-pair-programming",id:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1205-using-the-devtools-console-for-practice-and-pair-programming",title:"\ud83d\udcd3 1.2.0.5 Using the DevTools Console for Practice and Pair Programming",description:"We'll be using the DevTools console to try out JavaScript code. In this lesson, we'll cover the expectations and tips for using the DevTools console in personal coding practice and in pair/team programming.",source:"@site/docs/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/0e-using-devtools-for-practice-and-pair-programming.md",sourceDirName:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers",slug:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1205-using-the-devtools-console-for-practice-and-pair-programming",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1205-using-the-devtools-console-for-practice-and-pair-programming",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\ud83d\udcd3 1.2.0.5 Using the DevTools Console for Practice and Pair Programming",id:"1205-using-the-devtools-console-for-practice-and-pair-programming",slug:"1205-using-the-devtools-console-for-practice-and-pair-programming",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/0e_using_devtools_for_practice_and_pair_programming.md"},sidebar:"fidgetech-1-introduction-to-programming",previous:{title:"\ud83d\udcd3 1.2.0.4 Accessing and Configuring the Browser DevTools Console",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1204-accessing-and-configuring-the-browser-devtools-console"},next:{title:"\ud83d\udcd3 1.2.0.6 JavaScript Data Types",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1206-javascript-data-types"}},l={},c=[{value:"Using the DevTools to Practice JavaScript",id:"using-the-devtools-to-practice-javascript",level:2},{value:"General Tips for Pairing",id:"general-tips-for-pairing",level:3},{value:"Tips for Pairing Remotely",id:"tips-for-pairing-remotely",level:3},{value:"DevTools Are The Best Friends of JavaScript Developers",id:"devtools-are-the-best-friends-of-javascript-developers",level:2},{value:"You can quickly try out JavaScript code.",id:"you-can-quickly-try-out-javascript-code",level:3},{value:"You can read the errors and warnings.",id:"you-can-read-the-errors-and-warnings",level:3},{value:"You will get to know your new best friend!",id:"you-will-get-to-know-your-new-best-friend",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We'll be using the DevTools console to try out JavaScript code. In this lesson, we'll cover the expectations and tips for using the DevTools console in personal coding practice and in pair/team programming."),(0,n.kt)("h2",{id:"using-the-devtools-to-practice-javascript"},"Using the DevTools to Practice JavaScript"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Whether you are working alone or pairing with another student or instructor, ",(0,n.kt)("strong",{parentName:"p"},"always keep your DevTools console open when you are working through the lessons.")," You should do this throughout the remainder of the Intro to Programming and Intermediate JavaScript courses. Why? As you read through a lesson, you can use the console to simultaneously try out the JavaScript (JS) code you are being shown. "),(0,n.kt)("p",null,"The image below is an example of working through the upcoming lesson on JavaScript arithmetic with the console open: on the left is the lesson with practice prompts, and on the right is the DevTools console with JavaScript arithmetic entered into it. Yes \u2014 ",(0,n.kt)("inlineCode",{parentName:"p"},"4 - 3;")," is JavaScript arithmetic, and the value ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," is the answer! In this way we can get immediate practice and feedback with the new JS concepts we are learning."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/working-with-devtools-open.png",alt:"In this image, the lesson is prompting the student to practice some arithmetic, and the DevTools console is open and the student is doing just that!"})),(0,n.kt)("h3",{id:"general-tips-for-pairing"},"General Tips for Pairing"),(0,n.kt)("p",null,"When you are using the console to test out JavaScript, make sure to continue switch who's driving and who's observing regularly. When trying out new JavaScript concepts, we suggest switching roles more often than the 20 \u2013 30 minutes we usually suggest. If there's a practice lesson with multiple JavaScript exercises, it's best to switch roles between each exercise. Take this practice lesson for example:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/devtools-and-pairing.png",alt:"This practice lesson is from the arithmetic exercises. It shows many different prompts for addition, subtraction, multiplication, etc. Find the exercises at this location:  https://old.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/practice-arithmetic"})),(0,n.kt)("h3",{id:"tips-for-pairing-remotely"},"Tips for Pairing Remotely"),(0,n.kt)("p",null,"If you are pairing and using the DevTools while remote, we suggest that you screen share your browser window and increase the size of the text in the DevTools window so that your pair can read your console easily. The following picture is an example of this, where the browser window is full screen, and the DevTools console text has been increased so that it is easy to read:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/increasing-devtools-font-for-readability.png",alt:"This image shows a browser window that is full screen and opened to a LHTP lesson. The DevTools console is also open and the text size is increased so it is really easy to read."})),(0,n.kt)("p",null,"We suggest that everyone in a pair or group have their browser window open to the relevant LearnHowToProgram.com (LHTP) lesson and their DevTools open to the console tab. When it is time for you to observe, simply watch your pair's screen share on Discord. When it is time for you to drive, your pair(s) should watch your screen share on Discord while you type in your DevTools console. "),(0,n.kt)("h2",{id:"devtools-are-the-best-friends-of-javascript-developers"},"DevTools Are The Best Friends of JavaScript Developers"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We can't emphasize this enough: our absolute best advice to you is to always work with your DevTools console open. Let's review why."),(0,n.kt)("h3",{id:"you-can-quickly-try-out-javascript-code"},"You can quickly try out JavaScript code."),(0,n.kt)("p",null,"Whether it's code that you are reading about in lessons or in online references, or code that you are writing in VS Code, the JavaScript console quickly allows you to try it out."),(0,n.kt)("h3",{id:"you-can-read-the-errors-and-warnings"},"You can read the errors and warnings."),(0,n.kt)("p",null,"A lot of issues with your JavaScript code will show up as an error or warning in the DevTools console. We first learned about this when we learned about the DevTools console in ",(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/debugging-html-and-css"},"Debugging HTML and CSS"),", and we'll revisit this at different points in this section. We'll cover common errors that pop up, and what they mean. There's also a lot that we won't cover. So, whenever you see something new in your JavaScript console, make sure that you:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Read the error/warning.")," Even though most messages won't make sense to you at first, reading the message will help you practice  common errors and terminology. When paired with solutions and the context of the issue, you'll quickly become better at debugging."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Do a quick Google search to learn what the message means."),"\nIf none of the search results make sense to you, that's okay \u2014 it's still good to practice writing search queries and reading about solutions to the error/warning you are facing."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Reach out to your cohort and teacher on Discord for help"),". The more discussion, the better! And since everyone's working through the same material, it's likely that someone else has run into the same issue already. If you encounter a new error/warning and have found a fix for it, please share it with your cohort."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Take notes.")," Note taking improves your processing and recall for the error/warning message, including what caused it and what solved it.")),(0,n.kt)("h3",{id:"you-will-get-to-know-your-new-best-friend"},"You will get to know your new best friend!"),(0,n.kt)("p",null,"Part of becoming proficient with DevTools is using them. This includes actively watching other people use DevTools. It will take time to get a hang of it all, so be patient with yourself, and ask questions when you get stuck. Your questions could be about navigating or using the tools, or about understanding error messages that come up. Don't be shy in speaking up!"),(0,n.kt)("p",null,"As you continue through this section, use this lesson as a reference on how to use the DevTools console. If you are having any issues, share your questions with your cohort and teacher."))}h.isMDXComponent=!0}}]);