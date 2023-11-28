"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[75955],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const i={title:"\ud83d\udcd3 3.6.1.3 Configuring Application URLs to Run Two ASP.NET Core Applications",id:"3613-configuring-application-urls-to-run-two-aspnet-core-applications",slug:"3613-configuring-application-urls-to-run-two-aspnet-core-applications",hide_table_of_contents:!0,sidebar_position:15,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/1c_running_two_applications.md"},a=void 0,l={unversionedId:"fidgetech-3-c-and-net/building-an-api/3613-configuring-application-urls-to-run-two-aspnet-core-applications",id:"fidgetech-3-c-and-net/building-an-api/3613-configuring-application-urls-to-run-two-aspnet-core-applications",title:"\ud83d\udcd3 3.6.1.3 Configuring Application URLs to Run Two ASP.NET Core Applications",description:"Over the next few days, we'll build an application that will make calls to the API we built in the first part of this section. In order to do this, we'll need to have two applications running simultaneously. However, if we try running two applications on the same port, we'll get the following error:",source:"@site/docs/fidgetech-3-c-and-net/building-an-api/1c-running-two-applications.md",sourceDirName:"fidgetech-3-c-and-net/building-an-api",slug:"/fidgetech-3-c-and-net/building-an-api/3613-configuring-application-urls-to-run-two-aspnet-core-applications",permalink:"/fidgetech-3-c-and-net/building-an-api/3613-configuring-application-urls-to-run-two-aspnet-core-applications",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"\ud83d\udcd3 3.6.1.3 Configuring Application URLs to Run Two ASP.NET Core Applications",id:"3613-configuring-application-urls-to-run-two-aspnet-core-applications",slug:"3613-configuring-application-urls-to-run-two-aspnet-core-applications",hide_table_of_contents:!0,sidebar_position:15,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/1c_running_two_applications.md"},sidebar:"fidgetech-3-c-and-net",previous:{title:"\u270f\ufe0f 3.6.1.2 Building an API Part 1",permalink:"/fidgetech-3-c-and-net/building-an-api/3612-building-an-api-part-1"},next:{title:"\u270f\ufe0f Building an API Part 2 (day 2)",permalink:"/fidgetech-3-c-and-net/building-an-api/building-an-api-part-2-day-2"}},s={},p=[{value:"Changing Port Numbers in <code>Properties/launchSettings.json</code>",id:"changing-port-numbers-in-propertieslaunchsettingsjson",level:2},{value:"Configuring <code>WebHost.UseUrls()</code>",id:"configuring-webhostuseurls",level:2},{value:"Choose Your Preferred Port Numbers",id:"choose-your-preferred-port-numbers",level:2},{value:"The Ports We&#39;ll Use in the Cretaceous Park Example Projects",id:"the-ports-well-use-in-the-cretaceous-park-example-projects",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Over the next few days, we'll build an application that will make calls to the API we built in the first part of this section. In order to do this, we'll need to have two applications running simultaneously. However, if we try running two applications on the same port, we'll get the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Unhandled Exception: System.IO.IOException: Failed to bind to address https://127.0.0.1:5001: address already in use. ---\x3e Microsoft.AspNetCore.Connections.AddressInUseException: Address already in use ---\x3e System.Net.Sockets.SocketException: Address already in use\n")),(0,o.kt)("p",null,"Fortunately, this is easy to fix. We just need to specify a different port number for one of the applications we are running."),(0,o.kt)("p",null,"There are many ways to do this. We'll list two simple configurations here."),(0,o.kt)("h2",{id:"changing-port-numbers-in-propertieslaunchsettingsjson"},"Changing Port Numbers in ",(0,o.kt)("inlineCode",{parentName:"h2"},"Properties/launchSettings.json")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In our ASP.NET Core projects, we can add a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties/launchSettings.json")," with a number of configurations on how we want to run our projects: in what environment? What port number? Should a browser window be launched? Projects that are scaffolded with the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," command come with these files. Here's a code snippet from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties/launchSettings.json")," file:"),(0,o.kt)("div",{class:"filename"},"Properties/launchSettings.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "project_name_here": {\n      "commandName": "Project",\n      "launchBrowser": true,\n      "applicationUrl": "https://localhost:5001;http://localhost:5000",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    }\n')),(0,o.kt)("p",null,"Well, for our application to listen on a different port, we can simply update the ",(0,o.kt)("inlineCode",{parentName:"p"},'"applicationUrl"')," to specify different ports such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"https://localhost:5003;http://localhost:5004"'),". "),(0,o.kt)("h2",{id:"configuring-webhostuseurls"},"Configuring ",(0,o.kt)("inlineCode",{parentName:"h2"},"WebHost.UseUrls()")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Alternatively, we can update our ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," file to specify a port number via ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.hosting.hostingabstractionswebhostbuilderextensions.useurls?view=aspnetcore-6.0"},(0,o.kt)("inlineCode",{parentName:"a"},"builder.WebHost.UseUrls()")),":"),(0,o.kt)("div",{class:"filename"},"Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\nWebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\nbuilder.WebHost.UseUrls("http://*:8080");    \n\n...\n')),(0,o.kt)("h2",{id:"choose-your-preferred-port-numbers"},"Choose Your Preferred Port Numbers"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can pick whatever port numbers that you prefer. You may run into conflicts if you pick a port number that's already in use, like our MySQL server running on port 3306. If we try to use port 3306 and run our API, we'll get an error message similar to the following one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Unable to bind to http://localhost:3306 on the IPv6 loopback interface: 'An attempt was made to access a socket in a way forbidden by its access permissions.'.\n")),(0,o.kt)("h3",{id:"the-ports-well-use-in-the-cretaceous-park-example-projects"},"The Ports We'll Use in the Cretaceous Park Example Projects"),(0,o.kt)("p",null,"In the Cretaceous Park API example project, we'll assume the ports are ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:5001")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),". As noted in an earlier lesson, we'll use HTTP in development, so we'll make all requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),"."),(0,o.kt)("p",null,"For the Cretaceous Park Client (that we'll create in upcoming lessons), we'll assume the ports are ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:7277")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5187"),"."))}d.isMDXComponent=!0}}]);