"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[65891],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7896),o=(n(2784),n(30876));const r={title:"\ud83d\udcd3 3.2.1.6 Lists and Redirects in a Controller",id:"3216-lists-and-redirects-in-a-controller",slug:"3216-lists-and-redirects-in-a-controller",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/1e_lists_and_redirects_in_a_controller.md"},a=void 0,l={unversionedId:"fidgetech-3-c-and-net/basic-web-applications/3216-lists-and-redirects-in-a-controller",id:"fidgetech-3-c-and-net/basic-web-applications/3216-lists-and-redirects-in-a-controller",title:"\ud83d\udcd3 3.2.1.6 Lists and Redirects in a Controller",description:"We can display a single item in our To Do List but that's not very helpful in itself. After all, this is a list of things to do, not a single item.",source:"@site/docs/fidgetech-3-c-and-net/basic-web-applications/1e-lists-and-redirects-in-a-controller.md",sourceDirName:"fidgetech-3-c-and-net/basic-web-applications",slug:"/fidgetech-3-c-and-net/basic-web-applications/3216-lists-and-redirects-in-a-controller",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3216-lists-and-redirects-in-a-controller",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"\ud83d\udcd3 3.2.1.6 Lists and Redirects in a Controller",id:"3216-lists-and-redirects-in-a-controller",slug:"3216-lists-and-redirects-in-a-controller",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/1e_lists_and_redirects_in_a_controller.md"},sidebar:"fidgetech-3-c-and-net",previous:{title:"\ud83d\udcd3 3.2.1.5 Request-Response Loop and HTTP Methods with ASP.NET Core MVC",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3215-request-response-loop-and-http-methods-with-aspnet-core-mvc"},next:{title:"\ud83d\udcd3 3.2.1.7 Loops and Conditionals with Razor",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3217-loops-and-conditionals-with-razor"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We can display a single item in our To Do List but that's not very helpful in itself. After all, this is a ",(0,o.kt)("em",{parentName:"p"},"list")," of things to do, not a single item."),(0,o.kt)("p",null,"In this lesson, we'll update our controller to return a list of to dos. In the process, we'll also cover using redirects to DRY up our code. In the next lesson, we'll update our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.cshtml")," view to display our list."),(0,o.kt)("p",null,"Let's change our controller code to pass in multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s to the view, not just a single ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),". Note that this will not compile until we update our views, in the next lesson:"),(0,o.kt)("div",{class:"filename"},"HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nusing System.Collections.Generic;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [HttpGet("/")]\n    public ActionResult Index()\n    {\n\n      List<Item> allItems = Item.GetAll();\n      return View(allItems);\n    }\n\n    ...\n\n    [HttpPost("/items")]\n    public ActionResult Create(string description)\n    {\n      Item myItem = new Item(description);\n      return RedirectToAction("Index");\n    }\n  }\n}\n')),(0,o.kt)("p",null,"First, we need to update our ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," route method so that the route has access to all ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s. We'll use the static ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method to store a ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s in the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"allItems"),". We then pass ",(0,o.kt)("inlineCode",{parentName:"p"},"allItems")," to the view."),(0,o.kt)("p",null,"Note that we also need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"using System.Collections.Generic;")," to our file now that we've added a ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," to our controller."),(0,o.kt)("p",null,"We also make an update to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Create()")," route method as well. As we discussed in the last lesson, this route only needs to create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),". It doesn't care about updating a view. While we could add ",(0,o.kt)("inlineCode",{parentName:"p"},"List<Item> allItems = Item.GetAll();")," to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Create()")," method, it wouldn't be very DRY."),(0,o.kt)("p",null,"Instead, we can use a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"RedirectToAction()")," to redirect to another route. ",(0,o.kt)("inlineCode",{parentName:"p"},"RedirectToAction()")," takes a route method as an argument. ",(0,o.kt)("inlineCode",{parentName:"p"},'RedirectToAction("Index");')," tells the server to invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," route after the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create()")," route has been invoked. This means we don't have to repeat the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()"),". We can just tell ",(0,o.kt)("inlineCode",{parentName:"p"},"Create()")," to redirect to ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," instead."),(0,o.kt)("p",null,"In the next lesson, we'll update our view to display a ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s with loops and conditionals."))}u.isMDXComponent=!0}}]);