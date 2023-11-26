"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[97908],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return n?i.createElement(h,r(r({ref:t},m),{},{components:n})):i.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7896),a=(n(2784),n(30876));const o={title:"\ud83d\udcd3 3.2.2.6 Applying RESTful Routing",id:"3226-applying-restful-routing",slug:"3226-applying-restful-routing",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/2f_applying_restful_routing.md"},r=void 0,l={unversionedId:"fidgetech-3-c-and-net/basic-web-applications/3226-applying-restful-routing",id:"fidgetech-3-c-and-net/basic-web-applications/3226-applying-restful-routing",title:"\ud83d\udcd3 3.2.2.6 Applying RESTful Routing",description:"In the last lesson, we covered RESTful principles. In this lesson, we'll continue developing our application following RESTful routing best practices. First, we'll update our existing CreateForm() route to follow RESTful convention. Then we'll add a Show() route to display a detail page for individual Items.",source:"@site/docs/fidgetech-3-c-and-net/basic-web-applications/2f-applying-restful-routing.md",sourceDirName:"fidgetech-3-c-and-net/basic-web-applications",slug:"/fidgetech-3-c-and-net/basic-web-applications/3226-applying-restful-routing",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3226-applying-restful-routing",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"\ud83d\udcd3 3.2.2.6 Applying RESTful Routing",id:"3226-applying-restful-routing",slug:"3226-applying-restful-routing",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/2f_applying_restful_routing.md"},sidebar:"fidgetech-3-c-and-net",previous:{title:"\ud83d\udcd3 3.2.2.5 Introduction to RESTful Routing",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3225-introduction-to-restful-routing"},next:{title:"\u270f\ufe0f 3.2.3.1 To Do List, Places You've Been, Packer Tracker, Tamagotchi",permalink:"/fidgetech-3-c-and-net/basic-web-applications/3231-to-do-list-places-you've-been-packer-tracker-tamagotchi"}},p={},s=[{value:"<code>New()</code> Route",id:"new-route",level:2},{value:"Item Detail Page",id:"item-detail-page",level:2},{value:"<em>The RESTful <code>Show()</code> Route</em>",id:"the-restful-show-route",level:4},{value:"Navigating to the Route",id:"navigating-to-the-route",level:3},{value:"Route Method",id:"route-method",level:3},{value:"Dynamic Routing",id:"dynamic-routing",level:3},{value:"Note on Dynamic Route Segment Names",id:"note-on-dynamic-route-segment-names",level:4},{value:"Detail View",id:"detail-view",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we covered RESTful principles. In this lesson, we'll continue developing our application following RESTful routing best practices. First, we'll update our existing ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateForm()")," route to follow RESTful convention. Then we'll add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Show()")," route to display a detail page for individual ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s."),(0,a.kt)("h2",{id:"new-route"},(0,a.kt)("inlineCode",{parentName:"h2"},"New()")," Route"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Index()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Create()")," routes in our ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController")," already match RESTful convention, as we can see by comparing our controller code to the table in the previous lesson. However, ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateForm()")," does not. It currently looks like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [HttpGet("/items/new")]\n  public ActionResult CreateForm()\n  {\n    return View();\n  }\n\n...\n')),(0,a.kt)("p",null,"Let's also compare it to the table in the last lesson:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Route Name"),": This method is called ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateForm()"),". In order to adhere to RESTful convention, it should be named ",(0,a.kt)("inlineCode",{parentName:"p"},"New()"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"URL Path"),": The path is ",(0,a.kt)("inlineCode",{parentName:"p"},'"items/new"'),". This already follows RESTful convention because it lists the plural model name (",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s), alongside ",(0,a.kt)("inlineCode",{parentName:"p"},"/new"),", which indicates to others that this route contains the necessary materials (a form) to create a new instance of the model (",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"HTTP Method"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpGet()")," is used in the route decorator, which properly signifies that this route handles GET requests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Purpose"),": Our route returns a view with a form to create a new instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," model."))),(0,a.kt)("p",null,"The only thing we need to change is the route name. We'll rename ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateForm()")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"New()"),":"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [HttpGet("/items/new")]\n  public ActionResult New()\n  {\n    return View();\n  }\n\n...\n')),(0,a.kt)("p",null,"Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"View()")," method will automatically look for a ",(0,a.kt)("inlineCode",{parentName:"p"},".cshtml")," view with the same name, we must also rename our existing ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateForm.cshtml")," file to ",(0,a.kt)("inlineCode",{parentName:"p"},"New.cshtml"),":"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/New.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    <form action="/items" method="post">\n      <label for="description">Add a new item</label>\n      <input id="description" name="description" type="text">\n      <button type="submit">Submit</button>\n    </form>\n  </body>\n</html>\n')),(0,a.kt)("h2",{id:"item-detail-page"},"Item Detail Page"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"the-restful-show-route"},(0,a.kt)("em",{parentName:"h4"},"The RESTful ",(0,a.kt)("inlineCode",{parentName:"em"},"Show()")," Route")),(0,a.kt)("p",null,"Now let's add a detail page so users can click an individual ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Items/Index.cshtml")," view to navigate to a page displaying details about that ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"."),(0,a.kt)("h3",{id:"navigating-to-the-route"},"Navigating to the Route"),(0,a.kt)("p",null,"First, we'll ensure users have a way to access this page. Let's update our existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Items/Index.cshtml")," view so each ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," in our list is a link to that ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"'s detail page:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/Index.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"...\n\n  <li><a href='/items/@item.Id'>@item.Description</a></li>\n\n...\n")),(0,a.kt)("p",null,"Here we're creating a link. Since this link needs to work for all ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s, we use the Razor statement ",(0,a.kt)("inlineCode",{parentName:"p"},"@item.Id")," directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," tag. If an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," has an ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"565"),", the link will read ",(0,a.kt)("inlineCode",{parentName:"p"},"/items/565"),", and so on."),(0,a.kt)("p",null,"The entire updated file looks like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/Index.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    @using ToDoList.Models;\n\n    <h1>To Do List</h1>\n    @if (Model.Count == 0)\n    {\n      <p>There are no items in the list.</p>\n    }\n    <ul>\n      @foreach (Item item in Model)\n      {\n        <li><a href=\'/items/@item.Id\'>@item.Description</a></li>\n      }\n    </ul>\n\n    <a href="/items/new">Add a new item.</a>\n\n    <form action="/items/delete" method="post">\n      <button type="submit" name="button">Clear All Items</button>\n    </form>\n  </body>\n</html>\n')),(0,a.kt)("h3",{id:"route-method"},"Route Method"),(0,a.kt)("p",null,"Now we need to create our route to handle these requests. Let's plan how we'll make our new route RESTful:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Route Name"),": It will be called ",(0,a.kt)("inlineCode",{parentName:"p"},"Show()"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"URL Path"),": The path should be ",(0,a.kt)("inlineCode",{parentName:"p"},'"items/{id}"'),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"{id}")," is a placeholder for the specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," we're currently looking at. We'll discuss this further in a moment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"HTTP Method"),": The request to view the detail page will be a GET request, so it will  use ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpGet()")," in its route decorator.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Purpose"),": It will be responsible for rendering a detail page for a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"."))),(0,a.kt)("p",null,"Now that we've created a plan, we're ready to add the code for our route."),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [HttpGet("/items/{id}")]\n    public ActionResult Show(int id)\n    {\n      Item foundItem = Item.Find(id);\n      return View(foundItem);\n    }\n\n...\n')),(0,a.kt)("p",null,"We have some new syntax: curly braces in the URL path in our route decorator. Our route is now utilizing dynamic routing."),(0,a.kt)("h3",{id:"dynamic-routing"},"Dynamic Routing"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dynamic Routing")," refers to routes and their URL paths that can dynamically ",(0,a.kt)("em",{parentName:"p"},"change")," depending on circumstances. A common example is an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," like in the example above."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"{id}")," portion of the path is a placeholder. Remember, this route will be invoked for viewing ",(0,a.kt)("em",{parentName:"p"},"any")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"'s detail page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Our link in ",(0,a.kt)("inlineCode",{parentName:"p"},"Index.cshtml")," looks like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"<a href='/items/@item.Id'>"),". For example, if we click on an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," with an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of 42, the path will be ",(0,a.kt)("inlineCode",{parentName:"p"},'"/items/42"'),". When that occurs, ",(0,a.kt)("inlineCode",{parentName:"p"},"{id}")," will represent ",(0,a.kt)("inlineCode",{parentName:"p"},"42"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is passed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Show()")," route method as a parameter. The method takes an ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," argument named ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", which is the same ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," from the path.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once ",(0,a.kt)("inlineCode",{parentName:"p"},"Show()")," has access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as a parameter, it can pass this value into ",(0,a.kt)("inlineCode",{parentName:"p"},"Find()")," to locate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," matching this ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The route can then pass this entire ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," object into ",(0,a.kt)("inlineCode",{parentName:"p"},"View()"),", so the corresponding view may access and render its information."))),(0,a.kt)("h4",{id:"note-on-dynamic-route-segment-names"},"Note on Dynamic Route Segment Names"),(0,a.kt)("p",null,"Note that the term ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is nothing magical here. We could rewrite the route like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},' [HttpGet("/items/{aReallyExcitingOneOfAKindIdNumber}")]\n public ActionResult Show(int aReallyExcitingOneOfAKindIdNumber)\n {\n   Item foundItem = Item.Find(aReallyExcitingOneOfAKindIdNumber);\n   return View(foundItem);\n }\n')),(0,a.kt)("p",null,"This would still work as long as the named segment in the URL path and parameter provided to the route match. However, ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is standard and our variable names should always be concise and descriptive."),(0,a.kt)("h3",{id:"detail-view"},"Detail View"),(0,a.kt)("p",null,"Because our new dynamic route returns ",(0,a.kt)("inlineCode",{parentName:"p"},"View(foundItem)"),", it will look for a view file with the same name as our route method. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"Show()")," method exists on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController"),", so we'll create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Show.cshtml")," view file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Views/Items")," directory with the following code:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/Show.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    <h1>To Do List Item Details: </h1>\n\n    <h2>@Model.Description</h2>\n\n    <a href=\'/items/new\'>Add another item</a>\n    <a href=\'/items\'>View all items</a>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"When we run our application now, we can populate it with several ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s and click an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," from the ",(0,a.kt)("em",{parentName:"p"},"/items")," page to navigate to a detail page with that item's specific information."),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/6_applying_restful_routing"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List: 6","_","applying","_","restful","_","routing"))))}u.isMDXComponent=!0}}]);