"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[13436],{30876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(2784);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},39861:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7896),r=(o(2784),o(30876));const a={title:"\ud83d\udcd3 3.2.0.5 Introduction to ASP.NET Core",id:"3205-introduction-to-aspnet-core",slug:"3205-introduction-to-aspnet-core",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/0e_introduction_to_asp_net_core_mvc.md"},i=void 0,s={unversionedId:"fidgetech-3-c-and-net/basic-web-applications/3205-introduction-to-aspnet-core",id:"fidgetech-3-c-and-net/basic-web-applications/3205-introduction-to-aspnet-core",title:"\ud83d\udcd3 3.2.0.5 Introduction to ASP.NET Core",description:"All of the C# apps we've created have run in the command line. Now it's time to start building C# web applications that run in the browser. We'll use a special web application framework called ASP.NET Core MVC to do this.",source:"@site/docs/fidgetech-3-c-and-net/basic-web-applications/0e-introduction-to-asp-net-core-mvc.md",sourceDirName:"fidgetech-3-c-and-net/basic-web-applications",slug:"/fidgetech-3-c-and-net/basic-web-applications/3205-introduction-to-aspnet-core",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3205-introduction-to-aspnet-core",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\ud83d\udcd3 3.2.0.5 Introduction to ASP.NET Core",id:"3205-introduction-to-aspnet-core",slug:"3205-introduction-to-aspnet-core",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/0e_introduction_to_asp_net_core_mvc.md"},sidebar:"fidgetech-3-c-and-net",previous:{title:"\ud83d\udcd3 3.2.0.4 How the Web Works: Developer Tools",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3204-how-the-web-works-developer-tools"},next:{title:"\ud83d\udcd3 3.2.0.6 How the Web Works: Server-Side Rendering",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3206-how-the-web-works-server-side-rendering"}},l={},c=[{value:".NET Frameworks",id:"net-frameworks",level:2},{value:"Resources for ASP.NET Core",id:"resources-for-aspnet-core",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All of the C# apps we've created have run in the command line. Now it's time to start building C# web applications that run in the browser. We'll use a special web application framework called ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET Core MVC")," to do this."),(0,r.kt)("p",null,"In the next few lessons, we'll learn more about the ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET Core MVC")," framework including its history, how it works, and how it follows a pattern called ",(0,r.kt)("strong",{parentName:"p"},"server-side MVC"),". Then we'll create a ",(0,r.kt)("em",{parentName:"p"},'"Hello World"')," web application."),(0,r.kt)("h2",{id:"net-frameworks"},".NET Frameworks"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Since 2000, .NET evolved to include three different implementations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".NET Framework"),(0,r.kt)("li",{parentName:"ul"},".NET Core"),(0,r.kt)("li",{parentName:"ul"},"Xamarin with Mono")),(0,r.kt)("p",null,"These implementations are called ",(0,r.kt)("strong",{parentName:"p"},"frameworks"),". While only one actually has ",(0,r.kt)("em",{parentName:"p"},'"framework"')," in its name, all three are indeed frameworks. The .NET Framework was the original implementation of .NET and was released in 2002. Mono was released in 2004 and .NET Core was released in 2016. Mono includes web and mobile development tools, whereas .NET Core focuses on web development."),(0,r.kt)("p",null,"Notably, Mono and .NET Core are both ",(0,r.kt)("strong",{parentName:"p"},"cross-platform implementations")," of the .NET Framework. This means they can run on multiple different operating systems, such as Mac OSX and Windows. Applications developed with the .NET Framework can only run on Windows. "),(0,r.kt)("p",null,'In 2020, Microsoft released .NET 5.0 as the new modern and standard framework. With the release of .NET 5, Microsoft sought to unify many disparate tools under one new name, ".NET", and ensure that all of these tools are cross-platform and open source. This unification project is ongoing today, and new features and tooling is continually being added to .NET. As of late 2022, .NET 7 is soon to be released and .NET 6 is the version that will be supported long-term by Microsoft. '),(0,r.kt)("p",null,'Note the naming for ".NET": there\'s no "framework" and no "core". So, what does this mean? Well, .NET versions 5 and up are based off of .NET Core, as well as tooling from Xamarin with Mono, because cross-platform development is standard in modern development. Quite simply, the folks at Microsoft decided to go with just ".NET" as the unified name for all of these tools.'),(0,r.kt)("p",null,'As noted above, the project of developing .NET (versions 5 and up) as the new standard is ongoing. For example, the release of .NET 5 did not replace the ".NET Framework" (for Windows development only), which still exists and it is different than ".NET":'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The .NET Framework is for software development on Windows only. As of late 2022 it's on version 4.8."),(0,r.kt)("li",{parentName:"ul"},".NET (starting with .NET 5) is cross-platform and open-source and is the new standard for .NET. ")),(0,r.kt)("p",null,"Down the line, the .NET Framework may be retired, but it may not be. So, we need to keep these naming differences in mind. "),(0,r.kt)("p",null,'Here\'s another naming convention to keep note of: even though the "Core" was dropped from ".NET", many of the tools we will use keep the word "Core". This is in order to avoid being confused with similarly-named packages. For example, we\'re using a specific implementation of .NET called ',(0,r.kt)("strong",{parentName:"p"},"ASP.NET CORE")," that lets us build web applications and APIs. Within ASP.NET Core there are many additional frameworks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ASP.NET Core MVC"),(0,r.kt)("li",{parentName:"ul"},"ASP.NET Core Razor Pages"),(0,r.kt)("li",{parentName:"ul"},"ASP.NET Core Blazor"),(0,r.kt)("li",{parentName:"ul"},"ASP.NET Core Web APIs"),(0,r.kt)("li",{parentName:"ul"},"And more!")),(0,r.kt)("p",null,"We'll be building web apps with ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET Core MVC"),", which is a ",(0,r.kt)("strong",{parentName:"p"},"server-side")," framework that follows the ",(0,r.kt)("strong",{parentName:"p"},"MVC")," (Model-View-Controller) pattern. In the next two lessons, we'll discuss server-side frameworks and MVCs. Then we'll create our first ASP.NET Core MVC web application together."),(0,r.kt)("h2",{id:"resources-for-aspnet-core"},"Resources for ASP.NET Core"),(0,r.kt)("hr",null),(0,r.kt)("p",null,".NET is often called a \"software development platform\" because it is made up of so many frameworks, languages, libraries, and tools. Moreover, we can build a LOT of different software with .NET. Because of this, it's easy to get confused with what's what. To alleviate confusion, we're going to list the names and versions of the tools we are going to use and link to resources. Fortunately, Microsoft has extensive documentation as well as a separate learning center, which helps newcomers get a hang of everything .NET!"),(0,r.kt)("p",null,"These are the tools we use in this course:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/?view=aspnetcore-6.0"},".NET 6")," as a software development platform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-6.0"},"ASP.NET Core MVC 6")," as a framework to build web apps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/"},"C# 10")," as a programming language.")),(0,r.kt)("p",null,"To get another introduction to .NET and everything we can do with this software development platform, check out this video:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet"},'"What is .NET"'))),(0,r.kt)("p",null,"To review what ASP.NET Core is and the tools it has for web development, check out the following documentation pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0"},"Overview of tools within ASP.NET Core 6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0"},"Introduction to ASP.NET Core 6"))))}u.isMDXComponent=!0}}]);