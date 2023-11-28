"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48265],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const a={title:"\ud83d\udcd3 2.3.3.3 Pull Requests and Submitting Great Work",id:"2333-pull-requests-and-submitting-great-work",slug:"2333-pull-requests-and-submitting-great-work",hide_table_of_contents:!0,sidebar_position:26,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/3c_pull_requests_and_submitting_great_work.md"},i=void 0,s={unversionedId:"fidgetech-2-intermediate-javascript/asynchrony-and-apis/2333-pull-requests-and-submitting-great-work",id:"fidgetech-2-intermediate-javascript/asynchrony-and-apis/2333-pull-requests-and-submitting-great-work",title:"\ud83d\udcd3 2.3.3.3 Pull Requests and Submitting Great Work",description:"Coding in the Real World",source:"@site/docs/fidgetech-2-intermediate-javascript/asynchrony-and-apis/3c-pull-requests-and-submitting-great-work.md",sourceDirName:"fidgetech-2-intermediate-javascript/asynchrony-and-apis",slug:"/fidgetech-2-intermediate-javascript/asynchrony-and-apis/2333-pull-requests-and-submitting-great-work",permalink:"/fidgetech-2-intermediate-javascript/asynchrony-and-apis/2333-pull-requests-and-submitting-great-work",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"\ud83d\udcd3 2.3.3.3 Pull Requests and Submitting Great Work",id:"2333-pull-requests-and-submitting-great-work",slug:"2333-pull-requests-and-submitting-great-work",hide_table_of_contents:!0,sidebar_position:26,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/3c_pull_requests_and_submitting_great_work.md"},sidebar:"fidgetech-2-intermediate-javascript",previous:{title:"\ud83d\udcd3 2.3.3.2 Further Exploration: Chaining Promises",permalink:"/fidgetech-2-intermediate-javascript/asynchrony-and-apis/2332-further-exploration-chaining-promises"},next:{title:"\ud83d\udcd3 2.3.3.4 Sprucing Up Your GitHub",permalink:"/fidgetech-2-intermediate-javascript/asynchrony-and-apis/2334-sprucing-up-your-github"}},l={},u=[{value:"Coding in the Real World",id:"coding-in-the-real-world",level:2},{value:"Working with Senior Devs",id:"working-with-senior-devs",level:3},{value:"Working on Existing Code",id:"working-on-existing-code",level:3},{value:"Pull Requests and Code Reviews",id:"pull-requests-and-code-reviews",level:2},{value:"Overarching Principle",id:"overarching-principle",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"coding-in-the-real-world"},"Coding in the Real World"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Outside of Epicodus, developers don't generally work in pairs on a daily basis, although some companies use pair programming (or even mob programming) frequently. But they usually don't work entirely alone either. Instead, they work in small, specialized teams dedicated to one issue or project. But how does code get created in teams? While workflows differ, we'll discuss how software development generally works in a dev team."),(0,o.kt)("h3",{id:"working-with-senior-devs"},"Working with Senior Devs"),(0,o.kt)("p",null,"Many teams follow the junior/senior dev hierarchy. (In some cases, teams may include mid-level developers too). Less experienced developers are ",(0,o.kt)("strong",{parentName:"p"},"juniors")," and seasoned developers with years of experience are ",(0,o.kt)("strong",{parentName:"p"},"seniors"),". In fact, if you're working on an open source project, you may be working with designated ",(0,o.kt)("strong",{parentName:"p"},"maintainers")," of the codebase that are essentially fulfilling the same job as a senior dev."),(0,o.kt)("h3",{id:"working-on-existing-code"},"Working on Existing Code"),(0,o.kt)("p",null,"Development teams almost always work on existing codebases, not new projects begun from scratch. These codebases may contain ",(0,o.kt)("strong",{parentName:"p"},"legacy code"),", which is code that may not be compatible with newer updates or may utilize outdated technologies or methods. It's not always possible to revamp a large project completely, especially in an agile environment."),(0,o.kt)("p",null,"This means you'll need to learn how to jump into existing code quickly while ensuring any changes you make don't break features already finished and deployed. Imagine merging the cool-yet-niche feature you have been working on, only to get a frantic message that something important is now intensely broken! That's a bad day at the office, right?"),(0,o.kt)("p",null,"For this very reason, ",(0,o.kt)("strong",{parentName:"p"},"code reviews")," should occur on all ",(0,o.kt)("strong",{parentName:"p"},"pull requests"),". Code reviews at Epicodus are modeled after reviews in the workplace. So let's learn a little more about them!"),(0,o.kt)("h2",{id:"pull-requests-and-code-reviews"},"Pull Requests and Code Reviews"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"An existing codebase will likely have several branches \u2014 a main branch, a development branch, and various feature branches. Say you're tasked with integrating a calendar into an existing application. To do so, you must add a ",(0,o.kt)("inlineCode",{parentName:"p"},"startTime")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"Calendar")," objects. However, you wouldn't add this code to either the main branch (you don't want to break the code in production) or the development branch. Instead, you'd create a feature branch for the code. The next step would be to write (and test) the code in this branch. But then what happens once you are done?"),(0,o.kt)("p",null,"Well, in order to catch any conflicts with existing code or other potential issues, the next step is to submit a pull request. A ",(0,o.kt)("strong",{parentName:"p"},"pull request"),' is a request to "pull" your new code into the main (or development) version of the existing codebase. When you submit a pull request, a senior developer (or equivalent) reviews the new code carefully, offering comments with constructive feedback or detailing any potential issues. '),(0,o.kt)("p",null,"If your code is accepted, the pull request will be merged into the codebase. If more revision is needed, your senior developer will likely reject your pull request and may ask you to review code according to feedback. If the new feature being implemented affects many other areas of the codebase, your pull request may be reviewed by more than one senior dev."),(0,o.kt)("p",null,"Pull requests can be intimidating but they don't have to be! Here are tips for making a successful first pull request."),(0,o.kt)("h3",{id:"overarching-principle"},"Overarching Principle"),(0,o.kt)("p",null,"Your primary goal is to minimize the amount of time your senior must spend reviewing your work. "),(0,o.kt)("p",null,"This does ",(0,o.kt)("strong",{parentName:"p"},"not")," mean you should avoid doing work, developing new features, and so on! It ",(0,o.kt)("strong",{parentName:"p"},"does")," mean you should spend time making your code DRY, clear, and efficient. An experienced developer can quickly tell the amount you have accomplished and how polished your code is. Similarly, an Epicodus teacher can quickly differentiate a fantastic project from a mediocre one. Your code must be error free, complete, and easy to evaluate. It should be as perfect as you can reasonably get it."),(0,o.kt)("p",null,"The less time a senior developer needs to spend fixing your code, the more valuable you are as an employee. Conversely, the more time your senior developer has to spend pointing out bad code, bugs, flaws, projects that don't build, commits that mix up broken and working code, typos, missing tests, tests that don't pass, forgotten API keys, obvious copy/pasting, and so on, the ",(0,o.kt)("strong",{parentName:"p"},"less")," valuable you'll be as an employee because you need ",(0,o.kt)("strong",{parentName:"p"},"more")," supervision. Supervision takes time. Time costs money. This is especially important if you or your senior developer are blocked from completing additional work while your pull request is pending. Stand out through your consistency, simplicity, and hard work."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"One feature per pull request")," (One feature per commit). Avoid rolling fixes on different issues into one commit (and therefore one pull request). It's easier for your senior developer to review code if they know it's dedicated to fixing one issue or implementing one feature. Imagine a commit containing both working and broken code! A nightmare to unravel \u2014 and you will likely be tasked with redoing it. Redoing means that you are costing your employer money. Make separate commits instead.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Write clear code documentation.")," Make clear Git commit messages and clear comments for confusing code segments. But do not bury your code in a wall of comments, either. Comments should stand out and serve a purpose. Ideally, well-written code with well-named variables, parameters and function names should be self-documenting \u2014 no comments needed!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Carefully review code for scalability.")," What happens if I try to add a new property or functionality to an object? Or add a second type of event that needs a different kind of calendar? Should I already be thinking of an end date? These are the things your senior will notice. Make sure you ",(0,o.kt)("em",{parentName:"p"},"indicate that you have been thinking about these issues"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Review your code")," for typos, inconsistencies in naming, spacing, indentation, and formatting."))),(0,o.kt)("p",null,"If your pull request is rejected:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Don't get angry"),", focus on your self-perceived inadequacies, or quit your job. It's not personal, it's about maintaining the integrity of the codebase to prevent issues down the line.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Read the feedback carefully")," before implementing recommended changes. Understand what you are being asked to do and why.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ask for additional explanations")," from your senior developer if their explanations are not 100% clear.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Try to continually improve the code's quality.")," Do not compare yourself to others in your team. Focus instead on understanding what you must learn to improve and advance. Ask for guidance from your team to pinpoint specific areas for improvement."))),(0,o.kt)("p",null,"We strongly recommend ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/turbine-labs/theres-no-hell-in-team-4f5d6f3ff511"},"this enlightening blog post")," by Portland Developer Relations Manager Brook Shelley. It covers many topics, not just pull requests, and is a quick, insightful, and entertaining read!"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"During your time at Epicodus")),": Try and implement the guidelines for effective pull requests described above into your individual work and group projects as much as possible. Focus on making your projects quick and efficient to grade. You can do this by having a thorough commit history, commenting as needed, making sure you have a great README, and treating the instructors reviewing your code as if they are senior devs looking at a pull request \u2014 which means you should have high standards for the work you submit."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"During your internship or job")),": Ask if there are any specific things you should know about your workflow or submitting pull requests before you submit your first PR."))}c.isMDXComponent=!0}}]);