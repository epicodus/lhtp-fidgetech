"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48538],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7896),r=(a(2784),a(30876));const i={title:"\u270f\ufe0f 3.3.2.1 To Do List, Animal Shelter, and Inventory",id:"3321-to-do-list-animal-shelter-and-inventory",slug:"3321-to-do-list-animal-shelter-and-inventory",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/2a_classwork_to_do_list_animal_shelter_and_inventory.md"},o=void 0,l={unversionedId:"fidgetech-3-c-and-net/database-basics/3321-to-do-list-animal-shelter-and-inventory",id:"fidgetech-3-c-and-net/database-basics/3321-to-do-list-animal-shelter-and-inventory",title:"\u270f\ufe0f 3.3.2.1 To Do List, Animal Shelter, and Inventory",description:"Goal: Practice using a database while becoming more familiar with Entity. Focus on adding create and read functionality to your applications. If you have extra time, consider looking at tonight's lessons for adding update and delete functionality. We recommend using WWW SQL Designer to plan out tables and columns.",source:"@site/docs/fidgetech-3-c-and-net/database-basics/2a-classwork-to-do-list-animal-shelter-and-inventory.md",sourceDirName:"fidgetech-3-c-and-net/database-basics",slug:"/fidgetech-3-c-and-net/database-basics/3321-to-do-list-animal-shelter-and-inventory",permalink:"/fidgetech-3-c-and-net/database-basics/3321-to-do-list-animal-shelter-and-inventory",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"\u270f\ufe0f 3.3.2.1 To Do List, Animal Shelter, and Inventory",id:"3321-to-do-list-animal-shelter-and-inventory",slug:"3321-to-do-list-animal-shelter-and-inventory",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/2a_classwork_to_do_list_animal_shelter_and_inventory.md"},sidebar:"fidgetech-3-c-and-net",previous:{title:"\ud83d\udcd3 3.3.1.10 Further Exploration with Testing",permalink:"/fidgetech-3-c-and-net/database-basics/33110-further-exploration-with-testing"},next:{title:"\ud83d\udcd3 3.3.2.2 Update with EF Core",permalink:"/fidgetech-3-c-and-net/database-basics/3322-update-with-ef-core"}},s={},d=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"To Do List",id:"to-do-list",level:3},{value:"Animal Shelter",id:"animal-shelter",level:3},{value:"Inventory",id:"inventory",level:3},{value:"Further Exploration",id:"further-exploration",level:4},{value:"Peer/Instructor Code Review",id:"peerinstructor-code-review",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),": Practice using a database while becoming more familiar with Entity. Focus on adding create and read functionality to your applications. If you have extra time, consider looking at tonight's lessons for adding update and delete functionality. We recommend using ",(0,r.kt)("a",{parentName:"p",href:"http://ondras.zarovi.cz/sql/demo/"},"WWW SQL Designer")," to plan out tables and columns."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is Entity Framework Core?"),(0,r.kt)("li",{parentName:"ul"},"What is a database context?"),(0,r.kt)("li",{parentName:"ul"},"What is an entity?"),(0,r.kt)("li",{parentName:"ul"},"What is LINQ and how is it helpful?"),(0,r.kt)("li",{parentName:"ul"},"What is an HTML helper method? Name a few examples and how they can be used in a view.")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"to-do-list"},"To Do List"),(0,r.kt)("p",null,"Follow along with the lessons from the homework to integrate EF Core into a To Do List application."),(0,r.kt)("h3",{id:"animal-shelter"},"Animal Shelter"),(0,r.kt)("p",null,"Make a program for an animal shelter to track the animals in their facility based on animal type (such as cat or dog). Build out features that let a shelter worker:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add types of animals to the system. ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," should be a column on the ",(0,r.kt)("inlineCode",{parentName:"li"},"animals")," table. A type could be a cat, dog, bunny or any other animal."),(0,r.kt)("li",{parentName:"ul"},"Add an animal to the system. An animal should have a name, date of admittance, and breed. When it gets added to the system, it should be added as a particular type."),(0,r.kt)("li",{parentName:"ul"},"List animals by breed or type alphabetically."),(0,r.kt)("li",{parentName:"ul"},"List animals starting with the ones who have been in the shelter the longest.")),(0,r.kt)("h3",{id:"inventory"},"Inventory"),(0,r.kt)("p",null,"Make a website where users can inventory their collections. This collection could be anything from records to rocks to board games, depending on your interest. The application should have full create and read functionality."),(0,r.kt)("h4",{id:"further-exploration"},"Further Exploration"),(0,r.kt)("p",null,"If you complete the projects above with time to spare, tackle these additional features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Search()")," method in either the Inventory or Animal Shelter application. It should take the name of the animal or item as an argument and return any animals or items that match."),(0,r.kt)("li",{parentName:"ul"},"Let users choose what properties to search by. For instance, this could be type or age of animal in the animal shelter application or date acquired or keyword in the inventory application."),(0,r.kt)("li",{parentName:"ul"},"Continue on to tonight's homework and add update and delete functionality to your application.")),(0,r.kt)("h2",{id:"peerinstructor-code-review"},"Peer/Instructor Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application correctly integrates EF Core and LINQ."),(0,r.kt)("li",{parentName:"ul"},"Logic is easy to understand."),(0,r.kt)("li",{parentName:"ul"},"Database table and column names follow proper naming conventions."),(0,r.kt)("li",{parentName:"ul"},"Application works as expected.")))}p.isMDXComponent=!0}}]);