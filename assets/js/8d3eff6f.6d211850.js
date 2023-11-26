"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[40325],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,u=h["".concat(s,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const o={title:"\ud83d\udcd3 1.2.2.8 Understanding Web APIs: Interfaces (Object Types) and Inheritance",id:"1228-understanding-web-apis-interfaces-object-types-and-inheritance",slug:"1228-understanding-web-apis-interfaces-object-types-and-inheritance",hide_table_of_contents:!0,sidebar_position:46,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/2h_understanding_web_apis_inheritance_object_types.md"},r=void 0,l={unversionedId:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1228-understanding-web-apis-interfaces-object-types-and-inheritance",id:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1228-understanding-web-apis-interfaces-object-types-and-inheritance",title:"\ud83d\udcd3 1.2.2.8 Understanding Web APIs: Interfaces (Object Types) and Inheritance",description:"In the last lesson, we learned about HTML DOM elements. These elements are objects and they have properties that developers can access to get and set DOM element data. Things like:",source:"@site/docs/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/2h-understanding-web-apis-inheritance-object-types.md",sourceDirName:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers",slug:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1228-understanding-web-apis-interfaces-object-types-and-inheritance",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1228-understanding-web-apis-interfaces-object-types-and-inheritance",draft:!1,tags:[],version:"current",sidebarPosition:46,frontMatter:{title:"\ud83d\udcd3 1.2.2.8 Understanding Web APIs: Interfaces (Object Types) and Inheritance",id:"1228-understanding-web-apis-interfaces-object-types-and-inheritance",slug:"1228-understanding-web-apis-interfaces-object-types-and-inheritance",hide_table_of_contents:!0,sidebar_position:46,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/2h_understanding_web_apis_inheritance_object_types.md"},sidebar:"fidgetech-1-introduction-to-programming",previous:{title:"\ud83d\udcd3 1.2.2.7 Accessing HTML Element Attributes and Properties in the DOM",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1227-accessing-html-element-attributes-and-properties-in-the-dom"},next:{title:"\u270f\ufe0f 1.2.2.9 Practice: Accessing HTML Element Attributes and Properties in the DOM",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1229-practice-accessing-html-element-attributes-and-properties-in-the-dom"}},s={},p=[{value:"Web API Interfaces (Object Types)",id:"web-api-interfaces-object-types",level:2},{value:"Object Types versus Actual Objects",id:"object-types-versus-actual-objects",level:3},{value:"Getting the Object Type of HTML DOM Elements",id:"getting-the-object-type-of-html-dom-elements",level:3},{value:"Other DOM Element Object Types",id:"other-dom-element-object-types",level:3},{value:"Sharing Functionality through Inheritance",id:"sharing-functionality-through-inheritance",level:2},{value:"The Implications of Inheritance",id:"the-implications-of-inheritance",level:3},{value:"Takeaways",id:"takeaways",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we learned about HTML DOM elements. These elements are objects and they have properties that developers can access to get and set DOM element data. Things like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Getting the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute of a DOM element."),(0,i.kt)("li",{parentName:"ul"},"Adding a brand new attribute to a DOM element."),(0,i.kt)("li",{parentName:"ul"},"Setting the text of a DOM element, like for heading or paragraph elements."),(0,i.kt)("li",{parentName:"ul"},"Setting inline styles of a DOM element with the ",(0,i.kt)("inlineCode",{parentName:"li"},"style")," attribute.")),(0,i.kt)("p",null,'In terms of Web APIs, these HTML element objects are called "interfaces". If you remember, Web API ',(0,i.kt)("strong",{parentName:"p"},"interfaces")," are simply different types of objects. In this lesson, we'll learn how to find the name of the Web API interface for the HTML DOM element that we're working with. Why bother? Well, when we know the name of the Web API interface we're working with, we can use it to access the right MDN documentation to learn more about it."),(0,i.kt)("p",null,"We'll also learn how interfaces share functionality with each other through a mechanism called ",(0,i.kt)("strong",{parentName:"p"},"inheritance"),". Inheritance is a mechanism that many programming languages (like JavaScript, C# and Ruby!) use to share functionality between two objects. We won't get too deep in this, just enough to understand all of the Web API interfaces that provide functionality to the DOM elements that we work with."),(0,i.kt)("p",null,'As you work through this lesson, keep in mind the car analogy! In these lessons, we\'re "looking under the hood" of browser Web APIs to understand more deeply how these technologies are structured. ',(0,i.kt)("strong",{parentName:"p"},"You won't be required to demonstrate an understanding of this information on your independent project"),", but it will improve your resourcefulness as a developer and it is crucial to your long term growth."),(0,i.kt)("h2",{id:"web-api-interfaces-object-types"},"Web API Interfaces (Object Types)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"For Web APIs, an ",(0,i.kt)("strong",{parentName:"p"},"interface")," is a package of functionality that the browser makes available to developers in order for them to use a browser structure or tool in their code. Specifically for Web APIs, interfaces are always objects. (Note that this isn't true for all APIs.) To distinguish between different interfaces, they have different names. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Window")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Document")," are two interfaces. "),(0,i.kt)("p",null,'It\'s less common to use the terminology "interface" and way more common to call ',(0,i.kt)("inlineCode",{parentName:"p"},"Window")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Document"),' "objects", because they are in fact objects! In a previous lesson, we made clear that we\'ll favor calling all Web API interfaces "objects" in LearnHowToProgram.com. '),(0,i.kt)("p",null,"However, there's an important technical distinction to learn about objects: there's the actual object with data that's saved to a variable, and then there's the ",(0,i.kt)("strong",{parentName:"p"},"type")," of the object, or ",(0,i.kt)("strong",{parentName:"p"},"object type"),". Let's take a moment to understand the difference between an object type and an actual object."),(0,i.kt)("h3",{id:"object-types-versus-actual-objects"},"Object Types versus Actual Objects"),(0,i.kt)("p",null,"Let's look at an example: ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," is an actual object with data saved in a variable, and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"},(0,i.kt)("inlineCode",{parentName:"a"},"Window"))," with a capital ",(0,i.kt)("inlineCode",{parentName:"p"},"W")," is the object type. "),(0,i.kt)("p",null,"Notably, we can't access the object type ",(0,i.kt)("inlineCode",{parentName:"p"},"Window")," (with a capital ",(0,i.kt)("inlineCode",{parentName:"p"},"W"),") to use its properties. Check out the image below that's an example of this using the DevTools console. In the first input we access the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object and get the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"innerHeight")," property. This works as expected because we're using the actual object. In the second input, we enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Window.innerHeight")," and get ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". This doesn't work because we're referencing the object type."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/window-vs-Window.png",alt:"This image shows that we can't access `Window` directly by showing how `undefined` is returned when we enter `Window.innerHeight` into the DevTools console."})),(0,i.kt)("p",null,"We can think of an object type like a recipe to make cookies \u2014 it defines exactly what a cookie contains, but it isn't the cookie itself. On the other hand, the actual object with data corresponds to the actual cookie that we can eat. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To distinguish between object types and variables that contain objects, we use different casing:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lowerCamelCase for variables that are set to actual objects with data, like ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"document"),". lowerCamelCase starts with a lowercase letter, and if the variable name is more than one word, we remove all spaces and capitalize the first letter of each subsequent word."),(0,i.kt)("li",{parentName:"ul"},"UpperCamelCase for object types like ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"},(0,i.kt)("inlineCode",{parentName:"a"},"Window"))," and ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document"},(0,i.kt)("inlineCode",{parentName:"a"},"Document")),". ")),(0,i.kt)("h3",{id:"getting-the-object-type-of-html-dom-elements"},"Getting the Object Type of HTML DOM Elements"),(0,i.kt)("p",null,"So what interfaces (object types) are we working with when we access HTML DOM elements? Let's find out by working through an example. In the last lesson, we used this code to get the H1 DOM element and save it to a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"h1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1");\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"h1")," variable represents an actual object \u2014 the Heading element in the DOM. To find out the object type, we need to do the following in the DevTools console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> let h1 = document.querySelector(\"h1\");\n> Object.prototype.toString.call(h1);   // we pass in h1 as the argument to .call()\n'[object HTMLHeadingElement]'\n")),(0,i.kt)("p",null,"In the above example, when we pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"h1")," variable to the ",(0,i.kt)("inlineCode",{parentName:"p"},".call()")," method, we get a return value of ",(0,i.kt)("inlineCode",{parentName:"p"},"[object HTMLHeadingElement]"),". This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"h1")," variable is a specific type of object called ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),". If we look on MDN, we can see that ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"HTMLHeadingElement")," object type")," represents heading elements ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," through ",(0,i.kt)("inlineCode",{parentName:"p"},"<h6>")," in the DOM."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString.call();")," is a way to get the exact type of an object, and it offers more specific information than using the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof")," operator on objects. If we used the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof")," operator, we'd just get ",(0,i.kt)("inlineCode",{parentName:"p"},"'object'")," returned to us, which isn't helpful! "),(0,i.kt)("p",null,"Note that we won't spend time understanding how ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString.call();")," works because it's not important to be successful with this section's material. However, we can still use this code when we want to check the exact type of an object. "),(0,i.kt)("h3",{id:"other-dom-element-object-types"},"Other DOM Element Object Types"),(0,i.kt)("p",null,"There's a DOM element object type for every possible HTML element. If we had an image element in our webpage, we'd be working with an object of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLImageElement"),". Can you guess the name of the DOM element object for paragraphs? The correct answer is ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLParagraphElement"),". How about the name of the DOM element object for an anchor element? The correct answer is ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLAnchorElement"),". "),(0,i.kt)("p",null,"To see a complete list of all HTML DOM element objects that represent specific HTML elements, like ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLParagraphElement"),", visit this link: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,i.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API#html_element_interfaces_2"},"HTML Element Interfaces"))," ")),(0,i.kt)("h2",{id:"sharing-functionality-through-inheritance"},"Sharing Functionality through Inheritance"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"It's very common for Web API interfaces to share functionality with each other through a mechanism called ",(0,i.kt)("strong",{parentName:"p"},"inheritance"),". Inheritance is a more advanced subject that we'll learn more about when we spend a course section on object-oriented JavaScript. For now, understand that inheritance is a mechanism through which objects can share the functionality of other objects. Let's revisit our ",(0,i.kt)("inlineCode",{parentName:"p"},"h1")," element as an example to better understand this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1");\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"h1")," variable contains an object of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),". Well, ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," ",(0,i.kt)("strong",{parentName:"p"},"inherits")," functionality from many other objects. In fact, this is true for all DOM element objects, like ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLImageElement"),". "),(0,i.kt)("p",null,"Check out the following picture from MDN's docs on the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),". In the image we can see a diagram that shows the other object types (all of which are Web APIs) that ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," inherits from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},(0,i.kt)("inlineCode",{parentName:"a"},"HTMLElement"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element"},(0,i.kt)("inlineCode",{parentName:"a"},"Element"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"},(0,i.kt)("inlineCode",{parentName:"a"},"EventTarget")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/HTMLHeadingElement-inheritance-on-MDN.png",alt:"This image shows the objects that the `HTMLHeadingElement` object inherits from"})),(0,i.kt)("p",null,"This diagram is describing a ",(0,i.kt)("strong",{parentName:"p"},"chain of inheritance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", which inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),", which inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"Node"),", which inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"EventTarget"),". This means that all of the properties that belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement")," object also belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),". And, all of the properties that belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")," object also belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement")," object, which also belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),". "),(0,i.kt)("p",null,"Inheritance between object types is similar to how every human inherits genes from their parents and grandparents. Your genes are uniquely yours (like with the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),"), but you also share genes with your predecessors (",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),", and so on). "),(0,i.kt)("p",null,"What's the point of inheritance? It allows coding languages and browser structures to be more organized and flexible: instead of just using one object type, we use many object types and share functionality between them. Notably, ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Node"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"EventTarget")," because all of these object types together describe different information and functionality related to HTML DOM elements in general: things like the element's tag name, attributes, and inner text."),(0,i.kt)("p",null,"We don't need to worry about understanding exactly how inheritance works now, we just need to accept that the object type that we're working with (like ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),") has access to functionality that is originally defined in other object types. "),(0,i.kt)("h3",{id:"the-implications-of-inheritance"},"The Implications of Inheritance"),(0,i.kt)("p",null,"The important implication of inheritance for us is that functionality like the ",(0,i.kt)("inlineCode",{parentName:"p"},"tagName")," property or the ",(0,i.kt)("inlineCode",{parentName:"p"},"removeAttribute()")," method that we might call on our ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," element could be defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," object or any of the objects that it inherits from. This can be confusing at first, but more importantly, it can make it harder to navigate MDN documentation to find information about an HTML DOM element that you are working with."),(0,i.kt)("p",null,"Later in this course section we'll go over practical tips for researching about DOM elements and events. Right now, the goal of this lesson is to simply build awareness about the Web API interfaces (object types) that provide the functionality for the various DOM elements."),(0,i.kt)("p",null,"Let's review all of the properties and methods we learned about in the last lesson and see exactly which Web API interface each one belongs to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"className")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Element")," object type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Element")," object type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"style")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTMLElement")," object type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"innerText")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTMLElement")," object type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tagName")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Element")," object type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getAttribute()")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Element")," object type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setAttribute()")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Element")," object type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasAttribute()")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Element")," object type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removeAttribute()")," belongs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Element")," object type.")),(0,i.kt)("p",null,'Note that when we say a property "belongs to" an object type, we mean that the property was originally defined in that object type. As we can see in this example, when we\'re working with our ',(0,i.kt)("inlineCode",{parentName:"p"},"h1")," DOM element of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),", we're able to access properties from the objects it inherits from, in this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// h1 variable is of the type HTMLHeadingElement\n> let h1 = document.querySelector("h1"); \n// tagName property is inherited from Element  \n> h1.tagName;                              \n"H1"\n// innerText property is inherited from HTMLElement\n> h1.innerText;                            \n"Best Chocolate Chip Cookies"\n')),(0,i.kt)("p",null,"Notice how we don't reference ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," to access it directly in the above examples, or ",(0,i.kt)("inlineCode",{parentName:"p"},"EventTarget"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Node"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement")," for that matter. That's because they are object types."),(0,i.kt)("p",null,"Instead, we use the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," methods (",(0,i.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"document.getElementById()"),") to access HTML DOM elements, and we let our browsers handle returning the correct object to us. This is unlike the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," variables that we directly reference in our code to access their properties, like with ",(0,i.kt)("inlineCode",{parentName:"p"},"window.innerHeight")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,i.kt)("h2",{id:"takeaways"},"Takeaways"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We don't need to remember all of the names of the object types in this lesson or worry about referencing MDN documentation now. ",(0,i.kt)("strong",{parentName:"p"},"The goal of this lesson is to simply build awareness about the Web API interfaces (object types) that provide the functionality for the various DOM elements.")," Here are the important concepts to take away:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Web API interfaces are just different types of objects."),(0,i.kt)("li",{parentName:"ul"},"The object type is different than the actual object. The type is like the recipe for an object, describing the available properties and methods. The actual object is like the food that's made from the recipe, with the actual data and values.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Object types are written un UpperCamelCase."),(0,i.kt)("li",{parentName:"ul"},"Actual objects are saved in variables which are written in lowerCamelCase."))),(0,i.kt)("li",{parentName:"ul"},"We can call on the variable containing the actual object to access its data (properties) and call its methods: ",(0,i.kt)("inlineCode",{parentName:"li"},"window.innerHeight"),". We can't call on an object type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Window.innerHeight"),". If we do that, we'll get ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"."),(0,i.kt)("li",{parentName:"ul"},"We can call ",(0,i.kt)("inlineCode",{parentName:"li"},"Object.prototype.toString.call();")," to find the exact type of an object. This method takes one argument, the variable containing the object that you want to find the exact type of. Doing so is optional and for exploratory purposes if you want to research for documentation online for a specific DOM element."),(0,i.kt)("li",{parentName:"ul"},"Inheritance is the mechanism through which objects share functionality with each other. For example, the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTMLHeadingElement")," object shares functionality with four other objects: ",(0,i.kt)("inlineCode",{parentName:"li"},"HTMLElement"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Element"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Node"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"EventTarget"),". Each object type provides different functionality related to HTML elements in the DOM: accessing attributes, data, adding event handling, and more. ")),(0,i.kt)("p",null,"In the next lesson, we'll get a chance to practice finding the exact type of the DOM elements we are working with, and access/manipulate DOM elements."))}d.isMDXComponent=!0}}]);